const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 21 A 23
// Etapes 3 + 4 completes
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:21 — verse_id=28
  // =====================================================
  21: {
    verse_id: 28,
    translation_arab: "O gens, servez votre Maitre \u2014 Celui qui vous a crees, vous et ceux d\u2019avant vous \u2014 afin que vous vous premunissiez.",
    full_translation: "O hommes ! Adorez votre Seigneur, qui vous a crees vous et ceux qui vous ont precedes. Ainsi atteindrez-vous la piete.",
    translation_explanation: `\u00A7DEMARCHE\u00A7
Le verset s\u2019ouvre par un appel universel \u2014 ya ayyuha al-nasu \u2014 qui s\u2019adresse a tous les etres humains sans distinction. Le mot **al-nasu** est un nom defini au pluriel (une forme qui designe l\u2019ensemble des humains comme groupe). Le verbe **u\u2019budu** est un imperatif de la 2eme personne du pluriel (un ordre direct de servir). La racine e-b-d dans le Lane\u2019s donne d\u2019abord le sens physique de servir, d\u2019etre au service de quelqu\u2019un. Le mot **rabbakum** est en construction idafa avec le pronom possessif 2MP (votre maitre). La racine r-b-b donne le maitre comme celui qui possede et dirige. Le verbe **khalaqa** est un verbe accompli a la 3eme personne (une action achevee dans le passe \u2014 la creation est presentee comme un fait accompli). Le mot **qablikum** est un nom avec pronom possessif (ceux d\u2019avant vous \u2014 la notion de precedence temporelle). Le verbe **tattaquna** est un inaccompli forme VIII de la racine w-q-y (une forme qui dit que la personne fait l\u2019action sur elle-meme \u2014 ici, se premunir soi-meme). La particule la\u2019alla introduit un espoir ou une finalite \u2014 afin que.

\u00A7JUSTIFICATION\u00A7
**gens** \u2014 Le sens retenu est \u00AB Humanite/Peuple \u00BB. Le mot \u00AB gens \u00BB est choisi car c\u2019est le mot le plus courant et universel en francais pour s\u2019adresser a un groupe d\u2019humains. L\u2019alternative \u00AB peuple \u00BB est ecartee car elle implique une nation specifique, \u00AB humanite \u00BB est trop abstrait pour un appel direct.

**servez** \u2014 Le sens retenu est \u00AB Soumission/Servitude \u00BB. Le mot \u00AB servez \u00BB est choisi car il capture le sens premier de e-b-d dans le Lane\u2019s : etre au service de, executer les volontes de. L\u2019alternative \u00AB adorez \u00BB est ecartee car elle appartient au sens \u00AB Adoration/Devotion \u00BB qui est un autre sens de la racine.

**Maitre** \u2014 Le sens retenu est \u00AB Maitrise/Possession \u00BB. Le mot \u00AB Maitre \u00BB est choisi car il capture la relation de possession et de direction. L\u2019alternative \u00AB Seigneur \u00BB est ecartee car c\u2019est du vocabulaire feodale/religieux chretien. \u00AB Educateur \u00BB (sens \u00AB Education/Developpement \u00BB) est ecarte car ce n\u2019est pas le sens premier ici.

**cree** \u2014 Le sens retenu est \u00AB Creation/Production \u00BB. Le mot \u00AB cree \u00BB est le plus direct et courant.

**avant** \u2014 Le sens retenu est \u00AB Anteriorite/Precedence \u00BB. Direct et courant.

**vous premunissiez** \u2014 Le sens retenu est \u00AB Protection/Prevention \u00BB. La forme VIII de w-q-y implique une action reflexive \u2014 se proteger soi-meme. \u00AB Craindre Dieu \u00BB est ecarte car c\u2019est le sens \u00AB Conscience/Piete \u00BB et c\u2019est une interpretation exegetique. \u00AB Etre pieux \u00BB est ecarte pour la meme raison. Le texte dit litteralement \u00AB vous vous protegez \u00BB.

\u00A7CRITIQUE\u00A7
**adorez vs servez** \u2014 Les traductions courantes donnent \u00AB adorez \u00BB pour u\u2019budu. Ce choix vient de l\u2019interpretation religieuse qui a transforme le service (ibada = etre au service de) en un acte de culte exclusivement rituel. Le Lane\u2019s donne comme sens premier \u00AB he served, was a servant \u00BB. Le texte dit \u00AB servez votre Maitre \u00BB \u2014 un ordre de se mettre au service de celui qui possede et dirige, pas uniquement un acte rituel.
**piete vs se premunir** \u2014 Les traductions courantes donnent \u00AB atteindrez la piete \u00BB pour tattaquna. La racine w-q-y signifie \u00AB proteger, se premunir \u00BB. La \u00AB piete \u00BB (taqwa) est une interpretation exegetique qui a transforme l\u2019acte de se proteger en un etat moral. Le texte dit litteralement \u00AB afin que vous vous premunissiez \u00BB.`,
    segments: [
      { fr: "O", phon: "ya", arabic: "\u064A\u0627", is_particle: true, position: 1 },
      { fr: "les", phon: "ayyuha", arabic: "\u0623\u064E\u064A\u0651\u064F\u0647\u064E\u0627", is_particle: true, position: 2 },
      { fr: "gens", pos: "nom", phon: "al-nasu", arabic: "\u0671\u0644\u0646\u0651\u064E\u0627\u0633\u064F", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 3 },
      { fr: "servez", pos: "verbe", phon: "u\u2019budu", arabic: "\u0671\u0639\u0652\u0628\u064F\u062F\u064F\u0648\u0627\u06DF", word_key: "ebd", is_particle: false, sense_retenu: "servir", position: 4 },
      { fr: "votre Maitre", pos: "nom", phon: "rabbakum", arabic: "\u0631\u064E\u0628\u0651\u064E\u0643\u064F\u0645\u064F", word_key: "rbb", is_particle: false, sense_retenu: "maitre", position: 5 },
      { fr: "celui qui", phon: "alladhi", arabic: "\u0671\u0644\u0651\u064E\u0630\u0650\u0649", is_particle: true, position: 6 },
      { fr: "vous a crees", pos: "verbe", phon: "khalaqakum", arabic: "\u062E\u064E\u0644\u064E\u0642\u064E\u0643\u064F\u0645\u0652", word_key: "xlq", is_particle: false, sense_retenu: "creer", position: 7 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 8 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E", is_particle: true, position: 9 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 10 },
      { fr: "avant vous", pos: "nom", phon: "qablikum", arabic: "\u0642\u064E\u0628\u0652\u0644\u0650\u0643\u064F\u0645\u0652", word_key: "qbl", is_particle: false, sense_retenu: "avant", position: 11 },
      { fr: "afin que", phon: "la\u2019alla", arabic: "\u0644\u064E\u0639\u064E\u0644\u0651\u064E", is_particle: true, position: 12 },
      { fr: "vous vous premunissiez", pos: "verbe", phon: "tattaquna", arabic: "\u062A\u064E\u062A\u0651\u064E\u0642\u064F\u0648\u0646\u064E", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 13 }
    ],
    words: [
      {
        word_key: "nws",
        position: 3,
        sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanite/Peuple",
          concepts: {
            "Humanite/Peuple": {
              status: "retenu",
              senses: ["peuple", "les gens", "humanite"],
              proof_ctx: "Le mot al-nasu est un nom defini au pluriel de la racine n-w-s. D\u2019apres les sources etymologiques (Lane\u2019s Arabic-English Lexicon), n-w-s signifie « etre agite, balancer ». Le mot nas designe les etres humains en tant que groupe, sans distinction de tribu, de nation ou de rang. La forme definie avec l\u2019article al- designe l\u2019ensemble des humains. Dans le contexte de ce verset, l\u2019appel est universel : ya ayyuha al-nasu s\u2019adresse a tous les humains sans exception.",
              axe1_verset: "Le champ lexical du verset est celui de l\u2019appel a l\u2019action : servir (ebd), creer (xlq), se premunir (wqy). Le mot al-nasu ouvre cet appel en designant les destinataires. L\u2019appel s\u2019adresse a tous les humains sans distinction — pas a un peuple particulier ni a une communaute restreinte. La construction ya ayyuha est une interpellation directe qui exige l\u2019attention immediate. Le nom defini al-nasu confirme que c\u2019est l\u2019ensemble des gens qui est vise. Ce n\u2019est pas un sous-groupe — c\u2019est tout le monde.",
              axe2_voisins: "Les versets precedents (2:17-20) decrivaient les hypocrites avec des paraboles. Le verset 21 change de registre et revient a un appel direct a l\u2019ensemble des humains. Ce changement de destinataire est significatif : apres avoir decrit les trois categories (ceux qui se premunissent, les recouvrants, les hypocrites), le texte s\u2019adresse maintenant a tous sans distinction. Le verset 22 va detailler les preuves de la creation pour convaincre ces gens.",
              axe3_sourate: "La sourate al-Baqarah utilise ya ayyuha al-nasu a plusieurs reprises pour marquer les appels universels. Cette formule distingue les passages adresses a toute l\u2019humanite de ceux adresses aux enfants d\u2019Israel (ya bani isra\u2019ila) ou aux croyants (ya ayyuha alladhina amanu). Le mot nasu est le terme le plus inclusif de la sourate pour designer les humains.",
              axe4_coherence: "Le Coran utilise al-nasu plus de 240 fois. En 4:1, le meme appel ya ayyuha al-nasu ouvre la sourate al-Nisa. En 22:1, il ouvre le passage sur le tremblement de l\u2019Heure. A chaque fois, l\u2019appel ya ayyuha al-nasu marque un message universel qui concerne tous les humains sans exception. La racine n-w-s avec le sens de mouvement/agitation suggere que les gens sont des etres en mouvement constant.",
              axe5_frequence: "Pour la mission du khalifa, le mot al-nasu rappelle que le message est destine a tous les humains. Le khalifa ne sert pas une tribu ni une elite — il sert l\u2019ensemble des gens. L\u2019appel universel du verset etablit que la responsabilite du khalifa couvre toute l\u2019humanite sans distinction."
            },
            "Mouvement/Agitation": {
              status: "probable",
              senses: ["etre agite", "balancer"],
              proof_ctx: "La racine n-w-s a un sens physique de mouvement et d\u2019agitation. Le Lane\u2019s donne le sens de balancer, d\u2019etre agite. Les humains sont des etres en mouvement constant — le mot nas pourrait porter etymologiquement cette idee d\u2019agitation inherente a la nature humaine. Cependant, dans l\u2019usage coranique, nas designe simplement les gens sans reference explicite a l\u2019agitation.",
              axe1_verset: "Le champ lexical du verset ne porte pas sur le mouvement physique. L\u2019appel est a servir et a se premunir — des actions volontaires, pas des mouvements d\u2019agitation. Le sens de mouvement est etymologiquement present dans la racine mais n\u2019est pas active dans ce contexte. L\u2019agitation reste une nuance de fond, pas le sens operationnel du mot ici.",
              axe2_voisins: "Les versets voisins parlent de creation et de service. Le contexte ne mobilise pas le champ semantique du mouvement ou de l\u2019agitation. Le sens d\u2019humanite/peuple est clairement dominant dans le voisinage immediat.",
              axe3_sourate: "Dans la sourate al-Baqarah, al-nasu est toujours utilise pour designer les humains comme groupe, jamais pour evoquer l\u2019agitation. Le sens de mouvement reste sous-jacent a la racine mais n\u2019est pas active dans la sourate.",
              axe4_coherence: "Le Coran n\u2019utilise jamais nas dans un contexte ou le sens de mouvement/agitation serait le sens principal. Le mot est systematiquement employe pour designer les gens. L\u2019etymologie du mouvement reste un arriere-plan semantique.",
              axe5_frequence: "Le sens de mouvement n\u2019est pas pertinent pour la mission du khalifa dans ce contexte. C\u2019est le sens de peuple/humanite qui est operationnel."
            },
            "Sens isole/Loup": {
              status: "nul",
              senses: ["un loup"],
              proof_ctx: "Le Lane\u2019s mentionne que nas peut designer un loup dans certains contextes rares. Ce sens est totalement hors contexte ici — le verset s\u2019adresse a des humains, pas a des animaux."
            }
          }
        }
      },
      {
        word_key: "ebd",
        position: 4,
        sense_chosen: "servir",
        analysis_axes: {
          sense_chosen: "servir",
          concept_chosen: "Soumission/Servitude",
          concepts: {
            "Soumission/Servitude": {
              status: "retenu",
              senses: ["servir", "etre esclave", "soumettre"],
              proof_ctx: "Le verbe u\u2019budu est un imperatif de la 2eme personne du pluriel de la racine e-b-d. D\u2019apres le Lane\u2019s, e-b-d signifie « servir, etre au service de, etre un serviteur ». Le sens premier est physique et concret : le abd est celui qui sert son maitre, qui execute ses ordres, qui est a sa disposition. L\u2019imperatif donne a ce service la force d\u2019un ordre direct. Le verset dit « servez votre Maitre » — c\u2019est une relation de service entre les gens et celui qui les possede et les dirige.",
              axe1_verset: "Le champ lexical est celui de la relation maitre-serviteur : servir (ebd) + Maitre (rbb) + creer (xlq). Le service est l\u2019acte demande, le Maitre est le destinataire du service, la creation est la justification du service. La structure est logique : celui qui vous a crees est votre Maitre, donc servez-le. Le verbe est a l\u2019imperatif — c\u2019est un ordre, pas une suggestion. Le service est la reponse attendue a la creation.",
              axe2_voisins: "Les versets precedents (2:17-20) decrivaient ceux qui ne servent pas correctement (les hypocrites). Le verset 21 donne l\u2019ordre positif : servez. Le verset 22 va detailler les bienfaits du Maitre pour justifier le service. La progression est : constat des defaillances → ordre de servir → preuves que le service est justifie.",
              axe3_sourate: "La racine e-b-d apparait dans la sourate al-Baqarah a plusieurs reprises. Le service est un theme central de la sourate — elle commence par decrire les categories d\u2019humains face au service (ceux qui servent, ceux qui recouvrent, les hypocrites). Le verset 21 est le premier ordre direct de service dans la sourate.",
              axe4_coherence: "Le Coran utilise la racine e-b-d plus de 270 fois. Le mot ibada (service) est l\u2019un des concepts les plus frequents du Coran. En 51:56, le texte dit que les djinns et les humains ont ete crees pour servir (li-ya\u2019buduni). Le service est la finalite de la creation selon le texte. La forme imperative u\u2019budu revient dans de nombreuses sourates comme ordre fondamental.",
              axe5_frequence: "Pour la mission du khalifa, le service est l\u2019acte fondamental. Le khalifa est celui qui sert le Maitre en gerant la terre. Le service n\u2019est pas un acte rituel isole — c\u2019est l\u2019ensemble de l\u2019activite du khalifa sur terre. Chaque acte de gestion, de justice, de protection est un acte de service."
            },
            "Adoration/Devotion": {
              status: "probable",
              senses: ["adorer", "vouer un culte"],
              proof_ctx: "L\u2019adoration est un sens derive de e-b-d — celui qui sert intensement finit par vouer un culte. Le Lane\u2019s mentionne ce sens comme derive du service. Dans l\u2019usage religieux posterieur, ibada a pris le sens exclusif d\u2019adoration rituelle. Mais le sens premier reste le service — l\u2019adoration est une forme intensifiee du service. Le contexte du verset (Maitre, creation) pointe vers la relation de service plutot que vers le culte rituel.",
              axe1_verset: "Le champ lexical du verset est celui du service concret (Maitre, creation, precedence), pas celui du rituel (priere, jeune, pelerinage). L\u2019adoration comme culte rituel n\u2019est pas le registre de ce verset. Le verset etablit une relation de service basee sur la creation, pas un rituel.",
              axe2_voisins: "Les versets voisins parlent de creation, de terre, de ciel, de fruits — un registre concret de bienfaits materiels. L\u2019adoration rituelle n\u2019est pas le theme du passage. Le service dans ce contexte est la reponse aux bienfaits concrets du Maitre.",
              axe3_sourate: "La sourate al-Baqarah abordera les rituels plus tard (jeune en 2:183, pelerinage en 2:196). Ici, au debut de la sourate, le texte etablit le principe general du service avant de detailler les formes specifiques.",
              axe4_coherence: "Le Coran distingue le service general (ibada) des actes rituels specifiques (salat, sawm, hajj). Le mot u\u2019budu dans ce verset designe le service general — la mise a disposition de soi pour le Maitre.",
              axe5_frequence: "L\u2019adoration comme culte n\u2019est pas exclue mais n\u2019est pas le sens premier dans ce contexte. Le khalifa sert par toute son activite, pas uniquement par les rituels."
            },
            "Sens isole/Chemin battu": {
              status: "nul",
              senses: ["chemin battu"],
              proof_ctx: "Le Lane\u2019s mentionne que ma\u2019bad peut designer un chemin battu par l\u2019usage. Ce sens est hors contexte — le verset parle d\u2019un ordre de servir, pas d\u2019un chemin."
            }
          }
        }
      },
      {
        word_key: "rbb",
        position: 5,
        sense_chosen: "maitre",
        analysis_axes: {
          sense_chosen: "maitre",
          concept_chosen: "Maitrise/Possession",
          concepts: {
            "Maitrise/Possession": {
              status: "retenu",
              senses: ["maitre", "seigneur", "proprietaire", "posseder"],
              proof_ctx: "Le mot rabbakum est en construction idafa avec le pronom possessif 2MP. La racine r-b-b dans le Lane\u2019s donne « maitre, possesseur, celui qui possede et dirige ». Le rabb est celui qui a l\u2019autorite sur ce qu\u2019il possede — il le gere, le dirige, le developpe. La construction « votre Maitre » etablit une relation directe de possession : le Maitre possede ceux a qui il s\u2019adresse.",
              axe1_verset: "Le champ lexical est celui de la hierarchie : servir (ebd) + Maitre (rbb) + creer (xlq). Le Maitre est au centre de cette hierarchie — c\u2019est celui qui est servi parce qu\u2019il a cree. La creation justifie la maitrise : celui qui cree possede ce qu\u2019il a cree. Le verbe « servez » en imperatif + « votre Maitre » forme un couple indissociable — le service est la reponse a la maitrise. La position du mot rabb juste apres le verbe « servez » montre que le Maitre est le destinataire direct du service.",
              axe2_voisins: "Le verset 22 va detailler les actes du Maitre : placer la terre comme lit, le ciel comme structure, faire descendre l\u2019eau, faire sortir les fruits. Ces actes sont ceux d\u2019un maitre qui gere et fournit. Le mot rabb dans le verset 21 annonce cette description detaillee de la maitrise en action.",
              axe3_sourate: "La racine r-b-b apparait des le premier verset de la sourate (al-hamdu lillahi rabbi al-\u2019alamin dans la Fatiha qui precede). Dans al-Baqarah, le mot rabb revient constamment pour designer celui qui possede et dirige l\u2019univers. La maitrise est le theme central de la relation entre Dieu et les humains dans la sourate.",
              axe4_coherence: "Le Coran utilise rabb plus de 900 fois. C\u2019est l\u2019un des mots les plus frequents du texte. En 1:2, rabb al-\u2019alamin designe le Maitre des mondes — la maitrise est universelle. En 7:54, le rabb est celui qui a cree les cieux et la terre puis s\u2019est etabli sur le Trone — la maitrise est liee a la creation et au gouvernement.",
              axe5_frequence: "Pour la mission du khalifa, le Maitre est celui pour qui le khalifa agit. Le khalifa est le representant du Maitre sur terre — il gere au nom du Maitre. La relation khalifa-Maitre est une relation de service et de delegation, pas d\u2019egalite."
            },
            "Education/Developpement": {
              status: "probable",
              senses: ["eduquer", "elever", "nourrir", "developper"],
              proof_ctx: "Le Lane\u2019s donne pour r-b-b le sens d\u2019eduquer, d\u2019elever, de developper progressivement. Le rabb serait celui qui eleve et developpe ce qu\u2019il possede. Ce sens est present dans la racine mais n\u2019est pas le sens principal dans ce verset — le contexte est celui de la maitrise et du service, pas de la pedagogie. Le verset ne parle pas d\u2019education mais de creation et de service.",
              axe1_verset: "Le champ lexical est servir + Maitre + creer. L\u2019education n\u2019est pas dans le registre immediat du verset. Le verbe creer (xlq) n\u2019est pas synonyme d\u2019eduquer — creer est un acte ponctuel, eduquer est un processus. Le verset presente la creation comme justification du service, pas l\u2019education.",
              axe2_voisins: "Les versets 22-23 parlent de creation materielle (terre, ciel, eau, fruits) et de defi intellectuel (produire un chapitre semblable). Le registre est celui de la puissance creatrice et de la maitrise, pas de la pedagogie progressive.",
              axe3_sourate: "La sourate al-Baqarah utilise rabb principalement dans le contexte de la maitrise et de la possession. L\u2019education apparait dans d\u2019autres contextes avec d\u2019autres racines.",
              axe4_coherence: "Le Coran utilise rabb dans des contextes ou la maitrise est dominante. L\u2019education est un sens possible mais secondaire dans la majorite des occurrences coraniques de rabb.",
              axe5_frequence: "Le sens d\u2019education est compatible avec la mission du khalifa mais n\u2019est pas le sens principal dans ce verset."
            },
            "Fixation/Reparation": {
              status: "nul",
              senses: ["fixer", "reparer", "resine"],
              proof_ctx: "Le Lane\u2019s mentionne que r-b-b peut signifier fixer ou reparer. Ce sens est hors contexte — le verset parle de maitrise et de service, pas de reparation."
            },
            "Accumulation": {
              status: "nul",
              senses: ["amasser", "rassembler"],
              proof_ctx: "Le Lane\u2019s mentionne que r-b-b peut signifier rassembler ou accumuler. Ce sens est hors contexte — le verset ne parle pas d\u2019accumulation."
            }
          }
        }
      },
      {
        word_key: "xlq",
        position: 7,
        sense_chosen: "creer",
        analysis_axes: {
          sense_chosen: "creer",
          concept_chosen: "Creation/Production",
          concepts: {
            "Creation/Production": {
              status: "retenu",
              senses: ["creer", "produire", "faconner", "donner forme"],
              proof_ctx: "Le verbe khalaqakum est un accompli de la 3eme personne de la racine kh-l-q avec suffixe -kum (vous). D\u2019apres le Lane\u2019s, kh-l-q signifie « creer, produire, donner existence a quelque chose qui n\u2019existait pas ». L\u2019accompli indique que la creation est un fait acheve — elle a deja eu lieu. Le suffixe -kum fait de la creation un acte personnel : il vous a crees, vous specifiquement. La creation est la justification du service demande.",
              axe1_verset: "Le champ lexical est servir + Maitre + creer. La creation est l\u2019argument qui justifie l\u2019ordre de servir : celui qui vous a crees merite d\u2019etre servi. La structure logique est causale — la creation precede le service et le justifie. Le verbe est a l\u2019accompli (fait acheve) alors que le service est a l\u2019imperatif (ordre present) : la creation passee fonde l\u2019obligation presente. Le mot khalaqakum inclut le pronom « vous » — la creation est personnelle, pas abstraite.",
              axe2_voisins: "Le verset 22 va detailler les actes creatifs : placer la terre, le ciel, faire descendre l\u2019eau, faire sortir les fruits. Le mot khalaqa du verset 21 est le terme general, le verset 22 donne les details. La progression est : creation generale (v21) → creation detaillee (v22) → defi (v23).",
              axe3_sourate: "La racine kh-l-q est omnipresente dans al-Baqarah. La creation est l\u2019un des arguments centraux de la sourate pour justifier le monotheisme et le service. En 2:29, le texte dit qu\u2019Il a cree pour vous tout ce qui est sur terre.",
              axe4_coherence: "Le Coran utilise khalaqa plus de 250 fois. La creation est l\u2019argument fondamental du Coran pour etablir la maitrise de Dieu. En 36:81, le texte demande : « Celui qui a cree les cieux et la terre n\u2019est-il pas capable de creer leur semblable ? » La creation est la preuve de la puissance.",
              axe5_frequence: "Pour la mission du khalifa, la creation est le fondement de sa legitimite. Le khalifa gere ce que le Maitre a cree — il ne possede pas, il gere. La creation rappelle que tout appartient au Createur."
            },
            "Mensonge/Fabrication": {
              status: "nul",
              senses: ["inventer un mensonge", "forger"],
              proof_ctx: "Le Lane\u2019s mentionne que kh-l-q peut signifier inventer un mensonge (ikhtalaqa). Ce sens est hors contexte — le sujet est Dieu qui cree les humains, pas quelqu\u2019un qui invente un mensonge."
            },
            "Usure": {
              status: "nul",
              senses: ["user"],
              proof_ctx: "Le Lane\u2019s mentionne que khalaqa peut signifier user (un vetement use). Hors contexte — le verset parle de creation, pas d\u2019usure."
            }
          }
        }
      },
      {
        word_key: "qbl",
        position: 11,
        sense_chosen: "avant",
        analysis_axes: {
          sense_chosen: "avant",
          concept_chosen: "Anteriorite/Precedence",
          concepts: {
            "Anteriorite/Precedence": {
              status: "retenu",
              senses: ["avant", "precedemment", "d\u2019abord"],
              proof_ctx: "Le mot qablikum est un nom avec pronom possessif 2MP de la racine q-b-l. D\u2019apres le Lane\u2019s, q-b-l a le sens premier de « devant, avant, precedemment ». Le mot qabla designe ce qui precede dans le temps. La construction min qablikum signifie « d\u2019avant vous » — ceux qui ont existe avant vous dans le temps. La precedence temporelle est le sens evident ici.",
              axe1_verset: "Le champ lexical est celui de la creation dans le temps : creer (xlq) + avant (qbl). Le verset elargit la creation au-dela des destinataires directs : il a cree non seulement vous mais aussi ceux d\u2019avant vous. Cela montre que la maitrise du Createur s\u2019etend a toutes les generations. Le mot qablikum ajoute une dimension temporelle a la creation — elle n\u2019est pas ponctuelle, elle couvre l\u2019histoire humaine entiere.",
              axe2_voisins: "Le verset 22 va detailler les bienfaits de la creation qui profitent a toutes les generations. L\u2019eau, la terre, le ciel et les fruits ne sont pas reserves a une seule generation — ils sont la depuis ceux d\u2019avant. La mention de « ceux d\u2019avant vous » dans le verset 21 prepare cette idee de bienfaits durables.",
              axe3_sourate: "La sourate al-Baqarah fait constamment reference aux peuples anterieurs (enfants d\u2019Israel, peuple de Moise, peuple d\u2019Abraham). La notion de precedence temporelle est un theme structurant de la sourate — les lecons du passe eclairent le present.",
              axe4_coherence: "Le Coran utilise min qablikum dans de nombreux versets pour rappeler les generations passees. En 3:137, le texte dit « des exemples ont eu lieu avant vous ». La precedence temporelle sert toujours d\u2019argument — ce qui s\u2019est passe avant vous devrait vous instruire.",
              axe5_frequence: "Pour la mission du khalifa, la precedence rappelle que d\u2019autres ont ete crees avant et ont eu la meme responsabilite. Le khalifa n\u2019est pas le premier — il herite d\u2019une mission qui a ete confiee a ceux d\u2019avant lui."
            },
            "Reception/Accueil": {
              status: "nul",
              senses: ["recevoir", "accepter", "accueillir"],
              proof_ctx: "Le sens de recevoir (qabila) est un autre sens de q-b-l. Hors contexte — la construction min qablikum est temporelle (avant vous), pas receptive."
            },
            "Direction/Face": {
              status: "nul",
              senses: ["face", "cote", "direction"],
              proof_ctx: "Le sens de face/direction (qibla) est un autre sens de q-b-l. Hors contexte — le verset parle de precedence temporelle, pas de direction."
            },
            "Baiser": {
              status: "nul",
              senses: ["embrasser"],
              proof_ctx: "Le sens d\u2019embrasser (qabbala) est un sens derive. Totalement hors contexte."
            },
            "Sens isole/Garantie": {
              status: "nul",
              senses: ["garantie", "caution"],
              proof_ctx: "Le sens de garantie (qabala) est un sens secondaire. Hors contexte — le verset ne parle pas de garantie."
            }
          }
        }
      },
      {
        word_key: "wqy",
        position: 13,
        sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Prevention",
          concepts: {
            "Protection/Prevention": {
              status: "retenu",
              senses: ["proteger", "preserver", "se premunir"],
              proof_ctx: "Le verbe tattaquna est un inaccompli forme VIII de la racine w-q-y. D\u2019apres le Lane\u2019s, w-q-y signifie « proteger, preserver, mettre a l\u2019abri ». La forme VIII (ittaqa) est reflexive — elle signifie « se proteger soi-meme, se premunir ». L\u2019inaccompli indique une action continue et repetee. La particule la\u2019alla introduit la finalite : afin que vous vous premunissiez. Le texte ne dit pas « afin que vous soyez pieux » mais « afin que vous vous protegi\u00E9z vous-memes ».",
              axe1_verset: "Le champ lexical est servir + Maitre + creer + se premunir. La premunition est la finalite du service : servez votre Maitre afin de vous premunir. La logique est : le service du Maitre est l\u2019acte qui vous protege. Se premunir n\u2019est pas un etat moral (la piete) mais un acte concret de protection. La forme VIII insiste sur le caractere reflexif — c\u2019est l\u2019individu qui se protege lui-meme par son service. L\u2019inaccompli montre que cette protection est continue, pas ponctuelle.",
              axe2_voisins: "Le verset 22 va montrer les bienfaits dont il faut se premunir de perdre. Le verset 23 va lancer un defi — ceux qui ne se premunissent pas sont defies de produire un chapitre semblable. La premunition est le fil conducteur : servir (v21) → raisons de servir (v22) → consequences de ne pas servir (v23-24).",
              axe3_sourate: "La racine w-q-y et le mot muttaqin apparaissent des le verset 2:2 (hudan lil-muttaqin — une direction pour ceux qui se premunissent). La premunition est le theme d\u2019ouverture de la sourate. Le verset 21 revient a ce theme apres la description des trois categories d\u2019humains.",
              axe4_coherence: "Le Coran utilise la racine w-q-y plus de 250 fois. La forme VIII ittaqa est la plus frequente. En 3:102, le texte dit « premunissez-vous de Dieu de sa vraie premunition ». La premunition est un acte actif et continu, pas un etat passif. Le Coran ne dit jamais « soyez pieux » — il dit « premunissez-vous ».",
              axe5_frequence: "Pour la mission du khalifa, la premunition est l\u2019attitude fondamentale. Le khalifa se premunit des consequences de ses actes en servant le Maitre. La premunition n\u2019est pas la peur — c\u2019est la prudence active de celui qui sait que ses actes ont des consequences."
            },
            "Conscience/Piete": {
              status: "probable",
              senses: ["craindre Dieu", "etre pieux", "piete"],
              proof_ctx: "La piete (taqwa) est le sens que les traductions religieuses donnent a cette racine. Le Lane\u2019s mentionne que ittaqa peut signifier « craindre Dieu, etre pieux ». Ce sens est derive — celui qui se premunit contre les consequences de ses actes finit par developper une conscience. Mais le sens premier est la protection, pas la piete. La piete est le resultat de la premunition, pas son synonyme.",
              axe1_verset: "La piete comme etat moral serait compatible avec le verset mais ne correspond pas a la structure grammaticale. La forme VIII est reflexive (se proteger soi-meme), pas morale (etre dans un etat de piete). Le verset dit « afin que vous vous premunissiez », pas « afin que vous deveniez pieux ».",
              axe2_voisins: "Les versets voisins parlent d\u2019actions concretes (servir, creer, placer, faire descendre). Le registre est celui de l\u2019action, pas de l\u2019etat moral. La piete comme etat passif ne s\u2019integre pas naturellement dans ce registre d\u2019action.",
              axe3_sourate: "La sourate al-Baqarah utilise muttaqin des le verset 2 dans un contexte ou la premunition est active (ils font la priere, ils depensent). La piete passive n\u2019est pas le registre de la sourate.",
              axe4_coherence: "Le Coran associe toujours ittaqa a des actes concrets, jamais a un etat contemplatif. La premunition est active — c\u2019est un faire, pas un etre.",
              axe5_frequence: "La piete passive ne sert pas la mission du khalifa. C\u2019est la premunition active — agir pour eviter les consequences — qui est operationnelle."
            },
            "Prudence": {
              status: "nul",
              senses: ["prudence", "prendre garde"],
              proof_ctx: "La prudence est un sens proche de la premunition mais plus faible. Le Lane\u2019s ne distingue pas la prudence de la protection — c\u2019est le meme concept avec moins d\u2019intensite. Le texte utilise la forme VIII qui est plus intense que la simple prudence."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:22 — verse_id=29
  // =====================================================
  22: {
    verse_id: 29,
    translation_arab: "Celui qui a place pour vous la terre comme lit et le ciel comme structure, et a fait descendre du ciel de l\u2019eau, puis en a fait sortir des fruits comme provision pour vous \u2014 alors ne placez pas pour Dieu des rivaux, alors que vous savez.",
    full_translation: "C\u2019est Lui qui vous a fait la terre pour lit, et le ciel pour toit ; qui precipite la pluie du ciel et par elle fait surgir toute sorte de fruits pour vous nourrir, ne Lui cherchez donc pas des egaux, alors que vous savez.",
    translation_explanation: `\u00A7DEMARCHE\u00A7
Ce verset est une description de la creation qui sert d\u2019argument pour le monotheisme. Le verbe **ja\u2019ala** (accompli, 3eme personne) signifie \u00AB il a place/designe \u00BB \u2014 c\u2019est un acte de designation, pas de creation ex nihilo (pour cela le Coran utilise khalaqa). Le mot **firashan** est un nom indefini accusatif (complement d\u2019objet second) de la racine f-r-sh qui signifie \u00AB etaler, etendre \u00BB. Le Lane\u2019s donne \u00AB a bed, or a thing that is spread upon the ground \u00BB. Le mot **bina\u2019an** de la racine b-n-y signifie \u00AB structure, construction \u00BB. Le verbe **anzala** est un accompli forme IV (une forme qui dit \u00AB faire faire \u00BB \u2014 ici, faire descendre) de la racine n-z-l. Le verbe **akhraja** est egalement un accompli forme IV (faire sortir) de la racine kh-r-j. Le mot **al-thamarati** est un nom defini pluriel (les fruits) de la racine th-m-r. Le mot **rizqan** est un nom indefini (une provision) de la racine r-z-q. Le mot **andadan** est un nom pluriel indefini (des rivaux, des egaux) de la racine n-d-d. Le Lane\u2019s donne \u00AB a like, a fellow, a peer; an equal; a match \u00BB.

\u00A7JUSTIFICATION\u00A7
**placer** \u2014 Le sens retenu est \u00AB Action/Realisation \u00BB. Le mot \u00AB placer \u00BB est choisi car ja\u2019ala exprime la designation d\u2019une fonction \u2014 il a place la terre dans le role de lit. L\u2019alternative \u00AB faire \u00BB est ecartee car trop vague. \u00AB Creer \u00BB est ecarte car c\u2019est un autre verbe (khalaqa).

**lit** \u2014 Le sens retenu est \u00AB Etalement/Literie \u00BB. Le mot \u00AB lit \u00BB est choisi car firash dans le Lane\u2019s designe ce qui est etendu pour s\u2019y allonger. L\u2019alternative \u00AB tapis \u00BB est ecartee car moins evocateur de la fonction de repos. \u00AB Etendre \u00BB est ecarte car c\u2019est un verbe.

**structure** \u2014 Le sens retenu est \u00AB Construction/Edification \u00BB. Le mot \u00AB structure \u00BB est choisi car bina\u2019 dans le Lane\u2019s designe ce qui est construit, edifie. L\u2019alternative \u00AB toit \u00BB est ecartee car c\u2019est une interpretation qui restreint le sens \u2014 le texte ne dit pas \u00AB toit \u00BB mais \u00AB construction \u00BB.

**rivaux** \u2014 Le sens retenu est \u00AB Rivalite/Egalite \u00BB. Le mot \u00AB rivaux \u00BB est choisi car nidd dans le Lane\u2019s designe \u00AB celui qui rivalise avec un autre, qui pretend etre son egal \u00BB. L\u2019alternative \u00AB egaux \u00BB est ecartee car elle est neutre \u2014 nidd implique une rivalite, une pretention a l\u2019egalite.

\u00A7CRITIQUE\u00A7
**toit vs structure** \u2014 Les traductions courantes donnent \u00AB toit \u00BB pour bina\u2019. Le Lane\u2019s donne \u00AB a building, structure, edifice \u00BB. Le mot \u00AB toit \u00BB est une restriction du sens qui vient de l\u2019interpretation des exegetes \u2014 le texte dit \u00AB structure/construction \u00BB, pas \u00AB toit \u00BB. Le sens du verset change : \u00AB le ciel comme toit \u00BB fait du ciel un couvercle au-dessus de la terre, \u00AB le ciel comme structure \u00BB fait du ciel une construction elaboree.
**egaux vs rivaux** \u2014 Les traductions courantes donnent \u00AB egaux \u00BB pour andad. Le Lane\u2019s donne \u00AB nidd = a rival, a competitor \u00BB. Le texte ne dit pas simplement \u00AB ne faites pas d\u2019egaux \u00BB mais \u00AB ne placez pas de rivaux \u00BB \u2014 la nuance est que le rival pretend activement a la place de Dieu.`,
    segments: [
      { fr: "celui qui", phon: "alladhi", arabic: "\u0671\u0644\u0651\u064E\u0630\u0650\u0649", is_particle: true, position: 1 },
      { fr: "a place", pos: "verbe", phon: "ja\u2019ala", arabic: "\u062C\u064E\u0639\u064E\u0644\u064E", word_key: "jel", is_particle: false, sense_retenu: "placer", position: 2 },
      { fr: "pour vous", phon: "lakum", arabic: "\u0644\u064E\u0643\u064F\u0645\u064F", is_particle: true, position: 3 },
      { fr: "la terre", pos: "nom", phon: "al-arda", arabic: "\u0671\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u064E", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 4 },
      { fr: "un lit", pos: "nom", phon: "firashan", arabic: "\u0641\u0650\u0631\u064E\u0670\u0634\u064B\u0627", word_key: "fr\u0161", is_particle: false, sense_retenu: "lit", position: 5 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 6 },
      { fr: "le ciel", pos: "nom", phon: "al-sama\u2019a", arabic: "\u0671\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0653\u0621\u064E", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 7 },
      { fr: "une structure", pos: "nom", phon: "bina\u2019an", arabic: "\u0628\u0650\u0646\u064E\u0627\u0653\u0621\u064B", word_key: "bny", is_particle: false, sense_retenu: "structure", position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 9 },
      { fr: "a fait descendre", pos: "verbe", phon: "anzala", arabic: "\u0623\u064E\u0646\u0632\u064E\u0644\u064E", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 10 },
      { fr: "du", phon: "min", arabic: "\u0645\u0650\u0646\u064E", is_particle: true, position: 11 },
      { fr: "ciel", pos: "nom", phon: "al-sama\u2019i", arabic: "\u0671\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0653\u0621\u0650", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 12 },
      { fr: "de l\u2019eau", pos: "nom", phon: "ma\u2019an", arabic: "\u0645\u064E\u0627\u0653\u0621\u064B", word_key: "mwh", is_particle: false, sense_retenu: "eau", position: 13 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064E", is_particle: true, position: 14 },
      { fr: "a fait sortir", pos: "verbe", phon: "akhraja", arabic: "\u0623\u064E\u062E\u0652\u0631\u064E\u062C\u064E", word_key: "xrj", is_particle: false, sense_retenu: "faire sortir", position: 15 },
      { fr: "avec elle", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650\u06E6", is_particle: true, position: 16 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u064E", is_particle: true, position: 17 },
      { fr: "des fruits", pos: "nom", phon: "al-thamarati", arabic: "\u0671\u0644\u062B\u0651\u064E\u0645\u064E\u0631\u064E\u0670\u062A\u0650", word_key: "thmr", is_particle: false, sense_retenu: "fruit", position: 18 },
      { fr: "une provision", pos: "nom", phon: "rizqan", arabic: "\u0631\u0650\u0632\u0652\u0642\u064B\u0627", word_key: "rzq", is_particle: false, sense_retenu: "provision", position: 19 },
      { fr: "pour vous", phon: "lakum", arabic: "\u0644\u0651\u064E\u0643\u064F\u0645\u0652", is_particle: true, position: 20 },
      { fr: "alors ne", phon: "fa-la", arabic: "\u0641\u064E\u0644\u064E\u0627", is_particle: true, position: 21 },
      { fr: "placez", pos: "verbe", phon: "taj\u2019alu", arabic: "\u062A\u064E\u062C\u0652\u0639\u064E\u0644\u064F\u0648\u0627\u06DF", word_key: "jel", is_particle: false, sense_retenu: "placer", position: 22 },
      { fr: "pour Dieu", pos: "nom", phon: "lillahi", arabic: "\u0644\u0650\u0644\u0651\u064E\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 23 },
      { fr: "des rivaux", pos: "nom", phon: "andadan", arabic: "\u0623\u064E\u0646\u062F\u064E\u0627\u062F\u064B\u0627", word_key: "ndd", is_particle: false, sense_retenu: "rival", position: 24 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 25 },
      { fr: "vous", phon: "antum", arabic: "\u0623\u064E\u0646\u062A\u064F\u0645\u0652", is_particle: true, position: 26 },
      { fr: "savez", pos: "verbe", phon: "ta\u2019lamuna", arabic: "\u062A\u064E\u0639\u0652\u0644\u064E\u0645\u064F\u0648\u0646\u064E", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 27 }
    ],
    words: [
      {
        word_key: "jel",
        position: 2,
        sense_chosen: "placer",
        analysis_axes: {
          sense_chosen: "placer",
          concept_chosen: "Action/Realisation",
          concepts: {
            "Action/Realisation": {
              status: "retenu",
              senses: ["placer", "designer", "rendre"],
              proof_ctx: "Le verbe ja\u2019ala est un accompli de la 3eme personne de la racine j-e-l. D\u2019apres le Lane\u2019s, j-e-l signifie « placer, designer une fonction, rendre quelque chose dans un certain etat ». Ce n\u2019est pas creer (khalaqa) mais designer — il a place la terre dans le role de lit. Le ja\u2019l est un acte d\u2019attribution de fonction. Le verset utilise ja\u2019ala deux fois : une fois pour l\u2019acte positif (placer la terre comme lit) et une fois pour l\u2019interdiction (ne placez pas de rivaux).",
              axe1_verset: "Le champ lexical est celui de la mise en place : placer (jel), terre (ard), lit (frsh), ciel (smw), structure (bny). Le verbe ja\u2019ala organise tout le verset — il est l\u2019acte central qui attribue des fonctions aux elements de la creation. La terre recoit la fonction de lit, le ciel la fonction de structure. Le verset se termine par la negation du meme verbe : ne placez pas de rivaux. Le parallele est delibere — Dieu place des fonctions benefiques, les humains ne doivent pas placer de rivaux.",
              axe2_voisins: "Le verset 21 utilisait khalaqa (creer). Le verset 22 utilise ja\u2019ala (placer). La distinction est significative : creer est donner l\u2019existence, placer est attribuer une fonction. Le Createur du verset 21 est aussi l\u2019Organisateur du verset 22 — il ne se contente pas de creer, il organise. Le verset 23 va passer au defi — apres la creation et l\u2019organisation, le texte defie les sceptiques.",
              axe3_sourate: "La racine j-e-l est tres frequente dans al-Baqarah. La sourate utilise ja\u2019ala pour decrire les actes d\u2019organisation de Dieu : il place des fonctions, il designe des roles (en 2:30, ja\u2019ala khalifa — il a place un khalifa sur terre). Le placement est l\u2019acte d\u2019un maitre qui organise son domaine.",
              axe4_coherence: "Le Coran utilise ja\u2019ala plus de 300 fois. En 2:30, Dieu dit « je vais placer sur terre un khalifa ». En 21:30, le texte dit « nous avons place a partir de l\u2019eau tout etre vivant ». Le ja\u2019l est l\u2019acte d\u2019organisation qui suit la creation. Le Coran distingue systematiquement khalaqa (creer) de ja\u2019ala (placer/organiser).",
              axe5_frequence: "Pour la mission du khalifa, le placement est l\u2019acte fondamental. Le khalifa est celui que Dieu a place sur terre — il est un ja\u2019l divin. Comprendre ja\u2019ala, c\u2019est comprendre que la mission du khalifa est un placement delibere, pas un hasard."
            }
          }
        }
      },
      {
        word_key: "ard",
        position: 4,
        sense_chosen: "terre",
        analysis_axes: {
          sense_chosen: "terre",
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "terrain"],
              proof_ctx: "Le mot al-arda est un nom defini a l\u2019accusatif de la racine a-r-d. D\u2019apres le Lane\u2019s, a-r-d designe la terre, le sol, la surface sur laquelle on marche. Le mot est defini avec l\u2019article al- — c\u2019est LA terre, la terre connue de tous. Dans le verset, la terre recoit la fonction de lit (firash) — elle est ce qui est etendu pour le repos des humains.",
              axe1_verset: "Le champ lexical est celui des elements naturels : terre (ard), ciel (smw), eau (mwh), fruits (thmr). La terre est le premier element mentionne — elle est la base sur laquelle tout repose. La construction « la terre comme lit » fait de la terre un espace de confort et de repos. Le verset oppose la terre (en bas, le lit) au ciel (en haut, la structure) — les deux elements encadrent l\u2019espace de vie humain.",
              axe2_voisins: "Le verset 21 parlait de creation en general. Le verset 22 commence par la terre comme premier detail de cette creation. La terre est le lieu de vie des humains — c\u2019est la premiere chose que le Maitre a placee pour eux. Le verset 23 va defier les sceptiques de produire quelque chose de comparable.",
              axe3_sourate: "La terre est un theme majeur d\u2019al-Baqarah. En 2:11, les corrupteurs corrompent la terre. En 2:22, Dieu place la terre comme lit. En 2:30, le khalifa est place sur terre. La terre est le theatre de la mission humaine dans toute la sourate.",
              axe4_coherence: "Le Coran mentionne al-ard plus de 450 fois. La terre est l\u2019espace confie aux humains pour exercer leur mission de khalifa. En 7:10, le texte dit « nous vous avons etablis sur terre et y avons place pour vous des moyens de subsistance ». La terre est le don fondamental.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le lieu de l\u2019exercice de sa responsabilite. Le khalifa gere la terre au nom du Maitre. La terre comme lit signifie que le Maitre a prepare un espace confortable pour que le khalifa puisse travailler."
            }
          }
        }
      },
      {
        word_key: "fr\u0161",
        position: 5,
        sense_chosen: "lit",
        analysis_axes: {
          sense_chosen: "lit",
          concept_chosen: "Etalement/Literie",
          concepts: {
            "Etalement/Literie": {
              status: "retenu",
              senses: ["lit", "ce qui est etendu", "couche"],
              proof_ctx: "Le mot firashan est un nom indefini a l\u2019accusatif de la racine f-r-sh. D\u2019apres le Lane\u2019s, f-r-sh signifie « etaler, etendre sur le sol ». Le firash est « a bed, or a thing that is spread upon the ground for sleeping or sitting ». C\u2019est ce qu\u2019on etend pour s\u2019y reposer — un lit, une couche, un tapis etendu. Le mot est indefini (firashan, pas al-firash) — la terre est UN lit, pas LE lit, ce qui laisse la metaphore ouverte.",
              axe1_verset: "Le champ lexical est celui de l\u2019amenagement : placer (jel) + terre (ard) + lit (frsh) + ciel (smw) + structure (bny). Le lit est la fonction assignee a la terre par le verbe ja\u2019ala. La terre n\u2019EST pas un lit — elle a ete PLACEE comme lit. La nuance est importante : ja\u2019ala ne dit pas ce que la chose est mais la fonction qu\u2019elle recoit. Le lit evoque le confort, le repos, la surface douce sur laquelle on peut vivre. L\u2019image est celle d\u2019un maitre qui prepare le lit pour ses serviteurs.",
              axe2_voisins: "Le verset 21 parlait de creation en general. Le verset 22 detaille : la terre comme lit et le ciel comme structure. Le lit et la structure forment un couple complementaire — le lit est en bas (horizontal, repos), la structure est en haut (vertical, protection). Les deux elements creent un espace de vie complet. L\u2019eau descend de la structure vers le lit.",
              axe3_sourate: "La sourate al-Baqarah revient plusieurs fois sur les bienfaits de la creation terrestre. Le lit est la premiere image de ce bienfait — la terre preparee pour le confort humain. Cette image est en contraste avec la corruption de la terre mentionnee au verset 2:11.",
              axe4_coherence: "Le Coran utilise firash en 2:22 et des termes similaires (mahd, bisatan) dans d\u2019autres sourates pour decrire la terre comme surface etendue. En 51:48, le texte dit « la terre, nous l\u2019avons etendue ». L\u2019image de l\u2019etalement est recurrente pour decrire la terre comme espace de vie prepare.",
              axe5_frequence: "Pour la mission du khalifa, le lit rappelle que la terre a ete preparee pour l\u2019activite humaine. Le khalifa travaille sur un terrain prepare — la terre n\u2019est pas hostile, elle est un lit. Cette image encourage l\u2019action : le terrain est pret, il reste a travailler."
            }
          }
        }
      },
      {
        word_key: "smw",
        position: 7,
        sense_chosen: "ciel",
        analysis_axes: {
          sense_chosen: "ciel",
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["ciel", "ce qui est en haut", "ce qui couvre"],
              proof_ctx: "Le mot al-sama\u2019a est un nom defini a l\u2019accusatif de la racine s-m-w. D\u2019apres le Lane\u2019s, s-m-w signifie « etre eleve, etre en haut ». Le sama\u2019 est ce qui est au-dessus — le ciel, la voute celeste. Le mot est defini avec l\u2019article al- — c\u2019est LE ciel connu. Dans le verset, le ciel recoit la fonction de structure (bina\u2019) — il est ce qui est construit au-dessus.",
              axe1_verset: "Le champ lexical oppose le bas (terre-lit) et le haut (ciel-structure). Le ciel est le deuxieme element de l\u2019amenagement divin. La terre est le lit, le ciel est la structure — les deux forment l\u2019espace de vie. Le ciel est aussi la source de l\u2019eau (anzala min al-sama\u2019i ma\u2019an) — il a une fonction double : structure et source. La mention du ciel deux fois (comme structure et comme source d\u2019eau) montre son importance dans le verset.",
              axe2_voisins: "Le verset 21 parlait de la creation des humains. Le verset 22 passe aux elements qui encadrent leur vie : terre et ciel. Le verset 23 va defier les sceptiques. Le ciel dans le verset 22 est un bienfait concret — il structure l\u2019espace et fournit l\u2019eau.",
              axe3_sourate: "Le ciel est mentionne de nombreuses fois dans al-Baqarah, souvent en paire avec la terre. En 2:29, le texte dit qu\u2019Il a cree pour vous tout ce qui est sur terre puis s\u2019est tourne vers le ciel. Le couple terre-ciel est structurant dans la sourate.",
              axe4_coherence: "Le Coran mentionne al-sama\u2019 plus de 300 fois. Le ciel est l\u2019espace au-dessus qui fournit l\u2019eau, la lumiere et les signes. En 67:3, le texte parle des sept cieux superposes. Le ciel est une construction complexe dans le Coran, pas une simple voute.",
              axe5_frequence: "Pour la mission du khalifa, le ciel est la source des ressources (eau, lumiere) necessaires a la gestion de la terre. Le khalifa depend du ciel pour faire prosperer la terre."
            }
          }
        }
      },
      {
        word_key: "bny",
        position: 8,
        sense_chosen: "structure",
        analysis_axes: {
          sense_chosen: "structure",
          concept_chosen: "Construction/Edification",
          concepts: {
            "Construction/Edification": {
              status: "retenu",
              senses: ["structure", "construction", "edifice"],
              proof_ctx: "Le mot bina\u2019an est un nom indefini a l\u2019accusatif de la racine b-n-y. D\u2019apres le Lane\u2019s, b-n-y signifie « construire, edifier, batir ». Le bina\u2019 est « a building, structure, edifice ». C\u2019est le resultat de l\u2019acte de construire — une structure batie avec ordre et intention. Le mot est indefini (bina\u2019an, pas al-bina\u2019) — le ciel est UNE structure, ce qui laisse ouverte la nature de cette construction.",
              axe1_verset: "Le champ lexical est celui de l\u2019amenagement : lit (frsh) et structure (bny) sont deux fonctions complementaires. Le lit est horizontal (repos), la structure est verticale (construction). Le verset assigne au ciel la fonction de structure — le ciel n\u2019EST pas une structure, il a ete PLACE comme structure. Le parallele avec le lit est exact : la terre est placee comme lit, le ciel est place comme structure. Les deux recoivent une fonction du meme verbe ja\u2019ala.",
              axe2_voisins: "Le verset 21 parlait de creation. Le verset 22 decrit l\u2019organisation : le ciel comme structure est un acte d\u2019architecture cosmique. Le Maitre n\u2019a pas seulement cree — il a construit, organise, structure. Le verset 23 defiera les sceptiques de produire une construction comparable.",
              axe3_sourate: "La racine b-n-y apparait dans al-Baqarah dans des contextes de construction. En 2:127, Ibrahim et Ismail elevent les fondations de la Maison (yarf\u2019u al-qawa\u2019ida min al-bayt). La construction est un theme de la sourate — de la construction cosmique a la construction du temple.",
              axe4_coherence: "Le Coran utilise bina\u2019 et ses derives pour decrire la construction des cieux. En 79:27, le texte dit « le ciel, Il l\u2019a construit » (bana-ha). En 91:5, « le ciel et ce qui l\u2019a construit ». La construction du ciel est un theme recurrent qui depasse la simple idee de toit.",
              axe5_frequence: "Pour la mission du khalifa, la structure du ciel rappelle que l\u2019univers est construit avec ordre. Le khalifa doit aussi construire avec ordre — sa gestion de la terre doit refleter l\u2019ordre de la construction celeste."
            }
          }
        }
      },
      {
        word_key: "nzl",
        position: 10,
        sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/Revelation",
          concepts: {
            "Descente/Revelation": {
              status: "retenu",
              senses: ["faire descendre", "envoyer d\u2019en haut"],
              proof_ctx: "Le verbe anzala est un accompli forme IV de la racine n-z-l. D\u2019apres le Lane\u2019s, n-z-l signifie « descendre, s\u2019etablir ». La forme IV (anzala) est causative — « faire descendre ». Le sujet est Dieu qui fait descendre l\u2019eau du ciel. L\u2019accompli indique un fait acheve. La construction min al-sama\u2019i (du ciel) indique l\u2019origine de la descente.",
              axe1_verset: "Le champ lexical est celui du mouvement vertical : le ciel est en haut (structure), l\u2019eau descend (anzala), les fruits sortent (akhraja). Le verset decrit un cycle : le ciel est la source, l\u2019eau descend, la terre produit. Le verbe anzala est le moment pivot de ce cycle — il relie le haut et le bas. La descente de l\u2019eau est un bienfait concret qui justifie le service du Maitre.",
              axe2_voisins: "Le verset 21 parlait de creation et de service. Le verset 22 montre un bienfait concret du Maitre : la descente de l\u2019eau qui produit les fruits. Cette descente est la preuve que le Maitre fournit a ceux qu\u2019il a crees. Le verset 23 va defier les sceptiques de reproduire cela.",
              axe3_sourate: "La racine n-z-l est omnipresente dans al-Baqarah. En 2:2, le Coran est « ce qui a ete fait descendre » (nuzzila). En 2:22, c\u2019est l\u2019eau qui descend du ciel. La sourate utilise la meme racine pour la descente du texte et la descente de l\u2019eau — les deux sont des dons du Maitre.",
              axe4_coherence: "Le Coran utilise anzala plus de 200 fois. La descente est l\u2019un des concepts les plus frequents du texte — Dieu fait descendre l\u2019eau, le Livre, la tranquillite, les anges. Chaque descente est un acte de bienfaisance du haut vers le bas. En 15:22, le texte dit « nous avons fait descendre du ciel de l\u2019eau et nous vous en avons abreuves ».",
              axe5_frequence: "Pour la mission du khalifa, la descente de l\u2019eau rappelle que les ressources viennent du Maitre. Le khalifa gere des ressources qu\u2019il n\u2019a pas creees — il est gestionnaire, pas source."
            }
          }
        }
      },
      {
        word_key: "mwh",
        position: 13,
        sense_chosen: "eau",
        analysis_axes: {
          sense_chosen: "eau",
          concept_chosen: "Eau/Liquide",
          concepts: {
            "Eau/Liquide": {
              status: "retenu",
              senses: ["eau", "liquide"],
              proof_ctx: "Le mot ma\u2019an est un nom indefini a l\u2019accusatif de la racine m-w-h. D\u2019apres le Lane\u2019s, m-w-h designe l\u2019eau, le liquide fondamental. Le mot est indefini — c\u2019est DE l\u2019eau, pas L\u2019eau, ce qui souligne l\u2019abondance indefinie de la ressource. L\u2019eau est l\u2019element qui relie le ciel a la terre — elle descend de la structure vers le lit.",
              axe1_verset: "Le champ lexical est celui du cycle naturel : ciel (source) → eau (descente) → terre (reception) → fruits (production). L\u2019eau est l\u2019agent de la fertilite — sans eau, pas de fruits. Le verset place l\u2019eau comme l\u2019intermediaire entre le ciel et la provision. La preposition min (du) + al-sama\u2019i (ciel) montre que l\u2019eau vient d\u2019en haut. Le bihi (avec elle) qui suit montre que l\u2019eau est l\u2019instrument de la production des fruits.",
              axe2_voisins: "Le verset 21 parlait de creation. Le verset 22 detaille les bienfaits concrets, et l\u2019eau est le bienfait central — elle est la cause de la provision (rizq). Le verset 23 defiera ceux qui doutent de la source de ces bienfaits.",
              axe3_sourate: "L\u2019eau apparait dans al-Baqarah comme bienfait et comme epreuve. En 2:60, Moise frappe le rocher et l\u2019eau jaillit. En 2:74, les pierres laissent couler l\u2019eau. L\u2019eau est a la fois un don celeste et un miracle.",
              axe4_coherence: "Le Coran mentionne l\u2019eau (ma\u2019) plus de 60 fois. En 21:30, le texte dit « nous avons place a partir de l\u2019eau tout etre vivant ». L\u2019eau est l\u2019element fondamental de la vie dans le Coran. Chaque mention de l\u2019eau rappelle la dependance des humains envers le Maitre.",
              axe5_frequence: "Pour la mission du khalifa, l\u2019eau est la ressource la plus precieuse a gerer. Le khalifa doit proteger et distribuer l\u2019eau equitablement — c\u2019est le premier acte de gestion responsable."
            }
          }
        }
      },
      {
        word_key: "xrj",
        position: 15,
        sense_chosen: "faire sortir",
        analysis_axes: {
          sense_chosen: "faire sortir",
          concept_chosen: "Sortie/Extraction",
          concepts: {
            "Sortie/Extraction": {
              status: "retenu",
              senses: ["faire sortir", "extraire", "produire"],
              proof_ctx: "Le verbe akhraja est un accompli forme IV de la racine kh-r-j. D\u2019apres le Lane\u2019s, kh-r-j signifie « sortir, aller dehors ». La forme IV (akhraja) est causative — « faire sortir ». Le sujet est Dieu qui fait sortir les fruits de la terre par l\u2019intermediaire de l\u2019eau. L\u2019accompli indique un fait acheve. Le pronom bihi (avec elle, c\u2019est-a-dire l\u2019eau) montre que l\u2019eau est l\u2019instrument de cette extraction.",
              axe1_verset: "Le champ lexical est celui de la production : faire descendre l\u2019eau → faire sortir les fruits. Le verbe akhraja complete anzala — l\u2019eau descend du ciel, les fruits sortent de la terre. Le mouvement est double : du haut vers le bas (descente) et de l\u2019interieur vers l\u2019exterieur (extraction). Le verset decrit un cycle complet de production. La particule fa (alors, puis) marque la consequence : la descente de l\u2019eau CAUSE la sortie des fruits.",
              axe2_voisins: "Le verset 21 parlait de creation. Le verset 22 montre la production en detail : l\u2019eau descend, les fruits sortent. C\u2019est la preuve concrete que le Maitre fournit. Le verset 23 va defier ceux qui doutent de cette provision.",
              axe3_sourate: "La racine kh-r-j apparait dans al-Baqarah dans differents contextes. En 2:61, les enfants d\u2019Israel demandent que la terre fasse sortir ses legumes. La sortie des fruits de la terre est un theme de subsistance dans la sourate.",
              axe4_coherence: "Le Coran utilise akhraja dans de nombreux versets pour decrire la production de la terre. En 6:99, « c\u2019est Lui qui fait descendre du ciel de l\u2019eau, puis nous en faisons sortir toute pousse ». Le pattern anzala + akhraja est recurrent dans le Coran pour decrire le cycle de la fertilite.",
              axe5_frequence: "Pour la mission du khalifa, faire sortir les fruits de la terre est l\u2019une des taches concretes de la gestion. Le khalifa cultive, exploite et fait produire la terre — il imite a son echelle l\u2019acte divin de faire sortir."
            }
          }
        }
      },
      {
        word_key: "thmr",
        position: 18,
        sense_chosen: "fruit",
        analysis_axes: {
          sense_chosen: "fruit",
          concept_chosen: "Fruit/Produit",
          concepts: {
            "Fruit/Produit": {
              status: "retenu",
              senses: ["fruit", "produit", "recolte"],
              proof_ctx: "Le mot al-thamarati est un nom defini au pluriel au genitif de la racine th-m-r. D\u2019apres le Lane\u2019s, th-m-r signifie « porter des fruits, produire ». Le thamar est le fruit de l\u2019arbre, la production de la terre. Le pluriel avec l\u2019article defini (al-thamarati) designe l\u2019ensemble des fruits — tous les types de production vegetale. La preposition min (de, parmi) indique que la provision est extraite des fruits.",
              axe1_verset: "Le champ lexical est celui de la chaine de production : eau (cause) → fruits (resultat) → provision (finalite). Les fruits sont le resultat intermediaire entre l\u2019eau qui descend et la provision qui nourrit. Le verset suit la chaine logique de bout en bout : ciel → eau → terre → fruits → provision. Les fruits sont l\u2019aboutissement visible du cycle naturel.",
              axe2_voisins: "Le verset 21 etablissait la relation de service. Le verset 22 fournit les preuves de la bienveillance du Maitre, et les fruits sont la preuve la plus tangible — on les voit, on les touche, on les mange. Le verset 23 va defier ceux qui doutent malgre ces preuves concretes.",
              axe3_sourate: "Les fruits apparaissent dans al-Baqarah comme bienfait divin. En 2:126, Ibrahim demande que la ville soit pourvue de fruits. En 2:266, la parabole du jardin mentionne les dattiers et les vignes. Les fruits sont le symbole de la prosperite dans la sourate.",
              axe4_coherence: "Le Coran mentionne les fruits (thamar) dans de nombreux versets comme preuve de la bienveillance divine. En 14:32, « Il a fait descendre du ciel de l\u2019eau et a fait sortir des fruits comme provision pour vous ». La formule est quasi identique a 2:22.",
              axe5_frequence: "Pour la mission du khalifa, les fruits sont le resultat concret de la gestion de la terre. Le khalifa recolte ce que la terre produit grace a l\u2019eau du ciel — il est le gestionnaire de cette chaine de production."
            }
          }
        }
      },
      {
        word_key: "rzq",
        position: 19,
        sense_chosen: "provision",
        analysis_axes: {
          sense_chosen: "provision",
          concept_chosen: "Provision/Subsistance",
          concepts: {
            "Provision/Subsistance": {
              status: "retenu",
              senses: ["provision", "subsistance", "ce qui est fourni"],
              proof_ctx: "Le mot rizqan est un nom indefini a l\u2019accusatif de la racine r-z-q. D\u2019apres le Lane\u2019s, r-z-q signifie « pourvoir, fournir de la subsistance ». Le rizq est ce qui est fourni pour la subsistance — la nourriture, les moyens de vie. Le mot est indefini (rizqan, pas al-rizq) — c\u2019est UNE provision, ce qui souligne l\u2019abondance indefinie. Le lakum (pour vous) qui suit montre que la provision est destinee aux humains.",
              axe1_verset: "Le champ lexical est celui de la finalite : les fruits sont extraits COMME provision POUR vous. Le mot rizq est le but final de la chaine de production decrite dans le verset. Tout converge vers la provision : le ciel envoie l\u2019eau, la terre produit les fruits, les fruits sont une provision. Le verset etablit que le Maitre pourvoit — c\u2019est l\u2019argument final avant l\u2019interdiction des rivaux.",
              axe2_voisins: "Le verset 21 demandait le service. Le verset 22 montre que le Maitre fournit en retour — la provision est la contrepartie du service. C\u2019est un echange : servez le Maitre qui vous pourvoit. Le verset 23 va defier ceux qui refusent cet echange.",
              axe3_sourate: "La racine r-z-q est tres frequente dans al-Baqarah. En 2:3, les premunissants depensent de ce qui leur a ete fourni. En 2:25, les jardins promis contiennent des provisions. La provision est un theme central de la sourate — le Maitre fournit et les humains redistribuent.",
              axe4_coherence: "Le Coran utilise rizq et ses derives plus de 120 fois. La provision divine est un argument recurrent pour le monotheisme — celui qui pourvoit merite d\u2019etre servi. En 10:31, le texte demande « qui vous pourvoit du ciel et de la terre ? ».",
              axe5_frequence: "Pour la mission du khalifa, la provision rappelle que les ressources viennent du Maitre. Le khalifa distribue ce que le Maitre fournit — il n\u2019est pas la source mais le distributeur."
            }
          }
        }
      },
      {
        word_key: "alh",
        position: 23,
        sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "la divinite"],
              proof_ctx: "Le mot lillahi est le nom Allah precede de la preposition li (pour). La racine a-l-h designe la divinite — celui qui est adore, celui vers qui on se tourne. Le nom Allah est le nom propre de la divinite dans le Coran. La preposition li (pour) indique que les rivaux sont places pour Dieu — c\u2019est-a-dire en competition avec Dieu.",
              axe1_verset: "Le champ lexical bascule ici du bienfait a l\u2019interdiction : apres avoir enumere les bienfaits (terre, ciel, eau, fruits, provision), le verset conclut par l\u2019interdiction de placer des rivaux pour Dieu. Le mot Allah est le pivot de cette conclusion — c\u2019est pour Dieu qu\u2019il ne faut pas placer de rivaux. Tout le verset converge vers cette conclusion : celui qui a place la terre et le ciel, qui a fait descendre l\u2019eau et sortir les fruits, c\u2019est Dieu — ne lui placez pas de rivaux.",
              axe2_voisins: "Le verset 21 ordonnait de servir le Maitre. Le verset 22 montre les bienfaits de ce Maitre et conclut en le nommant Allah — le Maitre du verset 21 est Allah du verset 22. Le verset 23 va defier ceux qui contestent.",
              axe3_sourate: "Le nom Allah apparait des centaines de fois dans al-Baqarah. Il est le sujet principal de la sourate — tout tourne autour de Lui. Le verset 22 est l\u2019un des nombreux passages qui argumentent pour le monotheisme en montrant les bienfaits de Dieu.",
              axe4_coherence: "Le nom Allah est le mot le plus frequent du Coran avec plus de 2600 occurrences. Chaque mention rappelle l\u2019unicite de la divinite et la relation de dependance des humains envers leur Createur.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le Maitre ultime pour qui le khalifa agit. Toute la mission du khalifa est orientee vers Dieu — servir, proteger, distribuer au nom de Dieu."
            }
          }
        }
      },
      {
        word_key: "ndd",
        position: 24,
        sense_chosen: "rival",
        analysis_axes: {
          sense_chosen: "rival",
          concept_chosen: "Rivalite/Egalite",
          concepts: {
            "Rivalite/Egalite": {
              status: "retenu",
              senses: ["rival", "egal", "competiteur"],
              proof_ctx: "Le mot andadan est un nom pluriel indefini a l\u2019accusatif de la racine n-d-d. D\u2019apres le Lane\u2019s, n-d-d signifie « rivaliser, etre l\u2019egal de, pretendre a la meme place ». Le nidd est « a like, a fellow, a peer; a rival, a competitor ». Le pluriel indefini (andadan, pas al-andad) designe des rivaux quelconques — tout ce qui pretend rivaliser avec Dieu. Le texte ne precise pas la nature des rivaux — ils peuvent etre des idoles, des personnes, des ideologies.",
              axe1_verset: "Le champ lexical bascule du bienfait (placer la terre, le ciel, l\u2019eau, les fruits) a l\u2019interdiction (ne placez pas de rivaux). Le mot andad est l\u2019objet de l\u2019interdiction — c\u2019est ce qu\u2019il ne faut pas placer. Le verbe taj\u2019alu (ne placez pas) reprend le meme verbe ja\u2019ala du debut du verset — Dieu place des bienfaits, les humains ne doivent pas placer des rivaux. Le parallele est rhetoriquement puissant : le meme verbe pour deux actes opposes.",
              axe2_voisins: "Le verset 21 ordonnait de servir le Maitre. Le verset 22 conclut par l\u2019interdiction des rivaux — servir un rival serait une trahison du Maitre qui a tout fourni. Le verset 23 defie les sceptiques de produire un rival a la hauteur.",
              axe3_sourate: "La notion de rival revient dans al-Baqarah sous differentes formes. En 2:165, le texte parle de ceux qui prennent des andad en dehors de Dieu et les aiment comme on aime Dieu. La rivalite avec Dieu est un theme de la sourate.",
              axe4_coherence: "Le Coran utilise andad en 2:22, 2:165, 14:30, 34:33, 39:8, 41:9. A chaque fois, les andad sont ceux qui pretendent rivaliser avec Dieu. Le mot est toujours employe negativement — la rivalite avec Dieu est toujours condamnee.",
              axe5_frequence: "Pour la mission du khalifa, le rival est tout ce qui detourne du service du Maitre. Le khalifa doit identifier et ecarter les rivaux — les ideologies, les personnes ou les systemes qui pretendent a la place de Dieu dans la direction des affaires humaines."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 27,
        sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe"],
              proof_ctx: "Le verbe ta\u2019lamuna est un inaccompli de la 2eme personne du pluriel de la racine e-l-m. D\u2019apres le Lane\u2019s, e-l-m signifie « savoir, connaitre, etre informe ». L\u2019inaccompli indique un etat present et continu — vous savez en ce moment. La construction wa antum ta\u2019lamuna (alors que vous savez) est une circonstancielle — elle indique que l\u2019acte de placer des rivaux est fait EN CONNAISSANCE DE CAUSE.",
              axe1_verset: "Le champ lexical se conclut par le savoir : apres les bienfaits (terre, ciel, eau, fruits) et l\u2019interdiction (ne placez pas de rivaux), le verset ajoute « alors que vous savez ». Le savoir est l\u2019aggravant — placer des rivaux tout en sachant que Dieu est le pourvoyeur est pire que le faire par ignorance. Le verset ne dit pas « alors que vous croyez » mais « alors que vous savez » — le savoir est un fait objectif, pas une croyance.",
              axe2_voisins: "Le verset 21 parlait de service et de premunition. Le verset 22 ajoute le savoir comme aggravant. Le verset 23 va prolonger le defi en invoquant la veracite (sadiqin). La progression est : servez (v21) → vous savez (v22) → si vous etes veridiques (v23).",
              axe3_sourate: "La racine e-l-m est l\u2019une des plus frequentes d\u2019al-Baqarah. En 2:13, les hypocrites ne savent pas. En 2:22, les gens savent. En 2:30, les anges disent « nous savons ce que tu ne sais pas ». Le savoir est un theme structurant de la sourate.",
              axe4_coherence: "Le Coran utilise la racine e-l-m plus de 750 fois — c\u2019est l\u2019une des racines les plus frequentes du texte. Le savoir est fondamental dans le Coran : Adam a recu le savoir des noms (2:31), et c\u2019est ce savoir qui fonde sa mission de khalifa.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l\u2019outil fondamental. Le khalifa agit en connaissance de cause — il sait ce qu\u2019il fait et pourquoi. Le savoir distingue le khalifa de l\u2019ignorant qui agit a l\u2019aveugle."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:23 — verse_id=30
  // =====================================================
  23: {
    verse_id: 30,
    translation_arab: "Et si vous etes dans le doute a propos de ce que Nous avons fait descendre sur Notre serviteur, alors apportez un chapitre semblable a cela, et appelez vos temoins en dehors de Dieu, si vous etes veridiques.",
    full_translation: "Si vous avez un doute sur ce que Nous avons revele a Notre Serviteur, tachez donc de produire une sourate semblable et appelez vos temoins, (les temoins) que vous adorez en dehors d\u2019Allah, si vous etes veridiques.",
    translation_explanation: `\u00A7DEMARCHE\u00A7
Ce verset est un defi lance aux sceptiques. Le verbe **kuntum** (accompli 2eme personne) est un verbe incomplet (une forme qui sert a introduire un etat \u2014 \u00AB si vous etes \u00BB). Le mot **raybin** est un nom indefini au genitif de la racine r-y-b qui signifie dans le Lane\u2019s \u00AB doute mele d\u2019inquietude, soupcon \u00BB. Le verbe **nazzalna** est un accompli forme II (une forme qui intensifie \u2014 \u00AB nous avons fait descendre intensivement/progressivement \u00BB) avec le pronom 1P. Le mot **abdina** est un nom en idafa avec le pronom 1P (notre serviteur). Le verbe **fa\u2019tu** est un imperatif (ordre d\u2019apporter). Le mot **bi-suratin** est un nom indefini precede de la preposition bi. Le Lane\u2019s donne pour s-w-r \u00AB une rangee, un chapitre du Coran \u00BB. Le mot **mithlihi** est en idafa avec le pronom 3MS (semblable a lui). Le verbe **ud\u2019u** est un imperatif de la racine d-e-w (appeler). Le mot **shuhada\u2019akum** est un nom pluriel avec pronom 2MP (vos temoins). Le mot **duni** de la racine d-w-n signifie \u00AB en dessous de, en dehors de \u00BB. Le mot **sadiqina** est un participe actif pluriel (ceux qui font activement l\u2019action d\u2019etre veridiques).

\u00A7JUSTIFICATION\u00A7
**doute** \u2014 Le sens retenu est \u00AB Doute/Suspicion \u00BB. Le mot \u00AB doute \u00BB est choisi car rayb dans le Lane\u2019s designe le doute trouble, l\u2019hesitation. L\u2019alternative \u00AB soupcon \u00BB est ecartee car trop oriente vers l\u2019accusation.

**fait descendre** \u2014 Le sens retenu est \u00AB Descente/Revelation \u00BB. Le mot \u00AB fait descendre \u00BB est choisi car la forme II de n-z-l intensifie la descente. L\u2019alternative \u00AB reveler \u00BB est ecartee car c\u2019est une interpretation exegetique \u2014 le texte dit \u00AB fait descendre \u00BB, pas \u00AB reveler \u00BB.

**serviteur** \u2014 Le sens retenu est \u00AB Soumission/Servitude \u00BB. Le mot \u00AB serviteur \u00BB est choisi car abd designe celui qui sert. L\u2019alternative \u00AB esclave \u00BB est ecartee car trop extreme pour le contexte.

**veridiques** \u2014 Le sens retenu est \u00AB Verite/Sincerite \u00BB. Le mot \u00AB veridiques \u00BB est choisi car le participe actif sadiqina designe ceux qui font activement l\u2019action d\u2019etre dans le vrai. L\u2019alternative \u00AB sinceres \u00BB est ecartee car la sincerite porte sur l\u2019intention, la veridicite porte sur la parole.

\u00A7CRITIQUE\u00A7
**revele vs fait descendre** \u2014 Les traductions courantes donnent \u00AB revele \u00BB pour nazzalna. La racine n-z-l signifie \u00AB descendre \u00BB. La forme II intensifie la descente (progressive). Traduire par \u00AB reveler \u00BB introduit une interpretation theologique \u2014 la revelation est une descente, mais toute descente n\u2019est pas une revelation. Le texte dit litteralement \u00AB ce que Nous avons fait descendre \u00BB.
Les traductions courantes donnent sensiblement le meme sens pour le reste du verset.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 1 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 2 },
      { fr: "vous etes", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064F\u0646\u062A\u064F\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 3 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 4 },
      { fr: "un doute", pos: "nom", phon: "raybin", arabic: "\u0631\u064E\u064A\u0652\u0628\u064D", word_key: "ryb", is_particle: false, sense_retenu: "doute", position: 5 },
      { fr: "a propos de ce que", phon: "mimma", arabic: "\u0645\u0651\u0650\u0645\u0651\u064E\u0627", is_particle: true, position: 6 },
      { fr: "nous avons fait descendre", pos: "verbe", phon: "nazzalna", arabic: "\u0646\u064E\u0632\u0651\u064E\u0644\u0652\u0646\u064E\u0627", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 7 },
      { fr: "sur", phon: "\u2019ala", arabic: "\u0639\u064E\u0644\u064E\u0649\u0670", is_particle: true, position: 8 },
      { fr: "notre serviteur", pos: "nom", phon: "\u2019abdina", arabic: "\u0639\u064E\u0628\u0652\u062F\u0650\u0646\u064E\u0627", word_key: "ebd", is_particle: false, sense_retenu: "serviteur", position: 9 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064E", is_particle: true, position: 10 },
      { fr: "apportez", pos: "verbe", phon: "i\u2019tu", arabic: "\u0623\u0652\u062A\u064F\u0648\u0627\u06DF", word_key: "aty", is_particle: false, sense_retenu: "apporter", position: 11 },
      { fr: "avec", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 12 },
      { fr: "un chapitre", pos: "nom", phon: "suratin", arabic: "\u0633\u064F\u0648\u0631\u064E\u0629\u064D", word_key: "swr", is_particle: false, sense_retenu: "chapitre", position: 13 },
      { fr: "de", phon: "min", arabic: "\u0645\u0651\u0650\u0646", is_particle: true, position: 14 },
      { fr: "semblable a lui", pos: "nom", phon: "mithlihi", arabic: "\u0645\u0651\u0650\u062B\u0652\u0644\u0650\u0647\u0650\u06E6", word_key: "mvl", is_particle: false, sense_retenu: "semblable", position: 15 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 16 },
      { fr: "appelez", pos: "verbe", phon: "ud\u2019u", arabic: "\u0671\u062F\u0652\u0639\u064F\u0648\u0627\u06DF", word_key: "dew", is_particle: false, sense_retenu: "appeler", position: 17 },
      { fr: "vos temoins", pos: "nom", phon: "shuhada\u2019akum", arabic: "\u0634\u064F\u0647\u064E\u062F\u064E\u0627\u0653\u0621\u064E\u0643\u064F\u0645", word_key: "shd", is_particle: false, sense_retenu: "temoin", position: 18 },
      { fr: "en dehors de", pos: "nom", phon: "min duni", arabic: "\u0645\u0651\u0650\u0646 \u062F\u064F\u0648\u0646\u0650", word_key: "dwn", is_particle: false, sense_retenu: "en dehors de", position: 19 },
      { fr: "Dieu", pos: "nom", phon: "allahi", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 20 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 21 },
      { fr: "vous etes", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064F\u0646\u062A\u064F\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 22 },
      { fr: "veridiques", pos: "participe", phon: "sadiqina", arabic: "\u0635\u064E\u0670\u062F\u0650\u0642\u0650\u064A\u0646\u064E", word_key: "sdq", is_particle: false, sense_retenu: "veridique", position: 23 }
    ],
    words: [
      {
        word_key: "ryb",
        position: 5,
        sense_chosen: "doute",
        analysis_axes: {
          sense_chosen: "doute",
          concept_chosen: "Doute/Suspicion",
          concepts: {
            "Doute/Suspicion": {
              status: "retenu",
              senses: ["doute", "soupcon", "hesitation"],
              proof_ctx: "Le mot raybin est un nom indefini au genitif de la racine r-y-b. D\u2019apres le Lane\u2019s, r-y-b signifie « douter avec inquietude, soupconner, hesiter ». Le rayb n\u2019est pas un doute neutre — c\u2019est un doute mele d\u2019inquietude, un malaise face a l\u2019incertitude. Le mot est indefini (raybin, pas al-rayb) — c\u2019est UN doute, un etat possible dans lequel les destinataires pourraient se trouver. La preposition fi (dans) indique qu\u2019on est immerge dans le doute.",
              axe1_verset: "Le champ lexical est celui du defi : doute (ryb), faire descendre (nzl), serviteur (ebd), apporter (aty), chapitre (swr), semblable (mvl), appeler (dew), veridiques (sdq). Le doute est le point de depart du defi — si vous doutez, alors prouvez votre doute. Le verset transforme le doute passif en obligation active : douter ne suffit pas, il faut produire une alternative. La structure conditionnelle (in kuntum fi raybin... fa\u2019tu) place le doute comme hypothese et le defi comme consequence.",
              axe2_voisins: "Le verset 22 montrait les bienfaits divins. Le verset 23 s\u2019adresse a ceux qui, malgre ces bienfaits, doutent encore. Le doute ici est specifiquement dirige vers « ce que Nous avons fait descendre » — le texte revele. Le verset 24 va avertir de la consequence de l\u2019echec du defi.",
              axe3_sourate: "Le doute (rayb) apparait des le verset 2:2 : « cet ecrit dans lequel il n\u2019y a pas de doute (la rayba fihi) ». Le verset 2:23 reprend le meme mot pour le retourner : si VOUS etes dans le doute, alors prouvez-le. La sourate ouvre sur l\u2019absence de doute dans le texte et defie ceux qui doutent.",
              axe4_coherence: "Le Coran utilise rayb et ses derives une trentaine de fois. En 2:2, le texte est sans doute. En 2:23, le doute des humains est defie. En 3:9, le Jour du rassemblement est sans doute. Le doute est toujours presente comme un etat a depasser, jamais comme une vertu intellectuelle.",
              axe5_frequence: "Pour la mission du khalifa, le doute est un obstacle a l\u2019action. Le khalifa doit depasser le doute par la preuve — soit en acceptant la direction, soit en produisant une alternative. Le verset ne condamne pas le doute mais exige qu\u2019il soit etaye."
            }
          }
        }
      },
      {
        word_key: "nzl",
        position: 7,
        sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/Revelation",
          concepts: {
            "Descente/Revelation": {
              status: "retenu",
              senses: ["faire descendre", "envoyer progressivement"],
              proof_ctx: "Le verbe nazzalna est un accompli forme II de la racine n-z-l avec pronom 1P (Nous). D\u2019apres le Lane\u2019s, n-z-l signifie « descendre ». La forme II (nazzala) intensifie et indique la progressivite — faire descendre par etapes, progressivement. Le pronom « Nous » est le pluriel de majeste divin. L\u2019objet de la descente n\u2019est pas nomme explicitement (ma nazzalna = ce que Nous avons fait descendre) mais le contexte indique le Coran.",
              axe1_verset: "Le champ lexical est celui de la transmission : faire descendre (nzl) + serviteur (ebd) + chapitre (swr). Le texte a ete fait descendre sur un serviteur — la descente est le mode de transmission. Le verset ne dit pas « revele » mais « fait descendre » — la nuance est physique, pas mystique. La forme II ajoute la progressivite : le texte a ete fait descendre progressivement, par etapes, sur une periode.",
              axe2_voisins: "Le verset 22 utilisait anzala (forme IV) pour la descente de l\u2019eau. Le verset 23 utilise nazzala (forme II) pour la descente du texte. Les deux formes sont causatives mais la forme II insiste sur la progressivite. L\u2019eau descend d\u2019un coup, le texte descend progressivement. Le parallele entre les deux descentes renforce l\u2019argument : le meme Dieu fait descendre l\u2019eau et le texte.",
              axe3_sourate: "La sourate al-Baqarah utilise nazzala/anzala constamment pour decrire la descente du texte sacre. En 2:2, le texte est evoque. En 2:4, « ce qui a ete fait descendre sur toi et ce qui a ete fait descendre avant toi ». La descente du texte est le theme central de la sourate.",
              axe4_coherence: "Le Coran distingue nazzala (forme II, descente progressive) de anzala (forme IV, descente ponctuelle). En 25:32, les recouvrants disent « pourquoi le Coran n\u2019a-t-il pas ete fait descendre sur lui en un seul bloc ? ». La reponse est que la forme II (nazzala) indique la progressivite deliberee.",
              axe5_frequence: "Pour la mission du khalifa, la descente progressive du texte indique que la direction se donne par etapes. Le khalifa recoit la direction progressivement et l\u2019applique au fur et a mesure."
            }
          }
        }
      },
      {
        word_key: "ebd",
        position: 9,
        sense_chosen: "serviteur",
        analysis_axes: {
          sense_chosen: "serviteur",
          concept_chosen: "Soumission/Servitude",
          concepts: {
            "Soumission/Servitude": {
              status: "retenu",
              senses: ["serviteur", "celui qui sert", "esclave"],
              proof_ctx: "Le mot abdina est un nom en construction idafa avec le pronom 1P (notre serviteur) de la racine e-b-d. D\u2019apres le Lane\u2019s, e-b-d signifie « servir ». Le abd est celui qui sert — le serviteur. La construction « notre serviteur » (abdina) est un titre d\u2019honneur dans le Coran — le serviteur de Dieu est celui qui sert le Maitre par excellence. Le pronom « notre » (pluriel de majeste) eleve le serviteur au rang le plus haut du service.",
              axe1_verset: "Le champ lexical est celui du defi lance au nom du serviteur : le texte a ete fait descendre SUR notre serviteur. Le serviteur est le recepteur de la descente. Le defi porte sur ce qui a ete transmis au serviteur — si vous doutez de ce qu\u2019il a recu, produisez quelque chose de semblable. Le mot abd dans le verset 21 etait un verbe imperatif (servez), dans le verset 23 c\u2019est un nom (serviteur) — le meme concept est vu sous deux angles.",
              axe2_voisins: "Le verset 21 commandait de servir (u\u2019budu). Le verset 23 presente le modele du service : le serviteur (abd) de Dieu, celui sur qui le texte descend. Le prophete est presente non pas comme un roi ou un pretre mais comme un serviteur — le titre le plus noble dans le Coran.",
              axe3_sourate: "La racine e-b-d est structurante dans al-Baqarah. Le service est la relation fondamentale entre les humains et Dieu. Le serviteur par excellence est le prophete, et les humains sont invites a servir comme lui.",
              axe4_coherence: "Le Coran utilise le titre abd/abdina pour designer le prophete dans les moments les plus importants. En 17:1, « Gloire a Celui qui a fait voyager Son serviteur de nuit ». En 53:10, la revelation est faite au serviteur. Le titre de serviteur est le plus eleve dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, le serviteur est le modele a suivre. Le prophete est le premier des serviteurs — le khalifa sert a sa suite. Le titre de serviteur rappelle que la grandeur est dans le service, pas dans la domination."
            }
          }
        }
      },
      {
        word_key: "aty",
        position: 11,
        sense_chosen: "apporter",
        analysis_axes: {
          sense_chosen: "apporter",
          concept_chosen: "Venue/Apport",
          concepts: {
            "Venue/Apport": {
              status: "retenu",
              senses: ["apporter", "venir avec", "produire"],
              proof_ctx: "Le verbe fa\u2019tu est un imperatif de la racine a-t-y. D\u2019apres le Lane\u2019s, a-t-y signifie « venir, arriver, apporter ». L\u2019imperatif i\u2019tu signifie « apportez, venez avec, produisez ». C\u2019est l\u2019ordre central du defi : apportez un chapitre semblable. La preposition bi qui suit renforce le sens d\u2019apporter quelque chose de concret.",
              axe1_verset: "Le champ lexical est celui du defi : doute → apportez → un chapitre → semblable. Le verbe i\u2019tu est le pivot du defi — c\u2019est l\u2019action demandee aux sceptiques. Le verset ne dit pas « croyez » ou « soumettez-vous » mais « apportez » — c\u2019est un defi intellectuel et creatif, pas un ordre de foi aveugle. L\u2019imperatif exige une action concrete : produire quelque chose de comparable.",
              axe2_voisins: "Le verset 21 commandait de servir (imperatif positif). Le verset 22 interdisait les rivaux (imperatif negatif). Le verset 23 defie d\u2019apporter (imperatif de defi). Les trois versets utilisent l\u2019imperatif mais avec des fonctions differentes : ordre, interdiction, defi.",
              axe3_sourate: "La racine a-t-y revient dans al-Baqarah dans des contextes varies. Le defi de « produire un chapitre semblable » est unique dans la sourate et constitue l\u2019un des defis les plus celebres du Coran.",
              axe4_coherence: "Le Coran lance le defi de produire un semblable en 2:23, 10:38, 11:13 et 17:88. En 17:88, le texte dit que meme si les humains et les djinns s\u2019unissaient pour produire un semblable a ce Coran, ils n\u2019y parviendraient pas. Le defi est recurrent et escalade en intensite.",
              axe5_frequence: "Pour la mission du khalifa, le defi d\u2019apporter transforme le doute en action. Le khalifa ne doute pas passivement — il agit. Le verset enseigne que le doute doit etre productif : si vous doutez, produisez une alternative."
            }
          }
        }
      },
      {
        word_key: "swr",
        position: 13,
        sense_chosen: "chapitre",
        analysis_axes: {
          sense_chosen: "chapitre",
          concept_chosen: "Rangee/Section",
          concepts: {
            "Rangee/Section": {
              status: "retenu",
              senses: ["chapitre", "sourate", "rangee", "section"],
              proof_ctx: "Le mot suratin est un nom indefini au genitif de la racine s-w-r. D\u2019apres le Lane\u2019s, s-w-r peut signifier « une rangee, un rang, une section ». Le mot sura dans l\u2019usage coranique designe une section du Coran — un chapitre. Le mot est indefini (suratin, pas al-sura) — le defi est de produire UN chapitre quelconque, pas un chapitre specifique. Cela elargit le defi : n\u2019importe quel chapitre semblable suffirait.",
              axe1_verset: "Le champ lexical est celui du defi litteraire : apporter (aty) + chapitre (swr) + semblable (mvl). Le chapitre est l\u2019unite de mesure du defi — il ne s\u2019agit pas de produire un livre entier mais un seul chapitre. Le defi est a la portee apparente des sceptiques (un seul chapitre) mais inatteignable en realite. L\u2019indefini renforce l\u2019ouverture : produisez N\u2019IMPORTE QUEL chapitre semblable.",
              axe2_voisins: "Le verset 22 montrait les bienfaits cosmiques. Le verset 23 passe au defi textuel — le texte est aussi un bienfait divin, et il est inimitable. Le verset 24 annoncera les consequences de l\u2019echec. La progression est : bienfaits materiels → defi textuel → consequences.",
              axe3_sourate: "La sourate al-Baqarah est elle-meme la plus longue sura du Coran. Le defi de produire un chapitre semblable est d\u2019autant plus significatif que la sourate contient des passages de styles tres varies (legislation, recit, parabole, defi).",
              axe4_coherence: "Le Coran utilise le mot sura en 2:23, 9:64, 9:86, 9:124, 10:38, 11:13, 24:1, 47:20. Le defi est toujours lie a la sura comme unite — c\u2019est le chapitre qui est l\u2019unite de base de l\u2019inimitabilite.",
              axe5_frequence: "Pour la mission du khalifa, le chapitre est l\u2019unite de direction. Le khalifa recoit la direction chapitre par chapitre — chaque sura apporte une direction specifique pour un aspect de la gestion."
            }
          }
        }
      },
      {
        word_key: "mvl",
        position: 15,
        sense_chosen: "semblable",
        analysis_axes: {
          sense_chosen: "semblable",
          concept_chosen: "Ressemblance/Equivalence",
          concepts: {
            "Ressemblance/Equivalence": {
              status: "retenu",
              senses: ["semblable", "pareil", "equivalent"],
              proof_ctx: "Le mot mithlihi est un nom en idafa avec le pronom 3MS de la racine m-th-l. D\u2019apres le Lane\u2019s, m-th-l signifie « etre semblable, ressembler ». Le mithl est « a like, a similar, an analogue ». La construction min mithlihi (de son semblable) signifie « semblable a lui » — c\u2019est-a-dire semblable au Coran. Le pronom hi (lui) renvoie a ce qui a ete fait descendre.",
              axe1_verset: "Le champ lexical est celui du defi de comparaison : apportez un chapitre de son semblable. Le mot mithl est le critere du defi — il faut produire quelque chose de SEMBLABLE, pas d\u2019identique. Le defi est de la ressemblance, pas de la copie. Meme une simple ressemblance est presentee comme impossible. La construction min mithlihi est ambigue : « de son semblable » peut signifier « semblable a lui [le Coran] » ou « semblable a lui [le serviteur] » — les deux lectures sont possibles.",
              axe2_voisins: "Le verset 22 montrait l\u2019unicite des bienfaits divins. Le verset 23 affirme l\u2019unicite du texte — rien de semblable ne peut etre produit. Le verset 24 annoncera que si l\u2019echec est constate, alors il faut se premunir.",
              axe3_sourate: "La racine m-th-l apparait dans al-Baqarah dans les paraboles (mathalan). En 2:17, la parabole de celui qui allume un feu. En 2:23, le defi du semblable. La sourate utilise la ressemblance pour enseigner (paraboles) et pour defier (produire un semblable).",
              axe4_coherence: "Le Coran utilise la racine m-th-l plus de 160 fois. Le defi du semblable est lance en 2:23, 10:38, 11:13 et 17:88. En 42:11, le texte dit « il n\u2019y a rien de semblable a Lui ». La non-ressemblance est un theme fondamental.",
              axe5_frequence: "Pour la mission du khalifa, la ressemblance est un outil de comprehension. Le khalifa comprend le monde par analogie et comparaison. Mais le texte est au-dela de la comparaison — il est inimitable."
            }
          }
        }
      },
      {
        word_key: "dew",
        position: 17,
        sense_chosen: "appeler",
        analysis_axes: {
          sense_chosen: "appeler",
          concept_chosen: "Appel/Invocation",
          concepts: {
            "Appel/Invocation": {
              status: "retenu",
              senses: ["appeler", "invoquer", "convoquer"],
              proof_ctx: "Le verbe ud\u2019u est un imperatif de la racine d-e-w. D\u2019apres le Lane\u2019s, d-e-w signifie « appeler, invoquer, convoquer ». L\u2019imperatif ud\u2019u signifie « appelez ». Le verset ordonne aux sceptiques d\u2019appeler leurs temoins — c\u2019est-a-dire de mobiliser tous leurs soutiens pour relever le defi. L\u2019appel est un acte de rassemblement en vue d\u2019une action commune.",
              axe1_verset: "Le champ lexical est celui du defi renforce : apportez un chapitre → et appelez vos temoins. L\u2019appel des temoins amplifie le defi — non seulement vous devez produire un chapitre, mais vous pouvez meme appeler a l\u2019aide tous ceux que vous voulez. Le defi est ouvert : aucune restriction sur les moyens. L\u2019imperatif « appelez » s\u2019ajoute a « apportez » — deux ordres qui poussent les sceptiques a l\u2019action.",
              axe2_voisins: "Le verset 22 interdisait les rivaux. Le verset 23 permet aux sceptiques d\u2019appeler ces memes rivaux (en dehors de Dieu) comme temoins. L\u2019ironie est deliberee : les rivaux que vous placez face a Dieu, appelez-les, qu\u2019ils vous aident a relever le defi.",
              axe3_sourate: "La racine d-e-w apparait dans al-Baqarah dans differents contextes. En 2:186, « quand Mon serviteur M\u2019appelle, Je reponds ». L\u2019appel est un acte fondamental de la relation humain-divin. Dans le verset 23, l\u2019appel est dirige vers les faux temoins.",
              axe4_coherence: "Le Coran utilise la racine d-e-w plus de 200 fois. L\u2019appel est a la fois un acte de priere (appeler Dieu) et un acte de mobilisation (appeler des temoins). Le verset 23 utilise le second sens — appeler des allies pour un defi.",
              axe5_frequence: "Pour la mission du khalifa, l\u2019appel est un acte de gouvernance. Le khalifa appelle les gens a la direction, il convoque les temoins de la verite. L\u2019appel du verset 23 est inverse — il defie les sceptiques d\u2019appeler leurs propres soutiens."
            }
          }
        }
      },
      {
        word_key: "dwn",
        position: 19,
        sense_chosen: "en dehors de",
        analysis_axes: {
          sense_chosen: "en dehors de",
          concept_chosen: "Inferiorite/Exclusion",
          concepts: {
            "Inferiorite/Exclusion": {
              status: "retenu",
              senses: ["en dehors de", "en dessous de", "a l\u2019exclusion de"],
              proof_ctx: "Le mot duni est un nom de la racine d-w-n. D\u2019apres le Lane\u2019s, d-w-n signifie « en dessous de, inferieur a, en dehors de ». La construction min duni Allahi signifie « en dehors de Dieu » — c\u2019est-a-dire des temoins qui ne sont pas Dieu. Le mot dun implique une inferiorite : ce qui est duna Allah est inferieur a Dieu. Les temoins appeles sont par definition inferieurs a Dieu.",
              axe1_verset: "Le champ lexical est celui de l\u2019exclusion : appelez vos temoins EN DEHORS DE Dieu. Le mot dun marque la separation entre Dieu et les temoins des sceptiques. Le verset dit implicitement : vos temoins sont inferieurs a Dieu, mais appelez-les quand meme pour relever le defi. L\u2019ironie est dans le contraste : le Maitre qui a cree la terre, le ciel, l\u2019eau et les fruits (v22) est mis au defi par des temoins « en dehors de » Lui.",
              axe2_voisins: "Le verset 22 interdisait les rivaux (andad). Le verset 23 permet d\u2019appeler des temoins en dehors de Dieu — ces temoins sont les memes rivaux du verset 22. Le texte retourne l\u2019argument : vous placez des rivaux ? Appelez-les, voyons ce qu\u2019ils peuvent faire.",
              axe3_sourate: "L\u2019expression min duni Allah est tres frequente dans al-Baqarah. En 2:107, « vous n\u2019avez en dehors de Dieu ni protecteur ni secoureur ». En 2:165, ceux qui prennent des rivaux en dehors de Dieu. La formule marque systematiquement l\u2019impuissance de tout ce qui est en dehors de Dieu.",
              axe4_coherence: "Le Coran utilise min duni Allah plus de 100 fois. A chaque occurrence, ce qui est « en dehors de Dieu » est presente comme incapable, impuissant ou inferieur. La formule est un argument recurrent pour le monotheisme.",
              axe5_frequence: "Pour la mission du khalifa, « en dehors de Dieu » designe tout ce qui pretend remplacer la direction divine. Le khalifa doit identifier ce qui est « dun » — inferieur et incapable — et ne pas s\u2019y fier."
            }
          }
        }
      },
      {
        word_key: "sdq",
        position: 23,
        sense_chosen: "veridique",
        analysis_axes: {
          sense_chosen: "veridique",
          concept_chosen: "Verite/Sincerite",
          concepts: {
            "Verite/Sincerite": {
              status: "retenu",
              senses: ["veridique", "vrai", "sincere"],
              proof_ctx: "Le mot sadiqina est un participe actif pluriel au genitif de la racine s-d-q. D\u2019apres le Lane\u2019s, s-d-q signifie « etre veridique, dire la verite, etre conforme a la realite ». Le participe actif sadiq designe celui qui fait activement l\u2019action d\u2019etre dans le vrai — pas seulement celui qui dit la verite ponctuellement mais celui qui est dans un etat constant de veridicite. Le pluriel sadiqina (ceux qui sont veridiques) s\u2019adresse aux sceptiques.",
              axe1_verset: "Le champ lexical se conclut par la veridicite : si vous etes veridiques — c\u2019est-a-dire si votre doute est fonde, si votre scepticisme est honnete. Le verset met la veridicite comme condition : le defi ne s\u2019adresse qu\u2019a ceux qui sont veridiques dans leur doute. Les menteurs ne relevent pas le defi car leur doute est de mauvaise foi. Le participe actif insiste sur l\u2019etat actif — etre veridique est un effort continu.",
              axe2_voisins: "Le verset 22 concluait par « alors que vous savez ». Le verset 23 conclut par « si vous etes veridiques ». La progression est : savoir → veridicite. Celui qui sait et qui est veridique doit relever le defi. Celui qui sait mais n\u2019est pas veridique est un menteur (comme les hypocrites des versets 8-20).",
              axe3_sourate: "La racine s-d-q apparait dans al-Baqarah en contraste avec le mensonge (k-dh-b). En 2:10, les hypocrites mentent. En 2:23, le defi s\u2019adresse aux veridiques. La sourate oppose systematiquement la veridicite et le mensonge.",
              axe4_coherence: "Le Coran utilise la racine s-d-q plus de 150 fois. La veridicite est une valeur fondamentale du texte. En 9:119, « soyez avec les veridiques (al-sadiqin) ». Le veridique est celui dont la parole correspond a la realite — il ne dit pas ce qu\u2019il ne pense pas.",
              axe5_frequence: "Pour la mission du khalifa, la veridicite est la qualite fondamentale. Le khalifa doit etre sadiq — veridique dans sa parole et dans ses actes. La veridicite est la base de la confiance sans laquelle la gestion est impossible."
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
let okCount = 0;
let errCount = 0;

async function processVerse(verseNum) {
  const data = verseData[verseNum];
  if (!data) return;

  console.log(`\nVERSET 2:${verseNum} — TRAITEMENT`);

  // First, find the analysis_id from verse_analyses
  const { data: va, error: vaErr } = await supabase
    .from('verse_analyses')
    .select('id')
    .eq('verse_id', data.verse_id)
    .single();

  if (vaErr || !va) {
    console.error(`  ERREUR: verse_analyses introuvable pour verse_id=${data.verse_id}:`, vaErr?.message);
    errCount++;
    return;
  }

  const analysis_id = va.id;
  console.log(`  analysis_id=${analysis_id}`);

  // Insert VWA entries
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
      console.error(`  ERREUR VWA ${word.word_key}:`, insertErr.message);
      errCount++;
    } else {
      console.log(`  OK VWA ${word.word_key} v${data.verse_id}`);
      okCount++;
    }
  }

  // Update verse_analyses
  const { error: updateErr } = await supabase.from('verse_analyses').update({
    segments: data.segments,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    full_translation: data.full_translation
  }).eq('id', analysis_id);

  if (updateErr) {
    console.error(`  ERREUR update verse_analyses:`, updateErr.message);
    errCount++;
  } else {
    console.log(`  OK verse V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — TERMINE`);
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [28, 29, 30];
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

    if (!wa) continue;

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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 21 A 23 ===\n');

  for (let v = 21; v <= 23; v++) {
    await processVerse(v);
  }

  await syncWordMeanings();

  console.log(`\n=== PIPELINE V21-23 TERMINEE ===`);
  console.log(`OK: ${okCount} | Erreurs: ${errCount}`);
}

main().catch(console.error);
