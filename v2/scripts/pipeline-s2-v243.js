const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 243
// verse_id=250, analysis_id=609
// "alam tara ila lladhina kharajuu min diyarihim
//  wahum ulufun hathara l-mawti faqala lahumu
//  llahu mutuu thumma ahyahum
//  inna llaha ladhuu fadlin 'ala n-nasi
//  walakinna akthara n-nasi la yashkurun"
// =====================================================

const verseData = {
  243: {
    verse_id: 250,
    analysis_id: 609,
    translation_arab: "N'as-tu pas vu ceux qui sortirent de leurs demeures par milliers, par crainte de la mort ? Allah leur dit : 'Mourez !' Puis Il les fit revivre. Certes, Allah répand Sa grâce sur les gens, mais la plupart ne rendent pas grâce.",
    full_translation: "N'as-tu pas réfléchi à ceux qui quittèrent leurs demeures par milliers, par crainte de la mort ? Allah leur dit alors : 'Mourez !' Puis Il les fit revivre. Certes, Allah déverse Sa bienfaisance sur les gens, mais la plupart d'entre eux ne reconnaissent pas ce don.",
    translation_explanation: `§DEMARCHE§
Le verset 243 ouvre une nouvelle section apres la longue legislation matrimoniale (221-242). Il prend la forme d'un recit interpellatif — « alam tara » (n'as-tu pas vu ?) — qui invite le lecteur a reflechir sur un evenement historique ou legendaire : une communaute qui fuit la mort, a qui Allah ordonne de mourir puis qu'Il fait revivre. Les exegetes l'ont identifiee variatement comme les Banu Israil fuyant la peste, des guerriers qui refusaient le djihad, ou une parabole sur la mort ineversible et la resurrection divine. La scene sert de transition vers l'appel au combat dans la voie d'Allah (verset 244) : si Allah peut faire mourir et faire revivre, nul ne peut echapper a la mort en fuyant — mieux vaut combattre avec confiance en Lui.

Le mot cle **tara** est un inaccompli 2MS de la racine r-'-y (ray). Le Lane's donne pour ce verbe : voir physiquement, percevoir, observer, remarquer — mais aussi, en contexte interrogatif rhetorique (alam tara), le sens s'etend a « as-tu reflechi a », « t'es-tu rendu compte de ». L'interrogation « alam tara » (ne vois-tu pas ?) est une figure d'interpellation qui appelle a la meditation, non a un temoignage oculaire.

Le mot **kharajuu** est un accompli 3MP de la racine kh-r-j (khrj). Le Lane's donne : sortir, s'extraire d'un lieu, partir, quitter. Kharaja = sortir — dans ce contexte, la sortie est motivee par la peur : ils quitterent leurs demeures (diyarihim) pour fuir la mort. La sortie est une fuite, un exile force par la terreur.

Le mot **diyarihim** est un pluriel de dar (de la racine d-w-r, dwr). Le Lane's donne pour dar : demeure, foyer, maison, quartier — etymologiquement ce qui tourne ou revient, le pivot central de la vie familiale. Laisser ses demeures (diyar) est une rupture traumatique : c'est abandonner son centre de vie.

Le mot **ulufun** est un pluriel de alf (de la racine '-l-f, alf). Le Lane's donne pour alf : mille (nombre) ; uluf = milliers. La mention des « milliers » souligne l'ampleur du mouvement — ce n'est pas un depart individuel mais une fuite collective massive.

Le mot **hathara** est un nom verbal (ou masdar) de la racine h-dh-r (hðr). Le Lane's donne : etre sur ses gardes, prendre precaution, craindre un danger. Hadhar = la prudence, la precaution craintive. « Hathara l-mawt » = par crainte de la mort — la crainte est le mobile de la fuite.

Le mot **ahyahum** est un accompli 3MS de la racine h-y-y (hyy) en Form IV (ahya = faire vivre). Le Lane's donne : vivre, etre vivant (Form I hayya) ; Form IV ahya = faire vivre, redonner la vie, vivifier. Allah les fit revivre apres les avoir ordonnes de mourir — c'est un miracle de resurrection, preuve que seul Allah maitrise la vie et la mort.

Le mot **fadlin** est un nom derive de la racine f-dh-l (fdl). Le Lane's donne : etre superieur, exceder, etre genereux ; fadl = la grace, le bienfait, la faveur accordee par superiorite. Ici « ladhuu fadl » = celui qui possede la grace/le bienfait — periphrases pour souligner qu'Allah n'est pas simplement « genereux » mais qu'il possede intrinsequement le bienfait.

Le mot **yashkurun** est un inaccompli 3MP de la racine sh-k-r (shkr). Le Lane's donne : etre reconnaissant, remercier, rendre grace ; shukr = la gratitude, la reconnaissance. La negation (la yashkurun) designe l'ingratitude de la majorite — malgre le miracle de la resurrection et la grace divine permanente.

§JUSTIFICATION§
**N'as-tu pas vu** — alam tara. La formule interrogative negative est un appel rhethorique a la reflexion. Il ne s'agit pas de temoignage oculaire mais d'une invitation a mediter sur un fait historique connu ou rapporte. La traduction « reflechir a » (plutot que simplement « voir ») rend mieux ce sens intellectuel et meditatif.

**ceux qui sortirent de leurs demeures** — alladhina kharajuu min diyarihim. Le verbe kharajuu (sortirent) a l'accompli souligne un evenement passe definitif. « Demeures » (diyar) traduit l'attachement et le dechirement : c'est le foyer, le centre de vie qu'on abandonne par peur.

**par milliers** — wahum ulufun. La construction wahum ulufun (et eux [etant] des milliers) est une proposition nominale apposee. Le nombre ulufun (milliers) signifie a la fois la multitude et peut evoquer la familiarite entre eux (sens d'attachement mutuel dans '-l-f).

**par crainte de la mort** — hathara l-mawt. Le complement de maniere indique le mobile. Hathara (crainte-precaution) est plus nuance que simple peur (khawf) : c'est une peur qui pousse a agir, a prendre des mesures. Mais la fuite s'avere vaine puisqu'Allah leur commande de mourir.

**Allah leur dit : Mourez !** — faqala lahumu Allahu mutuu. Le commandement divin est bref et absolu. Il renverse la tentative de fuir la mort : ceux qui fuyaient la mort se la voient commandee directement par Dieu. La mort n'est pas quelque chose qu'on peut eviter par la fuite.

**Puis Il les fit revivre** — thumma ahyahum. La Form IV ahya (faire vivre) designe l'acte de vivification divine. C'est un miracle qui annonce la resurrection eschatologique — Allah peut redonner la vie a qui Il veut. Le « puis » (thumma) marque une sequence et un delai.

**Allah repand Sa grace** — inna llaha ladhuu fadlin 'ala n-nas. La periphrease ladhuu fadl (detenteur du bienfait) est plus forte qu'un simple attributif : Allah est constitutionnellement le possesseur du bienfait, il ne fait pas que distribuer des faveurs occasionnellement.

**la plupart ne rendent pas grâce** — akthara n-nasi la yashkurun. Le constat de l'ingratitude majoritaire est un theme recurrent coranien. La gratitude (shukr) est la reponse normale a la grace (fadl) — son absence est une anomalie spirituelle.

§CRITIQUE§
Hamidullah traduit « alam tara » par « n'as-tu pas vu ». La racine r-'-y (ray) peut signifier voir physiquement, mais en contexte interrogatif avec un recit historique, le sens intellectuel domine : « n'as-tu pas medite sur », « n'as-tu pas pris conscience de ». La traduction « reflechir a » ou « prendre conscience de » est plus precise que le simple verbe « voir ».

Hamidullah traduit « fadl » par « grace ». La racine f-dh-l implique une superiorite et une excellence intrinseque — fadl est le bienfait accordé par quelqu'un qui est au-dessus, qui possede plus. La periphrease « ladhuu fadl » (qui possede le bienfait) est quasi-attributive : c'est un des sifat (attributs) d'Allah. Traduire par « grace » est acceptable mais affaiblit la nuance de superiorite et d'excellence.

La formule « la yashkurun » (ne rendent pas grace) est une observation factuelle, pas un jugement moral punitif dans ce contexte. Le contraste entre la bienfaisance divine (faire revivre, repandre la grace) et l'ingratitude humaine (la yashkurun) est l'une des tensions thematiques majeures d'al-Baqarah. Ce verset installe cette tension avant l'appel au combat du verset 244 : meme face au miracle le plus evident (resurrection), l'ingratitude domine.`,
    segments: [
      { fr: "ne...pas (interrogatif)", is_particle: true, phon: "alam", arabic: "أَلَمْ", position: 1 },
      { fr: "tu ne vois pas / n'as-tu pas réfléchi à", pos: "verbe", phon: "tara", arabic: "تَرَ", word_key: "ray", is_particle: false, sense_retenu: "voir/percevoir", position: 2 },
      { fr: "vers", is_particle: true, phon: "ila", arabic: "إِلَى", position: 3 },
      { fr: "ceux qui", is_particle: true, phon: "alladhina", arabic: "ٱلَّذِينَ", position: 4 },
      { fr: "sortirent", pos: "verbe", phon: "kharajuu", arabic: "خَرَجُوا۟", word_key: "khrj", is_particle: false, sense_retenu: "sortie/départ", position: 5 },
      { fr: "de", is_particle: true, phon: "min", arabic: "مِن", position: 6 },
      { fr: "leurs demeures", pos: "nom", phon: "diyarihim", arabic: "دِيَـٰرِهِمْ", word_key: "dwr", is_particle: false, sense_retenu: "demeure/foyer", position: 7 },
      { fr: "et eux", is_particle: true, phon: "wahum", arabic: "وَهُمْ", position: 8 },
      { fr: "par milliers", pos: "nom", phon: "ulufun", arabic: "أُلُوفٌ", word_key: "alf", is_particle: false, sense_retenu: "millier/multitude", position: 9 },
      { fr: "par crainte de", pos: "nom", phon: "hathara", arabic: "حَذَرَ", word_key: "hðr", is_particle: false, sense_retenu: "crainte/prudence", position: 10 },
      { fr: "la mort", pos: "nom", phon: "l-mawti", arabic: "ٱلْمَوْتِ", word_key: "mwt", is_particle: false, sense_retenu: "mort/trépas", position: 11 },
      { fr: "donc il dit", is_particle: true, phon: "faqala", arabic: "فَقَالَ", position: 12 },
      { fr: "à eux", is_particle: true, phon: "lahumu", arabic: "لَهُمُ", position: 13 },
      { fr: "Allah", is_particle: true, phon: "Allahu", arabic: "ٱللَّهُ", position: 14 },
      { fr: "Mourez !", pos: "verbe", phon: "mutuu", arabic: "مُوتُوا۟", word_key: "mwt", is_particle: false, sense_retenu: "mort/trépas", position: 15 },
      { fr: "puis", is_particle: true, phon: "thumma", arabic: "ثُمَّ", position: 16 },
      { fr: "Il les fit revivre", pos: "verbe", phon: "ahyahum", arabic: "أَحْيَـٰهُمْ", word_key: "hyy", is_particle: false, sense_retenu: "vie/vivification", position: 17 },
      { fr: "—", is_particle: true, phon: "", arabic: "ۚ", position: 18 },
      { fr: "certes", is_particle: true, phon: "inna", arabic: "إِنَّ", position: 19 },
      { fr: "Allah", is_particle: true, phon: "Allaha", arabic: "ٱللَّهَ", position: 20 },
      { fr: "infiniment", is_particle: true, phon: "ladhuu", arabic: "لَذُو", position: 21 },
      { fr: "bienfait/grâce", pos: "nom", phon: "fadlin", arabic: "فَضْلٍ", word_key: "fdl", is_particle: false, sense_retenu: "grâce/bienfait", position: 22 },
      { fr: "sur/envers", is_particle: true, phon: "'ala", arabic: "عَلَى", position: 23 },
      { fr: "les gens", is_particle: true, phon: "n-nasi", arabic: "ٱلنَّاسِ", position: 24 },
      { fr: "mais", is_particle: true, phon: "walakinna", arabic: "وَلَـٰكِنَّ", position: 25 },
      { fr: "la plupart de", is_particle: true, phon: "akthara", arabic: "أَكْثَرَ", position: 26 },
      { fr: "les gens", is_particle: true, phon: "n-nasi", arabic: "ٱلنَّاسِ", position: 27 },
      { fr: "ne...pas", is_particle: true, phon: "la", arabic: "لَا", position: 28 },
      { fr: "rendent grâce", pos: "verbe", phon: "yashkurun", arabic: "يَشْكُرُونَ", word_key: "shkr", is_particle: false, sense_retenu: "gratitude/reconnaissance", position: 29 }
    ],
    vwa: [
      {
        word_key: "ray",
        position: 2,
        sense_chosen: "voir/percevoir",
        analysis_axes: {
          sense_chosen: "voir/percevoir",
          concept_chosen: "Voir/Percevoir",
          concepts: {
            "Voir/Percevoir": {
              status: "retenu",
              senses: ["voir", "percevoir", "observer", "avoir conscience de", "reflechir a", "contempler"],
              proof_ctx: "Tara est un inaccompli 2MS de la racine r-'-y (ray). Le Lane's donne : voir de ses propres yeux, percevoir visuellement, remarquer, observer. En contexte interrogatif — alam tara (n'as-tu pas vu ?) — le sens depasse la vision physique pour couvrir la perception intellectuelle et la reflexion. Cette formule rhetorique est une invitation a la meditation sur un fait historique.",
              axe1_verset: "Dans ce verset, 'alam tara' ouvre un recit historique sur une communaute qui fuit la mort. Le locuteur ne peut pas avoir vu cet evenement physiquement — donc 'tara' designe ici une perception intellectuelle ou spirituelle : 'n'as-tu pas medite sur', 'n'as-tu pas pris conscience de'. La vision devient metaphore de comprehension et de reflexion profonde sur les lecons de l'histoire.",
              axe2_voisins: "La formule 'alam tara' revient plusieurs fois dans al-Baqarah et dans d'autres sourates pour introduire des recits historiques ou des observations sur la nature. Dans tous ces cas, 'tara' ne designe pas un temoignage oculaire mais une invitation a la reflexion sur des evenements passes ou des phenomenes visibles. La question rhetorique pique la curiosite et active la reflexion du destinataire.",
              axe3_sourate: "Al-Baqarah use frequemment de recits historiques (Banu Israil, Ibrahim, les prophetes) pour illustrer des principes spirituels et legislatifs. 'Alam tara' est le dispositif rhethorique qui lie le narrataire au recit — il est invite a contempler et a tirer des lecons. La racine r-'-y (voir) est ainsi deployee dans sa dimension reflexive et pedagogique tout au long de la sourate.",
              axe4_coherence: "La racine r-'-y apparait tres frequemment dans le Coran — c'est l'une des racines les plus productives. Elle couvre : voir physiquement (ra'a), voir en songe (ru'ya), avoir un avis (ra'y), reconnaitre/estimer. La forme 'alam tara' est une formule recurrente d'interpellation qui sollicite la reflexion du destinataire sur un evenement ou un phenomene significatif.",
              axe5_frequence: "Pour les exegetes, 'alam tara' est une formule de temoignage rhetorique : elle convoque une evidence que le destinataire est cense pouvoir 'voir' par la raison ou par la transmission. Les commentateurs y voient une invitation a l'itibar (la reflexion a partir des exemples du passe) — un concept central de la pensee exegetique islamique. Voir, dans ce sens, c'est comprendre et tirer les lecons."
            }
          }
        }
      },
      {
        word_key: "khrj",
        position: 5,
        sense_chosen: "sortie/départ",
        analysis_axes: {
          sense_chosen: "sortie/départ",
          concept_chosen: "Sortie/Départ",
          concepts: {
            "Sortie/Départ": {
              status: "retenu",
              senses: ["sortir", "partir", "quitter", "s'extraire", "s'eloigner", "fuir"],
              proof_ctx: "Kharajuu est un accompli 3MP de la racine kh-r-j (khrj). Le Lane's donne : sortir d'un lieu, s'extraire, partir, quitter un endroit, emerger. Form I kharaja = sortir. La forme accomplie (kharajuu) designe une sortie definitive, passee et accomplie. En contexte de fuite motivee par la peur, kharaja implique un abandon contraint du lieu de residence.",
              axe1_verset: "La sortie (kharaja) dans ce verset est motivee par la peur de la mort : ils quitterent leurs demeures pour fuir. Mais la fuite s'avere vaine — Allah leur ordonne de mourir quand meme. La tension entre la sortie (kharaja) et la mort qui les rattrape illustre un principe fondamental : on ne peut pas fuir ce qu'Allah a decreté. La sortie est un mouvement de peur, contraire a la confiance (tawakkul) pronnee par le verset suivant.",
              axe2_voisins: "Le verset 244 qui suit appelle au combat dans la voie d'Allah — l'antithese exacte de la fuite decrite ici. Ceux-ci kharajuu (sortirent) pour fuir la mort ; le verset 244 dit : combattez (qatiluu). La juxtaposition est deliberee : fuir la mort (khrj) versus affronter le danger avec foi (qtl fi sabil Allah). La sortie par crainte est opposee a l'engagement par foi.",
              axe3_sourate: "Al-Baqarah utilise frequemment la racine kh-r-j pour designer des departs significatifs : la sortie d'Adam du paradis, l'exode des Banu Israil, les departs des croyants pour le djihad. Dans chaque cas, kharaja marque un changement de situation radicale — on ne revient pas facilement en arriere apres une sortie. Ici la sortie est une rupture traumatique avec le foyer et la communaute.",
              axe4_coherence: "La racine kh-r-j apparait environ 170 fois dans le Coran. Elle designe toujours un mouvement de l'interieur vers l'exterieur, du connu vers l'inconnu. Dans le registre spirituel, kharaja peut designer aussi bien la sortie physique que la rupture morale (sortir de l'obeissance). La frequence de cette racine reflete l'importance du theme des migrations et des departs dans le contexte coranique.",
              axe5_frequence: "Pour les commentateurs, la sortie massive (wahum ulufun = et eux par milliers) de ces gens illustre la psychologie de la peur collective : quand la peur du danger est suffisamment intense, meme des milliers de personnes abandonnent leur foyer. La tradition exegetique voit dans cet episode une lecon sur l'inutilite de fuir ce que Dieu a destine, et une exhortation a placer sa confiance en Allah plutot qu'en la fuite."
            }
          }
        }
      },
      {
        word_key: "dwr",
        position: 7,
        sense_chosen: "demeure/foyer",
        analysis_axes: {
          sense_chosen: "demeure/foyer",
          concept_chosen: "Demeure/Foyer",
          concepts: {
            "Demeure/Foyer": {
              status: "retenu",
              senses: ["demeure", "foyer", "maison", "habitation", "pays natal", "centre de vie"],
              proof_ctx: "Diyarihim est un pluriel de dar, derive de la racine d-w-r (dwr). Le Lane's donne pour dar : maison, demeure, habitation, lieu de residence permanent, quartier, territoire. Etymologiquement, la racine d-w-r signifie tourner, revenir — dar est ce vers quoi on revient, le pivot central de la vie. Le pluriel diyar designe l'ensemble des demeures d'une communaute.",
              axe1_verset: "Laisser ses diyar (demeures) est plus que quitter une maison — c'est abandonner son centre de vie, son attachement territorial et familial. Dans ce verset, la sortie des demeures (kharajuu min diyarihim) exprime la gravite de la fuite : ils ont tout abandonne. Cette rupture avec le foyer est le signe de la panique complete — et pourtant elle ne sauve pas de la mort.",
              axe2_voisins: "La notion de demeure (dar) est recurrente dans al-Baqarah, notamment dans le sens de 'dar al-akhira' (la demeure de l'au-dela) par opposition a la vie terrestre. Abandonner ses demeures terrestres par peur illustre l'attachement humain au monde materiel. Le verset 154 avait dit : ne dites pas de ceux qui meurent dans la voie d'Allah qu'ils sont morts — or ici on fuit precisement pour eviter cette mort.",
              axe3_sourate: "Al-Baqarah mentionne plusieurs deracinements : l'exile d'Adam, les Banu Israil errant dans le desert, les croyants contraints de quitter La Mecque. Le theme de quitter sa demeure (kharaja min dar) est lie a la notion d'epreuve (fitna/ibtila') : le veritable croyant fait confiance a Allah meme quand il perd son foyer. Ceux de V243 fuient par peur — un contraste avec Abraham qui quitte sa terre par foi.",
              axe4_coherence: "La racine d-w-r et le substantif dar apparaissent frequemment dans le Coran. Dar est utilise pour designer les maisons terrestres, les demeures paradisiaques, la Demeure de la Paix (dar al-salam), la demeure de perdition. Le pluriel diyar designe souvent les terres ancestrales ou la patrie abandonnee — un terme charge de sens identitaire et emotionnel.",
              axe5_frequence: "Pour les exegetes, 'min diyarihim' (de leurs demeures) accentue la gravite du depart — on ne quitte pas ses demeures (pluriel, donc toute sa communaute et son territoire) a la legere. La tradition exegetique y voit une illustration de ce que la peur peut pousser a faire : abandonner tout ce qu'on a construit. Cela contraste avec l'ideal du croyant qui ne s'attache pas excessivement aux biens terrestres."
            }
          }
        }
      },
      {
        word_key: "alf",
        position: 9,
        sense_chosen: "millier/multitude",
        analysis_axes: {
          sense_chosen: "millier/multitude",
          concept_chosen: "Millier/Multitude",
          concepts: {
            "Millier/Multitude": {
              status: "retenu",
              senses: ["millier", "multitude", "nombre considerable", "foule", "groupe nombreux"],
              proof_ctx: "Ulufun est un pluriel de alf, de la racine '-l-f (alf). Le Lane's donne pour alf : mille (le nombre), et en pluriel alaf/uluf = des milliers. La racine '-l-f couvre aussi les sens d'attachement, de familiarite, de rassemblement familier — alf est le groupe uni par la familiarite. Ulufun designe ici une multitude de milliers de personnes qui se deplacent ensemble.",
              axe1_verset: "La mention de ulufun (par milliers) dans ce verset souligne l'ampleur du phenomene : ce n'est pas une fuite individuelle mais un exode collectif massif. La construction 'wahum ulufun' (et eux par milliers) est une proposition nominale apposee qui insiste sur le nombre. Paradoxalement, la multitude ne protege pas contre la mort — meme des milliers ne peuvent echapper a ce qu'Allah a destine.",
              axe2_voisins: "Le theme de la multitude inefficace contre Allah revient dans al-Baqarah — au verset 249 (Talut et Goliath), il est dit que 'maintes fois une petite troupe a vaincu une grande armee par la permission d'Allah'. Ici, des milliers fuient et sont quand meme mis a mort par commandement divin. L'ampleur numerique n'est pas une garantie de survie — seule la volonte divine decide.",
              axe3_sourate: "Al-Baqarah contient plusieurs recits de confrontation entre multitude et puissance divine. Le nombre ne garantit pas la victoire ni la survie. La mention de ulufun (milliers) dans V243 prepare le lecteur a la lecon du verset 249 sur Talut : la confiance en Allah vaut plus que le nombre. L'episode des milliers qui fuient et meurent quand meme etablit ce principe des V243.",
              axe4_coherence: "La racine '-l-f apparait dans le Coran aussi bien dans le sens numerique (alf = mille) que dans le sens d'attachement et de familiarite (alifa = s'attacher a, s'habituer a). Dans ce verset, les ulufun sont une multitude unie par un meme reflexe de peur — l'attachement commun a la survie. La polysemie de la racine enrichit subtilement le sens.",
              axe5_frequence: "Pour les commentateurs, la precision numerique 'ulufun' (des milliers) n'est pas anodine — elle sert a rendre le miracle plus impressionnant. Si Allah peut faire mourir des milliers puis les faire revivre, c'est une preuve indubitable de Sa toute-puissance sur la vie et la mort. La tradition exegetique voit dans cette indication numerique une accentuation de la grandeur du miracle de resurrection."
            }
          }
        }
      },
      {
        word_key: "hðr",
        position: 10,
        sense_chosen: "crainte/prudence",
        analysis_axes: {
          sense_chosen: "crainte/prudence",
          concept_chosen: "Crainte/Prudence",
          concepts: {
            "Crainte/Prudence": {
              status: "retenu",
              senses: ["craindre", "prendre garde", "etre sur ses gardes", "prudence craintive", "precaution", "eviter le danger"],
              proof_ctx: "Hathara est un nom verbal (masdar) ou nom d'action de la racine h-dh-r (hðr). Le Lane's donne : etre sur ses gardes, prendre precaution, se mefier, craindre un danger et agir en consequence. Hadhar se distingue de khawf (peur passive) : c'est une peur qui pousse a l'action preventive. Hathara l-mawt = la crainte-precaution de la mort, la vigilance face au danger de mourir.",
              axe1_verset: "Hathara l-mawt (par crainte de la mort) exprime le mobile de la fuite. La preoccupation pour la mort (al-mawt) est si forte qu'elle pousse des milliers de personnes a abandonner leurs foyers. Mais la suite du verset montre l'absurdite de cette fuite : Allah leur dit 'Mourez !' (mutuu) quand meme. La crainte preventive (hðr) ne peut pas dejouer le decret divin (qada').",
              axe2_voisins: "Le verset 19 d'al-Baqarah mentionne la mort comme une realite face a laquelle on met 'ses doigts dans les oreilles'. Le verset 243 montre des gens qui fuient physiquement cette realite. Dans les deux cas, la fuite ou l'evitement est inutile — la mort est inevitable. La hðr (prudence-crainte) face a la mort est comprehensible humainement mais inadequate spirituellement.",
              axe3_sourate: "Al-Baqarah traite plusieurs fois de l'attitude face a la mort : les croyants tues au combat sont 'vivants' (v.154), le recit de ceux qui fuient la mort ici (v.243), et plus loin Talut qui dit que beaucoup redoutent la mort (v.249). La mort est un sujet central d'al-Baqarah. L'attitude islamique ideale n'est pas la hðr (fuite par crainte) mais le tawakkul (confiance en Allah).",
              axe4_coherence: "La racine h-dh-r apparait dans le Coran une vingtaine de fois. Elle designe toujours une precaution active face a un danger reel ou percu. Le Coran commande parfois aux croyants de prendre des precautions (en temps de guerre notamment) — donc hðr n'est pas toujours negatif. Mais ici, la hðr face a la mort (qui est inevitable) s'avere futile, soulignant que la prudence humaine a ses limites.",
              axe5_frequence: "Pour les commentateurs, la mention explicite de hathara l-mawt (crainte de la mort) comme motivation de la fuite sert a etablir le contraste avec l'attitude du croyant. La tradition exegetique voit dans cet episode une mise en garde contre l'attachement excessif a la vie terrestre. Le verset suivant (244) appelle justement au combat — le contraire de la fuite — montrant que la vraie prudence est de combattre avec foi, pas de fuir sans foi."
            }
          }
        }
      },
      {
        word_key: "mwt",
        position: 11,
        sense_chosen: "mort/trépas",
        analysis_axes: {
          sense_chosen: "mort/trépas",
          concept_chosen: "Mort/Trépas",
          concepts: {
            "Mort/Trépas": {
              status: "retenu",
              senses: ["mort", "trepas", "deces", "fin de vie", "cessation de vie", "mourir"],
              proof_ctx: "Al-mawt est un masdar (nom verbal) de la racine m-w-t (mwt). Le Lane's donne : mourir, etre mort, la mort (comme etat et evenement). Form I mata = mourir. Al-mawt = la mort en tant que concept abstrait et evenement definitif. La racine mwt apparait deux fois dans ce verset : d'abord comme nom (al-mawt = la mort, objet de la crainte) puis comme imperatif (mutuu = mourez !).",
              axe1_verset: "Al-mawt (la mort) est le pivot thematique de ce verset. Les protagonistes fuient al-mawt, et Allah leur dit paradoxalement mutuu (mourez !). La mort qu'ils cherchaient a eviter leur est commandee directement par Allah. Puis Allah les fait revivre (ahyahum). La mort devient ainsi un passage ordonne par Allah, pas un accident que la prudence humaine peut prevenir. La resurrection suit la mort dans le plan divin.",
              axe2_voisins: "Le verset 154 d'al-Baqarah dit : 'Ne dites pas de ceux qui sont tues dans la voie d'Allah qu'ils sont morts — ils sont vivants.' Ce paradoxe resume la theologie islamique de la mort : mourir dans la voie d'Allah n'est pas une fin mais une transition. Le verset 243 illustre l'autre face : fuir la mort pour se proteger est vain, car la mort vient quand Allah le decide.",
              axe3_sourate: "Al-Baqarah traite la mort comme un decret divin (ajal) qui ne peut etre ni avance ni retarde. Les versets 154, 243, 249 tournent autour de ce theme. La lecon est constante : la mort n'est pas un enemmi que la strategie humaine peut vaincre — c'est une realite divine devant laquelle la soumission (islam) et la confiance (tawakkul) sont les seules reponses coherentes.",
              axe4_coherence: "La racine m-w-t est l'une des plus frequentes du Coran — elle apparait plus de 160 fois. La mort (al-mawt) est mentionnee dans presque toutes les grandes sourates. Elle est toujours presentee comme une realite ineluctable decidee par Allah. La paire mawt/hayat (mort/vie) est l'un des couples conceptuels fondamentaux de la theologie coranique.",
              axe5_frequence: "Pour les commentateurs, la double occurrence de mwt dans ce verset (al-mawt = la mort crainte, et mutuu = mourez !) est une figure rhethorique forte. Ceux qui fuyaient al-mawt se voient commander mutuu — la mort qu'ils redoutaient leur est imposee par Celui qu'ils auraient du craindre plutot que la mort elle-meme. La tradition exegetique voit dans cette inversion une lecon sur la priorite de la crainte d'Allah (taqwa) sur la crainte de la mort."
            }
          }
        }
      },
      {
        word_key: "hyy",
        position: 17,
        sense_chosen: "vie/vivification",
        analysis_axes: {
          sense_chosen: "vie/vivification",
          concept_chosen: "Vie/Vivification",
          concepts: {
            "Vie/Vivification": {
              status: "retenu",
              senses: ["vivre", "vivifier", "faire revivre", "redonner la vie", "ressusciter", "ranimer"],
              proof_ctx: "Ahyahum est un accompli 3MS de la racine h-y-y (hyy) en Form IV (ahya = faire vivre). Le Lane's donne pour h-y-y (Form I hayya) : etre vivant, vivre. Form IV ahya = rendre vivant, faire vivre, faire revivre, vivifier. Le complement -hum (les) renvoie aux milliers qui venaient de mourir sur commandement divin. Ahyahum = Il les fit revivre — acte de vivification miraculeuse exclusivement divine.",
              axe1_verset: "Ahyahum (Il les fit revivre) est le point culminant du recit miraculeux. Apres la mort commandee (mutuu), Allah accorde la vie (ahyahum). La sequence mourir/revivre est une demonstration de la toute-puissance divine sur la vie et la mort. Elle annonce la resurrection eschatologique — si Allah peut faire cela dans ce monde, la resurrection finale ne doit pas surprendre. Form IV ahya souligne que c'est Allah seul qui est source de vie.",
              axe2_voisins: "Le verset 28 d'al-Baqarah dit : 'Comment pouvez-vous nier Allah alors qu'Il vous a fait vivre (ahyakum) quand vous etiez morts ?' La meme Form IV ahya est utilisee pour decrire la premiere creation (l'homme etait inexistant puis Allah l'a fait exister/vivre). Le verset 243 reprend ce paradigme : mourir puis revivre est le schema de la creation, de la resurrection, du plan divin sur l'existence.",
              axe3_sourate: "Al-Baqarah contient plusieurs references a la vie donnee par Allah : la creation de l'homme (v.28), le veau d'or et la resurrection d'un mort (v.72-73), la resurrection de l'oiseau devant Abraham (v.260). Le verset 243 s'inscrit dans cette serie de miracles de vivification qui jalonnent la sourate. Ils servent tous a ancrer la foi en la resurrection et en la toute-puissance divine sur la vie.",
              axe4_coherence: "La racine h-y-y (vie) et ses derives apparaissent environ 180 fois dans le Coran. Al-hayy (le Vivant) est l'un des Beaux Noms d'Allah. Form IV ahya (faire vivre) est exclusivement attribuee a Allah — aucun humain ne peut faire revivre les morts. Cette restriction semantique est theologiquement significative : la vivification est un attribut divin exclusif, qui distingue Allah de toute creature.",
              axe5_frequence: "Pour les theologiens, ahyahum dans ce verset est une preuve coranique de la resurrection (ba'th). Les exegetes l'ont utilise comme argument contre les materialistes qui niaient la resurrection en disant qu'elle etait impossible. Si Allah a deja fait revivre des milliers de morts (dans cet episode), Il peut clairement ressusciter tous les morts au Jour Dernier. Le miracle historique devient un argument doctrinal."
            }
          }
        }
      },
      {
        word_key: "fdl",
        position: 22,
        sense_chosen: "grâce/bienfait",
        analysis_axes: {
          sense_chosen: "grâce/bienfait",
          concept_chosen: "Grâce/Bienfait",
          concepts: {
            "Grâce/Bienfait": {
              status: "retenu",
              senses: ["grace", "bienfait", "faveur", "excellence", "don genereux", "superiorite bienveillante"],
              proof_ctx: "Fadlin est un nom (masdar ou nom d'etat) de la racine f-dh-l (fdl). Le Lane's donne : exceder, etre superieur, depasser ; fadl = ce qui est en plus, la grace supplementaire, le bienfait accorde par quelqu'un qui possede plus. La periphrease 'ladhuu fadl' (qui possede le bienfait) est une construction quasi-attributive : Allah est constitutionnellement le detenteur du bienfait, pas seulement un donateur occasionnel.",
              axe1_verset: "La mention du fadl (bienfait/grace) d'Allah apres le recit de la mort et de la resurrection souligne que meme la mort ordonnee puis la resurrection sont des manifestations du fadl divin. Allah ne leur a pas fait du mal en les faisant mourir — Il a demontre Sa toute-puissance et Sa maitrise de la vie, et la resurrection est elle-meme un bienfait. Le fadl est ainsi lie au miracle de la vivification.",
              axe2_voisins: "Le fadl d'Allah est mentionne dans de nombreux versets d'al-Baqarah. Au verset 237, fadl est lie a la generosite dans le divorce. Au verset 251, fadl sera lie a la victoire de David. Dans chaque cas, le fadl d'Allah est un don supplementaire par-dessus ce qui est du — une grace qui va au-dela de la simple justice.",
              axe3_sourate: "Al-Baqarah utilise fadl pour designer les dons divins les plus precieux : la revelation (v.231), la protection (v.251), la bienfaisance generale envers l'humanite (v.243). La racine f-dh-l est la racine de 'l'excellence' et du 'surplus' — Allah ne se contente pas de creer et de laisser faire, Il ajoute sans cesse Son bienfait. Ce fadl est une expression de Sa Rahman (misericorde ample).",
              axe4_coherence: "La racine f-dh-l apparait environ 100 fois dans le Coran. Fadl est souvent associe a 'la'alla yashkurun' (afin qu'ils rendent grace) — le bienfait appelle la gratitude. Dans ce verset, le contraste est explicite : Allah a le fadl, mais la plupart (akthara n-nas) ne font pas shukr (gratitude). Fadl et shukr sont semantiquement complementaires — l'un appelle l'autre.",
              axe5_frequence: "Pour les commentateurs, 'ladhuu fadl 'ala n-nas' (detenteur du bienfait envers les gens) signifie que la bonté divine est universelle — elle s'etend a toute l'humanite (n-nas), pas seulement aux croyants. Le miracle de la resurrection des milliers est un fadl pour eux directement, et un signe (aya) pour toute l'humanite. La tradition exegetique voit dans fadl une expression de la misericorde universelle d'Allah qui precede et depasse Sa justice."
            }
          }
        }
      },
      {
        word_key: "shkr",
        position: 29,
        sense_chosen: "gratitude/reconnaissance",
        analysis_axes: {
          sense_chosen: "gratitude/reconnaissance",
          concept_chosen: "Gratitude/Reconnaissance",
          concepts: {
            "Gratitude/Reconnaissance": {
              status: "retenu",
              senses: ["etre reconnaissant", "rendre grace", "remercier", "exprimer sa gratitude", "reconnaitre les bienfaits", "valoriser les dons recus"],
              proof_ctx: "Yashkurun est un inaccompli 3MP de la racine sh-k-r (shkr). Le Lane's donne : etre reconnaissant, exprimer sa gratitude, rendre grace. Shukr = la gratitude, la reconnaissance des bienfaits recus. La negation 'la yashkurun' (ils ne rendent pas grace) designe l'ingratitude — l'absence de reconnaissance des bienfaits divins. La racine shkr implique a la fois la conscience du bienfait et son expression.",
              axe1_verset: "La clôture du verset avec 'la yashkurun' (ils ne rendent pas grace) apres avoir mentionne le fadl (bienfait) d'Allah cree un contraste saisissant. Meme apres un miracle aussi evident que la resurrection, la majorite des gens (akthara n-nas) ne rendent pas grace. L'ingratitude n'est pas simplement un manque de politesse — c'est une cecite spirituelle face aux manifestations de la puissance et de la bonte divines.",
              axe2_voisins: "Le verset 242 precedent se terminait par 'la'allakum ta'qiluna' (afin que vous raisonniez) — invitation a la raison. Le verset 243 se termine par 'la yashkurun' (ils ne rendent pas grace) — constat de l'ingratitude. La progression est significative : la raison devrait mener a la reconnaissance du bienfait (shukr). L'ingratitude est une defaillance de la raison autant que du coeur.",
              axe3_sourate: "Al-Baqarah revient souvent sur le contraste entre les bienfaits divins et l'ingratitude humaine. Les Banu Israil recevant la manne et la caille mais se plaignant (v.57-61), les miracles multiplies mais ignores — l'ingratitude est un theme structurel de la sourate. 'La yashkurun' au verset 243 s'inscrit dans cette serie de constats d'ingratitude qui ponctuent al-Baqarah.",
              axe4_coherence: "La racine sh-k-r apparait environ 75 fois dans le Coran. La gratitude (shukr) est presentee comme la reponse normale et attendue aux bienfaits divins. Son contraire est l'ingratitude (kufr al-ni'ma = nier le bienfait) — un terme tres fort qui relie l'ingratitude ordinaire au kufr (infidelite). Ne pas rendre grace, c'est d'une certaine maniere nier le bienfait, et par extension nier son donateur.",
              axe5_frequence: "Pour les theologiens, 'la yashkurun' (ils ne rendent pas grace) est une des observations les plus severes sur la psychologie humaine dans le Coran. Malgre les miracles, la grace continue et la resurrection demonstrative, la majorite reste ingrate. La tradition exegetique y voit une description realiste de la condition humaine, mais aussi une exhortation implicite : le croyant doit se distinguer de cette majorite ingrate en cultivant le shukr comme attitude permanente."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[243];
  const {error:veErr} = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V243)');
  for (const word of data.vwa) {
    const {error:vwaErr} = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V243 TERMINE');
}
main().catch(console.error);
