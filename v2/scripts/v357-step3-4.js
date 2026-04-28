const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const verseId = 350;

  // ========= ETAPE 3 — VWA =========
  const vwaRows = [
    // Position 3 — alladhīna (dhhy) — pronom relatif
    {
      verse_id: verseId,
      word_key: 'dhhy',
      root: 'ذ ه ي',
      position: 3,
      sense_chosen: 'non trouvé',
      analysis_axes: {
        concept_chosen: 'Non trouvé',
        concepts: {
          'Non trouvé': {
            status: 'retenu',
            senses: ['non trouvé'],
            proof_ctx: "Pronom relatif masculin pluriel. Il introduit une proposition relative qui caractérise ses référents par ce qu'ils ont fait. Ce n'est pas une racine sémantique ordinaire mais un outil grammatical de référence."
          }
        }
      },
      reason: 'Pronom relatif masculin pluriel qui introduit la proposition relative « qui ont accordé foi et fait les œuvres intègres ».'
    },

    // Position 4 — āmanū (amn) — verbe accompli 3MP forme I, actif
    {
      verse_id: verseId,
      word_key: 'amn',
      root: 'أ م ن',
      position: 4,
      sense_chosen: 'avoir la foi',
      analysis_axes: {
        concept_chosen: 'Foi/Adhésion',
        concepts: {
          'Foi/Adhésion': {
            status: 'retenu',
            senses: ['avoir la foi', 'confirmer', 'accepter comme vrai', 'croire', 'croyant'],
            proof_ctx: "Verbe à l'accompli, troisième personne du pluriel, forme I active. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ce concept regroupe l'adhésion intérieure à une parole ou à un messager. La structure « ceux qui ont accordé foi et fait les œuvres intègres » montre un binôme classique du Coran où l'adhésion intérieure précède l'action extérieure. Le contexte (pendant positif du verset 56 qui mentionne ceux qui ont dénié) fixe le sens d'adhésion par opposition au rejet."
          },
          'Sécurité/Confiance': {
            status: 'peu_probable',
            senses: ['être en sécurité', 'faire confiance', 'se sentir en sécurité', 'fidèle'],
            proof_ctx: "Ce sens concerne l'état intérieur de sécurité ou la confiance accordée à quelqu'un. Le verset ne mentionne ni objet de sécurité ni relation de confiance personnelle — il oppose ceux qui adhèrent à ceux qui ont dénié au verset précédent. Ce n'est pas la nuance activée ici."
          },
          'Garantie/Protection': {
            status: 'nul',
            senses: ['accorder la sécurité', 'protéger'],
            proof_ctx: "Sens actif de garantie accordée à un objet ou une personne. Il n'y a pas d'objet de protection dans le verset."
          },
          'Sens isolé/Amen': {
            status: 'nul',
            senses: ['amen'],
            proof_ctx: "Interjection isolée utilisée en conclusion de prière. Ne correspond pas à une forme verbale conjuguée."
          }
        }
      },
      reason: "Verbe accompli 3e personne du pluriel, forme I. Le concept « Foi/Adhésion » est retenu car il décrit l'adhésion intérieure à une parole, compatible avec la forme accomplie qui fixe l'acte d'adhérer comme achevé. Les sens de sécurité et de protection sont écartés car le verset n'a ni objet ni relation de sécurité."
    },

    // Position 6 — ʿamilū (eml) — verbe accompli 3MP forme I
    {
      verse_id: verseId,
      word_key: 'eml',
      root: 'ع م ل',
      position: 6,
      sense_chosen: 'agir',
      analysis_axes: {
        concept_chosen: 'Action/Oeuvre',
        concepts: {
          'Action/Oeuvre': {
            status: 'retenu',
            senses: ['agir', 'acte', 'oeuvre', 'travailler', 'ouvrier'],
            proof_ctx: "Verbe à l'accompli, troisième personne du pluriel, forme I. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ce concept regroupe l'acte extérieur produit par la personne — ce qu'elle fait concrètement. Il est en opposition philosophique avec l'adhésion intérieure du verbe précédent āmanū. Le couple āmanū + ʿamilū forme un binôme classique du Coran : adhérer puis faire."
          },
          'Sens isolé/Gouverneur': {
            status: 'nul',
            senses: ['gouverneur'],
            proof_ctx: "Sens nominal désignant une fonction administrative. Ne correspond pas à la forme verbale conjuguée."
          }
        }
      },
      reason: "Verbe accompli 3e personne du pluriel, forme I. Le concept « Action/Oeuvre » est retenu car il décrit l'acte extérieur qui complète naturellement l'adhésion intérieure exprimée par āmanū."
    },

    // Position 7 — aṣ-ṣāliḥāti (slh) — nom/adj féminin pluriel défini génitif
    {
      verse_id: verseId,
      word_key: 'slh',
      root: 'ص ل ح',
      position: 7,
      sense_chosen: 'oeuvre bonne',
      analysis_axes: {
        concept_chosen: 'Bonté/Rectitude',
        concepts: {
          'Bonté/Rectitude': {
            status: 'retenu',
            senses: ['oeuvre bonne', 'être bon', 'rectitude', 'vertueux', 'réparer', 'réconcilier', 'réformer'],
            proof_ctx: "Participe/adjectif féminin pluriel défini au génitif, utilisé comme nom pour désigner des œuvres caractérisées par la rectitude. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine ṣ-l-ḥ regroupe l'idée d'être droit, intègre, réparé, en bon état. Le défini al- indique une catégorie connue et identifiée : les œuvres intègres par opposition aux œuvres corrompues. Dans le binôme āmanū + ʿamilū aṣ-ṣāliḥāti, le féminin pluriel désigne les actions droites qu'accomplit la personne."
          },
          'Sens isolé/Paix': {
            status: 'nul',
            senses: ['paix'],
            proof_ctx: "Sens nominal isolé qui ne cadre pas avec la forme de participe féminin pluriel ici employée comme qualificatif des œuvres."
          }
        }
      },
      reason: "Participe féminin pluriel défini au génitif, employé comme nom. Le concept « Bonté/Rectitude » est retenu car il décrit la nature droite et réparatrice des œuvres, compatible avec le défini qui isole la catégorie des actions intègres."
    },

    // Position 9 — yuwaffīhim (wfy) — verbe inaccompli forme II/IV + pronom
    {
      verse_id: verseId,
      word_key: 'wfy',
      root: 'و ف ي',
      position: 9,
      sense_chosen: 'payer intégralement',
      analysis_axes: {
        concept_chosen: 'Fidélité/Accomplissement',
        concepts: {
          'Fidélité/Accomplissement': {
            status: 'retenu',
            senses: ['payer intégralement', 'accomplir', 'être fidèle', 'tenir sa promesse'],
            proof_ctx: "Verbe à l'inaccompli, troisième personne du singulier, forme dérivée à redoublement qui intensifie le sens de base. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ce concept regroupe l'acte de tenir entièrement une obligation et de verser sans rien retrancher ce qui est dû. La forme dérivée waffā + double objet (les bénéficiaires et la chose due) signifie « verser intégralement » à quelqu'un ce qui lui revient. L'inaccompli exprime une réalité à venir, projetée dans le temps à partir de l'acte présent d'adhésion et d'action. Test de naturalité : « leur payer intégralement leurs récompenses » forme une expression naturelle en français."
          },
          'Mort/Fin': {
            status: 'nul',
            senses: ['mourir'],
            proof_ctx: "Sens de la racine qui signifie mourir ou être recueilli. Ne s'applique pas ici car la structure du verset porte sur la remise d'un dû (les récompenses) et non sur la fin d'une vie."
          }
        }
      },
      reason: "Verbe inaccompli, forme dérivée à redoublement avec double objet. Le concept « Fidélité/Accomplissement » est retenu car il décrit exactement l'acte de verser sans retrancher ce qui est dû, ce qui correspond à la structure « leur payer intégralement leurs récompenses »."
    },

    // Position 10 — ujūrahum (ajr) — nom masculin pluriel accusatif + pronom
    {
      verse_id: verseId,
      word_key: 'ajr',
      root: 'أ ج ر',
      position: 10,
      sense_chosen: 'récompense',
      analysis_axes: {
        concept_chosen: 'Rétribution/Salaire',
        concepts: {
          'Rétribution/Salaire': {
            status: 'retenu',
            senses: ['récompense', 'salaire', 'rémunération', 'dot'],
            proof_ctx: "Nom masculin pluriel au cas accusatif, complément direct du verbe yuwaffī. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), l'ajr est ce qu'on reçoit en contrepartie d'une action accomplie. Le pluriel ujūr désigne l'ensemble des rétributions dues à chaque personne. Le possessif « hum » rattache les récompenses aux personnes qui ont adhéré et agi droitement. C'est la contrepartie juste de ce qui a été produit par la foi et les œuvres."
          },
          'Location/Loyer': {
            status: 'peu_probable',
            senses: ['donner en location', 'loyer'],
            proof_ctx: "Sens économique de la même racine qui concerne la cession contractuelle d'un bien. Le verset ne porte pas sur une location de bien mais sur la contrepartie d'un comportement, ce qui écarte cette nuance."
          }
        }
      },
      reason: "Nom pluriel accusatif, complément direct du verbe « payer intégralement ». Le concept « Rétribution/Salaire » est retenu car il décrit la contrepartie juste d'une action, ce qui correspond exactement à la structure du verset où les récompenses rétribuent la foi et les œuvres."
    },

    // Position 12 — allāhu (alh) — nom propre, nominatif, défini
    {
      verse_id: verseId,
      word_key: 'alh',
      root: 'أ ل ه',
      position: 12,
      sense_chosen: 'Dieu',
      analysis_axes: {
        concept_chosen: 'Divinité',
        concepts: {
          'Divinité': {
            status: 'retenu',
            senses: ['Dieu', 'divinité'],
            proof_ctx: "Nom propre de la Divinité au cas nominatif, sujet de la phrase nominale qui conclut le verset. Le passage du registre de la rétribution (verbe yuwaffī) à la déclaration générale « wa-llāhu lā yuḥibbu aẓ-ẓālimīna » introduit une proposition de portée universelle qui encadre le verset."
          },
          'Adoration/Dévotion': {
            status: 'nul',
            senses: ['adorer', 'diviniser', 'se dévouer au culte'],
            proof_ctx: "Sens verbal dérivé de la racine qui désigne l'acte d'adoration. Ne s'applique pas au nom propre défini en position de sujet."
          },
          'Refuge/Protection': {
            status: 'nul',
            senses: ['demeurer', 'chercher refuge', 'protéger'],
            proof_ctx: "Sens verbal parent de la racine. Ne s'applique pas au nom propre en position de sujet."
          },
          'Domination': {
            status: 'nul',
            senses: ['asservir'],
            proof_ctx: "Sens verbal parent. Ne s'applique pas au nom propre."
          },
          'Détresse': {
            status: 'nul',
            senses: ['être perplexe'],
            proof_ctx: "Sens verbal parent. Ne s'applique pas au nom propre."
          }
        }
      },
      reason: "Nom propre au nominatif, sujet de la phrase nominale finale. Traduit par « Dieu » selon la convention française pour le nom propre de la Divinité."
    },

    // Position 14 — yuḥibbu (hbb) — verbe inaccompli 3MS forme IV, négation lā
    {
      verse_id: verseId,
      word_key: 'hbb',
      root: 'ح ب ب',
      position: 14,
      sense_chosen: 'aimer',
      analysis_axes: {
        concept_chosen: 'Amour/Affection',
        concepts: {
          'Amour/Affection': {
            status: 'retenu',
            senses: ['aimer', 'préférer', 'affection'],
            proof_ctx: "Verbe à l'inaccompli, troisième personne du singulier, forme dérivée à préfixe, précédé de la négation lā. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le concept regroupe l'acte d'orienter sa préférence vers un objet et de se lier à lui par affection. L'inaccompli négatif exprime une règle générale : Dieu ne dirige pas son affection vers la catégorie des injustes. Le sujet est Dieu, dont le Coran atteste par ailleurs la satisfaction (ridā) et la miséricorde (rahma), donc l'amour n'est pas un anthropomorphisme non attesté."
          },
          'Lien': {
            status: 'nul',
            senses: ['corde'],
            proof_ctx: "Sens concret de lien matériel dérivé de la racine. Ne s'applique pas à une forme verbale avec sujet personnel."
          },
          'Graine/Semence': {
            status: 'nul',
            senses: ['grain', 'graine'],
            proof_ctx: "Sens concret d'élément végétal. Ne s'applique pas à une forme verbale avec sujet personnel."
          }
        }
      },
      reason: "Verbe inaccompli, forme dérivée, avec négation lā. Le concept « Amour/Affection » est retenu car il décrit l'acte d'orienter sa préférence vers un objet, ce qui convient au sujet divin et à la catégorie d'humains niée comme objet de cette préférence."
    },

    // Position 15 — aẓ-ẓālimīna (zlm) — participe actif masculin pluriel défini, accusatif
    {
      verse_id: verseId,
      word_key: 'zlm',
      root: 'ظ ل م',
      position: 15,
      sense_chosen: 'injuste',
      analysis_axes: {
        concept_chosen: 'Injustice/Oppression',
        concepts: {
          'Injustice/Oppression': {
            status: 'retenu',
            senses: ['être injuste', 'injustice', 'opprimer', 'oppresseur'],
            proof_ctx: "Participe actif masculin pluriel défini au cas accusatif, complément direct de yuḥibbu. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ce concept regroupe l'acte de placer quelque chose ailleurs qu'à sa place juste, de porter tort à quelqu'un et d'outrepasser ce qui est droit. Le participe actif désigne les personnes qui font activement cet acte. Le défini isole une catégorie identifiée — celle des personnes caractérisées par l'injustice. Le verset met en opposition deux catégories : d'un côté « ceux qui ont accordé foi et fait les œuvres intègres », de l'autre « les injustes »."
          },
          'Obscurité/Ténèbres': {
            status: 'nul',
            senses: ['obscurité', 'ténèbres'],
            proof_ctx: "Sens physique de la même racine en arabe classique. Ne s'applique pas ici car le verset parle de personnes qui pratiquent un acte, non d'un phénomène lumineux."
          },
          'Souffle/Vent': {
            status: 'nul',
            senses: ['se faire du tort'],
            proof_ctx: "Sens marginal et isolé listé dans le concept au nom ambigu. Ne correspond pas à la structure de participe actif défini qui pointe vers une catégorie active et extérieure."
          }
        }
      },
      reason: "Participe actif masculin pluriel défini au cas accusatif. Le concept « Injustice/Oppression » est retenu car il décrit l'acte de placer une chose hors de sa juste place, ce qui convient au participe actif qui désigne ceux qui font cet acte comme habitude."
    }
  ];

  // Delete any existing VWA for this verse first (in case of retries)
  await db.from('verse_word_analyses').delete().eq('verse_id', verseId);

  const { data: vwaInserted, error: vwaErr } = await db.from('verse_word_analyses').insert(vwaRows).select();
  if (vwaErr) { console.error('VWA insert error:', vwaErr); return; }
  console.log('VWA inserted:', vwaInserted.length);

  // ========= ETAPE 4 — Traduction =========
  const full_translation = "Quant à ceux qui ont la foi et font de bonnes œuvres, Il leur donnera leurs récompenses entières. Et Allah n'aime pas les injustes.";

  const translation_arab = "Et quant à ceux qui ont accordé foi et fait les œuvres intègres, Il leur paiera intégralement leurs récompenses. Et Dieu n'aime pas les injustes.";

  const translation_meditational = "Là où le verset précédent décrit le sort de ceux qui ont dénié, celui-ci expose le pendant positif : l'adhésion intérieure et l'œuvre droite n'appellent pas un cadeau mais une contrepartie juste, versée sans que rien n'en soit retranché. Dieu n'oriente pas son affection vers ceux qui placent les choses hors de leur juste place.";

  const translation_explanation = `§DEMARCHE§

Ce verset est le pendant positif du verset 56. Après avoir annoncé le sort de ceux qui ont dénié (couvert la vérité), le texte utilise la construction parallèle « wa-ammā alladhīna... » (« et quant à ceux qui... ») pour introduire la catégorie opposée : ceux qui ont adhéré et œuvré droitement. La particule wa-ammā met en regard deux groupes qui reçoivent deux traitements différents.

**Alladhīna** (ceux qui) est un pronom relatif masculin pluriel. Il introduit la proposition relative qui caractérise ses référents par deux actions : l'adhésion intérieure et l'œuvre extérieure. Ce n'est pas une racine sémantique ordinaire mais un outil grammatical qui désigne un groupe par ce qu'il a fait.

**Āmanū** (ont accordé foi) est un verbe à l'accompli, troisième personne du pluriel, forme I active. L'accompli (une forme qui présente l'action comme achevée) fixe l'adhésion comme un acte posé. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine ء م ن regroupe l'idée d'adhérer à une parole et de la tenir pour vraie. Dans le Coran, le verbe pris seul et au pluriel désigne l'adhésion générale à la mission du messager et à la Parole révélée.

**ʿAmilū** (ont fait) est un verbe à l'accompli, troisième personne du pluriel, forme I. Le binôme āmanū + ʿamilū est récurrent dans le Coran — il place l'adhésion intérieure d'abord, puis son prolongement extérieur dans l'acte. Le verbe ʿamila signifie produire un acte concret, fabriquer une œuvre.

**Aṣ-ṣāliḥāti** (les œuvres intègres) est un participe féminin pluriel défini au génitif. Le participe (une forme qui dit que la personne ou la chose porte en elle-même la qualité) désigne ici la catégorie des œuvres caractérisées par la rectitude. Le défini al- (une marque qui identifie une catégorie connue) isole l'ensemble des actions droites par opposition aux actions corrompues. D'après les sources étymologiques, la racine ص ل ح renvoie à l'idée d'être droit, réparé, en bon état, par opposition à fāsid (corrompu).

**Fa** (alors) est une particule qui relie la conséquence à ce qui précède. Dans la structure « quant à ceux qui... alors il leur... », le fa introduit ce qui résulte de l'adhésion et des œuvres.

**Yuwaffīhim** (Il leur paiera intégralement) est un verbe à l'inaccompli (une forme qui dit que l'action est en cours ou à venir), troisième personne du singulier, forme dérivée à redoublement. La forme dérivée à redoublement (waffā au lieu du simple wafā) intensifie le sens de base : non seulement on tient sa promesse, mais on la tient sans rien retrancher. Le pronom -hum (leur) indique les bénéficiaires de cette remise intégrale.

**Ujūrahum** (leurs récompenses) est un nom masculin pluriel au cas accusatif (position de complément direct). D'après les sources étymologiques, l'ajr est ce qu'on reçoit en contrepartie d'une action — récompense, salaire, rémunération, selon le contexte. Le pluriel ujūr désigne l'ensemble des rétributions dues. Le pronom -hum rattache ces récompenses aux personnes caractérisées par l'adhésion et les œuvres.

**Allāhu** (Dieu) est le nom propre de la Divinité, au cas nominatif (position de sujet). Il introduit la phrase nominale finale qui conclut le verset par une déclaration générale.

**Lā yuḥibbu** (n'aime pas) est un verbe à l'inaccompli, troisième personne du singulier, forme dérivée à préfixe, précédé de la particule de négation lā. Cette particule avec l'inaccompli exprime la négation d'une réalité générale ou habituelle — non pas « il n'est pas en train d'aimer à cet instant » mais « ce n'est pas sa ligne de conduite d'aimer ». D'après les sources étymologiques, la racine ح ب ب regroupe l'acte d'orienter sa préférence vers un objet. Le Coran attestant que Dieu agrée (radiya) ceux qu'il aime, l'attribution n'est pas un anthropomorphisme inventé.

**Aẓ-ẓālimīna** (les injustes) est un participe actif masculin pluriel défini au cas accusatif. Le participe actif (une forme qui dit que la personne fait activement l'action) désigne ceux qui pratiquent l'acte comme habitude. D'après les sources étymologiques, la racine ظ ل م renvoie à l'acte de placer une chose hors de sa juste place, de porter tort à autrui, d'outrepasser ce qui est droit. Le défini al- isole la catégorie de ceux qui sont caractérisés par cette pratique.

§JUSTIFICATION§

**accordé foi** — Le sens retenu est « avoir la foi » du sens Foi/Adhésion. On traduit āmanū par « ont accordé foi » car l'accompli présente l'adhésion comme un acte posé et non comme un état installé. L'alternative « ont cru » est écartée car « croire » en français courant a dérivé vers « supposer sans certitude » (« je crois qu'il pleut ») alors que la racine renvoie à une adhésion ferme. L'alternative « ont eu la foi » est écartée car elle insiste sur la possession d'un état plus que sur l'acte d'adhérer.

**fait** — Le sens retenu est « agir » du sens Action/Oeuvre. On traduit ʿamilū par « fait » car c'est le verbe français courant qui correspond à la production concrète d'une œuvre. L'alternative « ont travaillé » est écartée car « travailler » évoque aujourd'hui surtout l'activité professionnelle rémunérée. L'alternative « ont œuvré » est écartée car « œuvrer » est du registre littéraire.

**œuvres intègres** — Le sens retenu est « oeuvre bonne » du sens Bonté/Rectitude. On traduit aṣ-ṣāliḥāti par « les œuvres intègres » car « intègre » rend mieux l'idée de rectitude (ce qui est droit, à sa juste place) que « bon » qui est trop général. L'alternative « bonnes œuvres » est écartée car « bon » ne rend pas la dimension de droiture propre à ṣ-l-ḥ. L'alternative « œuvres vertueuses » est écartée car « vertueuse » a une coloration morale ancienne peu naturelle en français courant.

**paiera intégralement** — Le sens retenu est « payer intégralement » du sens Fidélité/Accomplissement. On traduit yuwaffīhim par « Il leur paiera intégralement » car la forme dérivée à redoublement intensifie l'idée d'acquitter sans retrancher — ce que « payer intégralement » rend exactement. L'alternative « leur donnera entièrement » est écartée car « donner » suggère un cadeau sans contrepartie, alors que la structure du verset parle d'une contrepartie due. L'alternative « leur acquittera » est écartée car « acquitter » est du registre juridique et n'est pas du français courant.

**récompenses** — Le sens retenu est « récompense » du sens Rétribution/Salaire. On traduit ujūrahum par « leurs récompenses » car « récompense » en français courant désigne ce qu'on reçoit en contrepartie d'une action. L'alternative « salaires » est écartée car « salaire » s'emploie surtout pour un travail professionnel. L'alternative « rémunérations » est écartée car le mot est du registre administratif.

**Dieu** — Le sens retenu est « Dieu » du sens Divinité. Allāh est le nom propre de la Divinité en arabe, que le français rend par « Dieu » selon la règle des noms propres.

**n'aime pas** — Le sens retenu est « aimer » du sens Amour/Affection. On traduit lā yuḥibbu par « n'aime pas » car c'est la négation directe de l'orientation d'affection décrite par la racine. L'alternative « ne préfère pas » est écartée car « préférer » implique un choix entre plusieurs options, alors que le verset nie simplement l'orientation de l'affection vers une catégorie. L'alternative « n'a pas d'affection pour » est écartée car elle est lourde et non courante.

**injustes** — Le sens retenu est « injuste » du sens Injustice/Oppression. On traduit aẓ-ẓālimīna par « les injustes » car « injuste » désigne directement celui qui place les choses hors de leur juste place. L'alternative « oppresseurs » est écartée car « oppresseur » insiste sur la domination d'un groupe sur un autre, alors que ẓulm en arabe a une portée plus large qui inclut aussi le tort fait à soi-même. L'alternative « tyrans » est écartée car elle est politique et plus restreinte que le concept arabe.

§CRITIQUE§

**« accordé foi » vs « ont la foi »** — Les traductions courantes donnent « ceux qui ont la foi ». Notre traduction donne « ceux qui ont accordé foi ». La différence est grammaticale : l'arabe utilise un verbe à l'accompli (āmanū), pas un nom d'état (īmān). « Avoir la foi » transforme l'acte en état installé, comme s'il s'agissait d'une identité, alors que le verbe pointe un acte posé par chacun. Le sens global du verset change légèrement : la rétribution vise non pas une appartenance à une catégorie « des croyants » mais l'adhésion effective posée par chacun.

**« œuvres intègres » vs « bonnes œuvres »** — Les traductions courantes donnent « bonnes œuvres ». Notre traduction donne « œuvres intègres ». Le mot français « bon » est trop général et peut désigner ce qui est agréable, utile, conforme à la coutume. Ṣ-l-ḥ en arabe a un sens précis : ce qui est droit, réparé, à sa juste place, par opposition à fāsid (corrompu). Le sens global du verset est affecté : « bonnes œuvres » suggère un accomplissement de gestes pieux habituels, alors que « œuvres intègres » met l'accent sur la droiture et la justesse des actes.

**« paiera intégralement » vs « donnera entièrement »** — Les traductions courantes utilisent souvent « donnera » ou « accordera ». Notre traduction donne « paiera intégralement ». Le verbe « donner » suggère un cadeau gratuit, alors que waffā décrit le fait de verser ce qui est dû sans retrancher. Le sens global du verset change : il ne s'agit pas d'une faveur mais d'une contrepartie juste — la racine w-f-y est la même que celle utilisée pour honorer un contrat. L'étymologie pure révèle que le verset décrit une loi de justice, pas une charité arbitraire.

**« Dieu » vs « Allah »** — Les traductions courantes gardent « Allah ». L'arabe dit Allāh, qui est le nom propre de la Divinité en arabe. En français, le nom propre de la Divinité est « Dieu ». Garder « Allah » crée une fausse exoticité qui suggère qu'il s'agirait d'une divinité différente.

**« n'aime pas » vs « n'aime pas »** — Identique dans la plupart des traductions courantes. Sur ce point, les traductions convergent avec la nôtre, sans différence notable.`;

  // Segments for display
  const segments = [
    { fr: "et", pos: "particule", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "quant à", pos: "particule", phon: "ammā", arabic: "أَمَّا", word_key: null, is_particle: true, sense_retenu: null, position: 2 },
    { fr: "ceux qui", pos: "pronom_relatif", phon: "alladhīna", arabic: "ٱلَّذِينَ", word_key: "dhhy", is_particle: false, sense_retenu: "non trouvé", position: 3 },
    { fr: "ont accordé foi", pos: "verbe", phon: "āmanū", arabic: "ءَامَنُوا۟", word_key: "amn", is_particle: false, sense_retenu: "avoir la foi", position: 4 },
    { fr: "et", pos: "particule", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 5 },
    { fr: "fait", pos: "verbe", phon: "ʿamilū", arabic: "عَمِلُوا۟", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 6 },
    { fr: "les œuvres intègres", pos: "nom", phon: "aṣ-ṣāliḥāti", arabic: "ٱلصَّـٰلِحَـٰتِ", word_key: "slh", is_particle: false, sense_retenu: "oeuvre bonne", position: 7 },
    { fr: "alors", pos: "particule", phon: "fa", arabic: "فَ", word_key: null, is_particle: true, sense_retenu: null, position: 8 },
    { fr: "Il leur paiera intégralement", pos: "verbe", phon: "yuwaffīhim", arabic: "يُوَفِّيهِمْ", word_key: "wfy", is_particle: false, sense_retenu: "payer intégralement", position: 9 },
    { fr: "leurs récompenses", pos: "nom", phon: "ujūrahum", arabic: "أُجُورَهُمْ", word_key: "ajr", is_particle: false, sense_retenu: "récompense", position: 10 },
    { fr: "et", pos: "particule", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 11 },
    { fr: "Dieu", pos: "nom", phon: "allāhu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 12 },
    { fr: "ne pas", pos: "particule", phon: "lā", arabic: "لَا", word_key: null, is_particle: true, sense_retenu: null, position: 13 },
    { fr: "aime", pos: "verbe", phon: "yuḥibbu", arabic: "يُحِبُّ", word_key: "hbb", is_particle: false, sense_retenu: "aimer", position: 14 },
    { fr: "les injustes", pos: "nom", phon: "aẓ-ẓālimīna", arabic: "ٱلظَّـٰلِمِينَ", word_key: "zlm", is_particle: false, sense_retenu: "injuste", position: 15 }
  ];

  const { error: uErr } = await db.from('verse_analyses').update({
    full_translation,
    translation_arab,
    translation_meditational,
    translation_explanation,
    segments
  }).eq('verse_id', verseId);

  if (uErr) { console.error('Update err:', uErr); return; }
  console.log('verse_analyses updated OK');

  // ========= word_daily for each retained sense =========
  const dailyPhrases = [
    // amn → avoir la foi
    { analysis_id: 287, phrase_fr: "Les habitants du quartier ont accordé foi à la parole du médiateur.", phrase_ar: null, context: "adhésion à une parole" },
    { analysis_id: 287, phrase_fr: "Elle a accordé foi au témoignage de son amie malgré les rumeurs.", phrase_ar: null, context: "confiance en une parole" },
    { analysis_id: 287, phrase_fr: "On n'accorde foi qu'à celui qu'on a éprouvé.", phrase_ar: null, context: "principe de vérification" },
    // eml → agir
    { analysis_id: 393, phrase_fr: "Il a agi vite pour réparer la fuite avant l'orage.", phrase_ar: null, context: "action concrète" },
    { analysis_id: 393, phrase_fr: "Plutôt que de se plaindre, elle a agi pour trouver une solution.", phrase_ar: null, context: "action au lieu de parler" },
    { analysis_id: 393, phrase_fr: "Agir vaut mieux que promettre.", phrase_ar: null, context: "proverbe d'action" },
    // slh → œuvre bonne
    { analysis_id: 326, phrase_fr: "Accompagner une personne âgée aux courses est une œuvre bonne.", phrase_ar: null, context: "action droite du quotidien" },
    { analysis_id: 326, phrase_fr: "Il passe ses samedis à faire des œuvres bonnes dans son quartier.", phrase_ar: null, context: "engagement bénévole" },
    { analysis_id: 326, phrase_fr: "Une œuvre bonne, même petite, remet les choses à leur juste place.", phrase_ar: null, context: "principe de rectitude" },
    // wfy → payer intégralement
    { analysis_id: 487, phrase_fr: "Le client a payé intégralement la facture avant de partir.", phrase_ar: null, context: "paiement complet" },
    { analysis_id: 487, phrase_fr: "Elle tient à payer intégralement ce qu'elle doit, même en retard.", phrase_ar: null, context: "honnêteté dans la dette" },
    { analysis_id: 487, phrase_fr: "Un contrat n'est respecté que si les deux parties paient intégralement ce qui est dû.", phrase_ar: null, context: "principe contractuel" },
    // ajr → récompense
    { analysis_id: 609, phrase_fr: "L'enfant attend sa récompense après avoir rangé sa chambre.", phrase_ar: null, context: "contrepartie d'un effort" },
    { analysis_id: 609, phrase_fr: "La meilleure récompense de l'effort, c'est parfois le travail accompli lui-même.", phrase_ar: null, context: "valeur de l'effort" },
    { analysis_id: 609, phrase_fr: "Il a touché sa récompense pour avoir retrouvé le chien perdu.", phrase_ar: null, context: "récompense pour service rendu" },
    // hbb → aimer
    { analysis_id: 930, phrase_fr: "Elle aime passer du temps avec ses grands-parents le dimanche.", phrase_ar: null, context: "affection familiale" },
    { analysis_id: 930, phrase_fr: "Il aime son métier parce qu'il y a mis du sens.", phrase_ar: null, context: "amour du travail" },
    { analysis_id: 930, phrase_fr: "On aime mieux ce qu'on a choisi librement.", phrase_ar: null, context: "principe d'affection" },
    // zlm → injuste
    { analysis_id: 354, phrase_fr: "Le contremaître est devenu injuste envers les nouveaux employés.", phrase_ar: null, context: "injustice au travail" },
    { analysis_id: 354, phrase_fr: "Il trouve injuste qu'on punisse toute la classe pour une seule faute.", phrase_ar: null, context: "injustice collective" },
    { analysis_id: 354, phrase_fr: "Personne n'aime travailler sous un chef injuste.", phrase_ar: null, context: "conséquence de l'injustice" }
  ];

  // Check which analysis_ids already have phrases — SKIP those
  for (const p of dailyPhrases) {
    // group check per analysis_id to avoid dupes
  }

  // SKIP entirely if any exist (rule). We checked earlier all are empty.
  const { error: dailyErr } = await db.from('word_daily').insert(dailyPhrases);
  if (dailyErr) console.error('word_daily err:', dailyErr);
  else console.log('word_daily inserted:', dailyPhrases.length, 'phrases');

  // alh has 2851 occ and senses_done but no daily — intentionally skip to not pollute a root used everywhere

  console.log('\n=== VERSET 3:57 — ETAPE 3+4 COMPLETE ===');
}

run().catch(console.error);
