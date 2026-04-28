const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  254: {
    verse_id: 261,
    analysis_id: 619,
    full_translation: "O les croyants ! Dépensez de ce que Nous vous avons attribué avant que vienne un jour où il n'y aura ni commerce, ni amitié, ni intercession. Et ce sont les infidèles qui sont les vrais injustes.",
    translation_arab: "Ô vous qui avez cru ! Dépensez de ce dont Nous vous avons pourvus, avant qu'arrive un Jour où il n'y aura ni transaction, ni amitié intime, ni intercession. Ce sont les mécréants qui sont les injustes.",
    translation_explanation: `§DEMARCHE§
Le verset 2:254 est une exhortation à la dépense dans la voie de Dieu, adressée directement aux croyants, avec une justification eschatologique : avant que vienne le Jour où toutes les ressources humaines habituelles — l'échange commercial, l'amitié profonde, l'intercession — seront inutiles. La démarche traductive vise à rendre avec précision les trois termes clés de ce Jour eschatologique (bay', khullah, shafa'a) en restant fidèle à leur étymologie sans recourir à un vocabulaire théologique chrétien.

Pour "ya ayyuha lladhina amanuu" (Ô vous qui avez cru), la formule d'apostrophe coranique est rendue par "Ô vous qui avez cru" — l'accompli amanuu (ils ont cru) désigne les croyants comme ceux qui ont accompli l'acte de foi, non comme appartenant à une catégorie institutionnelle. Le passé composé en français ("avez cru") rend cet accompli avec ses implications présentes : vous qui êtes entrés dans la foi, qui avez fait cet acte de confiance.

Pour "anfiqu min ma razaqnakum" (dépensez de ce dont Nous vous avons pourvus), la Form IV anfaqa est le verbe technique de la dépense dans la voie de Dieu. Min (de, parmi) indique qu'il s'agit d'une partie des biens, non de la totalité. Ma razaqnakum (ce dont Nous vous avons pourvus) : razaqa est accompli 1PP (Nous avons pourvu) — c'est Dieu qui est le vrai pourvoyeur des biens. "Pourvus" pour razaqa rend mieux que "attribués" ou "accordés" car rizq désigne la subsistance continue, la provision nécessaire à la vie.

Pour "min qabli an ya'tiya yawmun" (avant qu'arrive un Jour), le subjonctif ya'tiya après an indique une action future et incertaine dans sa date précise — "avant qu'arrive" en français rend cette incertitude temporelle. Le yawm ici est le Jour du Jugement dernier — son indéfinition (yawmun sans article) en fait un Jour d'une nature radicalement différente des jours ordinaires.

Pour la triple négation "la bay'un fihi wa-la khullatun wa-la shafa'atun" (ni transaction, ni amitié intime, ni intercession), les trois termes décrivent les trois ressources humaines principales pour modifier son sort : la transaction commerciale (payer pour obtenir), l'amitié intime (compter sur des liens profonds), et l'intercession (avoir quelqu'un qui plaide pour soi). Aucune de ces trois ressources ne sera disponible ce Jour-là. "Transaction" pour bay', "amitié intime" pour khullah, "intercession" pour shafa'a sont les traductions qui restent proches de l'étymologie.

Pour "wa-l-kafiruuna humu l-zalimun" (ce sont les mécréants qui sont les injustes), la structure al-kafiruuna humu l-zalimun est une proposition prédicative à double détermination (eux = les injustes) qui exprime une identification exclusive : les mécréants sont précisément les injustes au sens fort. "Injustes" pour zalimun rend zulm = mise des choses hors de leur place, oppression envers soi-même et envers Dieu.
§JUSTIFICATION§
"Vous qui avez cru" pour lladhina amanuu : '-m-n Form IV amana = accorder sa confiance à, faire confiance à, croire ; lladhina amanuu = ceux qui ont accordé leur foi (participe-pronom relatif + accompli = ceux qui ont accompli l'acte de foi). "Dépensez" pour anfiqu : n-f-q Form IV anfaqa = faire sortir de ses biens, mettre en circulation, dépenser activement ; impératif pluriel anfiqu = dépensez. "De ce dont Nous vous avons pourvus" pour min ma razaqnakum : r-z-q razaqa = pourvoir en subsistance, accorder les moyens de vie ; razaqnakum = Nous vous avons pourvus (1PP accompli). "Avant qu'arrive un Jour" pour min qabli an ya'tiya yawmun : qablu = avant ; an + subjonctif ya'tiya = avant que vienne (incertitude sur la date) ; yawmun indéfini = un Jour (d'une nature particulière). "Transaction" pour bay' : b-y-' bay' = la vente, l'achat, la transaction bilatérale — l'acte même d'échange commercial. "Amitié intime" pour khullah : kh-l-l khullah = l'amitié profonde qui pénètre jusqu'au coeur, le lien d'âme, l'amitié la plus intime (de khalla = pénétrer, traverser). "Intercession" pour shafa'a : sh-f-' shafa'a = l'acte de s'ajouter à quelqu'un pour peser en sa faveur, d'être deux avec quelqu'un pour intercéder (de shaf' = pair, le fait d'être deux). "Mécréants" pour kafiruuna : k-f-r kafara = couvrir, dissimuler, nier ; kafiruuna = ceux qui couvrent la vérité, qui nient. "Injustes" pour zalimun : z-l-m zulm = mettre les choses hors de leur place juste, faire du tort, opprimer ; zalimun = oppresseurs, injustes.
§CRITIQUE§
La traduction de Hamidullah présente ce verset ainsi : "O les croyants ! Dépensez de ce que Nous vous avons attribué avant que vienne un jour où il n'y aura ni commerce, ni amitié, ni intercession. Et ce sont les infidèles qui sont les vrais injustes."

Plusieurs observations critiques méritent d'être formulées. Premièrement, "de ce que Nous vous avons attribué" pour min ma razaqnakum : "attribué" ne rend pas bien le sens de rizq qui est une provision de subsistance continue et vitale, pas une simple attribution administrative. Notre "de ce dont Nous vous avons pourvus" est plus fidèle à la dimension de provision nécessaire à la vie que porte la racine r-z-q. Deuxièmement, "commerce" pour bay' est correct mais moins précis que "transaction" — bay' désigne spécifiquement l'acte bilatéral d'échange (vente-achat), pas le commerce comme activité générale. "Transaction" rend mieux le caractère d'acte ponctuel et bilatéral. Troisièmement, "amitié" pour khullah perd la nuance cruciale de profondeur et d'intimité — la khullah est l'amitié la plus profonde, celle qui pénètre l'être (comme Ibrahim appelé khalil Allah = l'ami intime de Dieu). Notre "amitié intime" rend mieux cette profondeur distinctive. Quatrièmement, "infidèles" pour kafiruuna est un terme d'origine latine (infidelis = celui qui n'a pas la foi) qui charge le mot d'une connotation chrétienne. Notre "mécréants" (ou "ceux qui nient") est plus neutre et plus proche de kfr (couvrir, nier). Cinquièmement, "les vrais injustes" pour l-zalimun : l'ajout de "vrais" par Hamidullah pour rendre l'emphase est une bonne solution — notre traduction sans "vrais" mais avec la structure identificatrice "ce sont... qui sont" rend également l'emphase par la syntaxe.`,
    segments: [
      { position: 1, text_arab: "يَـٰٓأَيُّهَا", translation: "Ô vous", phonetic: "ya ayyuha", grammar_type: "particle", is_particle: true },
      { position: 2, text_arab: "ٱلَّذِينَ", translation: "qui", phonetic: "alladhina", grammar_type: "particle", is_particle: true },
      { position: 3, text_arab: "ءَامَنُوٓا۟", translation: "avez cru", phonetic: "amanuu", grammar_type: "verb", is_particle: false, word_key: "amn" },
      { position: 4, text_arab: "أَنفِقُوا۟", translation: "Dépensez", phonetic: "anfiqu", grammar_type: "verb", is_particle: false, word_key: "nafq" },
      { position: 5, text_arab: "مِن", translation: "de", phonetic: "min", grammar_type: "particle", is_particle: true },
      { position: 6, text_arab: "مَّا", translation: "ce que", phonetic: "ma", grammar_type: "particle", is_particle: true },
      { position: 7, text_arab: "رَزَقْنَـٰكُم", translation: "Nous vous avons pourvus", phonetic: "razaqnakum", grammar_type: "verb", is_particle: false, word_key: "rzq" },
      { position: 8, text_arab: "مِّن", translation: "de", phonetic: "min", grammar_type: "particle", is_particle: true },
      { position: 9, text_arab: "قَبْلِ", translation: "avant", phonetic: "qabli", grammar_type: "noun", is_particle: true },
      { position: 10, text_arab: "أَن", translation: "que", phonetic: "an", grammar_type: "particle", is_particle: true },
      { position: 11, text_arab: "يَأْتِىَ", translation: "arrive", phonetic: "ya'tiya", grammar_type: "verb", is_particle: true },
      { position: 12, text_arab: "يَوْمٌ", translation: "un Jour", phonetic: "yawmun", grammar_type: "noun", is_particle: false, word_key: "ywm" },
      { position: 13, text_arab: "لَّا", translation: "ni", phonetic: "la", grammar_type: "particle", is_particle: true },
      { position: 14, text_arab: "بَيْعٌ", translation: "transaction", phonetic: "bay'un", grammar_type: "noun", is_particle: false, word_key: "bae" },
      { position: 15, text_arab: "فِيهِ", translation: "en lui", phonetic: "fihi", grammar_type: "particle", is_particle: true },
      { position: 16, text_arab: "وَلَا", translation: "ni", phonetic: "wa-la", grammar_type: "particle", is_particle: true },
      { position: 17, text_arab: "خُلَّةٌ", translation: "amitié intime", phonetic: "khullatun", grammar_type: "noun", is_particle: false, word_key: "xll" },
      { position: 18, text_arab: "وَلَا", translation: "ni", phonetic: "wa-la", grammar_type: "particle", is_particle: true },
      { position: 19, text_arab: "شَفَـٰعَةٌ", translation: "intercession", phonetic: "shafa'atun", grammar_type: "noun", is_particle: false, word_key: "sfe" },
      { position: 20, text_arab: "وَٱلْكَـٰفِرُونَ", translation: "Et les mécréants", phonetic: "wa-l-kafiruuna", grammar_type: "noun", is_particle: false, word_key: "kfr" },
      { position: 21, text_arab: "هُمُ", translation: "ce sont eux", phonetic: "humu", grammar_type: "particle", is_particle: true },
      { position: 22, text_arab: "ٱلظَّـٰلِمُونَ", translation: "les injustes", phonetic: "al-zalimun", grammar_type: "noun", is_particle: false, word_key: "zlm" }
    ],
    vwa: [
      {
        word_key: "amn",
        position: 3,
        sense_chosen: "accorder sa confiance à, croire en (acte de foi comme mise en sécurité intérieure)",
        analysis_axes: {
          sense_chosen: "accorder sa confiance à, croire en (acte de foi comme mise en sécurité intérieure)",
          concept_chosen: "Croyance/Foi",
          concepts: {
            "Croyance/Foi": {
              status: "retenu",
              senses: [
                "être en sécurité, être à l'abri (sens premier de amina, Form I)",
                "Form IV amana = accorder sa confiance à, faire confiance à, croire en",
                "amanuu = ils ont accordé leur foi (accompli 3MP — acte accompli aux conséquences présentes)",
                "croyant = celui qui s'est mis dans un état de confiance envers Dieu"
              ],
              proof_ctx: "Lane's Lexicon: '-m-n = to be safe, to be secure, to be free from fear; Form IV amana = to grant security to, to trust, to believe in; amanuu = they believed, they trusted (Perfect 3MP). The root sense of security underlies the meaning of faith: to believe is to enter a state of trust that produces inner security. Lladhina amanuu = those who have believed = the believers as those who have performed the act of faith.",
              axe1_verset: "Dans le verset 2:254, lladhina amanuu (ceux qui ont cru) est l'apostrophe directe aux croyants. L'accompli amanuu (ils ont cru) indique que la foi est un acte accompli dont les conséquences persistent dans le présent — les croyants sont ceux qui ont effectué cet acte de mise en confiance et se trouvent dans cet état. La formule ya ayyuha lladhina amanuu est l'une des formules d'apostrophe les plus fréquentes du Coran pour interpeller la communauté des croyants — elle les définit par leur acte de foi accompli, non par une appartenance ethnique ou institutionnelle.",
              axe2_voisins: "Amanuu (pos=3) est immédiatement suivi d'anfiqu (pos=4 : dépensez) — l'apostrophe et la demande forment une unité rhétorique. Le verset s'adresse aux croyants pour leur demander d'agir en conformité avec leur foi : la foi (amana) est la base, la dépense dans la voie de Dieu (infaq) est l'action qui en découle. Il y a une cohérence interne : ceux qui ont accordé leur confiance à Dieu (amanuu) devraient logiquement dépenser de ce que Dieu leur a pourvus (razaqnakum) avant le Jour où toute ressource sera inutile.",
              axe3_sourate: "La formule ya ayyuha lladhina amanuu est récurrente dans Al-Baqara pour adresser les croyants et leur donner des directives pratiques ou doctrinales. En 2:153 (ô vous qui avez cru, cherchez l'aide par la patience et la prière), en 2:172 (ô vous qui avez cru, mangez des bonnes choses dont Nous vous avons pourvus), en 2:254 (ô vous qui avez cru, dépensez). Le schéma est constant : apostrophe aux croyants définis par leur foi accomplie, puis directive d'action. La foi (amana) fonde l'obligation d'agir.",
              axe4_coherence: "La cohérence entre amanuu (ceux qui ont cru) et la triple négation eschatologique (ni transaction, ni amitié intime, ni intercession) est profonde. Le verset dit en substance : vous qui avez accordé votre confiance à Dieu (amana bi-llah), agissez maintenant par la dépense — car le Jour vient où les ressources humaines ordinaires seront inutiles. La foi implique l'anticipation du Jour du Jugement et l'action en conséquence. Les mécréants (kafiruuna) qui ne croient pas ne dépensent pas — et ils sont les injustes.",
              axe5_frequence: "La racine '-m-n est l'une des plus fondamentales et des plus fréquentes du Coran — la foi (iman), les croyants (mu'minun, alladhina amanuu), Dieu comme le Gardien de la sécurité (al-Mu'min) sont au coeur du message coranique. La Form IV amana bi = croire en est le verbe de foi par excellence. Dans Al-Baqara seule, la formule lladhina amanuu (ceux qui ont cru) apparaît plus d'une vingtaine de fois. La foi est donc non pas un état vague mais un acte précis — amana = accorder sa confiance — aux conséquences pratiques immédiates."
            },
            "Securite/Tranquillite": {
              status: "probable",
              senses: [
                "aman = sécurité, état d'être protégé des dangers",
                "amina = être en sécurité, être à l'abri"
              ],
              proof_ctx: "Lane's Lexicon atteste '-m-n dans le sens premier de sécurité, d'absence de crainte. Aman = sécurité, garantie de protection. Ce sens est réel et sous-jacent à la notion de foi mais correspond à la Form I (amina = être en sécurité) plutôt qu'à la Form IV (amana = accorder la confiance).",
              axe1_verset: "La sécurité et la tranquillité sont les fruits de la foi (amana) — elles en découlent. Mais dans le verset 2:254, c'est l'acte de foi (amanuu = ils ont cru, Form IV accompli) qui est désigné, non l'état de sécurité qui en résulte. Les croyants sont définis par l'acte de foi accompli, pas par leur état psychologique de tranquillité.",
              axe2_voisins: "L'exhortation à dépenser (anfiqu) qui suit immédiatement amanuu indique que la foi est ici un point de départ pour l'action, non une description d'un état intérieur. La sécurité intérieure est un sens adjacent mais secondaire dans ce contexte d'exhortation à l'action.",
              axe3_sourate: "Dans Al-Baqara, amana/amanuu est toujours le verbe de l'acte de foi — croire, accorder sa confiance. La sécurité (aman) apparaît dans d'autres contextes (sécurité physique, protection divine) mais pas dans la formule d'apostrophe aux croyants.",
              axe4_coherence: "Un sens de sécurité ou de tranquillité serait moins cohérent avec la structure du verset qui est une exhortation à l'action (dépensez !). La foi comme acte (amana = croire) est plus cohérente avec la demande d'action qui suit que la foi comme état (sécurité, tranquillité).",
              axe5_frequence: "Dans le Coran, la racine '-m-n dans le sens de sécurité (aman, amn) est moins fréquente que le sens de foi et de croyance (iman, mu'min, amana bi). La dimension de sécurité est présente dans l'étymologie mais la dimension de confiance et de foi est dominante dans l'usage coranique."
            }
          }
        }
      },
      {
        word_key: "nafq",
        position: 4,
        sense_chosen: "dépenser, faire sortir de ses biens vers les autres (distribution volontaire et active)",
        analysis_axes: {
          sense_chosen: "dépenser, faire sortir de ses biens vers les autres (distribution volontaire et active)",
          concept_chosen: "Depense/Distribution",
          concepts: {
            "Depense/Distribution": {
              status: "retenu",
              senses: [
                "nifaq = galerie souterraine, tunnel (sens premier physique : s'écouler, passer à travers)",
                "Form IV anfaqa = faire sortir de ses biens, mettre en circulation, dépenser activement",
                "infaq = la dépense, la distribution (nom verbal de anfaqa)",
                "anfiqu = dépensez (impératif pluriel — ordre direct aux croyants)"
              ],
              proof_ctx: "Lane's Lexicon: n-f-q = to go through a tunnel, to flow through; Form IV anfaqa = to spend, to expend, to put into circulation, to distribute; infaq = expenditure, spending (especially in the way of God); anfiqu = spend (imperative plural). The Form IV is causative and active: not 'to lose by accident' but 'to make flow out deliberately', to put wealth into circulation for others.",
              axe1_verset: "Dans le verset 2:254, anfiqu (impératif pluriel de anfaqa, Form IV) est l'ordre direct aux croyants de dépenser dans la voie de Dieu. La Form IV est causative : non pas subir une dépense mais dépenser activement, volontairement, faire sortir de ses biens. La construction anfiqu min ma razaqnakum (dépensez parmi ce dont Nous vous avons pourvus) précise deux paramètres : la quantité est partielle (min = de, parmi — pas tout) et la source est divine (razaqnakum = ce que Dieu vous a accordé). La dépense n'est donc pas un sacrifice absolu mais une redistribution partielle d'un bien accordé par Dieu.",
              axe2_voisins: "Anfiqu (pos=4) est motivé par amanuu (pos=3 : ceux qui ont cru) et encadré par min ma razaqnakum (pos=5-7 : de ce dont Nous vous avons pourvus). La foi est le fondement de la dépense, la provision divine en est la source. La justification temporelle qui suit — avant qu'arrive un Jour — donne l'urgence de l'acte. La structure rhétorique du verset est donc : identité des destinataires (croyants), ordre (dépensez), source (vos provisions divines), délai (avant le Jour), raison négative (ce Jour-là, rien ne servira).",
              axe3_sourate: "La notion d'infaq (dépense dans la voie de Dieu) est un thème central d'Al-Baqara. Les versets 2:195 (dépensez dans la voie de Dieu), 2:261-274 constituent un passage entier sur l'infaq et ses modalités. Le verset 2:254 s'inscrit dans cette thématique avec une justification eschatologique spécifique : dépensez maintenant parce que le Jour vient où aucune compensation ne sera possible. La Form IV anfaqa est le verbe technique de cette dépense volontaire et méritoire.",
              axe4_coherence: "La cohérence entre anfiqu (dépensez, pos=4) et la triple négation eschatologique (pas de transaction, pas d'amitié intime, pas d'intercession, pos=13-19) est parfaite. Dépensez maintenant — parce que ce Jour-là, vous ne pourrez pas 'acheter' votre salut par une transaction (bay'), ni compter sur une amitié (khullah), ni sur une intercession (shafa'a). La dépense volontaire dans cette vie (infaq) est le seul investissement valide pour l'au-delà — toutes les autres ressources humaines seront hors de portée.",
              axe5_frequence: "La racine n-f-q avec ses dérivés (anfaqa, infaq, munfiq, nafaqa) est extrêmement fréquente dans le Coran, notamment dans Al-Baqara. L'infaq est l'une des vertus cardinales du croyant dans le Coran, mentionnée des dizaines de fois. La Form IV anfaqa (dépenser activement dans la voie de Dieu) est distincte de dépenser par négligence ou par contrainte — c'est un acte volontaire, délibéré, que les croyants sont exhortés à accomplir. Le sens figuré de 'faire sortir' (comme l'eau sort d'un tunnel) exprime bien cette mise en mouvement délibérée des biens."
            },
            "Epuisement/Consommation": {
              status: "peu_probable",
              senses: [
                "nafaqa = s'épuiser, se consumer (intransitif)",
                "nifaq = hypocrisie (sens dérivé : celui qui a une face cachée comme un tunnel)"
              ],
              proof_ctx: "Lane's Lexicon atteste n-f-q dans le sens intransitif de s'épuiser, de passer, de disparaître. Ce sens est réel pour la Form I mais ne correspond pas à la Form IV anfaqa qui est transitive et causative.",
              axe1_verset: "Le sens d'épuisement ou de consommation correspond à la Form I (nafaqa = s'épuiser) et non à la Form IV (anfaqa = faire dépenser, dépenser activement). Dans le verset 2:254, la Form IV est employée — c'est un acte actif et volontaire, pas un processus d'épuisement passif.",
              axe2_voisins: "La construction anfiqu + min ma razaqnakum (dépensez de ce dont Nous vous avons pourvus) est celle d'un acte transitif volontaire — vous dépensez une partie de vos biens pour les autres. Ce n'est pas une consommation passive mais une distribution active.",
              axe3_sourate: "Dans Al-Baqara, la racine n-f-q est exclusivement employée dans le sens de dépense volontaire (infaq) ou d'hypocrisie (nifaq — celui dont le comportement passe par-dessous comme un tunnel). Le sens d'épuisement passif ne s'y retrouve pas.",
              axe4_coherence: "Un sens d'épuisement ou de consommation passive serait incohérent avec l'impératif anfiqu qui est un ordre direct. Un ordre ne peut pas signifier 'épuisez-vous' — il signifie 'faites l'acte de dépenser volontairement'.",
              axe5_frequence: "La Form IV anfaqa est dans le Coran exclusivement dans le sens de dépense volontaire et active. Le sens passif d'épuisement appartient à la Form I nafaqa qui n'est presque pas utilisée dans le Coran. L'usage coranique a privilégié la Form IV active pour désigner l'acte méritoire de la dépense dans la voie de Dieu."
            }
          }
        }
      },
      {
        word_key: "rzq",
        position: 7,
        sense_chosen: "pourvoir en subsistance, accorder les moyens de vie (provision divine continue)",
        analysis_axes: {
          sense_chosen: "pourvoir en subsistance, accorder les moyens de vie (provision divine continue)",
          concept_chosen: "Subsistance/Provision",
          concepts: {
            "Subsistance/Provision": {
              status: "retenu",
              senses: [
                "accorder un don de vie, pourvoir en ressources nécessaires (sens premier de razaqa)",
                "rizq = la provision, la subsistance, ce qui permet de vivre",
                "razaqnakum = Nous vous avons pourvus (1PP accompli — Dieu est le sujet du pourvoi)",
                "ma razaqnakum = ce dont Nous vous avons pourvus = les biens, les ressources accordées par Dieu"
              ],
              proof_ctx: "Lane's Lexicon: r-z-q = to provide with means of subsistence, to grant a provision of life; rizq = provision, subsistence, means of life granted by God; razaqnakum = We have provided you with (1PP Perfect). In Quranic usage, rizq is always what God grants to creatures for their life — food, wealth, children, all that sustains existence. It is not a one-time gift but a continuous provision.",
              axe1_verset: "Dans le verset 2:254, min ma razaqnakum (de ce dont Nous vous avons pourvus) désigne l'ensemble des biens et ressources que Dieu accorde aux croyants pour leur subsistance. Razaqnakum (accompli 1PP : Nous vous avons pourvus) fait de Dieu l'agent unique et véritable de la provision — les biens des croyants ne leur appartiennent pas en propre, ils sont une provision divine accordée temporairement. Cette conception est la base théologique de l'exhortation à dépenser : si les biens viennent de Dieu, il est logique d'en redistribuer une partie selon Son ordre.",
              axe2_voisins: "Razaqnakum (pos=7) est encadré par min (de, parmi, pos=5-6) et suivi de la directive temporelle min qabli an ya'tiya yawmun (pos=8-12). La provision divine est la source de la dépense demandée, et la limite temporelle est le Jour du Jugement. Cette structure liant provision divine, dépense exigée et Jour de Jugement est la logique économique et eschatologique du verset : Dieu vous a pourvus, dépensez de cette provision avant qu'arrive le Jour où toute compensation sera impossible.",
              axe3_sourate: "La racine r-z-q est très fréquente dans Al-Baqara. En 2:3, les croyants dépensent de ce dont Nous les avons pourvus (mimma razaqnahum) — formule presque identique à celle du 2:254. En 2:22, Dieu descend l'eau du ciel et produit des fruits comme provision pour vous. En 2:57 et 60, Dieu pourvoit les Israélites de bonnes choses. Le rizq dans Al-Baqara est toujours la provision divine accordée aux humains — nourriture, biens, ressources — dont ils doivent être reconnaissants et généreux.",
              axe4_coherence: "La cohérence entre razaqnakum (Nous vous avons pourvus) et la triple négation eschatologique (pas de transaction, pas d'amitié intime, pas d'intercession) est celle de la logique de la générosité eschatologique. Dieu vous a pourvus maintenant — dépensez maintenant. Car ce Jour-là, vous ne pourrez pas compenser par une transaction ni compter sur une relation humaine. La provision divine (rizq) dans cette vie est l'opportunité unique de préparer l'au-delà par la dépense généreuse.",
              axe5_frequence: "La racine r-z-q est l'une des plus fréquentes du Coran avec des centaines d'occurrences. Le rizq comme provision divine accordée aux créatures est un concept théologique central qui exprime la relation de dépendance totale des humains envers Dieu pour leur subsistance. La formule mimmma razaqnahum/razaqnakum (de ce dont Nous leur/vous avons pourvus) est une formule canonique qui revient dans de nombreux versets. Elle établit systématiquement que les biens humains sont une provision divine temporaire, dont une partie doit être redistribuée dans la voie de Dieu."
            },
            "Don/Bienfait": {
              status: "probable",
              senses: [
                "rizq comme don ponctuel de Dieu",
                "bienfait accordé, grâce divine"
              ],
              proof_ctx: "Lane's Lexicon atteste rizq dans le sens de don, de bienfait accordé par Dieu. Ce sens est adjacent et partiellement superposé au sens de provision mais insiste sur l'aspect de grâce ponctuelle plutôt que de provision continue.",
              axe1_verset: "Le sens de don ou de bienfait est adjacent au sens retenu de provision. Cependant, rizq dans le Coran désigne principalement une provision continue et vitale (nourriture, biens nécessaires à la vie) plutôt qu'un don ponctuel. La formule razaqnakum (Nous vous avons pourvus — accompli qui implique une action continue) renforce le sens de provision continue.",
              axe2_voisins: "La construction min ma razaqnakum (de parmi ce dont Nous vous avons pourvus) avec min (une partie de) suggère une provision abondante dont on extrait une partie — plutôt qu'un don unique et ponctuel. Une provision est quelque chose d'abondant et de continu, d'où on peut prendre une partie.",
              axe3_sourate: "Dans Al-Baqara, le rizq est systématiquement présenté comme une provision continue accordée par Dieu pour la vie (nourriture, ressources naturelles, biens accordés). Ce n'est pas un cadeau unique mais un flux continu de moyens de subsistance.",
              axe4_coherence: "La dimension de provision continue est plus cohérente avec l'exhortation à dépenser régulièrement (infaq est une pratique habituelle) qu'un sens de don ponctuel. On dépense régulièrement d'une provision continue ; on use d'un don ponctuel une seule fois.",
              axe5_frequence: "Dans le Coran, rizq est toujours la provision vitale accordée par Dieu — jamais simplement un cadeau exceptionnel ou ponctuel. Le sens de don ou de bienfait (ni'ma, ihsan) est rendu par d'autres termes. La précision du sens de provision continue est importante pour comprendre la logique de l'infaq comme pratique régulière."
            }
          }
        }
      },
      {
        word_key: "bae",
        position: 14,
        sense_chosen: "transaction, échange bilatéral de biens (acte commercial qui ne sera d'aucun secours le Jour du Jugement)",
        analysis_axes: {
          sense_chosen: "transaction, échange bilatéral de biens (acte commercial qui ne sera d'aucun secours le Jour du Jugement)",
          concept_chosen: "Transaction/Echange",
          concepts: {
            "Transaction/Echange": {
              status: "retenu",
              senses: [
                "vendre, échanger des biens contre de l'argent ou autre (sens premier de ba'a)",
                "bay' = la transaction commerciale, l'acte de vente-achat, l'échange bilatéral",
                "la bay'un fihi = pas de transaction en lui (le Jour) — aucun échange ne sera possible",
                "racheter ses actes par une contrepartie matérielle sera impossible le Jour du Jugement"
              ],
              proof_ctx: "Lane's Lexicon: b-y-' = to sell, to buy, to exchange goods; bay' = the act of sale, the act of purchase, the transaction (bilateral exchange); bay'un fihi = a transaction in it. The term designates the bilateral act of exchange — both sides of the transaction (selling and buying), not just one side. In the eschatological context, 'no transaction' means that acts cannot be bought, sold, or compensated by any material exchange on the Day of Judgment.",
              axe1_verset: "Dans le verset 2:254, la bay'un fihi (ni transaction en lui) est la première des trois impossibilités du Jour du Jugement. Bay' désigne l'acte bilatéral d'échange commercial — la vente et l'achat, les deux côtés de la transaction. 'Il n'y aura pas de transaction' signifie qu'aucun échange compensatoire ne sera possible : on ne pourra pas payer pour obtenir le pardon, racheter ses péchés par un prix, ou compenser ses mauvais actes par des bons. Le Jour du Jugement n'est pas un marché où les actes humains peuvent être négociés.",
              axe2_voisins: "Bay'un (pos=14) est la première des trois négations, suivie de khullatun (amitié intime, pos=17) et shafa'atun (intercession, pos=19). Ces trois ressources couvrent les trois modes principaux par lesquels les humains obtiennent des avantages dans cette vie : l'échange commercial (bay'), l'amitié et la faveur relationnelle (khullah), et l'intercession ou la recommandation (shafa'a). Le Jour du Jugement rend ces trois modes inutiles. La progression est du plus matériel (transaction) au plus personnel (amitié intime) au plus institutionnel (intercession).",
              axe3_sourate: "La thématique de l'inutilité de l'échange au Jour du Jugement est récurrente dans Al-Baqara. En 2:48, on lira : 'Craignez un Jour où nulle âme ne suppléera à une autre âme en rien, ni intercession ne sera acceptée, ni compensation prise'. En 2:123, formule similaire. Le verset 2:254 développe spécifiquement les trois ressources inutiles ce Jour-là. La bay' est la première mentionnée — c'est peut-être la ressource la plus instinctive pour les humains : quand on a un problème, on essaie d'acheter une solution.",
              axe4_coherence: "La cohérence entre bay' (transaction) et l'exhortation à anfiqu (dépensez) est structurelle. Dépensez maintenant (infaq) — car ce Jour-là, vous ne pourrez plus 'acheter' quoi que ce soit (la bay'). L'infaq est la dépense volontaire qui précède le Jour où toute transaction sera impossible. Ceux qui refusent de dépenser maintenant comptent peut-être sur la possibilité de compenser plus tard — cette illusion est brisée par la triple négation eschatologique.",
              axe5_frequence: "La racine b-y-' est fréquente dans le Coran dans des contextes commerciaux (les transactions licites, 2:275-282 sur le commerce et l'intérêt) et eschatologiques (l'impossibilité de toute transaction le Jour du Jugement). Bay' dans les contextes eschatologiques désigne invariablement la tentative de compenser ou de racheter ses actes par un équivalent matériel — tentative toujours vouée à l'échec le Jour du Jugement. L'acte bilatéral d'échange qui régit les relations économiques humaines n'a aucune valeur dans l'ordre divin eschatologique."
            },
            "Vente/Commerce": {
              status: "probable",
              senses: [
                "bay' = la vente spécifiquement (d'un côté de la transaction)",
                "commerce comme activité économique générale"
              ],
              proof_ctx: "Lane's Lexicon atteste bay' dans le sens de vente. Ce sens est correct mais moins précis que transaction bilatérale : bay' désigne l'acte complet (vente + achat) et non seulement le côté vendeur.",
              axe1_verset: "La vente comme acte unilatéral (vendre quelque chose) est un sens légèrement réducteur de bay' qui désigne la transaction dans son entier — les deux côtés de l'échange. Dans le contexte eschatologique, 'pas de bay'' signifie qu'aucun échange bilatéral n'est possible, pas seulement qu'on ne peut pas vendre.",
              axe2_voisins: "La mention de bay' parmi les trois impossibilités eschatologiques exige un sens qui couvre l'intégralité de la relation d'échange. Transaction ou échange bilatéral est plus précis que vente seule, car c'est toute la relation d'échange (donner-recevoir) qui est impossibe, pas seulement l'acte de vente.",
              axe3_sourate: "Dans Al-Baqara, le contexte des passages sur bay' est toujours celui d'une transaction bilatérale entre deux parties — pas d'une vente unilatérale. Les règles sur le commerce (2:275-282) portent sur les transactions dans leur ensemble.",
              axe4_coherence: "Commerce comme activité générale est trop large — bay' désigne un acte spécifique, pas une activité. Et vente seule est trop narrow — bay' inclut les deux côtés. Transaction est la traduction qui rend le mieux le caractère bilatéral et ponctuel de l'acte.",
              axe5_frequence: "Dans le Coran, bay' est toujours l'acte d'échange bilatéral. Les contextes eschatologiques (2:48, 2:123, 2:254, 14:31) mentionnent toujours bay' pour désigner la tentative de compenser ses actes par un équivalent — une transaction compensatoire impossible. Commerce ou vente seule ne rendent pas ce sens spécifique."
            }
          }
        }
      },
      {
        word_key: "xll",
        position: 17,
        sense_chosen: "amitié intime, lien d'âme profond (relation totale qui pénètre l'être — inutile le Jour du Jugement)",
        analysis_axes: {
          sense_chosen: "amitié intime, lien d'âme profond (relation totale qui pénètre l'être — inutile le Jour du Jugement)",
          concept_chosen: "AmitiéIntime/LienDame",
          concepts: {
            "AmitiéIntime/LienDame": {
              status: "retenu",
              senses: [
                "avoir des lacunes, être perforé, percé (sens premier physique de khalla)",
                "khill/khalil = ami intime (celui qui pénètre dans les recoins du coeur)",
                "khullah = amitié profonde, lien d'âme, amitié intime qui pénètre jusqu'au coeur",
                "Ibrahim = khalil Allah = l'ami intime de Dieu (titre coranique)"
              ],
              proof_ctx: "Lane's Lexicon: kh-l-l = to have gaps, to be perforated; khalla = to penetrate, to go through the interstices; khullah = intimate friendship, bond of souls, the deepest friendship that penetrates the heart; khalil = intimate friend, soul friend (one who enters the innermost spaces of another's heart). Ibrahim is called khalil Allah = the intimate friend of God. In the eschatological context, even the deepest human friendship will not avail.",
              axe1_verset: "Dans le verset 2:254, wa-la khullatun (ni amitié intime) est la deuxième des trois impossibilités eschatologiques. La khullah désigne l'amitié la plus profonde — celle qui, étymologiquement, pénètre dans les espaces (khilal = interstices, lacunes) de l'être. C'est une amitié totale, exclusive, qui occupe tout l'espace du coeur. Dans cette vie, la khullah peut produire des faveurs, des exceptions, des protections. Ce Jour-là, même le lien le plus profond entre deux êtres ne pourra rien — la khullah humaine sera impuissante face au jugement divin.",
              axe2_voisins: "Khullatun (pos=17) est placée entre bay'un (transaction, pos=14) et shafa'atun (intercession, pos=19). La progression est révélatrice : on passe de la relation marchande (bay') à la relation personnelle intime (khullah) à la relation de représentation ou d'autorité (shafa'a). La khullah est le niveau intermédiaire — plus personnel qu'une transaction mais moins institutionnel qu'une intercession officielle. C'est le réseau d'amis intimes sur lequel on compte pour des faveurs extraordinaires.",
              axe3_sourate: "La notion de khullah est rare dans le Coran mais extrêmement significative. Ibrahim est désigné comme khalil Allah (l'ami intime de Dieu) en 4:125 — c'est le titre prophétique le plus élevé en termes de lien personnel avec Dieu. L'impossibilité de la khullah au Jour du Jugement n'est pas une négation de l'amitié en général mais une affirmation que même le lien le plus profond entre humains — analogue à celui d'Ibrahim avec Dieu — ne peut intercéder ce Jour-là. Seul le lien avec Dieu lui-même a une valeur eschatologique.",
              axe4_coherence: "La cohérence entre l'impossibilité de la khullah et l'exhortation à dépenser (anfiqu) est indirecte mais réelle. Ceux qui refusent de dépenser comptent peut-être sur leurs relations d'amitié profonde pour s'en sortir — leurs amis, leurs proches, leurs alliés. Cette illusion est brisée : ni la transaction, ni l'amitié intime la plus profonde ne seront d'aucun secours. La seule préparation utile est la dépense dans la voie de Dieu maintenant.",
              axe5_frequence: "La racine kh-l-l est peu fréquente dans le Coran mais d'une importance théologique considérable. Khalil (ami intime) apparaît dans le titre d'Ibrahim (4:125). Khullah (amitié intime) apparaît en 2:254 et 14:31. La rareté de ces termes contraste avec leur importance : la khullah désigne le lien le plus précieux entre humains, et le Coran affirme que même ce lien sera inutile au Jour du Jugement."
            },
            "Lacune/Perforation": {
              status: "nul",
              senses: [
                "khall = lacune, trou, perforation",
                "sens physique premier de la racine kh-l-l"
              ],
              proof_ctx: "Lane's Lexicon atteste kh-l-l dans le sens premier physique de lacune, de trou, d'espace entre deux choses. Ce sens est réel pour la racine mais inapplicable au nom khullah dans le verset 2:254.",
              axe1_verset: "Le sens de lacune ou de perforation physique est le sens étymologique de la racine mais ne s'applique pas au nom khullah qui désigne l'amitié intime dans le Coran. Khullah est un substantif abstrait qui désigne une relation humaine, jamais un objet physique perforé.",
              axe2_voisins: "Dans le contexte de la triple négation eschatologique — ni transaction, ni amitié intime, ni intercession — le sens de perforation physique serait incohérent avec les deux autres termes qui désignent des réalités relationnelles et sociales.",
              axe3_sourate: "La khullah dans Al-Baqara (2:254) et ailleurs dans le Coran (14:31) désigne toujours l'amitié profonde et jamais un objet physique perforé. La distance entre le sens étymologique (perforation) et le sens lexical établi (amitié intime) est totale dans l'usage coranique.",
              axe4_coherence: "Un sens de perforation ou de lacune physique serait absolument incohérent avec le contexte théologique et eschatologique du verset 2:254. Ce sens doit être écarté.",
              axe5_frequence: "Le sens physique de perforation pour kh-l-l est attesté dans l'arabe classique général mais absent de l'usage coranique où khullah/khalil désigne toujours l'amitié intime. L'étymologie est intéressante (l'amitié pénètre dans les lacunes du coeur) mais le sens lexical coranique est exclusivement celui d'amitié profonde."
            }
          }
        }
      },
      {
        word_key: "sfe",
        position: 19,
        sense_chosen: "intercession, médiation en faveur de quelqu'un (s'ajouter à quelqu'un pour peser en sa faveur)",
        analysis_axes: {
          sense_chosen: "intercession, médiation en faveur de quelqu'un (s'ajouter à quelqu'un pour peser en sa faveur)",
          concept_chosen: "Intercession/Mediation",
          concepts: {
            "Intercession/Mediation": {
              status: "retenu",
              senses: [
                "shaf' = pair, le fait d'être deux (sens premier — doubler, rendre pair)",
                "shafa'a = s'ajouter à quelqu'un, être deux avec lui pour l'aider",
                "shafa'a = intercéder, plaider en faveur de quelqu'un",
                "shafa'atun = l'intercession, la médiation (nom verbal — acte de s'ajouter au poids de quelqu'un)"
              ],
              proof_ctx: "Lane's Lexicon: sh-f-' = to be even in number, to double, to add to make a pair; shaf' = pair, even number (adding one to make two); shafa'a = to intercede for, to add one's weight to another's case, to act as an intermediary; shafa'atun = intercession, mediation. The etymology is 'to be two with someone' — the intercessor adds himself to the one interceded for, doubling the weight of the plea. In eschatological context, no one can intercede without divine permission.",
              axe1_verset: "Dans le verset 2:254, wa-la shafa'atun (ni intercession) est la troisième et dernière des impossibilités eschatologiques. L'intercession est l'acte de s'ajouter à quelqu'un (shaf' = pair) pour augmenter son poids dans une négociation ou un jugement. Dans cette vie, les puissants, les sages, les autorités religieuses peuvent intercéder pour les autres auprès des juges ou des souverains. Ce Jour-là, personne ne pourra intercéder — sauf si Dieu le permet (comme précisé en 2:255 : qui peut intercéder auprès de Lui sans Sa permission ?). L'intercession humaine autonome est abolie.",
              axe2_voisins: "Shafa'atun (pos=19) est la conclusion de la triple négation. La progression bay' (transaction matérielle) → khullah (amitié intime) → shafa'a (intercession institutionnelle) va du niveau économique au niveau personnel au niveau de l'autorité. L'intercession est la ressource de dernier recours — quand on n'a plus d'argent (bay') et qu'on ne peut compter sur aucune amitié (khullah), on espère qu'un personnage d'autorité plaidera pour soi. Ce recours ultime sera également inutile ce Jour-là, sauf permission divine.",
              axe3_sourate: "L'intercession est un thème majeur dans Al-Baqara. En 2:48 et 2:123, il est dit que 'nulle intercession ne sera acceptée'. En 2:255 (le verset du Trône, juste après 2:254), il est précisé que 'qui peut intercéder auprès de Lui sans Sa permission ?' — la seule intercession possible est celle que Dieu permet. Le verset 2:254 pose l'impossibilité générale de l'intercession, et 2:255 l'exception divine : Dieu peut permettre l'intercession, mais c'est Lui seul qui en décide.",
              axe4_coherence: "La cohérence entre l'impossibilité de la shafa'a et l'exhortation à anfiqu est celle de la préparation anticipée. La shafa'a dans cette vie peut compenser un manque de mérites par la recommandation d'un intermédiaire puissant. Ce recours sera impossible ce Jour-là — il faut donc agir soi-même maintenant par la dépense dans la voie de Dieu, sans attendre qu'un intermédiaire règle la situation. L'infaq remplace en quelque sorte la shafa'a — c'est l'acte préventif qui anticipe l'absence de tout secours intermédiaire.",
              axe5_frequence: "La racine sh-f-' avec ses dérivés (shafa'a, shafi', shafa'atun) est fréquente dans le Coran, principalement dans des contextes eschatologiques où l'intercession est débattue. Le Coran distingue l'intercession humaine autonome (impossible sans permission divine) de l'intercession accordée par Dieu à certains (comme les prophètes, avec permission). Cette nuance est importante : ce n'est pas que l'intercession est entièrement abolie, mais que personne ne peut intercéder sans la permission de Dieu. Le verset 2:254 pose l'impossibilité générale ; 2:255 précise la condition divine de l'exception."
            },
            "Doublement/Paire": {
              status: "peu_probable",
              senses: [
                "shaf' = rendre pair, doubler",
                "sens arithmétique premier de la racine sh-f-'"
              ],
              proof_ctx: "Lane's Lexicon atteste sh-f-' dans le sens premier de rendre pair, de doubler. Shaf' = pair (opposé à witr = impair). Ce sens est réel pour la racine mais inapplicable au nom shafa'a dans le verset 2:254.",
              axe1_verset: "Le sens de doublement ou de parité arithmétique est le sens étymologique de la racine mais ne s'applique pas au nom shafa'a dans le contexte eschatologique du verset. Shafa'a est un nom d'action abstrait qui désigne le processus d'intercession, pas un objet arithmétique.",
              axe2_voisins: "Dans la triple négation eschatologique, les trois termes désignent des réalités relationnelles et sociales (transaction, amitié, intercession). Un sens arithmétique de doublement serait incohérent avec les deux autres termes.",
              axe3_sourate: "Dans Al-Baqara et dans tout le Coran, shafa'a désigne invariablement l'intercession comme acte de plaidoirie en faveur de quelqu'un auprès d'une autorité. Le sens arithmétique de doublement n'apparaît pas dans l'usage coranique de cette racine.",
              axe4_coherence: "Le sens de doublement ou de parité serait absolument incohérent avec le contexte théologique eschatologique du verset. L'intercession est le sens logique dans ce triptyque de ressources humaines inutiles au Jour du Jugement.",
              axe5_frequence: "Dans le Coran, shaf'/shafa'a est exclusivement dans le sens d'intercession, jamais dans le sens arithmétique de parité ou de doublement. L'étymologie arithmétique est intéressante (l'intercesseur s'ajoute à quelqu'un pour former une paire plus pesante) mais le lexique coranique a retenu uniquement le sens d'intercession."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[254];

  // Delete existing VWAs for this verse to avoid duplicates
  const { error: delErr } = await supabase
    .from('verse_word_analyses')
    .delete()
    .eq('verse_id', data.verse_id);
  if (delErr) console.warn('DELETE VWA warning:', delErr.message);
  else console.log('Existing VWAs deleted for verse_id=' + data.verse_id);

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V254)');

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
  console.log('DONE V254 TERMINE');
}
main().catch(console.error);
