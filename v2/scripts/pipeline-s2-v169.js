const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 169
// verse_id=176, analysis_id=535
// "Il ne vous ordonne que le mal et la turpitude, et de
//  dire sur Dieu ce que vous ne savez pas."
// Suite de V168 — ce que le diable ordonne a ceux qui
// suivent ses pas.
// =====================================================

const verseData = {
  169: {
    verse_id: 176,
    analysis_id: 535,
    translation_arab: "Il ne vous ordonne que le mal et la turpitude, et que vous disiez sur Dieu ce que vous ne savez pas.",
    full_translation: "Il ne vous commande que le mal et la turpitude, et de dire contre Allah ce que vous ne savez pas.",
    translation_explanation: `§DEMARCHE§
Le verset poursuit la description du diable commencee en V168. Le pronom « il » (huwa implicite) renvoie au diable (ash-shaytan) mentionne au verset precedent. Le verbe **ya'murukum** est un inaccompli 3MS de la racine a-m-r avec pronom suffixe 2MP. Le Lane's donne : ordonner, commander, enjoindre. L'inaccompli indique une action continue et repetee — le diable ne cesse d'ordonner. Le pronom suffixe « kum » (vous) montre que l'ordre est dirige vers les humains. La particule restrictive **innama** (ne...que) limite l'ordre du diable a deux choses : le mal et la turpitude. Cette restriction est importante — elle revele la nature exclusive de l'ordre diabolique : tout ce qu'il ordonne est mauvais, sans exception. Le nom **as-su'i** est un nom defini au genitif de la racine s-w-a. Le Lane's donne : ce qui est mauvais, le mal, ce qui cause du tort. Le mal (su') est le terme general pour tout ce qui est contraire au bien. L'article defini (as-) generalise — c'est LE mal dans son ensemble, pas un mal particulier. La preposition **bi** (avec/par) introduit l'objet de l'ordre. Le nom **al-fahsha'i** est un nom defini au genitif de la racine f-h-sh. Le Lane's donne : ce qui est excessif dans la laideur, la turpitude, l'acte qui depasse les limites de la decence. La turpitude (fahsha') est un degre au-dessus du mal — c'est le mal qui choque par son exces. L'article defini generalise la turpitude — c'est LA turpitude dans sa totalite. Le wa conjonctif lie le mal et la turpitude comme deux objets de l'ordre. Le verbe **taqulu** est un inaccompli apocopé 2MP de la racine q-w-l. Le Lane's donne : dire, enoncer, prononcer. L'inaccompli avec la conjonction « wa-an » (et que) le place sous la dependance de ya'murukum — le diable ordonne aussi que vous disiez. Dire sur Dieu ce qu'on ne sait pas est presente comme un troisieme objet de l'ordre diabolique. La preposition **'ala** (sur/contre) introduit l'objet de la parole — dire SUR Dieu, c'est-a-dire attribuer a Dieu ce qui ne vient pas de Lui. Le nom **Allahi** est le nom propre de la divinite au genitif. Le Lane's donne : Dieu, la divinite unique. Dieu est l'objet de la parole mensongere — le diable ordonne de parler sur Dieu sans savoir. Le pronom relatif **ma** (ce que) + la negation **la** (ne pas) + le verbe **ta'lamuna** (vous savez) forment l'expression « ce que vous ne savez pas ». Le verbe ta'lamuna est un inaccompli 2MP de la racine '-l-m. Le Lane's donne : savoir, connaitre. L'inaccompli avec la negation permanente (la ta'lamuna) designe un savoir absent — ils parlent sur Dieu sans posseder le savoir necessaire. Ce n'est pas qu'ils ont su et oublie — c'est qu'ils n'ont jamais su. Le verset structure trois ordres du diable en gradation : (1) le mal en general, (2) la turpitude qui est l'exces dans le mal, (3) dire sur Dieu ce qu'on ne sait pas — qui est la racine des deux premiers.

§JUSTIFICATION§
**ordonne** — Le sens retenu est « ordonner ». Le verbe ya'murukum designe l'acte de donner un ordre. L'alternative « affaire/chose » est ecartee car le mot est ici un verbe conjugue a l'inaccompli 3MS, pas un nom — la forme verbale ya'muru ne peut signifier que « il ordonne ».

**le mal** — Le sens retenu est « mal ». Le nom as-su'i designe ce qui est mauvais et cause du tort. L'alternative « honte/parties honteuses » est ecartee car le contexte est moral (le diable ordonne le mal), pas physique (la nudite).

**la turpitude** — Le sens retenu est « turpitude ». Le nom al-fahsha'i designe ce qui depasse les limites de la decence par exces. L'alternative « avarice » est ecartee car le contexte est l'exces dans le mal, pas un defaut de generosite.

**disiez** — Le sens retenu est « dire ». Le verbe taqulu designe l'acte de prononcer des paroles. L'alternative « opinion/avis » est ecartee car le mot est ici un verbe conjugue, pas un nom.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite unique. Les alternatives (adorer, asservir, confusion) sont ecartees car le mot est le nom propre dans un contexte de parole : dire SUR Dieu.

**savez** — Le sens retenu est « savoir ». Le verbe ta'lamuna designe la connaissance. L'alternative « marque/signe/monde » est ecartee car le mot est un verbe de connaissance, pas un nom.

§CRITIQUE§
Les traductions courantes rendent toutes le meme sens pour ce verset. La seule variation notable est entre « commander » et « ordonner » pour ya'murukum — les deux sont synonymes en francais courant. Hamidullah donne « commander » la ou nous donnons « ordonne ». La nuance est negligeable — « ordonner » est legerement plus direct et plus courant dans le registre du commandement imperatif. La structure en trois objets (mal, turpitude, dire sans savoir) est rendue de la meme maniere par toutes les traductions. La gradation est inherente au texte arabe et ne depend pas du choix du traducteur.`,
    segments: [
      { fr: "il ne...que", phon: "innama", arabic: "\u0625\u0650\u0646\u0651\u064e\u0645\u064e\u0627", is_particle: true, position: 0 },
      { fr: "vous ordonne", pos: "verbe", phon: "ya'murukum", arabic: "\u064a\u064e\u0623\u0652\u0645\u064f\u0631\u064f\u0643\u064f\u0645", word_key: "amr", is_particle: false, sense_retenu: "ordonner", position: 1 },
      { fr: "le", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 2 },
      { fr: "le mal", pos: "nom", phon: "as-su'i", arabic: "\u0671\u0644\u0633\u0651\u064f\u0648\u0653\u0621\u0650", word_key: "swa", is_particle: false, sense_retenu: "mal", position: 3 },
      { fr: "la turpitude", pos: "nom", phon: "al-fahsha'i", arabic: "\u0671\u0644\u0652\u0641\u064e\u062d\u0652\u0634\u064e\u0627\u0653\u0621\u0650", word_key: "fhš", is_particle: false, sense_retenu: "turpitude", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 5 },
      { fr: "et que", phon: "wa-an", arabic: "\u0648\u064e\u0623\u064e\u0646", is_particle: true, position: 5 },
      { fr: "vous disiez", pos: "verbe", phon: "taqulu", arabic: "\u062a\u064e\u0642\u064f\u0648\u0644\u064f\u0648\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 6 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649\u0670", is_particle: true, position: 7 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 8 },
      { fr: "ce que ne pas", phon: "ma la", arabic: "\u0645\u064e\u0627 \u0644\u064e\u0627", is_particle: true, position: 9 },
      { fr: "vous savez", pos: "verbe", phon: "ta'lamuna", arabic: "\u062a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 10 }
    ],
    words: [
      // amr pos=1
      {
        word_key: "amr", position: 1, sense_chosen: "ordonner",
        analysis_axes: {
          sense_chosen: "ordonner",
          concept_chosen: "Commandement/Autorité",
          concepts: {
            "Commandement/Autorité": {
              status: "retenu",
              senses: ["ordonner", "commander", "nommer gouverneur"],
              proof_ctx: null,
              axe1_verset: "Le verbe ya'murukum ouvre le contenu semantique du verset apres la restriction innama. C'est le verbe principal dont dependent les trois objets : le mal, la turpitude, et dire sur Dieu sans savoir. Le champ lexical du verset (ordonner, mal, turpitude, dire, Dieu, savoir) structure une chaine de commandement inversee — le diable commande le contraire de ce que Dieu commande. L'ordre diabolique est presente comme systematique et continu (inaccompli), pas comme un acte ponctuel.",
              axe2_voisins: "Le verset 168 commandait aux humains de manger de ce qui est licite et bon sur terre, et de ne pas suivre les pas du diable. Le verset 169 revele maintenant CE QUE le diable ordonne — le mal, la turpitude, et la parole sans savoir. Le contraste est direct : Dieu ordonne le licite et le bon (168), le diable ordonne le mal et la turpitude (169). Le verset 170 montrera la reaction de ceux qui sont appeles : ils refusent en invoquant la tradition de leurs peres.",
              axe3_sourate: "La racine a-m-r structure la sourate al-Baqarah autour du theme du commandement. En 2:27, Dieu ordonne de maintenir les liens. En 2:67, Dieu ordonne d'immoler une vache. En 2:169, c'est le diable qui ordonne — l'inversion est frappante. La sourate oppose systematiquement les ordres divins (bien, justice, licite) aux ordres diaboliques (mal, turpitude, ignorance).",
              axe4_coherence: "La racine a-m-r apparait environ 248 fois dans le Coran. En 7:28, le Coran refute ceux qui disent « Dieu nous a ordonne cela » quand ils commettent des turpitudes — Dieu n'ordonne pas la turpitude. En 16:90, « Dieu ordonne la justice et la bienfaisance ». Le Coran distingue clairement la source des ordres : Dieu ordonne le bien, le diable ordonne le mal. En 2:169, l'attribution de l'ordre au diable est explicite et sans ambiguite.",
              axe5_frequence: "Pour la mission du khalifa, le commandement est au coeur de la mission. Le khalifa doit distinguer les ordres divins des ordres diaboliques. L'ordre diabolique se presente souvent comme desirable — le diable « ordonne » en rendant le mal attrayant. Le khalifa doit reconnaitre la source de chaque commandement et n'obeir qu'aux ordres divins. Confondre les sources c'est trahir la mission."
            },
            "Affaire/Chose": {
              status: "nul",
              senses: ["affaire", "chose"],
              proof_ctx: null
            },
            "Consultation": {
              status: "nul",
              senses: ["consulter"],
              proof_ctx: null
            },
            "Sens isolé/Multiplier": {
              status: "nul",
              senses: ["multiplier"],
              proof_ctx: null
            },
            "Sens isolé/Signe": {
              status: "nul",
              senses: ["signe"],
              proof_ctx: null
            }
          }
        }
      },
      // swa pos=3
      {
        word_key: "swa", position: 3, sense_chosen: "mal",
        analysis_axes: {
          sense_chosen: "mal",
          concept_chosen: "Mal/Mauvais",
          concepts: {
            "Mal/Mauvais": {
              status: "retenu",
              senses: ["mal", "mauvais", "nuisible", "péché"],
              proof_ctx: null,
              axe1_verset: "Le nom as-su'i est le premier objet de l'ordre diabolique — le mal en general. Le champ lexical du verset place le mal en tete d'une gradation : le mal (su'), puis la turpitude (fahsha'), puis la parole sans savoir sur Dieu. Le mal est le terme le plus general — il englobe tout ce qui cause du tort. L'article defini (as-) generalise : c'est LE mal dans son integralite, pas un mal specifique. Le diable n'ordonne pas seulement un mal — il ordonne LE mal.",
              axe2_voisins: "Le verset 168 interdisait de suivre les pas du diable et le qualifiait d'ennemi manifeste. Le verset 169 precise la nature de ces pas : le mal et la turpitude. Le verset 170 montrera que ceux qui suivent le diable invoquent la tradition de leurs peres comme justification. Le mal ordonne par le diable se deguise en coutume ancestrale.",
              axe3_sourate: "La racine s-w-a apparait dans la sourate al-Baqarah en lien avec le chatiment et les mauvaises actions. En 2:81, « ceux qui commettent le mal et sont encercles par leurs fautes ». En 2:169, le mal est l'objet de l'ordre diabolique — c'est la source meme des mauvaises actions. La sourate trace le chemin du mal : le diable ordonne (169), les humains obeissent (170), les consequences suivent (81).",
              axe4_coherence: "La racine s-w-a apparait environ 167 fois dans le Coran. En 24:21, « le diable ordonne la turpitude et le blâmable » — le meme schema qu'en 2:169. En 28:84, « celui qui vient avec le mal ne sera retribue que par le mal ». Le Coran presente le mal comme une realite objective — ce n'est pas une opinion mais un fait que certains actes sont mauvais et que le diable les ordonne.",
              axe5_frequence: "Pour la mission du khalifa, le mal est l'obstacle principal de la mission. Le khalifa doit identifier le mal pour le repousser — or le mal ordonne par le diable se presente souvent sous des dehors acceptables. Le verset revele que le mal n'est pas spontane chez l'humain — il est ordonne par une source exterieure. Le khalifa doit remonter a la source pour comprendre pourquoi le mal persiste."
            },
            "Honte/Pudeur": {
              status: "nul",
              senses: ["honte"],
              proof_ctx: null
            }
          }
        }
      },
      // fhš pos=4
      {
        word_key: "fhš", position: 4, sense_chosen: "turpitude",
        analysis_axes: {
          sense_chosen: "turpitude",
          concept_chosen: "Indécence/Turpitude",
          concepts: {
            "Indécence/Turpitude": {
              status: "retenu",
              senses: ["être obscène", "turpitude", "acte immoral", "excéder les limites"],
              proof_ctx: null,
              axe1_verset: "Le nom al-fahsha'i est le deuxieme objet de l'ordre diabolique, apres le mal. La turpitude est un degre au-dessus du mal — c'est le mal qui depasse les limites de la decence par exces. Le champ lexical du verset construit une gradation ascendante : le mal (general), la turpitude (excessif), dire sur Dieu sans savoir (racine du mal). L'article defini (al-) generalise comme pour le mal — c'est LA turpitude dans toute son etendue, pas une turpitude particuliere.",
              axe2_voisins: "Le verset 168 interdisait de suivre les pas du diable. Le verset 169 precise que ces pas menent au mal ET a la turpitude — la turpitude etant l'etape suivante apres le mal. Le verset 268 reprendra le meme theme : « le diable vous promet la pauvrete et vous ordonne la turpitude ». La turpitude est une constante de l'ordre diabolique dans la sourate.",
              axe3_sourate: "La racine f-h-sh apparait dans la sourate al-Baqarah en 2:169 et 2:268 — dans les deux cas liee au diable. En 2:268, le diable promet la pauvrete et ordonne la turpitude, tandis que Dieu promet le pardon et la grace. La sourate oppose systematiquement les promesses du diable (turpitude, pauvrete) aux promesses de Dieu (pardon, grace).",
              axe4_coherence: "La racine f-h-sh apparait environ 24 fois dans le Coran. En 7:28, « Dieu n'ordonne pas la turpitude ». En 7:33, « Mon Seigneur a interdit les turpitudes, apparentes et cachees ». En 24:21, « le diable ordonne la turpitude ». Le Coran insiste : la turpitude ne vient jamais de Dieu — elle est toujours d'origine diabolique. Attribuer la turpitude a Dieu est une calomnie.",
              axe5_frequence: "Pour la mission du khalifa, la turpitude est le signe de l'influence diabolique. Le khalifa doit la reconnaitre et la repousser. La turpitude se distingue du simple mal par son exces — elle franchit les limites. Le khalifa est le gardien des limites : reconnaitre la turpitude c'est reconnaitre que les limites ont ete depassees et agir pour les retablir."
            },
            "Sens isolé/Être": {
              status: "nul",
              senses: ["être avare"],
              proof_ctx: null
            }
          }
        }
      },
      // qwl pos=6
      {
        word_key: "qwl", position: 6, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: null,
              axe1_verset: "Le verbe taqulu introduit le troisieme objet de l'ordre diabolique — dire sur Dieu ce qu'on ne sait pas. Ce troisieme objet est le plus grave des trois car il est la racine des deux premiers : c'est en disant sur Dieu ce qu'on ne sait pas qu'on declare licite le mal et la turpitude. Le champ lexical du verset aboutit a cette parole sans savoir comme le sommet de la gradation. L'inaccompli marque la repetition — le diable ordonne de dire continuellement.",
              axe2_voisins: "Le verset 168 interdisait de suivre les pas du diable. Le verset 169 revele que le sommet de ces pas est la parole sans savoir sur Dieu. Le verset 170 montrera un exemple concret de cette parole : « quand on leur dit : suivez ce que Dieu a fait descendre, ils disent : non, nous suivons ce que nos peres faisaient ». Dire sans savoir prend la forme de l'invocation des traditions humaines contre la revelation divine.",
              axe3_sourate: "La racine q-w-l est la racine la plus frequente de la sourate al-Baqarah apres a-l-h. La parole structure la sourate — les echanges entre Dieu et les humains, entre les croyants et les dissimulateurs, entre Moussa et son peuple. En 2:169, la parole est corrompue — elle est mise au service du diable en attribuant a Dieu ce qu'Il n'a pas dit.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. L'expression « dire sur Dieu ce qu'on ne sait pas » est condamnee en 7:33 comme un interdit majeur : « Mon Seigneur a interdit les turpitudes, le peche, l'agression sans droit, et que vous disiez sur Dieu ce que vous ne savez pas ». Cette derniere interdiction est placee en dernier — c'est la plus grave car elle est la source de toutes les autres transgressions.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'outil premier de la mission. Le khalifa doit parler avec savoir — chaque parole sur Dieu doit etre fondee sur la connaissance. Dire sur Dieu ce qu'on ne sait pas est le contraire de la mission : c'est corrompre l'outil meme de la mission. Le diable corrompt la parole pour corrompre la mission."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: null
            },
            "Sens isolé/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: null
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: null
            }
          }
        }
      },
      // llh pos=8
      {
        word_key: "llh", position: 8, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "dieu", "Dieu", "théologie"],
              proof_ctx: null,
              axe1_verset: "Le nom Allahi est l'objet de la parole sans savoir — dire SUR Dieu ce qu'on ne sait pas. Le champ lexical du verset (ordonner, mal, turpitude, dire, Dieu, savoir) place Dieu comme la cible ultime de l'ordre diabolique. Le diable n'ordonne pas seulement le mal et la turpitude — il ordonne de corrompre la connaissance de Dieu Lui-meme. Attribuer a Dieu ce qui ne vient pas de Lui est l'acte supreme du desordre.",
              axe2_voisins: "Le verset 168 appelait les humains a manger de ce qui est licite et bon. Le verset 169 montre que le diable ordonne de dire sur Dieu ce qu'on ne sait pas — c'est-a-dire de declarer illicite ce qui est licite ou licite ce qui est illicite. Le verset 170 montrera ceux qui disent « nous suivons nos peres » — ils attribuent a la tradition une autorite qui n'appartient qu'a Dieu.",
              axe3_sourate: "Le nom Allah structure chaque passage de la sourate al-Baqarah. En 2:169, Dieu est la cible de la corruption de la parole. En 2:168, Dieu est celui qui appelle au licite et au bon. La sourate oppose la parole de Dieu (vraie) a la parole sur Dieu (potentiellement fausse). Le diable corrompt non pas Dieu Lui-meme mais la connaissance que les humains ont de Dieu.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 7:33, dire sur Dieu ce qu'on ne sait pas est place comme l'interdit supreme — au-dessus des turpitudes et du peche. En 6:21, « qui est plus injuste que celui qui invente un mensonge contre Dieu ? ». Le Coran presente l'attribution mensongere a Dieu comme la source de toutes les corruptions.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. Dire sur Dieu ce qu'on ne sait pas c'est falsifier le mandat lui-meme. Le khalifa doit proteger la verite sur Dieu — ne rien Lui attribuer sans savoir, ne rien Lui retirer sans preuve. La connaissance authentique de Dieu est le fondement de la mission."
            },
            "Adoration/Culte": {
              status: "nul",
              senses: ["adorer", "servir", "se consacrer au culte"],
              proof_ctx: null
            },
            "Confusion/Perplexité": {
              status: "nul",
              senses: ["être confus"],
              proof_ctx: null
            },
            "Asservissement": {
              status: "nul",
              senses: ["réduire en esclavage"],
              proof_ctx: null
            }
          }
        }
      },
      // elm pos=10
      {
        word_key: "elm", position: 10, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaître", "être informé", "certitude", "savant", "science", "enseignement"],
              proof_ctx: null,
              axe1_verset: "Le verbe ta'lamuna ferme le verset avec la negation — « ce que vous ne savez pas ». Le champ lexical du verset aboutit au savoir comme critere final : le mal que le diable ordonne culmine dans la parole sans savoir. Le savoir est l'antidote au mal — celui qui sait ne dit pas sur Dieu ce qu'il ne sait pas. La negation (la ta'lamuna) revele que le probleme n'est pas le savoir en soi mais son absence : c'est le manque de savoir qui permet au diable d'ordonner.",
              axe2_voisins: "Le verset 168 appelait les humains a manger du licite et du bon. Le verset 169 revele que le diable ordonne le contraire et culmine par l'absence de savoir. Le verset 170 illustrera cette absence : « quand on leur dit de suivre ce que Dieu a fait descendre, ils disent : nous suivons nos peres ». Le refus du savoir prend la forme du suivisme aveugle — ils ne savent pas et ne cherchent pas a savoir.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:13, « ce sont eux les imbeciles mais ils ne savent pas ». En 2:30, « Je sais ce que vous ne savez pas ». En 2:169, le savoir est l'enjeu du combat entre Dieu et le diable — Dieu sait et enseigne, le diable ordonne de parler sans savoir. La sourate fait du savoir le critere de la soumission authentique.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. En 7:33, « dire sur Dieu ce que vous ne savez pas » est un interdit explicite. En 17:36, « ne poursuis pas ce dont tu n'as pas le savoir ». Le Coran fait du savoir une condition prealable a toute parole et a toute action. Parler sans savoir est une transgression en soi, independamment du contenu de la parole.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil fondamental de la mission. Le khalifa ne peut accomplir sa mission sans savoir — et le premier savoir est celui qui concerne Dieu. Le diable attaque le savoir parce que c'est la base de tout : sans savoir, le khalifa ne peut pas distinguer l'ordre divin de l'ordre diabolique. Le savoir est la premiere ligne de defense de la mission."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repère", "étendard", "lèvre fendue"],
              proof_ctx: null
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde"],
              proof_ctx: null
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

  const verseIds = [176];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 169 ===\n');
  await processVerse(169);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V169 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
