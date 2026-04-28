const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 148
// verse_id=155, analysis_id=515
// "A chacun une direction vers laquelle il se tourne.
//  Rivalisez donc dans les bonnes oeuvres. Ou que vous
//  soyez, Dieu vous ramenera tous ensemble. Dieu est
//  sur toute chose puissant."
// =====================================================

const verseData = {
  148: {
    verse_id: 155,
    analysis_id: 515,
    translation_arab: "Et a chacun une direction vers laquelle il la tourne. Rivalisez donc dans les biens. Ou que vous soyez, Dieu viendra avec vous tous ensemble. Dieu est sur toute chose puissant.",
    full_translation: "A chacun une direction vers laquelle il se tourne. Rivalisez donc dans les bonnes oeuvres. Ou que vous soyez, Allah vous ramenera tous ensemble. Certes, Allah est Omnipotent.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre sur un constat universel : chaque communaute a une direction de priere (qibla). Le mot **kullin** est un nom au genitif de la racine k-l-l. Le Lane's donne : tout, chaque, totalite. Le genitif avec la preposition li (a chacun) marque la possession — chacun possede sa direction. Le quantificateur universel « kull » ne laisse aucune exception : toute communaute, tout groupe, tout individu a une orientation. Le mot **wijhatun** est un nom feminin singulier indefini de la racine w-j-h. Le Lane's donne : direction, visage, cote vers lequel on se tourne. Le wijah est la direction du visage — la ou on fait face. L'indefini marque que chaque communaute a UNE direction, pas LA direction unique. Le pronom relatif « huwa » (il) renvoie a « kull » — c'est chacun qui a sa propre direction. Le participe actif **muwallIha** est de la forme II de la racine w-l-y. Le Lane's donne : tourner, diriger vers, confier a. La forme II (fa''ala) intensifie : il ne se tourne pas vaguement, il se tourne activement et deliberement. Le pronom suffixe « ha » renvoie a « wijha » — il la tourne, il tourne vers elle. Le verbe **istabiqU** est un imperatif 2MP de la forme X de la racine s-b-q. Le Lane's donne : devancer, rivaliser, aller plus vite. La forme X (istaf'ala) signifie chercher a devancer — c'est un effort actif de surpassement. L'imperatif marque un ordre divin direct : rivalisez ! Le mot **al-khayrati** est un nom feminin pluriel defini au genitif de la racine kh-y-r. Le Lane's donne : bien, bonte, ce qui est bon. Le pluriel (khayrat) designe les bonnes actions dans leur diversite — pas un seul bien mais tous les biens. L'article defini marque que ces biens sont connus et identifies. Le verbe **takUnU** est un inaccompli 2MP de la racine k-w-n avec la particule ayna ma (ou que). Le Lane's donne : etre, exister, se trouver. Avec « ayna ma » (ou que), le verbe exprime l'ubiquite — quel que soit le lieu ou vous vous trouvez. L'inaccompli marque une realite continue et repetee. Le verbe **ya'ti** est un inaccompli 3MS de la racine a-t-y. Le Lane's donne : venir, apporter. Ici Dieu est le sujet — Il viendra avec vous (bikum). Le verbe exprime l'action divine de rassembler : Dieu vous amenera. L'inaccompli marque une promesse future certaine. Le nom **Allahu** est le nom propre de la divinite au nominatif, sujet du verbe ya'ti. Dieu est celui qui rassemble. Le mot **jamI'an** est un nom au cas direct de la racine j-m-e. Le Lane's donne : ensemble, tous ensemble, totalite reunie. C'est un hal (circonstanciel d'etat) — il precise que Dieu vous ramenera dans un etat de rassemblement complet, sans exception. Le nom **Allahu** apparait une deuxieme fois au nominatif comme sujet de la phrase nominale « inna Allaha 'ala kulli shay'in qadIr ». Le mot **shay'in** est un nom masculin singulier indefini au genitif de la racine sh-y-a. Le Lane's donne : chose, toute realite qui existe. L'indefini avec « kull » (toute chose) cree l'universalite absolue — rien n'echappe. Le mot **qadIrun** est un adjectif au nominatif de la racine q-d-r. Le Lane's donne : puissant, capable, celui qui a le pouvoir. QadIr est un attribut permanent — pas une capacite ponctuelle mais une puissance inherente. La phrase « inna Allaha 'ala kulli shay'in qadIr » est une formule recurrente qui ferme le verset en affirmant la toute-puissance divine comme garantie de la promesse.

§JUSTIFICATION§
**a chacun** — Le sens retenu est « totalite ». Le mot kull englobe toute communaute sans exception. L'alternative « fardeau » est ecartee car le contexte est la distribution (a chacun une direction), pas la charge.

**une direction** — Le sens retenu est « direction ». Le mot wijha designe la direction du visage, l'orientation de la priere. L'alternative « visage » au sens physique est ecartee car le contexte parle de la qibla — une orientation, pas une partie du corps.

**il la tourne** — Le sens retenu est « tourner ». Le participe muwallIha designe l'acte de tourner son visage vers la direction. L'alternative « protecteur/allie » est ecartee car la forme II avec pronom suffixe exprime l'acte de diriger vers, pas la protection.

**rivalisez** — Le sens retenu est « devancer ». La forme X istabiqU exprime la rivalite active — chercher a surpasser les autres. L'alternative « preceder » au sens temporel est ecartee car le contexte est la competition dans le bien, pas l'anteriorite chronologique.

**les biens** — Le sens retenu est « bien ». Le pluriel al-khayrat designe les bonnes oeuvres dans leur ensemble. L'alternative « meilleur » au comparatif est ecartee car le mot est au pluriel defini, designant les actions bonnes, pas un comparatif.

**vous soyez** — Le sens retenu est « etre ». Le verbe takUnU exprime le fait de se trouver en un lieu. L'alternative « venir a l'existence » est ecartee car le verbe est ici incomplet avec un complement de lieu (ayna ma, ou que).

**viendra** — Le sens retenu est « venir ». Le verbe ya'ti avec Dieu comme sujet exprime l'action divine de rassembler. L'alternative « donner » est ecartee car le verbe est intransitif ici — Dieu vient avec vous (bikum), pas Dieu vous donne.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite unique, sujet des deux propositions centrales.

**tous ensemble** — Le sens retenu est « rassembler ». Le mot jamI'an decrit l'etat de rassemblement complet. L'alternative « vendredi » est ecartee car le mot est un hal (circonstanciel), pas un nom de jour.

**chose** — Le sens retenu est « chose ». Le mot shay' designe toute realite existante. L'alternative « vouloir » est ecartee car le mot est un nom dans l'expression « kulli shay'in » (toute chose), pas un verbe.

**puissant** — Le sens retenu est « pouvoir ». QadIr est un attribut divin de puissance permanente. L'alternative « mesurer/decreter » est ecartee car l'adjectif qadIr exprime la capacite, pas l'acte de mesurer.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. La principale difference est dans « muwallIha » : certaines traductions donnent « il se tourne vers elle » (reflexif) tandis que nous donnons « il la tourne » (transitif avec pronom suffixe). Le texte arabe est transitif — le sujet tourne la direction (pronom « ha » feminin renvoyant a « wijha »). Cette nuance ne change pas le sens global mais preserve la structure grammaticale exacte. L'expression « Dieu vous ramenera tous ensemble » est fidele a l'arabe « ya'ti bikum jamI'an » — Dieu vient avec vous dans un etat de rassemblement. La formule finale « Dieu est sur toute chose puissant » est une formule recurrente que toutes les traductions rendent de maniere identique.`,
    segments: [
      { fr: "et a chacun", pos: "nom", phon: "wa-li-kullin", arabic: "\u0648\u064e\u0644\u0650\u0643\u064f\u0644\u0651\u064d", word_key: "kll", is_particle: false, sense_retenu: "totalite", position: 0 },
      { fr: "une direction", pos: "nom", phon: "wijhatun", arabic: "\u0648\u0650\u062c\u0652\u0647\u064e\u0629\u064c", word_key: "wjh", is_particle: false, sense_retenu: "direction", position: 1 },
      { fr: "il", phon: "huwa", arabic: "\u0647\u064f\u0648\u064e", is_particle: true, position: 2 },
      { fr: "la tourne", pos: "verbe", phon: "muwallIha", arabic: "\u0645\u064f\u0648\u064e\u0644\u0651\u0650\u064a\u0647\u064e\u0627", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 3 },
      { fr: "rivalisez donc", pos: "verbe", phon: "fa-stabiqU", arabic: "\u0641\u064e\u0671\u0633\u0652\u062a\u064e\u0628\u0650\u0642\u064f\u0648\u0627\u06df", word_key: "sbq", is_particle: false, sense_retenu: "devancer", position: 4 },
      { fr: "dans les biens", pos: "nom", phon: "al-khayrati", arabic: "\u0671\u0644\u0652\u062e\u064e\u064a\u0652\u0631\u064e\u0670\u062a\u0650", word_key: "khyr", is_particle: false, sense_retenu: "bien", position: 5 },
      { fr: "ou que", phon: "ayna ma", arabic: "\u0623\u064e\u064a\u0652\u0646\u064e \u0645\u064e\u0627", is_particle: true, position: 6 },
      { fr: "vous soyez", pos: "verbe", phon: "takUnU", arabic: "\u062a\u064e\u0643\u064f\u0648\u0646\u064f\u0648\u0627\u06df", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 7 },
      { fr: "viendra", pos: "verbe", phon: "ya'ti", arabic: "\u064a\u064e\u0623\u0652\u062a\u0650", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 8 },
      { fr: "avec vous", phon: "bikum", arabic: "\u0628\u0650\u0643\u064f\u0645\u064f", is_particle: true, position: 9 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 10 },
      { fr: "tous ensemble", pos: "nom", phon: "jamI'an", arabic: "\u062c\u064e\u0645\u0650\u064a\u0639\u064b\u0627", word_key: "jme", is_particle: false, sense_retenu: "rassembler", position: 11 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 12 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 13 },
      { fr: "sur toute", pos: "nom", phon: "kulli", arabic: "\u0643\u064f\u0644\u0651\u0650", is_particle: true, position: 14 },
      { fr: "chose", pos: "nom", phon: "shay'in", arabic: "\u0634\u064e\u0649\u0652\u0621\u064d", word_key: "shya", is_particle: false, sense_retenu: "chose", position: 15 },
      { fr: "puissant", pos: "adjectif", phon: "qadIrun", arabic: "\u0642\u064e\u062f\u0650\u064a\u0631\u064c", word_key: "qdr", is_particle: false, sense_retenu: "pouvoir", position: 16 }
    ],
    words: [
      // kll pos=0
      {
        word_key: "kll", position: 0, sense_chosen: "totalite",
        analysis_axes: {
          sense_chosen: "totalite",
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["tout", "chaque", "totalite"],
              proof_ctx: "Le mot kullin est un nom au genitif de la racine k-l-l. Le Lane's donne : tout, chaque, totalite sans exception. Le quantificateur « kull » englobe chaque element — ici chaque communaute, chaque groupe a sa direction de priere. Le genitif apres la preposition li (a chacun) marque la possession distributive. Aucune communaute n'est exclue — la totalite est universelle. La distinction avec les sens d'emoussement ou de fardeau est evidente : le contexte est la distribution universelle, pas la fatigue.",
              axe1_verset: "Le mot kullin ouvre le verset en posant un constat universel : a chacun une direction. Le quantificateur « kull » englobe toutes les communautes sans exception — juifs, chretiens, musulmans, chacun a sa qibla. Le champ lexical du verset (direction, tourner, rivaliser, biens) montre que la diversite des directions n'est pas un probleme mais un fait. Le verset passe du constat (a chacun une direction) a l'injonction (rivalisez dans les biens) — la totalite des communautes est invitee a la meme rivalite dans le bien.",
              axe2_voisins: "Le verset 2:147 affirmait que la verite vient du Seigneur — ne sois pas de ceux qui doutent. Le verset 148 enchaine en reconnaissant que chaque communaute a sa propre direction, puis ordonne de rivaliser dans le bien plutot que de disputer sur les directions. Le verset 149 reviendra a l'injonction specifique de la qibla. Le verset 148 est une parenthese universaliste entre deux versets sur la qibla specifique.",
              axe3_sourate: "La racine k-l-l apparait frequemment dans la sourate al-Baqarah comme quantificateur universel. En 2:20, « Dieu est sur toute chose puissant ». En 2:29, « Il a cree pour vous tout ce qui est sur terre ». Le verset 148 utilise « kull » pour poser l'universalite des directions de priere avant d'ordonner la rivalite dans le bien — le constat universel precede l'injonction ethique.",
              axe4_coherence: "La racine k-l-l apparait environ 600 fois dans le Coran. Le mot « kull » est le quantificateur universel par excellence — il ne laisse aucune exception. En 2:148, il pose que CHAQUE communaute a sa direction. Le Coran utilise « kull » pour affirmer des verites universelles qui transcendent les particularismes — ici, chacun a sa direction, mais tous sont appeles au bien.",
              axe5_frequence: "Pour la mission du khalifa, la totalite rappelle l'universalite de la mission. Chaque communaute a sa direction mais la mission du bien est commune a tous. Le khalifa ne peut se limiter a sa propre direction — il doit reconnaitre la diversite tout en poursuivant l'excellence dans le bien. La totalite est un appel a l'ouverture, pas a l'exclusivite."
            },
            "Émoussement/Faiblesse": {
              status: "nul",
              senses: ["s'emousser", "etre fatigue"],
              proof_ctx: "Le sens d'emoussement est un usage concret de k-l-l. Le contexte est la distribution universelle (a chacun une direction), pas la fatigue ou la perte de tranchant."
            },
            "Charge/Dépendance": {
              status: "nul",
              senses: ["fardeau", "personne a charge"],
              proof_ctx: "Le sens de charge est hors sujet — le mot kull est ici un quantificateur universel, pas un nom designant un fardeau ou une personne a charge."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["couronner"],
              proof_ctx: "Le sens concret de couronnement est hors sujet — le contexte est la distribution universelle des directions de priere."
            },
            "Sens isolé/Agacer": {
              status: "nul",
              senses: ["agacer les dents"],
              proof_ctx: "Le sens d'agacement dentaire est un sens physique isole sans rapport avec le contexte de distribution universelle."
            }
          }
        }
      },
      // wjh pos=1
      {
        word_key: "wjh", position: 1, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le mot wijhatun est un nom feminin singulier indefini de la racine w-j-h. Le Lane's donne : direction, cote vers lequel on se tourne, visage. Le wijah est la direction du visage — la ou on oriente sa face. L'indefini marque qu'il s'agit d'UNE direction parmi d'autres, pas LA direction unique. Dans le contexte de la qibla, la wijha est l'orientation de la priere — chaque communaute se tourne vers un point precis. Le sens de direction est le sens premier ici car le verset parle d'orientation rituelle.",
              axe1_verset: "Le mot wijhatun est le noyau du constat initial : a chacun une direction. Le champ lexical du verset (tourner, rivaliser, biens, ou que vous soyez) montre que la direction est le point de depart d'un raisonnement plus large. Le verset ne s'arrete pas a la direction — il passe a l'injonction de rivaliser dans le bien. La direction n'est pas une fin en soi mais un fait qui mene a autre chose : la competition ethique.",
              axe2_voisins: "Le verset 2:144 parlait du changement de qibla — « tourne ton visage vers la Mosquee sacree ». Le verset 2:145 affirmait que les gens du Livre ne suivraient pas la qibla du Prophete. Le verset 148 elargit le propos : chaque communaute a SA direction. Les versets voisins traitent de la qibla specifique, le verset 148 universalise — chacun a la sienne, rivalisez dans le bien.",
              axe3_sourate: "La racine w-j-h est centrale dans le passage de la qibla (2:144-150). En 2:144, « tourne ton visage (wajhaka) vers la Mosquee sacree ». En 2:115, « ou que vous vous tourniez, la est la Face (wajh) de Dieu ». La sourate utilise w-j-h pour decrire a la fois l'orientation rituelle (qibla) et la presence divine (Face de Dieu). Le verset 148 se situe dans le registre de l'orientation rituelle.",
              axe4_coherence: "La racine w-j-h apparait environ 79 fois dans le Coran. Le mot wijah designe specifiquement la direction de la priere. En 2:148, chaque communaute a sa wijha — le Coran reconnait la pluralite des orientations rituelles. Cette reconnaissance n'est pas un relativisme mais un constat qui mene a l'injonction : rivalisez dans le bien plutot que de disputer sur les directions.",
              axe5_frequence: "Pour la mission du khalifa, la direction est l'orientation de la mission. Chaque communaute a sa direction mais la mission du bien est commune. Le khalifa ne doit pas se figer sur la direction rituelle au point d'oublier la substance — le bien. La direction est un moyen, le bien est la fin. La mission exige de depasser les differences d'orientation pour poursuivre l'excellence."
            },
            "Sens isolé/Manière": {
              status: "nul",
              senses: ["maniere"],
              proof_ctx: "Le sens de maniere est un usage secondaire de w-j-h. Le contexte est l'orientation de la priere, pas une facon de faire."
            },
            "Sens isolé/Noble": {
              status: "nul",
              senses: ["noble"],
              proof_ctx: "Le sens de noblesse est un usage concret isole de w-j-h. Le contexte est la direction rituelle, pas la noblesse."
            }
          }
        }
      },
      // wly pos=3
      {
        word_key: "wly", position: 3, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le mot muwallIha est un participe actif de la forme II de la racine w-l-y avec pronom suffixe feminin « ha ». Le Lane's donne pour la forme II : tourner vers, diriger vers, confier a. La racine w-l-y porte le sens fondamental de proximite — celui qui se tourne vers quelque chose s'en rapproche. Le participe actif indique une action deliberee et continue : il tourne activement sa direction. Le pronom « ha » renvoie a « wijha » (direction). Le sens retenu de la racine est « proche/protecteur » car la forme II de w-l-y dans ce contexte decrit l'acte de se tourner vers sa direction — c'est l'acte de se rapprocher de ce vers quoi on est oriente.",
              axe1_verset: "Le mot muwallIha qualifie l'action de chacun : il tourne vers elle (la direction). Le champ lexical (direction, tourner, rivaliser) montre que l'acte de se tourner est volontaire et delibere. Le participe actif indique une action continue — ce n'est pas un geste ponctuel mais une orientation permanente. Le verset montre que chacun est activement engage dans sa direction avant de passer a l'injonction de rivaliser dans le bien.",
              axe2_voisins: "Le verset 2:144 utilisait « walli wajhaka » (tourne ton visage) — meme racine w-l-y a la forme II, meme structure transitive. Le verset 148 reprend cette structure en la generalisant : chacun tourne sa direction. Le verset 144 est un ordre au Prophete, le verset 148 est un constat universel. La meme racine lie l'ordre specifique au constat general.",
              axe3_sourate: "La racine w-l-y est une des racines les plus riches de la sourate al-Baqarah. En 2:107, « vous n'avez en dehors de Dieu ni protecteur (waliyy) ni secoureur ». En 2:120, les juifs et chretiens ne seront pas satisfaits. En 2:144, « tourne ton visage ». La racine couvre la protection, l'alliance et l'orientation — tous ces sens convergent vers la proximite fondamentale.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. La forme II (walla/yuwallI) apparait dans le contexte de l'orientation rituelle en 2:144, 2:149, 2:150. Le Coran utilise cette forme pour decrire l'acte de tourner le visage vers la qibla. En 2:148, le meme verbe est generalise — chacun tourne vers sa direction. L'acte de tourner est le geste fondamental de la priere orientee.",
              axe5_frequence: "Pour la mission du khalifa, se tourner vers une direction est l'acte fondamental de la mission — choisir une orientation et s'y engager. Le khalifa doit se tourner vers Dieu comme qibla ultime. L'acte de tourner est un choix qui engage tout le corps et tout l'esprit — ce n'est pas un geste superficiel mais un engagement total. Se tourner vers le bien est la mission permanente."
            },
            "Autorité": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est un usage de w-l-y (walI comme gouverneur). Le contexte est l'orientation rituelle — le participe muwallIha decrit l'acte de tourner vers la direction, pas l'exercice de l'autorite."
            }
          }
        }
      },
      // sbq pos=4
      {
        word_key: "sbq", position: 4, sense_chosen: "devancer",
        analysis_axes: {
          sense_chosen: "devancer",
          concept_chosen: "Antériorité/Devancement",
          concepts: {
            "Antériorité/Devancement": {
              status: "retenu",
              senses: ["preceder", "devancer", "courir plus vite", "course"],
              proof_ctx: "Le verbe istabiqU est un imperatif 2MP de la forme X de la racine s-b-q. Le Lane's donne : devancer, preceder, aller plus vite que les autres. La forme X (istaf'ala) ajoute l'idee de recherche active — chercher a devancer, s'efforcer de surpasser. L'imperatif marque un ordre divin direct adresse a la communaute : rivalisez ! Le complement « al-khayrat » (les biens) oriente la rivalite — ce n'est pas une course aveugle mais une competition dans l'excellence. La distinction avec « parole anterieure » (nul) est claire : le verbe est un imperatif de rivalite, pas un nom designant une parole passee.",
              axe1_verset: "Le verbe istabiqU est l'injonction centrale du verset — apres le constat (a chacun une direction), vient l'ordre (rivalisez dans les biens). Le champ lexical (direction, tourner, biens, Dieu, puissant) montre que la rivalite dans le bien est la reponse divine a la diversite des directions. Le verset ne demande pas de disputer sur les qibla mais de rivaliser dans les oeuvres. La competition est redirigee : de la polemique rituelle vers l'excellence ethique.",
              axe2_voisins: "Le verset 2:145 constatait l'impossibilite de convaincre les gens du Livre sur la qibla. Le verset 148 propose une alternative : au lieu de polemiser, rivalisez dans le bien. Le verset 149 reviendra a l'injonction specifique de la qibla. Le verset 148 est un pivot — il depasse la polemique des directions pour poser le principe de la rivalite dans le bien.",
              axe3_sourate: "La racine s-b-q apparait rarement dans la sourate al-Baqarah — ce verset est son usage le plus marquant. L'imperatif istabiqU est un hapax dans la sourate, ce qui lui donne un poids particulier. La sourate al-Baqarah traite des conflits entre communautes — le verset 148 propose la rivalite dans le bien comme solution aux divisions rituelles.",
              axe4_coherence: "La racine s-b-q apparait environ 27 fois dans le Coran. En 5:48, le meme imperatif « istabiqU al-khayrat » (rivalisez dans les biens) apparait dans un contexte identique — la diversite des lois et des voies. Le Coran repete cette injonction pour montrer que la diversite des communautes est voulue par Dieu et que la reponse est la competition dans l'excellence, pas le conflit.",
              axe5_frequence: "Pour la mission du khalifa, la rivalite dans le bien est l'essence de la mission. Le khalifa n'est pas appele a imposer une direction unique mais a exceller dans le bien. La forme X (chercher activement a devancer) montre que la mission exige un effort constant — pas une passivite mais une course active vers l'excellence. Rivaliser dans le bien est la gouvernance juste par l'exemple."
            },
            "Sens isolé/Parole": {
              status: "nul",
              senses: ["parole anterieure"],
              proof_ctx: "Le sens de parole anterieure est un usage nominal secondaire de s-b-q. Le contexte est un imperatif de rivalite, pas une reference a une parole passee."
            }
          }
        }
      },
      // khyr pos=5
      {
        word_key: "khyr", position: 5, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "meilleur", "bonte"],
              proof_ctx: "Le mot al-khayrati est un nom feminin pluriel defini au genitif de la racine kh-y-r. Le Lane's donne : bien, bonte, ce qui est bon et preferable. Le pluriel (khayrat) designe les bonnes actions dans leur diversite — les oeuvres de charite, de justice, de piete. L'article defini (al-) marque que ces biens sont connus et identifies dans la conscience collective. Le genitif apres « istabiqU » (rivalisez) fait des khayrat le terrain de la competition.",
              axe1_verset: "Le mot al-khayrati est le complement du verbe istabiqU — rivalisez dans les biens. Le champ lexical (direction, tourner, rivaliser, Dieu, puissant) montre que les biens sont le terrain commun ou toutes les communautes peuvent se retrouver. Au lieu de disputer sur les directions, le verset oriente vers les biens. Le pluriel souligne la diversite des formes du bien — ce n'est pas un seul acte mais l'ensemble des oeuvres bonnes.",
              axe2_voisins: "Le verset 2:143 presentait la communaute comme « mediane » (ummatan wasatan). Le verset 148 precise ce que doit faire cette communaute mediane : rivaliser dans les biens. Les versets voisins traitent de la qibla, mais le verset 148 pose le principe superieur — le bien est plus important que la direction rituelle.",
              axe3_sourate: "La racine kh-y-r apparait frequemment dans la sourate al-Baqarah. En 2:54, « c'est mieux pour vous aupres de votre Createur ». En 2:110, « ce que vous avancerez de bien pour vous-memes, vous le trouverez aupres de Dieu ». La sourate insiste sur le fait que le bien est la vraie mesure — pas les rites mais les actes. Le verset 148 confirme cette hierarchie.",
              axe4_coherence: "La racine kh-y-r apparait environ 190 fois dans le Coran. L'expression « istabiqU al-khayrat » apparait deux fois — en 2:148 et en 5:48. Les deux occurrences sont dans le contexte de la diversite des communautes. Le Coran fait du bien le critere universel qui transcende les differences rituelles. Le bien est le langage commun de toutes les communautes.",
              axe5_frequence: "Pour la mission du khalifa, le bien est l'objectif de la mission. Le khalifa est appele a rivaliser dans le bien — a gouverner par l'excellence, a servir par les bonnes oeuvres. La mission n'est pas de controler les directions de priere mais de produire du bien. La gouvernance juste se mesure a la qualite des oeuvres, pas a la conformite rituelle."
            }
          }
        }
      },
      // kwn pos=7
      {
        word_key: "kwn", position: 7, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe takUnU est un inaccompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister, se trouver. Ici le verbe est incomplet — il sert de support grammatical avec le complement de lieu « ayna ma » (ou que). L'expression « ayna ma takUnU » signifie « ou que vous soyez » — le verbe porte le temps (inaccompli = realite continue) et la personne (2MP = vous). Le verbe ne decrit pas la venue a l'existence mais la localisation spatiale.",
              axe1_verset: "Le verbe takUnU ouvre la deuxieme partie du verset : ou que vous soyez, Dieu vous ramenera. Le champ lexical (ou que, vous soyez, Dieu, viendra, ensemble) montre que l'ubiquite divine transcende l'ubiquite humaine — ou que les humains se trouvent, Dieu les atteint. Le verbe « etre » sert de pivot entre la dispersion des communautes (ou que vous soyez) et le rassemblement divin (Dieu vous ramenera).",
              axe2_voisins: "Le verset 2:115 posait un principe similaire : « ou que vous vous tourniez, la est la Face de Dieu ». Le verset 148 reprend ce principe sous un autre angle : ou que vous soyez, Dieu vous ramenera. Les deux versets affirment que le lieu ne limite pas la presence et l'action de Dieu. Le verset 115 parle de la presence, le 148 parle du rassemblement.",
              axe3_sourate: "La racine k-w-n est parmi les plus frequentes de la sourate al-Baqarah. Le verbe « kana/yakUnu » structure presque chaque passage comme support grammatical. En 2:148, l'usage avec « ayna ma » (ou que) cree une universalite spatiale — aucun lieu n'echappe a Dieu. La sourate affirme constamment que Dieu depasse les limites humaines.",
              axe4_coherence: "La racine k-w-n apparait environ 1390 fois dans le Coran. L'expression « ayna ma takUnU/kuntum » (ou que vous soyez/etiez) apparait dans plusieurs versets. En 4:78, « ou que vous soyez, la mort vous atteindra ». En 2:148, c'est Dieu qui atteint — pas la mort mais le rassemblement. Le Coran montre que rien n'echappe a Dieu, ni lieu ni temps.",
              axe5_frequence: "Pour la mission du khalifa, etre en un lieu n'est pas un obstacle a la mission. Ou que le khalifa se trouve, il reste sous l'autorite divine. Le lieu ne definit pas la mission — le bien peut etre fait partout. L'ubiquite de l'injonction divine (ou que vous soyez) rappelle que la mission n'a pas de frontiere geographique."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est un usage secondaire de k-w-n. Le verbe est ici un simple verbe d'existence spatial (ou que vous soyez), pas un verbe d'humilite."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu/etat est le sens nominal de k-w-n. Le verbe takUnU est ici un verbe verbal (etre/se trouver), pas un nom designant un lieu ou un etat."
            }
          }
        }
      },
      // aty pos=8
      {
        word_key: "aty", position: 8, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe ya'ti est un inaccompli 3MS de la racine a-t-y. Le Lane's donne : venir, arriver, apporter. Ici le sujet est Allah — Dieu viendra avec vous (bikum). La preposition bi (avec) donne au verbe le sens d'amener, de faire venir avec soi. L'inaccompli marque une promesse future certaine — Dieu amenera. Le complement « jamI'an » (tous ensemble) precise l'etat du rassemblement : complet, sans exception. La distinction avec « detruire » (nul) est evidente : le contexte est le rassemblement, pas la destruction.",
              axe1_verset: "Le verbe ya'ti porte l'action divine centrale du verset : Dieu viendra avec vous tous ensemble. Le champ lexical (Dieu, ensemble, puissant) montre que la venue divine est un acte de rassemblement — Dieu ne vient pas seul, Il amene avec Lui toutes les communautes. Le verset construit une progression : diversite des directions → rivalite dans le bien → rassemblement divin. La venue de Dieu est le point d'arrivee de cette progression.",
              axe2_voisins: "Le verset 2:144 ordonnait de tourner le visage vers la Mosquee sacree. Le verset 148 promet que malgre la diversite des directions, Dieu rassemblera tous. Le verset 149 reviendra a l'injonction specifique. Le verset 148 place la promesse du rassemblement comme horizon — les directions sont diverses mais la destination est unique : Dieu rassemble.",
              axe3_sourate: "La racine a-t-y est frequente dans la sourate al-Baqarah sous ses differentes formes. En 2:85, « le Jour de la Resurrection ». En 2:101, « quand leur vint un envoye ». En 2:148, c'est Dieu qui vient avec les humains — un mouvement divin vers les creatures. La sourate montre que la venue peut etre humaine (les envoyes viennent) ou divine (Dieu vient rassembler).",
              axe4_coherence: "La racine a-t-y apparait environ 540 fois dans le Coran. Le verbe « ata bi- » (venir avec) designe l'acte d'amener quelque chose ou quelqu'un. En 2:148, Dieu amene toutes les communautes ensemble. En 11:33, « Il vous amenera le chatiment ». Le meme verbe peut amener le bien ou le chatiment — en 2:148, c'est le rassemblement qui est amene.",
              axe5_frequence: "Pour la mission du khalifa, la venue de Dieu est la garantie de la mission. Dieu rassemblera tous les khalifas, ou qu'ils soient. La mission n'est pas solitaire — elle s'inscrit dans un rassemblement divin. Le khalifa peut etre disperse dans le monde mais Dieu le ramenera avec tous les autres. Cette promesse donne un sens eschatologique a la mission quotidienne."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["detruire"],
              proof_ctx: "Le sens de destruction est hors sujet — le verbe ya'ti avec la preposition bi et le complement jamI'an decrit le rassemblement, pas la destruction."
            }
          }
        }
      },
      // alh pos=10 (1ere occurrence)
      {
        word_key: "alh", position: 10, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif, sujet du verbe ya'ti (viendra). Dieu est l'agent du rassemblement — c'est Lui qui amene toutes les communautes ensemble. Le nominatif marque la position de sujet — Dieu agit, les humains sont l'objet de Son action. La premiere occurrence d'Allah dans le verset est celle du Dieu qui rassemble.",
              axe1_verset: "Le nom Allahu est le sujet du verbe ya'ti — Dieu viendra avec vous. Le champ lexical (venir, ensemble, puissant) montre que Dieu est l'agent actif du rassemblement. Le verset oppose l'activite humaine (rivaliser dans le bien) et l'activite divine (rassembler). Les humains rivalisent, Dieu rassemble — la competition dans le bien ne mene pas a la fragmentation mais au rassemblement divin.",
              axe2_voisins: "Le verset 2:143 parlait de Dieu qui est « compatissant et misericordieux ». Le verset 148 montre un autre attribut : Dieu rassemble et Dieu est puissant. Les versets voisins presentent differentes facettes de l'action divine — compassion, rassemblement, puissance.",
              axe3_sourate: "Le nom Allah structure toute la sourate al-Baqarah comme sujet principal. En 2:148, Dieu apparait deux fois : comme agent du rassemblement (ya'ti bikum Allahu) et comme detenteur de la puissance (inna Allaha qadIr). La sourate montre constamment que Dieu est a la fois l'agent et la fin — Il agit et Il garantit.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:148, la double occurrence rappelle que Dieu est a la fois celui qui rassemble et celui qui peut tout. Le Coran lie l'action divine a la puissance divine — ce que Dieu promet, Il peut l'accomplir. La promesse du rassemblement est garantie par la toute-puissance.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant et le garant de la mission. Le rassemblement divin montre que la mission individuelle s'inscrit dans un plan collectif. Le khalifa travaille seul mais Dieu rassemblera tous les efforts. La mission n'est pas vaine — Dieu garantit son aboutissement."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah au nominatif comme sujet du verbe. Le contexte est le rassemblement divin."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["adorer", "faire adorer", "se devouer au culte", "diviniser"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est l'action divine de rassembler."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["chercher refuge", "proteger", "demeurer"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est Dieu comme agent du rassemblement."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le mot est le nom propre Allah dans un contexte de rassemblement."
            }
          }
        }
      },
      // jme pos=11
      {
        word_key: "jme", position: 11, sense_chosen: "rassembler",
        analysis_axes: {
          sense_chosen: "rassembler",
          concept_chosen: "Rassemblement/Union",
          concepts: {
            "Rassemblement/Union": {
              status: "retenu",
              senses: ["rassembler", "reunir", "assembler", "contracter", "unanimite", "vendredi", "totalite"],
              proof_ctx: "Le mot jamI'an est un nom au cas direct (hal, circonstanciel d'etat) de la racine j-m-e. Le Lane's donne : ensemble, tous reunis, totalite rassemblee. Le mot jamI' est un nom de forme fa'Il qui designe l'etat de rassemblement complet — rien n'est laisse de cote. L'accusatif en -an marque le hal (etat) : Dieu vous amenera dans l'etat de rassemblement. La distinction avec « vendredi » est claire : jamI'an est un hal adverbial, pas un nom de jour.",
              axe1_verset: "Le mot jamI'an qualifie l'etat dans lequel Dieu amenera les communautes : tous ensemble, sans exception. Le champ lexical (Dieu, venir, tous, puissant) montre que le rassemblement est total et garanti par la puissance divine. Le verset oppose la dispersion actuelle (chaque communaute a sa direction, ou que vous soyez) au rassemblement futur (Dieu vous amenera tous ensemble). La diversite est temporaire, le rassemblement est la destination.",
              axe2_voisins: "Le verset 2:143 presentait la communaute comme temoin pour les gens. Le verset 148 elargit la perspective : toutes les communautes seront rassemblees par Dieu. Les versets voisins traitent de la qibla specifique, mais le verset 148 ouvre sur l'horizon eschatologique — le rassemblement final depasse les differences rituelles.",
              axe3_sourate: "La racine j-m-e apparait dans la sourate al-Baqarah dans le contexte du rassemblement divin. En 2:203, le rassemblement a Mina pendant le pelerinage. En 2:148, le rassemblement est eschatologique — Dieu rassemblera toutes les communautes. La sourate utilise j-m-e pour montrer que le rassemblement est un principe divin qui se manifeste dans les rites et dans l'eschatologie.",
              axe4_coherence: "La racine j-m-e apparait environ 130 fois dans le Coran. Le mot jamI'an apparait frequemment comme hal pour decrire un rassemblement total. En 10:28, « Nous les rassemblerons tous ensemble ». En 36:32, « tous devant Nous seront amenes ». Le Coran promet le rassemblement final comme une certitude — toutes les creatures seront reunies devant Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le rassemblement est l'horizon de la mission. Les efforts disperses seront un jour rassembles. Le khalifa ne travaille pas en vain — Dieu rassemblera tous les efforts de tous les khalifas. Le rassemblement divin donne un sens collectif a la mission individuelle. La gouvernance juste vise le rassemblement, pas la division."
            }
          }
        }
      },
      // alh pos=13 (2eme occurrence)
      {
        word_key: "alh", position: 13, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Deuxieme occurrence d'Allah dans le verset — ici a l'accusatif apres la particule « inna » (certes) dans la phrase nominale « inna Allaha 'ala kulli shay'in qadIr » (certes Dieu est sur toute chose puissant). La particule « inna » renforce l'affirmation — ce n'est pas une simple declaration mais une insistance. Allah est ici le sujet de l'attribut « qadIr » (puissant). La deuxieme occurrence lie la puissance a la promesse du rassemblement.",
              axe1_verset: "Le nom Allaha ferme le verset dans une formule de puissance. La deuxieme occurrence d'Allah est liee a l'attribut qadIr (puissant). Le verset construit une progression : Dieu rassemble (premiere occurrence) parce que Dieu est puissant (deuxieme occurrence). La puissance est la garantie de la promesse. Le champ lexical (toute chose, puissant) montre que rien n'echappe a la capacite divine.",
              axe2_voisins: "Le verset 2:20 se terminait par la meme formule « inna Allaha 'ala kulli shay'in qadIr ». Le verset 2:106 aussi. La repetition de cette formule dans les versets de la sourate cree un refrain qui rappelle constamment la toute-puissance divine comme fondement de toute affirmation.",
              axe3_sourate: "La formule « inna Allaha 'ala kulli shay'in qadIr » est un refrain de la sourate al-Baqarah. Elle apparait apres des affirmations importantes pour les sceller par la toute-puissance. En 2:148, elle scelle la promesse du rassemblement. La sourate utilise cette formule comme un cachet d'autorite divine.",
              axe4_coherence: "La formule « inna Allaha 'ala kulli shay'in qadIr » apparait environ 13 fois dans le Coran. Chaque occurrence suit une affirmation majeure — creation, resurrection, rassemblement, chatiment. Le Coran utilise cette formule comme preuve ultime : Dieu peut tout, donc ce qu'Il promet se realisera. En 2:148, la promesse du rassemblement est garantie par la toute-puissance.",
              axe5_frequence: "Pour la mission du khalifa, la puissance de Dieu est le fondement de la mission. Le khalifa agit parce que Dieu a la puissance de donner sens a ses actes. La toute-puissance divine n'est pas une menace mais une garantie — les efforts du khalifa ne seront pas perdus car Dieu a le pouvoir de les rassembler et de les recompenser."
            }
          }
        }
      },
      // shya pos=15
      {
        word_key: "shya", position: 15, sense_chosen: "chose",
        analysis_axes: {
          sense_chosen: "chose",
          concept_chosen: "Chose/Existence",
          concepts: {
            "Chose/Existence": {
              status: "probable",
              senses: ["chose"],
              proof_ctx: "Le mot shay'in est un nom masculin singulier indefini au genitif de la racine sh-y-a. Le Lane's donne : chose, toute realite qui existe, ce qui peut etre su ou mentionne. Le mot shay' est le concept le plus general — il englobe tout ce qui est. L'indefini avec « kull » (kulli shay'in, toute chose) cree l'universalite absolue — rien n'echappe a la puissance de Dieu. Le sens de « chose » est ici purement designatif — le mot sert a dire « tout » par la formule « toute chose ». La distinction avec « vouloir » (retenu) est que le mot est ici un nom dans une construction possessive, pas un verbe.",
              axe1_verset: "Le mot shay'in complete la formule « 'ala kulli shay'in qadIr » (sur toute chose puissant). Le champ lexical (tout, chose, puissant) montre que le mot « chose » sert a etendre la puissance divine a l'infini — il n'y a pas de realite qui echappe. Le verset utilise cette formule pour garantir la promesse du rassemblement : si Dieu est puissant sur toute chose, Il peut rassembler toutes les communautes.",
              axe2_voisins: "La meme formule « kulli shay'in qadIr » apparait dans les versets voisins (2:20, 2:106). Le mot « shay' » est identique dans chaque occurrence — il sert de quantificateur universel. Les versets voisins utilisent la meme formule pour sceller differentes promesses et affirmations.",
              axe3_sourate: "La racine sh-y-a apparait dans la sourate al-Baqarah sous ses deux sens — chose et vouloir. En 2:20, « Dieu est sur toute chose puissant ». En 2:185, « Dieu veut pour vous la facilite ». Le mot shay' au sens de « chose » est le plus frequent dans ces formules de toute-puissance.",
              axe4_coherence: "La racine sh-y-a apparait environ 520 fois dans le Coran. Le mot shay' au sens de « chose » est l'un des mots les plus frequents. La formule « kulli shay'in » (toute chose) cree l'universalite — rien n'est exclu. Le Coran utilise cette universalite pour affirmer l'absolue souverainete divine.",
              axe5_frequence: "Pour la mission du khalifa, la « chose » rappelle que tout est sous l'autorite de Dieu. Le khalifa ne gere pas seulement les affaires humaines — il agit dans un monde ou toute chose est sous la puissance divine. Cette universalite donne a la mission une dimension cosmique — pas seulement sociale ou politique."
            },
            "Volonté": {
              status: "retenu",
              senses: ["vouloir"],
              proof_ctx: "Le sens de volonte est un sens majeur de la racine sh-y-a. Le Lane's donne : vouloir, desirer, avoir l'intention. La distinction avec « chose » est que « vouloir » est un verbe d'action interieure tandis que « chose » est un nom designant toute realite. Dans ce verset, le mot est un nom (shay'in, une chose) dans une construction possessive (kulli shay'in), pas un verbe. Cependant, le sens de volonte est retenu au niveau de la racine car c'est le sens actif dominant de sh-y-a dans le Coran — Dieu veut (yasha'u) ce qu'Il veut.",
              axe1_verset: "Bien que le mot shay'in soit un nom dans ce verset, le sens verbal de « vouloir » est inherent a la racine sh-y-a. La formule « sur toute chose puissant » peut se lire comme « sur tout ce qui est voulu, puissant » — la puissance divine s'etend a tout ce que Dieu veut. Le verset lie implicitement la volonte divine au rassemblement — Dieu veut rassembler et Il en a la puissance.",
              axe2_voisins: "Le verset 2:142 posait la question : « que les a detournes de leur qibla ? ». La reponse implicite est la volonte de Dieu — Dieu dirige ou Il veut. Le verset 148 confirme que Dieu a la puissance sur toute chose, y compris la volonte de rassembler. Les versets voisins montrent que la volonte divine est le moteur des changements (qibla) et des rassemblements.",
              axe3_sourate: "La racine sh-y-a au sens de « vouloir » apparait dans la sourate en 2:20 « s'Il le voulait, Il leur enleverait l'ouie et la vue ». En 2:142, « Dieu guide qui Il veut ». La sourate insiste sur la volonte divine comme principe directeur — Dieu veut et Dieu peut.",
              axe4_coherence: "La racine sh-y-a au sens de « vouloir » (sha'a/yasha'u) apparait environ 236 fois dans le Coran. La formule « in sha'a Allahu » (si Dieu le veut) est un refrain de la piete. Le Coran lie constamment la volonte divine a la puissance divine — ce que Dieu veut, Il le peut.",
              axe5_frequence: "Pour la mission du khalifa, la volonte divine est le cadre de la mission. Le khalifa agit selon la volonte de Dieu — il ne peut rien sans la volonte divine. La volonte de Dieu de rassembler montre que la mission individuelle s'inscrit dans une volonte collective. Le khalifa veut le bien parce que Dieu veut le bien."
            }
          }
        }
      },
      // qdr pos=16
      {
        word_key: "qdr", position: 16, sense_chosen: "pouvoir",
        analysis_axes: {
          sense_chosen: "pouvoir",
          concept_chosen: "Puissance/Capacité",
          concepts: {
            "Puissance/Capacité": {
              status: "retenu",
              senses: ["pouvoir", "etre capable"],
              proof_ctx: "Le mot qadIrun est un adjectif au nominatif de la racine q-d-r. Le Lane's donne : puissant, capable, qui a le pouvoir de faire. QadIr est un attribut permanent — ce n'est pas une capacite ponctuelle mais une puissance inherente a celui qui la possede. L'adjectif est attribut d'Allah dans la phrase nominale « inna Allaha 'ala kulli shay'in qadIr ». La preposition 'ala (sur) marque la domination — la puissance s'exerce SUR toute chose. La distinction avec « mesurer/decreter » est que qadIr decrit la capacite, pas l'acte de mesurer.",
              axe1_verset: "Le mot qadIrun ferme le verset comme attribut divin. Le champ lexical (Dieu, toute chose, puissant) construit une affirmation de toute-puissance qui scelle la promesse du rassemblement. Le verset progresse du constat (a chacun une direction) a l'injonction (rivalisez) a la promesse (Dieu rassemblera) a la garantie (Dieu est puissant). QadIr est le mot final qui garantit tout ce qui precede.",
              axe2_voisins: "Le verset 2:20 se terminait par la meme formule. Le verset 2:106 aussi. La repetition de « qadIr » dans les versets de la sourate cree un refrain de toute-puissance. Chaque fois, la puissance divine garantit une affirmation specifique — en 2:148, elle garantit le rassemblement de toutes les communautes.",
              axe3_sourate: "La racine q-d-r est presente dans la sourate al-Baqarah sous ses deux sens principaux : puissance (qadIr) et mesure/destin (qadar). En 2:236, « le riche selon sa mesure (qadar) ». En 2:148, qadIr decrit la puissance divine absolue. La sourate distingue la mesure humaine (proportionnelle) de la puissance divine (absolue).",
              axe4_coherence: "La racine q-d-r apparait environ 132 fois dans le Coran. L'attribut qadIr apparait 45 fois, toujours attribue a Dieu. La formule « 'ala kulli shay'in qadIr » est une des formules les plus repetees du Coran. Le Coran utilise qadIr exclusivement pour Dieu — aucun autre etre n'est qualifie de qadIr dans cette formule absolue.",
              axe5_frequence: "Pour la mission du khalifa, la puissance divine est le fondement de la mission. Le khalifa n'est pas puissant par lui-meme — il agit sous l'autorite du Tout-Puissant. La mission est possible parce que Dieu en a la puissance. Le khalifa rivalise dans le bien en s'appuyant sur la puissance divine, pas sur sa propre force. La gouvernance juste reconnait que la vraie puissance appartient a Dieu."
            },
            "Mesure/Détermination": {
              status: "probable",
              senses: ["mesurer", "determiner", "decreter", "destin", "valeur"],
              proof_ctx: "Le sens de mesure/determination est un sens majeur de q-d-r. Le Lane's donne : mesurer, fixer la proportion, decreter le destin. La distinction avec la puissance est que la mesure est un acte de precision et de proportion, tandis que la puissance est une capacite d'action. Le mot qadIr dans ce verset est un attribut de capacite (pouvoir), pas de mesure (decreter). Cependant, la racine q-d-r lie intimement les deux sens — celui qui a la puissance est aussi celui qui mesure et decrete.",
              axe1_verset: "Bien que le mot qadIr exprime la puissance, le sens de mesure est sous-jacent. La formule « sur toute chose puissant » implique aussi « sur toute chose mesurant et decretant ». Le Dieu qui rassemble est aussi le Dieu qui mesure la proportion de chaque rassemblement. La mesure et la puissance sont les deux faces de l'autorite divine.",
              axe2_voisins: "Le verset 2:117 parle de Dieu qui « decrete une chose » (qada amran). Le verset 2:236 parle de la mesure (qadar) du riche et du pauvre. Les versets voisins montrent que Dieu mesure et decrete avec precision — la puissance n'est pas aveugle mais mesuree.",
              axe3_sourate: "La sourate al-Baqarah utilise q-d-r dans les deux sens. En 2:236, « le riche selon sa capacite (qadar) et le pauvre selon sa capacite ». La mesure est proportionnelle — chacun selon sa mesure. En 2:148, qadIr est la puissance absolue — sans proportion, sans limite.",
              axe4_coherence: "Le Coran utilise q-d-r sous ses differentes formes — qadar (destin, mesure), qadIr (puissant), qadr (nuit du destin en 97:1). La racine lie la puissance a la mesure : celui qui peut tout est aussi celui qui mesure tout. En 65:3, « Dieu a place pour chaque chose une mesure (qadr) ». La puissance divine est mesuree, pas arbitraire.",
              axe5_frequence: "Pour la mission du khalifa, la mesure divine rappelle que tout est proportionnel. Le khalifa doit mesurer ses actes — pas d'exces, pas de negligence. La gouvernance juste est une gouvernance mesuree, proportionnelle aux besoins et aux capacites."
            },
            "Sens isolé/Marmite": {
              status: "nul",
              senses: ["marmite"],
              proof_ctx: "Le sens concret de marmite est un usage physique isole de q-d-r. Le contexte est la puissance divine, pas un ustensile de cuisine."
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

  const verseIds = [155];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 148 ===\n');
  await processVerse(148);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V148 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
