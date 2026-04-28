const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 159
// verse_id=166, analysis_id=525
// "Ceux qui cachent ce que Nous avons revele comme preuves
//  claires et guidance, apres que Nous l'ayons explique aux
//  gens dans le Livre, ceux-la, Dieu les maudit et les
//  maudisseurs les maudissent."
// =====================================================

const verseData = {
  159: {
    verse_id: 166,
    analysis_id: 525,
    translation_arab: "Ceux qui cachent ce que Nous avons fait descendre comme preuves claires et guidance, apres que Nous l'ayons explique aux gens dans le Livre, ceux-la, Dieu les maudit et les maudisseurs les maudissent.",
    full_translation: "Ceux qui cachent ce que Nous avons fait descendre en fait de preuves et de guide apres l'expose que Nous en avons fait aux gens, dans le Livre, voila ceux que Dieu maudit; et les maudisseurs les maudissent.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre avec le pronom relatif **alladhina** (ceux qui) qui introduit un groupe specifique — ceux qui commettent l'acte de cacher. Le verbe **yaktumuna** est un inaccompli 3MP de la racine k-t-m. Le Lane's donne : cacher, taire, dissimuler, garder secret. L'inaccompli indique une action continue et repetee — ils ne cachent pas une seule fois, ils cachent de maniere habituelle et permanente. Le pronom relatif **ma** (ce que) introduit l'objet de la dissimulation. Le verbe **anzalna** est un accompli 1PL de la forme IV de la racine n-z-l. Le Lane's donne : faire descendre, reveler, envoyer d'en haut. La forme IV (af'ala) est causative — Nous avons fait descendre, c'est Dieu qui est l'agent de la descente. L'accompli marque que la revelation est un fait acheve. Le pronom « Nous » est le pluriel de majeste divine. La preposition **min** (parmi, comme) introduit la specification de ce qui a ete revele. Le nom **al-bayyinati** est un pluriel feminin defini de la racine b-y-n. Le Lane's donne : preuve claire, signe evident, ce qui rend manifeste. Les bayyinat sont les preuves qui rendent la verite manifeste — elles separent le vrai du faux par leur clarte. L'article defini (al-) marque que ces preuves sont connues et identifiees. Le nom **al-huda** est un nom defini de la racine h-d-y. Le Lane's donne : guidance, direction vers la bonne voie. La guidance est l'acte de montrer le chemin correct — c'est ce qui oriente vers le bien. L'article defini marque que cette guidance est la guidance divine connue. La preposition **min ba'di** (apres) introduit la temporalite. Le nom **ba'di** est de la racine b-e-d. Le Lane's donne : apres, ce qui suit dans le temps. L'apres marque la sequence — la dissimulation a lieu apres l'explication. Le pronom relatif **ma** (ce que) reprend l'objet. Le verbe **bayyannahu** est un accompli 1PL de la forme II de la racine b-y-n avec pronom suffixe 3MS. Le Lane's donne : expliquer, rendre clair, clarifier. La forme II (fa''ala) intensifie l'action — Nous l'avons explique en detail, rendu parfaitement clair. L'accompli marque que l'explication est achevee. Le pronom suffixe « hu » renvoie a ce qui a ete revele. Le nom **an-nasi** est un nom defini de la racine n-w-s. Le Lane's donne : les gens, les etres humains, le peuple. Les gens sont l'ensemble des destinataires de l'explication — la revelation a ete expliquee a tous, pas a un groupe restreint. La preposition **fi** (dans) situe le lieu de l'explication. Le nom **al-kitabi** est un nom defini genitif de la racine k-t-b. Le Lane's donne : livre, ecriture revelee. Le Livre est le support de l'explication — c'est dans le Livre que Dieu a explique les choses aux gens. Le pronom demonstratif **ula'ika** (ceux-la) reprend le groupe initial avec emphase — c'est une designation forte qui isole le groupe pour lui appliquer la consequence. Le verbe **yal'anuhumu** est un inaccompli 3MS de la racine l-e-n avec pronom suffixe 3MP. Le Lane's donne : maudire, eloigner de la misericorde. L'inaccompli indique que la malediction est continue et active. Le pronom suffixe « hum » montre que la malediction les atteint directement. Le nom **Allahu** est le nom propre de la divinite au nominatif — Dieu est le sujet de la malediction. Le verbe **yal'anuhumu** apparait une deuxieme fois avec le meme sens — la malediction est reiteree par un deuxieme sujet. Le nom **al-la'inuna** est un participe actif pluriel defini de la racine l-e-n. Le Lane's donne : les maudisseurs, ceux qui maudissent. Le participe actif indique que les maudisseurs exercent cette action de maniere permanente — ce sont les anges, les croyants ou toute creature qui maudit ceux qui cachent la verite.

§JUSTIFICATION§
**cachent** — Le sens retenu est « cacher ». Le verbe yaktumuna designe l'acte de soustraire quelque chose a la connaissance des autres. L'alternative « taire » est ecartee car le contexte va au-dela du simple silence — il s'agit d'une dissimulation active de ce que Dieu a revele.

**avons fait descendre** — Le sens retenu est « faire descendre/reveler ». Le verbe anzalna designe l'envoi d'en haut vers le bas, c'est-a-dire la revelation divine. L'alternative « s'installer » est ecartee car le contexte est la revelation, pas l'installation dans un lieu.

**les preuves claires** — Le sens retenu est « preuve claire ». Le mot al-bayyinat designe les signes evidents qui rendent la verite manifeste. L'alternative « separer » est ecartee car le mot est un nom pluriel defini, pas un verbe de separation.

**la guidance** — Le sens retenu est « guidance ». Le mot al-huda designe la direction vers la bonne voie. L'alternative « cadeau » est ecartee car le contexte est la revelation, pas un don materiel.

**apres** — Le sens retenu est « apres ». Le mot ba'di designe la posteriorite temporelle. L'alternative « etre loin » est ecartee car le contexte est temporel, pas spatial.

**l'avons explique** — Le sens retenu est « expliquer ». Le verbe bayyannahu designe l'acte de rendre clair. L'alternative « separer » est ecartee car le contexte est l'explication aux gens, pas la separation.

**les gens** — Le sens retenu est « les gens ». Le mot an-nasi designe l'ensemble des etres humains. L'alternative « oublier » est ecartee car le mot est un nom defini, pas un verbe.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitabi designe l'ecriture revelee. L'alternative « prescrire » est ecartee car le mot est un nom defini genitif, pas un verbe.

**Dieu** — Le sens retenu est « Dieu ». Le mot Allahu est le nom propre de la divinite au nominatif. L'alternative « adorer » est ecartee car le mot est un nom propre, pas un verbe.

**maudit** — Le sens retenu est « maudire ». Le verbe yal'anuhumu designe l'eloignement de la misericorde divine. C'est un acte definitif et severe. Le mot apparait deux fois dans le verset avec deux sujets differents (Dieu et les maudisseurs), montrant que la malediction est universelle.

**les maudisseurs** — Le sens retenu est « ceux qui maudissent ». Le mot al-la'inuna est un participe actif pluriel qui designe ceux qui exercent la malediction. C'est la troisieme occurrence de la racine l-e-n dans le verset, montrant l'intensite de la consequence.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. La seule variation notable est le choix entre « revelations » et « preuves claires » pour al-bayyinat. Nous choisissons « preuves claires » car le mot bayyina porte en lui l'idee de clarte et d'evidence — ce ne sont pas n'importe quelles revelations, ce sont des signes qui rendent la verite manifeste sans ambiguite. Certaines traductions donnent « le guide » au lieu de « la guidance » pour al-huda — nous gardons « guidance » car le mot designe l'action de guider, pas une personne qui guide.`,
    segments: [
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0627\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 0 },
      { fr: "cachent", pos: "verbe", phon: "yaktumuna", arabic: "\u064a\u064e\u0643\u0652\u062a\u064f\u0645\u064f\u0648\u0646\u064e", word_key: "ktm", is_particle: false, sense_retenu: "cacher", position: 1 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 2 },
      { fr: "Nous avons fait descendre", pos: "verbe", phon: "anzalna", arabic: "\u0623\u064e\u0646\u0632\u064e\u0644\u0652\u0646\u064e\u0627", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 3 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 4 },
      { fr: "les preuves claires", pos: "nom", phon: "al-bayyinati", arabic: "\u0627\u0644\u0652\u0628\u064e\u064a\u0651\u0650\u0646\u064e\u0640\u062a\u0650", word_key: "byn", is_particle: false, sense_retenu: "preuve claire", position: 5 },
      { fr: "et la guidance", pos: "nom", phon: "wal-huda", arabic: "\u0648\u064e\u0627\u0644\u0652\u0647\u064f\u062f\u064e\u0649\u0670", word_key: "hdy", is_particle: false, sense_retenu: "guidance", position: 6 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 7 },
      { fr: "apres", pos: "nom", phon: "ba'di", arabic: "\u0628\u064e\u0639\u0652\u062f\u0650", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 8 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 9 },
      { fr: "Nous l'avons explique", pos: "verbe", phon: "bayyannahu", arabic: "\u0628\u064e\u064a\u0651\u064e\u0646\u0651\u064e\u0640\u0647\u064f", word_key: "byn", is_particle: false, sense_retenu: "expliquer", position: 10 },
      { fr: "aux", phon: "li", arabic: "\u0644\u0650", is_particle: true, position: 11 },
      { fr: "les gens", pos: "nom", phon: "an-nasi", arabic: "\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "les gens", position: 12 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u064a", is_particle: true, position: 13 },
      { fr: "le Livre", pos: "nom", phon: "al-kitabi", arabic: "\u0627\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u0650", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 14 },
      { fr: "ceux-la", phon: "ula'ika", arabic: "\u0623\u064f\u0648\u0644\u064e\u0640\u0670\u0626\u0650\u0643\u064e", is_particle: true, position: 15 },
      { fr: "les maudit", pos: "verbe", phon: "yal'anuhumu", arabic: "\u064a\u064e\u0644\u0652\u0639\u064e\u0646\u064f\u0647\u064f\u0645\u064f", word_key: "len", is_particle: false, sense_retenu: "maudire", position: 16 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0627\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 17 },
      { fr: "et les maudit", pos: "verbe", phon: "wa-yal'anuhumu", arabic: "\u0648\u064e\u064a\u064e\u0644\u0652\u0639\u064e\u0646\u064f\u0647\u064f\u0645\u064f", word_key: "len", is_particle: false, sense_retenu: "maudire", position: 18 },
      { fr: "les maudisseurs", pos: "nom", phon: "al-la'inuna", arabic: "\u0627\u0644\u0644\u0651\u064e\u0640\u0639\u0650\u0646\u064f\u0648\u0646\u064e", word_key: "len", is_particle: false, sense_retenu: "maudisseur", position: 19 }
    ],
    words: [
      // ktm pos=1
      {
        word_key: "ktm", position: 1, sense_chosen: "cacher",
        analysis_axes: {
          sense_chosen: "cacher",
          concept_chosen: "Dissimulation/Secret",
          concepts: {
            "Dissimulation/Secret": {
              status: "retenu",
              senses: ["cacher", "taire", "dissimuler", "garder secret"],
              proof_ctx: "Le verbe yaktumuna est un inaccompli 3MP de la racine k-t-m. Le Lane's donne : cacher, dissimuler, taire, garder secret. Cacher est l'acte de soustraire quelque chose a la connaissance d'autrui — c'est un acte volontaire et directionnel. L'inaccompli marque une action continue et habituelle — ils cachent de maniere permanente, pas une seule fois. La distinction avec « garder secret » est que cacher implique une intention de tromper, alors que le secret peut etre neutre. Ici le contexte est clair : ils cachent ce que Dieu a revele, ce qui est un acte de tromperie envers les gens.",
              axe1_verset: "Le verbe yaktumuna ouvre le verset en definissant l'acte central : la dissimulation. L'objet cache est ce que Dieu a fait descendre comme preuves claires et guidance. Le champ lexical oppose la dissimulation (cacher) a la clarification (preuves claires, expliquer, Livre). Le verset construit un contraste saisissant : Dieu a explique clairement dans le Livre, et pourtant certains cachent. La dissimulation est d'autant plus grave qu'elle porte sur ce qui a ete rendu evident.",
              axe2_voisins: "Le verset 158 traitait du parcours entre Safa et Marwa et de celui qui fait le bien volontairement. Le verset 159 passe a ceux qui cachent la revelation — le contraste est entre celui qui agit ouvertement dans le bien et celui qui cache la verite. Le verset 160 annoncera l'exception : ceux qui se repentent et corrigent. La dissimulation du verset 159 est donc suivie d'une porte de sortie au verset 160.",
              axe3_sourate: "La racine k-t-m apparait plusieurs fois dans la sourate al-Baqarah dans le contexte de la dissimulation de la verite revelee. En 2:42, Dieu interdit de cacher la verite. En 2:140, il reproche a ceux qui cachent un temoignage de Dieu. En 2:146, ils connaissent la verite comme leurs propres enfants mais un groupe la cache. Le verset 159 s'inscrit dans cette serie d'avertissements contre la dissimulation de la revelation.",
              axe4_coherence: "La racine k-t-m apparait environ 15 fois dans le Coran, presque exclusivement dans le contexte de la dissimulation de la verite divine. En 2:174, ceux qui cachent ce que Dieu a fait descendre du Livre pour un prix derisoire. En 3:71, les gens du Livre qui melangent le vrai et le faux et cachent la verite. Le Coran traite la dissimulation de la verite revelee comme l'un des peches les plus graves.",
              axe5_frequence: "Pour la mission du khalifa, cacher la verite est l'antithese de la mission. Le khalifa est charge de transmettre et de clarifier, pas de dissimuler. Cacher ce que Dieu a revele c'est trahir le mandat divin — la mission du khalifa exige la transparence totale envers les gens. La dissimulation est une forme de corruption de la mission."
            }
          }
        }
      },
      // nzl pos=2
      {
        word_key: "nzl", position: 2, sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["descendre", "faire descendre", "reveler", "envoyer d'en haut", "pluie qui descend"],
              proof_ctx: "Le verbe anzalna est un accompli 1PL de la forme IV de la racine n-z-l. Le Lane's donne : faire descendre, reveler, envoyer d'en haut. La forme IV (af'ala) est causative — Nous avons fait descendre, c'est Dieu qui provoque la descente. L'accompli marque que la revelation est un fait acheve — elle a deja eu lieu. Le pronom « na » (Nous) est le pluriel de majeste divine. La distinction avec l'installation (nul) est claire : le contexte est la revelation divine, pas l'installation dans un lieu.",
              axe1_verset: "Le verbe anzalna precise l'origine divine de ce qui est cache. Le champ lexical du verset (preuves claires, guidance, Livre, Dieu) montre que la revelation est un acte divin complet — Dieu a fait descendre et a explique. La descente est le mouvement fondateur — de Dieu vers les hommes. Cacher ce qui est descendu d'en haut, c'est bloquer le mouvement divin.",
              axe2_voisins: "Le verset 151 utilisait « Nous avons envoye parmi vous un envoye ». Le verset 159 precise que ce qui a ete fait descendre inclut les preuves claires et la guidance. Les versets voisins montrent que Dieu a complete la transmission — l'envoye et la revelation sont venus. La dissimulation est d'autant plus grave que la transmission est achevee.",
              axe3_sourate: "La racine n-z-l est une des racines structurantes de la sourate al-Baqarah. En 2:2, « ce Livre, nul doute en lui, guidance pour les pieux ». En 2:4, « ce qui a ete fait descendre vers toi et ce qui a ete fait descendre avant toi ». La sourate insiste sur la chaine de la revelation descendante — chaque etape est un acte divin delibere.",
              axe4_coherence: "La racine n-z-l apparait environ 293 fois dans le Coran. L'expression « ma anzalna » (ce que Nous avons fait descendre) est un refrain coranique qui rappelle l'origine divine du texte. En 2:174, le meme verbe est utilise : ceux qui cachent ce que Dieu a fait descendre du Livre. Le Coran lie systematiquement la descente a la responsabilite de transmettre.",
              axe5_frequence: "Pour la mission du khalifa, la descente de la revelation est le fondement de la mission. Ce qui descend d'en haut est le mandat — le khalifa doit recevoir, comprendre et transmettre. Bloquer la descente par la dissimulation c'est couper le lien entre Dieu et les hommes."
            },
            "Halte/Séjour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "hote", "lieu de descente"],
              proof_ctx: "Le sens d'installation est hors sujet — le verbe est anzalna (forme IV causative) qui designe la revelation, pas l'arret dans un lieu."
            }
          }
        }
      },
      // byn pos=5 (1ere occurrence — al-bayyinati)
      {
        word_key: "byn", position: 5, sense_chosen: "preuve claire",
        analysis_axes: {
          sense_chosen: "preuve claire",
          concept_chosen: "Clarté/Évidence",
          concepts: {
            "Clarté/Évidence": {
              status: "retenu",
              senses: ["etre clair", "expliquer", "evident", "preuve"],
              proof_ctx: "Le mot al-bayyinati est un pluriel feminin defini de la racine b-y-n. Le Lane's donne : preuve claire, signe evident, ce qui rend manifeste. Les bayyinat sont ce qui separe le vrai du faux par leur clarte — elles rendent la verite evidente a quiconque les examine. L'article defini (al-) marque que ces preuves sont connues et identifiees. La distinction avec la separation (probable) est que le mot est ici un nom pluriel designant des signes evidents, pas un verbe de separation.",
              axe1_verset: "Le mot al-bayyinati est l'un des deux objets de la revelation (avec la guidance). Le champ lexical oppose la clarte (preuves claires, expliquer, Livre) a la dissimulation (cacher). Les preuves claires sont par definition ce qui ne peut etre cache sans effort delibere — elles sont faites pour etre vues et comprises. Cacher les preuves claires est une contradiction — c'est occulter ce qui est fait pour eclairer.",
              axe2_voisins: "Le verset 150 mentionnait les « preuves claires » dans un autre contexte. Le verset 159 reprend le mot pour montrer que les preuves sont un objet specifique de la dissimulation. Les versets voisins montrent que les preuves sont un element central de la revelation — elles accompagnent la guidance comme outils de comprehension.",
              axe3_sourate: "La racine b-y-n apparait frequemment dans la sourate al-Baqarah. En 2:87, Dieu a donne a Issa les preuves claires. En 2:92, Moussa est venu avec les preuves claires. En 2:99, Dieu a fait descendre des signes clairs. La sourate insiste sur le fait que les preuves sont envoyees avec chaque revelation pour eliminer toute excuse d'ignorance.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. Les bayyinat (preuves claires) sont un concept central — elles accompagnent les envoyes, les ecritures et les revelations. En 3:86, Dieu ne guide pas un peuple qui a rejete apres que les preuves claires lui soient venues. Le Coran lie la responsabilite a la reception des preuves.",
              axe5_frequence: "Pour la mission du khalifa, les preuves claires sont les outils de la mission. Le khalifa doit les utiliser pour eclairer, pas les cacher. Les preuves sont donnees pour que la verite soit evidente — les dissimuler c'est priver les gens de leur droit a la clarte."
            },
            "Séparation/Distance": {
              status: "probable",
              senses: ["separer", "entre", "quitter"],
              proof_ctx: "Le sens de separation est un sens fondamental de b-y-n — separer les choses pour les distinguer. La preuve claire (bayyina) est ce qui separe le vrai du faux. Le verset utilise le mot comme nom pluriel designant des signes evidents, pas comme verbe de separation. Le lien etymologique entre clarte et separation eclaire le sens : rendre clair c'est separer le vrai du faux.",
              axe1_verset: "Le mot al-bayyinati pourrait theoriquement porter le sens de separation — les preuves « separent » le vrai du faux. Mais le contexte syntaxique est un nom pluriel objet de la revelation, pas un verbe de separation active.",
              axe2_voisins: "Les versets voisins utilisent b-y-n dans le sens de clarte et d'explication, pas de separation spatiale.",
              axe3_sourate: "La sourate al-Baqarah utilise bayyinat principalement au sens de preuves claires associees aux envoyes et revelations.",
              axe4_coherence: "Le Coran utilise bayyinat comme nom pluriel pour designer les preuves claires envoyees par Dieu. Le sens de separation est present en arriere-plan etymologique mais pas dans l'usage.",
              axe5_frequence: "La separation comme outil du khalifa — distinguer le vrai du faux — est un prolongement de la clarte des preuves. Les preuves separent pour eclairer."
            }
          }
        }
      },
      // hdy pos=6
      {
        word_key: "hdy", position: 6, sense_chosen: "guidance",
        analysis_axes: {
          sense_chosen: "guidance",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-meme"],
              proof_ctx: "Le mot al-huda est un nom defini de la racine h-d-y. Le Lane's donne : guidance, direction vers la bonne voie, montrer le chemin correct. La guidance est l'acte de montrer le chemin — c'est un mouvement qui sort du guide et atteint celui qui est guide. L'article defini (al-) marque que cette guidance est LA guidance divine, pas n'importe quelle orientation. La distinction avec le cadeau (nul) est claire : le contexte est la revelation, pas un don materiel.",
              axe1_verset: "Le mot al-huda est le second objet de la revelation, apres les preuves claires. Le verset structure la revelation en deux composantes : les preuves (ce qui montre la verite) et la guidance (ce qui montre le chemin). Cacher la guidance c'est priver les gens de leur orientation — les laisser sans direction. Le champ lexical (faire descendre, preuves, guidance, expliquer, Livre) montre que Dieu a fourni tous les outils d'orientation.",
              axe2_voisins: "Le verset 157 mentionnait les prieres et la misericorde de Dieu pour ceux qui sont guides. Le verset 158 parlait du parcours rituel. Le verset 159 revient au theme de la guidance comme objet de revelation que certains cachent. La guidance est un fil conducteur des versets voisins — elle est offerte et peut etre acceptee ou cachee.",
              axe3_sourate: "La racine h-d-y est une des racines les plus importantes de la sourate al-Baqarah. En 2:2, le Livre est « une guidance pour les pieux ». En 2:38, « une guidance viendra de Ma part ». En 2:120, la guidance de Dieu est la seule guidance veritable. La sourate oppose la guidance divine (le seul chemin) aux chemins humains (les egarements).",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. La guidance est un concept central — Dieu guide qui Il veut et la guidance est Son don le plus precieux. En 2:185, le Coran est une guidance pour les gens. En 3:138, le Coran est un expose et une guidance. Le Coran se definit lui-meme comme guidance — cacher la guidance c'est cacher le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est le coeur de la mission. Le khalifa est le destinataire de la guidance et son transmetteur. Cacher la guidance c'est couper les gens de leur chemin. Le khalifa doit etre un canal ouvert de la guidance divine, pas un obstacle."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "maniere d'agir", "comportement calme"],
              proof_ctx: "Le sens de conduite est hors sujet — le mot est le nom al-huda designant la guidance divine revelee, pas un comportement humain."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "present"],
              proof_ctx: "Le sens de don/cadeau est hors sujet — le contexte est la revelation de la guidance, pas un don materiel."
            }
          }
        }
      },
      // baed pos=8
      {
        word_key: "baed", position: 8, sense_chosen: "apres",
        analysis_axes: {
          sense_chosen: "apres",
          concept_chosen: "Postériorité",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["apres", "ensuite"],
              proof_ctx: "Le mot ba'di est un nom genitif de la racine b-e-d. Le Lane's donne : apres, ce qui suit dans le temps, la posteriorite. La posteriorite est une relation temporelle — ce qui vient apres un evenement precedent. Ici « min ba'di ma bayyannahu » (apres que Nous l'ayons explique) precise la sequence : d'abord l'explication, puis la dissimulation. La distinction avec l'eloignement (nul) est claire : le contexte est temporel, pas spatial.",
              axe1_verset: "Le mot ba'di introduit la dimension temporelle du verset — la dissimulation a lieu apres l'explication. Le champ lexical (faire descendre, expliquer, Livre, gens) montre que Dieu a complete la phase d'explication avant que la dissimulation ne commence. L'apres marque que la dissimulation est sans excuse — l'explication a precede, donc l'ignorance n'est pas possible.",
              axe2_voisins: "Le verset 158 terminait un passage sur les rites du pelerinage. Le verset 159 ouvre un nouveau passage sur la dissimulation de la revelation. Le mot ba'di marque la sequence dans le verset lui-meme : la revelation a ete faite, l'explication a ete donnee, et malgre tout certains cachent.",
              axe3_sourate: "La racine b-e-d apparait frequemment dans la sourate al-Baqarah pour marquer les sequences. En 2:52, « apres cela, Nous vous avons pardonnes ». En 2:75, « apres l'avoir compris, ils le falsifiaient ». La sourate utilise ba'd pour montrer que les actes negatifs surviennent apres les bienfaits divins — le contraste temporel aggrave la faute.",
              axe4_coherence: "La racine b-e-d apparait environ 393 fois dans le Coran. L'expression « min ba'di ma » (apres que) est un schema recurrent qui marque que l'acte reproche survient apres une grace ou une explication divine. En 2:213, les divergences surviennent apres que les preuves claires sont venues. Le Coran insiste sur la sequence pour montrer que la faute est deliberee.",
              axe5_frequence: "Pour la mission du khalifa, l'apres est un marqueur de responsabilite. Apres avoir recu l'explication, on ne peut plus invoquer l'ignorance. Le khalifa qui a recu la guidance est responsable de ce qu'il en fait — la dissimulation apres l'explication est une trahison aggravee."
            },
            "Éloignement/Distance": {
              status: "nul",
              senses: ["etre loin", "eloignement"],
              proof_ctx: "Le sens d'eloignement spatial est hors sujet — le mot est dans l'expression temporelle « min ba'di » (apres), pas dans un contexte de distance."
            },
            "Mort/Destruction": {
              status: "nul",
              senses: ["perir"],
              proof_ctx: "Le sens de mort/destruction est hors sujet — le contexte est la posteriorite temporelle, pas la destruction."
            }
          }
        }
      },
      // byn pos=10 (2eme occurrence — bayyannahu)
      {
        word_key: "byn", position: 10, sense_chosen: "expliquer",
        analysis_axes: {
          sense_chosen: "expliquer",
          concept_chosen: "Clarté/Évidence",
          concepts: {
            "Clarté/Évidence": {
              status: "retenu",
              senses: ["etre clair", "expliquer", "evident", "preuve"],
              proof_ctx: "Le verbe bayyannahu est un accompli 1PL de la forme II de la racine b-y-n avec pronom suffixe 3MS. Le Lane's donne : expliquer, rendre clair, clarifier, faire comprendre. La forme II (fa''ala) intensifie l'action — bayyanna c'est rendre tres clair, expliquer en detail. L'accompli marque que l'explication est achevee. Le pronom suffixe « hu » renvoie a ce qui a ete revele (les preuves et la guidance). Deuxieme occurrence de la racine b-y-n dans le verset — la premiere (al-bayyinati) designe les preuves claires comme objet, la seconde (bayyannahu) designe l'acte d'expliquer. Les deux sens sont lies mais distincts : la preuve est l'outil, l'explication est l'acte.",
              axe1_verset: "Le verbe bayyannahu complete le tableau : Dieu a fait descendre les preuves ET les a expliquees aux gens dans le Livre. Le champ lexical (preuves claires, expliquer, gens, Livre) montre que Dieu a fait tout le necessaire pour la comprehension. L'explication aux gens (li-n-nasi) est universelle — pas a un groupe restreint. Dans le Livre (fi l-kitabi) precise le support. La dissimulation est donc doublement inexcusable : l'explication est claire et accessible a tous.",
              axe2_voisins: "Le verset 160 annoncera le repentir et la correction (aslaahu wa bayyanu) — ceux qui se repentent et expliquent. Le verbe bayyanu reprend la meme racine — la correction consiste a expliquer ce qui avait ete cache. Le verset 159 et le 160 forment un diptyque : cacher/maudire vs expliquer/pardonner.",
              axe3_sourate: "La racine b-y-n dans la sourate al-Baqarah porte les deux sens de clarte et d'explication. En 2:68, la vache est « bayyin » (claire). En 2:187, Dieu « explique » (yubayyinu) Ses signes aux gens. En 2:219-220, la meme expression « Dieu vous explique les signes ». La sourate insiste sur l'acte d'explication divine comme fondement de la responsabilite humaine.",
              axe4_coherence: "La forme II bayyanna apparait environ 35 fois dans le Coran. Le schema « bayyannahu li-n-nasi » (Nous l'avons explique aux gens) est specifique — il montre que l'explication est destinee a tous. En 3:187, Dieu reproche a ceux qui ont recu le Livre de ne pas l'avoir explique et de l'avoir cache. Le Coran lie l'explication a la responsabilite de transmettre.",
              axe5_frequence: "Pour la mission du khalifa, l'explication est l'outil principal de la mission. Dieu a explique — le khalifa doit relayer cette explication. Expliquer c'est rendre clair ce qui est obscur, c'est ouvrir l'acces a la verite. Le khalifa qui cache au lieu d'expliquer trahit le mandat divin."
            },
            "Séparation/Distance": {
              status: "probable",
              senses: ["separer", "entre", "quitter"],
              proof_ctx: "Le sens de separation est present en arriere-plan etymologique — expliquer c'est separer les idees pour les rendre claires. Mais le verbe bayyanna dans ce contexte est clairement l'acte d'explication, pas de separation spatiale. Le lien etymologique entre les deux sens eclaire le processus : expliquer c'est decomposer (separer) pour faire comprendre.",
              axe1_verset: "Le verbe bayyannahu pourrait porter le sens de separation au sens etymologique — « Nous l'avons separe/clarifie ». Mais le contexte syntaxique (li-n-nasi, aux gens) impose le sens d'explication a destination des gens.",
              axe2_voisins: "Les versets voisins utilisent b-y-n dans le sens de clarte et d'explication.",
              axe3_sourate: "La forme II bayyanna est utilisee dans la sourate pour l'explication divine des signes aux gens.",
              axe4_coherence: "Le Coran utilise la forme II de b-y-n pour l'acte d'expliquer, pas pour l'acte de separer physiquement.",
              axe5_frequence: "L'explication comme separation des idees pour la clarte est un outil fondamental du khalifa."
            }
          }
        }
      },
      // nws pos=12
      {
        word_key: "nws", position: 12, sense_chosen: "les gens",
        analysis_axes: {
          sense_chosen: "les gens",
          concept_chosen: "Humanité/Peuple",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["gens", "etres humains", "peuple"],
              proof_ctx: "Le mot an-nasi est un nom defini genitif de la racine n-w-s. Le Lane's donne : les gens, les etres humains, le peuple. Les gens sont l'ensemble des destinataires de l'explication divine. L'article defini (an-) marque l'universalite — ce n'est pas un groupe restreint mais les gens en general. La distinction avec « voir de loin » (nul) est claire : le mot est un nom designant les humains, pas un verbe de perception.",
              axe1_verset: "Le mot an-nasi designe les destinataires de l'explication divine — « bayyannahu li-n-nasi » (Nous l'avons explique aux gens). Le champ lexical (preuves, guidance, expliquer, Livre) montre que Dieu a explique pour les gens — l'explication est un service rendu a l'humanite. Cacher ce qui a ete explique aux gens c'est priver l'humanite de ce service divin.",
              axe2_voisins: "Le verset 150 mentionnait les gens dans le contexte de la direction de la priere. Le verset 159 les mentionne comme destinataires de l'explication. Les versets voisins montrent que les gens sont le public vise par la revelation — tout est fait pour eux.",
              axe3_sourate: "La racine n-w-s est une des plus frequentes de la sourate al-Baqarah. En 2:8, « parmi les gens, certains disent ». En 2:13, « comme les gens ont cru ». En 2:143, la communaute est temoin pour les gens. La sourate utilise an-nas pour situer l'action dans le contexte humain universel.",
              axe4_coherence: "La racine n-w-s apparait environ 241 fois dans le Coran. Les gens sont a la fois les destinataires de la revelation et les temoins de l'histoire. En 2:185, « le Coran est une guidance pour les gens ». Le Coran insiste sur le fait que la revelation est pour les gens — toute dissimulation est un tort fait a l'humanite entiere.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont les beneficiaires de la mission. Le khalifa est au service des gens — il doit leur transmettre la verite. Cacher la verite aux gens c'est les priver de leur droit a la clarte. La mission du khalifa est orientee vers les gens."
            },
            "Perception/Visibilité": {
              status: "nul",
              senses: ["voir de loin", "etre visible"],
              proof_ctx: "Le sens de perception est hors sujet — le mot est le nom an-nas designant les etres humains, pas un verbe de vision."
            },
            "Sens isolé/Oublier": {
              status: "nul",
              senses: ["oublier"],
              proof_ctx: "Le sens d'oublier est hors sujet — le mot est le nom defini an-nas, pas un verbe d'oubli."
            }
          }
        }
      },
      // ktb pos=14
      {
        word_key: "ktb", position: 14, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["livre", "ecriture revelee", "registre", "contrat ecrit", "contrat de mariage", "contrat d'affranchissement"],
              proof_ctx: "Le mot al-kitabi est un nom defini genitif de la racine k-t-b. Le Lane's donne : livre, ecriture revelee, ecrit. L'article defini (al-) marque que c'est LE Livre connu — l'ecriture revelee specifique. Le genitif est regi par la preposition fi (dans) — l'explication a eu lieu DANS le Livre. Le Livre est le support de l'explication divine. La distinction avec l'ecriture (probable) est que le contexte designe le Livre comme support materiel de la revelation, pas l'acte d'ecrire.",
              axe1_verset: "Le mot al-kitabi est le support de l'explication divine — « bayyannahu li-n-nasi fi l-kitabi » (Nous l'avons explique aux gens dans le Livre). Le champ lexical (faire descendre, preuves, guidance, expliquer) montre que le Livre contient tout : les preuves, la guidance et l'explication. Le verset montre que Dieu a fourni le support complet — le Livre est l'outil d'acces a la verite.",
              axe2_voisins: "Les versets voisins mentionnent le Livre dans le contexte de la revelation et de la direction. Le verset 159 precise que le Livre est le lieu de l'explication — c'est dans le Livre que Dieu a explique aux gens. Le Livre est le depositaire de la clarte divine.",
              axe3_sourate: "La racine k-t-b est une des racines structurantes de la sourate al-Baqarah. En 2:2, « ce Livre, nul doute en lui, guidance pour les pieux ». En 2:44, « vous qui lisez le Livre ». En 2:85, le Livre est juge et temoin. La sourate est structuree autour du Livre comme reference centrale.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le mot kitab au sens de Livre revele est l'un des mots les plus frequents. En 2:174, « ceux qui cachent ce que Dieu a fait descendre du Livre ». Le verset 159 et le 174 partagent le meme theme — la dissimulation du contenu du Livre.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide de la mission. Tout est dans le Livre — les preuves, la guidance, l'explication. Le khalifa doit ouvrir le Livre et le transmettre, pas le fermer. Le Livre est l'outil principal de la mission du khalifa."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["ecrire", "dicter", "demander d'ecrire", "ecrire a quelqu'un", "s'inscrire", "copier un livre", "art de l'ecriture", "scribe", "savant", "ecole", "enseignant", "vendeur de livres"],
              proof_ctx: "Le sens d'ecriture est un sens fondamental de k-t-b — l'acte de tracer des signes pour conserver l'information. La distinction avec le Livre est que l'ecriture est l'acte et le Livre est le resultat. Le verset parle du Livre comme support (fi l-kitabi, dans le Livre), pas de l'acte d'ecrire.",
              axe1_verset: "Le mot al-kitabi pourrait theoriquement porter le sens d'ecriture. Mais le verset traite le kitab comme un lieu (fi l-kitabi, dans le Livre) ou l'explication est deposee. On explique dans un livre, pas dans un acte d'ecriture.",
              axe2_voisins: "Le contexte des versets voisins traite le kitab comme le Livre revele, pas comme l'acte d'ecrire.",
              axe3_sourate: "La sourate al-Baqarah utilise kitab principalement au sens de Livre revele dans ce contexte.",
              axe4_coherence: "Le Coran utilise fi l-kitab pour designer le contenu du Livre, pas l'acte d'ecrire.",
              axe5_frequence: "L'ecriture comme acte est un outil du khalifa, mais dans ce verset c'est le Livre comme support de la revelation qui est en jeu."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "rendre obligatoire", "juger", "decret divin", "predestination"],
              proof_ctx: "Le sens de decret est hors sujet — le verset parle du Livre comme support de l'explication divine, pas d'un decret ou d'une prescription."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre"],
              proof_ctx: "Le sens d'assemblage est hors sujet — le contexte est le Livre revele, pas l'acte de rassembler."
            }
          }
        }
      },
      // len pos=16 (1ere occurrence — yal'anuhumu Allahu)
      {
        word_key: "len", position: 16, sense_chosen: "maudire",
        analysis_axes: {
          sense_chosen: "maudire",
          concept_chosen: "Malédiction/Exclusion",
          concepts: {
            "Malédiction/Exclusion": {
              status: "retenu",
              senses: ["maudire", "malediction", "maudit"],
              proof_ctx: "Le verbe yal'anuhumu est un inaccompli 3MS de la racine l-e-n avec pronom suffixe 3MP. Le Lane's donne : maudire, eloigner de la misericorde, exclure de la grace divine. La malediction est l'acte d'eloigner definitivement quelqu'un de la misericorde divine — c'est un eloignement permanent et irreversible. L'inaccompli indique que la malediction est continue et active — elle n'est pas ponctuelle mais permanente. Le pronom suffixe « humu » montre que la malediction atteint directement ceux qui cachent. Le sujet est Allahu (Dieu) — c'est Dieu Lui-meme qui maudit. Premiere des trois occurrences de la racine l-e-n dans le verset, montrant l'intensite de la consequence.",
              axe1_verset: "Le verbe yal'anuhumu introduit la consequence de la dissimulation — la malediction divine. Le champ lexical du verset passe de la dissimulation (cacher, preuves, guidance) a la punition (maudire, Dieu, maudisseurs). Le verset construit un mouvement : acte (cacher) → consequence (etre maudit). La malediction divine est la consequence directe de la dissimulation de la verite. Le sujet est Dieu — la malediction vient de la plus haute autorite.",
              axe2_voisins: "Le verset 160 annoncera le repentir comme echappatoire a la malediction — « sauf ceux qui se repentent ». La malediction du verset 159 n'est donc pas definitive pour celui qui se corrige. Les versets 159-160 forment un diptyque : malediction pour ceux qui cachent, pardon pour ceux qui se repentent.",
              axe3_sourate: "La racine l-e-n apparait dans la sourate al-Baqarah dans des contextes de severite. En 2:88, « la malediction de Dieu sur les dissimulateurs ». En 2:89, la malediction est liee au rejet de la verite. La sourate utilise la malediction comme la consequence ultime du rejet delibere de la revelation.",
              axe4_coherence: "La racine l-e-n apparait environ 41 fois dans le Coran. La malediction divine est reservee aux actes les plus graves — la dissimulation de la verite revelee, le rejet des envoyes, la corruption de la terre. En 4:93, la malediction pour le meurtre delibere. Le Coran reserve la malediction aux fautes les plus graves — cacher la revelation est dans cette categorie.",
              axe5_frequence: "Pour la mission du khalifa, la malediction est l'antithese de la benediction. Le khalifa qui cache la verite s'expose a la malediction — il passe de la proximite divine a l'eloignement. La malediction est l'echec total de la mission — etre eloigne de Dieu alors qu'on devait etre Son representant."
            }
          }
        }
      },
      // alh pos=17
      {
        word_key: "alh", position: 17, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif. Le Lane's donne : Dieu, la divinite unique. Ici Allah est le sujet de la malediction — c'est Dieu qui maudit ceux qui cachent la revelation. Le nominatif marque que Dieu est l'agent actif de la malediction. La malediction divine a une gravite superieure a toute autre — elle vient de la source de la misericorde, ce qui rend l'eloignement definitif.",
              axe1_verset: "Le nom Allahu est le sujet du verbe yal'anuhumu — Dieu les maudit. Le champ lexical du verset montre que Dieu est a la fois la source de la revelation (Nous avons fait descendre, Nous avons explique) et l'agent de la malediction. Dieu a donne et explique — ceux qui cachent ce don sont maudits par le Donateur Lui-meme. La malediction divine est la consequence logique de la dissimulation de la verite divine.",
              axe2_voisins: "Le verset 160 montrera que Dieu est aussi Celui qui pardonne — « Dieu accepte leur repentir ». Dieu maudit et pardonne selon les actes. Les versets 159-160 montrent les deux faces de l'action divine : severite pour les dissimulateurs, misericorde pour les repentants.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il structure chaque passage — Dieu est le sujet principal de chaque action majeure. En 2:159, Dieu maudit. En 2:160, Dieu pardonne. La sourate montre que Dieu agit selon la justice — la malediction pour la dissimulation, le pardon pour le repentir.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:159, Dieu est l'agent de la malediction — un role severe mais juste. Le Coran montre que la malediction divine n'est pas arbitraire — elle repond a un acte grave et delibere. En 47:23, « ceux-la, Dieu les a maudits, les a rendus sourds et a aveugle leurs regards ».",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. La malediction de Dieu signifie l'echec definitif de la mission. Le khalifa qui dissimule la verite est maudit par Celui-la meme qui l'a mandate. C'est la pire issue possible — etre rejete par Celui qu'on devait servir."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["adorer", "faire adorer", "se devouer au culte", "diviniser"],
              proof_ctx: "Le mot est le nom propre Allah au nominatif, pas un verbe d'adoration. Le contexte est la malediction divine."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de detresse. Le contexte est Dieu comme agent de la malediction."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["chercher refuge", "proteger", "demeurer"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est la malediction, pas la protection."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le mot est le nom propre Allah dans un contexte de malediction."
            }
          }
        }
      },
      // len pos=18 (2eme occurrence — wa-yal'anuhumu al-la'inuna)
      {
        word_key: "len", position: 18, sense_chosen: "maudire",
        analysis_axes: {
          sense_chosen: "maudire",
          concept_chosen: "Malédiction/Exclusion",
          concepts: {
            "Malédiction/Exclusion": {
              status: "retenu",
              senses: ["maudire", "malediction", "maudit"],
              proof_ctx: "Deuxieme occurrence du verbe yal'anuhumu dans le verset — meme forme (inaccompli 3MS avec pronom suffixe 3MP) mais avec un sujet different. Le sujet n'est plus Allahu (Dieu) mais al-la'inuna (les maudisseurs). La repetition du meme verbe avec un deuxieme sujet amplifie la malediction — elle n'est pas seulement divine mais aussi universelle. Memes analyses morphologiques que pour la premiere occurrence en position 16.",
              axe1_verset: "Le deuxieme yal'anuhumu elargit le cercle des maudisseurs — apres Dieu, les maudisseurs aussi les maudissent. Le verset construit une escalade : la malediction divine est suivie d'une malediction universelle. Ceux qui cachent la verite sont maudits de toutes parts — par Dieu et par toute creature qui maudit. Le verset montre l'isolement total des dissimulateurs.",
              axe2_voisins: "Le verset 160 offrira le contraste — ceux qui se repentent seront pardonnes. La double malediction du verset 159 rend le repentir du verset 160 d'autant plus urgent. L'accumulation de la malediction pousse a la prise de conscience et au repentir.",
              axe3_sourate: "La sourate al-Baqarah utilise la double malediction (divine et universelle) pour marquer la gravite extreme de la dissimulation. Ce doublement de la malediction est rare dans la sourate — il montre que cacher la revelation est un peche qui mobilise la reprobation de toute la creation.",
              axe4_coherence: "Le doublement de la malediction (Dieu + les maudisseurs) apparait dans le Coran pour les fautes les plus graves. En 3:87, la malediction de Dieu, des anges et des gens en totalite. Le Coran amplifie la malediction en multipliant les sources pour montrer l'unanimite de la reprobation.",
              axe5_frequence: "Pour la mission du khalifa, la double malediction montre l'ampleur de l'echec. Non seulement Dieu maudit, mais toute la creation maudit aussi. Le khalifa qui cache la verite est rejete par Dieu et par les creatures — il est seul dans son echec."
            }
          }
        }
      },
      // len pos=19 (3eme occurrence — al-la'inuna)
      {
        word_key: "len", position: 19, sense_chosen: "maudisseur",
        analysis_axes: {
          sense_chosen: "maudisseur",
          concept_chosen: "Malédiction/Exclusion",
          concepts: {
            "Malédiction/Exclusion": {
              status: "retenu",
              senses: ["maudire", "malediction", "maudit"],
              proof_ctx: "Le mot al-la'inuna est un participe actif pluriel masculin defini de la racine l-e-n. Le Lane's donne : ceux qui maudissent, les maudisseurs. Le participe actif indique que les maudisseurs exercent la malediction de maniere permanente et active — ce ne sont pas des gens qui maudissent ponctuellement mais des etres dont la fonction inclut la malediction. L'article defini (al-) marque une categorie connue — les maudisseurs sont identifies (les anges, les croyants, les creatures). Troisieme occurrence de la racine l-e-n dans le verset, completant le triptyque : maudire (verbe 1) + maudire (verbe 2) + maudisseurs (nom).",
              axe1_verset: "Le mot al-la'inuna est le sujet du deuxieme yal'anuhumu. Les maudisseurs completent la malediction divine par une malediction universelle. Le champ lexical du verset se ferme sur la malediction triple : le verbe maudire (1ere fois avec Dieu), le verbe maudire (2eme fois avec les maudisseurs), le nom maudisseurs. La triple occurrence de la racine l-e-n martele la consequence avec une force exceptionnelle.",
              axe2_voisins: "Le verset 160 offrira le pardon pour ceux qui se repentent, corrigent et expliquent. Le contraste entre les maudisseurs du verset 159 et le pardon du verset 160 montre que la porte du repentir reste ouverte meme apres une telle malediction — a condition de corriger et d'expliquer ce qui avait ete cache.",
              axe3_sourate: "Le mot al-la'inuna est rare dans la sourate al-Baqarah — il n'apparait qu'ici. Ce mot designe une categorie d'etres qui exercent la malediction comme fonction. Les commentateurs identifient ces maudisseurs comme les anges, les croyants, ou toutes les creatures de Dieu. La sourate montre que la dissimulation de la verite provoque une reprobation cosmique.",
              axe4_coherence: "Le participe actif la'in (maudisseur) apparait rarement dans le Coran — il designe une categorie specifique d'etres qui maudissent les dissimulateurs. En 3:87, les maudisseurs sont les anges et les gens. Le Coran montre que la malediction des dissimulateurs n'est pas seulement divine mais cosmique — toute la creation repudie ceux qui cachent la verite.",
              axe5_frequence: "Pour la mission du khalifa, les maudisseurs representent la creation entiere qui rejette l'echec de la mission. Quand le khalifa cache la verite, ce n'est pas seulement Dieu qui le desapprouve — toute la creation se retourne contre lui. La mission du khalifa est cosmique et son echec est cosmiquement repudie."
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

  const verseIds = [166];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 159 ===\n');
  await processVerse(159);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V159 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
