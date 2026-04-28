// S3:V61 — VWA partie 1 : positions 3, 6, 8, 10, 11, 12, 13
const VWA_PART1 = [
  // ─── Position 3 — ḥājjaka (ح ج ج) : verbe accompli III 3MS actif + suffixe 2MS ───
  {
    position: 3, word_key: 'hjj', sense_chosen: 'disputer',
    reason: "Verbe à l'accompli, 3ème personne du masculin singulier, forme III (fāʿala), voix active. La forme III porte l'idée d'une action orientée VERS un autre et engageant une réciprocité — elle décrit un face-à-face. Le suffixe -ka (2MS) désigne le complément d'objet direct : le Prophète. L'accompli marque l'événement posé comme réalité à laquelle le verset répond : si quelqu'un s'est déjà engagé dans un face-à-face argumentatif avec toi sur ce sujet. Le sujet est le pronom relatif man (celui/quiconque) qui précède.",
    analysis_axes: {
      concept_chosen: 'Argumentation/Dispute',
      concepts: {
        'Argumentation/Dispute': {
          status: 'retenu',
          senses: ['disputer','argumenter','preuve','vaincre par l\'argument','plaider'],
          proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme III de ح ج ج (ḥājja) décrit un échange bidirectionnel d'arguments entre deux parties qui cherchent à l'emporter par la preuve. Ce sens est compatible avec le verbe à l'accompli, 3MS, forme III avec complément direct 2MS : la forme III impose la présence de deux acteurs, et l'accompli pose la scène comme déjà engagée. Le champ lexical de la suite (nadʿu, nabtahil, laʿnat, kādhibīn — appeler, invoquer, malédiction, menteurs) situe cet échange comme confrontation sur la vérité, pas comme un simple voyage."
        },
        'Direction/Destination': {
          status: 'peu_probable',
          senses: ['se rendre vers','visiter','visiter fréquemment'],
          proof_ctx: "Sens premier physique de la racine — se rendre vers un but (origine du ḥajj pèlerinage). La forme III avec un complément personnel humain ne marche pas pour ce sens : on ne « se rend vers » pas quelqu'un de cette manière transitive dans l'usage coranique. Le contexte de confrontation argumentative l'élimine."
        },
        'Sondage/Médecine': {
          status: 'nul',
          senses: ['sonder','traiter une fracture','raser'],
          proof_ctx: "Sens physique d'acte médical — hors sujet pour une confrontation avec le destinataire du verset."
        },
        'Retrait/Hésitation': {
          status: 'nul',
          senses: ['se retirer','rester sur place','retenir en soi'],
          proof_ctx: "Sens d'état intérieur d'immobilité — opposé à la forme III qui suppose une action dirigée vers l'autre. Hors sujet."
        },
        'Anatomie/Temps': {
          status: 'nul',
          senses: ['os de l\'orbite','année'],
          proof_ctx: "Sens nominaux isolés — hors sujet pour un verbe à la forme III."
        }
      }
    }
  },
  // ─── Position 6 — baʿdi (ب ع د) : nom génitif idafa ───
  {
    position: 6, word_key: 'baed', sense_chosen: 'après',
    reason: "Nom masculin singulier au cas génitif (rection par la préposition min). Il est en annexion (idafa) avec ce qui suit (mā jāʾaka... « ce qui t'est venu »). L'ensemble min baʿdi mā jāʾaka forme une locution temporelle : « après que t'est venu ». Le nom désigne la postériorité temporelle : la position dans le temps qui suit un autre événement.",
    analysis_axes: {
      concept_chosen: 'Postériorité',
      concepts: {
        'Postériorité': {
          status: 'retenu',
          senses: ['après','ensuite'],
          proof_ctx: "D'après les sources étymologiques, baʿd en nom en idafa avec une proposition relative forme la locution standard « après que ». Ce sens est compatible avec le nom au génitif en idafa : la relation d'appartenance désigne ici un repère temporel par rapport à ce qui est mentionné dans l'idafa. Le verset oppose deux moments : la venue du savoir, puis la dispute qui suit — la postériorité est la charnière logique du reproche."
        },
        'Éloignement/Distance': {
          status: 'peu_probable',
          senses: ['être loin','éloignement'],
          proof_ctx: "Sens spatial premier de la racine — séparation par la distance. Ici le nom est en idafa avec mā jāʾaka (ce qui est venu), construction standard de la locution temporelle. L'idée spatiale reste en arrière-plan étymologique mais n'est pas activée."
        },
        'Mort/Destruction': {
          status: 'nul',
          senses: ['périr'],
          proof_ctx: "Sens figuré d'éloignement ultime — hors sujet pour une locution temporelle courante."
        }
      }
    }
  },
  // ─── Position 8 — jāʾaka (ج ي ء) : verbe accompli I 3MS actif + suffixe 2MS ───
  {
    position: 8, word_key: 'jyy', sense_chosen: 'venir',
    reason: "Verbe à l'accompli, 3ème personne du masculin singulier, forme I, voix active. Le suffixe -ka (2MS) est complément d'objet : « est venu à toi ». Le sujet n'est pas exprimé en tant que mot mais reprend mā (ce qui) de la proposition relative — littéralement : « ce qui t'est venu ». L'accompli pose la venue comme événement achevé et réel — le savoir est déjà parvenu.",
    analysis_axes: {
      concept_chosen: 'Venue/Apport',
      concepts: {
        'Venue/Apport': {
          status: 'retenu',
          senses: ['venir','apporter','arriver','se rendre à'],
          proof_ctx: "D'après les sources étymologiques, jāʾa décrit le déplacement directionnel d'une chose ou personne vers un but. Ce sens est compatible avec le verbe à l'accompli avec complément d'objet personnel (-ka) : le sujet (ce qui est venu) se déplace vers le destinataire. La suite « mina l-ʿilmi » (du savoir) précise la nature de ce qui est venu. L'accompli pose la venue comme déjà réalisée, ce qui fonde le reproche : la dispute vient APRÈS cette venue."
        },
        'Apport/Causalité': {
          status: 'probable',
          senses: ['amener','faire venir'],
          proof_ctx: "Sens causatif proche — amener, faire venir quelque chose à quelqu'un. En arabe, jāʾa peut fonctionner avec un complément d'objet pour signifier « apporter à », mais la construction ici (sujet = mā, objet = -ka) est clairement « venir à », non « apporter ». Le sens causatif conviendrait à forme IV (ajāʾa) mais pas à la forme I employée ici."
        },
        'Confrontation': {
          status: 'nul',
          senses: ['faire face','être en face'],
          proof_ctx: "Sens d'opposition physique — hors sujet pour un sujet abstrait (ce qui est venu, = le savoir)."
        }
      }
    }
  },
  // ─── Position 10 — al-ʿilmi (ع ل م) : nom défini génitif ───
  {
    position: 10, word_key: 'elm', sense_chosen: 'savoir',
    reason: "Nom masculin singulier défini par l'article al-, au cas génitif (rection par la préposition mina qui précède). La préposition min(a) ici exprime la partitivité ou la nature (« du savoir », « en fait de savoir »). L'article al- désigne LE savoir identifié — celui qui a été exposé dans les versets précédents sur le cas de Jésus. L'ensemble mina l-ʿilmi qualifie mā (ce qui est venu) : ce qui est venu, qui relève du savoir.",
    analysis_axes: {
      concept_chosen: 'Savoir/Connaissance',
      concepts: {
        'Savoir/Connaissance': {
          status: 'retenu',
          senses: ['savoir','connaître','être informé','certitude','savant','science','enseignement'],
          proof_ctx: "D'après les sources étymologiques, ʿilm désigne la connaissance certaine, fondée, de ce qui est réel — par opposition à la simple opinion (ẓann). Ce sens est compatible avec le nom défini au génitif précédé de mina (partitif/qualitatif) : le verset qualifie ce qui est venu au Prophète comme relevant du domaine du savoir solide, non de la conjecture. L'article al- et la place dans le verset (après la mention des signes du récit de Jésus) identifient ce savoir comme celui que la révélation vient d'exposer."
        },
        'Marque/Signe': {
          status: 'peu_probable',
          senses: ['marquer','signe','drapeau','montagne','repère','étendard','lèvre fendue'],
          proof_ctx: "Sens premier physique de la racine — ce qui marque, ce qui repère. L'article al- avec ce sens donnerait « le repère », possible mais moins naturel dans une construction mina l-ʿilmi qui s'oppose à la dispute sur la vérité. Le champ lexical (disputer, menteurs) active « savoir » plus nettement."
        },
        'Monde/Création': {
          status: 'nul',
          senses: ['monde','les mondes','ensemble des créatures','univers'],
          proof_ctx: "Sens nominal dérivé (ʿālam) — hors sujet ici."
        },
        'Sens isolé/Enseigner': {
          status: 'nul',
          senses: ['enseigner'],
          proof_ctx: "Sens verbal — le mot ici est un nom, pas un verbe."
        },
        'Lieu/Géographie': {
          status: 'nul',
          senses: ['informer','nommer'],
          proof_ctx: "Sens verbaux isolés — hors sujet pour un nom défini au génitif."
        },
        'Sens isolé/Homonyme': {
          status: 'nul',
          senses: ['homonyme'],
          proof_ctx: "Sens nominal isolé — hors sujet."
        }
      }
    }
  },
  // ─── Position 11 — fa-qul (ق و ل) : impératif 2MS + préfixe fa ───
  {
    position: 11, word_key: 'qwl', sense_chosen: 'dire',
    reason: "Verbe à l'impératif, 2ème personne du masculin singulier, forme I, voix active. Le préfixe fa- enchaîne la conséquence sur la condition qui précède (man ḥājjaka... fa-qul = « quiconque a disputé... alors dis »). L'impératif s'adresse au destinataire du verset (le Prophète). Le verbe introduit le discours direct qui suit (taʿālaw...) : c'est la parole que le Prophète doit prononcer.",
    analysis_axes: {
      concept_chosen: 'Parole/Énonciation',
      concepts: {
        'Parole/Énonciation': {
          status: 'retenu',
          senses: ['dire','parler','parole','discours','affirmer'],
          proof_ctx: "D'après les sources étymologiques, qāla/yaqūlu désigne l'acte extérieur de produire une parole adressée à autrui. Ce sens est compatible avec l'impératif 2MS suivi du discours direct : la parole va sortir du locuteur vers son interlocuteur. La construction (fa-qul + verbe d'appel au pluriel taʿālaw) est typique de l'introduction d'un discours prononcé face à une audience."
        },
        'Pensée/Avis': {
          status: 'peu_probable',
          senses: ['opinion','avis','doctrine'],
          proof_ctx: "Sens nominal dérivé (qawl = jugement intérieur) — incompatible avec la forme impérative qul qui introduit un acte de parole énoncé à voix haute."
        },
        'Sens isolé/Puissance': {
          status: 'nul',
          senses: ['puissance'],
          proof_ctx: "Sens nominal isolé — hors sujet pour un impératif d'énonciation."
        },
        'Corps/Anatomie': {
          status: 'nul',
          senses: ['troupeau'],
          proof_ctx: "Sens nominal isolé — hors sujet."
        }
      }
    }
  },
  // ─── Position 12 — taʿālaw (ع ل و) : impératif 2MP, forme figée ───
  {
    position: 12, word_key: 'elw', sense_chosen: 'le Très-Haut',
    reason: "Verbe à l'impératif, 2ème personne du masculin pluriel. Le verbe taʿālā / taʿāl est une forme figée de commandement en arabe classique qui signifie concrètement « viens ici, approche », employée comme formule d'invitation. Son origine lexicographique est dans la racine ع ل و (hauteur/élévation) : l'invitation dit littéralement « élève-toi [jusqu'à moi] », d'où le sens pratique « viens ». En usage courant, la racine a perdu son sens physique d'élévation dans cette formule — mais le sens étymologique reste attesté. Nous retenons donc le concept « Hauteur/Élévation » qui porte l'étymologie, en sachant que le mot français « venir / approcher » rend la valeur fonctionnelle de la formule en contexte.",
    analysis_axes: {
      concept_chosen: 'Hauteur/Élévation',
      concepts: {
        'Hauteur/Élévation': {
          status: 'retenu',
          senses: ['être haut','élever','s\'élever','supérieur','le Très-Haut','rivaliser en élévation'],
          proof_ctx: "D'après les sources étymologiques, la racine ع ل و désigne le fait d'être en position haute, et la forme taʿāl est une formule d'appel qui invite l'autre à s'élever jusqu'au locuteur — d'où son usage figé pour dire « viens ». Le sens étymologique d'élévation reste actif : le locuteur se pose comme point de convergence, et l'invitation est une invitation à venir le rejoindre. Ce sens est compatible avec l'impératif pluriel adressé aux interlocuteurs disputants — l'appel à se rapprocher pour l'épreuve commune. Aucun autre sens de la racine n'entre dans cette construction."
        },
        'Animal/Faune': {
          status: 'nul',
          senses: ['charger sur un chameau'],
          proof_ctx: "Sens concret de la racine (hisser sur un chameau). Hors sujet pour un impératif adressé à des personnes humaines."
        }
      }
    }
  },
  // ─── Position 13 — nadʿu (د ع و) : inaccompli jussif 1MP actif ───
  {
    position: 13, word_key: 'dew', sense_chosen: 'appeler',
    reason: "Verbe à l'inaccompli, 1ère personne du pluriel, forme I, voix active, au mode jussif (cohortation) — le jussif marqué par l'apocope (nadʿu sans voyelle finale longue). Le jussif ici est de cohortation : « appelons » (nous, collectivement). L'objet direct qui suit (nos fils, vos fils, etc.) liste les personnes convoquées.",
    analysis_axes: {
      concept_chosen: 'Appel/Invocation',
      concepts: {
        'Appel/Invocation': {
          status: 'retenu',
          senses: ['appeler','invoquer','prier','demander','inviter'],
          proof_ctx: "D'après les sources étymologiques, daʿā/yadʿū décrit l'acte extérieur de diriger sa voix vers quelqu'un pour l'attirer à soi. Ce sens est compatible avec l'inaccompli jussif 1MP avec complément d'objet humain direct (abnāʾa-nā...) : on appelle des personnes pour qu'elles viennent. La suite immédiate (nos fils, vos fils, nos femmes...) est une liste de personnes convoquées, ce qui active sans ambiguïté le sens « appeler » plutôt que « invoquer » (qui supposerait un destinataire divin)."
        },
        'Prétention/Revendication': {
          status: 'nul',
          senses: ['prétendre','revendiquer une filiation'],
          proof_ctx: "Sens de la forme I dans d'autres contextes (revendiquer) — hors sujet ici où le complément est une liste de personnes à convoquer, non un statut à revendiquer."
        },
        'Sens isolé/Maudire': {
          status: 'nul',
          senses: ['maudire'],
          proof_ctx: "Sens isolé qui apparaît dans des formules spécifiques (daʿāhu ʿalayhi = « il l'a appelé contre lui »). Ici le verbe est sans préposition ʿalā et avec complément direct humain — le sens est l'appel de convocation."
        }
      }
    }
  }
];

module.exports = { VWA_PART1 };
