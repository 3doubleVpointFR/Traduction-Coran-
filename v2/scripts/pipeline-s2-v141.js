const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 141
// verse_id=148, analysis_id=504
// "Voila une communaute qui a passe. A elle ce qu'elle a
//  acquis, et a vous ce que vous avez acquis. Et on ne vous
//  demandera pas ce qu'ils faisaient."
// Verset identique a 2:134 — refrain concluant la section
// sur Abraham et ses descendants. Responsabilite individuelle.
// =====================================================

const verseData = {
  141: {
    verse_id: 148,
    analysis_id: 504,
    translation_arab: "Voila une communaute qui a passe. A elle ce qu'elle a acquis, et a vous ce que vous avez acquis. Et vous ne serez pas questionnes sur ce qu'ils faisaient.",
    full_translation: "Voila une communaute qui a vecu ; a elle ce qu'elle a acquis, et a vous ce que vous avez acquis. Et on ne vous demandera pas ce qu'ils faisaient.",
    translation_explanation: `§DEMARCHE§
Le verset est un refrain qui conclut la section sur Abraham et ses descendants. Il pose le principe de la responsabilite individuelle : chaque generation porte ses propres actes. Le nom **ummatun** est un nom feminin singulier indefini de la racine a-m-m. Le Lane's donne : communaute, nation, groupe uni par un lien commun. L'indefini (sans article) marque qu'il s'agit d'une communaute parmi d'autres — une communaute passee, pas une communaute specifique nommee. Le verbe **khalat** est un accompli 3FS de la racine x-l-w. Le Lane's donne : passer, s'ecouler, etre revolu. L'accompli indique que le passage est acheve — cette communaute est definitivement passee. Le pronom suffixe **laha** (a elle) rattache a la communaute ce qui suit. Le pronom relatif **ma** (ce que) introduit l'objet de la possession. Le verbe **kasabat** est un accompli 3FS de la racine k-s-b. Le Lane's donne : acquerir, gagner par son effort. L'accompli indique que l'acquisition est achevee — ce qu'elle a acquis est definitivement a elle. Le verbe **kasabtum** est un accompli 2MP de la meme racine k-s-b. Le Lane's donne le meme sens : acquerir, gagner. Le changement de personne (de la 3FS a la 2MP) est crucial — le verset passe de « elle » a « vous », distinguant la communaute passee des destinataires presents. Le verbe **tus'aluna** est un inaccompli passif 2MP de la racine s-a-l. Le Lane's donne : demander, questionner, interroger. Le passif indique que les destinataires ne seront pas questionnes — ils ne subiront pas l'interrogation sur les actes d'autrui. L'inaccompli avec la negation (la tus'aluna) marque une negation permanente — jamais vous ne serez questionnes sur les actes des autres. La preposition **'amma** (au sujet de ce que) introduit l'objet de la non-interrogation. Le verbe **kanu** est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre. Kanu est le verbe incomplet qui porte le temps passe — il sert de support au verbe suivant. Le verbe **ya'maluna** est un inaccompli 3MP de la racine '-m-l. Le Lane's donne : faire, agir, travailler. L'inaccompli apres kanu forme le passe continu — « ce qu'ils faisaient » designe une action habituelle et repetee dans le passe. Le verset distingue clairement trois temporalites : le passe acheve (khalat, kasabat), le present des destinataires (kasabtum), et le futur du Jugement (tus'aluna).

§JUSTIFICATION§
**communaute** — Le sens retenu est « communaute ». Le mot ummatun designe un groupe humain uni par un lien commun — ici les generations passees. L'alternative « mere » est ecartee car le contexte parle d'un groupe humain qui a vecu et passe, pas d'une relation maternelle.

**a passe** — Le sens retenu est « passer ». Le verbe khalat designe l'ecoulement du temps et la disparition. L'alternative « etre vide » est ecartee car le contexte est temporel — la communaute a traverse le temps et disparu.

**acquis** (kasabat, 3FS) — Le sens retenu est « acquerir ». Le verbe kasabat designe ce que la communaute a gagne par ses propres actes. Le kasb est l'acquisition par l'effort — chaque communaute porte ce qu'elle a acquis.

**acquis** (kasabtum, 2MP) — Le sens retenu est « acquerir ». Le meme verbe mais a la 2e personne du pluriel — ce que vous avez acquis vous appartient et vous en etes responsables. Le parallele entre kasabat et kasabtum souligne la symetrie de la responsabilite.

**questionnes** — Le sens retenu est « questionner ». Le verbe tus'aluna au passif designe l'interrogation que les destinataires ne subiront pas au sujet des actes d'autrui. L'alternative « mendier » est ecartee car le contexte est le Jugement.

**etaient** — Le sens retenu est « etre ». Le verbe kanu est le support temporel qui place l'action dans le passe. L'alternative « venir a l'existence » est ecartee car kanu est ici incomplet — il sert de support, pas de verbe d'existence.

**faisaient** — Le sens retenu est « faire/agir ». Le verbe ya'maluna designe les actes habituels et repetes des generations passees. L'alternative « gouverneur » est ecartee car le mot est un verbe, pas un nom de fonction.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere quasi identique. Hamidullah donne « a vecu » pour khalat, la ou nous donnons « a passe ». Le sens est le meme — les deux mots decrivent une communaute qui n'est plus. La difference est stylistique : « a passe » est plus litteral (la racine x-l-w porte l'idee d'ecoulement), « a vecu » met l'accent sur l'existence avant la disparition. Notre traduction est fidele a l'etymologie sans s'ecarter du sens global.`,
    segments: [
      { fr: "voila", phon: "tilka", arabic: "\u062a\u0650\u0644\u0652\u0643\u064e", is_particle: true, position: 0 },
      { fr: "une communaute", pos: "nom", phon: "ummatun", arabic: "\u0623\u064f\u0645\u0651\u064e\u0629\u064c", word_key: "amm", is_particle: false, sense_retenu: "communaute", position: 1 },
      { fr: "certes", phon: "qad", arabic: "\u0642\u064e\u062f\u0652", is_particle: true, position: 2 },
      { fr: "a passe", pos: "verbe", phon: "khalat", arabic: "\u062e\u064e\u0644\u064e\u062a\u0652", word_key: "xlw", is_particle: false, sense_retenu: "passer", position: 3 },
      { fr: "a elle", phon: "laha", arabic: "\u0644\u064e\u0647\u064e\u0627", is_particle: true, position: 4 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 5 },
      { fr: "elle a acquis", pos: "verbe", phon: "kasabat", arabic: "\u0643\u064e\u0633\u064e\u0628\u064e\u062a\u0652", word_key: "ksb", is_particle: false, sense_retenu: "acquerir", position: 6 },
      { fr: "et a vous", phon: "wa-lakum", arabic: "\u0648\u064e\u0644\u064e\u0643\u064f\u0645", is_particle: true, position: 7 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 8 },
      { fr: "vous avez acquis", pos: "verbe", phon: "kasabtum", arabic: "\u0643\u064e\u0633\u064e\u0628\u0652\u062a\u064f\u0645\u0652", word_key: "ksb", is_particle: false, sense_retenu: "acquerir", position: 9 },
      { fr: "et ne", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 10 },
      { fr: "vous serez questionnes", pos: "verbe", phon: "tus'aluna", arabic: "\u062a\u064f\u0633\u0652\u0640\u064e\u0640\u0644\u064f\u0648\u0646\u064e", word_key: "sal", is_particle: false, sense_retenu: "questionner", position: 11 },
      { fr: "au sujet de ce que", phon: "'amma", arabic: "\u0639\u064e\u0645\u0651\u064e\u0627", is_particle: true, position: 12 },
      { fr: "ils etaient", pos: "verbe", phon: "kanu", arabic: "\u0643\u064e\u0627\u0646\u064f\u0648\u0627\u06df", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 13 },
      { fr: "faisaient", pos: "verbe", phon: "ya'maluna", arabic: "\u064a\u064e\u0639\u0652\u0645\u064e\u0644\u064f\u0648\u0646\u064e", word_key: "eml", is_particle: false, sense_retenu: "faire", position: 14 }
    ],
    words: [
      // amm pos=2 (position segment = 1)
      {
        word_key: "amm", position: 2, sense_chosen: "communaute",
        analysis_axes: {
          sense_chosen: "communaute",
          concept_chosen: "Origine/Communauté",
          concepts: {
            "Origine/Communauté": {
              status: "retenu",
              senses: ["mère", "nation", "communauté"],
              proof_ctx: "Le mot ummatun est un nom feminin singulier indefini de la racine a-m-m. Le Lane's donne : mere, communaute, nation, groupe uni par un lien commun. La umma est la communaute — le groupe qui partage une origine, une direction, un prophete. Le mot est indefini (sans article), ce qui marque qu'il s'agit d'une communaute parmi d'autres, non identifiee par un nom propre. Le lien avec le sens de « mere » (umm) est etymologique : la communaute est comme une mere qui rassemble ses enfants en un corps uni. La distinction avec la « generalite » (nul) est que le mot designe ici un groupe humain concret qui a vecu et passe, pas un concept abstrait.",
              axe1_verset: "Le mot ummatun ouvre le verset en posant le sujet : voila une communaute. Le demonstratif tilka (voila) pointe vers cette communaute comme un objet d'observation — regardez-la, considerez-la. Le champ lexical du verset tourne autour de la responsabilite individuelle : communaute, passer, acquerir, questionner. La communaute est le cadre collectif, mais le verset va montrer que la responsabilite est individuelle au sein de ce cadre. Chaque communaute porte ses propres acquis.",
              axe2_voisins: "Le verset 140 interrogeait : « Dites-vous qu'Abraham, Ismael, Isaac, Jacob et les tribus etaient juifs ou chretiens ? ». Le verset 141 repond en posant le principe : cette communaute a passe, elle porte ses propres actes. Le verset 142 changera de sujet vers la qibla. Le refrain du verset 141 cloture la section sur Abraham en rappelant que chaque generation est jugee pour ses propres actes, pas pour ceux de ses ancetres illustres.",
              axe3_sourate: "La racine a-m-m apparait dans la sourate al-Baqarah pour designer les communautes et les nations. En 2:128, Abraham demande a Dieu de faire de sa descendance une communaute soumise. En 2:134 et 2:141, le meme refrain rappelle que chaque communaute porte ses propres actes. La sourate montre que l'appartenance a une communaute illustre ne dispense pas de la responsabilite personnelle — chaque umma est jugee pour ce qu'elle a acquis.",
              axe4_coherence: "La racine a-m-m apparait environ 64 fois dans le Coran. Le concept de umma est central — chaque communaute a son messager (10:47), chaque communaute sera appelee vers son livre (45:28). En 2:141, le mot umma est au singulier indefini — une communaute generique, un exemple applicable a toute communaute passee. Le Coran refuse le culte des ancetres en montrant que chaque communaute porte sa propre responsabilite.",
              axe5_frequence: "Pour la mission du khalifa, la communaute est le cadre de la mission. Mais le verset rappelle que l'appartenance a une communaute passee ne confere aucun merite automatique. Le khalifa ne peut pas invoquer le merite de ses predecesseurs — il doit acquerir ses propres actes. La mission est individuelle dans un cadre collectif. Chaque generation de khalifas est responsable de ce qu'elle fait, pas de ce que les generations precedentes ont fait."
            },
            "Généralité/Parenté": {
              status: "nul",
              senses: ["être général", "oncle paternel"],
              proof_ctx: "Le sens de generalite est un usage abstrait de a-m-m. Le contexte designe une communaute humaine concrete qui a vecu et passe, pas un concept de generalite. Le sens d'oncle paternel est hors sujet — le mot est ummatun (communaute), pas 'amm (oncle)."
            }
          }
        }
      },
      // xlw pos=4 (position segment = 3)
      {
        word_key: "xlw", position: 4, sense_chosen: "passer",
        analysis_axes: {
          sense_chosen: "passer",
          concept_chosen: "Passage/Passé",
          concepts: {
            "Passage/Passé": {
              status: "retenu",
              senses: ["passer (temps révolu)", "les générations passées"],
              proof_ctx: "Le verbe khalat est un accompli 3FS de la racine x-l-w. Le Lane's donne : passer, s'ecouler, etre revolu, etre passe. Le passage est un mouvement temporel irreversible — ce qui est passe ne revient pas. L'accompli marque que l'action est achevee — cette communaute a definitivement passe. La racine porte aussi les sens de « etre vide » et « laisser », mais le contexte temporel (une communaute qui a existe puis disparu) impose le sens de passage. La distinction avec « vacuite » (probable) est que le verset parle d'un ecoulement temporel, pas d'un etat de vide.",
              axe1_verset: "Le verbe khalat qualifie la communaute — elle a passe. Le champ lexical du verset (communaute, acquerir, questionner, faire) tourne autour des actes et de leur attribution. Le passage de la communaute est le point de depart du raisonnement : puisqu'elle a passe, ses actes lui appartiennent et ne concernent plus les vivants. Le passage est la premisse qui fonde la conclusion : vous n'etes pas responsables de ce qu'ils faisaient.",
              axe2_voisins: "Le verset 140 posait la question de l'identite religieuse d'Abraham et des patriarches. Le verset 141 repond : cette communaute a passe — la question de leur identite confessionnelle est secondaire. Ce qui compte c'est ce que chacun a acquis. Le passage de la communaute clot le debat sur l'appropriation des ancetres. Les versets suivants (142 et apres) ouvrent un nouveau sujet — la qibla.",
              axe3_sourate: "La racine x-l-w apparait dans la sourate al-Baqarah en 2:134 et 2:141 dans le meme refrain. En 2:8, khalaw (quand ils se retrouvent seuls) utilise le sens de « etre seul ». En 2:134 et 2:141, le sens est temporel — les communautes passees ont traverse le temps et disparu. La sourate utilise cette racine pour marquer la frontiere entre le passe et le present.",
              axe4_coherence: "La racine x-l-w apparait environ 30 fois dans le Coran. En 3:137, « des modeles ont passe (khalat) avant vous ». En 5:75, « les messagers ont passe (khalat) avant lui ». Le Coran utilise khalat pour decrire les generations et les messagers qui ont traverse le temps. Le passage est un fait universel — toute communaute finit par passer. Le message est que le passage des ancetres ne transfere ni merite ni blame aux descendants.",
              axe5_frequence: "Pour la mission du khalifa, le passage des communautes anterieures est un avertissement. Le khalifa ne peut pas se reposer sur les acquis des generations passees — elles ont passe et leurs actes leur appartiennent. La mission du khalifa est dans le present, pas dans la nostalgie du passe. Chaque khalifa doit acquerir ses propres merites par ses propres actes, car la communaute qui l'a precede a definitivement passe."
            },
            "Vacuité/Solitude": {
              status: "probable",
              senses: ["être vide", "être seul", "être libre de"],
              proof_ctx: "Le sens de vacuite est un sens majeur de x-l-w — etre vide, etre libre de toute occupation. La distinction philosophique avec le passage est que la vacuite decrit un etat (etre vide de contenu), tandis que le passage decrit un mouvement temporel (traverser le temps et disparaitre). Le verset parle d'une communaute qui a passe — un mouvement dans le temps, pas un etat de vide. Le mot est un accompli 3FS decrivant un evenement acheve, pas un etat permanent.",
              axe1_verset: "Si on lisait khalat comme « etre vide », le verset dirait « voila une communaute qui s'est videe ». Le sens serait que la communaute s'est videe de ses membres — une image de disparition par le vide interieur. Le champ lexical du verset (acquerir, faire) parle d'actes et de possession, pas de vide. Le sens de passage est plus coherent avec le theme de la responsabilite individuelle que le sens de vacuite.",
              axe2_voisins: "Le verset 140 parlait de l'identite d'Abraham et des patriarches. Si khalat signifiait « etre vide », le lien avec les versets voisins serait : cette communaute s'est videe, elle n'a plus de membres. Le sens de passage est plus naturel dans la continuite : cette communaute a passe, ses actes lui appartiennent. La vacuite est un sens possible mais secondaire dans ce contexte.",
              axe3_sourate: "En 2:8, khalaw utilise le sens de « se retrouver seul » — quand ils se retrouvent seuls avec leurs diables. La sourate connait donc le sens de solitude/vacuite de cette racine. Mais en 2:134 et 2:141, le contexte est temporel — la communaute a traverse le temps, pas elle s'est retrouvee seule.",
              axe4_coherence: "En 8:38, « les modeles des anciens ont passe (khalat) ». Le sens de passage est dominant dans le Coran pour cette racine quand le sujet est une communaute ou une generation. Le sens de vacuite apparait dans d'autres contextes (etre seul, etre libre). Les deux sens coexistent dans la racine mais le passage est le sens principal quand le sujet est humain et le contexte est temporel.",
              axe5_frequence: "Pour la mission du khalifa, la vacuite pourrait signifier que la communaute s'est videe de son contenu spirituel avant de disparaitre. Le khalifa doit veiller a ne pas laisser sa communaute se vider de son sens. Mais le sens premier dans ce contexte reste le passage — la communaute a traverse le temps et ses actes sont clos."
            },
            "Abandon": {
              status: "nul",
              senses: ["laisser", "libérer"],
              proof_ctx: "Le sens d'abandon (laisser, liberer) est un sens actif de x-l-w — laisser partir, liberer. Le contexte est intransitif — la communaute a passe, elle n'a pas laisse ou libere quelque chose. Le verbe est utilise sans complement direct."
            }
          }
        }
      },
      // ksb pos=7 — kasabat (3FS, elle a acquis)
      {
        word_key: "ksb", position: 7, sense_chosen: "acquerir",
        analysis_axes: {
          sense_chosen: "acquerir",
          concept_chosen: "Acquisition/Rétribution",
          concepts: {
            "Acquisition/Rétribution": {
              status: "retenu",
              senses: ["acquérir", "gagner", "mériter"],
              proof_ctx: "Le verbe kasabat est un accompli 3FS de la racine k-s-b. Le Lane's donne : acquerir, gagner par son effort, obtenir. Le kasb est l'acquisition — l'acte de gagner quelque chose par son propre effort. L'accompli marque que l'acquisition est achevee — ce que la communaute a acquis est definitif. Le pronom feminin singulier (kasabat) renvoie a la communaute (ummatun, feminin). La racine k-s-b n'a qu'un seul concept retenu, ce qui rend le choix immediat. L'acquisition inclut aussi bien les bonnes que les mauvaises actions — le kasb est neutre, c'est le contenu qui determine la valeur.",
              axe1_verset: "Le verbe kasabat est la premiere des deux occurrences de la racine k-s-b dans le verset. Le parallele entre « ma kasabat » (ce qu'elle a acquis) et « ma kasabtum » (ce que vous avez acquis) structure le verset en deux volets symetriques. Le champ lexical (communaute, passer, acquerir, questionner, faire) tourne autour de la responsabilite des actes. Kasabat attribue a la communaute passee ses propres acquis — ils lui appartiennent exclusivement.",
              axe2_voisins: "Le verset 140 posait la question de l'identite d'Abraham. Le verset 141 repond que cette question est secondaire — ce qui compte c'est ce que chacun a acquis. Le parallele kasabat/kasabtum coupe le lien entre les actes des ancetres et ceux des descendants. Les versets precedents debattaient de l'heritage abrahamique — le verset 141 rappelle que chaque generation porte ses propres acquis.",
              axe3_sourate: "La racine k-s-b apparait dans la sourate al-Baqarah pour decrire les consequences des actes. En 2:81, « celui qui a acquis (kasaba) un peche ». En 2:134 et 2:141, le meme refrain utilise kasaba pour poser le principe de la responsabilite individuelle. En 2:286, « a elle ce qu'elle a acquis (kasabat) et contre elle ce qu'elle a commis ». La sourate utilise systematiquement k-s-b pour lier l'individu a ses actes.",
              axe4_coherence: "La racine k-s-b apparait environ 67 fois dans le Coran. Le concept d'acquisition est lie a la retribution — en 3:161, « chaque ame sera retribuee pour ce qu'elle a acquis ». En 45:22, « chaque ame sera retribuee pour ce qu'elle a acquis ». Le Coran utilise kasaba comme le verbe de la responsabilite individuelle — ce que tu acquiers te revient, en bien ou en mal.",
              axe5_frequence: "Pour la mission du khalifa, l'acquisition est le mecanisme de la mission. Le khalifa acquiert par ses actes — chaque decision, chaque effort, chaque choix est un kasb qui lui revient. La communaute passee a acquis ses propres actes, le khalifa doit acquerir les siens. La mission n'est pas heritee mais acquise par l'effort personnel. Le khalifa ne peut pas se prevaloir des acquis de ses predecesseurs."
            }
          }
        }
      },
      // ksb pos=9 — kasabtum (2MP, vous avez acquis)
      {
        word_key: "ksb", position: 9, sense_chosen: "acquerir",
        analysis_axes: {
          sense_chosen: "acquerir",
          concept_chosen: "Acquisition/Rétribution",
          concepts: {
            "Acquisition/Rétribution": {
              status: "retenu",
              senses: ["acquérir", "gagner", "mériter"],
              proof_ctx: "Le verbe kasabtum est un accompli 2MP de la racine k-s-b. Le Lane's donne : acquerir, gagner par son effort, obtenir. L'accompli marque que l'acquisition est achevee — ce que les destinataires ont acquis est definitif. Le pronom 2MP (tum) s'adresse directement aux destinataires du Coran — c'est vous qui etes concernes. La racine k-s-b n'a qu'un seul concept retenu, ce qui rend le choix immediat. Le passage de kasabat (3FS, elle) a kasabtum (2MP, vous) est le pivot du verset — la responsabilite est distribuee symetriquement.",
              axe1_verset: "Le verbe kasabtum est la deuxieme occurrence de la racine k-s-b dans le verset. Le parallele structurel est parfait : « a elle ce qu'elle a acquis / et a vous ce que vous avez acquis ». Le champ lexical (communaute, passer, acquerir, questionner) montre que le verset distribue la responsabilite en deux parts egales. Kasabtum interpelle directement les destinataires — vos acquis vous appartiennent, comme les leurs leur appartiennent.",
              axe2_voisins: "Le verset 140 demandait aux gens de ne pas revendiquer l'identite d'Abraham. Le verset 141 repond : a vous ce que vous avez acquis — ne revendiquez pas les merites d'autrui. Le verset 142 ouvrira un nouveau chapitre sur la qibla. Le kasabtum marque la coupure : les actes des ancetres ne vous concernent pas, occupez-vous des votres.",
              axe3_sourate: "En 2:286, le verset final de la sourate reprend la meme structure : « a elle ce qu'elle a acquis (kasabat) et contre elle ce qu'elle a commis (iktasabat) ». Le verset 141 utilise kasabtum au 2MP pour interpeller directement, tandis que 2:286 utilise la 3FS pour une formule generale. La sourate ouvre et ferme le theme de la responsabilite individuelle avec la meme racine k-s-b.",
              axe4_coherence: "En 2:134 et 2:141, le meme refrain utilise kasabat et kasabtum en parallele. La repetition du refrain souligne son importance — le Coran insiste sur ce principe en le repetant mot pour mot. En 74:38, « chaque ame est otage de ce qu'elle a acquis ». Le kasb lie l'individu a ses actes comme un otage a sa rancon — on ne peut pas s'en defaire.",
              axe5_frequence: "Pour la mission du khalifa, le kasabtum est un appel direct a l'action. Le khalifa est interpelle — a toi ce que tu as acquis. La mission n'est pas un heritage passif mais une acquisition active. Chaque acte du khalifa est un kasb qui lui revient personnellement. Le verset rappelle que la mission est individuelle — personne ne portera le fardeau d'un autre, et personne ne beneficiera des merites d'un autre."
            }
          }
        }
      },
      // sal pos=10
      {
        word_key: "sal", position: 10, sense_chosen: "questionner",
        analysis_axes: {
          sense_chosen: "questionner",
          concept_chosen: "Requête/Interrogation",
          concepts: {
            "Requête/Interrogation": {
              status: "retenu",
              senses: ["demander", "questionner", "interroger"],
              proof_ctx: "Le verbe tus'aluna est un inaccompli passif 2MP de la racine s-a-l. Le Lane's donne : demander, questionner, interroger. Le passif indique que les destinataires sont l'objet de l'interrogation — on ne vous demandera pas. L'inaccompli avec la negation (la tus'aluna) marque une negation permanente et absolue — jamais vous ne serez questionnes sur les actes d'autrui. La racine s-a-l n'a qu'un seul concept retenu. Le questionnement dont il est question est celui du Jugement — etre questionne sur ses actes c'est en rendre compte.",
              axe1_verset: "Le verbe tus'aluna conclut le raisonnement du verset : la communaute a passe, elle a acquis ses actes, vous avez acquis les votres, et vous ne serez pas questionnes sur ce qu'ils faisaient. La negation (la tus'aluna) est la conclusion logique — si chacun porte ses propres acquis, alors personne n'est questionne sur les actes d'autrui. Le champ lexical (communaute, passer, acquerir, questionner, faire) forme une chaine logique qui aboutit a la non-responsabilite croisee.",
              axe2_voisins: "Les versets 140-141 cloturent le debat sur l'heritage abrahamique. Le verset 141 rappelle que les destinataires ne seront pas questionnes sur les actes d'Abraham, d'Ismael ou de Jacob — ces hommes ont passe et leurs actes leur appartiennent. Le verset libere les destinataires du poids de l'heritage et les ramene a leur propre responsabilite. Les versets suivants ouvrent le chapitre de la qibla.",
              axe3_sourate: "La racine s-a-l apparait dans la sourate al-Baqarah sous la forme « yas'alunaka » (ils te demandent) qui structure plusieurs passages : 2:189, 2:215, 2:217, 2:219, 2:220, 2:222. En 2:141, la forme passive tus'aluna inverse la direction — ce n'est plus « ils te demandent » mais « on ne vous demandera pas ». La sourate utilise la racine s-a-l dans les deux sens : la demande active et l'interrogation passive du Jugement.",
              axe4_coherence: "La racine s-a-l apparait environ 129 fois dans le Coran. En 2:119, « tu ne seras pas questionne (tus'alu) sur les gens de la Fournaise ». En 15:92, « Nous les questionnerons tous ». Le Coran distingue entre l'interrogation a laquelle on est soumis (sur ses propres actes) et celle dont on est exempte (sur les actes d'autrui). Le verset 2:141 se place dans la deuxieme categorie : exemption de l'interrogation sur les actes des autres.",
              axe5_frequence: "Pour la mission du khalifa, la non-interrogation sur les actes d'autrui est un principe liberateur. Le khalifa n'est pas responsable des echecs des generations passees — il est responsable de ses propres actes. Cette exemption est aussi un appel : puisque tu ne seras pas questionne sur les actes des autres, concentre-toi sur les tiens. La mission du khalifa est dans le present, pas dans la justification du passe."
            }
          }
        }
      },
      // kwn pos=12
      {
        word_key: "kwn", position: 12, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être (verbe incomplet)", "venir à l'existence"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister, venir a l'existence. Ici kanu est un verbe incomplet (suivi de l'inaccompli ya'maluna) — il sert de support temporel pour placer l'action dans le passe continu : « ils etaient en train de faire ». Le verbe incomplet ne decrit pas une existence en soi mais porte le temps — kanu ya'maluna signifie « ils faisaient » de maniere habituelle dans le passe. La distinction avec « humilite » et « lieu » (nul) est evidente : le mot est le verbe d'existence dans un usage grammatical de support temporel.",
              axe1_verset: "Le verbe kanu fait partie de la proposition finale du verset : « ce qu'ils faisaient » ('amma kanu ya'maluna). Kanu sert de support temporel a ya'maluna — ensemble ils forment le passe continu « ils faisaient ». Le champ lexical (communaute, passer, acquerir, questionner) montre que le verset distingue les temps : l'accompli pour les actes acheves (khalat, kasabat), et le passe continu (kanu ya'maluna) pour les actions habituelles. Ce qu'ils faisaient de maniere repetee ne vous concerne pas.",
              axe2_voisins: "Le verset 140 posait la question de l'identite d'Abraham et des patriarches. Le verset 141 repond en renvoyant a leurs actions passees (kanu ya'maluna) — ce qu'ils faisaient habituellement ne vous concerne pas. Le kanu marque que ces actions sont ancrees dans un passe revolu, separe du present des destinataires.",
              axe3_sourate: "La racine k-w-n est le verbe le plus frequent de la sourate al-Baqarah. Kanu apparait des dizaines de fois pour introduire des actions passees : « kanu yaf'aluna » (ils faisaient), « kanu ya'lamuna » (ils savaient), etc. La sourate utilise kanu comme outil narratif pour decrire le comportement des generations passees. En 2:141, kanu s'inscrit dans cette serie narrative.",
              axe4_coherence: "La racine k-w-n apparait plus de 1300 fois dans le Coran. Le verbe kana est le verbe le plus frequent de la langue arabe. En usage incomplet, il sert de copule temporelle — il place l'action dans un temps specifique. En 2:141, kanu ya'maluna est une expression recurrente du Coran pour decrire les actions habituelles des generations passees. Le Coran utilise cette formule pour montrer que les actes passes sont clos.",
              axe5_frequence: "Pour la mission du khalifa, le kanu renvoie au passe des predecesseurs. Ce qu'ils etaient et ce qu'ils faisaient est revolu. Le khalifa ne doit pas vivre dans le passe mais dans le present de sa mission. Le kanu marque la frontiere entre le passe des autres et le present du khalifa — chaque epoque a sa propre mission, chaque generation ses propres actes a accomplir."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["être humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — kanu est ici le verbe incomplet d'existence servant de support temporel, pas un verbe de soumission."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste à ta place", "état condition", "motif raison"],
              proof_ctx: "Le sens de lieu ou d'etat est un sens nominal de k-w-n. Kanu est ici un verbe conjugue a l'accompli 3MP, pas un nom. Le contexte est grammatical — kanu sert de support temporel a ya'maluna."
            }
          }
        }
      },
      // eml pos=13
      {
        word_key: "eml", position: 13, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ya'maluna est un inaccompli 3MP de la racine '-m-l. Le Lane's donne : faire, agir, travailler, accomplir. L'inaccompli apres kanu forme le passe continu — « ce qu'ils faisaient » designe des actions habituelles et repetees. La racine '-m-l designe l'action volontaire et continue, a la difference de f-'-l (faire ponctuel). Ya'maluna decrit un pattern d'action — pas un acte isole mais un ensemble d'actes qui definissent un comportement. La distinction avec « gouverneur » (nul) est que le mot est un verbe a l'inaccompli 3MP, pas un nom de fonction.",
              axe1_verset: "Le verbe ya'maluna cloture le verset — « ce qu'ils faisaient » est l'objet de la non-interrogation. Le champ lexical (communaute, passer, acquerir, questionner, faire) forme une chaine qui aboutit a ya'maluna : la communaute a passe, elle a acquis ce qu'elle a acquis, et vous ne serez pas questionnes sur ce qu'ils faisaient. Les actions (ya'maluna) sont le contenu des acquisitions (kasabat) — on acquiert par ses actes. Le verset lie l'acte a la responsabilite.",
              axe2_voisins: "Le verset 140 interrogeait sur l'identite d'Abraham. Le verset 141 repond en renvoyant aux actions — ce qu'ils faisaient ne vous concerne pas. Le ya'maluna designe les actes habituels des patriarches et de leur communaute. Les versets precedents debattaient de l'appartenance confessionnelle — le verset 141 ramene le debat aux actes concrets. Ce qui compte c'est ce qu'on fait, pas l'etiquette qu'on porte.",
              axe3_sourate: "La racine '-m-l est une racine structurante de la sourate al-Baqarah. En 2:25, « ceux qui croient et font les bonnes oeuvres ». En 2:62, « quiconque croit et fait une bonne oeuvre ». En 2:85, « Dieu n'est pas inattentif a ce que vous faites ». La sourate lie constamment la foi aux oeuvres — croire et faire sont indissociables. Le verset 141 s'inscrit dans ce theme en renvoyant chacun a ses propres oeuvres.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. L'expression kanu ya'maluna (ils faisaient) est un refrain coranique — en 6:132, « chacun aura des degres selon ce qu'il a fait ». En 16:93, « vous serez questionnes sur ce que vous faisiez ». Le Coran utilise ya'maluna pour decrire les actes qui engagent la responsabilite. En 2:141, la negation (la tus'aluna 'amma kanu ya'maluna) exempte les destinataires de la responsabilite des actes d'autrui.",
              axe5_frequence: "Pour la mission du khalifa, les oeuvres sont la substance de la mission. Le khalifa est defini par ce qu'il fait, pas par ce que ses ancetres ont fait. Ya'maluna designe l'action continue — la mission n'est pas un acte ponctuel mais un engagement permanent. Le khalifa doit faire ses propres oeuvres et ne sera juge que sur celles-ci. Le verset libere le khalifa du poids de l'heritage et le ramene a l'urgence de l'action presente."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le sens de gouverneur est un usage nominal specifique de '-m-l. Le contexte est un verbe a l'inaccompli 3MP (ya'maluna = ils faisaient), pas un nom de fonction administrative."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// INSERT verse_word_analyses + UPDATE verse_analyses
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

  const verseIds = [148];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 141 ===\n');
  await processVerse(141);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V141 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
