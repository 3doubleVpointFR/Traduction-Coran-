const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  verse_id: 265,
  analysis_id: 623,
  full_translation: "N'as-tu pas vu celui qui disputait avec Abraham au sujet de son Seigneur, parce qu'Allah lui avait donné le pouvoir ? Abraham lui dit : « Mon Seigneur est Celui qui donne la vie et qui donne la mort. » Il dit : « C'est moi qui donne la vie et qui donne la mort. » Abraham dit : « Allah fait lever le soleil de l'Est ; fais-le donc lever de l'Ouest. » L'impie demeura alors interdit. Allah ne guide pas les gens injustes.",
  translation_arab: "N'as-tu pas vu celui qui argumentait contre Ibrahim au sujet de son Seigneur, parce que Dieu lui avait donné la souveraineté ? Quand Ibrahim dit : 'Mon Seigneur est Celui qui fait vivre et fait mourir', il dit : 'Moi je fais vivre et je fais mourir.' Ibrahim dit : 'Dieu fait venir le soleil de l'orient — fais-le venir de l'occident.' Il fut alors stupéfait, celui qui avait nié. Et Dieu ne guide pas le peuple injuste.",
  translation_explanation: `§DEMARCHE§
Le verset 2:258 met en scene un debat philosophique et theologique entre Ibrahim et un roi qui pretend partager les prerogatives divines. La demarche traductive consiste a rendre la dynamique argumentative du texte tout en preservant la precision etymologique de chaque terme. Le verbe hajja (Form III, pos=5) designe une argumentation dirigee contre quelqu'un — non un simple echange mais une confrontation ou l'un cherche a refuter l'autre. Ce sens de dispute dirigee est different du debat ouvert. La preposition fi introduit l'objet du debat : la nature du Seigneur d'Ibrahim. La cause de cette dispute (an ataahu llahu al-mulk) est rendue par "parce que Dieu lui avait donne la souverainete" — le mulk designe le pouvoir royal concret, pas une abstraction. Ibrahim articule alors la definition de son Seigneur autour de deux actes causatifs en Form IV : yuhyi (il fait vivre) et yumitu (il fait mourir). Le roi reprend ces memes verbes a la premiere personne, commettant une erreur logique qu'Ibrahim devoile par l'argument du soleil. Le passif buhita indique que la stupeur s'est abattue sur le roi de l'exterieur — il n'a pas choisi de se taire, il en a ete incapable. La cloture "Dieu ne guide pas le peuple injuste" est le verdict theologico-moral du recit.

§JUSTIFICATION§
Hajja (Form III) traduit par "argumentait contre" : Lane atteste haajja = to dispute against someone, to argue in opposition with proofs. Mulk traduit par "souverainete" : Lane, m-l-k = sovereignty, royal authority, dominion. Yuhyi traduit par "fait vivre" : Form IV causative ahya > yuhyi = to give life to. Yumitu traduit par "fait mourir" : Form IV causative amata > yumitu = to cause to die. Shamsi traduit par "soleil" : racine shms, astre solaire. Mashriq traduit par "orient" : lieu du lever (racine shrq = se lever, a l'est). Maghrib traduit par "occident" : lieu du coucher (racine ghrb = se coucher, a l'ouest). Buhita traduit par "il fut stupefait" : passif de bahata = to confound, to strike dumb. Kafara traduit par "avait nie" : racine kfr = couvrir, nier deliberement. Yahdi traduit par "guide" : racine hdy = guider, orienter vers la voie droite.

§CRITIQUE§
La traduction de Hamidullah rend hajja par "disputait" et al-mulk par "le pouvoir" — ces choix sont corrects mais ils estompent la precision semantique. "Pouvoir" est generique ; "souverainete" rend mieux al-mulk comme autorite politique concrete. Hamidullah traduit fa-buhita par "demeura alors interdit" — rendu acceptable mais "il fut stupefait" est plus fidele au passif arabe qui signifie une stupeur subie de l'exterieur. L'usage d'"Allah" plutot que "Dieu" dans la traduction de Hamidullah cree un ecart stylistique pour le lecteur francophone ; notre traduction utilise "Dieu" systematiquement. La tournure "fait lever le soleil de l'Est" chez Hamidullah est fluide ; "fait venir le soleil de l'orient" est plus litteral et preserve le verbe ya'ti (venir) de l'arabe.`,
  segments: [
    { position: 1, text_arab: "أَلَمْ", translation: "N'as-tu pas", phonetic: "a-lam", grammar_type: "particle" },
    { position: 2, text_arab: "تَرَ", translation: "vu", phonetic: "tara", grammar_type: "verb", root_key: "rwy" },
    { position: 3, text_arab: "إِلَى", translation: "vers", phonetic: "ila", grammar_type: "particle" },
    { position: 4, text_arab: "ٱلَّذِى", translation: "celui qui", phonetic: "alladhi", grammar_type: "particle" },
    { position: 5, text_arab: "حَآجَّ", translation: "argumentait contre", phonetic: "hajja", grammar_type: "verb", root_key: "hjj" },
    { position: 6, text_arab: "إِبْرَٰهِـۧمَ", translation: "Ibrahim", phonetic: "ibrahima", grammar_type: "noun" },
    { position: 7, text_arab: "فِى", translation: "au sujet de", phonetic: "fi", grammar_type: "particle" },
    { position: 8, text_arab: "رَبِّهِۦٓ", translation: "son Seigneur", phonetic: "rabbihi", grammar_type: "noun", root_key: "rbb" },
    { position: 9, text_arab: "أَن", translation: "parce que", phonetic: "an", grammar_type: "particle" },
    { position: 10, text_arab: "ءَاتَىٰهُ", translation: "lui avait donne", phonetic: "atahu", grammar_type: "verb", root_key: "aty" },
    { position: 11, text_arab: "ٱللَّهُ", translation: "Dieu", phonetic: "allahu", grammar_type: "noun" },
    { position: 12, text_arab: "ٱلْمُلْكَ", translation: "la souverainete", phonetic: "al-mulka", grammar_type: "noun", root_key: "mlk" },
    { position: 13, text_arab: "إِذْ", translation: "quand", phonetic: "idh", grammar_type: "particle" },
    { position: 14, text_arab: "قَالَ", translation: "dit", phonetic: "qala", grammar_type: "verb" },
    { position: 15, text_arab: "إِبْرَٰهِـۧمُ", translation: "Ibrahim :", phonetic: "ibrahimu", grammar_type: "noun" },
    { position: 16, text_arab: "رَبِّىَ", translation: "Mon Seigneur est", phonetic: "rabbiya", grammar_type: "noun", root_key: "rbb" },
    { position: 17, text_arab: "ٱلَّذِى", translation: "Celui qui", phonetic: "alladhi", grammar_type: "particle" },
    { position: 18, text_arab: "يُحْىِۦ", translation: "fait vivre", phonetic: "yuhyi", grammar_type: "verb", root_key: "hyy" },
    { position: 19, text_arab: "وَيُمِيتُ", translation: "et fait mourir.", phonetic: "wa-yumitu", grammar_type: "verb", root_key: "mwt" },
    { position: 20, text_arab: "قَالَ", translation: "Il dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 21, text_arab: "أَنَا۠", translation: "Moi je", phonetic: "ana", grammar_type: "particle" },
    { position: 22, text_arab: "أُحْىِۦ", translation: "fais vivre", phonetic: "uhyi", grammar_type: "verb", root_key: "hyy" },
    { position: 23, text_arab: "وَأُمِيتُ", translation: "et je fais mourir.", phonetic: "wa-umitu", grammar_type: "verb", root_key: "mwt" },
    { position: 24, text_arab: "قَالَ", translation: "Ibrahim dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 25, text_arab: "إِبْرَٰهِـۧمُ", translation: "", phonetic: "ibrahimu", grammar_type: "noun" },
    { position: 26, text_arab: "فَإِنَّ", translation: "certes", phonetic: "fa-inna", grammar_type: "particle" },
    { position: 27, text_arab: "ٱللَّهَ", translation: "Dieu", phonetic: "allaha", grammar_type: "noun" },
    { position: 28, text_arab: "يَأْتِى", translation: "fait venir", phonetic: "ya'ti", grammar_type: "verb", root_key: "aty" },
    { position: 29, text_arab: "بِٱلشَّمْسِ", translation: "le soleil", phonetic: "bi-l-shamsi", grammar_type: "noun", root_key: "shms" },
    { position: 30, text_arab: "مِنَ", translation: "de", phonetic: "mina", grammar_type: "particle" },
    { position: 31, text_arab: "ٱلْمَشْرِقِ", translation: "l'orient", phonetic: "al-mashriqi", grammar_type: "noun", root_key: "shrq" },
    { position: 32, text_arab: "فَأْتِ", translation: "— fais-le venir", phonetic: "fa-'ti", grammar_type: "verb" },
    { position: 33, text_arab: "بِهَا", translation: "donc", phonetic: "biha", grammar_type: "particle" },
    { position: 34, text_arab: "مِنَ", translation: "de", phonetic: "mina", grammar_type: "particle" },
    { position: 35, text_arab: "ٱلْمَغْرِبِ", translation: "l'occident.", phonetic: "al-maghribi", grammar_type: "noun", root_key: "ghrb" },
    { position: 36, text_arab: "فَبُهِتَ", translation: "Il fut alors stupefait,", phonetic: "fa-buhita", grammar_type: "verb", root_key: "bht" },
    { position: 37, text_arab: "ٱلَّذِى", translation: "celui qui", phonetic: "alladhi", grammar_type: "particle" },
    { position: 38, text_arab: "كَفَرَ", translation: "avait nie.", phonetic: "kafara", grammar_type: "verb", root_key: "kfr" },
    { position: 39, text_arab: "وَٱللَّهُ", translation: "Et Dieu", phonetic: "wa-llahu", grammar_type: "noun" },
    { position: 40, text_arab: "لَا", translation: "ne", phonetic: "la", grammar_type: "particle" },
    { position: 41, text_arab: "يَهْدِى", translation: "guide pas", phonetic: "yahdi", grammar_type: "verb", root_key: "hdy" },
    { position: 42, text_arab: "ٱلْقَوْمَ", translation: "le peuple", phonetic: "al-qawma", grammar_type: "noun", root_key: "qwm" },
    { position: 43, text_arab: "ٱلظَّـٰلِمِينَ", translation: "injuste.", phonetic: "al-zalimin", grammar_type: "noun", root_key: "zlm" }
  ],
  vwa: [
    {
      word_key: "hjj",
      position: 5,
      sense_chosen: "argumenter contre quelqu'un, disputer en cherchant a le refuter (Form III reciproque)",
      analysis_axes: {
        sense_chosen: "argumenter contre quelqu'un, disputer en cherchant a le refuter (Form III reciproque)",
        concept_chosen: "Argumentation/Debat",
        concepts: {
          "Argumentation/Debat": {
            status: "retenu",
            senses: [
              "surpasser dans l'argument, refuter par des preuves",
              "hajja = argumenter contre quelqu'un (Form III directionnelle)",
              "hujja = la preuve, l'argument demonstratif valide",
              "disputer avec des preuves pour emporter le debat"
            ],
            proof_ctx: "Lane's Lexicon: h-j-j = to argue, to contend, to dispute with proofs; Form III haajja = to dispute against (someone), to argue in opposition to; hujja = proof, argument, demonstration. The Form III pattern indicates a reciprocal or directional action — one argues against a specific interlocutor to refute them.",
            axe1_verset: "HaA^j~a est un verbe accompli Form III (fa'ala). La Form III indique l'action mutuelle et directionnelle : argumenter face-a-face, contre quelqu'un de precis. Le sujet est celui a qui Dieu avait donne la souverainete — un roi qui dispute avec Ibrahim non pour chercher la verite mais pour contester l'autorite divine en s'appuyant sur son propre pouvoir politique. C'est un defi intellectuel et ideologique, pas un simple echange. Ibrahim ne l'accuse pas : il repond par un argument empirique que le roi ne peut refuter, revelant la superiorite de la preuve rationnelle sur le pouvoir brut.",
            axe2_voisins: "Le debat (hujja) entre Ibrahim et le roi est un exemple paradigmatique de la confrontation entre la verite divine et l'arrogance du pouvoir. Ibrahim utilise l'argument du soleil — une question rhetorique insoluble — pour reduire l'adversaire au silence (buhita, pos=36). La sequence hajja (debat) → argument du soleil (pos=28-35) → buhita (stupeur) decrit une progression logique et narrative parfaite : l'arrogant est vaincu non par la force mais par la puissance de l'argument irrefutable.",
            axe3_sourate: "Al-Baqarah contient plusieurs recits de dispute et de dialogue : Dieu en dialogue avec les anges (2:30), Ibrahim et son peuple (2:260), les gens du Livre en debat avec les musulmans (2:111, 2:135). Le debat argumente est une caracteristique stylistique d'al-Baqarah. La racine hjj est fondamentale pour le theme de la preuve dans le Coran : v.2:111 (hatu burhanakum = apportez votre preuve), v.6:83 (Nous avons donne a Ibrahim sa hujja contre son peuple). Le verset 258 est l'application narrative de ce principe.",
            axe4_coherence: "La racine H-j-j donne hujja (preuve, argument), muhajaqah (debat contradictoire), ihtijaj (avancer des preuves). Dans le Coran, Dieu presente Ses preuves (hujjatun balligha, 6:149) et invite a une argumentation honnete. La dispute du roi dans ce verset est l'inverse de la hujja divine : sans fondement reel, nourrie par l'arrogance du pouvoir recoit. La cloture wa-llahu la yahdi al-qawma al-zalimin souligne que disputer contre la verite divine est un acte d'injustice qui prive de la guidance.",
            axe5_frequence: "Le verbe hajja (disputer par des arguments) apparait en plusieurs endroits du Coran : 3:61, 3:65-66, 4:109, 6:80. Dans tous ces cas, il s'agit d'un debat ou l'on cherche a refuter l'autre par des arguments — pas une simple dispute emotionnelle mais un affrontement de preuves. Le Coran distingue nettement la hujja legitime d'Ibrahim (6:83 : Nous lui avons donne Notre hujja) et la dispute sans fondement du roi : l'un a la preuve divine, l'autre n'a que le pouvoir terrestre — et le pouvoir seul ne prouve rien."
          },
          "Pelerinage/Hajj": {
            status: "nul",
            senses: [
              "hajj = le pelerinage vers la Mecque",
              "se diriger vers, converger vers un lieu sacre"
            ],
            proof_ctx: "Lane's Lexicon: h-j-j donne aussi le sens de se diriger vers quelqu'un ou quelque chose avec intention — d'ou le pelerinage (hajj). La racine est la meme que pour argumenter.",
            axe1_verset: "Le sens de pelerinage est inapplicable ici : le contexte est celui d'un debat verbal entre le roi et Ibrahim, pas d'un voyage rituel. La Form III haajja indique clairement le sens argumentatif.",
            axe2_voisins: "Aucun element contextuel ne renvoie au pelerinage dans ce passage narratif.",
            axe3_sourate: "Le hajj comme pelerinage est mentionne en 2:196-203, dans une section entierement distincte de ce recit narratif.",
            axe4_coherence: "Les deux sens (argumenter et peleriner) partagent la meme racine mais sont semantiquement distincts dans le Coran.",
            axe5_frequence: "Le sens de pelerinage (hajj) domine numeriquement dans le Coran, mais le contexte grammatical et narratif du v.258 impose sans ambiguite le sens argumentatif."
          }
        }
      }
    },
    {
      word_key: "mlk",
      position: 12,
      sense_chosen: "la souverainete royale, l'autorite politique concrete donnee par Dieu a un homme",
      analysis_axes: {
        sense_chosen: "la souverainete royale, l'autorite politique concrete donnee par Dieu a un homme",
        concept_chosen: "Souverainete/Domaine",
        concepts: {
          "Souverainete/Domaine": {
            status: "retenu",
            senses: [
              "posseder, avoir la maitrise de quelque chose",
              "al-mulk = la royaute, la souverainete politique absolue",
              "mulk = l'autorite de gouverner, le domaine d'un roi",
              "mulk delegue par Dieu = don divin qui peut etre use ou abuse"
            ],
            proof_ctx: "Lane's Lexicon: m-l-k = to possess, to have power over; al-mulk = sovereignty, royal authority, dominion; malik = king; Lane distinguishes mulk (concrete possession and kingship) from malakut (spiritual sovereignty belonging to God alone). Here ataahu llahu al-mulk = God gave him the kingdom — a delegated temporal authority.",
            axe1_verset: "An ataahu llahu al-mulk = parce que Dieu lui avait accorde la souverainete. Le mulk ici est precisement la cause de l'arrogance du roi — c'est la royaute, le pouvoir politique concret, qui l'a rendu presomptueux au point de pretendre pouvoir donner la vie et la mort. La structure causale est theologique : Dieu donne le mulk, mais le roi s'en sert pour contester Dieu. Le mulk est un don divin qui peut etre retourne contre son auteur dans un acte d'ingratitude souveraine. C'est l'ironie tragique du verset.",
            axe2_voisins: "Al-mulk (pos=12) est en tension directe avec rabbihi (pos=8, le Seigneur). Le roi a le mulk (pouvoir formel et politique) mais Ibrahim a un rabb (un Seigneur cosmique). La distinction est fondamentale : le mulk humain permet d'executer ou de gracier, il ne permet pas de faire venir le soleil de l'occident. Ibrahim choisit precisement l'argument astronomique pour montrer la limite absolue du mulk terrestre face a la puissance divine.",
            axe3_sourate: "Al-Baqarah contient plusieurs references au mulk comme don divin : 2:247 (Dieu donne la royaute a Talut), 2:251 (Dieu donne la royaute et la sagesse a David), 2:258 (ici). La souverainete est toujours presentee comme un don de Dieu avec des responsabilites — celui a qui Dieu donne le mulk doit l'exercer selon Ses lois, pas contre elles. La puissance appartient a Dieu seul (2:107, 2:255 : a Lui ce qui est dans les cieux et sur la terre).",
            axe4_coherence: "La distinction entre mulk (souverainete terrestre) et malakut (souverainete absolue divine) est capitale dans le Coran. Dieu seul possede le mulk absolu (67:1 : benie soit la Main en laquelle est la souverainete). La pretention du roi a donner la vie et la mort est une usurpation du mulk divin — il confond son pouvoir delegue avec le pouvoir cosmique de Dieu. Le buhita final (il fut stupefait) est la consequence de cette confusion.",
            axe5_frequence: "Mulk apparait environ 49 fois dans le Coran. Il designe systematiquement l'autorite souveraine — divine ou humaine deleguee. La souverainete divine est absolue et permanente ; la souverainete humaine est derivee et temporaire. Le verset 258 est l'un des rares textes coraniques ou un etre humain tente explicitement de s'approprier les attributs du mulk divin — et en est reduit au silence."
          },
          "Richesse/Possession": {
            status: "probable",
            senses: [
              "milk = la possession materielle (bien, propriete)",
              "tamallaka = s'emparer, prendre possession de"
            ],
            proof_ctx: "Lane's Lexicon: la meme racine mlk donne milk (possession materielle de biens) en plus de mulk (souverainete politique). Les deux sens coexistent dans l'arabe classique.",
            axe1_verset: "Dans ce verset, le terme est al-mulk avec l'article defini, designe la royaute comme institution — pas une simple possession de biens. Le contexte du roi qui dispute avec Ibrahim sur la nature divine confirme que c'est la souverainete politique qui est en jeu.",
            axe2_voisins: "Le contexte narratif (un roi qui pretend donner la vie et la mort) confirme que mulk designe ici le pouvoir royal et non la richesse materielle.",
            axe3_sourate: "Le sens de richesse materielle (milk) est present ailleurs dans al-Baqarah dans les sections sur les transactions, mais n'est pas pertinent ici.",
            axe4_coherence: "La distinction semantique entre mulk (souverainete) et milk (possession materielle) est bien etablie dans la tradition lexicale arabe.",
            axe5_frequence: "Quand le Coran parle de souverainete politique ou divine, il utilise mulk ; quand il parle de possession de biens, il utilise milk ou tamalluk. Le contexte impose mulk ici."
          }
        }
      }
    },
    {
      word_key: "hyy",
      position: 18,
      sense_chosen: "faire vivre, vivifier — Form IV causative, prerogative divine que le roi usurpe",
      analysis_axes: {
        sense_chosen: "faire vivre, vivifier — Form IV causative, prerogative divine que le roi usurpe",
        concept_chosen: "Vivification/DonnerLaVie",
        concepts: {
          "Vivification/DonnerLaVie": {
            status: "retenu",
            senses: [
              "etre vivant (sens premier de la racine hyy)",
              "Form IV ahya = faire vivre, rendre vivant, causatif de vivre",
              "yuhyi = il fait vivre (inaccompli 3MS Form IV, attribut divin)",
              "vivifier ce qui etait mort ou inerte — acte creatif exclusif"
            ],
            proof_ctx: "Lane's Lexicon: h-y-y = to be alive, to live; Form IV ahya = to give life to, to make alive, to quicken; yuhyi = he gives life (imperfect 3MS Form IV). The Form IV causative marks this as an action performed upon others — causing life in what did not have it. Lane distinguishes hyy (state of being alive) from ihya' (the act of giving life to what was dead).",
            axe1_verset: "Yuhyi est un inaccompli Form IV de H-y-y = il fait vivre, il vivifie. Ibrahim affirme que son Seigneur fait vivre et fait mourir — deux actes createurs fondamentaux. Le roi pretend la meme chose (ana uhyi wa umitu, pos=22-23) mais en usurpant le terme. Ibrahim ne debat pas sur la definition — il deplace l'argument vers le soleil, revelant que faire vivre au sens divin n'est pas la meme chose qu'executer ou gracier. La Form IV causative est theologique : non pas etre vivant mais causer la vie.",
            axe2_voisins: "La paire yuhyi (pos=18) et yumitu (pos=19) est une formule coranique pour les actes divins fondamentaux — la maitrise totale du cycle vital. Cette paire est reprise par le roi aux pos=22-23 a la premiere personne, constituant une usurpation semantique que Ibrahim devoile par l'argument du soleil. Les pos=18-23 forment un micro-debat ou le meme vocabulaire est employe avec deux significations radicalement differentes.",
            axe3_sourate: "Al-Baqarah contient plusieurs references a la vie et a la mort comme actes divins exclusifs (2:28 : comment pouvez-vous nier Dieu alors qu'Il vous a donnes la vie, 2:154 : ils sont vivants, 2:164 : la pluie qui fait revivre la terre morte). La vivification est presentee comme un attribut de Dieu que nul autre ne peut revendiquer authentiquement. Le verset 258 est exceptionnel car il montre un etre humain pretendant a cet attribut — et etant reduit au silence.",
            axe4_coherence: "La Form IV ahya (faire vivre) apparait notamment en 2:260 (Ibrahim demande a voir comment Dieu fait vivre les morts) et en 36:33 (la terre morte rendue vivante). Ces paralleles montrent que la vivification divine est reelle et concrete, pas seulement metaphorique. La cohesion entre le verset 258 et le verset 260 est forte : Ibrahim pose ici la definition de son Seigneur (il fait vivre et mourir), puis demande plus loin a voir ce pouvoir en action.",
            axe5_frequence: "Yuhyi apparait environ 20 fois dans le Coran, toujours avec Dieu (ou celui qu'Il mandate) comme sujet veritable. La vivification est une prerogative divine — c'est pourquoi la pretention du roi de faire vivre est theologiquement absurde et constitue le coeur du debat avec Ibrahim. La racine hyy donne aussi al-Hayy (le Vivant, 2:255), attribut divin fondamental."
          },
          "Vie/Vitalite": {
            status: "probable",
            senses: [
              "hayat = la vie comme etat d'existence",
              "hayy = vivant, anime"
            ],
            proof_ctx: "Lane's Lexicon: hyy = being alive, the state of life; hayat = life as a condition. Distinct from the causative Form IV.",
            axe1_verset: "Dans ce verset, la Form IV causative (ahya > yuhyi) est utilisee, pas la Form I qui decrit l'etat de vie. La distinction est theologique : non pas etre vivant mais faire vivre.",
            axe2_voisins: "Le contexte du debat impose le sens causatif : Ibrahim ne dit pas que son Seigneur est vivant, il dit que son Seigneur cause la vie. La Form IV est deliberee.",
            axe3_sourate: "Le sens de vie comme etat (hayat) est present partout dans al-Baqarah mais n'est pas l'enjeu de ce verset specifique.",
            axe4_coherence: "La distinction forme I / forme IV est essentielle pour comprendre le debat theologique du verset.",
            axe5_frequence: "Le Coran utilise les deux sens avec precision : hayat pour l'etat de vie, ihya' pour l'acte de vivifier. Ici c'est le second."
          }
        }
      }
    },
    {
      word_key: "bht",
      position: 36,
      sense_chosen: "etre stupefait, etre reduit au silence par un argument irrefutable — passif subi",
      analysis_axes: {
        sense_chosen: "etre stupefait, etre reduit au silence par un argument irrefutable — passif subi",
        concept_chosen: "Stupeur/ReductionAuSilence",
        concepts: {
          "Stupeur/ReductionAuSilence": {
            status: "retenu",
            senses: [
              "stupefier, meduser, rendre sans voix (sens actif)",
              "buhita = fut stupefait, fut confondu (accompli passif)",
              "rester sans reponse face a un argument irrefutable",
              "etre paralyse intellectuellement, incapable de repondre"
            ],
            proof_ctx: "Lane's Lexicon: b-h-t = to confound, to render speechless, to stupefy; buhita = he was confounded, he was struck dumb, he was unable to reply; bahata = to be or become stupefied, to be at a loss for words. The passive form buhita indicates that the stupefaction was inflicted upon the subject — he did not choose silence, he was reduced to it by the force of the argument.",
            axe1_verset: "Buhita alladhi kafara = il fut stupefait, celui qui avait nie. Le passif est determinant : la stupeur lui vient d'ailleurs, elle le saisit comme une force exterieure. Il n'a pas choisi de se taire — il n'a pas pu repondre. L'argument d'Ibrahim (fais venir le soleil de l'occident) est empiriquement irrefutable, et le roi qui pretendait donner la vie et la mort ne peut pas meme controler le mouvement du soleil. La stupeur est l'effet naturel de la preuve irresistible.",
            axe2_voisins: "La structure narrative du verset est claire : dispute arrogante (pos=5) → argument irrefutable du soleil (pos=28-35) → stupeur (pos=36). La buhita est le point culminant du recit. Le verset suivant (Dieu ne guide pas le peuple injuste) montre que le silence du roi n'est pas une conversion : il est reduit au silence mais pas guide. La stupeur et la guidance sont deux choses distinctes — on peut etre confondu sans etre change.",
            axe3_sourate: "La structure argument / contre-argument est une constante dans al-Baqarah. La verite l'emporte toujours par un argument definitif qui reduit au silence les contradicteurs. Cette reduction au silence (buhita) est differente de la guidance — on peut etre reduit au silence sans etre guide. Al-Baqarah presente regulierement des adversaires d'Ibrahim ou des messagers qui finissent sans reponse face a la logique divine.",
            axe4_coherence: "La racine b-h-t apparait en 4:156 pour la calomnie des gens du Livre contre Marie (buhtan azim = une calomnie enormissime). Les deux sens (stupeur et calomnie) partagent l'idee d'une frappe qui desactive l'autre — par un argument irresistible ou par une fausse accusation. Dans le verset 258, la buhita est juste : le roi est confondu par un argument valide. La connexion avec le buhtan (calomnie) enrichit la racine : dans les deux cas, quelqu'un est frappe et ne peut plus avancer.",
            axe5_frequence: "Buhita (passif accompli) n'apparait qu'ici dans le Coran. Sa rarete souligne la force de ce moment dans le recit : Ibrahim a accompli ce qu'il etait venu faire — reduire l'arrogant au silence par la seule force de la raison. Cette hapax legomenon coranique est elle-meme un signe de l'intensite de la scene : nulle autre dispute dans le Coran ne se conclut par ce terme unique de stupeur totale."
          },
          "Calomnie/Diffamation": {
            status: "peu_probable",
            senses: [
              "buhtan = calomnie, fausse accusation grave",
              "baht = diffamer, accuser injustement"
            ],
            proof_ctx: "Lane's Lexicon: b-h-t donne aussi buhtan = calumny, false accusation (4:112, 4:156, 24:16). La racine couvre les deux sens.",
            axe1_verset: "Dans ce verset, le passif buhita designe clairement la stupeur et non la calomnie. Le contexte est celui d'un debat verbal ou le roi est confondu, pas d'une accusation injuste.",
            axe2_voisins: "Aucun element contextuel ne renvoie a une calomnie dans ce passage. Le sens de stupeur est confirme par la logique narrative.",
            axe3_sourate: "Le sens de calomnie (buhtan) est present en 2:... mais dans des contextes entierement differents (relations conjugales, fausse accusation).",
            axe4_coherence: "Les deux sens sont lies etymologiquement mais distincts semantiquement. Le contexte impose le sens de stupeur ici.",
            axe5_frequence: "Numeriquement, buhtan (calomnie) est plus frequent que buhita (stupeur passif). Mais la forme passive de ce verset impose sans ambiguite le sens de reduction au silence."
          }
        }
      }
    },
    {
      word_key: "hdy",
      position: 41,
      sense_chosen: "guider, orienter vers la voie droite — Dieu refuse Sa guidance aux injustes qui disputent contre la verite",
      analysis_axes: {
        sense_chosen: "guider, orienter vers la voie droite — Dieu refuse Sa guidance aux injustes qui disputent contre la verite",
        concept_chosen: "Guidance/Direction",
        concepts: {
          "Guidance/Direction": {
            status: "retenu",
            senses: [
              "guider, montrer le chemin, conduire vers",
              "hada = il a guide ; yahdi = il guide (inaccompli, acte divin)",
              "la yahdi = il ne guide pas (refus conditionnel de guidance)",
              "guidance divine comme don accorde selon la receptivite morale"
            ],
            proof_ctx: "Lane's Lexicon: h-d-y = to guide, to direct rightly, to lead on the right way; hada = to guide; yahdi = he guides (God's act); la yahdi = he does not guide. The negative formula la yahdi l-qawma l-zalimin = God does not guide the people of wrongdoers — a recurring Quranic formula indicating that Divine guidance is conditional on receptivity and moral integrity.",
            axe1_verset: "Wa llahu la yahdi al-qawma al-zalimin = et Dieu ne guide pas le peuple injuste. La negation de la guidance divine pour les injustes conclut le recit. La dispute du roi (pos=5) etait l'expression de son injustice (zulm) — retourner contre Dieu le don de la souverainete qu'Il lui avait accorde. Le roi stupefait (pos=36) n'est pas guide — la stupeur n'est pas l'ouverture a la verite mais la defaite de l'argument faux. La guidance reste absente.",
            axe2_voisins: "Yahdi (pos=41) est en relation directe avec al-qawma al-zalimin (pos=42-43) : la guidance est refusee non pas a un individu mais a un groupe (qawm) defini par son injustice collective (zulm). Le roi represente son peuple — les injustes comme categorie morale et non comme simple individu. Cette universalisation de la lecon est typique de la pedagogie coranique : le recit particulier illustre une loi generale.",
            axe3_sourate: "Al-Baqarah est marquee par le theme du choix entre guidance et egarement des les premiers versets (2:2-5 les croyants vs 2:6-7 les incroyants). Les injustes (zalimun) sont ceux qui abusent de leur libre arbitre pour nier et opprimer. La formule la yahdi al-qawma al-zalimin est recurrente dans tout le Coran (2:246, 3:86, 5:51, 9:109) — chaque fois qu'un groupe humain se met hors de portee de la guidance divine par ses actes injustes.",
            axe4_coherence: "La racine h-d-y donne huda (guidance), hadi (guide), ihda' (cadeau, sens secondaire). Dans le Coran, Dieu guide qui Il veut mais ne guide pas ceux qui sont deliberement injustes (zalimun) ou pervers (fasiqun). La guidance est une grace accordee, non une mecanique automatique. Le verset 258 illustre ce principe : le roi a ete avise (buhita), mais l'evidence ne suffit pas sans la grace divine de la guidance.",
            axe5_frequence: "Hada/yahdi apparait environ 316 fois dans le Coran — l'un des verbes les plus frequents. La guidance divine (huda) est le theme central du texte coranique depuis la Fatiha (ihdinassirat al-mustaqim = guide-nous sur le droit chemin). La declaration Dieu ne guide pas les injustes est une formule recurrente qui souligne la responsabilite morale du libre arbitre humain : la guidance n'est pas refusee arbitrairement mais en consequence des choix humains."
          },
          "Don/Cadeau": {
            status: "peu_probable",
            senses: [
              "hadiya = cadeau, present",
              "ihda' = offrir un cadeau, presenter"
            ],
            proof_ctx: "Lane's Lexicon: la meme racine hdy donne hadiya (cadeau, present) et ihda' (offrir). Le sens de guider vers soi et d'offrir partagent l'idee de diriger vers.",
            axe1_verset: "Dans ce verset, yahdi est clairement employe dans le sens de guider vers la voie droite — le contexte de conclusion morale d'un debat theologique exclut le sens de cadeau.",
            axe2_voisins: "Le contexte de la negation (la yahdi = ne guide pas) impose le sens de guidance et non de cadeau.",
            axe3_sourate: "Le sens de cadeau (hadiya) est present ailleurs dans le Coran (27:35 Saba envoie un hadiya a Salomon) mais n'est pas pertinent ici.",
            axe4_coherence: "La distinction semantique entre les deux sens de la racine hdy est bien etablie dans la tradition lexicale arabe.",
            axe5_frequence: "Dans 90% des occurrences coraniques, hdy / yahdi designe la guidance divine — c'est le sens dominant et celui impose par ce contexte."
          }
        }
      }
    }
  ]
};

async function main() {
  console.log('=== PIPELINE S2 V258 ===');
  const data = verseData;

  // Update verse_analyses
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);

  if (veErr) { console.error('ERROR verse_analyses:', veErr.message); return; }
  console.log('verse_analyses updated (V258, id=' + data.analysis_id + ')');

  // Insert VWAs
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('  VWA ERROR ' + word.word_key + ' pos=' + word.position + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V258');
}
main().catch(console.error);
