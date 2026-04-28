const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 134-135
// V134: verse_id=141, analysis_id=498
// V135: verse_id=142, analysis_id=499
// =====================================================

const verseData = {
  134: {
    verse_id: 141,
    analysis_id: 498,
    translation_arab: "Celle-la est une communaute qui a deja passe. A elle ce qu'elle a acquis, et a vous ce que vous avez acquis. Et vous ne serez pas interroges sur ce qu'ils faisaient.",
    full_translation: "Voila une generation bel et bien revolue. A elle ce qu'elle a acquis, et a vous ce que vous avez acquis. On ne vous demandera pas compte de ce qu'ils faisaient.",
    translation_explanation: `§DEMARCHE§
Le verset reprend une formule deja enoncee en 2:141 (identique a 2:134 dans le mushaf). Il clot le passage sur Abraham et sa descendance en posant un principe de responsabilite individuelle. Le demonstratif **tilka** est un demonstratif d'eloignement feminin singulier de la racine dh-l-k. Le Lane's donne : celle-la, cette chose-la. Le feminin s'accorde avec **ummatun** (communaute), qui est feminin. Le demonstratif d'eloignement marque que cette communaute est distante dans le temps — elle est passee, revolue. Le nom **ummatun** est un nom feminin singulier indefini de la racine a-m-m. Le Lane's donne : communaute, nation, groupe qui partage une meme direction. Le fait qu'il soit indefini (sans article) marque qu'il s'agit d'une communaute parmi d'autres — pas une communaute specifique nommee. La particule **qad** suivie de l'accompli **khalat** renforce l'aspect acheve de l'action. Le verbe **khalat** est un accompli 3FS de la racine kh-l-w. Le Lane's donne : passer, s'en aller, etre revolu, etre vide. L'accompli avec qad souligne que le depart est definitif et acheve. Cette communaute est passee — elle n'est plus la. La preposition **laha** (a elle) de la racine l-h-y introduit l'attribution : a elle revient ce qui lui appartient. Le pronom relatif **ma** (ce que) de la racine m-y-m introduit l'objet de l'attribution. Le verbe **kasabat** est un accompli 3FS de la racine k-s-b. Le Lane's donne : acquerir, gagner, meriter par son effort. L'accompli indique que l'acquisition est achevee — ce qu'elle a acquis est definitif. La structure se repete en parallele : **wa-lakum** (et a vous) de la racine l-k-m introduit la meme attribution pour les interlocuteurs. Le pronom relatif **ma** suivi de **kasabtum** (vous avez acquis, accompli 2MP) complete le parallele. La particule de negation **la** (ne...pas) de la racine l-a precede le verbe **tus'aluna** qui est un inaccompli passif 2MP de la racine s-a-l. Le Lane's donne : demander, interroger, demander des comptes. Le passif indique que les interlocuteurs ne seront pas interroges — l'interrogation ne leur sera pas adressee. L'objet de la non-interrogation est introduit par **'amma** (au sujet de ce que) de la racine '-m-m. Le verbe **kanu** est un accompli 3MP de la racine k-w-n, verbe support qui porte le temps passe. Le verbe **ya'maluna** est un inaccompli 3MP de la racine '-m-l. Le Lane's donne : travailler, agir, faire. L'expression **kanu ya'maluna** (ils faisaient, ils avaient l'habitude de faire) designe les actions passees et habituelles de la communaute revolue. Le verset dit clairement : vous n'etes pas responsables de ce qu'ils faisaient — chacun porte sa propre charge.

§JUSTIFICATION§
**celle-la** — Le sens retenu est « demonstratif d'eloignement ». Le mot tilka pointe vers une communaute distante. L'alternative « cela » est ecartee car tilka est feminin singulier, il designe une entite specifique (la communaute), pas un concept abstrait.

**communaute** — Le sens retenu est « communaute/nation ». Le mot umma designe un groupe humain uni par une direction commune. L'alternative « mere » est ecartee car le contexte parle d'un groupe humain passe, pas d'une figure maternelle. L'alternative « guide » est ecartee car le mot est au feminin indefini, designant un collectif, pas un leader.

**a passe** — Le sens retenu est « passer/s'en aller/etre revolu ». Le verbe khalat designe le passage definitif. L'alternative « etre vide » est ecartee car le contexte est temporel — la communaute est passee dans le temps, elle n'est pas vide de contenu. L'alternative « solitude/retraite » est ecartee car la communaute n'est pas en retraite — elle est revolue.

**a acquis** — Le sens retenu est « acquerir/gagner ». Le verbe kasabat designe l'acquisition par l'effort. Il n'y a qu'un seul concept retenu pour cette racine, le choix est immediat.

**a vous** — Le sens retenu est « attribution/possession ». Le mot lakum designe les interlocuteurs comme destinataires.

**ne serez pas interroges** — Le sens retenu est « demander/interroger ». Le verbe tus'aluna au passif signifie qu'on ne leur demandera pas de comptes. L'alternative « mendier » est ecartee car le contexte est celui du Jugement et de la responsabilite.

**ce qu'ils faisaient** — Pour **kanu** le sens retenu est « etre (verbe incomplet) » — il sert de support temporel pour exprimer le passe habituel. Pour **ya'maluna** le sens retenu est « travailler/agir/faire ». Le verbe designe les actions et les oeuvres de la communaute passee.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere quasi identique. Hamidullah dit « generation » la ou nous disons « communaute ». Le mot arabe umma est plus large que « generation » — une generation est liee au temps, une communaute est liee a une direction commune. « Communaute » est plus fidele a l'etymologie de la racine a-m-m qui porte l'idee de direction et de rassemblement autour d'un but commun. Hamidullah dit « on ne vous demandera pas compte » — nous disons « vous ne serez pas interroges ». Les deux sont equivalents, le passif est rendu differemment mais le sens est le meme.`,
    segments: [
      { fr: "celle-la", pos: "adjectif", phon: "tilka", arabic: "\u062A\u0650\u0644\u0652\u0643\u064E", word_key: "thlk", is_particle: false, sense_retenu: "celle-la", position: 1 },
      { fr: "communaute", pos: "nom", phon: "ummatun", arabic: "\u0623\u064F\u0645\u0651\u064E\u0629\u064C", word_key: "umm", is_particle: false, sense_retenu: "communaute", position: 2 },
      { fr: "deja", phon: "qad", arabic: "\u0642\u064E\u062F\u0652", is_particle: true, position: 3 },
      { fr: "a passe", pos: "verbe", phon: "khalat", arabic: "\u062E\u064E\u0644\u064E\u062A\u0652", word_key: "khlw", is_particle: false, sense_retenu: "passer", position: 4 },
      { fr: "a elle", pos: "nom", phon: "laha", arabic: "\u0644\u064E\u0647\u064E\u0627", word_key: "lhy", is_particle: false, sense_retenu: "a elle", position: 5 },
      { fr: "ce que", pos: "pronom relatif", phon: "ma", arabic: "\u0645\u064E\u0627", word_key: "maym", is_particle: false, sense_retenu: "ce que", position: 6 },
      { fr: "a acquis", pos: "verbe", phon: "kasabat", arabic: "\u0643\u064E\u0633\u064E\u0628\u064E\u062A\u0652", word_key: "ksb", is_particle: false, sense_retenu: "acquerir", position: 7 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 8 },
      { fr: "a vous", pos: "nom", phon: "lakum", arabic: "\u0644\u064E\u0643\u064F\u0645\u0652", word_key: "lkm", is_particle: false, sense_retenu: "a vous", position: 9 },
      { fr: "ce que", pos: "pronom relatif", phon: "ma", arabic: "\u0645\u064E\u0627", word_key: "maym", is_particle: false, sense_retenu: "ce que", position: 10 },
      { fr: "avez acquis", pos: "verbe", phon: "kasabtum", arabic: "\u0643\u064E\u0633\u064E\u0628\u0652\u062A\u064F\u0645\u0652", word_key: "ksb", is_particle: false, sense_retenu: "acquerir", position: 11 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 12 },
      { fr: "ne...pas", pos: "particule_negation", phon: "la", arabic: "\u0644\u064E\u0627", word_key: "la", is_particle: false, sense_retenu: "ne pas", position: 13 },
      { fr: "serez interroges", pos: "verbe", phon: "tus'aluna", arabic: "\u062A\u064F\u0633\u0640\u0652\u0640\u064E\u0654\u0644\u064F\u0648\u0646\u064E", word_key: "sal", is_particle: false, sense_retenu: "interroger", position: 14 },
      { fr: "au sujet de ce que", pos: "nom", phon: "'amma", arabic: "\u0639\u064E\u0645\u0651\u064E\u0627", word_key: "emm", is_particle: false, sense_retenu: "au sujet de", position: 15 },
      { fr: "etaient", pos: "verbe", phon: "kanu", arabic: "\u0643\u064E\u0627\u0646\u064F\u0648\u0627\u06DF", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 16 },
      { fr: "faisaient", pos: "verbe", phon: "ya'maluna", arabic: "\u064A\u064E\u0639\u0652\u0645\u064E\u0644\u064F\u0648\u0646\u064E", word_key: "eml", is_particle: false, sense_retenu: "faire", position: 17 }
    ],
    words: [
      // thlk pos=1
      {
        word_key: "thlk", position: 1, sense_chosen: "celle-la",
        analysis_axes: {
          sense_chosen: "celle-la",
          concept_chosen: "Démonstratif",
          concepts: {
            "Démonstratif": {
              status: "retenu",
              senses: ["celui-là", "cela"],
              proof_ctx: "Le mot tilka est un demonstratif d'eloignement feminin singulier de la racine dh-l-k. Le Lane's donne : celui-la, celle-la, cela. Le demonstratif d'eloignement pointe vers ce qui est distant — ici une communaute passee, eloignee dans le temps. Le feminin s'accorde avec ummatun. Le demonstratif cree une distance entre le locuteur et l'objet designe — cette communaute est la-bas, dans le passe, loin de vous.",
              axe1_verset: "Le mot tilka ouvre le verset en designant la communaute passee. Le demonstratif d'eloignement cree immediatement une distance temporelle — cette communaute n'est plus la. Le champ lexical du verset (passer, acquerir, interroger) tourne autour de la separation entre les vivants et les morts. Le demonstratif est l'outil grammatical qui pose cette separation des le premier mot.",
              axe2_voisins: "Les versets precedents (131-133) traitaient d'Abraham, d'Ismael, de Jacob et de leurs fils — des figures passees qui ont fait leur soumission. Le verset 134 tire la conclusion : cette generation est revolue, elle a ses comptes et vous avez les votres. Le demonstratif renvoie a toutes ces figures evoquees dans le passage precedent.",
              axe3_sourate: "La sourate al-Baqarah utilise les demonstratifs pour structurer le discours entre le proche et le lointain. En 2:2, « dhalika al-kitab » (ce Livre-la) utilise le demonstratif d'eloignement pour le Livre — il est au-dela de l'atteinte du doute. Ici tilka pointe vers une communaute au-dela de l'atteinte de la responsabilite des vivants.",
              axe4_coherence: "Les demonstratifs d'eloignement apparaissent dans le Coran pour marquer une distance physique, temporelle ou conceptuelle. En 2:134 et 2:141, la meme formule « tilka ummatun qad khalat » est repetee — la repetition montre que le principe est fondamental et merite d'etre rappele. La distance cree par le demonstratif est la base du principe de responsabilite individuelle.",
              axe5_frequence: "Pour la mission du khalifa, le demonstratif rappelle que les ancetres sont passes et que leur compte est clos. Le khalifa ne peut ni se glorifier de leurs merites ni etre accable par leurs fautes. La distance posee par tilka est liberatrice — elle degage le present de la charge du passe."
            }
          }
        }
      },
      // umm pos=2
      {
        word_key: "umm", position: 2, sense_chosen: "communaute",
        analysis_axes: {
          sense_chosen: "communaute",
          concept_chosen: "Communauté/Nation",
          concepts: {
            "Communauté/Nation": {
              status: "retenu",
              senses: ["communauté", "nation"],
              proof_ctx: "Le mot ummatun est un nom feminin singulier indefini de la racine a-m-m. Le Lane's donne : communaute, nation, groupe partageant une meme direction. La umma est un collectif qui se definit par une orientation commune — elle n'est pas un simple rassemblement numerique mais un groupe uni par un but. Ici l'indefini (sans article) designe une communaute parmi d'autres — celle des ancetres evoques dans les versets precedents. La distinction avec « mere » (probable) est que le contexte designe un groupe humain passe, pas une figure maternelle.",
              axe1_verset: "Le mot ummatun est le sujet du verset — c'est elle qui est passee, c'est a elle que revient ce qu'elle a acquis. Le champ lexical (passer, acquerir, faire) concerne les actions collectives d'un groupe. La communaute est traitee comme une entite unique qui a agi et qui rendra ses comptes en tant que telle. Le verset individualise la responsabilite en separant la communaute passee des interlocuteurs presents.",
              axe2_voisins: "Les versets 131-133 nommaient Abraham, Ismael, Isaac, Jacob — des individus qui forment ensemble une communaute. Le verset 134 les regroupe sous le terme umma et les declare passes. Le verset 135 ouvrira un nouveau sujet — la pretention des Juifs et des Chretiens a monopoliser la guidance. Le mot umma fait la transition entre les recits individuels et le principe collectif.",
              axe3_sourate: "La racine a-m-m apparait dans la sourate al-Baqarah dans des contextes importants. En 2:128, Abraham demande a Dieu de faire de sa descendance une communaute soumise. En 2:134 et 2:141, cette communaute est declaree revolue. La sourate montre que meme la communaute d'Abraham passe — ce qui reste est la responsabilite de chacun.",
              axe4_coherence: "La racine a-m-m apparait environ 64 fois dans le Coran. Le concept de umma est central — chaque communaute a son envoye (10:47), chaque communaute a son terme (7:34). Le Coran presente les communautes comme des entites temporelles qui passent et laissent place a d'autres. Aucune communaute n'est eternelle.",
              axe5_frequence: "Pour la mission du khalifa, la communaute est le cadre de la mission. Mais le khalifa doit comprendre que les communautes passent et que ce qui reste est l'acquisition individuelle. La communaute est un moyen, pas une fin — c'est l'action personnelle qui compte au final."
            },
            "Maternité/Origine": {
              status: "probable",
              senses: ["mère", "être une mère pour", "origine, principe"],
              proof_ctx: "Le sens de mere est un sens majeur de la racine a-m-m. La mere (umm) est l'origine, la source. Le lien etymologique entre umm (mere) et umma (communaute) est que la communaute est comme une mere qui rassemble ses enfants autour d'une direction commune. Mais dans ce verset, le contexte est clairement celui d'un groupe humain passe (« qad khalat »), pas d'une figure maternelle.",
              axe1_verset: "Le sens de mere pourrait theoriquement s'appliquer — tilka ummatun serait « celle-la est une source ». Mais la suite du verset (laha ma kasabat, a elle ce qu'elle a acquis) traite l'entite comme un collectif qui agit et acquiert, pas comme une source qui engendre. Le champ lexical (acquerir, interroger, faire) est celui de l'action collective, pas de la maternite.",
              axe2_voisins: "Les versets precedents nomment Abraham, ses fils et Jacob — des individus qui forment un groupe. Le verset 134 parle de leur collectif, pas de leur mere. Le contexte des versets voisins confirme le sens de communaute.",
              axe3_sourate: "En 2:128, la meme racine est utilisee dans « ummatun muslimah » (communaute soumise) — le sens de communaute est clairement dominant dans ce passage de la sourate.",
              axe4_coherence: "L'expression « tilka ummatun qad khalat » ne se prete pas au sens de mere — une mere qui passe (khalat) renverrait a un usage tres different du verbe. Le Coran utilise umm (mere) avec d'autres constructions.",
              axe5_frequence: "Le sens de mere enrichit la comprehension de la racine mais ne change pas le sens dans ce verset specifique."
            },
            "Direction/Intention": {
              status: "nul",
              senses: ["se diriger vers", "viser"],
              proof_ctx: "Le sens de direction est la racine etymologique de a-m-m — se diriger vers un but. Mais le mot est ici un nom (ummatun), pas un verbe d'action directionnelle. Le contexte designe un groupe humain, pas un mouvement."
            },
            "Guide/Modèle": {
              status: "nul",
              senses: ["guide (imam)", "diriger la prière"],
              proof_ctx: "Le sens de guide (imam) est hors sujet — le mot est un nom feminin indefini designant un collectif, pas un leader. Le contexte est la communaute passee, pas un guide spirituel."
            }
          }
        }
      },
      // khlw pos=4
      {
        word_key: "khlw", position: 4, sense_chosen: "passer",
        analysis_axes: {
          sense_chosen: "passer",
          concept_chosen: "Vide/Vacuité",
          concepts: {
            "Vide/Vacuité": {
              status: "retenu",
              senses: ["être vide", "vacant", "dépourvu", "laisser vide"],
              proof_ctx: "Le verbe khalat est un accompli 3FS de la racine kh-l-w. Le Lane's donne : passer, s'en aller, etre revolu, etre vide, quitter. Le sens premier de kh-l-w est le vide — ce qui est khaliy est ce qui est vide, depourvu de contenu. Quand on dit d'une communaute qu'elle « khalat », cela signifie qu'elle a vide les lieux — elle est partie, elle n'est plus la. L'espace qu'elle occupait est desormais vacant. L'accompli avec la particule qad insiste sur le caractere acheve de ce depart. La communaute a passe et l'espace est vide.",
              axe1_verset: "Le verbe khalat est l'action centrale qui definit le statut de la communaute — elle est passee. Le champ lexical du verset (acquerir, interroger, faire) concerne des actions liees a la responsabilite. Le verbe khalat pose la premisse : cette communaute est passee, donc la question de la responsabilite se pose differemment pour elle et pour vous. Le passage est la condition qui separe les comptes.",
              axe2_voisins: "Les versets 131-133 racontaient les paroles et les actes d'Abraham et de ses fils au moment de la mort. Le verset 134 tire la consequence de cette mort — ils sont passes. Le passage du recit historique au principe de responsabilite se fait par ce verbe : une fois qu'ils sont passes, leurs comptes leur appartiennent.",
              axe3_sourate: "La racine kh-l-w apparait dans la sourate al-Baqarah en 2:14 (quand ils sont seuls avec leurs demons), en 2:134 et 2:141 (cette formule). En 2:14, le sens est « etre seul avec ». En 2:134, le sens est « passer/etre revolu ». Les deux sens partagent l'idee de vide — etre seul c'est etre dans un espace vide d'autres, passer c'est vider l'espace qu'on occupait.",
              axe4_coherence: "La racine kh-l-w apparait environ 29 fois dans le Coran. L'expression « qad khalat » (a deja passe) est une formule recurrente — en 3:137, « des exemples ont passe (khalat) avant vous ». En 5:75, « les messagers avant lui ont deja passe (khalat) ». Le Coran utilise cette racine pour rappeler que tout passe — communautes, messagers, generations.",
              axe5_frequence: "Pour la mission du khalifa, le passage des communautes precedentes est un rappel de la mortalite de toute entreprise humaine. Le khalifa doit agir maintenant car son temps aussi passera. Ce qui reste apres le passage c'est ce qu'on a acquis — les actes, pas les titres."
            },
            "Abandon/Séparation": {
              status: "nul",
              senses: ["quitter", "abandonner", "être distant", "laisser"],
              proof_ctx: "Le sens d'abandon est un sens actif de kh-l-w — quitter volontairement. Mais le verbe khalat utilise ici avec une communaute comme sujet ne designe pas un abandon volontaire — la communaute n'a pas choisi de partir, elle est passee par le cours du temps. Le sens de passage temporel est plus precis que l'abandon actif."
            },
            "Solitude/Retraite": {
              status: "nul",
              senses: ["solitude", "retraite", "se consacrer au culte en solitude"],
              proof_ctx: "Le sens de solitude est hors sujet — la communaute n'est pas en retraite spirituelle, elle est passee. Le contexte est temporel, pas spirituel."
            }
          }
        }
      },
      // ksb pos=7
      {
        word_key: "ksb", position: 7, sense_chosen: "acquerir",
        analysis_axes: {
          sense_chosen: "acquerir",
          concept_chosen: "Acquisition/Rétribution",
          concepts: {
            "Acquisition/Rétribution": {
              status: "retenu",
              senses: ["acquérir", "gagner", "mériter"],
              proof_ctx: "Le verbe kasabat est un accompli 3FS de la racine k-s-b. Le Lane's donne : acquerir, gagner par son effort, meriter. L'acquisition est un acte directionnel — on obtient quelque chose par son propre travail. L'accompli indique que l'acquisition est achevee et definitive. Le feminin s'accorde avec le sujet implicite (la communaute). La meme racine apparait deux fois dans le verset (kasabat/kasabtum) pour creer un parallele entre l'acquisition de la communaute passee et celle des interlocuteurs.",
              axe1_verset: "Le verbe kasabat structure le verset par sa repetition : « a elle ce qu'elle a acquis, a vous ce que vous avez acquis ». Le parallele cree une egalite de principe — chacun a son acquisition. Le champ lexical (communaute, passer, acquerir, interroger, faire) tourne autour de la responsabilite individuelle. L'acquisition est le noeud : ce qu'on acquiert est ce dont on repond.",
              axe2_voisins: "Les versets 131-133 montraient Abraham et ses fils agissant — se soumettant, recommandant, choisissant. Le verset 134 dit que ces actions (acquisitions) leur appartiennent. Les versets 135-136 traiteront du choix religieux present. Le verbe kasaba fait le lien entre les actions passees et les actions presentes.",
              axe3_sourate: "La racine k-s-b apparait dans la sourate al-Baqarah en 2:79, 2:81, 2:134, 2:141, 2:264, 2:281, 2:286. Elle est systematiquement liee a la retribution — ce qu'on acquiert est ce dont on repondra. En 2:286, « a elle ce qu'elle a acquis et contre elle ce qu'elle s'est acquis ». La sourate construit un principe de justice : chacun recolte ce qu'il a seme.",
              axe4_coherence: "La racine k-s-b apparait environ 67 fois dans le Coran. Le principe « a chacun ce qu'il a acquis » est un fondement de la justice coranique. En 52:21, « chaque personne est otage de ce qu'elle a acquis ». Le Coran refuse la responsabilite collective hereditaire — personne ne porte la charge d'un autre.",
              axe5_frequence: "Pour la mission du khalifa, l'acquisition est la mesure de la mission. Le khalifa est juge sur ce qu'il a acquis par ses propres actes, pas sur ce que ses ancetres ont fait. L'acquisition personnelle est la seule monnaie qui compte — ni l'heritage ni la lignee ne remplacent l'effort personnel."
            }
          }
        }
      },
      // sal pos=14
      {
        word_key: "sal", position: 14, sense_chosen: "interroger",
        analysis_axes: {
          sense_chosen: "interroger",
          concept_chosen: "Requête/Interrogation",
          concepts: {
            "Requête/Interrogation": {
              status: "retenu",
              senses: ["demander", "questionner", "interroger"],
              proof_ctx: "Le verbe tus'aluna est un inaccompli passif 2MP de la racine s-a-l. Le Lane's donne : demander, questionner, interroger, demander des comptes. Le passif (tus'aluna) indique que les interlocuteurs ne seront pas l'objet de l'interrogation — on ne leur demandera pas de comptes au sujet des actions d'autrui. L'inaccompli marque que cette non-interrogation est un principe permanent, pas un evenement ponctuel. La negation (la tus'aluna) est categorique — ils ne seront jamais interroges sur les actes des autres.",
              axe1_verset: "Le verbe tus'aluna ferme le verset en tirant la consequence logique : puisque la communaute est passee et que chacun a son acquisition, il est inutile de vous interroger sur ce qu'ils faisaient. Le champ lexical (passer, acquerir, interroger, faire) construit une chaine causale : passage → separation des comptes → non-interrogation. Le verset est un syllogisme de la responsabilite individuelle.",
              axe2_voisins: "Les versets precedents (131-133) racontaient les choix d'Abraham et de ses fils. Le verset 134 dit que ces choix leur appartiennent et que les interlocuteurs n'en repondront pas. Le verset 135 posera la question : que choisissez-vous, vous ? La non-interrogation sur le passe ouvre l'espace pour l'interrogation sur le present.",
              axe3_sourate: "La racine s-a-l apparait frequemment dans la sourate al-Baqarah dans le contexte des questions posees au Prophete : « ils t'interrogent au sujet de... » (2:189, 2:215, 2:217, 2:219, 2:220, 2:222). En 2:134, l'interrogation est refusee — on ne vous interrogera pas sur les autres. La sourate distingue les questions legitimes (demander pour apprendre) des questions illegitimes (demander des comptes sur autrui).",
              axe4_coherence: "La racine s-a-l apparait environ 129 fois dans le Coran. Le principe « tu ne seras pas interroge sur ce qu'ils font / ils ne seront pas interroges sur ce que tu fais » apparait aussi en 2:119. Le Coran insiste sur la separation des comptes — chacun repond de ses propres actes, pas de ceux des autres.",
              axe5_frequence: "Pour la mission du khalifa, la non-interrogation sur les actes des autres est liberatrice. Le khalifa ne porte pas le poids des erreurs de ses predecesseurs. Il est responsable de sa propre mission, de ses propres acquisitions. Cette liberte est aussi une responsabilite — il ne peut pas se cacher derriere les merites des ancetres."
            }
          }
        }
      },
      // kwn pos=16
      {
        word_key: "kwn", position: 16, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être (verbe incomplet)", "venir à l'existence"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister, se trouver dans un etat. Ici kana est un verbe incomplet qui porte le temps passe — « kanu ya'maluna » signifie « ils faisaient » ou « ils avaient l'habitude de faire ». Le verbe ne decrit pas une existence en soi mais sert de support temporel pour l'inaccompli ya'maluna. L'accompli kanu + l'inaccompli ya'maluna cree une periphrase verbale qui exprime l'action passee habituelle.",
              axe1_verset: "Le verbe kanu est un verbe auxiliaire qui porte le temps dans l'expression « kanu ya'maluna » (ils faisaient). Il ne contribue pas directement au sens lexical du verset mais a sa temporalite. Le verset parle d'actions passees — ce que la communaute faisait habituellement. Le temps passe est essentiel au propos : ces actions sont terminees et leurs auteurs sont passes.",
              axe2_voisins: "L'expression « kanu ya'maluna » est une formule recurrente dans le Coran pour designer les actions passees habituelles d'un groupe. Les versets voisins traitent de ce que les ancetres faisaient — le verbe kana porte cette reference au passe.",
              axe3_sourate: "La racine k-w-n est la plus frequente de la langue arabe et de la sourate al-Baqarah. Elle sert de verbe support partout. En 2:134, son role est purement grammatical — porter le temps passe.",
              axe4_coherence: "La racine k-w-n apparait plus de 1300 fois dans le Coran. Son usage comme verbe incomplet (kana + attribut ou verbe) est le plus courant. L'expression « kanu ya'maluna » est un patron recurrent qui designe les actions habituelles d'un groupe dans le passe.",
              axe5_frequence: "Pour la mission du khalifa, le verbe kana rappelle que les actions passees sont figees — elles ne peuvent plus etre modifiees. Ce qui a ete fait est fait. Le khalifa doit se concentrer sur ce qu'il fait maintenant, pas sur ce qui a ete fait avant."
            }
          }
        }
      },
      // eml pos=17
      {
        word_key: "eml", position: 17, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ya'maluna est un inaccompli 3MP de la racine '-m-l. Le Lane's donne : travailler, agir, faire, produire une oeuvre. L'inaccompli dans la periphrase « kanu ya'maluna » exprime l'action passee habituelle — ils faisaient, ils avaient l'habitude de faire. Le travail (amal) est un acte exterieur qui produit un resultat visible. L'oeuvre est ce qui reste apres le travail. La distinction avec « gouverneur » (nul) est claire : le contexte est l'action, pas l'autorite.",
              axe1_verset: "Le verbe ya'maluna ferme la derniere proposition du verset : « vous ne serez pas interroges sur ce qu'ils faisaient ». Le mot « faisaient » est deliberement vague — il couvre toutes les actions de la communaute passee. Le champ lexical (acquerir, interroger, faire) montre que les actions sont la matiere du jugement. Le verset dit : leurs actions leur appartiennent, vos actions vous appartiennent.",
              axe2_voisins: "Les versets 131-133 decrivaient des actions specifiques d'Abraham et ses fils : se soumettre, recommander, prier. Le verset 134 generalise en parlant de « ce qu'ils faisaient » — toutes leurs actions, pas seulement celles qui sont nommees. Le passage du specifique au general clot le recit et ouvre le principe.",
              axe3_sourate: "La racine '-m-l apparait frequemment dans la sourate al-Baqarah, souvent dans l'expression « alladhina amanu wa 'amilu al-salihat » (ceux qui ont cru et fait les bonnes oeuvres). En 2:134, le verbe ya'maluna n'est pas qualifie — il ne dit pas si les oeuvres sont bonnes ou mauvaises. C'est un terme neutre qui couvre toute action.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. L'expression « kanu ya'maluna » (ils faisaient) est recurrente — en 6:132, « chacun a des degres selon ce qu'il a fait ». En 9:105, « agissez, Dieu verra vos oeuvres ». Le Coran lie systematiquement l'action a la retribution.",
              axe5_frequence: "Pour la mission du khalifa, l'action est le coeur de la mission. Le khalifa est defini par ce qu'il fait, pas par ce que ses ancetres ont fait. L'oeuvre personnelle est la seule reponse qui compte — agir est l'essence meme de la mission."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le sens de gouverneur est hors sujet — le verbe ya'maluna est un verbe d'action, pas un titre d'autorite."
            }
          }
        }
      }
    ]
  },
  135: {
    verse_id: 142,
    analysis_id: 499,
    translation_arab: "Et ils dirent : soyez Juifs ou Chretiens, vous serez guides. Dis : mais plutot la voie d'Abraham, incline vers la verite, et il n'etait pas des associateurs.",
    full_translation: "Et ils dirent : «Soyez Juifs ou Chretiens, vous serez alors sur la bonne voie». - Dis : «Non, mais nous suivons la religion d'Abraham, le modele meme de la droiture et il n'etait point parmi les Associateurs».",
    translation_explanation: `§DEMARCHE§
Le verset rapporte une injonction attribuee a un groupe (« ils dirent ») qui demande aux gens de devenir Juifs ou Chretiens pour etre guides. La reponse divine, adressee au Prophete (« Dis »), oppose a cette pretention la voie d'Abraham, qualifie de hanif (incline vers la verite), et nie qu'il ait ete parmi les associateurs. Le verbe **qalu** est un accompli 3MP de la racine q-w-l. Le Lane's donne : dire, parler, affirmer. L'accompli indique que la parole a ete prononcee — c'est un fait rapporte. Le pronom suffixe implicite (3MP) designe un groupe non specifie — les exegetes y voient les Juifs et les Chretiens. Le verbe **kunu** est un imperatif 2MP de la racine k-w-n. Le Lane's donne : etre, devenir. L'imperatif exprime un ordre ou une invitation : devenez, soyez. Le mot **hudan** est un nom accusatif masculin singulier indefini de la racine h-w-d. Le Lane's donne : Juifs, ceux qui suivent la Torah, ceux qui retournent a Dieu. L'accusatif est un attribut du sujet de kunu — soyez Juifs. La conjonction **aw** (ou) presente l'alternative. Le mot **nasara** est un nom pluriel de la racine n-s-r. Le Lane's donne : Chretiens, partisans du Christ, ceux qui se secourent mutuellement. L'etymologie de nasara vient de nasr (secours) — les Chretiens seraient « ceux qui se portent secours ». Le verbe **tahtadu** est un inaccompli 2MP de la racine h-t-d. Le Lane's donne : etre guide, suivre la bonne voie, trouver le chemin. L'inaccompli exprime une consequence attendue : si vous devenez Juifs ou Chretiens, alors vous serez guides. Le verbe **qul** est un imperatif 2MS de la racine q-w-l. Le Lane's donne : dire, parler. L'imperatif 2MS s'adresse au Prophete — Dieu lui ordonne de repondre. La particule **bal** (mais plutot, au contraire) introduit une rectification — ce qui suit corrige ce qui precede. Le mot **millata** est un nom feminin singulier accusatif de la racine m-l-l. Le Lane's donne : religion, voie religieuse, confession. L'accusatif est un complement d'objet direct implicite — « nous suivons la voie d'Abraham ». Le nom **Ibrahima** est le nom propre du prophete Abraham au genitif. L'idafa (construction possessive) rattache la voie a Abraham — c'est sa voie. Le mot **hanifan** est un adjectif masculin singulier accusatif indefini de la racine h-n-f. Le Lane's donne : incline vers la verite, monothéiste pur, celui qui se detourne du faux pour se tourner vers le vrai. Le hanif est etymologiquement celui qui penche, qui s'incline — le sens premier de h-n-f est la deviation, l'inclinaison. Le hanif est celui dont l'ame penche vers la verite. La particule **wa** (et) + **ma** (ne...pas) + le verbe **kana** (etait) forment une negation du passe : « et il n'etait pas ». La preposition **mina** (de, parmi) introduit l'appartenance niee. Le mot **al-mushrikina** est un participe actif defini pluriel au genitif de la racine sh-r-k. Le Lane's donne : associateurs, ceux qui associent d'autres divinites a Dieu. Le participe actif indique que l'association est un acte delibere et continu. L'article defini (al-) marque la categorie — les associateurs comme classe connue.

§JUSTIFICATION§
**dirent** — Le sens retenu est « dire/parler ». Le verbe qalu rapporte un discours au passe. Il n'y a pas d'alternative credible dans ce contexte — le verbe introduit un discours direct.

**soyez** — Le sens retenu est « etre/devenir ». Le verbe kunu a l'imperatif est une injonction. L'alternative « venir a l'existence » est ecartee car le contexte est le changement d'etat (devenir Juif ou Chretien), pas la venue a l'existence.

**Juifs** — Le sens retenu est « Juifs ». Le mot hudan designe les adeptes du judaisme. L'alternative « retourner » est ecartee car le mot est ici un nom designant un groupe religieux, pas un verbe de retour.

**Chretiens** — Le sens retenu est « Chretiens/partisans ». Le mot nasara designe les adeptes du christianisme. L'alternative « secourir/victoire » est ecartee car le mot est ici un nom propre collectif, pas un verbe de secours. L'etymologie de la racine n-s-r (secours) eclaire l'origine du nom mais ne change pas le sens dans le contexte.

**serez guides** — Le sens retenu est « etre guide/suivre la voie ». Le verbe tahtadu exprime la consequence attendue de l'injonction : en devenant Juifs ou Chretiens, vous trouverez la bonne voie. C'est la pretention que le verset va refuter.

**dis** — Le sens retenu est « dire ». Le verbe qul a l'imperatif est l'ordre divin adresse au Prophete de repondre.

**voie** — Le sens retenu est « religion/confession ». Le mot milla designe la voie religieuse, le systeme de croyances et de pratiques. L'alternative « communaute » est ecartee car le contexte est la voie suivie (millatah Ibrahima), pas le groupe qui la suit.

**Abraham** — Le sens retenu est « nom propre ». Ibrahim est le nom du prophete patriarche. Les autres sens de la racine (preuve, duree) sont hors sujet — le mot est un nom propre.

**incline vers la verite** — Le sens retenu est « incline vers la verite/monotheiste pur ». Le mot hanifan qualifie Abraham comme celui qui penche vers la verite. L'alternative « pied bot/etre tordu » est ecartee car le sens concret physique n'est pas pertinent — le verset utilise le sens abstrait d'inclinaison spirituelle.

**n'etait pas** — Le sens retenu est « etre (verbe incomplet) ». Le verbe kana porte la negation et le temps passe : « ma kana min al-mushrikina » = il n'etait pas parmi les associateurs.

**associateurs** — Le sens retenu est « associer/polytheisme ». Le mot al-mushrikina designe ceux qui associent d'autres divinites a Dieu. C'est le seul sens pertinent dans le contexte — la negation refute que Abraham ait ete associateur.

§CRITIQUE§
Les traductions courantes donnent le meme sens pour ce verset. La difference notable est dans le mot « hanif ». Hamidullah traduit « le modele meme de la droiture » — une interpretation qui va au-dela du sens etymologique. Le Lane's donne « incline vers la verite » — celui qui penche naturellement vers le vrai. Notre traduction « incline vers la verite » est plus proche de l'etymologie de h-n-f. Hamidullah traduit « milla » par « religion » — nous disons « voie » pour rester au plus proche du sens de direction. Les deux sont acceptables, mais « voie » preserve l'idee de chemin a suivre.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 1 },
      { fr: "dirent", pos: "verbe", phon: "qalu", arabic: "\u0642\u064E\u0627\u0644\u064F\u0648\u0627\u06DF", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
      { fr: "soyez", pos: "verbe", phon: "kunu", arabic: "\u0643\u064F\u0648\u0646\u064F\u0648\u0627\u06DF", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 3 },
      { fr: "Juifs", pos: "nom", phon: "hudan", arabic: "\u0647\u064F\u0648\u062F\u064B\u0627", word_key: "hwd", is_particle: false, sense_retenu: "Juifs", position: 4 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064E\u0648\u0652", is_particle: true, position: 5 },
      { fr: "Chretiens", pos: "nom", phon: "nasara", arabic: "\u0646\u064E\u0635\u064E\u0640\u0631\u064E\u0649\u0670", word_key: "nsr", is_particle: false, sense_retenu: "Chretiens", position: 6 },
      { fr: "serez guides", pos: "verbe", phon: "tahtadu", arabic: "\u062A\u064E\u0647\u0652\u062A\u064E\u062F\u064F\u0648\u0627\u06DF", word_key: "htd", is_particle: false, sense_retenu: "etre guide", position: 7 },
      { fr: "dis", pos: "verbe", phon: "qul", arabic: "\u0642\u064F\u0644\u0652", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 8 },
      { fr: "mais", phon: "bal", arabic: "\u0628\u064E\u0644\u0652", is_particle: true, position: 9 },
      { fr: "voie", pos: "nom", phon: "millata", arabic: "\u0645\u0650\u0644\u0651\u064E\u0629\u064E", word_key: "mll", is_particle: false, sense_retenu: "religion", position: 10 },
      { fr: "d'Abraham", pos: "nom", phon: "Ibrahima", arabic: "\u0625\u0650\u0628\u0652\u0631\u064E\u0670\u0647\u0650\u0640\u06E7\u0645\u064E", word_key: "ibrhm", is_particle: false, sense_retenu: "Abraham", position: 11 },
      { fr: "incline vers la verite", pos: "adjectif", phon: "hanifan", arabic: "\u062D\u064E\u0646\u0650\u064A\u0641\u064B\u0627", word_key: "hnf", is_particle: false, sense_retenu: "incline vers la verite", position: 12 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 13 },
      { fr: "ne... pas / ce qui", phon: "ma", arabic: "\u0645\u064E\u0627", is_particle: true, position: 14 },
      { fr: "etait", pos: "verbe", phon: "kana", arabic: "\u0643\u064E\u0627\u0646\u064E", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 15 },
      { fr: "de (partitif)", phon: "mina", arabic: "\u0645\u0650\u0646\u064E", is_particle: true, position: 16 },
      { fr: "les associateurs", pos: "participe_actif", phon: "al-mushrikina", arabic: "\u0671\u0644\u0652\u0645\u064F\u0634\u0652\u0631\u0650\u0643\u0650\u064A\u0646\u064E", word_key: "shrk", is_particle: false, sense_retenu: "associer", position: 17 }
    ],
    words: [
      // qwl pos=2
      {
        word_key: "qwl", position: 2, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qalu est un accompli 3MP de la racine q-w-l. Le Lane's donne : dire, parler, affirmer. L'accompli rapporte un fait passe — ils ont dit. Le pronom implicite 3MP designe un groupe qui a emis cette parole. La distinction avec « opinion » (nul) est claire : le contexte est un discours rapporte, pas une opinion interieure. Le verbe apparait deux fois dans le verset : qalu (ils dirent) et qul (dis) — le premier rapporte la pretention, le second ordonne la reponse.",
              axe1_verset: "Le verbe qalu ouvre le verset en rapportant la pretention : « soyez Juifs ou Chretiens ». Le deuxieme usage (qul, dis) introduit la reponse divine. Le verset est structure comme un dialogue : pretention → reponse. Le champ lexical tourne autour de la parole et de l'identite religieuse. La parole est le vehicule du debat — dire c'est prendre position.",
              axe2_voisins: "Le verset 134 parlait de la responsabilite individuelle — chacun a ses comptes. Le verset 135 enchaine avec une pretention identitaire : on vous dit de devenir Juifs ou Chretiens. Le verset 136 donnera la reponse complete : « dites : nous croyons en Dieu et en ce qui nous a ete revele ». La progression est : principe → pretention → reponse.",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah apres la racine k-w-n. La sourate est structuree par des paroles rapportees : « Dieu dit », « ils dirent », « dis ». En 2:135, la parole est le lieu du conflit — la pretention est une parole, la refutation est une parole. La sourate montre que la verite passe par la parole juste.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. L'imperatif « qul » (dis) est une des formules les plus recurrentes — il structure de nombreuses sourates. En 2:135, le « dis » est un ordre divin de refuter une pretention exclusive. Le Coran utilise le « dis » pour donner au Prophete les mots de la verite face aux pretentions humaines.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'outil premier de la mission. Dire la verite face aux pretentions fausses est un devoir. Le khalifa doit savoir quoi dire et quand le dire — la parole juste est un acte de la mission."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est interieur — le contexte est un discours exterieur rapporte, pas une pensee interieure."
            }
          }
        }
      },
      // kwn pos=3
      {
        word_key: "kwn", position: 3, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être (verbe incomplet)", "venir à l'existence"],
              proof_ctx: "Le verbe kunu est un imperatif 2MP de la racine k-w-n. Le Lane's donne : etre, devenir, se trouver dans un etat. L'imperatif exprime un ordre de changement d'etat : devenez Juifs ou Chretiens. Le verbe kana est ici un verbe incomplet suivi d'un attribut (hudan / nasara) — soyez X ou Y. La distinction avec les autres sens est claire : le contexte est un imperatif de transformation identitaire.",
              axe1_verset: "Le verbe kunu porte l'injonction centrale de la pretention rapportee : devenez. Le champ lexical (etre, Juifs, Chretiens, guider) montre que l'injonction concerne l'identite religieuse. Le verbe kana apparait une deuxieme fois en position 15 (ma kana, il n'etait pas) pour nier qu'Abraham ait ete associateur. Les deux usages encadrent le verset — l'imperatif de devenir et la negation d'etre.",
              axe2_voisins: "Le verset 134 utilisait kanu (ils etaient) pour parler du passe. Le verset 135 utilise kunu (soyez) pour une injonction presente et kana (il etait) pour une negation passee. La racine k-w-n traverse les versets en portant differents temps et modes.",
              axe3_sourate: "La racine k-w-n est omnipresente dans la sourate. Son role est presque toujours grammatical — porter le temps, le mode, la negation. En 2:135, les deux occurrences illustrent cette polyvalence.",
              axe4_coherence: "Le Coran utilise kana a tous les temps et modes. L'imperatif kunu est frequent — en 2:65, « soyez des singes meprises ». En 3:79, « soyez des serviteurs de Dieu ». L'imperatif de kana transforme l'identite de celui qui le recoit.",
              axe5_frequence: "Pour la mission du khalifa, l'imperatif « soyez » est un appel a la transformation. Mais le verset montre que certains imperatifs sont faux — « soyez Juifs ou Chretiens » est une pretention humaine. Le khalifa doit discerner les vrais imperatifs des faux."
            }
          }
        }
      },
      // hwd pos=4
      {
        word_key: "hwd", position: 4, sense_chosen: "Juifs",
        analysis_axes: {
          sense_chosen: "Juifs",
          concept_chosen: "Judaïsme/Retour",
          concepts: {
            "Judaïsme/Retour": {
              status: "retenu",
              senses: ["juifs", "retourner", "prophète Hûd"],
              proof_ctx: "Le mot hudan est un nom accusatif masculin de la racine h-w-d. Le Lane's donne : Juifs (yahud/hud), ceux qui retournent (a Dieu), le prophete Hud. L'accusatif est un attribut de kunu — soyez Juifs. Le sens premier de h-w-d est le retour — les Juifs seraient etymologiquement « ceux qui retournent a Dieu ». Le mot designe ici le groupe religieux specifique. La distinction avec « prophete Hud » est que le contexte parle d'une identite religieuse a adopter, pas d'un prophete specifique.",
              axe1_verset: "Le mot hudan est l'une des deux options proposees : soyez Juifs ou Chretiens. Le verset oppose cette pretention exclusiviste a la voie d'Abraham. Le champ lexical (Juifs, Chretiens, guider, voie, Abraham) tourne autour de l'identite religieuse. Le verset refuse l'idee que la guidance soit reservee a un groupe confessionnel specifique.",
              axe2_voisins: "Le verset 134 parlait de responsabilite individuelle — chacun porte ses propres actes. Le verset 135 enchaine avec la pretention identitaire — certains disent que la guidance passe par l'appartenance confessionnelle. Le verset 136 repondra : nous croyons en tout ce qui a ete revele. Le passage va du principe a la refutation d'une pretention.",
              axe3_sourate: "La racine h-w-d apparait dans la sourate al-Baqarah en 2:62 (ceux qui ont cru, les Juifs, les Chretiens, les Sabeens), en 2:111 (les Juifs et les Chretiens disent : personne n'entrera au Paradis sauf nous), en 2:120 (les Juifs ne seront satisfaits que si tu suis leur voie), et en 2:135. La sourate traite longuement de la relation avec les communautes juive et chretienne.",
              axe4_coherence: "La racine h-w-d apparait environ 26 fois dans le Coran. Le Coran reconnait les Juifs comme une communaute qui a recu une revelation authentique (la Torah) mais refuse leur pretention a l'exclusivite de la guidance. En 2:135, cette pretention est explicitement refutee au profit de la voie d'Abraham.",
              axe5_frequence: "Pour la mission du khalifa, la pretention identitaire est un piege. Le khalifa ne doit pas se definir par une etiquette confessionnelle mais par l'adherence a la verite. La voie d'Abraham transcende les categories confessionnelles — elle est l'inclinaison vers la verite, pas l'appartenance a un groupe."
            }
          }
        }
      },
      // nsr pos=6
      {
        word_key: "nsr", position: 6, sense_chosen: "Chretiens",
        analysis_axes: {
          sense_chosen: "Chretiens",
          concept_chosen: "Secours/Victoire",
          concepts: {
            "Secours/Victoire": {
              status: "retenu",
              senses: ["secourir", "aider", "victoire", "défendre"],
              proof_ctx: "Le mot nasara est un nom pluriel de la racine n-s-r. Le Lane's donne : Chretiens, partisans, ceux qui se secourent mutuellement. L'etymologie de nasara vient de nasr (secours) — les Chretiens (nasara) seraient « ceux qui se portent secours ». Certains exegetes lient le mot a Nazareth (al-Nasira), la ville d'origine de Jesus. Le mot designe ici le groupe religieux des Chretiens. La distinction avec « victoire » est que le mot est ici un nom propre collectif designant une communaute, pas un verbe ou un concept de victoire.",
              axe1_verset: "Le mot nasara est la seconde option proposee : soyez Juifs ou Chretiens. Le verset met les deux communautes sur le meme plan — chacune pretend detenir la guidance exclusive. Le champ lexical (Juifs, Chretiens, guider, voie, Abraham) montre que le verset traite de la pretention a l'exclusivite religieuse. La reponse refuse les deux pretentions au profit de la voie d'Abraham.",
              axe2_voisins: "Le verset 111 disait deja : « ils dirent : personne n'entrera au Paradis sauf les Juifs ou les Chretiens ». Le verset 135 reprend cette pretention sous une autre forme : « soyez Juifs ou Chretiens, vous serez guides ». Les deux versets partagent le meme schema : pretention exclusive → refutation. Le passage 134-136 forme un bloc sur le theme de l'identite religieuse vraie.",
              axe3_sourate: "La racine n-s-r apparait dans la sourate al-Baqarah sous ses deux sens : Chretiens (nasara) et secours (nasr). En 2:62, les Chretiens sont mentionnes parmi les communautes qui peuvent etre sauvees. En 2:120, les Chretiens ne seront satisfaits que si le Prophete suit leur voie. La sourate traite les Chretiens comme une communaute qui a recu la verite mais qui pretend a l'exclusivite.",
              axe4_coherence: "La racine n-s-r au sens de Chretiens apparait environ 15 fois dans le Coran. Le Coran reconnait les Chretiens comme une communaute revelee mais refuse leur pretention a l'exclusivite. En 5:14, Dieu a pris l'engagement des Chretiens mais ils ont oublie une partie de ce qui leur avait ete rappele.",
              axe5_frequence: "Pour la mission du khalifa, le refus de l'exclusivite confessionnelle est un principe fondamental. Le khalifa ne peut pas se laisser enfermer dans une categorie — la verite transcende les etiquettes. La voie d'Abraham est la voie de l'inclinaison vers la verite, pas l'appartenance a un groupe."
            },
            "Alliance/Soutien": {
              status: "nul",
              senses: ["partisan"],
              proof_ctx: "Le sens de partisan est un derivé du sens de secours — le partisan est celui qui soutient. Mais le mot nasara dans ce verset designe le groupe religieux des Chretiens, pas des partisans en general."
            }
          }
        }
      },
      // htd pos=7
      {
        word_key: "htd", position: 7, sense_chosen: "etre guide",
        analysis_axes: {
          sense_chosen: "etre guide",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "être guidé", "suivre la voie"],
              proof_ctx: "Le verbe tahtadu est un inaccompli 2MP de la racine h-t-d (ou h-d-y a la forme VIII ihtada). Le Lane's donne : etre guide, trouver le chemin, suivre la bonne voie. La forme VIII (ihtada) est reflexive — se guider soi-meme, trouver par soi-meme le chemin. L'inaccompli exprime ici une consequence attendue : si vous devenez Juifs ou Chretiens, vous trouverez la voie. Le verset rapporte cette promesse pour la refuter — la guidance ne vient pas de l'appartenance confessionnelle mais de la voie d'Abraham.",
              axe1_verset: "Le verbe tahtadu est la promesse attachee a l'injonction : devenez Juifs ou Chretiens ET vous serez guides. Le verset oppose cette guidance confessionnelle a la voie d'Abraham le hanif. Le champ lexical (guider, voie, Abraham, incline vers la verite) montre que la vraie guidance est liee a l'orientation interieure (hanif), pas a l'etiquette exterieure (Juif ou Chretien).",
              axe2_voisins: "Le verset 120 disait : « la guidance de Dieu est la vraie guidance ». Le verset 135 refute l'idee que la guidance vienne de l'appartenance confessionnelle. Le verset 137 dira : « s'ils croient en ce en quoi vous croyez, ils seront guides ». La guidance est un theme qui traverse tout ce passage.",
              axe3_sourate: "La racine h-d-y est une des plus importantes de la sourate al-Baqarah. En 2:2, « ce Livre est une guidance pour les pieux ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:120, « la guidance de Dieu est la vraie guidance ». La sourate definit la guidance comme venant de Dieu, pas des communautes humaines.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. La guidance est un concept central — Dieu guide qui Il veut (2:272), le Coran est une guidance pour les gens (2:185). Le verset 2:135 precise que la guidance ne se trouve pas dans une etiquette confessionnelle mais dans la voie du monotheisme pur d'Abraham.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est le but de la mission. Le khalifa cherche la guidance divine, pas l'appartenance a un groupe. La voie d'Abraham — l'inclinaison vers la verite — est le chemin de la guidance authentique."
            }
          }
        }
      },
      // qwl pos=8 (2nd occurrence - qul)
      {
        word_key: "qwl", position: 8, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Deuxieme occurrence de q-w-l dans le verset — ici a l'imperatif 2MS (qul, dis). Le Lane's donne : dire, parler. L'imperatif s'adresse au Prophete — Dieu lui ordonne de repondre a la pretention. Le « dis » est un ordre divin qui fournit au Prophete les mots de la verite. Memes analyses que pour la premiere occurrence, mais ici l'usage est l'imperatif divin, pas le discours rapporte.",
              axe1_verset: "Le verbe qul introduit la reponse divine a la pretention : « mais plutot la voie d'Abraham ». Le verset passe du discours rapporte (qalu, ils dirent) a l'ordre de repondre (qul, dis). Le « dis » est le pivot du verset — il marque le passage de la pretention a la verite. Le champ lexical de la parole (dire, pretendre, repondre) montre que le debat se fait par la parole.",
              axe2_voisins: "L'imperatif « qul » apparait dans les versets voisins — en 2:136, « dites (qulu) : nous croyons ». Le passage 135-136 utilise l'imperatif de la parole pour donner la bonne reponse aux pretentions confessionnelles.",
              axe3_sourate: "L'imperatif « qul » est un outil structurant de la sourate al-Baqarah et du Coran en general. Il introduit les reponses divines aux questions et aux pretentions humaines.",
              axe4_coherence: "L'imperatif « qul » apparait environ 332 fois dans le Coran. Il est l'outil par lequel Dieu donne au Prophete les mots de la verite. En 2:135, le « qul » corrige la pretention exclusive des Juifs et des Chretiens.",
              axe5_frequence: "Pour la mission du khalifa, l'imperatif « dis » est un appel a la parole juste. Le khalifa doit savoir repondre aux pretentions fausses avec les mots de la verite."
            }
          }
        }
      },
      // mll pos=10
      {
        word_key: "mll", position: 10, sense_chosen: "religion",
        analysis_axes: {
          sense_chosen: "religion",
          concept_chosen: "Religion/Confession",
          concepts: {
            "Religion/Confession": {
              status: "retenu",
              senses: ["religion", "confession", "communauté"],
              proof_ctx: "Le mot millata est un nom feminin singulier accusatif de la racine m-l-l. Le Lane's donne : religion, voie religieuse, confession, systeme de croyances et de pratiques. La milla est la voie que l'on suit — elle englobe les croyances, les pratiques et l'orientation de vie. L'accusatif est un complement d'objet direct sous-entendu (nous suivons la voie d'Abraham). L'idafa (millata Ibrahima) rattache la voie a Abraham — c'est sa voie specifique.",
              axe1_verset: "Le mot millata est la reponse a la pretention : au lieu de devenir Juifs ou Chretiens, suivez la voie d'Abraham. Le champ lexical (Juifs, Chretiens, guider, voie, Abraham, hanif) montre que le verset oppose les identites confessionnelles a la voie abrahamique. La milla d'Abraham transcende les divisions confessionnelles — elle est la voie du monotheisme pur.",
              axe2_voisins: "Le verset 130 demandait : « qui se detournerait de la voie (milla) d'Abraham sinon celui qui se rend sot ? ». Le verset 135 reprend ce theme — la voie d'Abraham est la reponse aux pretentions exclusivistes. Les versets 130-135 forment un ensemble sur la voie d'Abraham comme reference universelle.",
              axe3_sourate: "La racine m-l-l au sens de religion apparait en 2:120 (leur voie), 2:130 (la voie d'Abraham) et 2:135 (la voie d'Abraham). La sourate al-Baqarah presente la voie d'Abraham comme le point de convergence — toutes les communautes devraient s'y rattacher plutot que de revendiquer l'exclusivite.",
              axe4_coherence: "La racine m-l-l au sens de religion apparait environ 15 fois dans le Coran. L'expression « millat Ibrahim » (la voie d'Abraham) est un refrain coranique — en 3:95, « suivez la voie d'Abraham, hanif ». En 4:125, « qui a une meilleure religion que celui qui se soumet a Dieu en faisant le bien et suit la voie d'Abraham ? ». Le Coran presente Abraham comme la reference universelle.",
              axe5_frequence: "Pour la mission du khalifa, la voie d'Abraham est le chemin de la mission. La milla n'est pas une etiquette — c'est une orientation de vie. Le khalifa suit la voie du monotheisme pur, de l'inclinaison vers la verite, pas une appartenance confessionnelle."
            }
          }
        }
      },
      // ibrhm pos=11
      {
        word_key: "ibrhm", position: 11, sense_chosen: "Abraham",
        analysis_axes: {
          sense_chosen: "Abraham",
          concept_chosen: "Nom propre",
          concepts: {
            "Nom propre": {
              status: "retenu",
              senses: ["Abraham (nom propre)"],
              proof_ctx: "Le mot Ibrahima est le nom propre du prophete patriarche au genitif dans la construction possessive « millata Ibrahima » (la voie d'Abraham). Le Lane's indique que Ibrahim est un nom propre non-arabe — il designe une personne historique specifique et ne change pas de sens selon le contexte. L'idafa rattache la voie a Abraham comme fondateur et reference.",
              axe1_verset: "Le nom Ibrahim est le pivot de la reponse : au lieu de devenir Juifs ou Chretiens, suivez la voie d'Abraham. Le champ lexical (voie, Abraham, hanif, pas associateur) definit Abraham comme le modele du monotheisme pur. Le verset fait d'Abraham la reference qui transcende les divisions confessionnelles — il n'etait ni Juif ni Chretien, il etait hanif.",
              axe2_voisins: "Les versets 124-133 etaient consacres a Abraham : son epreuve, la construction de la Kaaba, sa priere pour sa descendance, sa recommandation a ses fils. Le verset 135 conclut ce long passage en faisant d'Abraham la reponse aux pretentions confessionnelles. Le nom d'Abraham est le fil conducteur de tout le passage.",
              axe3_sourate: "Le nom Ibrahim apparait 15 fois dans la sourate al-Baqarah — c'est le prophete le plus mentionne dans cette sourate. Il est le constructeur de la Kaaba (2:127), le modele de soumission (2:131), le pere de la communaute (2:128), et la reference universelle (2:130, 2:135). La sourate fait d'Abraham le point de convergence de toutes les communautes.",
              axe4_coherence: "Le nom Ibrahim apparait 69 fois dans le Coran. Abraham est le seul prophete dont le Coran dit explicitement qu'il faut suivre la voie (milla). Il est le hanif par excellence — celui qui s'est tourne vers la verite en se detournant du faux. Le Coran le presente comme le pere du monotheisme pur, anterieur aux divisions confessionnelles.",
              axe5_frequence: "Pour la mission du khalifa, Abraham est le modele de la mission. Il a ete eprouve et a reussi, il a construit la Kaaba, il a recommande la soumission a ses fils. Le khalifa suit la voie d'Abraham — l'inclinaison vers la verite, le refus de l'association, la soumission a Dieu seul."
            },
            "Preuve/Évidence": {
              status: "nul",
              senses: ["preuve claire"],
              proof_ctx: "Le sens de preuve est hors sujet — le mot est un nom propre qui designe le prophete Abraham, pas un concept de preuve."
            },
            "Durée": {
              status: "nul",
              senses: ["longue période"],
              proof_ctx: "Le sens de duree est hors sujet — le mot est un nom propre, pas un terme temporel."
            }
          }
        }
      },
      // hnf pos=12
      {
        word_key: "hnf", position: 12, sense_chosen: "incline vers la verite",
        analysis_axes: {
          sense_chosen: "incline vers la verite",
          concept_chosen: "Inclinaison/Droiture",
          concepts: {
            "Inclinaison/Droiture": {
              status: "retenu",
              senses: ["s'incliner vers la vérité", "être monothéiste pur (hanif)", "se détourner du faux"],
              proof_ctx: "Le mot hanifan est un adjectif masculin singulier accusatif indefini de la racine h-n-f. Le Lane's donne : incline vers la verite, monothéiste pur, celui qui se detourne du faux pour se tourner vers le vrai. Le sens premier de h-n-f est l'inclinaison, la deviation — le pied bot (hanaf) est un pied qui devie. Par extension, le hanif est celui dont l'ame devie du faux pour pencher vers le vrai. L'accusatif est un hal (circonstanciel d'etat) — Abraham etait hanif, c'est-a-dire dans l'etat d'inclination vers la verite.",
              axe1_verset: "Le mot hanifan qualifie Abraham et definit sa voie : l'inclinaison vers la verite. Le verset oppose cette inclinaison aux etiquettes confessionnelles (Juifs, Chretiens). Le champ lexical (voie, Abraham, hanif, pas associateur) definit la voie abrahamique par deux traits : inclination positive (hanif) et negation de l'association (ma kana min al-mushrikina). Le hanif est le contraire de l'associateur.",
              axe2_voisins: "Le verset 130 parlait de la voie d'Abraham sans la qualifier. Le verset 135 ajoute la qualification : Abraham etait hanif. Le verset 136 precisera le contenu de la foi : croire en tout ce qui a ete revele. Le hanif est celui qui n'exclut aucune verite — il s'incline vers toute verite, d'ou qu'elle vienne.",
              axe3_sourate: "La racine h-n-f apparait en 2:135 pour la premiere fois dans la sourate. Elle sera reprise plus tard dans le Coran dans des contextes similaires — toujours pour qualifier Abraham et sa voie. La sourate al-Baqarah introduit le concept de hanif comme la definition de la voie abrahamique.",
              axe4_coherence: "La racine h-n-f apparait environ 12 fois dans le Coran, toujours en lien avec Abraham ou la voie du monotheisme pur. En 3:67, « Abraham n'etait ni Juif ni Chretien, mais il etait hanif, soumis, et il n'etait pas parmi les associateurs ». En 6:79, Abraham dit : « j'ai tourne mon visage vers Celui qui a cree les cieux et la terre, hanif ». Le hanif est le concept coranique du monotheisme pur anterieur aux religions organisees.",
              axe5_frequence: "Pour la mission du khalifa, le hanif est le modele de la mission. L'inclinaison vers la verite est la qualite premiere du khalifa — il ne suit pas des etiquettes mais la verite elle-meme. Le hanif est libre des categories humaines et penche naturellement vers ce qui est juste et vrai."
            },
            "Déviation/Courbure": {
              status: "nul",
              senses: ["pied bot", "être tordu"],
              proof_ctx: "Le sens physique de pied bot est l'etymologie concrete de h-n-f. Le sens abstrait (inclinaison vers la verite) en derive mais s'en distingue. Le verset utilise le sens abstrait spirituel, pas le sens physique concret."
            }
          }
        }
      },
      // kwn pos=15 (2nd - kana with negation)
      {
        word_key: "kwn", position: 15, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être (verbe incomplet)", "venir à l'existence"],
              proof_ctx: "Deuxieme occurrence de k-w-n dans le verset — ici a l'accompli 3MS (kana) avec la negation ma. Le Lane's donne : etre, exister. L'expression « ma kana min al-mushrikina » signifie « il n'etait pas parmi les associateurs ». Le verbe kana porte la negation et le temps passe. Memes analyses que pour la premiere occurrence. Le verbe nie l'appartenance d'Abraham a la categorie des associateurs.",
              axe1_verset: "Le verbe kana avec la negation ma forme la seconde qualification d'Abraham : apres le positif (hanif) vient le negatif (pas associateur). Le verset definit Abraham par ce qu'il est (incline vers la verite) et par ce qu'il n'est pas (pas associateur). Les deux qualifications sont complementaires — le hanif est par definition le non-associateur.",
              axe2_voisins: "Le verset 136 reprendra cette double qualification en demandant aux croyants de croire en tout ce qui a ete revele — sans exclure ni associer. Les versets voisins construisent une definition positive de la foi abrahamique par inclusion (croire en tout) et exclusion (pas d'association).",
              axe3_sourate: "La negation « ma kana min al-mushrikina » est une formule reprise dans d'autres sourates pour qualifier Abraham. Dans al-Baqarah, elle repond directement aux pretentions des versets precedents.",
              axe4_coherence: "L'expression « ma kana min al-mushrikina » apparait en 2:135, 3:67, 6:161, 16:120. Le Coran insiste sur ce point — Abraham n'etait pas associateur, malgre les pretentions des communautes qui se reclament de lui.",
              axe5_frequence: "Pour la mission du khalifa, la negation de l'association est un principe fondamental. Le khalifa ne doit associer rien a Dieu — ni idoles, ni interets, ni etiquettes confessionnelles."
            }
          }
        }
      },
      // shrk pos=17
      {
        word_key: "shrk", position: 17, sense_chosen: "associer",
        analysis_axes: {
          sense_chosen: "associer",
          concept_chosen: "Association/Polythéisme",
          concepts: {
            "Association/Polythéisme": {
              status: "retenu",
              senses: ["associer", "polythéisme", "partenaire"],
              proof_ctx: "Le mot al-mushrikina est un participe actif defini pluriel au genitif de la racine sh-r-k. Le Lane's donne : associer, donner un associe a Dieu, polytheisme. Le participe actif (mushrik) designe celui qui pratique l'association de maniere active et deliberee — c'est un acte continu, pas un etat passif. L'article defini (al-) indique la categorie connue des associateurs. Le genitif est regi par la preposition min (parmi) — Abraham n'etait pas PARMI les associateurs, il n'appartenait pas a cette categorie.",
              axe1_verset: "Le mot al-mushrikina ferme le verset en niant qu'Abraham ait ete associateur. Le champ lexical (voie, Abraham, hanif, pas associateur) construit une definition par contraste : la voie d'Abraham est le monotheisme pur, l'oppose de l'association. Le verset utilise l'association comme contre-modele — ce qu'Abraham n'est PAS est aussi important que ce qu'il EST.",
              axe2_voisins: "Le verset 135 nie l'association pour Abraham. Le verset 136 demandera aux croyants de croire en tout ce qui a ete revele sans distinction (la nufarriqu) entre les prophetes. Le lien est logique : l'associateur divise (il associe d'autres a Dieu), le croyant abrahamique unit (il accepte tous les prophetes sans distinction).",
              axe3_sourate: "La racine sh-r-k apparait dans la sourate al-Baqarah en 2:22 (ne donnez pas d'associes a Dieu), 2:96, 2:105, 2:135, 2:221 (ne vous mariez pas avec les associatrices). La sourate traite l'association comme le peche fondamental — le refus du monotheisme pur d'Abraham.",
              axe4_coherence: "La racine sh-r-k apparait environ 168 fois dans le Coran. Le shirk (association) est le peche impardonnable selon 4:48 et 4:116. Le Coran oppose systematiquement le tawhid (unicite) au shirk (association). En 2:135, la negation du shirk pour Abraham est la preuve que sa voie est le monotheisme pur.",
              axe5_frequence: "Pour la mission du khalifa, le refus de l'association est le premier commandement. Le khalifa ne doit rien associer a Dieu — ni idoles materielles, ni idoles conceptuelles (argent, pouvoir, statut). La voie d'Abraham est la voie du monotheisme absolu."
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

  const verseIds = [141, 142];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 134-135 ===\n');
  await processVerse(134);
  await processVerse(135);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V134-V135 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
