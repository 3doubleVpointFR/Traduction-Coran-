const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 137-138
// V137: verse_id=144, analysis_id=506
// V138: verse_id=145, analysis_id=503
// =====================================================

const verseData = {
  137: {
    verse_id: 144,
    analysis_id: 506,
    translation_arab: "Donc s'ils font confiance avec le semblable de ce en quoi vous avez fait confiance, alors certes ils se sont guides. Et s'ils se detournent, alors ils ne sont que dans un schisme. Dieu te suffira contre eux. Et Il est l'Entendant, le Savant.",
    full_translation: "Alors, s'ils croient a cela meme a quoi vous croyez, ils seront certainement sur la bonne voie. Et s'ils s'en detournent, ils seront certes dans le schisme! Alors Allah te suffira contre eux. Il est l'Audient, l'Omniscient.",
    translation_explanation: `§DEMARCHE§
Le verset est structure en trois parties : une condition positive (s'ils font confiance comme vous), une condition negative (s'ils se detournent), et une promesse divine (Dieu te suffira). Le verbe **amanuu** est un accompli 3MP de la forme IV de la racine a-m-n. Le Lane's donne pour la forme IV : mettre en securite, faire confiance, se fier a. La forme IV (af'ala) est causative — elle fait sortir la securite de soi vers l'exterieur. L'accompli marque que l'acte de confiance est acheve — s'ils ont fait confiance. Le pronom suffixe de la deuxieme occurrence **amantum** est un accompli 2MP — vous avez fait confiance. Les deux verbes sont le meme mais les sujets different : eux (3MP) et vous (2MP). Le nom **mithli** est un nom masculin singulier genitif de la racine m-th-l. Le Lane's donne : semblable, pareil, equivalent. Le mithl est ce qui ressemble a autre chose — il etablit une equivalence entre deux choses. Ici « bi-mithli ma amantum bihi » signifie « avec le semblable de ce en quoi vous avez fait confiance ». La particule **bi** (avec, par) introduit l'instrument ou la modalite de la confiance. Le verbe **ihtadaw** est un accompli 3MP de la forme VIII de la racine h-t-d. Le Lane's donne pour la forme VIII : se guider soi-meme, trouver la voie, etre bien guide. La forme VIII (ifta'ala) est reflexive — elle ramene l'action vers le sujet. Ils ne sont pas guides par un autre — ils se guident eux-memes. L'accompli avec la particule qad (faqad ihtadaw) marque la certitude de l'achevement : alors certes ils se sont guides. Le verbe **tawallaw** est un accompli 3MP de la forme V de la racine w-l-y. Le Lane's donne pour la forme V : se detourner, tourner le dos, s'eloigner. La forme V (tafa''ala) est reflexive — ils se detournent eux-memes. L'accompli marque que le detournement est un acte acheve. Le nom **shiqaqin** est un nom masculin singulier indefini genitif de la racine sh-q-q. Le Lane's donne : dissension, schisme, discord, opposition. Le shiqaq est litteralement le fait de fendre — etre dans le shiqaq c'est etre dans un etat de rupture et de separation d'avec la communaute. L'indefini marque que c'est un schisme parmi d'autres — un etat de discord non specifie. La preposition **fi** (dans) situe le sujet a l'interieur du schisme — ils sont immerges dans le discord. Le verbe **sayakfikahumu** est un inaccompli 3MS de la racine k-f-y avec prefixe sa- (futur), pronom suffixe -ka (toi) et -hum (eux). Le Lane's donne : suffire, proteger contre, rendre inutile le recours a un autre. L'inaccompli avec sa- marque un futur certain — Dieu te suffira. Le double pronom (toi contre eux) montre que la suffisance de Dieu opere dans une relation triangulaire : Dieu suffit a toi contre eux. Le nom **Allahu** est le nom propre de la divinite au nominatif — Il est le sujet du verbe yakfi. Dieu est l'agent de la suffisance. Le nom **as-samii'u** est un adjectif intensif de la racine s-m-'. Le Lane's donne : celui qui entend tout, l'Entendant. La forme fa'iil est intensive — Il n'entend pas juste parfois, Il entend tout, tout le temps. L'article defini (as-) marque que cette qualite est unique et totale. Le nom **al-'aliimu** est un adjectif intensif de la racine '-l-m. Le Lane's donne : celui qui sait tout, le Savant. La forme fa'iil est intensive — Il ne sait pas juste certaines choses, Il sait tout. L'article defini marque que cette qualite est absolue. Les deux noms divins ferment le verset en diptyque : Il entend (ce qu'ils disent) et Il sait (ce qu'ils cachent).

§JUSTIFICATION§
**font confiance** — Le sens retenu est « securite/confiance ». Le verbe amana a la forme IV porte d'abord le sens de donner securite, faire confiance. L'alternative « croire » est le sens traditionnel en contexte religieux mais le Lane's rattache la forme IV a l'acte de se sentir en securite face a quelque chose. « Faire confiance » est plus proche de l'etymologie — la foi est une forme de confiance totale. Le sens « proteger » est ecarte car le sujet n'est pas l'agent de la protection mais celui qui fait confiance.

**semblable** — Le sens retenu est « ressemblance/exemple ». Le mot mithl designe ce qui est pareil, equivalent. « Semblable » est le mot le plus naturel en francais. L'alternative « parabole » est ecartee car le contexte est une comparaison directe, pas un recit illustratif. L'alternative « se dresser » est ecartee car le mot est un nom, pas un verbe de posture.

**se sont guides** — Le sens retenu est « guidance/direction ». Le verbe ihtada a la forme VIII est reflexif — se guider soi-meme. « Se sont guides » rend cette reflexivite. L'alternative « guider » (transitif) est ecartee car la forme VIII marque que le sujet est aussi le beneficiaire de l'action.

**se detournent** — Le sens retenu est « proximite/protection ». Le verbe tawalla a la forme V signifie se detourner. Bien que la racine w-l-y porte le sens de proximite et de protection, la forme V inverse le sens : au lieu de se rapprocher, on s'eloigne. « Se detourner » est le sens le plus naturel. L'alternative « gouverner » est ecartee car le contexte est un mouvement de rejet.

**schisme** — Le sens retenu est « fissure/division ». Le nom shiqaq designe la dissension, le schisme. « Schisme » est un mot francais courant qui rend bien l'idee de rupture communautaire. L'alternative « difficulte » est ecartee car le contexte est la division communautaire, pas une epreuve personnelle.

**suffira** — Le sens retenu est « suffisance/protection ». Le verbe kafaa designe l'acte de suffire, de rendre inutile tout autre recours. « Suffira » est le mot le plus naturel. L'alternative « etre competent » est ecartee car le verbe porte ici sur la protection divine contre des adversaires.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite unique. Il est ici le sujet du verbe yakfi — c'est Lui qui suffit.

**l'Entendant** — Le sens retenu est « audition/ecoute ». Le mot as-samii' est un adjectif intensif designant celui qui entend tout. « L'Entendant » est un nom divin. L'alternative « reputation » est ecartee car le mot est un attribut divin de perception, pas de renommee.

**le Savant** — Le sens retenu est « savoir/connaissance ». Le mot al-'aliim est un adjectif intensif designant celui qui sait tout. « Le Savant » est un nom divin. L'alternative « signe » est ecartee car le mot est un attribut divin de connaissance, pas un repere visible.

§CRITIQUE§
Hamidullah traduit « s'ils croient a cela meme a quoi vous croyez ». Nous donnons « s'ils font confiance avec le semblable de ce en quoi vous avez fait confiance ». La difference est double : (1) « croire » vs « faire confiance » — les deux sont valides mais « faire confiance » est plus fidele a la racine a-m-n qui porte d'abord le sens de securite et de confiance, la foi etant une extension de cette confiance. (2) Hamidullah traduit « seront sur la bonne voie » pour ihtadaw alors que l'accompli indique un fait acheve — « se sont guides » est plus precis. Pour shiqaq, Hamidullah donne « schisme » comme nous. Pour sayakfikahumu, Hamidullah donne « te suffira contre eux » — meme lecture. La difference principale reste le choix « croire » vs « faire confiance » qui change la tonalite sans changer le sens fondamental.`,
    segments: [
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 1 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646\u0652", is_particle: true, position: 2 },
      { fr: "font confiance", pos: "verbe", phon: "\u02beamanuu", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u06df", word_key: "amn", is_particle: false, sense_retenu: "faire confiance", position: 3 },
      { fr: "avec", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 4 },
      { fr: "le semblable", pos: "nom", phon: "mithli", arabic: "\u0645\u0650\u062b\u0652\u0644\u0650", word_key: "mthl", is_particle: false, sense_retenu: "semblable", position: 5 },
      { fr: "ce que", phon: "maa", arabic: "\u0645\u064e\u0622", is_particle: true, position: 6 },
      { fr: "avez fait confiance", pos: "verbe", phon: "\u02beaaman tum", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u062a\u064f\u0645", word_key: "amn", is_particle: false, sense_retenu: "faire confiance", position: 7 },
      { fr: "avec", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 8 },
      { fr: "cela", phon: "hi", arabic: "\u0647\u0650\u06e6", is_particle: true, position: 9 },
      { fr: "alors certes", phon: "faqad", arabic: "\u0641\u064e\u0642\u064e\u062f\u0650", is_particle: true, position: 10 },
      { fr: "se sont guides", pos: "verbe", phon: "ihtadaw", arabic: "\u0671\u0647\u0652\u062a\u064e\u062f\u064e\u0648\u0627\u06df", word_key: "htd", is_particle: false, sense_retenu: "se guider", position: 11 },
      { fr: "et", phon: "wa", arabic: "\u0648\u0651\u064e", is_particle: true, position: 12 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 13 },
      { fr: "se detournent", pos: "verbe", phon: "tawallaw", arabic: "\u062a\u064e\u0648\u064e\u0644\u0651\u064e\u0648\u0652\u0627\u06df", word_key: "wly", is_particle: false, sense_retenu: "se detourner", position: 14 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 15 },
      { fr: "seulement", phon: "innamaa", arabic: "\u0625\u0650\u0646\u0651\u064e\u0645\u064e\u0627", is_particle: true, position: 16 },
      { fr: "ils", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", is_particle: true, position: 17 },
      { fr: "dans", phon: "fii", arabic: "\u0641\u0650\u0649", is_particle: true, position: 18 },
      { fr: "un schisme", pos: "nom", phon: "shiqaaqin", arabic: "\u0634\u0650\u0642\u064e\u0627\u0642\u064d", word_key: "shqq", is_particle: false, sense_retenu: "schisme", position: 19 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 20 },
      { fr: "te suffira contre eux", pos: "verbe", phon: "sayakfiikahumu", arabic: "\u0633\u064e\u064a\u064e\u0643\u0652\u0641\u0650\u064a\u0643\u064e\u0647\u064f\u0645\u064f", word_key: "kfy", is_particle: false, sense_retenu: "suffire", position: 21 },
      { fr: "Dieu", pos: "nom", phon: "allaahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 22 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 23 },
      { fr: "Lui", phon: "huwa", arabic: "\u0647\u064f\u0648\u064e", is_particle: true, position: 24 },
      { fr: "l'Entendant", pos: "nom", phon: "as-samii'u", arabic: "\u0671\u0644\u0633\u0651\u064e\u0645\u0650\u064a\u0639\u064f", word_key: "sme", is_particle: false, sense_retenu: "entendant", position: 25 },
      { fr: "le Savant", pos: "nom", phon: "al-'aliimu", arabic: "\u0671\u0644\u0652\u0639\u064e\u0644\u0650\u064a\u0645\u064f", word_key: "elm", is_particle: false, sense_retenu: "savant", position: 26 }
    ],
    words: [
      // amn pos=3 (1ere occurrence)
      {
        word_key: "amn", position: 3, sense_chosen: "faire confiance",
        analysis_axes: {
          sense_chosen: "faire confiance",
          concept_chosen: "Sécurité/Confiance",
          concepts: {
            "Sécurité/Confiance": {
              status: "retenu",
              senses: ["etre en securite", "se sentir en securite", "faire confiance", "confier", "fidele", "lieu sur"],
              proof_ctx: "Le verbe amanuu est un accompli 3MP de la forme IV de la racine a-m-n. Le Lane's donne pour la forme IV : mettre en securite, accorder la securite, faire confiance. La securite est un etat interieur de tranquillite qui vient de l'absence de danger — faire confiance c'est se placer dans cet etat vis-a-vis de quelque chose. La forme IV (af'ala) est causative : elle fait passer le sujet dans l'etat de securite. Ici « in amanuu bi-mithli ma amantum bihi » pose une condition : s'ils font confiance avec le semblable de ce en quoi vous avez fait confiance. La preposition bi (avec) marque l'objet de la confiance. La distinction avec la foi (probable) est philosophique : la confiance est l'etat premier de la racine, la foi en est l'extension religieuse.",
              axe1_verset: "Le verbe amanuu ouvre la premiere condition du verset. Le champ lexical tourne autour du choix : faire confiance ou se detourner. Les deux conditions (in amanuu / in tawallaw) sont opposees — la confiance mene a la guidance, le detournement mene au schisme. Le verbe apparait deux fois dans le meme verset (amanuu et amantum) pour etablir une equivalence : leur confiance doit etre semblable a la votre. L'enjeu n'est pas juste de croire mais de faire confiance de la meme maniere.",
              axe2_voisins: "Le verset 136 enumerait les envoyes en qui les croyants font confiance — Ibrahiim, Isma'iil, Is'haaq, Ya'quub et les tribus. Le verset 137 enchaine avec une condition : si les autres font confiance au semblable de ce en quoi les croyants ont fait confiance, ils se guident. Le verset 138 completera avec la teinture de Dieu. La confiance est le pivot entre l'enumeration des envoyes et la teinture divine.",
              axe3_sourate: "La racine a-m-n est l'une des plus frequentes de la sourate al-Baqarah. En 2:3-4, les croyants sont ceux qui font confiance a l'invisible et a ce qui a ete descendu. En 2:62, ceux qui ont fait confiance parmi les juifs, les chretiens et les sabeens. En 2:136, les croyants declarent leur confiance envers tous les envoyes. La sourate construit une definition cumulative de la confiance — elle n'est pas partielle mais totale.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. Le schema conditionnel « in amanuu bi... faqad ihtadaw » (s'ils font confiance a... alors ils se sont guides) est specifique a ce verset. Il etablit un lien causal direct entre la confiance et la guidance. Le Coran repete que la confiance mene a la guidance et que son absence mene a l'egarement — en 2:26, les desobeissants sont ceux qui violent le pacte apres leur engagement.",
              axe5_frequence: "Pour la mission du khalifa, la confiance est le fondement de la mission. Faire confiance au message c'est accepter la mission. Le verset montre que la confiance doit etre au semblable — pas une confiance partielle ou selectrice mais une confiance qui embrasse tout le message. Le khalifa ne peut choisir entre les envoyes — il fait confiance a tous ou il se detourne."
            },
            "Foi/Adhésion": {
              status: "probable",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le sens de foi est une extension de la confiance — croire c'est faire confiance a un message ou a un messager. La distinction philosophique est que la confiance est l'etat interieur (se sentir en securite) tandis que la foi est l'acte d'adhesion (accepter comme vrai). Le contexte coranique utilise souvent amana bi comme « croire en », mais la racine porte d'abord le sens de securite. Le mot est ici dans une construction conditionnelle — s'ils font confiance comme vous — ce qui suggere un acte delibere de confiance plutot qu'un simple assentiment intellectuel.",
              axe1_verset: "Le verset pourrait porter le sens de foi au lieu de confiance. La traduction traditionnelle donne « s'ils croient a cela meme a quoi vous croyez ». Les deux lectures sont coherentes avec le texte. La difference est de tonalite : la confiance est un acte relationnel (on fait confiance a quelqu'un), la foi est un acte intellectuel (on croit quelque chose). Le contexte favorise la confiance car la construction bi-mithli (avec le semblable) evoque une modalite, pas un objet de croyance.",
              axe2_voisins: "Le verset 136 utilisait « quluu amannaa » (dites : nous avons fait confiance). Le contexte immediat favorise la continuite du sens de confiance. Les versets voisins parlent de confiance envers les envoyes, pas d'un acte de foi abstrait.",
              axe3_sourate: "La sourate utilise amana bi dans les deux sens selon le contexte. En 2:8, « parmi les gens il y a ceux qui disent : nous avons fait confiance en Dieu et au Jour dernier, alors qu'ils ne font pas confiance ». Le sens de confiance et le sens de foi se superposent dans la sourate.",
              axe4_coherence: "Le Coran utilise amana bi environ 270 fois. Dans la plupart des cas, le sens est « croire en » au sens religieux. Mais la racine a-m-n porte d'abord le sens de securite — la foi est une forme de mise en securite interieure.",
              axe5_frequence: "La foi comme adhesion est un outil de la mission — mais la confiance comme etat interieur est le fondement de la foi. Le khalifa fait d'abord confiance, puis sa confiance devient foi."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["proteger", "accorder la securite"],
              proof_ctx: "Le sens de protection est un usage causatif de la racine a-m-n. Le contexte est la confiance des sujets envers un message, pas l'acte de proteger quelqu'un."
            },
            "Sens isolé/Amen": {
              status: "nul",
              senses: ["amen"],
              proof_ctx: "Le sens d'amen est un usage rituel specifique de la racine. Le contexte est un verbe conjugue, pas une interjection."
            }
          }
        }
      },
      // mthl pos=5
      {
        word_key: "mthl", position: 5, sense_chosen: "semblable",
        analysis_axes: {
          sense_chosen: "semblable",
          concept_chosen: "Ressemblance/Exemple",
          concepts: {
            "Ressemblance/Exemple": {
              status: "retenu",
              senses: ["ressembler", "imiter", "exemple", "proverbe", "parabole", "semblable"],
              proof_ctx: "Le nom mithli est un nom masculin singulier genitif de la racine m-th-l. Le Lane's donne : semblable, pareil, equivalent, analogue. Le mithl est ce qui partage les traits d'autre chose — il cree un lien d'equivalence entre deux realites. Ici « bi-mithli ma amantum bihi » signifie « avec le semblable de ce en quoi vous avez fait confiance ». Le mithl n'est pas l'identite (le meme) mais la ressemblance (le pareil). La condition exige que leur confiance soit du meme type que la votre. La distinction avec la station (nul) est claire : le mot est un nom designant la similitude, pas un verbe de posture.",
              axe1_verset: "Le mot mithli est le pivot de la condition : s'ils font confiance avec le SEMBLABLE de ce en quoi vous avez fait confiance. Le mithl etablit une equivalence — leur confiance doit etre pareille a la votre. Le champ lexical du verset (confiance, guidance, detournement, schisme) montre que le semblable est le critere : la bonne voie passe par la meme confiance, le schisme vient de la difference. Le mithl est la mesure de la guidance.",
              axe2_voisins: "Le verset 136 enumerait les envoyes sans distinction — Ibrahim, Isma'il, Is'haq, Ya'qub, Moussa, 'Issa. Le verset 137 enchaine avec le mithl : la confiance doit etre semblable, c'est-a-dire englober tous les envoyes sans distinction. Le verset 138 parlera de la teinture de Dieu — la mesure ultime de la ressemblance est la nature divine. Les voisins montrent que le mithl exige l'universalite.",
              axe3_sourate: "La racine m-th-l est importante dans la sourate al-Baqarah. En 2:17, Dieu donne une parabole (mathal). En 2:26, Dieu n'a pas honte de donner en exemple un moustique. En 2:137, le mithl est utilise dans un sens comparatif direct — pas une parabole narrative mais une mesure de similitude. La sourate utilise la racine tant pour les paraboles (recits) que pour les comparaisons (mesures).",
              axe4_coherence: "La racine m-th-l apparait environ 169 fois dans le Coran. Le mot mithl au sens de « semblable a » apparait dans des constructions comparatives — en 42:11, « il n'y a rien de semblable (mithlihi) a Lui ». En 2:137, le mithl est la mesure de la confiance correcte. Le Coran utilise le mithl pour comparer les actes, les natures et les realites.",
              axe5_frequence: "Pour la mission du khalifa, le mithl est la mesure de fidelite. La confiance du khalifa doit etre semblable a celle des envoyes — pas une confiance partielle ou selective. Le mithl exige la coherence : faire confiance de la meme maniere, sans distinction ni preference entre les envoyes."
            },
            "Station/Présence": {
              status: "nul",
              senses: ["se tenir debout", "dresser"],
              proof_ctx: "Le sens de station est un sens physique de m-th-l — se dresser devant quelqu'un. Le contexte est une comparaison (le semblable de ce en quoi...), pas une posture physique."
            },
            "Sens isolé/Mutiler": {
              status: "nul",
              senses: ["mutiler"],
              proof_ctx: "Le sens de mutilation est un sens concret hors sujet — le contexte est la comparaison, pas la destruction physique."
            }
          }
        }
      },
      // amn pos=7 (2eme occurrence)
      {
        word_key: "amn", position: 7, sense_chosen: "faire confiance",
        analysis_axes: {
          sense_chosen: "faire confiance",
          concept_chosen: "Sécurité/Confiance",
          concepts: {
            "Sécurité/Confiance": {
              status: "retenu",
              senses: ["etre en securite", "se sentir en securite", "faire confiance", "confier", "fidele", "lieu sur"],
              proof_ctx: "Deuxieme occurrence du verbe amana dans le verset — ici a la forme amantum (accompli 2MP). Le Lane's donne les memes sens que pour la premiere occurrence. La difference est le sujet : vous (les croyants) au lieu d'eux (les autres). L'accompli 2MP marque que la confiance des croyants est un fait acheve — ils ont deja fait confiance. La construction « ma amantum bihi » (ce en quoi vous avez fait confiance) definit le contenu de la confiance : ce qui a ete enumere au verset 136 (tous les envoyes). Memes analyses que pour la premiere occurrence en position 3.",
              axe1_verset: "Le verbe amantum est le terme de comparaison — c'est la confiance des croyants qui sert de mesure. Le verset dit : leur confiance doit etre semblable a la votre. Votre confiance est le modele. Le pronom bihi (en cela) renvoie a ce qui a ete enumere au verset precedent — la confiance en tous les envoyes sans distinction.",
              axe2_voisins: "Le verset 136 posait le contenu de la confiance : nous faisons confiance en Dieu et en ce qui nous a ete descendu et en ce qui a ete descendu a Ibrahim, Isma'il, Is'haq, Ya'qub, les tribus, Moussa, 'Issa. Le verset 137 reprend cette confiance comme modele de reference.",
              axe3_sourate: "La forme amantum (2MP) est moins frequente que amanuu (3MP) dans la sourate. En 2:137, elle designe la confiance des croyants comme reference. La sourate oppose constamment la confiance des croyants et le refus des autres.",
              axe4_coherence: "Le schema « amantum bihi » (vous avez fait confiance en cela) est une construction coranique qui definit l'objet de la confiance. Le pronom bihi resume tout ce qui precede — une maniere coranique de synthetiser le contenu.",
              axe5_frequence: "La confiance des croyants est le modele de la mission. Le khalifa s'inscrit dans cette confiance — il fait confiance au meme message, de la meme maniere. Sa confiance n'est pas nouvelle — elle est la continuation de celle des croyants qui l'ont precede."
            }
          }
        }
      },
      // htd pos=11
      {
        word_key: "htd", position: 11, sense_chosen: "se guider",
        analysis_axes: {
          sense_chosen: "se guider",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "etre guide", "suivre la voie"],
              proof_ctx: "Le verbe ihtadaw est un accompli 3MP de la forme VIII de la racine h-t-d. Le Lane's donne pour la forme VIII (ifta'ala) : se guider soi-meme, trouver la bonne voie, etre bien guide. La forme VIII est reflexive — le sujet est a la fois l'agent et le beneficiaire de la guidance. Ils ne sont pas guides passivement par un autre — ils se guident eux-memes en faisant confiance. La particule qad avec fa (faqad) marque la certitude et l'achevement : alors certes ils se sont guides. La guidance est le resultat de la confiance — si la condition est remplie, la guidance est acquise.",
              axe1_verset: "Le verbe ihtadaw est la consequence de la premiere condition : s'ils font confiance → ils se sont guides. Le champ lexical du verset oppose deux consequences : la guidance (ihtadaw) et le schisme (shiqaq). La guidance est le resultat de la confiance semblable, le schisme est le resultat du detournement. Le verset presente un choix binaire — il n'y a pas de position intermediaire.",
              axe2_voisins: "Le verset 135 mentionnait la religion d'Ibrahim comme voie droite (haniifan). Le verset 136 enumerait les envoyes. Le verset 137 pose la condition de la guidance : faire confiance au semblable. Les voisins montrent que la guidance passe par la voie d'Ibrahim et la confiance envers tous les envoyes. Le verset 138 montrera que la teinture de Dieu est le fondement de cette guidance.",
              axe3_sourate: "La racine h-t-d est centrale dans la sourate al-Baqarah. En 2:2, « une guidance pour ceux qui prennent garde ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:120, « la guidance de Dieu est la guidance ». La sourate definit la guidance comme un don de Dieu mais aussi comme un choix humain — ici la forme VIII marque ce choix personnel.",
              axe4_coherence: "La racine h-t-d apparait environ 316 fois dans le Coran. La forme VIII (ihtada) apparait dans des contextes ou le sujet choisit activement la guidance — en 7:30, « un groupe Il a guide et un groupe a merite l'egarement ». En 2:137, la forme VIII souligne que la guidance n'est pas imposee mais choisie par l'acte de confiance.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est le but de la mission. Se guider c'est trouver la voie par soi-meme — pas etre traine mais marcher. La forme reflexive de la forme VIII montre que le khalifa doit etre actif dans sa guidance — il se guide en faisant confiance au message."
            }
          }
        }
      },
      // wly pos=14
      {
        word_key: "wly", position: 14, sense_chosen: "se detourner",
        analysis_axes: {
          sense_chosen: "se detourner",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le verbe tawallaw est un accompli 3MP de la forme V de la racine w-l-y. Le Lane's donne pour la forme V (tafa''ala) : se detourner, tourner le dos, s'eloigner. La racine w-l-y porte d'abord le sens de proximite et de protection — le wali est le proche, l'allie. Mais la forme V inverse le mouvement : au lieu de se rapprocher (wali), on s'eloigne (tawalla). Le tawalli est l'anti-proximite — c'est le mouvement de rejet de l'alliance. L'accompli marque que le detournement est un acte acheve. La distinction avec « gouverner » (nul) est claire : le contexte est un mouvement de rejet, pas l'exercice d'un pouvoir.",
              axe1_verset: "Le verbe tawallaw est la seconde condition : et s'ils se detournent. Le champ lexical oppose la confiance (amanuu) au detournement (tawallaw). Le resultat du detournement est le schisme (shiqaq). Le verset presente deux voies : confiance → guidance, detournement → schisme. Le detournement est l'inverse de la proximite — au lieu de s'allier, ils s'eloignent.",
              axe2_voisins: "Le verset 136 montrait les croyants declarant leur confiance sans distinction. Le verset 137 montre le risque du detournement — refuser cette confiance universelle. Le verset 139 demandera : « disputez-vous avec nous au sujet de Dieu ? ». Le detournement du verset 137 prepare le terrain de la dispute du verset 139.",
              axe3_sourate: "La racine w-l-y apparait frequemment dans la sourate al-Baqarah. En 2:107, « vous n'avez pas en dehors de Dieu de protecteur ». En 2:120, les juifs et chretiens ne seront jamais satisfaits. La sourate oppose la proximite de Dieu (wali) au detournement des hommes (tawalli). Le verset 137 s'inscrit dans cette opposition fondamentale.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. La forme V (tawalla) designe systematiquement le detournement et le rejet — en 3:32, « s'ils se detournent, Dieu n'aime pas les dissimulateurs ». Le Coran associe le detournement a la consequence negative — se detourner c'est choisir la perte.",
              axe5_frequence: "Pour la mission du khalifa, le detournement est l'echec de la mission. Se detourner c'est abandonner la proximite de Dieu et choisir l'eloignement. Le verset montre que le detournement n'est pas neutre — il mene au schisme. Le khalifa qui se detourne ne reste pas au meme endroit, il tombe dans la division."
            },
            "Autorité": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est un usage de w-l-y lie a l'autorite. Le contexte est le detournement (forme V reflexive), pas l'exercice du pouvoir."
            }
          }
        }
      },
      // shqq pos=19
      {
        word_key: "shqq", position: 19, sense_chosen: "schisme",
        analysis_axes: {
          sense_chosen: "schisme",
          concept_chosen: "Fissure/Division",
          concepts: {
            "Fissure/Division": {
              status: "retenu",
              senses: ["fendre", "diviser", "fissure"],
              proof_ctx: "Le nom shiqaaqin est un nom masculin singulier indefini genitif de la racine sh-q-q. Le Lane's donne : dissension, schisme, discord, opposition, le fait de se separer d'un groupe. Le shiqaq est litteralement l'etat d'etre fendu — chaque partie prend un cote (shiqq) oppose. L'indefini marque que c'est un etat de dissension sans specification — une dissension en general. La preposition fi (dans) situe le sujet a l'interieur du schisme — ils sont plonges dans le discord, pas seulement a cote. La distinction avec la difficulte (nul) est philosophique : le shiqaq est une division communautaire, pas une epreuve personnelle.",
              axe1_verset: "Le mot shiqaqin est la consequence du detournement : s'ils se detournent, ils ne sont que dans un schisme. Le champ lexical oppose la guidance (ihtadaw) au schisme (shiqaq). La guidance rassemble, le schisme divise. Le mot innamaa (seulement) restreint leur etat au schisme — ils ne sont rien d'autre que dans la division. Le verset montre que le detournement n'est pas neutre, il produit activement la division.",
              axe2_voisins: "Le verset 136 montrait l'unite de la confiance — tous les envoyes sans distinction. Le verset 137 montre que refuser cette unite mene au schisme. Le verset 139 demandera pourquoi ils disputent au sujet de Dieu. Les voisins construisent une progression : unite de la confiance → risque du schisme → dispute.",
              axe3_sourate: "La racine sh-q-q apparait dans la sourate al-Baqarah pour decrire l'opposition et la division. En 2:176, « ceux qui divergent au sujet du Livre sont dans un shiqaq profond ». La sourate utilise shiqaq pour decrire l'etat de ceux qui s'opposent a la verite — c'est un etat de rupture et de division interne.",
              axe4_coherence: "La racine sh-q-q apparait environ 42 fois dans le Coran. Le mot shiqaq au sens de dissension apparait en 2:137, 2:176, 4:35, 38:2, 41:52. Le Coran presente le shiqaq comme un etat destructeur — la division de la communaute est l'oppose de l'unite que la confiance est censee creer. En 4:35, le shiqaq conjugal montre que la division peut etre resolue par l'arbitrage.",
              axe5_frequence: "Pour la mission du khalifa, le schisme est l'echec collectif. Le khalifa est charge de maintenir l'unite — le shiqaq est le signe que la mission a echoue dans un groupe. Le verset montre que le schisme vient du detournement, pas de la diversite. La diversite des envoyes est une richesse (v.136), mais le refus de faire confiance a cette diversite produit le schisme."
            },
            "Peine/Épreuve": {
              status: "nul",
              senses: ["difficulte"],
              proof_ctx: "Le sens de difficulte est un sens secondaire de sh-q-q. Le contexte est la division communautaire (fi shiqaqin = dans un schisme), pas une epreuve personnelle."
            }
          }
        }
      },
      // kfy pos=21
      {
        word_key: "kfy", position: 21, sense_chosen: "suffire",
        analysis_axes: {
          sense_chosen: "suffire",
          concept_chosen: "Suffisance/Protection",
          concepts: {
            "Suffisance/Protection": {
              status: "retenu",
              senses: ["suffire", "proteger contre", "epargner un mal", "etre competent"],
              proof_ctx: "Le verbe sayakfiikahumu est un inaccompli 3MS de la racine k-f-y avec prefixe sa- (futur proche), pronom suffixe -ka (toi) et -hum (eux). Le Lane's donne : suffire, etre suffisant, proteger contre le besoin ou le mal. La suffisance est un etat de completude — ce qui suffit ne laisse pas de manque. Le prefixe sa- marque un futur certain — Dieu va te suffire. Le double pronom (ka = toi, hum = eux) cree une relation triangulaire : Dieu suffit a toi contre eux. La suffisance divine opere comme une protection — Dieu suffit c'est-a-dire Dieu protege et rend inutile tout autre recours.",
              axe1_verset: "Le verbe sayakfiikahumu ouvre la troisieme partie du verset — la promesse divine. Apres les deux conditions (confiance/guidance, detournement/schisme), le verset conclut avec une assurance : Dieu te suffira. Le fa (donc) marque la consequence — puisqu'ils sont dans le schisme, Dieu prend en charge. Le champ lexical (Dieu, l'Entendant, le Savant) montre que la suffisance est adossee a la connaissance divine — Dieu suffit parce qu'Il entend et sait tout.",
              axe2_voisins: "Le verset 136 posait le credo universel. Le verset 137 montre le risque du refus et la reponse divine. Le verset 138 completera avec la teinture de Dieu — apres la promesse de suffisance, la teinture divine est la reponse positive. Les voisins montrent que Dieu ne laisse pas le croyant seul face au schisme.",
              axe3_sourate: "La racine k-f-y est rare dans la sourate al-Baqarah — ce verset est l'une des rares occurrences. En 2:137, la suffisance divine est une promesse de protection contre l'opposition. La sourate construit un reseau de protection divine : Dieu est le protecteur (wali en 2:107), Dieu suffit (yakfi en 2:137), Dieu est avec les endurants (2:153).",
              axe4_coherence: "La racine k-f-y apparait environ 23 fois dans le Coran. L'expression « sayakfika » (Il te suffira) ou « kafaa bi-llahi » (Dieu suffit) est un refrain coranique de reassurance. En 39:36, « Dieu ne suffit-Il pas a Son serviteur ? ». En 4:45, « Dieu suffit comme protecteur ». Le Coran utilise la suffisance divine comme reponse a l'hostilite et a l'opposition.",
              axe5_frequence: "Pour la mission du khalifa, la suffisance de Dieu est la garantie de la mission. Le khalifa n'a pas besoin d'autre recours que Dieu. L'opposition des autres ne peut pas compromettre la mission si Dieu suffit. La suffisance divine est la reponse au schisme — meme si un groupe se detourne, Dieu couvre le manque."
            },
            "Sens isolé/Rendre": {
              status: "nul",
              senses: ["rendre suffisant"],
              proof_ctx: "Le sens de rendre suffisant est un usage causatif. Le verbe est ici a la forme I simple — Dieu suffit, pas Dieu rend suffisant."
            }
          }
        }
      },
      // alh pos=22
      {
        word_key: "alh", position: 22, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allaahu est le nom propre de la divinite au nominatif — Il est le sujet du verbe yakfi (suffire). Le Lane's donne : Dieu, la divinite unique. Ici Allah est l'agent de la suffisance — c'est Lui qui suffit au croyant contre les opposants. Le nom est au nominatif car il est le sujet grammatical (fa'il) du verbe. La distinction avec les concepts de detresse, domination, adoration est claire : le mot est le nom propre dans un contexte de promesse divine.",
              axe1_verset: "Le nom Allah est le sujet de la promesse : Dieu te suffira. Apres les deux conditions humaines (confiance/detournement), Dieu intervient comme garant. Le champ lexical divin (Dieu, l'Entendant, le Savant) cree un triptyque d'attributs : la suffisance (Il suffit), l'audition (Il entend), le savoir (Il sait). Dieu n'est pas absent du conflit — Il entend les paroles et sait les intentions.",
              axe2_voisins: "Le verset 136 mentionnait la confiance en Dieu. Le verset 137 montre Dieu comme agent de protection. Le verset 138 parlera de la teinture de Dieu — Dieu est la source de la nature profonde. Les voisins montrent que Dieu est a la fois objet de confiance, agent de suffisance et source de nature.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. En 2:137, Il est le sujet actif — Il suffit, Il entend, Il sait. La sourate montre que Dieu n'est pas une abstraction mais un agent qui intervient concretement dans les affaires humaines.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:137, l'association de sayakfikahumu (suffira) avec Allah puis as-samii' al-'aliim (l'Entendant le Savant) est un schema coranique de reassurance — Dieu agit (suffit) parce qu'Il percoit (entend et sait).",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le garant de la mission. Sa suffisance signifie que le khalifa n'a besoin de personne d'autre pour accomplir sa mission. L'opposition ne peut pas compromettre ce que Dieu garantit."
            }
          }
        }
      },
      // sme pos=25
      {
        word_key: "sme", position: 25, sense_chosen: "entendant",
        analysis_axes: {
          sense_chosen: "entendant",
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["entendre", "ecouter", "ouie", "obeir", "exaucer"],
              proof_ctx: "Le nom as-samii'u est un adjectif intensif (fa'iil) de la racine s-m-'. Le Lane's donne : celui qui entend tout, l'Entendant, celui qui percoit tous les sons. La forme fa'iil est intensive — elle ne designe pas celui qui entend parfois mais celui qui entend toujours et tout. L'article defini (as-) marque l'unicite et la totalite — il n'y a qu'un seul Entendant absolu. Le mot est ici un attribut divin au nominatif, predicat de la phrase nominale « huwa as-samii'u al-'aliimu » (Lui est l'Entendant le Savant). La distinction avec la renommee (nul) est claire : le mot est un attribut de perception divine, pas de reputation humaine.",
              axe1_verset: "Le nom as-samii'u qualifie Dieu dans la cloture du verset. Le diptyque Entendant-Savant couvre les deux dimensions de la perception : l'audition (les paroles prononcees) et le savoir (les intentions cachees). Le verset dit : Dieu te suffira parce qu'Il entend ce qu'ils disent et sait ce qu'ils cachent. La suffisance de Dieu est fondee sur Sa perception totale — Il n'agit pas a l'aveugle.",
              axe2_voisins: "Le verset 127 mentionnait Dieu comme as-samii' al-'aliim dans le contexte de la priere d'Ibrahim. Le verset 137 reprend le meme diptyque dans un contexte de reassurance. Les voisins montrent que Dieu entend aussi bien les prieres des croyants que les complots des opposants.",
              axe3_sourate: "La racine s-m-' est frequente dans la sourate al-Baqarah. En 2:75, « un groupe parmi eux entendait la Parole de Dieu ». En 2:93, « nous avons entendu et nous avons desobei ». La sourate oppose l'audition humaine (partielle et souvent ignoree) a l'audition divine (totale et permanente). L'Entendant entend meme ce que les humains refusent d'entendre.",
              axe4_coherence: "La racine s-m-' apparait environ 185 fois dans le Coran. Le diptyque as-samii' al-'aliim apparait dans de nombreux versets comme cloture reassurante — en 2:127, 2:137, 2:181, 2:224, 2:227, 2:244, 2:256, 3:34, 3:35. Le Coran utilise ce diptyque pour montrer que Dieu percoit a la fois l'apparent (l'audition) et le cache (le savoir).",
              axe5_frequence: "Pour la mission du khalifa, l'Entendant est le garant que rien n'echappe a Dieu. Le khalifa peut etre rassure : Dieu entend les complots et les refus, et Il agit en consequence. L'audition divine couvre tout le spectre des paroles humaines — les sinceres et les trompeuses."
            },
            "Renommée/Bruit": {
              status: "nul",
              senses: ["reputation", "bruit", "faire entendre"],
              proof_ctx: "Le sens de reputation est un sens secondaire de s-m-'. Le mot est ici un attribut divin de perception, pas un nom designant la renommee."
            }
          }
        }
      },
      // elm pos=26
      {
        word_key: "elm", position: 26, sense_chosen: "savant",
        analysis_axes: {
          sense_chosen: "savant",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le nom al-'aliimu est un adjectif intensif (fa'iil) de la racine '-l-m. Le Lane's donne : celui qui sait tout, l'Omniscient, le Savant absolu. La forme fa'iil est intensive — elle ne designe pas celui qui sait certaines choses mais celui qui sait tout. L'article defini (al-) marque l'unicite et la totalite — il n'y a qu'un seul Savant absolu. Le mot est ici un attribut divin au nominatif, second predicat de la phrase nominale « huwa as-samii'u al-'aliimu ». La distinction avec le signe (nul) est claire : le mot est un attribut de connaissance divine, pas un repere visible.",
              axe1_verset: "Le nom al-'aliimu ferme le verset en diptyque avec as-samii'. Le Savant sait ce que l'Entendant entend et plus encore — Il sait les pensees et les intentions cachees. Le verset conclut sur la perception totale de Dieu : il entend les paroles et sait les secrets. La suffisance de Dieu (sayakfikahumu) est fondee sur cette double perception — Dieu suffit parce qu'Il percoit tout.",
              axe2_voisins: "Le verset 127 utilisait le meme diptyque as-samii' al-'aliim. Le verset 137 le reprend dans un contexte different — la reassurance face au schisme. Le verset 138 enchainera avec la teinture de Dieu — apres la connaissance divine, la nature divine qui teint les ames. Les voisins montrent que la connaissance de Dieu est le fondement de Son action.",
              axe3_sourate: "La racine '-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:29, « Il est de toute chose Savant ». En 2:231, « sachez que Dieu est de toute chose Savant ». La sourate insiste sur l'omniscience divine comme attribut fondamental. Le Savant sait tout — les actes, les intentions, le passe et le futur.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. Le diptyque as-samii' al-'aliim est un des diptyques divins les plus frequents. Il couvre la perception complete : l'audition (le sonore, l'apparent) et le savoir (le cache, l'interieur). Le Coran utilise ce diptyque pour montrer que rien n'echappe a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le Savant est le garant que rien n'est perdu. Tout acte de confiance et tout detournement sont connus de Dieu. Le khalifa agit devant un Savant absolu — il ne peut rien cacher et n'a rien a cacher. La transparence devant Dieu est la condition de la mission."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau"],
              proof_ctx: "Le sens de signe est un sens physique de '-l-m. Le mot est ici un attribut divin de connaissance, pas un repere visible."
            }
          }
        }
      }
    ]
  },
  138: {
    verse_id: 145,
    analysis_id: 503,
    translation_arab: "Teinture de Dieu! Et qui est meilleur que Dieu en teinture? Et nous, pour Lui, sommes des adorateurs.",
    full_translation: "Nous suivons la religion d'Allah! Et qui est meilleur qu'Allah en Sa religion? C'est Lui que nous adorons.",
    translation_explanation: `§DEMARCHE§
Le verset est structure en trois parties : une exclamation (teinture de Dieu!), une question rhetorique (qui est meilleur que Dieu en teinture?), et une declaration (nous sommes pour Lui des adorateurs). Le nom **sibghata** est un nom feminin singulier accusatif de la racine s-b-gh. Le Lane's donne : teinture, le fait de teindre, la couleur obtenue par immersion. La sibgha est l'acte de plonger quelque chose dans un liquide colorant pour en changer la couleur de facon permanente. L'accusatif marque soit un complement d'objet direct (nous suivons la teinture de Dieu) soit un accusatif d'exclamation (la teinture de Dieu!). La construction en idafa avec Allahi (de Dieu) rattache la teinture a Dieu — c'est la teinture qui vient de Dieu, la marque qu'Il imprime sur Sa creation. Le Lane's precise que le mot est utilise pour designer la religion ou la nature originelle (fitra) parce que la religion teint l'ame comme la teinture teint le tissu. Le nom **Allahi** apparait deux fois dans le verset — en position 2 (genitif dans l'idafa sibghata Allahi) et en position 7 (genitif apres min : mina Allahi). L'adjectif **ahsanu** est un elatif (comparatif/superlatif) de la racine h-s-n. Le Lane's donne : plus beau, meilleur, plus excellent. L'elatif est la forme la plus haute — ahsan n'est pas simplement bon mais le meilleur. La question rhetorique « wa man ahsanu mina Allahi sibghatan » (et qui est meilleur que Dieu en teinture?) implique une reponse negative : personne n'est meilleur que Dieu en teinture. C'est une affirmation deguisee en question. Le deuxieme **sibghatan** est un accusatif de specification (tamyiiz) — meilleur en matiere de teinture. Le pronom **nahnu** est un pronom personnel independant 1MP au nominatif. Le Lane's donne : nous. Le pronom est emphatique — il met en avant le sujet « nous » pour l'opposer implicitement a « eux ». C'est nous (et pas eux) qui sommes pour Lui des adorateurs. La preposition **lahu** (pour Lui, a Lui) rattache l'adoration a Dieu — l'adoration est dirigee vers Lui. Le participe actif **'aabiduna** est un pluriel masculin de la racine '-b-d. Le Lane's donne : adorateurs, ceux qui adorent, ceux qui vouent un culte. Le participe actif au pluriel designe un etat permanent — ils ne sont pas en train d'adorer ponctuellement, ils sont des adorateurs par nature.

§JUSTIFICATION§
**teinture** — Le sens retenu est « teinture/immersion ». Le mot sibgha designe litteralement l'acte de teindre par immersion. Les traductions traditionnelles donnent « religion » mais ce sens est une interpretation, pas une traduction. Le Lane's donne d'abord le sens de teinture puis precise que le mot est utilise pour la religion par metaphore. Nous gardons le sens premier — la teinture — parce que la metaphore est plus riche que l'interpretation. La teinture de Dieu est la marque permanente qu'Il imprime sur l'ame humaine. L'alternative « baptiser » est ecartee car c'est un sens chretien specifique de l'immersion. L'alternative « etre ample (vetement) » est ecartee car c'est un sens physique hors contexte.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite. Il apparait deux fois : comme possesseur de la teinture (sibghata Allahi) et comme terme de comparaison (mina Allahi).

**meilleur** — Le sens retenu est « excellence morale ». L'elatif ahsanu designe le plus beau, le meilleur. L'alternative « beaute/bonte » est ecartee car le mot est ici un comparatif (meilleur), pas un etat (beau). Le concept d'excellence morale couvre mieux l'usage elatif — faire le mieux, etre le meilleur.

**nous** — Le mot nahnu est un pronom personnel emphatique. Il sert a separer les locuteurs (nous, les croyants) des autres.

**pour Lui** — Le mot lahu est une preposition + pronom suffixe 3MS. Le « Lui » renvoie a Dieu. L'adoration est dirigee vers Lui exclusivement.

**adorateurs** — Le sens retenu est « adoration/devotion ». Le participe actif 'abiduuna designe ceux qui adorent. « Adorateurs » est le mot le plus naturel. L'alternative « serviteur/esclave » est ecartee car le participe actif marque l'acte volontaire d'adoration, pas la condition subie de servitude. L'alternative « etre en colere » est ecartee car c'est un sens isole sans rapport.

§CRITIQUE§
Hamidullah traduit « Nous suivons la religion d'Allah! » pour sibghata Allahi. Nous donnons « Teinture de Dieu! ». La difference est fondamentale : Hamidullah interprete sibgha comme « religion » (sens metaphorique), nous gardons « teinture » (sens premier). Le Lane's donne d'abord le sens de teinture puis mentionne l'usage metaphorique pour la religion. Garder « teinture » preserve la richesse de la metaphore — Dieu teint les ames comme on teint un tissu, la marque est permanente et totale. Pour ahsanu, Hamidullah donne « meilleur » comme nous. Pour 'abiduuna, Hamidullah donne « nous adorons » (verbe) alors que nous donnons « adorateurs » (participe actif) — la difference est que le participe actif marque un etat permanent, pas un acte ponctuel.`,
    segments: [
      { fr: "teinture", pos: "nom", phon: "sibghata", arabic: "\u0635\u0650\u0628\u0652\u063a\u064e\u0629\u064e", word_key: "sbg", is_particle: false, sense_retenu: "teinture", position: 1 },
      { fr: "de Dieu", pos: "nom", phon: "allaahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 2 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 3 },
      { fr: "qui", phon: "man", arabic: "\u0645\u064e\u0646\u0652", is_particle: true, position: 4 },
      { fr: "meilleur", pos: "adjectif", phon: "ahsanu", arabic: "\u0623\u064e\u062d\u0652\u0633\u064e\u0646\u064f", word_key: "hsn", is_particle: false, sense_retenu: "meilleur", position: 5 },
      { fr: "que", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 6 },
      { fr: "Dieu", pos: "nom", phon: "allaahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 7 },
      { fr: "en teinture", pos: "nom", phon: "sibghatan", arabic: "\u0635\u0650\u0628\u0652\u063a\u064e\u0629\u064b", word_key: "sbg", is_particle: false, sense_retenu: "teinture", position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 9 },
      { fr: "nous", pos: "pronom", phon: "nahnu", arabic: "\u0646\u064e\u062d\u0652\u0646\u064f", word_key: "nhn", is_particle: false, sense_retenu: "nous", position: 10 },
      { fr: "pour Lui", phon: "lahu", arabic: "\u0644\u064e\u0647\u064f\u06e5", is_particle: true, position: 11 },
      { fr: "adorateurs", pos: "participe_actif", phon: "'aabiduuna", arabic: "\u0639\u064e\u0640\u0670\u0628\u0650\u062f\u064f\u0648\u0646\u064e", word_key: "ebd", is_particle: false, sense_retenu: "adorateurs", position: 12 }
    ],
    words: [
      // sbg pos=1
      {
        word_key: "sbg", position: 1, sense_chosen: "teinture",
        analysis_axes: {
          sense_chosen: "teinture",
          concept_chosen: "Teinture/Immersion",
          concepts: {
            "Teinture/Immersion": {
              status: "retenu",
              senses: ["teindre", "colorer", "tremper", "baptiser"],
              proof_ctx: "Le nom sibghata est un nom feminin singulier accusatif de la racine s-b-gh. Le Lane's donne : teinture, l'acte de teindre par immersion dans un liquide colorant, la couleur obtenue. La sibgha est un acte de transformation permanente — ce qui est teint ne revient pas a sa couleur d'origine. L'accusatif marque un complement ou une exclamation. La construction en idafa avec Allahi (teinture de Dieu) rattache la teinture a Dieu — c'est Sa marque, Sa couleur, l'empreinte qu'Il laisse. La distinction avec la nature (probable) est philosophique : la teinture est l'acte de marquer, la nature est le resultat de cette marque.",
              axe1_verset: "Le mot sibghata ouvre le verset avec une exclamation : Teinture de Dieu! Le champ lexical du verset tourne autour de la comparaison (qui est meilleur?) et de l'adoration (nous sommes des adorateurs). La teinture est le fondement — c'est parce que Dieu teint les ames que personne ne peut faire mieux, et c'est pour cela qu'ils adorent. Le mot apparait deux fois (sibghata et sibghatan) — en premiere occurrence comme exclamation, en seconde comme specification (meilleur en matiere de teinture).",
              axe2_voisins: "Le verset 136 enumerait les envoyes. Le verset 137 posait la condition de la guidance par la confiance. Le verset 138 donne le fondement de cette confiance : la teinture de Dieu. La teinture est ce qui precede la confiance — Dieu a teint les ames avant que les ames ne fassent confiance. Le verset 139 demandera : disputez-vous au sujet de Dieu? La teinture rend la dispute absurde — si Dieu a deja teint, pourquoi disputer?",
              axe3_sourate: "La racine s-b-gh n'apparait qu'une seule fois dans le Coran (2:138, deux occurrences dans le meme verset). Cette unicite rend le mot remarquable — il n'y a pas d'autre contexte pour eclairer le sens. La sourate al-Baqarah utilise ce mot unique pour decrire la nature de la relation entre Dieu et les ames — une relation de teinture permanente.",
              axe4_coherence: "La racine s-b-gh n'apparait que dans ce verset dans tout le Coran. Cette unicite (hapax legomenon) donne au mot un poids particulier. Le Coran choisit une metaphore physique (teindre) pour decrire une realite spirituelle (la marque divine sur l'ame). L'image est celle d'une immersion totale — l'ame plongee dans la couleur divine ne peut plus revenir a l'incolore.",
              axe5_frequence: "Pour la mission du khalifa, la teinture de Dieu est la nature profonde de la mission. Le khalifa est teint par Dieu avant meme de commencer sa mission — la teinture precede l'action. La mission n'est pas une acquisition mais une manifestation de ce qui a deja ete imprime. Le khalifa reconnait la teinture en lui et agit en consequence."
            },
            "Empreinte/Nature": {
              status: "probable",
              senses: ["empreinte divine (sibgha)", "religion"],
              proof_ctx: "Le sens de nature ou d'empreinte est une extension de la teinture — la sibgha est la marque permanente que Dieu laisse sur l'ame. La distinction philosophique est que la teinture est l'acte (teindre) et l'empreinte est le resultat (la marque laissee). Le mot sibgha peut designer la religion parce que la religion teint l'ame — elle colore toute la vie de celui qui la suit. Mais le sens premier est la teinture, pas la religion. Le contexte du verset (exclamation + question rhetorique) favorise le sens d'acte transformateur (teinture) plus que le sens de resultat (empreinte).",
              axe1_verset: "Le verset pourrait porter le sens de « religion de Dieu » ou « empreinte de Dieu ». La question rhetorique « qui est meilleur que Dieu en teinture » fonctionne aussi avec « qui est meilleur que Dieu en religion ». Mais la richesse metaphorique est dans la teinture — la religion est une interpretation, la teinture est une image.",
              axe2_voisins: "Le verset 135 mentionnait la religion d'Ibrahim (milla). Le verset 138 pourrait reprendre le theme de la religion sous un autre mot (sibgha). Mais si le Coran voulait dire religion, il aurait utilise milla ou diin, pas sibgha. Le choix de sibgha marque une intention — la metaphore de la teinture ajoute quelque chose que religion ne dit pas.",
              axe3_sourate: "La sourate utilise diin pour religion en 2:132, 2:193, 2:256. La sourate utilise milla pour confession en 2:120, 2:130, 2:135. Le choix de sibgha en 2:138 est delibere — c'est un troisieme terme qui n'est ni diin ni milla. La sourate enrichit le vocabulaire de la relation a Dieu avec cette metaphore unique.",
              axe4_coherence: "Le Coran n'utilise sibgha nulle part ailleurs. Si le sens etait simplement « religion », le mot serait redondant avec diin et milla. L'unicite du mot dans le Coran suggere une intention specifique — decrire quelque chose que les autres mots ne couvrent pas.",
              axe5_frequence: "La teinture comme empreinte divine est une vision profonde de la mission — le khalifa est marque par Dieu avant d'agir. Cette marque est permanente et irremovible."
            },
            "Vêtement/Couverture": {
              status: "nul",
              senses: ["etre ample (vetement)"],
              proof_ctx: "Le sens de vetement ample est un sens concret isole de s-b-gh. Le contexte est la teinture metaphorique de Dieu, pas un vetement physique."
            }
          }
        }
      },
      // alh pos=2
      {
        word_key: "alh", position: 2, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif dans l'idafa sibghata Allahi (teinture de Dieu). Le Lane's donne : Dieu, la divinite unique. L'idafa rattache la teinture a Dieu comme source — c'est Dieu qui teint, la teinture Lui appartient. La distinction avec les autres concepts est claire : le mot est le nom propre dans un contexte de possession (la teinture de Dieu). Memes analyses detaillees que pour les occurrences precedentes.",
              axe1_verset: "Le nom Allah apparait deux fois dans le verset — en position 2 (sibghata Allahi) et en position 7 (mina Allahi). La premiere occurrence Le rattache a la teinture comme source, la seconde Le place comme terme de comparaison (meilleur que Dieu). Dieu est a la fois l'auteur de la teinture et le critere de l'excellence. Personne ne peut teindre mieux que Lui.",
              axe2_voisins: "Le verset 137 montrait Dieu comme agent de suffisance. Le verset 138 montre Dieu comme auteur de la teinture et objet de l'adoration. Les voisins construisent un portrait de Dieu en trois temps : Il suffit (137), Il teint (138), et Il est adore (138).",
              axe3_sourate: "Le nom Allah structure chaque passage de la sourate. En 2:138, Il est la source de la teinture — la marque divine sur les ames. La sourate montre que tout vient de Dieu et retourne a Dieu.",
              axe4_coherence: "Le nom Allah dans une construction possessive (sibghata Allahi) designe la propriete divine. Ce qui appartient a Dieu porte Sa marque. Le Coran utilise l'idafa avec Allah pour marquer la source et la propriete.",
              axe5_frequence: "Dieu est la source de la teinture — la mission du khalifa est de reconnaitre cette teinture et de vivre en consequence."
            }
          }
        }
      },
      // hsn pos=5
      {
        word_key: "hsn", position: 5, sense_chosen: "meilleur",
        analysis_axes: {
          sense_chosen: "meilleur",
          concept_chosen: "Excellence morale",
          concepts: {
            "Excellence morale": {
              status: "retenu",
              senses: ["bien faire", "bienfaisance"],
              proof_ctx: "L'adjectif ahsanu est un elatif (comparatif/superlatif) de la racine h-s-n. Le Lane's donne : plus beau, meilleur, plus excellent. L'elatif (af'alu) est la forme la plus haute de l'adjectif — ahsan n'est pas simplement bon mais le meilleur de tous. La question rhetorique « wa man ahsanu mina Allahi sibghatan » (et qui est meilleur que Dieu en teinture?) implique une reponse negative : personne. C'est un procede coranique de renforcement — la question dont la reponse est evidente affirme plus fort que la simple affirmation. La distinction avec la beaute (probable) est que l'elatif ici porte sur l'excellence de l'acte (teindre), pas sur la beaute d'un objet.",
              axe1_verset: "L'adjectif ahsanu est le pivot de la question rhetorique : qui est MEILLEUR que Dieu en teinture? Le champ lexical du verset (teinture, Dieu, adorateurs) montre que l'excellence de Dieu en teinture fonde l'adoration — on adore Celui dont la teinture est insurpassable. La question n'attend pas de reponse — elle affirme la superiorite absolue de Dieu.",
              axe2_voisins: "Le verset 137 promettait que Dieu suffit. Le verset 138 montre pourquoi Il suffit — parce que personne n'est meilleur que Lui en teinture. Le verset 139 demandera pourquoi ils disputent. Les voisins montrent que l'excellence divine rend la dispute absurde — si Dieu est le meilleur, pourquoi chercher ailleurs?",
              axe3_sourate: "La racine h-s-n apparait dans la sourate al-Baqarah dans des contextes de bienfaisance et d'excellence. En 2:112, « quiconque soumet son visage a Dieu tout en etant bienfaisant (muhsin) ». En 2:195, « faites le bien (ahsinuu) car Dieu aime les bienfaisants ». La sourate lie l'excellence (ihsan) a la relation a Dieu — etre excellent c'est agir en vue de Dieu.",
              axe4_coherence: "La racine h-s-n apparait environ 194 fois dans le Coran. La question rhetorique « man ahsanu min... » (qui est meilleur que...) est un procede coranique recurrent — en 4:125, « qui est meilleur en religion que celui qui soumet son visage a Dieu? ». En 2:138, c'est Dieu Lui-meme qui est le terme de comparaison — pas un homme mais Dieu. Le Coran place la barre au plus haut.",
              axe5_frequence: "Pour la mission du khalifa, l'excellence est le standard de la mission. Le khalifa ne se contente pas du bon — il vise le meilleur. La question rhetorique du verset rappelle que le modele est Dieu Lui-meme — la teinture de Dieu est la meilleure, et le khalifa doit se laisser teindre par ce meilleur."
            },
            "Beauté/Bonté": {
              status: "probable",
              senses: ["etre beau", "bon", "excellent"],
              proof_ctx: "Le sens de beaute est un sens fondamental de h-s-n — le beau et le bon sont lies. La distinction philosophique avec l'excellence morale est que la beaute est une qualite d'etre (etat) tandis que l'excellence est une qualite d'agir (action). L'elatif ahsanu ici porte sur un acte (la teinture) — qui fait le mieux en matiere de teinture? Le sens d'excellence de l'acte (ihsan) est plus pertinent que le sens de beaute de l'etre (husn).",
              axe1_verset: "Le verset pourrait porter le sens de « qui est plus beau que Dieu en teinture? ». Les deux lectures sont coherentes. Mais le contexte favorise l'excellence de l'acte (la teinture est un acte) plutot que la beaute de l'etre.",
              axe2_voisins: "Le contexte des versets voisins parle d'actions (faire confiance, se guider, se detourner). Le sens d'excellence dans l'action est plus coherent avec le contexte que le sens de beaute statique.",
              axe3_sourate: "La sourate utilise la racine h-s-n dans les deux sens. Le contexte determine lequel domine.",
              axe4_coherence: "Le Coran utilise ahsan dans des questions rhetoriques pour marquer la superiorite. Les deux sens (beaute et excellence) se superposent dans ces questions.",
              axe5_frequence: "Le khalifa vise l'excellence dans ses actes — la beaute en sera la consequence naturelle."
            }
          }
        }
      },
      // alh pos=7 (2eme occurrence)
      {
        word_key: "alh", position: 7, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Deuxieme occurrence d'Allah dans le verset — ici au genitif apres la preposition min (mina Allahi = que Dieu). Le Lane's donne les memes sens. Ici Allah est le terme de comparaison : « qui est meilleur que Dieu en teinture? ». La preposition min marque la comparaison — Dieu est le point de reference de l'excellence. Memes analyses que la premiere occurrence en position 2.",
              axe1_verset: "Le nom Allah en deuxieme occurrence est le terme de la comparaison — meilleur que Dieu. Le verset pose Dieu comme l'etalon de l'excellence en teinture. Personne ne peut Le surpasser. Cette deuxieme occurrence renforce la premiere — Dieu est a la fois la source de la teinture et le critere de son excellence.",
              axe2_voisins: "Les voisins montrent que Dieu est le centre de tout le passage — objet de confiance (136), garant de suffisance (137), source de teinture et critere d'excellence (138).",
              axe3_sourate: "Le nom Allah au genitif apres min dans une comparaison est un usage courant de la sourate. En 2:114, « qui est plus injuste que celui qui empeche... ». La sourate utilise les comparaisons avec Dieu comme reference absolue.",
              axe4_coherence: "Le schema « man ahsanu mina Allahi » place Dieu comme reference insurpassable. Le Coran ne craint pas la comparaison — il l'invite pour montrer que Dieu est toujours au sommet.",
              axe5_frequence: "Dieu est le critere de la mission — le khalifa mesure ses actions a l'etalon divin."
            }
          }
        }
      },
      // sbg pos=8 (2eme occurrence)
      {
        word_key: "sbg", position: 8, sense_chosen: "teinture",
        analysis_axes: {
          sense_chosen: "teinture",
          concept_chosen: "Teinture/Immersion",
          concepts: {
            "Teinture/Immersion": {
              status: "retenu",
              senses: ["teindre", "colorer", "tremper", "baptiser"],
              proof_ctx: "Deuxieme occurrence de sibgha dans le verset — ici a l'accusatif indefini (sibghatan) comme tamyiiz (accusatif de specification). Le Lane's donne les memes sens. Le tamyiiz precise le domaine de la comparaison : meilleur EN MATIERE DE teinture. Le mot est indefini (sans article) ce qui marque la generalite — en matiere de teinture en general, pas une teinture specifique. Memes analyses que la premiere occurrence en position 1.",
              axe1_verset: "Le mot sibghatan en deuxieme occurrence precise la comparaison — meilleur en matiere de TEINTURE. Le tamyiiz restreint le champ de la comparaison a la teinture. Le verset ne dit pas que Dieu est meilleur en tout (meme si c'est implicite) — il dit specifiquement qu'Il est meilleur en teinture.",
              axe2_voisins: "La double occurrence de sibgha dans le meme verset montre l'importance du mot. Le verset est construit autour de la teinture — elle ouvre (sibghata Allahi), elle ferme la question rhetorique (sibghatan). La teinture encadre le message.",
              axe3_sourate: "Les deux occurrences sont dans le meme verset — la sourate concentre l'usage de cette racine unique dans un seul passage.",
              axe4_coherence: "Le mot n'apparait nulle part ailleurs dans le Coran. Ces deux occurrences sont les seules — la repetition dans le meme verset renforce l'impact.",
              axe5_frequence: "La teinture est le fondement permanent de la mission — elle ne change pas, elle colore tout."
            }
          }
        }
      },
      // nhn pos=10
      {
        word_key: "nhn", position: 10, sense_chosen: "nous",
        analysis_axes: {
          sense_chosen: "nous",
          concept_chosen: "Pronom",
          concepts: {
            "Pronom": {
              status: "retenu",
              senses: ["nous"],
              proof_ctx: "Le pronom nahnu est un pronom personnel independant de la premiere personne du pluriel au nominatif. Le Lane's donne : nous. Le pronom est emphatique — en arabe, le sujet peut etre contenu dans le verbe sans pronom explicite. L'usage du pronom explicite (nahnu) marque l'insistance — c'est NOUS qui sommes pour Lui des adorateurs. Le pronom cree une opposition implicite entre « nous » (les croyants) et « eux » (ceux qui se detournent au verset 137). La racine n-h-n ne porte pas de sens au-dela de la fonction pronominale.",
              axe1_verset: "Le pronom nahnu ouvre la troisieme partie du verset — la declaration d'adoration. Apres l'exclamation (teinture de Dieu!) et la question rhetorique (qui est meilleur?), le pronom pose le sujet : nous. Le champ lexical (nous, pour Lui, adorateurs) cree une phrase de devotion. Le pronom emphatique marque que l'adoration est un choix delibere et affirme.",
              axe2_voisins: "Le verset 136 commencait par « dites : nous avons fait confiance ». Le verset 138 reprend le « nous » emphatique — « nous sommes pour Lui des adorateurs ». Les deux « nous » se repondent : nous faisons confiance (136) et nous adorons (138). Le « nous » est le sujet collectif des croyants.",
              axe3_sourate: "Le pronom nahnu apparait dans la sourate al-Baqarah pour marquer la voix collective des croyants. En 2:136, « dites : nous avons fait confiance ». En 2:285, « nous avons entendu et nous obeissons ». La sourate construit un « nous » communautaire qui unit les croyants dans la confiance et l'adoration.",
              axe4_coherence: "Le pronom nahnu apparait environ 150 fois dans le Coran. Il marque la voix collective — tantot la voix divine (nous avons cree), tantot la voix des croyants (nous adorons). En 2:138, c'est la voix des croyants qui s'affirme face a ceux qui disputent.",
              axe5_frequence: "Pour la mission du khalifa, le « nous » est le signe de l'appartenance a la communaute des adorateurs. Le khalifa n'est pas seul — il fait partie d'un « nous » qui fait confiance et qui adore."
            }
          }
        }
      },
      // ebd pos=12
      {
        word_key: "ebd", position: 12, sense_chosen: "adorateurs",
        analysis_axes: {
          sense_chosen: "adorateurs",
          concept_chosen: "Adoration/Dévotion",
          concepts: {
            "Adoration/Dévotion": {
              status: "retenu",
              senses: ["adorer", "servir", "vouer un culte", "se devouer", "devotion", "adoration"],
              proof_ctx: "Le participe actif 'aabiduuna est un pluriel masculin nominatif de la racine '-b-d. Le Lane's donne : adorateurs, ceux qui adorent, ceux qui vouent un culte continu. Le participe actif (ism al-fa'il) designe celui qui accomplit l'action de facon permanente — 'aabid n'est pas celui qui adore une fois mais celui qui est adorateur par nature et par habitude. Le pluriel (uuna) marque que c'est un groupe — les adorateurs au pluriel. La distinction avec la servitude (peu_probable) est philosophique : l'adoration est un acte volontaire de devotion, la servitude est un etat subi. Le participe actif marque l'agent volontaire, pas l'objet passif.",
              axe1_verset: "Le participe 'aabiduuna ferme le verset avec une declaration identitaire : nous sommes des adorateurs. Le champ lexical du verset (teinture de Dieu, meilleur que Dieu, pour Lui, adorateurs) construit un cercle : la teinture de Dieu fonde l'adoration, et l'adoration repond a la teinture. Les croyants adorent Dieu parce qu'Il les a teints de Sa marque. L'adoration est la reponse humaine a l'action divine.",
              axe2_voisins: "Le verset 136 declarait la confiance. Le verset 137 posait la condition de la guidance. Le verset 138 conclut avec l'adoration — la confiance mene a la guidance qui s'exprime par l'adoration. Les trois versets forment une sequence : confiance → guidance → adoration. L'adoration est le resultat final de la confiance bien placee.",
              axe3_sourate: "La racine '-b-d est une des racines fondatrices de la sourate al-Baqarah. En 2:21, « adorez ('ubuduu) votre Seigneur ». En 2:83, « n'adorez que Dieu ». En 2:133, « nous adorerons ton Dieu et le Dieu de tes peres ». La sourate construit l'adoration comme le but de l'existence humaine — le khalifa est cree pour adorer.",
              axe4_coherence: "La racine '-b-d apparait environ 275 fois dans le Coran. Le participe actif 'aabid/'aabiduuna designe les adorateurs actifs et permanents. En 9:112, les croyants sont decrits comme « les adorateurs ('aabiduuna), les louangeurs, les jeuneurs ». Le Coran fait de l'adoration un trait identitaire permanent, pas un acte occasionnel.",
              axe5_frequence: "Pour la mission du khalifa, l'adoration est le coeur de la mission. Le khalifa n'est pas un administrateur — il est un adorateur. Le participe actif montre que l'adoration n'est pas un acte ponctuel mais un etat permanent. Le khalifa adore en permanence — dans ses actes, ses paroles et ses intentions."
            },
            "Servitude/Esclavage": {
              status: "peu_probable",
              senses: ["serviteur", "esclave", "etre humain", "asservir", "rendre soumis", "aplanir un chemin"],
              proof_ctx: "Le sens de servitude est un sens secondaire de '-b-d. La distinction philosophique avec l'adoration est que la servitude est un etat subi (l'esclave ne choisit pas), tandis que l'adoration est un acte volontaire (l'adorateur choisit). Le participe actif 'aabid marque l'agent qui agit volontairement — il choisit d'adorer. Le contexte confirme la volonte : « nous sommes pour Lui des adorateurs » est une declaration libre, pas une soumission forcee. Le sens de servitude reste possible philosophiquement car l'adoration inclut un element de soumission — mais la soumission est ici volontaire et joyeuse, pas contrainte.",
              axe1_verset: "Le verset est une declaration de devotion volontaire. Le pronom emphatique nahnu (nous) et la preposition lahu (pour Lui) montrent un choix delibere. Les adorateurs choisissent d'adorer — ils ne sont pas forces. La servitude involontaire est incoherente avec le ton declaratif du verset.",
              axe2_voisins: "Le verset 136 commencait par « dites » — un imperatif de declaration. Les croyants sont invites a declarer, pas contraints a subir. Le contexte est celui de la liberte de parole et de choix.",
              axe3_sourate: "En 2:21, « adorez votre Seigneur » est un appel, pas une contrainte. La sourate presente l'adoration comme un choix offert, pas impose.",
              axe4_coherence: "Le Coran distingue le 'abd (serviteur/esclave de Dieu — titre honorifique) de l'esclave au sens social. Le participe actif 'aabid marque l'adorateur actif, pas l'esclave passif.",
              axe5_frequence: "Le khalifa est serviteur de Dieu dans le sens noble — sa servitude est une adoration volontaire, pas un asservissement."
            },
            "Sens isolé/Être": {
              status: "nul",
              senses: ["etre en colere"],
              proof_ctx: "Le sens de colere est un sens isole et concret de '-b-d. Le contexte est l'adoration, pas la colere."
            },
            "Sens isolé/Mépriser": {
              status: "nul",
              senses: ["mepriser"],
              proof_ctx: "Le sens de mepris est un sens isole de '-b-d. Le contexte est l'adoration volontaire, pas le mepris."
            },
            "Sens isolé/Colérique": {
              status: "nul",
              senses: ["colerique"],
              proof_ctx: "Le sens de colerique est un sens isole de '-b-d. Le contexte est l'adoration, pas un trait de caractere."
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

  const verseIds = [144, 145];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 137-138 ===\n');
  await processVerse(137);
  await processVerse(138);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V137-138 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
