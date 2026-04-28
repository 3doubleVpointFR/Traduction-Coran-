const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 167
// verse_id=174, analysis_id=534
// "Et ceux qui suivaient diront: 'Si seulement nous avions
//  un retour, nous nous desavouerions d'eux comme ils se
//  sont desavoues de nous.' Ainsi Dieu leur montre leurs
//  oeuvres comme des regrets. Et ils ne sortiront pas du feu."
// =====================================================

const verseData = {
  167: {
    verse_id: 174,
    analysis_id: 534,
    translation_arab: "Et ceux qui suivaient dirent : si seulement nous avions un retour, nous nous desavouerions d'eux comme ils se sont desavoues de nous. Ainsi Dieu leur montre leurs oeuvres comme des regrets pour eux. Et ils ne sont pas sortants du feu.",
    full_translation: "Et ceux qui suivaient dirent : 'Si seulement nous pouvions retourner, nous nous desavouerions d'eux comme ils se sont desavoues de nous.' Ainsi Allah leur montre leurs oeuvres [comme source] de regrets pour eux. Et ils ne sortiront pas du Feu.",
    translation_explanation: `§DEMARCHE§
Le verset met en scene le regret des suiveurs au Jour du Jugement. Le verbe **qala** est un accompli 3MS de la racine q-w-l. Le Lane's donne : dire, enoncer, prononcer. L'accompli indique que cette parole a eu lieu — c'est un recit de ce qui sera dit au Jour du Jugement, presente comme un fait acheve. Le sujet est « ceux qui suivaient » (alladhina ittaba'u) — les suiveurs, ceux qui ont imite les meneurs dans l'egarement. Le verbe **ittaba'u** est un accompli 3MP de la forme VIII de la racine t-b-'. Le Lane's donne : suivre, marcher derriere, imiter. La forme VIII (ifta'ala) marque l'effort — ils se sont efforces de suivre, ils ont choisi de suivre. L'accompli indique que le suivisme est acheve — ils ont suivi dans le passe et voient maintenant les consequences. Le nom **karratan** est un nom feminin singulier indefini accusatif de la racine k-r-r. Le Lane's donne : retour, fois, repetition. Le mot designe ici le souhait d'un retour a la vie — une seconde chance. L'indefini (sans article) et l'accusatif marquent un souhait conditionnel : « si nous avions un retour ». Ce retour est impossible — c'est un souhait vain. Le verbe **natabarraʾa** est un inaccompli 1PL de la forme V de la racine b-r-a. Le Lane's donne : se desavouer, se declarer innocent, se dissocier. La forme V (tafa''ala) marque la reflexivite — ils se desavoueraient eux-memes de leurs meneurs. L'inaccompli dans une conditionnelle irreelle (law anna) exprime un souhait impossible. Le verbe **tabarraʾu** est un accompli 3MP de la forme V de la meme racine b-r-a. Le Lane's donne le meme sens : se desavouer, se dissocier. L'accompli marque que le desaveu des meneurs envers les suiveurs est un fait acheve — les meneurs se sont deja desavoues de leurs suiveurs. Le verset montre un double desaveu : les suiveurs voudraient se desavouer des meneurs, comme les meneurs se sont desavoues d'eux. Le verbe **yurihim** est un inaccompli 3MS de la forme IV de la racine r-a-y. Le Lane's donne : montrer, faire voir. La forme IV (af'ala) est causative — Dieu fait voir, Il montre. L'inaccompli indique une action en cours ou habituelle — Dieu leur montre continuellement. Le nom **Allahu** est le nom propre de la divinite au nominatif. C'est le sujet du verbe yurihim — c'est Dieu qui montre. Le nom **aʿmalahum** est un pluriel masculin de la racine '-m-l avec pronom suffixe 3MP. Le Lane's donne : oeuvres, actes, travaux. Leurs oeuvres sont ce qu'ils ont fait dans la vie — les actions qu'ils ont accomplies en suivant les meneurs. Le nom **hasaratin** est un pluriel feminin de la racine h-s-r au genitif indefini. Le Lane's donne : regret, remords, desolation. Les regrets sont l'etat interieur de douleur face a l'irreversible. Leurs oeuvres deviennent des regrets — ce qu'ils croyaient benefique se revele etre source de desolation. Le participe actif **bikharijiyna** est un participe actif pluriel masculin de la racine kh-r-j avec la preposition bi et la negation ma. Le Lane's donne : sortir, quitter. Le participe actif avec la negation (ma hum bikharijiyna) indique un etat permanent — ils ne sont pas dans l'etat de sortir. C'est plus fort qu'un simple verbe negatif : ils sont dans un etat permanent de non-sortie. Le nom **an-nari** est un nom feminin singulier defini genitif de la racine n-w-r. Le Lane's donne : feu, lumiere (mais ici le sens de feu). L'article defini (an-) marque que c'est LE feu connu — le feu de l'au-dela. Le feu est la destination finale des suiveurs qui ne peuvent ni revenir ni sortir.

§JUSTIFICATION§
**dirent** — Le sens retenu est « dire ». Le verbe qala decrit l'enonciation de la parole des suiveurs. L'alternative « opinion » est ecartee car le contexte est un discours rapporte, pas une pensee interieure.

**suivaient** — Le sens retenu est « suivre ». Le verbe ittaba'u decrit l'action de ceux qui ont suivi les meneurs dans l'egarement. L'alternative « imiter » est ecartee car « suivre » est plus courant et rend mieux l'idee de marcher derriere un guide.

**retour** — Le sens retenu est « retour/repetition ». Le mot karratan designe le souhait d'un retour a la vie. L'alternative « detester » est ecartee car le mot est un nom feminin indefini, pas un verbe d'aversion.

**nous desavouerions** — Le sens retenu est « se desavouer ». Le verbe natabarraʾa decrit le souhait des suiveurs de se dissocier de leurs meneurs. L'alternative « creer » est ecartee car le verbe est a la forme V (reflexive), pas a la forme I, et le contexte est la dissociation morale, pas la creation.

**se sont desavoues** — Le sens retenu est « se desavouer ». Le verbe tabarraʾu decrit le desaveu acheve des meneurs envers les suiveurs. Meme racine que le mot precedent (b-r-a) — le verset joue sur la repetition pour montrer la reciprocite du desaveu.

**montre** — Le sens retenu est « montrer/faire voir ». Le verbe yurihim est a la forme IV causative — Dieu fait voir. L'alternative « opinion » est ecartee car le verbe est a la forme IV, pas a la forme I qui porterait le sens de « voir/avoir un avis ».

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite unique, sujet du verbe yurihim.

**leurs oeuvres** — Le sens retenu est « oeuvre/acte ». Le mot aʿmalahum designe les actions accomplies par les suiveurs. L'alternative « gouverneur » est ecartee car le contexte est les actes passes, pas une fonction administrative.

**regrets** — Le sens retenu est « regret/remords ». Le mot hasaratin designe l'etat de desolation face a l'irreversible. L'alternative « decouvrir » est ecartee car le mot est un nom pluriel au genitif, pas un verbe.

**sortants** — Le sens retenu est « sortir ». Le participe bikharijiyna decrit l'etat de non-sortie du feu. L'alternative « tribut » est ecartee car le contexte est le mouvement de sortie, pas un paiement.

**le feu** — Le sens retenu est « feu ». Le mot an-nari designe le feu de l'au-dela. L'alternative « lumiere » est ecartee car la racine n-w-r porte ici le sens de feu dans le contexte du chatiment, pas de lumiere dans le sens de guidance.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. La principale difference est sur le mot karratan : Hamidullah traduit « si seulement nous pouvions retourner » tandis que nous donnons « un retour ». Le mot karra est un nom, pas un verbe — « un retour » est plus fidele a la morphologie. Une autre difference est sur « ma hum bikharijiyna min an-nar » : certains traduisent « ils ne sortiront jamais du feu » avec un futur definitif, mais le participe actif avec la negation marque un etat permanent present — « ils ne sont pas sortants du feu » est plus litteral, meme si « ils ne sortiront pas du feu » est plus naturel en francais.`,
    segments: [
      { fr: "et dit", pos: "verbe", phon: "wa-qala", arabic: "\u0648\u064e\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 2 },
      { fr: "", phon: "", arabic: "", is_particle: true, position: 3 },
      { fr: "suivaient", pos: "verbe", phon: "ittaba'u", arabic: "\u0671\u062a\u0651\u064e\u0628\u064e\u0639\u064f\u0648\u0627\u06df", word_key: "tba", is_particle: false, sense_retenu: "suivre", position: 4 },
      { fr: "si seulement", phon: "law", arabic: "\u0644\u064e\u0648\u0652", is_particle: true, position: 5 },
      { fr: "que pour nous", phon: "anna", arabic: "\u0623\u064e\u0646\u0651\u064e", is_particle: true, position: 6 },
      { fr: "un retour", pos: "nom", phon: "karratan", arabic: "\u0643\u064e\u0631\u0651\u064e\u0629\u064b", word_key: "krr", is_particle: false, sense_retenu: "retour", position: 7 },
      { fr: "nous nous desavouerions", pos: "verbe", phon: "fa-natabarraʾa", arabic: "\u0641\u064e\u0646\u064e\u062a\u064e\u0628\u064e\u0631\u0651\u064e\u0623\u064e", word_key: "bra", is_particle: false, sense_retenu: "se desavouer", position: 8 },
      { fr: "d'eux comme", phon: "minhum kama", arabic: "\u0645\u0650\u0646\u0652\u0647\u064f\u0645\u0652 \u0643\u064e\u0645\u064e\u0627", is_particle: true, position: 9 },
      { fr: "", phon: "", arabic: "", is_particle: true, position: 10 },
      { fr: "se sont desavoues", pos: "verbe", phon: "tabarraʾu", arabic: "\u062a\u064e\u0628\u064e\u0631\u0651\u064e\u0621\u064f\u0648\u0627\u06df", word_key: "bra", is_particle: false, sense_retenu: "se desavouer", position: 11 },
      { fr: "ainsi", phon: "kadhalika", arabic: "\u0643\u064e\u0630\u064e\u0670\u0644\u0650\u0643\u064e", is_particle: true, position: 12 },
      { fr: "leur montre", pos: "verbe", phon: "yurihim", arabic: "\u064a\u064f\u0631\u0650\u064a\u0647\u0650\u0645\u064f", word_key: "ray", is_particle: false, sense_retenu: "montrer", position: 13 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 14 },
      { fr: "leurs oeuvres", pos: "nom", phon: "aʿmalahum", arabic: "\u0623\u064e\u0639\u0652\u0645\u064e\u0640\u0644\u064e\u0647\u064f\u0645\u0652", word_key: "eml", is_particle: false, sense_retenu: "oeuvre", position: 15 },
      { fr: "regrets", pos: "nom", phon: "hasaratin", arabic: "\u062d\u064e\u0633\u064e\u0631\u064e\u0670\u062a\u064d", word_key: "hsr", is_particle: false, sense_retenu: "regret", position: 16 },
      { fr: "sur eux", phon: "'alayhim", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652", is_particle: true, position: 17 },
      { fr: "et ils ne sont pas", phon: "wa-ma hum", arabic: "\u0648\u064e\u0645\u064e\u0627 \u0647\u064f\u0645", is_particle: true, position: 18 },
      { fr: "sortants", pos: "nom", phon: "bikharijiyna", arabic: "\u0628\u0650\u062e\u064e\u0640\u0631\u0650\u062c\u0650\u064a\u0646\u064e", word_key: "khrj", is_particle: false, sense_retenu: "sortir", position: 19 },
      { fr: "du feu", pos: "nom", phon: "min an-nari", arabic: "\u0645\u0650\u0646\u064e \u0671\u0644\u0646\u0651\u064e\u0627\u0631\u0650", word_key: "nwr", is_particle: false, sense_retenu: "feu", position: 20 }
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
              proof_ctx: null,
              axe1_verset: "Le verbe qala ouvre le verset en introduisant le discours rapporte des suiveurs. Le sujet est « ceux qui suivaient » (alladhina ittaba'u) — les suiveurs parlent au Jour du Jugement. Le champ lexical du verset tourne autour du regret (retour, se desavouer, regrets) et du chatiment (feu). La parole est le vehicule de ce regret — les suiveurs expriment verbalement ce qu'ils auraient voulu faire. C'est une parole de souhait impossible, pas une parole performative.",
              axe2_voisins: "Le verset 166 montrait les meneurs qui se desavouent de leurs suiveurs et qui voient le chatiment. Le verset 167 donne la replique des suiveurs — ils repondent par un souhait de retour et de desaveu reciproque. Le verset 168 changera de sujet avec un appel aux gens. La parole des suiveurs est encadree par le desaveu des meneurs (v166) et l'appel divin (v168).",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah. Elle structure les dialogues entre Dieu et les anges (2:30), entre Dieu et les humains (2:35), entre les croyants et les dissimulateurs (2:14). Le verset 167 utilise qala pour un dialogue eschatologique — les suiveurs parlent au Jour du Jugement. La sourate montre que la parole a des consequences — ce qu'on dit dans la vie et ce qu'on dira au Jugement.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. Le schema « wa-qala alladhina » (et dirent ceux qui) est un procede narratif recurrent pour introduire les reactions de differents groupes. En 14:21, les faibles disent aux orgueilleux : « nous etions vos suiveurs ». Le Coran met en scene ces dialogues eschatologiques pour montrer l'inutilite des regrets tardifs.",
              axe5_frequence: "Pour la mission du khalifa, la parole est un outil de la mission mais aussi un revelateur de la verite. Au Jour du Jugement, la parole ne sert plus a convaincre ou a tromper — elle ne peut qu'exprimer le regret. Le khalifa doit parler maintenant avec sincerite, car au Jour du Jugement la parole ne changera plus rien."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: null
            },
            "Sens isol\u00e9/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: null
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: null
            }
          }
        }
      },
      // tba pos=4
      {
        word_key: "tba", position: 4, sense_chosen: "suivre",
        analysis_axes: {
          sense_chosen: "suivre",
          concept_chosen: "Suivisme/Ob\u00e9issance",
          concepts: {
            "Suivisme/Ob\u00e9issance": {
              status: "retenu",
              senses: ["suivre", "imiter", "disciple"],
              proof_ctx: null,
              axe1_verset: "Le verbe ittaba'u qualifie les suiveurs — « alladhina ittaba'u » (ceux qui suivaient). La forme VIII (ifta'ala) marque un effort delibere — ils ont choisi de suivre les meneurs. Le champ lexical du verset (dire, retour, se desavouer, regrets, feu) montre que le suivisme mene au regret et au chatiment. Les suiveurs sont ceux qui n'ont pas pense par eux-memes — ils ont suivi les meneurs dans l'egarement et paient maintenant le prix.",
              axe2_voisins: "Le verset 166 montrait les meneurs qui « furent suivis » (uttubi'u, passif) se desavouer de « ceux qui suivaient » (ittaba'u, actif). Le verset 167 reprend le mot ittaba'u pour designer les memes suiveurs qui maintenant expriment leur regret. La symetrie entre les deux versets montre que le suivisme a deux faces : les meneurs se debarrassent, les suiveurs regrettent.",
              axe3_sourate: "La racine t-b-' apparait dans la sourate al-Baqarah dans des contextes de suivisme moral. En 2:38, « celui qui suit Ma guidance ». En 2:145, « si tu suivais leurs passions ». En 2:170, « nous suivons ce sur quoi nous avons trouve nos peres ». La sourate oppose le bon suivisme (suivre la guidance divine) et le mauvais suivisme (suivre les meneurs egares ou les traditions aveugles).",
              axe4_coherence: "La racine t-b-' apparait environ 175 fois dans le Coran. Le theme des suiveurs qui regrettent au Jour du Jugement est recurrent. En 14:21, les faibles disent aux orgueilleux : « nous etions vos suiveurs, pouvez-vous nous epargner une part du chatiment de Dieu ? ». En 26:102, « si nous avions un retour, nous serions des croyants ». Le Coran montre que le suivisme aveugle mene au regret eternel.",
              axe5_frequence: "Pour la mission du khalifa, le suivisme aveugle est l'antithese de la mission. Le khalifa doit suivre la guidance divine, pas les meneurs egares. Suivre sans reflechir c'est abdiquer sa responsabilite de khalifa. Le verset montre que les suiveurs sont aussi responsables que les meneurs — suivre n'excuse pas."
            }
          }
        }
      },
      // krr pos=7
      {
        word_key: "krr", position: 7, sense_chosen: "retour",
        analysis_axes: {
          sense_chosen: "retour",
          concept_chosen: "R\u00e9p\u00e9tition/Retour",
          concepts: {
            "R\u00e9p\u00e9tition/Retour": {
              status: "retenu",
              senses: ["repeter", "revenir"],
              proof_ctx: null,
              axe1_verset: "Le nom karratan exprime le souhait central des suiveurs — un retour a la vie pour corriger leurs erreurs. Le mot est indefini et accusatif, marquant un souhait conditionnel (law anna lana karratan — si nous avions un retour). Le champ lexical du verset (suivre, se desavouer, regrets, feu) montre que ce retour est impossible et que le souhait est vain. Le retour souhaite est une seconde chance que le Jour du Jugement ne permet pas.",
              axe2_voisins: "Le verset 166 montrait la rupture des liens entre meneurs et suiveurs. Le verset 167 montre le souhait des suiveurs de revenir en arriere pour defaire ces liens. Le verset 168 changera de sujet — l'appel divin s'adresse aux vivants, pas aux morts. Le retour impossible des suiveurs contraste avec l'appel aux vivants qui ont encore le temps.",
              axe3_sourate: "La racine k-r-r apparait rarement dans la sourate al-Baqarah. Le souhait d'un retour est un theme eschatologique que la sourate developpe dans ce passage (v166-167). La sourate insiste par ailleurs sur le fait que les occasions de repentir sont dans la vie presente — en 2:54, la repentance est offerte maintenant. Le verset 167 montre ce qui se passe quand on a laisse passer toutes les occasions.",
              axe4_coherence: "Le souhait du retour (karra) apparait en 2:167 et en 39:58 (« si seulement j'avais un retour »). En 6:27, « si seulement nous pouvions etre renvoyes ». Le Coran montre que le souhait de retour est universel chez les damnes mais toujours refuse. La karra est le fantasme de l'irreversible — le retour n'est jamais accorde.",
              axe5_frequence: "Pour la mission du khalifa, le retour impossible est un avertissement. Le khalifa doit agir maintenant — il n'y aura pas de seconde chance au Jour du Jugement. Le souhait de karra montre que l'occasion presente est precieuse et irreversible. Chaque moment de la vie est une occasion que le khalifa ne doit pas laisser passer."
            },
            "Aversion/R\u00e9pugnance": {
              status: "nul",
              senses: ["detester", "trouver repugnant"],
              proof_ctx: null
            },
            "Noblesse/G\u00e9n\u00e9rosit\u00e9": {
              status: "nul",
              senses: ["etre noble", "etre genereux"],
              proof_ctx: null
            }
          }
        }
      },
      // bra pos=8 (1ere occurrence — natabarraʾa)
      {
        word_key: "bra", position: 8, sense_chosen: "se desavouer",
        analysis_axes: {
          sense_chosen: "se desavouer",
          concept_chosen: "Innocence/Puret\u00e9",
          concepts: {
            "Innocence/Puret\u00e9": {
              status: "retenu",
              senses: ["etre innocent", "se desavouer"],
              proof_ctx: null,
              axe1_verset: "Le verbe natabarraʾa est un inaccompli 1PL de la forme V de la racine b-r-a. Il exprime le souhait des suiveurs de se dissocier de leurs meneurs. Le champ lexical du verset (suivre, retour, regrets) montre que le desaveu est un acte de dissociation morale — les suiveurs voudraient se declarer innocents de leur lien avec les meneurs. La forme V (reflexive) souligne que c'est un acte qui touche le sujet lui-meme : se desavouer soi-meme de ce qu'on a fait.",
              axe2_voisins: "Le verset 166 montrait les meneurs qui « se desavouent de ceux qui les suivaient » (tabarraʾa alladhina uttubi'u). Le verset 167 repond avec le souhait des suiveurs de « se desavouer d'eux » (natabarraʾa minhum). Le desaveu est reciproque mais asymetrique : les meneurs se desavouent effectivement, les suiveurs ne peuvent que souhaiter le faire. La reciprocite du desaveu montre la dissolution totale des liens.",
              axe3_sourate: "La racine b-r-a dans la sourate al-Baqarah apparait dans des contextes de creation (2:54, votre Createur) et de desaveu (2:166-167). Le double sens de la racine — creer et se desavouer — montre que la creation implique une responsabilite : Dieu cree, l'humain doit assumer ses choix. Le desaveu au Jour du Jugement montre l'echec de cette responsabilite.",
              axe4_coherence: "La forme V de b-r-a (tabarruʾ, desaveu) apparait dans le Coran dans les scenes du Jugement. En 59:16, le diable dit : « je me desavoue de toi ». Le schema est recurrent : au Jour du Jugement, chacun se desavoue de l'autre. Le Coran montre que les alliances d'egarement se dissolvent quand les consequences arrivent.",
              axe5_frequence: "Pour la mission du khalifa, le desaveu au Jour du Jugement est un avertissement sur les alliances. Le khalifa ne doit pas suivre des meneurs dont il devra se desavouer plus tard. Les liens de la mission doivent etre fondes sur la verite, pas sur le conformisme. Le desaveu futur revele la fragilite des liens fondes sur l'egarement."
            },
            "Cr\u00e9ation/Origination": {
              status: "nul",
              senses: ["creer", "faconner"],
              proof_ctx: null
            }
          }
        }
      },
      // bra pos=11 (2eme occurrence — tabarraʾu)
      {
        word_key: "bra", position: 11, sense_chosen: "se desavouer",
        analysis_axes: {
          sense_chosen: "se desavouer",
          concept_chosen: "Innocence/Puret\u00e9",
          concepts: {
            "Innocence/Puret\u00e9": {
              status: "retenu",
              senses: ["etre innocent", "se desavouer"],
              proof_ctx: null,
              axe1_verset: "Le verbe tabarraʾu est un accompli 3MP de la forme V de la racine b-r-a. Il decrit le desaveu acheve des meneurs envers les suiveurs — « comme ils se sont desavoues de nous » (kama tabarraʾu minna). L'accompli marque que ce desaveu est un fait accompli — les meneurs ont deja rompu les liens. Le verset construit un parallele entre le souhait des suiveurs (natabarraʾa, inaccompli = souhait) et le fait des meneurs (tabarraʾu, accompli = realite).",
              axe2_voisins: "Le verset 166 avait pose le desaveu des meneurs comme fait initial. Le verset 167 le reprend en echo dans la bouche des suiveurs — « comme ils se sont desavoues de nous ». Le kamā (comme) cree un lien de comparaison : les suiveurs voudraient faire exactement ce que les meneurs ont fait. La reciprocite impossible montre l'impasse du Jugement.",
              axe3_sourate: "Cette deuxieme occurrence de b-r-a dans le meme verset intensifie le theme du desaveu. La sourate al-Baqarah montre que les liens humains sont mis a l'epreuve : en 2:124, Ibrahim est mis a l'epreuve. En 2:166-167, les liens d'egarement echouent a l'epreuve du Jugement. La sourate oppose les liens solides (fondes sur la foi) et les liens fragiles (fondes sur le suivisme).",
              axe4_coherence: "Le double usage de tabarruʾ dans un meme verset est un procede coranique de miroir. En 60:4, Ibrahim dit a son peuple : « nous nous desavouons de vous ». Le desaveu reciproque est un theme majeur du Coran — chaque partie rejette l'autre quand les consequences arrivent. Le Coran avertit que seul le lien avec Dieu survit au Jugement.",
              axe5_frequence: "Pour la mission du khalifa, le double desaveu montre que les alliances d'egarement sont ephemeres. Le khalifa doit fonder ses liens sur la mission divine, pas sur le conformisme social. Au Jour du Jugement, seuls les liens de verite subsistent — les liens de convenance se dissolvent."
            }
          }
        }
      },
      // ray pos=13
      {
        word_key: "ray", position: 13, sense_chosen: "montrer",
        analysis_axes: {
          sense_chosen: "montrer",
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              senses: ["voir", "percevoir"],
              proof_ctx: null,
              axe1_verset: "Le verbe yurihim est un inaccompli 3MS de la forme IV de la racine r-a-y. La forme IV est causative — Dieu fait voir, Il montre. L'objet montre est « leurs oeuvres comme des regrets » (aʿmalahum hasaratin). Le champ lexical du verset passe du discours des suiveurs (parole, souhait) a l'action divine (montrer). Dieu montre — Il ne punit pas seulement, Il fait voir la realite des oeuvres. La vision est un chatiment en soi : voir ses oeuvres devenir des regrets est une souffrance morale.",
              axe2_voisins: "Le verset 166 montrait les meneurs qui « voient le chatiment » (raʾaw al-'adhab). Le verset 167 montre Dieu qui « leur montre leurs oeuvres comme des regrets ». La progression va de la vision passive (voir le chatiment) a la vision causee par Dieu (Dieu leur montre). Dieu est l'agent qui revele la realite — Il ne laisse pas dans l'ignorance.",
              axe3_sourate: "La racine r-a-y apparait frequemment dans la sourate al-Baqarah. En 2:55, « nous ne te croirons pas tant que nous n'aurons pas vu Dieu ». En 2:165, « quand ils verront le chatiment ». La sourate oppose la vision demandee (voir Dieu, voir des signes) et la vision imposee (voir le chatiment, voir les regrets). Le verset 167 s'inscrit dans cette dialectique de la vision.",
              axe4_coherence: "La forme IV de r-a-y (araʾa, montrer) apparait environ 40 fois dans le Coran. En 40:46, « le feu auquel ils sont exposes matin et soir ». Dieu montre les consequences — la vision est un outil de verite. Le Coran utilise la vision divine pour reveler ce que les humains refusaient de voir dans la vie.",
              axe5_frequence: "Pour la mission du khalifa, la vision divine est un rappel que rien n'echappe a Dieu. Le khalifa doit voir la realite de ses oeuvres maintenant, avant que Dieu ne les lui montre comme des regrets. La mission exige une vision lucide de ses propres actes — ne pas attendre le Jugement pour voir."
            },
            "Jugement/Avis": {
              status: "nul",
              senses: ["opinion", "avis"],
              proof_ctx: null
            },
            "Apparition": {
              status: "nul",
              senses: ["apparaitre"],
              proof_ctx: null
            }
          }
        }
      },
      // alh pos=14
      {
        word_key: "alh", position: 14, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinit\u00e9",
          concepts: {
            "Divinit\u00e9": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: null,
              axe1_verset: "Le nom Allahu est au nominatif — c'est le sujet du verbe yurihim (leur montre). Dieu est l'agent qui revele la verite des oeuvres. Le champ lexical du verset oppose le discours humain (les suiveurs parlent, souhaitent) et l'action divine (Dieu montre). Les suiveurs parlent en vain, Dieu agit avec efficacite. Le verset passe du discours impuissant des humains a l'action souveraine de Dieu.",
              axe2_voisins: "Le verset 165 parlait de l'amour excessif pour les rivaux de Dieu. Le verset 166 montrait la rupture des liens. Le verset 167 montre Dieu qui intervient en revelant la realite. La sequence v165-167 montre la progression : amour mal place → rupture des liens → revelation divine de la verite. Dieu est le revelateur final de la realite.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Dans ce passage (v165-167), Dieu passe du role d'objet d'amour mal partage (v165) au role d'agent qui revele et chatit (v167). La sourate montre que Dieu est a la fois l'objet de la devotion et le juge des oeuvres — rejeter Dieu comme objet de devotion mene a subir Son jugement.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:167, Dieu est l'agent actif qui montre les oeuvres comme des regrets. Le Coran associe systematiquement la revelation de la verite a Dieu — c'est Lui qui leve le voile sur les oeuvres au Jour du Jugement. Aucun mensonge ne subsiste devant la vision divine.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant et le juge de la mission. Le khalifa sait que Dieu lui montrera ses oeuvres — bonnes ou mauvaises. Cette conscience doit guider chaque acte de la mission. Travailler en sachant que Dieu montrera tout est le fondement de la responsabilite du khalifa."
            },
            "Adoration/D\u00e9votion": {
              status: "nul",
              senses: ["adorer", "faire adorer", "se devouer au culte", "diviniser"],
              proof_ctx: null
            },
            "D\u00e9tresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: null
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "proteger", "chercher refuge"],
              proof_ctx: null
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: null
            }
          }
        }
      },
      // eml pos=15
      {
        word_key: "eml", position: 15, sense_chosen: "oeuvre",
        analysis_axes: {
          sense_chosen: "oeuvre",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: null,
              axe1_verset: "Le nom aʿmalahum (leurs oeuvres) est l'objet que Dieu montre aux suiveurs. Le pronom suffixe 3MP (hum) rattache les oeuvres aux suiveurs — ce sont LEURS oeuvres, pas celles d'autrui. Le champ lexical du verset (regrets, feu) montre que ces oeuvres se revelent mauvaises. Les oeuvres accomplies dans le suivisme se transforment en regrets — ce qu'ils croyaient bon se revele mauvais quand Dieu montre la realite.",
              axe2_voisins: "Le verset 165 parlait de l'amour excessif — un sentiment. Le verset 167 parle des oeuvres — des actes concrets. La progression va du sentiment (amour mal place) a l'acte (oeuvres accomplies dans l'egarement). Les oeuvres sont la materialisation concrete du suivisme — ce ne sont pas des pensees mais des actes qui ont des consequences.",
              axe3_sourate: "La racine '-m-l est frequente dans la sourate al-Baqarah. En 2:62, « ceux qui ont cru et fait le bien » (ʿamilu as-salihati). En 2:134, « a vous ce que vous avez oeuvre et a moi ce que j'ai oeuvre ». La sourate distingue les bonnes oeuvres (as-salihati) des oeuvres vaines. Le verset 167 montre que les oeuvres des suiveurs sont dans la seconde categorie.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. Le theme des oeuvres qui se transforment en regrets est central. En 18:103-104, « ceux dont l'effort s'est egare dans la vie d'ici-bas alors qu'ils pensaient bien faire ». Le Coran montre que l'intention ne suffit pas — les oeuvres fondees sur l'egarement sont vaines meme si l'auteur croit bien faire.",
              axe5_frequence: "Pour la mission du khalifa, les oeuvres sont le contenu concret de la mission. Le khalifa est juge sur ses actes, pas sur ses intentions. Les oeuvres faites dans le suivisme aveugle ne comptent pas comme bonnes oeuvres. Le khalifa doit s'assurer que ses oeuvres sont fondees sur la guidance divine, pas sur le conformisme."
            },
            "Sens isol\u00e9/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: null
            }
          }
        }
      },
      // hsr pos=16
      {
        word_key: "hsr", position: 16, sense_chosen: "regret",
        analysis_axes: {
          sense_chosen: "regret",
          concept_chosen: "Regret/D\u00e9solation",
          concepts: {
            "Regret/D\u00e9solation": {
              status: "retenu",
              senses: ["regretter", "etre desole"],
              proof_ctx: null,
              axe1_verset: "Le nom hasaratin est un pluriel feminin genitif indefini de la racine h-s-r. Les regrets sont l'etat final des suiveurs — Dieu leur montre leurs oeuvres COMME des regrets (hasaratin). Le pluriel indefini marque l'intensite — ce ne sont pas un seul regret mais des regrets multiples. Le champ lexical du verset culmine avec ce mot : le suivisme (ittaba'u) produit le souhait de retour (karra) qui est impossible, ce qui genere des regrets (hasarat) faces aux oeuvres revelees.",
              axe2_voisins: "Le verset 166 montrait la rupture des liens — un debut de consequences. Le verset 167 ajoute les regrets — la consequence emotionnelle de la rupture. Les meneurs se desavouent (v166), les suiveurs regrettent (v167). La progression va de la rupture au regret, puis du regret au feu. Les regrets ne sauvent pas — ils sont suivis du feu.",
              axe3_sourate: "La racine h-s-r est rare dans la sourate al-Baqarah — ce verset est une de ses apparitions majeures. La sourate insiste sur les consequences des choix : en 2:134, chacun porte ses propres oeuvres. Le verset 167 montre que les oeuvres se transforment en regrets quand elles sont fondees sur l'egarement. La sourate avertit que le regret vient apres l'occasion manquee.",
              axe4_coherence: "La racine h-s-r apparait environ 12 fois dans le Coran. En 3:156, « pour que Dieu en fasse un regret dans leurs coeurs ». En 36:30, « malheur aux serviteurs, aucun messager ne leur vient sans qu'ils s'en moquent ». Le regret coranique est lie a l'irreversibilite — on regrette ce qu'on ne peut plus changer. Le Coran utilise le regret comme avertissement aux vivants.",
              axe5_frequence: "Pour la mission du khalifa, le regret est l'etat de celui qui a manque sa mission. Le khalifa doit agir maintenant pour eviter le regret futur. Chaque occasion manquee de bien faire est une source potentielle de hasra au Jour du Jugement. La mission du khalifa est precisement d'eviter que ses oeuvres ne deviennent des regrets."
            },
            "D\u00e9couvrement/R\u00e9v\u00e9lation": {
              status: "nul",
              senses: ["decouvrir (oter le voile)"],
              proof_ctx: null
            },
            "\u00c9puisement": {
              status: "nul",
              senses: ["epuiser", "etre fatigue"],
              proof_ctx: null
            }
          }
        }
      },
      // khrj pos=19 (bikharijiyna)
      {
        word_key: "khrj", position: 19, sense_chosen: "sortir",
        analysis_axes: {
          sense_chosen: "sortir",
          concept_chosen: "Sortie/Ext\u00e9riorisation",
          concepts: {
            "Sortie/Ext\u00e9riorisation": {
              status: "retenu",
              senses: ["sortir", "faire sortir"],
              proof_ctx: null,
              axe1_verset: "Le participe actif bikharijiyna avec la negation (ma hum bikharijiyna) decrit l'etat permanent de non-sortie du feu. Le champ lexical du verset culmine avec cette conclusion : les suiveurs parlent (qala), souhaitent un retour (karra), regrettent (hasarat), mais la conclusion est qu'ils ne sortent pas du feu. Le participe actif avec la negation est plus fort qu'un simple verbe — il decrit un etat permanent, pas un evenement ponctuel. Ils sont dans l'etat de ne-pas-sortir.",
              axe2_voisins: "Le verset 166 montrait la rupture des liens et le chatiment. Le verset 167 ajoute la permanence du chatiment — ils ne sortent pas du feu. La progression des versets 166-167 va du desaveu au regret puis a la permanence du feu. Le verset 168 changera de sujet avec un appel aux vivants — seuls les vivants peuvent encore sortir de l'egarement.",
              axe3_sourate: "La racine kh-r-j apparait dans la sourate al-Baqarah dans des contextes varies. En 2:61, « sortez en Egypte ». En 2:167, la sortie est impossible — du feu, on ne sort pas. La sourate oppose les sorties possibles (sortir d'un lieu, sortir d'un etat) et la sortie impossible (sortir du feu). Cette impossibilite est la consequence ultime du suivisme aveugle.",
              axe4_coherence: "La racine kh-r-j apparait environ 180 fois dans le Coran. L'expression « ma hum bikharijiyna min an-nar » est specifique a ce verset. En 5:37, « ils voudront sortir du feu mais n'en sortiront pas ». En 2:39, « ceux-la sont les gens du feu, ils y demeureront eternellement ». Le Coran insiste sur la permanence du feu pour les egares — la sortie est impossible.",
              axe5_frequence: "Pour la mission du khalifa, l'impossibilite de sortir du feu est l'avertissement ultime. Le khalifa doit eviter le feu en accomplissant sa mission maintenant. La non-sortie montre que le Jour du Jugement est sans retour — il n'y a pas de sortie, pas de retour, pas de seconde chance. La mission doit etre accomplie dans cette vie."
            },
            "Extraction": {
              status: "nul",
              senses: ["extraire"],
              proof_ctx: null
            },
            "Expulsion": {
              status: "nul",
              senses: ["expulser"],
              proof_ctx: null
            },
            "Sens isol\u00e9/Production": {
              status: "nul",
              senses: ["production"],
              proof_ctx: null
            },
            "Sens isol\u00e9/Tribut": {
              status: "nul",
              senses: ["tribut"],
              proof_ctx: null
            }
          }
        }
      },
      // nwr pos=20 (an-nari)
      {
        word_key: "nwr", position: 20, sense_chosen: "feu",
        analysis_axes: {
          sense_chosen: "feu",
          concept_chosen: "Lumi\u00e8re/Clart\u00e9",
          concepts: {
            "Lumi\u00e8re/Clart\u00e9": {
              status: "retenu",
              senses: ["lumiere", "eclairer", "feu", "guider par la lumiere"],
              proof_ctx: null,
              axe1_verset: "Le nom an-nari est un nom feminin singulier defini genitif de la racine n-w-r. Le Lane's donne pour nar : feu. L'article defini (an-) marque que c'est LE feu connu — le feu de l'au-dela, le chatiment. Le champ lexical du verset culmine avec le feu : suivisme → regret → non-sortie du feu. Le feu est la destination finale des suiveurs egares. La preposition min (de, hors de) avec la negation montre qu'ils sont dans le feu et n'en sortent pas.",
              axe2_voisins: "Le verset 166 parlait du chatiment ('adhab). Le verset 167 precise la nature du chatiment — le feu. La progression va du chatiment general au feu specifique. Le verset 168 appellera les gens a manger du licite — un appel aux vivants qui contraste avec le feu des morts. Le feu conclut le passage eschatologique (v165-167) avant le retour aux vivants (v168).",
              axe3_sourate: "La racine n-w-r dans la sourate al-Baqarah apparait sous ses deux sens : lumiere (2:17, « Dieu a emporte leur lumiere ») et feu (2:24, « le feu dont le combustible est les gens et les pierres »). Le verset 167 utilise le sens de feu. La sourate oppose lumiere (guidance) et feu (chatiment) — ceux qui rejettent la lumiere finissent dans le feu.",
              axe4_coherence: "Le mot an-nar (le feu) apparait environ 145 fois dans le Coran. C'est un des mots les plus frequents pour designer le chatiment. En 2:39, « ceux-la sont les gens du feu ». En 2:81, « ceux-la sont les gens du feu, ils y demeureront ». Le Coran utilise le feu comme symbole du chatiment eternel et irreversible.",
              axe5_frequence: "Pour la mission du khalifa, le feu est la consequence ultime de l'echec de la mission. Le khalifa qui suit les egares, qui ne revient pas a la guidance, qui laisse ses oeuvres devenir des regrets, finit dans le feu dont il ne sort pas. Le feu est l'avertissement supreme — la mission du khalifa est d'eviter cette destination en suivant la guidance divine."
            },
            "Sens isol\u00e9/Fleur": {
              status: "nul",
              senses: ["fleur"],
              proof_ctx: null
            },
            "Sens isol\u00e9/Fuir": {
              status: "nul",
              senses: ["fuir"],
              proof_ctx: null
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

  const verseIds = [174];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 167 ===\n');
  await processVerse(167);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V167 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
