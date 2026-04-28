const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 19 À 20
// verse_id=26 (2:19), verse_id=27 (2:20)
// analysis_id=386 (2:19), analysis_id=387 (2:20)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:19 — أَوْ كَصَيِّبٍ مِّنَ ٱلسَّمَآءِ فِيهِ ظُلُمَٰتٌ وَرَعْدٌ وَبَرْقٌ يَجْعَلُونَ أَصَٰبِعَهُمْ فِىٓ ءَاذَانِهِم مِّنَ ٱلصَّوَٰعِقِ حَذَرَ ٱلْمَوْتِ وَٱللَّهُ مُحِيطٌ۞ بِٱلْكَٰفِرِينَ
  // verse_id=26, analysis_id=386
  // =====================================================
  19: {
    verse_id: 26,
    analysis_id: 386,
    translation_arab: "Ou comme une pluie torrentielle du ciel, dans laquelle il y a ténèbres et tonnerre et éclair — ils mettent leurs doigts dans leurs oreilles à cause des foudres, par précaution de la mort — et Dieu est celui qui entoure les recouvrants.",
    full_translation: "Ou bien, semblables à [ceux qui sont surpris par] une pluie du ciel, chargée de ténèbres, de tonnerre et d'éclairs. Ils se mettent les doigts dans les oreilles par crainte de la mort, à cause des coups de tonnerre. Et Allah cerne de partout les infidèles.",
    translation_explanation: `§DEMARCHE§
Le verset poursuit la parabole des hypocrites commencée au verset 17 (l'image du feu). Ici, le texte passe à une deuxième image : la pluie torrentielle. La particule **aw** (ou) introduit une alternative — une autre façon de voir la même réalité. Le mot **sayyibin** est un nom de la racine s-w-b (frapper, atteindre, tomber sur). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sayyib est ce qui tombe d'en haut et atteint sa cible — spécifiquement une pluie abondante et violente. La préposition **mina** (de) suivie de **al-samāʾi** (le ciel) indique l'origine de cette pluie. Le mot samāʾ vient de s-m-w (être haut, couvrir) — le ciel est ce qui couvre par en haut, le toit du monde. La construction **fīhi** (dans laquelle) introduit le contenu de cette pluie : **zulumātun** (ténèbres, pluriel de zulma, de z-l-m = être obscur), **raʿdun** (tonnerre, de r-ʿ-d = tonner, gronder) et **barqun** (éclair, de b-r-q = briller, jaillir). Le verbe **yajʿalūna** (ils mettent, ils placent) est un inaccompli de forme I de j-ʿ-l (faire, placer, rendre) — l'inaccompli indique une action en cours, répétée. L'objet est **asābiʿahum** (leurs doigts, pluriel de isbʿ, de s-b-ʿ = pointer) et le lieu est **fī ādhānihim** (dans leurs oreilles, pluriel de udhun, de a-dh-n = oreille, écouter). La cause est **mina al-sawāʿiqi** (à cause des foudres, pluriel de sāʿiqa, de s-ʿ-q = foudroyer). Le mot **hadhara** (par précaution) est un nom de la racine h-dh-r (prendre garde, être prudent) — il exprime le motif de leur geste : la précaution face à **al-mawti** (la mort, de m-w-t = mourir). La phrase finale est nominale : **wa allāhu muhītun bil-kāfirīna** — et Dieu est muhīt (celui qui entoure, de h-w-t = entourer, protéger, encercler) les recouvrants (kāfirīna, participe actif pluriel de k-f-r).

§JUSTIFICATION§
**pluie torrentielle** — Le sens retenu est « Atteinte/Affliction ». Le mot sayyib traduit l'idée d'une pluie qui frappe et atteint — c'est un nom d'agent de s-w-b qui souligne la violence de l'impact. L'alternative « Justesse/Rectitude » (le fait d'atteindre juste) est compatible étymologiquement mais le contexte de la parabole décrit une tempête, pas la précision.

**le ciel** — Le sens retenu est « Ciel/Ce qui couvre ». Le mot al-samāʾ désigne ici la voûte d'en haut d'où tombe la pluie — c'est le toit, ce qui couvre le monde par-dessus.

**ténèbres** — Le sens retenu est « Obscurité/Ténèbres ». Le pluriel zulumāt désigne les ténèbres physiques de l'orage — l'absence de lumière dans la tempête.

**tonnerre** — Le sens retenu est « Tonnerre/Grondement ». Le mot raʿd est le bruit violent qui accompagne la foudre.

**éclair** — Le sens retenu est « Éclair/Éclat ». Le mot barq est la lumière vive et soudaine qui jaillit.

**mettent** — Le sens retenu est « Action/Réalisation ». Le verbe yajʿalūna traduit l'acte de placer — ils placent activement leurs doigts dans leurs oreilles.

**doigts** — Le sens retenu est « Désignation/Pointage ». Le mot asābiʿ (doigts) vient de s-b-ʿ dont le sens premier est pointer, désigner. Les doigts sont les instruments de la désignation.

**oreilles** — Le sens retenu est « Écoute/Oreille ». Le mot ādhān (oreilles) vient de a-dh-n dont le sens premier est écouter, prêter l'oreille. Ils bouchent les organes de l'écoute.

**foudres** — Le sens retenu est « Foudre/Anéantissement ». Le mot sawāʿiq (foudres) vient de s-ʿ-q qui signifie foudroyer, terrasser — la foudre est ce qui anéantit.

**précaution** — Le sens retenu est « Prudence/Vigilance ». Le mot hadhara vient de h-dh-r qui signifie prendre garde, être prudent, se prémunir.

**la mort** — Le sens retenu est « Mort/Cessation ». Le mot al-mawt est la cessation de la vie — ce qu'ils craignent.

**Dieu** — Le sens retenu est « Divinité ». Le nom allāh désigne la divinité unique.

**entoure** — Le sens retenu est « Protection/Encerclement ». Le participe muhīt (celui qui entoure) vient de h-w-t qui signifie entourer, encercler, englober. Dieu englobe les recouvrants de toutes parts — ils ne peuvent pas échapper.

**recouvrants** — Le sens retenu est « Couverture/Dissimulation ». Le mot kāfirīna est le participe actif pluriel de k-f-r (couvrir, recouvrir). Ce sont ceux qui recouvrent la vérité.

§CRITIQUE§
**pluie du ciel vs pluie torrentielle** — Hamidullah traduit « une pluie du ciel ». Le mot sayyib n'est pas « pluie » tout court — c'est une pluie violente qui atteint, qui frappe. Le sayyib est étymologiquement lié au fait de frapper (asāba). Une pluie ordinaire serait matar. Le choix de sayyib est délibéré — il décrit une pluie-affliction, pas une pluie banale.

**par crainte de la mort vs par précaution** — Hamidullah traduit « par crainte de la mort ». Le mot hadhara n'est pas la peur (khawf) mais la précaution — l'acte de se prémunir. La différence est que la peur est un état intérieur passif, la précaution est une action préventive. Ils ne sont pas paralysés de peur — ils prennent des mesures (mettre les doigts dans les oreilles).

**Allah cerne de partout les infidèles vs Dieu entoure les recouvrants** — Hamidullah traduit « cerne de partout ». Le mot muhīt ne signifie pas « cerner » (assiéger) mais « entourer » (englober). Et « infidèles » devrait être « recouvrants » — ceux qui recouvrent activement.

**[ceux qui sont surpris par]** — L'ajout entre crochets est absent du texte arabe. Le texte dit directement « comme une pluie torrentielle du ciel ».`,
    segments: [
      { fr: "ou", phon: "aw", arabic: "أَوْ", is_particle: true, position: 1 },
      { fr: "une pluie torrentielle", pos: "nom", phon: "sayyibin", arabic: "كَصَيِّبٍ", word_key: "swb", is_particle: false, sense_retenu: "pluie torrentielle", position: 2 },
      { fr: "de", phon: "mina", arabic: "مِّنَ", is_particle: true, position: 3 },
      { fr: "le ciel", pos: "nom", phon: "al-samāʾi", arabic: "ٱلسَّمَآءِ", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 4 },
      { fr: "dans laquelle", phon: "fīhi", arabic: "فِيهِ", is_particle: true, position: 5 },
      { fr: "ténèbres", pos: "nom", phon: "zulumātun", arabic: "ظُلُمَٰتٌ", word_key: "zlm", is_particle: false, sense_retenu: "ténèbres", position: 6 },
      { fr: "et tonnerre", pos: "nom", phon: "raʿdun", arabic: "وَرَعْدٌ", word_key: "red", is_particle: false, sense_retenu: "tonnerre", position: 7 },
      { fr: "et éclair", pos: "nom", phon: "barqun", arabic: "وَبَرْقٌ", word_key: "brq", is_particle: false, sense_retenu: "éclair", position: 8 },
      { fr: "ils mettent", pos: "verbe", phon: "yajʿalūna", arabic: "يَجْعَلُونَ", word_key: "jel", is_particle: false, sense_retenu: "placer", position: 9 },
      { fr: "leurs doigts", pos: "nom", phon: "asābiʿahum", arabic: "أَصَٰبِعَهُمْ", word_key: "sbe", is_particle: false, sense_retenu: "doigts", position: 10 },
      { fr: "dans", phon: "fī", arabic: "فِىٓ", is_particle: true, position: 11 },
      { fr: "leurs oreilles", pos: "nom", phon: "ādhānihim", arabic: "ءَاذَانِهِم", word_key: "adhn", is_particle: false, sense_retenu: "oreilles", position: 12 },
      { fr: "à cause de", phon: "mina", arabic: "مِّنَ", is_particle: true, position: 13 },
      { fr: "les foudres", pos: "nom", phon: "al-sawāʿiqi", arabic: "ٱلصَّوَٰعِقِ", word_key: "seq", is_particle: false, sense_retenu: "foudres", position: 14 },
      { fr: "par précaution", pos: "nom", phon: "hadhara", arabic: "حَذَرَ", word_key: "hḏr", is_particle: false, sense_retenu: "précaution", position: 15 },
      { fr: "la mort", pos: "nom", phon: "al-mawti", arabic: "ٱلْمَوْتِ", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 16 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 17 },
      { fr: "Dieu", pos: "nom", phon: "allāhu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 18 },
      { fr: "entoure", pos: "participe_actif", phon: "muhītun", arabic: "مُحِيطٌ۞", word_key: "hwt", is_particle: false, sense_retenu: "entourer", position: 19 },
      { fr: "avec", phon: "bi", arabic: "بِ", is_particle: true, position: 20 },
      { fr: "les recouvrants", pos: "participe_actif", phon: "al-kāfirīna", arabic: "ٱلْكَٰفِرِينَ", word_key: "kfr", is_particle: false, sense_retenu: "recouvrants", position: 21 }
    ],
    words: [
      {
        word_key: "swb", position: 2, sense_chosen: "pluie torrentielle",
        analysis_axes: {
          concept_chosen: "Atteinte/Affliction",
          concepts: {
            "Atteinte/Affliction": {
              status: "retenu",
              proof_ctx: "Le mot sayyibin est un nom de forme faʿʿil de la racine s-w-b. D'après les sources étymologiques, s-w-b signifie « frapper, atteindre sa cible, tomber sur ». Le sayyib est spécifiquement une pluie violente et abondante qui tombe et frappe — ce n'est pas une pluie douce (matar) mais une pluie-affliction. Le nom d'agent faʿʿil intensifie le sens : ce qui frappe avec force et de manière répétée. Le verset utilise ce mot pour décrire la situation des hypocrites — ils sont sous une pluie qui les atteint et les frappe de toutes parts. La distinction avec « Justesse/Rectitude » : la justesse (sawāb) est le fait d'atteindre juste, c'est le sens positif de la même racine, mais le contexte est celui d'une tempête, pas de la précision.",
              axe1_verset: "Le champ lexical est celui de la tempête violente : pluie torrentielle, ténèbres, tonnerre, éclair, foudres, mort. Le sayyib ouvre cette cascade de violence naturelle — c'est l'élément principal dont tout découle. Les ténèbres, le tonnerre et l'éclair sont contenus dans cette pluie (fīhi = dans laquelle). La pluie torrentielle est le contenant, les phénomènes sont le contenu. L'image est celle d'une personne prise sous un orage dévastateur. La réaction des personnages — se boucher les oreilles — montre l'intensité de l'affliction.",
              axe2_voisins: "Le verset 17 introduisait la première parabole (le feu). Le verset 19 introduit la deuxième (la pluie). Les deux partagent la même structure : un phénomène naturel intense, des personnages qui perdent la lumière, et Dieu qui a le contrôle total. La pluie torrentielle complète le feu — le premier détruit la lumière, la seconde noie dans l'obscurité. Les deux images sont complémentaires pour décrire la condition des hypocrites.",
              axe3_sourate: "La sourate al-Baqarah utilise les métaphores naturelles pour illustrer les conditions spirituelles. La pluie torrentielle est l'une des images les plus puissantes — elle combine obscurité (perte de direction), bruit (confusion de l'audition) et lumière intermittente (l'éclair qui donne puis retire la vision). Ces trois éléments correspondent aux trois facultés bloquées du verset 7 : centres, audition, perception.",
              axe4_coherence: "Le Coran utilise la racine s-w-b dans plusieurs contextes. En 2:265, la pluie abondante (wābil) fait croître un jardin — usage positif. En 2:19, le sayyib est destructeur — usage négatif. La même pluie peut être bénédiction ou affliction selon le récepteur. Le thème de la pluie comme épreuve est récurrent dans le Coran (29:40, 54:11-12).",
              axe5_frequence: "Pour la mission du khalifa, l'affliction est une épreuve qui révèle la nature des personnes. Sous la tempête, les hypocrites se bouchent les oreilles — ils refusent l'écoute. Le khalifa doit maintenir sa direction même sous la pluie torrentielle des épreuves."
            },
            "Justesse/Rectitude": {
              status: "nul",
              proof_ctx: "La justesse (sawāb) est le fait d'atteindre la cible avec précision. Ce sens positif est hors contexte — le verset décrit une tempête destructrice, pas la précision."
            },
            "Endurance": {
              status: "nul",
              proof_ctx: "L'endurance (sabr) est parfois associée à s-w-b par extension. Mais le mot sayyib est spécifiquement la pluie qui frappe, pas l'endurance face à elle."
            }
          }
        }
      },
      {
        word_key: "smw", position: 4, sense_chosen: "ciel",
        analysis_axes: {
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              proof_ctx: "Le mot al-samāʾi est un nom féminin défini au génitif de s-m-w. D'après les sources étymologiques, s-m-w signifie « être haut, s'élever, couvrir ». Le samāʾ est ce qui est au-dessus, ce qui couvre — le toit du monde. Le samāʾ peut désigner le ciel physique, un nuage, un toit, tout ce qui couvre par-dessus. Avec l'article défini al-, il désigne le ciel connu — la voûte d'où tombe la pluie. La distinction avec « Hauteur/Élévation » : la hauteur est la qualité abstraite d'être élevé, le ciel est l'objet physique qui couvre. La distinction avec « Nom/Identification » : le nom (ism) est un autre dérivé de s-m-w, mais le contexte est clairement celui du ciel d'où descend la pluie.",
              axe1_verset: "Le ciel est l'origine de la pluie torrentielle — il est nommé immédiatement après sayyib pour préciser la provenance. La construction « une pluie torrentielle du ciel » souligne que l'affliction vient d'en haut, de ce qui couvre. Ce qui couvre peut protéger (toit) ou affliger (pluie) — ici c'est l'affliction. Le ciel contient les ténèbres, le tonnerre et l'éclair : tout l'arsenal de la tempête descend de ce qui couvre.",
              axe2_voisins: "Le verset 17 mentionnait le feu qui éclaire autour d'eux. Le verset 19 lève le regard vers le haut — le ciel d'où vient l'orage. Le mouvement vertical (du ciel vers le sol) complète le mouvement horizontal (le feu qui éclaire autour). Les deux paraboles couvrent tous les angles de la situation des hypocrites.",
              axe3_sourate: "La sourate al-Baqarah mentionne le ciel fréquemment (2:22, 2:29, 2:59, 2:144, 2:164). Le ciel est tantôt source de provision (pluie bénéfique), tantôt source d'épreuve (pluie torrentielle). En 2:22, Dieu a fait le ciel comme un toit (bināʾ) et fait descendre du ciel de l'eau dont sortent les fruits. L'eau du ciel est une constante — son effet dépend du récepteur.",
              axe4_coherence: "Le Coran associe systématiquement le ciel à la descente (tanzīl, inzāl) — les choses descendent du ciel : la pluie, la révélation, les anges, la provision. Le ciel est le lieu d'où proviennent les réalités divines. En 2:19, ce qui descend du ciel est l'épreuve — une pluie chargée de ténèbres.",
              axe5_frequence: "Pour la mission du khalifa, le ciel est la source de la direction — ce qui couvre est aussi ce qui nourrit. Le khalifa reçoit du ciel la révélation comme la terre reçoit la pluie. L'épreuve aussi vient du ciel — le khalifa doit distinguer la pluie bénéfique de la pluie afflictive."
            },
            "Hauteur/Élévation": {
              status: "nul",
              proof_ctx: "La hauteur est une qualité abstraite de s-m-w. Le contexte désigne le ciel physique, pas l'élévation. Le verset parle de pluie qui tombe du ciel — la direction est descendante, pas ascendante."
            }
          }
        }
      },
      {
        word_key: "zlm", position: 6, sense_chosen: "ténèbres",
        analysis_axes: {
          concept_chosen: "Obscurité/Ténèbres",
          concepts: {
            "Obscurité/Ténèbres": {
              status: "retenu",
              proof_ctx: "Le mot zulumātun est le pluriel de zulma, de la racine z-l-m. D'après les sources étymologiques, z-l-m a deux branches sémantiques : l'obscurité (zulma, zulumāt) et l'injustice (zulm). L'obscurité est le sens physique — l'absence de lumière. Le pluriel zulumāt intensifie : ce ne sont pas une mais plusieurs couches de ténèbres. Le verset décrit le contenu de la pluie torrentielle : ténèbres + tonnerre + éclair. Les ténèbres sont nommées en premier car elles sont le fond permanent sur lequel les autres phénomènes se produisent. La distinction avec « Injustice/Oppression » : l'injustice est le sens moral de la même racine, mais le contexte est physique — une tempête avec des ténèbres.",
              axe1_verset: "Les ténèbres sont le premier élément contenu dans la pluie (fīhi zulumātun). Le verset construit un crescendo sensoriel : obscurité (vue bloquée), tonnerre (audition agressée), éclair (vue flashée puis replongée dans le noir). Les ténèbres sont la base — le fond sombre sur lequel le tonnerre gronde et l'éclair jaillit. Sans les ténèbres, le tonnerre et l'éclair n'auraient pas le même impact.",
              axe2_voisins: "Le verset 17 disait que Dieu avait emporté leur lumière (dhahaba allāhu bi-nūrihim) et les avait laissés dans les ténèbres (tarakahum fī zulumātin). Le verset 19 reprend la même image dans le cadre de la tempête — les ténèbres persistent d'une parabole à l'autre. La perte de lumière du verset 17 se transforme en ténèbres de tempête au verset 19.",
              axe3_sourate: "La sourate al-Baqarah oppose systématiquement lumière et ténèbres (2:17, 2:19, 2:20, 2:257). En 2:257, Dieu fait sortir les croyants des ténèbres vers la lumière, et les recouvrants sortent de la lumière vers les ténèbres. Les ténèbres sont l'état des recouvrants — ils vivent dans l'obscurité spirituelle que la parabole illustre physiquement.",
              axe4_coherence: "Le Coran utilise zulumāt (pluriel) plus de 20 fois, toujours au pluriel quand il s'agit des ténèbres spirituelles ou de la tempête — ce pluriel renforce l'intensité. En 6:97, Dieu a créé les étoiles pour guider dans les ténèbres de la terre et de la mer. Les ténèbres sont l'état qui nécessite une guidance — sans lumière, on ne sait plus où aller.",
              axe5_frequence: "Pour la mission du khalifa, les ténèbres sont l'ennemi principal — la corruption et l'ignorance se développent dans l'obscurité. Le khalifa est celui qui apporte la lumière (nūr) dans les ténèbres (zulumāt). La pluie torrentielle de cette parabole est chargée de ténèbres — le khalifa doit naviguer dans cette obscurité."
            },
            "Injustice/Oppression": {
              status: "probable",
              proof_ctx: "L'injustice est le sens moral de z-l-m. Le verset utilise le sens physique (ténèbres), mais le lien sémantique entre obscurité et injustice est profond dans la racine — celui qui est dans les ténèbres ne peut pas juger justement, et celui qui commet l'injustice se plonge dans les ténèbres.",
              axe1_verset: "L'injustice serait un sens secondaire : les ténèbres physiques symbolisent les ténèbres morales. Mais le texte décrit une tempête, pas un tribunal — le sens physique est premier.",
              axe2_voisins: "Le verset 16 disait que les hypocrites ont échangé la direction contre l'égarement. L'injustice serait une conséquence de cet échange. Mais le verset 19 est descriptif (tempête), pas moral (jugement).",
              axe3_sourate: "La sourate utilise zulm (injustice) séparément de zulumāt (ténèbres). Les deux sont distingués dans l'usage.",
              axe4_coherence: "Le Coran distingue zulumāt (ténèbres, toujours pluriel) de zulm (injustice, souvent singulier). Les deux sens sont distincts dans l'usage coranique.",
              axe5_frequence: "L'injustice empêche la mission du khalifa, mais ici le texte parle de ténèbres physiques dans une tempête."
            }
          }
        }
      },
      {
        word_key: "red", position: 7, sense_chosen: "tonnerre",
        analysis_axes: {
          concept_chosen: "Tonnerre/Grondement",
          concepts: {
            "Tonnerre/Grondement": {
              status: "retenu",
              proof_ctx: "Le mot raʿdun est un nom masculin indéfini au nominatif de r-ʿ-d. D'après les sources étymologiques, r-ʿ-d signifie « tonner, gronder, faire un bruit violent ». Le raʿd est le bruit du tonnerre — le grondement qui accompagne la foudre. C'est un phénomène sonore pur — un bruit qui effraie sans qu'on voie la source. Dans la tempête du verset, le tonnerre agresse l'audition comme les ténèbres bloquent la vue. La distinction avec « Tremblement/Peur » : le tremblement (raʿda) est la réaction corporelle au tonnerre, pas le tonnerre lui-même.",
              axe1_verset: "Le tonnerre est le deuxième élément de la tempête après les ténèbres. La progression est visuelle-auditive : ténèbres (vue), tonnerre (audition), éclair (vue à nouveau). Le tonnerre est ce qui pousse les personnages à se boucher les oreilles — c'est la cause directe de leur geste défensif. Le lien entre tonnerre et foudres (sawāʿiq) est immédiat : ils se bouchent les oreilles à cause des foudres, mais c'est le tonnerre qu'ils entendent.",
              axe2_voisins: "Le verset 17 parlait de perte de lumière (sens visuel). Le verset 19 ajoute le sens auditif — le tonnerre complète l'image en agressant une deuxième faculté. Les hypocrites perdent à la fois la vue (ténèbres) et l'audition (tonnerre). Cela rappelle le verset 7 où les centres, l'audition et la perception étaient scellés.",
              axe3_sourate: "La sourate al-Baqarah mentionne le tonnerre dans cette parabole uniquement. Mais la sourate 13 s'appelle al-Raʿd (le Tonnerre), où le tonnerre glorifie Dieu (13:13). Le tonnerre est ambivalent : ici il effraie, là il glorifie.",
              axe4_coherence: "Le Coran mentionne le tonnerre en 2:19, 13:13. En 13:13, le tonnerre glorifie Dieu par sa louange, et les anges aussi, par crainte de Lui. Le tonnerre dans le Coran est un signe de puissance divine — il peut effrayer les incrédules et émerveiller les croyants.",
              axe5_frequence: "Pour la mission du khalifa, le tonnerre représente l'avertissement sonore — un bruit qui secoue. Le khalifa doit faire tonner la vérité même si elle effraie. Le tonnerre est un rappel de la puissance de Dieu."
            },
            "Tremblement/Peur": {
              status: "nul",
              proof_ctx: "Le tremblement est la réaction corporelle au tonnerre. Le texte nomme le tonnerre lui-même (raʿd), pas la réaction des personnes (raʿda). Le geste de se boucher les oreilles est déjà décrit explicitement."
            }
          }
        }
      },
      {
        word_key: "brq", position: 8, sense_chosen: "éclair",
        analysis_axes: {
          concept_chosen: "Éclair/Éclat",
          concepts: {
            "Éclair/Éclat": {
              status: "retenu",
              proof_ctx: "Le mot barqun est un nom masculin indéfini au nominatif de b-r-q. D'après les sources étymologiques, b-r-q signifie « briller soudainement, jaillir en lumière, éclater ». Le barq est l'éclair — une lumière intense et brève qui déchire les ténèbres puis disparaît. L'éclair est le troisième élément de la tempête et le seul qui donne de la lumière. Mais cette lumière est éphémère — elle révèle un instant puis replonge dans l'obscurité. La distinction avec « Écarquiller les yeux » (baraqa) : ce sens isolé est lié au fait que l'éclair fait écarquiller les yeux, mais le contexte est le phénomène naturel.",
              axe1_verset: "L'éclair complète la trinité de la tempête : ténèbres (fond permanent), tonnerre (agression auditive), éclair (lumière fugitive). L'éclair est paradoxal — il donne de la lumière mais elle ne dure pas. Dans les ténèbres permanentes, l'éclair est le seul espoir de voir, mais il est si bref qu'il aveugle plus qu'il n'éclaire. Le verset 20 développera cette idée : l'éclair est sur le point d'arracher leurs vues.",
              axe2_voisins: "Le verset 17 parlait d'un feu qui éclaire autour d'eux puis s'éteint. L'éclair du verset 19 est la version naturelle de ce feu artificiel — une lumière brève puis l'obscurité. Les deux paraboles partagent le même schéma : lumière temporaire → obscurité permanente. La deuxième parabole (pluie + éclair) est plus violente que la première (feu).",
              axe3_sourate: "L'éclair revient au verset 20 comme élément central — il est sur le point d'arracher leurs vues, et quand il éclaire ils marchent, quand il s'éteint ils s'arrêtent. La sourate développe la métaphore de l'éclair sur deux versets (19-20). L'éclair est la métaphore de la révélation pour les hypocrites : une lumière qu'ils entrevoient mais qui ne dure pas.",
              axe4_coherence: "Le Coran mentionne le barq en 2:19-20, 13:12, 24:43, 30:24. En 24:43, l'éclair dans les nuages est un signe de Dieu. En 30:24, l'éclair provoque la peur et l'espoir. L'éclair est toujours ambivalent dans le Coran — il illumine et il effraie.",
              axe5_frequence: "Pour la mission du khalifa, l'éclair est la vérité qui jaillit brièvement — elle peut être saisie ou manquée. Le khalifa doit être prêt à agir dans la lumière de l'éclair avant que l'obscurité ne revienne. La mission exige la vigilance et la rapidité."
            }
          }
        }
      },
      {
        word_key: "jel", position: 9, sense_chosen: "placer",
        analysis_axes: {
          concept_chosen: "Action/Réalisation",
          concepts: {
            "Action/Réalisation": {
              status: "retenu",
              proof_ctx: "Le verbe yajʿalūna est un inaccompli de forme I de j-ʿ-l à la troisième personne du masculin pluriel. D'après les sources étymologiques, j-ʿ-l signifie « faire, placer, rendre, établir ». Le sens premier est l'action de mettre quelque chose quelque part — placer. L'inaccompli indique une action en cours ou habituelle : ils placent continuellement leurs doigts dans leurs oreilles. La distinction avec le sens « créer » : la création est un sens dérivé de jaʿala utilisé pour Dieu, mais ici le sujet est humain et le geste est physique.",
              axe1_verset: "Le verbe yajʿalūna introduit la réaction humaine face à la tempête. Après la description de l'orage (ténèbres, tonnerre, éclair), le verset montre ce que les personnages font : ils placent. C'est un geste défensif — ils placent leurs doigts dans leurs oreilles pour se protéger du bruit. L'inaccompli souligne la continuité : tant que dure la tempête, ils continuent de placer leurs doigts. Le geste est futile — des doigts dans les oreilles ne protègent pas de la foudre.",
              axe2_voisins: "Le verset 17 montrait des personnages passifs (Dieu emporte leur lumière et les laisse dans les ténèbres). Le verset 19 les montre actifs mais de façon dérisoire — ils se bouchent les oreilles. Leur action est une réaction de survie qui ne résout rien. Les hypocrites agissent mais de façon inefficace.",
              axe3_sourate: "La racine j-ʿ-l est très fréquente dans al-Baqarah (2:22, 2:30, 2:143). En 2:30, Dieu dit « je vais placer (jāʿil) un khalifa sur terre ». Le même verbe est utilisé pour l'acte divin de placement et pour le geste dérisoire des hypocrites — le contraste est saisissant.",
              axe4_coherence: "Le Coran utilise jaʿala des centaines de fois. Le sens de « placer » est le plus fréquent quand le complément est un objet physique dans un lieu. Le geste de placer les doigts dans les oreilles est décrit uniquement ici — c'est un geste unique dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, l'action est essentielle — mais l'action doit être appropriée. Les hypocrites agissent (yajʿalūna) mais leur action est dérisoire. Le khalifa doit agir efficacement, pas juste agir."
            }
          }
        }
      },
      {
        word_key: "sbe", position: 10, sense_chosen: "doigts",
        analysis_axes: {
          concept_chosen: "Désignation/Pointage",
          concepts: {
            "Désignation/Pointage": {
              status: "retenu",
              proof_ctx: "Le mot asābiʿahum est le pluriel de isbʿ (doigt) avec suffixe possessif -hum (leurs), de la racine s-b-ʿ. D'après les sources étymologiques, s-b-ʿ a un lien avec le fait de pointer, de désigner. Le doigt est l'instrument de la désignation — on pointe du doigt pour montrer, pour accuser, pour indiquer. Ici, les doigts sont utilisés de façon défensive — non pas pour pointer mais pour boucher. C'est un détournement de la fonction naturelle du doigt : au lieu de désigner la vérité, ils bouchent le canal de réception.",
              axe1_verset: "Les doigts sont l'instrument du geste défensif — les personnages les enfoncent dans leurs oreilles. Le détail anatomique est précis : ce sont les doigts (pas les mains) dans les oreilles (pas sur la tête). Le texte insiste sur la précision du geste. Les doigts, qui servent normalement à pointer et désigner, sont retournés contre leur fonction — au lieu de montrer le chemin, ils bouchent l'audition.",
              axe2_voisins: "Le verset 17 ne mentionnait aucun geste corporel. Le verset 19 introduit un geste physique détaillé — c'est la première fois dans cette série que les hypocrites font quelque chose avec leur corps. Le geste de se boucher les oreilles avec les doigts est une image forte d'auto-isolement.",
              axe3_sourate: "Les doigts ne sont mentionnés qu'ici dans la sourate al-Baqarah. Ce détail anatomique est rare dans le Coran — il rend la scène vivante et concrète. La parabole n'est pas abstraite, elle montre des personnes réelles qui se bouchent les oreilles avec leurs doigts.",
              axe4_coherence: "Le Coran mentionne les doigts (asābiʿ) en 2:19, 8:12, 71:7. En 71:7, le peuple de Noé met ses doigts dans ses oreilles — exactement le même geste que dans 2:19. La répétition du geste entre Noé et cette parabole relie les hypocrites aux peuples anciens qui refusaient d'écouter.",
              axe5_frequence: "Pour la mission du khalifa, les doigts sont les outils de l'action concrète — écrire, construire, désigner. Les utiliser pour se boucher les oreilles est un gâchis de potentiel. Le khalifa utilise ses doigts pour agir, pas pour s'isoler."
            }
          }
        }
      },
      {
        word_key: "adhn", position: 12, sense_chosen: "oreilles",
        analysis_axes: {
          concept_chosen: "Écoute/Oreille",
          concepts: {
            "Écoute/Oreille": {
              status: "retenu",
              proof_ctx: "Le mot ādhānihim est le pluriel de udhun (oreille) avec suffixe -him (leurs), de la racine a-dh-n. D'après les sources étymologiques, a-dh-n signifie « écouter, prêter l'oreille, permettre ». L'oreille (udhun) est l'organe de l'écoute — le canal physique par lequel les sons parviennent. La distinction avec samʿ (audition, v7) : le samʿ est la faculté, l'udhun est l'organe. Les hypocrites bouchent l'organe (udhun) pour bloquer la faculté (samʿ). La distinction avec « Permission/Autorisation » (idhn) : la permission est un sens dérivé de a-dh-n (donner l'oreille = autoriser), mais ici c'est l'organe physique.",
              axe1_verset: "Les oreilles sont la cible du geste défensif — les doigts y sont enfoncés. Le verset insiste sur le canal physique de l'écoute : les oreilles reçoivent le tonnerre, et les personnages les bouchent. L'oreille est le point faible — c'est par là que le bruit entre et effraie. Boucher les oreilles est un geste instinctif de survie face au bruit excessif, mais dans le contexte de la parabole, c'est aussi un refus symbolique d'écouter.",
              axe2_voisins: "Le verset 7 parlait du scellement de l'audition (samʿ). Le verset 19 montre les hypocrites qui se scellent eux-mêmes les oreilles — ils font volontairement ce que Dieu fait aux recouvrants du verset 7. L'auto-blocage de l'écoute est le pendant humain du scellement divin.",
              axe3_sourate: "Les oreilles sont mentionnées ici et en 2:7 (implicitement, via le samʿ). La sourate insiste sur l'audition comme canal de réception de la direction — ceux qui bouchent ce canal se coupent de la vérité.",
              axe4_coherence: "Le Coran mentionne les oreilles en 2:19, 71:7. En 71:7, le peuple de Noé se couvre de vêtements, persiste, et met ses doigts dans ses oreilles. Le parallèle avec 2:19 est frappant — le même geste, le même refus d'écouter, à des siècles d'intervalle.",
              axe5_frequence: "Pour la mission du khalifa, les oreilles sont le premier canal de réception. Le khalifa doit garder ses oreilles ouvertes — même quand le tonnerre gronde, il doit écouter pour discerner la direction. Se boucher les oreilles est l'anti-thèse de la mission."
            },
            "Permission/Autorisation": {
              status: "nul",
              proof_ctx: "La permission (idhn) est un sens dérivé de a-dh-n. Le contexte est l'organe physique de l'oreille, pas l'acte de permettre."
            },
            "Annonce/Avertissement": {
              status: "nul",
              proof_ctx: "L'annonce (adhān) est un autre dérivé de a-dh-n. Le verset parle d'oreilles physiques, pas d'annonces."
            }
          }
        }
      },
      {
        word_key: "seq", position: 14, sense_chosen: "foudres",
        analysis_axes: {
          concept_chosen: "Foudre/Anéantissement",
          concepts: {
            "Foudre/Anéantissement": {
              status: "retenu",
              proof_ctx: "Le mot al-sawāʿiqi est le pluriel de sāʿiqa, un nom féminin défini au génitif de s-ʿ-q. D'après les sources étymologiques, s-ʿ-q signifie « foudroyer, terrasser, perdre connaissance sous l'effet d'un choc violent ». La sāʿiqa est la foudre — le coup dévastateur qui vient du ciel et qui anéantit ce qu'il touche. Le pluriel indique des foudres multiples — la tempête frappe de tous côtés. L'article défini al- rend les foudres connues et spécifiques — celles de cet orage précis.",
              axe1_verset: "Les foudres sont la cause immédiate du geste de se boucher les oreilles (mina al-sawāʿiqi = à cause des foudres). La construction est : ils mettent leurs doigts dans leurs oreilles à cause des foudres, par précaution de la mort. Les foudres sont le danger qui motive la précaution. Elles combinent le visuel (l'éclair) et le sonore (le tonnerre) en un seul phénomène destructeur. La foudre est ce qui peut tuer — d'où la précaution face à la mort.",
              axe2_voisins: "Le verset 17 parlait de perte de lumière — un danger visuel. Le verset 19 parle de foudres — un danger mortel. L'escalade est claire : du verset 17 (perte de lumière) au verset 19 (menace de mort). La situation des hypocrites s'aggrave d'une parabole à l'autre.",
              axe3_sourate: "La foudre est mentionnée dans cette parabole et nulle part ailleurs dans la sourate al-Baqarah. C'est un élément spécifique à cette image de tempête. La rareté du mot le rend plus percutant.",
              axe4_coherence: "Le Coran mentionne la sāʿiqa en 2:19, 2:55, 4:153, 41:13, 51:44. En 2:55, le peuple de Moïse demande à voir Dieu et la foudre les saisit. En 41:13, les peuples de Ad et Thamoud sont avertis d'une foudre semblable. La foudre est un châtiment récurrent dans le Coran pour les peuples qui refusent la direction.",
              axe5_frequence: "Pour la mission du khalifa, la foudre est le rappel de la puissance divine — un coup instantané qui peut tout changer. Le khalifa doit agir avec la conscience que la foudre peut frapper à tout moment — la mission est urgente."
            }
          }
        }
      },
      {
        word_key: "hḏr", position: 15, sense_chosen: "précaution",
        analysis_axes: {
          concept_chosen: "Prudence/Vigilance",
          concepts: {
            "Prudence/Vigilance": {
              status: "retenu",
              proof_ctx: "Le mot hadhara est un nom masculin au cas accusatif (maṣdar ou complément de cause) de la racine h-dh-r. D'après les sources étymologiques, h-dh-r signifie « prendre garde, être prudent, se prémunir contre un danger ». Le mot hadhara exprime le motif du geste : c'est la précaution qui les pousse à se boucher les oreilles. La construction hadhara al-mawti (par précaution de la mort) est un complément de cause — ils font ce geste PAR précaution face à la mort. La distinction avec la peur (khawf) : la peur est un état intérieur, la précaution est une action préventive. Ils ne sont pas juste effrayés — ils prennent des mesures.",
              axe1_verset: "La précaution est le motif explicite du geste des doigts dans les oreilles. Le verset donne la chaîne causale complète : foudres → précaution → geste (doigts dans oreilles). La précaution montre que les personnages sont rationnels — ils analysent le danger et agissent en conséquence. Mais leur action est insuffisante : des doigts dans les oreilles ne protègent pas de la foudre. La précaution est réelle mais la protection est illusoire.",
              axe2_voisins: "Le verset 17 ne mentionnait aucune réaction des personnages face à la perte de lumière — ils étaient passifs. Le verset 19 les montre actifs et prudents — mais leur prudence est mal dirigée. La progression est : passivité (v17) → prudence inefficace (v19). Le verset 20 montrera une autre forme d'action : marcher quand l'éclair éclaire, s'arrêter quand il s'éteint.",
              axe3_sourate: "La précaution est un thème implicite de la sourate. Les muttaqīn (v2) sont ceux qui se prémunissent — le mot taqwā a la même idée de protection préventive. Les hypocrites du verset 19 pratiquent aussi une forme de précaution, mais orientée vers la survie physique plutôt que vers la préservation spirituelle.",
              axe4_coherence: "Le Coran utilise la racine h-dh-r en 2:19, 2:235, 4:71, 4:102, 9:64, 63:4. En 4:71, les croyants sont appelés à prendre leurs précautions (khuddhū hidhrakum). La précaution est une qualité positive quand elle est dirigée vers la bonne protection — ici elle est dirigée vers un danger physique réel mais la méthode (doigts dans les oreilles) est dérisoire.",
              axe5_frequence: "Pour la mission du khalifa, la précaution est nécessaire mais doit être proportionnée au danger. Le khalifa prend des précautions réelles — il ne se contente pas de gestes symboliques. La différence entre le khalifa et les hypocrites est la pertinence de leur précaution."
            }
          }
        }
      },
      {
        word_key: "mwt", position: 16, sense_chosen: "mort",
        analysis_axes: {
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              proof_ctx: "Le mot al-mawti est un nom masculin défini au génitif de m-w-t. D'après les sources étymologiques, m-w-t signifie « mourir, cesser de vivre, s'éteindre ». Le mawt est la cessation de la vie — la fin de l'existence terrestre. L'article défini al- rend la mort générique et absolue — pas une mort particulière, mais LA mort comme concept. La construction hadhara al-mawti (par précaution de la mort) fait de la mort l'objet ultime de la crainte — c'est le pire scénario que les personnages veulent éviter.",
              axe1_verset: "La mort est le dernier mot de la chaîne causale : foudres → précaution → mort. C'est l'aboutissement logique du danger. La mort est ce qui rend la tempête terrifiante — sans la menace de mort, le tonnerre et l'éclair ne seraient que du spectacle. La mort donne à la scène son urgence. Les personnages mettent leurs doigts dans leurs oreilles par précaution de la mort — la mort est le mobile de leur geste.",
              axe2_voisins: "Le verset 17 parlait de perte de lumière — une mort symbolique (la mort de la vision). Le verset 19 parle de la mort réelle — la cessation physique de la vie. L'escalade continue : perte de lumière → perte de vie. Pour les hypocrites, la peur de la mort physique est plus forte que la perte de la lumière spirituelle.",
              axe3_sourate: "La mort est un thème majeur de la sourate al-Baqarah (2:19, 2:28, 2:56, 2:94, 2:116, 2:132, 2:180, 2:243). En 2:28, Dieu dit « vous étiez morts et Il vous a fait vivre, puis Il vous fait mourir et vous fera revivre ». La mort n'est pas la fin — elle est un passage. Mais les hypocrites ne voient que la mort physique.",
              axe4_coherence: "Le Coran utilise mawt plus de 160 fois. La mort est tantôt une menace (2:19), tantôt une réalité inévitable (3:185), tantôt un passage vers la vie suivante (2:28). Dans la parabole, la mort est ce que les hypocrites craignent le plus — mais paradoxalement, en se bouchant les oreilles face à la direction, ils se condamnent à une mort spirituelle.",
              axe5_frequence: "Pour la mission du khalifa, la mort est le rappel de l'urgence — la vie terrestre est limitée et la mission doit être accomplie avant la mort. La peur de la mort physique ne doit pas empêcher l'écoute de la direction. Le khalifa affronte la tempête sans se boucher les oreilles."
            }
          }
        }
      },
      {
        word_key: "alh", position: 18, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              proof_ctx: "Le mot allāhu est le nom propre de la divinité unique, au nominatif (sujet de la phrase nominale). La racine a-l-h désigne la divinité — celui vers qui on se tourne, celui en qui on cherche refuge. Le nom allāh est défini — il n'y a qu'une seule divinité. Dans la phrase wa allāhu muhītun bil-kāfirīna, Dieu est le sujet et muhīt (celui qui entoure) est l'attribut. La phrase nominale exprime un état permanent : Dieu entoure les recouvrants — ce n'est pas un acte ponctuel mais une réalité constante.",
              axe1_verset: "Le nom de Dieu arrive après la description de la tempête et du geste humain. La structure est : description de la tempête → réaction des hypocrites → affirmation divine. Dieu est nommé à la fin pour rappeler que malgré la tempête et la panique des personnages, c'est Lui qui a le contrôle total. Ils se bouchent les oreilles par précaution, mais Dieu les entoure de toutes parts — leur précaution est vaine.",
              axe2_voisins: "Le verset 17 disait « Dieu a emporté leur lumière ». Le verset 19 dit « Dieu entoure les recouvrants ». Le rôle de Dieu évolue : dans la première parabole Il agit (emporter), dans la seconde Il est (entourer). L'action ponctuelle devient un état permanent.",
              axe3_sourate: "Le nom allāh est le mot le plus fréquent de la sourate al-Baqarah. Chaque scène revient à Dieu — Il est l'ancrage constant de la sourate.",
              axe4_coherence: "Le Coran mentionne le nom allāh plus de 2600 fois. Il est le point de référence absolu du texte — tout revient à Lui.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source de la mission elle-même. Le khalifa est le représentant de Dieu sur terre (2:30). La mention de Dieu à la fin du verset rappelle que c'est Lui qui entoure tous les acteurs de la scène."
            }
          }
        }
      },
      {
        word_key: "hwt", position: 19, sense_chosen: "entourer",
        analysis_axes: {
          concept_chosen: "Protection/Encerclement",
          concepts: {
            "Protection/Encerclement": {
              status: "retenu",
              proof_ctx: "Le mot muhītun est un participe actif masculin singulier de forme IV de h-w-t. D'après les sources étymologiques, h-w-t signifie « entourer, encercler, garder, protéger, englober ». La forme IV (ahāta) intensifie le sens : entourer complètement. Le participe actif muhīt signifie « celui qui entoure activement, en permanence ». La phrase wa allāhu muhītun bil-kāfirīna signifie que Dieu entoure les recouvrants — ils sont encerclés, ils ne peuvent pas échapper. L'encerclement est total et permanent (participe actif = état continu).",
              axe1_verset: "L'encerclement divin conclut le verset comme un sceau. Les hypocrites se bouchent les oreilles par précaution de la mort, mais Dieu les entoure de toutes parts. Leur geste de protection est dérisoire face à l'englobement divin. La tempête les effraie, mais le vrai pouvoir est celui de Dieu qui les englobe. L'image est celle d'une bulle : à l'intérieur, les personnages paniquent ; à l'extérieur, Dieu contrôle tout.",
              axe2_voisins: "Le verset 17 se terminait par « ils ne voient pas ». Le verset 19 se termine par « Dieu entoure les recouvrants ». La fin du verset 17 décrivait l'état des hypocrites (aveuglement). La fin du verset 19 décrit le pouvoir de Dieu (encerclement). Le point de vue passe de la perspective humaine à la perspective divine.",
              axe3_sourate: "Le verbe ahāta revient dans al-Baqarah en 2:19 et implicitement dans d'autres contextes de puissance divine. L'idée d'englobement divin est fondamentale dans la sourate — Dieu connaît tout, voit tout, entoure tout.",
              axe4_coherence: "Le Coran utilise muhīt en 2:19, 3:120, 4:108, 8:47, 11:84, 41:54, 85:20. En 4:108, Dieu entoure ce que les hypocrites cachent. En 41:54, Dieu entoure toute chose. L'englobement divin est un thème récurrent — rien n'échappe à Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'englobement divin est un rappel que rien n'échappe à Dieu. Le khalifa agit sous le regard de Dieu qui l'entoure lui aussi. L'encerclement n'est pas seulement pour les recouvrants — Dieu entoure toute la création."
            }
          }
        }
      },
      {
        word_key: "kfr", position: 21, sense_chosen: "recouvrants",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              proof_ctx: "Le mot al-kāfirīna est le participe actif masculin pluriel de forme I de k-f-r, avec l'article défini al-. D'après les sources étymologiques, k-f-r signifie « couvrir, recouvrir, cacher, dissimuler ». Le kāfir est celui qui recouvre — activement, continuellement (participe actif). L'article défini les rend connus — ce sont les recouvrants déjà mentionnés. Le verset dit que Dieu entoure les recouvrants — ceux qui recouvrent la vérité sont eux-mêmes englобés par Dieu.",
              axe1_verset: "Les recouvrants ferment le verset comme les ténèbres l'ouvraient. La structure est circulaire : ténèbres (début) → recouvrants (fin). Le recouvrement est lié aux ténèbres — ceux qui couvrent la vérité vivent dans l'obscurité. Dieu entoure ces recouvrants — ils sont eux-mêmes couverts par la puissance divine. L'ironie est forte : ceux qui recouvrent sont recouverts.",
              axe2_voisins: "Le verset 6 introduisait les recouvrants (alladhīna kafarū). Le verset 19 les mentionne à la fin comme complément de l'englobement divin. Les paraboles des versets 17-20 concernent les hypocrites (v8-16), mais le verset 19 les relie aux recouvrants — les deux groupes partagent le même destin.",
              axe3_sourate: "La racine k-f-r est omniprésente dans al-Baqarah. Le recouvrement est le thème négatif central — il est l'opposé de la taqwā (préservation). Les recouvrants sont mentionnés dans chaque section de la sourate.",
              axe4_coherence: "Le Coran utilise kāfirīna des centaines de fois. La construction allāhu muhītun bil-kāfirīna est une expression qui combine la puissance divine et l'échec du recouvrement — on ne peut pas recouvrir ce que Dieu englobe.",
              axe5_frequence: "Pour la mission du khalifa, les recouvrants sont l'obstacle principal. Mais le verset rappelle que Dieu les entoure — le khalifa n'est pas seul face au recouvrement. La puissance divine englobe tout, y compris les recouvrants."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              proof_ctx: "Le rejet est un sens dérivé de k-f-r — celui qui recouvre les bienfaits les rejette. La nuance est maintenue comme au verset 6 : le recouvrement est l'acte premier, le rejet en est la conséquence.",
              axe1_verset: "Le rejet est compatible avec le contexte — les recouvrants rejettent la direction. Mais le participe actif kāfir pointe vers l'acte de couvrir, pas l'acte de rejeter.",
              axe2_voisins: "Même analyse qu'au verset 6 — le contexte soutient le sens de couverture plutôt que de rejet.",
              axe3_sourate: "La sourate distingue le recouvrement du rejet dans l'usage des racines.",
              axe4_coherence: "Le Coran choisit kafara plutôt que radda (rejeter) — le mot est délibéré.",
              axe5_frequence: "Le rejet empêche la mission mais le recouvrement est plus profond."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:20 — يَكَادُ ٱلْبَرْقُ يَخْطَفُ أَبْصَٰرَهُمْ كُلَّمَآ أَضَآءَ لَهُم مَّشَوْا۟ فِيهِ وَإِذَآ أَظْلَمَ عَلَيْهِمْ قَامُوا۟ وَلَوْ شَآءَ ٱللَّهُ لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَٰرِهِمْ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
  // verse_id=27, analysis_id=387
  // =====================================================
  20: {
    verse_id: 27,
    analysis_id: 387,
    translation_arab: "L'éclair est sur le point d'arracher leurs vues — chaque fois qu'il éclaire pour eux, ils marchent dedans, et quand il s'obscurcit sur eux, ils s'arrêtent — et si Dieu avait voulu, Il aurait emporté leur audition et leurs vues — en vérité, Dieu est sur toute chose puissant.",
    full_translation: "L'éclair presque leur ôte la vue ; chaque fois qu'il les éclaire, ils avancent ; et quand l'obscurité tombe sur eux, ils s'arrêtent. Si Allah voulait, Il leur enlèverait l'ouïe et la vue, car Allah a pouvoir sur toute chose.",
    translation_explanation: `§DEMARCHE§
Le verset développe l'image de l'éclair introduite au verset 19. Le verbe **yakādu** (il est sur le point de) est un inaccompli de k-w-d (être proche de, faillir). L'éclair **al-barqu** est sur le point d'arracher (**yakhtafu**, inaccompli de kh-t-f = saisir rapidement, arracher) leurs vues (**absārahum**, pluriel de basar, la perception visuelle). La construction yakādu + inaccompli exprime l'imminence : c'est presque fait mais pas encore — l'éclair est si intense qu'il est sur le point de détruire leur vision. Le mot **kullamā** (chaque fois que) introduit une alternance : **adāʾa** (il éclaire, accompli forme IV de d-w-ʾ = donner de la lumière) est suivi de **mashaw** (ils marchent, accompli de m-sh-y = marcher). La conjonction **wa idhā** (et quand) introduit l'alternative : **azlama** (il s'obscurcit, accompli forme IV de z-l-m = devenir obscur) est suivi de **qāmū** (ils s'arrêtent, accompli de q-w-m = se dresser, se tenir debout). La forme IV de z-l-m (azlama) signifie « devenir obscur » — le sujet est la nuit ou l'environnement. La conditionnelle **wa law shāʾa allāhu** (et si Dieu avait voulu) introduit l'hypothétique : **la-dhahaba** (il aurait emporté, accompli avec lam du conditionnel, de dh-h-b = partir, emporter) **bi-samʿihim** (leur audition) **wa absārihim** (et leurs vues). Le verbe dhahaba bi- signifie « emporter avec soi ». Le verset conclut par une phrase emphatique : **inna allāha ʿalā kulli shayʾin qadīrun** — en vérité Dieu est sur toute chose puissant. Le mot **qadīr** vient de q-d-r (pouvoir, mesurer) — c'est celui qui a la puissance et la capacité.

§JUSTIFICATION§
**est sur le point de** — Le sens retenu est « Imminence/Proximité ». Le verbe yakādu traduit le fait d'être très proche de quelque chose sans l'atteindre — l'éclair PRESQUE arrache les vues.

**l'éclair** — Même sens retenu qu'au verset 19 (Éclair/Éclat). Ici l'éclair est défini (al-barq) — c'est l'éclair déjà mentionné.

**arrache** — Le sens retenu est « Saisissement/Arrachement ». Le verbe yakhtafu traduit l'idée de saisir rapidement et violemment — l'éclair arrache les vues par sa violence lumineuse.

**vues** — Le sens retenu est « Vision/Perception ». Le mot absār traduit les perceptions visuelles — l'éclair attaque leur capacité de voir.

**éclaire** — Le sens retenu est « Lumière/Éclairage ». Le verbe adāʾa (forme IV de d-w-ʾ) traduit le fait de donner de la lumière — l'éclair illumine leur chemin.

**marchent** — Le sens retenu est « Marche/Déplacement ». Le verbe mashaw traduit le déplacement à pied — quand il y a de la lumière, ils avancent.

**s'obscurcit** — Le sens retenu est « Obscurité/Ténèbres ». Le verbe azlama (forme IV de z-l-m) traduit le fait de devenir obscur — quand la lumière de l'éclair disparaît.

**s'arrêtent** — Le sens retenu est « Verticalité/Droiture ». Le verbe qāmū traduit le fait de se tenir debout, de s'arrêter sur place — quand l'obscurité revient, ils se figent.

**voulu** — Le sens retenu est « Volonté ». Le verbe shāʾa traduit l'acte de vouloir — la volonté divine.

**Dieu** — Même sens retenu (Divinité). Mentionné deux fois dans le verset.

**emporté** — Le sens retenu est « Départ/Mouvement ». Le verbe dhahaba bi- traduit le fait d'emporter avec soi — Dieu aurait emporté leur audition.

**audition** — Le sens retenu est « Audition/Écoute ». Le mot samʿ traduit la faculté d'entendre.

**vues** — Même sens retenu (Vision/Perception). Deuxième occurrence de absār dans le verset.

**toute** — Le mot kulli exprime la totalité — il couvre tout sans exception.

**chose** — Le mot shayʾ traduit une chose, un être, une entité quelconque.

**puissant** — Le sens retenu est « Puissance/Capacité ». Le mot qadīr traduit celui qui a le pouvoir — Dieu est capable de toute chose.

§CRITIQUE§
**presque leur ôte la vue vs est sur le point d'arracher leurs vues** — Hamidullah traduit yakādu par « presque » et yakhtafu par « ôte ». Le verbe yakhtafu n'est pas « ôter » (enlever doucement) mais « arracher » (saisir violemment). Le khatf est un arrachement rapide et brutal — comme un rapace qui saisit sa proie. L'éclair n'ôte pas gentiment la vue — il l'arrache par sa violence lumineuse. Et « presque » est moins précis que « sur le point de » — yakādu exprime l'imminence, pas juste l'approximation.

**ils avancent vs ils marchent** — Hamidullah traduit mashaw par « ils avancent ». Le verbe m-sh-y signifie spécifiquement « marcher à pied, se déplacer en marchant ». « Avancer » est plus vague — on peut avancer en voiture, en pensée. Le texte dit qu'ils marchent (mashaʿ) — c'est un déplacement physique à pied, lent et hésitant, dans la lumière intermittente.

**Si Allah voulait vs Si Dieu avait voulu** — Hamidullah utilise le conditionnel présent (« voulait »). Le texte arabe utilise l'accompli (shāʾa) avec law — c'est un irréel du passé : « s'Il avait voulu ». La nuance est que Dieu n'a PAS voulu — il a choisi de leur laisser l'audition et la vue. C'est un choix divin, pas une hypothèse ouverte.

**car Allah a pouvoir vs en vérité Dieu est puissant** — « Car » (parce que) transforme la dernière phrase en explication. Le texte dit « inna » (en vérité) — c'est une affirmation emphatique indépendante, pas une explication causale.`,
    segments: [
      { fr: "est sur le point de", pos: "verbe", phon: "yakādu", arabic: "يَكَادُ", word_key: "kwd", is_particle: false, sense_retenu: "imminence", position: 1 },
      { fr: "l'éclair", pos: "nom", phon: "al-barqu", arabic: "ٱلْبَرْقُ", word_key: "brq", is_particle: false, sense_retenu: "éclair", position: 2 },
      { fr: "arrache", pos: "verbe", phon: "yakhtafu", arabic: "يَخْطَفُ", word_key: "xtf", is_particle: false, sense_retenu: "arracher", position: 3 },
      { fr: "leurs vues", pos: "nom", phon: "absārahum", arabic: "أَبْصَٰرَهُمْ", word_key: "bsr", is_particle: false, sense_retenu: "vues", position: 4 },
      { fr: "chaque fois que", phon: "kullamā", arabic: "كُلَّمَآ", is_particle: true, position: 5 },
      { fr: "éclaire", pos: "verbe", phon: "adāʾa", arabic: "أَضَآءَ", word_key: "dwa", is_particle: false, sense_retenu: "éclairer", position: 6 },
      { fr: "pour eux", phon: "lahum", arabic: "لَهُم", is_particle: true, position: 7 },
      { fr: "ils marchent", pos: "verbe", phon: "mashaw", arabic: "مَّشَوْا۟", word_key: "mshy", is_particle: false, sense_retenu: "marcher", position: 8 },
      { fr: "dedans", phon: "fīhi", arabic: "فِيهِ", is_particle: true, position: 9 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 10 },
      { fr: "quand", phon: "idhā", arabic: "إِذَآ", is_particle: true, position: 11 },
      { fr: "s'obscurcit", pos: "verbe", phon: "azlama", arabic: "أَظْلَمَ", word_key: "zlm", is_particle: false, sense_retenu: "s'obscurcir", position: 12 },
      { fr: "sur eux", phon: "ʿalayhim", arabic: "عَلَيْهِمْ", is_particle: true, position: 13 },
      { fr: "ils s'arrêtent", pos: "verbe", phon: "qāmū", arabic: "قَامُوا۟", word_key: "qwm", is_particle: false, sense_retenu: "s'arrêter", position: 14 },
      { fr: "et si", phon: "wa law", arabic: "وَلَوْ", is_particle: true, position: 15 },
      { fr: "a voulu", pos: "verbe", phon: "shāʾa", arabic: "شَآءَ", word_key: "shy", is_particle: false, sense_retenu: "vouloir", position: 16 },
      { fr: "Dieu", pos: "nom", phon: "allāhu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 17 },
      { fr: "aurait emporté", pos: "verbe", phon: "la-dhahaba", arabic: "لَذَهَبَ", word_key: "dhb", is_particle: false, sense_retenu: "emporter", position: 18 },
      { fr: "leur audition", pos: "nom", phon: "bi-samʿihim", arabic: "بِسَمْعِهِمْ", word_key: "sme", is_particle: false, sense_retenu: "audition", position: 19 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 20 },
      { fr: "leurs vues", pos: "nom", phon: "absārihim", arabic: "أَبْصَٰرِهِمْ", word_key: "bsr", is_particle: false, sense_retenu: "vues", position: 21 },
      { fr: "en vérité", phon: "inna", arabic: "إِنَّ", is_particle: true, position: 22 },
      { fr: "Dieu", pos: "nom", phon: "allāha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 23 },
      { fr: "sur", phon: "ʿalā", arabic: "عَلَىٰ", is_particle: true, position: 24 },
      { fr: "toute", pos: "nom", phon: "kulli", arabic: "كُلِّ", word_key: "kll", is_particle: false, sense_retenu: "totalité", position: 25 },
      { fr: "chose", pos: "nom", phon: "shayʾin", arabic: "شَيْءٍ", word_key: "shy", is_particle: false, sense_retenu: "chose", position: 26 },
      { fr: "puissant", pos: "nom", phon: "qadīrun", arabic: "قَدِيرٌ", word_key: "qdr", is_particle: false, sense_retenu: "puissant", position: 27 }
    ],
    words: [
      {
        word_key: "kwd", position: 1, sense_chosen: "imminence",
        analysis_axes: {
          concept_chosen: "Imminence/Proximité",
          concepts: {
            "Imminence/Proximité": {
              status: "retenu",
              proof_ctx: "Le verbe yakādu est un inaccompli de forme I de k-w-d. D'après les sources étymologiques, k-w-d signifie « être sur le point de, faillir, presque ». Le verbe exprime l'imminence — quelque chose qui est très proche de se produire sans se produire effectivement. La construction yakādu al-barqu yakhtafu signifie que l'éclair est sur le point d'arracher — c'est presque fait mais pas encore. L'inaccompli yakādu indique que cet état d'imminence se répète : à chaque flash de l'éclair, la vision est presque arrachée.",
              axe1_verset: "L'imminence ouvre le verset et donne le ton : tout est « presque ». L'éclair est presque arracheur de vues. L'éclairage est presque suffisant pour marcher. L'obscurité est presque totale. Les hypocrites sont dans un état permanent de « presque » — presque dans la lumière, presque dans l'obscurité, presque vivants, presque morts. Le mot yakādu capture cette condition intermédiaire qui est le propre de l'hypocrisie.",
              axe2_voisins: "Le verset 19 décrivait la tempête et la réaction de panique. Le verset 20 analyse les effets de l'éclair sur leur perception. L'imminence du verset 20 est plus subtile que la violence du verset 19 — on passe de la tempête brute à l'analyse fine de ses effets sur la vision et le déplacement.",
              axe3_sourate: "Le verbe kāda est utilisé dans al-Baqarah uniquement ici. Cette rareté rend le mot plus percutant — l'imminence est un concept qui caractérise spécifiquement la condition des hypocrites dans cette parabole.",
              axe4_coherence: "Le Coran utilise kāda en 2:20, 2:71, 14:17, 18:73, 22:72, 42:5. En 14:17, le réprouvé essaie d'avaler l'eau mais il ne peut presque pas — le même état d'imminence non réalisée. En 42:5, les cieux sont presque fendus — encore l'imminence d'un événement terrible.",
              axe5_frequence: "Pour la mission du khalifa, l'imminence est un rappel que la situation peut basculer à tout moment. Le khalifa doit agir avant que l'imminence ne se réalise — avant que la vue ne soit arrachée, avant que l'obscurité ne soit totale."
            }
          }
        }
      },
      {
        word_key: "brq", position: 2, sense_chosen: "éclair",
        analysis_axes: {
          concept_chosen: "Éclair/Éclat",
          concepts: {
            "Éclair/Éclat": {
              status: "retenu",
              proof_ctx: "Le mot al-barqu est un nom masculin défini au nominatif de b-r-q. D'après les sources étymologiques, b-r-q signifie « briller soudainement, jaillir en lumière ». Le barq est l'éclair — une lumière intense et brève. L'article défini al- renvoie à l'éclair déjà mentionné au verset 19. Cet éclair est maintenant le sujet actif du verset — il est presque arracheur de vues, il éclaire puis s'éteint. L'éclair passe de décor (v19) à acteur principal (v20).",
              axe1_verset: "L'éclair est le sujet grammatical de la première proposition (yakādu al-barqu yakhtafu) et le sujet implicite de la deuxième (kullamā adāʾa = chaque fois qu'il éclaire). Tout le verset tourne autour de l'éclair et de ses effets : il arrache presque les vues, il éclaire puis s'éteint, il dicte le mouvement des personnages. L'éclair est le maître de la scène — les hypocrites ne font que réagir à ses alternances de lumière et d'obscurité.",
              axe2_voisins: "Au verset 19, l'éclair était un élément parmi d'autres dans la tempête (ténèbres, tonnerre, éclair). Au verset 20, il devient l'élément central — tout le verset lui est consacré. La focalisation se resserre : de la vue d'ensemble (v19) au gros plan sur l'éclair (v20).",
              axe3_sourate: "L'éclair dans la sourate al-Baqarah est limité aux versets 19-20. Ces deux versets forment une unité autour de la métaphore de l'éclair — lumière intermittente qui ne permet pas de navigation stable. C'est une image puissante de la condition des hypocrites : ils ont des éclats de compréhension mais pas de lumière stable.",
              axe4_coherence: "Le Coran utilise le barq comme métaphore de la rapidité et de l'intensité. En 2:20, l'éclair est si intense qu'il menace la vision. Cette intensité est celle de la vérité pour ceux qui ne sont pas prêts à la recevoir — elle éblouit au lieu d'éclairer.",
              axe5_frequence: "Pour la mission du khalifa, l'éclair est un rappel que la vérité peut être aveuglante pour ceux qui ne sont pas préparés. Le khalifa doit apporter la lumière graduellement — pas comme un éclair qui arrache la vue, mais comme un soleil qui se lève progressivement."
            }
          }
        }
      },
      {
        word_key: "xtf", position: 3, sense_chosen: "arracher",
        analysis_axes: {
          concept_chosen: "Saisissement/Arrachement",
          concepts: {
            "Saisissement/Arrachement": {
              status: "retenu",
              proof_ctx: "Le verbe yakhtafu est un inaccompli de forme I de kh-t-f. D'après les sources étymologiques, kh-t-f signifie « saisir rapidement, arracher d'un coup, enlever brusquement ». Le khatf est un geste instantané et violent — comme un rapace qui fond sur sa proie et l'enlève d'un seul mouvement. L'inaccompli yakhtafu avec yakādu (presque) exprime l'imminence de cet arrachement : l'éclair est si violent qu'il est sur le point de saisir leurs vues d'un seul coup.",
              axe1_verset: "L'arrachement décrit l'effet de l'éclair sur la vision. L'éclair ne diminue pas doucement la vue — il menace de l'arracher brutalement. Le verbe yakhtafu est l'un des verbes les plus violents du Coran pour décrire un enlèvement. L'image est celle d'un oiseau de proie qui saisit : rapide, violent, irrésistible. Les hypocrites sont des proies face à l'éclair — leur vision peut être arrachée à tout instant.",
              axe2_voisins: "Le verset 19 décrivait un geste défensif (doigts dans les oreilles). Le verset 20 décrit un danger offensif (l'éclair qui arrache les vues). La progression est de la défense à l'attaque — les hypocrites passent de la protection active à la vulnérabilité passive. Ils ne peuvent pas mettre leurs doigts devant leurs yeux comme ils les mettent dans leurs oreilles.",
              axe3_sourate: "Le verbe khatafa est rare dans al-Baqarah — utilisé uniquement ici. Cette rareté rend l'image plus percutante. La sourate réserve les verbes les plus violents pour les moments les plus critiques.",
              axe4_coherence: "Le Coran utilise khatafa en 2:20, 22:31, 37:10. En 22:31, les oiseaux arrachent (takhatafu) celui qui tombe du ciel. En 37:10, les démons sont poursuivis par un projectile arracheur (khātif). Le khatf est toujours un arrachement violent et rapide dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, l'arrachement est un rappel de la fragilité des facultés humaines. La vision peut être arrachée à tout moment — le khalifa doit utiliser ses facultés tant qu'elles sont intactes. La mission est urgente car les facultés ne sont pas garanties."
            }
          }
        }
      },
      {
        word_key: "bsr", position: 4, sense_chosen: "vues",
        analysis_axes: {
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              proof_ctx: "Le mot absārahum est le pluriel de basar avec suffixe possessif -hum (leurs), de la racine b-s-r. D'après les sources étymologiques, b-s-r signifie « voir, percevoir, comprendre visuellement ». Le basar est la perception visuelle — la faculté de voir et de comprendre ce qu'on voit. Le pluriel absār indique que chaque personne a sa propre vue — la vision est individuelle (contrairement à l'audition samʿ qui est au singulier collectif). L'éclair menace d'arracher ces perceptions individuelles.",
              axe1_verset: "Les vues sont la cible de l'arrachement par l'éclair. Le verset oppose deux effets de l'éclair sur la vision : l'arrachement (yakhtafu absārahum) et l'éclairage (adāʾa lahum). L'éclair est paradoxal — il éclaire le chemin mais menace d'arracher la vue. Trop de lumière aveugle. Les hypocrites sont dans cette contradiction : l'éclair leur donne à voir et menace de les rendre aveugles.",
              axe2_voisins: "Le verset 7 parlait d'un voilement (ghishāwa) sur la vue des recouvrants. Le verset 20 parle d'un arrachement de la vue. L'escalade est claire : voilement (couverture partielle) → arrachement (enlèvement total). La situation des hypocrites est pire que celle des recouvrants — le voile peut être ôté, la vue arrachée ne revient pas.",
              axe3_sourate: "La vision est un thème central d'al-Baqarah — les signes sont à voir (2:164, 2:219). La perte de la vision est le pire handicap pour la réception des signes. La sourate insiste sur l'importance de préserver la perception visuelle.",
              axe4_coherence: "Le Coran associe fréquemment la perte de la vue à la perte de la direction. En 2:17, Dieu emporte leur lumière — ils ne voient plus. En 2:20, l'éclair menace d'arracher leurs vues — la menace s'intensifie.",
              axe5_frequence: "Pour la mission du khalifa, la vue est l'outil de lecture des signes. Un khalifa dont la vue est arrachée ne peut plus remplir sa mission. La préservation de la perception visuelle est essentielle."
            }
          }
        }
      },
      {
        word_key: "dwa", position: 6, sense_chosen: "éclairer",
        analysis_axes: {
          concept_chosen: "Lumière/Éclairage",
          concepts: {
            "Lumière/Éclairage": {
              status: "retenu",
              proof_ctx: "Le verbe adāʾa est un accompli de forme IV de d-w-ʾ. D'après les sources étymologiques, d-w-ʾ signifie « donner de la lumière, briller, éclairer ». La forme IV (adāʾa) est causative : « faire briller, produire de la lumière ». L'accompli après kullamā (chaque fois que) exprime une action qui se répète : chaque fois que l'éclair produit de la lumière, ils marchent. Le sujet implicite est l'éclair — c'est lui qui éclaire. Le complément lahum (pour eux) indique que l'éclairage est dirigé vers les personnages.",
              axe1_verset: "L'éclairage est le moment positif du verset — c'est quand l'éclair donne de la lumière que les personnages peuvent agir. Mais cet éclairage est bref et conditionnel (kullamā = chaque fois que). L'alternance éclairage/obscurité dicte le mouvement des hypocrites : lumière → marche, obscurité → arrêt. Ils n'ont pas de lumière propre — ils dépendent entièrement de la lumière de l'éclair. Cette dépendance les rend impuissants.",
              axe2_voisins: "Le verset 17 disait que Dieu avait emporté leur lumière. Le verset 20 montre ce qui reste : une lumière intermittente qui ne leur appartient pas. La lumière de l'éclair n'est pas leur lumière — elle vient et part sans qu'ils puissent la contrôler. La perte de leur propre lumière (v17) les rend dépendants d'une lumière extérieure et instable (v20).",
              axe3_sourate: "La lumière est un thème majeur d'al-Baqarah — elle représente la direction, la compréhension, la guidance. En 2:257, Dieu fait sortir les croyants des ténèbres vers la lumière. En 2:20, l'éclair donne une lumière qui ne dure pas — ce n'est pas la lumière stable de la direction.",
              axe4_coherence: "Le Coran utilise la racine d-w-ʾ en 2:17 (istatāʾat = a éclairé) et 2:20 (adāʾa = a éclairé). Les deux verbes décrivent des lumières temporaires — le feu du v17 et l'éclair du v20. La lumière permanente est le nūr de Dieu, pas le dāʾ de l'éclair.",
              axe5_frequence: "Pour la mission du khalifa, l'éclairage vient de la direction divine — c'est une lumière stable, pas intermittente. Le khalifa ne dépend pas d'éclairs sporadiques mais de la lumière constante de la révélation."
            }
          }
        }
      },
      {
        word_key: "mshy", position: 8, sense_chosen: "marcher",
        analysis_axes: {
          concept_chosen: "Marche/Déplacement",
          concepts: {
            "Marche/Déplacement": {
              status: "retenu",
              proof_ctx: "Le verbe mashaw est un accompli de forme I de m-sh-y à la troisième personne du masculin pluriel. D'après les sources étymologiques, m-sh-y signifie « marcher, aller à pied, se déplacer en marchant ». Le mashy est le déplacement pédestre — lent, prudent, étape par étape. L'accompli après kullamā exprime une action qui se répète dans le passé : chaque fois que l'éclair éclairait, ils marchaient. La marche est conditionnée par la lumière — sans lumière, pas de marche.",
              axe1_verset: "La marche est la réponse positive à l'éclairage de l'éclair. Quand il y a de la lumière, les hypocrites font ce qu'ils peuvent : marcher. Mais la marche est conditionnelle et intermittente — elle dépend de l'éclair. L'alternance marche/arrêt montre leur dépendance totale à une lumière qui ne leur appartient pas. Le mot mashaw (ils marchent) est suivi de fīhi (dedans) — ils marchent dans la lumière de l'éclair, pas dans leur propre lumière.",
              axe2_voisins: "Le verset 19 montrait les hypocrites immobiles et paniqués (doigts dans les oreilles). Le verset 20 les montre en mouvement, mais un mouvement conditionnel et hésitant. La progression est : panique → tentative de mouvement → arrêt. Les hypocrites ne sont jamais en marche continue — leur avancée est toujours interrompue.",
              axe3_sourate: "La marche dans al-Baqarah est liée au déplacement sur la terre — la mission du khalifa est de marcher sur la terre (2:30). Les hypocrites marchent mais de façon intermittente et dépendante — leur marche n'est pas celle du khalifa.",
              axe4_coherence: "Le Coran utilise la marche (m-sh-y) en 2:20, 17:37, 25:63, 31:19. En 25:63, les serviteurs du Tout-Miséricordieux marchent sur la terre avec humilité — une marche stable et continue. En 2:20, les hypocrites marchent par intermittence — le contraste est saisissant.",
              axe5_frequence: "Pour la mission du khalifa, la marche est le mode de déplacement de base — avancer pas à pas, avec constance. Le khalifa marche dans une lumière stable (nūr), pas dans la lumière intermittente de l'éclair. Sa marche est continue, pas interrompue."
            }
          }
        }
      },
      {
        word_key: "zlm", position: 12, sense_chosen: "s'obscurcir",
        analysis_axes: {
          concept_chosen: "Obscurité/Ténèbres",
          concepts: {
            "Obscurité/Ténèbres": {
              status: "retenu",
              proof_ctx: "Le verbe azlama est un accompli de forme IV de z-l-m. D'après les sources étymologiques, z-l-m a deux branches : l'obscurité et l'injustice. La forme IV (azlama) signifie « devenir obscur, entrer dans l'obscurité ». Le sujet est implicite — c'est l'environnement qui s'obscurcit quand l'éclair disparaît. L'accompli après idhā (quand) exprime une condition temporelle : quand l'obscurité tombe sur eux, ils s'arrêtent. La forme IV est intransitive ici — l'obscurité advient d'elle-même quand la lumière de l'éclair cesse.",
              axe1_verset: "L'obscurité est l'alternance négative de l'éclairage. Le verset construit un rythme binaire : éclair → marche / obscurité → arrêt. L'obscurité n'est pas un événement nouveau — c'est le retour de l'état permanent des ténèbres du verset 19. L'éclair interrompt brièvement les ténèbres, puis l'obscurité revient. L'alternance montre que l'état par défaut des hypocrites est l'obscurité — la lumière n'est qu'une interruption temporaire.",
              axe2_voisins: "Le verset 19 parlait de ténèbres (zulumāt) comme contenu de la pluie. Le verset 20 parle de l'obscurcissement (azlama) comme événement qui interrompt la marche. Le pluriel zulumāt (v19) et le verbe azlama (v20) viennent de la même racine — la continuité est forte. Les ténèbres du verset 19 reviennent au verset 20 sous forme verbale — elles deviennent un événement actif, pas juste un état.",
              axe3_sourate: "L'obscurité dans al-Baqarah est le domaine des recouvrants et des hypocrites. En 2:257, Dieu fait sortir des ténèbres vers la lumière — les hypocrites n'arrivent pas à en sortir car leur lumière est intermittente.",
              axe4_coherence: "Le Coran utilise azlama uniquement en 2:20 et 6:76 (quand la nuit l'obscurcit). En 6:76, Abraham observe les astres quand la nuit s'obscurcit — c'est une recherche de lumière dans l'obscurité. Le même verbe décrit deux situations opposées : Abraham cherche la lumière, les hypocrites sont paralysés par l'obscurité.",
              axe5_frequence: "Pour la mission du khalifa, l'obscurité est l'obstacle à surmonter. Le khalifa ne s'arrête pas quand l'obscurité tombe — il continue de marcher grâce à la lumière permanente de la direction divine."
            },
            "Injustice/Oppression": {
              status: "nul",
              proof_ctx: "L'injustice est le sens moral de z-l-m. La forme IV azlama est spécifiquement le sens physique d'obscurcissement. Le contexte est celui de l'alternance lumière/obscurité dans la tempête."
            }
          }
        }
      },
      {
        word_key: "qwm", position: 14, sense_chosen: "s'arrêter",
        analysis_axes: {
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              proof_ctx: "Le verbe qāmū est un accompli de forme I de q-w-m à la troisième personne du masculin pluriel. D'après les sources étymologiques, q-w-m signifie « se lever, se dresser, se tenir debout, s'arrêter ». Le sens premier est celui de la verticalité — se tenir droit. Dans le contexte du verset, qāmū signifie qu'ils se tiennent debout, immobiles, figés sur place. Quand l'obscurité tombe, ils cessent de marcher et restent debout sans bouger. La distinction avec « se lever » : ici ils ne se lèvent pas (ils marchaient déjà), ils s'arrêtent — ils passent du mouvement à l'immobilité debout.",
              axe1_verset: "L'arrêt est la réponse négative à l'obscurité. L'alternance complète est : éclair → marche / obscurité → arrêt. Les hypocrites sont debout et figés dans l'obscurité — ils ne marchent plus, ils ne s'assoient pas, ils restent debout sans savoir où aller. L'image est celle de personnes pétrifiées par l'obscurité soudaine. Le verbe qāmū contraste avec mashaw : la marche est un mouvement orienté, l'arrêt est une immobilité désorientée.",
              axe2_voisins: "Le verset 19 montrait des personnages qui agissent (mettre les doigts dans les oreilles). Le verset 20 alterne entre action (marcher) et inaction (s'arrêter). L'inaction n'est pas un choix — c'est une paralysie causée par l'absence de lumière. Les hypocrites ne s'arrêtent pas volontairement, ils sont forcés à l'immobilité par l'obscurité.",
              axe3_sourate: "La racine q-w-m est fondamentale dans al-Baqarah — en 2:30, le khalifa doit « se dresser » sur terre. En 2:238, les croyants doivent « se tenir debout » pour Dieu avec soumission. En 2:20, les hypocrites « se tiennent debout » mais par paralysie, pas par dévotion. Le même mot décrit deux attitudes opposées.",
              axe4_coherence: "Le Coran utilise qāma dans des dizaines de contextes. En 2:20, l'arrêt des hypocrites est involontaire — ils sont bloqués. En 17:79, se lever la nuit pour prier est un acte volontaire de dévotion. Le verbe q-w-m couvre toute la gamme de la verticalité : de la paralysie à la dévotion.",
              axe5_frequence: "Pour la mission du khalifa, se dresser est un acte de volonté — le khalifa se lève pour agir, pas pour rester figé. L'arrêt des hypocrites est l'anti-thèse du dressement du khalifa. La verticalité du khalifa est dynamique, celle des hypocrites est statique."
            }
          }
        }
      },
      {
        word_key: "shy", position: 16, sense_chosen: "vouloir",
        analysis_axes: {
          concept_chosen: "Volonté",
          concepts: {
            "Volonté": {
              status: "retenu",
              proof_ctx: "Le verbe shāʾa est un accompli de forme I de sh-y-ʾ. D'après les sources étymologiques, sh-y-ʾ a deux branches : la volonté (vouloir) et la chose (un être, une entité). Le sens « vouloir » est le sens verbal — l'acte de décider, de choisir. Le verbe shāʾa est utilisé avec le sujet allāh (Dieu) : « si Dieu avait voulu ». L'accompli avec law exprime l'irréel du passé — Dieu n'a PAS voulu, c'est une hypothèse. La construction law shāʾa allāhu la-dhahaba signifie « si Dieu avait voulu, Il aurait emporté » — la volonté divine est la condition de l'action.",
              axe1_verset: "La volonté divine est introduite dans la deuxième moitié du verset, après la description de l'alternance lumière/obscurité. Le texte passe du constat (les hypocrites marchent et s'arrêtent) à l'hypothétique (Dieu aurait pu faire pire). La volonté divine est le pivot : si Dieu l'avait voulu, Il aurait emporté leur audition et leur vue. Le fait qu'Il ne l'ait pas voulu signifie qu'Il leur laisse encore ces facultés — c'est une miséricorde implicite.",
              axe2_voisins: "Le verset 19 se terminait par « Dieu entoure les recouvrants ». Le verset 20 ajoute une dimension hypothétique : Dieu aurait pu faire plus que les entourer — Il aurait pu leur enlever l'audition et la vue. La progression est : encerclement (v19) → possibilité de privation (v20). Dieu a le pouvoir mais ne l'exerce pas pleinement.",
              axe3_sourate: "La construction law shāʾa allāh revient plusieurs fois dans al-Baqarah (2:20, 2:220, 2:253). Elle exprime toujours le même message : Dieu a le pouvoir absolu mais choisit de ne pas l'exercer dans certains cas. Cette retenue divine est un thème de la sourate.",
              axe4_coherence: "Le Coran utilise shāʾa allāh des dizaines de fois (6:35, 6:107, 10:99, 16:9, 42:8). En 10:99, « si ton Seigneur avait voulu, tous ceux qui sont sur terre auraient accordé sécurité ». La volonté divine est le facteur ultime — tout dépend d'elle.",
              axe5_frequence: "Pour la mission du khalifa, la volonté divine est le cadre de toute action. Le khalifa agit dans le cadre de ce que Dieu a voulu — il ne peut pas forcer ce que Dieu n'a pas voulu. La mission est elle-même un acte de volonté divine."
            },
            "Chose/Être": {
              status: "nul",
              proof_ctx: "Le sens « chose » (shayʾ) est le sens nominal de sh-y-ʾ. Le contexte est verbal (shāʾa = il a voulu) — le sens est clairement la volonté, pas la chose."
            }
          }
        }
      },
      {
        word_key: "alh", position: 17, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              proof_ctx: "Le mot allāhu est le nom propre de la divinité unique, au nominatif (sujet du verbe shāʾa). Première occurrence dans le verset. La racine a-l-h désigne la divinité — celui vers qui on se tourne. Ici Dieu est le sujet de la volonté hypothétique : « si Dieu avait voulu, il aurait emporté ». La mention de Dieu dans cette hypothétique rappelle que le pouvoir sur les facultés humaines appartient à Dieu seul.",
              axe1_verset: "Dieu est nommé comme sujet de la volonté hypothétique. La structure est : les hypocrites subissent la tempête → Dieu aurait pu aggraver leur situation → mais Il est puissant sur toute chose. La mention de Dieu place l'ensemble de la scène sous le contrôle divin. Les éclairs, l'obscurité, la marche et l'arrêt — tout est dans le cadre de ce que Dieu a voulu.",
              axe2_voisins: "Le verset 19 nommait Dieu à la fin (muhīt, celui qui entoure). Le verset 20 le nomme deux fois — une fois dans l'hypothétique et une fois dans l'affirmation finale. La double mention de Dieu dans le verset 20 renforce le message : Dieu contrôle tout.",
              axe3_sourate: "Dieu est le sujet constant de la sourate al-Baqarah — chaque scène revient à Lui. La parabole de la tempête n'est pas une description météorologique mais une illustration du pouvoir divin.",
              axe4_coherence: "Le Coran mentionne Dieu systématiquement dans les paraboles pour rappeler que la métaphore pointe vers une réalité divine, pas naturelle.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est l'autorité suprême. Le khalifa agit au nom de Dieu et sous Sa volonté."
            }
          }
        }
      },
      {
        word_key: "dhb", position: 18, sense_chosen: "emporter",
        analysis_axes: {
          concept_chosen: "Départ/Mouvement",
          concepts: {
            "Départ/Mouvement": {
              status: "retenu",
              proof_ctx: "Le verbe la-dhahaba est un accompli de forme I de dh-h-b avec la particule la- du conditionnel (réponse de law). D'après les sources étymologiques, dh-h-b signifie « aller, partir, disparaître, emporter ». La construction dhahaba bi- signifie « emporter avec soi, emmener » — ce n'est pas juste partir mais partir avec quelque chose. La phrase la-dhahaba bi-samʿihim wa absārihim signifie « Il aurait emporté avec Lui leur audition et leurs vues ». La distinction avec « Or/Richesse » (dhahab) : l'or est un dérivé nominal de la racine, hors contexte ici.",
              axe1_verset: "L'emportement est l'action hypothétique que Dieu aurait pu faire. Dhahaba bi- suggère un départ définitif — emporter quelque chose et ne pas le rendre. Si Dieu avait emporté leur audition et leur vue, la privation aurait été totale et irréversible. Actuellement, les hypocrites ont encore l'audition et la vue (même si la vue est menacée par l'éclair) — Dieu ne les a pas encore emportées.",
              axe2_voisins: "Le verset 17 utilisait le même verbe : « dhahaba allāhu bi-nūrihim » (Dieu a emporté leur lumière). Le parallèle est frappant : au verset 17, Dieu a effectivement emporté leur lumière. Au verset 20, Il aurait PU emporter leur audition et leur vue mais ne l'a pas fait. La différence est entre le réel (v17 : lumière emportée) et le potentiel (v20 : audition et vue préservées).",
              axe3_sourate: "La racine dh-h-b est utilisée dans al-Baqarah pour exprimer le départ et la perte. L'emportement divin est un acte de puissance — Dieu prend et donne à Sa volonté.",
              axe4_coherence: "Le Coran utilise dhahaba bi- en 2:17 et 2:20 — dans les deux cas pour exprimer l'emportement divin de facultés humaines. La construction est rare et spécifique à ces paraboles. En 2:17, l'emportement est réel. En 2:20, il est hypothétique.",
              axe5_frequence: "Pour la mission du khalifa, l'emportement divin est un rappel que les facultés sont un don — elles peuvent être retirées. Le khalifa utilise ses facultés avec gratitude et urgence, sachant qu'elles ne sont pas acquises pour toujours."
            },
            "Or/Richesse": {
              status: "nul",
              proof_ctx: "L'or (dhahab) est un dérivé nominal de la racine dh-h-b. Le contexte est verbal (emporter), pas nominal (or)."
            }
          }
        }
      },
      {
        word_key: "sme", position: 19, sense_chosen: "audition",
        analysis_axes: {
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              proof_ctx: "Le mot bi-samʿihim est le nom samʿ (audition) au génitif avec préposition bi- et suffixe -him (leur). D'après les sources étymologiques, s-m-ʿ signifie « entendre, percevoir par l'ouïe, écouter ». Le samʿ est la faculté d'audition — pas l'organe (udhun, oreille) mais la capacité d'entendre. Le singulier (samʿ, pas asmāʿ) indique une faculté collective — ils partagent une même audition. Dieu aurait pu emporter cette faculté collective.",
              axe1_verset: "L'audition est le premier objet de l'emportement hypothétique. La paire samʿ + absār (audition + vues) couvre les deux canaux de perception. Dieu aurait pu les priver des deux — les rendre sourds et aveugles. Le verset 19 montrait les hypocrites se bouchant les oreilles (blocage volontaire de l'audition). Le verset 20 dit que Dieu aurait pu rendre le blocage permanent — emporter l'audition elle-même, pas juste la bloquer temporairement.",
              axe2_voisins: "Le verset 7 parlait du scellement de l'audition (samʿihim) pour les recouvrants. Le verset 20 parle de l'emportement possible de l'audition pour les hypocrites. La gradation est : scellement (v7, pour les recouvrants) → emportement hypothétique (v20, pour les hypocrites). Les hypocrites sont à un stade intermédiaire — leur audition n'est pas encore scellée ni emportée.",
              axe3_sourate: "L'audition est mentionnée dans presque chaque section d'al-Baqarah. C'est la faculté primordiale de réception — le Coran est d'abord entendu, puis compris. La perte de l'audition est la perte du premier canal de direction.",
              axe4_coherence: "Le Coran mentionne le samʿ souvent avant le basar — l'audition précède la vision dans l'ordre des facultés. En 2:7, 2:20, 16:78, 23:78, l'audition est toujours nommée en premier. Cette priorité reflète l'importance de l'écoute dans la réception de la parole divine.",
              axe5_frequence: "Pour la mission du khalifa, l'audition est le premier canal de réception de la direction. Le khalifa écoute avant de voir, entend avant de comprendre. L'emportement de l'audition serait la fin de la mission."
            }
          }
        }
      },
      {
        word_key: "bsr", position: 21, sense_chosen: "vues",
        analysis_axes: {
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              proof_ctx: "Le mot absārihim est le pluriel de basar avec suffixe -him, au génitif. C'est la deuxième occurrence de absār dans le verset — la première (position 4) était l'objet de l'arrachement par l'éclair, celle-ci est l'objet de l'emportement hypothétique par Dieu. Le même mot revient pour montrer la vulnérabilité de la vue : menacée par l'éclair (v20a) et potentiellement emportée par Dieu (v20b). Le pluriel maintient la cohérence : chaque personne a sa propre vue.",
              axe1_verset: "Les vues sont le deuxième objet de l'emportement hypothétique, après l'audition. La paire audition + vues couvre les deux canaux de perception. La mention des vues ici fait écho à la première occurrence (yakhtafu absārahum) — l'éclair menace d'arracher les vues, et Dieu pourrait les emporter définitivement. La double mention des vues dans le même verset souligne leur centralité dans cette parabole.",
              axe2_voisins: "Le verset 7 parlait d'un voilement sur la perception (abṣārihim ghishāwa). Le verset 20 mentionne les vues deux fois — une fois menacées par l'éclair, une fois comme objet d'emportement potentiel. L'intensification est constante de verset en verset.",
              axe3_sourate: "La vue est un thème récurrent dans al-Baqarah. Les signes sont « pour ceux qui voient » (li-ulī al-absār). La perte de la vue est la perte de la capacité à lire les signes.",
              axe4_coherence: "Le Coran associe régulièrement samʿ et absār comme paire indissociable de perception. La perte de l'une sans l'autre est incomplète — Dieu aurait emporté les DEUX.",
              axe5_frequence: "Pour la mission du khalifa, la préservation de la vue et de l'audition est essentielle. Le verset rappelle que ces facultés sont un don divin qui peut être retiré."
            }
          }
        }
      },
      {
        word_key: "alh", position: 23, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              proof_ctx: "Le mot allāha est le nom propre de la divinité unique, à l'accusatif (sujet de inna). Deuxième occurrence dans le verset. La particule inna (en vérité) est emphatique — elle introduit une affirmation catégorique. La construction inna allāha ʿalā kulli shayʾin qadīrun est une déclaration de toute-puissance divine : en vérité, Dieu est sur toute chose puissant. Cette deuxième mention de Dieu clôt le verset et les deux paraboles (v17-20) par une affirmation de souveraineté absolue.",
              axe1_verset: "Le nom de Dieu revient à la fin du verset pour la déclaration finale de puissance. La structure du verset est : phénomène naturel (éclair) → réaction humaine (marcher/s'arrêter) → pouvoir divin (hypothétique puis affirmatif). Dieu est le dernier mot — après la tempête, après l'éclair, après l'arrêt des hypocrites, c'est Dieu qui a le pouvoir sur toute chose.",
              axe2_voisins: "Les quatre versets de la parabole (17-20) se terminent tous par une référence à Dieu ou à Son action. Le verset 17 : « ils ne voient pas ». Le verset 18 : « ils ne reviennent pas ». Le verset 19 : « Dieu entoure les recouvrants ». Le verset 20 : « Dieu est sur toute chose puissant ». La progression culmine avec la déclaration de toute-puissance.",
              axe3_sourate: "La formule inna allāha ʿalā kulli shayʾin qadīr revient plusieurs fois dans al-Baqarah (2:20, 2:106, 2:109, 2:148, 2:259, 2:284). C'est une formule récurrente qui ponctue la sourate comme un refrain de souveraineté.",
              axe4_coherence: "Le Coran utilise cette formule dans de nombreuses sourates. C'est l'une des affirmations les plus fréquentes du texte — un rappel constant de la toute-puissance divine.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source de toute puissance. Le khalifa n'a de pouvoir que ce que Dieu lui accorde. La déclaration de toute-puissance clôt la parabole en rappelant que tout revient à Dieu."
            }
          }
        }
      },
      {
        word_key: "kll", position: 25, sense_chosen: "totalité",
        analysis_axes: {
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              proof_ctx: "Le mot kulli est un nom masculin au génitif de k-l-l. Le mot kull signifie « tout, chaque, la totalité ». La construction kulli shayʾin (toute chose) est un complément universel — elle couvre tout sans exception. Le mot kull n'a pas de restriction — quand le Coran dit kulli shayʾin, c'est absolument tout. La distinction avec le sens « Émoussement/Faiblesse » (kalla = s'émousser) : kull (totalité) et kalla (s'émousser) sont des mots différents malgré le même squelette consonantique.",
              axe1_verset: "La totalité qualifie l'étendue du pouvoir divin : Dieu est puissant sur TOUTE chose. Pas sur certaines choses — sur toute chose. Le mot kull place la puissance divine à un niveau absolu. Après les événements limités de la parabole (un orage, des hypocrites, un éclair), le verset s'ouvre à l'universel : Dieu est puissant sur tout, pas seulement sur cette tempête.",
              axe2_voisins: "Les versets 17-19 décrivaient des situations spécifiques. Le verset 20 conclut par l'universel : toute chose. La transition du particulier au général est le mouvement de clôture de la parabole — de l'image concrète à la vérité abstraite.",
              axe3_sourate: "La formule kulli shayʾin revient fréquemment dans al-Baqarah comme qualificatif du pouvoir ou du savoir divin. Dieu sait toute chose, peut toute chose — la totalité est Son attribut.",
              axe4_coherence: "Le Coran utilise kulli shayʾin qadīr comme formule récurrente. La totalité est un concept fondamental de la théologie coranique — Dieu n'a pas de limites dans Sa puissance.",
              axe5_frequence: "Pour la mission du khalifa, la totalité du pouvoir divin est le cadre de la mission. Le khalifa agit dans un monde où Dieu est puissant sur toute chose — rien n'est hors de portée divine."
            }
          }
        }
      },
      {
        word_key: "shy", position: 26, sense_chosen: "chose",
        analysis_axes: {
          concept_chosen: "Chose/Être",
          concepts: {
            "Chose/Être": {
              status: "retenu",
              proof_ctx: "Le mot shayʾin est un nom masculin indéfini au génitif de sh-y-ʾ. D'après les sources étymologiques, sh-y-ʾ a deux branches : la volonté (vouloir) et la chose (un être, une entité). Le sens « chose » est le sens nominal — tout ce qui existe, toute entité. Le mot shayʾ est l'un des termes les plus génériques de l'arabe — il désigne n'importe quoi, n'importe quelle réalité. La construction kulli shayʾin (toute chose) est universelle — elle englobe tout ce qui est.",
              axe1_verset: "La chose est le complément de la totalité : toute CHOSE. Le mot shayʾ rend concret l'universel — la totalité n'est pas abstraite, elle porte sur des choses, des réalités, des êtres. Dieu est puissant sur chaque chose individuellement et sur toutes les choses collectivement. L'éclair, les ténèbres, l'audition, la vue — chacune est une « chose » sur laquelle Dieu a pouvoir.",
              axe2_voisins: "La parabole décrivait des choses spécifiques : pluie, ténèbres, tonnerre, éclair, doigts, oreilles. Le mot shayʾ les englobe toutes et y ajoute tout le reste. La conclusion dépasse la parabole pour affirmer un pouvoir illimité.",
              axe3_sourate: "Le mot shayʾ est très fréquent dans al-Baqarah — il est utilisé dans des contextes variés pour désigner n'importe quelle réalité. C'est un mot de base du vocabulaire coranique.",
              axe4_coherence: "Le Coran utilise shayʾ des centaines de fois. La formule kulli shayʾin qadīr combine trois mots fondamentaux : totalité (kull), chose (shayʾ), puissance (qadīr). Ensemble, ils forment l'une des déclarations théologiques les plus complètes du Coran.",
              axe5_frequence: "Pour la mission du khalifa, chaque chose dans la création est un signe de la puissance divine. Le khalifa observe les choses et y lit les signes — chaque chose est un objet de réflexion."
            },
            "Volonté": {
              status: "nul",
              proof_ctx: "La volonté est le sens verbal de sh-y-ʾ (shāʾa = vouloir). Le contexte est nominal (shayʾ = chose) — le sens est clairement la chose, pas la volonté. La volonté apparaît à la position 16 (shāʾa), la chose à la position 26."
            }
          }
        }
      },
      {
        word_key: "qdr", position: 27, sense_chosen: "puissant",
        analysis_axes: {
          concept_chosen: "Puissance/Capacité",
          concepts: {
            "Puissance/Capacité": {
              status: "retenu",
              proof_ctx: "Le mot qadīrun est un adjectif masculin indéfini au nominatif de q-d-r. D'après les sources étymologiques, q-d-r signifie « pouvoir, être capable, mesurer, déterminer ». Le qadīr est celui qui a le pouvoir — la capacité d'agir sur toute chose. La distinction avec « Mesure/Détermination » : la mesure (qadr) est le fait de calibrer, de déterminer les proportions. La puissance (qudra) est la capacité d'action. Le contexte est celui de la toute-puissance divine — c'est la capacité illimitée de Dieu.",
              axe1_verset: "Le mot qadīr est le dernier mot du verset et de toute la parabole (v17-20). Il clôt l'ensemble par l'affirmation de la puissance divine. La structure du verset culmine vers ce mot : imminence → alternance → hypothétique → affirmation de puissance. Tout le verset pointe vers qadīr comme sa conclusion logique : si Dieu a le pouvoir sur toute chose, alors la tempête, l'éclair, la vue, l'audition — tout est sous Son contrôle.",
              axe2_voisins: "Les quatre versets (17-20) montrent une progression vers la puissance divine : perte de lumière → surdité, aveuglement, mutisme → tempête incontrôlable → Dieu est puissant sur toute chose. La parabole commence par la faiblesse humaine et finit par la puissance divine.",
              axe3_sourate: "La formule qadīr revient dans al-Baqarah comme ponctuation de la souveraineté divine. Chaque section se termine par un rappel du pouvoir de Dieu. La sourate construit progressivement l'image d'un Dieu qui a le contrôle total.",
              axe4_coherence: "Le Coran utilise qadīr 45 fois, toujours en référence à Dieu. C'est un attribut exclusivement divin dans le Coran — aucun humain n'est qualifié de qadīr. La puissance absolue est réservée à Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la puissance divine est le fondement de la confiance. Le khalifa agit avec la certitude que Dieu est puissant sur toute chose — même quand la situation semble désespérée, la puissance divine est intacte."
            },
            "Mesure/Détermination": {
              status: "probable",
              proof_ctx: "La mesure est un sens important de q-d-r — Dieu mesure et détermine toute chose. Le qadr est le décret divin, la prédestination. Le contexte de 2:20 parle de puissance (qadīr), mais la mesure est toujours présente en arrière-plan — Dieu est à la fois puissant et mesuré dans Son action.",
              axe1_verset: "La mesure serait compatible : Dieu mesure toute chose avec précision. Mais le contexte (hypothétique de l'emportement) parle de capacité d'action, pas de mesure.",
              axe2_voisins: "Le verset 20 parle de ce que Dieu POURRAIT faire — c'est la puissance, pas la mesure. La mesure concerne ce que Dieu FAIT effectivement.",
              axe3_sourate: "La sourate utilise qadr et qadīr dans des contextes différents — qadīr toujours pour la puissance.",
              axe4_coherence: "Le Coran distingue qadr (décret, mesure) et qadīr (puissant). Les deux viennent de la même racine mais ont des usages différents.",
              axe5_frequence: "La mesure divine est complémentaire à la puissance — Dieu est puissant ET mesuré."
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
    } else {
      const ax = word.analysis_axes;
      console.log(`  ${word.word_key} (pos ${word.position}) → sens "${ax.concept_chosen}" → mot "${word.sense_chosen}"`);
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
  } else {
    console.log(`  Traduction : "${data.translation_arab.substring(0, 80)}..."`);
  }

  console.log(`VERSET 2:${verseNum} — TERMINÉ`);
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [26, 27];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 19 À 20 ===\n');

  for (let v = 19; v <= 20; v++) {
    await processVerse(v);
  }

  await syncWordMeanings();

  console.log('\n=== PIPELINE V19-20 TERMINÉE ===');
}

main().catch(console.error);
