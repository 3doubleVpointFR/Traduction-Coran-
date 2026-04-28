const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 44 À 46
// verse_id=51 (2:44), verse_id=52 (2:45), verse_id=53 (2:46)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:44
  // verse_id=51, analysis_id=412
  // =====================================================
  44: {
    verse_id: 51,
    analysis_id: 412,
    translation_arab: "Ordonnez-vous aux gens la piete et vous oubliez vos propres ames alors que vous recitez le Livre ? Ne raisonnez-vous pas ?",
    full_translation: "Commanderez-vous aux gens la bonté, et vous oublierez vous-mêmes, cependant que vous récitez le Livre ? Êtes-vous donc dépourvus de raison ?",
    translation_explanation: `§DEMARCHE§
Ce verset s'adresse aux fils d'Israel en leur reprochant une contradiction entre leur discours et leur pratique. Le verbe **ta'muruna** est un inaccompli 2MP de la racine a-m-r. Le Lane's donne « he commanded, ordered, bade, enjoined ». L'inaccompli indique une action repetee — ils ordonnent regulierement aux gens. Le mot **al-nassa** est un nom defini accusatif de la racine n-w-s. Le Lane's donne « people, mankind, human beings ». Le mot **al-birri** est un nom defini genitif de la racine b-r-r. Le Lane's donne « piety, goodness, righteousness, obedience ». Le birr est la piete globale qui englobe toutes les formes de bien envers Dieu et les creatures. Le verbe **tansawna** est un inaccompli 2MP de la racine n-s-y. Le Lane's donne « he forgot, he neglected, he left, he abandoned ». L'oubli ici n'est pas involontaire — c'est un oubli-negligence, un abandon volontaire de ce qu'on sait. Le mot **anfusakum** est un nom pluriel accusatif de la racine n-f-s avec suffixe pronominal 2MP. Le Lane's donne « soul, self, person ». L'ame designe ici la propre personne — ils oublient eux-memes, ils se negligent. Le verbe **tatluna** est un inaccompli 2MP de la racine t-l-w. Le Lane's donne « he recited, he read, he followed ». La recitation du Livre implique qu'ils connaissent le contenu — l'ignorance n'est pas une excuse. Le mot **al-kitaba** est un nom defini accusatif de la racine k-t-b. Le Lane's donne « book, scripture, writing ». Le verbe **ta'qiluna** est un inaccompli 2MP de la racine e-q-l. Le Lane's donne « he understood, he was intelligent, he had reason ». La question rhetorique finale (ne raisonnez-vous pas ?) souligne l'absurdite de leur comportement.

§JUSTIFICATION§
**ordonnez** — Le sens retenu est « ordonner ». Le verbe ta'muruna de la racine a-m-r designe l'acte d'ordonner, de commander aux autres de faire quelque chose. L'alternative « consulter » est ecartee car le contexte montre un acte directif vers les autres (ordonner la piete aux gens), pas une demande d'avis.

**gens** — Le sens retenu est « gens ». Le mot al-nassa designe les etres humains en general, le public a qui les fils d'Israel s'adressent. L'alternative « etre agite » est ecartee car hors contexte.

**piété** — Le sens retenu est « piete ». Le mot al-birri designe la bonte et la piete globale. L'alternative « terre ferme » est ecartee car le contexte parle de vertu morale, pas de geographie.

**oubliez** — Le sens retenu est « oublier ». Le verbe tansawna designe le fait de negliger, d'abandonner. C'est un oubli volontaire — ils savent mais ne pratiquent pas. L'alternative « omettre » est possible mais « oublier » est plus fort car il implique un effacement de la conscience.

**vos ames** — Le sens retenu est « ame ». Le mot anfusakum designe les propres personnes, le soi-meme. L'alternative « souffle » est ecartee car le contexte parle de la personne morale, pas du souffle physique.

**recitez** — Le sens retenu est « reciter ». Le verbe tatluna designe la lecture a haute voix du texte sacre. L'alternative « succeder » est ecartee car le contexte parle de l'acte de lire le Livre.

**Livre** — Le sens retenu est « ecriture revelee ». Le mot al-kitaba designe l'Ecriture sacree (la Torah). L'alternative « decret » est ecartee car le contexte parle du Livre que les fils d'Israel recitent, un texte physique et revele.

**raisonnez** — Le sens retenu est « raisonner ». Le verbe ta'qiluna designe l'usage de la raison et du discernement. L'alternative « lier » est ecartee car le contexte demande un acte intellectuel — comprendre l'incoherence de leur comportement.

§CRITIQUE§
**ordonnez vs commandez** — Les traductions courantes donnent « commandez » ou « enjoignez ». Le Lane's donne « he commanded, ordered ». « Ordonnez » et « commandez » sont equivalents — les deux portent l'idee d'un ordre donne avec autorite. « Enjoignez » est plus litteraire mais moins courant.
**piété vs bonté** — Le Lane's donne « piety, goodness, righteousness ». « Piete » englobe la bonte envers Dieu et les creatures — c'est plus complet que « bonte » qui pourrait se limiter aux relations humaines. « Piete » est retenu car le contexte religieux l'exige.
**oubliez vs négligez** — Le Lane's donne « he forgot, he neglected ». « Oubliez » est retenu car il porte la charge de l'effacement de la conscience — ils ne font pas que negliger, ils effacent de leur esprit ce qu'ils savent. Les traductions courantes donnent « vous oubliez vous-memes ».`,
    segments: [
      { fr: "ordonnez-vous", pos: "verbe", phon: "ta'muruna", arabic: "أَتَأْمُرُونَ", word_key: "amr", is_particle: false, sense_retenu: "ordonner", position: 1 },
      { fr: "aux gens", pos: "nom", phon: "al-nassa", arabic: "ٱلنَّاسَ", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 2 },
      { fr: "la piété", pos: "nom", phon: "al-birri", arabic: "بِٱلْبِرِّ", word_key: "brr", is_particle: false, sense_retenu: "piété", position: 3 },
      { fr: "et vous oubliez", pos: "verbe", phon: "tansawna", arabic: "وَتَنسَوْنَ", word_key: "nsy", is_particle: false, sense_retenu: "oublier", position: 4 },
      { fr: "vos propres ames", pos: "nom", phon: "anfusakum", arabic: "أَنفُسَكُمْ", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 5 },
      { fr: "alors que vous", phon: "wa-antum", arabic: "وَأَنتُمْ", is_particle: true, position: 6 },
      { fr: "recitez", pos: "verbe", phon: "tatluna", arabic: "تَتْلُونَ", word_key: "tlw", is_particle: false, sense_retenu: "reciter", position: 7 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "ٱلْكِتَٰبَ", word_key: "ktb", is_particle: false, sense_retenu: "ecriture revelee", position: 8 },
      { fr: "ne", phon: "afala", arabic: "أَفَلَا", is_particle: true, position: 9 },
      { fr: "raisonnez-vous", pos: "verbe", phon: "ta'qiluna", arabic: "تَعْقِلُونَ", word_key: "eql", is_particle: false, sense_retenu: "raisonner", position: 10 }
    ],
    words: [
      {
        word_key: "amr", position: 1, sense_chosen: "ordonner",
        analysis_axes: {
          concept_chosen: "Commandement/Autorité",
          concepts: {
            "Commandement/Autorité": {
              status: "retenu",
              senses: ["ordonner", "commander", "nommer gouverneur"],
              proof_ctx: "Le verbe ta'muruna est un inaccompli 2MP de la racine a-m-r. Le Lane's donne « he commanded, ordered, bade, enjoined ». La racine porte l'idee d'un acte directif qui sort de celui qui a l'autorite et atteint celui qui doit obeir. L'inaccompli indique une action repetee et habituelle — ils ordonnent regulierement. Le commandement est un acte de parole qui engage la responsabilite de celui qui le profere — commander le bien implique de le pratiquer soi-meme.",
              axe1_verset: "Le verbe ta'muruna ouvre le verset et pose le reproche central. La question rhethorique (ordonnez-vous ?) n'attend pas de reponse — elle denonce une contradiction flagrante. L'acte de commander la piete aux gens est en soi louable, mais il devient absurde quand celui qui commande ne pratique pas. La structure du verset oppose deux mouvements : commander aux autres (exterieur) et oublier soi-meme (interieur). Le commandement est directif vers les autres mais vide quand il n'est pas fonde sur la pratique personnelle.",
              axe2_voisins: "Le verset 43 ordonnait d'accomplir la priere et de donner l'aumone — des commandements divins directs. Ce verset 44 reproche aux destinataires d'ordonner aux autres ce qu'ils ne font pas eux-memes. Le passage des commandements divins (v43) au reproche de l'hypocrisie (v44) montre que Dieu exige la coherence entre le dire et le faire. Le verset 45 proposera le remede : la patience et la priere, qui exigent un engagement personnel et non une simple parole vers les autres.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine a-m-r dans plusieurs contextes. En 2:27, ceux qui coupent ce que Dieu a ordonne de joindre. En 2:67, Dieu ordonne d'immoler une vache. En 2:222, il vous est ordonne de vous approcher de vos epouses. Le commandement divin est toujours suivi d'execution — contrairement au commandement humain hypocrite de 2:44 ou l'on ordonne sans pratiquer.",
              axe4_coherence: "La racine a-m-r apparait 248 fois dans le Coran. Elle designe le commandement divin (amr Allah), le commandement prophetique, et le commandement humain. En 3:104, « qu'il y ait parmi vous une communaute qui ordonne le bien ». En 9:71, « les croyants et les croyantes ordonnent le convenable ». Le commandement du bien est une obligation communautaire, mais il doit etre fonde sur la pratique — sinon il releve de l'hypocrisie.",
              axe5_frequence: "Pour la mission du khalifa, le commandement du bien fait partie de ses responsabilites. Mais le khalifa ne peut pas commander ce qu'il ne pratique pas — son autorite vient de sa coherence. Commander sans pratiquer detruit la credibilite du commandement et celle du commandeur. Le khalifa est d'abord un pratiquant, ensuite un commandeur."
            },
            "Affaire/Chose": {
              status: "nul",
              senses: ["affaire", "chose"],
              proof_ctx: "L'affaire (amr) est un sens nominal de la racine a-m-r. Le contexte utilise le verbe ta'muruna dans son sens verbal d'ordonner, pas dans le sens nominal d'affaire. La construction transitive (ordonner aux gens la piete) confirme le sens de commandement."
            },
            "Consultation": {
              status: "nul",
              senses: ["consulter"],
              proof_ctx: "La consultation (mu'amara) est un sens derive de la racine a-m-r. Le contexte montre un acte directif (ordonner), pas un echange d'avis. L'imperatif du verset est unidirectionnel — des fils d'Israel vers les gens."
            }
          }
        }
      },
      {
        word_key: "nws", position: 2, sense_chosen: "gens",
        analysis_axes: {
          concept_chosen: "Humanité/Peuple",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["gens", "êtres humains", "peuple"],
              proof_ctx: "Le mot al-nassa est un nom defini accusatif de la racine n-w-s. Le Lane's donne « people, mankind, men ». Le mot designe l'ensemble des etres humains consideres collectivement — c'est le public, les gens a qui s'adresse le discours. L'article defini (al) generalise : ce ne sont pas certains gens mais les gens en general. Le nass est le destinataire collectif du commandement.",
              axe1_verset: "Le mot al-nassa est le complement d'objet indirect du verbe ta'muruna — c'est a eux que le commandement est adresse. Les fils d'Israel ordonnent aux gens (les autres) la piete tout en s'oubliant eux-memes. Le contraste entre « les gens » (les autres) et « vos ames » (vous-memes) est le coeur du reproche. L'attention est dirigee vers l'exterieur (les gens) au detriment de l'interieur (soi-meme). Le verset denonce cette inversion des priorites.",
              axe2_voisins: "Les versets 40-43 s'adressaient directement aux fils d'Israel avec des imperatifs. Ce verset 44 introduit les « gens » comme tiers — ceux a qui les fils d'Israel ordonnent le bien. Le reproche est que les fils d'Israel se comportent en educateurs des autres alors qu'ils sont eux-memes defaillants. Le verset 45 reviendra au rapport direct entre les fils d'Israel et Dieu (cherchez le secours dans la patience et la priere).",
              axe3_sourate: "Le mot al-nass est l'un des plus frequents de la sourate al-Baqarah. En 2:8, « parmi les gens, ceux qui disent nous croyons ». En 2:13, « croyez comme les gens ont cru ». En 2:21, « o les gens, adorez votre Seigneur ». La sourate distingue les categories parmi les gens : croyants, hypocrites, rejecteurs. Ici, les gens sont le public recepteur du commandement des fils d'Israel.",
              axe4_coherence: "La racine n-w-s pour al-nass apparait 241 fois dans le Coran. Elle designe l'humanite sans distinction de foi ou de race. En 4:1, « o les gens, craignez votre Seigneur qui vous a crees d'une seule ame ». En 114:1-6, la sourate al-Nas demande protection contre le mal pour tous les gens. Le mot porte toujours une dimension universelle — tous les humains sont concernes.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont le champ d'action de sa mission. Le khalifa est envoye pour les gens — pour les guider, les commander au bien. Mais sa legitimite repose sur sa propre pratique. Commander les gens sans se commander soi-meme est une trahison de la mission."
            },
            "Perception/Visibilité": {
              status: "nul",
              senses: ["être visible", "voir de loin"],
              proof_ctx: "La visibilite est un sens secondaire de n-w-s. Le contexte utilise al-nass comme substantif designant les gens, pas comme verbe de perception."
            }
          }
        }
      },
      {
        word_key: "brr", position: 3, sense_chosen: "piété",
        analysis_axes: {
          concept_chosen: "Piété/Bonté",
          concepts: {
            "Piété/Bonté": {
              status: "retenu",
              senses: ["être pieux", "piété", "bonté", "vertueux"],
              proof_ctx: "Le mot al-birri est un nom defini genitif de la racine b-r-r. Le Lane's donne « piety, righteousness, goodness, obedience, the doing of good, kindness to parents ». Le birr est la piete globale qui englobe toutes les formes de bien — envers Dieu (obeissance), envers les parents (birr al-walidayn), envers les creatures (bonte). C'est un etat interieur permanent qui se manifeste dans les actes exterieurs. Le birr n'est pas un acte ponctuel mais une disposition du coeur qui produit constamment le bien.",
              axe1_verset: "Le mot al-birri est l'objet du commandement — c'est ce que les fils d'Israel ordonnent aux gens. Le birr est presente comme quelque chose de connu et de reconnu — il est defini (al-birr), pas indefini. Les fils d'Israel savent ce qu'est la piete, ils l'enseignent aux autres, mais ils ne la pratiquent pas eux-memes. L'ironie est que le birr est par definition un etat interieur qui se manifeste dans les actes — on ne peut pas le commander sans le vivre.",
              axe2_voisins: "Le verset 43 ordonnait la priere et l'aumone — deux manifestations concretes du birr. Ce verset 44 utilise le terme general birr qui englobe la priere, l'aumone et tout le reste. Le passage du particulier (priere, aumone) au general (birr) elargit le reproche — ce n'est pas seulement la priere qu'ils negligent, c'est toute la piete. Le verset 45 proposera la patience et la priere comme moyens concrets de retrouver la coherence.",
              axe3_sourate: "La racine b-r-r revient en 2:177 dans la grande definition du birr : « le birr n'est pas de tourner vos visages vers l'orient ou l'occident, mais le birr est de croire en Dieu, au Jour Dernier, aux anges, au Livre et aux prophetes ». La sourate definit le birr comme l'ensemble des croyances et des pratiques. En 2:44, les fils d'Israel ordonnent ce birr aux autres sans le pratiquer — 2:177 montrera ce que le birr exige vraiment.",
              axe4_coherence: "La racine b-r-r apparait 32 fois dans le Coran. En 3:92, « vous n'atteindrez le birr que si vous depensez de ce que vous aimez ». En 58:9, le birr est oppose au peche (ithm). Le birr est toujours presente comme un ideal exigeant qui demande un investissement personnel — pas une simple parole ou un simple commandement.",
              axe5_frequence: "Pour la mission du khalifa, le birr est l'objectif de sa mission personnelle. Le khalifa doit d'abord atteindre le birr en lui-meme avant de le commander aux autres. Commander le birr sans le vivre est la pire forme d'hypocrisie — c'est trahir la mission a la source meme."
            },
            "Terre/Sol": {
              status: "nul",
              senses: ["terre ferme", "continent"],
              proof_ctx: "La terre (barr) est un sens de la racine b-r-r. Le contexte parle de piete et de vertu morale, pas de geographie. La preposition bi (bi-l-birr) introduit l'objet du commandement — ce qu'on ordonne, pas un lieu."
            }
          }
        }
      },
      {
        word_key: "nsy", position: 4, sense_chosen: "oublier",
        analysis_axes: {
          concept_chosen: "Oubli/Négligence",
          concepts: {
            "Oubli/Négligence": {
              status: "retenu",
              senses: ["oublier", "négliger", "omettre", "laisser"],
              proof_ctx: "Le verbe tansawna est un inaccompli 2MP de la racine n-s-y. Le Lane's donne « he forgot, he was unmindful of, he neglected, he left, he abandoned ». L'oubli de la racine n-s-y n'est pas seulement un defaut de memoire — c'est aussi une negligence volontaire, un abandon delibere. En contexte coranique, oublier son ame c'est negliger sa propre reforme, mettre de cote ce qu'on sait etre vrai pour soi-meme. L'inaccompli indique un etat continu — ils oublient constamment.",
              axe1_verset: "Le verbe tansawna est le coeur du reproche. L'opposition est saisissante : ils ordonnent (ta'muruna) aux autres mais oublient (tansawna) eux-memes. Les deux verbes sont a l'inaccompli — les deux actions sont simultanees et continues. L'oubli de soi pendant qu'on s'occupe des autres est le signe d'une inversion fondamentale des priorites. Le verset ne dit pas qu'ils n'ordonnent pas le bien — le probleme est qu'ils oublient de l'appliquer a eux-memes.",
              axe2_voisins: "Le verset 40 demandait aux fils d'Israel de se rappeler les bienfaits de Dieu. Ce verset 44 reproche l'oubli de soi. Le contraste entre le rappel (dhikr, v40) et l'oubli (nisyan, v44) est structurel. Ceux a qui on demande de se rappeler sont ceux qui oublient. L'oubli de soi est pire que l'oubli des bienfaits car il empeche toute reforme. Le verset 45 proposera la patience et la priere comme remedes a cet oubli.",
              axe3_sourate: "La racine n-s-y apparait dans la sourate pour decrire differents types d'oubli. En 2:286, « Seigneur ne nous punis pas si nous avons oublie ou faille ». En 2:237, « a moins que vous n'oubliiez ». L'oubli humain est une faiblesse reconnue, mais l'oubli de soi dans 2:44 est une negligence volontaire, plus grave que l'oubli accidentel.",
              axe4_coherence: "La racine n-s-y apparait 45 fois dans le Coran. En 7:51, « aujourd'hui Nous les oublions comme ils ont oublie la rencontre de ce jour ». En 9:67, « ils ont oublie Dieu et Il les a oublies ». En 59:19, « ne soyez pas comme ceux qui ont oublie Dieu, alors Il leur a fait oublier leurs propres ames ». Ce dernier verset eclaire 2:44 — oublier Dieu conduit a s'oublier soi-meme. L'oubli de soi est la consequence de l'oubli de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'oubli de soi est le premier obstacle. Le khalifa qui oublie de se reformer lui-meme ne peut pas reformer les autres. L'oubli de soi detruit l'autorite morale — personne ne suit celui qui ne pratique pas ce qu'il preche. Le khalifa doit etre le premier a appliquer ce qu'il commande."
            }
          }
        }
      },
      {
        word_key: "nfs", position: 5, sense_chosen: "âme",
        analysis_axes: {
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["âme", "personne", "esprit", "désir", "soi-même"],
              proof_ctx: "Le mot anfusakum est un nom pluriel accusatif de la racine n-f-s avec suffixe pronominal 2MP. Le Lane's donne « soul, self, spirit, person, the essential being ». Le nafs designe la totalite de la personne — son ame, son corps, sa conscience. L'expression anfusakum (vos ames, vous-memes) designe les personnes des fils d'Israel eux-memes. Le reproche est qu'ils negligent leur propre etre — leur propre reforme, leur propre pratique, leur propre purification.",
              axe1_verset: "Le mot anfusakum est l'objet du verbe tansawna — c'est ce qui est oublie. Le contraste est structurel : ils commandent aux GENS (al-nass) la piete et oublient leurs AMES (anfusakum). L'exterieur (les gens) recoit leur attention tandis que l'interieur (leurs ames) est neglige. Le pluriel anfus (ames) renforce l'idee que c'est l'ensemble de leur etre qui est laisse a l'abandon — pas seulement un aspect mais toute la personne.",
              axe2_voisins: "Le verset 43 ordonnait des actes de piete (priere, aumone). Ce verset 44 montre que ces actes sont vides si l'ame n'est pas engagee. Le verset 45 proposera la patience et la priere comme moyen de reformer l'ame. La progression est : commandements divins (v43) → reproche de l'incoherence (v44) → remede pour l'ame (v45).",
              axe3_sourate: "La racine n-f-s est omnipresente dans la sourate al-Baqarah. En 2:9, « ils ne trompent qu'eux-memes (anfusahum) ». En 2:54, « vous vous etes fait tort a vous-memes (anfusakum) ». En 2:231, « celui qui fait cela a lese son ame (nafsahu) ». La sourate utilise constamment le mot nafs pour rappeler que les actes de l'homme retombent d'abord sur lui-meme — celui qui oublie son ame se nuit a lui-meme.",
              axe4_coherence: "La racine n-f-s apparait 298 fois dans le Coran. En 91:7-10, « par l'ame et Celui qui l'a equilibree, puis lui a inspire sa debauche et sa piete — a reussi celui qui l'a purifiee ». L'ame est le champ de bataille entre le bien et le mal. En 12:53, « l'ame est certes ordonnatrice du mal ». L'ame doit etre surveillee, reformee, purifiee — l'oublier c'est la laisser a ses penchants.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le premier territoire a gouverner. Avant de gouverner les autres, le khalifa doit gouverner son ame. L'oubli de l'ame est la faillite du khalifa interieur — celui qui ne maitrise pas son ame ne peut pas maitriser le monde exterieur."
            },
            "Souffle/Vie": {
              status: "nul",
              senses: ["souffle", "respirer", "soulagement"],
              proof_ctx: "Le souffle (nafas) est un sens de la racine n-f-s. Le contexte parle des personnes (anfusakum = vous-memes), pas du souffle physique. Le reproche concerne la negligence de soi, pas un manque de respiration."
            }
          }
        }
      },
      {
        word_key: "tlw", position: 7, sense_chosen: "réciter",
        analysis_axes: {
          concept_chosen: "Récitation/Succession",
          concepts: {
            "Récitation/Succession": {
              status: "retenu",
              senses: ["réciter", "lire", "succéder"],
              proof_ctx: "Le verbe tatluna est un inaccompli 2MP de la racine t-l-w. Le Lane's donne « he read, he recited, he followed ». La tilawa est la recitation du texte sacre — lire a haute voix les paroles revelees. Le verbe implique un acte de culte et de connaissance — celui qui recite connait le contenu. L'inaccompli indique une pratique reguliere et continue — ils recitent habituellement le Livre.",
              axe1_verset: "Le verbe tatluna introduit la circonstance aggravante. Ils ordonnent la piete aux gens, ils oublient eux-memes, et tout cela ALORS QU'ILS RECITENT LE LIVRE. La conjonction wa avec le pronom antum (alors que vous) souligne la simultaneite — la recitation et l'incoherence coexistent. Reciter le Livre signifie connaitre les commandements divins — l'ignorance n'est pas une excuse. La recitation sans pratique est le comble de la contradiction.",
              axe2_voisins: "Le verset 41 mentionnait le Livre descendu confirmant ce que les fils d'Israel possedent. Le verset 42 interdisait de melanger le vrai et le faux. Ce verset 44 ajoute que la recitation du Livre n'empeche pas l'incoherence. La possession du Livre (v41), la connaissance de la verite (v42), la recitation reguliere (v44) — tout cela ne suffit pas sans la pratique. Le verset 45 montrera que c'est la patience et la priere qui transforment le savoir en pratique.",
              axe3_sourate: "La racine t-l-w revient en 2:102 (ils suivirent ce que les demons recitaient) et en 2:121 (ceux a qui Nous avons donne le Livre et qui le recitent comme il doit etre recite). Le verset 2:121 donne le critere de la bonne recitation : haqqa tilawatihi — la reciter comme elle merite d'etre recitee, c'est-a-dire avec comprehension et pratique. La recitation des fils d'Israel de 2:44 est une recitation vide car separee de la pratique.",
              axe4_coherence: "La racine t-l-w apparait 63 fois dans le Coran. En 3:78, certains tordent leur langue avec le Livre pour faire croire que c'est du Livre alors que ce n'en est pas. En 2:129, Abraham demande un messager qui recite les versets aux gens. La recitation est valorisee quand elle est sincere et pratiquee — elle est condamnee quand elle est hypocrite et detachee de la pratique.",
              axe5_frequence: "Pour la mission du khalifa, la recitation du Livre est un acte fondamental mais insuffisant. Le khalifa recite pour comprendre et pour pratiquer — pas pour paraitre savant. La recitation sans pratique est une trahison du Livre lui-meme. Le Livre demande a etre vecu, pas seulement recite."
            }
          }
        }
      },
      {
        word_key: "ktb", position: 8, sense_chosen: "écriture révélée",
        analysis_axes: {
          concept_chosen: "Écriture/Inscription",
          concepts: {
            "Écriture/Inscription": {
              status: "retenu",
              senses: ["écrire", "dicter", "demander d'écrire", "écrire à quelqu'un", "s'inscrire", "copier un livre", "art de l'écriture", "scribe", "savant", "école", "enseignant", "vendeur de livres"],
              proof_ctx: "Le mot al-kitaba est un nom defini accusatif de la racine k-t-b. Le Lane's donne « the writing, the scripture, the book ». Le kitab est l'Ecriture revelee — la Torah pour les fils d'Israel. C'est un texte ecrit et transmis qui contient les commandements divins. L'article defini (al-kitab) designe l'Ecriture par excellence, le Livre connu de tous. Reciter le Livre c'est connaitre son contenu — ce qui rend l'oubli de soi inexcusable.",
              axe1_verset: "Le mot al-kitaba est le complement d'objet du verbe tatluna — c'est ce qui est recite. Le Livre est la source de la piete qu'ils commandent aux autres — c'est du Livre qu'ils tirent leur enseignement. L'ironie est qu'ils recitent le Livre qui contient les commandements qu'ils ne pratiquent pas. Le Livre est le temoin contre eux — il prouve qu'ils savent ce qu'ils doivent faire.",
              axe2_voisins: "Le verset 42 interdisait de melanger le vrai et le faux et de cacher la verite sciemment. Ce verset 44 ajoute une autre forme de trahison du Livre : le reciter sans le pratiquer. En 2:41, il est dit de croire en ce qui est descendu (le Coran) confirmant le Livre des fils d'Israel. Le Livre est constamment present comme reference — le trahir par l'incoherence est un crime repete.",
              axe3_sourate: "Le mot al-kitab est l'un des plus frequents de la sourate al-Baqarah. Des le verset 2, « ce Livre (al-kitab) — pas de doute en lui — est une guidance ». En 2:78, certains sont reprochables car ils ne connaissent du Livre que des souhaits. En 2:85, ils croient en une partie du Livre et rejettent l'autre. La sourate denonce les differentes manieres de trahir le Livre : le cacher, le deformer, le reciter sans le pratiquer.",
              axe4_coherence: "La racine k-t-b apparait 319 fois dans le Coran. Elle designe les Ecritures revelees (Torah, Evangile, Coran), le registre des actes, et l'acte d'ecrire. En 62:5, ceux qui portent la Torah sans la pratiquer sont compares a un ane qui porte des livres. L'image illustre parfaitement 2:44 — porter le Livre (le reciter) sans le pratiquer est une charge inutile.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est la reference supreme. Le khalifa agit selon le Livre — il le recite, le comprend et le pratique. Le Livre n'est pas un ornement mais un guide d'action. Le khalifa qui recite sans pratiquer porte le Livre comme l'ane porte ses livres — sans en tirer profit."
            },
            "Livre/Écrit": {
              status: "probable",
              senses: ["écriture révélée", "livre", "registre", "contrat écrit", "contrat de mariage", "contrat d'affranchissement"],
              proof_ctx: "Le livre (kitab) comme support materiel est un sens valide de k-t-b. Le contexte designe l'Ecriture revelee (la Torah), qui est a la fois un texte ecrit et une revelation. Le sens d'Ecriture/Inscription est retenu car il englobe le processus de mise par ecrit de la revelation."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "rendre obligatoire", "juger", "décret divin", "prédestination"],
              proof_ctx: "L'obligation (kutiba) est un sens de la racine k-t-b (il a ete prescrit). Le contexte parle du Livre recite, pas d'un decret. La construction tatluna al-kitaba (vous recitez le Livre) est une recitation de texte, pas une prescription."
            }
          }
        }
      },
      {
        word_key: "eql", position: 10, sense_chosen: "raisonner",
        analysis_axes: {
          concept_chosen: "Raison/Intelligence",
          concepts: {
            "Raison/Intelligence": {
              status: "retenu",
              senses: ["comprendre", "discernement", "raison", "intelligence"],
              proof_ctx: "Le verbe ta'qiluna est un inaccompli 2MP de la racine e-q-l. Le Lane's donne « he understood, he was intelligent, he comprehended, he used reason ». Le 'aql est la capacite de comprendre, de discerner le vrai du faux et le coherent de l'absurde. La question rhetorique (afala ta'qiluna — ne raisonnez-vous pas ?) est un appel a la raison — elle demande de prendre conscience de l'incoherence. Le Lane's relie 'aql a l'idee de lier, attacher — la raison est ce qui lie les idees entre elles et empeche l'incoherence.",
              axe1_verset: "Le verbe ta'qiluna clot le verset par une question rhetorique qui resume tout le reproche. La question « ne raisonnez-vous pas ? » implique que leur comportement est contraire a la raison la plus elementaire. Commander le bien sans le pratiquer est irrationnel — c'est une contradiction logique que n'importe quel esprit sain detecte. Le 'aql est presente comme le minimum requis — pas la revelation, pas la foi, mais la simple raison suffit a voir l'absurdite.",
              axe2_voisins: "Le verset 42 demandait de ne pas melanger le vrai et le faux — un acte de raison. Ce verset 44 demande de ne pas contredire ses propres paroles — un autre acte de raison. Le verset 45 proposera la patience et la priere — des actes qui vont au-dela de la raison et requierent la foi. La progression est : raison (v42, v44) → foi et pratique (v45, v46). La raison est le seuil minimal que les fils d'Israel n'atteignent meme pas.",
              axe3_sourate: "La question afala ta'qiluna revient dans la sourate al-Baqarah comme un refrain. En 2:75-76, les fils d'Israel sont interpelles sur leur incoherence. En 2:170, on leur demande s'ils suivent aveuglement leurs peres meme s'ils ne raisonnent pas. La sourate interpelle constamment la raison des destinataires — le refus de raisonner est presente comme la cause premiere de l'egarement.",
              axe4_coherence: "La racine e-q-l apparait 49 fois dans le Coran, toujours sous forme verbale (ya'qiluna, ta'qiluna, 'aqalahu). Le Coran ne parle jamais de al-'aql comme nom mais utilise toujours le verbe — raisonner est un acte, pas un objet. En 8:22, « les pires des betes aupres de Dieu sont les sourds et muets qui ne raisonnent pas ». En 29:43, « ce sont des exemples que Nous proposons aux gens, et ne les comprennent que les savants ». Le raisonnement est un critere de valeur humaine.",
              axe5_frequence: "Pour la mission du khalifa, la raison est l'outil de base. Le khalifa raisonne — il voit les contradictions, comprend les consequences, tire des lecons. L'absence de raison disqualifie le khalifa car elle le rend incapable de gerer les affaires avec coherence. La raison est la premiere condition de la khilafa, avant meme la foi."
            },
            "Lien/Entrave": {
              status: "nul",
              senses: ["lier", "entraver"],
              proof_ctx: "Le lien ('iqal) est un sens concret de la racine e-q-l (entraver un chameau). Le contexte utilise le verbe dans son sens abstrait de raisonner, comprendre. La question rhetorique demande un acte intellectuel, pas un acte physique de lier."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:45
  // verse_id=52, analysis_id=409
  // =====================================================
  45: {
    verse_id: 52,
    analysis_id: 409,
    translation_arab: "Cherchez le secours dans la patience et la priere — certes, elle est lourde sauf pour les humbles.",
    full_translation: "Et cherchez secours dans l'endurance et la Salât : certes, la Salât est une lourde obligation, sauf pour les humbles.",
    translation_explanation: `§DEMARCHE§
Ce verset propose un remede apres le reproche du verset 44. Le verbe **ista'inu** est un imperatif 2MP forme X de la racine e-w-n. Le Lane's donne « he sought aid, he asked for help ». La forme X (ista'ana) ajoute le sens de « chercher activement le secours ». L'imperatif est un ordre divin — cherchez le secours. Le mot **al-sabri** est un nom defini genitif de la racine s-b-r. Le Lane's donne « patience, endurance, steadfastness, self-restraint ». Le sabr est l'endurance face a l'epreuve — retenir son ame de la plainte et de l'abandon. Le mot **al-salati** est un nom defini genitif de la racine s-l-w. Le Lane's donne « prayer, the act of praying, supplication ». La salat est la priere rituelle — l'acte structure de se tourner vers Dieu avec des paroles et des gestes. Le mot **kabiratun** est un nom feminin singulier indefini de la racine k-b-r. Le Lane's donne « great, big, large, weighty, heavy, difficult ». La kabiira designe ici la lourdeur de l'obligation — la priere est lourde, pesante, difficile. Le mot **al-khashi'ina** est un participe actif pluriel masculin defini de la racine kh-sh-e. Le Lane's donne « humble, submissive, lowly, still, motionless ». Le khashi' est celui qui s'humilie devant Dieu — son ame est apaisee, son corps est soumis, sa voix est basse.

§JUSTIFICATION§
**cherchez le secours** — Le sens retenu est « chercher le secours ». Le verbe ista'inu (forme X) designe l'acte actif de chercher l'aide. L'alternative « secourir » est ecartee car la forme X est reflexive — c'est chercher le secours pour soi, pas secourir les autres. L'alternative « aider » est ecartee car trop general.

**patience** — Le sens retenu est « patience ». Le mot al-sabri designe l'endurance et la constance face a la difficulte. L'alternative « emprisonner » est ecartee car hors contexte — le sabr coranique est toujours la patience morale, pas l'emprisonnement.

**prière** — Le sens retenu est « priere ». Le mot al-salati designe la priere rituelle structuree. L'alternative « suivre de pres » est ecartee car le contexte parle d'un acte de culte, pas d'une poursuite.

**lourde** — Le sens retenu est « lourd ». Le mot kabiratun designe la pesanteur et la difficulte. L'alternative « etre grand » est ecartee car le contexte ne parle pas de grandeur mais de difficulte — la priere est lourde a porter, pas grande en taille. L'alternative « orgueil » est ecartee car c'est le sens pejoratif de k-b-r, tandis qu'ici c'est le sens neutre de lourdeur.

**humbles** — Le sens retenu est « humble ». Le mot al-khashi'ina designe ceux qui se soumettent a Dieu avec humilite interieure. L'alternative « baisser la voix » est ecartee car trop reducteur — le khushu' est un etat global de l'ame, pas seulement un acte vocal.

§CRITIQUE§
**cherchez le secours vs cherchez assistance** — Les traductions courantes donnent « cherchez secours » ou « aidez-vous ». Le Lane's donne pour ista'ana « he sought aid, help ». « Cherchez le secours » preserve l'idee d'une demarche active — on va chercher l'aide, on ne la recoit pas passivement.
**lourde vs difficile** — Le Lane's donne pour kabira « great, heavy, weighty ». « Lourde » est plus concret que « difficile » — la priere pese sur l'ame et le corps. Les traductions courantes donnent « lourde obligation ». La lourdeur est physique et morale.
**humbles vs recueillis** — Le Lane's donne pour khashi' « humble, submissive, lowly ». « Humbles » est retenu car il designe un etat interieur global, tandis que « recueillis » se limite a l'attention mentale. L'humilite englobe le recueillement mais va plus loin — elle implique un abaissement volontaire devant Dieu.`,
    segments: [
      { fr: "cherchez le secours", pos: "verbe", phon: "ista'inu", arabic: "وَٱسْتَعِينُوا۟", word_key: "ewn", is_particle: false, sense_retenu: "chercher le secours", position: 1 },
      { fr: "dans la patience", pos: "nom", phon: "al-sabri", arabic: "بِٱلصَّبْرِ", word_key: "sbr", is_particle: false, sense_retenu: "patience", position: 2 },
      { fr: "et la priere", pos: "nom", phon: "al-salati", arabic: "وَٱلصَّلَوٰةِ", word_key: "slw", is_particle: false, sense_retenu: "priere", position: 3 },
      { fr: "certes elle", phon: "wa-innaha", arabic: "وَإِنَّهَا", is_particle: true, position: 4 },
      { fr: "est lourde", pos: "nom", phon: "kabiratun", arabic: "لَكَبِيرَةٌ", word_key: "kbr", is_particle: false, sense_retenu: "lourd", position: 5 },
      { fr: "sauf", phon: "illa", arabic: "إِلَّا", is_particle: true, position: 6 },
      { fr: "sur", phon: "'ala", arabic: "عَلَY", is_particle: true, position: 7 },
      { fr: "les humbles", pos: "nom", phon: "al-khashi'ina", arabic: "ٱلْخَٰشِعِينَ", word_key: "khaʃe", is_particle: false, sense_retenu: "humble", position: 8 }
    ],
    words: [
      {
        word_key: "ewn", position: 1, sense_chosen: "chercher le secours",
        analysis_axes: {
          concept_chosen: "Demande d'aide",
          concepts: {
            "Demande d'aide": {
              status: "retenu",
              senses: ["chercher le secours", "solliciter l'assistance", "demander l'aide"],
              proof_ctx: "Le verbe ista'inu est un imperatif 2MP forme X de la racine e-w-n. Le Lane's donne « he sought aid, he sought help or assistance ». La forme X (istif'al) indique la recherche active — chercher le secours, pas le recevoir passivement. Le verbe est suivi de la preposition bi (bi-l-sabri wa-l-salati) qui introduit les instruments par lesquels on cherche le secours — la patience et la priere sont les moyens, pas le but. Le secours cherche est celui de Dieu — on se tourne vers Lui par la patience et la priere.",
              axe1_verset: "Le verbe ista'inu ouvre le verset comme un commandement divin. Apres le reproche du verset 44 (vous ordonnez sans pratiquer), ce verset propose la solution : cherchez le secours. Le commandement reconnait que l'obeissance est difficile et que l'homme a besoin d'aide. La preposition bi (par/dans) indique que la patience et la priere sont les instruments du secours — on ne cherche pas le secours dans le vide mais dans des pratiques concretes. Le secours est obtenu par l'effort, pas par l'attente passive.",
              axe2_voisins: "Le verset 44 reprochait l'incoherence entre parole et pratique. Ce verset 45 donne le remede : pour pratiquer, il faut chercher le secours divin par la patience et la priere. Le passage du reproche au remede montre la misericorde du discours coranique — il ne condamne pas sans proposer de solution. Le verset 46 completera en decrivant ceux pour qui le secours est facile : ceux qui savent qu'ils rencontreront leur Seigneur.",
              axe3_sourate: "La racine e-w-n apparait dans la sourate en 2:45 et revient dans la Fatiha (1:5) : iyyaka nasta'in (c'est Toi dont nous cherchons le secours). Le lien entre 1:5 et 2:45 est structurel — la demande de secours de la Fatiha trouve sa concretisation dans 2:45. La sourate al-Baqarah explicite ce que la Fatiha annonce : le secours se cherche dans la patience et la priere.",
              axe4_coherence: "La racine e-w-n apparait 11 fois dans le Coran. La forme X (ista'ana) est la plus frequente. En 1:5, « c'est Toi dont nous cherchons le secours ». En 12:18, « patience est bonne et Dieu est Celui dont on cherche le secours contre ce que vous decrivez ». En 18:95, « aidez-moi par votre force ». Le secours divin est toujours conditionne par un effort humain — Dieu aide ceux qui font l'effort de chercher Son aide.",
              axe5_frequence: "Pour la mission du khalifa, la demande de secours est un acte de lucidite. Le khalifa sait qu'il ne peut pas accomplir sa mission seul — il a besoin du secours divin. Chercher le secours par la patience et la priere est la methode du khalifa pour surmonter les obstacles. L'autonomie absolue est une illusion — le khalifa efficace est celui qui reconnait son besoin de Dieu."
            },
            "Aide/Assistance": {
              status: "probable",
              senses: ["secours", "assistance", "soutien", "aider", "prêter secours", "aide"],
              proof_ctx: "L'aide (ma'una, 'awn) est le sens general de la racine e-w-n. Le contexte utilise la forme X qui specifie la recherche active du secours, pas la reception passive de l'aide. Le sens d'aide est sous-jacent mais c'est la demarche active de chercher qui est au premier plan."
            },
            "Entraide/Réciprocité": {
              status: "nul",
              senses: ["s'entraider", "aide réciproque", "coopération"],
              proof_ctx: "L'entraide (ta'awun, forme VI) implique la reciprocite entre deux parties. Le contexte parle d'une demande de secours adressee a Dieu, pas d'une entraide horizontale entre humains."
            }
          }
        }
      },
      {
        word_key: "sbr", position: 2, sense_chosen: "patience",
        analysis_axes: {
          concept_chosen: "Patience/Endurance",
          concepts: {
            "Patience/Endurance": {
              status: "retenu",
              senses: ["patienter", "endurer", "patience", "retenir"],
              proof_ctx: "Le mot al-sabri est un nom defini genitif de la racine s-b-r. Le Lane's donne « patience, endurance, steadfastness, self-restraint, the restraining of the soul from uneasiness ». Le sabr est fondamentalement l'acte de retenir son ame — la retenir de la plainte, de l'abandon, de la precipitation. C'est un etat interieur qui se manifeste par la constance face a l'epreuve. Le sabr est une force qui empeche l'ame de ceder aux impulsions negatives.",
              axe1_verset: "Le mot al-sabri est le premier instrument du secours. La preposition bi (bi-l-sabri) indique le moyen — on cherche le secours PAR la patience. Le sabr precede la salat dans l'enumeration, ce qui suggere que la patience est un prealable a la priere. Pour prier correctement, il faut d'abord etre patient — retenir son ame de l'agitation et de la dispersion. Le sabr cree les conditions de la priere.",
              axe2_voisins: "Le verset 44 decrivait l'incoherence des fils d'Israel. Ce verset 45 propose la patience comme premier remede. La patience est le contraire de l'oubli de soi (v44) — patienter c'est etre present a soi-meme, retenir son ame, ne pas l'oublier. Le verset 46 completera en montrant que la patience est facile pour ceux qui ont la certitude de la rencontre divine.",
              axe3_sourate: "La racine s-b-r revient frequemment dans la sourate al-Baqarah. En 2:153, « o vous qui croyez, cherchez le secours dans la patience et la priere » — le meme commandement repete avec une adresse differente (les croyants au lieu des fils d'Israel). En 2:155, « annonce la bonne nouvelle aux patients ». En 2:177, le birr inclut « les patients dans la misere et la detresse ». La patience est un pilier de la sourate.",
              axe4_coherence: "La racine s-b-r apparait 103 fois dans le Coran. En 3:200, « patientez, rivaliser de patience, soyez prets ». En 16:127, « patiente, et ta patience n'est que par Dieu ». En 39:10, « les patients recevront leur recompense sans compte ». La patience est la vertu la plus recompensee du Coran — elle est la cle de toute reussite spirituelle.",
              axe5_frequence: "Pour la mission du khalifa, la patience est la vertu premiere. Le khalifa fait face a des epreuves constantes — opposition, incomprehension, tentation. Sans patience, il abandonne sa mission au premier obstacle. La patience est ce qui permet au khalifa de durer dans sa mission malgre la difficulte."
            }
          }
        }
      },
      {
        word_key: "slw", position: 3, sense_chosen: "prière",
        analysis_axes: {
          concept_chosen: "Prière/Invocation",
          concepts: {
            "Prière/Invocation": {
              status: "retenu",
              senses: ["prier", "prière rituelle", "invoquer", "bénir", "lieu de prière"],
              proof_ctx: "Le mot al-salati est un nom defini genitif de la racine s-l-w. Le Lane's donne « prayer, the act of praying, the act of supplication ». Le Lane's indique aussi le sens premier de la racine : « he followed closely ». La salat est l'acte de se tourner vers Dieu avec des paroles et des gestes codifies — c'est un acte de proximite avec Dieu. La salat est structuree (ablutions, inclinaison, prosternation) et reguliere (cinq fois par jour). Elle est l'acte de culte par excellence.",
              axe1_verset: "Le mot al-salati est le second instrument du secours, apres la patience. La conjonction wa (et la priere) lie les deux moyens — ils agissent ensemble. La patience retient l'ame de l'interieur ; la priere la tourne vers Dieu de l'exterieur. Le pronom feminin « elle » (innaha) renvoie a la salat specifiquement — c'est la priere qui est lourde, pas la patience. La priere exige un effort physique et temporel qui la rend pesante pour celui qui n'est pas humble.",
              axe2_voisins: "Le verset 43 ordonnait deja d'accomplir la priere (aqimu al-salata). Ce verset 45 precise que la priere est un moyen de chercher le secours divin. Le passage de l'ordre (v43) a l'explication (v45) montre que la priere n'est pas une fin en soi mais un instrument de secours. Le verset 44 montrait que reciter le Livre ne suffit pas — le verset 45 montre que la priere est le complement necessaire de la connaissance.",
              axe3_sourate: "La racine s-l-w est une des plus frequentes de la sourate al-Baqarah. En 2:3, les pieux sont ceux qui accomplissent la priere. En 2:43, l'ordre d'accomplir la priere. En 2:110, « accomplissez la priere et donnez l'aumone ». En 2:153, la meme formule qu'en 2:45 (cherchez le secours dans la patience et la priere). En 2:238, « soyez assidus aux prieres, surtout la priere mediane ». La priere est le fil conducteur de la sourate.",
              axe4_coherence: "La racine s-l-w apparait 99 fois dans le Coran. En 29:45, « la priere preserve de la turpitude et du blame ». En 11:114, « la priere aux deux extremites du jour et a l'approche de la nuit — les bonnes actions effacent les mauvaises ». En 23:1-2, « ont reussi les croyants, ceux qui sont humbles dans leur priere ». Ce dernier verset fait echo a 2:45 — l'humilite dans la priere est la condition de la reussite.",
              axe5_frequence: "Pour la mission du khalifa, la priere est le lien direct avec Dieu. Le khalifa prie pour maintenir sa connexion avec Celui qui l'a missionne. Sans priere, le khalifa est coupe de sa source d'autorite et de guidance. La priere est le moyen par lequel le khalifa renouvelle quotidiennement son engagement."
            },
            "Proximité/Attachement": {
              status: "nul",
              senses: ["suivre de près"],
              proof_ctx: "La proximite (sila) est un sens premier de la racine s-l-w. Le contexte utilise le mot al-salat dans son sens religieux de priere rituelle — pas dans le sens de proximite physique. La priere est un acte de proximite spirituelle avec Dieu, mais le mot designe l'acte lui-meme."
            }
          }
        }
      },
      {
        word_key: "kbr", position: 5, sense_chosen: "lourd",
        analysis_axes: {
          concept_chosen: "Grandeur/Importance",
          concepts: {
            "Grandeur/Importance": {
              status: "retenu",
              senses: ["être grand", "grandir", "être important", "magnifier"],
              proof_ctx: "Le mot kabiratun est un nom feminin singulier indefini de la racine k-b-r. Le Lane's donne « great, big, large, heavy, weighty, difficult, hard to bear ». La racine k-b-r porte l'idee de ce qui depasse la mesure ordinaire — ce qui est grand, pesant, lourd a porter. Le feminin kabiratun s'accorde avec le pronom ha qui renvoie a la salat (feminine). Le Lane's precise que kabira signifie ici « heavy upon, difficult to bear » — la priere est un poids que tous ne peuvent pas porter.",
              axe1_verset: "Le mot kabiratun qualifie la priere (al-salat). La particule inna (certes) et le lam de renforcement (la-kabiratun) insistent sur la realite de cette lourdeur. La priere EST lourde — c'est un fait reconnu, pas minimise. L'exception (sauf pour les humbles) montre que la lourdeur n'est pas dans la priere elle-meme mais dans la disposition de celui qui prie. Pour l'humble, la priere est legere car son ame est deja tournee vers Dieu.",
              axe2_voisins: "Le verset 44 reprochait l'incoherence. Ce verset 45 admet la difficulte de la coherence — la priere est lourde. Le discours coranique est realiste : il ne minimise pas la difficulte. Mais il donne la cle : l'humilite. Le verset 46 completera en decrivant les humbles comme ceux qui ont la certitude de rencontrer Dieu. La certitude de la rencontre allegue la lourdeur de la priere.",
              axe3_sourate: "La racine k-b-r revient dans la sourate dans d'autres contextes. En 2:143, « c'etait certes une chose lourde (kabiratun) sauf pour ceux que Dieu a guides ». Le meme schema se repete : la chose est lourde sauf pour ceux qui ont la bonne disposition. La sourate reconnait la difficulte et la conditionne a l'etat interieur de la personne.",
              axe4_coherence: "La racine k-b-r apparait 161 fois dans le Coran. Elle designe la grandeur de Dieu (Allahu Akbar), la lourdeur des obligations, et l'orgueil des rejecteurs. En 2:45, c'est le sens de lourdeur — la priere est un poids. En 4:6, « le grand peche ». En 17:31, « c'etait un grand peche ». La racine couvre le spectre de ce qui depasse la mesure — en bien (grandeur) comme en difficulte (lourdeur).",
              axe5_frequence: "Pour la mission du khalifa, la lourdeur de la priere rappelle que la mission n'est pas facile. Le khalifa porte un poids — celui de la responsabilite envers Dieu et les creatures. La lourdeur n'est pas un obstacle mais un revelateur : celui qui trouve la mission legere est humble, celui qui la trouve ecrasante manque d'humilite."
            },
            "Orgueil/Arrogance": {
              status: "nul",
              senses: ["s'enorgueillir", "orgueil"],
              proof_ctx: "L'orgueil (istikbar) est un sens de la racine k-b-r. Le contexte ne parle pas d'orgueil mais de lourdeur de la priere. L'adjectif kabiratun qualifie la difficulte de l'acte, pas une attitude de l'ame."
            },
            "Âge/Ancienneté": {
              status: "nul",
              senses: ["vieillir", "aîné"],
              proof_ctx: "L'age (kibr) est un sens de la racine k-b-r. Le contexte parle de la lourdeur de la priere, pas de l'age ou de l'anciennete."
            }
          }
        }
      },
      {
        word_key: "khaʃe", position: 8, sense_chosen: "être humble",
        analysis_axes: {
          concept_chosen: "Humilité/Soumission",
          concepts: {
            "Humilité/Soumission": {
              status: "retenu",
              senses: ["s'humilier", "être humble", "se soumettre", "recueillement"],
              proof_ctx: "Le mot al-khashi'ina est un participe actif pluriel masculin defini de la racine kh-sh-e. Le Lane's donne « he was, became, humble, submissive, lowly, still, motionless ». Le khushu' est un etat interieur de l'ame qui se reconnait petite devant Dieu. Ce n'est pas une humiliation forcee mais un abaissement volontaire — l'humble sait qu'il est petit et l'accepte. Le participe actif indique un etat permanent — les khashi'un sont ceux qui vivent dans l'humilite, pas ceux qui la pratiquent occasionnellement.",
              axe1_verset: "Le mot al-khashi'ina est l'exception a la regle de la lourdeur. La priere est lourde SAUF POUR LES HUMBLES. L'exception est decisive : la lourdeur de la priere n'est pas intrinseque mais subjective — elle depend de l'etat interieur de celui qui prie. L'humble trouve la priere legere car son ame est deja dans la disposition de la soumission a Dieu. La priere n'est qu'une expression exterieure de ce qu'il vit interieurement. Pour l'arrogant, la priere est lourde car elle exige ce que son ame refuse — l'abaissement.",
              axe2_voisins: "Le verset 44 reprochait l'hypocrisie — ordonner sans pratiquer. Le verset 45 propose le remede (patience et priere) et identifie ceux pour qui ce remede est facile : les humbles. Le verset 46 decrit ces humbles : ceux qui savent qu'ils rencontreront leur Seigneur. La sequence est : reproche (v44) → remede (v45) → portrait de ceux qui reussissent (v46). L'humilite est la cle qui relie les trois versets.",
              axe3_sourate: "La racine kh-sh-e n'apparait qu'une seule fois dans la sourate al-Baqarah (2:45). Mais l'humilite est un theme transversal : en 2:26, Dieu ne rougit pas de proposer des exemples — absence de faux orgueil. En 2:34, Iblis a refuse de se prosterner par orgueil — l'anti-humilite. En 2:206, l'orgueilleux quand on lui dit de craindre Dieu. L'humilite et l'orgueil sont les deux poles qui structurent les destins.",
              axe4_coherence: "La racine kh-sh-e apparait 17 fois dans le Coran. En 23:1-2, « ont reussi les croyants, ceux qui sont humbles (khashi'un) dans leur priere ». En 57:16, « le temps n'est-il pas venu pour ceux qui croient que leurs coeurs s'humilient (takhsha'a) au rappel de Dieu ? ». En 33:35, les hommes et femmes humbles (khashi'in wa khashi'at) sont recompenses. Le khushu' est toujours presente comme la disposition interieure qui rend possible la vraie priere.",
              axe5_frequence: "Pour la mission du khalifa, l'humilite est la qualite essentielle. Le khalifa humble reconnait qu'il est un representant, pas le Seigneur. Son autorite vient de Dieu, pas de lui-meme. L'humilite rend la mission legere car le khalifa humble ne porte pas le poids de son ego — il laisse Dieu agir a travers lui."
            },
            "Discrétion": {
              status: "nul",
              senses: ["baisser la voix"],
              proof_ctx: "La discretion (khafad al-sawt) est un sens derive de kh-sh-e. Le contexte parle d'un etat global de l'ame (humilite devant Dieu), pas d'un simple acte vocal. Le khushu' englobe le corps, l'ame et la voix — le reduire a la voix basse serait trop reducteur."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:46
  // verse_id=53, analysis_id=408
  // =====================================================
  46: {
    verse_id: 53,
    analysis_id: 408,
    translation_arab: "Ceux qui pensent qu'ils rencontreront leur Seigneur et que vers Lui ils retourneront.",
    full_translation: "Ceux qui pensent qu'ils rencontreront leur Seigneur et que c'est à Lui qu'ils retourneront.",
    translation_explanation: `§DEMARCHE§
Ce verset decrit les humbles (al-khashi'in) mentionnes au verset 45 — il les identifie par leur certitude interieure. Le verbe **yazunnuna** est un inaccompli 3MP de la racine z-n-n. Le Lane's donne « he thought, he supposed, he believed, he was of opinion ». Le zann a deux sens dans le Coran : le doute (supposition) et la certitude (conviction forte). En contexte de rencontre avec Dieu, les exegetes ont retenu le sens de certitude — ils sont convaincus qu'ils rencontreront leur Seigneur. Le mot **mulaqu** est un participe actif forme III pluriel de la racine l-q-y. Le Lane's donne « he met, he encountered, he found ». La forme III (laqiya/laaqa) indique la rencontre mutuelle — les deux parties se font face. Le participe actif pluriel (mulaquu) designe ceux qui sont dans l'etat de rencontrer — la rencontre est certaine. Le mot **rabbihim** est un nom defini genitif de la racine r-b-b avec suffixe pronominal 3MP. Le Lane's donne « lord, master, owner, possessor, one who nourishes and sustains ». Le Rabb est le Seigneur qui possede, eleve et entretient — c'est la relation de dependance totale de la creature envers son Createur. Le mot **raji'una** est un participe actif pluriel de la racine r-j-e. Le Lane's donne « he returned, he went back, he reverted ». Le retour (ruju') est le mouvement inverse de la venue au monde — on revient vers l'origine. Le participe actif indique un etat permanent de retour — ils sont dans la disposition de ceux qui retournent.

§JUSTIFICATION§
**pensent** — Le sens retenu est « penser ». Le verbe yazunnuna de la racine z-n-n designe ici la conviction forte, la certitude interieure. L'alternative « supposer » est ecartee car le contexte parle de gens humbles devant Dieu — leur « pensee » n'est pas un doute mais une certitude. Le Lane's reconnait que zann peut signifier « il est certain » quand le contexte l'exige.

**rencontreront** — Le sens retenu est « rencontrer ». Le participe mulaquu designe la rencontre face a face avec le Seigneur. L'alternative « jeter » est ecartee car hors contexte — la racine l-q-y a le sens de rencontre quand elle est en forme III (mulaaqa).

**Seigneur** — Le sens retenu est « seigneur ». Le mot rabbihim designe Celui qui possede, eleve et entretient. L'alternative « faire croitre » est ecartee car le contexte utilise le mot comme nom d'attribut divin, pas comme verbe d'action.

**retourneront** — Le sens retenu est « retourner ». Le participe raji'una designe le mouvement de retour vers l'origine. L'alternative « repeter » est ecartee car le contexte parle d'un retour eschatologique vers Dieu, pas d'une repetition.

§CRITIQUE§
**pensent vs sont certains** — Le Lane's donne pour zanna « he thought, supposed ». Le sens de « etre certain » est un usage coranique specifique ou zann designe une conviction interieure forte, pas un doute. « Pensent » est retenu car il preserve l'ambiguite lexicale du verbe — le lecteur comprend qu'il s'agit d'une pensee-certitude grace au contexte (rencontre avec Dieu). Les traductions courantes donnent « pensent ».
**Seigneur vs Maitre** — Le Lane's donne pour rabb « lord, master, owner ». « Seigneur » est retenu car il porte a la fois l'autorite et la bienveillance — le Rabb est celui qui gouverne ET qui prend soin. « Maitre » serait trop sec et autoritaire.
**retourneront vs reviendront** — Le Lane's donne pour raja'a « he returned ». « Retourner » et « revenir » sont equivalents — les deux portent l'idee du mouvement inverse. « Retourner » est retenu car il est plus formel et souligne le caractere definitif du retour eschatologique.`,
    segments: [
      { fr: "ceux qui", phon: "alladhina", arabic: "ٱلَّذِينَ", is_particle: true, position: 1 },
      { fr: "pensent", pos: "verbe", phon: "yazunnuna", arabic: "يَظُنُّونَ", word_key: "znn", is_particle: false, sense_retenu: "penser", position: 2 },
      { fr: "qu'ils", phon: "annahum", arabic: "أَنَّهُم", is_particle: true, position: 3 },
      { fr: "rencontreront", pos: "nom", phon: "mulaquu", arabic: "مُّلَٰقُوا۟", word_key: "lqy", is_particle: false, sense_retenu: "rencontrer", position: 4 },
      { fr: "leur Seigneur", pos: "nom", phon: "rabbihim", arabic: "رَبِّهِمْ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 5 },
      { fr: "et que", phon: "wa-annahum", arabic: "وَأَنَّهُمْ", is_particle: true, position: 6 },
      { fr: "vers Lui", phon: "ilayhi", arabic: "إِلَيْهِ", is_particle: true, position: 7 },
      { fr: "retourneront", pos: "nom", phon: "raji'una", arabic: "رَٰجِعُونَ", word_key: "rje", is_particle: false, sense_retenu: "retourner", position: 8 }
    ],
    words: [
      {
        word_key: "znn", position: 2, sense_chosen: "penser",
        analysis_axes: {
          concept_chosen: "Pensée/Supposition",
          concepts: {
            "Pensée/Supposition": {
              status: "retenu",
              senses: ["penser", "supposer", "croire", "soupçonner", "opinion"],
              proof_ctx: "Le verbe yazunnuna est un inaccompli 3MP de la racine z-n-n. Le Lane's donne « he thought, he supposed, he believed, he opined ». Le zann peut designer soit le doute (supposition incertaine) soit la certitude (conviction ferme) selon le contexte. En 2:46, le zann porte sur la rencontre avec Dieu — un objet de certitude pour les croyants. Les exegetes classiques comprennent ici « ils sont certains, convaincus ». Le Lane's confirme que zann peut signifier « he was certain, sure » dans certains contextes.",
              axe1_verset: "Le verbe yazunnuna introduit la description des humbles (al-khashi'in, v45). Ils « pensent » — c'est-a-dire ils sont intimement convaincus — qu'ils rencontreront leur Seigneur et retourneront vers Lui. Cette certitude est ce qui rend la priere legere pour eux. Quand on sait qu'on va rencontrer Dieu face a face, la priere n'est plus un poids mais une preparation. Le zann ici n'est pas un doute — c'est une conviction qui habite l'ame et transforme le rapport a l'adoration.",
              axe2_voisins: "Le verset 45 disait que la priere est lourde sauf pour les humbles. Ce verset 46 explique pourquoi les humbles trouvent la priere legere : parce qu'ils pensent (sont certains) qu'ils rencontreront leur Seigneur. La certitude de la rencontre est la source de l'humilite et la cle de la legerete de la priere. Le verset 47 passera a un autre theme (rappel des bienfaits aux fils d'Israel), ce qui fait de 44-46 un bloc coherent : reproche → remede → condition du remede.",
              axe3_sourate: "La racine z-n-n revient dans la sourate al-Baqarah dans d'autres contextes. En 2:78, « ils ne font que supposer (yazunnuna) ». En 2:230, « s'ils pensent (zanna) qu'ils respecteront les limites de Dieu ». Le zann de 2:78 est une supposition vaine — le zann de 2:46 est une certitude ferme. La sourate utilise la meme racine pour les deux extremes — la valeur du zann depend de son objet et de celui qui l'eprouve.",
              axe4_coherence: "La racine z-n-n apparait 69 fois dans le Coran. En 69:20, « je pensais (zannantu) que je rencontrerais mon compte ». En 18:53, « les criminels verront le feu et penseront (fa-zannuu) qu'ils y tomberont ». En 6:116, « la plupart ne suivent que le zann (la conjecture) ». Le Coran distingue le zann comme conjecture sans fondement (condamne) et le zann comme certitude interieure (valorise). Le contexte determine toujours le sens.",
              axe5_frequence: "Pour la mission du khalifa, la certitude de la rencontre avec Dieu est le moteur de la mission. Le khalifa qui sait qu'il retournera vers Dieu et Lui rendra des comptes agit avec responsabilite et humilite. La certitude de la rencontre empeche l'insouciance et la negligence — elle maintient le khalifa dans l'etat de vigilance permanente."
            }
          }
        }
      },
      {
        word_key: "lqy", position: 4, sense_chosen: "rencontrer",
        analysis_axes: {
          concept_chosen: "Rencontre/Face à face",
          concepts: {
            "Rencontre/Face à face": {
              status: "retenu",
              senses: ["rencontrer", "trouver", "recevoir"],
              proof_ctx: "Le mot mulaquu est un participe actif forme III pluriel de la racine l-q-y. Le Lane's donne « he met, he encountered, he found, he came face to face with ». La forme III (mulaaqa) designe la rencontre mutuelle — les deux parties se font face. Le participe actif pluriel (mulaquu rabbihim) signifie « ceux qui sont dans l'etat de rencontrer leur Seigneur ». La rencontre avec Dieu est le moment eschatologique supreme — le moment ou la creature se tient devant son Createur pour le compte final.",
              axe1_verset: "Le participe mulaquu est le coeur de la certitude des humbles. Ils « pensent qu'ils rencontreront leur Seigneur » — la rencontre est l'objet de leur certitude. Cette rencontre n'est pas une metaphore — c'est un evenement reel qui aura lieu au Jour du Jugement. La certitude de cette rencontre transforme leur vie presente : ils prient, patientent et s'humilient parce qu'ils se preparent a rencontrer Dieu. La rencontre est le horizon qui oriente tout leur comportement.",
              axe2_voisins: "Le verset 44 montrait des gens qui oublient leurs ames. Le verset 46 montre des gens qui n'oublient pas — ils gardent a l'esprit la rencontre avec leur Seigneur. L'opposition est structurelle : oublier (v44) vs penser/etre certain (v46). Les fils d'Israel oublient et les humbles se souviennent. La rencontre avec Dieu est le rappel ultime qui empeche l'oubli.",
              axe3_sourate: "La racine l-q-y revient dans la sourate pour la rencontre eschatologique. En 2:223, « sachez que vous Le rencontrerez (mulaquhu) ». En 2:249, les fideles qui traversent le fleuve « pensaient qu'ils rencontreraient Dieu ». La sourate utilise la rencontre avec Dieu comme critere de distinction entre les croyants et les insouciants.",
              axe4_coherence: "La racine l-q-y apparait 146 fois dans le Coran. En 6:31, « ceux qui dementent la rencontre avec Dieu (liqa'a Allah) ». En 18:110, « que celui qui espere la rencontre avec son Seigneur fasse de bonnes oeuvres ». En 29:5, « la rencontre avec Dieu viendra assurement ». La rencontre avec Dieu est un theme coranique majeur — elle est le point de convergence de toutes les vies humaines.",
              axe5_frequence: "Pour la mission du khalifa, la rencontre avec Dieu est le rendement de comptes final. Le khalifa sait qu'il rendra compte de sa gestion devant Dieu. Cette certitude l'empeche de tricher, de negliger ou de trahir sa mission. La rencontre est le tribunal devant lequel le khalifa passera — et c'est ce tribunal qui donne sens a tous ses actes."
            },
            "Jeter/Lancer": {
              status: "nul",
              senses: ["jeter", "lancer"],
              proof_ctx: "Le lancer (alqa) est un sens de la racine l-q-y. Le contexte parle de rencontre avec Dieu (mulaquu rabbihim), pas d'un lancer d'objet. La forme III (mulaaqa) designe la rencontre face a face."
            }
          }
        }
      },
      {
        word_key: "rbb", position: 5, sense_chosen: "seigneur",
        analysis_axes: {
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["celui qui possède", "seigneur", "maître", "gouverner", "propriétaire", "celui qui élève", "celui qui entretient"],
              proof_ctx: "Le mot rabbihim est un nom defini genitif de la racine r-b-b avec suffixe pronominal 3MP. Le Lane's donne « the lord, the master, the possessor, the owner, the one who nourishes, sustains, fosters ». Le Rabb est Celui qui possede, gouverne et prend soin de Sa creation. La rubabiyya est une autorite bienveillante — le Rabb ne fait pas que commander, Il eleve et entretient. Le pronom « leur » (him) lie les humbles a leur Seigneur — c'est LEUR Rabb, pas un Rabb etranger. La relation est personnelle.",
              axe1_verset: "Le mot rabbihim est l'objet de la rencontre (mulaquu rabbihim). Les humbles sont certains de rencontrer LEUR SEIGNEUR — pas un juge anonyme mais Celui qui les a crees, eleves et entretenus. La relation de rubabiyya donne a la rencontre une dimension intime — c'est le retour de la creature vers son Createur-Educateur. Le possessif « leur » personnalise la relation et la rend moins effrayante — ce n'est pas un etranger qu'ils rencontrent mais Celui qui les connait depuis toujours.",
              axe2_voisins: "Le verset 40 ouvrait la section par « Ya bani Isra'il » et mentionnait les bienfaits accordes. Ce verset 46 clot le bloc 44-46 par la mention du Rabb — Celui qui a accorde ces bienfaits. La progression est : Dieu rappelle ses bienfaits (v40) → Il reproche l'incoherence (v44) → Il propose le remede (v45) → Il decrit ceux qui reussissent par leur lien avec le Rabb (v46). Le Rabb est le point de depart et le point d'arrivee.",
              axe3_sourate: "Le mot Rabb est le nom divin le plus frequent de la sourate al-Baqarah. En 2:21, « adorez votre Rabb ». En 2:26, « que veut Dieu par cet exemple — votre Rabb ? ». En 2:37, « Adam recut de son Rabb des paroles ». En 2:124, « quand son Rabb eprouva Abraham ». Le Rabb est le nom divin de la relation personnelle — chaque fois qu'il est mentionne, c'est dans un contexte de lien intime entre Dieu et Sa creature.",
              axe4_coherence: "La racine r-b-b apparait 980 fois dans le Coran — c'est la racine la plus frequente apres le nom Allah. Le Rabb est mentionne dans presque chaque page du Coran. En 1:2, « louange a Dieu, Rabb des mondes ». En 55:27, « subsiste la Face de ton Rabb ». En 89:27-28, « o ame apaisee, retourne vers ton Rabb satisfaite et agreable ». Ce dernier verset fait echo a 2:46 — le retour vers le Rabb est le destin ultime de l'ame humble.",
              axe5_frequence: "Pour la mission du khalifa, le Rabb est Celui qui l'a nomme. Le khalifa agit au nom de son Rabb et sous Son autorite. La conscience du Rabb est ce qui donne sa legitimite et ses limites a la khilafa. Le khalifa n'est pas autonome — il est dependant de son Rabb comme le mot « rabbihim » l'indique."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["développer", "augmenter", "croître", "excès", "colline", "éminence", "faire grandir", "nourrir"],
              proof_ctx: "La croissance (rabba) est le sens premier de la racine r-b-b. Le Rabb est etymologiquement Celui qui fait croitre. Le contexte utilise le mot comme titre divin (leur Seigneur), mais le sens de croissance est sous-jacent — le Rabb est Celui qui fait grandir Ses creatures."
            },
            "Éducation/Accompagnement": {
              status: "probable",
              senses: ["élever un enfant", "former", "accompagner la croissance", "éduquer"],
              proof_ctx: "L'education (tarbiya) est un sens derive de r-b-b. Le Rabb est Celui qui eleve et eduque Sa creation. Le contexte utilise le mot dans le sens de Seigneur, mais la dimension educative est incluse dans la rubabiyya — le Rabb ne fait pas que posseder, Il accompagne la croissance."
            }
          }
        }
      },
      {
        word_key: "rje", position: 8, sense_chosen: "retourner",
        analysis_axes: {
          concept_chosen: "Retour/Réversion",
          concepts: {
            "Retour/Réversion": {
              status: "retenu",
              senses: ["retourner", "revenir", "réverter", "faire revenir", "renvoyer"],
              proof_ctx: "Le mot raji'una est un participe actif pluriel de la racine r-j-e. Le Lane's donne « he returned, he went back, he reverted ». Le ruju' est le mouvement de retour vers le point de depart — on revient la d'ou l'on est venu. Le participe actif (raji'un) designe celui qui est dans l'etat du retour — il est deja en chemin. Le retour vers Dieu (ilayhi raji'una) est le destin de toute creature — on vient de Dieu et on retourne vers Dieu.",
              axe1_verset: "Le mot raji'una complete et renforce mulaquu. Le verset dit deux choses : ils rencontreront leur Seigneur ET ils retourneront vers Lui. La rencontre est le face-a-face ; le retour est le mouvement. Les deux sont complementaires — on retourne vers Dieu pour Le rencontrer. Le pronom « Lui » (ilayhi) indique la direction du retour — c'est un retour orient, pas un retour aveugle. La certitude du retour donne sens a la vie terrestre — c'est un voyage aller dont le retour est assure.",
              axe2_voisins: "Le verset 44 montrait des gens tournes vers l'exterieur (les autres). Le verset 46 montre des gens tournes vers leur destination finale (Dieu). Le retour vers Dieu corrige l'inversion des priorites — au lieu de s'occuper des autres sans s'occuper de soi, les humbles sont tournes vers leur destin final. Le retour vers Dieu reordonne les priorites : d'abord son ame, puis les autres.",
              axe3_sourate: "La racine r-j-e revient dans la sourate al-Baqarah. En 2:28, « puis vers Lui vous serez retournes (turja'una) ». En 2:245, « vers Lui vous serez retournes ». En 2:281, « craignez le jour ou vous serez retournes vers Dieu ». Le retour vers Dieu est un motif recurrent de la sourate — il encadre toute l'experience humaine entre la venue et le retour.",
              axe4_coherence: "La racine r-j-e apparait 104 fois dans le Coran. En 2:156, « nous sommes a Dieu et vers Lui nous retournons (inna lillahi wa inna ilayhi raji'una) ». En 6:36, « puis vers Lui ils seront retournes ». En 21:35, « vers Nous vous serez retournes ». Le retour est universel — toute creature retourne vers Dieu sans exception. La formule « ilayhi raji'una » est l'une des plus connues du Coran.",
              axe5_frequence: "Pour la mission du khalifa, le retour vers Dieu est l'echeance finale. Le khalifa sait qu'il retournera vers Dieu et rendra des comptes. Cette certitude l'oblige a la responsabilite et a l'integrite. Le retour n'est pas une menace mais un rendez-vous — le khalifa se prepare a ce rendez-vous par ses actes quotidiens."
            },
            "Pluie/Renouvellement": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "La pluie (raj') est un sens de la racine r-j-e (l'eau qui retourne du ciel). Le contexte parle du retour eschatologique vers Dieu, pas du cycle de la pluie."
            },
            "Répétition": {
              status: "nul",
              senses: ["répéter", "réponse"],
              proof_ctx: "La repetition (raj') est un sens de la racine r-j-e. Le contexte parle d'un retour unique et definitif vers Dieu, pas d'une repetition. Le retour eschatologique est irreversible."
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
  // amr (id=428) — ordonner
  { analysis_id: 428, phrases: [
    { sense: "ordonner", arabic: "أَمَرَنِي المُدِيرُ بِإِنْهَاءِ التَّقْرِيرِ", phon: "amarani al-mudiru bi-inha'i al-taqriri", french: "Le directeur m'a ordonne de terminer le rapport." },
    { sense: "commander", arabic: "أَمَرَ الطَّبِيبُ بِالرَّاحَةِ", phon: "amara al-tabibu bi-al-rahati", french: "Le medecin a ordonne le repos." },
    { sense: "ordonner", arabic: "أْمُرْ بِالمَعْرُوفِ فِي حَيَاتِكَ", phon: "u'mur bi-l-ma'rufi fi hayatika", french: "Ordonne le bien dans ta vie." }
  ]},
  // nws (id=303) — gens
  { analysis_id: 303, phrases: [
    { sense: "gens", arabic: "النَّاسُ مُخْتَلِفُونَ فِي آرَائِهِمْ", phon: "al-nasu mukhtalifuna fi ara'ihim", french: "Les gens sont differents dans leurs opinions." },
    { sense: "êtres humains", arabic: "خُلِقَ النَّاسُ مِنْ نَفْسٍ وَاحِدَةٍ", phon: "khuliqa al-nasu min nafsin wahidatin", french: "Les etres humains ont ete crees d'une seule ame." },
    { sense: "gens", arabic: "أَحَبُّ النَّاسِ إِلَيَّ أَنْفَعُهُمْ لِلنَّاسِ", phon: "ahabbu al-nasi ilayya anfa'uhum li-l-nasi", french: "Les gens les plus aimes sont ceux qui sont les plus utiles aux gens." }
  ]},
  // brr (id=509) — piete
  { analysis_id: 509, phrases: [
    { sense: "piété", arabic: "البِرُّ حُسْنُ الخُلُقِ", phon: "al-birru husnu al-khuluqi", french: "La piete est le bon caractere." },
    { sense: "bonté", arabic: "بِرُّ الوَالِدَيْنِ وَاجِبٌ", phon: "birru al-walidayni wajibun", french: "La bonte envers les parents est un devoir." },
    { sense: "être pieux", arabic: "اللَّهُمَّ اجْعَلْنَا مِنَ الأَبْرَارِ", phon: "allahumma ij'alna min al-abrari", french: "Seigneur, fais-nous parmi les pieux." }
  ]},
  // nsy (id=511) — oublier
  { analysis_id: 511, phrases: [
    { sense: "oublier", arabic: "نَسِيتُ مَوْعِدِي مَعَ الطَّبِيبِ", phon: "nasitu maw'idi ma'a al-tabibi", french: "J'ai oublie mon rendez-vous chez le medecin." },
    { sense: "négliger", arabic: "لَا تَنْسَ ذِكْرَ اللَّهِ", phon: "la tansa dhikra Allah", french: "Ne neglige pas le rappel de Dieu." },
    { sense: "oublier", arabic: "مَنْ نَسِيَ نَفْسَهُ خَسِرَ", phon: "man nasiya nafsahu khasira", french: "Celui qui s'oublie lui-meme a perdu." }
  ]},
  // nfs (id=298) — ame
  { analysis_id: 298, phrases: [
    { sense: "âme", arabic: "النَّفْسُ أَمَّارَةٌ بِالسُّوءِ", phon: "al-nafsu ammaratun bi-l-su'i", french: "L'ame est certes ordonnatrice du mal." },
    { sense: "soi-même", arabic: "اعْرِفْ نَفْسَكَ قَبْلَ غَيْرِكَ", phon: "i'rif nafsaka qabla ghayrika", french: "Connais-toi toi-meme avant les autres." },
    { sense: "personne", arabic: "كُلُّ نَفْسٍ ذَائِقَةُ المَوْتِ", phon: "kullu nafsin dha'iqatu al-mawti", french: "Toute personne goutera la mort." }
  ]},
  // tlw (id=730) — reciter
  { analysis_id: 730, phrases: [
    { sense: "réciter", arabic: "يَتْلُو القُرْآنَ كُلَّ صَبَاحٍ", phon: "yatlu al-Qur'ana kulla sabahin", french: "Il recite le Coran chaque matin." },
    { sense: "lire", arabic: "اتْلُ عَلَيْنَا مَا كَتَبْتَ", phon: "utlu 'alayna ma katabta", french: "Lis-nous ce que tu as ecrit." },
    { sense: "réciter", arabic: "تَلَا الشَّاهِدُ شَهَادَتَهُ أَمَامَ القَاضِي", phon: "tala al-shahidu shahadatahu amama al-qadi", french: "Le temoin a recite son temoignage devant le juge." }
  ]},
  // ktb (id=275) — livre
  { analysis_id: 275, phrases: [
    { sense: "écrire", arabic: "كَتَبَ رِسَالَةً طَوِيلَةً لِصَدِيقِهِ", phon: "kataba risalatan tawilatan li-sadiqihi", french: "Il a ecrit une longue lettre a son ami." },
    { sense: "livre", arabic: "هَذَا الكِتَابُ مُفِيدٌ جِدًّا", phon: "hadha al-kitabu mufidun jiddan", french: "Ce livre est tres utile." },
    { sense: "écrire", arabic: "اكْتُبْ اسْمَكَ هُنَا", phon: "uktub ismaka huna", french: "Ecris ton nom ici." }
  ]},
  // eql (id=513) — raisonner
  { analysis_id: 513, phrases: [
    { sense: "comprendre", arabic: "اعْقِلْ مَا أَقُولُ لَكَ", phon: "i'qil ma aqulu laka", french: "Comprends ce que je te dis." },
    { sense: "raison", arabic: "العَقْلُ نِعْمَةٌ مِنَ اللَّهِ", phon: "al-'aqlu ni'matun min Allah", french: "La raison est un bienfait de Dieu." },
    { sense: "discernement", arabic: "يَعْقِلُ الفَرْقَ بَيْنَ الحَقِّ وَالبَاطِلِ", phon: "ya'qilu al-farqa bayna al-haqqi wa-l-batili", french: "Il discerne la difference entre le vrai et le faux." }
  ]},
  // ewn (id=260) — chercher le secours
  { analysis_id: 260, phrases: [
    { sense: "demander l'aide", arabic: "اسْتَعَنْتُ بِاللَّهِ فِي كُلِّ أُمُورِي", phon: "ista'antu bi-llahi fi kulli umuri", french: "J'ai cherche le secours de Dieu dans toutes mes affaires." },
    { sense: "chercher le secours", arabic: "اسْتَعِنْ بِالصَّبْرِ عَلَى الصُّعُوبَاتِ", phon: "ista'in bi-l-sabri 'ala al-su'ubati", french: "Cherche le secours dans la patience face aux difficultes." },
    { sense: "solliciter l'assistance", arabic: "اسْتَعَانَ بِأَصْدِقَائِهِ لِإِتْمَامِ المَشْرُوعِ", phon: "ista'ana bi-asdiqa'ihi li-itmami al-mashru'i", french: "Il a sollicite l'aide de ses amis pour terminer le projet." }
  ]},
  // sbr (id=502) — patience
  { analysis_id: 502, phrases: [
    { sense: "patienter", arabic: "اصْبِرْ فَإِنَّ الفَرَجَ قَرِيبٌ", phon: "isbir fa-inna al-faraja qaribun", french: "Patiente, car le soulagement est proche." },
    { sense: "endurer", arabic: "صَبَرَ عَلَى المَرَضِ حَتَّى شُفِيَ", phon: "sabara 'ala al-maradi hatta shufiya", french: "Il a endure la maladie jusqu'a la guerison." },
    { sense: "patience", arabic: "الصَّبْرُ مِفْتَاحُ الفَرَجِ", phon: "al-sabru miftahu al-faraji", french: "La patience est la cle du soulagement." }
  ]},
  // slw (id=283) — priere
  { analysis_id: 283, phrases: [
    { sense: "prier", arabic: "صَلَّى الفَجْرَ فِي المَسْجِدِ", phon: "salla al-fajra fi al-masjidi", french: "Il a prie l'aube a la mosquee." },
    { sense: "prière rituelle", arabic: "الصَّلَاةُ عِمَادُ الدِّينِ", phon: "al-salatu 'imadu al-dini", french: "La priere est le pilier de la religion." },
    { sense: "prier", arabic: "صَلِّ عَلَى وَقْتِهَا", phon: "salli 'ala waqtiha", french: "Prie a son heure." }
  ]},
  // kbr (id=451) — lourd/grand
  { analysis_id: 451, phrases: [
    { sense: "être grand", arabic: "اللَّهُ أَكْبَرُ مِنْ كُلِّ شَيْءٍ", phon: "Allahu akbaru min kulli shay'in", french: "Dieu est plus grand que toute chose." },
    { sense: "être important", arabic: "هَذَا أَمْرٌ كَبِيرٌ يَحْتَاجُ تَفْكِيرًا", phon: "hadha amrun kabirun yahtaju tafkiran", french: "C'est une affaire importante qui demande reflexion." },
    { sense: "grandir", arabic: "كَبُرَ الوَلَدُ وَأَصْبَحَ رَجُلًا", phon: "kabura al-waladu wa-asbaha rajulan", french: "L'enfant a grandi et est devenu un homme." }
  ]},
  // khaʃe (id=503) — humble
  { analysis_id: 503, phrases: [
    { sense: "être humble", arabic: "خَشَعَ قَلْبُهُ عِنْدَ سَمَاعِ القُرْآنِ", phon: "khasha'a qalbuhu 'inda sama'i al-Qur'ani", french: "Son coeur s'est humilie en entendant le Coran." },
    { sense: "recueillement", arabic: "الخُشُوعُ فِي الصَّلَاةِ رُوحُهَا", phon: "al-khushu'u fi al-salati ruhuha", french: "Le recueillement dans la priere est son ame." },
    { sense: "se soumettre", arabic: "خَشَعَتِ الأَرْضُ ثُمَّ أَحْيَاهَا اللَّهُ بِالمَاءِ", phon: "khasha'ati al-ardu thumma ahyaha Allahu bi-l-ma'i", french: "La terre s'est soumise puis Dieu l'a revivifiee avec l'eau." }
  ]},
  // znn (id=501) — penser
  { analysis_id: 501, phrases: [
    { sense: "penser", arabic: "أَظُنُّ أَنَّ المَطَرَ سَيَنْزِلُ غَدًا", phon: "azunnu anna al-matara sa-yanzilu ghadan", french: "Je pense que la pluie tombera demain." },
    { sense: "croire", arabic: "ظَنَنْتُ أَنَّكَ لَنْ تَأْتِيَ", phon: "zanantu annaka lan ta'tiya", french: "Je croyais que tu ne viendrais pas." },
    { sense: "supposer", arabic: "لَا تَظُنَّ السُّوءَ بِالنَّاسِ", phon: "la tazunna al-su'a bi-l-nasi", french: "Ne suppose pas le mal des gens." }
  ]},
  // lqy (id=327) — rencontrer
  { analysis_id: 327, phrases: [
    { sense: "rencontrer", arabic: "لَقِيتُ صَدِيقًا قَدِيمًا فِي السُّوقِ", phon: "laqitu sadiqan qadiman fi al-suqi", french: "J'ai rencontre un vieil ami au marche." },
    { sense: "trouver", arabic: "لَقِيَ الجَوَابَ بَعْدَ بَحْثٍ طَوِيلٍ", phon: "laqiya al-jawaba ba'da bahthin tawilin", french: "Il a trouve la reponse apres une longue recherche." },
    { sense: "rencontrer", arabic: "سَنَلْقَى اللَّهَ يَوْمَ القِيَامَةِ", phon: "sanalqa Allaha yawma al-qiyamati", french: "Nous rencontrerons Dieu le Jour de la Resurrection." }
  ]},
  // rbb (id=253) — seigneur
  { analysis_id: 253, phrases: [
    { sense: "seigneur", arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ", phon: "rabbi ighfir li wa li-walidayya", french: "Seigneur, pardonne-moi et a mes parents." },
    { sense: "celui qui élève", arabic: "اللَّهُ رَبُّ العَالَمِينَ", phon: "Allahu rabbu al-'alamina", french: "Dieu est le Seigneur des mondes." },
    { sense: "maître", arabic: "رَبُّ البَيْتِ أَكْرَمَ ضُيُوفَهُ", phon: "rabbu al-bayti akrama duyufahu", french: "Le maitre de maison a honore ses invites." }
  ]},
  // rje (id=336) — retourner
  { analysis_id: 336, phrases: [
    { sense: "retourner", arabic: "رَجَعَ إِلَى بَيْتِهِ بَعْدَ العَمَلِ", phon: "raja'a ila baytihi ba'da al-'amali", french: "Il est retourne chez lui apres le travail." },
    { sense: "revenir", arabic: "ارْجِعُوا إِلَى اللَّهِ قَبْلَ فَوَاتِ الأَوَانِ", phon: "irji'u ila Allahi qabla fawati al-awani", french: "Revenez vers Dieu avant qu'il ne soit trop tard." },
    { sense: "retourner", arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", phon: "inna lillahi wa inna ilayhi raji'una", french: "Nous sommes a Dieu et vers Lui nous retournons." }
  ]}
];

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de données'); return; }

  if (!data.analysis_id) {
    const { data: va } = await supabase
      .from('verse_analyses')
      .select('id')
      .eq('verse_id', data.verse_id)
      .single();
    if (!va) { console.log('  ERREUR: pas de verse_analyses pour verse_id=' + data.verse_id); return; }
    data.analysis_id = va.id;
    console.log(`  analysis_id=${data.analysis_id}`);
  } else {
    console.log(`  analysis_id=${data.analysis_id} (preset)`);
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

  const verseIds = [51, 52, 53];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 44 A 46 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 44; v <= 46; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V44-46 TERMINEE — ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
