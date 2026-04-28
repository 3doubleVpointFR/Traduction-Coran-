// S3:V61 — VWA partie 2 : positions 14, 15, 16, 17, 18, 19
// Pour les paires (fils de nous / fils de vous), on garde les deux VWA avec le même concept retenu
//   mais on varie la justification selon le pronom suffixe (-nā / -kum).

const VWA_PART2 = [
  // Position 14 — abnāʾa-nā (ب ن ي) : nom pluriel accusatif idafa + suffixe 1P
  {
    position: 14, word_key: 'bny', sense_chosen: 'fils',
    reason: "Nom masculin pluriel (abnāʾ est pluriel de ibn), au cas accusatif (complément d'objet direct de nadʿu « appelons »). Il est en annexion (idafa) avec le pronom suffixe -nā (1ère personne du pluriel) : « nos fils ». La terminaison accusative du pluriel externe ordinaire serait -īna, mais abnāʾ est un pluriel brisé — son accusatif prend la voyelle fatḥa finale. La construction liste les catégories de personnes à convoquer côté du locuteur.",
    analysis_axes: {
      concept_chosen: 'Filiation',
      concepts: {
        'Filiation': {
          status: 'retenu',
          senses: ['fils'],
          proof_ctx: "D'après les sources étymologiques, ibn (pluriel abnāʾ) désigne le descendant direct, celui qui est « construit » à partir du père au sens biologique et social. Ce sens est compatible avec le nom pluriel accusatif en idafa avec un pronom personnel de groupe (-nā) : il désigne l'ensemble des enfants masculins rattachés au groupe désigné. Le champ lexical du verset (convoquer des catégories familiales : fils, femmes, personnes elles-mêmes) active ce sens sans ambiguïté."
        },
        'Construction/Édification': {
          status: 'nul',
          senses: ['construire','bâtir','édifier','donner une maison'],
          proof_ctx: "Sens verbal et nominal lié à l'acte de bâtir. La forme ici (pluriel abnāʾ avec suffixe personnel) n'active que le sens filial de la racine, non l'acte physique de construction."
        }
      }
    }
  },
  // Position 15 — wa-abnāʾa-kum (ب ن ي) : nom pluriel accusatif idafa + suffixe 2MP
  {
    position: 15, word_key: 'bny', sense_chosen: 'fils',
    reason: "Nom masculin pluriel, au cas accusatif (coordonné par wa- au précédent, toujours complément de nadʿu). Il est en annexion (idafa) avec le pronom suffixe -kum (2ème personne du masculin pluriel) : « vos fils ». Le parallélisme strict avec abnāʾa-nā (position 14) pose symétriquement les deux camps de la confrontation annoncée — chaque groupe convoque ses propres fils.",
    analysis_axes: {
      concept_chosen: 'Filiation',
      concepts: {
        'Filiation': {
          status: 'retenu',
          senses: ['fils'],
          proof_ctx: "Le sens retenu est le même qu'à la position précédente : les fils, descendants directs rattachés au groupe désigné par le pronom. Le changement du pronom suffixe (-kum au lieu de -nā) indique le groupe opposé dans le face-à-face. La forme pluriel accusatif en idafa active la même valeur : l'ensemble des enfants masculins rattachés au groupe, ici le groupe des interlocuteurs du Prophète."
        },
        'Construction/Édification': {
          status: 'nul',
          senses: ['construire','bâtir','édifier','donner une maison'],
          proof_ctx: "Sens verbal et nominal lié à l'acte de bâtir. Hors sujet pour un pluriel personnel."
        }
      }
    }
  },
  // Position 16 — wa-nisāʾa-nā (ن س و) : nom fém. pluriel accusatif idafa + suffixe 1P
  {
    position: 16, word_key: 'nsw', sense_chosen: 'femmes',
    reason: "Nom féminin pluriel (nisāʾ, pluriel sans singulier direct du même radical), au cas accusatif (coordonné par wa-, toujours complément de nadʿu). Il est en annexion (idafa) avec le pronom suffixe -nā (1P) : « nos femmes ». Dans une idafa avec un pronom personnel de groupe, le nom désigne les femmes rattachées au groupe — les épouses, les mères, les filles, les femmes du foyer pris ensemble.",
    analysis_axes: {
      concept_chosen: 'Féminin/Épouses',
      concepts: {
        'Féminin/Épouses': {
          status: 'retenu',
          senses: ['femmes','épouses','genre féminin'],
          proof_ctx: "D'après les sources étymologiques, nisāʾ est le pluriel désignant les êtres humains de sexe féminin pris collectivement. Ce sens est compatible avec le nom pluriel accusatif en idafa avec un pronom personnel de groupe (-nā) : il désigne l'ensemble des femmes appartenant au groupe — le versant féminin du foyer. Le parallélisme avec abnāʾa-nā (nos fils) et anfusa-nā (nous-mêmes) inscrit ce mot dans une énumération des catégories familiales convoquées."
        },
        'Oubli/Négligence': {
          status: 'nul',
          senses: ['oublier','négliger'],
          proof_ctx: "Sens verbal de la même racine — incompatible avec un nom pluriel féminin en idafa avec complément d'objet direct."
        },
        'Faiblesse/Oubli prolongé': {
          status: 'nul',
          senses: ['feindre d\'oublier'],
          proof_ctx: "Sens verbal de la forme VI — hors sujet pour un nom."
        },
        'Anatomie/Sciatique': {
          status: 'nul',
          senses: ['veine sciatique'],
          proof_ctx: "Sens anatomique isolé — hors sujet."
        }
      }
    }
  },
  // Position 17 — wa-nisāʾa-kum (ن س و) : parallèle côté adverse
  {
    position: 17, word_key: 'nsw', sense_chosen: 'femmes',
    reason: "Nom féminin pluriel au cas accusatif (coordonné par wa-, complément de nadʿu), en idafa avec le pronom suffixe -kum (2MP) : « vos femmes ». Le parallélisme strict avec wa-nisāʾa-nā (position 16) pose symétriquement les deux camps — chaque groupe convoque ses propres femmes dans l'épreuve commune.",
    analysis_axes: {
      concept_chosen: 'Féminin/Épouses',
      concepts: {
        'Féminin/Épouses': {
          status: 'retenu',
          senses: ['femmes','épouses','genre féminin'],
          proof_ctx: "Même sens qu'à la position précédente : les femmes rattachées au groupe. Le changement du pronom suffixe (-kum) désigne le groupe adverse. La structure énumérative du verset pose les deux camps en miroir — chacun rassemble ses proches."
        },
        'Oubli/Négligence': {
          status: 'nul',
          senses: ['oublier','négliger'],
          proof_ctx: "Sens verbal — hors sujet pour un nom en idafa."
        },
        'Faiblesse/Oubli prolongé': {
          status: 'nul',
          senses: ['feindre d\'oublier'],
          proof_ctx: "Sens verbal forme VI — hors sujet."
        },
        'Anatomie/Sciatique': {
          status: 'nul',
          senses: ['veine sciatique'],
          proof_ctx: "Sens anatomique isolé — hors sujet."
        }
      }
    }
  },
  // Position 18 — wa-anfusa-nā (ن ف س) : nom pluriel accusatif idafa + 1P
  {
    position: 18, word_key: 'nfs', sense_chosen: 'soi-même',
    reason: "Nom pluriel (anfus, pluriel de nafs) au cas accusatif (coordonné par wa-, complément de nadʿu), en idafa avec le pronom suffixe -nā (1P). En arabe, le nom nafs suivi d'un pronom personnel fonctionne comme pronom réfléchi emphatique : anfusa-nā = « nous-mêmes », notre propre personne. Dans une énumération avec fils et femmes, il désigne la personne elle-même du locuteur par opposition aux proches.",
    analysis_axes: {
      concept_chosen: 'Âme/Être',
      concepts: {
        'Âme/Être': {
          status: 'retenu',
          senses: ['âme','soi-même','personne','esprit','désir'],
          proof_ctx: "D'après les sources étymologiques, nafs désigne la réalité intérieure qui fait de l'être ce qu'il est — âme, personne, soi. En construction nominale avec un pronom personnel (anfusa-nā), le mot fonctionne comme intensifieur réfléchi : « nous-mêmes, en notre propre personne ». Ce sens est compatible avec le pluriel accusatif en idafa et avec la structure énumérative (fils, femmes, soi-mêmes) qui distingue les proches et la personne propre. Le verset désigne ainsi l'engagement direct de chaque individu dans l'épreuve."
        },
        'Souffle/Vie': {
          status: 'nul',
          senses: ['souffle','respirer','soulagement'],
          proof_ctx: "Sens physique du souffle — hors sujet pour une construction réfléchie avec pronom suffixe."
        },
        'Corps/Anatomie': {
          status: 'nul',
          senses: ['sang'],
          proof_ctx: "Sens anatomique isolé — hors sujet."
        },
        'Sens isolé/Oeil': {
          status: 'nul',
          senses: ['oeil mauvais'],
          proof_ctx: "Sens concret isolé — hors sujet."
        },
        'Sens isolé/Quantité': {
          status: 'nul',
          senses: ['quantité'],
          proof_ctx: "Sens concret isolé — hors sujet."
        }
      }
    }
  },
  // Position 19 — wa-anfusa-kum (ن ف س)
  {
    position: 19, word_key: 'nfs', sense_chosen: 'soi-même',
    reason: "Nom pluriel au cas accusatif (coordonné par wa-, complément de nadʿu), en idafa avec le pronom suffixe -kum (2MP) : « vous-mêmes ». Parallèle exact de anfusa-nā en position 18. La triade fils / femmes / soi-mêmes, répétée pour chaque groupe, marque l'engagement total et symétrique des deux camps : famille et personne propre.",
    analysis_axes: {
      concept_chosen: 'Âme/Être',
      concepts: {
        'Âme/Être': {
          status: 'retenu',
          senses: ['âme','soi-même','personne','esprit','désir'],
          proof_ctx: "Même sens qu'à la position précédente — la personne propre, l'individu lui-même. Le changement de pronom (-kum) désigne les interlocuteurs. La répétition sémantique de la triade familiale souligne l'égalité de l'engagement dans l'épreuve : chaque groupe met en jeu ses proches et sa propre personne."
        },
        'Souffle/Vie': {
          status: 'nul',
          senses: ['souffle','respirer','soulagement'],
          proof_ctx: "Sens physique — hors sujet."
        },
        'Corps/Anatomie': {
          status: 'nul',
          senses: ['sang'],
          proof_ctx: "Sens concret — hors sujet."
        },
        'Sens isolé/Oeil': {
          status: 'nul',
          senses: ['oeil mauvais'],
          proof_ctx: "Sens concret isolé — hors sujet."
        },
        'Sens isolé/Quantité': {
          status: 'nul',
          senses: ['quantité'],
          proof_ctx: "Sens concret isolé — hors sujet."
        }
      }
    }
  }
];

module.exports = { VWA_PART2 };
