const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 180
// verse_id=187, analysis_id=545
// "Il vous est prescrit, quand la mort se presente a l'un
//  de vous et qu'il laisse du bien, de faire un testament
//  en faveur des parents et des proches de maniere reconnue
//  — un devoir pour ceux qui se premunissent."
// Testament obligatoire, parents et proches, equite
// =====================================================

const verseData = {
  180: {
    verse_id: 187,
    analysis_id: 545,
    translation_arab: "Il vous est prescrit, quand la mort se presente a l'un de vous et qu'il laisse du bien, de faire un testament en faveur des parents et des proches de maniere reconnue — un devoir pour ceux qui se premunissent.",
    full_translation: "On vous a prescrit, quand la mort est proche de l'un de vous et s'il laisse des biens, le testament en faveur des pere et mere et des proches, de maniere convenable : c'est un devoir pour les pieux.",
    translation_explanation: `§DEMARCHE§
Le verset ouvre une section legislative en posant l'obligation du testament. Le verbe **kutiba** est un accompli passif 3MS de la racine k-t-b. Le Lane's donne : ecrire, prescrire, decreter, rendre obligatoire. Le passif (kutiba) designe un decret qui vient d'en haut et s'impose a ceux qui le recoivent — ce n'est pas une suggestion mais une obligation divine inscrite. La construction « kutiba alaykum » (il vous est prescrit) est la meme qu'en 2:183 pour le jeune et en 2:216 pour le combat — elle marque une obligation ferme. Le mot **alaykum** (sur vous) indique que l'obligation pese sur les croyants comme une charge a porter. Le verbe **hadara** est un accompli 3MS de la racine h-d-r. Le Lane's donne : etre present, se presenter, assister, etre la, temoigner. La presence de la mort signifie son approche imminente — la mort se presente, elle est la, elle temoigne de la fin prochaine. Le moment du testament est ce moment precis ou la mort devient reelle et presente. Le nom **ahadakum** est un nom indefini de la racine a-h-d avec pronom suffixe 2MP. Le Lane's donne : l'un, quelqu'un parmi. L'indefini souligne que la prescription concerne chacun individuellement — ce n'est pas une obligation collective mais une obligation qui touche chaque individu au moment de sa mort. Le nom **al-mawtu** est un nom defini singulier de la racine m-w-t. Le Lane's donne : mort, cessation de la vie, fin de l'existence terrestre. La mort est definie par l'article al- — c'est LA mort, la realite connue et ineluctable, pas une mort parmi d'autres. La mort est un sujet grammatical : c'est elle qui se presente (hadara al-mawtu), elle agit, elle vient. Le verbe **taraka** est un accompli 3MS de la racine t-r-k. Le Lane's donne : laisser, abandonner, quitter, renoncer a. La condition est double : la mort se presente ET il laisse du bien. Si le mourant ne laisse rien, l'obligation du testament n'a pas de matiere. Le verbe taraka implique un depart — celui qui meurt quitte ses biens et les laisse derriere lui. Le nom **khayran** est un nom accusatif indefini singulier de la racine kh-y-r. Le Lane's donne : bien, richesse, fortune, ce qui est bon et souhaitable. Le mot est au singulier indefini — du bien, une quantite de bien. Les exegetes classiques precisent que « khayr » ici designe specifiquement la richesse materielle, les biens a leguer. Le nom **al-wasiyyatu** est un nom defini feminin singulier de la racine w-s-y. Le Lane's donne : recommandation, injonction, testament, ce qu'on enjoint de faire apres soi. Le testament (wasiyya) est l'acte de recommander la distribution de ses biens apres la mort. Le mot est au nominatif comme sujet de la phrase nominale — c'est le testament qui est prescrit. Le nom **al-walidayni** est un duel defini de la racine w-l-d. Le Lane's donne : les deux parents, pere et mere, ceux qui ont engendre. Le duel est specifique : ce ne sont pas les parents au sens large mais precisement le pere et la mere. L'article al- les designe comme les parents connus — les siens propres. Le nom **al-aqrabina** est un pluriel defini de la racine q-r-b. Le Lane's donne : les proches, les plus proches en parente, ceux qui sont rapproches par le lien du sang. Le pluriel montre que les proches sont multiples — freres, soeurs, oncles, tantes, cousins. Le superlatif (aqrab = le plus proche) montre qu'il s'agit des parents les plus proches, pas de la parente lointaine. Le nom **al-ma'rufi** est un participe passif defini de la racine '-r-f. Le Lane's donne : ce qui est connu, reconnu, approuve, convenable, conforme a la norme. Le ma'ruf est ce que les gens connaissent et reconnaissent comme juste. La mention « bi-l-ma'ruf » (de maniere reconnue) pose une condition d'equite — le testament doit etre equitable, conforme aux normes de justice reconnues. Le nom **haqqan** est un nom accusatif indefini de la racine h-q-q. Le Lane's donne : verite, realite, droit, obligation, ce qui est du. Le mot est a l'accusatif absolu (maf'ul mutlaq) — il confirme l'obligation de maniere emphatique. Le haqq est ce qui est necessaire et irreductible — l'obligation du testament n'est pas optionnelle. Le nom **al-muttaqina** est un participe actif pluriel defini de la racine w-q-y. Le Lane's donne : ceux qui se premunissent, qui se protegent, qui prennent garde, les pieux. Le muttaqi est celui qui place une protection entre lui et ce qu'il craint — ici celui qui se premunit contre le chatiment en obeissant aux obligations divines. La mention des muttaqin a la fin du verset qualifie l'obligation : c'est un devoir specifiquement pour ceux qui se premunissent — non que les autres en soient dispenses, mais que seuls les pieux l'accomplissent reellement.

§JUSTIFICATION§
**prescrit** — Le sens retenu est « prescrire/decreter ». Le verbe kutiba est un passif de k-t-b qui marque une obligation divine. L'alternative « ecrire » au sens materiel est ecartee car le passif avec « alaykum » cree la construction juridique « il vous est prescrit ».

**se presente** — Le sens retenu est « se presenter/etre present ». Le verbe hadara designe l'arrivee, la presence imminente. L'alternative « habitation sedentaire » est ecartee car le sujet est la mort (al-mawtu) qui se presente — il s'agit d'une venue, pas d'une installation.

**l'un de vous** — Le sens retenu est « l'un/quelqu'un parmi ». Le mot ahadakum individualise l'obligation. L'alternative « unicite » est ecartee car le contexte est distributif (chacun d'entre vous), pas ontologique.

**la mort** — Le sens retenu est « mort/cessation ». Le mot al-mawtu designe la fin de la vie. Aucune alternative pertinente — le sens est univoque dans ce contexte.

**laisse** — Le sens retenu est « laisser/abandonner ». Le verbe taraka designe le fait de laisser derriere soi. L'alternative « renoncer » est ecartee car le mourant ne renonce pas volontairement — il laisse ses biens par necessite de la mort.

**du bien** — Le sens retenu est « bien/richesse ». Le mot khayran designe les biens materiels a leguer. L'alternative « bonte morale » est ecartee car le contexte est le testament — il faut avoir quelque chose de materiel a leguer.

**le testament** — Le sens retenu est « recommandation/testament ». Le mot al-wasiyyatu designe l'acte de recommander la distribution des biens. L'alternative « liaison/connexion » est ecartee car le contexte est juridique — il s'agit de l'acte testamentaire, pas d'un lien abstrait.

**les parents** — Le sens retenu est « ceux qui ont engendre/parents ». Le mot al-walidayni est un duel designant le pere et la mere. L'alternative « enfant/progéniture » est ecartee car le mot est un participe actif (walidayn = ceux qui engendrent), pas un objet de l'engendrement.

**les proches** — Le sens retenu est « les plus proches/parente ». Le mot al-aqrabina designe les proches par le sang. L'alternative « rapprochement spirituel » est ecartee car le contexte est le testament — les beneficiaires sont les proches par la parente, pas par la foi.

**de maniere reconnue** — Le sens retenu est « ce qui est connu/reconnu ». Le mot al-ma'rufi designe la norme reconnue de justice. L'alternative « connaissance intellectuelle » est ecartee car bi-l-ma'ruf est une locution juridique — de maniere convenable, pas avec connaissance.

**un devoir** — Le sens retenu est « obligation/verite ». Le mot haqqan est un accusatif absolu qui confirme l'obligation. L'alternative « realite ontologique » est ecartee car le contexte est juridique — haqqan confirme que le testament est un devoir, pas une reflexion sur la realite.

**ceux qui se premunissent** — Le sens retenu est « ceux qui se protegent/premunissent ». Le mot al-muttaqina designe ceux qui placent une protection entre eux et le chatiment. L'alternative « crainte » au sens emotionnel est ecartee car le participe actif marque une action continue et volontaire — se premunir, pas simplement avoir peur.

§CRITIQUE§
Les traductions courantes rendent « kutiba alaykum » par « il vous est prescrit » ce qui est fidele au passif arabe. Le point notable est le mot « khayr » traduit par « des biens » ou « du bien ». Certains traducteurs ajoutent « en abondance » ou « du bien considerable » pour preciser que le testament concerne les fortunes significatives. Notre traduction garde « du bien » sans qualification de quantite, fidele au texte qui ne pose pas de seuil. Le mot « al-ma'ruf » est rendu par « de maniere convenable » par Hamidullah et « de maniere reconnue » dans notre traduction — les deux sont valides, notre choix insiste sur le fait que la norme est celle reconnue par la communaute, pas juste la convenance individuelle.`,
    segments: [
      { fr: "il vous est", phon: "alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652", is_particle: true, position: 0 },
      { fr: "prescrit", pos: "verbe", phon: "kutiba", arabic: "\u0643\u064f\u062a\u0650\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "prescrire", position: 1 },
      { fr: "quand", phon: "idha", arabic: "\u0625\u0650\u0630\u064e\u0627", is_particle: true, position: 2 },
      { fr: "se presente a", pos: "verbe", phon: "hadara", arabic: "\u062d\u064e\u0636\u064e\u0631\u064e", word_key: "hdr", is_particle: false, sense_retenu: "se presenter", position: 3 },
      { fr: "quand", phon: "idha", arabic: "\u0625\u0650\u0630\u064e\u0627", is_particle: true, position: 2 },
      { fr: "l'un de vous", pos: "nom", phon: "ahadakum", arabic: "\u0623\u064e\u062d\u064e\u062f\u064e\u0643\u064f\u0645\u064f", word_key: "ahd", is_particle: false, sense_retenu: "l'un/quelqu'un", position: 5 },
      { fr: "la mort", pos: "nom", phon: "al-mawtu", arabic: "\u0671\u0644\u0652\u0645\u064e\u0648\u0652\u062a\u064f", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 6 },
      { fr: "s'il", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 7 },
      { fr: "laisse", pos: "verbe", phon: "taraka", arabic: "\u062a\u064e\u0631\u064e\u0643\u064e", word_key: "trk", is_particle: false, sense_retenu: "laisser", position: 8 },
      { fr: "du bien", pos: "nom", phon: "khayran", arabic: "\u062e\u064e\u064a\u0652\u0631\u064b\u0627", word_key: "khyr", is_particle: false, sense_retenu: "bien/richesse", position: 9 },
      { fr: "le testament", pos: "nom", phon: "al-wasiyyatu", arabic: "\u0671\u0644\u0652\u0648\u064e\u0635\u0650\u064a\u0651\u064e\u0629\u064f", word_key: "wsy", is_particle: false, sense_retenu: "testament", position: 10 },
      { fr: "les parents", pos: "nom", phon: "li-l-walidayni", arabic: "\u0644\u0650\u0644\u0652\u0648\u064e\u0640\u0670\u0644\u0650\u062f\u064e\u064a\u0652\u0646\u0650", word_key: "wld", is_particle: false, sense_retenu: "parents", position: 11 },
      { fr: "et les proches", pos: "nom", phon: "wa-l-aqrabina", arabic: "\u0648\u064e\u0671\u0644\u0652\u0623\u064e\u0642\u0652\u0631\u064e\u0628\u0650\u064a\u0646\u064e", word_key: "qrb", is_particle: false, sense_retenu: "proches", position: 12 },
      { fr: "de maniere reconnue", pos: "nom", phon: "bi-l-ma'rufi", arabic: "\u0628\u0650\u0671\u0644\u0652\u0645\u064e\u0639\u0652\u0631\u064f\u0648\u0641\u0650", word_key: "erf", is_particle: false, sense_retenu: "ce qui est reconnu", position: 13 },
      { fr: "un devoir", pos: "nom", phon: "haqqan", arabic: "\u062d\u064e\u0642\u0651\u064b\u0627", word_key: "hqq", is_particle: false, sense_retenu: "devoir", position: 14 },
      { fr: "pour", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 15 },
      { fr: "ceux qui se premunissent", pos: "nom", phon: "al-muttaqina", arabic: "\u0671\u0644\u0652\u0645\u064f\u062a\u0651\u064e\u0642\u0650\u064a\u0646\u064e", word_key: "wqy", is_particle: false, sense_retenu: "ceux qui se premunissent", position: 16 }
    ],
    words: [
      // ktb pos=1
      {
        word_key: "ktb", position: 1, sense_chosen: "prescrire",
        analysis_axes: {
          sense_chosen: "prescrire",
          concept_chosen: "Obligation/Décret",
          concepts: {
            "Obligation/Décret": {
              status: "retenu",
              senses: ["prescrire", "décréter", "rendre obligatoire", "imposer", "fixer une obligation"],
              proof_ctx: "Le verbe kutiba est un accompli passif 3MS de la racine k-t-b. Le Lane's donne : ecrire, prescrire, decreter, rendre obligatoire. Le passif (kutiba) marque un decret qui vient d'une autorite superieure et s'impose a ses destinataires. La construction « kutiba alaykum » (il vous est prescrit) est une formule juridique coranique qui pose une obligation ferme et non negociable. Le concept d'obligation est un acte exterieur et directif — il sort de celui qui prescrit et atteint ceux qui doivent obeir. C'est un jugement qui s'impose comme une realite contraignante, pas une suggestion ou un souhait.",
              axe1_verset: "Le verbe kutiba ouvre le verset en posant le cadre juridique : c'est une prescription divine. Le champ lexical du verset (mort, bien, testament, parents, proches, devoir, premunir) tourne autour de l'obligation successorale. La prescription est le fondement sur lequel tout le verset repose — sans elle, le testament serait une recommandation optionnelle. Le passif efface l'agent (Dieu) pour mettre en avant l'obligation elle-meme, comme si elle existait par sa propre force. L'accusatif alaykum (sur vous) fait peser l'obligation sur les epaules des croyants comme un fardeau a porter.",
              axe2_voisins: "Le verset 2:178 utilise la meme construction « kutiba alaykum al-qisasu » (il vous est prescrit le talion). Le verset 2:183 l'utilisera pour le jeune « kutiba alaykum as-siyamu ». Cette sequence de prescriptions (talion → testament → jeune) montre que la sourate construit un code legislatif complet. Chaque « kutiba alaykum » introduit une obligation majeure de la vie musulmane. Le testament s'inscrit entre le talion et le jeune, montrant que la justice successorale est une obligation aussi fondamentale que la justice penale et le culte.",
              axe3_sourate: "La racine k-t-b est omnipresente dans la sourate al-Baqarah. En 2:2, le kitab est le Livre revele. En 2:44, les Gens du Livre lisent le Livre. En 2:178 et 2:180, k-t-b est utilise au passif pour imposer des obligations. La sourate montre que l'ecriture divine a deux faces : le Livre revele (kitab) qui guide, et la prescription (kutiba) qui oblige. L'ecriture est a la fois guidance et legislation.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. La formule « kutiba alaykum » apparait dans les versets legislatifs majeurs : le talion (2:178), le testament (2:180), le jeune (2:183), le combat (2:216). Chaque occurrence marque une obligation fondamentale que les croyants ne peuvent pas esquiver. Le Coran utilise le passif pour signifier que ces obligations ne viennent pas des hommes mais de Dieu — elles sont inscrites, decretees, gravees.",
              axe5_frequence: "Pour la mission du khalifa, la prescription est le cadre de la mission. Le khalifa ne vit pas dans l'anarchie — il vit sous un ensemble de prescriptions divines qui structurent sa vie sociale, cultuelle et juridique. Le testament est une prescription qui touche la justice entre les generations : le mourant prescrit la distribution de ses biens pour que la richesse ne soit pas accaparee. Le khalifa obeit aux prescriptions parce qu'elles sont le fondement de l'ordre social juste."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["écrire", "inscrire", "consigner", "noter", "tracer des lettres"],
              proof_ctx: "Le sens d'ecriture est le sens premier et physique de la racine k-t-b — tracer des signes sur un support. Le verbe kutiba au passif pourrait signifier « il a ete ecrit » au sens materiel. Mais le contexte est juridique : la construction « kutiba alaykum » ne signifie pas « on a ecrit sur vous » mais « il vous a ete prescrit ». La distinction philosophique est que l'ecriture est un acte technique de consignation, tandis que le decret est un acte d'autorite qui impose. Ici c'est l'autorite qui prime, pas la consignation — meme si la prescription est « ecrite » au sens ou elle est fixee definitivement."
            }
          }
        }
      },
      // hdr pos=4
      {
        word_key: "hdr", position: 4, sense_chosen: "se presenter",
        analysis_axes: {
          sense_chosen: "se presenter",
          concept_chosen: "Présence/Témoignage",
          concepts: {
            "Présence/Témoignage": {
              status: "retenu",
              senses: ["être présent", "se présenter", "assister", "témoigner", "comparaître"],
              proof_ctx: "Le verbe hadara est un accompli 3MS de la racine h-d-r. Le Lane's donne : etre present, se presenter, assister a, temoigner de. La presence est un etat d'etre-la, une realite spatiale et temporelle — celui qui est present est physiquement dans le lieu et dans le moment. Le verbe est a l'accompli avec le sujet al-mawtu (la mort) — la mort s'est presentee, elle est la, elle temoigne de la fin imminente. La presence de la mort n'est pas un concept abstrait mais une realite concrete : le mourant sent la mort arriver, elle se manifeste par les signes de l'agonie.",
              axe1_verset: "Le verbe hadara pose la condition temporelle du testament : quand la mort se presente. Le champ lexical (prescrit, mort, laisser, bien, testament) montre que la presence de la mort est le declencheur de l'obligation. Sans la presence de la mort, le testament n'est pas encore necessaire — c'est l'imminence de la mort qui active la prescription. Le sujet grammatical est la mort elle-meme qui « se presente » comme un visiteur — la mort vient, elle arrive, elle est la. Le verbe hadara personnifie la mort comme un agent actif.",
              axe2_voisins: "Le verset 2:178 parlait du talion en cas de meurtre — la mort causee par l'homme. Le verset 2:180 parle de la mort naturelle — celle qui se presente d'elle-meme. La sequence montre deux faces de la mort : la mort violente (talion) et la mort naturelle (testament). Dans les deux cas, la mort est le point de depart d'une obligation juridique : la retribution dans le premier cas, la distribution des biens dans le second.",
              axe3_sourate: "La racine h-d-r apparait dans la sourate al-Baqarah en 2:133 (la mort de Jacob — « am kuntum shuhada'a idh hadara ya'quba al-mawtu ») et en 2:180. Les deux occurrences lient la presence de la mort au testament : Jacob, en mourant, interroge ses fils sur leur foi, et en 2:180 le croyant mourant doit faire son testament. La sourate construit un parallele entre le testament spirituel de Jacob et le testament materiel prescrit aux croyants.",
              axe4_coherence: "La racine h-d-r apparait environ 44 fois dans le Coran. L'expression « hadara al-mawtu » (la mort se presente) apparait en 2:180, 4:18, 5:106. Dans chaque occurrence, la presence de la mort est le moment charniere ou une obligation s'active : le testament en 2:180, l'impossibilite du repentir en 4:18, le temoignage en 5:106. Le Coran utilise la presence de la mort comme un seuil juridique — le moment ou certaines regles changent.",
              axe5_frequence: "Pour la mission du khalifa, la presence de la mort est le rappel ultime de la finitude de la mission. Le khalifa sait que sa mission a une fin — la mort viendra se presenter. Ce moment n'est pas un echec mais un passage qui doit etre prepare : le testament est l'acte par lequel le khalifa organise la transmission de ses biens avec justice. La conscience de la mort motive l'action juste pendant la vie."
            },
            "Sédentarité/Civilisation": {
              status: "probable",
              senses: ["s'installer", "être sédentaire", "résider", "habiter", "civilisation urbaine", "présence permanente"],
              proof_ctx: "Le sens de sedentarite est un sens bien atteste de la racine h-d-r dans le Lane's — le hadar est la vie sedentaire par opposition au badw (vie nomade). La hadarah est la civilisation, l'installation permanente. Mais le contexte du verset ne parle pas d'installation ou de sedentarite — le sujet est la mort (al-mawtu) qui « se presente ». La mort ne s'installe pas — elle arrive, elle se manifeste, elle est la pour un moment precis. La distinction philosophique est que la sedentarite est un etat permanent d'installation, tandis que la presence est un etat ponctuel d'etre-la. La mort se presente (ponctuel) mais ne reside pas (permanent)."
            }
          }
        }
      },
      // ahd pos=5
      {
        word_key: "ahd", position: 5, sense_chosen: "l'un/quelqu'un",
        analysis_axes: {
          sense_chosen: "l'un/quelqu'un",
          concept_chosen: "Quiconque/Indéfini",
          concepts: {
            "Quiconque/Indéfini": {
              status: "retenu",
              senses: ["l'un", "quelqu'un", "quiconque", "un individu parmi"],
              proof_ctx: "Le nom ahadakum est compose de ahad (un, l'un) et du pronom suffixe 2MP (kum = vous). Le Lane's donne pour ahad : un, l'un, quelqu'un, quiconque. Dans la construction ahadakum (l'un de vous), le mot individualise l'obligation au sein du groupe — chaque individu est concerne personnellement quand la mort se presente a lui. L'indefini est un acte de distribution — l'obligation ne pese pas sur le groupe comme un tout mais sur chaque membre individuellement au moment ou la mort s'approche de lui.",
              axe1_verset: "Le mot ahadakum individualise la prescription posee par kutiba alaykum. Le champ lexical (mort, laisser, bien, testament) montre que la situation est personnelle — c'est un individu qui meurt, qui laisse du bien, qui doit faire un testament. Le passage du « vous » collectif (alaykum) au « l'un de vous » (ahadakum) cree un zoom : l'obligation est collective dans son principe mais individuelle dans son application. Chaque croyant est concerne au moment de SA mort.",
              axe2_voisins: "Le verset 2:178 parlait du meurtre avec « man qutila » (celui qui est tue) — un individu aussi. Le verset 2:180 utilise « ahadakum » (l'un de vous) pour designer le mourant. La sequence montre que la legislation coranique s'adresse a la communaute mais se concretise dans des situations individuelles : un tue, un mourant. La loi divine est universelle dans son decret mais particuliere dans son application.",
              axe3_sourate: "La racine a-h-d apparait frequemment dans la sourate al-Baqarah sous la forme ahad (un/quelqu'un). En 2:96, « chacun d'eux (ahaduhum) aimerait vivre mille ans ». En 2:136, « nous ne faisons pas de difference entre aucun d'eux (ahadin minhum) ». Le mot ahad dans la sourate sert a individualiser — il prend une realite collective et la ramene a l'individu.",
              axe4_coherence: "La racine a-h-d apparait dans tout le Coran pour individualiser. En 112:1, « Dis : Il est Dieu, Un (Ahad) » — le sens est l'unicite absolue. En 2:180, ahad n'est pas l'unicite divine mais l'individualisation humaine — l'un de vous. Le Coran utilise la meme racine pour l'unicite de Dieu et l'individualite de l'homme — chaque etre est unique face a sa mort.",
              axe5_frequence: "Pour la mission du khalifa, l'individualisation rappelle que la mission est personnelle. Le khalifa ne peut pas deleguer sa mort ni son testament. Au moment de mourir, chacun est seul face a ses responsabilites. La mention « l'un de vous » rappelle que la mission du khalifa n'est pas une mission de groupe mais une mission individuelle — chacun rend compte pour lui-meme."
            },
            "Unicité/Indivisibilité": {
              status: "probable",
              senses: ["unique", "un seul", "indivisible", "unicité", "singularité"],
              proof_ctx: "Le sens d'unicite est le sens fort de la racine a-h-d — ce qui ne peut pas etre divise, ce qui est un de maniere absolue. Le Lane's donne : un, unique, qui n'a pas de second. La sourate 112 utilise Ahad pour l'unicite divine absolue. Mais dans le verset 2:180, le mot ahadakum n'est pas utilise pour marquer l'unicite mais pour individualiser — « l'un de vous » signifie « n'importe lequel parmi vous », pas « l'unique parmi vous ». La distinction philosophique est que l'unicite est une qualite ontologique (etre unique en soi), tandis que l'indefini est une fonction distributive (designer un individu quelconque dans un groupe). Le contexte est la distribution d'une obligation, pas la designation d'une qualite unique."
            }
          }
        }
      },
      // mwt pos=6
      {
        word_key: "mwt", position: 6, sense_chosen: "mort",
        analysis_axes: {
          sense_chosen: "mort",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mort", "cessation de la vie", "décès", "trépas", "fin de l'existence terrestre"],
              proof_ctx: "Le nom al-mawtu est un nom defini singulier de la racine m-w-t. Le Lane's donne : mort, cessation de la vie, etat contraire a la vie, disparition de la force vitale. La mort est la cessation definitive et irreversible des fonctions vitales — elle marque le passage de l'etat de vivant a l'etat de mort. L'article al- definit la mort comme LA mort — la realite universelle et connue de tous, pas une mort abstraite ou metaphorique. Le nom est sujet grammatical de hadara : c'est la mort qui se presente, elle est un agent actif dans le verset.",
              axe1_verset: "Le mot al-mawtu est le pivot du verset — c'est la mort qui declenche l'obligation du testament. Le champ lexical (prescrit, se presenter, laisser, bien, testament) est entierement organise autour de la mort comme evenement declencheur. Sans la mort, pas de testament. Le verset ne parle pas de la mort comme une fin tragique mais comme un moment juridique — le moment ou les obligations de transmission s'activent. La mort est definie (al-) car elle est connue de tous — personne n'ignore la mort.",
              axe2_voisins: "Le verset 2:178 traitait de la mort violente (le meurtre) avec le talion. Le verset 2:180 traite de la mort naturelle avec le testament. Les versets 178-180 montrent que la legislation coranique couvre les deux types de mort — la mort causee par l'homme et la mort naturelle — chacune avec ses propres obligations. La mort est le fondement de la legislation sociale : c'est parce que les hommes meurent qu'il faut des regles de succession et de retribution.",
              axe3_sourate: "La racine m-w-t est tres frequente dans la sourate al-Baqarah. En 2:19, la mort est evoquee dans la tempete. En 2:28, « vous etiez morts et Il vous a donne la vie ». En 2:56, « puis Nous vous avons ressuscites apres votre mort ». En 2:133, la mort de Jacob. En 2:180, la mort du croyant. La sourate explore la mort sous toutes ses facettes : mort spirituelle, mort physique, mort collective, mort individuelle. Ici c'est la mort individuelle du croyant qui possede des biens.",
              axe4_coherence: "La racine m-w-t apparait environ 165 fois dans le Coran. La mort est un des themes les plus developpes du Coran — elle est presentee comme une certitude (3:185 : « toute ame goutera la mort »), un passage (23:15 : « puis vous mourrez, puis au Jour de la Resurrection vous serez ressuscites »), et un evenement juridique (2:180, 4:11-12 : regles de succession). Le Coran ne craint pas la mort — il l'organise juridiquement et la situe dans un cycle plus large.",
              axe5_frequence: "Pour la mission du khalifa, la mort est la fin temporelle de la mission. Le khalifa sait que sa mission est limitee dans le temps — la mort viendra mettre un terme a ses actions. Cette conscience de la mort motive le khalifa a agir avec justice pendant qu'il est vivant. Le testament est l'acte ultime du khalifa mourant — il distribue ses biens avec equite pour que meme apres sa mort, la justice continue a travers la distribution equitable de ce qu'il laisse."
            }
          }
        }
      },
      // trk pos=8
      {
        word_key: "trk", position: 8, sense_chosen: "laisser",
        analysis_axes: {
          sense_chosen: "laisser",
          concept_chosen: "Abandon/Renoncement",
          concepts: {
            "Abandon/Renoncement": {
              status: "retenu",
              senses: ["laisser", "abandonner", "quitter", "renoncer à", "délaisser", "laisser derrière soi"],
              proof_ctx: "Le verbe taraka est un accompli 3MS de la racine t-r-k. Le Lane's donne : laisser, abandonner, quitter, renoncer a, laisser derriere soi. Le tark est l'acte de quitter quelque chose en s'en separant — celui qui laisse cesse d'etre lie a ce qu'il laisse. L'abandon est un acte exterieur et definitif — on quitte quelque chose et on ne revient pas. Dans le contexte de la mort, taraka designe ce que le mourant laisse derriere lui quand il part — ses biens restent dans le monde alors que lui le quitte. L'accompli (taraka) marque que l'action est achevee — il a laisse, c'est fait, les biens sont la.",
              axe1_verset: "Le verbe taraka pose la deuxieme condition du testament : non seulement la mort se presente, mais en plus il laisse du bien. Le champ lexical (mort, bien, testament, parents) montre que laisser est le pont entre la mort et le testament. Le mourant quitte le monde mais ses biens restent — le testament est l'instrument qui organise la destination de ce qui est laisse. Sans biens laisses, le testament n'a pas d'objet. Le verbe est a l'accompli dans une proposition conditionnelle (in taraka = s'il laisse), generalisant la condition.",
              axe2_voisins: "Le verset 2:178 parlait du meurtre — la mort violente. Le verset 2:180 parle de ce que le mort laisse — ses biens. La sequence montre un passage de la mort elle-meme a ses consequences materielles. Quand quelqu'un meurt, la question immediate est : que laisse-t-il ? Le verset 2:180 repond a cette question en posant l'obligation du testament. Les versets voisins 2:181-182 traiteront des cas ou le testament est modifie ou injuste.",
              axe3_sourate: "La racine t-r-k apparait dans la sourate al-Baqarah en plusieurs endroits. En 2:170, les incredules disent « nous suivons ce sur quoi nous avons trouve nos peres » — ils refusent d'abandonner les traditions. En 2:180, taraka designe ce que le mourant laisse derriere lui. La sourate utilise t-r-k pour l'acte de quitter quelque chose — que ce soit volontaire (abandonner les traditions) ou involontaire (laisser des biens en mourant).",
              axe4_coherence: "La racine t-r-k apparait environ 43 fois dans le Coran. En 4:7, « aux hommes une part de ce qu'ont laisse (taraka) les parents et les proches ». En 4:11-12, les regles de succession detaillent la repartition de ce que le mort laisse. Le Coran utilise taraka comme terme technique pour designer l'heritage — ce que le defunt laisse derriere lui. Le verset 2:180 est un des premiers versets a poser le cadre general du testament avant que la sourate 4 ne detaille les parts.",
              axe5_frequence: "Pour la mission du khalifa, laisser derriere soi est l'aboutissement de la mission terrestre. Le khalifa ne peut rien emporter avec lui dans la mort — tout ce qu'il a accumule est laisse aux vivants. La question est : comment cet heritage sera-t-il distribue ? Le testament est l'acte par lequel le khalifa mourant exerce sa derniere responsabilite sociale — distribuer avec justice ce qu'il ne peut plus garder. Laisser avec justice, c'est accomplir la mission jusqu'au bout."
            }
          }
        }
      },
      // khyr pos=9
      {
        word_key: "khyr", position: 9, sense_chosen: "bien/richesse",
        analysis_axes: {
          sense_chosen: "bien/richesse",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "richesse", "fortune", "bonté", "excellence", "ce qui est bon", "préférence", "supériorité"],
              proof_ctx: "Le nom khayran est un nom accusatif indefini singulier de la racine kh-y-r. Le Lane's donne : bien, bonte, excellence, richesse, fortune, ce qui est bon et souhaitable, preference, superieur. Le khayr est ce qui est bon en soi et desirable — il englobe le bien moral et le bien materiel. Le mot est au singulier indefini (khayran = du bien) — une quantite indeterminee de bien. Dans le contexte du testament, les exegetes classiques (Tabari, Qurtubi) precisent que khayr ici designe specifiquement la richesse materielle — les biens a leguer. Le bien est ce qui a de la valeur et qui peut etre transmis.",
              axe1_verset: "Le mot khayran est l'objet du verbe taraka — ce que le mourant laisse derriere lui. Le champ lexical (testament, parents, proches) montre que le bien est la matiere du testament. Sans bien laisse, pas de testament necessaire. Le mot est indefini (khayran, pas al-khayr) — « du bien », une quantite non precisee. Le verset ne fixe pas de seuil minimum — tout bien laisse, quelle que soit sa quantite, appelle un testament. L'indefini laisse la porte ouverte a l'interpretation : le seuil depend des normes de la communaute (al-ma'ruf).",
              axe2_voisins: "Le verset 2:177 mentionnait le fait de « donner de la richesse (al-mal) malgre l'amour qu'on lui porte ». Le verset 2:180 parle du « bien » (khayr) que le mourant laisse. La sequence montre deux manieres de distribuer ses biens : le don volontaire pendant la vie (2:177) et le testament obligatoire au moment de la mort (2:180). Le khayr de 2:180 est le meme bien materiel que le mal de 2:177, mais dans un contexte different — le don est volontaire, le testament est prescrit.",
              axe3_sourate: "La racine kh-y-r est tres frequente dans la sourate al-Baqarah. En 2:54, « c'est mieux pour vous ». En 2:106, « Nous apportons mieux qu'elle ou semblable ». En 2:110, « tout bien que vous avancez pour vous-memes ». En 2:180, khayr designe la richesse materielle. La sourate utilise khayr dans tous ses sens — la bonte morale, la preference, le meilleur, et la richesse. C'est le contexte qui determine le sens precis a chaque occurrence.",
              axe4_coherence: "La racine kh-y-r apparait environ 176 fois dans le Coran. En 2:215, « tout bien que vous depensez, c'est pour les parents et les proches ». En 2:272, « tout bien que vous depensez est pour vous-memes ». Le Coran lie le khayr (bien/richesse) a la depense pour les autres — le bien n'est veritablement bien que lorsqu'il est partage. Le verset 2:180 s'inscrit dans cette logique : le bien laisse doit etre distribue aux parents et proches par testament.",
              axe5_frequence: "Pour la mission du khalifa, le bien materiel est un instrument de la mission, pas sa finalite. Le khalifa accumule des biens non pour les garder mais pour les distribuer avec justice. Le testament est l'acte final de cette distribution — meme apres la mort, le bien continue a servir la communaute. Le khalifa qui laisse du bien et organise sa distribution accomplit sa mission de prevenir la corruption et l'injustice dans la societe."
            }
          }
        }
      },
      // wsy pos=10
      {
        word_key: "wsy", position: 10, sense_chosen: "testament",
        analysis_axes: {
          sense_chosen: "testament",
          concept_chosen: "Recommandation/Injonction",
          concepts: {
            "Recommandation/Injonction": {
              status: "retenu",
              senses: ["recommandation", "injonction", "testament", "recommander", "enjoindre", "ordonner après soi"],
              proof_ctx: "Le nom al-wasiyyatu est un nom defini feminin singulier de la racine w-s-y. Le Lane's donne : recommandation, injonction, testament, ce qu'on enjoint de faire apres soi, ce qu'on ordonne a quelqu'un d'executer. La wasiyya est un acte juridique par lequel une personne recommande la distribution de ses biens apres sa mort. C'est un acte exterieur et directif — la volonte du mourant sort de lui et s'impose aux vivants. La wasiyya lie les vivants a la volonte du mort — elle est un pont entre deux mondes. L'article al- definit le testament comme l'institution connue, pas un testament particulier.",
              axe1_verset: "Le mot al-wasiyyatu est le coeur du verset — c'est le testament qui est prescrit (kutiba). Le champ lexical (prescrire, mort, laisser, bien, parents, proches, reconnu, devoir) tourne autour du testament comme institution juridique. Le testament est le point de convergence de toutes les conditions du verset : la mort se presente + il laisse du bien → donc le testament. Le mot est au nominatif comme sujet de la phrase nominale — le testament EST l'objet de la prescription. La locution « li-l-walidayni wa-l-aqrabina » designe les beneficiaires du testament.",
              axe2_voisins: "Le verset 2:181 traite immediatement du cas ou le testament est modifie apres avoir ete entendu — « celui qui le modifie apres l'avoir entendu, le peche est sur ceux qui le modifient ». Le verset 2:182 traite du cas ou le testateur commet une injustice dans son testament — le mediateur qui corrige n'a pas de peche. Les versets 180-182 forment un bloc legislatif complet sur le testament : l'obligation (180), la protection (181), la rectification (182).",
              axe3_sourate: "La racine w-s-y apparait dans la sourate al-Baqarah en 2:132 (la recommandation de Jacob a ses fils) et en 2:180 (le testament prescrit). En 2:132, la wasiyya est spirituelle — Jacob recommande a ses fils de rester dans la soumission a Dieu. En 2:180, la wasiyya est materielle — le mourant recommande la distribution de ses biens. La sourate montre que la wasiyya couvre le spirituel et le materiel — on transmet sa foi et on transmet ses biens.",
              axe4_coherence: "La racine w-s-y apparait environ 32 fois dans le Coran. En 4:11-12, les regles de succession sont posees « de apres un testament qu'il aura fait (wasiyyatin yusi biha) ». En 5:106, le testament est mentionne au moment de la mort. En 36:50, les incredules ne pourront « ni faire de testament ni retourner aux leurs ». Le Coran montre que le testament est un droit et une obligation — ceux qui en sont prives (les morts subites, les incredules au Jour du Jugement) sont dans une situation de perte.",
              axe5_frequence: "Pour la mission du khalifa, le testament est l'acte ultime de responsabilite sociale. Le khalifa ne meurt pas en abandonnant ses responsabilites — il les transmet par le testament. La wasiyya est un acte de continuite : la justice sociale ne s'arrete pas avec la mort d'un individu. Le khalifa mourant organise la transmission de ses biens pour que la corruption ne s'installe pas apres lui. Le testament est l'heritage juridique du khalifa."
            },
            "Liaison/Connexion": {
              status: "probable",
              senses: ["lier", "connecter", "joindre", "relier", "continuité"],
              proof_ctx: "Le sens de liaison est un sens profond de la racine w-s-y — le Lane's indique que la racine porte l'idee de joindre, de connecter une chose a une autre. La wasiyya « connecte » la volonte du mourant aux actes des vivants — elle cree un lien entre le mort et les vivants. Mais le contexte juridique du verset designe specifiquement l'acte testamentaire (la recommandation juridique), pas la connexion abstraite. La distinction philosophique est que la connexion est un etat de liaison entre deux choses, tandis que la recommandation est un acte directif qui impose une volonte. Le testament recommande et ordonne — il ne se contente pas de connecter."
            }
          }
        }
      },
      // wld pos=11
      {
        word_key: "wld", position: 11, sense_chosen: "parents",
        analysis_axes: {
          sense_chosen: "parents",
          concept_chosen: "Engendrer/Naissance",
          concepts: {
            "Engendrer/Naissance": {
              status: "retenu",
              senses: ["engendrer", "naître", "enfanter", "parent", "père", "mère", "enfant", "progéniture"],
              proof_ctx: "Le nom al-walidayni est un duel defini de la racine w-l-d. Le Lane's donne : enfanter, engendrer, naitre, mettre au monde. Le walid est celui qui engendre (le pere), la walida est celle qui enfante (la mere). Le duel al-walidayni designe specifiquement les deux parents — le pere et la mere. La racine porte l'idee de production biologique — l'acte d'engendrer fait passer un etre du neant a l'existence. Le duel est precis et exclusif : ce sont les deux parents biologiques, pas la parente elargie qui est couverte par al-aqrabina.",
              axe1_verset: "Le mot al-walidayni est le premier beneficiaire du testament. Le champ lexical (testament, proches, reconnu) montre que les parents sont la priorite de la distribution testamentaire. Le verset pose un ordre : d'abord les parents (al-walidayni), puis les proches (al-aqrabina). Le duel est defini (al-) — ce sont LES parents, les siens propres, pas des parents en general. La mention des parents avant les proches reflete la hierarchie de la piete filiale : les parents sont le premier cercle de responsabilite.",
              axe2_voisins: "Le verset 2:177 mentionnait les orphelins parmi les beneficiaires du don volontaire. Le verset 2:180 mentionne les parents comme premiers beneficiaires du testament. La sequence montre une complementarite : on donne aux orphelins (ceux qui n'ont plus de parents) pendant la vie, et on legue a ses parents au moment de la mort. Les deux actes visent la solidarite familiale et communautaire.",
              axe3_sourate: "La racine w-l-d apparait dans la sourate al-Baqarah en 2:116 (« Dieu a pris un enfant ») — une affirmation rejetee. En 2:132-133, les enfants (walad) de Jacob recoivent son testament spirituel. En 2:180, les parents (walidayn) sont les beneficiaires du testament materiel. La sourate utilise w-l-d pour les relations filiales dans tous les sens : la fausse filiation attribuee a Dieu, la filiation spirituelle de Jacob, la filiation biologique des parents.",
              axe4_coherence: "La racine w-l-d apparait environ 102 fois dans le Coran. En 17:23-24, « ton Seigneur a prescrit que vous n'adoriez que Lui et que vous soyez bons envers vos parents ». En 31:14, « Nous avons recommande a l'homme ses parents ». Le Coran place les parents au sommet des obligations sociales — juste apres l'obligation envers Dieu. Le verset 2:180 traduit cette hierarchie en termes juridiques : les parents sont les premiers beneficiaires du testament.",
              axe5_frequence: "Pour la mission du khalifa, les parents sont le premier cercle de responsabilite. Le khalifa est ne de deux parents — il leur doit la vie et il leur doit la gratitude. Le testament en faveur des parents est l'acte ultime de cette gratitude — meme au moment de mourir, le khalifa pense a ceux qui l'ont mis au monde. La piete filiale est un pilier de la mission du khalifa car elle fonde l'ordre social sur le respect de l'origine et de la filiation."
            }
          }
        }
      },
      // qrb pos=12
      {
        word_key: "qrb", position: 12, sense_chosen: "proches",
        analysis_axes: {
          sense_chosen: "proches",
          concept_chosen: "Proximité/Rapprochement",
          concepts: {
            "Proximité/Rapprochement": {
              status: "retenu",
              senses: ["proche", "rapprocher", "s'approcher", "proximité", "voisinage", "parenté proche", "le plus proche"],
              proof_ctx: "Le nom al-aqrabina est un pluriel defini de elatif (superlatif) de la racine q-r-b. Le Lane's donne : etre proche, s'approcher, voisinage, parente. Le aqrab est le plus proche — le superlatif marque le degre maximal de proximite. Le pluriel al-aqrabina designe « les plus proches » — ceux qui sont les plus rapproches par le lien de sang. La proximite est un etat spatial et relationnel — etre proche c'est etre dans un rayon court, que ce soit physiquement ou par le lien de parente. Le superlatif exclut la parente lointaine et ne retient que le cercle le plus restreint.",
              axe1_verset: "Le mot al-aqrabina est le deuxieme beneficiaire du testament apres les parents. Le champ lexical (parents, reconnu, devoir) montre que les proches forment le deuxieme cercle de responsabilite. Le verset construit une hierarchie : parents (premier cercle) → proches (deuxieme cercle). Le superlatif (aqrabina = les plus proches) limite les beneficiaires aux proches par le sang — freres, soeurs, oncles, tantes, cousins proches. La mention « bi-l-ma'ruf » (de maniere reconnue) qualifie la distribution aux proches — elle doit etre equitable et conforme aux normes.",
              axe2_voisins: "Le verset 2:177 mentionnait « les proches » (dhi-l-qurba) parmi les beneficiaires du don volontaire. Le verset 2:180 mentionne « les plus proches » (al-aqrabina) comme beneficiaires du testament. La sequence confirme que les proches sont un cercle de responsabilite constant dans le Coran — pendant la vie (don volontaire) et au moment de la mort (testament). La proximite par le sang cree une obligation permanente de solidarite.",
              axe3_sourate: "La racine q-r-b apparait frequemment dans la sourate al-Baqarah. En 2:177, « les proches » (dhi-l-qurba). En 2:186, « Je suis proche (qarib) ». En 2:180, les aqrabina sont les proches par le sang. La sourate utilise q-r-b pour la proximite humaine (parente) et la proximite divine (Dieu est proche). La proximite dans le verset est relationnelle — les proches sont ceux avec qui on partage un lien de sang irreductible.",
              axe4_coherence: "La racine q-r-b apparait environ 96 fois dans le Coran. En 4:7-8, les proches sont mentionnes dans les regles de succession detaillees. En 8:41, la part des proches est mentionnee dans le butin. En 17:26, « donne au proche son droit ». Le Coran fait des proches un cercle de responsabilite juridique — ils ont des droits sur les biens du croyant, pendant sa vie et apres sa mort. Le verset 2:180 pose le principe general que la sourate 4 detaillera.",
              axe5_frequence: "Pour la mission du khalifa, les proches sont le deuxieme cercle de la mission apres les parents. Le khalifa ne vit pas isole — il est insere dans un reseau de relations familiales qui creent des obligations. Distribuer aux proches par testament est un acte de justice sociale — empecher que la richesse ne se concentre en dehors du cercle familial ou ne soit accaparee par un seul heritier. La proximite cree la solidarite, et la solidarite empeche la corruption."
            },
            "Parenté": {
              status: "nul",
              senses: ["parenté au sens abstrait"],
              proof_ctx: "Le sens abstrait de parente est deja couvert par le concept de proximite. Le mot al-aqrabina est un superlatif concret — les plus proches — pas un concept abstrait de parente."
            }
          }
        }
      },
      // erf pos=13
      {
        word_key: "erf", position: 13, sense_chosen: "ce qui est reconnu",
        analysis_axes: {
          sense_chosen: "ce qui est reconnu",
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connaître", "reconnaître", "savoir", "ce qui est connu", "ce qui est reconnu comme juste", "norme", "convention"],
              proof_ctx: "Le nom al-ma'rufi est un participe passif defini singulier de la racine '-r-f. Le Lane's donne : connu, reconnu, approuve, convenable, conforme a la norme, ce que les gens connaissent et acceptent comme juste. Le ma'ruf est l'oppose du munkar (ce qui est rejete, inconnu, desapprouve). Le participe passif indique que la chose est connue et reconnue par les gens — c'est la norme sociale acceptee, pas la connaissance intellectuelle individuelle. La locution « bi-l-ma'ruf » est une expression juridique coranique qui pose une condition d'equite et de conformite aux normes reconnues.",
              axe1_verset: "Le mot al-ma'rufi qualifie la maniere de faire le testament. Le champ lexical (prescrire, testament, parents, proches, devoir) montre que le ma'ruf est la condition d'equite du testament. Le verset ne prescrit pas seulement de faire un testament — il prescrit de le faire de maniere reconnue, c'est-a-dire conforme aux normes de justice acceptees par la communaute. Le ma'ruf empeche l'arbitraire : le testateur ne peut pas distribuer ses biens de maniere injuste ou excentrique. L'article al- definit le ma'ruf comme LA norme reconnue — une norme partagee, pas une opinion personnelle.",
              axe2_voisins: "Le verset 2:178 utilisait deja « bi-l-ma'ruf » pour qualifier la maniere de demander le droit de sang — « qu'il exige de maniere reconnue ». Le verset 2:180 utilise la meme expression pour le testament. La repetition de « bi-l-ma'ruf » dans les versets legislatifs montre que la norme d'equite est une constante de la legislation coranique. Chaque obligation est assortie d'une condition de justice : pas d'exces, pas d'injustice, conformite aux normes reconnues.",
              axe3_sourate: "La racine '-r-f apparait dans la sourate al-Baqarah sous la forme ma'ruf en de nombreuses occurrences. En 2:228, « les femmes ont des droits equivalents a leurs obligations de maniere reconnue ». En 2:231, « retenez-les de maniere reconnue ou relâchez-les de maniere reconnue ». La sourate utilise bi-l-ma'ruf comme un principe directeur de toute la legislation — chaque acte juridique (divorce, testament, talion) doit etre conforme aux normes reconnues.",
              axe4_coherence: "La racine '-r-f apparait environ 71 fois dans le Coran. L'expression « bi-l-ma'ruf » est un leitmotiv legislatif — elle apparait dans les versets sur le divorce (2:228, 2:231, 2:232), le testament (2:180), les droits (2:178), la depense (2:236). Le Coran pose le ma'ruf comme un garde-fou universel : toute action juridique doit etre conforme a ce que les gens reconnaissent comme juste. Le ma'ruf est le consensus moral de la communaute.",
              axe5_frequence: "Pour la mission du khalifa, le ma'ruf est le critere de la mission. Le khalifa agit selon ce qui est reconnu comme juste — pas selon ses caprices ou ses preferences. La mention de « bi-l-ma'ruf » dans le testament montre que meme l'acte le plus personnel (distribuer ses biens) est encadre par la norme sociale. Le khalifa ne vit pas dans l'arbitraire — il vit dans la norme reconnue, le consensus moral qui empeche l'injustice et la corruption."
            }
          }
        }
      },
      // hqq pos=14
      {
        word_key: "hqq", position: 14, sense_chosen: "devoir",
        analysis_axes: {
          sense_chosen: "devoir",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["vérité", "réalité", "droit", "devoir", "obligation", "ce qui est dû", "ce qui est nécessaire", "certitude"],
              proof_ctx: "Le nom haqqan est un nom accusatif indefini singulier de la racine h-q-q. Le Lane's donne : verite, realite, droit, obligation, ce qui est du, ce qui est necessaire et irreductible, certitude. Le haqq est ce qui est vrai et necessaire — il s'impose par sa propre evidence. L'accusatif absolu (maf'ul mutlaq) renforce le sens emphatique : haqqan confirme que l'obligation est un devoir reel et incontournable. Le haqq est a la fois une verite ontologique (ce qui est reel) et une obligation juridique (ce qui est du) — les deux sens se rejoignent ici : le testament est un devoir REEL, pas fictif.",
              axe1_verset: "Le mot haqqan confirme et renforce l'obligation posee par kutiba (prescrire). Le champ lexical (prescrire, testament, reconnu, premunir) montre que le devoir est la conclusion du verset — tout ce qui precede (la prescription, la mort, le bien, le testament, les parents, les proches, la maniere reconnue) culmine dans cette affirmation : c'est un devoir. L'accusatif absolu donne au mot une force emphatique — ce n'est pas juste un devoir, c'est VERITABLEMENT un devoir. Le mot ferme le cadre legislatif ouvert par kutiba.",
              axe2_voisins: "Le verset 2:178 se terminait par une mention de la facilite (takhfif). Le verset 2:180 se termine par « un devoir pour ceux qui se premunissent ». La sequence montre que la legislation passe de la facilitation (talion) a l'obligation pure (testament). Le mot haqqan est plus ferme que takhfif — il ne laisse pas de marge de manoeuvre. Le testament est un devoir absolu, pas une facilitation optionnelle.",
              axe3_sourate: "La racine h-q-q est centrale dans la sourate al-Baqarah. En 2:26, « ils savent que c'est la verite (al-haqq) venant de leur Seigneur ». En 2:42, « ne melangez pas le vrai (al-haqq) et le faux ». En 2:180, haqqan est un devoir. La sourate utilise h-q-q pour la verite revele et pour l'obligation juridique — le vrai et le du sont lies. Ce qui est prescrit est vrai parce que c'est Dieu qui le prescrit.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. L'expression « haqqan 'ala al-muttaqin » (un devoir pour ceux qui se premunissent) apparait en 2:180 et en 2:241. En 2:236, « haqqan 'ala al-muhsinin » (un devoir pour les bienfaisants). Le Coran qualifie certaines obligations comme des devoirs specifiques pour certaines categories de croyants. Le devoir n'est pas seulement une obligation — c'est une verite qui s'impose a ceux qui la reconnaissent.",
              axe5_frequence: "Pour la mission du khalifa, le devoir est le cadre de la mission. Le khalifa n'agit pas par caprice mais par devoir — chaque obligation divine est un haqq, une verite qui s'impose. Le testament est un devoir parce qu'il est vrai et juste — la distribution equitable des biens est une necessite de l'ordre social. Le khalifa qui accomplit ses devoirs accomplit la verite ; celui qui les neglige nie la realite de l'ordre divin."
            },
            "Obligation/Nécessité": {
              status: "probable",
              senses: ["obligation", "nécessité", "ce qui est impératif", "ce qui s'impose"],
              proof_ctx: "Le sens d'obligation pure est un sous-ensemble du concept plus large de verite/realite. Le Lane's ne separe pas le devoir de la verite — le haqq est ce qui est vrai ET ce qui est du. L'obligation est la face juridique de la verite — ce qui est vrai s'impose comme un devoir. Mais le concept de verite/realite est plus riche car il englobe l'ontologie (ce qui est reel) et l'ethique (ce qui est du). Le mot haqqan dans le verset porte les deux dimensions : c'est un devoir ET c'est une verite. Separer l'obligation de la verite appauvrit le sens."
            }
          }
        }
      },
      // wqy pos=16
      {
        word_key: "wqy", position: 16, sense_chosen: "ceux qui se premunissent",
        analysis_axes: {
          sense_chosen: "ceux qui se premunissent",
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["se prémunir", "se protéger", "prendre garde", "préserver", "craindre", "piété", "bouclier"],
              proof_ctx: "Le nom al-muttaqina est un participe actif pluriel defini de la racine w-q-y. Le Lane's donne : se premunir, se proteger, prendre garde, placer un bouclier entre soi et ce qu'on craint. Le muttaqi est celui qui place une protection (wiqaya) entre lui et le chatiment divin. Le participe actif marque une action continue et volontaire — se premunir est un effort permanent, pas un etat passif. La protection est un acte reflexif — le muttaqi se protege lui-meme en obeissant aux commandements divins. L'article al- et le pluriel designent une categorie connue : LES muttaqin, ceux qui se premunissent.",
              axe1_verset: "Le mot al-muttaqina ferme le verset en qualifiant l'obligation : c'est un devoir « pour ceux qui se premunissent ». Le champ lexical (prescrire, devoir) montre que les muttaqin sont ceux qui prennent les prescriptions divines au serieux. Le verset ne dit pas que seuls les muttaqin doivent faire un testament — il dit que le testament est un signe de taqwa. Celui qui fait son testament de maniere reconnue prouve qu'il se premunit contre l'injustice et le chatiment. La taqwa est la motivation interieure de l'obeissance exterieure.",
              axe2_voisins: "Le verset 2:177 definissait la piete (al-birr) comme un ensemble d'actions concretes. Le verset 2:178 mentionnait les « doues d'intelligence ». Le verset 2:180 mentionne les muttaqin. La sequence montre que la legislation est adressee a differentes categories de croyants selon le contexte : les pieux, les intelligents, ceux qui se premunissent. Les muttaqin sont ceux qui obeissent aux prescriptions par conscience du chatiment — ils se premunissent en obeissant.",
              axe3_sourate: "La racine w-q-y est presente des le debut de la sourate al-Baqarah. En 2:2, le Livre est « une guidance pour les muttaqin ». En 2:21, « peut-etre vous premunissez-vous (tattaquna) ». En 2:180, les muttaqin sont les destinataires de l'obligation du testament. La sourate commence par les muttaqin et y revient regulierement — ils sont le public cible de la legislation coranique. La taqwa est le fil conducteur de toute la sourate.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. Les muttaqin sont mentionnes dans tout le Coran comme la categorie superieure de croyants — ceux qui recoivent la guidance (2:2), ceux qui heritent du Paradis (3:133), ceux pour qui les obligations divines sont des devoirs. Le Coran construit la taqwa comme une qualite active — se premunir demande un effort constant, une vigilance permanente contre l'injustice et la desobeissance.",
              axe5_frequence: "Pour la mission du khalifa, la taqwa est le moteur de la mission. Le khalifa ne se contente pas de suivre les regles — il se premunit activement contre la corruption et l'injustice. Le testament est un acte de taqwa parce qu'il previent le desordre successoral et l'injustice familiale. Le muttaqi est le khalifa accompli — celui qui place un bouclier entre lui et tout ce qui corrompt l'ordre social. La taqwa transforme l'obligation en conviction interieure."
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

  const verseIds = [187];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 180 ===\n');
  await processVerse(180);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V180 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
