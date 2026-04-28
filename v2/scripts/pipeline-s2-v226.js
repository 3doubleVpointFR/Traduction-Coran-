const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 226
// verse_id=233, analysis_id=593
// "li-alladhina yu'luna min nisa'ihim
//  tarabbusu arba'ati ashhurin
//  fa-in fa'u
//  fa-inna Allaha ghafurun rahimun"
// =====================================================

const verseData = {
  226: {
    verse_id: 233,
    analysis_id: 593,
    translation_arab: "Pour ceux qui font le serment de s'abstenir de leurs femmes, une attente de quatre mois. S'ils reviennent, Dieu est Pardonneur, Misericordieux.",
    full_translation: "Ceux qui font le voeu de s'eloigner de leurs femmes peuvent attendre au plus quatre mois. S'ils reviennent [sur leur voeu], alors Allah est, en verite, Pardonneur et Misericordieux.",
    translation_explanation: `§DEMARCHE§
Le verset 226 traite de l'ila' (إيلاء) — le serment par lequel un homme jure de s'abstenir de toute relation conjugale avec sa femme. C'est une pratique pre-islamique de rupture indirecte du mariage : sans prononcer le divorce, l'homme abandonnait sa femme dans un entre-deux juridique indefini. Le Coran impose ici une limite temporelle de quatre mois, apres quoi l'homme doit trancher : soit revenir (fa'a) en revenant a la relation conjugale, soit prononcer le divorce (verset 227).

Le verbe **yu'luna** est un inaccompli 3MP de la racine a-l-w (Form IV). La forme IV de cette racine designe le serment solennel d'abstention — le Lane's donne pour ala (Form IV) : jurer de s'abstenir de, faire le voeu de ne pas s'approcher. Cette racine, distincte de 'alw (hauteur), est specifiquement juridique et designe le serment d'abstinence conjugale. Le contexte immediatement precede (2:225 sur les serments inconsideres) et suivi (2:227 sur le divorce) confirme ce champ semantique.

Le nom **tarabbusu** est un madar de la racine r-b-s. Le Lane's donne : attente, guet, attendre patiemment, observer avant d'agir. Le tarabbus est une attente active et deliberee — non pas une passivite mais un delai accorde pour la reflexion et le retour.

L'expression **arba'ati ashhurin** signifie litteralement « quatre mois ». Le nom ashhurun est le pluriel de shahrun (mois) de la racine sh-h-r. Lane's : mois (unite de temps). Le nombre quatre est un delai juridique : il accorde a l'homme le temps suffisant pour reconsiderer son serment.

Le verbe **fa'u** est un accompli 3MP de la racine f-y-' (fa ya hamza). Le Lane's donne : revenir, retourner a un etat anterieur, le fa' est le retour — non pas un aller mais un retour a ce qui etait. Dans ce contexte conjugal, fa'u = ils sont revenus [a leur femme, a la relation conjugale, au statut matrimonial normal]. Ce sens de « retour » est distinct du simple « aller » — c'est precisement le retour apres une rupture volontaire.

L'adjectif **ghafurun** est de la racine gh-f-r. Le Lane's donne : pardoner, couvrir, dissimuler les fautes, proteger de leur effet. Al-Ghafur est celui qui pardonne et couvre — le pardon divin est une couverture de la faute, pas seulement une remise de peine.

L'adjectif **rahimun** est de la racine r-h-m (Form intensif). Le Lane's donne : uterus, misericorde, tendresse maternelle/parentale. Rahimun (avec la form intensif) designe celui qui a une misericorde profonde et active — non pas une pitie distante mais une tendresse engagee. Dans ce contexte d'un homme qui a commis un serment de rupture mais qui revient, la misericorde divine accueille ce retour sans le condamner.

§JUSTIFICATION§
**ceux qui font le serment de s'abstenir** — yu'luna traduit la pratique de l'ila' : le serment solennel de ne pas s'approcher de la femme. La traduction « faire le voeu de s'eloigner » (Hamidullah) ou « jurer de s'abstenir » rend le meme sens.

**une attente de quatre mois** — tarabbusu arba'ati ashhurin. Le tarabbus est traduit par « attente » car il designe un delai delibere et observe. « Peuvent attendre au plus quatre mois » (Hamidullah) ajoute « au plus » absent du texte — le texte dit simplement « une attente de quatre mois ».

**S'ils reviennent** — fa-in fa'u : le retour (fa') est le terme technique pour le retour a la relation conjugale. Ce n'est pas un simple « revenir » — c'est revenir a la situation anterieure au serment. Hamidullah rend « reviennent [sur leur voeu] » — la note entre crochets precise correctement l'objet du retour.

**Dieu est Pardonneur** — ghafurun : le pardon divin est ici accorde a celui qui avait commis un serment d'abstinence et qui revient. La couverture de la faute (gh-f-r) est appropriee : le serment imprudent est couvert et pardonné.

**Misericordieux** — rahimun : la misericorde intense (form intensif) de Dieu est l'accueil du retour. Apres avoir pardonné (ghafur), Dieu accueille avec tendresse (rahim). Les deux attributs forment une paire complementaire : le pardon efface la faute, la misericorde accueille le retour.

**Concepts retenus** : pour ashhurin, le sens « Temps/Mois » est retenu (pas « Renommee ») car il s'agit d'un comptage temporel. Pour fa'u, le sense « Retour » est retenu (fa' = retour a un etat anterieur). Pour ghafurun, « Pardon/Couverture » est retenu — c'est l'attribut divin de couverture des fautes. Pour rahimun, « Misericorde/Tendresse » est retenu dans le contexte d'un attribut divin accueillant le retour apres la rupture.

§CRITIQUE§
Hamidullah traduit « tarabbusu arba'ati ashhurin » par « peuvent attendre au plus quatre mois » — l'expression « au plus » est une interpretation juridique (la limite maximale de l'ila') non presente dans le texte arabe. Le texte dit simplement « une attente de quatre mois » (tarabbusu = madar = l'acte d'attente ; arba'ati ashhurin = quatre mois). La precision « au plus » vient du fiqh qui interprete ce delai comme maximum, non de la lettre du texte.

La double cloture ghafurun/rahimun est particulierement significative ici : le pardon (gh-f-r) repond au serment imprudent commis, la misericorde (r-h-m) repond au retour et a la reconciliation conjugale. L'ordre n'est pas anodin — d'abord le pardon de la faute, ensuite la misericorde pour le retour. Comparer avec 2:173 (ghafurun rahimun apres la permission des interdits en cas de necessite) : la paire recurrente dans les contextes de transgression puis de retour.

La mention de l'ila' ici, entre les versets sur les serments (2:224-225) et les versets sur le divorce (2:227-232), structure une progression juridique : serments generaux (224-225), serment conjugal specifique et ses consequences (226-227), regles du divorce (228-232). Le verset 226 est un pivot entre la theorie des serments et le droit du divorce.`,
    segments: [
      { fr: "Ceux qui jurent de s'abstenir de leurs femmes", pos: "verbe", phon: "li-alladhina yu'luna min nisa'ihim", arabic: "لِّلَّذِينَ يُؤْلُونَ مِن نِّسَآئِهِمْ", is_particle: true, position: 0 },
      { fr: "peuvent attendre quatre mois", pos: "nom", phon: "tarabbusu arba'ati ashhurin", arabic: "تَرَبُّصُ أَرْبَعَةِ أَشْهُرٍ", word_key: "rbs", is_particle: false, sense_retenu: "attente/delai", position: 1 },
      { fr: "quatre mois", pos: "nom", phon: "arba'ati ashhurin", arabic: "أَرْبَعَةِ أَشْهُرٍ", word_key: "shhr", is_particle: false, sense_retenu: "temps/mois", position: 2 },
      { fr: "S'ils reviennent", pos: "verbe", phon: "fa-in fa'u", arabic: "فَإِن فَآءُو", word_key: "f y a", is_particle: false, sense_retenu: "retour/reintegration", position: 3 },
      { fr: "Dieu est Pardonneur", pos: "adj", phon: "fa-inna Allaha ghafurun", arabic: "فَإِنَّ ٱللَّهَ غَفُورٌ", word_key: "ghfr", is_particle: false, sense_retenu: "pardon/couverture", position: 4 },
      { fr: "Misericordieux", pos: "adj", phon: "rahimun", arabic: "رَّحِيمٌ", word_key: "rhm", is_particle: false, sense_retenu: "misericorde/tendresse", position: 5 }
    ],
    vwa: [
      {
        word_key: "rbs",
        position: 1,
        sense_chosen: "attente/delai",
        analysis_axes: {
          sense_chosen: "attente/delai",
          concept_chosen: "Attente/Guet",
          concepts: {
            "Attente/Guet": {
              status: "retenu",
              senses: ["attente", "guet", "delai observe", "temporiser", "surveiller en attendant"],
              proof_ctx: "Le nom tarabbusu est un madar de la racine r-b-s. Le Lane's donne : attendre, guetter, observer en attendant, temporiser. Le tarabbus est une attente deliberee et active — non pas une passivite mais un delai conscient pendant lequel on observe et reflechit. La forme madar designe l'acte lui-meme : l'acte d'attente est ce qui est prescrit (« leur prescription est une attente de quatre mois »).",
              axe1_verset: "L'attente (tarabbus) de quatre mois est le dispositif legal central du verset 226. Elle accorde un delai de reflexion a l'homme qui a prononce le serment d'ila'. L'attente n'est pas punitive mais remediale — elle permet le retour (fa') avant que la separation ne devienne definitive (divorce, verset 227).",
              axe2_voisins: "Le verset 225 traitait des serments inconsideres (yameen al-laghw). Le verset 226 specifie le cas du serment d'abstinence conjugale et impose un tarabbus (attente). L'attente est la reponse juridique au serment — non pas son annulation immediate mais un delai pour la reflexion.",
              axe3_sourate: "La racine r-b-s apparait dans la sourate al-Baqarah en 2:226 et 2:228 (tarabbusu bi-anfusihinna — l'attente des femmes divorcees = la 'idda). Les deux utilisations du meme terme dans le meme contexte familial montrent que le tarabbus est un dispositif juridique de transition : delai avant retour ou separation definitive.",
              axe4_coherence: "La racine r-b-s apparait environ 8 fois dans le Coran. Le tarabbus designe toujours une attente deliberee dans un contexte de tension ou d'incertitude — attente avant une decision, delai d'observation. Ce n'est pas une simple pause mais une periode active de discernement.",
              axe5_frequence: "Pour le khalifa, le principe du tarabbus (delai d'observation avant decision) est un modele de gouvernance prudente. Le khalifa ne decide pas precipitamment — il observe, attend, reflechit. Le delai accorde par le Coran dans ce cas conjugal modelise une justice qui donne a l'homme le temps de se corriger avant la sanction definitive."
            }
          }
        }
      },
      {
        word_key: "shhr",
        position: 2,
        sense_chosen: "temps/mois",
        analysis_axes: {
          sense_chosen: "temps/mois",
          concept_chosen: "Temps/Mois",
          concepts: {
            "Temps/Mois": {
              status: "retenu",
              senses: ["mois", "unite de temps lunaire", "periode mensuelle", "duree"],
              proof_ctx: "Le nom ashhurin est le pluriel gennitif indefini de shahrun de la racine sh-h-r. Le Lane's donne : mois (division temporelle), mais aussi renommee/notoriete (le mois est visible comme la lune). Ici, arba'ati ashhurin = quatre mois — c'est clairement le sens temporel. Le pluriel du mois (ashur) en combinaison avec le nombre quatre designe une duree concrete : le delai legal accordé.",
              axe2_voisins: "Le verset 217 mentionnait al-shahr al-haram (le mois sacre) — un usage de shahr dans son sens temporel sacralise. Le verset 226 utilise ashhurin dans un sens juridique temporel pur : quatre mois = duree du delai d'ila'. Les deux emplois confirment que shahr designe d'abord le temps.",
              axe3_sourate: "La sourate al-Baqarah utilise plusieurs fois des specifications temporelles en mois : 2:197 (les mois du hajj), 2:226 (quatre mois pour l'ila'), 2:234 (quatre mois et dix jours pour la 'idda de la veuve). Ces precisions temporelles en mois sont caracteristiques de la legislation coranique — le temps est mesure et prescrit.",
              axe4_coherence: "La racine sh-h-r apparait environ 27 fois dans le Coran. Le sens dominant est temporel (mois), avec un second sens de renommee/visibilite (le mois visible = la lune pleine). Dans les contextes juridiques, shahr designe toujours l'unite de temps.",
              axe5_frequence: "Pour le khalifa, la mesure du temps (ashur) est un outil de gouvernance : les delais, les prescriptions temporelles, les obligations periodiques structurent la vie de la communaute. Le delai de quatre mois pour l'ila' montre que la loi islamique mesure precisement les droits — ni trop court (la reconciliation exige du temps), ni trop long (la femme ne peut rester indefiniment en suspens).",
              axe1_verset: "Les quatre mois (arba'ati ashhurin) sont le pivot temporal du verset. Ce chiffre n'est pas arbitraire : il accorde un delai suffisant pour la reconciliation tout en protegeant la femme d'une attente indefinie. Apres quatre mois sans retour, la situation doit etre resolue — soit retour (fa'), soit divorce (talaq, verset 227)."
            },
            "Renommee": {
              status: "ecarte",
              senses: ["notoriete", "visibilite", "renommee", "reputation"],
              proof_ctx: "Le sens de renommee/visibilite de sh-h-r est atteste (shahhar = rendre celebre, mashhur = connu, celebre). Mais dans arba'ati ashhurin (quatre mois), le contexte est exclusivement temporel.",
              axe1_verset: "Le sens de renommee est exclu par le nombre cardinal (arba'ati = quatre) qui impose un sens temporel de comptage.",
              axe2_voisins: "Aucun contexte de renommee dans les versets voisins (225-228).",
              axe3_sourate: "Toutes les utilisations de ashhurin dans les versets juridiques de la sourate sont temporelles.",
              axe4_coherence: "Le sens de renommee n'est jamais utilise au pluriel ashhurin dans le Coran.",
              axe5_frequence: "Pour le khalifa, la distinction entre les sens de shahr est importante : dans les prescriptions legales, shahr est toujours temporel."
            }
          }
        }
      },
      {
        word_key: "f y a",
        position: 3,
        sense_chosen: "retour/reintegration",
        analysis_axes: {
          sense_chosen: "retour/reintegration",
          concept_chosen: "Ombre/Retour",
          concepts: {
            "Ombre/Retour": {
              status: "retenu",
              senses: ["retour", "revenir a un etat anterieur", "reintegrer", "l'ombre qui revient", "retour apres absence"],
              proof_ctx: "Le verbe fa'u est un accompli 3MP de la racine f-y-' (fa ya hamza). Le Lane's donne : retourner, revenir a, l'ombre qui revient (le fay' est l'ombre du soir qui revient apres avoir diminue), retour a un etat anterieur. La racine exprime specifiquement le retour — pas l'aller mais le retour. « Fa-in fa'u » = s'ils sont revenus [a leurs femmes, a la relation conjugale]. Le fay' est l'ombre qui revient vers la personne apres s'etre eloignee — metaphore parfaite du mari qui revient vers sa femme apres le serment d'abstinence.",
              axe1_verset: "Le retour (fa'u) est la premiere option apres les quatre mois — revenir a la relation conjugale, annuler de facto le serment d'ila'. Ce retour est accompagne du pardon divin (ghafur) : Dieu accueille le retour comme une grace, pas comme une obligation penible. Le fa' conjugal est a la fois un acte juridique (levee du serment) et un acte de reconciliation.",
              axe2_voisins: "Le verset 225 traitait des serments inconsideres. Le verset 226 offre une sortie du serment d'ila' par le retour (fa'). Le verset 227 offre l'autre sortie : le divorce (talaq). Les deux options post-ila' sont retour ou separation — le fa' est la voie de la reconciliation.",
              axe3_sourate: "La racine f-y-' apparait dans la sourate al-Baqarah principalement en 2:226. La notion de retour est centrale dans de nombreux passages — tawba (retour a Dieu), ruju' (retour), fa' (retour conjugal). Tous ces termes de retour partagent l'idee d'un mouvement inverse apres une deviation.",
              axe4_coherence: "La racine f-y-' apparait environ 22 fois dans le Coran avec les sens d'ombre du soir et de retour (notamment le retour du butin = fay'). Le lien entre l'ombre qui revient et le retour apres eloignement est la metaphore fondatrice de cette racine.",
              axe5_frequence: "Pour le khalifa, le principe du fa' (retour avant rupture definitive) est un modele de jurisprudence : avant la sanction finale (divorce), le retour est toujours possible et accueilli par le pardon divin. La politique de pardon pour ceux qui reviennent sur leurs positions erronnees est un principe de gouvernance misericordieux."
            }
          }
        }
      },
      {
        word_key: "ghfr",
        position: 4,
        sense_chosen: "pardon/couverture",
        analysis_axes: {
          sense_chosen: "pardon/couverture",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["pardoner", "couvrir", "dissimuler les fautes", "proteger de l'effet de la faute", "ghafara = couvrir"],
              proof_ctx: "L'adjectif ghafurun est un adjectif nominatif de la racine gh-f-r. Le Lane's donne : pardoner, couvrir, dissimuler. Ghafara designe la couverture d'une faute — le ghifar est le couvre-chef, le maghfir est le casque (qui couvre la tete). Al-Ghafur est celui qui couvre les fautes de Ses serviteurs, les effacant et les dissimulant. La Form intensif (faCuul) designe un pardon abondant et repetitif.",
              axe1_verset: "Le pardon (ghafur) de Dieu repond specifiquement au serment imprudent d'ila' — une faute conjugale et spirituelle (jurer est un acte grave). Celui qui revient (fa') apres ce serment beneficie du pardon divin : la faute du serment est couverte. L'ordre rhethorique est significatif : d'abord le pardon (effacement de la faute du serment), ensuite la misericorde (accueil du retour).",
              axe2_voisins: "Le verset 225 precisait que Dieu ne prend pas a compte les serments inconsideres (la-ghw) mais prend a compte ceux qu'on a acquis (kasabat). Le verset 226 complete : si l'homme revient apres son serment d'ila', Dieu pardonne (ghafur) — le serment acquis est couvert par le pardon apres le retour.",
              axe3_sourate: "La paire ghafurun/rahimun est une des formules conclusives les plus frequentes de la sourate al-Baqarah. Elle apparait en 2:173, 2:182, 2:192, 2:199, 2:218, 2:226 — toujours dans des contextes de transgression surmontee par le retour et la reconciliation.",
              axe4_coherence: "La racine gh-f-r apparait environ 234 fois dans le Coran. Al-Ghafur est un des attributs divins les plus frequents — la couverture des fautes est une des dimensions centrales de la relation divine-humaine. Le pardon n'est pas une faiblesse divine mais une couverture active qui protege le croyant de l'effet de ses fautes.",
              axe5_frequence: "Pour le khalifa, le modele du ghafur (couverture des fautes) est un modele de gouvernance clementer : couvrir les erreurs de ceux qui reviennent sur leurs fautes, ne pas les exposer. La clemence du khalifa (satir al-'uyub = celui qui couvre les defauts) est une imitation du nom divin Al-Ghafur."
            },
            "Protection": {
              status: "probable",
              senses: ["protection", "preservation", "bouclier"],
              proof_ctx: "La racine gh-f-r a un sens de protection physique (le casque, le couvre-chef protegent). Le maghfar est le casque. Ghafara peut donc signifier : proteger en couvrant.",
              axe1_verset: "Dans ce contexte de pardon apres serment, le sens de protection est second par rapport au pardon — c'est le pardon/couverture de la faute qui est central.",
              axe2_voisins: "La paire ghafurun/rahimun dans les contextes de transgression confirme que ghafur designe ici le pardon et non une protection physique.",
              axe3_sourate: "Toutes les occurrences de ghafurun dans la sourate sont dans des contextes de pardon divin apres transgression humaine.",
              axe4_coherence: "Le sens de protection renforce le sens de pardon — le pardon est une forme de protection contre les consequences de la faute.",
              axe5_frequence: "Pour le khalifa, la protection et le pardon sont complementaires — couvrir les fautes des sujets qui reviennent protege la cohesion sociale."
            }
          }
        }
      },
      {
        word_key: "rhm",
        position: 5,
        sense_chosen: "misericorde/tendresse",
        analysis_axes: {
          sense_chosen: "misericorde/tendresse",
          concept_chosen: "Misericorde/Tendresse",
          concepts: {
            "Misericorde/Tendresse": {
              status: "retenu",
              senses: ["misericorde", "tendresse", "compassion profonde", "bienveillance active", "rahim = milosericordieux intensif"],
              proof_ctx: "L'adjectif rahimun est un adjectif nominatif de la racine r-h-m (Form intensif faCiil). Le Lane's donne : uterus (rahim), misericorde (rahma), celui qui a une misericorde profonde et active (rahim). La form faCiil (rahim) designe une qualite stable et intense — celui qui a la misericorde en lui de maniere constitutive. Dans le contexte d'un attribut divin, rahimun designe la misericorde divine profonde et bienveillante qui accueille le croyant repentant.",
              axe1_verset: "La misericorde (rahim) de Dieu est l'accueil du retour (fa') apres le pardon (ghafur). Apres que la faute du serment est couverte (ghafur), la tendresse divine (rahim) accueille la reconciliation conjugale. La misericorde est ici specifiquement orientee vers la relation conjugale retrouvee — elle est l'attribut divin qui favorise le retour a la vie commune.",
              axe2_voisins: "La paire ghafurun/rahimun (2:226) s'inscrit dans une longue serie de versets qui concluent par ces deux attributs. En 2:173 (permis de manger les interdits en cas de necessite), en 2:192 (pardon des combattants qui cessent), en 2:218 (misericorde pour les emigrants) — chaque contexte apporte une nuance mais la paire exprime toujours le pardon suivi de l'accueil misericordieux.",
              axe3_sourate: "La racine r-h-m est omniprésente dans la sourate al-Baqarah — dans les basmala, dans les formules conclusives, dans les contextes de legislation familiale (2:228 mentionne les droits des femmes par misericorde). La misericorde divine est le fondement de la legislation familiale coranique.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran — c'est l'une des racines les plus frequentes. Al-Rahman et Al-Rahim sont les deux attributs de la basmala. La misericorde divine est la trame de fond du message coranique tout entier.",
              axe5_frequence: "Pour le khalifa, imiter la misericorde divine (rahim) dans la gouvernance familiale et sociale est une obligation. La misericorde du khalifa ne signifie pas l'absence de règles mais un accueil bienveillant de ceux qui retournent dans le droit chemin. Le modele divin ghafur/rahim (pardoner puis accueillir avec tendresse) est le modele de reconciliation sociale."
            },
            "Utérus/Reproduction": {
              status: "ecarte",
              senses: ["uterus", "matrice", "reproduction", "fecondite"],
              proof_ctx: "La racine r-h-m designe primitivement l'uterus (rahim = matrice). C'est le sens concret fondateur. La misericorde (rahma) est etymologiquement la tendresse uterine — la bienveillance qui enveloppe comme une matrice.",
              axe1_verset: "Dans le contexte d'un attribut divin conclusif, le sens anatomique de l'uterus est exclu — c'est le sens de misericorde/tendresse qui est actif.",
              axe2_voisins: "La paire ghafurun/rahimun designe exclusivement des attributs divins dans ces contextes.",
              axe3_sourate: "Dans les formules conclusives de la sourate, rahimun est toujours l'attribut divin de misericorde, pas une reference anatomique.",
              axe4_coherence: "Dans les 339 occurrences de r-h-m, les formes rahimun/rahman designent toujours la misericorde divine, jamais l'uterus anatomique.",
              axe5_frequence: "Le fond semantique de l'uterus enrichit le concept de misericorde divine sans le remplacer — la misericorde divine est une tendresse enveloppante comme une matrice."
            },
            "Parenté/Lien familial": {
              status: "ecarte",
              senses: ["parente", "liens de sang", "arham = liens familiaux"],
              proof_ctx: "Al-arham (les uterus, pluriel) designe les liens de parente dans le Coran (4:1 : « craignez Dieu et les liens de parente »). La parente est liee a l'uterus (naitre du meme uterus = etre parent).",
              axe1_verset: "Le contexte est celui d'un attribut divin dans une formule conclusive — le sens de parente familiale est exclu.",
              axe2_voisins: "Le verset 226 traite du droit conjugal. La parente (arham) n'est pas evoquee ici.",
              axe3_sourate: "Dans les formules ghafurun/rahimun, rahimun n'a jamais le sens de parente.",
              axe4_coherence: "La forme rahimun (Form faCiil) est exclusivement reservee a l'attribut de misericorde dans le Coran.",
              axe5_frequence: "Pour le khalifa, les liens de parente (arham) et la misericorde divine (rahim) sont deux applications distinctes de la meme racine — mais dans ce verset, c'est la misericorde divine qui est active."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[226];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V226)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position + ' → ' + word.sense_chosen);
  }

  console.log('\n✅ V226 TERMINE');
}
main().catch(console.error);
