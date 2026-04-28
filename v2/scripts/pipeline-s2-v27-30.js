const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 27 À 30
// verse_id=34 (2:27), verse_id=35 (2:28), verse_id=36 (2:29), verse_id=37 (2:30)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:27
  // verse_id=34
  // =====================================================
  27: {
    verse_id: 34,
    analysis_id: null, // will be fetched
    translation_arab: "Ceux qui rompent le pacte de Dieu apr\u00e8s l\u2019avoir li\u00e9 solidement, et coupent ce que Dieu a ordonn\u00e9 de joindre, et corrompent sur la terre \u2014 ceux-l\u00e0 sont les perdants.",
    full_translation: "qui rompent le pacte qu\u2019ils avaient fermement conclu avec Allah, coupent ce qu\u2019Allah a ordonn\u00e9 d\u2019unir, et s\u00e8ment la corruption sur la terre. Ceux-l\u00e0 sont les vrais perdants.",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Ce verset decrit trois actions des deviants (fasiqin du verset precedent). Le verbe **yanquduna** est un inaccompli de la racine n-q-d (une forme qui dit que l\u2019action est en cours ou habituelle \u2014 ils rompent habituellement). Le Lane\u2019s donne \u00ab he undid, dissolved, broke a rope, a compact \u00bb. Le mot **\u2018ahda** est en construction idafa avec Allah (le pacte de Dieu \u2014 le pacte qui appartient a Dieu ou qui vient de Dieu). Le mot **mithaqihi** est un nom de la racine w-th-q avec le pronom 3MS. Le Lane\u2019s donne \u00ab a firm compact, a covenant, a bond \u00bb. La construction \u00ab min ba\u2019di mithaqihi \u00bb signifie \u00ab apres son lien solide \u00bb \u2014 c\u2019est-a-dire apres l\u2019avoir solidement lie. Le verbe **yaqta\u2019una** est un inaccompli de q-t-e (ils coupent habituellement). Le verbe **amara** est un accompli (Dieu a ordonne \u2014 l\u2019ordre est un fait accompli). Le verbe **yusala** est un inaccompli passif de w-s-l (etre joint \u2014 la forme passive indique que la jonction est ordonnee, pas que c\u2019est le sujet qui joint). Le verbe **yufsiduna** est un inaccompli forme IV de f-s-d (une forme qui dit \u00ab faire corrompre \u00bb \u2014 ils causent activement la corruption). Le mot **al-khasiruna** est un participe actif pluriel defini de kh-s-r (ceux qui perdent activement \u2014 la perte est un etat actif, pas un evenement ponctuel).

\u00a7JUSTIFICATION\u00a7
**rompent** \u2014 Le sens retenu est \u00ab Rupture/Dissolution \u00bb. Le verbe naqada dans le Lane\u2019s designe l\u2019action de defaire, dissoudre un pacte. L\u2019alternative \u00ab annuler \u00bb est ecartee car trop juridique. \u00ab Demolir \u00bb est ecarte car c\u2019est le sens physique.

**pacte** \u2014 Le sens retenu est \u00ab Pacte/Engagement \u00bb. Le mot ahd designe un engagement bilateral. L\u2019alternative \u00ab alliance \u00bb est ecartee car elle implique une egalite entre les parties. \u00ab Promesse \u00bb est ecartee car unilaterale.

**lie solidement** \u2014 Le sens retenu est \u00ab Fermete/Confiance \u00bb. Le mithaq de la racine w-th-q designe un lien solide, un pacte ferme. L\u2019alternative \u00ab confiance \u00bb est ecartee car le contexte parle de l\u2019acte de lier, pas de l\u2019etat de confiance.

**coupent** \u2014 Le sens retenu est \u00ab Coupure/Separation \u00bb. Le verbe qata\u2019a designe l\u2019action physique de couper. L\u2019alternative \u00ab trancher \u00bb est ecartee car elle implique une decision. \u00ab Separer \u00bb est ecarte car moins physique.

**joindre** \u2014 Le sens retenu est \u00ab Liaison/Connexion \u00bb. Le verbe wasala designe l\u2019action de relier, de connecter. L\u2019alternative \u00ab arriver \u00bb est ecartee car c\u2019est un autre sens de la racine.

**perdants** \u2014 Le sens retenu est \u00ab Perte/Diminution \u00bb. Le participe actif khasiruna designe ceux qui subissent activement la perte. L\u2019alternative \u00ab egares \u00bb (sens \u00ab Egarement \u00bb) est ecartee car le Lane\u2019s donne la perte comme sens premier.

\u00a7CRITIQUE\u00a7
**unir vs joindre** \u2014 Les traductions courantes donnent \u00ab unir \u00bb pour yusala. Le Lane\u2019s donne \u00ab he joined, connected, coupled \u00bb. \u00ab Unir \u00bb implique une fusion, \u00ab joindre \u00bb preserve la distinction des elements relies \u2014 le texte dit de relier ce qui est separe, pas de fusionner.
Les traductions courantes donnent sensiblement le meme sens pour le reste du verset.`,
    segments: [
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0627\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 1 },
      { fr: "rompent", pos: "verbe", phon: "yanquduna", arabic: "\u064a\u064e\u0646\u0642\u0636\u064f\u0648\u0646\u064e", word_key: "nqd", is_particle: false, sense_retenu: "rompre", position: 2 },
      { fr: "le pacte", pos: "nom", phon: "\u2018ahda", arabic: "\u0639\u064e\u0647\u0652\u062f\u064e", word_key: "ehd", is_particle: false, sense_retenu: "pacte", position: 3 },
      { fr: "de Dieu", pos: "nom", phon: "all\u0101hi", arabic: "\u0627\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 4 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u06e2", is_particle: true, position: 5 },
      { fr: "apr\u00e8s", pos: "nom", phon: "ba\u2018di", arabic: "\u0628\u064e\u0639\u0652\u062f\u0650", word_key: "baed", is_particle: false, sense_retenu: "apr\u00e8s", position: 6 },
      { fr: "son lien solide", pos: "nom", phon: "mithaqihi", arabic: "\u0645\u0650\u064a\u062b\u064e\u0640\u0670\u0642\u0650\u0647\u0650\u06e6", word_key: "wthq", is_particle: false, sense_retenu: "lier solidement", position: 7 },
      { fr: "et coupent", pos: "verbe", phon: "yaqta\u2018una", arabic: "\u0648\u064e\u064a\u064e\u0642\u0652\u0637\u064e\u0639\u064f\u0648\u0646\u064e", word_key: "qte", is_particle: false, sense_retenu: "couper", position: 8 },
      { fr: "ce que", phon: "m\u0101", arabic: "\u0645\u064e\u0627\u0653", is_particle: true, position: 9 },
      { fr: "a ordonn\u00e9", pos: "verbe", phon: "amara", arabic: "\u0623\u064e\u0645\u064e\u0631\u064e", word_key: "amr", is_particle: false, sense_retenu: "ordonner", position: 10 },
      { fr: "Dieu", pos: "nom", phon: "all\u0101hu", arabic: "\u0627\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 11 },
      { fr: "par lui", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650\u06e6\u0653", is_particle: true, position: 12 },
      { fr: "que", phon: "an", arabic: "\u0623\u064e\u0646", is_particle: true, position: 13 },
      { fr: "soit joint", pos: "verbe", phon: "yusala", arabic: "\u064a\u064f\u0648\u0635\u064e\u0644\u064e", word_key: "wsl", is_particle: false, sense_retenu: "joindre", position: 14 },
      { fr: "et corrompent", pos: "verbe", phon: "yufsiduna", arabic: "\u0648\u064e\u064a\u064f\u0641\u0652\u0633\u0650\u062f\u064f\u0648\u0646\u064e", word_key: "fsd", is_particle: false, sense_retenu: "corrompre", position: 15 },
      { fr: "sur", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 16 },
      { fr: "la terre", pos: "nom", phon: "al-ardi", arabic: "\u0627\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 17 },
      { fr: "ceux-l\u00e0", phon: "ula\u2019ika", arabic: "\u0623\u064f\u0648\u06df\u0644\u064e\u0640\u0670\u0653\u0626\u0650\u0643\u064e", is_particle: true, position: 18 },
      { fr: "eux", phon: "humu", arabic: "\u0647\u064f\u0645\u064f", is_particle: true, position: 19 },
      { fr: "les perdants", pos: "participe_actif", phon: "al-khasiruna", arabic: "\u0627\u0644\u0652\u062e\u064e\u0640\u0670\u0633\u0650\u0631\u064f\u0648\u0646\u064e", word_key: "khsr", is_particle: false, sense_retenu: "perdant", position: 20 }
    ],
    words: [
      {
        word_key: "nqd", position: 2, sense_chosen: "rompre",
        analysis_axes: {
          concept_chosen: "Rupture/Dissolution",
          concepts: {
            "Rupture/Dissolution": {
              status: "retenu",
              senses: ["rompre", "d\u00e9faire", "annuler un pacte"],
              proof_ctx: "Le verbe yanquduna est un inaccompli de la racine n-q-d. D\u2019apr\u00e8s le Lane\u2019s, naqada signifie \u00ab he undid, dissolved, broke a rope, a compact \u00bb. La racine porte l\u2019id\u00e9e de d\u00e9faire ce qui \u00e9tait li\u00e9, de dissoudre un engagement. L\u2019inaccompli indique que l\u2019action est habituelle ou en cours. Le verset d\u00e9crit des gens qui d\u00e9font r\u00e9guli\u00e8rement le pacte de Dieu \u2014 ce n\u2019est pas un acte ponctuel mais un comportement r\u00e9p\u00e9t\u00e9.",
              axe1_verset: "Le verbe yanquduna ouvre la s\u00e9rie des trois actions des d\u00e9viants : rompre, couper, corrompre. Ces trois verbes forment un crescendo de destruction. Rompre le pacte est l\u2019acte fondateur \u2014 c\u2019est parce qu\u2019ils rompent le pacte avec Dieu qu\u2019ils coupent ensuite les liens ordonn\u00e9s et finissent par corrompre la terre. Le pacte de Dieu est le cadre qui maintient l\u2019ordre \u2014 le rompre lib\u00e8re le d\u00e9sordre. L\u2019objet du verbe est ahda all\u0101hi (le pacte de Dieu), ce qui donne \u00e0 la rupture une gravit\u00e9 maximale.",
              axe2_voisins: "Le verset 26 pr\u00e9c\u00e9dent parlait des d\u00e9viants (fasiqin) qui sortent du chemin. Le verset 27 d\u00e9taille ce que font ces d\u00e9viants : ils rompent, coupent, corrompent. La rupture du pacte est la premi\u00e8re caract\u00e9ristique du fasiq \u2014 celui qui sort du cadre. En sortant, il d\u00e9fait le lien. Le verset 28 changera de sujet pour poser la question rh\u00e9torique sur le recouvrement de Dieu, montrant que la rupture du pacte est un acte incompr\u00e9hensible.",
              axe3_sourate: "La sourate al-Baqarah d\u00e9veloppe le th\u00e8me du pacte divin. Le pacte avec les fils d\u2019Isra\u2019il sera d\u00e9taill\u00e9 plus loin (2:40, 2:63, 2:83, 2:84, 2:93). La rupture du pacte est un motif r\u00e9current qui explique pourquoi les communaut\u00e9s pr\u00e9c\u00e9dentes ont \u00e9chou\u00e9. Ce verset 27 pose le principe g\u00e9n\u00e9ral que la sourate illustrera avec des exemples historiques.",
              axe4_coherence: "Le Coran utilise la racine n-q-d pour la rupture des pactes dans plusieurs passages (3:77, 4:155, 5:13, 8:56, 13:25). A chaque fois, la rupture du pacte pr\u00e9c\u00e8de d\u2019autres transgressions \u2014 c\u2019est l\u2019acte fondateur de la d\u00e9viance. En 13:25, on retrouve presque le m\u00eame triptyque : rompre, couper, corrompre.",
              axe5_frequence: "Pour la mission du khalifa, le pacte est le fondement de la relation entre Dieu et l\u2019humanit\u00e9. Le khalifa est celui qui maintient ce pacte \u2014 le rompre est l\u2019antith\u00e8se de sa mission. La rupture du pacte entra\u00eene la perte (khasiruna) \u2014 le khalifa qui rompt perd sa raison d\u2019\u00eatre."
            },
            "D\u00e9molition": {
              status: "nul",
              senses: ["d\u00e9molir", "d\u00e9truire"],
              proof_ctx: "La d\u00e9molition est le sens physique de n-q-d (d\u00e9faire un b\u00e2timent). Le contexte parle de pacte, pas de construction physique. Le sens \u00ab d\u00e9faire un engagement \u00bb est le bon."
            }
          }
        }
      },
      {
        word_key: "ehd", position: 3, sense_chosen: "pacte",
        analysis_axes: {
          concept_chosen: "Pacte/Engagement",
          concepts: {
            "Pacte/Engagement": {
              status: "retenu",
              senses: ["pacte", "alliance", "promesse", "engagement"],
              proof_ctx: "Le mot ahda est un nom masculin au cas accusatif de la racine e-h-d. Le Lane\u2019s donne \u00ab a compact, a covenant, an engagement, a promise, an obligation \u00bb. Le ahd est un engagement entre deux parties \u2014 ici entre Dieu et les humains. La construction idafa avec Allah (ahda all\u0101hi) pr\u00e9cise que c\u2019est le pacte qui appartient \u00e0 Dieu ou qui \u00e9mane de Dieu. C\u2019est un engagement dont Dieu est l\u2019initiateur et le garant.",
              axe1_verset: "Le mot ahd est l\u2019objet direct de yanquduna (ils rompent). C\u2019est l\u2019objet de la rupture \u2014 ce qui est d\u00e9fait. La pr\u00e9cision \u00ab de Dieu \u00bb donne au pacte son poids maximal : ce n\u2019est pas un accord entre humains mais un engagement divin. La suite du verset (min ba\u2019di mithaqihi = apr\u00e8s son lien solide) renforce : ce pacte avait \u00e9t\u00e9 solidement li\u00e9, ce qui rend la rupture d\u2019autant plus grave.",
              axe2_voisins: "Le pacte divin est le fil conducteur de cette section. Le verset 25 parlait de la r\u00e9compense des croyants, le verset 26 des d\u00e9viants, le verset 27 d\u00e9taille leur faute principale : rompre le pacte. Ce pacte sera explicit\u00e9 dans la suite de la sourate avec les fils d\u2019Isra\u2019il (versets 40 et suivants).",
              axe3_sourate: "La sourate al-Baqarah est structur\u00e9e autour du th\u00e8me du pacte. Le pacte initial (2:27), le pacte avec Adam (2:35), le pacte avec les fils d\u2019Isra\u2019il (2:40, 2:63, 2:83), le pacte du mont Sinan (2:93). Chaque communaut\u00e9 re\u00e7oit un pacte et est jug\u00e9e sur son respect de ce pacte. La sourate est une histoire de pactes tenus et rompus.",
              axe4_coherence: "Le Coran mentionne le ahd dans de nombreux passages (3:76, 6:152, 9:111, 13:20, 16:91, 17:34, 48:10). Le pacte divin est toujours pr\u00e9sent\u00e9 comme sacr\u00e9 et sa rupture comme une trahison. En 9:111, le pacte est explicitement un \u00e9change : Dieu ach\u00e8te des croyants leur vie et leurs biens en \u00e9change du jardin.",
              axe5_frequence: "Pour la mission du khalifa, le pacte est la fondation de toute autorit\u00e9 l\u00e9gitime. Le khalifa succ\u00e8de \u00e0 Dieu sur terre dans le cadre d\u2019un pacte. Sans pacte, pas de succession l\u00e9gitime. Rompre le pacte, c\u2019est renoncer \u00e0 la l\u00e9gitimit\u00e9 de la succession."
            },
            "Connaissance": {
              status: "nul",
              senses: ["conna\u00eetre", "savoir"],
              proof_ctx: "La connaissance est un sens secondaire de e-h-d (conna\u00eetre un lieu, un temps). Le contexte parle clairement d\u2019un engagement avec Dieu, pas de connaissance."
            },
            "Recommandation": {
              status: "nul",
              senses: ["recommander", "confier"],
              proof_ctx: "La recommandation est un sens de ahida (confier, recommander). Le contexte utilise ahd dans le sens de pacte, pas de recommandation."
            },
            "\u00c9poque": {
              status: "nul",
              senses: ["\u00e9poque", "temps"],
              proof_ctx: "L\u2019\u00e9poque est un sens de ahd (le temps de quelqu\u2019un). Le contexte parle d\u2019un pacte rompu, pas d\u2019une \u00e9poque."
            }
          }
        }
      },
      {
        word_key: "alh", position: 4, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinit\u00e9",
          concepts: {
            "Divinit\u00e9": {
              status: "retenu",
              senses: ["Dieu", "divinit\u00e9"],
              proof_ctx: "Le nom all\u0101hi est au cas g\u00e9nitif en construction idafa avec ahda (le pacte de Dieu). C\u2019est le nom propre de la divinit\u00e9 unique. Il d\u00e9signe l\u2019\u00eatre divin sans \u00e9quivalent. Le Lane\u2019s d\u00e9rive all\u0101h de la racine a-l-h qui signifie \u00ab adorer, se tourner vers \u00bb. Le nom Allah est celui vers qui on se tourne dans l\u2019adoration.",
              axe1_verset: "Le nom Allah appara\u00eet deux fois dans le verset : ahda all\u0101hi (le pacte de Dieu) et amara all\u0101hu (Dieu a ordonn\u00e9). Les deux occurrences lient Dieu \u00e0 l\u2019autorit\u00e9 : Dieu est l\u2019auteur du pacte et l\u2019auteur de l\u2019ordre. Les d\u00e9viants s\u2019opposent doublement \u00e0 Dieu \u2014 ils rompent Son pacte et coupent ce qu\u2019Il a ordonn\u00e9.",
              axe2_voisins: "Le nom Allah encadre cette section : Dieu propose la parabole (v26), Dieu est l\u2019auteur du pacte (v27), Dieu est l\u2019objet du recouvrement (v28), Dieu est le cr\u00e9ateur (v29), Dieu est le ma\u00eetre qui s\u2019adresse aux anges (v30). Chaque verset rappelle que Dieu est au centre de tout.",
              axe3_sourate: "Le nom Allah est le mot le plus fr\u00e9quent de la sourate al-Baqarah. Il structure chaque section et chaque argument. La sourate est un dialogue constant entre Dieu et les diff\u00e9rentes cat\u00e9gories d\u2019humains.",
              axe4_coherence: "Le nom Allah est le terme le plus fr\u00e9quent du Coran. Il est utilis\u00e9 dans tous les contextes : cr\u00e9ation, l\u00e9gislation, r\u00e9cit, promesse, menace. C\u2019est le pivot autour duquel tourne l\u2019ensemble du texte.",
              axe5_frequence: "Pour la mission du khalifa, Allah est celui au nom de qui le khalifa agit. Le khalifa succ\u00e8de \u00e0 Dieu sur terre \u2014 il doit conna\u00eetre Dieu pour Le repr\u00e9senter. Rompre le pacte de Dieu, c\u2019est trahir celui au nom de qui on agit."
            }
          }
        }
      },
      {
        word_key: "baed", position: 6, sense_chosen: "apr\u00e8s",
        analysis_axes: {
          concept_chosen: "Post\u00e9riorit\u00e9",
          concepts: {
            "Post\u00e9riorit\u00e9": {
              status: "retenu",
              senses: ["apr\u00e8s", "post\u00e9rieur", "loin"],
              proof_ctx: "Le mot ba\u2018di est un nom au cas g\u00e9nitif de la racine b-e-d. Le Lane\u2019s donne \u00ab after, subsequent to \u00bb pour la construction temporelle. Avec la pr\u00e9position min (de/apr\u00e8s), il forme \u00ab min ba\u2019di \u00bb = apr\u00e8s. La construction compl\u00e8te est \u00ab min ba\u2019di mithaqihi \u00bb = apr\u00e8s son lien solide. Le mot marque la s\u00e9quence temporelle : d\u2019abord le lien, puis la rupture.",
              axe1_verset: "Le mot ba\u2019di est essentiel \u00e0 la gravit\u00e9 de l\u2019accusation. Ils ne rompent pas le pacte par ignorance \u2014 ils le rompent APRES l\u2019avoir solidement li\u00e9. La post\u00e9riorit\u00e9 implique la connaissance pr\u00e9alable et le choix d\u00e9lib\u00e9r\u00e9. C\u2019est un aggravant : ils savaient, ils avaient accept\u00e9, et malgr\u00e9 cela ils rompent.",
              axe2_voisins: "La notion de post\u00e9riorit\u00e9 s\u2019inscrit dans la logique de d\u00e9gradation de cette section. Les versets 8-20 d\u00e9crivent les hypocrites, les versets 21-27 les d\u00e9viants. La post\u00e9riorit\u00e9 montre que la d\u00e9viance n\u2019est pas un \u00e9tat initial mais un choix apr\u00e8s engagement.",
              axe3_sourate: "La sourate al-Baqarah utilise fr\u00e9quemment ba\u2019da pour marquer la d\u00e9gradation : apr\u00e8s les signes (2:92), apr\u00e8s le savoir (2:145, 2:213). Le sch\u00e9ma est constant \u2014 d\u2019abord la v\u00e9rit\u00e9, puis le rejet. La post\u00e9riorit\u00e9 aggrave la faute.",
              axe4_coherence: "Le Coran utilise la construction min ba\u2019di pour souligner la d\u00e9lib\u00e9ration dans la transgression. En 3:86, en 3:105, en 45:17, la m\u00eame structure appara\u00eet : ils ont d\u00e9vi\u00e9 apr\u00e8s que la v\u00e9rit\u00e9 leur est parvenue. La post\u00e9riorit\u00e9 supprime l\u2019excuse de l\u2019ignorance.",
              axe5_frequence: "Pour la mission du khalifa, la post\u00e9riorit\u00e9 rappelle la responsabilit\u00e9. Le khalifa qui conna\u00eet le pacte et le rompt ensuite est plus coupable que celui qui n\u2019a jamais connu. La connaissance cr\u00e9e l\u2019obligation."
            }
          }
        }
      },
      {
        word_key: "wthq", position: 7, sense_chosen: "lier solidement",
        analysis_axes: {
          concept_chosen: "Fermet\u00e9/Confiance",
          concepts: {
            "Fermet\u00e9/Confiance": {
              status: "retenu",
              senses: ["lier solidement", "ferme", "solide", "confiance"],
              proof_ctx: "Le mot mithaqihi est un nom de la racine w-th-q avec le pronom suffixe 3MS (son lien solide). Le Lane\u2019s donne pour mithaq \u00ab a firm compact, a covenant, a bond, an obligation \u00bb. Le mithaq est le nom d\u2019instrument de w-th-q \u2014 c\u2019est l\u2019outil par lequel on lie solidement. La racine w-th-q porte l\u2019id\u00e9e de fermet\u00e9, de solidit\u00e9, de lien qui ne se d\u00e9fait pas facilement. Le pronom \u00ab son \u00bb renvoie au pacte (ahd) \u2014 le lien solide du pacte.",
              axe1_verset: "Le mithaq est le compl\u00e9ment circonstanciel de temps avec ba\u2019di : apr\u00e8s son lien solide. Il souligne que le pacte avait \u00e9t\u00e9 solidement \u00e9tabli avant d\u2019\u00eatre rompu. La fermet\u00e9 du lien rend la rupture plus grave \u2014 d\u00e9faire un lien solide demande un effort d\u00e9lib\u00e9r\u00e9. Ce n\u2019est pas un lien fragile qui se rompt accidentellement, c\u2019est un engagement ferme qui est volontairement d\u00e9fait.",
              axe2_voisins: "Le mithaq reviendra dans la sourate avec les fils d\u2019Isra\u2019il (2:63, 2:83, 2:84, 2:93). A chaque fois, Dieu rappelle le pacte ferme qu\u2019Il avait pris avec eux. La r\u00e9p\u00e9tition du mot mithaq dans la sourate montre que Dieu insiste sur la solidit\u00e9 de l\u2019engagement initial \u2014 la rupture est inexcusable.",
              axe3_sourate: "La sourate al-Baqarah utilise mithaq sept fois. C\u2019est l\u2019un des mots cl\u00e9s de la sourate. Le mithaq est le point de r\u00e9f\u00e9rence \u00e0 partir duquel chaque communaut\u00e9 est jug\u00e9e \u2014 ont-ils maintenu le lien ferme ou l\u2019ont-ils d\u00e9fait ?",
              axe4_coherence: "Le Coran utilise mithaq dans plusieurs contextes : le mithaq des proph\u00e8tes (3:81, 33:7), le mithaq des fils d\u2019Isra\u2019il (4:154, 5:7, 5:12, 5:14), le mithaq du mariage (4:21). Dans chaque cas, la fermet\u00e9 du lien est soulign\u00e9e \u2014 le mithaq n\u2019est pas un accord vague mais un engagement solennel et solide.",
              axe5_frequence: "Pour la mission du khalifa, la fermet\u00e9 du pacte est la base de la l\u00e9gitimit\u00e9. Un pacte solide ne se d\u00e9fait pas au premier obstacle. Le khalifa doit maintenir la fermet\u00e9 de son engagement envers Dieu, m\u00eame face aux \u00e9preuves."
            }
          }
        }
      },
      {
        word_key: "qte", position: 8, sense_chosen: "couper",
        analysis_axes: {
          concept_chosen: "Coupure/S\u00e9paration",
          concepts: {
            "Coupure/S\u00e9paration": {
              status: "retenu",
              senses: ["couper", "trancher", "s\u00e9parer"],
              proof_ctx: "Le verbe yaqta\u2019una est un inaccompli de la racine q-t-e. Le Lane\u2019s donne \u00ab he cut, he cut off, he severed \u00bb. La racine porte l\u2019id\u00e9e de s\u00e9paration physique par coupure. L\u2019inaccompli indique une action habituelle. L\u2019objet est \u00ab ce que Dieu a ordonn\u00e9 de joindre \u00bb \u2014 ils coupent ce qui devait rester li\u00e9. La coupure est l\u2019exact oppos\u00e9 de la jonction (wsl) mentionn\u00e9e juste apr\u00e8s.",
              axe1_verset: "Le verbe yaqta\u2019una est la deuxi\u00e8me action des d\u00e9viants, entre rompre et corrompre. C\u2019est l\u2019action centrale du triptyque. Rompre le pacte est la cause, couper les liens est la cons\u00e9quence imm\u00e9diate, corrompre la terre est le r\u00e9sultat final. Le verbe est mis en contraste direct avec yusala (joindre) \u2014 Dieu ordonne de joindre, eux coupent. L\u2019opposition couper/joindre est le coeur du verset.",
              axe2_voisins: "La coupure des liens fait \u00e9cho au th\u00e8me de l\u2019unit\u00e9 et de la division qui traverse toute cette section. Les croyants sont unis (rassembl\u00e9s dans le jardin, verset 25), les d\u00e9viants coupent et divisent (verset 27). La coupure est l\u2019antith\u00e8se de la communaut\u00e9.",
              axe3_sourate: "La sourate al-Baqarah d\u00e9veloppe le th\u00e8me de la division des communaut\u00e9s. Les fils d\u2019Isra\u2019il se sont divis\u00e9s (2:75, 2:85, 2:113, 2:145, 2:176, 2:213, 2:253). La coupure des liens est la cause fondamentale de ces divisions \u2014 quand on coupe ce que Dieu a ordonn\u00e9 de joindre, la communaut\u00e9 se fragmente.",
              axe4_coherence: "Le Coran utilise la racine q-t-e pour d\u00e9crire la rupture des liens familiaux (47:22), la coupure des chemins (7:86, 29:29), la coupure des mains (5:38, 12:31). La coupure est toujours un acte de violence \u2014 physique ou relationnelle. En 13:25, on retrouve exactement la m\u00eame formule : ils coupent ce que Dieu a ordonn\u00e9 de joindre.",
              axe5_frequence: "Pour la mission du khalifa, la coupure des liens est l\u2019ennemi de la succession. Le khalifa est cens\u00e9 maintenir les liens \u2014 entre les humains, entre les humains et Dieu, entre les g\u00e9n\u00e9rations. Couper ces liens d\u00e9truit le tissu de la civilisation."
            },
            "Travers\u00e9e": {
              status: "nul",
              senses: ["traverser"],
              proof_ctx: "La travers\u00e9e est un sens de q-t-e (traverser une distance). Le contexte parle de couper des liens, pas de traverser un espace."
            },
            "D\u00e9cision": {
              status: "nul",
              senses: ["d\u00e9cider", "trancher"],
              proof_ctx: "La d\u00e9cision (couper court, trancher une question) est un sens d\u00e9riv\u00e9 de q-t-e. Le contexte parle de couper des liens concrets, pas de prendre une d\u00e9cision."
            }
          }
        }
      },
      {
        word_key: "amr", position: 10, sense_chosen: "ordonner",
        analysis_axes: {
          concept_chosen: "Commandement/Autorit\u00e9",
          concepts: {
            "Commandement/Autorit\u00e9": {
              status: "retenu",
              senses: ["ordonner", "commander", "d\u00e9cr\u00e9ter"],
              proof_ctx: "Le verbe amara est un accompli de la racine a-m-r. Le Lane\u2019s donne \u00ab he commanded, ordered, bade, enjoined \u00bb. L\u2019accompli indique que l\u2019ordre est un fait \u00e9tabli \u2014 Dieu a d\u00e9j\u00e0 ordonn\u00e9. Le sujet est Allah \u2014 c\u2019est un ordre divin, pas une suggestion. La pr\u00e9position bihi (par lui/\u00e0 son sujet) introduit le compl\u00e9ment de l\u2019ordre : ce que Dieu a ordonn\u00e9 d\u2019\u00eatre joint.",
              axe1_verset: "Le verbe amara est au centre de la construction \u00ab m\u0101 amara all\u0101hu bihi an yusala \u00bb (ce que Dieu a ordonn\u00e9 de joindre). L\u2019ordre divin est la r\u00e9f\u00e9rence absolue \u2014 les d\u00e9viants coupent ce que Dieu a ordonn\u00e9 de joindre, s\u2019opposant directement \u00e0 l\u2019autorit\u00e9 divine. L\u2019accompli amara face \u00e0 l\u2019inaccompli yaqta\u2019una cr\u00e9e un contraste : l\u2019ordre est d\u00e9finitif, la coupure est habituelle.",
              axe2_voisins: "L\u2019ordre divin est le principe directeur de toute cette section. Le verset 27 montre que les d\u00e9viants s\u2019opposent \u00e0 l\u2019ordre de Dieu. Le verset 30 montrera Dieu en train de donner un ordre aux anges (inni ja\u2019ilun). L\u2019autorit\u00e9 divine est le fil conducteur : Dieu ordonne, certains ob\u00e9issent, d\u2019autres coupent.",
              axe3_sourate: "La sourate al-Baqarah est remplie d\u2019ordres divins : fa\u2019tadu (alors adorez, 2:21), udkhulu (entrez, 2:58, 2:61), aqimu al-salata (accomplissez la pri\u00e8re, 2:43, 2:83, 2:110). L\u2019autorit\u00e9 divine s\u2019exprime par des commandements concrets que les communaut\u00e9s doivent suivre ou qu\u2019elles transgressent.",
              axe4_coherence: "Le Coran utilise la racine a-m-r plus de 250 fois. L\u2019ordre divin est la base de la l\u00e9gislation coranique. Le verset 7:54 dit \u00ab \u00e0 Lui la cr\u00e9ation et le commandement \u00bb \u2014 cr\u00e9er et ordonner sont les deux actes fondamentaux de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l\u2019ordre divin est ce qu\u2019il doit faire respecter. Le khalifa n\u2019est pas l\u00e9gislateur \u2014 il est l\u2019ex\u00e9cuteur de l\u2019ordre de Dieu. Ceux qui coupent ce que Dieu a ordonn\u00e9 de joindre s\u2019opposent directement \u00e0 la mission du khalifa."
            }
          }
        }
      },
      {
        word_key: "wsl", position: 14, sense_chosen: "joindre",
        analysis_axes: {
          concept_chosen: "Liaison/Connexion",
          concepts: {
            "Liaison/Connexion": {
              status: "retenu",
              senses: ["joindre", "relier", "lier"],
              proof_ctx: "Le verbe yusala est un inaccompli passif de la racine w-s-l. Le Lane\u2019s donne \u00ab he joined, connected, coupled one thing to another \u00bb. Le passif indique que la jonction est un ordre \u2014 c\u2019est \u00ab ce qui est ordonn\u00e9 d\u2019\u00eatre joint \u00bb, pas \u00ab ce qu\u2019ils joignent eux-m\u00eames \u00bb. La racine w-s-l porte l\u2019id\u00e9e de connexion, de lien entre des \u00e9l\u00e9ments distincts qui doivent rester reli\u00e9s.",
              axe1_verset: "Le verbe yusala est en contraste direct avec yaqta\u2019una (ils coupent). Dieu a ordonn\u00e9 de joindre, eux coupent. L\u2019opposition joindre/couper est le coeur du verset. Le passif yusala (que cela soit joint) face \u00e0 l\u2019actif yaqta\u2019una (ils coupent activement) montre que la jonction est divine et la coupure est humaine. Dieu veut la connexion, les d\u00e9viants imposent la s\u00e9paration.",
              axe2_voisins: "La jonction est l\u2019antith\u00e8se de la d\u00e9viance d\u00e9crite dans cette section. Les d\u00e9viants se caract\u00e9risent par la rupture et la coupure. Les croyants se caract\u00e9risent par le maintien des liens. Le verset 30 introduira le khalifa dont la mission est pr\u00e9cis\u00e9ment de maintenir la jonction entre ciel et terre.",
              axe3_sourate: "La sourate al-Baqarah d\u00e9veloppe le th\u00e8me des liens \u00e0 maintenir : le lien entre Dieu et les humains (pri\u00e8re, z-k-w), le lien entre les humains (communaut\u00e9, \u00e9quit\u00e9), le lien entre les g\u00e9n\u00e9rations (m\u00e9moire, transmission). La sourate d\u00e9crit aussi les ruptures de ces liens par diff\u00e9rentes communaut\u00e9s.",
              axe4_coherence: "Le Coran utilise la formule \u00ab ce que Dieu a ordonn\u00e9 de joindre \u00bb en 2:27 et 13:21-25. En 13:21, les gens du coeur sont ceux qui \u00ab joignent ce que Dieu a ordonn\u00e9 de joindre \u00bb. Le Coran pr\u00e9sente la jonction comme un imp\u00e9ratif divin et la coupure comme une transgression.",
              axe5_frequence: "Pour la mission du khalifa, la jonction est sa fonction principale. Le khalifa est celui qui maintient les liens : entre ciel et terre, entre Dieu et les humains, entre les communaut\u00e9s. Couper ces liens, c\u2019est d\u00e9truire la mission du khalifa."
            },
            "Arriv\u00e9e": {
              status: "nul",
              senses: ["arriver", "parvenir"],
              proof_ctx: "L\u2019arriv\u00e9e est un autre sens de w-s-l (arriver \u00e0 destination). Le contexte parle de joindre des \u00e9l\u00e9ments, pas d\u2019arriver quelque part."
            },
            "Don": {
              status: "nul",
              senses: ["donner"],
              proof_ctx: "Le don est un sens dialectal de w-s-l. Le contexte classique et le Lane\u2019s donnent \u00ab joindre, connecter \u00bb comme sens premier."
            }
          }
        }
      },
      {
        word_key: "fsd", position: 15, sense_chosen: "corrompre",
        analysis_axes: {
          concept_chosen: "Corruption/D\u00e9sordre",
          concepts: {
            "Corruption/D\u00e9sordre": {
              status: "retenu",
              senses: ["corrompre", "g\u00e2ter", "d\u00e9t\u00e9riorer"],
              proof_ctx: "Le verbe yufsiduna est un inaccompli forme IV de la racine f-s-d. Le Lane\u2019s donne pour forme IV \u00ab he made, or rendered, a thing corrupt, unsound, or bad \u00bb. La forme IV (af\u2019ala) est causative \u2014 ils font corrompre, ils causent la corruption. L\u2019inaccompli indique une action habituelle. Le compl\u00e9ment est \u00ab fi al-ard \u00bb (sur la terre) \u2014 la corruption s\u2019\u00e9tend \u00e0 toute la terre.",
              axe1_verset: "Le verbe yufsiduna est la troisi\u00e8me et derni\u00e8re action des d\u00e9viants. C\u2019est le r\u00e9sultat des deux pr\u00e9c\u00e9dentes : rompre le pacte et couper les liens m\u00e8ne \u00e0 la corruption. Le lieu de la corruption est la terre (al-ard) \u2014 le m\u00eame lieu o\u00f9 le khalifa sera plac\u00e9 (v30). Les d\u00e9viants corrompent pr\u00e9cis\u00e9ment l\u2019espace du khalifa.",
              axe2_voisins: "La corruption sur la terre (al-fasad fi al-ard) est le pendant n\u00e9gatif de la mission du khalifa (verset 30). Au verset 30, les anges diront pr\u00e9cis\u00e9ment : \u00ab Vas-Tu y placer quelqu\u2019un qui y corrompt ? \u00bb \u2014 m\u00eame verbe yufsidu, m\u00eame lieu fiha. Le verset 27 d\u00e9crit la r\u00e9alit\u00e9 que les anges avaient anticip\u00e9e.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine f-s-d quatre fois (2:11-12, 2:27, 2:30, 2:220). En 2:11-12, les hypocrites disent qu\u2019ils r\u00e9forment alors qu\u2019ils corrompent. En 2:27, les d\u00e9viants corrompent. En 2:30, les anges craignent la corruption. La corruption est le fil rouge n\u00e9gatif de la sourate.",
              axe4_coherence: "Le Coran oppose syst\u00e9matiquement fasad (corruption) et islah (r\u00e9forme, r\u00e9paration). En 7:56, Dieu dit \u00ab ne corrompez pas sur la terre apr\u00e8s sa r\u00e9forme \u00bb. La terre a \u00e9t\u00e9 cr\u00e9\u00e9e en bon \u00e9tat \u2014 la corruption est un acte humain qui d\u00e9grade cet \u00e9tat.",
              axe5_frequence: "Pour la mission du khalifa, la corruption est l\u2019\u00e9chec de la succession. Le khalifa est plac\u00e9 sur terre pour la maintenir, pas pour la corrompre. Les trois actions du verset 27 \u2014 rompre, couper, corrompre \u2014 sont les trois \u00e9checs fondamentaux du khalifa."
            }
          }
        }
      },
      {
        word_key: "ard", position: 17, sense_chosen: "terre",
        analysis_axes: {
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays"],
              proof_ctx: "Le nom al-ardi est un nom f\u00e9minin d\u00e9fini au cas g\u00e9nitif de la racine a-r-d. Le Lane\u2019s donne \u00ab the earth, the ground, the land \u00bb. L\u2019article d\u00e9fini al- indique la terre dans son ensemble, pas un terrain particulier. La pr\u00e9position fi (dans/sur) donne \u00ab sur la terre \u00bb \u2014 le lieu de la corruption.",
              axe1_verset: "La terre est le lieu de la corruption (yufsiduna fi al-ard). C\u2019est le m\u00eame lieu o\u00f9 le khalifa sera plac\u00e9 au verset 30 (ja\u2019ilun fi al-ard khalifatan). La terre est l\u2019espace partag\u00e9 entre le khalifa et les corrupteurs. C\u2019est le champ de bataille entre la succession divine et la corruption.",
              axe2_voisins: "La terre appara\u00eet dans les versets 22 (cr\u00e9\u00e9 pour vous la terre), 27 (corrompent sur la terre), 29 (cr\u00e9\u00e9 pour vous ce qui est sur la terre), 30 (je place sur la terre un successeur). La terre est le th\u00e8me central de ces versets \u2014 cr\u00e9\u00e9e, corrompue, cr\u00e9\u00e9e pour vous, lieu du khalifa.",
              axe3_sourate: "La sourate al-Baqarah mentionne la terre plus de 30 fois. La terre est le lieu de l\u2019\u00e9preuve humaine \u2014 cr\u00e9\u00e9e par Dieu, confi\u00e9e au khalifa, corrompue par les d\u00e9viants. La sourate est fondamentalement terrestre.",
              axe4_coherence: "Le Coran utilise al-ard plus de 460 fois. La terre est le domaine du khalifa, le lieu de la mise \u00e0 l\u2019\u00e9preuve, et le th\u00e9\u00e2tre o\u00f9 se joue la r\u00e9ponse humaine \u00e0 l\u2019appel divin.",
              axe5_frequence: "Pour la mission du khalifa, la terre est son domaine. Il est plac\u00e9 fi al-ard (sur la terre) pour y exercer la succession divine. La corruption fi al-ard est la n\u00e9gation directe de sa mission."
            }
          }
        }
      },
      {
        word_key: "khsr", position: 20, sense_chosen: "perdant",
        analysis_axes: {
          concept_chosen: "Perte/Diminution",
          concepts: {
            "Perte/Diminution": {
              status: "retenu",
              senses: ["perdant", "perdre", "perte"],
              proof_ctx: "Le mot al-khasiruna est un participe actif pluriel d\u00e9fini de la racine kh-s-r. Le Lane\u2019s donne \u00ab he lost, suffered loss, was a loser \u00bb. Le participe actif indique que la perte est un \u00e9tat actif et continu \u2014 ils ne subissent pas une perte ponctuelle, ils sont en \u00e9tat permanent de perte. L\u2019article d\u00e9fini al- et la d\u00e9monstration ula\u2019ika humu pr\u00e9cisent que CE SONT EUX les perdants \u2014 pas d\u2019autres.",
              axe1_verset: "Le mot al-khasiruna cl\u00f4t le verset comme un verdict. Les trois actions (rompre, couper, corrompre) m\u00e8nent \u00e0 un r\u00e9sultat : la perte. La structure est causale : ceux qui font ces trois choses \u2014 ceux-l\u00e0 sont les perdants. La perte est la cons\u00e9quence logique de la rupture, de la coupure et de la corruption. Ils perdent le b\u00e9n\u00e9fice du pacte qu\u2019ils ont rompu.",
              axe2_voisins: "La perte des d\u00e9viants contraste avec la r\u00e9compense des croyants (verset 25, les jardins). Les croyants gagnent le jardin, les d\u00e9viants perdent tout. Le verset 27 ferme la section sur les d\u00e9viants par un verdict de perte totale.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine kh-s-r pour qualifier les d\u00e9viants et les recouvrants. La perte est le r\u00e9sultat final de la d\u00e9viance dans la sourate \u2014 quand on rompt le pacte, on perd tout.",
              axe4_coherence: "Le Coran utilise la racine kh-s-r dans plusieurs passages (7:9, 7:178, 11:21-22, 22:11, 39:15, 103:2). En 103:2, \u00ab l\u2019humain est en perte \u00bb \u2014 la perte est l\u2019\u00e9tat par d\u00e9faut dont seuls les croyants vertueux sortent. La perte est universelle sauf pour ceux qui maintiennent le pacte.",
              axe5_frequence: "Pour la mission du khalifa, la perte est l\u2019\u00e9chec ultime. Le khalifa qui rompt le pacte, coupe les liens et corrompt la terre se retrouve dans la perte \u2014 il a perdu sa succession, sa l\u00e9gitimit\u00e9 et son \u00e2me."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:28
  // verse_id=35
  // =====================================================
  28: {
    verse_id: 35,
    analysis_id: null,
    translation_arab: "Comment recouvrez-vous Dieu, alors que vous \u00e9tiez morts puis Il vous a donn\u00e9 la vie, puis Il vous fera mourir, puis Il vous redonnera la vie, puis vers Lui vous serez retourn\u00e9s ?",
    full_translation: "Comment pouvez-vous renier Allah alors qu\u2019Il vous a donn\u00e9 la vie, quand vous en \u00e9tiez priv\u00e9s ? Puis Il vous fera mourir ; puis Il vous fera revivre et enfin c\u2019est \u00e0 Lui que vous retournerez.",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset est une question rh\u00e9torique qui commence par **kayfa** (comment). Le verbe **takfuruna** est un inaccompli de k-f-r avec la pr\u00e9position bi (comment recouvrez-vous Dieu \u2014 bi indique l\u2019objet du recouvrement). Le verbe **kuntum** est un accompli du verbe incomplet k-w-n (vous \u00e9tiez \u2014 un \u00e9tat pass\u00e9). Le mot **amwatan** est un nom pluriel de m-w-t au cas accusatif (morts \u2014 attribut de kuntum). Le verbe **fa-ahyakum** est un accompli forme IV de h-y-y avec le pronom 2MP (puis Il vous a fait vivre \u2014 la forme IV signifie \u00ab faire faire \u00bb, ici \u00ab donner la vie \u00bb). Le verbe **yumitukum** est un inaccompli forme IV de m-w-t (Il vous fera mourir \u2014 action future). Le verbe **yuhyikum** est un inaccompli forme IV de h-y-y (Il vous redonnera vie). Le verbe **turja\u2019una** est un inaccompli passif de r-j-e (vous serez retourn\u00e9s \u2014 la forme passive indique que le retour n\u2019est pas volontaire, vous serez ramen\u00e9s). La progression temporelle est marqu\u00e9e par thumma (puis, ensuite) \u2014 quatre \u00e9tapes : mort, vie, mort, vie, retour.

\u00a7JUSTIFICATION\u00a7
**recouvrez** \u2014 Le sens retenu est \u00ab Couverture/Dissimulation \u00bb. Le verbe kafara avec bi signifie \u00ab recouvrir, cacher \u00bb. L\u2019alternative \u00ab nier \u00bb (sens ex\u00e9g\u00e9tique) est \u00e9cart\u00e9e car le texte dit litt\u00e9ralement \u00ab recouvrir \u00bb. L\u2019alternative \u00ab m\u00e9croire \u00bb n\u2019existe pas en fran\u00e7ais courant.

**morts** \u2014 Le sens retenu est \u00ab Mort/Cessation \u00bb. Le mot amwat d\u00e9signe l\u2019\u00e9tat de mort, d\u2019absence de vie. Direct et litt\u00e9ral.

**donn\u00e9 la vie** \u2014 Le sens retenu est \u00ab Vie/Existence \u00bb. La forme IV de h-y-y signifie \u00ab faire vivre, donner la vie \u00bb. L\u2019alternative \u00ab ressusciter \u00bb est \u00e9cart\u00e9e car elle implique un retour \u00e0 la vie apr\u00e8s une mort biologique \u2014 ici il s\u2019agit de la premi\u00e8re donation de vie.

**retourn\u00e9s** \u2014 Le sens retenu est \u00ab Retour/R\u00e9version \u00bb. Le passif turja\u2019una signifie \u00ab vous serez ramen\u00e9s, retourn\u00e9s \u00bb. L\u2019alternative \u00ab revenir \u00bb est \u00e9cart\u00e9e car le passif indique que ce n\u2019est pas un acte volontaire.

\u00a7CRITIQUE\u00a7
**renier vs recouvrir** \u2014 Les traductions courantes donnent \u00ab renier \u00bb ou \u00ab nier \u00bb pour takfuruna. La racine k-f-r signifie \u00ab recouvrir \u00bb. \u00ab Renier \u00bb implique le rejet d\u2019une v\u00e9rit\u00e9 connue, \u00ab recouvrir \u00bb implique le fait de cacher, de dissimuler. Cette nuance change la question rh\u00e9torique : le texte ne demande pas \u00ab comment pouvez-vous rejeter ? \u00bb mais \u00ab comment pouvez-vous dissimuler ? \u00bb \u2014 ce qui est plus puissant car la r\u00e9ponse est dans le verset m\u00eame (les preuves de Dieu sont visibles dans le cycle vie-mort).
Les traductions courantes donnent sensiblement le m\u00eame sens pour le cycle vie-mort-retour.`,
    segments: [
      { fr: "comment", phon: "kayfa", arabic: "\u0643\u064e\u064a\u0652\u0641\u064e", is_particle: true, position: 1 },
      { fr: "recouvrez-vous", pos: "verbe", phon: "takfuruna", arabic: "\u062a\u064e\u0643\u0652\u0641\u064f\u0631\u064f\u0648\u0646\u064e", word_key: "kfr", is_particle: false, sense_retenu: "recouvrir", position: 2 },
      { fr: "Dieu", pos: "nom", phon: "bill\u0101hi", arabic: "\u0628\u0650\u0627\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 3 },
      { fr: "et vous \u00e9tiez", pos: "verbe", phon: "wa kuntum", arabic: "\u0648\u064e\u0643\u064f\u0646\u062a\u064f\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "\u00eatre", position: 4 },
      { fr: "morts", pos: "nom", phon: "amw\u0101tan", arabic: "\u0623\u064e\u0645\u0652\u0648\u064e\u0640\u0670\u062a\u064b\u0627", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 5 },
      { fr: "puis Il vous a donn\u00e9 la vie", pos: "verbe", phon: "fa-ahy\u0101kum", arabic: "\u0641\u064e\u0623\u064e\u062d\u0652\u064a\u064e\u0640\u0670\u0643\u064f\u0645\u0652", word_key: "hyy", is_particle: false, sense_retenu: "donner la vie", position: 6 },
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", is_particle: true, position: 7 },
      { fr: "Il vous fera mourir", pos: "verbe", phon: "yum\u012btukum", arabic: "\u064a\u064f\u0645\u0650\u064a\u062a\u064f\u0643\u064f\u0645\u0652", word_key: "mwt", is_particle: false, sense_retenu: "faire mourir", position: 8 },
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", is_particle: true, position: 9 },
      { fr: "Il vous redonnera vie", pos: "verbe", phon: "yuhy\u012bkum", arabic: "\u064a\u064f\u062d\u0652\u064a\u0650\u064a\u0643\u064f\u0645\u0652", word_key: "hyy", is_particle: false, sense_retenu: "donner la vie", position: 10 },
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", is_particle: true, position: 11 },
      { fr: "vers Lui", phon: "ilayhi", arabic: "\u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650", is_particle: true, position: 12 },
      { fr: "vous serez retourn\u00e9s", pos: "verbe", phon: "turja\u2018\u016bna", arabic: "\u062a\u064f\u0631\u0652\u062c\u064e\u0639\u064f\u0648\u0646\u064e", word_key: "rje", is_particle: false, sense_retenu: "retourner", position: 13 }
    ],
    words: [
      {
        word_key: "kfr", position: 2, sense_chosen: "recouvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["recouvrir", "cacher", "dissimuler"],
              proof_ctx: "Le verbe takfuruna est un inaccompli 2MP de la racine k-f-r. Le Lane\u2019s donne \u00ab he covered, concealed, hid \u00bb. Avec la pr\u00e9position bi, le sens est \u00ab recouvrir quelque chose, dissimuler la r\u00e9alit\u00e9 de quelque chose \u00bb. Le contexte est une question rh\u00e9torique : comment pouvez-vous recouvrir Dieu alors que les preuves de Son existence sont dans votre propre cycle de vie ? L\u2019inaccompli indique un \u00e9tat continu de dissimulation.",
              axe1_verset: "Le verbe takfuruna ouvre la question rh\u00e9torique du verset. Kayfa takfuruna (comment recouvrez-vous) est suivi d\u2019une \u00e9num\u00e9ration de preuves irr\u00e9futables : vous \u00e9tiez morts, Il vous a donn\u00e9 vie, Il vous fera mourir, Il vous redonnera vie, vous serez retourn\u00e9s. Le recouvrement de Dieu est absurde face \u00e0 ces preuves. Chaque \u00e9tape du cycle vie-mort est une preuve du pouvoir divin que le recouvrement tente de cacher.",
              axe2_voisins: "Le verset 27 d\u00e9crivait les actions des d\u00e9viants (rompre, couper, corrompre). Le verset 28 pose la question fondamentale : comment pouvez-vous recouvrir Dieu ? Le passage de la description \u00e0 la question montre une escalade rh\u00e9torique. Le verset 29 donnera une autre preuve : la cr\u00e9ation de la terre et des cieux.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine k-f-r abondamment pour d\u00e9crire l\u2019attitude de ceux qui recouvrent la v\u00e9rit\u00e9. Le kafir n\u2019est pas celui qui ignore mais celui qui recouvre activement ce qu\u2019il sait ou devrait savoir. Cette question rh\u00e9torique du verset 28 r\u00e9sume toute la probl\u00e9matique du kufr dans la sourate.",
              axe4_coherence: "Le Coran utilise la racine k-f-r plus de 500 fois. Le sens premier est \u00ab recouvrir \u00bb \u2014 le paysan est aussi appel\u00e9 kafir car il recouvre la graine de terre (57:20). Le Coran maintient ce lien \u00e9tymologique entre recouvrir et nier : le kafir est celui qui recouvre les signes de Dieu, pas celui qui ne les a jamais vus.",
              axe5_frequence: "Pour la mission du khalifa, le recouvrement est l\u2019obstacle principal. Le khalifa doit d\u00e9voiler ce que les recouvrants cachent. La question \u00ab comment recouvrez-vous \u00bb est aussi une question adress\u00e9e au khalifa : comment peux-tu laisser la v\u00e9rit\u00e9 \u00eatre recouverte ?"
            }
          }
        }
      },
      {
        word_key: "alh", position: 3, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinit\u00e9",
          concepts: {
            "Divinit\u00e9": {
              status: "retenu",
              senses: ["Dieu", "divinit\u00e9"],
              proof_ctx: "Le nom bill\u0101hi est le nom all\u0101h pr\u00e9c\u00e9d\u00e9 de la pr\u00e9position bi (avec/par Dieu). La pr\u00e9position bi avec le verbe kafara indique l\u2019objet du recouvrement : recouvrir Dieu, dissimuler Dieu. C\u2019est Dieu lui-m\u00eame qui est l\u2019objet du recouvrement, pas seulement Ses signes.",
              axe1_verset: "Dieu est l\u2019objet du recouvrement et en m\u00eame temps l\u2019auteur des preuves \u00e9num\u00e9r\u00e9es. C\u2019est paradoxal : on tente de recouvrir Celui qui donne la vie et la mort. Le verset montre l\u2019absurdit\u00e9 du recouvrement en pla\u00e7ant Dieu au centre du cycle vital.",
              axe2_voisins: "Dieu est nomm\u00e9 dans chaque verset de cette section : auteur du pacte (v27), objet du recouvrement (v28), cr\u00e9ateur (v29), ma\u00eetre des anges (v30). Le nom Allah est le fil qui unit ces quatre versets.",
              axe3_sourate: "Le nom Allah dans al-Baqarah est toujours li\u00e9 \u00e0 une action ou un attribut : Dieu cr\u00e9e, ordonne, sait, pardonne, punit. Le verset 28 le place comme objet du recouvrement \u2014 ce qui souligne l\u2019arrogance du kafir.",
              axe4_coherence: "Dans le Coran, le nom Allah avec la pr\u00e9position bi dans kafara billahi est la formule standard pour d\u00e9crire le recouvrement de Dieu. C\u2019est une expression technique qui revient dans de nombreux versets.",
              axe5_frequence: "Le khalifa doit d\u00e9voiler Dieu aux humains \u2014 montrer Sa r\u00e9alit\u00e9 \u00e0 travers les signes de la cr\u00e9ation. Le recouvrement de Dieu est l\u2019antith\u00e8se de la mission du khalifa."
            }
          }
        }
      },
      {
        word_key: "kwn", position: 4, sense_chosen: "\u00eatre",
        analysis_axes: {
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["\u00eatre", "exister", "devenir"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP du verbe incomplet k-w-n. Le Lane\u2019s donne \u00ab he was, he existed, he became \u00bb. Le verbe k-w-n en arabe est le verbe d\u2019existence par excellence. L\u2019accompli kuntum (vous \u00e9tiez) d\u00e9crit un \u00e9tat pass\u00e9 r\u00e9volu. Avec l\u2019attribut amwatan (morts), il dit \u00ab vous \u00e9tiez dans l\u2019\u00e9tat de mort \u00bb \u2014 un \u00e9tat ant\u00e9rieur \u00e0 la premi\u00e8re vie.",
              axe1_verset: "Le verbe kuntum ancre le d\u00e9but de la s\u00e9quence temporelle : vous \u00e9tiez morts \u2192 Il vous a donn\u00e9 la vie \u2192 Il vous fera mourir \u2192 Il vous redonnera la vie \u2192 retour. L\u2019\u00e9tat initial est la mort, pas la vie \u2014 la vie est un don, pas un acquis. Le verbe \u00eatre place les humains dans un \u00e9tat de passivit\u00e9 totale avant l\u2019intervention divine.",
              axe2_voisins: "Le verbe kuntum rappelle que l\u2019existence humaine a un d\u00e9but. Le verset 27 d\u00e9crit ce que font les humains (rompre, couper, corrompre), le verset 28 rappelle d\u2019o\u00f9 ils viennent (l\u2019\u00e9tat de mort). Le contraste entre l\u2019arrogance des actions et l\u2019humilit\u00e9 de l\u2019origine est saisissant.",
              axe3_sourate: "La sourate al-Baqarah utilise k-w-n fr\u00e9quemment pour d\u00e9crire les \u00e9tats pass\u00e9s et les transformations. Le verbe \u00eatre est le cadre dans lequel se d\u00e9roule l\u2019histoire humaine racontee par la sourate.",
              axe4_coherence: "Le Coran utilise k-w-n comme verbe d\u2019existence et comme verbe de cr\u00e9ation (kun fa yakun = sois et c\u2019est, 2:117, 3:47, 36:82). L\u2019\u00eatre est un don divin \u2014 Dieu dit \u00ab sois \u00bb et la chose existe.",
              axe5_frequence: "Pour la mission du khalifa, l\u2019\u00eatre est la condition pr\u00e9alable. Avant de succ\u00e9der, il faut exister. L\u2019existence elle-m\u00eame est un don de Dieu \u2014 le khalifa n\u2019existe que par la volont\u00e9 de Dieu."
            }
          }
        }
      },
      {
        word_key: "mwt", position: 5, sense_chosen: "mort",
        analysis_axes: {
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mort", "mourir", "d\u00e9c\u00e8s"],
              proof_ctx: "Le mot amwatan est un nom pluriel au cas accusatif de la racine m-w-t. Le Lane\u2019s donne \u00ab death, dying, the cessation of life \u00bb. Le pluriel amwat d\u00e9signe les morts \u2014 ceux qui sont dans l\u2019\u00e9tat de mort. C\u2019est l\u2019attribut de kuntum : vous \u00e9tiez morts. Le texte ne dit pas \u00ab vous \u00e9tiez inexistants \u00bb mais \u00ab vous \u00e9tiez morts \u00bb \u2014 la mort pr\u00e9c\u00e8de la vie, pas l\u2019inexistence.",
              axe1_verset: "La mort est le point de d\u00e9part du cycle. Le verset pr\u00e9sente quatre \u00e9tapes : mort \u2192 vie \u2192 mort \u2192 vie. La r\u00e9p\u00e9tition de la mort (amwatan, yumitukum) encadre les deux dons de vie. La mort n\u2019est pas une fin mais une \u00e9tape dans un cycle ma\u00eetris\u00e9 par Dieu. La premi\u00e8re mort (amwatan) est diff\u00e9rente de la deuxi\u00e8me (yumitukum) : la premi\u00e8re est un \u00e9tat initial, la deuxi\u00e8me est un acte divin.",
              axe2_voisins: "La mort du verset 28 fait \u00e9cho \u00e0 la mort du verset 19 (hadhar al-mawt = par pr\u00e9caution de la mort). Les hypocrites craignent la mort, le verset 28 montre que la mort est sous le contr\u00f4le de Dieu \u2014 il n\u2019y a pas lieu de la craindre plus que de craindre la vie.",
              axe3_sourate: "La sourate al-Baqarah traite la mort dans plusieurs passages (2:19, 2:28, 2:56, 2:94, 2:116, 2:132, 2:154, 2:161, 2:180, 2:240, 2:243, 2:259). La mort est un th\u00e8me r\u00e9current qui structure la sourate \u2014 la mati\u00e8re de l\u2019\u00e9preuve humaine.",
              axe4_coherence: "Le Coran utilise la racine m-w-t plus de 160 fois. La mort est pr\u00e9sent\u00e9e comme une cr\u00e9ation divine (67:2 \u00ab Il a cr\u00e9\u00e9 la mort et la vie pour vous \u00e9prouver \u00bb). La mort n\u2019est pas un accident mais un dessein divin.",
              axe5_frequence: "Pour la mission du khalifa, la mort est une \u00e9tape, pas une fin. Le khalifa doit comprendre que la mort et la vie sont des instruments divins, pas des ennemis. Le cycle mort-vie est la preuve de la souverainet\u00e9 de Dieu."
            }
          }
        }
      },
      {
        word_key: "hyy", position: 6, sense_chosen: "donner la vie",
        analysis_axes: {
          concept_chosen: "Vie/Existence",
          concepts: {
            "Vie/Existence": {
              status: "retenu",
              senses: ["donner la vie", "vivre", "vivifier"],
              proof_ctx: "Le verbe fa-ahyakum est un accompli forme IV de la racine h-y-y avec le pronom 2MP. Le Lane\u2019s donne pour forme IV \u00ab he made alive, he quickened, he gave life \u00bb. La forme IV (af\u2019ala) est causative : Dieu a fait vivre, Il a donn\u00e9 la vie. Le fa- (puis) marque la s\u00e9quence temporelle apr\u00e8s l\u2019\u00e9tat de mort. Ce verbe r\u00e9appara\u00eet comme inaccompli yuhyikum (Il vous redonnera vie) pour la deuxi\u00e8me donation de vie.",
              axe1_verset: "Le verbe ahyakum est le pivot du verset. C\u2019est le premier acte divin : donner la vie \u00e0 ceux qui \u00e9taient morts. Tout le reste du cycle d\u00e9coule de cette premi\u00e8re donation. Le verset r\u00e9p\u00e8te le don de vie deux fois (ahyakum et yuhyikum) pour montrer que Dieu donne la vie non pas une mais deux fois \u2014 la r\u00e9p\u00e9tition rend le recouvrement encore plus absurde.",
              axe2_voisins: "Le don de vie contraste avec la corruption de la terre (v27) et anticipe la cr\u00e9ation (v29). Le verset 27 montre ce que les humains font (corrompre), le verset 28 montre ce que Dieu fait (donner la vie). Le contraste est radical : les humains d\u00e9truisent, Dieu cr\u00e9e.",
              axe3_sourate: "La sourate al-Baqarah pr\u00e9sente la vie comme un don divin r\u00e9p\u00e9t\u00e9 : la cr\u00e9ation initiale, la r\u00e9surrection de la vache (2:73), la r\u00e9surrection de ceux qui \u00e9taient morts (2:243, 2:259-260). Chaque r\u00e9surrection est une preuve du pouvoir divin.",
              axe4_coherence: "Le Coran utilise la forme IV de h-y-y (ahya, yuhyi) exclusivement pour Dieu. Donner la vie est un acte divin par excellence \u2014 aucune cr\u00e9ature ne peut donner la vie. En 30:40, 30:50, le Coran \u00e9num\u00e8re les actes divins : cr\u00e9er, donner la vie, faire mourir, redonner la vie.",
              axe5_frequence: "Pour la mission du khalifa, la vie est le don fondamental. Le khalifa est vivant par la volont\u00e9 de Dieu \u2014 sa vie elle-m\u00eame est la preuve qu\u2019il n\u2019est pas autonome. Le khalifa doit reconna\u00eetre que sa vie vient de Dieu et y retournera."
            }
          }
        }
      },
      {
        word_key: "rje", position: 13, sense_chosen: "retourner",
        analysis_axes: {
          concept_chosen: "Retour/R\u00e9version",
          concepts: {
            "Retour/R\u00e9version": {
              status: "retenu",
              senses: ["retourner", "revenir", "ramener"],
              proof_ctx: "Le verbe turja\u2019una est un inaccompli passif 2MP de la racine r-j-e. Le Lane\u2019s donne \u00ab he returned, went back, came back \u00bb. Le passif signifie \u00ab vous serez retourn\u00e9s, vous serez ramen\u00e9s \u00bb \u2014 ce n\u2019est pas un choix volontaire mais un acte divin. La construction ilayhi (vers Lui) pr\u00e9cise la destination : vers Dieu. Le retour cl\u00f4t le cycle : mort \u2192 vie \u2192 mort \u2192 vie \u2192 retour vers Dieu.",
              axe1_verset: "Le verbe turja\u2019una cl\u00f4t la s\u00e9quence du verset. Apr\u00e8s quatre \u00e9tapes (mort, vie, mort, vie), le retour vers Dieu est la conclusion finale. Le placement en fin de verset souligne que tout le cycle m\u00e8ne vers un point final : Dieu. Le passif + ilayhi montre que le retour est in\u00e9vitable et dirig\u00e9 \u2014 on ne choisit pas de revenir, on est ramen\u00e9.",
              axe2_voisins: "Le retour vers Dieu (v28) r\u00e9pond \u00e0 la corruption sur la terre (v27). Les d\u00e9viants corrompent la terre comme s\u2019ils n\u2019allaient pas \u00eatre ramen\u00e9s devant Dieu. Le rappel du retour est un avertissement : vous serez confront\u00e9s \u00e0 vos actes.",
              axe3_sourate: "La sourate al-Baqarah utilise le retour comme ponctuation r\u00e9guli\u00e8re (2:28, 2:46, 2:156, 2:245, 2:281). Chaque section rappelle que les humains retourneront vers Dieu. Le retour est la constante de la sourate \u2014 quoi que l\u2019on fasse, on reviendra vers Dieu.",
              axe4_coherence: "Le Coran utilise la racine r-j-e et ses d\u00e9riv\u00e9s pour le retour vers Dieu dans des dizaines de versets. La formule ilayhi turja\u2019una (vers Lui vous serez retourn\u00e9s) est l\u2019une des plus fr\u00e9quentes du Coran. Le retour est une certitude, pas une possibilit\u00e9.",
              axe5_frequence: "Pour la mission du khalifa, le retour vers Dieu est la fin de la succession terrestre. Le khalifa agit sur terre en sachant qu\u2019il sera ramen\u00e9 vers Dieu \u2014 cette conscience du retour oriente toutes ses actions."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:29
  // verse_id=36
  // =====================================================
  29: {
    verse_id: 36,
    analysis_id: null,
    translation_arab: "C\u2019est Lui qui a cr\u00e9\u00e9 pour vous ce qui est sur la terre enti\u00e8rement, puis Il s\u2019est tourn\u00e9 vers le ciel et les a fa\u00e7onn\u00e9s en sept cieux \u2014 et Il est de toute chose connaisseur.",
    full_translation: "C\u2019est Lui qui a cr\u00e9\u00e9 pour vous tout ce qui est sur la terre, puis Il a orient\u00e9 Sa volont\u00e9 vers le ciel et en fit sept cieux. Et Il est Omniscient.",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset decrit la creation en deux mouvements. Le pronom **huwa** (Il) est le sujet emphase. Le verbe **khalaqa** est un accompli (la creation est achevee). Le mot **jami\u2019an** est un adverbe qui signifie \u00ab entierement, dans sa totalite \u00bb. Le verbe **istawa** est un accompli forme VIII de s-w-y suivi de la preposition ila. La forme VIII signifie \u00ab se diriger vers, se tourner vers \u00bb. Le Lane\u2019s donne pour istawa ila al-sama\u2019 \u00ab he directed himself, or his regard, towards the heaven \u00bb. Le verbe **fa-sawwahunna** est un accompli forme II de s-w-y avec le pronom 3FP (puis Il les a faconnees \u2014 la forme II signifie \u00ab rendre droit, parfaire, faconner \u00bb). Le mot **sab\u2019a** est le nombre sept. Le mot **samawatin** est un nom pluriel indefini (des cieux). Le mot **\u2018alimun** est un nom intensif de la racine e-l-m (connaisseur par excellence \u2014 forme intensive qui indique que la connaissance est complete et permanente).

\u00a7JUSTIFICATION\u00a7
**cree** \u2014 Le sens retenu est \u00ab Creation/Production \u00bb. Direct et litteral.

**entierement** \u2014 Le sens retenu est \u00ab Totalite \u00bb pour jami\u2019an. Le mot \u00ab entierement \u00bb capture la totalite sans exception. L\u2019alternative \u00ab ensemble \u00bb est ecartee car elle implique un regroupement, pas une totalite.

**s\u2019est tourne vers** \u2014 Le sens retenu est \u00ab Direction/Orientation \u00bb pour istawa. La forme VIII + ila = se diriger vers. L\u2019alternative \u00ab s\u2019est eleve vers \u00bb est ecartee car c\u2019est une interpretation d\u2019istawa qui pose des problemes theologiques. Le Lane\u2019s donne clairement \u00ab he directed himself towards \u00bb.

**faconnes** \u2014 Le sens retenu est \u00ab Rectitude/Perfection \u00bb pour sawwa. La forme II signifie \u00ab rendre droit, parfaire \u00bb. Le mot \u00ab faconner \u00bb capture l\u2019idee de donner une forme achevee. L\u2019alternative \u00ab egaliser \u00bb est ecartee car c\u2019est le sens \u00ab Egalite/Equilibre \u00bb.

**connaisseur** \u2014 Le sens retenu est \u00ab Savoir/Connaissance \u00bb. Le mot alim est une forme intensive qui designe celui qui sait tout. L\u2019alternative \u00ab savant \u00bb est ecartee car elle implique un apprentissage \u2014 alim indique une connaissance inherente. \u00ab Omniscient \u00bb est ecarte car c\u2019est du vocabulaire theologique.

\u00a7CRITIQUE\u00a7
**oriente Sa volonte vs s\u2019est tourne vers** \u2014 Les traductions courantes donnent \u00ab Il a oriente Sa volonte vers le ciel \u00bb ou \u00ab Il S\u2019est etabli au-dessus du ciel \u00bb. Ces traductions ajoutent des mots absents du texte (\u00ab volonte \u00bb, \u00ab s\u2019etablir \u00bb). Le verbe istawa ila signifie dans le Lane\u2019s \u00ab se diriger vers, tourner son attention vers \u00bb. Le texte ne dit ni \u00ab volonte \u00bb ni \u00ab etablissement \u00bb \u2014 il dit simplement \u00ab Il s\u2019est tourne vers le ciel \u00bb.
**Omniscient vs connaisseur** \u2014 \u00ab Omniscient \u00bb est du vocabulaire theologique chretien. Le texte dit \u2018alim \u2014 connaisseur. C\u2019est une forme intensive mais pas un titre.`,
    segments: [
      { fr: "Lui", phon: "huwa", arabic: "\u0647\u064f\u0648\u064e", is_particle: true, position: 1 },
      { fr: "celui qui", phon: "alladhi", arabic: "\u0627\u0644\u0651\u064e\u0630\u0650\u0649", is_particle: true, position: 2 },
      { fr: "a cr\u00e9\u00e9", pos: "verbe", phon: "khalaqa", arabic: "\u062e\u064e\u0644\u064e\u0642\u064e", word_key: "xlq", is_particle: false, sense_retenu: "cr\u00e9er", position: 3 },
      { fr: "pour vous", phon: "lakum", arabic: "\u0644\u064e\u0643\u064f\u0645", is_particle: true, position: 4 },
      { fr: "ce qui", phon: "m\u0101", arabic: "\u0645\u0651\u064e\u0627", is_particle: true, position: 5 },
      { fr: "sur", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 6 },
      { fr: "la terre", pos: "nom", phon: "al-ardi", arabic: "\u0627\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 7 },
      { fr: "enti\u00e8rement", pos: "nom", phon: "jami\u2018an", arabic: "\u062c\u064e\u0645\u0650\u064a\u0639\u064b\u0627", word_key: "jme", is_particle: false, sense_retenu: "enti\u00e8rement", position: 8 },
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", is_particle: true, position: 9 },
      { fr: "Il s\u2019est tourn\u00e9 vers", pos: "verbe", phon: "istaw\u0101", arabic: "\u0627\u0633\u0652\u062a\u064e\u0648\u064e\u0649\u0640\u0653", word_key: "swy", is_particle: false, sense_retenu: "se tourner vers", position: 10 },
      { fr: "vers", phon: "il\u0101", arabic: "\u0625\u0650\u0644\u064e\u0649", is_particle: true, position: 11 },
      { fr: "le ciel", pos: "nom", phon: "al-sam\u0101\u2019i", arabic: "\u0627\u0644\u0633\u0651\u064e\u0645\u064e\u0627\u0653\u0621\u0650", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 12 },
      { fr: "puis les a fa\u00e7onn\u00e9s", pos: "verbe", phon: "fa-saww\u0101hunna", arabic: "\u0641\u064e\u0633\u064e\u0648\u0651\u064e\u0649\u0640\u0670\u0647\u064f\u0646\u0651\u064e", word_key: "swy", is_particle: false, sense_retenu: "fa\u00e7onner", position: 13 },
      { fr: "sept", pos: "nom", phon: "sab\u2018a", arabic: "\u0633\u064e\u0628\u0652\u0639\u064e", word_key: "sbe", is_particle: false, sense_retenu: "sept", position: 14 },
      { fr: "cieux", pos: "nom", phon: "samaw\u0101tin", arabic: "\u0633\u064e\u0645\u064e\u0640\u0670\u0648\u064e\u0640\u0670\u062a\u064d", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 15 },
      { fr: "et Lui", phon: "wa huwa", arabic: "\u0648\u064e\u0647\u064f\u0648\u064e", is_particle: true, position: 16 },
      { fr: "de toute", pos: "nom", phon: "bi-kulli", arabic: "\u0628\u0650\u0643\u064f\u0644\u0651\u0650", word_key: "kll", is_particle: false, sense_retenu: "totalit\u00e9", position: 17 },
      { fr: "chose", phon: "shay\u2019in", arabic: "\u0634\u064e\u0649\u0652\u0621\u064d", is_particle: true, position: 18 },
      { fr: "connaisseur", pos: "nom", phon: "\u2018al\u012bmun", arabic: "\u0639\u064e\u0644\u0650\u064a\u0645\u064c", word_key: "elm", is_particle: false, sense_retenu: "connaisseur", position: 19 }
    ],
    words: [
      {
        word_key: "xlq", position: 3, sense_chosen: "cr\u00e9er",
        analysis_axes: {
          concept_chosen: "Cr\u00e9ation/Production",
          concepts: {
            "Cr\u00e9ation/Production": {
              status: "retenu",
              senses: ["cr\u00e9er", "produire", "fa\u00e7onner"],
              proof_ctx: "Le verbe khalaqa est un accompli de la racine kh-l-q. Le Lane\u2019s donne \u00ab he created, originated, produced \u00bb. L\u2019accompli indique que la cr\u00e9ation est achev\u00e9e. L\u2019objet est m\u0101 fi al-ard jami\u2019an (ce qui est sur la terre enti\u00e8rement). La pr\u00e9position lakum (pour vous) indique la finalit\u00e9 : la cr\u00e9ation est destin\u00e9e aux humains. Dieu a cr\u00e9\u00e9 la terre et tout ce qu\u2019elle contient pour les humains.",
              axe1_verset: "Le verbe khalaqa est le premier acte d\u00e9crit dans le verset. Dieu a cr\u00e9\u00e9 pour vous tout ce qui est sur la terre, PUIS Il s\u2019est tourn\u00e9 vers le ciel. La cr\u00e9ation terrestre pr\u00e9c\u00e8de la cr\u00e9ation c\u00e9leste dans l\u2019\u00e9nonc\u00e9. La construction lakum (pour vous) place l\u2019humain au centre de la cr\u00e9ation terrestre \u2014 la terre a \u00e9t\u00e9 cr\u00e9\u00e9e POUR lui.",
              axe2_voisins: "La cr\u00e9ation du verset 29 r\u00e9pond au cycle mort-vie du verset 28. Apr\u00e8s avoir \u00e9tabli que Dieu donne la vie et la mort, le verset 29 \u00e9largit : Dieu a aussi cr\u00e9\u00e9 tout ce qui est sur la terre. Le verset 30 compl\u00e8tera : Dieu place un khalifa sur cette terre cr\u00e9\u00e9e. La s\u00e9quence est logique : cycle vital \u2192 cr\u00e9ation \u2192 succession.",
              axe3_sourate: "La sourate al-Baqarah \u00e9tablit la cr\u00e9ation comme fondement de l\u2019autorit\u00e9 divine. En 2:21-22, Dieu dit \u00ab adorez votre Ma\u00eetre, qui vous a cr\u00e9\u00e9s, vous et ceux avant vous \u00bb. La cr\u00e9ation est l\u2019argument premier pour l\u2019adoration. En 2:29, la cr\u00e9ation est \u00e9largie \u00e0 tout ce qui est sur la terre.",
              axe4_coherence: "Le Coran utilise la racine kh-l-q plus de 250 fois. La cr\u00e9ation est l\u2019acte fondateur qui \u00e9tablit la souverainet\u00e9 de Dieu sur Sa cr\u00e9ation. Le Cr\u00e9ateur a l\u2019autorit\u00e9 sur ce qu\u2019Il a cr\u00e9\u00e9.",
              axe5_frequence: "Pour la mission du khalifa, la cr\u00e9ation est le domaine qu\u2019il doit g\u00e9rer. La terre et tout ce qu\u2019elle contient ont \u00e9t\u00e9 cr\u00e9\u00e9s pour les humains \u2014 le khalifa est le g\u00e9rant de cette cr\u00e9ation, pas son propri\u00e9taire."
            }
          }
        }
      },
      {
        word_key: "ard", position: 7, sense_chosen: "terre",
        analysis_axes: {
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays"],
              proof_ctx: "Le nom al-ardi est au cas g\u00e9nitif apr\u00e8s la pr\u00e9position fi. La terre est ici le lieu o\u00f9 se trouvent les choses cr\u00e9\u00e9es pour les humains. L\u2019article d\u00e9fini al- indique la terre dans son ensemble \u2014 tout le globe, pas un terrain particulier.",
              axe1_verset: "La terre est le lieu de la cr\u00e9ation destin\u00e9e aux humains (m\u0101 fi al-ard jami\u2019an). Elle est mise en contraste avec le ciel (al-sama\u2019) mentionn\u00e9 ensuite. Le verset pr\u00e9sente deux domaines : la terre (cr\u00e9\u00e9e pour les humains) et le ciel (fa\u00e7onn\u00e9 en sept cieux). La terre est le domaine humain, le ciel est le domaine divin.",
              axe2_voisins: "La terre du verset 29 est le m\u00eame lieu que celui de la corruption (v27) et de la succession (v30). La terre corrompue au v27 est la m\u00eame terre cr\u00e9\u00e9e pour les humains au v29 et le lieu du khalifa au v30. Le contraste est frappant : Dieu cr\u00e9e la terre pour les humains, certains la corrompent, Dieu y place un khalifa.",
              axe3_sourate: "La terre dans al-Baqarah est le th\u00e9\u00e2tre de l\u2019\u00e9preuve humaine. La sourate pr\u00e9sente la terre comme un don divin (2:22, 2:29) qui peut \u00eatre soit respect\u00e9 soit corrompu (2:11, 2:27, 2:30). Le sort de la terre d\u00e9pend de la qualit\u00e9 de la succession humaine.",
              axe4_coherence: "Le Coran pr\u00e9sente la terre comme cr\u00e9\u00e9e pour les humains (2:29, 45:13, 31:20) et comme lieu de la succession divine (2:30, 6:165, 27:62). La terre est un d\u00e9p\u00f4t sacr\u00e9 confi\u00e9 \u00e0 l\u2019humanit\u00e9.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le territoire de la succession. Tout ce qui est sur la terre a \u00e9t\u00e9 cr\u00e9\u00e9 pour les humains \u2014 le khalifa doit en prendre soin, l\u2019utiliser et le transmettre."
            }
          }
        }
      },
      {
        word_key: "jme", position: 8, sense_chosen: "enti\u00e8rement",
        analysis_axes: {
          concept_chosen: "Totalit\u00e9",
          concepts: {
            "Totalit\u00e9": {
              status: "retenu",
              senses: ["enti\u00e8rement", "totalit\u00e9", "tous"],
              proof_ctx: "Le mot jami\u2019an est un adverbe (hal) de la racine j-m-e. Le Lane\u2019s donne \u00ab altogether, the whole, entirely \u00bb. En position d\u2019adverbe apr\u00e8s m\u0101 fi al-ard, il signifie \u00ab ce qui est sur la terre dans sa totalit\u00e9, sans rien exclure \u00bb. La totalit\u00e9 est absolue : Dieu a cr\u00e9\u00e9 TOUT ce qui est sur la terre pour les humains.",
              axe1_verset: "Le mot jami\u2019an renforce l\u2019universalit\u00e9 de la cr\u00e9ation pour les humains. Ce n\u2019est pas une partie de la terre qui est cr\u00e9\u00e9e pour eux, c\u2019est la totalit\u00e9 \u2014 les plantes, les animaux, les min\u00e9raux, tout. Le mot est plac\u00e9 apr\u00e8s al-ard pour couvrir tout le contenu de la terre. Cette totalit\u00e9 rend le recouvrement encore plus absurde (v28) : comment recouvrir Dieu quand tout ce qui vous entoure est Sa cr\u00e9ation ?",
              axe2_voisins: "La totalit\u00e9 de la cr\u00e9ation terrestre (v29) contraste avec la partialit\u00e9 de la corruption (v27). Les d\u00e9viants corrompent sur la terre, mais Dieu a cr\u00e9\u00e9 pour les humains la totalit\u00e9 de la terre. La corruption est locale, la cr\u00e9ation est totale.",
              axe3_sourate: "La sourate al-Baqarah utilise la totalit\u00e9 comme argument d\u2019autorit\u00e9 divine. En 2:29, tout est cr\u00e9\u00e9 pour les humains. En 2:284, tout ce qui est dans les cieux et sur la terre appartient \u00e0 Dieu. La totalit\u00e9 \u00e9tablit la souverainet\u00e9 absolue.",
              axe4_coherence: "Le Coran utilise jami\u2019an pour souligner la totalit\u00e9 dans plusieurs contextes (2:29, 2:38, 10:65, 39:53, 45:13). En 45:13, Dieu a soumis pour vous ce qui est dans les cieux et sur la terre jami\u2019an \u2014 la totalit\u00e9 est un don.",
              axe5_frequence: "Pour la mission du khalifa, la totalit\u00e9 de la cr\u00e9ation est son domaine de responsabilit\u00e9. Rien sur la terre n\u2019\u00e9chappe \u00e0 sa succession \u2014 il est responsable de tout."
            },
            "Rassemblement/Union": {
              status: "probable",
              senses: ["rassembler", "r\u00e9unir", "assembler", "ensemble"],
              proof_ctx: "Le rassemblement est le sens premier de j-m-e (r\u00e9unir des choses \u00e9parses). En position d\u2019adverbe, jami\u2019an signifie \u00ab dans la totalit\u00e9 \u00bb mais le sens de rassemblement est toujours pr\u00e9sent en arri\u00e8re-plan : la cr\u00e9ation est un rassemblement de tout ce qui est sur la terre pour les humains.",
              axe1_verset: "Le rassemblement serait compatible : Dieu a rassembl\u00e9 tout pour les humains. Mais le contexte privil\u00e9gie la totalit\u00e9 (sans exception) plut\u00f4t que le rassemblement (r\u00e9unir des parties).",
              axe2_voisins: "Le rassemblement reviendra dans la sourate avec les r\u00e9cits de communaut\u00e9s rassembl\u00e9es. Ici, le contexte est la cr\u00e9ation, pas le rassemblement social.",
              axe3_sourate: "La sourate utilise j-m-e dans d\u2019autres contextes pour le rassemblement (2:148, 2:203). Ici, l\u2019adverbe privil\u00e9gie la totalit\u00e9.",
              axe4_coherence: "Le Coran distingue jami\u2019an adverbe (enti\u00e8rement) et jam\u2019 nom (rassemblement). Les deux sens coexistent dans la racine.",
              axe5_frequence: "Le rassemblement est compl\u00e9mentaire \u00e0 la totalit\u00e9 \u2014 le khalifa doit rassembler et g\u00e9rer la totalit\u00e9."
            },
            "Communaut\u00e9": {
              status: "nul",
              senses: ["communaut\u00e9", "groupe", "assembl\u00e9e"],
              proof_ctx: "La communaut\u00e9 (jama\u2019a) est un d\u00e9riv\u00e9 de j-m-e mais le contexte ne parle pas de communaut\u00e9 \u2014 il parle de la totalit\u00e9 de la cr\u00e9ation terrestre."
            }
          }
        }
      },
      {
        word_key: "swy", position: 10, sense_chosen: "se tourner vers",
        analysis_axes: {
          concept_chosen: "Direction/Orientation",
          concepts: {
            "Direction/Orientation": {
              status: "retenu",
              senses: ["se diriger vers", "se tourner vers"],
              proof_ctx: "Le verbe istaw\u0101 est un accompli forme VIII de la racine s-w-y suivi de la pr\u00e9position ila. Le Lane\u2019s donne pour istaw\u0101 ila al-sam\u0101\u2019 \u00ab he directed himself, or his regard, towards the heaven \u00bb. La forme VIII avec ila signifie \u00ab se diriger vers, se tourner vers \u00bb. Le sens est directionnel : Dieu s\u2019est tourn\u00e9 vers le ciel apr\u00e8s avoir cr\u00e9\u00e9 la terre. Ce n\u2019est pas \u00ab s\u2019\u00e9lever vers \u00bb ni \u00ab s\u2019\u00e9tablir sur \u00bb mais \u00ab se diriger vers \u00bb.",
              axe1_verset: "Le verbe istaw\u0101 marque la transition entre les deux mouvements de la cr\u00e9ation : d\u2019abord la terre, puis le ciel. Le thumma (puis) pr\u00e9c\u00e8de istaw\u0101 pour marquer la s\u00e9quence temporelle. Dieu s\u2019est tourn\u00e9 vers le ciel pour le fa\u00e7onner \u2014 l\u2019action suivante (saww\u0101hunna) est la cons\u00e9quence de cette direction. La direction pr\u00e9c\u00e8de l\u2019action.",
              axe2_voisins: "La direction vers le ciel (v29) compl\u00e8te la cr\u00e9ation terrestre du m\u00eame verset. Le verset 30 redescendra sur terre avec le placement du khalifa. Le mouvement est : terre (cr\u00e9ation) \u2192 ciel (orientation et fa\u00e7onnement) \u2192 terre (\u00e0 nouveau, pour le khalifa). Le ciel est un d\u00e9tour dans la narration centrée sur la terre.",
              axe3_sourate: "La sourate al-Baqarah mentionne istaw\u0101 une seule fois (2:29). C\u2019est un verbe qui revient dans d\u2019autres sourates pour parler de Dieu et le tr\u00f4ne (7:54, 10:3, 13:2, 20:5, 25:59, 32:4, 57:4) mais avec ala (sur), pas ila (vers). La distinction ila/ala est cruciale : ila = direction vers, ala = \u00e9tablissement sur.",
              axe4_coherence: "Le Coran utilise istaw\u0101 ila dans d\u2019autres contextes (41:11) pour le m\u00eame sens : Dieu s\u2019est tourn\u00e9 vers le ciel. La pr\u00e9position ila avec istaw\u0101 donne toujours le sens de direction, pas d\u2019\u00e9tablissement. Les passages avec ala (istaw\u0101 ala al-arsh) sont diff\u00e9rents.",
              axe5_frequence: "Pour la mission du khalifa, la direction divine est le mod\u00e8le. Dieu se tourne vers Sa cr\u00e9ation pour la parfaire \u2014 le khalifa doit se tourner vers sa responsabilit\u00e9 terrestre pour l\u2019am\u00e9liorer."
            },
            "\u00c9galit\u00e9/\u00c9quilibre": {
              status: "nul",
              senses: ["\u00eatre \u00e9gal", "\u00e9quilibrer", "uniformiser"],
              proof_ctx: "L\u2019\u00e9galit\u00e9 est un sens de base de s-w-y (\u00eatre \u00e9gal). La forme VIII istaw\u0101 avec ila ne signifie pas \u00ab \u00e9quilibrer \u00bb mais \u00ab se diriger vers \u00bb. Le contexte est directionnel, pas comparatif."
            },
            "Rectitude/Perfection": {
              status: "probable",
              senses: ["\u00eatre droit", "achever", "parfaire"],
              proof_ctx: "La rectitude est un sens de s-w-y (rendre droit). La forme VIII istaw\u0101 peut signifier \u00ab \u00eatre droit, \u00eatre achev\u00e9 \u00bb. Avec ila, le sens directionnel domine, mais l\u2019id\u00e9e de rectitude reste en arri\u00e8re-plan \u2014 Dieu se tourne vers le ciel pour le rendre droit, le parfaire.",
              axe1_verset: "La rectitude serait compatible comme sens secondaire : Dieu s\u2019est tourn\u00e9 vers le ciel pour le rendre droit. Mais le verbe saww\u0101 qui suit porte d\u00e9j\u00e0 le sens de \u00ab parfaire \u00bb \u2014 istaw\u0101 ila est le mouvement, saww\u0101 est l\u2019action.",
              axe2_voisins: "La rectitude sera port\u00e9e par saww\u0101 (forme II) qui appara\u00eet juste apr\u00e8s. Les deux formes de s-w-y se compl\u00e8tent : la VIII pour la direction, la II pour le fa\u00e7onnement.",
              axe3_sourate: "La sourate utilise la racine s-w-y dans d\u2019autres contextes. La rectitude est un th\u00e8me important mais ici la direction pr\u00e9vaut.",
              axe4_coherence: "Le Coran distingue les formes de s-w-y : forme I = \u00eatre \u00e9gal, forme II = rendre droit/fa\u00e7onner, forme VIII = se diriger vers/\u00eatre droit. La forme VIII avec ila = direction.",
              axe5_frequence: "La rectitude et la direction sont compl\u00e9mentaires pour le khalifa \u2014 se diriger droit vers l\u2019objectif."
            }
          }
        }
      },
      {
        word_key: "smw", position: 12, sense_chosen: "ciel",
        analysis_axes: {
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["ciel", "ce qui est en haut"],
              proof_ctx: "Le nom al-sam\u0101\u2019i est un nom f\u00e9minin d\u00e9fini au cas g\u00e9nitif de s-m-w. Le Lane\u2019s donne \u00ab the sky, the heaven, what is above \u00bb. Le ciel est ici la mati\u00e8re que Dieu va fa\u00e7onner en sept cieux. Le singulier al-sam\u0101\u2019 d\u00e9signe le ciel comme entit\u00e9 unique avant son fa\u00e7onnement, le pluriel samaw\u0101t d\u00e9signe les sept cieux apr\u00e8s le fa\u00e7onnement.",
              axe1_verset: "Le ciel est l\u2019objet vers lequel Dieu se tourne (istaw\u0101 ila al-sam\u0101\u2019i). Il est d\u2019abord mentionn\u00e9 au singulier (la mati\u00e8re brute) puis au pluriel (sab\u2019a samaw\u0101tin = sept cieux, le r\u00e9sultat du fa\u00e7onnement). Le verset montre la transformation : du ciel brut aux sept cieux fa\u00e7onn\u00e9s. Le ciel est mis en contraste avec la terre : la terre est cr\u00e9\u00e9e pour les humains, le ciel est fa\u00e7onn\u00e9 par Dieu.",
              axe2_voisins: "Le ciel du verset 29 compl\u00e8te la terre des versets pr\u00e9c\u00e9dents. Le verset 22 avait d\u00e9j\u00e0 mentionn\u00e9 la terre comme tapis et le ciel comme toit. Le verset 29 reprend et approfondit : Dieu a cr\u00e9\u00e9 la terre enti\u00e8rement, puis a fa\u00e7onn\u00e9 le ciel en sept niveaux.",
              axe3_sourate: "La sourate al-Baqarah associe syst\u00e9matiquement terre et ciel (2:22, 2:29, 2:33, 2:107, 2:116, 2:164, 2:255, 2:284). Le couple terre-ciel est le cadre spatial de toute la sourate \u2014 tout se passe entre la terre et le ciel.",
              axe4_coherence: "Le Coran mentionne le ciel au singulier et au pluriel dans des contextes diff\u00e9rents. Le singulier d\u00e9signe souvent le ciel visible, le pluriel les sept niveaux. En 2:29, les deux apparaissent dans le m\u00eame verset pour montrer la transformation.",
              axe5_frequence: "Pour la mission du khalifa, le ciel est la dimension sup\u00e9rieure qui surplombe la terre. Le khalifa agit sur terre mais sous le ciel \u2014 il est connect\u00e9 \u00e0 ce qui est au-dessus. Les sept cieux montrent la complexit\u00e9 de l\u2019architecture divine."
            }
          }
        }
      },
      {
        word_key: "swy", position: 13, sense_chosen: "fa\u00e7onner",
        analysis_axes: {
          concept_chosen: "Rectitude/Perfection",
          concepts: {
            "Rectitude/Perfection": {
              status: "retenu",
              senses: ["fa\u00e7onner", "rendre droit", "parfaire"],
              proof_ctx: "Le verbe fa-saww\u0101hunna est un accompli forme II de s-w-y avec fa- (puis) et le pronom 3FP -hunna (les, r\u00e9f\u00e9rant aux cieux). Le Lane\u2019s donne pour forme II \u00ab he made even, straight, right, he fashioned in a suitable manner \u00bb. La forme II (fa\u2019\u2019ala) intensifie : rendre parfaitement droit, fa\u00e7onner avec soin. Le pronom hunna (elles) r\u00e9f\u00e8re au ciel transform\u00e9 en sept cieux \u2014 Dieu les a fa\u00e7onn\u00e9es, les a rendues droites.",
              axe1_verset: "Le verbe saww\u0101 suit istaw\u0101 ila : d\u2019abord Dieu s\u2019est tourn\u00e9 vers le ciel, puis Il les a fa\u00e7onn\u00e9s en sept cieux. Le fa\u00e7onnement est l\u2019acte cr\u00e9atif qui donne forme au ciel brut. Le r\u00e9sultat est sab\u2019a samaw\u0101tin (sept cieux) \u2014 le ciel unique devient sept cieux distincts et parfaits. La forme II intensifie : ce n\u2019est pas une formation grossi\u00e8re mais un fa\u00e7onnement soign\u00e9.",
              axe2_voisins: "Le fa\u00e7onnement des cieux (v29) pr\u00e9c\u00e8de le placement du khalifa (v30). Dieu a d\u2019abord cr\u00e9\u00e9 la terre enti\u00e8rement et fa\u00e7onn\u00e9 les sept cieux avant de placer le khalifa. L\u2019infrastructure est en place avant l\u2019installation du g\u00e9rant.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine s-w-y dans d\u2019autres contextes. Le fa\u00e7onnement divin est un th\u00e8me qui revient pour d\u00e9crire la cr\u00e9ation d\u2019Adam (15:29, 32:9, 38:72). Le fa\u00e7onnement est l\u2019acte de donner forme et perfection.",
              axe4_coherence: "Le Coran utilise la forme II de s-w-y (saww\u0101) pour le fa\u00e7onnement divin des cieux (2:29, 41:12) et de l\u2019humain (82:7, 91:7). Le fa\u00e7onnement est un acte d\u2019excellence \u2014 donner la meilleure forme possible. En 82:7, Dieu \u00ab t\u2019a cr\u00e9\u00e9, t\u2019a fa\u00e7onn\u00e9, t\u2019a \u00e9quilibr\u00e9 \u00bb.",
              axe5_frequence: "Pour la mission du khalifa, le fa\u00e7onnement est le mod\u00e8le. Comme Dieu fa\u00e7onne les cieux avec perfection, le khalifa doit fa\u00e7onner la civilisation terrestre avec soin. Le fa\u00e7onnement est l\u2019antith\u00e8se de la corruption."
            },
            "\u00c9galit\u00e9/\u00c9quilibre": {
              status: "nul",
              senses: ["\u00eatre \u00e9gal", "\u00e9quilibrer"],
              proof_ctx: "L\u2019\u00e9galit\u00e9 est le sens de base de s-w-y. La forme II saww\u0101 signifie \u00ab rendre droit, parfaire, fa\u00e7onner \u00bb, pas \u00ab \u00e9galiser \u00bb. Le contexte est le fa\u00e7onnement des cieux, pas une \u00e9galisation."
            }
          }
        }
      },
      {
        word_key: "kll", position: 17, sense_chosen: "totalit\u00e9",
        analysis_axes: {
          concept_chosen: "Totalit\u00e9",
          concepts: {
            "Totalit\u00e9": {
              status: "retenu",
              senses: ["totalit\u00e9", "tout", "chaque"],
              proof_ctx: "Le nom kulli est au cas g\u00e9nitif de la racine k-l-l, pr\u00e9c\u00e9d\u00e9 de bi. Le Lane\u2019s donne \u00ab all, the whole, every \u00bb. La construction bi-kulli shay\u2019in (de toute chose) qualifie \u2018alim (connaisseur) : Dieu est connaisseur de toute chose, sans exception. La totalit\u00e9 de la connaissance divine englobe tout ce qui existe \u2014 terre, cieux, et tout ce qu\u2019ils contiennent.",
              axe1_verset: "Le mot kulli est dans la formule finale wa huwa bi-kulli shay\u2019in \u2018alimun (et Il est de toute chose connaisseur). Cette formule cl\u00f4t le verset sur la connaissance totale de Dieu. Apr\u00e8s la cr\u00e9ation de la terre et le fa\u00e7onnement des cieux, le verset affirme que Dieu conna\u00eet tout. La totalit\u00e9 de la cr\u00e9ation (jami\u2019an) est compl\u00e9t\u00e9e par la totalit\u00e9 de la connaissance (bi-kulli shay\u2019in).",
              axe2_voisins: "La totalit\u00e9 de la connaissance divine (v29) pr\u00e9pare le dialogue avec les anges (v30). Quand les anges questionneront le choix du khalifa, Dieu r\u00e9pondra \u00ab je sais ce que vous ne savez pas \u00bb \u2014 la connaissance totale affirm\u00e9e au v29 fonde l\u2019autorit\u00e9 de la r\u00e9ponse au v30.",
              axe3_sourate: "La sourate al-Baqarah utilise la formule \u2018alim ou \u2018alimun dans plusieurs versets pour rappeler la connaissance divine. Cette connaissance est la base de l\u2019autorit\u00e9 l\u00e9gislative de Dieu dans la sourate.",
              axe4_coherence: "La formule bi-kulli shay\u2019in \u2018alimun revient des dizaines de fois dans le Coran. C\u2019est l\u2019un des attributs divins les plus fr\u00e9quents. La totalit\u00e9 de la connaissance divine est une constante coranique.",
              axe5_frequence: "Pour la mission du khalifa, la connaissance totale de Dieu est une consolation et un avertissement. Dieu sait tout \u2014 le khalifa ne peut pas cacher ses actes, mais il peut aussi compter sur la connaissance divine pour le guider."
            }
          }
        }
      },
      {
        word_key: "elm", position: 19, sense_chosen: "connaisseur",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["connaisseur", "savoir", "conna\u00eetre"],
              proof_ctx: "Le mot \u2018al\u012bmun est un adjectif intensif (fa\u2018\u012bl) de la racine e-l-m. Le Lane\u2019s donne \u00ab knowing, cognizant, possessing knowledge \u00bb. La forme fa\u2018\u012bl indique l\u2019intensit\u00e9 et la permanence : \u2018al\u012bm n\u2019est pas celui qui sait quelque chose mais celui qui sait tout, de mani\u00e8re inh\u00e9rente et permanente. C\u2019est un attribut divin par excellence dans le Coran.",
              axe1_verset: "Le mot \u2018al\u012bm cl\u00f4t le verset apr\u00e8s la description de la cr\u00e9ation. La s\u00e9quence est : cr\u00e9ation de la terre, fa\u00e7onnement des cieux, connaissance de toute chose. Le Cr\u00e9ateur conna\u00eet tout ce qu\u2019Il a cr\u00e9\u00e9. La connaissance n\u2019est pas s\u00e9par\u00e9e de la cr\u00e9ation \u2014 Dieu conna\u00eet parce qu\u2019Il a cr\u00e9\u00e9, et Il cr\u00e9e avec connaissance.",
              axe2_voisins: "La connaissance de Dieu (v29) pr\u00e9pare la r\u00e9ponse au dialogue avec les anges (v30). Les anges questionneront le choix du khalifa, Dieu r\u00e9pondra \u00ab je sais ce que vous ne savez pas \u00bb. Le verset 29 \u00e9tablit que Dieu sait tout, le verset 30 l\u2019illustre dans un cas concret.",
              axe3_sourate: "La sourate al-Baqarah pr\u00e9sente la connaissance divine comme argument d\u2019autorit\u00e9. Dieu sait et les humains ne savent pas \u2014 c\u2019est pourquoi ils doivent suivre la guidance. Le contraste savoir divin / ignorance humaine structure toute la sourate.",
              axe4_coherence: "Le Coran utilise \u2018al\u012bm plus de 150 fois, presque exclusivement pour Dieu. C\u2019est l\u2019attribut divin le plus fr\u00e9quent apr\u00e8s rah\u012bm (mis\u00e9ricordieux). La connaissance divine est le fondement de la l\u00e9gitimit\u00e9 divine.",
              axe5_frequence: "Pour la mission du khalifa, la connaissance est l\u2019outil principal. Le khalifa ne sait pas tout, mais il a acc\u00e8s \u00e0 la r\u00e9v\u00e9lation qui vient du Connaisseur absolu. Le khalifa est le relais de la connaissance divine sur terre."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:30
  // verse_id=37
  // =====================================================
  30: {
    verse_id: 37,
    analysis_id: null,
    translation_arab: "Et quand ton Ma\u00eetre a dit aux anges : \u00ab Je place sur la terre un successeur. \u00bb Ils ont dit : \u00ab Vas-Tu y placer quelqu\u2019un qui y corrompt et verse le sang, alors que nous, nous glorifions par Ta louange et nous sanctifions pour Toi ? \u00bb Il a dit : \u00ab Je sais ce que vous ne savez pas. \u00bb",
    full_translation: "Lorsque Ton Seigneur confia aux Anges : \u00ab Je vais \u00e9tablir sur la terre un vicaire \u00ab Khalife \u00bb. Ils dirent : \u00ab Vas-Tu y d\u00e9signer un qui y mettra le d\u00e9sordre et r\u00e9pandra le sang, quand nous sommes l\u00e0 \u00e0 Te sanctifier et \u00e0 Te glorifier ? \u00bb - Il dit : \u00ab En v\u00e9rit\u00e9, Je sais ce que vous ne savez pas ! \u00bb.",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Ce verset est le dialogue entre Dieu et les anges sur la creation du khalifa. Le verbe **qala** est un accompli (Il a dit \u2014 un evenement passe). Le mot **rabbuka** est en idafa avec le pronom 2MS (ton Maitre). Le mot **lil-mala\u2019ikati** est un nom pluriel precede de li (aux anges \u2014 la preposition li indique le destinataire). Le mot **ja\u2019ilun** est un participe actif de j-e-l (une forme qui dit que l\u2019action est en cours \u2014 \u00ab je suis en train de placer, je place \u00bb). Ceci est different de ja\u2019ala (accompli) \u2014 le participe actif indique que la decision est en cours de realisation. Le mot **khalifatan** est un nom indefini de la racine kh-l-f. Le Lane\u2019s donne \u00ab a successor, a vicegerent, one who takes the place of another \u00bb. Le verbe **yufsidu** est un inaccompli forme IV de f-s-d (celui qui cause activement la corruption). Le verbe **yasfiku** est un inaccompli de s-f-k. Le Lane\u2019s donne \u00ab he shed, poured forth blood \u00bb. Le mot **al-dima\u2019a** est un nom defini pluriel (les sangs). Le verbe **nusabbihu** est un inaccompli forme II de s-b-h (nous glorifions \u2014 la forme II intensifie la glorification). Le mot **bi-hamdika** est en idafa avec le pronom 2MS precede de bi (par ta louange \u2014 l\u2019instrument de la glorification est la louange). Le verbe **nuqaddisu** est un inaccompli forme II de q-d-s (nous sanctifions \u2014 la forme II signifie \u00ab rendre saint, consacrer \u00bb). Le verbe **a\u2019lamu** est un inaccompli 1ere personne (je sais \u2014 emploi de la forme elative qui signifie \u00ab je sais mieux, je sais plus \u00bb).

\u00a7JUSTIFICATION\u00a7
**Maitre** \u2014 Le sens retenu est \u00ab Maitrise/Possession \u00bb. Deja justifie en V21.

**anges** \u2014 Le sens retenu est \u00ab Ange/Messager \u00bb. Le mot mala\u2019ika designe les messagers celestes. L\u2019alternative \u00ab roi \u00bb (sens \u00ab Royaute/Pouvoir \u00bb) est ecartee car la forme plurielle mala\u2019ika est specifique aux etres celestes.

**successeur** \u2014 Le sens retenu est \u00ab Succession/Remplacement \u00bb. Le mot khalifa dans le Lane\u2019s designe celui qui succede a un autre, qui prend sa place. L\u2019alternative \u00ab vicaire \u00bb est ecartee car c\u2019est du vocabulaire religieux chretien. \u00ab Representant \u00bb est ecarte car il implique une delegation d\u2019autorite, alors que khalifa implique une succession.

**corrompre** \u2014 Le sens retenu est \u00ab Corruption/Desordre \u00bb. La forme IV de f-s-d signifie \u00ab causer la corruption \u00bb.

**verse le sang** \u2014 Le sens retenu est \u00ab Ecoulement/Versement \u00bb pour sfk. Le Lane\u2019s donne \u00ab he shed blood \u00bb. Direct et litteral.

**glorifions** \u2014 Le sens retenu est \u00ab Glorification/Louange \u00bb. La forme II de s-b-h intensifie l\u2019action. L\u2019alternative \u00ab nager \u00bb (sens \u00ab Nage/Mouvement \u00bb) est ecartee car hors contexte.

**louange** \u2014 Le sens retenu est \u00ab Louange/Eloge \u00bb. Le mot hamd designe la louange spontanee.

**sanctifions** \u2014 Le sens retenu est \u00ab Sacralite/Purete \u00bb. La forme II de q-d-s signifie \u00ab rendre saint, consacrer \u00bb. L\u2019alternative \u00ab purifier \u00bb est ecartee car c\u2019est la racine t-h-r qui porte ce sens.

\u00a7CRITIQUE\u00a7
**vicaire/khalife vs successeur** \u2014 Les traductions courantes donnent \u00ab vicaire \u00bb ou gardent \u00ab khalife \u00bb non traduit. La racine kh-l-f signifie \u00ab venir apres, succeder \u00bb. Le Lane\u2019s donne \u00ab a successor \u00bb. Traduire par \u00ab vicaire \u00bb introduit un concept chretien de representation. Garder \u00ab khalife \u00bb non traduit masque le sens etymologique. \u00ab Successeur \u00bb est la traduction directe de la racine.
**desordre vs corruption** \u2014 Certaines traductions donnent \u00ab desordre \u00bb pour yufsidu. La racine f-s-d signifie \u00ab etre corrompu, se gater \u00bb. La forme IV (yufsidu) signifie \u00ab causer la corruption \u00bb. \u00ab Desordre \u00bb est trop faible \u2014 la corruption est un processus de degradation, pas simplement un manque d\u2019ordre.
**Seigneur vs Maitre** \u2014 Deja critique.`,
    segments: [
      { fr: "et quand", phon: "wa idh", arabic: "\u0648\u064e\u0625\u0650\u0630\u0652", is_particle: true, position: 1 },
      { fr: "a dit", pos: "verbe", phon: "q\u0101la", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
      { fr: "ton Ma\u00eetre", pos: "nom", phon: "rabbuka", arabic: "\u0631\u064e\u0628\u0651\u064f\u0643\u064e", word_key: "rbb", is_particle: false, sense_retenu: "ma\u00eetre", position: 3 },
      { fr: "aux anges", pos: "nom", phon: "lil-mal\u0101\u2019ikati", arabic: "\u0644\u0650\u0644\u0652\u0645\u064e\u0644\u064e\u0640\u0670\u0653\u0626\u0650\u0643\u064e\u0629\u0650", word_key: "mlk", is_particle: false, sense_retenu: "ange", position: 4 },
      { fr: "je place", pos: "participe_actif", phon: "ja\u2018ilun", arabic: "\u062c\u064e\u0627\u0639\u0650\u0644\u064c", word_key: "jel", is_particle: false, sense_retenu: "placer", position: 5 },
      { fr: "sur", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 6 },
      { fr: "la terre", pos: "nom", phon: "al-ardi", arabic: "\u0627\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 7 },
      { fr: "un successeur", pos: "nom", phon: "khal\u012bfatan", arabic: "\u062e\u064e\u0644\u0650\u064a\u0641\u064e\u0629\u064b", word_key: "xlf", is_particle: false, sense_retenu: "successeur", position: 8 },
      { fr: "ils ont dit", pos: "verbe", phon: "q\u0101l\u016b", arabic: "\u0642\u064e\u0627\u0644\u064f\u0648\u0653\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 9 },
      { fr: "vas-Tu placer", pos: "verbe", phon: "ataj\u2018alu", arabic: "\u0623\u064e\u062a\u064e\u062c\u0652\u0639\u064e\u0644\u064f", word_key: "jel", is_particle: false, sense_retenu: "placer", position: 10 },
      { fr: "sur elle", phon: "f\u012bh\u0101", arabic: "\u0641\u0650\u064a\u0647\u064e\u0627", is_particle: true, position: 11 },
      { fr: "qui", phon: "man", arabic: "\u0645\u064e\u0646", is_particle: true, position: 12 },
      { fr: "corrompt", pos: "verbe", phon: "yufsidu", arabic: "\u064a\u064f\u0641\u0652\u0633\u0650\u062f\u064f", word_key: "fsd", is_particle: false, sense_retenu: "corrompre", position: 13 },
      { fr: "sur elle", phon: "f\u012bh\u0101", arabic: "\u0641\u0650\u064a\u0647\u064e\u0627", is_particle: true, position: 14 },
      { fr: "et verse", pos: "verbe", phon: "yasfiku", arabic: "\u0648\u064e\u064a\u064e\u0633\u0652\u0641\u0650\u0643\u064f", word_key: "sfk", is_particle: false, sense_retenu: "verser", position: 15 },
      { fr: "le sang", pos: "nom", phon: "al-dim\u0101\u2019a", arabic: "\u0627\u0644\u062f\u0651\u0650\u0645\u064e\u0627\u0653\u0621\u064e", word_key: "dmw", is_particle: false, sense_retenu: "sang", position: 16 },
      { fr: "et nous", phon: "wa nahnu", arabic: "\u0648\u064e\u0646\u064e\u062d\u0652\u0646\u064f", is_particle: true, position: 17 },
      { fr: "glorifions", pos: "verbe", phon: "nusabbihu", arabic: "\u0646\u064f\u0633\u064e\u0628\u0651\u0650\u062d\u064f", word_key: "sbh", is_particle: false, sense_retenu: "glorifier", position: 18 },
      { fr: "par Ta louange", pos: "nom", phon: "bi-hamdika", arabic: "\u0628\u0650\u062d\u064e\u0645\u0652\u062f\u0650\u0643\u064e", word_key: "hmd", is_particle: false, sense_retenu: "louange", position: 19 },
      { fr: "et sanctifions", pos: "verbe", phon: "nuqaddisu", arabic: "\u0648\u064e\u0646\u064f\u0642\u064e\u062f\u0651\u0650\u0633\u064f", word_key: "qds", is_particle: false, sense_retenu: "sanctifier", position: 20 },
      { fr: "pour Toi", phon: "laka", arabic: "\u0644\u064e\u0643\u064e", is_particle: true, position: 21 },
      { fr: "Il a dit", pos: "verbe", phon: "q\u0101la", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 22 },
      { fr: "je sais", pos: "verbe", phon: "a\u2018lamu", arabic: "\u0623\u064e\u0639\u0652\u0644\u064e\u0645\u064f", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 23 },
      { fr: "ce que", phon: "m\u0101", arabic: "\u0645\u064e\u0627", is_particle: true, position: 24 },
      { fr: "pas", phon: "l\u0101", arabic: "\u0644\u064e\u0627", is_particle: true, position: 25 },
      { fr: "vous savez", pos: "verbe", phon: "ta\u2018lam\u016bna", arabic: "\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 26 }
    ],
    words: [
      {
        word_key: "qwl", position: 2, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["dire", "parler", "prononcer"],
              proof_ctx: "Le verbe q\u0101la est un accompli de la racine q-w-l. Le Lane\u2019s donne \u00ab he said, he spoke, he uttered \u00bb. Le verbe q\u0101la est le verbe de parole le plus courant en arabe. Il appara\u00eet trois fois dans ce verset : q\u0101la rabbuka (ton Ma\u00eetre a dit), q\u0101l\u016b (ils ont dit), q\u0101la (Il a dit). Chaque occurrence marque un tour de parole dans le dialogue entre Dieu et les anges.",
              axe1_verset: "Le verbe q\u0101la structure tout le verset en trois tours de parole. Le premier q\u0101la introduit la d\u00e9claration divine (je place un successeur). Le deuxi\u00e8me (q\u0101l\u016b) introduit la question des anges (vas-Tu y placer un corrupteur ?). Le troisi\u00e8me (q\u0101la) introduit la r\u00e9ponse divine (je sais ce que vous ne savez pas). La structure est un dialogue clos : d\u00e9claration, question, r\u00e9ponse.",
              axe2_voisins: "Le dialogue du verset 30 est le premier dialogue rapport\u00e9 de la sourate. Les versets pr\u00e9c\u00e9dents \u00e9taient descriptifs ou argumentatifs. Le verset 30 introduit la parole directe de Dieu et des anges. Le passage du r\u00e9cit au dialogue marque un changement de registre \u2014 on entre dans l\u2019histoire de la cr\u00e9ation.",
              axe3_sourate: "La sourate al-Baqarah est riche en dialogues introduits par q\u0101la : Dieu aux anges (2:30-34), Dieu \u00e0 Adam (2:35-38), Moise \u00e0 son peuple (2:54, 2:60, 2:67-71). Le verbe q\u0101la est le moteur narratif de la sourate.",
              axe4_coherence: "Le Coran utilise q\u0101la plus de 1000 fois. C\u2019est le verbe le plus fr\u00e9quent pour introduire les dialogues divins et proph\u00e9tiques. La parole est l\u2019acte fondateur \u2014 Dieu cr\u00e9e par la parole (kun fa yakun) et communique par la parole (q\u0101la).",
              axe5_frequence: "Pour la mission du khalifa, la parole est l\u2019instrument principal. Le khalifa transmet la parole divine aux humains. Le dialogue du verset 30 montre le mod\u00e8le : Dieu parle, les anges questionnent, Dieu r\u00e9pond. Le khalifa doit faciliter ce type de dialogue entre le divin et l\u2019humain."
            }
          }
        }
      },
      {
        word_key: "rbb", position: 3, sense_chosen: "ma\u00eetre",
        analysis_axes: {
          concept_chosen: "Ma\u00eetrise/Possession",
          concepts: {
            "Ma\u00eetrise/Possession": {
              status: "retenu",
              senses: ["ma\u00eetre", "seigneur", "poss\u00e9der"],
              proof_ctx: "Le mot rabbuka est un nom en idafa avec le pronom 2MS -ka (ton Ma\u00eetre). Le Lane\u2019s donne pour rabb \u00ab lord, master, owner, possessor \u00bb. Le rabb est celui qui poss\u00e8de et g\u00e8re \u2014 le ma\u00eetre qui prend soin de ce qu\u2019il poss\u00e8de. Le pronom \u00ab ton \u00bb cr\u00e9e un lien personnel entre le Ma\u00eetre et le destinataire du message. La ma\u00eetrise implique l\u2019autorit\u00e9 et la responsabilit\u00e9 : le rabb d\u00e9cide et g\u00e8re.",
              axe1_verset: "Le mot rabbuka ouvre le dialogue divin. C\u2019est en tant que Ma\u00eetre que Dieu s\u2019adresse aux anges pour annoncer la cr\u00e9ation du khalifa. La ma\u00eetrise de Dieu est le fondement de Sa d\u00e9cision : c\u2019est parce qu\u2019Il est le Ma\u00eetre de tout qu\u2019Il peut placer un successeur sur Sa terre. La r\u00e9ponse finale \u00ab je sais ce que vous ne savez pas \u00bb confirme l\u2019autorit\u00e9 du Ma\u00eetre.",
              axe2_voisins: "Le Ma\u00eetre du verset 30 est le m\u00eame qui a cr\u00e9\u00e9 la terre et les cieux (v29) et qui donne la vie et la mort (v28). La ma\u00eetrise de Dieu s\u2019\u00e9tend \u00e0 tout : cr\u00e9ation, vie, mort, et d\u00e9cision de placer un khalifa. Le titre de rabb accumule toutes les pr\u00e9rogatives \u00e9tablies dans les versets pr\u00e9c\u00e9dents.",
              axe3_sourate: "La sourate al-Baqarah utilise rabb dans des contextes vari\u00e9s : rabbukum (votre Ma\u00eetre, 2:21), rabbuka (ton Ma\u00eetre, 2:30), rabbi (mon Ma\u00eetre, 2:258, 2:260). Chaque forme \u00e9tablit une relation de ma\u00eetrise adapt\u00e9e au contexte.",
              axe4_coherence: "Le Coran utilise rabb plus de 900 fois. C\u2019est le terme le plus fr\u00e9quent pour d\u00e9signer Dieu dans Sa relation avec Sa cr\u00e9ation. Le rabb cr\u00e9e, nourrit, \u00e9duque, g\u00e8re et juge \u2014 toutes les fonctions du ma\u00eetre.",
              axe5_frequence: "Pour la mission du khalifa, le rabb est celui qui l\u2019a plac\u00e9. Le khalifa est le successeur du Ma\u00eetre sur terre. La ma\u00eetrise de Dieu l\u00e9gitime la succession du khalifa \u2014 il agit au nom du Ma\u00eetre."
            }
          }
        }
      },
      {
        word_key: "mlk", position: 4, sense_chosen: "ange",
        analysis_axes: {
          concept_chosen: "Ange/Messager",
          concepts: {
            "Ange/Messager": {
              status: "retenu",
              senses: ["ange", "messager c\u00e9leste"],
              proof_ctx: "Le mot al-mal\u0101\u2019ikati est un nom pluriel d\u00e9fini au cas g\u00e9nitif, pr\u00e9c\u00e9d\u00e9 de li (aux anges). Le Lane\u2019s donne pour malak \u00ab an angel, a messenger \u00bb. La racine m-l-k a plusieurs branches : royaut\u00e9 (malik), possession (malk), ange (malak). Le pluriel mala\u2019ika est sp\u00e9cifique aux \u00eatres c\u00e9lestes. Les anges sont les destinataires de l\u2019annonce divine \u2014 Dieu leur communique Sa d\u00e9cision avant de l\u2019ex\u00e9cuter.",
              axe1_verset: "Les anges sont les interlocuteurs de Dieu dans ce dialogue fondateur. Leur r\u00e9action \u2014 questionner le choix du khalifa \u2014 r\u00e9v\u00e8le qu\u2019ils connaissent la corruption et le sang vers\u00e9. Leur question n\u2019est pas une contestation mais une demande de compr\u00e9hension. Ils mettent en avant leur propre glorification et sanctification comme alternative au khalifa corrupteur.",
              axe2_voisins: "Les anges du verset 30 sont les premiers \u00eatres cr\u00e9\u00e9s mentionn\u00e9s dans la sourate. Les versets pr\u00e9c\u00e9dents parlaient des humains (croyants, hypocrites, d\u00e9viants). Le verset 30 introduit une nouvelle cat\u00e9gorie d\u2019\u00eatres : les anges, qui glorifient et sanctifient. Le contraste avec les humains est explicite : les humains corrompent, les anges glorifient.",
              axe3_sourate: "La sourate al-Baqarah mentionne les anges dans le r\u00e9cit d\u2019Adam (2:30-34), dans le credo (2:177, 2:285), et comme intercesseurs. Les anges sont les premiers \u00e0 se prosterner devant Adam (2:34) apr\u00e8s avoir questionn\u00e9 sa cr\u00e9ation. Leur soumission \u00e0 l\u2019ordre divin est totale.",
              axe4_coherence: "Le Coran mentionne les anges dans de nombreux passages. Ils sont pr\u00e9sent\u00e9s comme des \u00eatres ob\u00e9issants qui ne d\u00e9sob\u00e9issent jamais \u00e0 Dieu (66:6). Leur question au verset 30 n\u2019est pas une d\u00e9sob\u00e9issance mais une qu\u00eate de savoir.",
              axe5_frequence: "Pour la mission du khalifa, les anges sont des alli\u00e9s. Malgr\u00e9 leur question initiale, les anges se prosterneront devant Adam. Le khalifa b\u00e9n\u00e9ficie du soutien ang\u00e9lique dans sa mission terrestre."
            },
            "Royaut\u00e9/Pouvoir": {
              status: "nul",
              senses: ["roi", "royaume", "r\u00e9gner"],
              proof_ctx: "La royaut\u00e9 est un sens de m-l-k (malik = roi). Le pluriel mala\u2019ika est sp\u00e9cifique aux anges, pas aux rois. Le contexte parle d\u2019\u00eatres c\u00e9lestes qui glorifient Dieu."
            },
            "Possession/Propri\u00e9t\u00e9": {
              status: "nul",
              senses: ["poss\u00e9der", "propri\u00e9taire"],
              proof_ctx: "La possession est un sens de m-l-k (malk/mulk). Le pluriel mala\u2019ika ne d\u00e9signe pas des propri\u00e9taires mais des messagers c\u00e9lestes."
            }
          }
        }
      },
      {
        word_key: "jel", position: 5, sense_chosen: "placer",
        analysis_axes: {
          concept_chosen: "Action/R\u00e9alisation",
          concepts: {
            "Action/R\u00e9alisation": {
              status: "retenu",
              senses: ["placer", "faire", "rendre", "\u00e9tablir"],
              proof_ctx: "Le mot ja\u2018ilun est un participe actif de la racine j-e-l. Le Lane\u2019s donne \u00ab he made, he rendered, he placed, he appointed \u00bb. Le participe actif indique une action en cours de r\u00e9alisation : \u00ab je suis en train de placer, je place \u00bb. C\u2019est diff\u00e9rent de l\u2019accompli ja\u2019ala (il a plac\u00e9) \u2014 le participe actif montre que la d\u00e9cision est vivante, en cours d\u2019ex\u00e9cution. Le verbe j-e-l est l\u2019un des verbes les plus polyvalents de l\u2019arabe \u2014 il couvre les sens de faire, rendre, placer, \u00e9tablir.",
              axe1_verset: "Le participe ja\u2018ilun est au coeur de l\u2019annonce divine : inni ja\u2018ilun fi al-ard khalifatan (je place sur la terre un successeur). Le choix du participe actif (pas de l\u2019accompli) montre que Dieu annonce une action en cours \u2014 la cr\u00e9ation du khalifa n\u2019est pas un \u00e9v\u00e9nement pass\u00e9 mais un processus en cours. Le verbe ja\u2018ala r\u00e9appara\u00eet dans la question des anges (ataj\u2018alu = vas-Tu placer ?) \u2014 les anges reprennent le m\u00eame verbe.",
              axe2_voisins: "Le placement du khalifa (v30) suit la cr\u00e9ation de la terre et des cieux (v29). L\u2019infrastructure est en place, maintenant Dieu installe le g\u00e9rant. Le verbe ja\u2018ala est diff\u00e9rent de khalaqa (cr\u00e9er) \u2014 cr\u00e9er est produire \u00e0 partir de rien, placer est installer dans un lieu d\u00e9j\u00e0 cr\u00e9\u00e9.",
              axe3_sourate: "La sourate al-Baqarah utilise j-e-l fr\u00e9quemment dans des contextes vari\u00e9s : placer le khalifa (2:30), placer la Ka\u2019ba (2:125), placer Ibrahim comme guide (2:124). Le verbe j-e-l est le verbe de l\u2019installation, de la mise en place.",
              axe4_coherence: "Le Coran utilise j-e-l plus de 340 fois. C\u2019est l\u2019un des verbes les plus fr\u00e9quents. La diversit\u00e9 de ses sens (faire, rendre, placer, \u00e9tablir) en fait un verbe d\u2019action g\u00e9n\u00e9ral qui s\u2019adapte au contexte.",
              axe5_frequence: "Pour la mission du khalifa, le placement est l\u2019acte fondateur. Dieu place le khalifa sur terre \u2014 c\u2019est une installation d\u00e9lib\u00e9r\u00e9e, pas un accident. Le khalifa est l\u00e0 parce que Dieu l\u2019a plac\u00e9."
            }
          }
        }
      },
      {
        word_key: "ard", position: 7, sense_chosen: "terre",
        analysis_axes: {
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays"],
              proof_ctx: "Le nom al-ardi est d\u00e9fini au cas g\u00e9nitif apr\u00e8s fi. La terre est le lieu de la succession divine. C\u2019est la m\u00eame terre cr\u00e9\u00e9e pour les humains (v29) et corrompue par les d\u00e9viants (v27). Le khalifa est plac\u00e9 fi al-ard \u2014 sur la terre, dans la terre, au milieu de la terre.",
              axe1_verset: "La terre est le lieu du khalifa. La construction fi al-ard (sur la terre) revient deux fois dans le verset : ja\u2018ilun fi al-ard (je place sur la terre) et yufsidu fiha (corrompt sur elle). La terre est \u00e0 la fois le lieu de la succession et le lieu de la corruption. Le khalifa est plac\u00e9 l\u00e0 o\u00f9 la corruption se produit \u2014 sa mission est de la contrer.",
              axe2_voisins: "La terre est le fil conducteur des versets 27-30 : corrompue (v27), cr\u00e9\u00e9e enti\u00e8rement pour les humains (v29), lieu du khalifa (v30). La terre passe du statut de lieu de corruption au statut de lieu de la succession divine. Le khalifa doit transformer la terre corrompue en terre bien g\u00e9r\u00e9e.",
              axe3_sourate: "La terre dans al-Baqarah est le th\u00e9\u00e2tre de toute l\u2019histoire humaine. La sourate raconte l\u2019histoire de la terre : cr\u00e9\u00e9e, confi\u00e9e, corrompue, restaur\u00e9e. Le khalifa est l\u2019agent de cette restauration.",
              axe4_coherence: "Le Coran r\u00e9p\u00e8te la formule fi al-ard (sur la terre) dans des centaines de versets. La terre est le domaine de l\u2019\u00e9preuve humaine, le lieu o\u00f9 se joue la succession divine. En 6:165, Dieu a fait des humains des khalifas de la terre.",
              axe5_frequence: "Pour la mission du khalifa, la terre est tout. Sans terre, pas de succession. Le khalifa est d\u00e9fini par son rapport \u00e0 la terre \u2014 il est le g\u00e9rant terrestre au nom du Ma\u00eetre c\u00e9leste."
            }
          }
        }
      },
      {
        word_key: "xlf", position: 8, sense_chosen: "successeur",
        analysis_axes: {
          concept_chosen: "Succession/Remplacement",
          concepts: {
            "Succession/Remplacement": {
              status: "retenu",
              senses: ["succ\u00e9der", "remplacer", "venir apr\u00e8s"],
              proof_ctx: "Le mot khalifatan est un nom ind\u00e9fini au cas accusatif de la racine kh-l-f. Le Lane\u2019s donne \u00ab a successor, a vicegerent, one who takes the place of another that has been before him \u00bb. Le khalifa est celui qui vient apr\u00e8s, qui prend la suite. La racine kh-l-f porte l\u2019id\u00e9e de post\u00e9riorit\u00e9 et de remplacement. Le nom est ind\u00e9fini (khalifatan, pas al-khalifata) \u2014 un successeur parmi d\u2019autres possibles, pas LE successeur unique.",
              axe1_verset: "Le mot khalifatan est le coeur du verset et de toute la section. C\u2019est l\u2019objet de l\u2019annonce divine et le sujet de la question des anges. Le khalifa est plac\u00e9 fi al-ard (sur la terre) \u2014 son domaine est terrestre. Sa d\u00e9finition est donn\u00e9e en n\u00e9gatif par les anges : celui qui corrompt et verse le sang. Dieu r\u00e9pond que le khalifa est plus que cela \u2014 \u00ab je sais ce que vous ne savez pas \u00bb.",
              axe2_voisins: "Le khalifa du verset 30 est la r\u00e9ponse \u00e0 la corruption du verset 27. Les d\u00e9viants corrompent la terre \u2014 le khalifa est plac\u00e9 sur terre pour la succession divine. La corruption est l\u2019\u00e9chec de la succession, la succession est la r\u00e9ponse \u00e0 la corruption. Le verset 29 avait \u00e9tabli que tout est cr\u00e9\u00e9 pour les humains \u2014 le khalifa est celui qui g\u00e8re cette cr\u00e9ation.",
              axe3_sourate: "La sourate al-Baqarah d\u00e9veloppe le concept de khalifa \u00e0 travers l\u2019histoire d\u2019Adam (2:30-39), puis le pacte avec les fils d\u2019Isra\u2019il, puis la mission d\u2019Ibrahim. Chaque r\u00e9cit est une illustration de la succession divine sur terre \u2014 ses succ\u00e8s et ses \u00e9checs.",
              axe4_coherence: "Le Coran utilise khalifa et son pluriel khala\u2019if/khulafa\u2019 dans plusieurs passages (6:165, 7:69, 7:74, 10:14, 10:73, 27:62, 35:39, 38:26). Chaque occurrence souligne la succession et la responsabilit\u00e9. En 38:26, David est explicitement nomm\u00e9 khalifa sur terre avec l\u2019injonction de juger avec justice.",
              axe5_frequence: "Pour la mission du khalifa, ce verset est le fondement. La succession divine sur terre est la mission originelle de l\u2019humanit\u00e9. Le khalifa n\u2019est pas un titre honorifique mais une fonction : succ\u00e9der \u00e0 Dieu dans la gestion de la terre. La question des anges montre que cette mission est risqu\u00e9e \u2014 le khalifa peut corrompre au lieu de g\u00e9rer."
            },
            "Opposition/D\u00e9saccord": {
              status: "nul",
              senses: ["contredire", "s\u2019opposer"],
              proof_ctx: "L\u2019opposition est un sens de kh-l-f (aller \u00e0 l\u2019encontre, contredire). Le contexte parle de succession, pas d\u2019opposition. Le khalifa succ\u00e8de, il ne s\u2019oppose pas."
            },
            "Post\u00e9riorit\u00e9": {
              status: "probable",
              senses: ["derri\u00e8re", "apr\u00e8s"],
              proof_ctx: "La post\u00e9riorit\u00e9 est le sens de base de kh-l-f (venir apr\u00e8s, \u00eatre derri\u00e8re). Le khalifa est litt\u00e9ralement \u00ab celui qui vient apr\u00e8s \u00bb \u2014 le sens de succession d\u00e9rive de la post\u00e9riorit\u00e9. Les deux sens sont int\u00e9gr\u00e9s dans le concept de khalifa.",
              axe1_verset: "La post\u00e9riorit\u00e9 est implicite dans khalifa : celui qui vient apr\u00e8s. Le khalifa vient apr\u00e8s Dieu dans la gestion de la terre \u2014 il prend la suite.",
              axe2_voisins: "La post\u00e9riorit\u00e9 est compatible avec la s\u00e9quence narrative : apr\u00e8s la cr\u00e9ation (v29), Dieu place celui qui vient apr\u00e8s (v30).",
              axe3_sourate: "La post\u00e9riorit\u00e9 est le fondement \u00e9tymologique de khalifa dans la sourate. Chaque g\u00e9n\u00e9ration succ\u00e8de \u00e0 la pr\u00e9c\u00e9dente.",
              axe4_coherence: "Le Coran utilise kh-l-f pour la post\u00e9riorit\u00e9 dans d\u2019autres contextes (khalfahu = derri\u00e8re lui). La succession et la post\u00e9riorit\u00e9 sont deux faces de la m\u00eame racine.",
              axe5_frequence: "La post\u00e9riorit\u00e9 rappelle que le khalifa n\u2019est pas le premier mais le suivant \u2014 il h\u00e9rite d\u2019une responsabilit\u00e9."
            }
          }
        }
      },
      {
        word_key: "fsd", position: 13, sense_chosen: "corrompre",
        analysis_axes: {
          concept_chosen: "Corruption/D\u00e9sordre",
          concepts: {
            "Corruption/D\u00e9sordre": {
              status: "retenu",
              senses: ["corrompre", "g\u00e2ter", "d\u00e9t\u00e9riorer"],
              proof_ctx: "Le verbe yufsidu est un inaccompli forme IV de f-s-d. Le Lane\u2019s donne pour forme IV \u00ab he made a thing corrupt \u00bb. Ici, yufsidu est dans la bouche des anges : \u00ab celui qui corrompt sur elle \u00bb. Les anges anticipent la corruption du khalifa sur terre. La forme IV (causative) souligne que la corruption n\u2019est pas accidentelle mais caus\u00e9e activement.",
              axe1_verset: "Le verbe yufsidu est dans la question des anges : ataj\u2018alu f\u012bh\u0101 man yufsidu f\u012bh\u0101. La r\u00e9p\u00e9tition de f\u012bh\u0101 (sur elle) souligne que la corruption se produit sur la m\u00eame terre o\u00f9 le khalifa est plac\u00e9. Les anges voient le khalifa comme un corrupteur potentiel. Leur question est l\u00e9gitime : pourquoi placer un \u00eatre qui corrompra ?",
              axe2_voisins: "La corruption du verset 30 fait directement \u00e9cho \u00e0 celle du verset 27 (yufsiduna fi al-ard). Les d\u00e9viants du verset 27 corrompent effectivement la terre \u2014 les anges du verset 30 avaient anticip\u00e9 ce r\u00e9sultat. La question des anges est une proph\u00e9tie r\u00e9alis\u00e9e dans les versets pr\u00e9c\u00e9dents.",
              axe3_sourate: "La corruption appara\u00eet dans al-Baqarah comme le p\u00e9ch\u00e9 principal de certaines cat\u00e9gories d\u2019humains. Les hypocrites (2:11-12), les d\u00e9viants (2:27), et le khalifa potentiel (2:30) sont tous associ\u00e9s \u00e0 la corruption. La sourate documente les diff\u00e9rentes formes de corruption terrestre.",
              axe4_coherence: "Le Coran oppose f-s-d (corruption) et s-l-h (r\u00e9forme) comme les deux voies possibles du khalifa. En 2:11, les hypocrites pr\u00e9tendent r\u00e9former (muslihuna) alors qu\u2019ils corrompent (mufsiduna). Le choix entre corruption et r\u00e9forme est le dilemme fondamental du khalifa.",
              axe5_frequence: "Pour la mission du khalifa, la corruption est le risque permanent. Les anges l\u2019avaient identifi\u00e9 d\u00e8s le d\u00e9but. Le khalifa peut corrompre ou r\u00e9former \u2014 c\u2019est son libre arbitre qui d\u00e9termine l\u2019issue."
            }
          }
        }
      },
      {
        word_key: "sfk", position: 15, sense_chosen: "verser",
        analysis_axes: {
          concept_chosen: "\u00c9coulement/Versement",
          concepts: {
            "\u00c9coulement/Versement": {
              status: "retenu",
              senses: ["verser", "r\u00e9pandre"],
              proof_ctx: "Le verbe yasfiku est un inaccompli de la racine s-f-k. Le Lane\u2019s donne \u00ab he shed, poured forth, poured out blood \u00bb. Le verbe est sp\u00e9cifiquement utilis\u00e9 pour le versement de sang \u2014 c\u2019est un verbe technique. L\u2019inaccompli indique une action r\u00e9p\u00e9t\u00e9e ou habituelle. L\u2019objet est al-dim\u0101\u2019a (les sangs, pluriel) \u2014 le pluriel intensifie : beaucoup de sang vers\u00e9.",
              axe1_verset: "Le verbe yasfiku est la deuxi\u00e8me accusation des anges apr\u00e8s la corruption. La paire yufsidu + yasfiku (corrompre + verser le sang) r\u00e9sume les deux cons\u00e9quences du khalifa selon les anges : d\u00e9gradation morale (corruption) et violence physique (sang vers\u00e9). Les deux verbes sont \u00e0 l\u2019inaccompli \u2014 actions r\u00e9p\u00e9t\u00e9es, pas ponctuelles.",
              axe2_voisins: "Le versement de sang (v30) est absent des versets 27-29. C\u2019est un ajout propre aux anges \u2014 ils anticipent non seulement la corruption mais aussi la violence. Le verset 27 ne mentionnait que trois actions (rompre, couper, corrompre), les anges ajoutent le sang vers\u00e9.",
              axe3_sourate: "La sourate al-Baqarah d\u00e9veloppera le th\u00e8me du sang et de la violence : le meurtre d\u2019Abel par Ca\u00efn (allud\u00e9, tradition), l\u2019histoire de la vache et du meurtre (2:67-73), les guerres des fils d\u2019Isra\u2019il. Les anges avaient raison \u2014 l\u2019humanit\u00e9 versera beaucoup de sang.",
              axe4_coherence: "Le Coran utilise la racine s-f-k exclusivement dans ce verset (2:30). C\u2019est un hapax \u2014 un mot qui n\u2019appara\u00eet qu\u2019une fois dans tout le Coran. Ce statut unique souligne la gravit\u00e9 de l\u2019accusation des anges \u2014 le versement de sang est une violence sp\u00e9cifique et rare.",
              axe5_frequence: "Pour la mission du khalifa, le versement de sang est l\u2019\u00e9chec le plus visible. La violence est la manifestation la plus \u00e9vidente de la corruption. Le khalifa qui verse le sang trahit sa mission de mani\u00e8re irr\u00e9vocable."
            }
          }
        }
      },
      {
        word_key: "dmw", position: 16, sense_chosen: "sang",
        analysis_axes: {
          concept_chosen: "Sang",
          concepts: {
            "Sang": {
              status: "retenu",
              senses: ["sang", "sang vers\u00e9"],
              proof_ctx: "Le mot al-dim\u0101\u2019a est un nom d\u00e9fini pluriel au cas accusatif de la racine d-m-w (ou d-m-y). Le Lane\u2019s donne \u00ab blood \u00bb. Le pluriel dim\u0101\u2019 (les sangs) intensifie : ce n\u2019est pas un peu de sang mais beaucoup de sang vers\u00e9. L\u2019article d\u00e9fini al- g\u00e9n\u00e9ralise : les sangs en g\u00e9n\u00e9ral, tout le sang vers\u00e9. La paire yasfiku al-dim\u0101\u2019a (verse les sangs) est une expression de violence extr\u00eame.",
              axe1_verset: "Le sang est l\u2019objet du versement. La paire yasfiku al-dim\u0101\u2019a est le compl\u00e9ment de la corruption. Corrompre et verser le sang sont les deux faces de la violence : la corruption est la d\u00e9gradation invisible, le sang est la violence visible. Les anges nomment les deux pour couvrir toute la gamme de la d\u00e9viance humaine.",
              axe2_voisins: "Le sang vers\u00e9 (v30) est une anticipation de ce qui sera illustr\u00e9 dans la sourate. L\u2019histoire de la vache (2:67-73) concerne pr\u00e9cis\u00e9ment un meurtre et du sang vers\u00e9. Les anges avaient vu juste \u2014 le premier r\u00e9cit d\u00e9taill\u00e9 de la sourate implique un meurtre.",
              axe3_sourate: "La sourate al-Baqarah aborde le sang dans le contexte du meurtre (2:72-73), de la l\u00e9gislation (2:173, sang comme aliment interdit), et de la guerre (2:191, 2:217). Le sang est un th\u00e8me r\u00e9current qui traverse toute la sourate.",
              axe4_coherence: "Le Coran mentionne le sang dans plusieurs contextes : alimentaire (interdit de consommer le sang, 5:3, 6:145), judiciaire (talion, 2:178-179), et dans ce verset fondateur. Le sang est la substance de la vie \u2014 le verser est d\u00e9truire la vie.",
              axe5_frequence: "Pour la mission du khalifa, le sang vers\u00e9 est le signe le plus grave de l\u2019\u00e9chec. Le khalifa est cens\u00e9 prot\u00e9ger la vie, pas la d\u00e9truire. Verser le sang est l\u2019exact oppos\u00e9 de donner la vie (ahya, v28)."
            }
          }
        }
      },
      {
        word_key: "sbh", position: 18, sense_chosen: "glorifier",
        analysis_axes: {
          concept_chosen: "Glorification/Louange",
          concepts: {
            "Glorification/Louange": {
              status: "retenu",
              senses: ["glorifier", "louer", "exalter"],
              proof_ctx: "Le verbe nusabbihu est un inaccompli forme II de la racine s-b-h. Le Lane\u2019s donne pour forme II \u00ab he declared God to be far removed from every imperfection, he glorified, he praised \u00bb. La forme II intensifie la glorification \u2014 ce n\u2019est pas une simple mention mais une glorification intense et continue. Le sujet est nahnu (nous, les anges) \u2014 la glorification est leur activit\u00e9 principale.",
              axe1_verset: "Le verbe nusabbihu est dans la bouche des anges comme argument : nous glorifions et sanctifions, pourquoi placer un \u00eatre qui corrompt ? Les anges mettent leur glorification en contraste avec la corruption du khalifa. La glorification est pr\u00e9sent\u00e9e comme une alternative \u00e0 la succession terrestre \u2014 mais Dieu juge autrement.",
              axe2_voisins: "La glorification des anges (v30) contraste avec le recouvrement des humains (v28). Les anges glorifient, les humains recouvrent. Les anges offrent la transparence (gloire \u00e0 Dieu), les humains pratiquent la dissimulation (recouvrir Dieu). Pourtant, Dieu choisit les humains pour la succession.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine s-b-h dans ce verset fondateur. La glorification est l\u2019activit\u00e9 des anges, pas celle des humains \u2014 les humains ont une autre mission. La sourate distingue les fonctions : les anges glorifient, les humains succ\u00e8dent.",
              axe4_coherence: "Le Coran utilise la racine s-b-h fr\u00e9quemment. En 21:20, les anges glorifient nuit et jour sans se lasser. En 39:75, les anges glorifient autour du tr\u00f4ne. La glorification est l\u2019essence de l\u2019activit\u00e9 ang\u00e9lique.",
              axe5_frequence: "Pour la mission du khalifa, la glorification n\u2019est pas sa fonction premi\u00e8re. Les anges glorifient, le khalifa g\u00e8re. La r\u00e9ponse de Dieu (\u00ab je sais ce que vous ne savez pas \u00bb) sugg\u00e8re que la succession a une valeur que la glorification seule ne peut pas atteindre."
            },
            "Nage/Mouvement": {
              status: "nul",
              senses: ["nager", "flotter", "se mouvoir dans l\u2019espace"],
              proof_ctx: "La nage est le sens physique de s-b-h (nager, se mouvoir dans l\u2019eau ou dans l\u2019espace). Le contexte est clairement celui de la glorification, pas du mouvement physique."
            }
          }
        }
      },
      {
        word_key: "hmd", position: 19, sense_chosen: "louange",
        analysis_axes: {
          concept_chosen: "Louange/\u00c9loge",
          concepts: {
            "Louange/\u00c9loge": {
              status: "retenu",
              senses: ["louer", "louange", "\u00e9loge"],
              proof_ctx: "Le mot hamdika est un nom de la racine h-m-d avec la pr\u00e9position bi et le pronom 2MS -ka. Le Lane\u2019s donne \u00ab praise, commendation, eulogy \u00bb. Le hamd est la louange spontan\u00e9e, non sollicit\u00e9e \u2014 diff\u00e9rente de shukr (gratitude pour un bienfait re\u00e7u). La construction bi-hamdika (par Ta louange/avec Ta louange) signifie que la glorification se fait au moyen de la louange \u2014 la louange est l\u2019instrument de la glorification.",
              axe1_verset: "Le mot hamd est li\u00e9 \u00e0 nusabbihu par la pr\u00e9position bi : nous glorifions par Ta louange. La louange est le contenu de la glorification. Les anges ne glorifient pas dans le vide \u2014 ils glorifient en louant. La combinaison nusabbihu bi-hamdika est une expression compl\u00e8te : glorification instrumentale par la louange.",
              axe2_voisins: "La louange des anges (v30) est un acte pur, sans corruption ni sang vers\u00e9. Le contraste avec les accusations port\u00e9es contre le khalifa est maximal : les anges louent, le khalifa verse le sang. Mais la r\u00e9ponse de Dieu sugg\u00e8re que la louange seule ne suffit pas.",
              axe3_sourate: "La sourate al-Baqarah commence par al-hamdu lillahi (la louange est \u00e0 Dieu) dans la Fatiha qui la pr\u00e9c\u00e8de. La louange est le fondement de la relation avec Dieu. Les anges louent, les humains doivent aussi louer \u2014 mais leur mission va au-del\u00e0.",
              axe4_coherence: "Le Coran utilise la racine h-m-d dans de nombreux contextes. Le hamd est la premi\u00e8re parole de la Fatiha et la derni\u00e8re parole des gens du jardin (10:10, 39:75). La louange encadre toute l\u2019exp\u00e9rience spirituelle.",
              axe5_frequence: "Pour la mission du khalifa, la louange est le point de d\u00e9part. Le khalifa loue Dieu comme les anges \u2014 mais il fait plus : il g\u00e8re la terre. La louange est n\u00e9cessaire mais pas suffisante pour la succession."
            },
            "Sens isol\u00e9/Chaleur": {
              status: "nul",
              senses: ["chaleur"],
              proof_ctx: "La chaleur est un sens marginal et contest\u00e9 de h-m-d. Le contexte est clairement celui de la louange divine, pas de la chaleur."
            }
          }
        }
      },
      {
        word_key: "qds", position: 20, sense_chosen: "sanctifier",
        analysis_axes: {
          concept_chosen: "Sacralit\u00e9/Puret\u00e9",
          concepts: {
            "Sacralit\u00e9/Puret\u00e9": {
              status: "retenu",
              senses: ["sanctifier", "purifier", "consacrer"],
              proof_ctx: "Le verbe nuqaddisu est un inaccompli forme II de la racine q-d-s. Le Lane\u2019s donne pour forme II \u00ab he hallowed, he sanctified, he purified \u00bb. La forme II intensifie : rendre saint, consacrer activement. Le compl\u00e9ment laka (pour Toi) pr\u00e9cise le b\u00e9n\u00e9ficiaire : la sanctification est dirig\u00e9e vers Dieu. Les anges sanctifient pour Dieu \u2014 leur activit\u00e9 est d\u00e9di\u00e9e \u00e0 Lui.",
              axe1_verset: "Le verbe nuqaddisu est le deuxi\u00e8me acte des anges apr\u00e8s la glorification. La paire nusabbihu bi-hamdika wa nuqaddisu laka (nous glorifions par Ta louange et nous sanctifions pour Toi) d\u00e9crit l\u2019activit\u00e9 compl\u00e8te des anges : glorifier et sanctifier. La glorification rec\u2019onna\u00eet la grandeur de Dieu, la sanctification consacre Sa puret\u00e9. Les deux forment un tout.",
              axe2_voisins: "La sanctification des anges (v30) est l\u2019oppos\u00e9 de la corruption du khalifa (v27, v30). Les anges sanctifient (rendent saint), le khalifa corrompt (rend corrompu). Pourtant, Dieu choisit le khalifa \u2014 ce qui sugg\u00e8re que la mission terrestre n\u00e9cessite quelque chose de plus que la sanctification.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine q-d-s dans ce verset et dans la mention du Ruh al-Qudus (l\u2019Esprit Saint, 2:87, 2:253). La sacralit\u00e9 est un attribut divin et ang\u00e9lique \u2014 les anges sanctifient, l\u2019Esprit Saint est saint.",
              axe4_coherence: "Le Coran utilise la racine q-d-s pour la sacralit\u00e9 divine, la terre sainte (al-ard al-muqaddasa, 5:21), et le Ruh al-Qudus. La sacralit\u00e9 est un concept qui couvre le divin, le terrestre et le spirituel.",
              axe5_frequence: "Pour la mission du khalifa, la sanctification est une aspiration. Le khalifa ne peut pas sanctifier comme les anges, mais il peut pr\u00e9server la sacralit\u00e9 de la terre qui lui est confi\u00e9e. Corrompre la terre est la d\u00e9sacralisation de l\u2019espace du khalifa."
            },
            "Terre sainte": {
              status: "nul",
              senses: ["terre sainte"],
              proof_ctx: "La terre sainte (al-ard al-muqaddasa) est un d\u00e9riv\u00e9 de q-d-s mais le contexte parle de l\u2019action de sanctifier, pas d\u2019un lieu saint."
            }
          }
        }
      },
      {
        word_key: "elm", position: 23, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "conna\u00eetre", "connaissance"],
              proof_ctx: "Le verbe a\u2018lamu est un inaccompli 1\u00e8re personne de la racine e-l-m. Le Lane\u2019s donne \u00ab I know \u00bb. La forme a\u2018lamu est \u00e9lative en arabe \u2014 elle peut signifier \u00ab je sais mieux \u00bb ou simplement \u00ab je sais \u00bb. Le verbe r\u00e9appara\u00eet en n\u00e9gatif : m\u0101 l\u0101 ta\u2018lam\u016bna (ce que vous ne savez pas). Le contraste a\u2018lamu / l\u0101 ta\u2018lam\u016bna oppose la connaissance divine \u00e0 l\u2019ignorance ang\u00e9lique.",
              axe1_verset: "Le verbe a\u2018lamu cl\u00f4t le verset comme r\u00e9ponse finale de Dieu. C\u2019est la r\u00e9ponse la plus concise et la plus d\u00e9finitive possible : \u00ab je sais ce que vous ne savez pas \u00bb. Dieu ne r\u00e9fute pas les accusations des anges (corruption et sang vers\u00e9) \u2014 Il affirme simplement que Sa connaissance d\u00e9passe la leur. La r\u00e9ponse est un argument d\u2019autorit\u00e9 bas\u00e9 sur la connaissance.",
              axe2_voisins: "La connaissance de Dieu (v30) fait \u00e9cho \u00e0 l\u2019attribut \u2018al\u012bm du verset 29. Dieu est connaisseur de toute chose (v29) et Il sait ce que les anges ne savent pas (v30). La connaissance totale du v29 se concr\u00e9tise dans le v30 par un cas sp\u00e9cifique : la raison du khalifa.",
              axe3_sourate: "La sourate al-Baqarah d\u00e9veloppe le th\u00e8me de la connaissance divine vs l\u2019ignorance humaine. Le verset 31 montrera imm\u00e9diatement apr\u00e8s que Dieu enseigne les noms \u00e0 Adam \u2014 prouvant aux anges que le khalifa a une capacit\u00e9 que les anges n\u2019ont pas.",
              axe4_coherence: "Le Coran utilise la formule \u00ab je sais ce que vous ne savez pas \u00bb (ou ses variantes) pour cl\u00f4re les d\u00e9bats. C\u2019est l\u2019argument ultime de l\u2019autorit\u00e9 divine : la connaissance absolue. En 2:216, Dieu dit \u00ab et il se peut que vous d\u00e9testiez une chose alors qu\u2019elle est un bien pour vous \u2014 Dieu sait et vous ne savez pas \u00bb.",
              axe5_frequence: "Pour la mission du khalifa, la connaissance divine est la garantie. Dieu sait pourquoi Il a plac\u00e9 le khalifa \u2014 m\u00eame si les raisons ne sont pas \u00e9videntes. Le khalifa doit faire confiance \u00e0 cette connaissance divine, m\u00eame quand sa propre raison ne comprend pas."
            }
          }
        }
      }
    ]
  }

};

// =====================================================
// TRAITEMENT DES VERSETS
// =====================================================
async function processVerse(verseNum) {
  const data = verseData[verseNum];
  if (!data) return;

  console.log(`\nVERSET 2:${verseNum} — TRAITEMENT`);

  // Fetch analysis_id if not set
  if (!data.analysis_id) {
    const { data: va, error: vaErr } = await supabase
      .from('verse_analyses')
      .select('id')
      .eq('verse_id', data.verse_id)
      .single();
    if (vaErr || !va) {
      console.error(`  ERREUR: verse_analyses introuvable pour verse_id=${data.verse_id}:`, vaErr?.message);
      return;
    }
    data.analysis_id = va.id;
    console.log(`  analysis_id=${data.analysis_id}`);
  }

  let okCount = 0;
  let errCount = 0;

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
      const ax = word.analysis_axes;
      console.log(`  ${word.word_key} (pos ${word.position}) → sens "${ax.concept_chosen}" → mot "${word.sense_chosen}"`);
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
    console.log(`  Traduction : "${data.translation_arab.substring(0, 80)}..."`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — TERMINÉ (${okCount} OK, ${errCount} erreurs)`);
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [34, 35, 36, 37];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnée à synchroniser');
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
      console.log(`  ${key} non trouvé dans word_analyses — skip`);
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
    console.log(`  ${key} → synced`);
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 27 À 30 ===\n');

  for (let v = 27; v <= 30; v++) {
    await processVerse(v);
  }

  await syncWordMeanings();

  console.log('\n=== PIPELINE V27-30 TERMINÉE ===');
}

main().catch(console.error);
