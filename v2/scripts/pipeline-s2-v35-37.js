const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 35 À 37
// verse_id=42 (2:35), verse_id=43 (2:36), verse_id=44 (2:37)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:35
  // verse_id=42, analysis_id=401
  // =====================================================
  35: {
    verse_id: 42,
    analysis_id: 401,
    translation_arab: "Et Nous avons dit : Adam, habite, toi et ton epouse, le jardin, et mangez-en librement ou vous voulez, et ne vous approchez pas de cet arbre, sinon vous seriez parmi ceux qui se placent dans l'obscurite.",
    full_translation: "Et Nous d\u00eemes : \u00ab \u00d4 Adam, habite le Paradis, toi et ton \u00e9pouse, et nourrissez-vous-en de partout \u00e0 votre guise ; mais n\u2019approchez pas de l\u2019arbre que voici, sinon vous seriez du nombre des injustes. \u00bb",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset rapporte une parole divine adressee a Adam et son epouse. Le verbe **qulna** est un accompli 1PL de la racine q-w-l (Nous avons dit). Le pluriel de majeste indique l'autorite divine. Le verbe **uskun** est un imperatif de la racine s-k-n. Le Lane's donne \u00ab he dwelt, abode, resided \u00bb. L'imperatif ordonne a Adam d'habiter, de s'installer. Le mot **zawjuka** est un nom de la racine z-w-j avec le pronom 2MS. Le Lane's donne \u00ab a mate, a fellow, a spouse \u00bb. La construction \u00ab anta wa zawjuka \u00bb insiste : toi ET ton epouse. Le mot **al-jannata** est un nom defini de la racine j-n-n. Le Lane's donne \u00ab a garden, an enclosure \u00bb et pour al-janna \u00ab the garden of paradise \u00bb. Le verbe **kula** est un imperatif duel de la racine a-k-l (mangez tous les deux). Le mot **raghadan** est un adverbe de la racine r-gh-d. Le Lane's donne \u00ab plentiful and pleasant life, without toil or trouble \u00bb. Le mot **haythu** signifie \u00ab ou, la ou \u00bb. Le verbe **shi'tuma** est un accompli duel de la racine sh-y-' (vous avez voulu tous les deux). Le verbe **taqraba** est un inaccompli apocopé duel de la racine q-r-b precede de la negation la (ne vous approchez pas). Le mot **hadhihi** est un demonstratif feminin (cet arbre-ci). Le mot **al-shajarata** est un nom defini de la racine sh-j-r. Le Lane's donne \u00ab a tree, a plant having a trunk \u00bb. Le verbe **takuna** est un inaccompli apocopé duel de la racine k-w-n (sinon vous seriez). Le mot **al-zalimina** est un participe actif pluriel defini de la racine z-l-m. Le Lane's donne \u00ab one who puts a thing in a place not its own, one who acts wrongfully, unjustly \u00bb.

\u00a7JUSTIFICATION\u00a7
**dit** \u2014 Le sens retenu est \u00ab Parole/Enonciation \u00bb. Le verbe qulna est la forme la plus directe de la parole divine. L'alternative \u00ab enoncer \u00bb est ecartee car trop formel.

**habite** \u2014 Le sens retenu est \u00ab Habitation/Demeure \u00bb. Le verbe uskun signifie habiter, demeurer dans un lieu. L'alternative \u00ab se reposer \u00bb (sens \u00ab Calme/Repos \u00bb) est ecartee car le contexte est une injonction a s'etablir, pas a se reposer.

**epouse** \u2014 Le sens retenu est \u00ab Couple/Union \u00bb. Le mot zawj designe le compagnon, l'etre qui forme une paire. L'alternative \u00ab espece \u00bb est ecartee car le contexte parle d'une personne, pas d'une categorie.

**jardin** \u2014 Le sens retenu est \u00ab Jardin/Paradis \u00bb. Le mot al-janna designe le jardin clos. L'alternative \u00ab dissimuler \u00bb (sens \u00ab Dissimulation/Couverture \u00bb) est ecartee car le contexte designe un lieu physique.

**mangez** \u2014 Le sens retenu est \u00ab Alimentation/Consommation \u00bb. Le verbe kula a l'imperatif duel signifie mangez tous les deux. L'alternative \u00ab consumer \u00bb (sens \u00ab Destruction/Erosion \u00bb) est ecartee car le contexte est positif : manger pour se nourrir.

**librement** \u2014 Le sens retenu est \u00ab Abondance/Aisance \u00bb. Le mot raghadan signifie sans contrainte, dans l'aisance. Pas d'alternative pertinente dans ce contexte.

**vous avez voulu** \u2014 Le sens retenu est \u00ab Volonte \u00bb. Le verbe shi'tuma signifie vous avez voulu. L'alternative \u00ab chose \u00bb (sens \u00ab Chose/Existence \u00bb) est ecartee car le verbe est ici conjugue comme verbe de volonte.

**approchez** \u2014 Le sens retenu est \u00ab Proximite/Rapprochement \u00bb. Le verbe taqraba signifie s'approcher. L'alternative \u00ab offrande \u00bb est ecartee car le contexte est spatial.

**arbre** \u2014 Le sens retenu est \u00ab Arbre/Vegetation \u00bb. Le mot al-shajarata designe l'arbre physique. L'alternative \u00ab dispute \u00bb (sens \u00ab Conflit/Querelle \u00bb) est ecartee car le contexte designe un vegetal.

**seriez** \u2014 Le sens retenu est \u00ab Etre/Existence \u00bb. Le verbe takuna est le verbe d'etat incomplet \u00ab etre \u00bb. Pas d'alternative pertinente.

**ceux qui se placent dans l'obscurite** \u2014 Le sens retenu est \u00ab Obscurite/Tenebres \u00bb. Le participe zalimin designe ceux qui placent quelque chose hors de sa place, ce qui revient a se placer dans l'obscurite. L'alternative \u00ab opprimer \u00bb (sens \u00ab Injustice/Oppression \u00bb) est ecartee car le sens premier de la racine z-l-m est l'obscurite \u2014 l'injustice est un sens derive.

\u00a7CRITIQUE\u00a7
**injustes vs ceux qui se placent dans l'obscurite** \u2014 Les traductions courantes donnent \u00ab injustes \u00bb pour al-zalimin. Le Lane's donne pour la racine z-l-m le sens premier de \u00ab darkness \u00bb et le sens derive de \u00ab placing a thing in a place not its own \u00bb. Le sens retenu \u00ab Obscurite/Tenebres \u00bb est le sens etymologique premier. Le participe zalim designe celui qui met les choses hors de leur place, ce qui le plonge dans l'obscurite. \u00ab Injuste \u00bb est une traduction courante mais derivee.
**Paradis vs jardin** \u2014 Les traductions courantes donnent \u00ab Paradis \u00bb pour al-janna. Le Lane's donne d'abord \u00ab garden, enclosure \u00bb. Le mot janna vient de la racine j-n-n qui signifie \u00ab cacher, couvrir \u00bb \u2014 le jardin est un lieu couvert de vegetation. \u00ab Paradis \u00bb est un terme theologique chretien.`,
    segments: [
      { fr: "et Nous avons dit", pos: "verbe", phon: "wa qulna", arabic: "\u0648\u064e\u0642\u064f\u0644\u0652\u0646\u064e\u0627", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "Adam", phon: "ya adamu", arabic: "\u064a\u064e\u0640\u0670\u0653\u0640\u0654\u0627\u062f\u064e\u0645\u064f", is_particle: true, position: 2 },
      { fr: "habite", pos: "verbe", phon: "uskun", arabic: "\u0627\u0633\u0652\u0643\u064f\u0646", word_key: "skn", is_particle: false, sense_retenu: "habiter", position: 3 },
      { fr: "toi", phon: "anta", arabic: "\u0623\u064e\u0646\u062a\u064e", is_particle: true, position: 4 },
      { fr: "et ton epouse", pos: "nom", phon: "wa zawjuka", arabic: "\u0648\u064e\u0632\u064e\u0648\u0652\u062c\u064f\u0643\u064e", word_key: "zwj", is_particle: false, sense_retenu: "epouse", position: 5 },
      { fr: "le jardin", pos: "nom", phon: "al-jannata", arabic: "\u0627\u0644\u0652\u062c\u064e\u0646\u0651\u064e\u0629\u064e", word_key: "jnn", is_particle: false, sense_retenu: "jardin", position: 6 },
      { fr: "et mangez", pos: "verbe", phon: "wa kula", arabic: "\u0648\u064e\u0643\u064f\u0644\u064e\u0627", word_key: "akl", is_particle: false, sense_retenu: "manger", position: 7 },
      { fr: "d'ou vous voulez", phon: "minha", arabic: "\u0645\u0650\u0646\u0652\u0647\u064e\u0627", is_particle: true, position: 8 },
      { fr: "librement", pos: "adverbe", phon: "raghadan", arabic: "\u0631\u064e\u063a\u064e\u062f\u064b\u0627", word_key: "rgd", is_particle: false, sense_retenu: "librement", position: 9 },
      { fr: "ou", phon: "haythu", arabic: "\u062d\u064e\u064a\u0652\u062b\u064f", is_particle: true, position: 10 },
      { fr: "vous avez voulu", pos: "verbe", phon: "shi'tuma", arabic: "\u0634\u0650\u0626\u0652\u062a\u064f\u0645\u064e\u0627", word_key: "shya", is_particle: false, sense_retenu: "vouloir", position: 11 },
      { fr: "et ne", phon: "wa la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 12 },
      { fr: "vous approchez pas de", pos: "verbe", phon: "taqraba", arabic: "\u062a\u064e\u0642\u0652\u0631\u064e\u0628\u064e\u0627", word_key: "qrb", is_particle: false, sense_retenu: "s'approcher", position: 13 },
      { fr: "cet", phon: "hadhihi", arabic: "\u0647\u064e\u0640\u0670\u0630\u0650\u0647\u0650", is_particle: true, position: 14 },
      { fr: "arbre", pos: "nom", phon: "al-shajarata", arabic: "\u0627\u0644\u0634\u0651\u064e\u062c\u064e\u0631\u064e\u0629\u064e", word_key: "shjr", is_particle: false, sense_retenu: "arbre", position: 15 },
      { fr: "sinon vous seriez", pos: "verbe", phon: "fa-takuna", arabic: "\u0641\u064e\u062a\u064e\u0643\u064f\u0648\u0646\u064e\u0627", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 16 },
      { fr: "parmi", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 17 },
      { fr: "ceux qui se placent dans l'obscurite", pos: "participe_actif", phon: "al-zalimina", arabic: "\u0627\u0644\u0638\u0651\u064e\u0640\u0670\u0644\u0650\u0645\u0650\u064a\u0646\u064e", word_key: "zlm", is_particle: false, sense_retenu: "se placer dans l'obscurite", position: 18 }
    ],
    words: [
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qulna est un accompli 1PL de la racine q-w-l. Le Lane's donne \u00ab he said, he spoke \u00bb. Le pluriel de majeste (Nous) marque l'autorite divine. L'accompli indique que la parole a ete prononcee une fois pour toutes \u2014 c'est un decret divin, pas une suggestion. L'objet de la parole est une serie d'imperatifs : habite, mange, ne t'approche pas. La parole divine ici est un commandement qui etablit les regles du jardin.",
              axe1_verset: "Le verbe qulna ouvre le verset et introduit un discours direct divin. Ce discours contient trois imperatifs : habite, mange, ne t'approche pas. La parole divine pose un cadre precis : un lieu (le jardin), une permission (manger librement) et un interdit (ne pas s'approcher de l'arbre). La structure en trois temps montre que la parole divine est ordonnee et complete. Le we initial (et Nous avons dit) rattache ce verset a la sequence narrative qui precede \u2014 la nomination du khalifa au verset 30.",
              axe2_voisins: "Le verset 34 rapportait l'ordre donne aux anges de se prosterner devant Adam. Le verset 35 rapporte l'ordre donne a Adam et son epouse d'habiter le jardin. Deux paroles divines successives : l'une pour les anges, l'autre pour les humains. Le verset 36 rapportera le glissement cause par le shaytan \u2014 la parole divine du verset 35 etablit les regles que le verset 36 verra transgressees.",
              axe3_sourate: "La sourate al-Baqarah rapporte de nombreuses paroles divines directes (2:30, 2:33, 2:35, 2:36, 2:38). La repetition de qulna/qala structure les echanges entre Dieu et Ses creatures. Cette sourate est un dialogue permanent entre le divin et l'humain. La parole divine du verset 35 est un moment fondateur : les premieres regles donnees aux humains.",
              axe4_coherence: "Le Coran rapporte la meme scene en 7:19 et 20:117-119 avec des variantes. En 7:19, la formule est similaire : wa qulna ya adamu uskun anta wa zawjuka al-jannata. La repetition dans plusieurs sourates confirme l'importance de cette parole inaugurale. C'est le premier commandement divin adresse a l'humanite dans le recit coranique.",
              axe5_frequence: "Pour la mission du khalifa, la parole divine est le cadre de reference. Le khalifa doit ecouter et suivre la parole de Dieu. Ce verset montre que la premiere chose que Dieu fait apres avoir installe Adam est de lui parler \u2014 de lui donner des regles. La parole precede l'action."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens \u00ab avis \u00bb est un derive de q-w-l (ce que l'on dit interieurement). Le contexte est une parole prononcee par Dieu, pas un avis interieur."
            }
          }
        }
      },
      {
        word_key: "skn", position: 3, sense_chosen: "habiter",
        analysis_axes: {
          concept_chosen: "Habitation/Demeure",
          concepts: {
            "Habitation/Demeure": {
              status: "retenu",
              senses: ["habiter", "demeurer"],
              proof_ctx: "Le verbe uskun est un imperatif de la racine s-k-n. Le Lane's donne \u00ab he dwelt, abode, resided in a place \u00bb. L'imperatif ordonne a Adam de s'installer dans le jardin, d'en faire sa demeure. Le sujet est Adam seul dans la forme verbale, mais le verset precise anta wa zawjuka (toi et ton epouse) \u2014 l'ordre s'adresse aux deux. Le lieu de l'habitation est al-jannata (le jardin).",
              axe1_verset: "Le verbe uskun est le premier imperatif du discours divin. Habiter le jardin est la premiere instruction donnee a Adam. Avant de manger, avant l'interdit, il faut d'abord s'installer. La sequence est logique : d'abord le lieu (habite le jardin), puis la permission (mange librement), puis l'interdit (ne t'approche pas de l'arbre). L'habitation precede tout le reste \u2014 c'est le fondement de la vie dans le jardin.",
              axe2_voisins: "Le verset 34 parlait de la prosternation des anges devant Adam. Le verset 35 installe Adam dans le jardin. La prosternation reconnait la dignite d'Adam, l'habitation lui donne un lieu. Le verset 36 le fera sortir de ce lieu \u2014 l'habitation du verset 35 est temporaire. Le contraste entre uskun (habite) et ihbitu (descendez, v36) marque le basculement.",
              axe3_sourate: "La sourate al-Baqarah traite l'habitation comme un theme recurrent. La terre est le lieu d'habitation definitif apres la sortie du jardin. Les fils d'Isra'il recevront une terre promise \u2014 un autre lieu a habiter. L'habitation dans le jardin est le premier lieu, la terre est le deuxieme.",
              axe4_coherence: "Le Coran utilise uskun dans le meme recit en 7:19 \u00ab uskun anta wa zawjuka al-jannata \u00bb. La racine s-k-n apparait aussi dans sakina (quietude divine, 2:248, 9:26, 48:4) \u2014 l'habitation et la quietude partagent la meme racine. Habiter un lieu, c'est y trouver le repos.",
              axe5_frequence: "Pour la mission du khalifa, l'habitation est le premier don. Le khalifa recoit un lieu \u2014 d'abord le jardin, puis la terre. Son role est de bien habiter ce lieu, d'en prendre soin et de respecter les regles attachees a cette habitation."
            },
            "Calme/Repos": {
              status: "probable",
              senses: ["\u00eatre calme", "s'apaiser", "se reposer"],
              proof_ctx: "Le calme est le sens premier de s-k-n (le mouvement cesse, la chose devient calme). L'imperatif uskun pourrait signifier \u00ab sois en paix \u00bb mais le contexte avec al-jannata (le jardin comme lieu) privilegiee le sens d'habitation. Le calme reste en arriere-plan : habiter un lieu, c'est aussi y trouver le repos.",
              axe1_verset: "Le calme serait compatible avec le contexte du jardin \u2014 un lieu de serenite. Mais la construction avec un complement de lieu (al-jannata) oriente vers l'habitation plutot que vers l'etat de calme.",
              axe2_voisins: "Le calme contraste avec l'agitation du verset 36 ou le shaytan fait glisser. L'etat de calme du jardin sera rompu par l'intervention du shaytan.",
              axe3_sourate: "La sakina (quietude) est mentionnee en 2:248 comme signe divin. Le calme et l'habitation partagent la meme racine \u2014 ils sont lies dans la vision coranique.",
              axe4_coherence: "Le Coran associe s-k-n au repos conjugal en 7:189 et 30:21 (li-taskunu ilayha = pour que vous trouviez le repos aupres d'elle). Le calme est le sens fondamental de la racine.",
              axe5_frequence: "Le calme est une dimension de la mission du khalifa \u2014 il doit etablir la paix dans le lieu qu'il habite."
            },
            "Sens isol\u00e9/Pauvre": {
              status: "nul",
              senses: ["pauvre"],
              proof_ctx: "Le sens \u00ab pauvre \u00bb (miskin) est un derive de s-k-n (celui qui est immobile, qui ne peut plus bouger). Le contexte est un imperatif d'habitation, pas une description de pauvrete."
            }
          }
        }
      },
      {
        word_key: "zwj", position: 5, sense_chosen: "epouse",
        analysis_axes: {
          concept_chosen: "Couple/Union",
          concepts: {
            "Couple/Union": {
              status: "retenu",
              senses: ["coupler", "marier", "\u00e9poux", "paire", "esp\u00e8ce"],
              proof_ctx: "Le mot zawjuka est un nom de la racine z-w-j avec le pronom 2MS (ton epouse). Le Lane's donne \u00ab a mate, a fellow, one of a pair, a spouse \u00bb. Le zawj est l'autre moitie d'une paire \u2014 il designe l'etre qui complete. Ici, c'est l'epouse d'Adam, celle qui forme avec lui une paire. La construction wa zawjuka (et ton epouse) place les deux sur un pied d'egalite face au commandement divin.",
              axe1_verset: "Le mot zawjuka intervient apres le pronom anta (toi) et avant al-jannata (le jardin). La construction anta wa zawjuka uskun insiste : l'ordre d'habiter le jardin s'adresse aux deux, pas a Adam seul. L'epouse est incluse dans le commandement, dans la permission de manger, et dans l'interdit. Ils sont solidaires devant Dieu.",
              axe2_voisins: "Le verset 34 ne mentionnait qu'Adam (prosterner devant Adam). Le verset 35 introduit l'epouse pour la premiere fois. Le passage du singulier (Adam seul au v34) au duel (Adam et son epouse au v35) marque un changement : la vie dans le jardin est une vie a deux. Le verset 36 les mentionnera ensemble (azallahuma = il les a fait glisser tous les deux).",
              axe3_sourate: "La sourate al-Baqarah mentionne le couple a plusieurs reprises (2:35, 2:102, 2:187, 2:221, 2:226-237). Le couple est une unite fondamentale de la societe dans la vision coranique. Le premier couple (Adam et son epouse) pose le modele.",
              axe4_coherence: "Le Coran presente la creation en paires comme un principe universel (36:36, 51:49). Le zawj est un concept fondamental \u2014 tout a ete cree en paire. L'epouse d'Adam est mentionnee aussi en 7:19 et 20:117 avec la meme formule.",
              axe5_frequence: "Pour la mission du khalifa, le couple est l'unite de base. Le khalifa n'est pas seul \u2014 il est accompagne d'un zawj. La mission se vit a deux, les regles s'appliquent aux deux, la responsabilite est partagee."
            }
          }
        }
      },
      {
        word_key: "jnn", position: 6, sense_chosen: "jardin",
        analysis_axes: {
          concept_chosen: "Jardin/Paradis",
          concepts: {
            "Jardin/Paradis": {
              status: "retenu",
              senses: ["jardin", "paradis"],
              proof_ctx: "Le nom al-jannata est au cas accusatif de la racine j-n-n. Le Lane's donne \u00ab a garden, an enclosure having trees \u00bb. Le mot janna vient de la racine j-n-n qui signifie fondamentalement \u00ab cacher, couvrir \u00bb \u2014 le jardin est un lieu ou la vegetation est dense au point de couvrir. L'article defini al- indique un jardin specifique, connu. C'est le lieu ou Adam et son epouse vont habiter.",
              axe1_verset: "Le mot al-jannata est le complement de lieu de uskun (habite le jardin). C'est le cadre de toute la scene : la permission de manger, l'interdit de l'arbre, tout se passe dans ce jardin. Le jardin est un lieu d'abondance (mangez librement) mais aussi un lieu avec une limite (ne vous approchez pas de l'arbre). Le jardin n'est pas un lieu sans regles \u2014 il a une structure.",
              axe2_voisins: "Le verset 34 ne precisait pas le lieu. Le verset 35 situe l'action dans le jardin. Le verset 36 marquera la sortie du jardin (fa-akhrajahuma mimma kana fihi = il les fit sortir de ce dans quoi ils etaient). Le jardin est le lieu temporaire avant la terre. La sequence est : jardin (v35) puis terre (v36).",
              axe3_sourate: "La sourate al-Baqarah mentionne le jardin comme recompense des croyants (2:25, 2:82, 2:111, 2:214, 2:221, 2:265-266). Le jardin d'Adam est le prototype \u2014 le lieu ideal que les croyants cherchent a retrouver. La sourate est encadree par le jardin perdu (v35) et le jardin promis.",
              axe4_coherence: "Le Coran mentionne al-janna plus de 140 fois. Le jardin d'Adam est aussi decrit en 7:19-25 et 20:117-123. C'est le lieu originel de l'humanite avant la descente sur terre. Le mot janna garde toujours le lien avec la racine j-n-n (couverture) \u2014 c'est un lieu protege.",
              axe5_frequence: "Pour la mission du khalifa, le jardin est le point de depart et le point d'arrivee. Le khalifa est sorti du jardin pour habiter la terre \u2014 sa mission est de vivre sur terre de maniere a retrouver le jardin. Le jardin est a la fois une memoire et une promesse."
            },
            "Dissimulation/Couverture": {
              status: "probable",
              senses: ["cacher", "couvrir"],
              proof_ctx: "La dissimulation est le sens premier de j-n-n (couvrir, cacher). Le jardin est etymologiquement le lieu ou la vegetation couvre et cache. Ce sens reste present en arriere-plan mais le contexte designe clairement un lieu physique, pas l'acte de cacher.",
              axe1_verset: "La dissimulation serait compatible : le jardin est un lieu couvert. Mais le contexte utilise al-janna comme un nom de lieu, pas comme un acte de dissimulation.",
              axe2_voisins: "Le passage du jardin a la terre (v36) joue sur le contraste entre couvert (jardin) et expose (terre). La dissimulation du jardin protege, la terre expose.",
              axe3_sourate: "La racine j-n-n reapparait dans la sourate pour les djinns (2:102) et le jardin promis. Les deux sens (couvrir et jardin) coexistent dans la sourate.",
              axe4_coherence: "Le Coran utilise j-n-n pour le jardin, les djinns (etres caches), et la folie (junun = voile sur la raison). La racine unifie ces sens par l'idee de couverture.",
              axe5_frequence: "La couverture du jardin est une protection. Le khalifa quitte cette protection pour vivre sur terre, expose. Sa mission est de recreer sur terre quelque chose de cette protection originelle."
            },
            "\u00catres cach\u00e9s": {
              status: "nul",
              senses: ["djinn"],
              proof_ctx: "Les djinns sont des etres caches \u2014 un autre derive de j-n-n. Le contexte parle d'un jardin, pas d'etres invisibles."
            }
          }
        }
      },
      {
        word_key: "akl", position: 7, sense_chosen: "manger",
        analysis_axes: {
          concept_chosen: "Alimentation/Consommation",
          concepts: {
            "Alimentation/Consommation": {
              status: "retenu",
              senses: ["manger", "consommer", "d\u00e9vorer", "nourriture"],
              proof_ctx: "Le verbe kula est un imperatif duel de la racine a-k-l. Le Lane's donne \u00ab he ate, he consumed food \u00bb. L'imperatif duel s'adresse a Adam et son epouse ensemble (mangez tous les deux). Le complement minha (d'ou vous voulez) et l'adverbe raghadan (librement) indiquent une permission large \u2014 la nourriture du jardin est offerte sans restriction.",
              axe1_verset: "Le verbe kula est le deuxieme imperatif apres uskun (habite). Apres l'installation vient la nourriture. La permission de manger est totale (raghadan = librement, haythu shi'tuma = ou vous voulez) sauf l'exception de l'arbre. Le contraste entre la liberte totale et l'interdit unique rend l'interdit d'autant plus significatif. Dieu donne tout sauf un arbre \u2014 la transgression porte sur une fraction infime.",
              axe2_voisins: "Le manger du verset 35 contraste avec la sortie du verset 36. Ils mangeaient librement dans le jardin, puis ils en sont sortis. La nourriture du jardin sera remplacee par la nourriture de la terre (2:168, 2:172). Le passage du jardin a la terre change aussi le rapport a la nourriture \u2014 sur terre, la nourriture demande un effort.",
              axe3_sourate: "La sourate al-Baqarah contient de nombreuses references a la nourriture (2:57, 2:58, 2:60, 2:61, 2:168, 2:172, 2:173, 2:187, 2:249). La nourriture est un theme recurrent lie a l'obeissance : manger ce que Dieu permet, eviter ce qu'Il interdit. Le verset 35 pose cette dualite pour la premiere fois.",
              axe4_coherence: "Le Coran utilise la racine a-k-l dans le meme recit en 7:19 (kula min haythu shi'tuma). La permission de manger est identique. En 20:117-119, Dieu dit a Adam qu'il n'aura ni faim ni nudite dans le jardin \u2014 la nourriture est abondante.",
              axe5_frequence: "Pour la mission du khalifa, la nourriture est le premier don concret. Le khalifa recoit un lieu (jardin) et de la nourriture (mangez librement). La gestion de la nourriture \u2014 ce qui est permis et ce qui est interdit \u2014 est la premiere epreuve."
            },
            "Destruction/\u00c9rosion": {
              status: "nul",
              senses: ["consumer (le feu mange)", "user"],
              proof_ctx: "Le sens de destruction (le feu mange, consume) est un usage metaphorique de a-k-l. Le contexte est une injonction a manger de la nourriture, pas a consumer."
            }
          }
        }
      },
      {
        word_key: "rgd", position: 9, sense_chosen: "librement",
        analysis_axes: {
          concept_chosen: "Abondance/Aisance",
          concepts: {
            "Abondance/Aisance": {
              status: "retenu",
              senses: ["abondance", "aisance", "vie plaisante", "sans contrainte"],
              proof_ctx: "Le mot raghadan est un adverbe (hal) de la racine r-gh-d. Le Lane's donne \u00ab plentiful and pleasant life, without toil or trouble, with ease \u00bb. En position d'adverbe apres kula (mangez), il qualifie la maniere de manger : sans effort, sans contrainte, dans l'abondance. Le jardin offre une nourriture abondante et accessible sans travail.",
              axe1_verset: "Le mot raghadan renforce la permission totale. Non seulement ils peuvent manger ou ils veulent, mais ils mangent dans l'aisance \u2014 sans fatigue, sans labeur. La combinaison de raghadan (librement) et haythu shi'tuma (ou vous voulez) cree une liberte maximale. Cette liberte rend l'interdit de l'arbre encore plus frappant : tout est offert, il suffit d'eviter un seul arbre.",
              axe2_voisins: "L'aisance du verset 35 contraste avec la vie sur terre apres la chute (v36). Sur terre, la nourriture ne sera plus raghadan \u2014 elle demandera un effort. Le meme mot raghadan reapparait en 2:58 pour les fils d'Isra'il : \u00ab entrez par la porte en vous prosternant et mangez-en librement \u00bb. Le parallele entre Adam dans le jardin et les fils d'Isra'il a Jerusalem est saisissant.",
              axe3_sourate: "La sourate al-Baqarah n'utilise raghadan que deux fois (2:35 et 2:58). Les deux occurrences decrivent des situations ou Dieu offre une abondance facile. Dans les deux cas, l'interdit est transgresse. L'aisance divine semble provoquer la transgression humaine.",
              axe4_coherence: "Le Coran utilise raghadan uniquement en 2:35, 2:58 et 7:19. C'est un mot rare qui marque des moments specifiques ou Dieu offre l'abondance sans effort. Sa rarete en fait un marqueur de generosited divine exceptionnelle.",
              axe5_frequence: "Pour la mission du khalifa, l'aisance est un test. Le khalifa qui recoit l'abondance doit resister a la transgression. Le raghadan est un don qui met a l'epreuve la gratitude et l'obeissance."
            },
            "P\u00e2turage libre": {
              status: "nul",
              senses: ["laisser pa\u00eetre librement"],
              proof_ctx: "Le paturage libre est le sens concret de r-gh-d (laisser les betes paitre sans contrainte). Le contexte est humain \u2014 Adam et son epouse mangent, pas des animaux qui paissent."
            },
            "Confusion/M\u00e9lange": {
              status: "nul",
              senses: ["se m\u00e9langer", "\u00eatre confus", "douter"],
              proof_ctx: "La confusion est un sens marginal de r-gh-d. Le contexte est clair et positif \u2014 une permission de manger dans l'aisance, pas de la confusion."
            }
          }
        }
      },
      {
        word_key: "shya", position: 11, sense_chosen: "vouloir",
        analysis_axes: {
          concept_chosen: "Volont\u00e9",
          concepts: {
            "Volont\u00e9": {
              status: "retenu",
              senses: ["vouloir"],
              proof_ctx: "Le verbe shi'tuma est un accompli duel de la racine sh-y-'. Le Lane's donne \u00ab he willed, he wished, he desired \u00bb. Le duel s'adresse a Adam et son epouse (vous avez voulu tous les deux). La construction haythu shi'tuma (ou vous avez voulu) exprime la liberte totale de choix \u2014 ou que vous vouliez, vous pouvez manger. La volonte humaine est respectee dans le cadre divin.",
              axe1_verset: "Le verbe shi'tuma complete la permission : mangez librement ou vous voulez. La volonte humaine est explicitement mentionnee \u2014 Dieu dit \u00ab ou VOUS voulez \u00bb. Les humains ont le libre choix du lieu ou ils mangent. Cette liberte de volonte rend l'interdit de l'arbre d'autant plus significatif : ils peuvent tout vouloir SAUF une chose.",
              axe2_voisins: "La volonte libre du verset 35 sera mise a l'epreuve au verset 36 quand le shaytan les fera glisser. Le shaytan ne force pas \u2014 il fait glisser. La volonte reste libre mais elle est orientee. Le contraste entre la volonte libre (v35) et le glissement (v36) montre la fragilite de la volonte humaine face a la tentation.",
              axe3_sourate: "La sourate al-Baqarah traite la volonte dans plusieurs contextes. La volonte divine (2:20, 2:253) et la volonte humaine (2:35, 2:223) sont distinguees. La volonte humaine est toujours encadree par la volonte divine.",
              axe4_coherence: "Le Coran utilise shi'a/yasha'u pour la volonte humaine et divine. La racine sh-y-' designe la volonte comme choix delibere. En 7:19, la meme formule apparait : haythu shi'tuma.",
              axe5_frequence: "Pour la mission du khalifa, la volonte est le moteur de l'action. Le khalifa a une volonte libre mais encadree par des regles divines. Sa volonte doit s'exercer dans le cadre du permis et eviter l'interdit."
            },
            "Chose/Existence": {
              status: "nul",
              senses: ["chose"],
              proof_ctx: "Le sens \u00ab chose \u00bb (shay') est un derive nominal de sh-y-'. Le contexte utilise la racine comme verbe de volonte, pas comme nom."
            }
          }
        }
      },
      {
        word_key: "qrb", position: 13, sense_chosen: "s'approcher",
        analysis_axes: {
          concept_chosen: "Proximit\u00e9/Rapprochement",
          concepts: {
            "Proximit\u00e9/Rapprochement": {
              status: "retenu",
              senses: ["\u00eatre proche", "s'approcher", "rapprocher"],
              proof_ctx: "Le verbe taqraba est un inaccompli apocope duel de la racine q-r-b, precede de la negation la. Le Lane's donne \u00ab he was, or became, near \u00bb. La negation la taqraba est un interdit : ne vous approchez pas. Le verbe est au duel (Adam et son epouse). L'objet est hadhihi al-shajarata (cet arbre-ci). L'interdit porte sur l'approche elle-meme, pas sur la consommation \u2014 il ne dit pas \u00ab ne mangez pas de l'arbre \u00bb mais \u00ab ne vous approchez pas de l'arbre \u00bb.",
              axe1_verset: "Le verbe taqraba est le troisieme mouvement du discours divin, apres l'ordre d'habiter et la permission de manger. C'est l'interdit \u2014 la seule restriction dans un ocean de liberte. La negation la taqraba est plus forte que \u00ab ne mangez pas \u00bb : elle interdit meme l'approche. Cela montre la gravite de la limite \u2014 il faut garder une distance, pas seulement s'abstenir.",
              axe2_voisins: "L'interdit de l'approche (v35) sera transgresse au verset 36 quand le shaytan les fait glisser. Le mot azallahuma (il les a fait glisser) implique un mouvement \u2014 ils se sont rapproches de ce qu'ils devaient eviter. Le verset 37 montrera le retour (tawba) apres la transgression de la proximite.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine q-r-b dans plusieurs contextes : proximite de Dieu (2:186), approche interdite (2:35, 2:187, 2:222), offrande (2:167). La proximite est un concept a double tranchant \u2014 bonne quand elle concerne Dieu, dangereuse quand elle concerne l'interdit.",
              axe4_coherence: "Le Coran utilise la formule la taqrabu dans plusieurs contextes d'interdits : ne vous approchez pas de la fornication (17:32), ne vous approchez pas des biens de l'orphelin (6:152, 17:34). La forme \u00ab ne vous approchez pas \u00bb est plus forte que \u00ab ne faites pas \u00bb \u2014 elle impose une distance de securite.",
              axe5_frequence: "Pour la mission du khalifa, la proximite est une epreuve. Le khalifa doit savoir de quoi rester loin. La proximite de l'interdit precede la transgression \u2014 la prevention consiste a maintenir la distance."
            },
            "Offrande/Sacrifice": {
              status: "nul",
              senses: ["sacrifice", "offrande"],
              proof_ctx: "L'offrande (qurban) est un derive de q-r-b (ce qu'on rapproche de Dieu). Le contexte est un interdit d'approche spatiale, pas un sacrifice."
            },
            "Parent\u00e9": {
              status: "nul",
              senses: ["parent proche"],
              proof_ctx: "La parente (qarib) designe celui qui est proche par le sang. Le contexte est spatial, pas familial."
            }
          }
        }
      },
      {
        word_key: "shjr", position: 15, sense_chosen: "arbre",
        analysis_axes: {
          concept_chosen: "Arbre/V\u00e9g\u00e9tation",
          concepts: {
            "Arbre/V\u00e9g\u00e9tation": {
              status: "retenu",
              senses: ["arbre", "plante"],
              proof_ctx: "Le nom al-shajarata est au cas accusatif defini de la racine sh-j-r. Le Lane's donne \u00ab a tree, a plant having a trunk \u00bb. L'article defini al- et le demonstratif hadhihi (cet arbre-ci) specifient un arbre particulier dans le jardin. Le Coran ne precise pas de quel arbre il s'agit \u2014 c'est l'interdit qui compte, pas la nature de l'arbre.",
              axe1_verset: "Le mot al-shajarata est l'objet de l'interdit. Tout le verset tourne autour de cette opposition : tout le jardin est permis, sauf cet arbre. L'arbre est le point focal de l'epreuve \u2014 la limite physique qui materialise l'obeissance. Le demonstratif hadhihi (cet arbre-ci) rend l'interdit concret et precis : pas un arbre abstrait, mais celui-ci, devant eux.",
              axe2_voisins: "L'arbre du verset 35 est la cause indirecte du glissement du verset 36. Le shaytan les fait glisser vers ce qu'ils devaient eviter. L'arbre est l'instrument de l'epreuve \u2014 sans arbre interdit, pas de test de l'obeissance. Le verset 37 resoudra la transgression par le retour (tawba).",
              axe3_sourate: "La sourate al-Baqarah ne mentionne l'arbre d'Adam qu'ici (2:35). Mais le theme de l'interdit revient dans toute la sourate : les nourritures interdites (2:173), les mois sacres (2:194), les relations interdites (2:187, 2:222-223). L'arbre est le premier interdit, le modele de tous les interdits.",
              axe4_coherence: "Le Coran mentionne l'arbre interdit en 2:35, 7:19-22 et 20:120. En 7:20, le shaytan dit que c'est l'arbre de l'eternite (shajarat al-khuld). En 20:120, c'est l'arbre de l'eternite et du pouvoir. La nature de l'arbre varie dans les recits \u2014 c'est l'interdit qui est constant.",
              axe5_frequence: "Pour la mission du khalifa, l'arbre est le symbole de la limite. Le khalifa a une liberte presque totale mais avec une limite. Respecter la limite est la condition de l'habitation dans le jardin. Transgresser la limite entraine la sortie."
            },
            "Conflit/Querelle": {
              status: "nul",
              senses: ["dispute", "\u00eatre emm\u00eal\u00e9"],
              proof_ctx: "Le sens de conflit (tajara = disputer) est un autre derive de sh-j-r. Le contexte designe un vegetalnphysique, pas une dispute."
            },
            "\u00c9l\u00e9vation": {
              status: "nul",
              senses: ["s'\u00e9lever"],
              proof_ctx: "L'elevation est un sens marginal de sh-j-r (l'arbre qui s'eleve). Le contexte designe l'arbre lui-meme, pas l'acte de s'elever."
            }
          }
        }
      },
      {
        word_key: "kwn", position: 16, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["\u00eatre (verbe incomplet)", "venir \u00e0 l'existence"],
              proof_ctx: "Le verbe takuna est un inaccompli apocope duel de la racine k-w-n. Le Lane's donne \u00ab he was, he became, he existed \u00bb. Le verbe kana est le verbe d'etat par excellence en arabe \u2014 il introduit un predicat. Ici, fa-takuna mina al-zalimina signifie \u00ab sinon vous seriez parmi ceux qui se placent dans l'obscurite \u00bb. Le fa- est consecutif (sinon, autrement).",
              axe1_verset: "Le verbe takuna relie l'interdit a la consequence. S'approcher de l'arbre ne conduit pas a une punition arbitraire mais a un changement d'etat : devenir parmi ceux qui se placent dans l'obscurite. Le passage du permis a l'interdit transforme l'etre \u2014 on passe d'un etat de lumiere (dans le jardin) a un etat d'obscurite. Le verbe kana montre que la transgression change l'etre, pas seulement l'action.",
              axe2_voisins: "L'etat de zalimin (v35) se realisera au verset 36 quand ils transgressent. Le verset 35 est l'avertissement, le verset 36 est la realisation. Le verbe kana au v35 est au conditionnel (vous seriez), au v36 il deviendra realite.",
              axe3_sourate: "La sourate al-Baqarah utilise kana/yakunu comme charpente grammaticale dans des centaines de constructions. Le verbe d'etat structure le passage du possible au reel, du conditionnel a l'accompli.",
              axe4_coherence: "Le Coran utilise kana comme verbe d'etat et comme verbe existentiel. La distinction entre les deux usages est fondamentale. Ici, c'est le verbe d'etat : devenir dans un certain etat (celui des zalimin).",
              axe5_frequence: "Pour la mission du khalifa, l'etre est le fondement. Le khalifa EST ce qu'il fait \u2014 la transgression change son etre, pas seulement ses actes. La mise en garde porte sur l'etre, pas sur la punition."
            }
          }
        }
      },
      {
        word_key: "zlm", position: 18, sense_chosen: "se placer dans l'obscurite",
        analysis_axes: {
          concept_chosen: "Obscurit\u00e9/T\u00e9n\u00e8bres",
          concepts: {
            "Obscurit\u00e9/T\u00e9n\u00e8bres": {
              status: "retenu",
              senses: ["obscurit\u00e9", "t\u00e9n\u00e8bres"],
              proof_ctx: "Le mot al-zalimina est un participe actif pluriel defini de la racine z-l-m. Le Lane's donne pour la racine le sens premier de \u00ab darkness, an absence or want of light \u00bb et le sens derive de \u00ab placing a thing in a place not its own \u00bb. Le participe actif zalim designe celui qui agit activement \u2014 il se place dans l'obscurite par son propre choix. L'article defini al- et le pluriel indiquent une categorie connue : ceux qui se placent dans l'obscurite.",
              axe1_verset: "Le mot al-zalimina ferme le verset et constitue la mise en garde. Si Adam et son epouse s'approchent de l'arbre, ils deviendraient parmi ceux qui se placent dans l'obscurite. La consequence n'est pas une punition externe mais un changement d'etat interne \u2014 on passe de la lumiere du jardin a l'obscurite. Le jardin est un lieu de clarte, la transgression plonge dans l'obscurite.",
              axe2_voisins: "L'obscurite du verset 35 fait echo au verset 17 ou les hypocrites sont laisses dans les tenebres (fi zulumatin la yubsiruna). La meme racine z-l-m decrit le meme etat. Le verset 36 realisera cette mise en garde : le glissement du shaytan fait sortir Adam et son epouse du jardin (lieu de lumiere) vers la terre.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine z-l-m dans deux registres : l'obscurite (zuluma, 2:17, 2:19-20, 2:257) et le placement hors de sa place (zulm, 2:35, 2:51, 2:54, 2:57). Le sens premier (obscurite) nourrit le sens derive (injustice) \u2014 celui qui met les choses hors de leur place se plonge dans l'obscurite.",
              axe4_coherence: "Le Coran utilise al-zalimina dans des dizaines de versets pour designer ceux qui transgressent les limites divines. Le participe actif indique un etat permanent \u2014 ce n'est pas un acte ponctuel mais une disposition. La formule mina al-zalimina (parmi ceux qui se placent dans l'obscurite) revient en 2:35, 6:21, 7:19, 10:106.",
              axe5_frequence: "Pour la mission du khalifa, l'obscurite est l'antithese de la mission. Le khalifa doit apporter la lumiere, pas se placer dans l'obscurite. S'approcher de l'interdit plonge dans l'obscurite et rend impossible la mission de succession."
            },
            "Injustice/Oppression": {
              status: "probable",
              senses: ["opprimer", "\u00eatre injuste", "injustice", "oppresseur"],
              proof_ctx: "L'injustice est le sens derive le plus courant de z-l-m (placer quelque chose hors de sa place). Adam en s'approchant de l'arbre placerait son action hors de sa place \u2014 c'est une forme d'injustice envers soi-meme. Ce sens est compatible mais derive du sens premier d'obscurite.",
              axe1_verset: "L'injustice serait compatible : s'approcher de l'arbre serait placer son action hors de sa place. Mais le sens etymologique premier (obscurite) rend mieux compte de la consequence \u2014 la transgression plonge dans l'obscurite, pas seulement dans l'injustice.",
              axe2_voisins: "L'injustice comme sens derive est coherente avec le glissement du verset 36. Le shaytan fait glisser \u2014 c'est un deplacement hors de la place juste.",
              axe3_sourate: "La sourate utilise zulm (injustice) et zuluma (tenebres) de maniere complementaire. Les deux sens coexistent et s'enrichissent mutuellement.",
              axe4_coherence: "Le Coran utilise zalim dans les deux sens. Le contexte determine lequel domine. Ici, le jardin comme lieu de lumiere favorise le sens d'obscurite.",
              axe5_frequence: "L'injustice et l'obscurite sont deux faces de la meme realite pour le khalifa \u2014 se placer hors de sa place revient a se plonger dans l'obscurite."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:36
  // verse_id=43, analysis_id=400
  // =====================================================
  36: {
    verse_id: 43,
    analysis_id: 400,
    translation_arab: "Alors le shaytan les fit glisser de la et les fit sortir de ce dans quoi ils etaient. Et Nous avons dit : descendez, les uns ennemis des autres, et pour vous sur la terre un lieu d'etablissement et un profit pour un temps.",
    full_translation: "Puis le Diable les fit tr\u00e9bucher et les fit sortir de l\u2019\u00e9tat o\u00f9 ils \u00e9taient. Et Nous d\u00eemes : \u00ab Descendez ! Vous serez ennemis les uns des autres. Et pour vous il y aura une demeure sur terre et un usufruit pour un temps. \u00bb",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset decrit la chute d'Adam et son epouse. Le verbe **fa-azallahuma** est un accompli forme IV de la racine z-l-l avec le pronom 3MD (il les fit glisser tous les deux). Le Lane's donne pour forme IV \u00ab he made him to slip, to slide \u00bb et pour la racine \u00ab he slipped, he made a mistake \u00bb. La forme IV est causative : le shaytan a CAUSE le glissement, il ne les a pas forces. Le mot **al-shaytanu** est un nom de la racine sh-t-n. Le Lane's donne \u00ab he became remote, he was far from the truth, from the mercy of God \u00bb. Le shaytan est etymologiquement celui qui est eloigne. Le verbe **fa-akhrajahuma** est un accompli forme IV de la racine kh-r-j avec le pronom 3MD (il les fit sortir tous les deux). La forme IV est causative : il causa leur sortie. Le complement mimma kana fihi (de ce dans quoi ils etaient) renvoie a l'etat precedent dans le jardin. Le verbe **ihbitu** est un imperatif pluriel de la racine h-b-t. Le Lane's donne \u00ab he descended, he went down \u00bb. Le pluriel (pas le duel) indique que l'ordre s'adresse a plus de deux personnes \u2014 probablement Adam, son epouse et le shaytan. Le mot **ba'dukum** est un nom de la racine b-e-d avec le pronom 2MP (une partie de vous). La construction ba'dukum li-ba'din aduwwun signifie \u00ab les uns parmi vous ennemis des autres \u00bb. Le mot **aduwwun** est un nom de la racine e-d-w. Le Lane's donne \u00ab an enemy, one who transgresses against another \u00bb. Le mot **mustaqarrun** est un participe passif de la racine q-r-r forme X. Le Lane's donne \u00ab a settled place, a place of abode \u00bb. Le mot **mata'un** est un nom de la racine m-t-e. Le Lane's donne \u00ab an object of temporary enjoyment, a provision for a time \u00bb. Le mot **hinin** est un nom de la racine h-y-n. Le Lane's donne \u00ab a time, a period, an indefinite time \u00bb.

\u00a7JUSTIFICATION\u00a7
**fit glisser** \u2014 Le sens retenu est \u00ab Glissement/Erreur \u00bb. Le verbe azalla est causatif de zalla (glisser). Le Lane's precise que c'est un glissement, pas une chute violente. L'alternative \u00ab tromper \u00bb est ecartee car le texte ne dit pas que le shaytan a menti \u2014 il a fait glisser.

**shaytan** \u2014 Le sens retenu est \u00ab Egarement/Rebellion \u00bb. Le mot shaytan designe l'etre rebelle eloigne de la verite. L'alternative \u00ab diable \u00bb est un emprunt theologique chretien.

**fit sortir** \u2014 Le sens retenu est \u00ab Sortie/Emergence \u00bb. Le verbe akhraja est la forme causative de kharaja (sortir). L'alternative \u00ab expulser \u00bb est ecartee car trop violent \u2014 le texte dit \u00ab il les fit sortir \u00bb, pas \u00ab il les expulsa \u00bb.

**etaient** \u2014 Le sens retenu est \u00ab Etre/Existence \u00bb. Le verbe kana decrit l'etat dans lequel ils se trouvaient.

**dit** \u2014 Le sens retenu est \u00ab Parole/Enonciation \u00bb. Meme verbe qulna qu'au verset 35.

**descendez** \u2014 Le sens retenu est \u00ab Descente/Chute \u00bb. Le verbe ihbitu signifie descendre, aller vers le bas. L'alternative \u00ab degrader \u00bb est ecartee car le texte decrit un mouvement spatial, pas une degradation morale.

**une partie de vous** \u2014 Le sens retenu est \u00ab Partie/Division \u00bb. Le mot ba'd designe une partie d'un tout. Pas d'alternative pertinente.

**ennemi** \u2014 Le sens retenu est \u00ab Hostilite/Inimitie \u00bb. Le mot aduww designe l'ennemi, celui qui transgresse contre un autre. L'alternative \u00ab courir \u00bb (sens \u00ab Course/Vitesse \u00bb) est ecartee car le contexte est relationnel, pas spatial.

**terre** \u2014 Le sens retenu est \u00ab Terre/Sol \u00bb. Le mot al-ard designe la terre comme lieu physique.

**lieu d'etablissement** \u2014 Le sens retenu est \u00ab Stabilite/Etablissement \u00bb. Le participe mustaqarr designe un lieu ou l'on s'etablit. L'alternative \u00ab froid \u00bb (sens \u00ab Froid/Fraicheur \u00bb) est ecartee car le contexte parle d'un lieu, pas d'une temperature.

**profit** \u2014 Le sens retenu est \u00ab Jouissance/Profit \u00bb. Le mot mata' designe un objet ou un etat de jouissance temporaire. L'alternative \u00ab prolonger \u00bb (sens \u00ab Duree/Extension \u00bb) est ecartee car le contexte designe un objet de jouissance, pas une extension de temps.

**temps** \u2014 Le sens retenu est \u00ab Temps/Duree \u00bb. Le mot hin designe une periode indefinie. L'alternative \u00ab mort \u00bb (sens \u00ab Destin/Echeance \u00bb) est ecartee car le contexte parle de duree, pas de fin.

\u00a7CRITIQUE\u00a7
**trebucher vs glisser** \u2014 Les traductions courantes donnent \u00ab le Diable les fit trebucher \u00bb. Le Lane's donne pour zalla \u00ab he slipped \u00bb et pour azalla \u00ab he caused to slip \u00bb. \u00ab Trebucher \u00bb implique un obstacle, \u00ab glisser \u00bb implique un mouvement involontaire cause par une surface. Le texte utilise azalla \u2014 le shaytan a rendu la surface glissante, il n'a pas mis un obstacle.
**Diable vs shaytan** \u2014 \u00ab Diable \u00bb est un mot grec (diabolos = celui qui divise). Le mot arabe shaytan vient de sh-t-n (etre eloigne) et designe celui qui est eloigne de la verite ou de la misericorde. Les deux etymologies sont differentes.
**demeure vs lieu d'etablissement** \u2014 Les traductions donnent \u00ab demeure \u00bb pour mustaqarr. Le Lane's donne \u00ab a settled, fixed, or established place \u00bb. \u00ab Lieu d'etablissement \u00bb est plus precis \u2014 c'est un endroit ou l'on se fixe, pas necessairement une maison.`,
    segments: [
      { fr: "alors les fit glisser", pos: "verbe", phon: "fa-azallahuma", arabic: "\u0641\u064e\u0623\u064e\u0632\u064e\u0644\u0651\u064e\u0647\u064f\u0645\u064e\u0627", word_key: "zll", is_particle: false, sense_retenu: "faire glisser", position: 1 },
      { fr: "le shaytan", pos: "nom", phon: "al-shaytanu", arabic: "\u0627\u0644\u0634\u0651\u064e\u064a\u0652\u0637\u064e\u0640\u0670\u0646\u064f", word_key: "stn", is_particle: false, sense_retenu: "shaytan", position: 2 },
      { fr: "de la", phon: "'anha", arabic: "\u0639\u064e\u0646\u0652\u0647\u064e\u0627", is_particle: true, position: 3 },
      { fr: "et les fit sortir", pos: "verbe", phon: "fa-akhrajahuma", arabic: "\u0641\u064e\u0623\u064e\u062e\u0652\u0631\u064e\u062c\u064e\u0647\u064f\u0645\u064e\u0627", word_key: "xrj", is_particle: false, sense_retenu: "faire sortir", position: 4 },
      { fr: "de ce que", phon: "mimma", arabic: "\u0645\u0650\u0645\u0651\u064e\u0627", is_particle: true, position: 5 },
      { fr: "ils etaient", pos: "verbe", phon: "kana", arabic: "\u0643\u064e\u0627\u0646\u064e\u0627", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 6 },
      { fr: "dans", phon: "fihi", arabic: "\u0641\u0650\u064a\u0647\u0650", is_particle: true, position: 7 },
      { fr: "et Nous avons dit", pos: "verbe", phon: "wa qulna", arabic: "\u0648\u064e\u0642\u064f\u0644\u0652\u0646\u064e\u0627", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 8 },
      { fr: "descendez", pos: "verbe", phon: "ihbitu", arabic: "\u0627\u0647\u0652\u0628\u0650\u0637\u064f\u0648\u0627\u06df", word_key: "hbt", is_particle: false, sense_retenu: "descendre", position: 9 },
      { fr: "les uns parmi vous", pos: "nom", phon: "ba'dukum", arabic: "\u0628\u064e\u0639\u0652\u0636\u064f\u0643\u064f\u0645", word_key: "bed", is_particle: false, sense_retenu: "une partie", position: 10 },
      { fr: "pour les autres", pos: "nom", phon: "li-ba'din", arabic: "\u0644\u0650\u0628\u064e\u0639\u0652\u0636\u064d", word_key: "bed", is_particle: false, sense_retenu: "une partie", position: 11 },
      { fr: "ennemi", pos: "nom", phon: "'aduwwun", arabic: "\u0639\u064e\u062f\u064f\u0648\u0651\u064c", word_key: "edw", is_particle: false, sense_retenu: "ennemi", position: 12 },
      { fr: "et pour vous", phon: "wa lakum", arabic: "\u0648\u064e\u0644\u064e\u0643\u064f\u0645", is_particle: true, position: 13 },
      { fr: "sur", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 14 },
      { fr: "la terre", pos: "nom", phon: "al-ardi", arabic: "\u0627\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 15 },
      { fr: "un lieu d'etablissement", pos: "nom", phon: "mustaqarrun", arabic: "\u0645\u064f\u0633\u0652\u062a\u064e\u0642\u064e\u0631\u0651\u064c", word_key: "qrr", is_particle: false, sense_retenu: "lieu d'etablissement", position: 16 },
      { fr: "et un profit", pos: "nom", phon: "wa mata'un", arabic: "\u0648\u064e\u0645\u064e\u062a\u064e\u0640\u0670\u0639\u064c", word_key: "mte", is_particle: false, sense_retenu: "profit", position: 17 },
      { fr: "jusqu'a", phon: "ila", arabic: "\u0625\u0650\u0644\u064e\u0649\u0640\u0670", is_particle: true, position: 18 },
      { fr: "un temps", pos: "nom", phon: "hinin", arabic: "\u062d\u0650\u064a\u0646\u064d", word_key: "hyn", is_particle: false, sense_retenu: "temps", position: 19 }
    ],
    words: [
      {
        word_key: "zll", position: 1, sense_chosen: "faire glisser",
        analysis_axes: {
          concept_chosen: "Glissement/Erreur",
          concepts: {
            "Glissement/Erreur": {
              status: "retenu",
              senses: ["glisser", "tr\u00e9bucher", "commettre une faute", "faillir", "erreur"],
              proof_ctx: "Le verbe fa-azallahuma est un accompli forme IV de la racine z-l-l avec le pronom 3MD. Le Lane's donne pour zalla \u00ab he slipped, he made a mistake, he erred \u00bb et pour azalla forme IV \u00ab he made him to slip, he caused him to make a mistake \u00bb. La forme IV est causative : le shaytan a cause le glissement des deux. Le fa- marque la consequence temporelle (alors, a la suite de quoi). Le complement 'anha (de la, du jardin) precise la direction du glissement : ils ont glisse HORS du jardin.",
              axe1_verset: "Le verbe azallahuma ouvre le verset et marque le basculement. Apres les imperatifs divins du verset 35 (habite, mange, ne t'approche pas), le verset 36 decrit la transgression. Le glissement est le premier mouvement \u2014 il precede la sortie (akhrajahuma). D'abord ils glissent, puis ils sortent. Le choix du mot \u00ab glisser \u00bb plutot que \u00ab desobeir \u00bb est significatif : le shaytan ne force pas, il fait glisser \u2014 c'est un mouvement subtil, pas une rebellion ouverte.",
              axe2_voisins: "Le glissement du verset 36 repond a l'interdit du verset 35. La taqraba (ne vous approchez pas) est transgressee par le glissement cause par le shaytan. Le verset 37 apportera la resolution : les paroles de Dieu et le retour. La sequence est : interdit (v35) \u2192 transgression (v36) \u2192 resolution (v37).",
              axe3_sourate: "La sourate al-Baqarah n'utilise azalla qu'ici. Mais le theme du glissement revient dans d'autres termes : les hypocrites vacillent (2:9-12), les deviants sortent du chemin (2:26-27). Le glissement d'Adam est le premier exemple de deviation dans le recit coranique.",
              axe4_coherence: "Le Coran utilise azalla en 3:155 pour le glissement des combattants a la bataille de Uhud. Le meme verbe, la meme forme IV : le shaytan cause le glissement. Le parallele montre que le glissement est un phenomene recurrent \u2014 le shaytan fait glisser a travers l'histoire.",
              axe5_frequence: "Pour la mission du khalifa, le glissement est le danger permanent. Le khalifa peut glisser a tout moment sous l'influence du shaytan. La vigilance est la condition de la mission \u2014 maintenir la stabilite face aux glissements."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["pur et coulant"],
              proof_ctx: "Le sens \u00ab pur et coulant \u00bb est un usage marginal de z-l-l (eau pure qui coule). Le contexte est moral et narratif, pas physique."
            }
          }
        }
      },
      {
        word_key: "stn", position: 2, sense_chosen: "shaytan",
        analysis_axes: {
          concept_chosen: "\u00c9garement/R\u00e9bellion",
          concepts: {
            "\u00c9garement/R\u00e9bellion": {
              status: "retenu",
              senses: ["diable", "\u00eatre rebelle"],
              proof_ctx: "Le nom al-shaytanu est au cas nominatif defini de la racine sh-t-n. Le Lane's donne \u00ab he became remote, he was far from good, from the truth, from the mercy of God \u00bb. Le shaytan est etymologiquement celui qui est eloigne \u2014 eloigne de la verite, de la misericorde, du bien. C'est un etat d'eloignement radical qui se manifeste par la rebellion. Le shaytan est le sujet des deux verbes causatifs : il a fait glisser et il a fait sortir.",
              axe1_verset: "Le mot al-shaytanu est le sujet actif du verset. C'est lui qui cause le glissement et la sortie. Le texte ne dit pas qu'Adam a desobei volontairement \u2014 il dit que le shaytan les a fait glisser. L'agent de la transgression est externe (le shaytan), pas interne (la volonte d'Adam). Cela ne supprime pas la responsabilite d'Adam mais montre le mecanisme : un agent exterieur cause un glissement.",
              axe2_voisins: "Le shaytan du verset 36 n'apparaissait pas au verset 35 ou Dieu parlait directement a Adam. Le shaytan intervient entre la parole divine et l'action humaine \u2014 il s'intercale. Le verset 34 mentionnait Iblis qui refuse de se prosterner. Le shaytan du verset 36 poursuit l'action d'Iblis du verset 34 : apres le refus vient la vengeance.",
              axe3_sourate: "La sourate al-Baqarah mentionne le shaytan en 2:36, 2:168, 2:208, 2:268, 2:275. A chaque occurrence, le shaytan est un agent d'egarement qui fait devier les humains. La sourate le presente comme un ennemi constant de l'humanite.",
              axe4_coherence: "Le Coran decrit la meme scene en 7:20-22 ou le shaytan murmure a Adam et son epouse pour leur reveler ce qui leur etait cache de leur nudite. En 20:120, le shaytan murmure a Adam. La methode du shaytan est le murmure, pas la force \u2014 il suggere, il fait glisser.",
              axe5_frequence: "Pour la mission du khalifa, le shaytan est l'adversaire permanent. Le khalifa doit reconnaitre les mecanismes du shaytan \u2014 le glissement subtil, pas l'attaque frontale. Le shaytan est eloigne de la verite et cherche a eloigner le khalifa."
            }
          }
        }
      },
      {
        word_key: "xrj", position: 4, sense_chosen: "faire sortir",
        analysis_axes: {
          concept_chosen: "Sortie/\u00c9mergence",
          concepts: {
            "Sortie/\u00c9mergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "\u00e9merger", "produire"],
              proof_ctx: "Le verbe fa-akhrajahuma est un accompli forme IV de la racine kh-r-j avec le pronom 3MD. Le Lane's donne pour forme IV \u00ab he caused to go out, he brought out, he expelled \u00bb. La forme IV est causative : le shaytan a cause leur sortie. Le complement mimma kana fihi (de ce dans quoi ils etaient) ne dit pas \u00ab du jardin \u00bb mais \u00ab de l'etat dans lequel ils etaient \u00bb \u2014 la sortie est un changement d'etat, pas seulement un deplacement spatial.",
              axe1_verset: "Le verbe akhrajahuma est le deuxieme acte du shaytan apres le glissement. D'abord le glissement, puis la sortie. La sortie est la consequence du glissement. Le complement mimma kana fihi est ambigu : il peut signifier \u00ab de ce dans quoi ils etaient \u00bb (l'etat de grace) ou \u00ab du lieu ou ils etaient \u00bb (le jardin). L'ambiguite est peut-etre voulue : ils sortent du lieu ET de l'etat.",
              axe2_voisins: "La sortie du verset 36 repond a l'entree du verset 35 (uskun = habite le jardin). Entree et sortie encadrent la sequence. Le verset 37 n'annulera pas la sortie \u2014 Adam ne retourne pas au jardin mais recoit des paroles et un retour vers Dieu (tawba).",
              axe3_sourate: "La sourate al-Baqarah utilise la racine kh-r-j dans plusieurs contextes : sortir de l'obscurite vers la lumiere (2:257), sortir des maisons (2:84, 2:240, 2:246). La sortie du jardin est la premiere grande sortie du recit coranique \u2014 le paradigme de toutes les sorties.",
              axe4_coherence: "Le Coran utilise akhraja pour la sortie d'Adam en 2:36 et en 7:27 (il les a fait sortir du jardin). La forme IV souligne la causalite : c'est le shaytan qui cause la sortie, pas Dieu directement. En 20:123, c'est Dieu qui fait descendre (ihbit), pas le shaytan.",
              axe5_frequence: "Pour la mission du khalifa, la sortie est le point de depart de la mission terrestre. Le khalifa est sorti du jardin pour vivre sur terre. La sortie n'est pas une punition definitive mais le debut d'une mission. Le khalifa doit transformer la sortie en opportunite."
            },
            "Tribut/Revenu": {
              status: "nul",
              senses: ["imp\u00f4t", "revenu"],
              proof_ctx: "Le tribut (kharaj) est un derive de kh-r-j (ce qui sort de la terre comme impot). Le contexte est une sortie physique et existentielle, pas un prelevement fiscal."
            }
          }
        }
      },
      {
        word_key: "kwn", position: 6, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["\u00eatre (verbe incomplet)", "venir \u00e0 l'existence"],
              proof_ctx: "Le verbe kana est un accompli duel de la racine k-w-n. Il decrit l'etat dans lequel Adam et son epouse se trouvaient avant le glissement. Le complement fihi (dans lequel) renvoie a l'etat ou au lieu precedent. Kana fihi signifie \u00ab ils etaient dans cet etat \u00bb \u2014 l'etat de grace dans le jardin.",
              axe1_verset: "Le verbe kana decrit le AVANT \u2014 l'etat dans lequel ils se trouvaient avant la sortie. La construction mimma kana fihi (de ce dans quoi ils etaient) fait reference au verset 35 : l'habitation dans le jardin, la nourriture abondante, la liberte. Le shaytan les a fait sortir de tout cela. Le verbe d'etat kana donne de la profondeur a la perte : ce n'est pas un objet qu'ils ont perdu mais un etat d'etre.",
              axe2_voisins: "L'etat decrit par kana (v36) est celui installe au verset 35 : habitation, nourriture, liberte. Le verset 37 decrit un nouvel etat apres le retour (tawba). La sequence est : etat initial (v35) \u2192 perte de l'etat (v36) \u2192 nouvel etat (v37).",
              axe3_sourate: "Le verbe kana structure toute la sourate comme charpente grammaticale. Il etablit les etats, les conditions, les situations a partir desquelles les actions se deploient.",
              axe4_coherence: "Le Coran utilise kana comme verbe d'etat fondamental dans des milliers d'occurrences. Ici, kana fihi decrit un etat perdu \u2014 un usage qui renforce le sentiment de perte.",
              axe5_frequence: "Pour la mission du khalifa, l'etat precedent (le jardin) est a la fois un souvenir et un objectif. Le khalifa connait l'etat qu'il a perdu et travaille a le retrouver."
            }
          }
        }
      },
      {
        word_key: "qwl", position: 8, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe wa qulna est le meme que celui du verset 35 \u2014 accompli 1PL de q-w-l. La parole divine intervient apres le glissement et la sortie. Dieu reprend la parole pour etablir les nouvelles conditions : la descente, l'inimitie, la terre comme lieu d'etablissement.",
              axe1_verset: "Le verbe qulna marque le deuxieme discours divin du verset. Apres la narration (le shaytan les fit glisser et sortir), Dieu parle. La parole divine du verset 36 est differente de celle du verset 35 : au v35 c'etait une permission avec un interdit, au v36 c'est un ordre de descendre avec une nouvelle realite. La parole divine s'adapte a la situation \u2014 elle ne punit pas, elle reorganise.",
              axe2_voisins: "La parole divine du verset 36 repond au glissement. Dieu ne se tait pas face a la transgression \u2014 Il parle, Il redefini les conditions. Le verset 37 montrera que la parole divine continue : Adam recoit des paroles (kalimatin) de son Seigneur. La parole divine est constante, avant et apres la transgression.",
              axe3_sourate: "La parole divine structure toute la sourate al-Baqarah. Chaque section contient une parole divine qui oriente l'action. La sourate est un dialogue permanent entre Dieu et Ses creatures.",
              axe4_coherence: "Le Coran repete qulna/qala dans les recits prophetiques. La parole divine est l'instrument principal de la guidance. En 7:24, la meme parole est rapportee : ihbitu ba'dukum li-ba'din aduww.",
              axe5_frequence: "Pour la mission du khalifa, la parole divine est le guide permanent. Meme apres la transgression, Dieu parle \u2014 Il ne se detourne pas. Le khalifa doit toujours ecouter la parole divine, surtout apres les erreurs."
            }
          }
        }
      },
      {
        word_key: "hbt", position: 9, sense_chosen: "descendre",
        analysis_axes: {
          concept_chosen: "Descente/Chute",
          concepts: {
            "Descente/Chute": {
              status: "retenu",
              senses: ["descendre", "faire descendre", "baisser", "tomber"],
              proof_ctx: "Le verbe ihbitu est un imperatif pluriel de la racine h-b-t. Le Lane's donne \u00ab he descended, he went down from a higher to a lower place \u00bb. L'imperatif est au pluriel (pas au duel) \u2014 ce qui indique que l'ordre s'adresse a plus de deux personnes. Le mouvement est du haut vers le bas \u2014 du jardin vers la terre.",
              axe1_verset: "Le verbe ihbitu est le pivot du verset. C'est l'ordre divin qui etablit la nouvelle realite : la descente du jardin vers la terre. Le pluriel (pas le duel) est significatif \u2014 il inclut probablement le shaytan dans la descente. La descente n'est pas une chute libre mais un ordre divin \u2014 c'est Dieu qui ordonne la descente, pas le shaytan qui la cause. Le shaytan a fait glisser, mais c'est Dieu qui ordonne la descente.",
              axe2_voisins: "La descente du verset 36 contraste avec l'habitation du verset 35 (uskun = habite). Le mouvement s'inverse : du repos dans le jardin a la descente vers la terre. Le verset 38 reprendra ihbitu dans un contexte different : descendez de la, et quand vous viendra de Moi une guidance, suivez-la.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine h-b-t en 2:36, 2:38, 2:61. En 2:61, Moise dit a son peuple \u00ab descendez dans une cite \u00bb (ihbitu misran). Le parallele entre la descente d'Adam et la descente des fils d'Isra'il en Egypte renforce l'idee d'un schema qui se repete.",
              axe4_coherence: "Le Coran utilise ihbit/ihbitu en 2:36, 2:38, 7:13, 7:24, 20:123. Chaque usage marque un passage du haut vers le bas, du jardin vers la terre, du sacre vers le profane. La descente est un motif recurrent du recit coranique.",
              axe5_frequence: "Pour la mission du khalifa, la descente est le point de depart. Le khalifa est descendu du jardin pour vivre sur terre. La descente n'est pas une degradation mais un envoi en mission. Le khalifa descend pour agir, pas pour subir."
            },
            "D\u00e9gradation": {
              status: "nul",
              senses: ["d\u00e9grader"],
              proof_ctx: "La degradation est un sens derive de h-b-t (baisser en valeur). Le contexte est un deplacement spatial (du jardin vers la terre), pas une devaluation morale."
            }
          }
        }
      },
      {
        word_key: "bed", position: 10, sense_chosen: "une partie",
        analysis_axes: {
          concept_chosen: "Partie/Division",
          concepts: {
            "Partie/Division": {
              status: "retenu",
              senses: ["une partie", "certains", "diviser en parties"],
              proof_ctx: "Le mot ba'dukum est un nom de la racine b-e-d avec le pronom 2MP (une partie de vous, certains d'entre vous). Le Lane's donne \u00ab a part, a portion, some \u00bb. La construction ba'dukum li-ba'din aduwwun signifie \u00ab les uns d'entre vous pour les autres ennemi \u00bb. Le mot ba'd divise le groupe en parties qui s'opposent mutuellement.",
              axe1_verset: "Le mot ba'dukum etablit une division au sein du groupe qui descend. Au verset 35, Adam et son epouse etaient unis (anta wa zawjuka). Au verset 36, la division apparait : les uns contre les autres. La descente s'accompagne d'une fragmentation \u2014 dans le jardin ils etaient ensemble, sur terre ils seront divises. La construction ba'dukum li-ba'din est symetrique : chaque partie est ennemi de l'autre.",
              axe2_voisins: "La division du verset 36 contraste avec l'unite du verset 35. Le couple uni (toi et ton epouse) se retrouve dans un monde divise (les uns contre les autres). Le verset 37 offrira un chemin de reconciliation a travers le retour (tawba).",
              axe3_sourate: "La sourate al-Baqarah traite la division humaine comme un theme majeur. Les categories de croyants, d'hypocrites, de deviants (v1-20) sont des divisions. La division entre les fils d'Isra'il (v75, v85, v87, v101, v145) illustre la fragmentation. La division inauguree au v36 se deploie dans toute la sourate.",
              axe4_coherence: "Le Coran utilise la meme formule en 7:24 et 20:123 (ba'dukum li-ba'din aduww). La division est une constante du recit de la descente \u2014 la vie terrestre est marquee par la division et l'inimitie.",
              axe5_frequence: "Pour la mission du khalifa, la division est le defi majeur. Le khalifa doit gerer un monde divise ou les parties s'opposent. Sa mission est de retablir une forme d'unite dans la division."
            }
          }
        }
      },
      {
        word_key: "edw", position: 12, sense_chosen: "ennemi",
        analysis_axes: {
          concept_chosen: "Hostilit\u00e9/Inimiti\u00e9",
          concepts: {
            "Hostilit\u00e9/Inimiti\u00e9": {
              status: "retenu",
              senses: ["ennemi", "hostilit\u00e9", "agression"],
              proof_ctx: "Le mot 'aduwwun est un nom au cas nominatif indefini de la racine '-d-w. Le Lane's donne \u00ab an enemy, a foe, one who acts with hostility, one who oversteps bounds \u00bb. Le mot est au singulier avec une valeur collective (un ennemi = ennemis les uns des autres). L'inimitie est la nouvelle condition de la vie terrestre \u2014 ce qui n'existait pas dans le jardin.",
              axe1_verset: "Le mot aduwwun est le predicat de la phrase nominale ba'dukum li-ba'din aduwwun. L'inimitie est presentee comme un fait, pas comme une punition. Dieu ne dit pas \u00ab vous serez punis par l'inimitie \u00bb mais \u00ab les uns seront ennemis des autres \u00bb. L'inimitie est la condition naturelle de la vie terrestre \u2014 le resultat de la descente.",
              axe2_voisins: "L'inimitie du verset 36 est absente du verset 35 ou regnait l'harmonie dans le jardin. L'inimitie est le prix de la sortie du jardin. Le verset 37 n'annule pas l'inimitie \u2014 le retour (tawba) concerne la relation avec Dieu, pas les relations humaines.",
              axe3_sourate: "La sourate al-Baqarah mentionne l'ennemi (aduww) en 2:36, 2:98, 2:168. Le shaytan est designe comme ennemi clair en 2:168 et 2:208. L'inimitie a deux niveaux : entre les humains et entre les humains et le shaytan.",
              axe4_coherence: "Le Coran utilise la meme formule en 7:24 et 20:123. L'inimitie est une constante du recit de la descente. Le shaytan est designe comme aduww dans de nombreux versets (2:168, 2:208, 6:142, 7:22, 12:5, 17:53, 35:6, 36:60, 43:62).",
              axe5_frequence: "Pour la mission du khalifa, l'inimitie est l'obstacle principal. Le khalifa vit dans un monde hostile ou les parties s'affrontent. Sa mission est de gerer l'inimitie, pas de l'ignorer."
            },
            "Course/Vitesse": {
              status: "nul",
              senses: ["courir"],
              proof_ctx: "La course ('adw) est un sens de la racine '-d-w (courir, depasser les bornes). Le contexte est relationnel (ennemi), pas locomoteur."
            },
            "Transgression/Exc\u00e8s": {
              status: "probable",
              senses: ["transgresser", "injustice"],
              proof_ctx: "La transgression ('udwan) est un sens derive de '-d-w (depasser les limites). L'ennemi est etymologiquement celui qui transgresse les bornes de la relation. Ce sens nourrit le concept d'hostilite sans s'y substituer.",
              axe1_verset: "La transgression serait compatible : l'ennemi est celui qui transgresse les limites de la relation juste. Mais le contexte privilegie le resultat (l'inimitie) plutot que la cause (la transgression).",
              axe2_voisins: "La transgression est liee au glissement du shaytan (v36a) qui transgresse les limites pour faire glisser Adam.",
              axe3_sourate: "La sourate utilise 'udwan (transgression) en 2:85, 2:178, 2:190, 2:193, 2:194, 2:229. Le concept de transgression est central dans la sourate.",
              axe4_coherence: "Le Coran lie hostilite et transgression dans la meme racine. Les deux sens coexistent.",
              axe5_frequence: "Le khalifa doit eviter la transgression pour ne pas devenir ennemi."
            }
          }
        }
      },
      {
        word_key: "ard", position: 15, sense_chosen: "terre",
        analysis_axes: {
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays"],
              proof_ctx: "Le nom al-ardi est au cas genitif apres la preposition fi (sur la terre). C'est la destination de la descente \u2014 le lieu ou Adam et les autres s'etabliront. La terre est ici opposee au jardin : le jardin est le lieu d'abondance sans effort, la terre est le lieu d'etablissement avec ses epreuves.",
              axe1_verset: "La terre est la destination annoncee par Dieu apres l'ordre de descendre. La construction wa lakum fi al-ardi mustaqarrun (et pour vous sur la terre un lieu d'etablissement) fait de la terre le nouveau domicile. La terre remplace le jardin \u2014 c'est un changement radical de cadre de vie.",
              axe2_voisins: "La terre du verset 36 est le meme lieu que celui du verset 30 (inni ja'ilun fi al-ardi khalifatan = je vais placer sur la terre un khalifa). La descente vers la terre est l'accomplissement de l'annonce du verset 30. Adam descend sur la terre pour y etre khalifa.",
              axe3_sourate: "La terre dans al-Baqarah est le theatre de la succession divine (2:30), de la corruption (2:27, 2:205), et de la descente (2:36, 2:38). La terre est le lieu ambivalent ou se joue le destin de l'humanite.",
              axe4_coherence: "Le Coran presente la terre comme lieu de la descente en 2:36, 7:24, 20:123. La terre est toujours le lieu de l'epreuve apres la sortie du jardin.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le terrain d'action. Le khalifa descend sur terre pour y agir, y construire, y representer Dieu. La terre est un depot sacre confie a l'humanite."
            }
          }
        }
      },
      {
        word_key: "qrr", position: 16, sense_chosen: "lieu d'etablissement",
        analysis_axes: {
          concept_chosen: "Stabilit\u00e9/\u00c9tablissement",
          concepts: {
            "Stabilit\u00e9/\u00c9tablissement": {
              status: "retenu",
              senses: ["\u00eatre stable", "s'\u00e9tablir"],
              proof_ctx: "Le mot mustaqarrun est un participe passif de la racine q-r-r forme X. Le Lane's donne pour mustaqarr \u00ab a settled, established, fixed place of abode \u00bb. La forme X (istaf'ala) indique la recherche de la stabilite \u2014 un lieu ou l'on cherche a s'etablir. Le mot est au cas nominatif indefini, predicat d'une phrase nominale elliptique (pour vous sur la terre [il y a] un lieu d'etablissement).",
              axe1_verset: "Le mot mustaqarr est la premiere description de ce que la terre offre aux descendants. Apres l'ordre de descendre et l'annonce de l'inimitie, Dieu precise que la terre n'est pas un desert vide : il y a un lieu ou s'etablir. Le mot apporte un equilibre \u2014 la descente est difficile (inimitie) mais pas sans refuge (lieu d'etablissement). La terre offre une stabilite, meme temporaire.",
              axe2_voisins: "Le lieu d'etablissement du verset 36 repond a l'habitation du verset 35 (uskun = habite). Dans le jardin, l'habitation etait un don direct. Sur terre, c'est un mustaqarr \u2014 un lieu ou l'on s'etablit, avec l'effort que cela implique. Le verset 37 ajoutera une dimension spirituelle : le retour vers Dieu.",
              axe3_sourate: "La sourate al-Baqarah ne reutilise pas mustaqarr mais le theme de l'etablissement terrestre est central : les maisons (2:125, 2:189), les lieux sacres (2:125, 2:144, 2:149-150), les demeures (2:84). L'humanite s'etablit sur terre dans differents lieux.",
              axe4_coherence: "Le Coran utilise mustaqarr en 2:36, 6:67, 6:98, 7:24, 11:6. Le mustaqarr est toujours un lieu temporaire \u2014 la vraie demeure est aupres de Dieu. En 6:67, \u00ab pour chaque annonce il y a un terme fixe \u00bb (li-kulli naba'in mustaqarr).",
              axe5_frequence: "Pour la mission du khalifa, le lieu d'etablissement est le cadre de la mission. Le khalifa s'etablit sur terre mais ne doit pas oublier que ce lieu est temporaire. L'etablissement terrestre est au service de la mission, pas une fin en soi."
            },
            "Froid/Fra\u00eecheur": {
              status: "nul",
              senses: ["\u00eatre froid", "rafra\u00eechir"],
              proof_ctx: "Le froid (qarr, qarar) est un sens de q-r-r (l'eau froide qui se stabilise). Le contexte parle d'un lieu d'etablissement, pas de temperature."
            },
            "Aveu/Reconnaissance": {
              status: "nul",
              senses: ["avouer"],
              proof_ctx: "L'aveu (iqrar) est un derive de q-r-r (stabiliser une parole = avouer). Le contexte est spatial, pas judiciaire."
            }
          }
        }
      },
      {
        word_key: "mte", position: 17, sense_chosen: "profit",
        analysis_axes: {
          concept_chosen: "Jouissance/Profit",
          concepts: {
            "Jouissance/Profit": {
              status: "retenu",
              senses: ["jouir", "faire profiter"],
              proof_ctx: "Le mot mata'un est un nom au cas nominatif indefini de la racine m-t-'. Le Lane's donne \u00ab an object of enjoyment, a chattel, a temporary provision, goods \u00bb. Le mata' est fondamentalement temporaire \u2014 c'est un profit qui a une fin. Le texte le confirme en ajoutant ila hinin (jusqu'a un temps).",
              axe1_verset: "Le mot mata'un est coordonne avec mustaqarrun par la conjonction wa (et). La terre offre deux choses : un lieu d'etablissement ET un profit. Le profit est qualifie par ila hinin (jusqu'a un temps) \u2014 il n'est pas eternel. La temporalite du profit contraste avec la permanence du jardin (ou il n'y avait pas de limite de temps). Sur terre, tout a une fin.",
              axe2_voisins: "Le profit temporaire du verset 36 contraste avec l'abondance libre du verset 35 (raghadan). Dans le jardin, la jouissance etait sans limite temporelle. Sur terre, la jouissance est bornee (ila hinin). Le verset 37 propose quelque chose qui depasse le temporaire : le retour vers Dieu.",
              axe3_sourate: "La sourate al-Baqarah utilise mata' en 2:36, 2:126, 2:236, 2:241. En 2:126, Abraham demande la nourriture pour ceux qui croient, et Dieu repond qu'Il donnera aussi au mecreant un profit temporaire (umatti'uhu qalilan). Le profit terrestre est toujours temporaire dans la sourate.",
              axe4_coherence: "Le Coran utilise mata'/mata'a dans des dizaines de versets pour souligner la temporalite des biens terrestres (3:14, 3:185, 4:77, 10:23, 16:117, 28:60, 40:39, 42:36). Le mata' est systematiquement oppose a l'akhira (la vie derniere) qui est meilleure et plus durable.",
              axe5_frequence: "Pour la mission du khalifa, le profit terrestre est un outil, pas un objectif. Le khalifa utilise le mata' pour accomplir sa mission mais ne doit pas s'y attacher. Le mata' est temporaire, la mission est eternelle."
            },
            "Bien/Provision": {
              status: "probable",
              senses: ["bien temporel", "provision"],
              proof_ctx: "La provision est un sens complementaire de m-t-' (les biens que l'on utilise). Le mot mata' designe a la fois la jouissance et les biens qui la procurent. Dans ce contexte, le profit inclut les provisions de la terre.",
              axe1_verset: "Les provisions terrestres font partie du mata' offert sur terre. Le sens est compatible et complementaire du profit.",
              axe2_voisins: "Les provisions terrestres remplaceront la nourriture du jardin.",
              axe3_sourate: "La sourate mentionne les provisions dans les recits des fils d'Isra'il (manne et cailles, 2:57).",
              axe4_coherence: "Le Coran utilise mata' pour les biens et les provisions dans de nombreux contextes.",
              axe5_frequence: "Le khalifa gere les provisions terrestres comme un depot temporaire."
            },
            "Dur\u00e9e/Extension": {
              status: "nul",
              senses: ["prolonger"],
              proof_ctx: "La prolongation (tamti') est un sens verbal de m-t-' (faire durer). Le contexte utilise mata' comme nom (un profit), pas comme verbe (prolonger)."
            }
          }
        }
      },
      {
        word_key: "hyn", position: 19, sense_chosen: "temps",
        analysis_axes: {
          concept_chosen: "Temps/Dur\u00e9e",
          concepts: {
            "Temps/Dur\u00e9e": {
              status: "retenu",
              senses: ["temps", "moment", "quand", "p\u00e9riode"],
              proof_ctx: "Le mot hinin est un nom au cas genitif de la racine h-y-n. Le Lane's donne \u00ab a time, a season, a period, an indefinite time \u00bb. Le mot hin designe un temps indefini \u2014 pas un moment precis mais une duree sans borne claire. La construction ila hinin (jusqu'a un temps) signifie \u00ab pour une duree limitee mais non precisee \u00bb.",
              axe1_verset: "Le mot hinin ferme le verset et la description de la vie terrestre. Le profit est temporaire (ila hinin), ce qui signifie que la vie sur terre a une fin. Le temps est la derniere donnee de l'equation terrestre : un lieu d'etablissement, un profit, pour un temps. La vie terrestre est un segment dans un temps plus grand.",
              axe2_voisins: "Le temps du verset 36 est absent du verset 35 ou la vie dans le jardin n'avait pas de limite temporelle. Le verset 37 introduira la tawba qui depasse la temporalite terrestre \u2014 le retour vers Dieu transcende le ila hinin.",
              axe3_sourate: "La sourate al-Baqarah traite le temps dans plusieurs passages : le temps des mois (2:185, 2:189, 2:194, 2:197, 2:217), le temps de la mort (2:180, 2:234, 2:240), le temps de Dieu (2:255). Le temps terrestre est toujours borne.",
              axe4_coherence: "Le Coran utilise hin/hinin en 2:36, 7:24, 14:25, 38:3, 38:88. En 7:24, la meme formule ila hinin apparait dans le meme recit. Le temps indefini est une constante du recit de la descente.",
              axe5_frequence: "Pour la mission du khalifa, le temps est la ressource la plus precieuse. Le khalifa dispose d'un temps limite (ila hinin) pour accomplir sa mission. La conscience du temps borne devrait intensifier l'engagement."
            },
            "Destin/\u00c9ch\u00e9ance": {
              status: "nul",
              senses: ["mort"],
              proof_ctx: "La mort (hina) est un sens derive de h-y-n (le moment fatal, l'echeance). Le contexte parle de la duree de la vie terrestre, pas du moment de la mort."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:37
  // verse_id=44, analysis_id=404
  // =====================================================
  37: {
    verse_id: 44,
    analysis_id: 404,
    translation_arab: "Alors Adam recut de son Maitre des paroles, et celui-ci revint vers lui. C'est Lui le revenant sans cesse, le dispensateur de misericorde.",
    full_translation: "Puis Adam re\u00e7ut de son Seigneur des paroles et Allah agr\u00e9a son repentir car c\u2019est Lui certes l\u2019Accueillant au repentir, le Mis\u00e9ricordieux.",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verset decrit la reconciliation apres la chute. Le verbe **fa-talaqqaY** est un accompli forme V de la racine l-q-y avec le sujet adam. Le Lane's donne pour forme V \u00ab he received, he took \u00bb avec une nuance d'effort \u2014 talaqqaY signifie recevoir activement, accueillir. Adam n'a pas subi les paroles, il les a accueillies. Le mot **adamu** est le nom propre au cas nominatif. Le complement **min rabbihi** signifie de la part de son Maitre. Le mot **rabbihi** est un nom de la racine r-b-b avec le pronom 3MS. Le Lane's donne \u00ab a lord, a master, an owner, one who nurtures, sustains, and brings to maturity \u00bb. Le mot **kalimatin** est un nom pluriel au cas accusatif de la racine k-l-m. Le Lane's donne \u00ab words, utterances \u00bb. Le verbe **fa-taba** est un accompli de la racine t-w-b. Le Lane's donne \u00ab he returned, he turned back \u00bb. La construction taba 'alayhi signifie \u00ab il revint vers lui \u00bb \u2014 c'est Dieu qui revient vers Adam, qui accepte son retour. Le mot **al-tawwabu** est un nom intensif de la racine t-w-b. Le Lane's donne \u00ab one who returns much, who is oft-returning \u00bb. La forme intensive (fa''al) indique que le retour est frequent et repete. Le mot **al-rahimu** est un nom intensif de la racine r-h-m. Le Lane's donne \u00ab the merciful, the compassionate \u00bb. La forme fa'il indique une qualite permanente.

\u00a7JUSTIFICATION\u00a7
**recut** \u2014 Le sens retenu est \u00ab Rencontre/Face a face \u00bb. Le verbe talaqqaY forme V signifie recevoir activement, accueillir. L'alternative \u00ab jeter \u00bb (sens \u00ab Jeter/Lancer \u00bb) est ecartee car la forme V est receptive, pas emissive.

**Maitre** \u2014 Le sens retenu est \u00ab Seigneurie/Autorite bienveillante \u00bb. Le mot rabb designe le maitre qui eleve et nourrit. L'alternative \u00ab croissance \u00bb (sens \u00ab Croissance/Augmentation \u00bb) est ecartee car le contexte designe une personne (son Maitre), pas un processus.

**paroles** \u2014 Le sens retenu est \u00ab Parole/Discours \u00bb. Le mot kalimat designe les paroles, les mots. L'alternative \u00ab blessure \u00bb est ecartee car le contexte est positif \u2014 les paroles sont un don de Dieu.

**revint** \u2014 Le sens retenu est \u00ab Retour \u00bb. Le verbe taba signifie revenir. La construction taba 'alayhi signifie \u00ab il revint vers lui \u00bb. L'alternative \u00ab se repentir \u00bb est un sens derive : le repentir est un retour vers Dieu, et ici c'est Dieu qui revient vers Adam.

**le revenant sans cesse** \u2014 Le sens retenu est \u00ab Retour \u00bb. Le nom intensif tawwab designe celui qui revient sans cesse. L'alternative \u00ab celui qui accepte le repentir \u00bb est une traduction courante mais interpretative \u2014 le mot dit \u00ab celui qui revient beaucoup \u00bb.

**dispensateur de misericorde** \u2014 Le sens retenu est \u00ab Misericorde/Tendresse \u00bb. Le mot rahim designe celui qui fait preuve de misericorde de maniere permanente. L'alternative \u00ab uterus \u00bb (sens \u00ab Uterus/Reproduction \u00bb) est ecartee car le contexte decrit une qualite divine.

\u00a7CRITIQUE\u00a7
**agrea son repentir vs revint vers lui** \u2014 Les traductions courantes donnent \u00ab Allah agrea son repentir \u00bb pour fa-taba 'alayhi. Le Lane's donne pour taba \u00ab he returned \u00bb. La construction taba 'ala quelqu'un signifie \u00ab il revint vers quelqu'un \u00bb. Le texte ne dit pas qu'Adam s'est repenti \u2014 il dit qu'Adam a recu des paroles et que Dieu est revenu vers lui. Le repentir est une interpretation, le retour est le sens litteral.
**Seigneur vs Maitre** \u2014 Les traductions donnent \u00ab Seigneur \u00bb pour rabb. Le Lane's donne \u00ab lord, master, owner \u00bb. \u00ab Seigneur \u00bb est un terme feodal chretien. \u00ab Maitre \u00bb est plus neutre et capture mieux le sens de celui qui possede, eleve et nourrit.
**Accueillant au repentir vs revenant sans cesse** \u2014 Les traductions donnent \u00ab Accueillant au repentir \u00bb pour al-tawwab. Le mot tawwab est la forme intensive de ta'ib (celui qui revient). Le sens litteral est \u00ab celui qui revient beaucoup \u00bb. \u00ab Accueillant au repentir \u00bb est une interpretation theologique, le texte dit simplement \u00ab le revenant sans cesse \u00bb.`,
    segments: [
      { fr: "alors recut", pos: "verbe", phon: "fa-talaqqaY", arabic: "\u0641\u064e\u062a\u064e\u0644\u064e\u0642\u0651\u064e\u0649\u0640\u0670\u0653", word_key: "lqy", is_particle: false, sense_retenu: "recevoir", position: 1 },
      { fr: "Adam", phon: "adamu", arabic: "\u0621\u064e\u0627\u062f\u064e\u0645\u064f", is_particle: true, position: 2 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 3 },
      { fr: "son Maitre", pos: "nom", phon: "rabbihi", arabic: "\u0631\u0651\u064e\u0628\u0651\u0650\u0647\u0650\u06d2", word_key: "rbb", is_particle: false, sense_retenu: "maitre", position: 4 },
      { fr: "des paroles", pos: "nom", phon: "kalimatin", arabic: "\u0643\u064e\u0644\u0650\u0645\u064e\u0640\u0670\u062a\u064d", word_key: "klm", is_particle: false, sense_retenu: "parole", position: 5 },
      { fr: "et revint", pos: "verbe", phon: "fa-taba", arabic: "\u0641\u064e\u062a\u064e\u0627\u0628\u064e", word_key: "twb", is_particle: false, sense_retenu: "revenir", position: 6 },
      { fr: "vers lui", phon: "'alayhi", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650", is_particle: true, position: 7 },
      { fr: "c'est Lui", phon: "innahu", arabic: "\u0625\u0650\u0646\u0651\u064e\u0647\u064f\u0648\u060c", is_particle: true, position: 8 },
      { fr: "Lui", phon: "huwa", arabic: "\u0647\u064f\u0648\u064e", is_particle: true, position: 9 },
      { fr: "le revenant sans cesse", pos: "nom", phon: "al-tawwabu", arabic: "\u0627\u0644\u062a\u0651\u064e\u0648\u0651\u064e\u0627\u0628\u064f", word_key: "twb", is_particle: false, sense_retenu: "revenant sans cesse", position: 10 },
      { fr: "le dispensateur de misericorde", pos: "nom", phon: "al-rahimu", arabic: "\u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u064f", word_key: "rhm", is_particle: false, sense_retenu: "dispensateur de misericorde", position: 11 }
    ],
    words: [
      {
        word_key: "lqy", position: 1, sense_chosen: "recevoir",
        analysis_axes: {
          concept_chosen: "Rencontre/Face \u00e0 face",
          concepts: {
            "Rencontre/Face \u00e0 face": {
              status: "retenu",
              senses: ["rencontrer", "trouver", "recevoir"],
              proof_ctx: "Le verbe fa-talaqqaY est un accompli forme V de la racine l-q-y. Le Lane's donne pour forme V \u00ab he received, he took, he accepted \u00bb avec une nuance d'effort actif. Adam a activement recu les paroles \u2014 il ne les a pas subies passivement. La forme V (tafa''ala) est reflexive-intensive : il a pris sur lui de recevoir, il s'est mis en position de recevoir. La reception des paroles est un acte volontaire d'Adam.",
              axe1_verset: "Le verbe talaqqaY ouvre le verset et marque un nouveau commencement. Apres le glissement (v36), Adam recoit des paroles de son Maitre. La reception est active \u2014 la forme V implique un effort. Adam ne recoit pas passivement : il accueille, il prend. Le fa- (alors) marque la sequence : apres la descente, Adam recoit. La reception des paroles est le premier acte d'Adam sur le chemin du retour.",
              axe2_voisins: "La reception des paroles (v37) repond au glissement (v36). Le shaytan a fait glisser, Dieu offre des paroles. Le verset 36 etait la chute, le verset 37 est le debut de la remontee. Le verset 38 completera la guidance : descendez, et quand une guidance viendra de Moi, suivez-la. La reception des paroles prepare la guidance.",
              axe3_sourate: "La sourate al-Baqarah presente plusieurs moments de reception : les fils d'Isra'il recoivent le Livre (2:53, 2:87), les croyants recoivent la guidance (2:2, 2:5). La reception est un acte fondateur dans la sourate \u2014 recevoir de Dieu est le debut de toute orientation.",
              axe4_coherence: "Le Coran utilise talaqqaY dans plusieurs contextes : en 27:6, Moise recoit le Coran (wa innaka la-tulaqqaY al-qurana). En 50:17, les deux anges recoivent (yatalaqqaY al-mutalaqqiyan). La forme V souligne toujours la reception active et volontaire.",
              axe5_frequence: "Pour la mission du khalifa, la reception est le premier pas. Le khalifa doit recevoir activement les paroles de Dieu \u2014 pas attendre passivement. La forme V montre que la guidance divine exige un effort de reception de la part de l'humain."
            },
            "Jeter/Lancer": {
              status: "nul",
              senses: ["jeter", "lancer"],
              proof_ctx: "Le sens de jeter (alqaY) est la forme IV de l-q-y. Le contexte utilise la forme V (talaqqaY = recevoir), qui est le contraire : recevoir ce qui a ete lance. Adam recoit, il ne jette pas."
            }
          }
        }
      },
      {
        word_key: "rbb", position: 4, sense_chosen: "maitre",
        analysis_axes: {
          concept_chosen: "Seigneurie/Autorit\u00e9 bienveillante",
          concepts: {
            "Seigneurie/Autorit\u00e9 bienveillante": {
              status: "retenu",
              senses: ["seigneur", "ma\u00eetre", "propri\u00e9taire", "celui qui \u00e9l\u00e8ve", "celui qui entretient", "celui qui poss\u00e8de", "gouverner"],
              proof_ctx: "Le mot rabbihi est un nom de la racine r-b-b avec le pronom 3MS (son Maitre). Le Lane's donne \u00ab a lord, a master, an owner, one who rears, nurtures, sustains, and brings to maturity \u00bb. Le rabb est celui qui possede et qui eleve \u2014 il combine l'autorite et la bienveillance. La construction min rabbihi (de la part de son Maitre) indique que les paroles viennent de l'autorite bienveillante qui a cree Adam.",
              axe1_verset: "Le mot rabbihi identifie la source des paroles recues par Adam. Ce n'est pas un Dieu distant qui envoie des paroles mais un Maitre bienveillant. L'usage de rabb (et non Allah) ici est significatif : rabb souligne la relation personnelle de soin et d'education. Le Maitre eleve Adam meme apres sa chute \u2014 Il lui donne des paroles pour se relever.",
              axe2_voisins: "Le Maitre du verset 37 est le meme qui a dit uskun al-jannata au verset 35 et ihbitu au verset 36. Le Maitre accompagne Adam a chaque etape : il l'installe, il ordonne la descente apres la transgression, et il offre des paroles pour le retour. La constance du Maitre contraste avec l'inconstance d'Adam.",
              axe3_sourate: "La sourate al-Baqarah utilise rabb dans des dizaines de versets pour souligner la relation de soin entre Dieu et Ses creatures. Le mot rabb est toujours employe dans des contextes de proximite et de bienveillance.",
              axe4_coherence: "Le Coran utilise rabb comme le nom le plus intime de Dieu. La construction min rabbihi (de son Maitre) apparait dans de nombreux contextes de guidance et de soin divin. Le rabb est celui vers qui on se tourne dans la difficulte.",
              axe5_frequence: "Pour la mission du khalifa, le Maitre est le point de reference constant. Le khalifa agit sous l'autorite bienveillante du Maitre qui l'a cree, installe, et guide meme apres les erreurs. La relation rabb-khalifa est le fondement de la mission."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "cro\u00eetre", "faire grandir", "nourrir", "d\u00e9velopper"],
              proof_ctx: "La croissance est le sens premier de r-b-b (faire croitre, nourrir, developper). Le rabb est etymologiquement celui qui fait grandir. Ce sens nourrit le concept de seigneurie \u2014 le maitre qui eleve est celui qui fait grandir.",
              axe1_verset: "La croissance serait compatible : le Maitre fait grandir Adam en lui donnant des paroles. Les paroles sont un instrument de croissance spirituelle.",
              axe2_voisins: "La croissance fait echo a l'education divine tout au long des versets 30-37 : Dieu enseigne les noms, installe dans le jardin, donne des regles, et offre des paroles apres la chute.",
              axe3_sourate: "La sourate presente Dieu comme celui qui fait grandir l'humanite a travers les epreuves et les enseignements.",
              axe4_coherence: "Le Coran lie rabb a tarbiya (education) par la meme racine. Le Maitre est l'Educateur par excellence.",
              axe5_frequence: "Le khalifa grandit sous la tutelle du Maitre qui l'eleve a travers les epreuves."
            },
            "\u00c9ducation/Accompagnement": {
              status: "probable",
              senses: ["\u00e9lever un enfant", "\u00e9duquer", "former", "accompagner la croissance"],
              proof_ctx: "L'education (tarbiya) est un derive de r-b-b (accompagner la croissance). Le rabb est celui qui accompagne l'etre dans son developpement. Ici, Dieu accompagne Adam apres sa chute en lui donnant des paroles \u2014 c'est un acte educatif.",
              axe1_verset: "L'education est presente dans le geste de donner des paroles. Le Maitre eduque Adam en lui donnant les mots pour revenir.",
              axe2_voisins: "L'education divine structure les versets 30-37 : enseignement des noms, regles du jardin, consequences de la transgression, paroles de retour.",
              axe3_sourate: "La sourate est un acte educatif dans son ensemble \u2014 elle enseigne par les recits et les lois.",
              axe4_coherence: "Le Coran presente la relation rabb-abd comme une relation educative ou le Maitre guide et corrige.",
              axe5_frequence: "Le khalifa est en formation permanente sous la tutelle du Maitre."
            }
          }
        }
      },
      {
        word_key: "klm", position: 5, sense_chosen: "parole",
        analysis_axes: {
          concept_chosen: "Parole/Discours",
          concepts: {
            "Parole/Discours": {
              status: "retenu",
              senses: ["parler", "parole", "mot"],
              proof_ctx: "Le mot kalimatin est un nom pluriel au cas accusatif de la racine k-l-m. Le Lane's donne \u00ab words, utterances, a sentence, a phrase \u00bb. Le pluriel kalimat designe des paroles \u2014 pas un seul mot mais un ensemble de mots. Le Coran ne precise pas le contenu de ces paroles dans ce verset (une tradition les identifie a 7:23 ou Adam dit \u00ab notre Maitre, nous nous sommes fait du tort \u00bb). La forme indefinie (kalimatin) laisse le contenu ouvert.",
              axe1_verset: "Le mot kalimatin est l'objet de la reception (talaqqaY). Adam recoit des paroles \u2014 ce sont ces paroles qui permettent le retour. Les paroles sont l'instrument de la reconciliation. Sans paroles, pas de retour. Le texte montre que la relation entre Dieu et l'humain passe par la parole \u2014 les paroles du commandement (v35), les paroles apres la transgression (v37).",
              axe2_voisins: "Les paroles du verset 37 repondent aux paroles du verset 35 (qulna = Nous avons dit). Dieu parle avant la transgression (pour poser les regles) et apres la transgression (pour offrir le retour). La parole divine encadre l'experience humaine. Le verset 38 ajoutera une nouvelle parole divine : descendez, et quand viendra de Moi une guidance.",
              axe3_sourate: "La sourate al-Baqarah est une sourate de paroles : paroles divines, paroles prophetiques, paroles des fils d'Isra'il. La parole est l'instrument principal de la guidance et de l'egarement. Les kalimat d'Adam sont le premier exemple de paroles qui restaurent.",
              axe4_coherence: "Le Coran identifie ces kalimat en 7:23 : qala rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna la-nakunanna mina al-khasirina (notre Maitre, nous nous sommes fait du tort, et si Tu ne nous pardonnes pas et ne nous fais pas misericorde, nous serons parmi les perdants). Les paroles sont un aveu et une demande.",
              axe5_frequence: "Pour la mission du khalifa, les paroles sont l'outil de la reconciliation. Le khalifa qui glisse dispose de paroles pour revenir. La parole est le pont entre la transgression et le retour."
            },
            "Blessure": {
              status: "nul",
              senses: ["blesser", "blessure"],
              proof_ctx: "La blessure (kalm) est un sens de k-l-m (blesser, entamer). Le contexte decrit des paroles recues par Adam, pas des blessures."
            }
          }
        }
      },
      {
        word_key: "twb", position: 6, sense_chosen: "revenir",
        analysis_axes: {
          concept_chosen: "Retour",
          concepts: {
            "Retour": {
              status: "retenu",
              senses: ["revenir", "se repentir", "accepter le repentir", "repentir"],
              proof_ctx: "Le verbe fa-taba est un accompli de la racine t-w-b. Le Lane's donne \u00ab he returned, he turned back, he repented \u00bb. La construction taba 'alayhi signifie \u00ab il revint vers lui, il se retourna vers lui \u00bb. Le sujet est Dieu (sous-entendu) et le complement 'alayhi renvoie a Adam. C'est Dieu qui revient vers Adam \u2014 pas Adam qui se repent devant Dieu. Le retour est initie par Dieu apres la reception des paroles par Adam.",
              axe1_verset: "Le verbe taba est le pivot du verset. Apres la reception des paroles, Dieu revient vers Adam. La sequence est claire : d'abord Adam recoit des paroles (acte humain), puis Dieu revient vers lui (acte divin). Le retour est reciproque : Adam fait un pas en recevant les paroles, Dieu fait un pas en revenant. La phrase innahu huwa al-tawwabu al-rahimu confirme : Dieu est le revenant sans cesse, celui qui revient toujours.",
              axe2_voisins: "Le retour du verset 37 repond a la sortie du verset 36. Le shaytan a fait sortir, Dieu fait revenir. La sortie et le retour forment un couple. Le verset 35 etait l'etat initial (jardin), le verset 36 la sortie, le verset 37 le retour. La sequence n'est pas circulaire : Adam ne retourne pas au jardin mais retrouve la relation avec Dieu.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine t-w-b en 2:37, 2:54, 2:128, 2:160, 2:187, 2:222, 2:279. Le retour est un motif recurrent \u2014 la possibilite de revenir est toujours ouverte. La sourate insiste sur le fait que Dieu est tawwab \u2014 Il revient sans cesse vers ceux qui reviennent vers Lui.",
              axe4_coherence: "Le Coran utilise taba/yatub dans des dizaines de versets. La tawba est fondamentalement un retour, pas un repentir au sens chretien (penitence). Le mouvement est bilateral : l'humain revient vers Dieu et Dieu revient vers l'humain. En 9:118, Dieu revient vers les trois qui etaient restes en arriere (thumma taba 'alayhim li-yatubu).",
              axe5_frequence: "Pour la mission du khalifa, le retour est le mecanisme de correction. Le khalifa qui glisse n'est pas perdu \u2014 il peut revenir. Et Dieu revient vers lui. La mission inclut le droit a l'erreur et la possibilite du retour."
            }
          }
        }
      },
      {
        word_key: "rhm", position: 11, sense_chosen: "dispensateur de misericorde",
        analysis_axes: {
          concept_chosen: "Mis\u00e9ricorde/Tendresse",
          concepts: {
            "Mis\u00e9ricorde/Tendresse": {
              status: "retenu",
              senses: ["mis\u00e9ricorde", "pardon", "traiter avec compassion"],
              proof_ctx: "Le mot al-rahimu est un nom intensif (fa'il) defini de la racine r-h-m. Le Lane's donne \u00ab the merciful, the compassionate, one who exercises mercy \u00bb. La racine r-h-m est liee a rahim (uterus) \u2014 la misericorde est etymologiquement une compassion viscerale, celle de la mere pour ce qui sort de ses entrailles. Le mot rahim designe une qualite permanente \u2014 Dieu est toujours misericordieux.",
              axe1_verset: "Le mot al-rahimu ferme le verset en formant un couple avec al-tawwabu. Dieu est le revenant sans cesse ET le dispensateur de misericorde. Les deux qualites sont complementaires : Dieu revient ET Il fait preuve de misericorde. Le retour sans misericorde serait un retour pour punir. Le retour avec misericorde est un retour pour restaurer. Le verset 37 est un verset de restauration, pas de punition.",
              axe2_voisins: "La misericorde du verset 37 contraste avec l'inimitie du verset 36 (ba'dukum li-ba'din aduww). Sur terre, les humains sont ennemis les uns des autres, mais Dieu reste misericordieux. La misericorde divine transcende l'inimitie terrestre.",
              axe3_sourate: "La sourate al-Baqarah s'ouvre par la basmala (bi-smi allahi al-rahmani al-rahimi). La misericorde encadre toute la sourate. Le mot rahim reapparait en 2:37, 2:54, 2:128, 2:143, 2:160, 2:163, 2:173, 2:182, 2:192, 2:199, 2:218, 2:226. La misericorde est la qualite divine la plus citee dans la sourate.",
              axe4_coherence: "Le Coran couple souvent tawwab et rahim (2:37, 2:54, 2:128, 4:16, 9:104, 9:118, 49:12). Le couple retour-misericorde est une formule coranique recurrente qui definit la reponse divine a la transgression humaine : Dieu revient avec misericorde.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde est le modele a suivre. Le khalifa qui represente Dieu sur terre doit incarner la misericorde \u2014 pas la vengeance. La misericorde est la qualite divine par excellence que le khalifa doit reflechir."
            },
            "Parent\u00e9/Lien familial": {
              status: "nul",
              senses: ["lien de parent\u00e9"],
              proof_ctx: "La parente (rahim) est un derive de r-h-m (les liens du sang, ceux qui sortent du meme uterus). Le contexte decrit une qualite divine, pas un lien de parente."
            },
            "Ut\u00e9rus/Reproduction": {
              status: "nul",
              senses: ["ut\u00e9rus"],
              proof_ctx: "L'uterus (rahim) est le sens premier physique de r-h-m. Le contexte decrit une qualite divine abstraite, pas un organe."
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

  const verseIds = [42, 43, 44];
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
// DAILY PHRASES — rgd (id=2606)
// =====================================================
async function insertDailyPhrases() {
  console.log('\n=== DAILY PHRASES ===');

  // Check which roots need phrases
  const toCheck = [
    { key: 'rgd', id: 2606 },
    { key: 'stn', id: 329 },
    { key: 'shjr', id: 469 },
    { key: 'shya', id: 423 }
  ];

  for (const { key, id } of toCheck) {
    const { count } = await supabase
      .from('word_daily')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', id);
    console.log(`  ${key} (id=${id}): ${count || 0} phrases existantes`);
  }

  // Insert 3 phrases for rgd
  const rgdPhrases = [
    {
      analysis_id: 2606,
      sense: "abondance",
      french: "Les habitants du village vivaient dans l'aisance, mangeant ce qu'ils voulaient sans effort."
    },
    {
      analysis_id: 2606,
      sense: "aisance",
      french: "Apres des annees de travail, il put enfin vivre dans l'abondance, sans se soucier du lendemain."
    },
    {
      analysis_id: 2606,
      sense: "sans contrainte",
      french: "Les enfants jouaient librement dans le jardin, profitant de tout sans aucune contrainte."
    }
  ];

  for (const phrase of rgdPhrases) {
    const { error } = await supabase.from('word_daily').insert(phrase);
    if (error) {
      console.error(`  ERREUR daily rgd:`, error.message);
    } else {
      console.log(`  rgd → "${phrase.sense}" inséré`);
    }
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 35 À 37 ===\n');

  for (let v = 35; v <= 37; v++) {
    await processVerse(v);
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log('\n=== PIPELINE V35-37 TERMINÉE ===');
}

main().catch(console.error);
