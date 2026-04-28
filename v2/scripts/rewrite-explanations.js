const {createClient}=require('@supabase/supabase-js');
const db=createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// For each verse: keep DEMARCHE, rewrite JUSTIFICATION + CRITIQUE
const rewrites = {
  258: {
    justification: `§JUSTIFICATION§
**mirent en déroute** : *hazamūhum* — la racine h-z-m désigne la défaite qui provoque la dispersion et la fuite. Lane atteste : « he routed, he put to flight, he defeated (with dispersal) ». Le choix de « mettre en déroute » rend cette dimension de dispersion absente du simple « vaincre ».

**avec la permission de Dieu** : *bi-idhni llāhi* — idhn désigne l'autorisation explicite, la permission accordée. Cette formule est identique à celle du verset 249 où une petite troupe vainc une grande « avec la permission de Dieu ».

**David tua Goliath** : *qatala Dāwūdu Jālūta* — traduction littérale. Les noms propres arabes Dāwūd et Jālūt sont rendus par leurs équivalents français.

**la royauté** : *al-mulka* — la racine m-l-k désigne la souveraineté, l'autorité de régner. Lane atteste : « property, kingship, sovereignty ». « Royauté » est préféré à « pouvoir » car mulk désigne spécifiquement l'autorité souveraine institutionnelle.

**la sagesse** : *al-ḥikmata* — la sagesse pratique de gouverner avec discernement. Dans le contexte davidique, c'est la capacité de rendre justice et de gouverner avec justesse.

**lui enseigna** : *ʿallamahu* — forme causative de ʿalima (savoir). Faire acquérir le savoir à quelqu'un. *mimmā yashāʾu* = « ce qu'Il voulut », sans préciser le contenu, ce qui ouvre sur les arts, la forge et la psalmodie selon la tradition.

**ne repoussait pas** : *lawlā dafʿu* — lawlā introduit la condition irréelle ; dafʿu est le nom d'action (masdar) de dafaʿa (repousser). L'action divine de repousser est présentée comme un principe universel permanent.

**certains hommes par d'autres** : *baʿḍahum bi-baʿḍin* — la préposition bi exprime le moyen : repousser au moyen de. Cette formule est la loi coranique du contrepoids entre les peuples.

**serait corrompue** : *la-fasadati l-arḍu* — la racine f-s-d désigne la corruption organique, la pourriture morale et physique. L'apodose conditionnelle exprime ce qui se produirait sans l'intervention divine.

**plein de bienfaits** : *dhū faḍlin* — dhū = possesseur de ; faḍl = générosité supérieure, bienfait. *ʿalā l-ʿālamīn* = envers les mondes, toutes les créatures. « Plein de bienfaits » est plus naturel en français que le littéral « possesseur de faveur ».`,

    critique: `§CRITIQUE§
Hamidullah traduit *hazamūhum* par « défirent ». Notre traduction « mirent en déroute » est préférable parce que la racine h-z-m désigne spécifiquement la défaite avec dispersion et fuite, pas simplement le fait de vaincre.

Hamidullah traduit *dafʿu llāhi l-nāsa baʿḍahum bi-baʿḍin* par « la défense de Dieu des gens les uns par les autres ». Notre traduction « si Dieu ne repoussait pas certains hommes par d'autres » rend mieux le nom d'action (masdar) dafʿu qui exprime l'action divine de repousser comme principe universel, plutôt qu'une simple « défense ».

Hamidullah traduit *la-fasadati l-arḍu* par « la terre aurait certainement été pleine de désordre ». Notre traduction « la terre serait corrompue » est préférable parce que f-s-d désigne une corruption organique, une pourriture, pas seulement un désordre. Le terme « corrompue » est sémantiquement plus précis.

Hamidullah traduit *dhū faḍlin* par « Détenteur de faveur ». Notre traduction « plein de bienfaits » est préférable parce qu'elle est plus naturelle en français courant tout en rendant fidèlement le sens de faḍl (générosité supérieure, bienfait).`
  },

  259: {
    justification: `§JUSTIFICATION§
**Tels sont** : *tilka* — démonstratif de l'éloignement qui désigne ce qui vient d'être récité, le récit de David et Goliath. « Tels sont » rend à la fois la désignation et l'identification solennelle.

**les versets de Dieu** : *āyātu llāhi* — le pluriel de āya désigne ici les récits du Coran comme signes divins et texte sacré révélé. Le double sens de signe et de verset se superpose.

**que Nous te récitons** : *natlūhā ʿalayka* — natlū = nous récitons (première personne du pluriel de majesté divine) ; hā = pronom objet référant aux āyāt ; ʿalayka = à toi, sur toi. Le verbe talā/yatlū désigne spécifiquement la récitation des Écritures, pas simplement « raconter ».

**avec la vérité** : *bi-l-ḥaqqi* — al-ḥaqq désigne la vérité ferme, la réalité établie. Lane atteste : « reality, that which is established and certain ». L'article défini al- renvoie à la Vérité comme attribut divin (Al-Ḥaqq).

**certes** : *inna... la-* — double particule d'insistance : inna (affirmation forte) et la- (emphase devant le prédicat). « Certes » rend cette double emphase en français courant.

**parmi les envoyés** : *mina l-mursalīn* — mursalīn = participe passif pluriel de arsala (envoyer). « Les envoyés » est plus proche du sens littéral que « les Messagers » avec majuscule. La préposition mina exprime l'appartenance à la lignée prophétique.`,

    critique: `§CRITIQUE§
Hamidullah traduit *tilka* par « Ce sont là ». Notre traduction « Tels sont » est préférable parce qu'elle est plus usitée dans le registre solennel français et rend mieux la portée démonstrative du pronom.

Hamidullah traduit *bi-l-ḥaqqi* par « en toute vérité ». Notre traduction « avec la vérité » est préférable parce qu'elle préserve l'article défini al-ḥaqq qui renvoie à la Vérité comme attribut divin. « En toute vérité » fait penser à un adverbe de manière générale, alors que bi-l-ḥaqqi désigne Al-Ḥaqq, la Vérité divine, comme modalité essentielle de la récitation.

Hamidullah traduit *mina l-mursalīn* par « du nombre des Messagers ». Notre traduction « parmi les envoyés » est préférable parce qu'elle insiste sur l'appartenance à la communauté prophétique plutôt que sur le comptage numérique. De plus, « envoyés » en minuscule est plus proche du sens littéral de mursalīn (ceux qui ont été envoyés) que « Messagers » avec majuscule, qui introduit une hiérarchisation implicite.`
  },

  260: {
    justification: `§JUSTIFICATION§
**distingué certains parmi d'autres** : *faḍḍalnā baʿḍahum ʿalā baʿḍ* — la racine f-ḍ-l à la forme II signifie établir une supériorité active, une distinction qualitative. Lane atteste : « to give preference to, to make to excel ». « Distingué » est préféré à « favorisé » car faḍḍala porte l'idée d'une différenciation active par excellence.

**a parlé** : *kallama llāhu* — la racine k-l-m à la forme II désigne la parole directe sans intermédiaire. Lane atteste : « to address in speech ». La tradition identifie Moïse comme Kalīm Allāh (celui à qui Dieu a parlé directement).

**élevé en rang** : *rafaʿa... darajātin* — rafaʿa = élever ; darajātin = accusatif de spécification, degré, rang. L'élévation est un mouvement actif vers le haut dans une hiérarchie.

**accordé** : *ātaynā* — la racine ʾ-t-y à la forme IV signifie donner, accorder. « Accordé » est préféré à « apporté » car ātā/yuʾtī désigne un don divin, une attribution gracieuse.

**les preuves manifestes** : *al-bayyināt* — la racine b-y-n désigne ce qui est clair et distinct par soi-même. Les preuves manifestes sont les signes miraculeux accordés à Jésus.

**soutenu** : *ayyadnāhu* — la racine ʾ-y-d à la forme II est causative et active. Lane atteste : « to support vigorously ». « Soutenu » rend mieux que « fortifié » le sens d'un soutien actif donné à autrui.

**Esprit de Sainteté** : *rūḥi l-qudusi* — rūḥ = esprit, principe vital ; quds = pureté, sainteté. L'état construit arabe est rendu plus fidèlement par « Esprit de Sainteté » que par « Esprit Saint », terme emprunté à la théologie chrétienne.

**divergèrent** : *ikhtalafū* — la racine kh-l-f à la forme VIII (réciproque) désigne une divergence profonde d'opinion, pas simplement une querelle de surface.

**nièrent** : *kafarū* — la racine k-f-r signifie couvrir, dissimuler, nier délibérément. « Nièrent » rend mieux la dynamique active que « mécrurent ».

**Dieu fait ce qu'Il veut** : *yafʿalu mā yurīd* — inaccompli à valeur gnomique exprimant une vérité générale permanente : la souveraineté divine absolue.`,

    critique: `§CRITIQUE§
Hamidullah traduit *faḍḍalnā* par « favorisé ». Notre traduction « distingué » est préférable parce que faḍḍala à la forme II établit une distinction qualitative active, une hiérarchie par excellence, pas simplement une faveur.

Hamidullah traduit *ātaynā l-bayyināti* par « apporté les preuves ». Notre traduction « accordé les preuves manifestes » est préférable parce que ātā/yuʾtī désigne un don accordé par grâce divine plutôt qu'un simple apport.

Hamidullah traduit *ayyadnāhu bi-rūḥi l-qudusi* par « fortifié par l'Esprit Saint ». Notre traduction « soutenu par l'Esprit de Sainteté » est préférable pour deux raisons : « soutenu » rend mieux ayyada (accorder un soutien actif) que « fortifié » qui désigne un état résultant ; et « Esprit de Sainteté » est plus littéral que « Esprit Saint » qui est un terme emprunté à la théologie chrétienne.

Hamidullah traduit *kafarū* par « mécrurent ». Notre traduction « nièrent » est préférable parce que « mécrurent » est un néologisme peu élégant, tandis que « nièrent » rend mieux la dynamique active de k-f-r (couvrir, dissimuler, nier délibérément).

Hamidullah traduit *ikhtalafū* par « se disputèrent ». Notre traduction « divergèrent » est préférable parce que ikhtalafū à la forme VIII réciproque désigne une divergence profonde d'opinion, pas simplement une querelle de surface.`
  },

  263: {
    justification: `§JUSTIFICATION§
**Pas de contrainte** : *lā ikrāha* — lā + nom d'action (masdar) = négation absolue et ontologique, plus forte que la négation verbale ordinaire. La racine k-r-h désigne la coercition, le fait de forcer quelqu'un contre sa volonté. Lane atteste : « akraha = to compel, to force, to constrain against one's will ».

**en religion** : *fī l-dīn* — la préposition fī délimite le domaine : dans le champ de la religion, de la foi. La contrainte est ontologiquement incompatible avec la nature même de la foi authentique.

**la rectitude** : *al-rushd* — Lane atteste : « rectitude, maturity of judgment, the right course ». « La rectitude » rend la dimension de jugement droit et pratique, plus riche que « le bon chemin » qui ne retient que l'aspect directionnel.

**l'égarement** : *al-ghayy* — Lane atteste : « going astray, perdition ». Déviation active de la bonne voie, opposition directe au rushd.

**s'est distinguée** : *tabayyana* — la racine b-y-n à la forme V signifie se manifester distinctement. Le perfectif avec qad exprime un fait accompli avec emphase : la distinction est claire et évidente, rendant la contrainte superflue.

**rejette le tāghūt** : *yakfur bi-l-ṭāghūt* — yakfur (rejeter activement, racine k-f-r) ; ṭāghūt = ce qui transgresse les limites divines (racine ṭ-gh-y) — idoles, tyrans, autorités illégitimes.

**croit en Dieu** : *yuʾmin bi-llāhi* — la racine ʾ-m-n à la forme IV signifie croire en, accorder sa confiance. Le double mouvement rejet + adhésion est la condition du vrai ancrage.

**s'est saisi** : *istamsaka* — la forme X (réflexive intensive) de m-s-k signifie s'accrocher avec détermination et force.

**l'anse la plus solide** : *al-ʿurwati l-wuthqā* — ʿurwa = anse, poignée qu'on attrape. Lane atteste : « a loop, that by which one lays hold ». Al-wuthqā = superlatif féminin de wathīq (solide, fiable, digne de confiance).

**sans rupture possible** : *lā infiṣāma lahā* — lā + nom d'action (masdar) infiṣām = impossibilité ontologique de rupture, négation absolue.

**Entendant** : *samīʿ* — attribut divin renvoyant à la connaissance divine des paroles et intentions.

**Savant** : *ʿalīm* — attribut divin de la connaissance totale.`,

    critique: `§CRITIQUE§
Hamidullah traduit *al-rushd* par « le bon chemin ». Notre traduction « la rectitude » est préférable parce qu'elle capture la dimension de maturité de jugement et de droiture pratique qui fait la richesse sémantique du terme rushd, au-delà du simple aspect directionnel.

Hamidullah traduit *yakfur bi-l-ṭāghūt* par « mécroit aux Taghoûts ». Notre traduction « rejette le tāghūt » est préférable parce que garder le terme arabe « Taghoûts » avec translittération francisée nécessite une note explicative pour le lecteur non arabisant. De plus, « rejette » rend mieux la dynamique active de k-f-r que « mécroit ».

Hamidullah traduit *lā infiṣāma lahā* par « à nulle rupture ». Notre traduction « sans rupture possible » est préférable parce qu'elle est plus naturelle en français courant tout en rendant le sens absolu de la négation ontologique arabe.

Hamidullah traduit *samīʿ* par « Audient ». Notre traduction « Entendant » est préférable parce qu'« Audient » est un archaïsme que le français courant ne reconnaît plus, tandis qu'« Entendant » est immédiatement compréhensible sans perte de sens.`
  },

  264: {
    justification: `§JUSTIFICATION§
**Protecteur** : *waliyy* — la racine w-l-y désigne celui qui prend en charge activement, qui protège et administre. Lane atteste : « a friend, a guardian, a protector ». Dieu est le waliyy des croyants : non pas ami passif mais tuteur actif.

**les fait sortir** : *yukhrijuhum* — la forme IV causative de kh-r-j signifie faire sortir, extraire. Action active de mise en mouvement vers une nouvelle destination. Le sujet (Dieu) fait passer les croyants d'un état à un autre.

**des ténèbres** : *min al-ẓulumāt* — pluriel de ẓulma, les ténèbres. Le pluriel signale des couches d'obscurité multiples et accumulées, les voies de l'égarement étant multiples.

**à la lumière** : *ilā l-nūr* — article défini = la lumière par excellence, la lumière guidante et unique. Le singulier face au pluriel des ténèbres exprime que la voie de la vérité est une.

**les tāghūt** : *al-ṭāghūt* — la racine ṭ-gh-y désigne ce qui transgresse les limites divines : idoles, tyrans, autorités illégitimes. Les tāghūt sont les faux protecteurs (awliyāʾ) des mécréants.

**gens du Feu** : *aṣḥāb al-nār* — aṣḥāb = compagnons, gens de. Ceux qui sont associés au Feu de façon permanente.

**ils y demeureront** : *hum fīhā khālidūn* — khālidūn = participe actif pluriel de khalada (demeurer, être fixé). Formule coranique standard de la permanence eschatologique, sans ajout d'adverbe supplémentaire.`,

    critique: `§CRITIQUE§
Hamidullah traduit *waliyy* par « Protecteur » avec majuscule. Notre traduction utilise également « Protecteur », ce qui est correct. Cependant, la richesse du terme waliyy va au-delà : il désigne une relation de proximité active et de prise en charge, un tuteur-protecteur qui administre les affaires de ses protégés.

Hamidullah traduit *al-ṭāghūt* par « Taghoût » avec majuscule et translittération francisée. Notre traduction « tāghūt » sans majuscule le naturalise davantage tout en le conservant comme entité conceptuelle distincte.

Hamidullah traduit *hum fīhā khālidūn* par « ils demeureront éternellement ». Notre traduction « ils y demeureront » est préférable parce que le Coran dit khālidūn (ceux qui demeurent) sans adverbe d'éternité explicite dans ce verset. La permanence est contenue dans le participe khālidūn lui-même, et l'ajout d'« éternellement » est une surtraduction.`
  },

  265: {
    justification: `§JUSTIFICATION§
**disputait** : *ḥājja* — la racine ḥ-j-j à la forme III désigne une argumentation dirigée contre quelqu'un, une confrontation où l'un cherche à réfuter l'autre. Lane atteste : « ḥājja = to dispute against someone, to argue in opposition with proofs ».

**au sujet de son Seigneur** : *fī rabbihi* — la préposition fī introduit l'objet du débat : la nature du Seigneur d'Abraham. Le possessif -hi renvoie à Abraham.

**la souveraineté** : *al-mulk* — la racine m-l-k désigne l'autorité royale concrète, le pouvoir de régner. Lane atteste : « royal authority, dominion ». « Souveraineté » est préféré à « pouvoir » qui est trop générique.

**donne la vie** : *yuḥyī* — la forme IV causative de ḥ-y-y signifie faire vivre, donner la vie. Lane atteste : « aḥyā = to give life to ». Abraham définit son Seigneur par cet acte causatif.

**donne la mort** : *yumītu* — la forme IV causative de m-w-t signifie faire mourir, causer la mort. Lane atteste : « amāta = to cause to die ». Le parallélisme yuḥyī/yumītu exprime la souveraineté divine sur la vie et la mort.

**fait venir le soleil de l'orient** : *yaʾtī bi-l-shamsi min al-mashriqi* — yaʾtī = il fait venir ; al-shams = le soleil (racine sh-m-s) ; al-mashriq = le lieu du lever (racine sh-r-q, l'orient).

**fais-le venir du couchant** : *faʾti bihā min al-maghribi* — al-maghrib = le lieu du coucher (racine gh-r-b, l'occident). L'argument d'Abraham est irréfutable : si tu prétends maîtriser la vie et la mort, inverse le cours du soleil.

**fut stupéfait** : *buhita* — passif de bahata. Lane atteste : « to confound, to strike dumb ». Le passif indique que la stupeur s'est abattue sur le roi de l'extérieur : il n'a pas choisi de se taire, il en a été rendu incapable.

**ne guide pas** : *lā yahdī* — la racine h-d-y signifie orienter vers la voie droite. Le verdict divin clôt le récit : Dieu ne guide pas le peuple injuste (al-qawm al-ẓālimīn).`,

    critique: `§CRITIQUE§
Hamidullah traduit *al-mulk* par « le pouvoir ». Notre traduction « la souveraineté » est préférable parce que « pouvoir » est générique tandis que mulk désigne spécifiquement l'autorité politique concrète, la royauté institutionnelle.

Hamidullah traduit *buhita* par « demeura alors interdit ». Notre traduction « fut stupéfait » est préférable parce qu'elle est plus fidèle au passif arabe qui signifie une stupeur subie de l'extérieur, imposée au roi malgré lui.

Hamidullah traduit *yaʾtī bi-l-shamsi min al-mashriqi* par « fait lever le soleil de l'Est ». Notre traduction « fait venir le soleil de l'orient » est préférable parce qu'elle préserve le verbe yaʾtī (faire venir) de l'arabe, plus littéral que « faire lever », et « orient » rend mieux al-mashriq que « l'Est ».

Hamidullah traduit *lā yahdī l-qawm al-ẓālimīn* par « ne guide pas les gens injustes ». Notre traduction « ne guide pas le peuple injuste » rend qawm par « peuple » plutôt que « gens », ce qui est plus fidèle au sens collectif du terme arabe.`
  },

  266: {
    justification: `§JUSTIFICATION§
**celui qui est passé** : *alladhī marra* — marra = passer, traverser. Le démonstratif alladhī introduit le personnage anonyme du récit.

**une cité** : *qarya* — la racine q-r-y désigne un lieu où les humains se rassemblent, une bourgade ou cité.

**effondrée sur ses toits** : *khāwiya ʿalā ʿurūshihā* — khāwiya = participe actif de khawā (être vide, tomber en ruine) ; ʿurūsh = pluriel de ʿarsh (charpente, structure supérieure, toit). L'image est celle d'un effondrement total où les structures se sont écroulées sur elles-mêmes.

**ressuscitera-t-Il** : *yuḥyī* — la forme IV causative de ḥ-y-y signifie faire revivre, vivifier. Dans la question du personnage, le verbe exprime l'étonnement devant la possibilité de redonner vie.

**le fit mourir** : *amātahu* — la forme IV causative de m-w-t. Dieu causa sa mort pendant cent ans comme démonstration directe.

**le ressuscita** : *baʿathahu* — la racine b-ʿ-th signifie susciter, ressusciter. Terme technique coranique de la résurrection. Lane atteste : « to raise, to send, to resurrect ».

**combien de temps as-tu demeuré** : *kam labithta* — labitha = demeurer, séjourner en un lieu. Le verbe apparaît trois fois dans le verset, soulignant le thème de la durée perçue versus la durée réelle.

**ne se sont pas altérées** : *lam yatasannah* — la racine s-n-h évoque le vieillissement avec les années. La négation lam + accompli exprime que la nourriture n'a subi aucune altération malgré le passage de cent ans.

**Nous dressons les os** : *nunshizu l-ʿiẓām* — la racine n-sh-z signifie dresser, mettre debout. Les os du squelette sont redressés, remis en position anatomique. ʿiẓām = pluriel de ʿaẓm (os, ossature).

**les revêtons de chair** : *naksūhā laḥman* — la racine k-s-w signifie recouvrir, revêtir ; laḥm = viande, chair. La séquence os puis chair décrit la résurrection comme processus anatomique ordonné.

**Dieu est puissant sur toute chose** : *Allāha ʿalā kulli shayʾin qadīr* — la racine q-d-r désigne la capacité, la puissance. Formule d'attestation finale du personnage après avoir vécu le miracle.`,

    critique: `§CRITIQUE§
Hamidullah traduit *khāwiya ʿalā ʿurūshihā* par « déserte et renversée ». Notre traduction « effondrée sur ses toits » est préférable parce que l'arabe utilise un seul participe avec un complément prépositionnel, pas deux adjectifs. « Effondrée sur ses toits » est plus précis et plus imagé, rendant la scène visuelle de l'effondrement.

Hamidullah traduit *yuḥyī* dans la question initiale par « ressuscitera ». Notre traduction « ferait-Il revivre » est préférable parce que le verbe utilisé est yuḥyī (faire vivre) et non un terme spécifique de résurrection eschatologique. Le personnage s'interroge sur la possibilité de redonner vie à une cité, pas encore sur la résurrection finale.

Hamidullah traduit *lam yatasannah* par « ne s'est pas dégradée ». Notre traduction « ne se sont pas altérées » est préférable parce qu'« altérer » rend plus précisément le processus de vieillissement avec les années que le générique « dégrader ».

Hamidullah traduit *nunshizu* par « redressons ». Notre traduction « dressons » est préférable parce que la nuance est celle de mettre debout le squelette (dresser), plus fidèle à l'image anatomique que « redresser » qui implique quelque chose de courbé qu'on remet droit.`
  },

  267: {
    justification: `§JUSTIFICATION§
**montre-moi** : *arinī* — la forme IV causative de r-ʾ-y signifie faire voir, montrer. Abraham demande une expérience visuelle directe du processus de résurrection.

**comment** : *kayfa* — interrogatif de manière. La question porte sur le processus, le « comment », pas sur le « si ».

**Tu ressuscites les morts** : *tuḥyī l-mawtā* — la forme IV causative de ḥ-y-y signifie vivifier, donner la vie. Al-mawtā = pluriel de mayyit (ce qui est mort). Abraham ne doute pas du fait mais veut voir le processus.

**Si !** : *balā* — particule de réponse affirmative à une question négative. Quand Dieu demande « est-ce que tu n'y crois pas ? » (awa lam tuʾmin), la réponse balā signifie « si, je crois ».

**que mon cœur soit rassuré** : *li-yaṭmaʾinna qalbī* — la racine ṭ-m-ʾ-n signifie s'apaiser profondément, se stabiliser intérieurement. Lane atteste un apaisement durable et complet. Qalb = le cœur comme centre de la vie intérieure et de la foi.

**quatre oiseaux** : *arbaʿatan min al-ṭayri* — arbaʿa = quatre ; ṭayr = oiseau (collectif). Abraham reçoit l'instruction de prendre quatre oiseaux pour l'expérience.

**incline-les vers toi** : *ṣurhunna ilayka* — la racine ṣ-w-r/ṣ-r-r signifie incliner vers soi, attacher. Le sens littéral est « fais-les pencher vers toi, attache-les à toi ».

**une partie** : *juzʾan* — la racine j-z-ʾ désigne une fraction, une portion. Chaque montagne reçoit une partie des oiseaux.

**appelle-les** : *udʿuhunna* — la racine d-ʿ-w signifie invoquer, appeler. Abraham doit appeler les oiseaux après les avoir dispersés.

**en hâte** : *saʿyan* — complément de manière de la racine s-ʿ-y (s'empresser, marcher vite). Les oiseaux reviennent avec empressement, preuve de la puissance divine.

**Puissant** : *ʿazīz* — la racine ʿ-z-z désigne ce qui est précieux, puissant, inaccessible. Attribut divin de la toute-puissance.

**Sage** : *ḥakīm* — la racine ḥ-k-m désigne le jugement, la sagesse pratique. Attribut divin de la sagesse dans l'action.`,

    critique: `§CRITIQUE§
Hamidullah traduit *ṣurhunna ilayka* par « apprivoise-les ». Notre traduction « incline-les vers toi » est préférable parce que le sens littéral de la racine ṣ-w-r est « faire pencher vers soi, attacher à soi », pas « apprivoiser ». L'interprétation d'Hamidullah est possible mais s'éloigne du sens étymologique premier.

Hamidullah traduit *li-yaṭmaʾinna qalbī* par « pour que mon cœur soit rassuré ». Notre traduction « pour que mon cœur s'apaise » est préférable parce que la racine ṭ-m-ʾ-n désigne un apaisement profond et durable, une stabilisation intérieure, pas une simple réassurance ponctuelle.

Hamidullah traduit *saʿyan* par « en toute hâte ». Notre traduction « en hâte » est préférable parce qu'elle est plus sobre et fidèle au complément de manière arabe, sans l'ajout de « toute » qui amplifie au-delà du texte.

Hamidullah rend correctement la distinction cruciale entre la question divine *awa lam tuʾmin* (est-ce que tu n'as pas cru ?) et la réponse d'Abraham *balā* (si, certes !), montrant qu'Abraham croit déjà et cherche l'expérience vécue, pas la preuve.`
  }
};

async function processVerse(verseId) {
  const {data, error} = await db.from('verse_analyses')
    .select('verse_id, translation_explanation')
    .eq('verse_id', verseId)
    .single();

  if (error) { console.error(`Error reading verse ${verseId}:`, error); return false; }

  const te = data.translation_explanation;
  const justIdx = te.indexOf('§JUSTIFICATION§');
  if (justIdx === -1) { console.error(`No JUSTIFICATION found in verse ${verseId}`); return false; }

  const demarche = te.substring(0, justIdx).trim();
  const rw = rewrites[verseId];

  const newExplanation = demarche + '\n\n' + rw.justification + '\n\n' + rw.critique;

  const {error: updateError} = await db.from('verse_analyses')
    .update({translation_explanation: newExplanation})
    .eq('verse_id', verseId);

  if (updateError) { console.error(`Error updating verse ${verseId}:`, updateError); return false; }

  console.log(`Verse ${verseId}: OK (${newExplanation.length} chars)`);
  return true;
}

(async () => {
  const ids = [258, 259, 260, 263, 264, 265, 266, 267];
  let ok = 0;
  for (const id of ids) {
    const success = await processVerse(id);
    if (success) ok++;
  }
  console.log(`Done: ${ok}/${ids.length} verses updated.`);
})();
