const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 103-104
// 2:103 → verse_id=110, analysis_id=468
// 2:104 → verse_id=111, analysis_id=469
// =====================================================

const verseData = {
  103: {
    verse_id: 110,
    analysis_id: 468,
    translation_arab: "Et s'ils avaient cru et s'etaient premuni, une recompense de chez Dieu aurait certes ete meilleure. S'ils savaient !",
    full_translation: "Et s'ils avaient la foi et la piete, une recompense de la part d'Allah serait certes meilleure. S'ils savaient !",
    translation_explanation: `§DEMARCHE§
Le verset est une conditionnelle irreelle : « s'ils avaient cru et s'etaient premuni... ». Le verbe **amanuu** est un accompli 3MP de la forme IV de la racine a-m-n. Le Lane's donne : croire, avoir la foi, accepter comme vrai. La forme IV (af'ala) est causative — amana signifie se mettre en securite interieure par l'adhesion a la verite. L'accompli dans une conditionnelle irreelle (law) indique que cette condition n'a pas ete remplie. Le verbe **ittaqaw** est un accompli 3MP de la forme VIII de la racine w-q-y. Le Lane's donne : se premunir, se proteger, craindre. La forme VIII (ifta'ala) est reflexive — ittaqa signifie se proteger soi-meme. Le couple « croire et se premunir » est un binome recurrent dans le Coran — la foi interieure et la protection pratique vont ensemble. Le nom **mathubatun** est un nom feminin singulier indefini de la racine th-w-b. Le Lane's donne : recompense, retribution, ce qui revient. La mathuba est ce qui « revient » a celui qui a fait le bien — la recompense est un retour. Le particule **la** devant mathuba est un lam d'insistance — « certes une recompense ». La preposition **min 'indi Allahi** (de chez Dieu) situe la source de la recompense — elle vient de la presence de Dieu. Le mot **khayrun** est un nom masculin singulier de la racine kh-y-r. Le Lane's donne : bien, meilleur, mieux. Khayrun est un elatif (comparatif) — la recompense de Dieu est MEILLEURE que ce qu'ils ont choisi a la place (la magie du verset 102). Le verbe **kanu** est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister. Kanu ya'lamuna est une construction periphrastique — « s'ils etaient sachant » = « s'ils savaient ». Le verbe **ya'lamuna** est un inaccompli 3MP de la racine '-l-m. Le Lane's donne : savoir, connaitre. L'expression « law kanu ya'lamuna » (s'ils savaient) ferme le verset avec un regret — ils ne savent pas, ou plutot ils refusent de savoir.

§JUSTIFICATION§
**cru** — Le sens retenu est « croire/avoir la foi ». Le verbe amanuu designe l'adhesion interieure a la verite. L'alternative « accorder la securite » est ecartee car le verbe est intransitif ici — ils croient, ils ne securisent pas autrui.

**premuni** — Le sens retenu est « se premunir/se proteger ». Le verbe ittaqaw designe la protection de soi-meme contre le mal. L'alternative « bouclier » est ecartee car c'est un sens concret isole.

**recompense** — Le sens retenu est « recompense/retribution ». Le mot mathuba designe ce qui revient pour le bien fait. L'alternative « vetement » est ecartee car le contexte est la retribution, pas l'habillement.

**chez** — Le sens retenu est « proximite/presence ». La preposition 'inda situe la source de la recompense chez Dieu.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite unique.

**meilleure** — Le sens retenu est « bien/meilleur ». Le mot khayrun est un elatif marquant la superiorite de la recompense divine sur ce qu'ils ont choisi.

**etaient** — Le sens retenu est « etre/exister ». Le verbe kanu est un auxiliaire temporal.

**savaient** — Le sens retenu est « savoir/connaissance ». Le verbe ya'lamuna designe la connaissance. L'expression « s'ils savaient » exprime le regret.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens. Hamidullah traduit wqy par « piete » la ou nous donnons « se premunir ». Notre choix est plus fidele a l'etymologie de la racine w-q-y qui porte le sens de protection, pas de piete au sens devot. La taqwa est avant tout une protection — on se premunit contre le mal. Le mot « piete » en francais evoque une devotion passive, alors que la taqwa est active et defensive.`,
    segments: [
      { fr: "et si", phon: "wa-law", arabic: "\u0648\u064e\u0644\u064e\u0648\u0652", is_particle: true, position: 0 },
      { fr: "ils", phon: "annahum", arabic: "\u0623\u064e\u0646\u0651\u064e\u0647\u064f\u0645\u0652", is_particle: true, position: 1 },
      { fr: "avaient cru", pos: "verbe", phon: "amanuu", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u06df", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 2 },
      { fr: "et s'etaient premuni", pos: "verbe", phon: "wa-ttaqaw", arabic: "\u0648\u064e\u0671\u062a\u0651\u064e\u0642\u064e\u0648\u0652\u0627\u06df", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 3 },
      { fr: "certes une recompense", pos: "nom", phon: "la-mathubatun", arabic: "\u0644\u064e\u0645\u064e\u062b\u064f\u0648\u0628\u064e\u0629\u064c", word_key: "thwb", is_particle: false, sense_retenu: "recompense", position: 4 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 5 },
      { fr: "chez", pos: "nom", phon: "'indi", arabic: "\u0639\u0650\u0646\u062f\u0650", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 6 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 7 },
      { fr: "meilleure", pos: "nom", phon: "khayrun", arabic: "\u062e\u064e\u064a\u0652\u0631\u064c", word_key: "xyr", is_particle: false, sense_retenu: "meilleur", position: 8 },
      { fr: "si", phon: "law", arabic: "\u0644\u0651\u064e\u0648\u0652", is_particle: true, position: 9 },
      { fr: "ils etaient", pos: "verbe", phon: "kanuu", arabic: "\u0643\u064e\u0627\u0646\u064f\u0648\u0627\u06df", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 10 },
      { fr: "sachant", pos: "verbe", phon: "ya'lamuna", arabic: "\u064a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 11 }
    ],
    words: [
      // amn pos=2
      {
        word_key: "amn", position: 2, sense_chosen: "croire",
        analysis_axes: {
          sense_chosen: "croire",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["accepter comme vrai", "croire", "avoir la foi", "confirmer", "croyant"],
              proof_ctx: "Le verbe amanuu est un accompli 3MP de la forme IV de la racine a-m-n. Le Lane's donne : croire, avoir la foi, accepter comme vrai, se sentir en securite par l'adhesion. La forme IV (af'ala) est causative — amana c'est entrer dans la securite interieure par l'adhesion a la verite. L'accompli dans une conditionnelle irreelle (law) indique que cette condition n'a pas ete remplie — ils n'ont pas cru. La distinction avec la securite (probable) est que le contexte est la foi comme adhesion, pas la securite physique.",
              axe1_verset: "Le verbe amanuu ouvre la condition : s'ils avaient cru. Le champ lexical du verset oppose la foi (croire, se premunir) a ce qu'ils ont choisi a la place (la magie du verset 102). La foi est la premiere condition — sans elle, la recompense n'est pas accessible. Le verset lie croire et se premunir en un binome : la foi interieure doit etre accompagnee de la protection pratique. Le couple amanu wa-ttaqaw est un programme complet.",
              axe2_voisins: "Le verset 102 decrivait ce que les demons enseignaient — la magie. Le verset 103 pose l'alternative : au lieu de suivre la magie, s'ils avaient cru et s'etaient premuni. Le verset 104 s'adressera directement aux croyants. La progression est : le mal (102) → l'alternative (103) → l'injonction (104). Croire est l'alternative a la magie.",
              axe3_sourate: "La racine a-m-n est une des racines les plus frequentes de la sourate al-Baqarah. En 2:3-4, les croyants sont decrits. En 2:62, ceux qui croient en Dieu et au Jour Dernier. En 2:103, la foi est la condition manquee — ils n'ont pas cru. La sourate construit une opposition permanente entre ceux qui croient et ceux qui refusent.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. Le binome « amanu wa-ttaqaw » (ont cru et se sont premuni) apparait dans de nombreux versets — en 5:65, 7:96, 10:63. Ce binome est une formule coranique qui designe la completude de l'engagement : la foi interieure plus la protection pratique.",
              axe5_frequence: "Pour la mission du khalifa, croire est le fondement de la mission. La foi n'est pas passive — c'est une adhesion active a la verite. Le khalifa qui croit s'engage dans la mission, celui qui ne croit pas perd la recompense. La foi ouvre l'acces a la recompense divine qui est meilleure que tout ce que le monde offre."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["accorder la securite", "proteger"],
              proof_ctx: "Le sens de protection est un autre sens de a-m-n. Le contexte est la foi comme adhesion interieure, pas l'acte de proteger autrui."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "etre en securite", "confier", "se sentir en securite", "fidele", "lieu sur"],
              proof_ctx: "Le sens de securite est lie au sens de foi — croire (amana) c'est entrer dans la securite interieure. La distinction est que le verset parle de l'acte de croire (forme IV, causative), pas de l'etat de securite qui en resulte. La securite est le fruit de la foi, pas la foi elle-meme.",
              axe1_verset: "Le mot amanuu pourrait theoriquement porter le sens de « se sentir en securite ». Mais le contexte est la conditionnelle irreelle — s'ils avaient cru — qui porte sur l'adhesion a la verite, pas sur le sentiment de securite. Le sens de securite est une consequence de la foi, pas l'acte de foi lui-meme.",
              axe2_voisins: "Les versets voisins parlent de magie et de demons (102) puis de foi et de recompense (103). Le contraste est entre le mal et la foi, pas entre le danger et la securite.",
              axe3_sourate: "La sourate al-Baqarah utilise principalement la forme IV de a-m-n au sens de croire/avoir la foi. Le sens de securite est plutot porte par la forme I ou II.",
              axe4_coherence: "Le Coran utilise le binome « amanu wa-ttaqaw » avec le sens de croire et se premunir, pas de se sentir en securite et se premunir. La securite est un etat, la foi est un acte.",
              axe5_frequence: "La securite interieure est un fruit de la mission. Mais dans ce verset, l'accent est sur l'acte de croire, pas sur la tranquillite qui en decoule."
            },
            "Sens isolé/Amen": {
              status: "nul",
              senses: ["amen"],
              proof_ctx: "Le sens d'amen est une interjection. Le contexte est un verbe conjugue au passe, pas une exclamation."
            }
          }
        }
      },
      // wqy pos=3
      {
        word_key: "wqy", position: 3, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["proteger", "preserver", "craindre", "piete", "se premunir", "eviter"],
              proof_ctx: "Le verbe ittaqaw est un accompli 3MP de la forme VIII de la racine w-q-y. Le Lane's donne : se proteger, se premunir, eviter le mal. La forme VIII (ifta'ala) est reflexive — ittaqa c'est se proteger soi-meme. La taqwa est l'acte de se mettre a l'abri du mal par la vigilance et la pratique. L'accompli dans une conditionnelle irreelle (law) indique que cette condition n'a pas ete remplie — ils ne se sont pas premuni. La distinction avec « bouclier » (nul) est que le contexte est l'acte de se premunir, pas l'objet physique.",
              axe1_verset: "Le verbe ittaqaw est le second element du binome : croire et se premunir. Le champ lexical du verset (croire, se premunir, recompense, Dieu, meilleur) construit l'alternative a la magie. Se premunir est la dimension pratique de la foi — apres avoir cru interieurement, on se protege exterieurement. Le verset montre que la foi seule ne suffit pas — elle doit etre accompagnee de la taqwa.",
              axe2_voisins: "Le verset 102 montrait les dangers de la magie. Le verset 103 pose l'alternative : au lieu de la magie, se premunir. La taqwa est l'antidote de la magie — se proteger par la foi au lieu de se proteger par les charmes. Le verset 104 appellera les croyants a ecouter — la suite logique de la taqwa.",
              axe3_sourate: "La racine w-q-y apparait frequemment dans la sourate al-Baqarah. En 2:2, le Livre est une guidance pour les muttaqin (ceux qui se premunissent). En 2:21, « adorez votre Seigneur afin que vous vous premunissiez ». En 2:103, la taqwa est la condition manquee. La sourate fait de la taqwa un critere de distinction.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. Le binome « amanu wa-ttaqaw » est une formule recurrente. En 7:96, « si les gens des cites avaient cru et s'etaient premuni, Nous leur aurions ouvert les benedictions du ciel et de la terre ». La meme structure conditionnelle montre que la foi et la taqwa ouvrent les portes de la benediction.",
              axe5_frequence: "Pour la mission du khalifa, se premunir est un pilier de la mission. Le khalifa doit se proteger du mal par la vigilance et la pratique. La taqwa n'est pas la peur passive — c'est la protection active. Le khalifa qui se premunit garde sa mission intacte face aux tentations."
            },
            "Sens isolé/Bouclier": {
              status: "nul",
              senses: ["bouclier"],
              proof_ctx: "Le sens de bouclier est un sens concret isole. Le contexte est l'acte de se premunir, pas un objet defensif."
            }
          }
        }
      },
      // thwb pos=4
      {
        word_key: "thwb", position: 4, sense_chosen: "recompense",
        analysis_axes: {
          sense_chosen: "recompense",
          concept_chosen: "Vêtement/Rétribution",
          concepts: {
            "Vêtement/Rétribution": {
              status: "retenu",
              senses: ["vetement", "recompense", "revenir"],
              proof_ctx: "Le nom mathubatun est un nom feminin singulier indefini de la racine th-w-b. Le Lane's donne : recompense, retribution, ce qui revient comme retour pour une action. La mathuba est litteralement « ce qui revient » — le retour d'un bien fait. Le sens de « revenir » est le sens premier de la racine : thaba = revenir. La recompense est ce qui revient a celui qui a fait le bien. L'indefini (mathubatun sans article) marque que c'est une recompense non specifiee — sa nature exacte est connue de Dieu seul. La particule la- (certes) devant le mot insiste sur la certitude de cette recompense.",
              axe1_verset: "Le mot mathubatun est l'objet de la conditionnelle : s'ils avaient cru, certes une recompense... Le champ lexical (croire, se premunir, Dieu, meilleur) montre que la recompense est la consequence naturelle de la foi et de la taqwa. Le verset oppose la recompense divine (meilleure) a ce qu'ils ont choisi a la place (la magie). Le mot est indefini et insistant (la-mathubatun) — la recompense est certaine mais sa nature est immense et non definie.",
              axe2_voisins: "Le verset 102 montrait le commerce avec les demons — un echange desastreux. Le verset 103 pose la meilleure alternative : la recompense de Dieu. Le contraste est entre le commerce avec les demons (102) et la retribution de Dieu (103). Ce qui revient de Dieu est meilleur que ce qui vient des demons.",
              axe3_sourate: "La racine th-w-b apparait dans la sourate al-Baqarah pour la retribution. En 2:103, la mathuba est la recompense conditionnelle. La sourate insiste sur le fait que chaque acte a un retour — la recompense est un mecanisme de justice.",
              axe4_coherence: "La racine th-w-b apparait environ 30 fois dans le Coran. Le thawab (recompense) est toujours lie a l'action — en 3:148, « Dieu leur donna la recompense de ce monde et la belle recompense de l'au-dela ». La recompense est proportionnelle a l'effort de foi et de taqwa.",
              axe5_frequence: "Pour la mission du khalifa, la recompense est la retribution de la mission accomplie. La recompense de Dieu est meilleure que tout ce que le monde peut offrir — y compris la magie et les pouvoirs occultes. Le khalifa doit viser la recompense divine, pas les benefices terrestres."
            }
          }
        }
      },
      // end pos=6
      {
        word_key: "end", position: 6, sense_chosen: "aupres de",
        analysis_axes: {
          sense_chosen: "aupres de",
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["aupres de", "chez", "pres de"],
              proof_ctx: "Le mot 'indi est une preposition de la racine '-n-d. Le Lane's donne : aupres de, chez, pres de. La proximite est une relation spatiale ou relationnelle permanente. Ici « min 'indi Allahi » signifie que la recompense vient de la presence de Dieu, de Sa proximite. La distinction avec « selon » (nul) est claire : le verset parle d'un lieu d'origine (d'ou vient la recompense), pas d'une opinion.",
              axe1_verset: "Le mot 'indi situe la source de la recompense — elle vient de chez Dieu. La preposition min (de) + 'indi (chez) cree l'expression « de chez Dieu ». Le champ lexical (croire, se premunir, recompense, Dieu) montre que la recompense n'est pas terrestre — elle vient de la presence divine. Ce qui vient de chez Dieu a une valeur superieure a tout ce qui vient d'ailleurs.",
              axe2_voisins: "Le verset 101 utilisait la meme expression « min 'indi Allahi » pour la provenance de l'envoye. Le verset 103 reutilise la meme expression pour la provenance de la recompense. Les deux versets lient la valeur de ce qui est donne a sa source divine.",
              axe3_sourate: "La preposition 'inda avec Dieu est recurrente dans la sourate al-Baqarah. En 2:54, « c'est mieux aupres de votre Createur ». En 2:62, « ils auront leur recompense aupres de leur Seigneur ». La sourate associe systematiquement la valeur a la proximite divine.",
              axe4_coherence: "L'expression « min 'indi Allah » apparait dans de nombreux versets pour marquer l'origine divine. Ce qui vient de chez Dieu porte l'autorite et la valeur divines. En 2:103, la recompense de chez Dieu est declaree meilleure — la source garantit la qualite.",
              axe5_frequence: "Pour la mission du khalifa, ce qui vient de chez Dieu est le fondement de la mission. La recompense de chez Dieu est meilleure — le khalifa doit viser cette source plutot que les benefices terrestres."
            },
            "Opinion/Jugement": {
              status: "nul",
              senses: ["selon"],
              proof_ctx: "Le sens d'opinion est hors sujet — le verset parle de la provenance spatiale de la recompense, pas d'un avis."
            }
          }
        }
      },
      // alh pos=7
      {
        word_key: "alh", position: 7, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif. Le Lane's donne : Dieu, la divinite unique. Ici Allah est la source de la recompense — la recompense vient de chez Dieu. Le nom situe l'origine de la retribution dans la presence divine. La recompense de Dieu est meilleure car elle vient de la source supreme.",
              axe1_verset: "Le nom Allahi qualifie la source de la recompense — « min 'indi Allahi » (de chez Dieu). Le champ lexical (croire, se premunir, recompense, meilleur) montre que Dieu est la source de tout bien. La recompense est meilleure PARCE QU'elle vient de Dieu. Le verset lie la qualite de la retribution a la nature de sa source.",
              axe2_voisins: "Le verset 101 mentionnait Dieu comme source de l'envoye. Le verset 102 mentionnait les demons. Le verset 103 revient a Dieu comme source de la recompense. La progression montre le choix : les demons ou Dieu, la magie ou la recompense.",
              axe3_sourate: "Le nom Allah structure chaque passage de la sourate al-Baqarah. En 2:103, Dieu est la source de la recompense. La sourate montre que tout vient de Dieu — les envoyes (101), les epreuves, et les recompenses (103).",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:103, Sa mention comme source de la recompense rappelle que Dieu est le retribueur ultime — Il recompense ceux qui croient et se premunissent.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant et le retribueur de la mission. La recompense vient de Dieu — le khalifa travaille pour Dieu, pas pour les benefices terrestres."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de detresse."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le mot est le nom propre Allah dans un contexte de recompense."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se devouer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "proteger", "chercher refuge"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est la source de la recompense."
            }
          }
        }
      },
      // xyr pos=8
      {
        word_key: "xyr", position: 8, sense_chosen: "meilleur",
        analysis_axes: {
          sense_chosen: "meilleur",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "meilleur", "mieux", "preferer"],
              proof_ctx: "Le mot khayrun est un nom masculin singulier de la racine kh-y-r. Le Lane's donne : bien, meilleur, mieux, preferable. Khayrun est un elatif — il exprime la superiorite. Ici « la-mathubatun min 'indi Allahi khayrun » signifie que la recompense de Dieu est meilleure que ce qu'ils ont choisi. L'elatif compare implicitement la recompense divine a la magie et aux pouvoirs occultes du verset 102. Le bien ici n'est pas abstrait — c'est un comparatif concret.",
              axe1_verset: "Le mot khayrun est le predicat de la conditionnelle — la recompense serait certes meilleure. Le champ lexical (croire, se premunir, recompense, Dieu) construit le comparatif : ce qui vient de Dieu par la foi est meilleur que ce qui vient des demons par la magie. Le mot khayrun donne au verset sa pointe — la comparaison entre le bien divin et le choix humain errone.",
              axe2_voisins: "Le verset 102 montrait que la magie ne profite pas et nuit. Le verset 103 repond : la recompense de Dieu est meilleure. Le contraste est clair — la magie apporte le mal, la foi apporte le meilleur. Le verset 104 completera en appelant les croyants a ecouter.",
              axe3_sourate: "La racine kh-y-r apparait dans la sourate al-Baqarah pour les comparaisons de valeur. En 2:54, « c'est mieux aupres de votre Createur ». En 2:106, « Nous en apportons une meilleure ». La sourate utilise khayrun pour montrer que le choix de Dieu est toujours superieur au choix humain.",
              axe4_coherence: "La racine kh-y-r apparait environ 189 fois dans le Coran. Le schema « khayrun lahum/lakum » (meilleur pour eux/vous) est recurrent. Le Coran compare systematiquement le choix de Dieu au choix humain — le divin est toujours declare meilleur. En 2:103, la recompense de Dieu est meilleure que tout substitut.",
              axe5_frequence: "Pour la mission du khalifa, le bien de Dieu est le critere de la mission. Le khalifa doit choisir ce qui est meilleur selon Dieu, pas selon les apparences. La recompense divine est meilleure — ce constat guide chaque decision de la mission."
            }
          }
        }
      },
      // knw pos=10
      {
        word_key: "knw", position: 10, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["etre", "devenir", "exister"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister, devenir. Kanu est un verbe auxiliaire qui situe dans le passe — « law kanu ya'lamuna » (s'ils etaient sachant = s'ils savaient). L'accompli avec law cree une conditionnelle irreelle au passe. Le verbe porte ici un sens purement auxiliaire — il n'a pas de contenu semantique propre au-dela de la temporalite.",
              axe1_verset: "Le verbe kanu sert de support temporel a ya'lamuna (savoir). L'expression « law kanu ya'lamuna » ferme le verset avec un regret : s'ils savaient. Le verbe kana cree la distance temporelle qui rend le constat triste — ils ne savaient pas, et maintenant il est trop tard. Le champ lexical du verset oppose le savoir a l'ignorance choisie.",
              axe2_voisins: "Le verset 102 se terminait par « law kanu ya'lamun » (s'ils savaient). Le verset 103 reprend exactement la meme expression terminale. Cette repetition cree un refrain — le regret du savoir refuse est le theme commun. Les deux versets montrent que le manque de savoir est un choix, pas une fatalite.",
              axe3_sourate: "La racine k-w-n est une des plus frequentes de la sourate al-Baqarah. Le verbe kana sert de support temporel dans des dizaines de versets. En 2:103, il cree la distance du regret — s'ils avaient ete dans l'etat de savoir.",
              axe4_coherence: "La racine k-w-n apparait plus de 1350 fois dans le Coran. Le verbe kana est omnipresent comme auxiliaire. L'expression « law kanu ya'lamuna » apparait en 2:102, 2:103, 29:16. Ce refrain souligne le theme coranique du savoir refuse.",
              axe5_frequence: "Pour la mission du khalifa, etre dans l'etat de savoir est une exigence de la mission. Le verbe kana situe le khalifa dans le temps — il etait, il est, il sera. La mission s'inscrit dans la duree et exige un savoir permanent."
            }
          }
        }
      },
      // elm pos=11
      {
        word_key: "elm", position: 11, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "certitude", "enseignement", "connaitre", "etre informe", "savoir", "savant"],
              proof_ctx: "Le verbe ya'lamuna est un inaccompli 3MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe. L'inaccompli dans la construction « law kanu ya'lamuna » (s'ils savaient) exprime un regret — le savoir n'est pas present chez eux. Mais le Coran sous-entend que l'information est disponible — c'est eux qui refusent de savoir. Le savoir est une realite interieure permanente — refuser de savoir est un acte de volonte, pas d'incapacite.",
              axe1_verset: "Le verbe ya'lamuna ferme le verset avec l'expression « s'ils savaient ». Le champ lexical (croire, se premunir, recompense, Dieu, meilleur) montre que le savoir porte sur la valeur superieure de la recompense divine. Ils ne savent pas que la recompense de Dieu est meilleure — ou ils refusent de le savoir. Le verset oppose le savoir potentiel (la recompense est meilleure) a l'ignorance choisie.",
              axe2_voisins: "Le verset 101 se terminait par « comme s'ils ne savaient pas ». Le verset 102 par « s'ils savaient ». Le verset 103 par « s'ils savaient » encore. Trois versets consecutifs terminent sur le theme du savoir — le savoir feint (101), le savoir manque (102), le savoir refuse (103). Le theme du savoir structure tout ce passage.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:13, « ce sont eux les imbeciles mais ils ne savent pas ». En 2:30, « Je sais ce que vous ne savez pas ». En 2:103, le savoir est la condition manquee. La sourate montre que le savoir est accessible mais souvent refuse.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. L'expression « law kanu ya'lamuna » est un refrain qui marque le regret. Le Coran insiste sur le fait que l'information est disponible — le probleme n'est pas le manque d'acces au savoir mais le refus de l'accepter.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil de la mission. Le verset 103 enseigne que le manque de savoir a des consequences — on perd la recompense de Dieu. Le khalifa doit chercher le savoir activement pour ne pas manquer ce qui est meilleur."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["univers", "monde", "ensemble des creatures", "les mondes"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe ya'lamuna est un verbe de connaissance."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["levre fendue", "marquer", "signe", "drapeau", "montagne", "repere", "etendard"],
              proof_ctx: "Le sens de signe est hors sujet — le verbe est « savoir », pas « marquer »."
            }
          }
        }
      }
    ]
  },
  104: {
    verse_id: 111,
    analysis_id: 469,
    translation_arab: "O vous qui avez cru ! Ne dites pas « Ra'ina » mais dites « Unzurna » ; et ecoutez ! Et pour les couvrants un chatiment douloureux.",
    full_translation: "O vous qui avez la foi ! Ne dites pas : « Raina » mais dites : « Unzurna » ; et ecoutez ! Et un chatiment douloureux est [reserve] aux infideles.",
    translation_explanation: `§DEMARCHE§
Le verset est une injonction directe aux croyants. L'appel **ya ayyuha alladhina amanuu** (o vous qui avez cru) est la formule d'adresse aux croyants dans le Coran. Le verbe **amanuu** est un accompli 3MP de la forme IV de la racine a-m-n. Le Lane's donne : croire, avoir la foi. L'accompli indique que la foi est un fait acquis — ces gens ont deja cru, et c'est en tant que croyants qu'ils sont interpelles. Le verbe **taquluu** est un inaccompli 2MP apocopé de la racine q-w-l avec la negation la. Le Lane's donne : dire, parler, affirmer. L'apocopé avec la exprime l'interdiction — ne dites pas. L'objet de l'interdiction est le mot **Ra'ina** — un imperatif de la forme III de la racine r-'-y. Le Lane's donne : paitre, garder, veiller sur. Ra'ina signifie litteralement « veille sur nous » ou « prends soin de nous ». Le probleme est que ce mot pouvait etre detourne par certains pour y mettre un sens injurieux (en hebreu ra'ina peut signifier « notre mal » ou « ecoute, toi, mauvais »). Le Coran interdit donc ce mot ambigu et le remplace par **Unzurna** — un imperatif de la racine n-z-r. Le Lane's donne : regarder, considerer, attendre. Unzurna signifie « regarde-nous » ou « accorde-nous du temps ». Ce mot est clair et sans ambiguite. Le verbe **isma'uu** est un imperatif 2MP de la racine s-m-'. Le Lane's donne : ecouter, entendre, obeir. L'imperatif est une injonction directe — ecoutez. Le mot **al-kafirina** est un participe actif pluriel masculin de la racine k-f-r. Le Lane's donne : couvrir, cacher, renier. Le kafir est celui qui couvre la verite — il dissimule ce qu'il sait etre vrai. Le mot **'adhabun** (chatiment) est de la racine '-dh-b et est traite ici comme particule (non analyse). Le mot **alimun** est un adjectif de la racine a-l-m. Le Lane's donne : douloureux, qui fait mal. Alim qualifie le chatiment — un chatiment qui fait mal.

§JUSTIFICATION§
**cru** — Le sens retenu est « croire/avoir la foi ». Le verbe amanuu dans l'appel « ya ayyuha alladhina amanuu » designe ceux qui ont la foi. C'est une formule d'adresse consacree.

**ne dites pas** — Le sens retenu est « dire/parler ». Le verbe taquluu est a la forme prohibitive. L'alternative « avis/doctrine » est ecartee car le contexte est l'acte de parler, pas une opinion.

**Ra'ina** — Le sens retenu est « paitre/veiller sur ». Le mot ra'ina est un imperatif de la forme III signifiant « veille sur nous ». Le Coran interdit ce mot a cause de son ambiguite exploitee par certains.

**dites** — Le sens retenu est « dire/parler ». Le verbe quluu est a l'imperatif.

**ecoutez** — Le sens retenu est « ecouter/entendre ». Le verbe isma'uu est un imperatif. L'alternative « reputation » est ecartee car le contexte est l'acte d'ecouter.

**couvrants** — Le sens retenu est « couvrir/cacher ». Le mot al-kafirina designe ceux qui couvrent la verite. Nous traduisons par « couvrants » pour rester fidele a l'etymologie de la racine k-f-r. L'alternative « mecreant » est ecartee car elle est trop restrictive — le kafir n'est pas seulement celui qui ne croit pas, c'est celui qui couvre activement la verite.

**douloureux** — Le sens retenu est « douleur/souffrance ». Le mot alimun qualifie le chatiment comme etant celui qui cause la douleur.

§CRITIQUE§
Les traductions courantes traduisent ra'ina par un simple emprunt sans explication. Hamidullah garde le mot arabe tel quel. Notre traduction preserve aussi le mot arabe car il est intraduisible en un seul mot francais sans perdre l'ambiguite qui justifie l'interdiction. La difference notable est le mot « kafirina » que Hamidullah traduit par « infideles ». Nous donnons « couvrants » car la racine k-f-r porte d'abord le sens de couvrir — le kafir couvre la verite. Le mot « infidele » en francais evoque la non-croyance passive, alors que le kufr est un acte actif de dissimulation.`,
    segments: [
      { fr: "o", phon: "ya ayyuha", arabic: "\u064a\u064e\u0640\u0670\u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627", is_particle: true, position: 0 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 1 },
      { fr: "ont cru", pos: "verbe", phon: "amanuu", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u06df", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 2 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 3 },
      { fr: "dites pas", pos: "verbe", phon: "taquluu", arabic: "\u062a\u064e\u0642\u064f\u0648\u0644\u064f\u0648\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 4 },
      { fr: "Ra'ina", pos: "verbe", phon: "ra'ina", arabic: "\u0631\u064e\u0640\u0670\u0639\u0650\u0646\u064e\u0627", word_key: "rey", is_particle: false, sense_retenu: "veiller sur", position: 5 },
      { fr: "et dites", pos: "verbe", phon: "wa-quluu", arabic: "\u0648\u064e\u0642\u064f\u0648\u0644\u064f\u0648\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 6 },
      { fr: "Unzurna", phon: "unzurna", arabic: "\u0671\u0646\u0638\u064f\u0631\u0652\u0646\u064e\u0627", is_particle: false, sense_retenu: "regarder", position: 7, word_key: null },
      { fr: "et ecoutez", pos: "verbe", phon: "wa-sma'uu", arabic: "\u0648\u064e\u0671\u0633\u0652\u0645\u064e\u0639\u064f\u0648\u0627\u06df", word_key: "sme", is_particle: false, sense_retenu: "ecouter", position: 8 },
      { fr: "et pour les couvrants", pos: "nom", phon: "wa-li-l-kafirina", arabic: "\u0648\u064e\u0644\u0650\u0644\u0652\u0643\u064e\u0640\u0670\u0641\u0650\u0631\u0650\u064a\u0646\u064e", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 9 },
      { fr: "un chatiment", phon: "'adhabun", arabic: "\u0639\u064e\u0630\u064e\u0627\u0628\u064c", is_particle: true, position: 10 },
      { fr: "douloureux", pos: "adjectif", phon: "alimun", arabic: "\u0623\u064e\u0644\u0650\u064a\u0645\u064c", word_key: "alm", is_particle: false, sense_retenu: "douloureux", position: 11 }
    ],
    words: [
      // amn pos=2
      {
        word_key: "amn", position: 2, sense_chosen: "croire",
        analysis_axes: {
          sense_chosen: "croire",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["accepter comme vrai", "croire", "avoir la foi", "confirmer", "croyant"],
              proof_ctx: "Le verbe amanuu est un accompli 3MP de la forme IV de la racine a-m-n. Le Lane's donne : croire, avoir la foi. La formule « ya ayyuha alladhina amanuu » est l'appel aux croyants — elle s'adresse a ceux qui ont deja cru. L'accompli indique que la foi est un fait acquis. La distinction avec la securite (probable) est que l'appel porte sur l'identite de croyant, pas sur un etat de securite.",
              axe1_verset: "Le verbe amanuu identifie les destinataires de l'injonction — « o vous qui avez cru ». Le champ lexical du verset (dire, ecouter, couvrants, chatiment) montre que les croyants sont distingues des couvrants. L'appel cree une frontiere : ceux qui ont cru recoivent des instructions, ceux qui couvrent recoivent un chatiment. La foi est le critere de distinction entre les deux groupes.",
              axe2_voisins: "Le verset 103 parlait d'eux a la troisieme personne (s'ils avaient cru). Le verset 104 passe a la deuxieme personne — o vous qui avez cru. Le changement de personne est significatif : on passe de la description des autres a l'adresse directe aux croyants. Le message est : ne faites pas comme eux.",
              axe3_sourate: "La formule « ya ayyuha alladhina amanuu » apparait environ 11 fois dans la sourate al-Baqarah. En 2:104, c'est la premiere occurrence dans cette sequence (101-104). La formule marque une transition — on passe de la narration a l'injonction. La sourate alterne entre recit et commandement.",
              axe4_coherence: "La formule « ya ayyuha alladhina amanuu » apparait environ 89 fois dans le Coran. Elle est l'ouverture standard des commandements adresses aux croyants. En 2:104, l'appel introduit une interdiction (ne dites pas) suivie d'un ordre (dites, ecoutez). Le schema est typique : interpellation → interdiction → prescription.",
              axe5_frequence: "Pour la mission du khalifa, la foi est l'identifiant du khalifa. L'appel « o vous qui avez cru » convoque le khalifa par son identite de croyant. C'est en tant que croyant qu'il recoit les instructions. La foi n'est pas seulement une conviction — c'est une identite qui cree des obligations."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["accorder la securite", "proteger"],
              proof_ctx: "Le sens de protection est hors sujet — la formule « ya ayyuha alladhina amanuu » porte sur l'identite de croyant."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "etre en securite", "confier", "se sentir en securite", "fidele", "lieu sur"],
              proof_ctx: "Le sens de securite est lie au sens de foi. La securite est le fruit de la foi — celui qui croit se sent en securite. Mais dans l'appel « ya ayyuha alladhina amanuu », le verbe porte sur l'adhesion, pas sur l'etat de securite.",
              axe1_verset: "L'appel « o vous qui avez cru » est une identification par la foi, pas par la securite. Le verset donne des instructions pratiques (ne dites pas, dites, ecoutez) — ce sont des instructions pour les croyants, pas pour les securises.",
              axe2_voisins: "Le contexte des versets voisins est la foi versus la magie et le kufr. La securite n'est pas le theme dominant.",
              axe3_sourate: "La sourate utilise la forme IV de a-m-n principalement au sens de croire. Le sens de securite est secondaire.",
              axe4_coherence: "Le Coran utilise la formule d'appel avec le sens de foi — les croyants sont ceux qui ont adhere a la verite.",
              axe5_frequence: "La securite est un fruit de la mission, pas le critere d'appel. L'accent est sur la foi comme identite."
            },
            "Sens isolé/Amen": {
              status: "nul",
              senses: ["amen"],
              proof_ctx: "Le sens d'amen est hors sujet — le mot est un verbe conjugue dans une formule d'appel."
            }
          }
        }
      },
      // qwl pos=4 (ne dites pas)
      {
        word_key: "qwl", position: 4, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parler", "parole", "discours", "dire", "affirmer"],
              proof_ctx: "Le verbe taquluu est un inaccompli 2MP apocopé de la racine q-w-l. Le Lane's donne : dire, parler, enoncer. L'apocopé avec la negation la exprime l'interdiction — ne dites pas. L'objet de l'interdiction est le mot Ra'ina. Le dire est un acte exterieur — les mots sortent de la bouche vers les destinataires. Ici le Coran controle les mots des croyants en interdisant un mot ambigu et en prescrivant un mot clair.",
              axe1_verset: "Le verbe taquluu est le premier element de l'injonction — ne dites pas. Le champ lexical du verset tourne autour de la parole (dire, Ra'ina, Unzurna) et de l'ecoute (ecoutez). Le verset controle les deux extremites de la communication : ce qu'on dit et ce qu'on ecoute. L'interdiction de dire Ra'ina montre que les mots ont de l'importance — un mot ambigu peut etre detourne.",
              axe2_voisins: "Le verset 103 parlait du savoir et de l'ignorance. Le verset 104 passe a la parole et a l'ecoute. La progression est logique : apres avoir parle du savoir (103), le Coran enseigne comment parler et ecouter (104). Le controle de la parole suit le controle du savoir.",
              axe3_sourate: "La racine q-w-l est une des plus frequentes de la sourate al-Baqarah. En 2:8, « parmi les gens, il y a ceux qui disent ». En 2:80, « ils disent ». En 2:104, le Coran prescrit ce qu'il faut dire et ce qu'il ne faut pas dire. La sourate montre que la parole est un acte engage — chaque mot compte.",
              axe4_coherence: "La racine q-w-l apparait plus de 1720 fois dans le Coran. Le controle de la parole est un theme majeur. En 4:46, le meme probleme est mentionne — « ceux qui tordent les mots ». Le Coran attache une importance capitale a la precision des mots utilises.",
              axe5_frequence: "Pour la mission du khalifa, la parole est un outil de la mission. Le khalifa doit choisir ses mots avec soin — ne pas utiliser de mots ambigus qui peuvent etre detournes. La precision du langage est une exigence de la mission."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le sens d'opinion est hors sujet — le verbe est un acte de parole (dire), pas un etat mental (penser)."
            }
          }
        }
      },
      // rey pos=5 (Ra'ina)
      {
        word_key: "rey", position: 5, sense_chosen: "veiller sur",
        analysis_axes: {
          sense_chosen: "veiller sur",
          concept_chosen: "Pâturage/Protection",
          concepts: {
            "Pâturage/Protection": {
              status: "retenu",
              senses: ["paitre", "garder", "veiller sur"],
              proof_ctx: "Le mot ra'ina est un imperatif de la forme III de la racine r-'-y avec pronom suffixe 1P. Le Lane's donne : paitre, garder le troupeau, veiller sur, prendre soin de. Ra'ina signifie litteralement « veille sur nous » ou « prends soin de nous ». La forme III (fa'ala) implique la reciprocite — « sois notre berger/protecteur ». Le mot est interdit dans ce verset car il pouvait etre detourne par certains qui y entendaient un sens injurieux (en arameen ou en hebreu, ra'ina pouvait evoquer le mal ou l'insulte). Le Coran prescrit Unzurna a la place pour eviter toute ambiguite.",
              axe1_verset: "Le mot ra'ina est l'objet de l'interdiction — ne dites pas Ra'ina. Le champ lexical du verset (dire, ecouter, couvrants) montre que le verset porte sur le controle du langage. Ra'ina est un mot en soi inoffensif (veille sur nous) mais dont l'ambiguite est exploitee. Le verset enseigne que les mots doivent etre choisis pour leur clarte, pas seulement pour leur sens apparent.",
              axe2_voisins: "Le verset 103 parlait du savoir. Le verset 104 passe au langage. Le mot Ra'ina illustre le passage du savoir a la parole — il faut savoir quels mots utiliser. Le verset 105 parlera de ceux qui ne veulent pas que du bien descende sur les croyants. La sequence montre les differentes formes d'hostilite : le savoir refuse (103), le langage ambigu (104), la jalousie (105).",
              axe3_sourate: "La racine r-'-y est rare dans la sourate al-Baqarah. En 2:104, elle apparait dans le contexte specifique de l'interdiction d'un mot. Ce verset est un hapax dans la sourate — il traite un probleme linguistique precis lie au contexte de la communaute de Medine.",
              axe4_coherence: "La meme interdiction apparait en 4:46 — « Ne dites pas ra'ina mais dites unzurna ». Le doublement de l'interdiction dans deux sourates montre l'importance du sujet. Le Coran revient sur ce point pour s'assurer que les croyants comprennent que les mots ambigus sont dangereux.",
              axe5_frequence: "Pour la mission du khalifa, le choix des mots est un acte de la mission. Le khalifa doit eviter les mots ambigus qui peuvent etre detournes. La clarte du langage protege la mission contre les manipulations. Le mot Ra'ina enseigne que meme un mot bien intentionne peut devenir une arme s'il est ambigu."
            }
          }
        }
      },
      // qwl pos=6 (et dites)
      {
        word_key: "qwl", position: 6, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parler", "parole", "discours", "dire", "affirmer"],
              proof_ctx: "Le verbe quluu est un imperatif 2MP de la racine q-w-l. Le Lane's donne : dire, parler, enoncer. L'imperatif exprime l'ordre — dites. Le mot est precede de wa (et) qui lie cet ordre a l'interdiction precedente : ne dites pas Ra'ina MAIS dites Unzurna. L'imperatif positif remplace l'interdiction — le Coran ne se contente pas d'interdire, il prescrit l'alternative correcte. Memes analyses etymologiques que pour la premiere occurrence en position 4.",
              axe1_verset: "Le verbe quluu est le remplacement positif — apres l'interdiction (ne dites pas), l'ordre (dites). Le champ lexical (dire, Ra'ina, Unzurna, ecouter) montre que le verset construit un programme de parole : ce qu'il ne faut pas dire et ce qu'il faut dire. Le Coran ne laisse pas un vide — il remplace le mauvais mot par le bon mot. Le croyant sait quoi dire et quoi ne pas dire.",
              axe2_voisins: "Le verset 103 parlait du choix entre la magie et la foi. Le verset 104 parle du choix entre les mots. La meme structure d'alternative (ne fais pas X mais fais Y) s'applique aux actes (103) et aux paroles (104). Le verset 105 montrera les consequences de ces choix.",
              axe3_sourate: "La racine q-w-l est omnipresente dans la sourate al-Baqarah. En 2:104, le verbe apparait deux fois — une fois a la prohibition (ne dites pas) et une fois a l'imperatif (dites). Cette double occurrence montre que le controle de la parole est actif : il faut a la fois eviter le mal et pratiquer le bien.",
              axe4_coherence: "Le Coran utilise souvent le schema « ne fais pas X mais fais Y ». En 2:104, ce schema s'applique a la parole. Le meme schema apparait en 4:46. Le Coran prescrit des alternatives claires — il n'interdit jamais sans proposer le remplacement.",
              axe5_frequence: "Pour la mission du khalifa, la parole prescrite est un outil de la mission. Le khalifa ne se contente pas d'eviter les mots ambigus — il utilise les mots clairs. Dire Unzurna au lieu de Ra'ina est un acte de mission : choisir la clarte contre l'ambiguite."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le sens d'opinion est hors sujet — le verbe est un imperatif de parole."
            }
          }
        }
      },
      // sme pos=8
      {
        word_key: "sme", position: 8, sense_chosen: "ecouter",
        analysis_axes: {
          sense_chosen: "ecouter",
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["ouie", "exaucer", "entendre", "obeir", "ecouter"],
              proof_ctx: "Le verbe isma'uu est un imperatif 2MP de la racine s-m-'. Le Lane's donne : ecouter, entendre, obeir. L'imperatif est une injonction directe — ecoutez. Le verbe est precede de wa (et) qui le lie aux injonctions precedentes : ne dites pas + dites + ecoutez. L'ecoute complete le programme de communication : apres avoir appris quoi dire, il faut apprendre a ecouter. Le Lane's note que sama'a peut inclure l'obeissance — ecouter au sens d'obeir. Ici les deux sens sont presents : ecouter la parole et obeir a l'injonction.",
              axe1_verset: "Le verbe isma'uu est le troisieme element de l'injonction — ecoutez. Le champ lexical (dire, Ra'ina, Unzurna, ecouter) montre que le verset couvre les deux aspects de la communication : l'emission (dire) et la reception (ecouter). L'ordre « ecoutez » vient apres les instructions sur le dire — il faut d'abord savoir parler correctement, puis ecouter attentivement. L'ecoute est la condition de l'obeissance.",
              axe2_voisins: "Le verset 103 parlait du savoir. Le verset 104 parle de la parole et de l'ecoute. La progression est logique : savoir → parler → ecouter. Le verset 105 montrera que les ennemis ne veulent pas que du bien descende — il faut savoir ecouter pour distinguer le vrai du faux.",
              axe3_sourate: "La racine s-m-' apparait frequemment dans la sourate al-Baqarah. En 2:75, « un groupe parmi eux entendait la Parole de Dieu ». En 2:93, « nous avons entendu et nous avons desobei ». En 2:104, l'imperatif « ecoutez » corrige cette attitude — au lieu d'entendre et desobeir, ecoutez et obeissez.",
              axe4_coherence: "La racine s-m-' apparait environ 185 fois dans le Coran. Le Coran oppose l'ecoute vraie (qui mene a l'obeissance) et l'ecoute fausse (qui mene au rejet). En 2:93, ils disent « nous avons entendu et desobei ». En 2:104, le Coran commande l'ecoute vraie — celle qui engage l'action.",
              axe5_frequence: "Pour la mission du khalifa, l'ecoute est un pilier de la mission. Le khalifa doit ecouter la Parole de Dieu et obeir. L'ecoute n'est pas passive — c'est un engagement actif qui mene a l'action. Ecouter au sens coranique c'est accepter et appliquer."
            },
            "Renommée/Bruit": {
              status: "nul",
              senses: ["reputation", "bruit", "faire entendre"],
              proof_ctx: "Le sens de reputation est hors sujet — le verbe est un imperatif d'ecoute, pas un nom de renommee."
            }
          }
        }
      },
      // kfr pos=9
      {
        word_key: "kfr", position: 9, sense_chosen: "couvrir",
        analysis_axes: {
          sense_chosen: "couvrir",
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le mot al-kafirina est un participe actif pluriel masculin genitif de la racine k-f-r. Le Lane's donne : couvrir, cacher, dissimuler. Le kafir est litteralement « celui qui couvre » — il couvre la verite, il dissimule ce qu'il sait etre vrai. Le participe actif indique que la couverture est une action continue et deliberee — le kafir couvre activement. Le pluriel avec l'article defini (al-kafirina) designe le groupe connu des couvrants. La distinction avec l'expiation (nul) est evidente : le contexte est la dissimulation, pas la reparation.",
              axe1_verset: "Le mot al-kafirina cree le contraste avec les croyants — « o vous qui avez cru » versus « les couvrants ». Le champ lexical (croire, dire, ecouter, chatiment) montre que le verset oppose deux groupes : les croyants qui ecoutent et obeissent, et les couvrants qui recoivent le chatiment. La couverture est l'antithese de la foi — la foi devoile, la couverture dissimule.",
              axe2_voisins: "Le verset 102 parlait de la magie — un acte de dissimulation (la magie trompe les sens). Le verset 103 opposait la foi et la magie. Le verset 104 oppose les croyants et les couvrants. La meme opposition structure les trois versets : la verite contre la dissimulation.",
              axe3_sourate: "La racine k-f-r est une des racines les plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui couvrent ». En 2:24, « si vous ne le faites pas, et vous ne le ferez pas, craignez le Feu ». En 2:104, le chatiment douloureux est reserve aux couvrants. La sourate associe systematiquement la couverture au chatiment.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le kafir est un agent actif — il couvre la verite. Le Coran ne traite pas le kufr comme une simple absence de foi mais comme un acte delibere de dissimulation. En 2:104, le chatiment douloureux est la consequence de cette couverture active.",
              axe5_frequence: "Pour la mission du khalifa, la couverture est l'obstacle principal de la mission. Le kafir couvre la verite que le khalifa doit decouvrir. Le khalifa doit combattre la dissimulation par la clarte — dire les mots justes, ecouter attentivement, et ne pas couvrir la verite."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["renier un bienfait", "rejeter", "mecreant", "etre ingrat", "nier"],
              proof_ctx: "Le sens de rejet est un sens majeur de k-f-r — le kafir rejette la verite. La distinction philosophique avec la couverture est que le rejet est un acte ponctuel (je refuse), tandis que la couverture est un etat permanent (je dissimule). Le verset parle des couvrants avec l'article defini — c'est une identite permanente, pas un acte ponctuel. Le participe actif (kafir) designe un agent permanent.",
              axe1_verset: "Le mot al-kafirina pourrait porter le sens de « ceux qui rejettent ». Mais le participe actif designe un agent permanent, pas un acte ponctuel. Les couvrants sont ceux qui vivent dans la dissimulation — ils couvrent la verite en permanence.",
              axe2_voisins: "Le verset 102 decrivait la magie — un acte de tromperie. Le sens de couverture est plus coherent avec le contexte de tromperie que le sens de simple rejet.",
              axe3_sourate: "La sourate al-Baqarah utilise k-f-r dans les deux sens selon le contexte. Quand le mot est un participe actif avec article defini, il designe un groupe identifie par sa couverture permanente.",
              axe4_coherence: "Le Coran utilise le participe actif kafir pour designer un etat permanent de dissimulation, et le verbe kafara pour l'acte ponctuel de rejet.",
              axe5_frequence: "Le rejet est un acte de la couverture — le couvrant rejette parce qu'il dissimule. La couverture englobe le rejet."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "Le sens d'expiation est un autre sens de k-f-r. Le contexte est le chatiment des couvrants, pas l'expiation des peches."
            },
            "Sens isolé/Village": {
              status: "nul",
              senses: ["village"],
              proof_ctx: "Le sens de village est un sens concret isole de k-f-r (la terre qui couvre la graine)."
            }
          }
        }
      },
      // alm pos=11
      {
        word_key: "alm", position: 11, sense_chosen: "douloureux",
        analysis_axes: {
          sense_chosen: "douloureux",
          concept_chosen: "Douleur/Souffrance",
          concepts: {
            "Douleur/Souffrance": {
              status: "retenu",
              senses: ["douleur", "souffrir", "faire mal", "chatiment douloureux"],
              proof_ctx: "Le mot alimun est un adjectif masculin singulier indefini de la racine a-l-m. Le Lane's donne : douloureux, qui fait souffrir, qui cause de la douleur. Alim est une forme intensive (fa'il au sens passif) — le chatiment est « endolori » au sens actif, il fait mal a celui qui le recoit. L'adjectif qualifie le chatiment ('adhab) — un chatiment douloureux. Le couple 'adhab alim est une expression recurrente dans le Coran pour le chatiment le plus severe.",
              axe1_verset: "Le mot alimun ferme le verset en qualifiant le chatiment des couvrants. Le champ lexical (croire, dire, ecouter, couvrants, chatiment) montre que le verset oppose le programme des croyants (croire, parler juste, ecouter) au sort des couvrants (chatiment douloureux). Le mot alimun donne au chatiment sa qualite distinctive — il n'est pas seulement un chatiment, il est douloureux.",
              axe2_voisins: "Le verset 103 parlait de la recompense (mathuba) pour les croyants. Le verset 104 parle du chatiment ('adhab alim) pour les couvrants. Le contraste est symetrique : recompense pour les croyants, chatiment pour les couvrants. Les deux versets forment un diptyque de retribution.",
              axe3_sourate: "L'expression 'adhab alim apparait plusieurs fois dans la sourate al-Baqarah. En 2:10, « pour eux un chatiment douloureux pour ce qu'ils mentaient ». En 2:104, le chatiment est reserve aux couvrants. La sourate associe le chatiment douloureux a la dissimulation et au mensonge.",
              axe4_coherence: "L'expression 'adhab alim apparait environ 70 fois dans le Coran. C'est l'expression standard pour le chatiment le plus severe. Le Coran qualifie le chatiment pour le rendre concret — il ne s'agit pas d'une punition abstraite mais d'une douleur reelle.",
              axe5_frequence: "Pour la mission du khalifa, le chatiment douloureux est la consequence de l'echec de la mission. Le couvrant qui dissimule la verite recoit un chatiment douloureux. Le khalifa doit eviter cette consequence en restant dans la verite et la transparence."
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

  const verseIds = [110, 111];
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
// CHECK & INSERT daily_phrases for xyr (analysis_id=557)
// =====================================================
async function checkXyrConcept() {
  console.log('\n=== CHECK xyr concept (analysis_id=557) ===');

  // Check if xyr word_meanings exist
  const { data: existing } = await supabase
    .from('word_meanings')
    .select('id, concept, status')
    .eq('analysis_id', 557);

  if (existing && existing.length > 0) {
    console.log(`  xyr deja present (${existing.length} concepts)`);
    // Update the Bien/Excellence concept if it exists
    const bienConcept = existing.find(e => e.concept === 'Bien/Excellence');
    if (bienConcept) {
      console.log('  Bien/Excellence existe deja — skip');
    } else {
      console.log('  Bien/Excellence non trouve dans les concepts existants');
    }
  } else {
    console.log('  xyr pas de word_meanings — check word_analyses');
  }
}

// =====================================================
// CHECK daily_phrases
// =====================================================
async function checkDailyPhrases() {
  console.log('\n=== CHECK daily_phrases ===');

  const { data: existing, error } = await supabase
    .from('daily_phrases')
    .select('id, verse_id')
    .in('verse_id', [110, 111]);

  if (error) {
    console.error('  ERREUR check daily_phrases:', error.message);
    return;
  }

  if (existing && existing.length > 0) {
    console.log(`  daily_phrases existent deja pour versets: ${existing.map(e => e.verse_id).join(', ')}`);
  } else {
    console.log('  Aucune daily_phrases existante pour V103-104');
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — VERSETS 103-104 ===\n');
  await processVerse(103);
  await processVerse(104);
  await syncWordMeanings();
  await checkXyrConcept();
  await checkDailyPhrases();
  console.log('\n=== PIPELINE V103-104 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
