const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 171
// verse_id=178, analysis_id=536
// "Et la parabole de ceux qui mecroient est comme
//  celle de quelqu'un qui crie apres ce qui n'entend
//  que des appels et des cris. Sourds, muets, aveugles
//  — ils ne raisonnent pas."
// Parabole des mecreants — betail qui n'entend rien
// =====================================================

const verseData = {
  171: {
    verse_id: 178,
    analysis_id: 536,
    translation_arab: "Et la similitude de ceux qui rejettent est comme celle de quelqu'un qui crie apres ce qui n'entend que des appels et des cris. Sourds, muets, aveugles — ils ne raisonnent pas.",
    full_translation: "Et l'exemple de ceux qui mecroient est semblable a un berger qui appelle des betes sourdes a tout sauf a des cris et des appels. Sourds, muets et aveugles, ils ne raisonnent point.",
    translation_explanation: `§DEMARCHE§
Le verset construit une parabole (mathal) comparant les mecreants a du betail appele par un berger — le betail n'entend que des sons sans comprendre le sens. La structure est un double mathal : le premier mot mathal introduit la comparaison, puis le second mathal (ka-mathali) en donne le contenu. Le verbe **kafaru** est un accompli 3MP de la racine k-f-r. Le Lane's donne : couvrir, dissimuler, etre ingrat, rejeter un bienfait. Le kufr est l'acte de couvrir la verite, de la dissimuler sous l'ingratitude. L'accompli marque un etat etabli — ceux qui ont rejete, qui persistent dans le rejet. Le sens premier de la racine est la couverture (le paysan qui couvre la graine de terre est appele kafir dans la poesie arabe). Le mot **mathali** (second) est un nom masculin singulier de la racine m-th-l au genitif. Le Lane's donne : similitude, parabole, comparaison, exemple. Le mathal est ce qui rend visible l'invisible — il prend une realite abstraite (le rejet des mecreants) et la traduit en image concrete (le berger criant apres du betail). Le verbe **yaneiqu** est un inaccompli 3MS de la racine n-e-q. Le Lane's donne : crier apres du betail, pousser des cris vers les betes pour les faire bouger. Le naeiq est specifiquement le cri du berger vers les betes — pas un appel humain civilise mais un cri brut destine a des animaux qui ne comprennent pas les mots. L'inaccompli marque une action continue — il crie sans cesse, sans resultat. Le verbe **yasmaeu** est un inaccompli 3MS de la racine s-m-e. Le Lane's donne : entendre, ecouter, percevoir par l'ouie. Le samae est la perception auditive — mais ici l'ecoute est limitee par la particule restrictive « illa » (sauf). Le betail n'entend que des sons bruts (appels et cris), sans comprendre le sens. L'entendre sans comprendre est le coeur de la parabole. Le nom **dueaan** est un nom accusatif indefini de la racine d-e-w. Le Lane's donne : appel, invocation, priere. Le duea est l'acte d'appeler quelqu'un pour le faire venir. Le nom est a l'accusatif car il est l'objet de l'ecoute limitee. L'appel est la forme structuree du cri — il a une intention, un but. Le nom **nidaaan** est un nom accusatif indefini de la racine n-d-w. Le Lane's donne : appel, invitation, convocation. Le nida est l'appel a voix haute pour etre entendu de loin. Le mot vient de la racine n-d-w qui porte le sens de mouiller (le nada est la rosee) mais dans l'usage le nida est l'appel a haute voix. L'association duea-nida cree un doublon sonore — deux types d'appels qui restent tous deux incompris. Le nom **summun** est un nom pluriel de la racine s-m-m. Le Lane's donne : sourd, celui qui ne peut entendre. Le sourd est prive de la capacite d'entendre. Le pluriel indefini (summun, pas as-summun) donne une valeur qualificative — ils sont sourds par nature. Le nom **bukmun** est un nom pluriel de la racine b-k-m. Le Lane's donne : muet, celui qui ne peut parler. Le muet est prive de la capacite de s'exprimer. La sequence sourd-muet-aveugle est un crescendo de privation sensorielle. Le nom **eumyun** est un nom pluriel de la racine e-m-y. Le Lane's donne : aveugle, celui qui est prive de la vue. L'aveugle est prive de la capacite de voir. La triade sourd-muet-aveugle couvre les trois sens de la communication : entendre, parler, voir. Le verbe **yaequluna** est un inaccompli 3MP de la racine e-q-l. Le Lane's donne : raisonner, comprendre, lier, entraver. Le eaql est la capacite de lier les choses entre elles, de saisir les rapports. La negation « la yaequluna » (ils ne raisonnent pas) est le verdict final — prives des sens, ils sont aussi prives de la raison. La racine e-q-l porte aussi le sens d'entrave (le eiqal est la corde qui attache le chameau) — ne pas raisonner c'est etre enchaine.

§JUSTIFICATION§
**similitude** (1er mathal) — Le sens retenu est « similitude/comparaison ». Le mot mathal introduit la parabole. L'alternative « egal » est ecartee car le contexte est la comparaison imagee, pas l'egalite.

**rejettent** — Le sens retenu est « rejeter/etre ingrat ». Le verbe kafaru designe le rejet de la verite. L'alternative « couvrir » est le sens etymologique premier mais ici le contexte est le rejet des signes divins — le kufr est l'acte de couvrir la verite par le rejet.

**similitude** (2e mathal) — Le sens retenu est « similitude/comparaison ». Le second mathal donne le contenu de la comparaison. L'alternative « exemple » est tres proche mais le mot est ici dans une structure comparative (ka-mathali = comme la similitude de).

**crie** — Le sens retenu est « crier/appeler ». Le verbe yaneiqu designe le cri du berger vers le betail. L'alternative « se plaindre » est ecartee car le naeiq est un cri actif destine a faire bouger les betes, pas une plainte passive.

**entend** — Le sens retenu est « entendre/ecouter ». Le verbe yasmaeu designe la perception auditive. L'alternative « obeir » est ecartee car la particule restrictive « illa » montre que l'ecoute est limitee aux sons bruts — il ne s'agit pas d'obeissance mais de perception sonore sans comprehension.

**appels** — Le sens retenu est « appel/invocation ». Le nom dueaan designe l'acte d'appeler. L'alternative « pretention » est ecartee car le contexte est le son brut percu par le betail — c'est un appel sonore, pas une revendication.

**cris** — Le sens retenu est « appel/invitation ». Le nom nidaaan est un synonyme de duea renforce — les deux mots forment un doublon sonore. L'alternative « assemblee » est ecartee car le contexte est le son, pas le rassemblement.

**sourds** — Le sens retenu est « surdite ». Le mot summun designe l'etat de celui qui ne peut entendre. Il n'y a pas d'alternative pertinente pour cette racine dans ce contexte.

**muets** — Le sens retenu est « mutisme ». Le mot bukmun designe l'etat de celui qui ne peut parler. Il n'y a pas d'alternative pertinente pour cette racine dans ce contexte.

**aveugles** — Le sens retenu est « cecite/aveuglement ». Le mot eumyun designe l'etat de celui qui est prive de la vue. L'alternative « obscurite » est ecartee car le mot designe l'etat de la personne, pas l'etat de l'environnement.

**raisonnent** — Le sens retenu est « raison/intelligence ». Le verbe yaequluna designe l'acte de raisonner. L'alternative « entrave » est le sens etymologique (le eiqal est la corde) — ne pas raisonner c'est etre entrave, mais le sens premier dans ce contexte est la raison intellectuelle.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon similaire. Hamidullah traduit par « a l'exemple de celui qui crie a ce qui n'entend que des appels et des voix ». Notre traduction preserve les deux termes (appels et cris) la ou certains traducteurs fusionnent. Le mot « nidaaan » est rendu par « cris » plutot que « voix » car la racine n-d-w designe un appel a haute voix, pas une voix neutre. La triade sourd-muet-aveugle est une structure coranique recurrente (cf. 2:18) qui souligne la privation totale des moyens de communication et de comprehension.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "la similitude de", pos: "nom", phon: "mathalu", arabic: "\u0645\u064e\u062b\u064e\u0644\u064f", word_key: "mvl", is_particle: false, sense_retenu: "similitude", position: 1 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 2 },
      { fr: "rejettent", pos: "verbe", phon: "kafaru", arabic: "\u0643\u064e\u0641\u064e\u0631\u064f\u0648\u0627\u06df", word_key: "kfr", is_particle: false, sense_retenu: "rejeter", position: 3 },
      { fr: "comme la similitude de", pos: "nom", phon: "ka-mathali", arabic: "\u0643\u064e\u0645\u064e\u062b\u064e\u0644\u0650", word_key: "mvl", is_particle: false, sense_retenu: "similitude", position: 4 },
      { fr: "celui qui", phon: "alladhi", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u0649", is_particle: true, position: 5 },
      { fr: "crie", pos: "verbe", phon: "yan\u02bfiqu", arabic: "\u064a\u064e\u0646\u0652\u0639\u0650\u0642\u064f", word_key: "neq", is_particle: false, sense_retenu: "crier", position: 6 },
      { fr: "apres ce qui", phon: "bima", arabic: "\u0628\u0650\u0645\u064e\u0627", is_particle: true, position: 7 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 8 },
      { fr: "entend", pos: "verbe", phon: "yasma\u02bfu", arabic: "\u064a\u064e\u0633\u0652\u0645\u064e\u0639\u064f", word_key: "sme", is_particle: false, sense_retenu: "entendre", position: 9 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 10 },
      { fr: "des appels", pos: "nom", phon: "du\u02bfa\u02bean", arabic: "\u062f\u064f\u0639\u064e\u0627\u0653\u0621\u064b", word_key: "dew", is_particle: false, sense_retenu: "appel", position: 11 },
      { fr: "et des cris", pos: "nom", phon: "wa-nida\u02bean", arabic: "\u0648\u064e\u0646\u0650\u062f\u064e\u0627\u0653\u0621\u064b", word_key: "ndw", is_particle: false, sense_retenu: "cri", position: 12 },
      { fr: "sourds", pos: "nom", phon: "\u1e63umm", arabic: "\u0635\u064f\u0645\u0651\u064c", word_key: "smm", is_particle: false, sense_retenu: "sourd", position: 13 },
      { fr: "muets", pos: "nom", phon: "bukm", arabic: "\u0628\u064f\u0643\u0652\u0645\u064c", word_key: "bkm", is_particle: false, sense_retenu: "muet", position: 14 },
      { fr: "aveugles", pos: "nom", phon: "\u02bfumy", arabic: "\u0639\u064f\u0645\u0652\u064a\u064c", word_key: "emy", is_particle: false, sense_retenu: "aveugle", position: 15 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 16 },
      { fr: "ils", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", is_particle: true, position: 17 },
      { fr: "ne raisonnent pas", pos: "verbe", phon: "ya\u02bfqiluna", arabic: "\u0644\u064e\u0627 \u064a\u064e\u0639\u0652\u0642\u0650\u0644\u064f\u0648\u0646\u064e", word_key: "eql", is_particle: false, sense_retenu: "raisonner", position: 18 }
    ],
    words: [
      // mvl pos=1 (1ere occurrence : « la similitude de »)
      {
        word_key: "mvl", position: 1, sense_chosen: "similitude",
        analysis_axes: {
          sense_chosen: "similitude",
          concept_chosen: "Similitude/Comparaison",
          concepts: {
            "Similitude/Comparaison": {
              status: "retenu",
              senses: ["similitude", "parabole", "comparaison", "exemple", "proverbe"],
              proof_ctx: "Le nom mathalu est un nom masculin singulier nominatif de la racine m-th-l. Le Lane's donne : similitude, ressemblance, parabole, exemple, ce qui est mis en face d'une chose pour la representer. Le mathal est l'outil par excellence de la mise en image — il prend une realite abstraite et la rend visible a travers une comparaison concrete. Ici le mathal ouvre la parabole en annoncant : voici la similitude (de ceux qui rejettent). Le mot est au nominatif car il est le sujet de la phrase — c'est la similitude qui EST comme ceci.",
              axe1_verset: "Le mot mathalu ouvre le verset en annoncant la parabole. Le champ lexical du verset est celui de la communication echouee : crier, entendre, appels, cris, sourd, muet, aveugle, raisonner. Le mathal est l'enveloppe de cette image — il annonce qu'une comparaison va suivre. La structure du verset est mathal (annonce) → contenu de la comparaison (berger et betail) → verdict (sourds, muets, aveugles). Le mathal est le cadre qui donne sens a l'image.",
              axe2_voisins: "Le verset 2:170 annoncait le contexte : quand on leur dit « suivez ce que Dieu a revele », ils repondent « nous suivons nos peres ». Le verset 2:171 donne la parabole de cette situation — les mecreants sont comme du betail qu'on appelle en vain. Le verset 2:172 passera a l'imperatif positif : mangez des bonnes choses. Le mathal est donc place entre le constat d'echec (2:170) et l'appel a l'action (2:172).",
              axe3_sourate: "La racine m-th-l apparait plusieurs fois dans la sourate al-Baqarah. En 2:17, la parabole des hypocrites qui allument un feu puis perdent la lumiere. En 2:19, la parabole de l'orage. En 2:26, Dieu ne se gene pas de proposer en parabole un moustique. La sourate utilise le mathal comme outil pedagogique recurrent — chaque parabole eclaire un type de deviance. En 2:171, la parabole vise les mecreants qui imitent sans comprendre.",
              axe4_coherence: "La racine m-th-l apparait environ 169 fois dans le Coran. Le mathal est un procede coranique majeur — chaque parabole utilise une image du quotidien pour rendre visible une realite spirituelle. En 14:24-25, la bonne parole est comparee a un bel arbre. En 24:35, la lumiere de Dieu est comparee a une niche contenant une lampe. Le mathal de 2:171 est unique car il compare a un echec de communication — le berger crie mais le betail ne comprend rien.",
              axe5_frequence: "Pour la mission du khalifa, le mathal est l'outil de la transmission. Le khalifa doit rendre visible l'invisible — comme le mathal rend concrete une verite abstraite. La parabole de 2:171 montre le risque de la mission : si l'auditoire est comme du betail sourd, meme le meilleur berger echoue. Le khalifa doit discerner entre ceux qui ecoutent avec comprehension et ceux qui n'entendent que des sons bruts sans saisir le sens."
            },
            "Égalité/Ressemblance": {
              status: "peu_probable",
              senses: ["egal", "semblable", "identique", "pair"],
              proof_ctx: "Le sens d'egalite est un sens de la racine m-th-l — le mithl est l'egal, le semblable. Mais dans ce verset le mot est mathal (parabole) et non mithl (egal). La construction mathal alladhina kafaru (la parabole de ceux qui mecroient) introduit une comparaison imagee, pas une egalite factuelle. L'egalite reste possible comme sens secondaire car la parabole etablit une equivalence entre les mecreants et le betail.",
              axe1_verset: "Le mot mathalu pourrait etre lu comme « l'equivalent de ceux qui rejettent ». Le champ lexical du verset (crier, entendre, appels, cris, sourd, muet, aveugle) serait alors une description de ce qui est egal aux mecreants. Mais la structure « ka-mathali » (comme la similitude de) montre qu'il s'agit d'une comparaison et non d'une identification stricte. Les mecreants sont compares a du betail, ils ne sont pas litteralement du betail.",
              axe2_voisins: "Le verset 2:170 montrait les mecreants disant « nous suivons nos peres ». Le verset 2:171 pourrait dire « l'equivalent de ces mecreants est... ». Mais le sens de parabole est plus fort car le verset developpe une image complete (berger, betail, cris, surdite). L'egalite serait trop plate pour cette construction elaborate.",
              axe3_sourate: "La sourate al-Baqarah utilise m-th-l dans le sens de parabole en 2:17, 2:19, 2:26 — chaque fois c'est une image developpee. Le sens d'egalite stricte est utilise en 2:137 (fa-in amanu bi-mithli ma amantum = s'ils croient en l'equivalent de ce en quoi vous croyez). Le contexte de 2:171 est clairement parabolique.",
              axe4_coherence: "Le Coran utilise mathal pour parabole et mithl pour egalite. Les deux mots viennent de la meme racine mais ont des usages distincts. En 2:171, c'est mathal (parabole) qui est utilise — pas mithl (egal). Le Coran distingue clairement les deux emplois. L'egalite reste un sens sous-jacent car toute parabole etablit une forme d'equivalence.",
              axe5_frequence: "Pour la mission du khalifa, l'egalite entre mecreants et betail serait une affirmation violente. La parabole est plus nuancee — elle compare sans identifier. Le khalifa doit utiliser la comparaison pedagogique (mathal) plutot que l'identification brutale (mithl). La parabole enseigne par l'image, l'egalite tranche par le verdict."
            }
          }
        }
      },
      // kfr pos=3
      {
        word_key: "kfr", position: 3, sense_chosen: "rejeter",
        analysis_axes: {
          sense_chosen: "rejeter",
          concept_chosen: "Rejet/Ingratitude",
          concepts: {
            "Rejet/Ingratitude": {
              status: "retenu",
              senses: ["rejeter", "mecroire", "etre ingrat", "nier", "renier"],
              proof_ctx: "Le verbe kafaru est un accompli 3MP de la racine k-f-r. Le Lane's donne : couvrir, dissimuler, etre ingrat envers un bienfait, rejeter la verite, refuser la foi. Le kufr est fondamentalement un acte de couverture — couvrir la verite, la dissimuler, refuser de la voir. L'accompli 3MP marque un etat accompli et persistant — ceux qui ont rejete et continuent de rejeter. Le kufr est le contraire du shukr (gratitude) — celui qui rejette les bienfaits de Dieu est kafir au sens etymologique d'ingrat.",
              axe1_verset: "Le verbe kafaru identifie les sujets de la parabole — ceux qui rejettent. Le champ lexical du verset (crier, entendre, appels, cris, sourd, muet, aveugle, raisonner) decrit les consequences du rejet : ceux qui rejettent la verite deviennent comme du betail sourd. Le rejet precede la surdite — c'est parce qu'ils rejettent qu'ils n'entendent plus. Le verbe kafaru est le diagnostic initial dont le reste du verset est le symptome.",
              axe2_voisins: "Le verset 2:170 montrait le contenu du rejet : « quand on leur dit suivez ce que Dieu a revele, ils disent non, nous suivons nos peres ». Le verset 2:171 donne la parabole de ce rejet — ceux qui rejettent sont comme du betail. Le verset 2:174 annoncera les consequences pour ceux qui cachent (yaktumuna) ce que Dieu a revele. Le rejet (kufr) de 2:171 est lie au fait de cacher (katm) de 2:174 — les deux racines partagent l'idee de couverture.",
              axe3_sourate: "La racine k-f-r est une des plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui rejettent, cela leur est egal que tu les avertisses ou non ». En 2:24, « si vous ne le faites pas, craignez le Feu prepare pour les mecreants ». En 2:89, « ils rejetaient ce qu'ils connaissaient pourtant ». La sourate construit progressivement le portrait du rejet — en 2:171, le rejet culmine dans la parabole du betail sourd.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. C'est une des racines les plus frequentes. Le kufr designe le rejet actif de la verite — pas l'ignorance passive mais le refus conscient. En 14:7, « si vous etes ingrats (kafartum), Mon chatiment sera severe ». Le Coran lie constamment le kufr a l'ingratitude envers les bienfaits divins. En 2:171, les mecreants sont ceux qui ont rejete malgre les signes clairs.",
              axe5_frequence: "Pour la mission du khalifa, le kufr est l'obstacle principal. Le khalifa est charge de transmettre la verite — mais certains rejettent cette verite comme le betail rejette le sens des cris du berger. La parabole montre que le rejet n'est pas un probleme de transmission mais de reception — le berger crie correctement mais le betail ne comprend pas. Le khalifa doit comprendre que le rejet n'invalide pas sa mission."
            },
            "Couverture/Dissimulation": {
              status: "probable",
              senses: ["couvrir", "dissimuler", "cacher", "recouvrir"],
              proof_ctx: "Le sens de couverture est le sens etymologique premier de k-f-r. Le Lane's donne : le kafir dans la poesie arabe est le paysan qui couvre la graine de terre. Le kufr est fondamentalement l'acte de couvrir — couvrir la verite, couvrir les bienfaits, recouvrir la lumiere. En 2:171, les mecreants sont ceux qui couvrent la verite de leur aveuglement — la parabole du betail sourd est l'image de cette couverture. Le sens est probable car il est sous-jacent au sens retenu de rejet.",
              axe1_verset: "Le verbe kafaru pourrait etre lu comme « ceux qui couvrent ». Le champ lexical du verset (sourd, muet, aveugle) decrit une couverture sensorielle — les sens sont couverts, bloques, inaccessibles. La couverture est physique dans la parabole (le betail est couvert de surdite) et spirituelle dans la realite (les mecreants couvrent la verite). Le verset serait alors : la similitude de ceux qui couvrent est comme du betail dont les sens sont couverts.",
              axe2_voisins: "Le verset 2:174 utilisera le verbe yaktumuna (ils cachent ce que Dieu a revele dans le Livre). Le fait de cacher (katm) et le fait de couvrir (kufr) sont deux aspects du meme geste — dissimuler la verite. Le passage de 2:171 a 2:174 montre que le rejet (kufr) se manifeste concretement par le fait de cacher (katm) les revelations.",
              axe3_sourate: "La sourate al-Baqarah commence en 2:6 par « ceux qui rejettent » — le kufr est le theme central de la sourate. Le sens de couverture est sous-jacent partout : les mecreants couvrent la verite de leur entalement. En 2:7, « Dieu a scelle leurs coeurs » — le sceau est une forme de couverture imposee en retour de la couverture qu'ils imposaient a la verite.",
              axe4_coherence: "La racine k-f-r dans son sens de couverture apparait explicitement en 57:20, ou le Coran utilise le mot kuffar pour designer les paysans qui couvrent la graine. Cette occurrence unique confirme que le sens etymologique de couverture est vivant dans le Coran. En 2:171, le sens de couverture est le fondement du sens de rejet — rejeter c'est couvrir la verite.",
              axe5_frequence: "Pour la mission du khalifa, la couverture est le mecanisme du rejet. Ceux qui couvrent la verite ne la voient plus — comme le betail couvert de surdite n'entend plus le sens des cris. Le khalifa doit decouvrir la verite, la mettre au jour, enlever les couvertures. Sa mission est l'inverse du kufr : reveler ce qui est couvert."
            }
          }
        }
      },
      // mvl pos=4 (2e occurrence : « comme la similitude de »)
      {
        word_key: "mvl", position: 4, sense_chosen: "similitude",
        analysis_axes: {
          sense_chosen: "similitude",
          concept_chosen: "Similitude/Comparaison",
          concepts: {
            "Similitude/Comparaison": {
              status: "retenu",
              senses: ["similitude", "parabole", "comparaison", "exemple", "proverbe"],
              proof_ctx: "Le nom mathali est le meme mot que le premier mathal mais ici au genitif (mathali) car il est precede de la preposition ka (comme). Le Lane's donne : similitude, parabole. La structure « ka-mathali » (comme la similitude de) introduit le contenu de la comparaison. Le premier mathal annoncait la parabole, le second en donne le contenu. La double occurrence de mathal dans le meme verset cree une structure en miroir : la similitude de A est comme la similitude de B.",
              axe1_verset: "Le second mathal (ka-mathali) introduit le contenu de la parabole : celui qui crie apres le betail. Le premier mathal nommait le compare (les mecreants), le second nomme le comparant (le berger criant). La structure mathal-ka-mathali est une construction comparative complete. Le champ lexical passe du domaine spirituel (rejeter, mecroire) au domaine pastoral (crier, betail, appels, cris).",
              axe2_voisins: "Les paraboles de 2:17-20 utilisaient une structure similaire : mathal-hum ka (leur similitude est comme). En 2:171, la structure est identique — le verset reprend le procede parabolique de la sourate. La double occurrence du mathal est specifique a ce verset — dans les paraboles precedentes le mot n'apparaissait qu'une fois.",
              axe3_sourate: "La racine m-th-l dans la sourate al-Baqarah apparait en 2:17, 2:19, 2:26, 2:171, 2:214, 2:261, 2:264, 2:265. Chaque parabole eclaire un aspect different de la condition humaine. En 2:171, la parabole vise specifiquement l'echec de la communication — le berger crie mais le betail ne comprend pas. Cette parabole est unique dans la sourate par son image pastorale.",
              axe4_coherence: "Le Coran utilise la double structure mathal-ka-mathali dans plusieurs versets. En 62:5, « la parabole de ceux qui ont ete charges de la Torah puis ne l'ont pas portee est comme la parabole de l'ane qui porte des livres ». La double occurrence du mathal souligne le parallelisme entre le compare et le comparant. C'est un procede rhetoriquement puissant.",
              axe5_frequence: "Pour la mission du khalifa, le second mathal donne le contenu de la lecon. Le khalifa doit non seulement annoncer la parabole mais en donner le contenu concret. La parabole vide (premier mathal sans second) serait incomplete. Le khalifa doit fournir l'image concrete qui rend visible la verite abstraite — c'est le ka-mathali qui fait le travail pedagogique."
            },
            "Égalité/Ressemblance": {
              status: "peu_probable",
              senses: ["egal", "semblable", "identique"],
              proof_ctx: "Le sens d'egalite est possible mais la structure ka-mathali (comme la similitude de) est clairement comparative. Le ka (comme) introduit une comparaison, pas une identification. L'egalite reste un sens sous-jacent mais le contexte parabolique est dominant."
            }
          }
        }
      },
      // neq pos=6
      {
        word_key: "neq", position: 6, sense_chosen: "crier",
        analysis_axes: {
          sense_chosen: "crier",
          concept_chosen: "Appel/Cri",
          concepts: {
            "Appel/Cri": {
              status: "retenu",
              senses: ["crier", "appeler", "pousser des cris", "brailler"],
              proof_ctx: "Le verbe yaneiqu est un inaccompli 3MS de la racine n-e-q. Le Lane's donne : crier apres du betail, pousser des cris vers les betes, appeler a haute voix les animaux pour les diriger. Le naeiq est specifiquement le cri du berger ou du conducteur de betail — c'est un cri brut, non articule, destine a des etres qui ne comprennent pas les mots. L'inaccompli marque une action repetee et continue — il crie sans cesse, sans obtenir de reponse comprehensible. La distinction avec un appel civilise est essentielle : le naeiq est un cri animal vers des animaux.",
              axe1_verset: "Le verbe yaneiqu est le coeur de la parabole — le berger crie apres le betail. Le champ lexical (appels, cris, sourd, muet, aveugle) developpe les consequences de ce cri inutile. Le berger crie mais le betail n'entend que des sons sans signification. Le verset oppose le cri du berger (qui a un sens, une intention) a la perception du betail (qui ne percoit que du bruit). L'echec de la communication est total — le sens se perd entre l'emetteur et le recepteur.",
              axe2_voisins: "Le verset 2:170 montrait un appel structure (« on leur dit : suivez ce que Dieu a revele ») qui echouait face au refus des mecreants. Le verset 2:171 traduit cet echec en image pastorale — l'appel structure devient un cri vers du betail. Le passage de 2:170 a 2:171 est le passage du discours articule au cri animal. L'echec de la communication est le meme mais l'image le rend plus frappant.",
              axe3_sourate: "La racine n-e-q n'apparait qu'une seule fois dans la sourate al-Baqarah, en 2:171. Cette unicite donne au mot une force particuliere — le cri du berger est un hapax dans la sourate. La sourate utilise d'autres racines pour l'appel (d-e-w, n-d-w) mais reserve n-e-q pour cette parabole unique. Le cri du berger est un type d'appel distinct de l'invocation ou de la convocation.",
              axe4_coherence: "La racine n-e-q apparait tres rarement dans le Coran — elle est quasi exclusive a ce verset et a quelques rares occurrences. Le Coran reserve ce mot pour le cri brut, non articule, destine a des etres qui ne comprennent pas. En 2:171, le naeiq est le pendant du cri du berger dans la culture arabe — un mot specifique pour un acte specifique. Le choix de ce mot rare renforce l'image : le cri n'est pas un appel noble mais un cri pastoral.",
              axe5_frequence: "Pour la mission du khalifa, le cri du berger est l'image de la predication echouee. Le khalifa crie apres ceux qui ne comprennent pas — comme le berger crie apres le betail. Mais le cri n'est pas vain en soi : le betail bouge meme s'il ne comprend pas le sens. Le khalifa doit discerner entre ceux qui comprennent le sens de son appel et ceux qui ne reagissent qu'au son. La mission ne se reduit pas au cri — elle vise la comprehension."
            }
          }
        }
      },
      // sme pos=9
      {
        word_key: "sme", position: 9, sense_chosen: "entendre",
        analysis_axes: {
          sense_chosen: "entendre",
          concept_chosen: "Audition/\u00c9coute",
          concepts: {
            "Audition/\u00c9coute": {
              status: "retenu",
              senses: ["entendre", "ecouter", "percevoir", "ouir", "obeir"],
              proof_ctx: "Le verbe yasmaeu est un inaccompli 3MS de la racine s-m-e. Le Lane's donne : entendre, ecouter, percevoir par l'ouie, obeir (car obeir c'est ecouter et suivre). Le samae est la perception auditive — la capacite de capter les sons. Ici le verbe est precede de la negation « la » et suivi de la restriction « illa » (sauf) : il n'entend que (la yasmaeu illa). Cette structure restrictive montre que l'ecoute existe mais qu'elle est limitee — le betail entend des sons mais ne saisit pas le sens. L'ecoute sans comprehension est pire que la surdite totale.",
              axe1_verset: "Le verbe yasmaeu est le pivot de la parabole — le betail entend mais ne comprend pas. Le champ lexical oppose le cri (yaneiqu) a l'ecoute (yasmaeu) : le berger crie, le betail entend, mais l'ecoute est limitee aux sons bruts (duea et nida). Le verset construit un paradoxe : le betail n'est pas sourd (il entend) mais il est comme sourd (il ne comprend rien). Le verdict final (summun, sourds) confirme que l'ecoute sans comprehension equivaut a la surdite.",
              axe2_voisins: "Le verset 2:170 montrait que les mecreants refusent d'ecouter (« quand on leur dit, ils disent non »). Le verset 2:171 traduit ce refus en image — ils entendent des sons sans saisir le sens. Le verset 2:175 donnera le verdict : ceux-la ont achete l'egarement contre la guidance. L'ecoute echouee de 2:171 est la cause de l'egarement de 2:175.",
              axe3_sourate: "La racine s-m-e apparait frequemment dans la sourate al-Baqarah. En 2:7, « Dieu a scelle leurs coeurs et leur ouie ». En 2:18, « sourds, muets, aveugles, ils ne reviennent pas ». En 2:20, « Dieu est capable de leur oter l'ouie et la vue ». L'ouie est un sens fondamental dans la sourate — sa perte est le signe du rejet de la verite. En 2:171, l'ecoute limitee est une forme de perte partielle de l'ouie.",
              axe4_coherence: "La racine s-m-e apparait environ 185 fois dans le Coran. Le Coran lie constamment l'ecoute a la comprehension et a l'obeissance. En 8:21, « ne soyez pas comme ceux qui disent nous avons entendu alors qu'ils n'entendent pas ». L'ecoute coranique n'est pas passive — entendre c'est comprendre et obeir. En 2:171, l'ecoute du betail est passive — il capte des sons sans y donner suite.",
              axe5_frequence: "Pour la mission du khalifa, l'ecoute est le premier acte de la reception. Le khalifa transmet la verite — mais si l'auditoire entend sans comprendre, la transmission echoue. Le khalifa doit distinguer entre l'ecoute passive (capter des sons) et l'ecoute active (comprendre et obeir). La parabole montre que l'ecoute passive est insuffisante — elle ne conduit pas a la raison (yaequluna). La mission du khalifa vise l'ecoute active."
            },
            "Réputation/Renommée": {
              status: "nul",
              senses: ["renommee", "reputation"],
              proof_ctx: "Le sens de renommee est un sens derive de s-m-e — la renommee c'est etre entendu. Le contexte est la perception auditive du betail, pas la celebrite. Le betail n'a pas de renommee."
            }
          }
        }
      },
      // dew pos=11
      {
        word_key: "dew", position: 11, sense_chosen: "appel",
        analysis_axes: {
          sense_chosen: "appel",
          concept_chosen: "Appel/Invocation",
          concepts: {
            "Appel/Invocation": {
              status: "retenu",
              senses: ["appel", "invocation", "priere", "supplication", "demande"],
              proof_ctx: "Le nom dueaan est un nom masculin accusatif indefini de la racine d-e-w. Le Lane's donne : appel, invocation, priere, fait d'appeler quelqu'un pour le faire venir. Le duea est l'acte d'appeler — il implique une intention (faire venir) et un destinataire (celui qu'on appelle). Ici le mot est a l'accusatif comme complement de l'exception restrictive « illa dueaan wa-nidaaan » (sauf des appels et des cris). Le duea est la forme structuree de l'appel — il a un contenu, un but. Mais pour le betail, ce contenu est invisible — il n'entend que le son de l'appel, pas son sens.",
              axe1_verset: "Le nom dueaan est le premier des deux objets de l'ecoute limitee — le betail n'entend que des appels et des cris. Le champ lexical (crier, entendre, appels, cris) montre que le verset reduit la communication a du bruit. Le duea est normalement un appel porteur de sens (invoquer Dieu, appeler a la verite) — mais dans la bouche du berger et les oreilles du betail, il perd tout son sens et devient un son brut.",
              axe2_voisins: "Le verset 2:170 montrait un appel structure : « quand on leur dit, suivez ce que Dieu a revele ». Le verset 2:171 reduit cet appel a un duea percu comme du bruit. Le passage de 2:170 a 2:171 est la degradation de l'appel — du discours articule au son brut. Le duea garde sa forme mais perd son contenu dans les oreilles du betail.",
              axe3_sourate: "La racine d-e-w est frequente dans la sourate al-Baqarah. En 2:186, « quand Mes serviteurs t'interrogent sur Moi, Je suis proche, Je reponds a l'appel (daewa) de celui qui M'invoque ». En 2:221, « ceux-la appellent au Feu ». Le duea est un acte fondamental dans la sourate — appeler Dieu (invocation) ou appeler les gens (predication). En 2:171, le duea est reduit a un son vide pour le betail.",
              axe4_coherence: "La racine d-e-w apparait environ 212 fois dans le Coran. Le duea est un des actes les plus frequents — invoquer Dieu, appeler a la verite, appeler au bien. En 40:60, « invoquez-Moi, Je vous repondrai ». Le Coran montre que le duea est efficace quand le destinataire ecoute — en 2:171, le destinataire (betail/mecreants) n'ecoute pas, et le duea reste sans effet.",
              axe5_frequence: "Pour la mission du khalifa, le duea est l'instrument de la mission. Le khalifa appelle (yadueu) les gens vers la verite. La parabole montre que l'appel peut echouer non par faute de l'appelant mais par surdite de l'appele. Le khalifa ne doit pas abandonner le duea meme si l'auditoire est sourd — le Coran lui-meme est un appel permanent a ceux qui ont des oreilles pour entendre."
            },
            "Pr\u00e9tention/Revendication": {
              status: "probable",
              senses: ["pretention", "revendication", "allegation", "reclamation"],
              proof_ctx: "Le sens de pretention est un sens secondaire de d-e-w — la daewa est la pretention, l'allegation, ce qu'on declare comme sien. Le Lane's donne aussi : revendiquer, pretendre avoir droit a quelque chose. En 2:171, le sens est possible si l'on considere que le cri du berger est aussi une revendication d'autorite sur le betail — il pretend diriger les betes par son cri. Mais le contexte est le son brut de l'appel, pas la revendication juridique.",
              axe1_verset: "Le nom dueaan pourrait etre lu comme « des pretentions ». Le verset dirait alors que le betail n'entend que des pretentions et des appels — des revendications creuses. Le champ lexical (crier, entendre, sourd, muet, aveugle) serait alors un constat de l'inutilite des pretentions face a la surdite. Mais le sens d'appel est plus naturel dans le contexte pastoral.",
              axe2_voisins: "Le verset 2:170 montrait les mecreants revendiquant la tradition de leurs peres : « nous suivons ce que nous avons trouve chez nos peres ». Le duea comme pretention serait la reponse du verset 2:171 — leurs pretentions sont comme des cris vides. Le lien entre la pretention des mecreants et le cri du berger est possible mais secondaire.",
              axe3_sourate: "La racine d-e-w dans le sens de pretention apparait en 2:111, « ce sont la leurs chimeres (amaniyyuhum), dis : donnez votre preuve ». Le fait de pretendre sans preuve est un theme de la sourate. En 2:171, le duea comme pretention ajouterait une couche ironique — les mecreants pretendent mais leur pretention est comme un cri vers du betail sourd.",
              axe4_coherence: "Le Coran utilise d-e-w dans le sens de pretention en 23:117, « celui qui invoque avec Dieu une autre divinite sans preuve — son compte est chez son Seigneur ». La daewa est ici la pretention de divinite pour autre que Dieu. En 2:171, le sens de pretention est sous-jacent au sens d'appel — tout appel est une forme de pretention a l'autorite.",
              axe5_frequence: "Pour la mission du khalifa, la pretention est le risque de la mission. Le khalifa pretend parler au nom de la verite — mais si son auditoire est sourd, sa pretention reste un cri dans le vide. La parabole met en garde contre la pretention sans resultat — le khalifa doit verifier que son appel est effectivement recu et compris."
            }
          }
        }
      },
      // ndw pos=12
      {
        word_key: "ndw", position: 12, sense_chosen: "cri",
        analysis_axes: {
          sense_chosen: "cri",
          concept_chosen: "Appel/Invitation",
          concepts: {
            "Appel/Invitation": {
              status: "retenu",
              senses: ["appel", "cri", "invitation", "convocation", "proclamation"],
              proof_ctx: "Le nom nidaaan est un nom masculin accusatif indefini de la racine n-d-w. Le Lane's donne : appel a haute voix, cri pour se faire entendre de loin, convocation, invitation. Le nida est l'appel qui porte — la voix elevee pour atteindre celui qui est loin. La racine n-d-w porte aussi le sens de mouiller (le nada est la rosee, l'humidite) mais dans l'usage courant le nida est l'appel a haute voix. Ici le mot forme un doublon avec duea — les deux sont des appels, mais le nida insiste sur la distance et le volume. Le betail n'entend que ces deux types de sons bruts.",
              axe1_verset: "Le nom nidaaan est le second objet de l'ecoute limitee, apres duea. Le doublon duea-nida cree un effet d'insistance — deux mots pour deux types d'appels qui restent tous deux incompris. Le champ lexical (crier, entendre, appels, cris) montre que le verset accumule les termes sonores pour souligner l'echec de la communication. Le nida est le cri a haute voix — plus fort que le duea, mais tout aussi inutile face au betail sourd.",
              axe2_voisins: "Le verset 2:170 contenait un « on leur dit » — un appel articule. Le verset 2:171 traduit cet appel en deux sons bruts : duea et nida. Le passage du discours articule au doublon sonore est la degradation de la communication. Le verset 2:171 montre que pour le mecreant, l'appel de la verite est reduit a du bruit — il n'entend que des appels et des cris sans contenu.",
              axe3_sourate: "La racine n-d-w apparait dans la sourate al-Baqarah en 2:171 et dans d'autres contextes d'appel. Le Coran utilise le nida pour les appels importants — l'appel a la priere, l'appel au Jugement, l'appel des prophetes. En 2:171, le nida est reduit a un cri vers du betail — une forme degradee de l'appel prophetique. La sourate montre que le meme mot (nida) peut etre un appel noble ou un cri vain selon le recepteur.",
              axe4_coherence: "La racine n-d-w apparait environ 75 fois dans le Coran. En 19:3, « quand il appela (nada) son Seigneur d'un appel secret ». En 50:41, « ecoute le jour ou le crieur (al-munadi) appellera d'un lieu proche ». Le nida est l'appel qui traverse la distance — du prophete vers Dieu, du crieur vers les morts au Jour du Jugement. En 2:171, le nida est le cri du berger vers le betail — la distance est physique mais l'incomprehension est totale.",
              axe5_frequence: "Pour la mission du khalifa, le nida est l'appel a haute voix — la proclamation publique de la verite. Le khalifa ne murmure pas, il appelle a haute voix. Mais la parabole montre que la puissance du cri ne garantit pas la comprehension. Le khalifa peut crier aussi fort qu'il veut — si l'auditoire est comme du betail, le nida reste un son vide. La mission ne depend pas du volume de l'appel mais de la qualite de l'ecoute."
            }
          }
        }
      },
      // smm pos=13
      {
        word_key: "smm", position: 13, sense_chosen: "sourd",
        analysis_axes: {
          sense_chosen: "sourd",
          concept_chosen: "Surdit\u00e9",
          concepts: {
            "Surdit\u00e9": {
              status: "retenu",
              senses: ["sourd", "surdite", "bouche", "obstrue"],
              proof_ctx: "Le nom summun est un nom pluriel masculin indefini de la racine s-m-m. Le Lane's donne : sourd, celui qui est prive de l'ouie, qui ne peut entendre. Le samam est la surdite — la perte de la capacite auditive. Le pluriel indefini (summun, sans article defini) donne une valeur qualificative absolue — ils sont sourds par essence, pas temporairement. La surdite est le premier element de la triade sourd-muet-aveugle qui constitue le verdict final du verset. La surdite physique est l'image de la surdite spirituelle — le refus d'entendre la verite.",
              axe1_verset: "Le nom summun ouvre le verdict final du verset. Le champ lexical passe de la parabole (berger, betail, cris) au diagnostic (sourd, muet, aveugle, ne raisonne pas). La surdite est le premier handicap cite — et le plus pertinent dans le contexte du verset, qui parle d'echec de l'ecoute. Le betail n'entend que des sons bruts, les mecreants sont sourds. La progression est : ecoute limitee (yasmaeu illa) → surdite totale (summun).",
              axe2_voisins: "Le verset 2:18 utilisait la meme triade « sourds, muets, aveugles — ils ne reviennent pas » pour les hypocrites. Le verset 2:171 reprend cette triade pour les mecreants. La sourate applique le meme diagnostic a deux groupes differents — les hypocrites (2:18) et les mecreants (2:171). La surdite est le trait commun des deux groupes : l'incapacite d'entendre la verite.",
              axe3_sourate: "La racine s-m-m apparait dans la sourate al-Baqarah en 2:18, 2:171. Les deux occurrences sont dans des versets de diagnostic — le verdict de la privation sensorielle. En 2:7, Dieu scelle les coeurs et l'ouie — la surdite est la consequence du scellement. La sourate montre que la surdite n'est pas un accident mais un resultat du rejet : ceux qui rejettent deviennent sourds.",
              axe4_coherence: "La racine s-m-m apparait environ 15 fois dans le Coran. La surdite est toujours metaphorique — elle designe l'incapacite de recevoir la verite. En 6:39, « ceux qui traitent de mensonge Nos signes sont sourds et muets dans les tenebres ». En 17:97, « au Jour du Jugement, nous les rassemblerons sur leurs visages, aveugles, muets et sourds ». La triade sourd-muet-aveugle est une structure coranique fixe pour decrire la privation totale.",
              axe5_frequence: "Pour la mission du khalifa, la surdite est l'obstacle le plus redoutable. Un sourd ne peut recevoir le message — le khalifa parle dans le vide. La parabole montre que la surdite spirituelle rend la mission impossible avec certains auditoires. Le khalifa doit reconnaitre les signes de la surdite et ne pas s'epuiser a crier apres des sourds — sa mission est efficace avec ceux qui ont des oreilles pour entendre."
            }
          }
        }
      },
      // bkm pos=14
      {
        word_key: "bkm", position: 14, sense_chosen: "muet",
        analysis_axes: {
          sense_chosen: "muet",
          concept_chosen: "Mutisme",
          concepts: {
            "Mutisme": {
              status: "retenu",
              senses: ["muet", "mutisme", "incapacite de parler"],
              proof_ctx: "Le nom bukmun est un nom pluriel masculin indefini de la racine b-k-m. Le Lane's donne : muet, celui qui est ne muet, qui est incapable de parler depuis la naissance. Le bukm est le mutisme congenital — pas un silence volontaire mais une incapacite naturelle. Le pluriel indefini donne la meme valeur qualificative que summun — ils sont muets par essence. Le mutisme est le deuxieme element de la triade : apres la surdite (ne pas entendre), le mutisme (ne pas pouvoir repondre). Le muet ne peut transmettre ce qu'il a compris — meme s'il comprenait, il ne pourrait le dire.",
              axe1_verset: "Le nom bukmun est le deuxieme element du verdict. Le champ lexical (sourd → muet → aveugle → ne raisonne pas) construit un crescendo de privation. La surdite prive de la reception, le mutisme prive de la transmission. Les mecreants ne peuvent ni recevoir la verite (sourds) ni la transmettre (muets). Le betail de la parabole est muet — il ne peut repondre au berger avec des mots, seulement avec des reactions instinctives.",
              axe2_voisins: "Le verset 2:18 utilisait bukmun dans la meme triade pour les hypocrites. Le verset 2:171 l'applique aux mecreants. Le mutisme est le trait commun — ceux qui rejettent la verite perdent la capacite de la formuler. Le verset 2:170 montrait que les mecreants parlent (« ils disent : nous suivons nos peres ») mais leur parole est vide — c'est un mutisme de sens, pas de son.",
              axe3_sourate: "La racine b-k-m apparait dans la sourate al-Baqarah en 2:18 et 2:171 — les deux seules occurrences dans la sourate. Le mutisme est reserve aux versets de verdict — il n'est pas un theme developpe mais un diagnostic ponctuel. La sourate montre que le mutisme est le resultat de la surdite : celui qui n'entend pas finit par ne plus pouvoir parler.",
              axe4_coherence: "La racine b-k-m apparait environ 6 fois dans le Coran — c'est une racine rare. En 6:39, « sourds et muets dans les tenebres ». En 8:22, « les pires des betes aupres de Dieu sont les sourds et les muets qui ne raisonnent pas ». Le verset 8:22 est presque un echo de 2:171 — la comparaison aux betes et la triade sourd-muet-ne raisonne pas. Le Coran reserve le mutisme pour les cas les plus graves de rejet.",
              axe5_frequence: "Pour la mission du khalifa, le mutisme est la perte de la capacite de transmettre. Le khalifa est celui qui parle au nom de la verite — le muet est l'anti-khalifa, celui qui ne peut remplir la mission. La parabole montre que le rejet conduit au mutisme : celui qui refuse d'entendre finit par ne plus pouvoir parler. La mission du khalifa est de briser le mutisme en ouvrant l'ecoute."
            }
          }
        }
      },
      // emy pos=15
      {
        word_key: "emy", position: 15, sense_chosen: "aveugle",
        analysis_axes: {
          sense_chosen: "aveugle",
          concept_chosen: "C\u00e9cit\u00e9/Aveuglement",
          concepts: {
            "C\u00e9cit\u00e9/Aveuglement": {
              status: "retenu",
              senses: ["aveugle", "cecite", "aveuglement", "prive de la vue"],
              proof_ctx: "Le nom eumyun est un nom pluriel masculin indefini de la racine e-m-y. Le Lane's donne : aveugle, celui qui est prive de la vue, celui dont les yeux ne voient pas. Le eama est la cecite — la perte de la capacite visuelle. Le pluriel indefini (eumyun, sans article) donne la meme valeur qualificative absolue que summun et bukmun. La cecite est le troisieme element de la triade : apres la surdite (ne pas entendre) et le mutisme (ne pas parler), la cecite (ne pas voir). La triade couvre les trois canaux de la communication humaine.",
              axe1_verset: "Le nom eumyun ferme la triade sensorielle du verdict. Le champ lexical (sourd → muet → aveugle → ne raisonne pas) atteint son sommet avec la cecite — la privation du sens le plus noble. Le betail de la parabole ne voit pas le sens des gestes du berger, comme les mecreants ne voient pas les signes de Dieu. Le verset passe de l'image pastorale (berger et betail) au diagnostic spirituel (sourd, muet, aveugle) sans transition — les deux se superposent.",
              axe2_voisins: "Le verset 2:18 utilisait eumyun dans la meme triade pour les hypocrites (« sourds, muets, aveugles — ils ne reviennent pas »). Le verset 2:171 modifie la conclusion : au lieu de « ils ne reviennent pas » (2:18), c'est « ils ne raisonnent pas » (2:171). Les hypocrites ne reviennent pas, les mecreants ne raisonnent pas — deux conclusions differentes pour le meme diagnostic sensoriel.",
              axe3_sourate: "La racine e-m-y apparait dans la sourate al-Baqarah en 2:18 et 2:171. Les deux occurrences sont dans des versets de verdict utilisant la triade sourd-muet-aveugle. La sourate reserve la cecite pour les diagnostics les plus severes. En 2:7, le scellement des coeurs et de l'ouie est mentionne mais pas la cecite — elle vient apres comme consequence supplementaire en 2:18 et 2:171.",
              axe4_coherence: "La racine e-m-y apparait environ 33 fois dans le Coran. En 17:72, « celui qui est aveugle dans ce monde sera aveugle dans l'autre et encore plus egare ». En 22:46, « ce ne sont pas les yeux qui sont aveugles mais les coeurs dans les poitrines ». Le Coran distingue la cecite physique de la cecite spirituelle — en 2:171, la cecite est clairement spirituelle, c'est l'incapacite de voir les signes de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la cecite est la perte de la vision. Le khalifa doit voir les signes de Dieu dans la creation et les montrer aux autres. L'aveugle est celui qui ne voit pas ces signes — meme quand ils sont devant lui. La parabole montre que la cecite spirituelle est plus grave que la cecite physique : l'aveugle physique peut encore entendre et comprendre, l'aveugle spirituel de 2:171 est aussi sourd et muet."
            },
            "Obscurit\u00e9/Confusion": {
              status: "probable",
              senses: ["obscurite", "confusion", "egarement", "opacite"],
              proof_ctx: "Le sens d'obscurite est un sens derive de e-m-y — le eama est l'etat de celui qui est dans l'obscurite, qui ne voit pas clair. Le Lane's donne aussi : etre confus, ne pas distinguer les choses. En 2:171, la cecite pourrait etre lue comme un etat de confusion — les mecreants ne sont pas simplement prives de la vue, ils sont dans l'obscurite de l'incomprehension. Le sens est probable car la cecite et l'obscurite sont liees : l'aveugle vit dans l'obscurite permanente.",
              axe1_verset: "Le nom eumyun pourrait etre lu comme « confus ». Le champ lexical (sourd, muet, confus, ne raisonne pas) serait alors un crescendo de desoordonnement mental. La confusion est l'etat de celui qui ne peut distinguer le vrai du faux — comme l'aveugle ne distingue pas la lumiere des tenebres. Le verset passe de la perception echouee (sourd) a l'expression echouee (muet) a la comprehension echouee (confus).",
              axe2_voisins: "Le verset 2:17 utilisait l'image de la lumiere perdue — « quand elle a eclaire ce qui l'entourait, Dieu a emporte leur lumiere et les a laisses dans des tenebres ». Le verset 2:171 reprend le theme de l'obscurite/confusion apres la perte de lumiere. Les mecreants de 2:171 sont dans l'obscurite sensorielle comme les hypocrites de 2:17 etaient dans les tenebres.",
              axe3_sourate: "La sourate al-Baqarah utilise l'opposition lumiere/tenebres comme theme structurant. En 2:257, « Dieu est le protecteur de ceux qui croient — Il les fait sortir des tenebres vers la lumiere ». La confusion de e-m-y est une forme de tenebres — l'aveugle est celui qui est dans les tenebres permanentes. La sourate montre que le kufr conduit aux tenebres et la foi conduit a la lumiere.",
              axe4_coherence: "Le Coran utilise e-m-y dans le sens de confusion spirituelle en 47:23, « ceux que Dieu a maudits — Il les a rendus sourds et a aveugle leurs vues ». L'aveuglement est presente comme une punition divine — la confusion est le resultat du rejet. En 2:171, la confusion est le troisieme element de la punition sensorielle.",
              axe5_frequence: "Pour la mission du khalifa, la confusion est l'obstacle le plus subtil. La surdite et le mutisme sont des privations claires — la confusion est un etat plus insidieux. Le khalifa doit dissiper la confusion avant de pouvoir transmettre la verite. La mission inclut la clarification — rendre visible ce qui est obscur, distinguer le vrai du faux."
            }
          }
        }
      },
      // eql pos=18
      {
        word_key: "eql", position: 18, sense_chosen: "raisonner",
        analysis_axes: {
          sense_chosen: "raisonner",
          concept_chosen: "Raison/Intelligence",
          concepts: {
            "Raison/Intelligence": {
              status: "retenu",
              senses: ["raisonner", "comprendre", "reflechir", "intelliger", "saisir"],
              proof_ctx: "Le verbe yaequluna est un inaccompli 3MP de la racine e-q-l. Le Lane's donne : raisonner, comprendre, lier les choses entre elles, saisir les rapports. Le eaql est la faculte qui lie — qui relie les effets aux causes, les signes a leur signification. L'inaccompli marque une action continue — ils ne raisonnent pas de facon permanente, pas juste ponctuellement. La negation « la yaequluna » (ils ne raisonnent pas) est le verdict final du verset — apres la surdite, le mutisme et la cecite, c'est la raison elle-meme qui est atteinte. Le verset montre une degradation en cascade : l'echec de l'ecoute conduit a la perte de la parole, puis de la vue, puis de la raison.",
              axe1_verset: "Le verbe yaequluna ferme le verset par le verdict ultime — ils ne raisonnent pas. Le champ lexical (sourd, muet, aveugle, raisonner) montre que la raison est le sommet de la pyramide sensorielle. La surdite prive de l'information (on n'entend pas), le mutisme prive de l'expression (on ne peut dire), la cecite prive de la perception (on ne voit pas), l'absence de raison prive de la synthese (on ne comprend pas). Le verset construit un diagnostic complet : les mecreants sont prives de tous les moyens de connaissance.",
              axe2_voisins: "Le verset 2:18 concluait par « ils ne reviennent pas » (la yarjieuna). Le verset 2:171 conclut par « ils ne raisonnent pas » (la yaequluna). Les hypocrites ne reviennent pas, les mecreants ne raisonnent pas. Le retour est un acte de volonte (revenir sur ses pas), la raison est une faculte de comprehension. Le verset 2:170 montrait que les mecreants suivent aveuglement leurs peres « meme si leurs peres ne raisonnaient rien et n'etaient pas guides ». La meme racine e-q-l apparait en 2:170 et 2:171 — le manque de raison est le fil conducteur.",
              axe3_sourate: "La racine e-q-l est tres frequente dans la sourate al-Baqarah. En 2:44, « ne raisonnez-vous pas ? ». En 2:73, « peut-etre raisonnerez-vous ». En 2:76, « ne raisonnez-vous pas ? ». La sourate utilise le eaql comme appel recurrent — la raison est la faculte que Dieu interpelle constamment. En 2:171, c'est le diagnostic : ils ne raisonnent pas — la faculte interpellee est absente.",
              axe4_coherence: "La racine e-q-l apparait environ 49 fois dans le Coran, exclusivement sous forme verbale — le Coran n'utilise jamais le nom eaql mais toujours le verbe eaqala (raisonner). En 8:22, « les pires des betes aupres de Dieu sont les sourds et les muets qui ne raisonnent pas » — un echo direct de 2:171. Le Coran lie la raison a la responsabilite — celui qui ne raisonne pas est compare aux betes car les betes n'ont pas de raison.",
              axe5_frequence: "Pour la mission du khalifa, la raison est la faculte fondamentale. Le khalifa est charge de guider par la raison — pas par la contrainte ni par l'emotion seule. La parabole montre que sans raison, les sens sont inutiles : on peut entendre, parler et voir sans comprendre. La mission du khalifa vise a eveiller la raison — la faculte qui lie les signes a leur signification, les causes aux effets, les actes a leurs consequences."
            },
            "Lien/Entrave": {
              status: "probable",
              senses: ["lien", "entrave", "corde", "attacher", "retenir"],
              proof_ctx: "Le sens de lien/entrave est le sens etymologique de e-q-l. Le Lane's donne : le eiqal est la corde avec laquelle on attache les pattes du chameau pour l'empecher de bouger. Le eaql (raison) tire son nom de cette image : la raison est ce qui attache, ce qui retient, ce qui empeche de divaguer. En 2:171, le sens d'entrave est probable comme sous-couche du sens de raison — ne pas raisonner c'est etre detache, libre de divaguer sans rien qui retienne, comme un chameau sans entrave.",
              axe1_verset: "Le verbe yaequluna pourrait etre lu comme « ils ne sont pas entraves ». Le verset dirait alors que les mecreants sont comme du betail sans entrave — ils divaguent librement, sans rien qui les retienne sur le bon chemin. Le champ lexical pastoral du verset (berger, betail, cris) serait coherent avec l'image de l'entrave — le betail sans entrave echappe au berger.",
              axe2_voisins: "Le verset 2:170 montrait les mecreants libres de suivre leurs peres sans questionnement — une liberte sans entrave rationnelle. Le verset 2:171 confirme cette absence d'entrave : ils ne sont retenus par rien, ni par la raison ni par les sens. La liberte sans entrave est la pire des servitudes — celle de l'animal qui suit ses instincts.",
              axe3_sourate: "La sourate al-Baqarah utilise des images d'attachement et de liberation. En 2:286, « ne nous charge pas de ce que nous ne pouvons supporter » — la charge est une forme d'entrave. Le eaql comme entrave est l'image positive de la charge — la raison retient l'homme sur le bon chemin. En 2:171, l'absence d'entrave est negative — sans raison, on divague.",
              axe4_coherence: "Le Coran utilise la racine e-q-l exclusivement comme verbe (raisonner), jamais comme nom (entrave). Mais le sens etymologique d'entrave est vivant dans la langue arabe et dans la tradition exegetique. Le lien entre raisonner et entraver est fondamental : raisonner c'est se retenir, se controler, s'empecher de divaguer. En 2:171, les mecreants qui ne raisonnent pas sont comme des betes sans entrave.",
              axe5_frequence: "Pour la mission du khalifa, l'entrave est l'outil de la discipline. Le khalifa doit poser des limites — la raison est l'entrave interieure qui empeche l'homme de divaguer. Sans cette entrave, l'homme est comme le betail de la parabole : il reagit aux cris mais ne comprend pas le sens. La mission du khalifa est de poser les entraves de la raison — les limites qui permettent la vie en societe."
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

  const verseIds = [178];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 171 ===\n');
  await processVerse(171);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V171 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
