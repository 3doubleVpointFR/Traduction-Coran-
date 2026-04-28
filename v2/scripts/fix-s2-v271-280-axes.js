const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Fix missing axes for probable/peu_probable concepts in V271-280
// Also fix concept_chosen for s w m pos=20

const FIXES = {
  // id=4290: sdq pos=3 V271 — add axes to "Vérité/Sincérité" (probable)
  4290: {
    concept: "Vérité/Sincérité",
    axes: {
      axe1_verset: "Dans 2:271, sdaqāt (aumônes) dérive de la même racine que sidq (vérité). Le lien entre générosité et vérité intérieure est présent : donner est un acte de vérité envers Dieu. Pourtant le contexte lexical indique clairement l'aumône comme pratique religieuse plutôt qu'une qualité morale abstraite.",
      axe2_voisins: "Le verset voisin 2:270 mentionnait les nafaqāt (dépenses), et 2:272 reviendra à infāq (donner). Sadaqāt en 2:271 s'inscrit dans cette série lexicale d'actes de générosité. La vérité/sincérité est une qualité sous-jacente à ces actes mais n'est pas le sens lexical activé ici.",
      axe3_sourate: "Dans al-Baqarah, sidq (vérité) et sādiqūn (véridiques) apparaissent dans des contextes distincts des sadaqāt (2:177, 2:282, 2:283). La sourate traite les deux registres séparément. Le sens de vérité/sincérité reste étymologiquement apparent mais sémantiquement second pour sdq au sens d'aumône.",
      axe4_coherence: "Le parallèle étymologique entre sadaqa (aumône) et sidq (vérité) reflète une philosophie coranique : l'acte généreux authentifie la foi. Mais ce lien conceptuel n'implique pas que le terme ici signifie littéralement vérité. La sadaqa est l'aumône vérifiable, l'acte concret de don.",
      axe5_frequence: "Dans le Coran, sdq apparaît sous la forme sadaqa/sadaqāt (aumônes) environ 14 fois et sous la forme sidq/sādiq (vérité/véridique) environ 20 fois. Les deux emplois sont bien distincts sémantiquement. La vérité/sincérité reste un sens probable mais non activé dans ce verset."
    }
  },

  // id=4291: nem pos=5 V271 — add axes to "Bienfait/Faveur" (peu_probable)
  4291: {
    concept: "Bienfait/Faveur",
    axes: {
      axe1_verset: "Dans 2:271, niʿimmā hiya est une expression d'approbation : c'est bien de la faire (l'aumône secrète). La racine nem peut signifier bienfait/faveur (niʿma), mais dans la construction niʿimmā, le sens est celui d'une particule laudative figée. Interpréter niʿimmā comme un bienfait concret serait forcer la grammaire.",
      axe2_voisins: "Le sens de niʿma (bienfait/faveur divine) est très fréquent dans le Coran (2:47, 2:122, 2:150, 2:231). Mais niʿimmā est une construction synthétique différente de niʿma, formée de niʿma + mā contracté. Elle sert à exprimer une approbation exclamative, pas à nommer un bienfait.",
      axe3_sourate: "Dans al-Baqarah, niʿma au sens de faveur divine est rappelée avec ya bānī Isrāʾīl udhkurū niʿmatī (2:47, 2:122). Ces emplois sont distincts de niʿimmā en 2:271. La sourate utilise bien la racine nem dans les deux sens, mais le contexte immédiat de 2:271 indique clairement l'usage laudatif.",
      axe4_coherence: "Si niʿimmā signifiait bienfait/faveur ici, il faudrait comprendre : 'c'est un bienfait pour vous de donner l'aumône en secret'. Cette lecture est cohérente avec le sens général du verset mais grammaticalement peu naturelle. La lecture comme particule d'approbation est plus directe et idiomatique.",
      axe5_frequence: "Niʿma (bienfait/faveur) est très fréquent dans le Coran. Niʿimmā comme construction laudative est plus rare. Les traducteurs et grammairiens arabes analysent unanimement niʿimmā comme une particule exclamative de louange, non comme le substantif niʿma. Le sens de bienfait/faveur reste peu probable dans cet emploi."
    }
  },

  // id=4296: kfr pos=17 V271 — add axes to "Couverture/Dissimulation" (probable)
  4296: {
    concept: "Couverture/Dissimulation",
    axes: {
      axe1_verset: "Dans 2:271, yukaffiru est traduit par 'effacer/expier' les mauvaises actions. Étymologiquement, kfr signifie couvrir/dissimuler (comme on couvre des graines de terre). Ce sens de couverture explique l'image : l'aumône secrète recouvre littéralement les fautes morales, les rendant invisibles au regard divin.",
      axe2_voisins: "Dans les versets voisins (2:265-270), la générosité est présentée comme un acte purificateur. L'idée de couverture est cohérente avec cette purification : la sadaqa recouvre les fautes comme la pluie nourrit la terre. Cependant, le sens d'expiation/réparation morale est plus opérant dans ce contexte.",
      axe3_sourate: "Dans al-Baqarah, kfr apparaît principalement sous les formes kufr (incroyance) et kaffāra (expiation rituelle). La kaffārat al-aymān (2:225) montre que kfr au sens d'expiation est bien établi dans la sourate. Le sens de couverture/dissimulation reste une lecture étymologique valable.",
      axe4_coherence: "La métaphore de couverture s'articule bien avec la thématique du secret dans ce verset : l'aumône secrète couvre doublement — elle reste cachée des hommes ET elle couvre les fautes devant Dieu. Cette double couverture rend le sens étymologique cohérent avec la structure du verset.",
      axe5_frequence: "Dans le Coran, kfr au sens de couverture physique est rare ; le sens prédominant est incroyance (kufr) ou expiation (kaffāra). L'usage coranien a substantiellement déplacé le sens étymologique de couverture vers les significations religieuses. Couverture/Dissimulation reste probable mais second."
    }
  },

  // id=4305: nfs pos=16 V272 — add axes to "Souffle/Vie" (probable)
  4305: {
    concept: "Souffle/Vie",
    axes: {
      axe1_verset: "Dans 2:272, li-anfusikum signifie 'pour vous-mêmes'. La racine nfs peut signifier souffle/vie (naffasa = respirer, souffler), mais dans l'emploi de nafs (âme/soi), c'est le sens d'être individuel/soi-même qui prédomine. Traduit par 'pour vous-mêmes', le sens de souffle/vie est sous-jacent mais non activé.",
      axe2_voisins: "Dans les versets voisins sur l'aumône, l'idée que vous dépensez pour votre propre bénéfice ultime (récompense divine) est centrale. 'Pour vos âmes' (li-anfusikum) renvoie à votre être profond qui bénéficiera de l'acte. Le souffle de vie est la base métaphysique de cet être mais n'est pas le sens lexical visé.",
      axe3_sourate: "Dans al-Baqarah, nafs apparaît souvent dans des formules comme lā tukallafu nafsun (2:233, 2:286) — aucune âme ne sera chargée. Le sens d'âme/être individuel est prédominant dans ces emplois. Le sens de souffle/vie (animisme physique) est premier étymologiquement mais second sémantiquement.",
      axe4_coherence: "L'idée que vous dépensez pour votre souffle/vie s'entend comme : vous investissez dans votre survie spirituelle. Cette lecture est cohérente mais métaphorique. Le sens d'âme/soi-même est plus direct et correspond mieux à l'usage coranique habituel de nafs dans les formules de récompense/responsabilité.",
      axe5_frequence: "Nafs est l'un des termes les plus fréquents du Coran (~295 occurrences). Dans ses emplois coraniques, nafs désigne presque toujours l'âme/être/soi individuel, jamais le souffle physique au sens biologique. Le sens de souffle/vie reste probable étymologiquement mais peu actif dans le corpus coranique."
    }
  },

  // id=4314: t w e pos=9 V273 — add axes to "Obéissance/Soumission volontaire" (probable)
  4314: {
    concept: "Obéissance/Soumission volontaire",
    axes: {
      axe1_verset: "Dans 2:273, lā yastatīʿūna signifie 'ils ne peuvent pas'. La racine t w e au sens d'obéissance/soumission est son sens le plus fréquent. Ici pourtant, c'est la dérivation en istataāʿa (forme X = pouvoir/être capable) qui est activée. L'obéissance serait : 'ils ne peuvent pas se soumettre', ce qui est moins naturel que 'ils n'en ont pas la capacité'.",
      axe2_voisins: "Dans le contexte de 2:273, les pauvres bloqués dans la voie de Dieu 'ne peuvent pas' voyager pour commerce. Le sens de capacité/pouvoir est évident. L'obéissance/soumission volontaire est sémantiquement proche mais ne convient pas à l'obstruction physique et économique décrite.",
      axe3_sourate: "Dans al-Baqarah, tāʿa (obéissance) apparaît dans des contextes d'observance divine (2:285 : samiʿnā wa-ataʿnā). Istatāʿa (pouvoir) apparaît dans d'autres contextes de capacité physique ou morale. La sourate distingue bien les deux registres sémantiques de cette racine.",
      axe4_coherence: "Si on retient l'obéissance comme sens, le verset dirait : 'ils ne peuvent pas se soumettre (pour frapper la terre)'. Cette lecture est possible si on comprend la soumission comme abandon de sa situation. Mais le sens de capacité physique et économique s'articule mieux avec le contexte de pauvreté et de blocage.",
      axe5_frequence: "La forme istatāʿa (forme X) apparaît ~29 fois dans le Coran, toujours au sens de 'être capable/pouvoir'. La forme tāʿa/ataʿa (obéir) est distincte morphologiquement bien que de la même racine. Dans ses emplois coraniques, istatāʿa signifie systématiquement la capacité, non l'obéissance."
    }
  },

  // id=4315: d r b pos=10 V273 — add axes to "Frappe/Coup" (peu_probable)
  4315: {
    concept: "Frappe/Coup",
    axes: {
      axe1_verset: "Dans 2:273, darban fī l-arḍ signifie 'battre/parcourir la terre' (voyager). La racine drb signifie d'abord frapper/battre, mais dans la construction darb fī l-arḍ, c'est le sens de déplacement/voyage qui est lexicalisé. Lā yastatīʿūna darban = ils ne peuvent pas effectuer de déplacement commercial.",
      axe2_voisins: "L'expression daraba fī l-arḍ est une locution établie signifiant voyager pour le commerce ou d'autres motifs. Elle apparaît en 4:101, 73:20. Le sens de frappe physique n'est pas pertinent ici ; la construction métonymique (frapper la terre = parcourir la terre à pied) est lexicalisée.",
      axe3_sourate: "Dans al-Baqarah, drb apparaît en 2:60 (daraba mūsā) au sens de frapper, et en 2:273 (darban fī l-arḍ) au sens de voyager. La sourate utilise les deux sens, montrant la polysémie de la racine. En 2:273 c'est clairement le déplacement, non la frappe physique.",
      axe4_coherence: "L'idée de frappe physique serait incohérente dans ce contexte de pauvres dans la voie de Dieu. Le verset décrit des gens économiquement bloqués qui ne peuvent pas commercer. 'Frapper la terre' au sens métonymique de voyager/parcourir est parfaitement cohérent avec leur impossibilité de faire du commerce.",
      axe5_frequence: "La racine drb est très fréquente dans le Coran (~58 occurrences). Ses deux sens principaux sont frapper (physique) et parcourir/voyager (darb fī l-arḍ). La frappe physique est le sens de base mais le déplacement est le sens activé dans la construction idiomatique darba fī l-arḍ."
    }
  },

  // id=4321: e r f pos=18 V273 — add axes to "Convention/Usage" (probable)
  4321: {
    concept: "Convention/Usage",
    axes: {
      axe1_verset: "Dans 2:273, taʿrifuhum bi-sīmāhum = tu les reconnaîtras à leurs marques. La racine ʿrf peut signifier convention/usage (urf = usage établi, coutume). Ici c'est le sens de reconnaissance/connaissance par signes distinctifs qui est activé. La convention sociale permettrait aussi de les identifier, mais le sens cognitif est premier.",
      axe2_voisins: "Dans les versets sur la générosité, reconnaître les vrais pauvres est un enjeu social. Taʿrif ici est l'acte de reconnaissance individuelle par observation. Le urf (convention/usage) est un concept différent de cette reconnaissance cognitive bien que de la même racine.",
      axe3_sourate: "Dans al-Baqarah, ʿrf apparaît sous la forme maʿrūf (bien reconnu/convenable) dans des contextes de conduite sociale acceptable (2:178, 2:180, 2:228, 2:229, 2:231, 2:232, 2:233, 2:234, 2:236, 2:240, 2:241, 2:263). Ce maʿrūf (usage/convention sociale) est bien distinct du taʿrif (reconnaissance cognitive) de 2:273.",
      axe4_coherence: "La convention/usage comme sens de ʿrf serait : 'selon l'usage établi, tu saurais les identifier'. Cette lecture est possible dans une société où les pauvres dignes se reconnaissent par convention sociale. Mais le sens naturel de taʿrifuhum bi-sīmāhum est la reconnaissance directe et perceptuelle.",
      axe5_frequence: "La racine ʿrf est très fréquente (~70 occurrences). Maʿrūf (convention/bien établi) est très fréquent dans le Coran. Taʿrifa (reconnaître/identifier) est aussi fréquent. Les deux sens coexistent mais sont distincts. Dans taʿrifuhum, c'est la reconnaissance cognitive/perceptuelle qui prime."
    }
  },

  // id=4322: s w m pos=20 V273 — fix concept_chosen + add axes to "Envoi/Direction" and "Pâturage/Parcours"
  4322: {
    fix_concept_chosen: "Sens isolé/Marquer",
    concepts: {
      "Envoi/Direction": {
        axe1_verset: "Dans 2:273, sīmāhum désigne les marques visibles des pauvres dignes. La racine swm peut signifier envoyer/diriger (comme on envoie du bétail au pâturage). Mais ce sens d'envoi/direction ne s'articule pas avec la formation sīmā = signe/marque. Sīmā est un substantif de marque, non d'acte d'envoi.",
        axe2_voisins: "Le sens d'envoi/direction de swm n'est pas attesté dans des contextes similaires du Coran. La forme sīmā/sīmāʾ = signe distinctif est bien établie lexicographiquement et n'implique pas d'envoi. Les contextes de sīmā dans le Coran (48:29, 7:46-48) confirment tous le sens de marque visible.",
        axe3_sourate: "Al-Baqarah n'utilise pas swm dans le sens d'envoi ou direction dans ses autres occurrences. La thématique est ici la reconnaissance des pauvres par leurs apparences physiques et vestimentaires. Le sens d'envoi est étymologiquement possible mais contextuellement non pertinent.",
        axe4_coherence: "Interpréter bi-sīmāhum comme 'par leur envoi/direction' rendrait le verset incohérent : 'tu les reconnaîtras à leur envoi' ne fait pas sens. Le sens de marque/signe distinctif s'articule parfaitement avec taʿrifuhum (tu les reconnaîtras). L'envoi/direction est un sens peu probable.",
        axe5_frequence: "La racine swm au sens d'envoi/direction est rare dans le Coran. La forme sīmā (marque/signe) apparaît dans quelques versets clés avec un sens stable de signe distinctif visible. Le sens d'envoi/direction ne correspond pas aux attestations coraniques de sīmā."
      },
      "Pâturage/Parcours": {
        axe1_verset: "La racine swm au sens premier de faire paître/laisser au pâturage est son sens le plus ancien (sāʾima = bétail laissé au pâturage). Mais ce sens concret ne génère pas sīmā = marque visible. Sīmā est un dérivé sémantique différent : on marque le bétail qu'on fait paître, d'où le signe distinctif.",
        axe2_voisins: "Le contexte de 2:273 ne parle pas de bétail ni de pâturage mais de pauvres qui ne peuvent pas se déplacer pour commercer. Le sens de pâturage est l'une des acceptions primaires de swm mais elle est sémantiquement éloignée de sīmā = marque/signe visible.",
        axe3_sourate: "Al-Baqarah 3:14 mentionne les biens (chevaux, bétail) et 2:164 les animaux dispersés sur terre. Mais swm au sens de pâturage n'est pas une thématique dominante dans la sourate. Le verset 2:273 utilise sīmā dans son sens établi de signe distinctif visible des pauvres.",
        axe4_coherence: "Interpréter bi-sīmāhum comme 'à leur pâturage/façon d'errer' donnerait une image des pauvres comme bétail errant. Cette lecture est littérairement déplacée pour des personnes décrites dignement comme consacrés à la voie de Dieu. Le sens de signe distinctif est plus cohérent et respectueux.",
        axe5_frequence: "Swm au sens de pâturage est rare dans le Coran (mentionné implicitement en 3:14 via sāʾima). La forme sīmā est plus fréquente et toujours dans le sens de signe/marque distinctif. Le sens de pâturage/parcours est peu probable pour la forme sīmā attestée dans le Coran."
      }
    }
  },

  // id=4323: s a l pos=22 V273 — add axes to "Demande/Question" (probable)
  4323: {
    concept: "Demande/Question",
    axes: {
      axe1_verset: "Dans 2:273, lā yasʾalūna l-nāsa ilḥāfan = ils ne demandent pas aux gens avec insistance. La racine sal peut signifier demande simple ou question. Ici il s'agit d'un acte de mendicité — demander de l'argent/aide aux passants. La 'demande/question' comme sens générique est probable ; 'mendicité' est la spécification contextuelle.",
      axe2_voisins: "Le mot qui suit est ilḥāfan (avec insistance/importunité), qualifiant le mode de la demande. Sans ilḥāfa, lā yasʾalūna pourrait simplement signifier 'ils ne demandent pas'. Le contexte de pauvres dignes qui évitent de mendier confirme que sal ici est la mendicité, forme spécialisée de la demande.",
      axe3_sourate: "Dans al-Baqarah, sal apparaît en 2:186 (wa-idhā saʾalaka ʿibādī) au sens de demander/interroger (Dieu) et en 2:211 (saʾal banī isrāʾīl). Le sens de demande/question est ainsi bien établi dans la sourate. En 2:273, sal est une demande d'ordre matériel (aide/argent) = mendicité.",
      axe4_coherence: "La demande comme sens générique est cohérente avec le contexte : ces pauvres s'abstiennent de 'demander' aux gens. Si le sens retenu était simplement 'demande', la phrase dirait 'ils ne demandent pas aux gens avec insistance', ce qui inclut la mendicité comme cas particulier de la demande.",
      axe5_frequence: "La racine sal est fréquente dans le Coran (~129 occurrences). Elle couvre la demande générale (poser une question, interroger Dieu) et la mendicité (demander de l'aide/argent). En 2:273, le contexte de pauvreté et d'ilḥāfa spécifie que c'est la mendicité qui est visée."
    }
  },

  // id=4327: kh y r pos=29 V273 — add axes to "Choix/Préférence" (peu_probable)
  4327: {
    concept: "Choix/Préférence",
    axes: {
      axe1_verset: "Dans 2:273, mā tunfiqū min khayr = ce que vous dépensez de bien. La racine khy r peut signifier choix/préférence (en arabe classique : khayyara = choisir, mukhtār = choisi). Mais ici khayr est un substantif signifiant bien/bonté, pas un participe ou verbe de choix. Le sens de choix est étymologiquement lointain.",
      axe2_voisins: "Dans les versets voisins (2:271, 2:272), khayrun (meilleur) apparaît comme comparatif. En 2:273, mā tunfiqū min khayr = 'ce que vous dépensez parmi les biens'. Khayr est ici un substantif collectif (richesse, bien), non un substantif de choix. Le sens de préférence ne s'active pas.",
      axe3_sourate: "Dans al-Baqarah, khayr comme substantif de bien/bonté est omniprésent. Kh y r au sens de choix/préférence n'est pas un emploi coranique fréquent. La sourate utilise khayr systématiquement au sens de bien/excellence morale ou richesse matérielle, jamais au sens de choix délibéré.",
      axe4_coherence: "Si khayr signifiait choix/préférence ici, la phrase deviendrait : 'ce que vous dépensez de votre choix'. Cette lecture est grammaticalement possible mais sémantiquement redondante (on dépense toujours par choix). Le sens de 'bien' ou 'bonté' apporte une information qualitative au verset.",
      axe5_frequence: "Khayr au sens de bien/bonté est l'un des mots les plus fréquents du Coran (~200 occurrences). Kh y r au sens de choix/préférence est rare et appartient plutôt à l'arabe classique non-coranique. Dans tous ses emplois coraniques, khayr signifie bien/bonté/excellence, non choix ou préférence."
    }
  },

  // id=4337: rbb pos=15 V274 — add axes to "Éducation/Accompagnement" (probable)
  4337: {
    concept: "Éducation/Accompagnement",
    axes: {
      axe1_verset: "Dans 2:274, ʿinda rabbihim = auprès de leur Seigneur. La racine rbb peut signifier éduquer/faire croître (rabbā = élever, éduquer). Ce sens est réel : rabb est celui qui nourrit, éduque et fait grandir. Mais dans la formule ʿinda rabbi (auprès du Seigneur), c'est l'autorité souveraine/seigneuriale qui prédomine.",
      axe2_voisins: "Dans les versets précédents et suivants sur la récompense divine, rabb apparaît systématiquement dans sa dimension de Seigneur-maître (ʿinda rabbihim = auprès de leur Seigneur, rabbuka = ton Seigneur). L'accent est sur la relation de souveraineté bienveillante, non sur le processus pédagogique.",
      axe3_sourate: "Dans al-Baqarah, rabb apparaît des centaines de fois. La nuance d'éducation/accompagnement est inhérente à la racine mais rarement le sens central dans les formules ʿinda rabbi ou rabbuka. L'idée de seigneurie et d'autorité souveraine prime dans presque tous les emplois.",
      axe4_coherence: "L'idée de rabb comme éducateur-accompagnateur enrichit théologiquement la relation divine : Dieu ne récompense pas seulement comme maître mais comme celui qui a fait grandir ses serviteurs. Cette nuance est présente en arrière-plan mais n'est pas le concept lexicalement activé dans ʿinda rabbihim.",
      axe5_frequence: "Rabb est parmi les noms divins les plus fréquents du Coran. Dans ses innombrables occurrences, rabb désigne la Seigneurie souveraine. Le sens d'éducation/accompagnement est l'étymologie de la racine (rabbā = élever un enfant) mais est subsumé dans le concept théologique de Seigneur."
    }
  },

  // id=4340: akl pos=2 V275 — add axes to "Destruction/Érosion" (probable)
  4340: {
    concept: "Destruction/Érosion",
    axes: {
      axe1_verset: "Dans 2:275, yaʾkulūna l-ribā = ils consomment/s'approprient l'usure. La racine akl peut signifier destruction/érosion métaphorique (akalat al-nār = le feu a consumé/détruit). Ici pourtant yaʾkulūna est le verbe de consommation alimentaire transposé à l'appropriation de biens. C'est le sens d'alimentation/consommation qui prime.",
      axe2_voisins: "Dans les versets précédents (2:271-274) sur la générosité, le contraste est clair : infāq (dépense) vs akl (appropriation). La destruction/érosion n'est pas le sens opérant ici mais une conséquence : l'usure détruit la société. Le verset nomme l'acte (consommer), non sa conséquence.",
      axe3_sourate: "Dans al-Baqarah, akl au sens de consommation alimentaire/appropriation est l'emploi standard (2:35, 2:57, 2:168). La métaphore de destruction par consommation (le feu dévore) n'est pas activée dans le contexte juridique/économique de l'usure. La consommation matérielle est le sens premier.",
      axe4_coherence: "Interpréter yaʾkulūna comme 'ils détruisent/érodent par l'usure' donne un sens voisin : l'usure ronge les biens des emprunteurs. Cette lecture est cohérente et enrichit la condamnation de la pratique. Mais grammaticalement, yaʾkulūna l-ribā est 'ils consomment/s'approprient les intérêts'.",
      axe5_frequence: "La racine akl est fréquente dans le Coran (~109 occurrences). Le sens de consommation (manger, s'approprier) est prépondérant. Le sens de destruction/érosion par consommation (comme le feu qui dévore) existe mais n'est pas le sens activé dans yaʾkulūna l-ribā."
    }
  },

  // id=4341: rbw pos=3 V275 — add axes to "Croissance/Augmentation" (probable)
  4341: {
    concept: "Croissance/Augmentation",
    axes: {
      axe1_verset: "Dans 2:275, al-ribā désigne l'usure, le surplus exigé sur un prêt. La racine rbw signifie croître/augmenter (rabā = croître). L'usure est étymologiquement 'ce qui fait croître artificiellement'. Le sens de croissance/augmentation est l'étymologie même du terme mais c'est la pratique économique condamnée qui est nommée.",
      axe2_voisins: "En 2:276, yuḥibb al-ribā (anéantit l'usure) vs yurbī al-sadaqāt (fait prospérer les aumônes). Ici yurbī utilise le même radical rbw dans son sens positif de croissance authentique. Cette opposition montre que rbw peut désigner aussi bien la croissance légitime que la croissance usuraire.",
      axe3_sourate: "Dans al-Baqarah, al-ribā est mentionné plusieurs fois (2:275, 2:276, 2:278, 2:279). Dans ce passage, al-ribā est le terme technique pour l'usure. Le sens de croissance/augmentation est le présupposé étymologique de ce terme, non son sens lexical opérant dans ce contexte juridique.",
      axe4_coherence: "Distinguer 'usure' de 'croissance' permet de comprendre la condamnation coranique : l'usure prétend être une croissance légitime (khayr = bien, comme en 2:272) mais n'est en réalité qu'une appropriation injuste. Le sens de croissance reste un sens probable sous-jacent à al-ribā.",
      axe5_frequence: "La racine rbw apparaît en deux registres dans le Coran : al-ribā (usure, condamné) et arbā/yurbī (faire croître, terme positif). Cette polarisation sémantique montre que la croissance/augmentation est le sens neutre de la racine, dont al-ribā est la dérivation négative condamnée."
    }
  },

  // id=4345: šytn pos=11 V275 — add axes to "Feu/Chaleur" (peu_probable)
  4345: {
    concept: "Feu/Chaleur",
    axes: {
      axe1_verset: "Dans 2:275, al-šaytān est le démon/Satan qui touche les usuraires. L'étymologie de šayṭān est disputée ; certains la rattachent à šāṭa = brûler (le brûlant, le fiévreux). Mais la tradition coranique traite šayṭān comme un être désigné par ce nom propre, sans activer le sens de feu/chaleur.",
      axe2_voisins: "Le šaytān dans le Coran est systématiquement décrit comme un égareur (2:36, 2:168, 2:208, 2:268), un ennemi déclaré, un muswis (souffleur de mal). Son lien avec le feu est indirect : il est créé du feu (38:76) mais ce sens n'est pas activé dans šayṭān al-massi de 2:275.",
      axe3_sourate: "Dans al-Baqarah, šayṭān apparaît dans plusieurs contextes : tentation (2:36, 2:168), peur (2:268), promesses vaines (2:268). Il est l'archétype de l'égarement, non un symbole de feu/chaleur. La sourate traite šayṭān comme agent d'égarement, non comme principe pyrique.",
      axe4_coherence: "Si šayṭān signifiait 'le brûlant/le fiévreux', le verset dirait que les usuraires sont touchés par une fièvre ou une brûlure (frénésie usuraire). Cette lecture métaphorique est intéressante — l'usure comme fièvre irrationnelle. Mais ce n'est pas le sens coranique du terme šayṭān.",
      axe5_frequence: "Šayṭān apparaît ~88 fois dans le Coran, toujours comme nom propre désignant l'adversaire/égareur. Jamais dans le Coran šayṭān n'est utilisé pour signifier feu ou chaleur. L'étymologie du mot fait débat mais son sens coranique est exclusivement celui de l'égareur diabolique."
    }
  },

  // id=4357: slf pos=37 V275 — add axes to "Transaction/Avance" (probable)
  4357: {
    concept: "Transaction/Avance",
    axes: {
      axe1_verset: "Dans 2:275, fa-lahu mā salafa = il lui appartient ce qui est passé. Salafa (ce qui a précédé) désigne ici les transactions usuraires antérieures à la révélation. La racine slf peut signifier avance/prêt anticipé (salaf = prêt sans intérêt, salam = avance). Ce sens de transaction/avance est probable étymologiquement.",
      axe2_voisins: "Le contexte de 2:275 est juridique : Dieu pardonne les intérêts passés après la révélation de l'interdiction. Salafa = ce qui est passé/antérieur. En 2:280, naẓira (délai) et sadaqa (remise) sont dans le même registre de droit des contrats. La transaction/avance est une nuance de la même thématique.",
      axe3_sourate: "Dans al-Baqarah, le contrat de salaf (prêt sans intérêt/avance) est une pratique juridique islamique distincte de la ribā. Salaf désigne aussi les pieux ancêtres et les actes du passé. En 2:275, salafa renvoie clairement au passé temporel, non à une transaction spécifique.",
      axe4_coherence: "Interpréter mā salafa comme 'les transactions/avances passées' serait cohérent avec le contexte financier de la ribā. Mais salafa ici est un verbe (ce qui a précédé temporellement), non un substantif de transaction. L'antériorité temporelle est le sens premier et le plus direct.",
      axe5_frequence: "La racine slf apparaît dans le Coran sous diverses formes : salaf (ancêtres/antériorité), salafa (précéder temporellement), et dans d'autres langues islamiques comme terme de contrat financier. En 2:275, salafa est clairement temporel : ce qui est déjà passé. La transaction/avance est un sens possible mais non activé."
    }
  },

  // id=4358: amr pos=39 V275 — add axes to "Commandement/Autorité" (peu_probable)
  4358: {
    concept: "Commandement/Autorité",
    axes: {
      axe1_verset: "Dans 2:275, wa-amruhu ilā llāh = son affaire revient à Dieu. La racine amr peut signifier commandement/autorité (umara = commandants, amara = ordonner). Mais amr ici est 'affaire/chose/situation', non un commandement. L'amr de l'usuraire repenti est sa situation existentielle remise à Dieu.",
      axe2_voisins: "Dans les versets voisins sur la ribā, amr comme commandement/autorité divine serait cohérent : l'autorité sur la personne revient à Dieu après sa repentance. Mais la construction amruhu ilā llāh est une formule de remise totale (son sort est entre les mains de Dieu) qui utilise amr dans le sens d'affaire.",
      axe3_sourate: "Dans al-Baqarah, amr apparaît en 2:117 (amr = affaire/chose), 2:210 (al-amru = le Commandement/décret divin), 2:282 (amr = affaire). Le sens d'autorité/commandement est présent en 2:210 mais dans un contexte eschatologique distinct. En 2:275, amr est l'affaire individuelle.",
      axe4_coherence: "L'idée que 'l'autorité divine reprend ses droits' sur l'usuraire repenti est théologiquement cohérente. Mais la formule wa-amruhu ilā llāh est idiomatique : elle signifie que son sort, sa situation, sont entre les mains de Dieu — pas que Dieu reprend son autorité juridique sur lui.",
      axe5_frequence: "Amr est très fréquent dans le Coran (~250 occurrences) dans ses deux sens : commandement/autorité (amr Allāh) et affaire/chose/situation (hādhā amruhu). La formule amruhu ilā llāh appartient au second registre sémantique, celui de la remise de son sort à Dieu."
    }
  },

  // id=4369: kfr pos=11 V276 — add axes to "Couverture/Dissimulation" (peu_probable)
  4369: {
    concept: "Couverture/Dissimulation",
    axes: {
      axe1_verset: "Dans 2:276, kulla kaffārin athīm = tout ingrat/impie très pécheur. Kaffār est un intensif de kāfir (celui qui refuse/couvre). Étymologiquement, kfr = couvrir la vérité. Mais dans le contexte de la condamnation de l'usure, c'est le sens de rejet/ingratitude envers Dieu (kufr au sens de kufr bil-niʿma) qui prime.",
      axe2_voisins: "Dans les versets sur la ribā (2:275-279), les usuraires sont opposés aux croyants généreux. Kaffār dans 2:276 qualifie celui qui persiste dans la ribā malgré l'interdiction divine — c'est un rejet actif des commandements divins, au-delà d'une simple dissimulation.",
      axe3_sourate: "Dans al-Baqarah, kfr au sens de couverture/dissimulation physique est rarissime. Le sens dominant est kufr = incroyance/rejet de la foi et kafara = nier/être ingrat. En 2:276, kaffārin athīm = très impie et très pécheur, kaffār est un intensif de rejet, non de dissimulation.",
      axe4_coherence: "L'idée que les usuraires 'dissimulent/couvrent' quelque chose est possible : ils couvrent la réalité de l'injustice usuraire sous des apparences de légitimité économique. Mais le terme kaffār dans ce contexte désigne clairement leur attitude envers Dieu (ingratitude/rejet), non une dissimulation.",
      axe5_frequence: "Kaffār (intensif) est rare dans le Coran. Kāfir (forme simple) est très fréquent et toujours au sens de rejet/incroyance. La couverture/dissimulation reste l'étymologie de base de la racine mais n'est pas le sens activé dans les emplois coraniques de kfr, surtout sous la forme kaffār athīm."
    }
  },

  // id=4371: amn pos=3 V277 — add axes to "Sécurité/Confiance" (probable)
  4371: {
    concept: "Sécurité/Confiance",
    axes: {
      axe1_verset: "Dans 2:277, alladhīna āmanū = ceux qui ont cru. La racine amn signifie à la fois foi (īmān) et sécurité/confiance (amān, muʾminnūn = sécurisés). Āmana désigne ici l'acte de foi religieuse. La sécurité et la confiance sont des états résultant de cette foi mais ne sont pas le sens lexical activé dans āmanū.",
      axe2_voisins: "Le verset 2:277 liste des actes : croire, faire de bonnes œuvres, établir la prière, verser la zakāt. Āmanū (croire) est le premier acte, définissant l'appartenance à la communauté des croyants. La sécurité/confiance est une conséquence de la foi mais le verbe āmana désigne l'acte d'adhésion de foi.",
      axe3_sourate: "Dans al-Baqarah, āmana (croire) est omniprésent et toujours au sens de foi religieuse/adhésion à Dieu. Amān (sécurité) et muʾmin (croyant = celui qui est en sécurité/qui sécurise) appartiennent à la même racine mais désignent des réalités distinctes. En 2:277, c'est clairement la foi qui est nommée.",
      axe4_coherence: "L'idée que ceux qui ont la sécurité/confiance (plutôt que la foi) accompliront ces actes est cohérente dans une lecture laïque : la confiance permet l'engagement. Mais le contexte coranique de 2:277 est théologique : āmanū = avoir foi en Dieu et Son Messager, précondition des actes de culte.",
      axe5_frequence: "La racine amn est très fréquente dans le Coran. Āmana/āmanū (croire/ils ont cru) est l'emploi majoritaire. Amān (sécurité) et muʾmin (croyant/sécurisé) coexistent avec la foi comme sens. Dans les formules alladhīna āmanū, c'est systématiquement la foi qui est visée."
    }
  },

  // id=4391: adhn pos=6 V279 — add axes to "Écoute/Oreille" and "Permission/Autorisation"
  4391: {
    concepts: {
      "Écoute/Oreille": {
        axe1_verset: "Dans 2:279, faʾdhanū = soyez informés/avertis. La racine adhana peut désigner l'oreille/écoute (udhun = oreille, ādhana = porter à l'oreille). Ici faʾdhanū est un impératif signifiant 'soyez avertis/informés'. Le sens d'écoute physique est sous-jacent (écouter un avertissement) mais ce n'est pas le sens premier activé.",
        axe2_voisins: "Dans le contexte de guerre (ḥarb) et d'avertissement solennel, faʾdhanū est un impératif d'ordre de notification. Il s'apparente à une déclaration officielle de guerre. L'oreille/écoute est le canal de réception de cet avertissement mais le sens activé est l'annonce formelle, pas l'acte d'écouter.",
        axe3_sourate: "Dans al-Baqarah, udhun (oreille) et mots apparentés n'apparaissent pas fréquemment dans les contextes juridiques. Adhana au sens d'annoncer/avertir est plus pertinent dans ce contexte de déclaration. La sourate utilise istamaʿa et samiʿa pour l'écoute active, non adhana.",
        axe4_coherence: "Interpréter faʾdhanū comme 'tendez l'oreille' donnerait : 'si vous ne le faites pas, tendez l'oreille (à une déclaration de) guerre'. Cette lecture préserve le sens d'écoute mais est moins directe que 'soyez avertis'. L'annonce/avertissement est la lecture plus idiomatique de faʾdhanū.",
        axe5_frequence: "Adhana au sens d'annoncer/notifier est peu fréquent dans le Coran mais est la forme activée dans faʾdhanū. Udhun (oreille) est plus fréquent. La racine adhana dans le sens d'appel à la prière (adhān) est bien connue en islam. En 2:279, c'est l'annonce/avertissement solennel qui prime."
      },
      "Permission/Autorisation": {
        axe1_verset: "Dans 2:279, faʾdhanū bi-ḥarb = soyez informés d'une guerre. Le sens de permission/autorisation vient de idhn = permission (bi-idhni Allāh = avec la permission de Dieu). Ces deux racines (adhana = annoncer et adhina = permettre) se distinguent. Faʾdhanū est de adhana (annoncer), non d'adhina (permettre).",
        axe2_voisins: "Dans les versets précédents (2:275-278), les interdictions de la ribā sont posées. En 2:279, faʾdhanū bi-ḥarb est la conséquence juridique du refus. Ce n'est pas une permission de faire la guerre mais une déclaration de l'état de guerre. La permission (adhina/idhn) n'est pas le sens activé ici.",
        axe3_sourate: "Dans al-Baqarah, idhn (permission) apparaît dans bi-idhni Allāh (2:102, 2:255, 2:249, etc.) au sens de permission/autorisation divine. Faʾdhanū de 2:279 est distinct morphologiquement : c'est l'impératif de adhana (notifier), non de adhina (permettre). Le sens de permission est une confusion de racines.",
        axe4_coherence: "Interpréter faʾdhanū comme 'obtenez la permission' ou 'soyez autorisés' pour faire la guerre rendrait le verset incohérent : ce n'est pas une autorisation que Dieu donne aux croyants pour attaquer les usuraires. C'est une déclaration que l'état de guerre existe. L'annonce prime sur la permission.",
        axe5_frequence: "Les deux formes adhana (annoncer) et adhina (permettre) coexistent dans l'arabe coranique mais sont des homophones de racines apparentées. Dans le Coran, bi-idhn (permission) est fréquent. Faʾdhanū comme impératif d'annonce est plus rare. La confusion entre les deux est une erreur sémantique."
      }
    }
  },

  // id=4395: ras pos=18 V279 — add axes to "Tête/Sommet" (probable)
  4395: {
    concept: "Tête/Sommet",
    axes: {
      axe1_verset: "Dans 2:279, ruʾūsa amwālikum = vos capitaux (têtes de vos biens). Raʾs signifie d'abord tête (anatomique), puis par métonymie : chef, sommet, capital. L'expression ruʾūs al-amwāl = capitaux est une métaphore établie (la 'tête' du bien = le principal, le capital). Le sens de tête/sommet est l'étymologie du sens retenu.",
      axe2_voisins: "Le contexte est la restitution des capitaux sans intérêts après repentance. Ruʾūsa amwālikum = vos capitaux (la tête/principal de vos biens) s'oppose au surplus usuraire. La métaphore de la tête comme capital est si lexicalisée en arabe qu'elle constitue une unité de sens à part entière.",
      axe3_sourate: "Dans al-Baqarah, raʾs au sens anatomique de tête n'apparaît pas dans ces versets. C'est le sens économique de capital/principal qui est activé. La sourate traite de droit des contrats et utilise raʾs al-māl comme terme technique, dont ruʾūsa amwālikum est la forme au pluriel.",
      axe4_coherence: "La tête/sommet comme sens premier de raʾs est cohérente avec le contexte : rendre la 'tête' du prêt sans le surplus usuraire. C'est exactement la structure du capital sans intérêts. Le sens de tête/sommet est l'étymologie qui explique le sens retenu de capital/principal — les deux sont intimement liés.",
      axe5_frequence: "Raʾs dans le Coran apparaît principalement au sens de tête anatomique (2:196, 5:6, etc.) et au sens de capital financier (2:279). Les deux emplois coexistent dans la langue coranique. En 2:279, raʾs al-māl (capital) est la lecture correcte bien que l'image de la 'tête des biens' soit sous-jacente."
    }
  },

  // id=4402: nzr pos=7 V280 — add axes to "Regard/Contemplation" (peu_probable)
  4402: {
    concept: "Regard/Contemplation",
    axes: {
      axe1_verset: "Dans 2:280, fa-naẓiratun = accordez-lui un délai. La racine nzr peut signifier regarder/contempler (naẓara = regarder, manẓar = vue). Ici naẓiratun est un substantif signifiant attente/délai (état d'expectative). Le regard et la contemplation seraient métaphoriques : regarder vers le futur patiemment.",
      axe2_voisins: "Le contexte est un débiteur en difficulté financière. La naẓira (délai/répit) est accordée jusqu'à l'aisance. Ce terme juridique désigne le fait d'attendre la capacité de remboursement. Le regard/contemplation est la base métaphorique de cette attente (regarder vers le futur) mais n'est pas le sens opérant.",
      axe3_sourate: "Dans al-Baqarah, naẓara au sens de regarder/voir n'est pas fréquent. Nzr comme attente apparaît dans des contextes d'expectative divine (unẓurnā = prends-nous en compte, 2:104). En 2:280, naẓiratun est le terme technique pour le délai de grâce, droit islamique des contrats.",
      axe4_coherence: "L'idée que le créancier 'regarde avec bienveillance' le débiteur en difficulté est cohérente : un regard contemplatif de patience. Mais la naẓira est un acte juridique concret (accord d'un délai), pas simplement un regard bienveillant. Le sens technique de délai/attente prime sur la métaphore du regard.",
      axe5_frequence: "La racine nzr au sens de regard/contemplation est fréquente dans le Coran (naẓara, yanẓurūna). La naẓira au sens de délai est plus rare et spécifique au contexte juridique. En 2:280, naẓiratun est un terme juridique qui désigne le délai accordé au débiteur en difficulté."
    }
  },

  // id=4404: sdq pos=12 V280 — add axes to "Vérité/Sincérité" (peu_probable)
  4404: {
    concept: "Vérité/Sincérité",
    axes: {
      axe1_verset: "Dans 2:280, wa-an tasdaqū = et que vous fassiez remise (de la dette en aumône). Tasdaqū vient de tasaddaqa = faire une sadaqa/aumône. La racine sdq peut signifier vérité/sincérité (sidq). Ici c'est le sens spécifique de sadaqa (aumône volontaire) qui est activé : faire remise de la dette comme acte de générosité.",
      axe2_voisins: "Dans les versets précédents (2:278-279), la thématique est le remboursement juste des prêts. En 2:280, deux options : délai (naẓira) ou remise (sadaqa). Tasdaqū est l'acte de transformer la créance en aumône. La vérité/sincérité de l'intention est implicite mais n'est pas le sens lexical activé.",
      axe3_sourate: "Dans al-Baqarah, sdq apparaît sous la forme sadaqāt (aumônes) en 2:263, 2:264, 2:270, 2:271, 2:273 et sous la forme sidq (vérité) dans d'autres contextes. En 2:280, tasdaqū suit la même logique que les versets précédents sur la sadaqa — c'est clairement l'aumône, non la vérité.",
      axe4_coherence: "Si tasdaqū signifiait 'être sincère/vrai' ici, le verset dirait : 'et que vous soyez sincères, c'est mieux pour vous'. Cette lecture est spirituellement cohérente (la sincérité dans les relations économiques). Mais grammaticalement et lexicalement, tasdaqū = faire une sadaqa, un acte de générosité concret.",
      axe5_frequence: "La racine sdq est omniprésente dans le Coran. Tasaddaqa (forme V) signifie systématiquement faire une sadaqa/aumône. Sadaqa (forme simple) signifie vérité/sincérité ou aumône selon le contexte. En 2:280, tasdaqū est de la forme V, indiquant l'aumône/remise, non la vérité abstracte."
    }
  }
};

async function applyFix(id, fix) {
  // Fetch current analysis_axes
  const { data, error } = await supabase.from('verse_word_analyses').select('id,word_key,position,analysis_axes').eq('id', id).single();
  if (error || !data) { console.error(`  ❌ Fetch failed for id=${id}:`, error?.message); return; }

  const axes = JSON.parse(JSON.stringify(data.analysis_axes)); // deep copy

  // Fix concept_chosen if needed
  if (fix.fix_concept_chosen) {
    axes.concept_chosen = fix.fix_concept_chosen;
  }

  // Add axes to a single concept
  if (fix.concept && fix.axes) {
    if (!axes.concepts[fix.concept]) {
      console.error(`  ❌ Concept "${fix.concept}" not found in id=${id}`);
      return;
    }
    Object.assign(axes.concepts[fix.concept], fix.axes);
  }

  // Add axes to multiple concepts
  if (fix.concepts) {
    for (const [cname, caxes] of Object.entries(fix.concepts)) {
      if (!axes.concepts[cname]) {
        console.error(`  ❌ Concept "${cname}" not found in id=${id}`);
        continue;
      }
      Object.assign(axes.concepts[cname], caxes);
    }
  }

  // Update DB
  const { error: upErr } = await supabase.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', id);
  if (upErr) { console.error(`  ❌ Update failed for id=${id}:`, upErr.message); return; }
  console.log(`  ✅ Fixed id=${id} (${data.word_key} pos=${data.position})`);
}

async function main() {
  console.log('=== FIX AXES V271-280 ===\n');
  for (const [id, fix] of Object.entries(FIXES)) {
    await applyFix(parseInt(id), fix);
  }
  console.log('\nFix terminé.');
}
main().catch(console.error);
