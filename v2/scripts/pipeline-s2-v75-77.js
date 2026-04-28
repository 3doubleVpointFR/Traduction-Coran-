const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 75 À 77
// verse_id=82 (2:75), verse_id=83 (2:76), verse_id=84 (2:77)
// =====================================================
// CRITICAL: concept names and senses are read from DB (concepts JSON)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:75
  // verse_id=82, analysis_id=440
  // "Esperez-vous qu'ils croient pour vous, alors qu'un groupe d'entre eux
  //  entendait la parole de Dieu puis l'alterait apres l'avoir comprise,
  //  en connaissance de cause ?"
  // =====================================================
  75: {
    verse_id: 82,
    analysis_id: 440,
    translation_arab: "Esperez-vous qu'ils croient pour vous, alors qu'un groupe d'entre eux entendait la parole de Dieu puis l'alterait apres l'avoir comprise, en connaissance de cause ?",
    full_translation: "Esperez-vous [donc] qu'ils croient pour vous, alors qu'un groupe d'entre eux entendait la parole de Dieu puis l'alterait apres l'avoir comprise, et ils [le] savaient ?",
    translation_explanation: `§DEMARCHE§
Ce verset interpelle les croyants sur leur espoir de voir les enfants d'Israel adherer a la foi, alors que certains d'entre eux ont un passe de falsification deliberee. Le verbe **tatma'uuna** est un inaccompli 2MP de la racine t-m-'. Le Lane's donne « to desire eagerly, to covet, to hope for ». L'inaccompli marque un espoir encore present au moment de l'enonciation. Le prefixe interrogatif (a-fa) introduit un reproche — « esperez-vous donc ? ». Le verbe **yu'minuu** est un inaccompli 3MP forme IV de la racine a-m-n. Le Lane's donne « to believe, to accept as true, to have faith ». La forme IV (if'al) est un causatif interne — croire c'est se mettre en securite par l'adhesion. Le subjonctif (an yu'minuu) marque l'objet de l'espoir. Le verbe **kaana** est un accompli 3MS de la racine k-w-n. Le Lane's donne « he was, it was, it existed ». L'accompli installe le fait dans le passe — c'etait ainsi. Le mot **fariiqun** est un nom masculin singulier nominatif indefini de la racine f-r-q. Le Lane's donne « a party, a group, a section of people ». Le tanwin (indefini) et le singulier indefini montrent que ce n'est pas tout le groupe, mais une partie. Le verbe **yasma'uuna** est un inaccompli 3MP de la racine s-m-'. Le Lane's donne « to hear, to listen, to obey ». L'inaccompli avec kaana marque un passe duratif — ils entendaient de maniere repetee. Le mot **kalaama** est un nom masculin singulier accusatif de la racine k-l-m. Le Lane's donne « speech, word, discourse ». Le mot designe la parole divine — kalaama Allahi est un genitif d'annexion. Le mot **Allahi** est un nom propre genitif de la racine a-l-h. Le Lane's donne « God, the one true deity ». Le genitif marque l'annexion — la parole de Dieu. Le verbe **yuharrifuunahu** est un inaccompli 3MP forme II de la racine h-r-f avec pronom 3MS. Le Lane's donne « to alter, to distort, to change from its proper meaning ». La forme II (taf'il) est un intensif — alterer deliberement et en profondeur. Le pronom suffixe (hu) renvoie au kalam de Dieu. Le mot **ba'di** est un nom masculin singulier genitif de la racine b-'-d. Le Lane's donne « after, subsequently ». La preposition min ba'di (apres) marque la posteriorite — l'alteration vient apres la comprehension. Le verbe **'aqualuuhu** est un accompli 3MP de la racine '-q-l avec pronom 3MS. Le Lane's donne « to understand, to comprehend, to use reason ». L'accompli marque que la comprehension etait complete avant l'alteration. Le pronom suffixe (hu) renvoie au kalam. Le verbe **ya'lamuuna** est un inaccompli 3MP de la racine '-l-m. Le Lane's donne « to know, to be aware ». L'inaccompli designe un savoir continu — ils savaient en permanence ce qu'ils faisaient.

§JUSTIFICATION§
**esperez-vous** — Le sens retenu est « esperer ». Le verbe tatma'uuna designe le desir ardent et l'espoir des croyants envers les enfants d'Israel. L'alternative « convoiter » est ecartee car le contexte est un espoir de conversion, pas une avidite materielle.

**croient** — Le sens retenu est « croire ». Le verbe yu'minuu forme IV designe l'adhesion a la foi. L'alternative « etre en securite » est ecartee car le subjonctif (an yu'minuu) designe l'objet de l'espoir — la foi, pas la securite physique.

**etait** — Le sens retenu est « etre ». Le verbe kaana pose le cadre temporel passe. Pas d'alternative pertinente.

**un groupe** — Le sens retenu est « groupe ». Le mot fariiqun designe une partie des enfants d'Israel. L'alternative « separer » est ecartee car le mot est ici un nom, pas un verbe.

**entendaient** — Le sens retenu est « entendre ». Le verbe yasma'uuna designe l'ecoute de la parole divine. L'alternative « obeir » est ecartee car le contexte montre precisement qu'ils n'obeissaient pas — ils alteraient apres avoir entendu.

**parole** — Le sens retenu est « parole ». Le mot kalaama designe le discours divin. L'alternative « blesser » est ecartee car le mot est ici un nom (kalam), pas un verbe de blessure.

**Dieu** — Le sens retenu est « Dieu ». Le mot Allahi designe le nom propre de Dieu. Pas d'alternative pertinente dans ce contexte.

**alteraient** — Le sens retenu est « alterer ». Le verbe yuharrifuunahu forme II designe la falsification deliberee du texte divin. L'alternative « bord » est ecartee car le verbe forme II est un acte de distorsion, pas une question de limite spatiale.

**apres** — Le sens retenu est « apres ». Le mot ba'di marque la posteriorite temporelle. L'alternative « eloignement » est ecartee car le contexte est temporel, pas spatial.

**compris** — Le sens retenu est « comprendre ». Le verbe 'aqualuuhu designe la comprehension intellectuelle. L'alternative « lier » est ecartee car le contexte est la comprehension du texte, pas un lien physique.

**savaient** — Le sens retenu est « savoir ». Le verbe ya'lamuuna designe la connaissance deliberee — ils savaient ce qu'ils faisaient. L'alternative « monde » est ecartee car le verbe a l'inaccompli designe le savoir, pas l'univers.

§CRITIQUE§
**esperez-vous vs convoitez-vous** — Le verbe tama'a porte une nuance d'avidite que le simple « esperer » ne rend pas entierement. Le tama' est un desir intense, presque naif, envers un resultat improbable. L'interrogation « esperez-vous donc ? » est une question rhetorique qui pointe l'inanite de cet espoir.
**entendaient vs ecoutaient** — Le verbe sami'a peut signifier « ecouter » (avec obeissance) ou simplement « entendre ». Le contexte montre qu'ils entendaient sans obeir — ils alteraient ensuite. L'audition sans obeissance est le probleme central.
**alteraient** — Le verbe harrafa forme II est un intensif qui designe une alteration profonde et deliberee, pas un simple changement. La falsification est methodique et consciente, comme le confirme « apres l'avoir compris, en connaissance de cause ».`,
    segments: [
      { fr: "esperez-vous donc", pos: "verbe", phon: "tatma'uuna", arabic: "أَفَتَطْمَعُونَ", word_key: "tmae", is_particle: false, sense_retenu: "espérer", position: 0 },
      { fr: "que", phon: "an", arabic: "أَن", is_particle: true, position: 1 },
      { fr: "ils croient", pos: "verbe", phon: "yu'minuu", arabic: "يُؤْمِنُوا۟", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 2 },
      { fr: "pour vous", phon: "lakum", arabic: "لَكُمْ", is_particle: true, position: 3 },
      { fr: "alors que deja", phon: "wa-qad", arabic: "وَقَدْ", is_particle: true, position: 4 },
      { fr: "etait", pos: "verbe", phon: "kaana", arabic: "كَانَ", word_key: "knw", is_particle: false, sense_retenu: "être", position: 5 },
      { fr: "un groupe", pos: "nom", phon: "fariiqun", arabic: "فَرِيقٌ", word_key: "frq", is_particle: false, sense_retenu: "groupe", position: 6 },
      { fr: "d'entre eux", phon: "minhum", arabic: "مِّنْهُمْ", is_particle: true, position: 7 },
      { fr: "entendaient", pos: "verbe", phon: "yasma'uuna", arabic: "يَسْمَعُونَ", word_key: "sme", is_particle: false, sense_retenu: "entendre", position: 8 },
      { fr: "la parole", pos: "nom", phon: "kalaama", arabic: "كَلَٰمَ", word_key: "klm", is_particle: false, sense_retenu: "parole", position: 9 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 10 },
      { fr: "puis", phon: "thumma", arabic: "ثُمَّ", is_particle: true, position: 11 },
      { fr: "l'alteraient", pos: "verbe", phon: "yuharrifuunahu", arabic: "يُحَرِّفُونَهُ،", word_key: "hrf", is_particle: false, sense_retenu: "altérer", position: 12 },
      { fr: "apres", phon: "min", arabic: "مِن۞", is_particle: true, position: 13 },
      { fr: "apres", pos: "nom", phon: "ba'di", arabic: "بَعْدِ", word_key: "baed", is_particle: false, sense_retenu: "après", position: 14 },
      { fr: "ce que", phon: "ma", arabic: "مَا", is_particle: true, position: 15 },
      { fr: "ils l'ont compris", pos: "verbe", phon: "'aqualuuhu", arabic: "عَقَلُوهُ", word_key: "eql", is_particle: false, sense_retenu: "comprendre", position: 16 },
      { fr: "et eux", phon: "wa-hum", arabic: "وَهُمْ", is_particle: true, position: 17 },
      { fr: "savaient", pos: "verbe", phon: "ya'lamuuna", arabic: "يَعْلَمُونَ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 18 }
    ],
    words: [
      {
        word_key: "tmae", position: 0, sense_chosen: "espérer",
        analysis_axes: {
          concept_chosen: "Désir/Espérance",
          sense_chosen: "espérer",
          concepts: {
            "Désir/Espérance": {
              status: "retenu",
              senses: ["convoiter", "espérer", "avidité"],
              proof_ctx: "Le verbe tatma'uuna est un inaccompli 2MP de la racine t-m-'. Le Lane's donne « to desire eagerly, to covet, to hope for, to be greedy for ». L'interrogation a-fa-tatma'uuna (esperez-vous donc) est une question rhetorique qui pointe l'inanite d'un espoir place dans des gens connus pour leur falsification. Le tama' est un desir intense, une avidite qui s'attache a un objet hors de portee.",
              axe1_verset: "Le verbe tatma'uuna ouvre le verset par une question rhetorique — « esperez-vous donc ? ». Le prefixe a-fa combine l'interrogation et la consequence — « apres tout cela, esperez-vous encore ? ». L'espoir vise la conversion des enfants d'Israel (an yu'minuu). Le verset oppose cet espoir naif a la realite de la falsification deliberee. L'espoir sans discernement est pointe comme une faiblesse.",
              axe2_voisins: "Le verset 74 decrivait la durete des coeurs des enfants d'Israel — plus durs que la pierre. Ce verset 75 tire la consequence logique : pourquoi esperer la foi de coeurs aussi endurcis ? Le verset 76 montrera leur hypocrisie active — ils disent croire devant les croyants mais se concertent en prive. La progression va de la durete a l'espoir vain puis a l'hypocrisie.",
              axe3_sourate: "La racine t-m-' apparait dans la sourate al-Baqarah pour designer l'espoir mal place. Ce verset est le seul emploi de cette racine dans la sourate. L'interpellation « esperez-vous » s'adresse aux croyants de Medine qui esperaient la conversion des tribus juives voisines. La sourate montre que l'espoir doit etre fonde sur la realite, pas sur le voeu pieux.",
              axe4_coherence: "La racine t-m-' apparait 12 fois dans le Coran. En 70:38, « chacun d'eux espere entrer au Jardin ». En 26:82, « celui dont j'espere qu'Il me pardonnera ». Le tama' peut etre legitime (esperer le pardon de Dieu) ou vain (esperer la foi de ceux qui falsifient). Le Coran distingue l'espoir fonde de l'espoir naif.",
              axe5_frequence: "Pour la mission du khalifa, l'espoir doit etre dirige vers Dieu, pas vers les hommes. Le khalifa qui place son espoir dans la conversion d'autrui risque la deception. Ce verset enseigne le realisme — l'espoir naif envers ceux qui ont montre leur falsification est une erreur de jugement."
            }
          }
        }
      },
      {
        word_key: "amn", position: 2, sense_chosen: "croire",
        analysis_axes: {
          concept_chosen: "Foi/Adhésion",
          sense_chosen: "croire",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["accepter comme vrai", "croyant", "confirmer", "croire", "avoir la foi"],
              proof_ctx: "Le verbe yu'minuu est un inaccompli 3MP forme IV de la racine a-m-n. Le Lane's donne « to believe, to accept as true, to have faith, to trust ». La forme IV (af'ala) est un causatif interne — se mettre dans un etat de securite interieure par l'adhesion a la verite. Le subjonctif an yu'minuu est l'objet de l'espoir — « que ils croient ». La foi est ici presentee comme un acte volontaire, pas une donnee innee.",
              axe1_verset: "Le verbe yu'minuu est l'objet de l'espoir vain — « esperez-vous qu'ils croient ? ». La foi est presentee comme ce que les croyants esperent des enfants d'Israel. Le verset oppose la foi esperee a la falsification reelle — ils n'ont pas cru car ils ont altere la parole divine. La foi est incompatible avec la falsification deliberee du texte sacre.",
              axe2_voisins: "Le verset 74 decrivait l'endurcissement des coeurs. Ce verset 75 montre l'impossibilite de la foi dans des coeurs endurcis. Le verset 76 revelera l'hypocrisie — ils disent « nous croyons » (amanna) devant les croyants mais se demandent en prive s'il faut partager la revelation. La progression montre que la foi de facade n'est pas la vraie adhesion.",
              axe3_sourate: "La racine a-m-n est l'une des plus frequentes de la sourate al-Baqarah. En 2:3, les pieux « croient a l'invisible ». En 2:8, « ceux qui disent nous croyons mais ne sont pas croyants ». La sourate distingue la foi sincere de la foi de facade. Les enfants d'Israel dans ce verset representent la foi de facade.",
              axe4_coherence: "La racine a-m-n apparait plus de 800 fois dans le Coran. Le mot iman (foi) est le pilier de l'islam. La forme IV yu'minu designe l'acte de croire — se remettre en confiance a Dieu. Le Coran distingue l'iman veritable (coeur et actes) de l'iman verbal (profession sans conviction).",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement de l'action. Le khalifa croit sincerement et agit en consequence. Les enfants d'Israel montrent la faillite de la foi de facade — dire « nous croyons » tout en falsifiant la parole divine est la negation meme de la foi."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "être en sécurité", "confier", "fidèle", "lieu sûr", "se sentir en sécurité"],
              proof_ctx: "Le sens de securite est la racine etymologique de a-m-n. La foi (iman) derive de l'idee de se mettre en securite — croire c'est se confier a Dieu pour etre en surete. Le contexte utilise la forme IV (yu'minuu) qui est specifiquement la foi, mais l'arriere-plan de securite colore le sens."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["accorder la sécurité", "protéger"],
              proof_ctx: "Le contexte est la foi (croire), pas l'acte de proteger ou garantir. Le verbe forme IV est intransitif en ce qui concerne la protection."
            }
          }
        }
      },
      {
        word_key: "knw", position: 5, sense_chosen: "être",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          sense_chosen: "être",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["être", "devenir", "exister"],
              proof_ctx: "Le verbe kaana est un accompli 3MS de la racine k-w-n. Le Lane's donne « he was, it was, it existed, it became ». L'accompli installe le fait dans le passe — il y avait un groupe. Kaana pose le cadre temporel et factuel — c'est un verbe d'existence qui ancre le recit dans la realite historique.",
              axe1_verset: "Le verbe kaana introduit la proposition circonstancielle — « alors qu'un groupe d'entre eux etait [tel que] ». L'accompli avec wa-qad (et deja) renforce le caractere etabli du fait. Kaana ne se contente pas de situer dans le temps — il affirme la realite incontestable de la falsification passee. Le verset utilise kaana pour opposer le fait historique a l'espoir present.",
              axe2_voisins: "Le verset 74 utilisait des verbes descriptifs pour l'endurcissement. Ce verset 75 utilise kaana pour ancrer la falsification dans l'histoire. Le verset 76 utilisera idha (quand) pour decrire les situations presentes. La progression va du passe etabli (kaana) au present vecu (idha).",
              axe3_sourate: "La racine k-w-n est omnipresente dans la sourate al-Baqarah. En 2:34, « il etait parmi les mecreants ». En 2:44, « etes-vous au point de commander le bien aux gens ». Kaana structure la narration de la sourate en ancrant les faits dans le temps — chaque kaana est un jalon historique.",
              axe4_coherence: "La racine k-w-n apparait plus de 1300 fois dans le Coran. Le verbe kaana est le verbe d'existence par excellence en arabe — il n'est pas un simple auxiliaire mais affirme l'etre et le devenir. Le Coran utilise kaana pour etablir des verites factuelles incontestables.",
              axe5_frequence: "Pour la mission du khalifa, l'etre est la base de l'action. Le khalifa existe et agit — kaana affirme sa realite. Dans ce verset, kaana etablit le fait que la falsification a eu lieu — c'est un fait d'existence, pas une hypothese."
            }
          }
        }
      },
      {
        word_key: "frq", position: 6, sense_chosen: "groupe",
        analysis_axes: {
          concept_chosen: "Séparation/Distinction",
          sense_chosen: "groupe",
          concepts: {
            "Séparation/Distinction": {
              status: "retenu",
              senses: ["séparer", "distinguer", "diviser", "Furqân"],
              proof_ctx: "Le mot fariiqun est un nom masculin singulier nominatif indefini de la racine f-r-q. Le Lane's donne « a party, a group, a section, a division of people ». Le fariiq est un groupe qui s'est separe du tout — le sens de groupe derive du sens de separation. L'indefini (tanwin) et le singulier montrent que ce n'est pas tous les enfants d'Israel, mais une partie separee du reste.",
              axe1_verset: "Le mot fariiqun est le sujet de la proposition circonstancielle — c'est un groupe d'entre eux qui falsifiait. Le indefini souligne que ce n'est pas la totalite mais une fraction. Le mot minhum (d'entre eux) precise que ce groupe est tire des enfants d'Israel. Le verset distingue entre le tout et la partie — tous ne sont pas falsificateurs, mais un groupe l'est.",
              axe2_voisins: "Le verset 74 parlait generalement des enfants d'Israel. Ce verset 75 precise par fariiqun qu'il s'agit d'un groupe specifique. Le verset 76 montrera le comportement de ce groupe face aux croyants. La precision du terme fariiq empeche la generalisation abusive — le Coran distingue les individus au sein d'un peuple.",
              axe3_sourate: "La racine f-r-q dans la sourate al-Baqarah traite de la separation et de la distinction. En 2:53, le Furqan est le critere qui separe le vrai du faux. En 2:102, la magie separe l'homme de sa femme. Le fariiq (groupe) est une separation sociale — un groupe distinct au sein d'un peuple.",
              axe4_coherence: "La racine f-r-q apparait 72 fois dans le Coran. Le Furqan (2:53, 2:185, 25:1) est le critere de distinction entre le vrai et le faux. Le fariiq est un groupe qui s'est distingue — separe du reste par son comportement. Le Coran utilise fariiq pour designer des sous-groupes aux comportements specifiques.",
              axe5_frequence: "Pour la mission du khalifa, la distinction est l'outil du discernement. Le khalifa separe le vrai du faux. Le fariiq falsificateur est un groupe qui a choisi la mauvaise distinction — separer la parole divine de son sens originel."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Le sens de groupe est le meme que celui du concept retenu — fariiq designe un groupe par le fait qu'il est separe. Le concept de separation englobe celui de groupe."
            }
          }
        }
      },
      {
        word_key: "sme", position: 8, sense_chosen: "entendre",
        analysis_axes: {
          concept_chosen: "Audition/Écoute",
          sense_chosen: "entendre",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["entendre", "écouter", "ouïe", "obéir", "exaucer"],
              proof_ctx: "Le verbe yasma'uuna est un inaccompli 3MP de la racine s-m-'. Le Lane's donne « to hear, to listen to, to hearken, to obey ». L'inaccompli avec kaana marque un passe duratif — ils entendaient de maniere repetee. Le verbe sami'a couvre l'audition physique et l'obeissance — ici le contexte montre qu'ils entendaient sans obeir, puisqu'ils alteraient ensuite.",
              axe1_verset: "Le verbe yasma'uuna est le premier acte de la sequence — ils entendaient la parole de Dieu. L'audition precede l'alteration — ils ne pouvaient alterer que ce qu'ils avaient d'abord entendu et compris. Le verset construit une sequence en trois temps : entendre (yasma'uuna), comprendre ('aqualuuhu), alterer (yuharrifuunahu). L'audition est le point de depart de la trahison.",
              axe2_voisins: "Le verset 74 decrivait des coeurs endurcis. Ce verset 75 montre que l'audition n'a pas suffi a amollir ces coeurs — ils ont entendu la parole de Dieu et l'ont alteree. Le verset 76 montrera qu'ils entendent aussi ce que les croyants disent. L'audition sans obeissance est le fil conducteur de ces versets.",
              axe3_sourate: "La racine s-m-' dans la sourate al-Baqarah traite de l'audition divine et humaine. En 2:127, « Seigneur accepte de nous, Tu es l'Audient ». En 2:181, « Dieu est Audient et Savant ». La sourate oppose l'audition divine (qui entend et repond) a l'audition humaine (qui entend et deforme).",
              axe4_coherence: "La racine s-m-' apparait plus de 180 fois dans le Coran. L'attribut divin al-Sami' (l'Audient) designe Celui qui entend tout. L'audition humaine est souvent deficiente — en 2:18, « sourds, muets, aveugles ». Le Coran distingue l'audition physique de l'audition obeissante.",
              axe5_frequence: "Pour la mission du khalifa, l'audition est le premier pas vers l'obeissance. Le khalifa entend la parole divine et la met en pratique. Les enfants d'Israel montrent l'echec de l'audition sans obeissance — entendre ne suffit pas, il faut obeir."
            }
          }
        }
      },
      {
        word_key: "klm", position: 9, sense_chosen: "parole",
        analysis_axes: {
          concept_chosen: "Parole/Discours",
          sense_chosen: "parole",
          concepts: {
            "Parole/Discours": {
              status: "retenu",
              senses: ["parler", "parole", "mot"],
              proof_ctx: "Le mot kalaama est un nom masculin singulier accusatif de la racine k-l-m. Le Lane's donne « speech, discourse, talk, word ». Le mot kalam est le substantif verbal — la parole en tant que contenu articule. Kalaama Allahi est un genitif d'annexion — la parole de Dieu, c'est-a-dire la Torah revelee a Moise.",
              axe1_verset: "Le mot kalaama est l'objet de l'audition et de l'alteration. Les enfants d'Israel entendaient la parole de Dieu (kalaama Allahi) puis l'alteraient. La parole divine est a la fois l'objet de la reception et de la falsification. Le verset pointe le paradoxe — la parole de Dieu, sacree par nature, est traitee comme un materiau modifiable.",
              axe2_voisins: "Le verset 74 parlait de coeurs durs. Ce verset 75 montre que meme la parole de Dieu ne penetrait pas ces coeurs — elle etait alteree au lieu d'etre preservee. Le verset 76 montrera comment les hypocrites manipulent la parole dans leurs echanges. La parole divine falsifiee est le contraire de la parole divine preservee.",
              axe3_sourate: "La racine k-l-m dans la sourate al-Baqarah traite de la parole divine et de la communication. En 2:253, « Dieu a parle a Moise directement (kallama) ». En 2:174, « Dieu ne leur parlera pas au Jour du Jugement ». La sourate montre que la parole divine est un privilege — la falsifier est un acte grave.",
              axe4_coherence: "La racine k-l-m apparait 75 fois dans le Coran. Le mot kalam designe la parole articulee, le discours structure. Le kalam d'Allah est la revelation — Torah, Injil, Coran. En 9:6, « qu'il entende la parole de Dieu ». La parole de Dieu est le fondement de la religion — l'alterer est l'un des peches les plus graves.",
              axe5_frequence: "Pour la mission du khalifa, la parole divine est le guide de l'action. Le khalifa preserve la parole de Dieu et la met en pratique. La falsification de la parole divine est la trahison ultime de la mission de khalifa — transformer le guide en piege."
            },
            "Blessure": {
              status: "nul",
              senses: ["blesser", "blessure"],
              proof_ctx: "Le sens de blessure est un autre aspect de k-l-m. Ici le mot kalaama est un nom (parole), pas un verbe de blessure. Le contexte est la parole de Dieu, pas une atteinte physique."
            }
          }
        }
      },
      {
        word_key: "alh", position: 10, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          sense_chosen: "Dieu",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allahi est un nom propre genitif de la racine a-l-h. Le Lane's donne « God, the one true deity, the Supreme Being ». Le genitif marque l'annexion a kalaama — la parole de Dieu. Le nom Allah est le nom propre de Dieu qui reunit tous les attributs divins.",
              axe1_verset: "Le mot Allahi est en position de genitif apres kalaama — « la parole de Dieu ». L'expression kalaama Allahi designe la revelation divine (la Torah). L'alteration de la parole « de Dieu » est specifiquement grave car l'auteur de la parole est Dieu Lui-meme. Le verset pointe la transgression — ils alterent la parole de l'Etre supreme.",
              axe2_voisins: "Le verset 74 faisait reference a Dieu par « ce que Dieu fait ». Ce verset 75 associe Dieu a Sa parole. Le verset 77 rappellera que Dieu sait ce qu'ils cachent et ce qu'ils montrent. La progression montre Dieu comme auteur de la parole, puis comme temoin de la falsification.",
              axe3_sourate: "La racine a-l-h est la plus presente de la sourate al-Baqarah. Le nom Allah apparait dans presque chaque passage pour rappeler que Dieu est le sujet central de la sourate. En 2:255, l'Ayat al-Kursi developpe les attributs divins. La sourate construit progressivement la connaissance de Dieu.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. C'est le nom le plus frequent et le plus central. Le nom reunit tous les attributs — le Vivant, le Savant, le Puissant. L'utilisation du nom Allah dans « kalaama Allahi » souligne la sacralite de la parole revelee.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant qui confie la mission. Le khalifa agit au nom de Dieu et selon Sa parole. Alterer la parole de Dieu, c'est trahir le mandant — le khalifa qui falsifie la parole divine perd sa legitimite."
            }
          }
        }
      },
      {
        word_key: "hrf", position: 12, sense_chosen: "altérer",
        analysis_axes: {
          concept_chosen: "Élément/Bord",
          sense_chosen: "altérer",
          concepts: {
            "Élément/Bord": {
              status: "retenu",
              senses: ["lettre", "bord", "particule"],
              proof_ctx: "Le verbe yuharrifuunahu est un inaccompli 3MP forme II de la racine h-r-f avec pronom suffixe 3MS. Le Lane's donne « to alter, to change, to distort, to pervert from its proper meaning ». La forme II (taf'il) est un intensif — alterer de maniere profonde et deliberee. Le harf (lettre, bord) est l'unite de base — alterer les harfs c'est changer les lettres et donc le sens. Le pronom suffixe (hu) renvoie a kalaama Allahi.",
              axe1_verset: "Le verbe yuharrifuunahu est l'acte central du verset — l'alteration de la parole divine. La sequence est complete : entendre (yasma'uuna), comprendre ('aqualuuhu), puis alterer (yuharrifuunahu). L'alteration est deliberee — elle vient apres la comprehension, pas par ignorance. Le verset fait de la falsification un acte de mauvaise foi, pas une erreur.",
              axe2_voisins: "Le verset 74 montrait l'endurcissement des coeurs. Ce verset 75 montre la consequence de cette durete — la falsification deliberee. Le verset 79 reprendra le theme de la falsification en montrant ceux qui ecrivent le Livre de leurs propres mains. La falsification est un theme recurrent dans cette section de la sourate.",
              axe3_sourate: "La racine h-r-f dans la sourate al-Baqarah apparait specifiquement dans le contexte de la falsification. En 2:75, yuharrifuunahu designe l'alteration de la parole divine. En 4:46, le meme verbe designe la meme pratique. La sourate etablit la falsification comme le peche specifique d'un groupe des enfants d'Israel.",
              axe4_coherence: "La racine h-r-f apparait 6 fois dans le Coran, toujours dans le contexte de la falsification des Ecritures. En 5:13 et 5:41, le meme verbe designe l'alteration du sens. Le harf est la lettre — alterer les lettres c'est alterer le sens. Le Coran designe cette pratique par un verbe specifique.",
              axe5_frequence: "Pour la mission du khalifa, la preservation du texte sacre est une responsabilite fondamentale. Le khalifa ne falsifie pas — il preserve et transmet fidelement. La falsification est l'antithese de la mission de khalifa — transformer le message divin au lieu de le porter."
            }
          }
        }
      },
      {
        word_key: "baed", position: 14, sense_chosen: "après",
        analysis_axes: {
          concept_chosen: "Postériorité",
          sense_chosen: "après",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["après", "ensuite"],
              proof_ctx: "Le mot ba'di est un nom masculin singulier genitif de la racine b-'-d. Le Lane's donne « after, subsequently, afterwards ». La preposition min ba'di (de apres) marque la posteriorite temporelle. L'alteration vient apres la comprehension — la sequence temporelle est essentielle pour etablir la mauvaise foi.",
              axe1_verset: "Le mot ba'di situe l'alteration apres la comprehension. La construction min ba'di ma 'aqualuuhu (apres l'avoir compris) est la preuve de la mauvaise foi — ils ne falsifiaient pas par ignorance mais en pleine connaissance. Le mot ba'di est la charniere qui transforme l'audition en trahison. Sans cette posteriorite, l'alteration pourrait etre attribuee a l'incomprehension.",
              axe2_voisins: "Le verset 74 decrivait l'etat permanent (coeurs durs). Ce verset 75 introduit la temporalite avec ba'di — la sequence entendre-comprendre-alterer. Le verset 76 reprendra la structure temporelle avec idha (quand). La posteriorite renforce la gravite — alterer apres avoir compris est pire qu'alterer par ignorance.",
              axe3_sourate: "La racine b-'-d dans la sourate al-Baqarah marque la posteriorite et l'eloignement. En 2:27, « ceux qui rompent le pacte de Dieu apres (min ba'di) l'avoir conclu ». En 2:52, « Nous vous avons pardonnes apres cela ». La posteriorite dans la sourate souligne souvent la rechute apres la grace recue.",
              axe4_coherence: "La racine b-'-d apparait plus de 200 fois dans le Coran sous les sens de posteriorite et d'eloignement. La construction min ba'di est frequente pour marquer la succession temporelle. En 3:152, « apres qu'Il vous eut montre ce que vous aimiez ». La posteriorite etablit la responsabilite — ce qui vient apres la connaissance engage la culpabilite.",
              axe5_frequence: "Pour la mission du khalifa, la posteriorite est le temps de l'action. Le khalifa agit apres avoir recu l'ordre divin. Les enfants d'Israel montrent la perversion de la posteriorite — apres avoir compris, au lieu d'obeir, ils falsifient. Le khalifa doit agir correctement apres avoir compris."
            },
            "Éloignement/Distance": {
              status: "nul",
              senses: ["éloignement", "être loin"],
              proof_ctx: "Le sens d'eloignement est un autre aspect de b-'-d. Ici ba'di est une indication de posteriorite temporelle (apres), pas d'eloignement spatial."
            }
          }
        }
      },
      {
        word_key: "eql", position: 16, sense_chosen: "comprendre",
        analysis_axes: {
          concept_chosen: "Raison/Intelligence",
          sense_chosen: "comprendre",
          concepts: {
            "Raison/Intelligence": {
              status: "retenu",
              senses: ["comprendre", "discernement", "raison", "intelligence"],
              proof_ctx: "Le verbe 'aqualuuhu est un accompli 3MP de la racine '-q-l avec pronom suffixe 3MS. Le Lane's donne « to understand, to comprehend, to use one's reason, to be intelligent ». L'accompli marque que la comprehension etait complete avant l'alteration. Le pronom suffixe (hu) renvoie au kalam de Dieu — ils avaient compris la parole divine.",
              axe1_verset: "Le verbe 'aqualuuhu est le maillon central de la chaine — entre l'audition et l'alteration. Ils ont entendu (yasma'uuna), compris ('aqualuuhu), puis altere (yuharrifuunahu). La comprehension est complete (accompli) — ce n'est pas une demi-comprehension. La comprehension complete suivie de l'alteration est la preuve de la mauvaise foi deliberee.",
              axe2_voisins: "Le verset 74 parlait de coeurs durs mais pas de comprehension. Ce verset 75 montre que le probleme n'est pas l'intelligence mais la volonte — ils ont compris et altere quand meme. Le verset 76 se terminera par « ne raisonnez-vous pas ? » (ta'qiluuna), rappelant que la raison devrait empecher un tel comportement.",
              axe3_sourate: "La racine '-q-l dans la sourate al-Baqarah traite du raisonnement et du discernement. En 2:44, « ne raisonnez-vous pas ? ». En 2:73, « peut-etre raisonnerez-vous ». La sourate utilise la raison comme un argument — si vous comprenez, pourquoi agissez-vous ainsi ? La raison sans droiture est sterile.",
              axe4_coherence: "La racine '-q-l apparait 49 fois dans le Coran, toujours sous forme verbale. Le Coran ne parle pas de « la raison » comme concept abstrait mais de « raisonner » comme acte. L'interpellation « ne raisonnez-vous pas ? » est une question recurrente. Le Coran fait appel a la raison comme faculte active, pas comme possession passive.",
              axe5_frequence: "Pour la mission du khalifa, la raison est l'outil du discernement. Le khalifa comprend et agit selon sa comprehension. Les enfants d'Israel montrent que la comprehension seule ne suffit pas — il faut la droiture pour que la raison mene a la bonne action."
            },
            "Lien/Entrave": {
              status: "nul",
              senses: ["lier", "entraver"],
              proof_ctx: "Le sens de lier est un sens etymologique de '-q-l (attacher le chameau). Ici le verbe 'aqualuuhu est a l'accompli et signifie « ils l'ont compris » — le contexte est intellectuel, pas physique."
            }
          }
        }
      },
      {
        word_key: "elm", position: 18, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          sense_chosen: "savoir",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "enseignement", "connaître", "être informé", "savoir", "certitude", "savant"],
              proof_ctx: "Le verbe ya'lamuuna est un inaccompli 3MP de la racine '-l-m. Le Lane's donne « to know, to be aware of, to have knowledge of ». L'inaccompli designe un savoir continu et permanent — ils savaient en permanence ce qu'ils faisaient. Le hal (wa-hum ya'lamuuna — et eux savaient) est une proposition d'etat qui qualifie le sujet au moment de l'alteration.",
              axe1_verset: "Le verbe ya'lamuuna cloture le verset en ajoutant la derniere aggravation — non seulement ils alteraient la parole de Dieu apres l'avoir comprise, mais ils le faisaient en pleine connaissance. La proposition d'etat (wa-hum ya'lamuuna) est un ajout accablant — le savoir est la circonstance aggravante de la falsification. Ils ne peuvent invoquer ni l'ignorance ni l'erreur.",
              axe2_voisins: "Le verset 74 decrivait l'endurcissement sans mention de savoir. Ce verset 75 montre que le savoir n'a pas empeche la falsification. Le verset 77 reprendra le theme du savoir divin — « ne savent-ils pas que Dieu sait ? ». La progression oppose le savoir humain (qui n'empeche pas le mal) au savoir divin (qui englobe tout).",
              axe3_sourate: "La racine '-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:30, les anges disent « nous ne savons que ce que Tu nous as enseigne ». En 2:32, « nous ne savons que ce que Tu nous as appris ». La sourate construit une hierarchie du savoir — le savoir divin est absolu, le savoir humain est relatif et peut etre perverti.",
              axe4_coherence: "La racine '-l-m apparait plus de 750 fois dans le Coran. Le savoir est un attribut divin (al-'Alim) et un don divin aux hommes. En 96:5, « Il a enseigne a l'homme ce qu'il ne savait pas ». Le Coran valorise le savoir mais montre que le savoir sans droiture est une arme de falsification.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est un outil de la mission. Le khalifa sait et agit selon son savoir. Le savoir mal utilise — pour falsifier au lieu de preserver — est la perversion de la mission. Ce verset montre que le savoir aggrave la responsabilite."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:76
  // verse_id=83, analysis_id=441
  // "Et quand ils rencontraient ceux qui ont cru, ils disaient : Nous croyons.
  //  Mais quand ils se retrouvaient entre eux, ils disaient : Leur racontez-vous
  //  ce que Dieu vous a revele pour qu'ils en tirent argument contre vous
  //  aupres de votre Seigneur ? Ne raisonnez-vous pas ?"
  // =====================================================
  76: {
    verse_id: 83,
    analysis_id: 441,
    translation_arab: "Et quand ils rencontraient ceux qui croyaient, ils disaient : Nous croyons. Et quand certains d'entre eux se retrouvaient seuls avec d'autres, ils disaient : Leur racontez-vous ce que Dieu a ouvert sur vous, pour qu'ils argumentent contre vous aupres de votre Seigneur ? Ne raisonnez-vous pas ?",
    full_translation: "Et quand ils rencontraient ceux qui ont cru, ils disaient : Nous croyons. Mais quand certains se retrouvaient [seuls] avec d'autres, ils disaient : Leur racontez-vous ce que Dieu vous a revele, pour qu'ils en tirent argument contre vous aupres de votre Seigneur ? Ne raisonnez-vous donc pas ?",
    translation_explanation: `§DEMARCHE§
Ce verset decrit le double discours des hypocrites parmi les enfants d'Israel. Le mot **idha** est une particule temporelle. Le verbe **laquu** est un accompli 3MP de la racine l-q-y. Le Lane's donne « to meet, to encounter, to find ». L'accompli marque la rencontre effective. Le mot **alladhiina** est un relatif pluriel. Le verbe **aamanuu** est un accompli 3MP forme IV de la racine a-m-n. Le Lane's donne « they believed, they had faith ». La forme IV designe l'adhesion a la foi. Le verbe **qaaluu** est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said ». Le verbe **aamanna** est un accompli 1P forme IV de la racine a-m-n. Le Lane's donne « we believed, we have faith ». C'est la profession de foi des hypocrites. Le verbe **khalaa** est un accompli 3MS de la racine kh-l-w. Le Lane's donne « to be alone, to be in private, to withdraw ». L'accompli marque le retrait en prive. Le mot **ba'duhum** est un nom avec pronom 3MP de la racine b-'-d. Le Lane's donne « some of them, a part of them ». Le mot **ba'din** est le meme nom sans pronom. Le verbe **qaaluu** (seconde occurrence) est un accompli 3MP de la racine q-w-l. Le verbe **tuhaddithuunahum** est un inaccompli 2MP forme II de la racine h-d-th avec pronom 3MP. Le Lane's donne « to tell, to inform, to narrate, to relate ». La forme II est un intensif — raconter en detail. Le verbe **fataha** est un accompli 3MS de la racine f-t-h. Le Lane's donne « to open, to reveal, to grant victory ». L'ouverture divine designe la revelation — ce que Dieu a « ouvert » sur eux. Le mot **Allahu** est un nom propre nominatif. Le verbe **yuhajjuukum** est un inaccompli 3MP forme III de la racine h-j-j avec pronom 2MP. Le Lane's donne « to argue against, to dispute with, to bring proof against ». La forme III designe l'argumentation reciproque. Le mot **'inda** est une preposition de la racine '-n-d. Le Lane's donne « with, near, in the presence of, before ». Le mot **rabbikum** est un nom avec pronom 2MP de la racine r-b-b. Le Lane's donne « your Lord ». Le verbe **ta'qiluuna** est un inaccompli 2MP de la racine '-q-l. Le Lane's donne « to reason, to understand, to use one's intellect ». La negation a-fa-la (est-ce que donc ne pas) rend la question rhetorique.

§JUSTIFICATION§
**rencontraient** — Le sens retenu est « rencontrer ». Le verbe laquu designe la rencontre face a face avec les croyants. L'alternative « jeter » est ecartee car le contexte est social, pas physique.

**croyaient** — Le sens retenu est « croire ». Le verbe aamanuu forme IV designe les croyants. Meme justification que verset 75.

**dirent** — Le sens retenu est « dire ». Le verbe qaaluu designe la parole prononcee. Meme justification que les versets precedents.

**nous croyons** — Le sens retenu est « croire ». Le verbe aamanna forme IV 1P est la profession de foi hypocrite. L'alternative « etre en securite » est ecartee car la formule aamanna est la profession de foi standard.

**se retrouvaient seuls** — Le sens retenu est « se retirer en prive ». Le verbe khalaa designe l'isolement volontaire. L'alternative « etre vide » est ecartee car le contexte est le retrait social, pas la vacuite.

**certains d'entre eux** — Le sens retenu est « une partie ». Le mot ba'duhum designe une fraction du groupe. Pas d'alternative pertinente dans ce contexte nominal.

**d'autres** — Le sens retenu est « une partie ». Le mot ba'din designe l'autre fraction. Meme mot repete.

**racontez-vous** — Le sens retenu est « raconter ». Le verbe tuhaddithuunahum forme II designe le fait de narrer en detail. L'alternative « evenement nouveau » est ecartee car le verbe forme II est un acte de parole, pas un evenement.

**a ouvert** — Le sens retenu est « ouvrir ». Le verbe fataha designe la revelation divine (ce que Dieu a « ouvert » comme connaissance). L'alternative « conquete » est ecartee car le contexte est la revelation, pas la victoire militaire.

**Dieu** — Le sens retenu est « Dieu ». Meme justification.

**argumentent contre vous** — Le sens retenu est « argumenter ». Le verbe yuhajjuukum forme III designe l'argumentation. L'alternative « pelerinage » est ecartee car le verbe forme III est une dispute, pas un rite.

**aupres de** — Le sens retenu est « aupres de ». Le mot 'inda designe la proximite et la presence. L'alternative « opinion » est ecartee car le mot est ici prepositionnel, pas un nom d'opinion.

**votre Seigneur** — Le sens retenu est « seigneur ». Le mot rabbikum avec pronom 2MP designe Dieu. Meme justification. A noter que les hypocrites disent ici « votre Seigneur » (rabbikum) — ils reconnaissent la seigneurie divine quand ils s'adressent entre eux.

**raisonnez-vous** — Le sens retenu est « raisonner ». Le verbe ta'qiluuna designe l'usage de la raison. Meme racine que 'aqualuuhu au verset 75. L'alternative « lier » est ecartee car le contexte est intellectuel.

§CRITIQUE§
**nous croyons** — La profession de foi aamanna est identique a celle des vrais croyants. Le Coran utilise le meme verbe pour les deux — la difference n'est pas dans la parole mais dans la sincerite. L'hypocrisie est invisible dans les mots.
**se retrouvaient seuls** — Le verbe khalaa implique une retraite deliberee — ils ne se retrouvent pas par hasard mais se retirent volontairement pour se concerter. La solitude est choisie pour parler librement.
**ce que Dieu a ouvert sur vous** — L'expression fataha Allahu 'alaykum designe la revelation comme une « ouverture » divine — Dieu ouvre la connaissance. Les hypocrites reprochent aux leurs de partager cette connaissance avec les croyants car elle pourrait servir d'argument (hujja) contre eux.`,
    segments: [
      { fr: "et quand", phon: "wa-idha", arabic: "وَإِذَا", is_particle: true, position: 0 },
      { fr: "ils rencontraient", pos: "verbe", phon: "laquu", arabic: "لَقُوا۟", word_key: "lqy", is_particle: false, sense_retenu: "rencontrer", position: 1 },
      { fr: "ceux qui", phon: "alladhiina", arabic: "ٱلَّذِينَ", is_particle: true, position: 2 },
      { fr: "croyaient", pos: "verbe", phon: "aamanuu", arabic: "ءَامَنُوا۟", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 3 },
      { fr: "ils disaient", pos: "verbe", phon: "qaaluu", arabic: "قَالُوٓا۟", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 4 },
      { fr: "nous croyons", pos: "verbe", phon: "aamanna", arabic: "ءَامَنَّا", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 5 },
      { fr: "et quand", phon: "wa-idha", arabic: "وَإِذَا", is_particle: true, position: 6 },
      { fr: "se retrouvaient seuls", pos: "verbe", phon: "khalaa", arabic: "خَلَا", word_key: "khlw", is_particle: false, sense_retenu: "se retirer en privé", position: 7 },
      { fr: "certains d'entre eux", pos: "nom", phon: "ba'duhum", arabic: "بَعْضُهُمْ", word_key: "bed", is_particle: false, sense_retenu: "une partie", position: 8 },
      { fr: "vers", phon: "ila", arabic: "إِلَYٰ", is_particle: true, position: 9 },
      { fr: "d'autres", pos: "nom", phon: "ba'din", arabic: "بَعْضٍ", word_key: "bed", is_particle: false, sense_retenu: "une partie", position: 10 },
      { fr: "ils disaient", pos: "verbe", phon: "qaaluu", arabic: "قَالُوٓا۟", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 11 },
      { fr: "leur racontez-vous", pos: "verbe", phon: "tuhaddithuunahum", arabic: "أَتُحَدِّثُونَهُم", word_key: "hdth", is_particle: false, sense_retenu: "raconter", position: 12 },
      { fr: "de ce que", phon: "bima", arabic: "بِمَا", is_particle: true, position: 13 },
      { fr: "a ouvert", pos: "verbe", phon: "fataha", arabic: "فَتَحَ", word_key: "fth", is_particle: false, sense_retenu: "ouvrir", position: 14 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 15 },
      { fr: "sur vous", phon: "'alaykum", arabic: "عَلَيْكُمْ", is_particle: true, position: 16 },
      { fr: "pour qu'ils argumentent contre vous", pos: "verbe", phon: "yuhajjuukum", arabic: "لِيُحَآجُّوكُم", word_key: "hjj", is_particle: false, sense_retenu: "argumenter", position: 17 },
      { fr: "par cela", phon: "bihi", arabic: "بِهِ.", is_particle: true, position: 18 },
      { fr: "aupres de", pos: "nom", phon: "'inda", arabic: "عِندَ", word_key: "end", is_particle: false, sense_retenu: "auprès de", position: 19 },
      { fr: "votre Seigneur", pos: "nom", phon: "rabbikum", arabic: "رَبِّكُمْ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 20 },
      { fr: "ne donc pas", phon: "a-fa-la", arabic: "أَفَلَا", is_particle: true, position: 21 },
      { fr: "raisonnez-vous", pos: "verbe", phon: "ta'qiluuna", arabic: "تَعْقِلُونَ", word_key: "eql", is_particle: false, sense_retenu: "raisonner", position: 22 }
    ],
    words: [
      {
        word_key: "lqy", position: 1, sense_chosen: "rencontrer",
        analysis_axes: {
          concept_chosen: "Rencontre/Face à face",
          sense_chosen: "rencontrer",
          concepts: {
            "Rencontre/Face à face": {
              status: "retenu",
              senses: ["rencontrer", "trouver", "recevoir"],
              proof_ctx: "Le verbe laquu est un accompli 3MP de la racine l-q-y. Le Lane's donne « to meet, to encounter, to come face to face with ». L'accompli avec idha (quand) marque la rencontre comme un evenement qui se repete. La rencontre est ici sociale — les hypocrites croisent les croyants dans la vie quotidienne.",
              axe1_verset: "Le verbe laquu ouvre la premiere scene du verset — la rencontre avec les croyants. C'est le declencheur du double discours. Devant les croyants, ils disent « nous croyons ». La rencontre est le moment de l'hypocrisie — le masque est mis au moment du contact social. Le contraste avec khalaa (se retirer) cree la double scene.",
              axe2_voisins: "Le verset 75 decrivait la falsification de la parole divine. Ce verset 76 montre la falsification des intentions — ils pretendent croire devant les croyants. Le verset 77 rappellera que Dieu sait tout. La progression va de la falsification textuelle a la falsification comportementale.",
              axe3_sourate: "La racine l-q-y dans la sourate al-Baqarah traite de la rencontre et de la confrontation. En 2:14, « quand ils rencontrent (laquu) les croyants, ils disent nous croyons ». Le verset 76 est parallele au verset 14 — le meme schema de double discours. La sourate revient sur le theme de l'hypocrisie face a face.",
              axe4_coherence: "La racine l-q-y apparait plus de 140 fois dans le Coran. La rencontre peut etre terrestre (rencontrer quelqu'un) ou eschatologique (rencontrer Dieu). En 18:77, « ils rencontrerent les habitants du village ». La rencontre est le lieu de la verite ou du mensonge — selon la sincerite de celui qui rencontre.",
              axe5_frequence: "Pour la mission du khalifa, la rencontre est le lieu de l'action sociale. Le khalifa rencontre les gens et agit avec sincerite. L'hypocrite utilise la rencontre pour tromper — il dit ce que son interlocuteur veut entendre. La rencontre sincere est le contraire de l'hypocrisie."
            },
            "Jeter/Lancer": {
              status: "nul",
              senses: ["jeter", "lancer"],
              proof_ctx: "Le sens de jeter est un autre aspect de l-q-y (jeter quelque chose devant soi). Ici le verbe laquu signifie rencontrer — le contexte est social, pas physique."
            }
          }
        }
      },
      {
        word_key: "amn", position: 3, sense_chosen: "croire",
        analysis_axes: {
          concept_chosen: "Foi/Adhésion",
          sense_chosen: "croire",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["accepter comme vrai", "croyant", "confirmer", "croire", "avoir la foi"],
              proof_ctx: "Le verbe aamanuu est un accompli 3MP forme IV de la racine a-m-n. Le Lane's donne « they believed, they had faith ». Ici le participe relatif « ceux qui ont cru » designe les vrais croyants — par opposition aux hypocrites qui pretendent croire. La foi est ici le critere de distinction entre les deux groupes.",
              axe1_verset: "Le verbe aamanuu designe les croyants sinceres que les hypocrites rencontrent. La construction « ceux qui ont cru » (alladhiina aamanuu) est la designation standard des croyants dans le Coran. Le contraste avec aamanna (nous croyons — profession hypocrite) montre la difference entre la foi reelle et la foi de facade. Le meme verbe designe des realites opposees.",
              axe2_voisins: "Le verset 75 posait la question de l'espoir de la foi. Ce verset 76 montre que la foi dont il est question est a la fois reelle (les croyants) et feinte (les hypocrites). Le verset 77 rappellera le savoir divin. La progression montre que la vraie foi est visible pour Dieu meme si l'hypocrisie trompe les hommes.",
              axe3_sourate: "La formule alladhiina aamanuu est l'une des plus frequentes de la sourate al-Baqarah. En 2:104, « o vous qui avez cru ». En 2:153, « o vous qui avez cru, cherchez le secours dans la patience ». La sourate s'adresse constamment aux croyants pour les guider et les mettre en garde contre les hypocrites.",
              axe4_coherence: "La racine a-m-n apparait plus de 800 fois dans le Coran. La formule alladhiina aamanuu est la designation la plus courante des croyants. Le Coran distingue systematiquement les croyants sinceres des hypocrites — les mots sont les memes mais le coeur est different.",
              axe5_frequence: "Pour la mission du khalifa, la foi sincere est le fondement. Le khalifa croit reellement et ne feint pas la foi. L'hypocrite qui dit aamanna sans y croire trahit la mission de khalifa — la foi de facade est une imposture."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "être en sécurité", "confier", "fidèle", "lieu sûr", "se sentir en sécurité"],
              proof_ctx: "Le sens de securite est l'arriere-plan etymologique de a-m-n. Les croyants (alladhiina aamanuu) sont ceux qui se sont mis en securite par leur foi. La securite interieure accompagne la foi sincere."
            }
          }
        }
      },
      {
        word_key: "qwl", position: 4, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          sense_chosen: "dire",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qaaluu est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said, they spoke ». Le verbe apparait deux fois dans le verset — une fois devant les croyants (ils dirent : nous croyons) et une fois en prive (ils dirent : leur racontez-vous ?). Le meme verbe de parole porte deux contenus opposes selon le public.",
              axe1_verset: "Le verbe qaaluu structure le verset en deux scenes paralleles. Premiere scene : idha laquu... qaaluu aamanna (quand ils rencontraient... ils disaient : nous croyons). Seconde scene : idha khalaa... qaaluu a-tuhaddithuunahum (quand ils se retiraient... ils disaient : leur racontez-vous ?). Le meme verbe de parole revele l'hypocrisie par le contraste entre les deux discours.",
              axe2_voisins: "Le verset 75 utilisait qaaluu pour les enfants d'Israel dans le passe. Ce verset 76 montre le double usage de qaaluu — parole publique et parole privee. Le verset 77 clot la section par le rappel du savoir divin. La parole est l'instrument de l'hypocrisie — le meme verbe sert la verite et le mensonge.",
              axe3_sourate: "La racine q-w-l structure toute la sourate al-Baqarah. En 2:8, « ceux qui disent nous croyons en Dieu » — meme schema d'hypocrisie. En 2:14, « quand ils rencontrent les croyants, ils disent : nous croyons » — verset presque identique au verset 76. La sourate repete le schema pour souligner l'universalite de l'hypocrisie.",
              axe4_coherence: "La racine q-w-l est la plus frequente du Coran avec plus de 1700 occurrences. Le verbe qala est le vecteur universel de la parole — il porte aussi bien la verite que le mensonge. Le Coran montre que la parole n'est pas un garant de sincerite — ce qui compte est la correspondance entre la parole et le coeur.",
              axe5_frequence: "Pour la mission du khalifa, la parole doit etre coherente — le meme discours en public et en prive. Le khalifa qui dit une chose en public et son contraire en prive est un hypocrite. Le verset 76 est l'illustration parfaite du double discours que le khalifa doit eviter."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le contexte est la parole prononcee (ils dirent), pas une pensee interieure. Le verbe qaaluu designe l'acte de parler, pas de penser."
            }
          }
        }
      },
      {
        word_key: "khlw", position: 7, sense_chosen: "se retirer en privé",
        analysis_axes: {
          concept_chosen: "Solitude/Retraite",
          sense_chosen: "se retirer en privé",
          concepts: {
            "Solitude/Retraite": {
              status: "retenu",
              senses: ["solitude", "retraite", "se consacrer au culte en solitude"],
              proof_ctx: "Le verbe khalaa est un accompli 3MS de la racine kh-l-w. Le Lane's donne « to be alone, to be in privacy, to withdraw, to retire ». Le verbe designe le retrait volontaire du groupe public pour se retrouver entre pairs. La construction khalaa ba'duhum ila ba'din (certains se retirerent vers d'autres) montre un retrait delibere en petit comite.",
              axe1_verset: "Le verbe khalaa est le pivot du verset — il separe la scene publique de la scene privee. Apres la rencontre (laquu) avec les croyants et la profession de foi (aamanna), le retrait (khalaa) revele le vrai visage. L'intimite est le lieu de la verite pour les hypocrites — ils ne mentent pas entre eux. Le contraste public/prive est le mecanisme de l'hypocrisie.",
              axe2_voisins: "Le verset 75 decrivait la falsification du texte. Ce verset 76 montre la falsification du comportement — afficher une foi publique et la contredire en prive. Le verset 77 rappellera que rien n'echappe a Dieu. Le retrait en prive est illusoire — Dieu voit ce qui est cache.",
              axe3_sourate: "La racine kh-l-w dans la sourate al-Baqarah traite de la solitude et du passe. En 2:14, « quand ils sont seuls (khalaw) avec leurs demons, ils disent nous sommes avec vous ». La sourate utilise khalaa pour decrire systematiquement le moment ou les hypocrites retirent leur masque.",
              axe4_coherence: "La racine kh-l-w apparait 27 fois dans le Coran. Le verbe khalaa peut signifier etre seul, se retirer, ou etre passe (les peuples qui ont passe). En 2:134, « voila une communaute qui a passe (khalat) ». Le sens de retrait et de passage sont lies — ce qui passe s'eloigne, ce qui se retire se cache.",
              axe5_frequence: "Pour la mission du khalifa, la coherence entre le public et le prive est essentielle. Le khalifa est le meme en public et en prive. L'hypocrite se retire pour etre different — le khalifa n'a pas besoin de se cacher car sa parole est la meme partout."
            },
            "Vide/Vacuité": {
              status: "nul",
              senses: ["être vide", "vacant", "dépourvu", "laisser vide"],
              proof_ctx: "Le sens de vide est l'idee de base de kh-l-w — etre vide de presence. Ici khalaa signifie se retirer, etre seul — le lieu est vide des autres, mais le sujet est present. Le contexte est le retrait social, pas la vacuite."
            },
            "Abandon/Séparation": {
              status: "nul",
              senses: ["quitter", "abandonner", "être distant", "laisser"],
              proof_ctx: "Le sens d'abandon est un aspect de kh-l-w. Ici khalaa ne signifie pas abandonner mais se retirer en prive avec des pairs. Ce n'est pas un abandon mais un retrait strategique."
            }
          }
        }
      },
      {
        word_key: "bed", position: 8, sense_chosen: "une partie",
        analysis_axes: {
          concept_chosen: "Partie/Division",
          sense_chosen: "une partie",
          concepts: {
            "Partie/Division": {
              status: "retenu",
              senses: ["une partie", "certains", "diviser en parties"],
              proof_ctx: "Le mot ba'duhum est un nom masculin singulier nominatif de la racine b-'-d avec pronom 3MP. Le Lane's donne « some, a part, a portion of ». Le mot designe une fraction du groupe — certains d'entre eux. La construction ba'duhum ila ba'din (les uns vers les autres) est une expression idiomatique qui designe l'entre-soi.",
              axe1_verset: "Le mot ba'duhum est le sujet de khalaa — certains d'entre eux se retiraient vers d'autres. La repetition de ba'd (certains... d'autres) montre le fractionnement interne du groupe. Ils ne forment pas un bloc uni mais des sous-groupes qui se concertent. Le fractionnement est le signe de la conspiration — ils se parlent entre initiees.",
              axe2_voisins: "Le verset 75 utilisait fariiq (un groupe) pour designer les falsificateurs. Ce verset 76 utilise ba'duhum ila ba'din pour montrer que ces falsificateurs se concertent entre eux. La progression du groupe (fariiq) a la concertation privee (ba'd ila ba'd) montre l'organisation de l'hypocrisie.",
              axe3_sourate: "La racine b-'-d dans la sourate al-Baqarah traite de la partie et du fractionnement. En 2:85, « vous croyez en une partie (ba'd) du Livre et rejetez le reste ». En 2:253, « certains (ba'd) d'entre eux [les prophetes], Dieu les a eleves ». La sourate montre que la partition est un fait — tout n'est pas homogene.",
              axe4_coherence: "La racine b-'-d est tres frequente dans le Coran. La construction ba'duhum ila ba'din (les uns aux autres) est une expression idiomatique coranique. En 6:112, « les uns inspirant aux autres ». Le Coran montre que les groupes se fragmentent et que les fragments interagissent entre eux.",
              axe5_frequence: "Pour la mission du khalifa, la partie ne doit pas se substituer au tout. Le khalifa considere l'ensemble, pas seulement sa faction. Les hypocrites se replient sur leur sous-groupe — le khalifa doit maintenir l'unite et la transparence."
            }
          }
        }
      },
      {
        word_key: "hdth", position: 12, sense_chosen: "raconter",
        analysis_axes: {
          concept_chosen: "Narration/Récit",
          sense_chosen: "raconter",
          concepts: {
            "Narration/Récit": {
              status: "retenu",
              senses: ["parler", "raconter"],
              proof_ctx: "Le verbe tuhaddithuunahum est un inaccompli 2MP forme II de la racine h-d-th avec pronom suffixe 3MP. Le Lane's donne « to tell, to inform, to narrate, to relate ». La forme II (taf'il) est un intensif — raconter en detail, informer completement. Le pronom (hum) designe les croyants — « leur racontez-vous ? ». La question est un reproche adresse par les hypocrites a ceux qui partagent la revelation.",
              axe1_verset: "Le verbe tuhaddithuunahum est le coeur du reproche interne. Les hypocrites reprochent aux leurs de raconter aux croyants ce que Dieu leur a revele. Le reproche est strategique — si les croyants connaissent la revelation, ils pourront l'utiliser comme argument. La narration est ici un danger pour les hypocrites, pas un acte de piete.",
              axe2_voisins: "Le verset 75 parlait de l'alteration de la parole divine. Ce verset 76 montre l'autre face du probleme — certains partagent la parole divine avec les croyants et sont reproches par leurs pairs. Le verset 77 rappellera que le secret est vain devant Dieu. La narration est au centre du conflit interne des enfants d'Israel.",
              axe3_sourate: "La racine h-d-th dans la sourate al-Baqarah apparait ici dans le contexte du partage de l'information religieuse. La narration est un acte de transmission — transmettre la revelation est ce que font les prophetes. Les hypocrites veulent empecher cette transmission pour proteger leurs interets.",
              axe4_coherence: "La racine h-d-th apparait 36 fois dans le Coran. En 93:11, « quant au bienfait de ton Seigneur, proclame-le (haddith) ». En 99:4, « ce jour-la, elle [la terre] racontera (tuhaddith) ses nouvelles ». Le Coran valorise la narration veridique — les hypocrites la craignent car elle les expose.",
              axe5_frequence: "Pour la mission du khalifa, la narration est un devoir de transmission. Le khalifa raconte et transmet la verite. L'hypocrite veut empecher la narration car elle revele sa duplicite. Le khalifa ne cache pas la verite — il la proclame."
            },
            "Nouveauté": {
              status: "nul",
              senses: ["événement nouveau", "nouveau"],
              proof_ctx: "Le sens de nouveaute est un aspect de h-d-th. Ici le verbe forme II tuhaddithuuna signifie raconter, informer — l'acte de narration, pas la nouveaute de l'evenement."
            }
          }
        }
      },
      {
        word_key: "fth", position: 14, sense_chosen: "ouvrir",
        analysis_axes: {
          concept_chosen: "Ouverture/Victoire",
          sense_chosen: "ouvrir",
          concepts: {
            "Ouverture/Victoire": {
              status: "retenu",
              senses: ["conquête", "victoire", "clé", "ouvrir"],
              proof_ctx: "Le verbe fataha est un accompli 3MS de la racine f-t-h. Le Lane's donne « to open, to reveal, to grant victory, to make accessible ». L'accompli marque l'acte de revelation comme un fait accompli. L'expression fataha Allahu 'alaykum (Dieu a ouvert sur vous) designe la revelation divine — ce que Dieu a rendu accessible comme connaissance sacree.",
              axe1_verset: "Le verbe fataha est utilise dans l'expression « ce que Dieu a ouvert sur vous » — c'est-a-dire ce que Dieu vous a revele. L'ouverture divine est la revelation — Dieu ouvre le savoir sacre aux enfants d'Israel. Le reproche des hypocrites porte sur le partage de cette revelation avec les croyants. L'ouverture divine est detournee — au lieu de la partager, les hypocrites veulent la garder secrete.",
              axe2_voisins: "Le verset 75 parlait de la parole de Dieu (kalaama Allahi). Ce verset 76 parle de ce que Dieu a ouvert (fataha Allahu) — deux expressions pour designer la revelation. Le verset 77 rappellera que Dieu sait ce qu'ils cachent. La revelation ouverte par Dieu est cachee par les hypocrites — paradoxe central.",
              axe3_sourate: "La racine f-t-h dans la sourate al-Baqarah traite de l'ouverture et de la victoire. En 2:89, « quand leur vint ce qu'ils connaissaient ». La revelation est une ouverture — Dieu ouvre la connaissance a ses serviteurs. La sourate montre que cette ouverture peut etre accueillie (les croyants) ou cachee (les hypocrites).",
              axe4_coherence: "La racine f-t-h apparait 38 fois dans le Coran. En 48:1, « Nous t'avons accorde une victoire eclatante (fathan) ». En 39:63, « Il detient les cles (maqalid) des cieux et de la terre ». L'ouverture divine est a la fois revelation et victoire — Dieu ouvre les portes du savoir et de la reussite.",
              axe5_frequence: "Pour la mission du khalifa, l'ouverture divine est la source de la connaissance. Le khalifa recoit ce que Dieu a ouvert et le transmet. L'hypocrite recoit et cache — il trahit l'ouverture divine en la fermant aux autres."
            }
          }
        }
      },
      {
        word_key: "alh", position: 15, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          sense_chosen: "Dieu",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allahu est un nom propre nominatif de la racine a-l-h. Le Lane's donne « God, the one true deity ». Ici Allahu est le sujet de fataha — c'est Dieu qui a ouvert (revele). Le nom propre en position de sujet souligne l'autorite divine de la revelation.",
              axe1_verset: "Le mot Allahu est le sujet de l'ouverture — « ce que Dieu a ouvert ». Dieu est la source de la revelation que les hypocrites veulent cacher. L'ironie est que les hypocrites reconnaissent en prive que la revelation vient de Dieu (fataha Allahu) tout en cherchant a la dissimuler. Ils admettent l'autorite divine tout en la contournant.",
              axe2_voisins: "Le verset 75 associait Dieu a Sa parole (kalaama Allahi). Ce verset 76 L'associe a Son acte d'ouverture (fataha Allahu). Le verset 77 L'associera a Son savoir (ya'lamu). La progression montre Dieu comme auteur de la parole, source de la revelation, et detenteur du savoir total.",
              axe3_sourate: "Le nom Allah est omnipresent dans la sourate al-Baqarah. Chaque passage rappelle la centralite de Dieu dans tous les domaines — la creation, la loi, la revelation, le jugement. La sourate est une demonstration de la souverainete divine dans tous les aspects de la vie.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. C'est le mot le plus frequent et le plus central du texte coranique. Le nom reunit tous les attributs divins et designe l'Etre unique qui est la source de toute chose.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant supreme. Tout ce que le khalifa fait est au nom de Dieu et pour Dieu. Cacher ce que Dieu a revele est une trahison du mandat divin."
            }
          }
        }
      },
      {
        word_key: "hjj", position: 17, sense_chosen: "argumenter",
        analysis_axes: {
          concept_chosen: "Pèlerinage/Preuve",
          sense_chosen: "argumenter",
          concepts: {
            "Pèlerinage/Preuve": {
              status: "retenu",
              senses: ["pèlerinage", "argument", "preuve", "disputer"],
              proof_ctx: "Le verbe yuhajjuukum est un inaccompli 3MP forme III de la racine h-j-j avec pronom suffixe 2MP. Le Lane's donne « to argue with, to dispute with, to bring proof or argument against ». La forme III (mufa'ala) designe l'action reciproque — argumenter face a face. Le pronom (kum) designe les hypocrites — « pour qu'ils argumentent contre vous ». La hujja est l'argument decisif, la preuve irrefutable.",
              axe1_verset: "Le verbe yuhajjuukum est le motif du reproche — les hypocrites craignent que les croyants utilisent la revelation comme argument contre eux aupres de leur Seigneur. La crainte de l'argumentation revele que les hypocrites savent que la verite est contre eux. Le li (pour que) indique la finalite — le partage de la revelation donnerait aux croyants une arme argumentative.",
              axe2_voisins: "Le verset 75 montrait la falsification. Ce verset 76 montre la crainte de l'argumentation — si la verite est partagee, elle servira de preuve contre les falsificateurs. Le verset 77 rappellera que Dieu sait deja tout — l'argument est inutile car Dieu n'a pas besoin de temoins humains.",
              axe3_sourate: "La racine h-j-j dans la sourate al-Baqarah traite de l'argumentation et du pelerinage. En 2:76, la hujja est l'argument. En 2:196-197, le hajj est le pelerinage. Les deux sens sont lies — le pelerinage est la « destination » vers laquelle on se dirige, l'argument est la « preuve » vers laquelle on se dirige intellectuellement.",
              axe4_coherence: "La racine h-j-j apparait 33 fois dans le Coran. En 3:61, le mubaahala est une forme d'argumentation ultime. En 6:80, Ibrahim argumente avec son peuple. Le Coran valorise l'argumentation fondee sur la preuve — la hujja est l'argument qui tranche le debat. Les hypocrites craignent cette preuve car elle les confond.",
              axe5_frequence: "Pour la mission du khalifa, l'argument est l'outil de la verite. Le khalifa argumente avec la preuve divine. Les hypocrites craignent l'argument parce qu'il revele leur mensonge. Le khalifa n'a pas peur de la verite — il la porte comme argument."
            }
          }
        }
      },
      {
        word_key: "end", position: 19, sense_chosen: "auprès de",
        analysis_axes: {
          concept_chosen: "Proximité/Présence",
          sense_chosen: "auprès de",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["auprès de", "chez", "près de"],
              proof_ctx: "Le mot 'inda est une preposition de la racine '-n-d. Le Lane's donne « with, near, in the presence of, before ». Le mot designe la proximite — etre aupres de quelqu'un. La construction 'inda rabbikum (aupres de votre Seigneur) designe la presence divine comme lieu du jugement.",
              axe1_verset: "Le mot 'inda localise l'argumentation — les croyants pourraient argumenter « aupres de votre Seigneur ». La presence divine est le tribunal ou les preuves sont presentees. Les hypocrites craignent que la revelation partagee serve de piece a conviction devant Dieu. Le lieu du jugement est « aupres du Seigneur » — la proximite divine est le lieu de la verite.",
              axe2_voisins: "Le verset 75 ne mentionnait pas de lieu de jugement. Ce verset 76 introduit le tribunal divin ('inda rabbikum). Le verset 77 rappellera que Dieu sait tout sans avoir besoin de temoins. La progression montre que le tribunal divin n'a pas besoin de preuves humaines — Dieu sait deja.",
              axe3_sourate: "La racine '-n-d dans la sourate al-Baqarah traite de la proximite divine. En 2:110, « vous le trouverez aupres de Dieu ('inda Allahi) ». En 2:186, « quand Mes serviteurs t'interrogent sur Moi, Je suis proche ». La sourate montre que la proximite divine est a la fois consolation pour les croyants et menace pour les hypocrites.",
              axe4_coherence: "La racine '-n-d apparait plus de 200 fois dans le Coran. Le mot 'inda designe la proximite — etre aupres de Dieu est le but ultime du croyant et le lieu du jugement. En 3:169, les martyrs sont « vivants aupres de leur Seigneur ». La proximite divine est recompense et jugement.",
              axe5_frequence: "Pour la mission du khalifa, la proximite divine est la source de l'autorite. Le khalifa agit en sachant qu'il est aupres de Dieu — sous Son regard. L'hypocrite oublie cette proximite quand il se retire en prive — il croit echapper au regard divin."
            },
            "Opinion/Jugement": {
              status: "nul",
              senses: ["selon"],
              proof_ctx: "Le sens d'opinion est un autre usage de '-n-d. Ici 'inda est prepositionnel (aupres de votre Seigneur), pas un mot d'opinion."
            }
          }
        }
      },
      {
        word_key: "rbb", position: 20, sense_chosen: "seigneur",
        analysis_axes: {
          concept_chosen: "Seigneurie/Autorité bienveillante",
          sense_chosen: "seigneur",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["propriétaire", "seigneur", "celui qui possède", "maître", "gouverner", "celui qui élève", "celui qui entretient"],
              proof_ctx: "Le mot rabbikum est un nom masculin singulier genitif avec pronom 2MP de la racine r-b-b. Le Lane's donne « your Lord, your Master, He who rears and sustains you ». Le pronom 2MP (votre) est significatif — les hypocrites disent « votre Seigneur » en s'adressant a leurs pairs, reconnaissant la seigneurie divine dans l'intimite.",
              axe1_verset: "Le mot rabbikum est le lieu du jugement — « aupres de votre Seigneur ». Les hypocrites craignent que les croyants utilisent la revelation comme preuve devant Dieu. L'utilisation de « votre Seigneur » (rabbikum) montre que meme en prive, ils reconnaissent la seigneurie divine. Leur probleme n'est pas la croyance mais l'obeissance — ils savent que Dieu est leur Seigneur mais n'agissent pas en consequence.",
              axe2_voisins: "Le verset 75 ne mentionnait pas le Seigneur. Ce verset 76 montre les hypocrites reconnaissant le Seigneur en prive. Le verset 77 rappellera que Dieu sait tout. La seigneurie est reconnue en parole mais trahie en actes — le schema constant de l'hypocrisie.",
              axe3_sourate: "La racine r-b-b traverse toute la sourate al-Baqarah. Dans les versets 68-70, les enfants d'Israel disaient « ton Seigneur » (rabbaka) a Moise, mettant une distance. Ici les hypocrites disent « votre Seigneur » (rabbikum) entre eux — ils reconnaissent le lien mais le detournent. La sourate montre les differentes facons de mal reconnaitre la seigneurie.",
              axe4_coherence: "La racine r-b-b apparait plus de 960 fois dans le Coran. Le mot rabb est l'un des noms divins les plus importants. Le Seigneur est celui qui possede, eleve, nourrit et gouverne. Reconnaitre le Seigneur implique l'obeissance — les hypocrites reconnaissent sans obeir.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est le mandant. Le khalifa reconnait son Seigneur et agit selon Ses ordres. Les hypocrites reconnaissent le Seigneur en parole mais Le trahissent en actes. La reconnaissance sans obeissance est une seigneurie vide."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["colline", "éminence", "développer", "augmenter", "croître", "excès", "faire grandir", "nourrir"],
              proof_ctx: "Le sens de croissance est la racine etymologique de r-b-b. Le Seigneur est celui qui fait grandir et nourrir. Le mot rabbikum porte en arriere-plan l'idee de celui qui eleve ses serviteurs — la seigneurie inclut la croissance."
            }
          }
        }
      },
      {
        word_key: "eql", position: 22, sense_chosen: "raisonner",
        analysis_axes: {
          concept_chosen: "Raison/Intelligence",
          sense_chosen: "raisonner",
          concepts: {
            "Raison/Intelligence": {
              status: "retenu",
              senses: ["comprendre", "discernement", "raison", "intelligence"],
              proof_ctx: "Le verbe ta'qiluuna est un inaccompli 2MP de la racine '-q-l. Le Lane's donne « to understand, to reason, to use one's intellect ». La negation a-fa-la (est-ce que donc ne pas) rend la question rhetorique — « ne raisonnez-vous donc pas ? ». La raison devrait empecher le comportement hypocrite.",
              axe1_verset: "Le verbe ta'qiluuna cloture le verset par un appel a la raison. La question rhetorique a-fa-la ta'qiluuna (ne raisonnez-vous donc pas ?) est un reproche interne — les hypocrites se reprochent mutuellement de manquer de raison en partageant la revelation. Paradoxalement, c'est la « raison » des hypocrites qui est invoquee — la raison strategique, pas la raison morale.",
              axe2_voisins: "Le verset 75 utilisait 'aqualuuhu (ils avaient compris) pour montrer la comprehension avant la falsification. Ce verset 76 utilise ta'qiluuna (raisonnez-vous ?) pour montrer le reproche strategique. Le verset 77 repondra implicitement — la raison devrait mener a savoir que Dieu sait tout.",
              axe3_sourate: "La racine '-q-l dans la sourate al-Baqarah est un appel recurrent a la raison. En 2:44, « ne raisonnez-vous pas ? ». En 2:73, « peut-etre raisonnerez-vous ». La sourate fait de la raison le chemin vers Dieu — mais ici la raison est detournee en strategie d'auto-protection.",
              axe4_coherence: "La racine '-q-l apparait 49 fois dans le Coran, toujours sous forme verbale. Le Coran ne parle pas de « la raison » mais de « raisonner » — c'est un acte, pas une possession. L'interpellation « ne raisonnez-vous pas ? » est une constante coranique qui fait appel a la responsabilite intellectuelle.",
              axe5_frequence: "Pour la mission du khalifa, la raison est au service de la verite. Le khalifa raisonne pour agir justement. Les hypocrites utilisent la raison pour proteger leurs interets — une raison pervertie au service de la dissimulation au lieu de la verite."
            },
            "Lien/Entrave": {
              status: "nul",
              senses: ["lier", "entraver"],
              proof_ctx: "Le sens de lier est un sens etymologique de '-q-l. Ici ta'qiluuna est un verbe de raisonnement, pas de lien physique."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:77
  // verse_id=84, analysis_id=443
  // "Ne savent-ils pas que Dieu sait ce qu'ils cachent
  //  et ce qu'ils rendent public ?"
  // =====================================================
  77: {
    verse_id: 84,
    analysis_id: 443,
    translation_arab: "Ne savent-ils pas que Dieu sait ce qu'ils cachent et ce qu'ils rendent public ?",
    full_translation: "Ne savent-ils pas que Dieu sait ce qu'ils cachent et ce qu'ils rendent public ?",
    translation_explanation: `§DEMARCHE§
Ce verset est une conclusion qui rappelle l'omniscience divine apres la description de l'hypocrisie. Le verbe **ya'lamuuna** est un inaccompli 3MP de la racine '-l-m. Le Lane's donne « to know, to be aware ». L'interrogation negative a-wa-la ya'lamuuna (ne savent-ils donc pas ?) est un reproche qui pointe l'absurdite de leur comportement. Le mot **anna** est une particule completive (que). Le mot **Allaha** est un nom propre accusatif de la racine a-l-h. Le Lane's donne « God ». L'accusatif marque le sujet de la completive. Le verbe **ya'lamu** est un inaccompli 3MS de la racine '-l-m. Le Lane's donne « He knows ». L'inaccompli designe un savoir permanent et continu — Dieu sait en permanence. Le mot **ma** est un relatif (ce que). Le verbe **yusirruuna** est un inaccompli 3MP forme IV de la racine s-r-r. Le Lane's donne « to conceal, to hide, to keep secret ». La forme IV (if'al) est un causatif — rendre secret, cacher activement. Le verbe **yu'linuuna** est un inaccompli 3MP forme IV de la racine '-l-n. Le Lane's donne « to declare publicly, to make manifest, to announce ». La forme IV est un causatif — rendre public, manifester.

§JUSTIFICATION§
**savent-ils** — Le sens retenu est « savoir ». Le verbe ya'lamuuna designe la connaissance des hypocrites. La question rhetorique pointe leur savoir defaillant. L'alternative « monde » est ecartee car le verbe a l'inaccompli designe le savoir.

**Dieu** — Le sens retenu est « Dieu ». Meme justification que les versets precedents.

**sait** — Le sens retenu est « savoir ». Le verbe ya'lamu designe le savoir divin — omniscient et permanent. L'inaccompli sans contexte passe designe un attribut permanent de Dieu.

**cachent** — Le sens retenu est « cacher ». Le verbe yusirruuna forme IV designe l'acte de dissimuler. L'alternative « rejouir » est ecartee car le contexte est la dissimulation des hypocrites, pas la joie. La racine s-r-r porte les deux sens mais le verbe forme IV avec le sens de « cacher » est different de la forme I (se rejouir).

**rendent public** — Le sens retenu est « rendre public ». Le verbe yu'linuuna forme IV designe la manifestation publique. Le Lane's confirme « to manifest, to make public ». Pas d'alternative pertinente.

§CRITIQUE§
**ya'lamuuna vs ya'lamu** — Le verset utilise deux fois la racine '-l-m avec deux sujets differents : ya'lamuuna (3MP — les hypocrites ne savent-ils pas ?) et ya'lamu (3MS — Dieu sait). L'opposition entre le savoir defaillant des humains et le savoir absolu de Dieu est le coeur du verset.
**cachent vs rendent public** — L'opposition yusirruuna/yu'linuuna couvre la totalite de l'action humaine — ce qui est cache et ce qui est manifeste. Rien n'echappe au savoir divin. Le double discours des hypocrites (public et prive) est engloble par le savoir divin.`,
    segments: [
      { fr: "ne donc pas", phon: "a-wa-la", arabic: "أَوَلَا", is_particle: true, position: 0 },
      { fr: "savent-ils", pos: "verbe", phon: "ya'lamuuna", arabic: "يَعْلَمُونَ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 1 },
      { fr: "que", phon: "anna", arabic: "أَنَّ", is_particle: true, position: 2 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 3 },
      { fr: "sait", pos: "verbe", phon: "ya'lamu", arabic: "يَعْلَمُ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 4 },
      { fr: "ce que", phon: "ma", arabic: "مَا", is_particle: true, position: 5 },
      { fr: "ils cachent", pos: "verbe", phon: "yusirruuna", arabic: "يُسِرُّونَ", word_key: "srr", is_particle: false, sense_retenu: "cacher", position: 6 },
      { fr: "et ce que", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 7 },
      { fr: "ils rendent public", pos: "verbe", phon: "yu'linuuna", arabic: "يُعْلِنُونَ", word_key: "eln", is_particle: false, sense_retenu: "rendre public", position: 8 }
    ],
    words: [
      {
        word_key: "elm", position: 1, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          sense_chosen: "savoir",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "enseignement", "connaître", "être informé", "savoir", "certitude", "savant"],
              proof_ctx: "Le verbe ya'lamuuna est un inaccompli 3MP de la racine '-l-m. Le Lane's donne « to know, to be aware of, to have knowledge of ». La question rhetorique a-wa-la ya'lamuuna (ne savent-ils donc pas ?) interpelle les hypocrites sur leur propre savoir. Le ya'lamu divin (3MS) oppose le savoir absolu de Dieu au savoir deficient des humains.",
              axe1_verset: "Le verbe ya'lamuuna ouvre le verset par une question rhetorique — « ne savent-ils pas ? ». La question suppose que les hypocrites devraient savoir que Dieu sait tout. Leur comportement de dissimulation est absurde car Dieu connait aussi bien le cache que le manifeste. Le verset oppose le savoir defaillant des hypocrites (ya'lamuuna avec negation) au savoir absolu de Dieu (ya'lamu sans restriction).",
              axe2_voisins: "Le verset 75 se terminait par « et ils savaient » (ya'lamuuna) — ils falsifiaient en connaissance de cause. Le verset 76 montrait le double discours. Ce verset 77 cloture par le rappel que Dieu sait — le savoir divin englobe tout ce que les hypocrites tentent de cacher. La progression boucle sur le savoir : savoir humain perverti (v75), hypocrisie (v76), savoir divin total (v77).",
              axe3_sourate: "La racine '-l-m dans la sourate al-Baqarah construit une hierarchie du savoir. En 2:30, « Je sais ce que vous ne savez pas ». En 2:33, « ne vous ai-Je pas dit que Je sais l'invisible des cieux et de la terre ». La sourate affirme la superiorite absolue du savoir divin. Ce verset 77 rappelle cette hierarchie aux hypocrites.",
              axe4_coherence: "La racine '-l-m apparait plus de 750 fois dans le Coran. Le savoir divin est un theme central — al-'Alim (le Savant) est l'un des noms divins les plus frequents. En 2:255, « Il sait ce qui est devant eux et ce qui est derriere eux ». Le savoir divin est total et permanent — il englobe le cache et le manifeste.",
              axe5_frequence: "Pour la mission du khalifa, le savoir divin est le fondement de la responsabilite. Le khalifa sait que Dieu sait — cette conscience empeche la dissimulation. Le khalifa agit sous le regard divin, sachant que rien n'est cache. L'hypocrite oublie cette realite — il croit pouvoir cacher ses intentions."
            }
          }
        }
      },
      {
        word_key: "alh", position: 3, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          sense_chosen: "Dieu",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allaha est un nom propre accusatif de la racine a-l-h. Le Lane's donne « God, the one true deity ». L'accusatif marque le sujet de la completive (anna Allaha ya'lamu — que Dieu sait). Dieu est ici presente comme le Savant absolu qui connait le cache et le manifeste.",
              axe1_verset: "Le mot Allaha est le sujet du savoir absolu — « Dieu sait ». Le verset oppose le savoir defaillant des hypocrites (ne savent-ils pas ?) au savoir complet de Dieu (Dieu sait ce qu'ils cachent et ce qu'ils montrent). Dieu est le temoin omniscient que les hypocrites tentent en vain d'eviter. Le verset rappelle que la dissimulation est futile devant Dieu.",
              axe2_voisins: "Le verset 75 mentionnait la parole de Dieu alteree. Le verset 76 mentionnait ce que Dieu a revele. Ce verset 77 complete le triangle — Dieu est auteur de la parole, source de la revelation, et detenteur du savoir total. La progression revele les trois attributs divins pertinents : Parole, Revelation, Science.",
              axe3_sourate: "Le nom Allah dans la sourate al-Baqarah est le fil conducteur de toute la narration. La sourate est une demonstration de la souverainete divine dans tous les domaines. En 2:255, l'Ayat al-Kursi condense les attributs divins. Ce verset 77 rappelle specifiquement l'attribut de science.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. L'association de Dieu avec le savoir (ya'lamu) est l'une des plus frequentes. En 4:108, « ils se cachent des gens mais ne se cachent pas de Dieu ». Le Coran repete que la dissimulation devant Dieu est impossible.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le Savant devant qui rien n'est cache. Le khalifa agit en transparence car il sait que Dieu voit tout. L'hypocrite qui cache ses intentions oublie que Dieu est le Savant absolu."
            }
          }
        }
      },
      {
        word_key: "srr", position: 6, sense_chosen: "cacher",
        analysis_axes: {
          concept_chosen: "Joie/Plaisir",
          sense_chosen: "cacher",
          concepts: {
            "Joie/Plaisir": {
              status: "retenu",
              senses: ["réjouir", "plaire"],
              proof_ctx: "Le verbe yusirruuna est un inaccompli 3MP forme IV de la racine s-r-r. Le Lane's donne pour la forme IV (asarra) « to conceal, to hide, to keep secret ». La racine s-r-r porte les sens de secret et de joie — ce qui est au fond du coeur (le secret) et ce qui remplit le coeur (la joie). La forme IV asarra est specifiquement « cacher, dissimuler ». Le concept retenu « Joie/Plaisir » couvre l'ensemble de la racine, dont le secret est un aspect — le sirr (secret) est ce qui rejouirait ou deplairait s'il etait revele.",
              axe1_verset: "Le verbe yusirruuna designe ce que les hypocrites cachent — leurs vraies intentions, leur double discours, leur mecontentement interieur. L'opposition avec yu'linuuna (ce qu'ils rendent public) couvre la totalite de leur comportement. Le verset affirme que Dieu sait les deux — la dissimulation est vaine. Le cache et le manifeste sont egalement connus de Dieu.",
              axe2_voisins: "Le verset 75 parlait de la falsification deliberee. Le verset 76 montrait le double discours. Ce verset 77 englobe tout par l'opposition cache/manifeste. Les versets 75-76 sont le detail — le verset 77 est la conclusion generalisante. Tout ce qu'ils cachent et tout ce qu'ils montrent est su de Dieu.",
              axe3_sourate: "La racine s-r-r dans la sourate al-Baqarah traite du secret et de la joie. En 2:69, la vache « rejouit (tasurru) ceux qui la regardent ». En 2:77, le verbe yusirruuna designe la dissimulation. La sourate montre les deux faces de la racine — la joie ouverte et le secret cache.",
              axe4_coherence: "La racine s-r-r apparait 32 fois dans le Coran. Le mot sirr (secret) et le verbe asarra (cacher) sont frequents dans le contexte de l'hypocrisie. En 5:52, « ils se precipitent vers eux ». En 21:3, « et ils chuchotent en secret ». Le Coran oppose systematiquement le secret humain au savoir divin.",
              axe5_frequence: "Pour la mission du khalifa, le secret n'existe pas devant Dieu. Le khalifa agit en sachant que ses intentions sont connues de Dieu. Le secret des hypocrites est une illusion — Dieu sait ce qui est cache comme ce qui est manifeste."
            },
            "Caché/Intime": {
              status: "nul",
              senses: ["secret"],
              proof_ctx: "Le sens de secret est un aspect du concept Joie/Plaisir. Ici le verbe forme IV yusirruuna signifie cacher, dissimuler — le sens est couvert par le concept retenu qui englobe le secret comme ce qui est au fond du coeur."
            }
          }
        }
      },
      {
        word_key: "eln", position: 8, sense_chosen: "rendre public",
        analysis_axes: {
          concept_chosen: "Manifestation/Publicité",
          sense_chosen: "rendre public",
          concepts: {
            "Manifestation/Publicité": {
              status: "retenu",
              senses: ["manifester", "public", "déclarer"],
              proof_ctx: "Le verbe yu'linuuna est un inaccompli 3MP forme IV de la racine '-l-n. Le Lane's donne « to declare publicly, to make manifest, to announce, to make known ». La forme IV (af'ala) est un causatif — rendre public, faire connaitre. Le verbe designe l'acte de rendre manifeste ce qui est dans le coeur.",
              axe1_verset: "Le verbe yu'linuuna est la seconde partie de l'opposition — apres « ce qu'ils cachent » (yusirruuna) vient « ce qu'ils rendent public » (yu'linuuna). L'ensemble couvre la totalite du comportement humain. Le verset affirme que Dieu connait les deux dimensions — rien n'echappe a Son savoir. La manifestation publique et la dissimulation privee sont toutes deux sues de Dieu.",
              axe2_voisins: "Le verset 76 montrait le double discours — parole publique (aamanna) et parole privee (a-tuhaddithuunahum). Ce verset 77 generalise cette opposition par le couple yusirruuna/yu'linuuna. Tout ce qui est dit en public et en prive est connu de Dieu. Le double discours est expose par l'omniscience divine.",
              axe3_sourate: "La racine '-l-n dans la sourate al-Baqarah traite de la manifestation publique. En 2:271, « si vous rendez publiques (tubduu) vos aumones, c'est bien ». La sourate montre que le public et le prive sont deux faces du meme acte — Dieu connait les deux. La manifestation n'est pas toujours superieure au secret — ce qui compte est la sincerite.",
              axe4_coherence: "La racine '-l-n apparait 16 fois dans le Coran. Le couple asarra/a'lana (cacher/manifester) est une formule coranique recurrente. En 14:38, « Seigneur, Tu connais ce que nous cachons et ce que nous manifestons ». Le Coran affirme l'omniscience divine sur les deux dimensions de l'action humaine.",
              axe5_frequence: "Pour la mission du khalifa, la manifestation est l'acte de rendre public. Le khalifa manifeste la verite et ne la cache pas. L'opposition cache/manifeste n'a pas de sens devant Dieu — le khalifa agit avec coherence car Dieu sait tout."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// DAILY PHRASES
// =====================================================
const dailyPhrases = [
  // tmae (id=633) — espérance
  { analysis_id: 633, phrases: [
    { sense: "espérer", arabic: "أَفَتَطْمَعُونَ أَن يُؤْمِنُوا لَكُمْ", phon: "a-fa-tatma'uuna an yu'minuu lakum", french: "Esperez-vous donc qu'ils croient pour vous ?" },
    { sense: "convoiter", arabic: "إِنِّي طَمِعْتُ أَنْ أَكُونَ مِنَ الصَّالِحِينَ", phon: "inni tami'tu an akuuna mina al-salihina", french: "J'espere etre parmi les vertueux." },
    { sense: "avidité", arabic: "لَا تَطْمَعُوا فِي الدُّنْيَا", phon: "la tatma'uu fi al-dunya", french: "Ne convoitez pas les biens d'ici-bas." }
  ]},
  // hrf (id=634) — altérer
  { analysis_id: 634, phrases: [
    { sense: "altérer", arabic: "يُحَرِّفُونَ الكَلِمَ عَن مَوَاضِعِهِ", phon: "yuharrifuuna al-kalima 'an mawadi'ihi", french: "Ils alterent les mots de leur contexte." },
    { sense: "lettre", arabic: "لِكُلِّ حَرْفٍ مِنَ القُرْآنِ مَعْنَى", phon: "likulli harfin mina al-qur'ani ma'na", french: "Chaque lettre du Coran a un sens." },
    { sense: "bord", arabic: "وَمِنَ النَّاسِ مَن يَعْبُدُ اللَّهَ عَلَىٰ حَرْفٍ", phon: "wa-mina al-nasi man ya'budu Allaha 'ala harfin", french: "Parmi les gens, certains adorent Dieu au bord." }
  ]},
  // hdth (id=1649) — raconter
  { analysis_id: 1649, phrases: [
    { sense: "raconter", arabic: "أَتُحَدِّثُونَهُم بِمَا فَتَحَ اللَّهُ عَلَيْكُمْ", phon: "a-tuhaddithuunahum bima fataha Allahu 'alaykum", french: "Leur racontez-vous ce que Dieu vous a revele ?" },
    { sense: "raconter", arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", phon: "wa-amma bini'mati rabbika fahaddith", french: "Quant au bienfait de ton Seigneur, proclame-le." },
    { sense: "événement nouveau", arabic: "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا", phon: "yawma'idhin tuhaddith akhbaraha", french: "Ce jour-la, elle racontera ses nouvelles." }
  ]},
  // hjj (id=637) — argumenter
  { analysis_id: 637, phrases: [
    { sense: "argumenter", arabic: "لِيُحَاجُّوكُم بِهِ عِندَ رَبِّكُمْ", phon: "liyuhajjuukum bihi 'inda rabbikum", french: "Pour qu'ils argumentent contre vous aupres de votre Seigneur." },
    { sense: "preuve", arabic: "فَمَنْ حَاجَّكَ فِيهِ فَقُلْ تَعَالَوْا", phon: "faman hajjaka fihi faqul ta'alaw", french: "Si quelqu'un te dispute a ce sujet, dis : venez." },
    { sense: "pèlerinage", arabic: "وَلِلَّهِ عَلَى النَّاسِ حِجُّ البَيْتِ", phon: "wa-lillahi 'ala al-nasi hijju al-bayti", french: "C'est un devoir envers Dieu pour les gens de faire le pelerinage de la Maison." }
  ]},
  // eln (id=644) — manifester
  { analysis_id: 644, phrases: [
    { sense: "rendre public", arabic: "يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ", phon: "ya'lamu ma yusirruuna wa-ma yu'linuuna", french: "Il sait ce qu'ils cachent et ce qu'ils rendent public." },
    { sense: "déclarer", arabic: "وَإِنْ تُبْدُوا مَا فِي أَنْفُسِكُمْ أَوْ تُخْفُوهُ", phon: "wa-in tubduu ma fi anfusikum aw tukhfuuhu", french: "Que vous manifestiez ce qui est en vous ou le cachiez." },
    { sense: "manifester", arabic: "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ", phon: "rabbana innaka ta'lamu ma nukhfi wa-ma nu'linu", french: "Notre Seigneur, Tu sais ce que nous cachons et ce que nous manifestons." }
  ]}
];

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  console.log(`  analysis_id=${data.analysis_id} (preset)`);

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
      console.log(`  OK VWA ${word.word_key} v${data.verse_id}`);
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
    console.log(`  OK verse V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — TERMINE (${okCount} OK, ${errCount} erreurs)`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [82, 83, 84];
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
// DAILY PHRASES
// =====================================================
async function insertDailyPhrases() {
  console.log('\n=== DAILY PHRASES ===');

  let totalOk = 0, totalSkip = 0, totalErr = 0;

  for (const root of dailyPhrases) {
    const { count } = await supabase
      .from('word_daily')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', root.analysis_id);

    if (count && count > 0) {
      console.log(`  analysis_id=${root.analysis_id} — ${count} phrases existent deja, skip`);
      totalSkip += root.phrases.length;
      continue;
    }

    for (const p of root.phrases) {
      const { error } = await supabase.from('word_daily').insert({
        analysis_id: root.analysis_id,
        sense: p.sense,
        arabic: p.arabic,
        phon: p.phon,
        french: p.french
      });
      if (error) {
        console.error(`  ERR daily id=${root.analysis_id}:`, error.message);
        totalErr++;
      } else {
        totalOk++;
      }
    }
    console.log(`  analysis_id=${root.analysis_id} — 3 phrases inserees`);
  }

  console.log(`DAILY PHRASES — ${totalOk} OK, ${totalSkip} skip, ${totalErr} erreurs`);
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 75 A 77 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 75; v <= 77; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V75-77 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
