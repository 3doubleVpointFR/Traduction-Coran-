const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 151
// verse_id=158, analysis_id=519
// "De meme que Nous avons envoye parmi vous un messager
//  de chez vous qui vous recite Nos versets, vous purifie,
//  vous enseigne le Livre et la Sagesse, et vous enseigne
//  ce que vous ne saviez pas."
// =====================================================

const verseData = {
  151: {
    verse_id: 158,
    analysis_id: 519,
    translation_arab: "De meme que Nous avons envoye parmi vous un envoye de chez vous, qui vous recite Nos signes, vous purifie, vous enseigne le Livre et la sagesse, et vous enseigne ce que vous ne saviez pas.",
    full_translation: "De meme que Nous avons envoye parmi vous un messager de chez vous qui vous recite Nos versets, vous purifie, vous enseigne le Livre et la Sagesse, et vous enseigne ce que vous ne saviez pas.",
    translation_explanation: `§DEMARCHE§
Le verset est une proposition comparative introduite par **kama** (de meme que). Le verbe principal **arsalna** est un accompli 1PL de la forme IV de la racine r-s-l. Le Lane's donne pour la forme IV : envoyer, deputer, mandater. L'accompli marque que l'envoi est un fait acheve. Le pronom « na » (Nous) est le pronom de majeste divine — Dieu parle de Lui-meme au pluriel. La preposition **fi-kum** (parmi vous) situe l'envoye dans la communaute. Le mot **rasulan** est un nom masculin singulier indefini accusatif de la racine r-s-l. Le Lane's donne : envoye, messager, celui qui est mande. L'indefini marque qu'il s'agit d'un envoye parmi les envoyes de Dieu. La preposition **min-kum** (de chez vous, d'entre vous) indique que l'envoye est issu de la communaute elle-meme. Le verbe **yatlu** est un inaccompli 3MS de la racine t-l-w. Le Lane's donne : reciter, lire a haute voix, suivre. L'inaccompli marque une action continue et repetee — la recitation est un acte permanent de l'envoye. Le complement **ayatina** (Nos signes) est un nom pluriel feminin accusatif de la racine a-y-t avec pronom possessif 1PL. Le Lane's donne : signe, preuve, miracle, verset. L'attribution a Dieu (« Nos signes ») marque l'origine divine. Le verbe **yuzakkikum** est un inaccompli 3MS de la forme II de la racine z-k-w avec pronom suffixe 2MP. Le Lane's donne pour la forme II : purifier, rendre pur, faire croitre en bien. La forme II intensifie — la purification est active et deliberee. Le pronom suffixe « kum » (vous) marque que les destinataires sont les objets directs de la purification. Le verbe **yu'allimukum** est un inaccompli 3MS de la forme II de la racine '-l-m avec pronom suffixe 2MP. Le Lane's donne pour la forme II : enseigner, faire savoir, instruire. La forme II transforme le savoir en acte de transmission — celui qui sait fait savoir a l'autre. Le mot **al-kitaba** est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecriture revelee. L'article defini marque qu'il s'agit du Livre connu — l'ecriture revelee. Le mot **al-hikmata** est un nom feminin singulier defini accusatif de la racine h-k-m. Le Lane's donne : sagesse, connaissance juste des choses. L'article defini marque la Sagesse comme entite connue et definie. Le second **yu'allimukum** reprend le meme verbe — il introduit un second objet de l'enseignement : ce que vous ne saviez pas. Le verbe **takunu** est un inaccompli 2MP de la racine k-w-n. Le Lane's donne : etre. C'est un verbe incomplet (kana naqis) qui porte la negation « lam » — lam takunu = vous n'etiez pas. Le verbe **ta'lamuna** est un inaccompli 2MP de la forme I de la racine '-l-m. Le Lane's donne : savoir, connaitre. L'inaccompli avec la negation « la ta'lamuna » indique ce qu'ils ne savaient pas — l'etat d'ignorance prealable a l'enseignement.

§JUSTIFICATION§
**envoye** — Le sens retenu pour arsalna est « envoyer ». Le verbe a la forme IV designe l'acte de mandater quelqu'un pour une mission. L'alternative « liberer » est ecartee car le contexte est l'envoi d'un messager, pas la liberation d'un captif. Le mot « envoye » pour rasulan preserve l'idee d'envoi actif — quelqu'un mande par un autre. L'alternative « messager » est ecartee car « envoye » est plus fidele a l'etymologie de r-s-l.

**recite** — Le sens retenu est « reciter ». Le verbe yatlu designe la lecture a haute voix des signes divins. L'alternative « suivre » est ecartee car l'objet direct (ayatina, Nos signes) impose la lecture orale, pas la succession.

**signes** — Le sens retenu est « signe ». Le mot ayat au pluriel designe les signes divins — versets, preuves, miracles. L'alternative « verset » est un sous-ensemble du sens plus large de signe. « Signes » est retenu car le contexte est la recitation de tout ce que Dieu a revele comme preuves.

**purifie** — Le sens retenu est « purifier ». Le verbe yuzakkikum a la forme II designe la purification active et intensive. L'alternative « faire croitre » est ecartee car le contexte insiste sur la purification morale, meme si les deux sens sont lies dans la racine z-k-w.

**enseigne** — Le sens retenu est « enseigner ». Le verbe yu'allimukum a la forme II de '-l-m designe la transmission du savoir. L'alternative « informer » est ecartee car l'enseignement est plus approfondi que la simple information — il implique la comprehension.

**le Livre** — Le sens retenu est « livre/ecriture revelee ». Le mot al-kitab designe l'ecriture revelee avec l'article defini. L'alternative « prescrire » est ecartee car le mot est un nom, pas un verbe.

**la sagesse** — Le sens retenu est « sagesse ». Le mot al-hikma designe la connaissance juste et profonde des choses. L'alternative « juger » est ecartee car le mot est un nom feminin, pas un verbe.

**saviez** — Le sens retenu est « savoir ». Le verbe ta'lamuna designe la connaissance. L'alternative « marquer » est ecartee car le contexte est le savoir, pas le marquage.

§CRITIQUE§
Les traductions courantes donnent un sens similaire. Hamidullah traduit « un messager » la ou nous donnons « un envoye » — la difference est minime mais « envoye » est plus fidele a la racine r-s-l. La plupart des traductions donnent « versets » pour ayat, nous donnons « signes » — les deux sont valides mais « signes » est plus englobant et correspond mieux au sens de la racine a-y-t. Le verset fait echo a la priere d'Abraham en 2:129 qui demandait exactement cela : un envoye qui recite les signes, purifie et enseigne. Le verset 151 est la reponse divine a cette priere — l'exaucement est presente comme un fait accompli.`,
    segments: [
      { fr: "de meme que", phon: "kama", arabic: "\u0643\u064e\u0645\u064e\u0627", is_particle: true, position: 0 },
      { fr: "Nous avons envoye", pos: "verbe", phon: "arsalna", arabic: "\u0623\u064e\u0631\u0652\u0633\u064e\u0644\u0652\u0646\u064e\u0627", word_key: "rsl", is_particle: false, sense_retenu: "envoyer", position: 1 },
      { fr: "parmi vous", phon: "fikum", arabic: "\u0641\u0650\u064a\u0643\u064f\u0645\u0652", is_particle: true, position: 2 },
      { fr: "un envoye", pos: "nom", phon: "rasulan", arabic: "\u0631\u064e\u0633\u064f\u0648\u0644\u064b\u0627", word_key: "rsl", is_particle: false, sense_retenu: "envoye", position: 3 },
      { fr: "de chez vous", phon: "minkum", arabic: "\u0645\u0650\u0651\u0646\u0643\u064f\u0645\u0652", is_particle: true, position: 4 },
      { fr: "il recite", pos: "verbe", phon: "yatlu", arabic: "\u064a\u064e\u062a\u0652\u0644\u064f\u0648", word_key: "tlw", is_particle: false, sense_retenu: "reciter", position: 5 },
      { fr: "sur vous", phon: "'alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652", is_particle: true, position: 6 },
      { fr: "Nos signes", pos: "nom", phon: "ayatina", arabic: "\u0622\u064a\u064e\u0640\u062a\u0650\u0646\u064e\u0627", word_key: "ayt", is_particle: false, sense_retenu: "signe", position: 7 },
      { fr: "et vous purifie", pos: "verbe", phon: "wa-yuzakkikum", arabic: "\u0648\u064e\u064a\u064f\u0632\u064e\u0643\u0651\u0650\u064a\u0643\u064f\u0645\u0652", word_key: "zkw", is_particle: false, sense_retenu: "purifier", position: 8 },
      { fr: "et vous enseigne", pos: "verbe", phon: "wa-yu'allimukum", arabic: "\u0648\u064e\u064a\u064f\u0639\u064e\u0644\u0651\u0650\u0645\u064f\u0643\u064f\u0645\u064f", word_key: "elm", is_particle: false, sense_retenu: "enseigner", position: 9 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 10 },
      { fr: "et la sagesse", pos: "nom", phon: "wa-al-hikmata", arabic: "\u0648\u064e\u0671\u0644\u0652\u062d\u0650\u0643\u0652\u0645\u064e\u0629\u064e", word_key: "hkm", is_particle: false, sense_retenu: "sagesse", position: 11 },
      { fr: "et vous enseigne", pos: "verbe", phon: "wa-yu'allimukum", arabic: "\u0648\u064e\u064a\u064f\u0639\u064e\u0644\u0651\u0650\u0645\u064f\u0643\u064f\u0645", word_key: "elm", is_particle: false, sense_retenu: "enseigner", position: 12 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 13 },
      { fr: "vous n'etiez pas", pos: "verbe", phon: "lam takunu", arabic: "\u0644\u064e\u0645\u0652 \u062a\u064e\u0643\u064f\u0648\u0646\u064f\u0648\u0627\u06df", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 14 },
      { fr: "vous saviez", pos: "verbe", phon: "ta'lamuna", arabic: "\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 15 }
    ],
    words: [
      // rsl pos=2 (arsalna — verbe "envoyer")
      {
        word_key: "rsl", position: 2, sense_chosen: "envoyer",
        analysis_axes: {
          sense_chosen: "envoyer",
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["envoyer", "messager", "message", "liberer"],
              proof_ctx: "Le verbe arsalna est un accompli 1PL de la forme IV de la racine r-s-l. Le Lane's donne pour la forme IV : envoyer, mandater, deputer. L'accompli marque que l'envoi est un fait acheve — Dieu a deja envoye. Le pronom « na » (Nous) est le pluriel de majeste divine. La preposition fikum (parmi vous) situe l'envoi dans la communaute. La forme IV (af'ala) est causative — faire que quelqu'un soit envoye. La distinction avec le sens de pluie est evidente : le contexte est l'envoi d'un messager humain, pas un phenomene meteorologique.",
              axe1_verset: "Le verbe arsalna ouvre la proposition principale du verset apres la particule comparative kama (de meme que). L'envoi est l'acte fondateur dont decoulent toutes les actions qui suivent : la recitation, la purification, l'enseignement. Le champ lexical du verset (envoye, reciter, signes, purifier, enseigner, Livre, sagesse) forme une chaine de transmission. Dieu envoie → l'envoye recite, purifie et enseigne → les destinataires recoivent. L'envoi est le point de depart de cette chaine.",
              axe2_voisins: "Le verset 150 concluait le passage sur la qibla avec l'injonction de se tourner vers la Mosquee sacree. Le verset 151 change de sujet et rappelle le bienfait de l'envoi du messager. Le verset 152 enchaincera avec « souvenez-vous de Moi, Je Me souviendrai de vous ». Les versets 150-152 forment une progression : orientation vers la Mosquee → rappel du bienfait de l'envoye → appel au souvenir de Dieu. L'envoi est presente comme un bienfait qui merite gratitude.",
              axe3_sourate: "La racine r-s-l est structurante dans la sourate al-Baqarah. En 2:87, Dieu a donne a Moussa le Livre et envoye des messagers apres lui. En 2:129, Abraham prie : « envoie-leur un envoye de chez eux ». Le verset 151 est la reponse a cette priere — l'envoi promis est accompli. La sourate montre la continuite des envois : Moussa, les prophetes, puis l'envoye final demande par Abraham.",
              axe4_coherence: "La racine r-s-l apparait environ 513 fois dans le Coran. Le schema « arsalna fikum rasulan minkum » (Nous avons envoye parmi vous un envoye de chez vous) est parallele a 3:164 et 62:2 — le Coran repete ce schema pour montrer que l'envoi est un bienfait divin majeur. L'insistance sur « minkum » (de chez vous) souligne que l'envoye est issu de la communaute — il est humain, accessible, connu.",
              axe5_frequence: "Pour la mission du khalifa, l'envoi est le moyen par lequel Dieu communique Sa mission. L'envoye est le modele du khalifa — il recite, purifie et enseigne. Le khalifa doit perpetuer la mission de l'envoye en transmettant les signes, en purifiant les comportements et en enseignant le Livre et la sagesse. L'envoi est un acte de misericorde divine qui equipe la communaute pour sa mission de gouvernance juste."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est un usage physique de r-s-l — l'eau envoyee du ciel. Le contexte est l'envoi d'un envoye humain, pas un phenomene meteorologique."
            }
          }
        }
      },
      // rsl pos=4 (rasulan — nom "envoye")
      {
        word_key: "rsl", position: 4, sense_chosen: "envoye",
        analysis_axes: {
          sense_chosen: "envoye",
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["envoyer", "messager", "message", "liberer"],
              proof_ctx: "Le mot rasulan est un nom masculin singulier indefini accusatif de la racine r-s-l. Le Lane's donne : envoye, messager, celui qui est mande. L'indefini (rasulan sans article) marque qu'un envoye est venu — pas n'importe quel envoye connu d'avance, mais un envoye mande par Dieu. La qualification « minkum » (de chez vous) precise que cet envoye est issu de la communaute — il est humain, pas angelique. La distinction avec le sens de pluie est evidente : le mot est un nom de personne, pas un phenomene.",
              axe1_verset: "Le mot rasulan est l'agent de toutes les actions qui suivent dans le verset : il recite (yatlu), purifie (yuzakkikum), enseigne (yu'allimukum). Le verset definit la mission de l'envoye par quatre fonctions : reciter les signes, purifier, enseigner le Livre et la sagesse, enseigner ce qui etait inconnu. L'envoye est le pivot du verset — toutes les actions transitent par lui. Le champ lexical construit un portrait complet de la fonction prophetique.",
              axe2_voisins: "Le verset 129 contenait la priere d'Abraham : « Seigneur, envoie-leur un envoye de chez eux qui leur recite Tes signes, leur enseigne le Livre et la sagesse, et les purifie ». Le verset 151 reprend exactement les memes termes — c'est l'exaucement de la priere. La correspondance est presque mot pour mot, montrant que Dieu a accompli ce qu'Abraham avait demande.",
              axe3_sourate: "L'envoye (rasul) est une figure centrale de la sourate al-Baqarah. En 2:87, les envoves se succedent apres Moussa. En 2:143, la communaute est temoin et l'envoye est temoin sur elle. En 2:151, l'envoye est issu de la communaute et agit pour elle. La sourate montre que l'envoye n'est pas exterieur a la communaute mais en est le guide designe par Dieu.",
              axe4_coherence: "La racine r-s-l apparait environ 513 fois dans le Coran. Le mot rasul au singulier indefini apparait dans des contextes ou l'accent est mis sur la fonction, pas sur l'identite. En 62:2, « Il a envoye parmi les illetres un envoye de chez eux » — meme schema que 2:151. Le Coran insiste sur le fait que l'envoye est un etre humain issu de la communaute qu'il guide.",
              axe5_frequence: "Pour la mission du khalifa, l'envoye est le modele de la mission civilisationnelle. Il recite, purifie et enseigne — trois fonctions qui definissent le role du guide dans une societe juste. Le khalifa doit perpetuer ces fonctions : transmettre les signes divins, purifier les moeurs, et enseigner le savoir. L'envoye issu de la communaute montre que la mission est ancree dans le reel, pas dans l'abstrait."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est hors sujet — le mot rasulan designe une personne envoyee, pas un phenomene meteorologique."
            }
          }
        }
      },
      // tlw pos=5 (yatlu — verbe "reciter")
      {
        word_key: "tlw", position: 5, sense_chosen: "reciter",
        analysis_axes: {
          sense_chosen: "reciter",
          concept_chosen: "Récitation/Succession",
          concepts: {
            "Récitation/Succession": {
              status: "retenu",
              senses: ["reciter", "lire", "succeder"],
              proof_ctx: "Le verbe yatlu est un inaccompli 3MS de la racine t-l-w. Le Lane's donne : reciter, lire a haute voix, suivre, succeder. L'inaccompli marque une action continue et repetee — la recitation est un acte permanent de l'envoye, pas un evenement ponctuel. Le complement 'alaykum (sur vous) indique la direction : la recitation est adressee aux destinataires. L'objet direct ayatina (Nos signes) precise le contenu de la recitation. La tilawa est l'acte de lire le texte revele a haute voix pour le transmettre — c'est la premiere fonction de l'envoye dans ce verset.",
              axe1_verset: "Le verbe yatlu est la premiere action de l'envoye dans la chaine des quatre fonctions : reciter, purifier, enseigner le Livre et la sagesse, enseigner l'inconnu. La recitation precede la purification et l'enseignement — on recoit d'abord les signes par l'oreille avant d'etre purifie et instruit. Le champ lexical (signes, Livre, sagesse, savoir) montre que la recitation est le debut du processus de transmission. Les signes sont la matiere premiere que l'envoye transmet oralement.",
              axe2_voisins: "Le verset 129 (priere d'Abraham) utilisait le meme verbe yatlu avec les memes complements : « qui leur recite Tes signes ». Le verset 151 est la reponse exacte — Dieu a exauce la priere en envoyant un envoye qui recite. Le verset 150 parlait de l'orientation vers la Mosquee sacree. Le verset 152 appellera au souvenir de Dieu. La recitation est le moyen par lequel les signes divins sont transmis.",
              axe3_sourate: "La racine t-l-w apparait dans la sourate al-Baqarah en plusieurs endroits. En 2:102, « ce que recitaient les demons ». En 2:121, « ceux a qui Nous avons donne le Livre le recitent de sa vraie recitation ». La sourate distingue la vraie recitation (celle de l'envoye) de la fausse (celle des demons). La recitation est un acte charge de responsabilite — reciter les signes de Dieu est different de reciter la magie.",
              axe4_coherence: "La racine t-l-w apparait environ 63 fois dans le Coran. Le schema « yatlu 'alayhim/kum ayatina » (il recite sur eux/vous Nos signes) apparait en 3:164, 62:2, 28:59. C'est une formule recurrente qui definit la premiere fonction prophetique. Le Coran place la recitation avant l'enseignement — le texte est d'abord entendu avant d'etre compris.",
              axe5_frequence: "Pour la mission du khalifa, la recitation est le premier acte de la transmission. Le khalifa doit reciter les signes — les transmettre oralement et les rendre accessibles. La recitation est un acte communautaire — elle se fait devant un public, pas en prive. La gouvernance juste commence par la transmission des signes divins a la communaute. La recitation est le fondement de l'education civilisationnelle."
            }
          }
        }
      },
      // ayt pos=7 (ayatina — nom "signes")
      {
        word_key: "ayt", position: 7, sense_chosen: "signe",
        analysis_axes: {
          sense_chosen: "signe",
          concept_chosen: "Signe/Preuve",
          concepts: {
            "Signe/Preuve": {
              status: "retenu",
              senses: ["signe", "miracle", "preuve"],
              proof_ctx: "Le mot ayatina est un nom pluriel feminin accusatif de la racine a-y-t avec pronom possessif 1PL. Le Lane's donne : signe, preuve, miracle, ce qui indique. Le pluriel marque la multiplicite des signes — Dieu a de nombreux signes. Le pronom « na » (Nos) attribue les signes a Dieu — ce sont les signes de Dieu, pas des signes humains. L'accusatif marque l'objet de la recitation — l'envoye recite les signes de Dieu. La distinction avec « verset » (probable) est que le signe est plus englobant : il inclut les versets mais aussi les signes dans la creation et les miracles.",
              axe1_verset: "Le mot ayatina est le complement d'objet du verbe yatlu (reciter). Les signes sont la matiere premiere de la recitation — c'est ce que l'envoye transmet. Le champ lexical du verset (envoye, reciter, purifier, enseigner, Livre, sagesse) montre que les signes sont le point de depart de la chaine pedagogique. L'envoye recite les signes, ce qui conduit a la purification et a l'enseignement. Les signes de Dieu sont les versets reveles et les preuves de Sa puissance.",
              axe2_voisins: "Le verset 129 utilisait le meme mot ayatika (Tes signes) dans la priere d'Abraham. Le verset 151 change le possessif — « Nos signes » (ayatina) au lieu de « Tes signes » (ayatika) — parce que c'est Dieu qui parle maintenant, pas Abraham qui prie. Le verset 150 mentionnait les preuves (bayyinat) venant du Seigneur. Les signes et les preuves sont les outils de la transmission divine.",
              axe3_sourate: "La racine a-y-t est omnipresente dans la sourate al-Baqarah. En 2:39, « ceux qui ont nie Nos signes ». En 2:73, « Dieu vous montre Ses signes ». En 2:99, « Nous avons fait descendre vers toi des signes clairs ». La sourate insiste sur la transmission des signes et la reaction des destinataires — certains acceptent, d'autres rejettent. Les signes sont le test de la foi.",
              axe4_coherence: "La racine a-y-t apparait environ 382 fois dans le Coran. Le mot aya au singulier et ayat au pluriel couvrent un spectre large : signes dans la creation, miracles des prophetes, versets du Coran. En 2:151, les signes recites par l'envoye sont les versets du Coran — mais le mot ayat preserve la polyvalence du signe qui montre et prouve.",
              axe5_frequence: "Pour la mission du khalifa, les signes sont les instruments de la mission. Le khalifa doit connaitre les signes, les transmettre et les mediter. Les signes de Dieu dans la creation et dans la revelation sont les preuves qui fondent la gouvernance juste. Ignorer les signes c'est se priver des outils de la mission civilisationnelle. La transmission des signes est un devoir du khalifa."
            },
            "Révélation/Parole": {
              status: "probable",
              senses: ["verset"],
              proof_ctx: "Le sens de verset est un sous-ensemble du sens de signe. Le verset est un signe verbal dans le texte revele. Ici les ayat recitees par l'envoye sont les versets du Coran, mais le mot ayat est plus large que le seul sens de verset — il englobe aussi les preuves et les miracles. Le sens de verset est probable car la recitation porte naturellement sur des textes."
            }
          }
        }
      },
      // zkw pos=8 (yuzakkikum — verbe "purifier")
      {
        word_key: "zkw", position: 8, sense_chosen: "purifier",
        analysis_axes: {
          sense_chosen: "purifier",
          concept_chosen: "Purification/Croissance",
          concepts: {
            "Purification/Croissance": {
              status: "retenu",
              senses: ["purifier", "aumone legale", "croitre", "etre pur", "prosperer"],
              proof_ctx: "Le verbe yuzakkikum est un inaccompli 3MS de la forme II de la racine z-k-w avec pronom suffixe 2MP. Le Lane's donne pour la forme II : purifier, rendre pur, faire croitre en bien, developper. La forme II intensifie — la purification est active, deliberee et complete. Le pronom suffixe « kum » (vous) marque les destinataires comme objets directs de l'action. L'inaccompli marque une action continue — la purification est un processus permanent, pas un acte ponctuel. La distinction entre purifier et faire croitre est subtile : purifier c'est enlever ce qui souille, faire croitre c'est developper ce qui est bon. Les deux sont lies dans la racine z-k-w — la purification permet la croissance.",
              axe1_verset: "Le verbe yuzakkikum est la deuxieme fonction de l'envoye apres la recitation. L'ordre est significatif : d'abord l'envoye recite les signes (transmission), puis il purifie (transformation). Le champ lexical (reciter, purifier, enseigner) montre une progression pedagogique : entendre → etre purifie → apprendre. La purification est l'etape intermediaire qui prepare les coeurs a recevoir l'enseignement. Sans purification, l'enseignement ne penetre pas.",
              axe2_voisins: "Le verset 129 (priere d'Abraham) mentionnait yuzakkihim (les purifie) — le meme verbe mais a la 3e personne MP. Le verset 151 reprend le meme schema mais avec le pronom 2MP (yuzakkikum, vous purifie) — le discours passe du recit a l'adresse directe. Le verset 152 enchaincera avec « souvenez-vous de Moi » — la purification prepare au souvenir de Dieu.",
              axe3_sourate: "La racine z-k-w apparait dans la sourate al-Baqarah sous plusieurs formes. En 2:43, « acquittez la zakat ». En 2:110, « acquittez la zakat ». En 2:129 et 151, la purification est une fonction prophetique. La sourate montre deux niveaux de purification : la zakat comme purification des biens, et la tazkiya prophetique comme purification des ames. Le verset 151 parle de la purification prophetique — l'envoye purifie les ames, pas les biens.",
              axe4_coherence: "La racine z-k-w apparait environ 59 fois dans le Coran. La formule « yuzakkihim/kum » (il les/vous purifie) est liee a la fonction prophetique en 3:164, 62:2 et 2:151. Le Coran distingue la purification divine (Dieu purifie qui Il veut, 4:49) et la purification prophetique (l'envoye purifie la communaute). La purification est un theme central de la mission prophetique.",
              axe5_frequence: "Pour la mission du khalifa, la purification est la deuxieme etape de la mission apres la transmission des signes. Le khalifa doit travailler a purifier la communaute — enlever ce qui corrompt les moeurs et les institutions. La gouvernance juste n'est pas seulement legislative — elle est aussi purificatrice. La tazkiya est le fondement de la civilisation juste : une societe purifiee est une societe qui peut croitre sainement."
            }
          }
        }
      },
      // elm pos=9 (yu'allimukum — verbe "enseigner", 1re occurrence)
      {
        word_key: "elm", position: 9, sense_chosen: "enseigner",
        analysis_axes: {
          sense_chosen: "enseigner",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe yu'allimukum est un inaccompli 3MS de la forme II de la racine '-l-m avec pronom suffixe 2MP. Le Lane's donne pour la forme II : enseigner, faire savoir, instruire. La forme II est causative-intensive — elle transforme le savoir intransitif (savoir soi-meme) en acte transitif (faire savoir a l'autre). Le pronom suffixe « kum » (vous) marque les destinataires. L'objet de cet enseignement est double : le Livre (al-kitab) et la sagesse (al-hikma). L'inaccompli marque une action continue — l'enseignement est permanent.",
              axe1_verset: "Le verbe yu'allimukum est la troisieme fonction de l'envoye, apres la recitation et la purification. L'ordre est pedagogique : reciter (transmettre le texte) → purifier (preparer les coeurs) → enseigner (faire comprendre). L'objet de ce premier enseignement est « le Livre et la sagesse » — le texte revele et sa comprehension profonde. Le verset distingue deux niveaux d'enseignement : le Livre (le texte) et la sagesse (sa comprehension). L'enseignement n'est pas la simple transmission — c'est la comprehension.",
              axe2_voisins: "Le verset 129 (priere d'Abraham) utilisait le meme verbe yu'allimuhum (les enseigne). Le verset 151 est la reponse — Dieu a envoye l'envoye qui enseigne. Le verset 150 portait sur la qibla. Le verset 152 appellera au souvenir. L'enseignement est le bienfait central rappele entre l'orientation rituelle et l'appel au souvenir.",
              axe3_sourate: "La racine '-l-m a la forme II (enseigner) apparait dans la sourate al-Baqarah en plusieurs endroits cles. En 2:31, « Il enseigna a Adam les noms — tous ». En 2:102, « ils enseignaient la magie ». En 2:129, Abraham demande un envoye qui enseigne. Le verset 151 est l'accomplissement. La sourate oppose le bon enseignement (celui de Dieu et de Ses envoyes) au mauvais (celui des demons et des magiciens).",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. La forme II (enseigner) est frequente dans les contextes prophetiques — l'envoye est d'abord un enseignant. En 3:164, le meme schema : l'envoye recite, purifie et enseigne. En 62:2, meme formule. Le Coran definit la mission prophetique comme essentiellement pedagogique — l'envoye n'est pas un roi mais un enseignant.",
              axe5_frequence: "Pour la mission du khalifa, l'enseignement est la troisieme fonction de la mission. Le khalifa doit enseigner le Livre et la sagesse — transmettre non seulement le texte mais sa comprehension. L'enseignement est le fondement de la civilisation — sans transmission du savoir, la societe stagne. La gouvernance juste est d'abord une gouvernance educative. Le khalifa qui enseigne eleve sa communaute."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de signe/marque est hors sujet — le verbe est yu'allimukum (il vous enseigne) a la forme II, pas un nom de marque. Le contexte est l'enseignement, pas le marquage."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe est « enseigner » a la forme II, pas un nom designant l'univers. Le contexte est pedagogique."
            }
          }
        }
      },
      // ktb pos=10 (al-kitaba — nom "le Livre")
      {
        word_key: "ktb", position: 10, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["livre", "ecriture revelee", "registre", "contrat ecrit", "contrat de mariage", "contrat d'affranchissement"],
              proof_ctx: "Le mot al-kitaba est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee, registre. L'article defini (al-) marque qu'il s'agit du Livre connu — l'ecriture revelee. L'accusatif marque l'objet de l'enseignement — l'envoye enseigne le Livre. Le Livre est le support materiel ou immateriel de la revelation. La distinction avec l'ecriture (probable) est que le contexte designe le Livre comme objet de l'enseignement, pas l'acte d'ecrire.",
              axe1_verset: "Le mot al-kitaba est le premier objet de l'enseignement prophetique. L'envoye enseigne le Livre ET la sagesse — les deux sont associes comme un couple inseparable. Le Livre est le texte et la sagesse est sa comprehension. Le champ lexical (reciter les signes, purifier, enseigner le Livre et la sagesse) montre que le Livre est au coeur de la mission prophetique. Les signes sont recites, puis le Livre est enseigne — la recitation precede l'enseignement approfondi.",
              axe2_voisins: "Le verset 129 mentionnait le meme couple « le Livre et la sagesse » dans la priere d'Abraham. Le verset 151 reprend exactement ce couple — l'exaucement correspond a la demande. Le verset 146 disait « ceux a qui Nous avons donne le Livre le reconnaissent ». Les versets voisins montrent que le Livre est a la fois l'objet du don, de l'enseignement et de la reconnaissance.",
              axe3_sourate: "La racine k-t-b est une des plus importantes de la sourate al-Baqarah. En 2:2, « Ce Livre, nul doute en lui ». En 2:44, « vous qui lisez le Livre ». En 2:89, « un Livre de la part de Dieu ». La sourate est construite autour du Livre — chaque passage y revient. Le verset 151 place le Livre comme objet de l'enseignement prophetique, pas seulement de la recitation.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le couple « le Livre et la sagesse » (al-kitab wa-l-hikma) apparait en 2:129, 2:151, 2:231, 3:48, 3:81, 3:164, 4:113, 5:110, 33:34, 62:2. C'est une expression recurrente qui definit le contenu de l'enseignement prophetique — le texte et sa comprehension profonde forment un tout.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide fondamental de la mission. Le khalifa doit non seulement connaitre le Livre mais l'enseigner — le transmettre avec comprehension. Le Livre sans sagesse est lettre morte. La sagesse sans Livre est speculation. Les deux ensemble fondent la gouvernance juste et la civilisation eclairee."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["ecrire", "dicter", "copier un livre", "art de l'ecriture", "scribe", "s'inscrire", "savant", "enseignant", "vendeur de livres", "ecole", "demander d'ecrire", "ecrire a quelqu'un"],
              proof_ctx: "Le sens d'ecriture est le sens premier de k-t-b — l'acte d'ecrire et de transcrire. Le mot al-kitab est le resultat de l'acte d'ecrire — le Livre est ce qui a ete ecrit. Le verset parle du Livre comme objet d'enseignement, pas de l'acte d'ecrire. Le mot est un nom defini (al-kitab), pas un verbe ou un nom d'action."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "rendre obligatoire", "juger", "decret divin", "predestination"],
              proof_ctx: "Le sens de prescription est hors sujet — le mot est al-kitab (le Livre) dans un contexte d'enseignement, pas un verbe de prescription. Le Livre contient des prescriptions mais le mot ici designe le support, pas l'acte de prescrire."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre", "attacher", "collecter", "preparer les troupes", "armee"],
              proof_ctx: "Le sens d'assemblage est un sens secondaire de k-t-b — rassembler des feuillets. Le contexte est le Livre comme objet d'enseignement, pas l'acte de rassembler."
            }
          }
        }
      },
      // hkm pos=11 (al-hikmata — nom "la sagesse")
      {
        word_key: "hkm", position: 11, sense_chosen: "sagesse",
        analysis_axes: {
          sense_chosen: "sagesse",
          concept_chosen: "Sagesse",
          concepts: {
            "Sagesse": {
              status: "retenu",
              senses: ["etre sage", "sagesse"],
              proof_ctx: "Le mot al-hikmata est un nom feminin singulier defini accusatif de la racine h-k-m. Le Lane's donne : sagesse, connaissance juste des choses et de leurs causes, capacite de juger correctement. L'article defini (al-) marque la Sagesse comme realite connue et definie — ce n'est pas une sagesse quelconque mais LA sagesse. L'accusatif marque l'objet de l'enseignement — l'envoye enseigne le Livre et la Sagesse. La distinction avec le jugement (probable) est que le contexte est l'enseignement, pas le tribunal. La sagesse est ici ce qu'on enseigne et apprend, pas ce qu'on applique dans un litige.",
              axe1_verset: "Le mot al-hikmata est le second objet de l'enseignement prophetique, associe au Livre. Le couple « Livre + sagesse » forme un tout : le texte et sa comprehension profonde. Le verset distingue deux niveaux : le Livre (le contenu explicite) et la sagesse (la comprehension implicite). L'envoye n'enseigne pas seulement les mots — il enseigne la maniere de comprendre les mots. La sagesse est la cle de lecture du Livre.",
              axe2_voisins: "Le verset 129 (priere d'Abraham) mentionnait le meme couple « le Livre et la sagesse ». Le verset 151 est l'exaucement — la sagesse est enseignee comme Abraham l'avait demande. Le verset 269 de la meme sourate dira : « Il donne la sagesse a qui Il veut, et celui qui recoit la sagesse a recu un bien immense ». La sagesse est un don divin transmis par l'envoye.",
              axe3_sourate: "La racine h-k-m apparait dans la sourate al-Baqarah sous plusieurs formes. En 2:32, les anges reconnaissent que Dieu est « le Sage » (al-Hakim). En 2:129 et 151, la sagesse est objet d'enseignement. En 2:231, « ce qu'Il a fait descendre sur vous du Livre et de la sagesse ». La sourate montre que la sagesse est a la fois un attribut divin et un enseignement prophetique.",
              axe4_coherence: "La racine h-k-m apparait environ 210 fois dans le Coran. Le couple « Livre et sagesse » apparait dans de nombreux versets (2:129, 2:151, 2:231, 3:48, 3:164, 4:113, 5:110, 33:34, 62:2). Le Coran associe systematiquement le Livre et la sagesse — le texte et sa comprehension forment un couple inseparable. La sagesse n'est pas un concept abstrait — c'est la capacite de comprendre le Livre et d'appliquer ses enseignements.",
              axe5_frequence: "Pour la mission du khalifa, la sagesse est l'outil de la gouvernance juste. Gouverner sans sagesse c'est appliquer la lettre sans comprendre l'esprit. Le khalifa doit posseder la sagesse — la connaissance juste des choses et de leurs causes — pour juger correctement et guider la communaute. La sagesse permet de distinguer le juste de l'injuste, le vrai du faux. La civilisation juste repose sur la sagesse de ses dirigeants."
            },
            "Jugement/Décision": {
              status: "probable",
              senses: ["juger", "decider", "sentence"],
              proof_ctx: "Le sens de jugement est un sens majeur de h-k-m — juger et trancher entre le vrai et le faux. La distinction avec la sagesse est que le jugement est un acte ponctuel (juger un cas), tandis que la sagesse est un etat permanent (connaitre la nature des choses). Ici le mot al-hikma est un nom feminin dans un contexte d'enseignement — l'envoye enseigne la sagesse, pas l'acte de juger. Le sens est probable car la sagesse et le jugement sont etroitement lies."
            },
            "Autorité/Pouvoir": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est un sens derive de h-k-m — celui qui juge gouverne. Le contexte est l'enseignement de la sagesse, pas l'exercice du pouvoir. Le mot est un nom feminin (hikma), pas un verbe d'autorite."
            }
          }
        }
      },
      // elm pos=12 (yu'allimukum — verbe "enseigner", 2e occurrence)
      {
        word_key: "elm", position: 12, sense_chosen: "enseigner",
        analysis_axes: {
          sense_chosen: "enseigner",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe yu'allimukum est un inaccompli 3MS de la forme II de la racine '-l-m avec pronom suffixe 2MP. C'est la deuxieme occurrence du meme verbe dans le verset. Le Lane's donne pour la forme II : enseigner, faire savoir, instruire. Cette seconde occurrence introduit un nouvel objet d'enseignement : « ce que vous ne saviez pas » (ma lam takunu ta'lamuna). La premiere occurrence enseignait le Livre et la sagesse (contenu defini), la seconde enseigne l'inconnu (contenu indefini). La repetition du verbe souligne que l'enseignement prophetique couvre a la fois le connu et l'inconnu.",
              axe1_verset: "Le second yu'allimukum est la quatrieme et derniere fonction de l'envoye dans le verset. L'objet de cet enseignement est « ce que vous ne saviez pas » — un savoir nouveau, inaccessible sans l'envoye. Le verset distingue ainsi deux types d'enseignement : le Livre et la sagesse (ce qui existait deja et peut etre enseigne) et ce que vous ne saviez pas (ce qui est au-dela de la connaissance humaine). L'envoye apporte un savoir que les hommes ne pouvaient obtenir par eux-memes.",
              axe2_voisins: "Le verset 129 ne contenait qu'une seule occurrence de « enseigne » dans la priere d'Abraham. Le verset 151 en ajoute une seconde — l'exaucement depasse la demande. Abraham demandait l'enseignement du Livre et de la sagesse, Dieu ajoute l'enseignement de l'inconnu. Le verset 152 enchaincera avec le souvenir de Dieu — savoir ce qu'on ne savait pas conduit a la gratitude et au souvenir.",
              axe3_sourate: "La sourate al-Baqarah insiste sur le savoir inaccessible sans revelation. En 2:31, Dieu enseigne a Adam « les noms — tous » — un savoir que meme les anges ne possedaient pas. En 2:33, les anges reconnaissent : « nous ne savons que ce que Tu nous as enseigne ». Le verset 151 reprend ce theme — l'envoye enseigne ce que les hommes ne pouvaient savoir par eux-memes, comme Dieu avait enseigne a Adam ce que les anges ne savaient pas.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. La formule « ce que vous ne saviez pas » (ma lam takunu ta'lamuna) est specifique — elle indique un savoir hors de portee humaine sans la revelation. En 12:86, Joseph dit : « Je sais de Dieu ce que vous ne savez pas ». Le Coran montre que le savoir divin transmis par les envoyes depasse le savoir humain ordinaire.",
              axe5_frequence: "Pour la mission du khalifa, l'enseignement de l'inconnu est le sommet de la mission educative. Le khalifa ne transmet pas seulement ce que les hommes savent deja — il ouvre des horizons nouveaux grace a la revelation. La civilisation avance quand elle depasse les limites du savoir existant. L'envoye enseigne ce que personne ne savait — le khalifa perpetue cette transmission en appliquant et en enseignant les verites revelees que la raison seule n'aurait pas atteintes."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de signe/marque est hors sujet — le verbe est yu'allimukum (il vous enseigne) a la forme II, pas un nom de marque. Le contexte est l'enseignement de l'inconnu."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe est « enseigner » a la forme II, pas un nom designant l'univers."
            }
          }
        }
      },
      // kwn pos=14 (takunu — verbe "etre")
      {
        word_key: "kwn", position: 14, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe takunu est un inaccompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister, devenir. Ici le verbe est utilise comme verbe incomplet (kana naqis) — il porte la negation lam et introduit un attribut verbal (ta'lamuna, vous saviez). La forme « lam takunu ta'lamuna » signifie « vous n'etiez pas [dans l'etat de] savoir » — c'est-a-dire vous ne saviez pas. Le verbe kana au negatif (lam takun) indique un etat anterieur — avant l'enseignement de l'envoye, ils n'etaient pas en etat de savoir. La distinction avec les sens nuls (lieu, humilite) est evidente : le verbe est un auxiliaire grammatical, pas un verbe de lieu ou d'attitude.",
              axe1_verset: "Le verbe takunu fait partie de la proposition relative « ma lam takunu ta'lamuna » (ce que vous n'etiez pas [en train de] savoir). Le verset oppose deux etats : avant l'envoye (ignorance) et apres l'envoye (savoir). Le verbe kana porte cette dimension temporelle — il situe l'ignorance dans le passe. Le champ lexical (enseigner, savoir, Livre, sagesse) montre que le verset est centre sur la transformation par le savoir. Le verbe kana marque l'etat anterieur a cette transformation.",
              axe2_voisins: "Le verset 129 ne contenait pas cette proposition — elle est un ajout du verset 151 par rapport a la priere d'Abraham. Dieu donne plus que ce qu'Abraham a demande : non seulement le Livre et la sagesse, mais aussi ce qui etait inconnu. Le verbe kana dans la negation souligne que l'ignorance etait un etat stable avant l'intervention divine. Le verset 152 enchaincera avec l'appel a la gratitude — la transformation de l'ignorance en savoir merite reconnaissance.",
              axe3_sourate: "La racine k-w-n est la racine la plus frequente du Coran. Dans la sourate al-Baqarah, kana apparait sous de multiples formes. En 2:34, « il etait parmi les dissimulateurs ». En 2:75, « un groupe parmi eux entendait la Parole de Dieu ». Le verbe kana situe les etats dans le temps — il est le marqueur temporel par excellence de la langue arabe. En 2:151, il marque l'etat d'ignorance prealable.",
              axe4_coherence: "La racine k-w-n apparait plus de 1300 fois dans le Coran. Le verbe kana est un outil grammatical fondamental — il porte le temps et la negation. La formule « lam takunu ta'lamuna » (vous ne saviez pas) est specifique a ce verset mais le schema « ma lam takun ta'lamu » (ce que tu ne savais pas) apparait en 4:113 — « Il t'a enseigne ce que tu ne savais pas ». Le Coran montre que le savoir prophetique depasse le savoir humain ordinaire.",
              axe5_frequence: "Pour la mission du khalifa, l'etat d'ignorance prealable rappelle que le savoir n'est pas inne — il est transmis. Le khalifa doit reconnaitre que sans la revelation et l'enseignement prophetique, il serait dans l'ignorance. Cette reconnaissance fonde l'humilite necessaire a la gouvernance juste. La mission du khalifa n'est pas fondee sur son propre savoir mais sur le savoir transmis par l'envoye. L'humilite devant le savoir divin est le fondement de la civilisation juste."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est un sens secondaire de k-w-n. Le contexte est le verbe auxiliaire kana dans une negation — il porte le temps, pas l'attitude."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu est un sens derive de k-w-n. Le contexte est le verbe auxiliaire kana (etre) dans une proposition relative negative — il n'indique pas un lieu mais un etat temporel."
            }
          }
        }
      },
      // elm pos=15 (ta'lamuna — verbe "savoir", 3e occurrence de elm)
      {
        word_key: "elm", position: 15, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe ta'lamuna est un inaccompli 2MP de la forme I de la racine '-l-m. Le Lane's donne pour la forme I : savoir, connaitre, etre informe. La forme I est intransitive — savoir est un etat interieur, contrairement a la forme II (enseigner) qui est transitive. L'inaccompli avec la negation (lam takunu ta'lamuna) decrit un etat continu d'ignorance dans le passe — ils ne savaient pas. C'est la troisieme occurrence de la racine '-l-m dans le verset : la premiere et la deuxieme en forme II (enseigner), la troisieme en forme I (savoir). Le verset passe de l'enseignement actif (l'envoye enseigne) au savoir passif (vous ne saviez pas).",
              axe1_verset: "Le verbe ta'lamuna ferme le verset avec la negation — « ce que vous ne saviez pas ». Les trois occurrences de la racine '-l-m dans le verset forment une progression : enseigner le Livre et la sagesse → enseigner l'inconnu → vous ne saviez pas. Le verset oppose l'activite de l'envoye (enseigner, forme II) a la passivite des destinataires (ne pas savoir, forme I). L'ignorance humaine est le point de depart, l'enseignement prophetique est la solution.",
              axe2_voisins: "Le verset 129 ne contenait pas cette troisieme occurrence. Le verset 151 ajoute la dimension de l'ignorance prealable — les destinataires ne savaient pas avant l'arrivee de l'envoye. Le verset 152 enchaincera avec « souvenez-vous de Moi » — apres avoir appris ce qu'on ne savait pas, il faut se souvenir de Celui qui a enseigne. La progression est : ignorance → enseignement → gratitude.",
              axe3_sourate: "La racine '-l-m a la forme I (savoir) est omnipresente dans la sourate al-Baqarah. En 2:13, « ce sont eux les imbeciles mais ils ne savent pas ». En 2:30, « Je sais ce que vous ne savez pas ». En 2:77, « ne savent-ils pas que Dieu sait ? ». La sourate oppose le savoir de Dieu (total et absolu) au savoir des humains (partiel et souvent refuse). Le verset 151 montre que Dieu comble cette lacune par l'envoi de l'envoye qui enseigne.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. Le contraste entre la forme I (savoir) et la forme II (enseigner) est un schema recurrent. En 96:5, « Il a enseigne a l'homme ce qu'il ne savait pas ». En 2:239, « Il vous a enseigne ce que vous ne saviez pas ». Le Coran montre que le savoir humain est un don divin — les hommes ne savent que ce que Dieu leur enseigne directement ou par Ses envoyes.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre qu'on ne savait pas est le debut de la sagesse. Le khalifa qui croit tout savoir echoue dans sa mission. La gouvernance juste exige l'humilite intellectuelle — reconnaitre les limites de son savoir et accueillir l'enseignement divin. L'ignorance n'est pas une honte — c'est un etat prealable que l'enseignement prophetique transforme en savoir. La civilisation juste est fondee sur la recherche permanente du savoir au-dela de ce qu'on sait deja."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de signe/marque est hors sujet — le verbe est ta'lamuna (vous savez) a la forme I, pas un nom de marque."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe est « savoir » a la forme I, pas un nom designant l'univers."
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

  const verseIds = [158];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 151 ===\n');
  await processVerse(151);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V151 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
