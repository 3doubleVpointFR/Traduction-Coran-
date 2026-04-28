// S3:V61 — VWA partie 3 : positions 21, 22, 23, 24, 26 (dernières positions importantes)
const VWA_PART3 = [
  // ─── Position 21 — nabtahil (ب ه ل) : inaccompli jussif 1MP forme VIII ───
  {
    position: 21, word_key: 'bhl', sense_chosen: 's\'humilier en invocation',
    reason: "Verbe à l'inaccompli, 1ère personne du pluriel, forme VIII (iftaʿala → ibtahala), voix active, au mode jussif (cohortation marquée par l'apocope : nabtahil au lieu de nabtahilu). La forme VIII marque l'engagement personnel et soutenu du sujet dans l'action — celui qui s'ibtahil s'y met lui-même, activement. Le jussif de cohortation coordonné par thumma (« ensuite ») enchaîne cette nouvelle action sur les précédentes (taʿālaw, nadʿu) : après avoir appelé les proches, « humilions-nous ensemble en invocation ». Le verbe est sans complément direct, ce qui oriente vers l'acte d'abaissement intérieur plutôt que vers un acte dirigé contre autrui.",
    analysis_axes: {
      concept_chosen: 'Supplication fervente/Humble invocation',
      concepts: {
        'Supplication fervente/Humble invocation': {
          status: 'retenu',
          senses: ['s\'humilier en invocation','supplier avec ardeur'],
          proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme VIII ibtahala est attestée comme tropical avec le sens de s'abaisser soi-même devant Dieu, synonyme de taḍarruʿ — adresser une supplication sincère, sans hypocrisie, avec ardeur. C'est un acte intérieur d'humilité qui se manifeste par la parole tournée vers Dieu. Ce sens est compatible avec la forme VIII (engagement personnel du sujet) et avec l'absence de complément d'objet dans le verset : le verbe ne frappe personne, il décrit une posture du sujet lui-même. Le jussif de cohortation suivi de « ensuite plaçons la laʿna sur les menteurs » sépare nettement deux temps : d'abord s'humilier, puis demander le départage."
        },
        'Malédiction/Imprécation': {
          status: 'probable',
          senses: ['invoquer la malédiction','maudire mutuellement'],
          proof_ctx: "Sens attesté par Lane's d'après une lecture (Bd in iii. 54) qui rapproche ibtahala de tabāhala (forme VI) : s'imprécer mutuellement la malédiction de Dieu sur le menteur. Cette lecture est tropicale et contextuelle — elle vient de la tradition exégétique qui lit le verset comme une mubāhala. La distinction philosophique : « maudire mutuellement » est un acte dirigé contre l'autre, alors que « s'humilier en invocation » est un acte d'abaissement du sujet. Le verset enchaîne nabtahil puis fa-najʿal laʿnat allāhi — si nabtahil portait déjà l'idée de malédiction, la suite serait redondante. La séparation entre les deux verbes active plutôt le sens premier de supplication humble, avec la demande de malédiction comme étape suivante et distincte."
        },
        'Liberté/Laisser libre': {
          status: 'peu_probable',
          senses: ['laisser la chamelle libre','laisser à son propre jugement'],
          proof_ctx: "Sens concret premier de la racine (laisser libre, sans entrave). La forme VIII au sens intransitif réfléchi pourrait théoriquement rendre « se laisser aller à » mais aucune attestation classique ne donne ce sens avec la forme VIII — l'attestation forte de la forme VIII est la supplication fervente."
        },
        'Sens isolé/Laisser': {
          status: 'nul',
          senses: ['laisser libre'],
          proof_ctx: "Sens concret isolé — hors sujet pour la forme VIII."
        },
        'Noblesse/Générosité': {
          status: 'nul',
          senses: ['qualité de fuir les choses basses'],
          proof_ctx: "Sens nominal d'un dérivé (bahlala, buhlūl) — hors sujet pour un verbe à la forme VIII."
        }
      }
    }
  },
  // ─── Position 22 — fa-najʿal (ج ع ل) : inaccompli jussif 1MP I + préfixe fa ───
  {
    position: 22, word_key: 'jel', sense_chosen: 'placer',
    reason: "Verbe à l'inaccompli, 1ère personne du pluriel, forme I, voix active, au mode jussif (apocope marquée : najʿal au lieu de najʿalu). Le préfixe fa- enchaîne l'action sur ce qui précède (« et plaçons »). Le verbe gouverne deux compléments : un objet direct (laʿnata llāhi, « la laʿna de Dieu ») et un complément introduit par la préposition ʿalā (« sur al-kādhibīna, les menteurs »). La construction jaʿala X ʿalā Y = « placer X sur Y » active la valeur spatiale métaphorique du verbe.",
    analysis_axes: {
      concept_chosen: 'Action/Réalisation',
      concepts: {
        'Action/Réalisation': {
          status: 'retenu',
          senses: ['faire','rendre','placer','commencer à','établir','créer'],
          proof_ctx: "D'après les sources étymologiques, jaʿala désigne l'acte de produire un état ou de transformer une réalité — dont l'une des valeurs est « poser/placer » quand le verbe est construit avec deux compléments (objet + ʿalā). Ce sens est compatible avec l'inaccompli jussif 1MP en construction « najʿal laʿnata llāhi ʿalā l-kādhibīna » : nous plaçons une chose sur une autre. Le parallélisme avec d'autres versets coraniques qui disent « jaʿala ʿalayhim la laʿna » (Dieu plaça sur eux la laʿna) confirme la valeur d'établissement effectif d'un état — pas une simple demande, mais la mise en place."
        },
        'Sens isolé/Récompense': {
          status: 'nul',
          senses: ['récompense'],
          proof_ctx: "Sens nominal isolé — hors sujet pour un verbe à l'inaccompli."
        }
      }
    }
  },
  // ─── Position 23 — laʿnata (ل ع ن) : nom fém. accusatif idafa ───
  {
    position: 23, word_key: 'len', sense_chosen: 'éloigner',
    reason: "Nom féminin singulier (nom d'action laʿna, forme faʿla), au cas accusatif (complément d'objet direct de najʿal). Il est en annexion (idafa) avec allāhi (« la laʿna de Dieu ») — ce qui rattache l'acte à son auteur. Le nom désigne l'action abstraite ou le résultat de l'action du verbe laʿana. La suite (ʿalā l-kādhibīna = sur les menteurs) précise la cible atteinte par cet éloignement.",
    analysis_axes: {
      concept_chosen: 'Éloignement/Expulsion',
      concepts: {
        'Éloignement/Expulsion': {
          status: 'retenu',
          senses: ['éloigner','repousser loin','exclure'],
          proof_ctx: "D'après les sources étymologiques, la racine ل ع ن désigne d'abord l'acte de mettre à distance, de repousser au loin — la laʿna de Dieu est l'éloignement de Sa miséricorde. Ce sens est compatible avec le nom d'action en idafa avec allāh et complément ʿalā + personne : « placer l'éloignement de Dieu sur les menteurs » = la mise à distance émanant de Dieu, qui descend sur les menteurs et les tient à l'écart de Sa proximité. Le texte décrit un acte directionnel qui sort de la source divine et atteint les menteurs — la métaphore spatiale de ʿalā renforce cette lecture."
        },
        'Malédiction/Exclusion': {
          status: 'probable',
          senses: ['maudire','malédiction','maudit'],
          proof_ctx: "Sens usuel de l'équivalent français « malédiction ». Le mot français « malédiction » porte en français courant une connotation de sortilège, d'incantation dirigée pour faire subir un mal — ce qui n'est pas exactement l'étymologie arabe. La distinction philosophique : la malédiction implique un acte de parole qui opère un mal, alors que la laʿna coranique est d'abord une mise à distance de la miséricorde. Le premier est dynamique et infligeant, le second est séparatif et privatif. L'étymologie conduit à privilégier « éloignement » qui rend plus fidèlement la racine."
        },
        'Vilipende/Blâme': {
          status: 'peu_probable',
          senses: ['vilipender','réprouver'],
          proof_ctx: "Sens verbal d'acte de parole réprobateur. Le nom laʿna peut désigner le résultat de ce blâme mais n'est pas réduit à la parole — la laʿna est une réalité placée sur quelqu'un, pas simplement un reproche énoncé."
        },
        'Sens isolé/Base de palmier': {
          status: 'nul',
          senses: ['partie basse du régime'],
          proof_ctx: "Sens concret isolé attesté par Lane's (laʿīn = base du régime de palmier) — hors sujet ici."
        }
      }
    }
  },
  // ─── Position 24 — allāhi (ا ل ه) : nom propre génitif idafa ───
  {
    position: 24, word_key: 'alh', sense_chosen: 'Dieu',
    reason: "Nom propre d'Allāh, au cas génitif (second terme de l'idafa laʿnata llāhi = « la laʿna de Dieu »). Le nom ʾAllāh est lexicalement analysé comme dérivé de la racine ا ل ه (divinité, adoration) avec l'article al- contracté — il désigne le Dieu unique. L'idafa rattache l'éloignement à son auteur : c'est l'éloignement qui émane de Dieu.",
    analysis_axes: {
      concept_chosen: 'Divinité',
      concepts: {
        'Divinité': {
          status: 'retenu',
          senses: ['divinité','divinité (concept)','Dieu','théologie','exclamation divine','oui certes'],
          proof_ctx: "D'après les sources étymologiques, le nom Allāh est dérivé de la racine ا ل ه avec l'article défini ; il désigne la divinité unique adorée. Ce sens est compatible avec le nom propre au génitif en idafa — la construction laʿnata llāhi rattache l'éloignement à son émetteur divin. Le verset pose Dieu comme la source extérieure qui opère la mise à distance sur les menteurs."
        },
        'Adoration/Dévotion': {
          status: 'nul',
          senses: ['adorer','faire adorer','se dévouer au culte','diviniser'],
          proof_ctx: "Sens verbal de la racine — hors sujet pour le nom propre qui est en idafa."
        },
        'Détresse': {
          status: 'nul',
          senses: ['être perplexe','se lamenter'],
          proof_ctx: "Sens verbal secondaire — hors sujet pour le nom propre de Dieu."
        },
        'Refuge/Protection': {
          status: 'nul',
          senses: ['chercher refuge','protéger','demeurer'],
          proof_ctx: "Sens verbaux isolés — hors sujet."
        },
        'Domination': {
          status: 'nul',
          senses: ['asservir'],
          proof_ctx: "Sens verbal isolé — hors sujet."
        }
      }
    }
  },
  // ─── Position 26 — al-kādhibīna (ك ذ ب) : participe actif pluriel accusatif/génitif défini ───
  // Rection par ʿalā → génitif ; la terminaison -īna est invariable accusatif/génitif.
  {
    position: 26, word_key: 'kdhb', sense_chosen: 'mentir',
    reason: "Participe actif (ism al-fāʿil, kādhib = « celui qui ment »), masculin pluriel, défini par l'article al-, au cas génitif (rection par la préposition ʿalā qui précède). Le participe actif décrit une action continue ou habituelle du sujet — ceux qui se caractérisent par l'acte de mentir. L'article al- désigne une catégorie identifiée : ceux qui seront établis comme tels par l'épreuve proposée.",
    analysis_axes: {
      concept_chosen: 'Mensonge/Fausseté',
      concepts: {
        'Mensonge/Fausseté': {
          status: 'retenu',
          senses: ['mentir','dire le faux','fausseté'],
          proof_ctx: "D'après les sources étymologiques, kadhaba décrit l'acte extérieur de dire ce qui est contraire à la réalité en le sachant. Le participe actif kādhib dénote celui qui se caractérise par cet acte. Ce sens est compatible avec le participe actif défini au pluriel : une catégorie de personnes dont le trait identifiant est la parole mensongère. Le verset pose l'épreuve comme moyen de discriminer qui dans les deux camps relève effectivement de cette catégorie — l'éloignement de Dieu tranchera sur la vérité des affirmations."
        },
        'Déni/Rejet': {
          status: 'probable',
          senses: ['démentir','nier','traiter de menteur'],
          proof_ctx: "Sens dérivé actif — démentir est un acte de parole dirigé contre une affirmation présentée comme vraie. La distinction philosophique : mentir est dire soi-même le faux (kādhib), alors que démentir est déclarer faux ce que dit l'autre (mukadhdhib, forme II active). Le participe actif de forme I ici retenu ne désigne pas le démentisseur mais le menteur lui-même. Le parallèle avec d'autres passages qui opposent ṣādiq (le véridique) et kādhib (le menteur) confirme le sens retenu."
        }
      }
    }
  }
];

module.exports = { VWA_PART3 };
