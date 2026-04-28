const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 141-142
// V141: verse_id=148, analysis_id=504
// V142: verse_id=149, analysis_id=509
// =====================================================

const verseData = {
  141: {
    verse_id: 148,
    analysis_id: 504,
    translation_arab: "Celle-la est une communaute qui a passe. A elle ce qu'elle a acquis, et a vous ce que vous avez acquis. Et vous ne serez pas interroges sur ce qu'ils faisaient.",
    full_translation: "Voila une generation bel et bien revolue. A elle ce qu'elle a acquis, et a vous ce que vous avez acquis. On ne vous demandera pas compte de ce qu'ils faisaient.",
    translation_explanation: `§DEMARCHE§
Le verset etablit un principe de responsabilite individuelle : chaque generation porte ses propres actes. Le demonstratif **tilka** (celle-la) est un pronom demonstratif feminin lointain — il pointe vers une communaute eloignee dans le temps. Le nom **ummatun** est un nom feminin singulier indefini de la racine a-m-m. Le Lane's donne : communaute, groupe uni, generation. L'indefini marque qu'il s'agit d'une communaute parmi d'autres — pas une communaute specifiquement nommee. La particule **qad** devant l'accompli renforce l'achevement — cette communaute a bel et bien passe. Le verbe **khalat** est un accompli 3FS de la racine x-l-w. Le Lane's donne : passer, etre revolu, etre vide. L'accompli feminin singulier s'accorde avec ummatun — cette communaute a passe, elle est revolue. La preposition **laha** (a elle) introduit le partage des responsabilites — a cette communaute revient ce qu'elle a acquis. Le pronom relatif **ma** (ce que) introduit l'objet de l'acquisition. Le verbe **kasabat** est un accompli 3FS de la racine k-s-b. Le Lane's donne : acquerir, gagner, meriter. L'accompli marque que l'acquisition est achevee — ce qu'elle a acquis par ses actes lui revient. La conjonction **wa lakum** (et a vous) cree le parallele — la meme structure se repete pour les interlocuteurs. Le verbe **kasabtum** est un accompli 2MP — ce que vous avez acquis vous revient. La negation **wa la** suivie de l'inaccompli passif **tus'aluna** (vous ne serez pas interroges) etablit la regle : vous ne porterez pas le poids de leurs actes. La preposition **'amma** (a propos de ce que) introduit l'objet de l'interrogation. Le verbe **kanu** est un accompli 3MP de la racine k-w-n — ils etaient. Le verbe **ya'maluna** est un inaccompli 3MP de la racine '-m-l. Le Lane's donne : travailler, agir, oeuvrer. L'inaccompli apres kanu exprime l'habitude dans le passe — ce qu'ils avaient l'habitude de faire. Le verset dit que les actes passes de cette communaute ne vous seront pas imputes.

§JUSTIFICATION§
**communaute** — Le sens retenu est « communaute ». Le mot ummatun designe un groupe uni partageant un lien commun. L'alternative « mere » est ecartee car le contexte est une generation passee, pas une relation de parente.

**a passe** — Le sens retenu est « passer/etre revolu ». Le verbe khalat designe le passage du temps et la disparition. L'alternative « etre vide » est ecartee car le contexte est temporel — la communaute a passe, elle n'est pas vide.

**a elle** — Le mot laha est la preposition la (a/pour) + pronom suffixe ha (elle). Il introduit l'attribution des actes a cette communaute.

**ce que** — Le pronom relatif ma introduit l'objet de l'acquisition. Il fonctionne comme « ce que » en francais.

**a acquis** — Le sens retenu est « acquerir ». Le verbe kasabat designe l'acquisition par l'effort. Ce qui est acquis revient a celui qui l'a acquis — principe de retribution individuelle.

**serez interroges** — Le sens retenu est « interroger/demander ». Le verbe tus'aluna au passif signifie « etre interroge ». La negation la + l'inaccompli passif marque que l'interrogation n'aura pas lieu pour vous sur leurs actes.

**de ce que** — Le mot 'amma est la contraction de 'an (a propos de) + ma (ce que). Il introduit l'objet de la non-interrogation.

**etaient** — Le sens retenu est « etre ». Le verbe kanu est le verbe d'existence a l'accompli — il situe les actions dans le passe.

**faisaient** — Le sens retenu est « oeuvrer/agir ». Le verbe ya'maluna designe l'action deliberee et continue. L'inaccompli apres kanu marque l'habitude passee — leurs oeuvres habituelles.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. La seule variation est le mot « generation » (Hamidullah) la ou nous donnons « communaute ». Le mot umma en arabe couvre les deux sens — communaute et generation. Le choix de « communaute » est plus proche de la racine a-m-m qui porte l'idee de groupe uni (la mere qui rassemble), tandis que « generation » insiste sur l'aspect temporel. Les deux sont valides, mais « communaute » preserve mieux le lien avec la racine.`,
    segments: [
      { fr: "celle-la", phon: "tilka", arabic: "\u062a\u0650\u0644\u0652\u0643\u064e", is_particle: true, position: 1 },
      { fr: "une communaute", pos: "nom", phon: "ummatun", arabic: "\u0623\u064f\u0645\u0651\u064e\u0629\u064c", word_key: "amm", is_particle: false, sense_retenu: "communaute", position: 2 },
      { fr: "deja", phon: "qad", arabic: "\u0642\u064e\u062f\u0652", is_particle: true, position: 3 },
      { fr: "a passe", pos: "verbe", phon: "khalat", arabic: "\u062e\u064e\u0644\u064e\u062a\u0652", word_key: "xlw", is_particle: false, sense_retenu: "passer", position: 4 },
      { fr: "a elle", pos: "nom", phon: "laha", arabic: "\u0644\u064e\u0647\u064e\u0627", word_key: "lhy", is_particle: false, sense_retenu: "a/pour", position: 5 },
      { fr: "ce que", pos: "nom", phon: "ma", arabic: "\u0645\u064e\u0627", word_key: "ma", is_particle: false, sense_retenu: "ce que", position: 6 },
      { fr: "elle a acquis", pos: "verbe", phon: "kasabat", arabic: "\u0643\u064e\u0633\u064e\u0628\u064e\u062a\u0652", word_key: "ksb", is_particle: false, sense_retenu: "acquerir", position: 7 },
      { fr: "et pour vous", phon: "wa lakum", arabic: "\u0648\u064e\u0644\u064e\u0643\u064f\u0645", is_particle: true, position: 8 },
      { fr: "ce que", pos: "nom", phon: "ma", arabic: "\u0645\u0651\u064e\u0627", word_key: "ma", is_particle: false, sense_retenu: "ce que", position: 9 },
      { fr: "vous avez acquis", pos: "verbe", phon: "kasabtum", arabic: "\u0643\u064e\u0633\u064e\u0628\u0652\u062a\u064f\u0645\u0652", word_key: "ksb", is_particle: false, sense_retenu: "acquerir", position: 10 },
      { fr: "et ne pas", phon: "wa la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 11 },
      { fr: "vous serez interroges", pos: "verbe", phon: "tus'aluna", arabic: "\u062a\u064f\u0633\u0652\u0640\u064e\u0654\u0644\u064f\u0648\u0646\u064e", word_key: "sal", is_particle: false, sense_retenu: "interroger", position: 12 },
      { fr: "de ce que", pos: "nom", phon: "'amma", arabic: "\u0639\u064e\u0645\u0651\u064e\u0627", word_key: "emm", is_particle: false, sense_retenu: "de ce que", position: 13 },
      { fr: "ils etaient", pos: "verbe", phon: "kanu", arabic: "\u0643\u064e\u0627\u0646\u064f\u0648\u0627\u06df", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 14 },
      { fr: "faisaient", pos: "verbe", phon: "ya'maluna", arabic: "\u064a\u064e\u0639\u0652\u0645\u064e\u0644\u064f\u0648\u0646\u064e", word_key: "eml", is_particle: false, sense_retenu: "oeuvrer", position: 15 }
    ],
    words: [
      // amm pos=2
      {
        word_key: "amm", position: 2, sense_chosen: "communaute",
        analysis_axes: {
          sense_chosen: "communaute",
          concept_chosen: "Origine/Communaut\u00e9",
          concepts: {
            "Origine/Communaut\u00e9": {
              status: "retenu",
              senses: ["mere", "nation", "communaute"],
              proof_ctx: "Le mot ummatun est un nom feminin singulier indefini de la racine a-m-m. Le Lane's donne : mere, communaute, nation, groupe de gens unis par un lien commun. L'umma est un groupe qui partage une origine ou une direction commune — la racine porte l'idee de la mere (umm) comme source et de la communaute (umma) comme extension sociale de ce lien. L'indefini (ummatun sans article) marque qu'il s'agit d'une communaute parmi d'autres, pas une communaute specifique nommee. Le contexte du verset traite des generations passees et de leur responsabilite — l'umma est un groupe temporel et social.",
              axe1_verset: "Le mot ummatun ouvre le verset comme sujet de la proposition. Le demonstratif tilka (celle-la, lointain) la situe dans le passe — c'est une communaute eloignee dans le temps. Le champ lexical du verset tourne autour de la responsabilite (acquerir, interroger, oeuvrer) et de la separation temporelle (a passe, deja). La communaute est l'entite collective dont on parle pour etablir le principe d'individualite des comptes : chaque communaute a ses propres acquis.",
              axe2_voisins: "Le verset 140 posait la question : « Ou dites-vous qu'Ibrahim etait juif ou chretien ? ». Le verset 141 repond en coupant court — cette communaute a passe, elle a ses propres comptes. Le verset 142 changera de sujet vers la qibla. Le verset 141 est une conclusion qui ferme le debat sur les patriarches en posant le principe de responsabilite individuelle par communaute.",
              axe3_sourate: "La sourate al-Baqarah mentionne les umam (nations passees) a plusieurs reprises. En 2:128, Ibrahim demande a Dieu de faire de sa descendance une communaute (umma) soumise. En 2:134, le meme verset que 2:141 apparait — « celle-la est une communaute qui a passe ». La repetition du verset 134 en 141 encadre le passage sur Ibrahim et Isma'il comme une parenthese close par le meme principe.",
              axe4_coherence: "La racine a-m-m apparait environ 64 fois dans le Coran. En 2:213, « les gens etaient une seule communaute (umma wahida) ». En 10:19, « les gens n'etaient qu'une seule communaute ». En 23:52, « cette communaute est votre communaute, une seule ». Le Coran utilise umma pour designer les groupes humains dans le temps — chaque epoque a sa communaute, chaque communaute a ses comptes.",
              axe5_frequence: "Pour la mission du khalifa, la communaute est le cadre collectif de la mission. Le verset rappelle que chaque communaute est responsable de ses propres actes — le khalifa ne peut pas se prevaloir des merites d'une communaute passee ni etre accable par ses echecs. La mission se renouvelle a chaque generation : chaque communaute recommence avec ses propres acquis."
            }
          }
        }
      },
      // xlw pos=4
      {
        word_key: "xlw", position: 4, sense_chosen: "passer",
        analysis_axes: {
          sense_chosen: "passer",
          concept_chosen: "Passage/Pass\u00e9",
          concepts: {
            "Vacuit\u00e9/Solitude": {
              status: "probable",
              senses: ["etre vide", "etre seul", "etre libre de"],
              proof_ctx: "Le sens de vacuite est un sens physique premier de x-l-w — un espace vide, debarrasse de ce qui l'occupait. La distinction philosophique avec le passage est que la vacuite est un etat resultant (l'espace est vide apres le depart), tandis que le passage est l'acte meme du depart (la communaute est partie). Le verbe khalat avec un sujet humain (umma) porte naturellement le sens de passage temporel — les communautes passent, elles ne « se vident » pas. La vacuite serait le point de vue de l'espace laisse derriere, pas celui de la communaute qui part.",
              axe1_verset: "Le verbe khalat pourrait evoquer la vacuite — cette communaute a vidé la scene. Le champ lexical du verset (acquis, interroger, oeuvrer) porte sur les actes et les comptes, pas sur un espace vide. La vacuite est un etat statique, alors que le verset decrit un mouvement temporel — cette communaute a passe et ses actes restent enregistres.",
              axe2_voisins: "Le verset 140 debattait de l'identite religieuse d'Ibrahim. Le verset 141 ferme ce debat — peu importe, cette communaute a passe. La vacuite (l'espace est vide) est moins pertinente que le passage (ils sont partis avec leurs actes). Le passage ferme le debat, la vacuite ne ferait que decrire un etat.",
              axe3_sourate: "La sourate utilise khalat pour les communautes passees en 2:134 (verset identique). Le contexte des deux occurrences est le meme — couper court au debat sur les ancetres en rappelant qu'ils ont passe. La vacuite impliquerait que les ancetres ont laisse un vide, alors que le verset dit qu'ils ont emporte leurs actes avec eux.",
              axe4_coherence: "En 3:137, « des communautes ont passe (khalat) avant vous ». En 5:75, « les envoyes ont passe (khalat) avant lui ». Le Coran utilise khalat pour le passage des generations dans le temps. La vacuite est un sous-produit du passage — une fois qu'ils sont passes, la place est vide — mais le Coran insiste sur le mouvement, pas sur le resultat.",
              axe5_frequence: "Pour la mission du khalifa, le passage des communautes rappelle que la mission est temporaire pour chaque generation. La vacuite serait une vision pessimiste — ils sont partis et il ne reste rien. Le passage est une vision dynamique — ils sont partis avec leurs acquis, et c'est a la generation suivante de faire les siens."
            },
            "Passage/Pass\u00e9": {
              status: "retenu",
              senses: ["passer (temps revolu)", "les generations passees"],
              proof_ctx: "Le verbe khalat est un accompli 3FS de la racine x-l-w. Le Lane's donne : passer, etre revolu, s'ecouler dans le temps, etre vide, etre seul. Le sens de passage temporel est le plus naturel avec un sujet humain (umma, communaute). La particule qad devant l'accompli renforce l'achevement — cette communaute a bel et bien passe. La distinction philosophique avec la vacuite est que le passage est un mouvement dans le temps (la communaute se deplace du present vers le passe), tandis que la vacuite est un etat resultant (l'espace laisse derriere est vide). Le verset insiste sur le fait que leurs actes les accompagnent — c'est un passage avec bagages, pas un vide. La distinction avec l'abandon est que le passage est involontaire (le temps passe sans qu'on le choisisse), tandis que l'abandon est un acte delibere.",
              axe1_verset: "Le verbe khalat est qualifie par la particule qad qui renforce l'achevement — « a bel et bien passe ». Le champ lexical du verset (acquerir, interroger, oeuvrer) porte sur les comptes et la retribution. Le passage de la communaute est le fait accompli qui sert de base au raisonnement : puisqu'elle a passe, ses acquis lui reviennent et les votres vous reviennent. Le passage cree la separation temporelle qui fonde l'individualite des comptes.",
              axe2_voisins: "Le verset 140 posait la question de l'identite d'Ibrahim — juif ou chretien ? Le verset 141 coupe court en disant que cette communaute a passe avec ses comptes. Le passage est l'argument qui rend le debat caduc — puisqu'ils ont passe, leur identite religieuse ne vous concerne plus, seuls vos propres actes comptent. Le verset 142 ouvrira un nouveau sujet (la qibla).",
              axe3_sourate: "Le verset 2:134 est identique au verset 2:141 — la repetition encadre le passage sur Ibrahim, Isma'il, Ishaq et Ya'qub (versets 135-140). La sourate utilise ce refrain pour marquer les bornes du passage : le debut et la fin du debat sur les patriarches sont ponctues par la meme conclusion — cette communaute a passe.",
              axe4_coherence: "La racine x-l-w apparait environ 29 fois dans le Coran. En 2:214, « la communaute qui a passe avant vous ». En 3:137, « des communautes ont passe avant vous ». En 5:75, « les envoyes ont passe avant lui ». Le Coran utilise khalat comme un verbe de passage temporel pour les generations et les envoyes passes — c'est un mouvement irreversible dans le temps.",
              axe5_frequence: "Pour la mission du khalifa, le passage des communautes rappelle que le temps est limite. Chaque generation passe et emporte ses acquis. Le khalifa ne peut pas compter sur les merites des ancetres — il doit constituer ses propres acquis. Le passage est un rappel de l'urgence de la mission : le temps passe et les comptes suivent."
            },
            "Abandon": {
              status: "nul",
              senses: ["laisser", "liberer"],
              proof_ctx: "Le sens d'abandon est un acte delibere — laisser quelque chose volontairement. Le verbe khalat avec le sujet umma ne porte pas de volonte de depart — la communaute passe dans le temps, elle ne decide pas de partir."
            }
          }
        }
      },
      // lhy pos=5
      {
        word_key: "lhy", position: 5, sense_chosen: "a/pour",
        analysis_axes: {
          sense_chosen: "a/pour",
          concept_chosen: "Divertissement/Oubli",
          concepts: {
            "Divertissement/Oubli": {
              status: "retenu",
              senses: ["se divertir", "jouer", "oublier", "se detourner de", "etre negligent"],
              proof_ctx: "Le mot laha est la preposition la (a, pour) combinee au pronom suffixe ha (elle). Dans ce verset, laha signifie « a elle » ou « pour elle » — a cette communaute reviennent ses acquis. La racine l-h-y porte les sens de divertissement et d'oubli dans le Lane's, mais ici le mot n'est pas utilise comme verbe de divertissement — c'est une construction prepositionnelle d'attribution. Le sens fonctionnel « a/pour » est le seul applicable dans cette structure syntaxique.",
              axe1_verset: "Le mot laha introduit la premiere attribution — « a elle ce qu'elle a acquis ». Le champ lexical du verset (acquerir, interroger) porte sur la retribution et les comptes. Le mot laha cree le parallele avec wa lakum (et a vous) — le verset distribue les comptes entre deux parties.",
              axe2_voisins: "Le verset 134 contient la meme expression « laha ma kasabat wa lakum ma kasabtum ». Le parallele entre les deux versets montre que laha est une structure d'attribution standard dans ce contexte.",
              axe3_sourate: "La preposition la + pronom est une des constructions les plus frequentes de la sourate al-Baqarah pour marquer l'attribution — a lui, a elle, a eux, a vous.",
              axe4_coherence: "Cette construction prepositionnelle est omnipresente dans le Coran. Elle marque l'attribution sans ambiguite — « a elle » signifie que ses acquis lui reviennent.",
              axe5_frequence: "Pour la mission du khalifa, l'attribution individuelle est le fondement de la responsabilite. Ce qui revient a chacun lui est propre — pas de transfert de merites ni de fautes entre generations."
            }
          }
        }
      },
      // ma pos=6
      {
        word_key: "ma", position: 6, sense_chosen: "ce que",
        analysis_axes: {
          sense_chosen: "ce que",
          concept_chosen: "Particule",
          concepts: {
            "Particule": {
              status: "retenu",
              senses: ["quoi", "ne...pas"],
              proof_ctx: "Le mot ma est ici un pronom relatif signifiant « ce que ». Il introduit la proposition relative « ce qu'elle a acquis ». C'est un emploi standard et omnipresent dans le Coran. Le sens negatif (ne...pas) est ecarte car ma est ici suivi d'un verbe a l'accompli dans une proposition positive.",
              axe1_verset: "Le mot ma introduit l'objet de l'acquisition — « ce que » elle a acquis. Le parallele « laha ma kasabat / wa lakum ma kasabtum » montre que ma fonctionne identiquement dans les deux propositions comme pronom relatif.",
              axe2_voisins: "Le verset 134 contient la meme structure. Le mot ma y a la meme fonction de pronom relatif introduisant l'objet de l'acquisition.",
              axe3_sourate: "Le pronom relatif ma est un des mots les plus frequents de la sourate al-Baqarah. Il introduit les propositions relatives dans des contextes varies.",
              axe4_coherence: "Le mot ma comme pronom relatif est l'un des mots les plus frequents du Coran, utilise des milliers de fois pour introduire « ce que » dans les propositions relatives.",
              axe5_frequence: "Pour la mission du khalifa, « ce que » introduit le contenu des actes — la mission est definie par ce que le khalifa fait, pas par ce qu'il herite."
            }
          }
        }
      },
      // ksb pos=7
      {
        word_key: "ksb", position: 7, sense_chosen: "acquerir",
        analysis_axes: {
          sense_chosen: "acquerir",
          concept_chosen: "Acquisition/R\u00e9tribution",
          concepts: {
            "Acquisition/R\u00e9tribution": {
              status: "retenu",
              senses: ["acquerir", "gagner", "meriter"],
              proof_ctx: "Le verbe kasabat est un accompli 3FS de la racine k-s-b. Le Lane's donne : acquerir, gagner par l'effort, meriter. L'acquisition est un acte directionnel — on acquiert quelque chose par son propre effort et cela devient sa propriete. L'accompli feminin singulier s'accorde avec umma — cette communaute a acquis par ses actes. Le mot apparait deux fois dans le verset (kasabat / kasabtum) pour marquer le parallele entre la communaute passee et les interlocuteurs : chacun acquiert pour soi.",
              axe1_verset: "Le verbe kasabat est repete deux fois dans le verset — « ce qu'elle a acquis / ce que vous avez acquis ». La repetition cree le parallele strict entre les deux parties. Le champ lexical (communaute, passer, interroger, oeuvrer) porte sur la retribution individuelle. L'acquisition est le mecanisme de cette retribution : chacun recoit ce qu'il a acquis, pas ce que les autres ont acquis.",
              axe2_voisins: "Le verset 134 contient la meme repetition de kasaba. Les versets 135-140 debattaient de l'identite religieuse des patriarches. Le verset 141 conclut ce debat en rappelant que l'acquisition est individuelle — les merites des patriarches ne se transferent pas.",
              axe3_sourate: "La racine k-s-b apparait dans la sourate al-Baqarah dans le contexte de la retribution. En 2:134 (identique), en 2:202 « ceux-la auront une part de ce qu'ils ont acquis ». En 2:286 « a elle ce qu'elle a acquis et contre elle ce qu'elle a merite ». La sourate utilise kasaba pour le bilan des actes — positifs et negatifs.",
              axe4_coherence: "La racine k-s-b apparait environ 67 fois dans le Coran. En 2:286, le verset final de la sourate reprend la meme structure « laha ma kasabat wa 'alayha maktasabat ». En 3:161, « chaque ame recevra ce qu'elle a acquis ». Le Coran lie systematiquement l'acquisition aux actes individuels — pas de responsabilite collective heritee.",
              axe5_frequence: "Pour la mission du khalifa, l'acquisition par les actes est le moteur de la mission. Le khalifa ne peut pas compter sur les acquis des generations passees — il doit acquerir ses propres merites par ses propres actes. La repetition dans le verset insiste sur cette individualite absolue des comptes."
            }
          }
        }
      },
      // sal pos=12
      {
        word_key: "sal", position: 12, sense_chosen: "interroger",
        analysis_axes: {
          sense_chosen: "interroger",
          concept_chosen: "Requ\u00eate/Interrogation",
          concepts: {
            "Requ\u00eate/Interrogation": {
              status: "retenu",
              senses: ["demander", "questionner", "interroger"],
              proof_ctx: "Le verbe tus'aluna est un inaccompli passif 2MP de la racine s-a-l. Le Lane's donne : demander, interroger, questionner. Le passif (tus'aluna) signifie « vous serez interroges » — l'interrogation est subie par les interlocuteurs. La negation la + l'inaccompli passif cree « vous ne serez pas interroges ». L'objet de la non-interrogation est « 'amma kanu ya'maluna » (de ce qu'ils faisaient) — les actes des ancetres ne feront pas l'objet d'un interrogatoire pour vous.",
              axe1_verset: "Le verbe tus'aluna complete la structure du verset : apres avoir pose le principe d'acquisition individuelle (a elle ses acquis, a vous les votres), le verset ajoute la consequence — vous ne serez pas interroges sur les actes des autres. Le champ lexical (acquerir, oeuvrer) porte sur les actes et leurs comptes. L'interrogation est le mecanisme du jugement — le verset dit que ce mecanisme ne s'applique pas aux actes des autres.",
              axe2_voisins: "Le verset 140 interrogeait l'identite religieuse des patriarches. Le verset 141 repond que cette question est hors sujet — vous ne serez pas interroges sur leurs actes. L'interrogation que le verset ecarte est celle que les versets precedents posaient. Le verset 142 ouvrira une nouvelle question (la qibla).",
              axe3_sourate: "La racine s-a-l apparait dans la sourate al-Baqarah dans le contexte des questions posees au Prophete. En 2:108, « voulez-vous interroger votre envoye ? ». En 2:119, « tu ne seras pas interroge sur les gens de la fournaise ». La sourate delimite les interrogations — chacun est interroge sur ses propres actes.",
              axe4_coherence: "La racine s-a-l apparait environ 129 fois dans le Coran. En 2:119, « tu ne seras pas interroge (tus'alu) sur les gens de la fournaise ». En 17:36, « chaque sens sera interroge ». Le Coran pose le principe que l'interrogation porte sur les actes individuels — pas de responsabilite vicariale.",
              axe5_frequence: "Pour la mission du khalifa, la non-interrogation sur les actes des autres est un soulagement et une responsabilisation. Le khalifa ne porte pas le poids des echecs des generations passees — mais il ne peut pas non plus s'abriter derriere leurs merites. L'interrogation porte sur ses propres actes uniquement."
            }
          }
        }
      },
      // emm pos=13
      {
        word_key: "emm", position: 13, sense_chosen: "de ce que",
        analysis_axes: {
          sense_chosen: "de ce que",
          concept_chosen: "G\u00e9n\u00e9ralit\u00e9/Parent\u00e9",
          concepts: {
            "G\u00e9n\u00e9ralit\u00e9/Parent\u00e9": {
              status: "retenu",
              senses: ["etre general", "oncle paternel", "general"],
              proof_ctx: "Le mot 'amma est la contraction de la preposition 'an (a propos de, de) et du pronom relatif ma (ce que). La racine '-m-m porte les sens de generalite et de parente dans le Lane's, mais ici le mot fonctionne comme une construction prepositionnelle contractee — « de ce que ». Il introduit l'objet de la non-interrogation : « vous ne serez pas interroges de ce qu'ils faisaient ». Le sens fonctionnel est le seul applicable dans cette structure syntaxique.",
              axe1_verset: "Le mot 'amma introduit l'objet de la non-interrogation — « de ce que » ils faisaient. Le champ lexical (acquerir, interroger, oeuvrer) porte sur les comptes. Le mot 'amma precise ce dont les interlocuteurs ne seront pas interroges — les actes de la communaute passee.",
              axe2_voisins: "Le verset 134 contient la meme expression 'amma kanu ya'maluna. La repetition confirme le role fonctionnel du mot comme preposition contractee.",
              axe3_sourate: "La construction 'an + ma contractee en 'amma est frequente dans la sourate al-Baqarah pour introduire l'objet d'un verbe d'interrogation ou de questionnement.",
              axe4_coherence: "La construction 'amma est omnipresente dans le Coran. En 27:84, « il leur sera demande de ce qu'ils faisaient ('amma kuntum ta'maluna) ». Le schema est identique mais applique a un contexte different.",
              axe5_frequence: "Pour la mission du khalifa, la precision de ce dont il ne sera pas interroge definit par contraste ce dont il sera interroge — ses propres actes."
            }
          }
        }
      },
      // kwn pos=14
      {
        word_key: "kwn", position: 14, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister, venir a l'existence. Ici kanu fonctionne comme verbe incomplet — il situe l'action dans le passe et introduit le verbe suivant (ya'maluna). La construction kanu + inaccompli exprime l'habitude dans le passe — « ils avaient l'habitude de ». La distinction avec les autres sens (humilite, lieu) est que le contexte est purement temporel — situer les actes dans le passe.",
              axe1_verset: "Le verbe kanu situe les actes de la communaute passee dans le passe. La construction kanu ya'maluna (ils avaient l'habitude de faire) est la conclusion du verset — ce dont vous ne serez pas interroges c'est de ce qu'ils faisaient habituellement dans le passe.",
              axe2_voisins: "Le verset 134 contient la meme construction. Le verbe kanu situe les actes dans le passe pour marquer la separation temporelle entre les deux generations.",
              axe3_sourate: "Le verbe kana est un des verbes les plus frequents de la sourate al-Baqarah. Il situe les recits dans le passe et introduit les descriptions des habitudes passees des peuples.",
              axe4_coherence: "La racine k-w-n apparait environ 1358 fois dans le Coran. Le verbe kana est le verbe le plus frequent du Coran. Il fonctionne principalement comme verbe d'existence temporelle, situant les evenements et les habitudes dans le passe.",
              axe5_frequence: "Pour la mission du khalifa, le verbe kanu marque la coupure temporelle — ce qui etait dans le passe est acheve. Le khalifa vit dans le present et doit agir au present."
            },
            "Humilit\u00e9/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — le verbe kanu est ici un verbe incomplet situé dans le temps, pas un verbe de soumission."
            },
            "Lieu/\u00c9tat": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu est hors sujet — le verbe kanu fonctionne ici comme auxiliaire temporel, pas comme indicateur de lieu."
            }
          }
        }
      },
      // eml pos=15
      {
        word_key: "eml", position: 15, sense_chosen: "oeuvrer",
        analysis_axes: {
          sense_chosen: "oeuvrer",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ya'maluna est un inaccompli 3MP de la racine '-m-l. Le Lane's donne : travailler, agir, oeuvrer, faire une action deliberee. L'inaccompli apres kanu exprime l'habitude dans le passe — « ce qu'ils avaient l'habitude de faire ». L'oeuvre est une action deliberee et soutenue — pas un acte ponctuel mais une pratique reguliere. La distinction avec le gouverneur (nul) est que le verbe porte sur l'action, pas sur l'autorite.",
              axe1_verset: "Le verbe ya'maluna ferme le verset en precisant la nature de ce dont les interlocuteurs ne seront pas interroges — les oeuvres habituelles de la communaute passee. Le champ lexical (acquerir, interroger) montre que les oeuvres sont l'objet de la retribution. Le verbe ya'maluna designe les actes deliberes et reguliers — pas les accidents mais les pratiques.",
              axe2_voisins: "Le verset 134 contient la meme expression. Les versets 135-140 discutaient les pratiques religieuses des patriarches. Le verset 141 conclut que ces pratiques (oeuvres) ne concernent que ceux qui les ont faites — les interlocuteurs ne seront pas interroges sur les oeuvres des ancetres.",
              axe3_sourate: "La racine '-m-l est une des racines les plus frequentes de la sourate al-Baqarah. En 2:25, « ceux qui croient et oeuvrent ». En 2:62, « celui qui a cru et a oeuvre ». En 2:82, « ceux qui croient et oeuvrent ». La sourate lie systematiquement la croyance aux oeuvres — l'une ne va pas sans l'autre.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. Le couple « croire et oeuvrer » (amanu wa 'amilu) est un des refrains les plus frequents du Coran. L'oeuvre est le critere de retribution — ce que chaque personne fait deliberement determine ce qu'elle recoit.",
              axe5_frequence: "Pour la mission du khalifa, les oeuvres sont la substance de la mission. La mission n'est pas une intention mais une action deliberee et soutenue. Le khalifa est juge sur ses oeuvres — pas sur ses intentions ni sur les oeuvres des autres. L'oeuvre est individuelle et non transferable."
            },
            "Sens isol\u00e9/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le sens de gouverneur est hors sujet — le verbe ya'maluna est un verbe d'action, pas un titre administratif."
            }
          }
        }
      }
    ]
  },

  142: {
    verse_id: 149,
    analysis_id: 509,
    translation_arab: "Diront les faibles d'esprit parmi les gens : qu'est-ce qui les a detournes de leur direction vers laquelle ils etaient orientes ? Dis : a Dieu appartiennent le levant et le couchant. Il guide qui Il decide vers un chemin droit.",
    full_translation: "Les faibles d'esprit parmi les gens vont dire : \"Qui les a detournes de la direction (qibla) vers laquelle ils s'orientaient avant ?\" Dis : \"C'est a Allah qu'appartiennent le Levant et le Couchant. Il guide qui Il veut vers un droit chemin.\"",
    translation_explanation: `§DEMARCHE§
Le verset annonce la reaction des detracteurs face au changement de qibla et fournit la reponse divine. Le verbe **sayaqulu** est un inaccompli 3MS de la racine q-w-l precede de la particule du futur **sa**. Le Lane's donne : dire, parler, enoncer. L'inaccompli avec sa indique une action imminente — ils vont dire, le texte annonce a l'avance ce qu'ils diront. Le nom **as-sufaha'u** est un pluriel masculin defini de la racine s-f-h. Le Lane's donne : etre leger d'esprit, manquer de jugement, etre insense. Le pluriel avec l'article defini (as-sufaha'u) designe un groupe connu et identifiable — les insenses en tant que categorie. La preposition **min** (parmi) + **an-nasi** (les gens) situe les insenses comme une partie des gens, pas tous les gens. Le nom **an-nasi** est un nom collectif defini de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple. Le pronom interrogatif **ma** (qu'est-ce qui) introduit la question des insenses. Le verbe **wallahum** est un accompli 3MS de la racine w-l-y avec pronom suffixe hum. Le Lane's donne : se tourner, se detourner, prendre en charge, etre proche. Ici la forme II (walla) avec 'an signifie detourner — qu'est-ce qui les a detournes. Le pronom hum designe ceux qui ont change de qibla. La preposition **'an** (de) + **qiblatihimu** (leur direction) precise l'objet du detournement. Le nom **qibla** est de la racine q-b-l. Le Lane's donne : direction vers laquelle on se tourne, direction de priere. Le pronom suffixe him (leur) + l'article defini implicite de l'idafa marquent que c'est leur direction specifique — celle qu'ils suivaient. Le pronom relatif **allati** (celle vers laquelle) introduit la proposition relative. Le verbe **kanu** est un accompli 3MP de k-w-n — ils etaient. La preposition **'alayha** (sur elle, orientes vers elle) complete la description — ils etaient tournes vers elle. L'imperatif **qul** (dis) est un ordre adresse au Prophete de repondre. La preposition **li-Allahi** (a Dieu) marque l'appartenance. Le nom **al-mashriqu** est un nom de lieu defini de la racine sh-r-q. Le Lane's donne : le lieu du lever du soleil, l'est, le levant. Le nom **al-maghribu** est un nom de lieu defini de la racine gh-r-b. Le Lane's donne : le lieu du coucher du soleil, l'ouest, le couchant. Les deux mots ensemble couvrent la totalite des directions — le levant et le couchant designent l'ensemble de l'espace. Le verbe **yahdi** est un inaccompli 3MS de la racine h-d-y. Le Lane's donne : guider, montrer le chemin, diriger vers la bonne voie. L'inaccompli marque que la guidance est continue et permanente. Le pronom relatif **man** (qui, celui que) introduit l'objet de la guidance. Le verbe **yasha'u** est un inaccompli 3MS de la racine sh-y-'. Le Lane's donne : vouloir, decider. L'inaccompli marque que la decision est continue — Il decide en permanence. La preposition **ila** (vers) + **siratin** (un chemin) + **mustaqimin** (droit) forme le complement de direction — Il guide vers un chemin droit. Le nom **sirat** est de la racine s-r-t. Le Lane's donne : chemin, route, voie. L'indefini (siratin sans article) marque que le chemin est decrit par sa qualite (droit), pas par son nom. L'adjectif **mustaqim** est un participe actif de la forme X de la racine q-w-m. Le Lane's donne : droit, rectiligne, sans deviation. La forme X (istaqama) signifie se redresser de soi-meme — le chemin est droit par sa propre nature.

§JUSTIFICATION§
**diront** — Le sens retenu est « dire ». Le verbe sayaqulu annonce une parole future. L'alternative « penser » est ecartee car le verbe qala est un verbe de parole, pas de pensee.

**les faibles d'esprit** — Le sens retenu est « leger d'esprit ». Le mot as-sufaha'u designe ceux qui manquent de jugement et de discernement. L'alternative « agite » est ecartee car le contexte est intellectuel — le manque de jugement — pas physique.

**les gens** — Le sens retenu est « gens ». Le mot an-nas designe les etres humains en general. L'alternative « voir de loin » est ecartee car le mot est un nom collectif, pas un verbe de perception.

**les a detournes** — Le sens retenu est « se detourner ». Le verbe wallahum a la forme II avec 'an signifie detourner quelqu'un de quelque chose. L'alternative « gouverner » est ecartee car le contexte est un changement de direction, pas d'autorite.

**leur direction** — Le sens retenu est « direction ». Le mot qibla designe la direction vers laquelle on se tourne. L'alternative « recevoir » est ecartee car le mot est un nom de direction, pas un verbe de reception.

**celle vers laquelle** — Le pronom relatif allati introduit la proposition relative qualifiant la qibla — celle vers laquelle ils etaient orientes.

**ils etaient** — Le sens retenu est « etre ». Le verbe kanu situe l'orientation dans le passe — ils etaient tournes vers cette direction.

**vers elle** — Le mot 'alayha est la preposition 'ala (sur, vers) + pronom ha (elle). Il indique l'orientation — ils etaient sur cette direction, orientes vers elle.

**le levant** — Le sens retenu est « lieu du lever ». Le mot al-mashriqu designe l'est, le lieu ou le soleil se leve.

**le couchant** — Le sens retenu est « lieu du coucher ». Le mot al-maghribu designe l'ouest, le lieu ou le soleil se couche.

**Il guide** — Le sens retenu est « guider ». Le verbe yahdi designe l'action de montrer le chemin et de diriger vers la bonne voie. L'alternative « cadeau » est ecartee car le verbe est un verbe d'action, pas un nom de don.

**qui** — Le pronom relatif man introduit l'objet de la guidance — celui que Dieu guide.

**Il decide** — Le sens retenu est « vouloir/decider ». Le verbe yasha'u designe la volonte deliberee et active. L'alternative « chose » est ecartee car le verbe est un verbe de volonte, pas un nom d'objet.

**un chemin** — Le sens retenu est « chemin/voie ». Le mot sirat designe la voie a suivre. L'alternative « epee » est ecartee car le contexte est la guidance, pas le combat.

**droit** — Le sens retenu est « droit/rectiligne ». Le mot mustaqim designe ce qui est sans deviation. L'alternative « peuple » est ecartee car le mot est un adjectif qualifiant le chemin, pas un nom de communaute.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. Hamidullah traduit as-sufaha'u par « les faibles d'esprit » — nous conservons cette formulation car elle rend bien le sens de manque de jugement sans etre insultante. La difference principale est le traitement de wallahum : Hamidullah traduit « qui les a detournes », ce qui est fidele au texte. Le verbe walla a la forme II avec 'an porte le sens de detourner — faire quitter une direction. La reponse divine (a Dieu le levant et le couchant) coupe court a la question en montrant que toutes les directions appartiennent a Dieu — le changement de qibla n'est pas un probleme puisque Dieu possede toutes les directions.`,
    segments: [
      { fr: "diront", pos: "verbe", phon: "sayaqulu", arabic: "\u0633\u064e\u064a\u064e\u0642\u064f\u0648\u0644\u064f", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "les faibles d'esprit", pos: "nom", phon: "as-sufaha'u", arabic: "\u0671\u0644\u0633\u0651\u064f\u0641\u064e\u0647\u064e\u0622\u0621\u064f", word_key: "sfh", is_particle: false, sense_retenu: "leger d'esprit", position: 2 },
      { fr: "parmi", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 3 },
      { fr: "les gens", pos: "nom", phon: "an-nasi", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 4 },
      { fr: "qu'est-ce qui", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 5 },
      { fr: "les a detournes", pos: "verbe", phon: "wallahum", arabic: "\u0648\u064e\u0644\u0651\u064e\u0649\u0670\u0647\u064f\u0645\u0652", word_key: "wly", is_particle: false, sense_retenu: "detourner", position: 6 },
      { fr: "de", phon: "'an", arabic: "\u0639\u064e\u0646", is_particle: true, position: 7 },
      { fr: "leur direction", pos: "nom", phon: "qiblatihimu", arabic: "\u0642\u0650\u0628\u0652\u0644\u064e\u062a\u0650\u0647\u0650\u0645\u064f", word_key: "qbl", is_particle: false, sense_retenu: "direction", position: 8 },
      { fr: "celle vers laquelle", pos: "pronom relatif", phon: "allati", arabic: "\u0671\u0644\u0651\u064e\u062a\u0650\u0649", word_key: "lati", is_particle: false, sense_retenu: "celle qui", position: 9 },
      { fr: "ils etaient", pos: "verbe", phon: "kanu", arabic: "\u0643\u064e\u0627\u0646\u064f\u0648\u0627\u06df", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 10 },
      { fr: "orientes vers elle", pos: "nom", phon: "'alayha", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u064e\u0627", word_key: "ely", is_particle: false, sense_retenu: "sur/vers", position: 11 },
      { fr: "Dis", phon: "qul", arabic: "\u0642\u064f\u0644", is_particle: true, position: 12 },
      { fr: "a Dieu", phon: "lillahi", arabic: "\u0644\u0650\u0651\u0644\u0651\u064e\u0647\u0650", is_particle: true, position: 13 },
      { fr: "le levant", pos: "nom", phon: "al-mashriqu", arabic: "\u0671\u0644\u0652\u0645\u064e\u0634\u0652\u0631\u0650\u0642\u064f", word_key: "shrq", is_particle: false, sense_retenu: "lieu du lever", position: 14 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 15 },
      { fr: "le couchant", pos: "nom", phon: "al-maghribu", arabic: "\u0671\u0644\u0652\u0645\u064e\u063a\u0652\u0631\u0650\u0628\u064f", word_key: "ghrb", is_particle: false, sense_retenu: "lieu du coucher", position: 16 },
      { fr: "Il guide", pos: "verbe", phon: "yahdi", arabic: "\u064a\u064e\u0647\u0652\u062f\u0650\u0649", word_key: "hdy", is_particle: false, sense_retenu: "guider", position: 17 },
      { fr: "qui", pos: "pronom relatif indefini", phon: "man", arabic: "\u0645\u064e\u0646", word_key: "man", is_particle: false, sense_retenu: "qui/celui que", position: 18 },
      { fr: "Il decide", pos: "verbe", phon: "yasha'u", arabic: "\u064a\u064e\u0634\u064e\u0622\u0621\u064f", word_key: "shy", is_particle: false, sense_retenu: "vouloir", position: 19 },
      { fr: "vers", phon: "ila", arabic: "\u0625\u0650\u0644\u064e\u0649\u0670", is_particle: true, position: 20 },
      { fr: "un chemin", pos: "nom", phon: "siratin", arabic: "\u0635\u0650\u0631\u064e\u0670\u0637\u064d", word_key: "srt", is_particle: false, sense_retenu: "chemin", position: 21 },
      { fr: "droit", pos: "adjectif", phon: "mustaqimin", arabic: "\u0645\u0651\u064f\u0633\u0652\u062a\u064e\u0642\u0650\u064a\u0645\u064d", word_key: "qwm", is_particle: false, sense_retenu: "droit", position: 22 }
    ],
    words: [
      // qwl pos=1
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe sayaqulu est un inaccompli 3MS de la racine q-w-l precede de la particule du futur sa. Le Lane's donne : dire, parler, enoncer. La parole est un acte directionnel — elle sort de celui qui parle et atteint celui qui ecoute. L'inaccompli avec sa annonce une action future imminente — le texte predit ce que les insenses diront. Le sujet est as-sufaha'u (les faibles d'esprit) — la parole est attribuee a une categorie specifique de gens.",
              axe1_verset: "Le verbe sayaqulu ouvre le verset en annoncant une parole future. Le champ lexical du verset tourne autour du changement de direction (detourner, qibla, levant, couchant) et de la guidance (guider, chemin, droit). La parole des insenses est une objection — elle questionne le changement de qibla. La reponse (qul, dis) est aussi une parole — le verset oppose deux paroles : l'objection des insenses et la reponse divine.",
              axe2_voisins: "Le verset 141 fermait le debat sur les patriarches. Le verset 142 ouvre un nouveau sujet — le changement de qibla — en annoncant la reaction des detracteurs. Le verbe sayaqulu est prophetique — il annonce a l'avance ce que les detracteurs diront, montrant que Dieu connait leurs paroles avant qu'ils ne les prononcent.",
              axe3_sourate: "La racine q-w-l est une des plus frequentes de la sourate al-Baqarah. En 2:8, « parmi les gens il y a ceux qui disent ». En 2:11, « quand on leur dit ». En 2:13, « quand on leur dit ». La sourate rapporte de nombreuses paroles — affirmations, objections, ordres divins. Le verset 142 s'inscrit dans cette structure dialogique.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. Le schema « sayaqulu » (ils diront) est utilise pour annoncer les objections futures des detracteurs. En 18:22, « ils diront trois ». En 2:142, « diront les faibles d'esprit ». Le Coran anticipe les objections pour y repondre immediatement.",
              axe5_frequence: "Pour la mission du khalifa, la parole est un outil de la mission. La parole des insenses est une objection que le khalifa doit connaitre et a laquelle il doit savoir repondre. Le fait que le Coran annonce les objections a l'avance arme le khalifa contre les detracteurs."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens de pensee est hors sujet — le verbe sayaqulu est un verbe de parole explicite, pas de reflexion interieure."
            }
          }
        }
      },
      // sfh pos=2
      {
        word_key: "sfh", position: 2, sense_chosen: "leger d'esprit",
        analysis_axes: {
          sense_chosen: "leger d'esprit",
          concept_chosen: "L\u00e9g\u00e8ret\u00e9/Stupidit\u00e9",
          concepts: {
            "L\u00e9g\u00e8ret\u00e9/Stupidit\u00e9": {
              status: "retenu",
              senses: ["etre insense", "leger d'esprit", "stupide", "declarer insense", "agir de maniere insensee"],
              proof_ctx: "Le mot as-sufaha'u est un pluriel masculin defini de la racine s-f-h. Le Lane's donne : etre leger d'esprit, manquer de jugement, etre insense, stupide. La legerete d'esprit est un etat interieur permanent — le safih est celui dont le jugement est deficient, pas par manque de savoir mais par manque de discernement. L'article defini (as-) marque que les insenses sont une categorie connue et identifiable. La distinction avec l'agitation (nul) est que le contexte est intellectuel — le manque de jugement — pas physique.",
              axe1_verset: "Le mot as-sufaha'u est le sujet du verbe sayaqulu — ce sont les insenses qui posent la question. Le champ lexical du verset (detourner, qibla, levant, couchant, guider, chemin droit) montre que la question des insenses revele leur manque de jugement — ils ne comprennent pas que les directions appartiennent a Dieu. Le texte qualifie les questionneurs avant meme de rapporter leur question, signalant que la question elle-meme est le produit de la legerete d'esprit.",
              axe2_voisins: "Le verset 13 utilisait la meme racine s-f-h — « ce sont eux les insenses (as-sufaha'u) mais ils ne savent pas ». Le verset 142 reprend le meme qualificatif pour ceux qui objectent au changement de qibla. Dans les deux cas, l'insense est celui qui juge sans discernement et ne reconnait pas la verite quand elle se presente.",
              axe3_sourate: "La racine s-f-h apparait deux fois dans la sourate al-Baqarah : en 2:13 et en 2:142. Les deux occurrences qualifient des gens qui s'opposent a la verite par manque de jugement. La sourate distingue les insenses (qui n'ont pas le discernement) des incredules (qui rejettent en connaissance de cause). L'insense ne comprend pas — l'incredule comprend mais refuse.",
              axe4_coherence: "La racine s-f-h apparait environ 11 fois dans le Coran. En 4:5, « ne donnez pas vos biens aux insenses (as-sufaha'u) ». En 7:155, Moussa dit « nous detruiras-tu pour ce qu'ont fait les insenses parmi nous ? ». Le Coran utilise safih pour designer ceux dont le jugement est deficient — une deficience qui a des consequences pratiques (mauvaises decisions, mauvaises questions).",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre les insenses est necessaire pour la mission. L'insense pose des questions qui detournent l'attention de l'essentiel. Le khalifa doit savoir identifier les objections qui viennent de la legerete d'esprit et y repondre par la verite sans se laisser entrainer dans le debat sterile."
            },
            "Agitation/Mouvement": {
              status: "nul",
              senses: ["agitation"],
              proof_ctx: "Le sens d'agitation physique est hors sujet — le contexte est intellectuel (manque de jugement), pas physique."
            }
          }
        }
      },
      // nws pos=4
      {
        word_key: "nws", position: 4, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanit\u00e9/Peuple",
          concepts: {
            "Humanit\u00e9/Peuple": {
              status: "retenu",
              senses: ["gens", "etres humains", "peuple"],
              proof_ctx: "Le mot an-nasi est un nom collectif defini au genitif de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple. Le mot an-nas designe l'humanite dans son ensemble — les gens en general. La preposition min (parmi) + an-nasi precise que les insenses sont une partie des gens, pas tous les gens. L'article defini (an-) marque que les gens sont une totalite connue.",
              axe1_verset: "Le mot an-nasi situe les insenses dans l'ensemble des gens — ils sont une partie (min an-nasi, parmi les gens). Le champ lexical du verset ne porte pas sur l'humanite en general mais sur une reaction specifique au changement de qibla. Le mot an-nas sert ici de cadre — les insenses ne sont pas tous les gens, juste une fraction.",
              axe2_voisins: "Le verset 8 utilisait la meme expression « parmi les gens (min an-nasi) il y a ceux qui disent ». Le verset 142 reprend cette structure pour introduire une categorie specifique. La sourate utilise « min an-nasi » pour identifier des sous-groupes au sein de l'humanite.",
              axe3_sourate: "Le mot an-nas est l'un des mots les plus frequents de la sourate al-Baqarah. Il apparait en 2:8, 2:13, 2:21, 2:44, 2:96, 2:142, 2:143, 2:150, 2:164, 2:168, 2:188, 2:200, 2:204, 2:207, 2:213, 2:224, 2:243, 2:251, 2:264. La sourate s'adresse aux gens et parle des gens — c'est le cadre humain general.",
              axe4_coherence: "La racine n-w-s (ou n-a-s) apparait environ 241 fois dans le Coran. Le mot an-nas est un des mots les plus frequents du Coran. Il designe l'humanite dans sa globalite — un cadre universel pour les enseignements coraniques.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont le cadre de la mission. Le khalifa vit parmi les gens et sa mission concerne les gens. Reconnaitre que les insenses sont « parmi les gens » rappelle que la mission se deroule dans un environnement mixte — certains comprennent, d'autres non."
            },
            "Perception/Visibilit\u00e9": {
              status: "nul",
              senses: ["voir de loin", "etre visible"],
              proof_ctx: "Le sens de perception est hors sujet — le mot an-nas est un nom collectif designant les gens, pas un verbe de vision."
            }
          }
        }
      },
      // wly pos=6
      {
        word_key: "wly", position: 6, sense_chosen: "detourner",
        analysis_axes: {
          sense_chosen: "detourner",
          concept_chosen: "Proximit\u00e9/Protection",
          concepts: {
            "Proximit\u00e9/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le verbe wallahum est un accompli 3MS de la racine w-l-y a la forme II avec pronom suffixe hum et suivi de la preposition 'an. Le Lane's donne : etre proche, proteger, prendre en charge, se tourner vers, se detourner. La forme II (walla) avec 'an signifie detourner — faire quitter une direction. L'accompli marque que le detournement est acheve. Le pronom hum (les) est l'objet direct — qu'est-ce qui les a detournes. La racine w-l-y porte fondamentalement l'idee de proximite et de protection, et le detournement (tawalli) est le mouvement contraire — s'eloigner de ce dont on etait proche. La question des insenses est : qui les a fait s'eloigner de leur direction proche ?",
              axe1_verset: "Le verbe wallahum est le pivot de la question des insenses — qu'est-ce qui les a detournes de leur qibla ? Le champ lexical (qibla, direction, levant, couchant, guider, chemin) tourne autour de l'orientation et de la direction. Le detournement est un changement de direction — quitter une orientation pour en prendre une autre. La reponse divine (a Dieu le levant et le couchant) montre que le detournement n'est pas un probleme puisque toutes les directions sont a Dieu.",
              axe2_voisins: "Le verset 141 parlait du passage des communautes. Le verset 142 introduit un nouveau sujet — le changement de qibla — par la reaction des detracteurs. Le verbe wallahum annonce le sujet qui dominera les versets suivants (143-150) : le changement de direction de priere de Jerusalem vers La Mecque.",
              axe3_sourate: "La racine w-l-y est une racine majeure de la sourate al-Baqarah. En 2:107, « en dehors de Dieu vous n'avez ni protecteur (waliyy) ni secoureur ». En 2:120, « si tu suis leurs passions apres ce qui t'est venu de savoir, tu n'auras ni protecteur ni secoureur aupres de Dieu ». Le verset 142 utilise la forme II avec 'an — le detournement est l'inverse de la proximite. La sourate joue sur les deux faces de w-l-y : la proximite/protection et le detournement/eloignement.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. La forme II tawalla avec 'an (se detourner de) apparait dans plusieurs versets. En 2:205, « quand il se detourne (tawalla) il s'efforce de corrompre ». En 3:82, « quiconque se detourne (tawalla) apres cela ». Le Coran utilise tawalla comme l'antithese de la guidance — se detourner c'est quitter la direction juste.",
              axe5_frequence: "Pour la mission du khalifa, le detournement est le danger principal de la mission. Quitter la direction juste c'est abandonner la mission. La question des insenses revele leur propre confusion — ils pensent que le changement de qibla est un detournement, alors que c'est un reajustement divin. Le khalifa doit distinguer le vrai detournement (quitter la verite) du reajustement ordonne par Dieu."
            },
            "Autorit\u00e9": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est hors sujet — le verbe wallahum avec 'an porte le sens de detourner de quelque chose, pas d'exercer l'autorite."
            }
          }
        }
      },
      // qbl pos=8
      {
        word_key: "qbl", position: 8, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Orientation/Direction",
          concepts: {
            "R\u00e9ception/Accueil": {
              status: "probable",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le sens de reception est un sens majeur de q-b-l — recevoir ce qui vient vers soi. La distinction philosophique avec la direction est que la reception est un acte passif (on accueille ce qui arrive), tandis que la direction est un acte actif (on se tourne vers un point). Le mot qibla dans le verset designe la direction vers laquelle on s'oriente pour la priere — c'est un mouvement du corps vers un point precis, pas un accueil passif de quelque chose qui arrive. La structure syntaxique (wallahum 'an qiblatihim, les a detournes de leur direction) confirme que qibla est un point fixe dont on s'eloigne, pas un objet qu'on recoit.",
              axe1_verset: "Le mot qiblatihimu est l'objet du detournement — « de leur direction ». Si le sens etait « reception », la phrase dirait « qu'est-ce qui les a detournes de leur reception » — ce qui est incoherent avec le contexte d'orientation spatiale. La direction est un point vers lequel on s'oriente, la reception est un accueil — le premier est actif et spatial, le second est passif.",
              axe2_voisins: "Les versets 143-150 developperont le theme de la qibla — direction de priere. Le sens de direction est confirme par le contexte etendu qui parle de se tourner vers le lieu sacre (shatra al-masjid al-haram).",
              axe3_sourate: "Le mot qibla apparait dans la sourate al-Baqarah dans les versets 142-145. Tous les contextes portent sur la direction de priere — un point fixe vers lequel on s'oriente. Le sens de reception n'apparait pas dans ces contextes.",
              axe4_coherence: "La racine q-b-l apparait environ 112 fois dans le Coran. Le mot qibla est specifique a la direction de priere. La reception (qabila) et la direction (qibla) partagent la meme racine mais designent des realites differentes — la reception est un accueil, la direction est un point d'orientation.",
              axe5_frequence: "Pour la mission du khalifa, la reception est l'accueil de la verite, tandis que la direction est l'orientation vers la verite. Les deux sont importants mais le verset parle specifiquement de l'orientation — la direction choisie pour la priere."
            },
            "Orientation/Direction": {
              status: "retenu",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Le mot qiblatihimu est un nom feminin singulier en idafa de la racine q-b-l avec pronom suffixe him (leur). Le Lane's donne : direction vers laquelle on se tourne, direction de priere, point d'orientation. La qibla est une direction fixe vers laquelle on oriente son corps et son attention — c'est un point de reference spatial et spirituel. Le pronom suffixe him (leur) et la structure en idafa marquent que c'est leur direction specifique — celle qu'ils suivaient avant le changement. La distinction philosophique avec la reception est que la direction est un acte actif d'orientation (on se tourne vers un point), tandis que la reception est un accueil passif (on recoit ce qui arrive). Le contexte du verset (detourner de, orientes vers) confirme le sens d'orientation spatiale. La distinction avec l'anteriorite est que le mot qibla est un nom specifique designant la direction de priere, pas un adverbe de temps.",
              axe1_verset: "Le mot qiblatihimu est le complement du verbe wallahum — « les a detournes de leur direction ». Le champ lexical (detourner, levant, couchant, guider, chemin) tourne autour de l'orientation et de la direction. Le mot qibla est au centre de cette question d'orientation — c'est la direction que les croyants suivaient et dont les insenses pretendent qu'ils ont ete detournes. La reponse divine (a Dieu le levant et le couchant) elargit la notion de direction a toutes les directions.",
              axe2_voisins: "Le verset 143 dira « Nous avons fait de vous une communaute mediane pour que vous soyez temoins sur les gens ». Le verset 144 dira « tourne ton visage vers le lieu sacre (al-masjid al-haram) ». Les versets 142-145 forment un bloc sur le changement de qibla — la direction de priere passe de Jerusalem a La Mecque. Le mot qibla est le fil conducteur de ce bloc.",
              axe3_sourate: "Le mot qibla apparait en 2:142, 2:143, 2:144, 2:145. Toutes les occurrences portent sur la direction de priere. La sourate al-Baqarah traite le changement de qibla comme un tournant majeur — la communaute musulmane recoit sa propre direction, distincte de celle des communautes anterieures.",
              axe4_coherence: "La racine q-b-l apparait environ 112 fois dans le Coran. Le mot qibla est specifique a la sourate al-Baqarah — il n'apparait que dans les versets 142-145. Les autres sourates n'utilisent pas ce mot specifique mais utilisent la racine dans ses autres sens (recevoir, avant, faire face). La qibla est un concept propre a la sourate al-Baqarah.",
              axe5_frequence: "Pour la mission du khalifa, la direction est l'orientation de la mission. Avoir une qibla c'est avoir un point de reference fixe qui oriente l'action. Le changement de qibla montre que l'orientation peut etre reajustee par Dieu sans invalider la mission — c'est la soumission a la direction divine qui compte, pas la direction elle-meme."
            },
            "Ant\u00e9riorit\u00e9/Pass\u00e9": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le sens d'anteriorite est hors sujet — le mot qibla est un nom specifique designant la direction de priere, pas un adverbe de temps."
            },
            "Sens isol\u00e9/Tribu": {
              status: "nul",
              senses: ["tribu"],
              proof_ctx: "Le sens de tribu est hors sujet — le contexte est la direction de priere, pas l'organisation sociale."
            }
          }
        }
      },
      // lati pos=9
      {
        word_key: "lati", position: 9, sense_chosen: "celle qui",
        analysis_axes: {
          sense_chosen: "celle qui",
          concept_chosen: "Possession/Appartenance",
          concepts: {
            "Possession/Appartenance": {
              status: "retenu",
              senses: ["a moi", "pour moi", "mon"],
              proof_ctx: "Le mot allati est un pronom relatif feminin singulier. Il introduit la proposition relative qualifiant la qibla — « celle vers laquelle ils etaient orientes ». Le pronom relatif allati est un mot fonctionnel qui relie la qibla a la proposition subordonnee. Son role est purement syntaxique — il fait reference a la qibla mentionnee juste avant.",
              axe1_verset: "Le mot allati qualifie la qibla en introduisant la description de ce qu'elle etait — la direction vers laquelle ils etaient orientes. Le champ lexical (direction, orientes vers elle) montre que allati sert de lien entre la qibla et son ancienne orientation.",
              axe2_voisins: "Le pronom relatif allati est un connecteur syntaxique standard. Il n'apporte pas de sens propre au-dela de sa fonction de liaison.",
              axe3_sourate: "Le pronom relatif allati est utilise frequemment dans la sourate al-Baqarah pour introduire des propositions relatives qualifiant des noms feminins.",
              axe4_coherence: "Le pronom relatif allati est un des mots les plus frequents du Coran. Il fonctionne toujours comme connecteur syntaxique entre un nom feminin et sa proposition relative.",
              axe5_frequence: "Pour la mission du khalifa, le pronom relatif sert a preciser — la direction n'est pas n'importe quelle direction mais celle vers laquelle ils etaient orientes. La precision est une qualite de la mission."
            }
          }
        }
      },
      // kwn pos=10
      {
        word_key: "kwn", position: 10, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister. Ici kanu fonctionne comme verbe incomplet — il situe l'etat dans le passe. La construction kanu 'alayha (ils etaient sur elle / orientes vers elle) decrit l'etat anterieur au changement de qibla — ils etaient orientes vers cette direction. L'accompli marque que cet etat est revolu.",
              axe1_verset: "Le verbe kanu situe l'orientation dans le passe — ils etaient orientes vers cette qibla mais ne le sont plus. Le champ lexical (detourner, qibla, levant, couchant) montre que le verset traite d'un changement — de l'etat passe (kanu) a l'etat present (nouvelle qibla). Le verbe kanu marque la coupure temporelle.",
              axe2_voisins: "Le verset 143 utilisera aussi kanu dans un contexte similaire. Les versets 142-145 decrivent la transition d'une qibla a l'autre — kanu marque l'etat d'avant.",
              axe3_sourate: "Le verbe kana est omnipresent dans la sourate al-Baqarah pour situer les recits dans le passe. Chaque passage narratif utilise kana pour marquer l'etat anterieur.",
              axe4_coherence: "Le verbe kana est le verbe le plus frequent du Coran. Il fonctionne comme auxiliaire temporel pour situer les evenements et les etats dans le passe.",
              axe5_frequence: "Pour la mission du khalifa, le verbe kanu marque que l'orientation passee est revolue — le changement est un fait accompli. Le khalifa doit accepter les changements ordonnes par Dieu sans s'accrocher au passe."
            },
            "Humilit\u00e9/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — le verbe kanu est ici un auxiliaire temporel, pas un verbe de soumission."
            }
          }
        }
      },
      // ely pos=11
      {
        word_key: "ely", position: 11, sense_chosen: "sur/vers",
        analysis_axes: {
          sense_chosen: "sur/vers",
          concept_chosen: "Sur/Au-dessus (pr\u00e9position)",
          concepts: {
            "Sur/Au-dessus (pr\u00e9position)": {
              status: "retenu",
              senses: ["sur", "au-dessus de", "vers", "contre", "pour", "a propos de", "malgre", "selon", "avec"],
              proof_ctx: "Le mot 'alayha est la preposition 'ala (sur, vers) + pronom suffixe ha (elle, referent a qibla). Le Lane's donne : sur, au-dessus de, vers, contre. Ici 'alayha signifie « sur elle / orientes vers elle » — la construction kanu 'alayha decrit l'etat d'etre oriente vers cette direction. La preposition 'ala avec un sens d'orientation signifie « etre sur une voie, une direction » — ils etaient sur cette qibla.",
              axe1_verset: "Le mot 'alayha complete la proposition relative — « celle vers laquelle ils etaient orientes ». La preposition 'ala + pronom ha indique l'orientation — etre sur une direction. Le champ lexical (qibla, detourner, levant, couchant) confirme le sens d'orientation spatiale.",
              axe2_voisins: "Les versets 143-145 utiliseront des prepositions similaires pour decrire l'orientation vers la qibla. Le sens d'orientation est confirme par le contexte etendu.",
              axe3_sourate: "La preposition 'ala est une des plus frequentes de la sourate al-Baqarah. Elle marque tantot la superposition (sur), tantot l'orientation (vers), tantot l'obligation (sur lui incombe).",
              axe4_coherence: "La racine '-l-y comme preposition est omnipresente dans le Coran. La construction « kanu 'alayha » (ils etaient sur elle / orientes vers elle) est un emploi standard de 'ala pour l'orientation et l'adhesion a une direction.",
              axe5_frequence: "Pour la mission du khalifa, etre « sur » une direction signifie adherer a une voie. L'orientation n'est pas juste physique — c'est un engagement envers une direction de vie. Le khalifa doit etre « sur » la voie droite."
            },
            "Hauteur/Domination": {
              status: "nul",
              senses: ["etre haut", "monter", "dominer", "surpasser", "elever", "s'exalter", "superieur", "noble", "eminent", "fort", "lion", "orgueilleux"],
              proof_ctx: "Le sens de hauteur et domination est hors sujet — le mot 'alayha est ici une preposition d'orientation, pas un verbe ou un nom de hauteur."
            }
          }
        }
      },
      // shrq pos=14
      {
        word_key: "shrq", position: 14, sense_chosen: "lieu du lever",
        analysis_axes: {
          sense_chosen: "lieu du lever",
          concept_chosen: "Orient/Lumi\u00e8re",
          concepts: {
            "Orient/Lumi\u00e8re": {
              status: "retenu",
              senses: ["est", "lever", "orient"],
              proof_ctx: "Le mot al-mashriqu est un nom de lieu defini de la racine sh-r-q. Le Lane's donne : le lieu ou le soleil se leve, l'est, l'orient, le levant. Le mashriq est le point cardinal de l'apparition — la ou la lumiere apparait chaque matin. L'article defini (al-) marque que c'est LE levant connu — la direction universellement reconnue. Le verset attribue le levant a Dieu (li-Allahi al-mashriqu) — le point cardinal appartient a Dieu comme le reste de la creation.",
              axe1_verset: "Le mot al-mashriqu fait partie de la reponse divine — « a Dieu le levant et le couchant ». Le couple levant/couchant couvre la totalite de l'espace horizontal — d'est en ouest, tout appartient a Dieu. Le champ lexical (qibla, direction, guider, chemin) montre que la reponse aux insenses est geographique et totale : puisque tout l'espace appartient a Dieu, le changement de direction n'est pas un probleme.",
              axe2_voisins: "Le verset 115 disait « a Dieu le levant et le couchant — ou que vous vous tourniez, la est la face de Dieu ». Le verset 142 reprend la meme affirmation dans le contexte du changement de qibla. Les deux versets montrent que l'omnipresence divine rend le debat sur la direction caduc.",
              axe3_sourate: "La racine sh-r-q apparait en 2:115, 2:142, 2:177, 2:258. La sourate utilise le levant comme marqueur d'universalite — le levant et le couchant representent la totalite de l'espace. En 2:258, Ibrahim invoque le fait que Dieu fait lever le soleil du levant — un argument d'universalite divine.",
              axe4_coherence: "La racine sh-r-q apparait environ 17 fois dans le Coran. Le couple mashriq/maghrib est un refrain coranique pour designer la totalite de l'espace. En 26:28, « le Seigneur du levant et du couchant ». En 55:17, « le Seigneur des deux levants et des deux couchants ». En 70:40, « le Seigneur des levants et des couchants ». Le Coran utilise le levant pour marquer la souverainete divine sur tout l'espace.",
              axe5_frequence: "Pour la mission du khalifa, le levant represente le debut — la ou la lumiere commence. La mission du khalifa est universelle comme le levant — elle couvre tout l'espace. L'appartenance du levant a Dieu rappelle que la mission n'est pas limitee a une direction geographique."
            }
          }
        }
      },
      // ghrb pos=16
      {
        word_key: "ghrb", position: 16, sense_chosen: "lieu du coucher",
        analysis_axes: {
          sense_chosen: "lieu du coucher",
          concept_chosen: "Occident/Disparition",
          concepts: {
            "Occident/Disparition": {
              status: "retenu",
              senses: ["ouest", "coucher", "etranger"],
              proof_ctx: "Le mot al-maghribu est un nom de lieu defini de la racine gh-r-b. Le Lane's donne : le lieu ou le soleil se couche, l'ouest, l'occident, le couchant. Le maghrib est le point cardinal de la disparition — la ou la lumiere disparait chaque soir. L'article defini (al-) marque que c'est LE couchant connu. Le couple mashriq/maghrib forme une paire complementaire couvrant la totalite de l'espace — de l'apparition a la disparition de la lumiere, tout appartient a Dieu.",
              axe1_verset: "Le mot al-maghribu complete le couple avec al-mashriqu — « le levant et le couchant ». Le couple couvre la totalite des directions est-ouest. Le champ lexical (direction, levant, guider, chemin) montre que la reponse divine est totale — toutes les directions appartiennent a Dieu, donc changer de direction n'est pas une perte.",
              axe2_voisins: "Le verset 115 contenait le meme couple « le levant et le couchant ». Le verset 142 le reprend dans le contexte specifique du changement de qibla. Le couple est un argument d'universalite : si tout l'espace est a Dieu, la qibla peut etre n'importe ou — c'est Dieu qui decide.",
              axe3_sourate: "La racine gh-r-b apparait en 2:115, 2:142, 2:177, 2:258. Les memes positions que sh-r-q — les deux racines forment toujours un couple dans la sourate. La sourate utilise ce couple pour marquer l'universalite divine dans l'espace.",
              axe4_coherence: "La racine gh-r-b apparait environ 17 fois dans le Coran. Le couple mashriq/maghrib est systematique — les deux mots apparaissent presque toujours ensemble. Le Coran ne mentionne pas le nord ni le sud — l'axe est-ouest (apparition-disparition de la lumiere) suffit a couvrir symboliquement tout l'espace.",
              axe5_frequence: "Pour la mission du khalifa, le couchant represente la fin — la ou la lumiere disparait. La mission couvre tout le cycle, du levant au couchant, du debut a la fin. L'appartenance du couchant a Dieu rappelle que meme la fin des choses est sous la souverainete divine."
            }
          }
        }
      },
      // hdy pos=17
      {
        word_key: "hdy", position: 17, sense_chosen: "guider",
        analysis_axes: {
          sense_chosen: "guider",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-meme"],
              proof_ctx: "Le verbe yahdi est un inaccompli 3MS de la racine h-d-y. Le Lane's donne : guider, montrer le chemin, diriger vers la bonne voie. La guidance est un acte directionnel — celui qui guide montre la direction a celui qui est guide. L'inaccompli marque que la guidance est continue et permanente — Il guide en permanence, pas ponctuellement. Le sujet implicite est Dieu (en continuant la phrase « a Dieu le levant et le couchant — Il guide... »). La distinction avec le don/offrande (nul) est que le contexte est la direction, pas la charite.",
              axe1_verset: "Le verbe yahdi est la deuxieme partie de la reponse divine — apres avoir affirme que le levant et le couchant appartiennent a Dieu, le texte ajoute qu'Il guide qui Il decide vers un chemin droit. Le champ lexical (direction, levant, couchant, chemin, droit) montre que la guidance est l'aboutissement du raisonnement : puisque tout l'espace est a Dieu, c'est Lui qui decide de la direction — et Il guide vers la droiture.",
              axe2_voisins: "Le verset 143 dira « Nous avons fait de vous une communaute mediane ». Le verset 144 dira « tourne ton visage vers le lieu sacre ». La guidance du verset 142 se concretise dans les versets suivants — Dieu guide en changeant la qibla, ce qui est un acte de guidance, pas de caprice.",
              axe3_sourate: "La racine h-d-y est une racine structurante de la sourate al-Baqarah. En 2:2, « ce Livre est une guidance pour ceux qui sont conscients ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:38, « quand une guidance viendra de Ma part ». La sourate presente la guidance comme le theme central — le Coran est un guide, Dieu est le guide, le chemin droit est la destination.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. Le verbe yahdi est un des verbes les plus frequents du Coran. En 1:6, « guide-nous vers le chemin droit ». En 2:142, « Il guide qui Il decide vers un chemin droit ». La Fatiha demande la guidance, et la sourate al-Baqarah explique comment cette guidance se manifeste — par le Livre, par les envoyes, par le changement de qibla.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est le moteur de la mission. Le khalifa est a la fois guide (il guide par ses actes) et guide (il est guide par Dieu). La guidance divine vers un chemin droit est la condition de la reussite de la mission — sans guidance, le khalifa s'egare."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "present"],
              proof_ctx: "Le sens de don/offrande est hors sujet — le verbe yahdi dans ce verset est un verbe de guidance (diriger vers), pas de don (offrir un cadeau)."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "maniere d'agir", "comportement calme"],
              proof_ctx: "Le sens de conduite est un sens secondaire de h-d-y. Le contexte est la guidance divine vers un chemin droit — c'est l'acte de guider, pas la conduite de celui qui est guide."
            }
          }
        }
      },
      // man pos=18
      {
        word_key: "man", position: 18, sense_chosen: "qui/celui que",
        analysis_axes: {
          sense_chosen: "qui/celui que",
          concept_chosen: "Interrogation/Identit\u00e9",
          concepts: {
            "Interrogation/Identit\u00e9": {
              status: "retenu",
              senses: ["qui"],
              proof_ctx: "Le mot man est ici un pronom relatif indefini signifiant « qui » ou « celui que ». Il introduit l'objet de la guidance — « Il guide qui Il decide ». Le pronom man est indefini — il ne specifie pas qui sera guide, laissant le choix a la decision divine. C'est un emploi standard de man comme pronom relatif dans le Coran.",
              axe1_verset: "Le mot man relie la guidance au choix divin — « Il guide qui Il decide ». Le pronom indefini marque l'ouverture — la guidance n'est pas reservee a un groupe mais offerte a celui que Dieu decide de guider. Le champ lexical (guider, chemin, droit) montre que man est le point de connexion entre la guidance divine et le destinataire humain.",
              axe2_voisins: "Les versets suivants preciseront qui Dieu guide — la communaute musulmane recoit une nouvelle qibla. Le mot man du verset 142 est general, les versets suivants le particularisent.",
              axe3_sourate: "Le pronom man est tres frequent dans la sourate al-Baqarah. En 2:26, « qui sont les guides ». En 2:112, « celui qui soumet son visage a Dieu ». Le pronom man sert de connecteur entre le divin et l'humain.",
              axe4_coherence: "Le pronom man apparait des centaines de fois dans le Coran. L'expression « yahdi man yasha'u » (Il guide qui Il decide) est un refrain coranique — en 2:213, 2:272, 24:35, 28:56. Le Coran repete cette formule pour affirmer la souverainete divine sur la guidance.",
              axe5_frequence: "Pour la mission du khalifa, le pronom man rappelle que la guidance est selective — Dieu guide celui qu'Il decide. Le khalifa doit chercher a etre parmi ceux que Dieu guide en suivant les conditions de la guidance."
            }
          }
        }
      },
      // shy pos=19
      {
        word_key: "shy", position: 19, sense_chosen: "vouloir",
        analysis_axes: {
          sense_chosen: "vouloir",
          concept_chosen: "Volont\u00e9",
          concepts: {
            "Volont\u00e9": {
              status: "retenu",
              senses: ["vouloir"],
              proof_ctx: "Le verbe yasha'u est un inaccompli 3MS de la racine sh-y-'. Le Lane's donne : vouloir, decider, avoir la volonte de. La volonte est un acte interieur delibere et souverain — celui qui veut choisit en toute autonomie. L'inaccompli marque que la volonte est continue — Il decide en permanence, pas ponctuellement. Le sujet est Dieu — la volonte divine est souveraine et libre. L'expression « yahdi man yasha'u » (Il guide qui Il decide) affirme que la guidance depend de la decision divine.",
              axe1_verset: "Le verbe yasha'u complete la phrase — « Il guide qui Il decide ». Le champ lexical (guider, chemin, droit) montre que la volonte divine est le critere de la guidance. La reponse aux insenses se conclut par l'affirmation de la souverainete divine — le changement de qibla est une decision de Dieu, et Dieu guide qui Il decide.",
              axe2_voisins: "Le verset 143 montrera que le changement de qibla est un test — Dieu distingue ceux qui suivent l'envoye de ceux qui tournent les talons. La volonte divine du verset 142 se concretise dans le test du verset 143.",
              axe3_sourate: "La racine sh-y-' apparait dans la sourate al-Baqarah pour affirmer la souverainete divine. En 2:105, « Dieu accorde Sa grace a qui Il decide ». En 2:253, « si Dieu avait decide ». En 2:284, « Il pardonne a qui Il decide et punit qui Il decide ». La sourate utilise yasha'u comme marqueur de souverainete divine.",
              axe4_coherence: "La racine sh-y-' apparait environ 236 fois dans le Coran. L'expression « man yasha'u » (qui Il decide) est un refrain coranique qui affirme la liberte absolue de la decision divine. En 3:13, « Dieu renforce qui Il decide ». En 24:35, « Dieu guide qui Il decide vers Sa lumiere ». Le Coran presente la volonte divine comme souveraine et insondable.",
              axe5_frequence: "Pour la mission du khalifa, la volonte divine est le fondement de la mission. Le khalifa n'est pas guide par ses propres merites mais par la decision divine. La volonte de Dieu est libre — le khalifa doit accepter cette liberte et chercher a etre parmi ceux que Dieu decide de guider."
            },
            "Chose/\u00catre": {
              status: "nul",
              senses: ["chose", "quelque chose"],
              proof_ctx: "Le sens de chose est hors sujet — le verbe yasha'u est un verbe de volonte, pas un nom d'objet. Le mot shay' (chose) et le verbe sha'a (vouloir) partagent la meme racine mais designent des realites differentes."
            }
          }
        }
      },
      // srt pos=21
      {
        word_key: "srt", position: 21, sense_chosen: "chemin",
        analysis_axes: {
          sense_chosen: "chemin",
          concept_chosen: "Chemin/Voie",
          concepts: {
            "Chemin/Voie": {
              status: "retenu",
              senses: ["chemin", "route", "voie"],
              proof_ctx: "Le mot siratin est un nom masculin singulier indefini au genitif de la racine s-r-t. Le Lane's donne : chemin, route, voie large et claire. Le sirat est un chemin qui se distingue des sentiers — il est large, clair et evident. L'indefini (siratin sans article) avec l'adjectif mustaqimin marque que le chemin est defini par sa qualite (droit), pas par son identite. La preposition ila (vers) + siratin indique la destination de la guidance — Dieu guide vers un chemin.",
              axe1_verset: "Le mot siratin est la destination de la guidance — « Il guide qui Il decide vers un chemin droit ». Le champ lexical (guider, levant, couchant, direction) montre que le chemin est l'aboutissement de tout le raisonnement du verset : les directions appartiennent a Dieu, Il guide, et la destination est un chemin droit. Le chemin est la voie que le guide montre.",
              axe2_voisins: "Les versets suivants preciseront ce chemin droit — la nouvelle qibla, la communaute mediane, l'orientation vers le lieu sacre. Le chemin droit du verset 142 se manifeste concretement dans les versets 143-150.",
              axe3_sourate: "Le mot sirat apparait au debut de la sourate en 2:142 et fait echo a la Fatiha (1:6 « guide-nous vers le chemin droit »). La sourate al-Baqarah est la reponse a cette demande — elle decrit le chemin droit en detail. Le verset 142 rappelle cette promesse au moment du changement de qibla.",
              axe4_coherence: "La racine s-r-t apparait environ 45 fois dans le Coran. En 1:6, « guide-nous vers le chemin droit ». En 6:153, « voici mon chemin, un chemin droit — suivez-le ». Le Coran utilise sirat pour la voie principale — le chemin large et clair que Dieu montre. Les sentiers (subul) sont les deviations, le sirat est la voie droite.",
              axe5_frequence: "Pour la mission du khalifa, le chemin droit est la destination de la mission. Le khalifa cherche le chemin — et Dieu le guide vers ce chemin. Le changement de qibla montre que le chemin peut passer par des ajustements — mais la destination reste la droiture."
            }
          }
        }
      },
      // qwm pos=22
      {
        word_key: "qwm", position: 22, sense_chosen: "droit",
        analysis_axes: {
          sense_chosen: "droit",
          concept_chosen: "Verticalit\u00e9/Droiture",
          concepts: {
            "Verticalit\u00e9/Droiture": {
              status: "retenu",
              senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
              proof_ctx: "Le mot mustaqimin est un participe actif de la forme X de la racine q-w-m au genitif indefini. Le Lane's donne : droit, rectiligne, sans deviation, se redresser. La forme X (istaqama) signifie se redresser de soi-meme, etre droit par nature — le chemin droit est droit par sa propre nature, pas par contrainte exterieure. Le participe actif marque que la droiture est une qualite active et permanente du chemin — il se tient droit de lui-meme. La distinction avec le peuple (nul) est que le mot est un adjectif qualifiant le chemin, pas un nom de communaute.",
              axe1_verset: "Le mot mustaqimin qualifie le chemin — « un chemin droit ». Le champ lexical (guider, chemin, direction) montre que la droiture est la qualite essentielle du chemin vers lequel Dieu guide. Le chemin n'est pas seulement un chemin — il est droit, sans deviation. La droiture est la garantie que le chemin mene a la destination sans detours.",
              axe2_voisins: "Le verset 143 developpe la notion de droiture en introduisant la communaute « mediane » (wasat) — un terme qui evoque l'equilibre et la justesse, voisin de la droiture. Les versets suivants montreront que la droiture du chemin se manifeste dans l'equilibre de la communaute musulmane.",
              axe3_sourate: "La racine q-w-m est une racine majeure de la sourate al-Baqarah. En 2:2-3, le Livre est une guidance pour ceux qui « tiennent debout la priere » (yuqimuna as-salat). En 2:142, le chemin est droit (mustaqim). La sourate associe la verticalite a la priere et au chemin — se tenir droit dans la priere et suivre le chemin droit sont deux faces de la meme droiture.",
              axe4_coherence: "La racine q-w-m apparait environ 660 fois dans le Coran. Le mot mustaqim apparait environ 37 fois, toujours pour qualifier le chemin (sirat) ou la religion (din). En 1:6, « le chemin droit ». En 6:161, « une religion droite ». Le Coran fait de la droiture (istiqama) la qualite fondamentale du chemin divin — il est droit par nature, sans deviation ni tortuosite.",
              axe5_frequence: "Pour la mission du khalifa, la droiture est la methode de la mission. Le khalifa ne cherche pas n'importe quel chemin mais le chemin droit — celui qui est sans deviation. La forme X (istaqama, se redresser de soi-meme) montre que la droiture est une qualite intrinseque, pas un effort exterieur. Le chemin droit est droit par nature — le khalifa doit le reconnaitre et le suivre."
            },
            "Peuple/Communaut\u00e9": {
              status: "nul",
              senses: ["peuple", "communaute", "tribu", "nation", "groupe"],
              proof_ctx: "Le sens de peuple est hors sujet — le mot mustaqimin est un participe actif de la forme X qualifiant le chemin, pas un nom de communaute."
            },
            "Gestion/Administration": {
              status: "nul",
              senses: ["gerer", "administrer", "prendre en charge", "diriger", "veiller sur"],
              proof_ctx: "Le sens de gestion est hors sujet — le mot est un adjectif de droiture, pas un verbe d'administration."
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

  const verseIds = [148, 149];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 141-142 ===\n');
  await processVerse(141);
  await processVerse(142);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V141-142 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
