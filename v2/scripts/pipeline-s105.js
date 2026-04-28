require('dotenv').config({path: '.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // =============================================
  // VERSE 105:1 — verse_word_analyses (Step 3)
  // =============================================
  const v1_vwa = [
    {
      verse_id: 6189,
      word_key: 'ray',
      sense_chosen: 'vision',
      position: 1,
      analysis_axes: {
        sense_chosen: 'vision',
        concept_chosen: 'Vision/Perception',
        concepts: {
          'Vision/Perception': {
            senses: ['voir', 'percevoir'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Vision/Perception'. Le verbe tara est un inaccompli pr\u00e9c\u00e9d\u00e9 de la n\u00e9gation interrogative alam, ce qui donne 'n'as-tu pas vu ?'. D'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ra'a signifie voir par les yeux ou par l'esprit. Ici la question est rh\u00e9torique : elle invite \u00e0 constater un fait. La vision est un acte directionnel du voyant vers le vu. Distinction avec 'Jugement/Avis' : le jugement est une conclusion int\u00e9rieure apr\u00e8s r\u00e9flexion, alors que la vision est un acte de perception directe. Le verset ne demande pas 'qu'en penses-tu ?' mais 'n'as-tu pas vu ?' \u2014 il s'agit de constater, pas de juger. Distinction avec 'Apparition' : l'apparition est le passage de l'invisible au visible du point de vue de l'objet, alors que la vision est l'acte du sujet qui per\u00e7oit.",
            axe1_verset: "Le verset pose une question rh\u00e9torique qui invite \u00e0 constater comment Dieu a agi envers les compagnons de l'\u00e9l\u00e9phant. Le champ lexical est celui de l'observation d'un \u00e9v\u00e9nement pass\u00e9 : voir (ray), faire (fel), seigneur (rbb). La vision s'inscrit parfaitement dans ce champ lexical car elle est l'acte de percevoir ce qui s'est pass\u00e9. Le verset demande de regarder un fait, pas de r\u00e9fl\u00e9chir \u00e0 une opinion. La vision est le premier mot du verset et elle ouvre toute la sourate sur un acte de constatation.",
            axe2_voisins: "Les versets suivants (105:2-5) d\u00e9crivent une s\u00e9quence d'\u00e9v\u00e9nements : la ruse rendue vaine, les oiseaux envoy\u00e9s, les pierres lanc\u00e9es, le r\u00e9sultat final. Tout ce passage est un r\u00e9cit factuel qui se d\u00e9roule sous les yeux de celui qui regarde. La vision au verset 1 introduit ce r\u00e9cit comme un spectacle \u00e0 observer. Les versets voisins confirment qu'il s'agit de constater des faits visibles, pas de former un jugement.",
            axe3_sourate: "La sourate 105 d\u00e9crit comment Dieu a trait\u00e9 un groupe pr\u00e9cis. Le th\u00e8me est la d\u00e9monstration de la puissance divine par des faits concrets. La vision ouvre cette d\u00e9monstration en invitant le destinataire \u00e0 regarder les faits. Le th\u00e8me de la sourate est narratif et factuel, ce qui correspond \u00e0 la vision comme acte de perception directe.",
            axe4_coherence: "Le verbe ra'a avec alam tara est utilis\u00e9 dans de nombreux versets du Coran pour introduire une constatation (2:243, 2:246, 3:23, etc.). Dans tous ces cas, il s'agit de voir, constater, observer un fait. Le Coran n'utilise pas cette tournure pour demander un avis ou une opinion. La coh\u00e9rence coranique confirme le sens de vision/perception.",
            axe5_frequence: "La vision permet \u00e0 l'\u00eatre humain de tirer des le\u00e7ons du monde qui l'entoure. Observer les cons\u00e9quences des actes pass\u00e9s est fondamental pour la mission de justice : on ne peut corriger que ce qu'on a d'abord vu et compris. La vision est le premier pas vers la compr\u00e9hension et donc vers l'action juste."
          },
          'Jugement/Avis': {
            senses: ['opinion', 'avis'],
            status: 'peu_probable',
            proof_ctx: "Le jugement est un processus int\u00e9rieur de r\u00e9flexion qui aboutit \u00e0 une conclusion. Le verset ne demande pas de former une opinion mais de constater un fait. La tournure alam tara kayfa (n'as-tu pas vu comment) oriente vers l'observation, pas vers la r\u00e9flexion.",
            axe1_verset: "Le verset utilise kayfa (comment) apr\u00e8s tara, ce qui oriente vers l'observation d'un d\u00e9roulement. Si le sens \u00e9tait 'juger', la question porterait sur ce qu'on pense, pas sur comment les choses se sont pass\u00e9es. Le mot kayfa demande de d\u00e9crire un processus observable, pas de formuler une opinion. Le champ lexical factuel (faire, agir) ne s'accorde pas avec un jugement int\u00e9rieur.",
            axe2_voisins: "Les versets suivants d\u00e9crivent des actions concr\u00e8tes (envoyer, lancer, rendre). Ils ne demandent pas un avis mais montrent des faits. Le jugement serait en d\u00e9calage avec la narration factuelle des versets 2 \u00e0 5 qui racontent ce qui s'est pass\u00e9 sans demander d'\u00e9valuation.",
            axe3_sourate: "La sourate raconte un \u00e9v\u00e9nement. Un jugement serait plus adapt\u00e9 \u00e0 une sourate qui d\u00e9bat ou argumente. Ici le texte montre, il ne demande pas d'\u00e9valuer.",
            axe4_coherence: "Dans les autres occurrences coraniques de alam tara, le sens est toujours la constatation visuelle, pas la formulation d'un avis.",
            axe5_frequence: "Le jugement sans vision pr\u00e9alable est aveugle. La mission de l'\u00eatre humain commence par observer avant de juger. Le verset place la vision en premier, ce qui confirme la priorit\u00e9 de l'observation."
          },
          'Apparition': {
            senses: ['appara\u00eetre'],
            status: 'nul',
            proof_ctx: "L'apparition d\u00e9crit le passage de l'invisible au visible du point de vue de l'objet. Le verset s'adresse au sujet (tu) et lui demande s'il a vu, pas si quelque chose est apparu. Le verbe est actif et dirig\u00e9 du sujet vers l'objet."
          }
        }
      }
    },
    {
      verse_id: 6189,
      word_key: 'fel',
      sense_chosen: 'action',
      position: 2,
      analysis_axes: {
        sense_chosen: 'action',
        concept_chosen: 'Action/Acte',
        concepts: {
          'Action/Acte': {
            senses: ['faire', 'agir', 'action', 'subir une action', 'faire ensemble', 'efficace'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Action/Acte'. Le verbe fa'ala est un accompli (action achev\u00e9e dans le pass\u00e9). D'apr\u00e8s les sources \u00e9tymologiques, fa'ala est le verbe le plus fondamental pour exprimer l'acte de produire un effet dans le monde. Ici kayfa fa'ala rabbuka signifie 'comment ton Seigneur a agi'. L'action est ext\u00e9rieure, dirig\u00e9e vers un objet (les compagnons de l'\u00e9l\u00e9phant), et achev\u00e9e. Il n'y a qu'un seul sens possible pour cette racine, le sens d'action/acte, et il est parfaitement compatible avec le verbe accompli.",
            axe1_verset: "Le verset d\u00e9crit un acte accompli par le Seigneur. Le champ lexical est factuel : voir, faire, seigneur, compagnons. Le verbe fa'ala est le centre du verset \u2014 c'est l'acte divin envers un groupe pr\u00e9cis. L'action est le pivot autour duquel tout le verset s'organise : on voit comment Il a agi.",
            axe2_voisins: "Les versets 2 \u00e0 5 d\u00e9taillent en quoi consiste cette action : rendre la ruse vaine, envoyer des oiseaux, lancer des pierres, r\u00e9duire en paille. Le verbe fa'ala au verset 1 annonce cette s\u00e9quence d'actes. Les versets voisins sont le d\u00e9roulement concret de l'action pos\u00e9e au verset 1.",
            axe3_sourate: "La sourate enti\u00e8re est le r\u00e9cit d'une action divine. Le verbe fa'ala au verset 1 est la porte d'entr\u00e9e de ce r\u00e9cit. Le th\u00e8me est comment Dieu a agi, et fa'ala est le mot exact pour cela.",
            axe4_coherence: "Le verbe fa'ala est utilis\u00e9 dans le Coran pour d\u00e9crire les actes de Dieu et des humains. En 21:73, Dieu dit 'nous leur avons inspir\u00e9 de faire (fi'la) le bien'. Le sens d'action est constant dans toutes les occurrences coraniques.",
            axe5_frequence: "L'action est au c\u0153ur de la mission humaine. Observer comment Dieu agit permet de comprendre les lois qui r\u00e9gissent le monde et d'agir en cons\u00e9quence. L'action divine est un mod\u00e8le pour l'action humaine juste."
          }
        }
      }
    },
    {
      verse_id: 6189,
      word_key: 'rbb',
      sense_chosen: 'seigneur',
      position: 3,
      analysis_axes: {
        sense_chosen: 'seigneur',
        concept_chosen: 'Seigneurie/Autorit\u00e9 bienveillante',
        concepts: {
          'Seigneurie/Autorit\u00e9 bienveillante': {
            senses: ['seigneur', 'ma\u00eetre', 'propri\u00e9taire', 'celui qui \u00e9l\u00e8ve', 'celui qui entretient', 'celui qui poss\u00e8de', 'gouverner'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Seigneurie/Autorit\u00e9 bienveillante'. Le mot rabbuka est en idafa avec le pronom ka (ton), ce qui donne 'ton Seigneur'. D'apr\u00e8s les sources \u00e9tymologiques, rabb est celui qui poss\u00e8de, gouverne et prend soin de ce qu'il poss\u00e8de. La seigneurie est une relation ext\u00e9rieure permanente entre un ma\u00eetre et ce qu'il gouverne. Distinction avec 'Croissance/Augmentation' : la croissance est un processus graduel de d\u00e9veloppement, pas une relation d'autorit\u00e9. Le verset parle de ce que le Seigneur a fait, pas de croissance. Distinction avec '\u00c9ducation/Accompagnement' : l'\u00e9ducation est un acte d'accompagnement continu, mais ici le verset d\u00e9crit un acte ponctuel (comment Il a agi), pas un processus \u00e9ducatif.",
            axe1_verset: "Le verset demande 'n'as-tu pas vu comment TON SEIGNEUR a agi envers les compagnons de l'\u00e9l\u00e9phant ?'. Le champ lexical est celui de l'autorit\u00e9 qui agit : voir, faire, seigneur. Le mot rabb est l'agent de l'action d\u00e9crite. La seigneurie est la qualit\u00e9 qui donne au Seigneur l'autorit\u00e9 d'agir ainsi. Le pronom 'ton' (ka) personnalise la relation : ce n'est pas un seigneur abstrait mais ton Seigneur.",
            axe2_voisins: "Les versets suivants montrent le Seigneur en action : Il a rendu leur ruse vaine, Il a envoy\u00e9 des oiseaux, Il les a rendus comme de la paille. Toutes ces actions sont des actes d'autorit\u00e9 et de gouvernance. La seigneurie au verset 1 est la source de cette autorit\u00e9 qui se d\u00e9ploie dans les versets 2 \u00e0 5.",
            axe3_sourate: "La sourate montre la puissance du Seigneur face \u00e0 ceux qui ont voulu imposer leur force. Le th\u00e8me est la sup\u00e9riorit\u00e9 de l'autorit\u00e9 divine sur la force brute. La seigneurie est le sens qui exprime cette autorit\u00e9.",
            axe4_coherence: "Le mot rabb est utilis\u00e9 des centaines de fois dans le Coran dans le sens de seigneur, ma\u00eetre, celui qui gouverne. En 1:2, rabbi al-'\u0101lam\u012bn (Seigneur des mondes). Le sens est constant.",
            axe5_frequence: "La seigneurie implique la responsabilit\u00e9 et la justice. Le Seigneur agit envers les compagnons de l'\u00e9l\u00e9phant non pas par caprice mais par autorit\u00e9 bienveillante. Pour l'\u00eatre humain, reconna\u00eetre la seigneurie c'est reconna\u00eetre qu'il y a une autorit\u00e9 au-dessus de la force brute."
          },
          'Croissance/Augmentation': {
            senses: ['augmenter', 'cro\u00eetre', 'faire grandir', 'nourrir', 'd\u00e9velopper', 'exc\u00e8s', 'colline', '\u00e9minence'],
            status: 'nul',
            proof_ctx: "Le contexte est un acte ponctuel envers un groupe (comment a-t-il agi). La croissance est un processus graduel sans rapport avec l'acte d\u00e9crit. Le mot est en position de sujet agent, pas de processus."
          },
          '\u00c9ducation/Accompagnement': {
            senses: ['\u00e9lever un enfant', '\u00e9duquer', 'former', 'accompagner la croissance'],
            status: 'nul',
            proof_ctx: "L'\u00e9ducation est un acte continu d'accompagnement. Le verset d\u00e9crit un acte ponctuel et achev\u00e9 (verbe accompli fa'ala). Le contexte n'est pas \u00e9ducatif mais factuel."
          },
          'Commerce/Usure': {
            senses: ['usure', 'augmentation de dette', 'int\u00e9r\u00eat'],
            status: 'nul',
            proof_ctx: "Sens financier sans rapport avec le contexte du verset."
          },
          'Divers': {
            senses: ['essoufflement', 'fixer', 'rassembler', 'groupe', 'confiture'],
            status: 'nul',
            proof_ctx: "Sens isol\u00e9s sans rapport avec le contexte du verset."
          }
        }
      }
    },
    {
      verse_id: 6189,
      word_key: 'shb',
      sense_chosen: 'compagnon',
      position: 4,
      analysis_axes: {
        sense_chosen: 'compagnon',
        concept_chosen: 'Compagnonnage/Association',
        concepts: {
          'Compagnonnage/Association': {
            senses: ['accompagner', 'compagnon', 'associ\u00e9', 'ami'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Compagnonnage/Association'. Le mot a\u1e63\u1e25\u0101b est un pluriel au g\u00e9nitif, rattach\u00e9 \u00e0 al-f\u012bl par une idafa : les compagnons de l'\u00e9l\u00e9phant. D'apr\u00e8s les sources \u00e9tymologiques, \u1e63a\u1e25iba signifie accompagner, \u00eatre avec quelqu'un. Le compagnon est celui qui chemine avec l'autre. Ici les a\u1e63\u1e25\u0101b sont ceux qui sont associ\u00e9s \u00e0 l'\u00e9l\u00e9phant, ceux qui sont avec lui. Il n'y a qu'un seul sens pour cette racine et il s'applique directement : ce sont les gens associ\u00e9s \u00e0 l'\u00e9l\u00e9phant.",
            axe1_verset: "Le verset parle des compagnons de l'\u00e9l\u00e9phant (a\u1e63\u1e25\u0101bi al-f\u012bl). Le champ lexical est celui de l'association entre des personnes et un animal. Le compagnonnage est le lien qui unit ces gens \u00e0 l'\u00e9l\u00e9phant \u2014 ils sont d\u00e9finis par cette association. Le mot a\u1e63\u1e25\u0101b identifie le groupe par sa relation avec l'\u00e9l\u00e9phant.",
            axe2_voisins: "Les versets suivants d\u00e9crivent ce qui est arriv\u00e9 \u00e0 ces compagnons : leur ruse a \u00e9t\u00e9 rendue vaine, des oiseaux ont \u00e9t\u00e9 envoy\u00e9s sur eux, des pierres les ont frapp\u00e9s, ils ont \u00e9t\u00e9 r\u00e9duits en paille. Les compagnons sont les destinataires de toute l'action d\u00e9crite dans la sourate.",
            axe3_sourate: "La sourate identifie un groupe par son association avec l'\u00e9l\u00e9phant et d\u00e9crit ce que Dieu a fait \u00e0 ce groupe. Le compagnonnage est le lien identitaire qui d\u00e9finit ce groupe dans toute la sourate.",
            axe4_coherence: "Le mot a\u1e63\u1e25\u0101b est utilis\u00e9 fr\u00e9quemment dans le Coran pour identifier des groupes par leur association : a\u1e63\u1e25\u0101b al-n\u0101r (compagnons du feu, 2:39), a\u1e63\u1e25\u0101b al-janna (compagnons du jardin, 2:82), a\u1e63\u1e25\u0101b al-kahf (compagnons de la caverne, 18:9). Le sens de compagnonnage/association est constant.",
            axe5_frequence: "Le compagnonnage d\u00e9finit l'identit\u00e9 d'un groupe par ce avec quoi il est associ\u00e9. Pour la mission humaine, cela montre que les choix d'association d\u00e9terminent le destin. Les compagnons de l'\u00e9l\u00e9phant sont d\u00e9finis par leur choix d'\u00eatre avec l'\u00e9l\u00e9phant \u2014 et c'est ce choix qui d\u00e9termine ce qui leur arrive."
          }
        }
      }
    },
    {
      verse_id: 6189,
      word_key: 'fyl',
      sense_chosen: '\u00e9l\u00e9phant',
      position: 5,
      analysis_axes: {
        sense_chosen: '\u00e9l\u00e9phant',
        concept_chosen: '\u00c9l\u00e9phant/Animal',
        concepts: {
          '\u00c9l\u00e9phant/Animal': {
            senses: ['\u00e9l\u00e9phant', 'conducteur d\'\u00e9l\u00e9phant', '\u00e9l\u00e9phantiasis'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est '\u00c9l\u00e9phant/Animal'. Le mot al-f\u012bl est un nom d\u00e9fini par al- au g\u00e9nitif, rattach\u00e9 \u00e0 a\u1e63\u1e25\u0101b par une idafa : les compagnons de l'\u00e9l\u00e9phant. D'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le f\u012bl est l'\u00e9l\u00e9phant, animal bien connu pour sa taille imposante et sa force. Le nom d\u00e9fini avec al- identifie un \u00e9l\u00e9phant pr\u00e9cis, connu. Distinction avec 'Faiblesse/Erreur de jugement' : la faiblesse de jugement est un \u00e9tat int\u00e9rieur de la raison, pas un \u00eatre physique. Le mot est en idafa avec a\u1e63\u1e25\u0101b (compagnons), ce qui implique un objet avec lequel on peut \u00eatre compagnon \u2014 on est compagnon d'un animal ou d'une personne, pas d'un jugement faible. Distinction avec 'Croissance/Ampleur' : la croissance est un processus, pas une entit\u00e9 d\u00e9finie par al-. Le nom d\u00e9fini al-f\u012bl identifie un \u00eatre, pas un processus.",
            axe1_verset: "Le verset parle des compagnons de al-f\u012bl. Le champ lexical est factuel : voir, faire, seigneur, compagnons. L'\u00e9l\u00e9phant est l'entit\u00e9 \u00e0 laquelle les compagnons sont associ\u00e9s. C'est un \u00eatre physique, concret, visible, qui s'inscrit dans un r\u00e9cit d'\u00e9v\u00e9nements concrets. L'\u00e9l\u00e9phant repr\u00e9sente la force brute et la masse imposante \u2014 c'est ce que les compagnons ont amen\u00e9 avec eux.",
            axe2_voisins: "Les versets suivants d\u00e9crivent une confrontation entre la puissance des compagnons de l'\u00e9l\u00e9phant et l'action divine. La ruse (v2), les oiseaux (v3), les pierres (v4), la paille (v5) forment une progression qui commence par la force brute (l'\u00e9l\u00e9phant) et finit par la r\u00e9duction en paille. L'\u00e9l\u00e9phant au verset 1 est le symbole de la force maximale qui est d\u00e9faite.",
            axe3_sourate: "La sourate porte le nom al-F\u012bl (l'\u00c9l\u00e9phant). L'animal est le point de d\u00e9part de toute la sourate. Le th\u00e8me est la d\u00e9faite de la force brute face \u00e0 l'action divine. L'\u00e9l\u00e9phant est l'incarnation de cette force brute.",
            axe4_coherence: "Le mot f\u012bl n'appara\u00eet qu'une seule fois dans le Coran, dans ce verset. Son unicit\u00e9 m\u00eame confirme qu'il s'agit de l'animal : la sourate porte son nom et lui consacre son r\u00e9cit.",
            axe5_frequence: "L'\u00e9l\u00e9phant repr\u00e9sente la force physique maximale. Pour la mission humaine, la sourate montre que la force brute ne suffit pas face \u00e0 la justice. Les compagnons de l'\u00e9l\u00e9phant avaient la puissance physique mais pas la justesse, et c'est cette absence de justesse qui cause leur d\u00e9faite."
          },
          'Faiblesse/Erreur de jugement': {
            senses: ['jugement faible', 'd\u00e9clarer le jugement faible', 'stupide', 'homme au jugement faible'],
            status: 'peu_probable',
            proof_ctx: "La faiblesse de jugement est un \u00e9tat int\u00e9rieur de la raison. Le mot al-f\u012bl est d\u00e9fini par al- et en idafa avec a\u1e63\u1e25\u0101b. La construction 'compagnons du jugement faible' est grammaticalement possible mais philosophiquement inadapt\u00e9e : on est compagnon d'un \u00eatre ou d'une chose, pas d'un \u00e9tat int\u00e9rieur de la raison. La fronti\u00e8re avec le sens retenu : l'\u00e9l\u00e9phant est un \u00eatre physique avec lequel on peut \u00eatre, le jugement faible est un d\u00e9faut qui est en soi.",
            axe1_verset: "Le verset utilise a\u1e63\u1e25\u0101b (compagnons) en idafa avec al-f\u012bl. Le champ lexical est factuel et concret. Les compagnons d'un jugement faible serait une m\u00e9taphore, alors que les compagnons d'un \u00e9l\u00e9phant est litt\u00e9ral. Le champ lexical concret du verset (voir, faire) favorise le sens litt\u00e9ral.",
            axe2_voisins: "Les versets suivants d\u00e9crivent des \u00e9v\u00e9nements physiques (oiseaux, pierres, paille). Ces \u00e9v\u00e9nements sont concrets et mat\u00e9riels. Le jugement faible est abstrait et ne s'inscrit pas dans cette s\u00e9quence d'\u00e9v\u00e9nements physiques.",
            axe3_sourate: "La sourate porte le titre al-F\u012bl. Si le sens \u00e9tait le jugement faible, la sourate s'appellerait 'la faiblesse de jugement', ce qui ne correspond pas \u00e0 un r\u00e9cit d'\u00e9v\u00e9nements concrets.",
            axe4_coherence: "Le nom al-f\u012bl dans le Coran est un hapax (une seule occurrence). Sans autre occurrence pour comparer, on se fie au sens premier attest\u00e9 dans les sources \u00e9tymologiques : l'\u00e9l\u00e9phant.",
            axe5_frequence: "Le jugement faible est un trait int\u00e9rieur. La sourate d\u00e9crit une confrontation ext\u00e9rieure entre une force et une r\u00e9ponse. Le sens de jugement faible ne contribue pas \u00e0 la le\u00e7on concr\u00e8te de la sourate."
          },
          'Croissance/Ampleur': {
            senses: ['devenir gros', 'v\u00e9g\u00e9tation en pleine taille', 'jeunesse en pl\u00e9nitude', 'chameau devenu \u00e9norme'],
            status: 'nul',
            proof_ctx: "La croissance est un processus graduel. Le mot al-f\u012bl est un nom d\u00e9fini qui identifie une entit\u00e9, pas un processus. La construction a\u1e63\u1e25\u0101b al-f\u012bl demande un objet avec lequel on est compagnon, pas un processus."
          },
          'Divers': {
            senses: ['jeu al-fayal', 'chair de la hanche', 'nuit noire et poussi\u00e9reuse'],
            status: 'nul',
            proof_ctx: "Sens isol\u00e9s (jeu, anatomie, nuit) sans rapport avec le r\u00e9cit factuel du verset."
          }
        }
      }
    }
  ];

  const {data: vwa1, error: vwa1Err} = await sb.from('verse_word_analyses').insert(v1_vwa).select('id, word_key, position');
  if (vwa1Err) { console.log('VWA v1 Error:', vwa1Err); return; }
  console.log('V1 VWA inserted:', vwa1.length);
  vwa1.forEach(d => console.log('  ' + d.word_key + ' pos=' + d.position));

  // =============================================
  // VERSE 105:1 — verse_analyses (Step 4)
  // =============================================
  const v1_segments = [
    { fr: "n'as-tu pas", phon: "alam", arabic: "\u0623\u064e\u0644\u064e\u0645\u0652", position: 1, word_key: null, is_particle: true },
    { fr: "vu", pos: "verbe", phon: "tara", arabic: "\u062a\u064e\u0631\u064e", position: 2, word_key: "ray", is_particle: false, sense_retenu: "vision" },
    { fr: "comment", phon: "kayfa", arabic: "\u0643\u064e\u064a\u0652\u0641\u064e", position: 3, word_key: null, is_particle: true },
    { fr: "a agi", pos: "verbe", phon: "fa\u02bbala", arabic: "\u0641\u064e\u0639\u064e\u0644\u064e", position: 4, word_key: "fel", is_particle: false, sense_retenu: "action" },
    { fr: "ton Seigneur", pos: "nom", phon: "rabbuka", arabic: "\u0631\u064e\u0628\u0651\u064f\u0643\u064e", position: 5, word_key: "rbb", is_particle: false, sense_retenu: "seigneur" },
    { fr: "envers les compagnons", pos: "nom", phon: "bi-a\u1e63\u1e25\u0101bi", arabic: "\u0628\u0650\u0623\u064e\u0635\u0652\u062d\u064e\u0640\u0670\u0628\u0650", position: 6, word_key: "shb", is_particle: false, sense_retenu: "compagnon" },
    { fr: "de l'\u00e9l\u00e9phant", pos: "nom", phon: "al-f\u012bl", arabic: "\u0671\u0644\u0652\u0641\u0650\u064a\u0644\u0650", position: 7, word_key: "fyl", is_particle: false, sense_retenu: "\u00e9l\u00e9phant" }
  ];

  const v1_explanation = `\u00a7DEMARCHE\u00a7

La particule **alam** est une n\u00e9gation interrogative (c'est quand on pose une question en disant "n'as-tu pas..."). Elle attend une r\u00e9ponse positive : "bien s\u00fbr que si, tu as vu". C'est une fa\u00e7on de dire "tu sais bien comment".

Le mot **tara** est un verbe inaccompli de la racine r-\u0101-y (une forme qui exprime une action en cours ou r\u00e9p\u00e9t\u00e9e). Pr\u00e9c\u00e9d\u00e9 de alam, il prend le sens d'une constatation pass\u00e9e : "n'as-tu pas vu ?". D'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ra'\u0101 signifie voir par les yeux ou par l'esprit.

Le mot **kayfa** est un adverbe interrogatif qui demande "comment", "de quelle mani\u00e8re". Il oriente la vision vers le d\u00e9roulement des faits.

Le mot **fa\u02bbala** est un verbe accompli (une forme qui dit que l'action est termin\u00e9e). Il signifie "a fait, a agi". L'action est achev\u00e9e dans le pass\u00e9.

Le mot **rabbuka** est en idafa avec le pronom ka (c'est quand deux mots sont li\u00e9s pour dire que le premier appartient au second) : "ton Seigneur". Le rabb est celui qui poss\u00e8de, gouverne et prend soin.

Le mot **bi-a\u1e63\u1e25\u0101bi** commence par la pr\u00e9position bi (avec, envers), suivie du pluriel a\u1e63\u1e25\u0101b (compagnons). Ce pluriel est en idafa avec **al-f\u012bl** (l'\u00e9l\u00e9phant) : les compagnons de l'\u00e9l\u00e9phant. Le nom al-f\u012bl est d\u00e9fini par al- (l'article d\u00e9fini), ce qui identifie un \u00e9l\u00e9phant pr\u00e9cis et connu.

\u00a7JUSTIFICATION\u00a7

**vu** \u2014 Le sens retenu est 'Vision/Perception'. Le mot "vu" est choisi car il exprime la perception directe d'un fait. L'alternative "pens\u00e9" est \u00e9cart\u00e9e car le verset demande de constater, pas de r\u00e9fl\u00e9chir. L'alternative "remarqu\u00e9" est \u00e9cart\u00e9e car elle implique un d\u00e9tail qu'on pourrait manquer, alors que le verset parle d'un \u00e9v\u00e9nement majeur.

**a agi** \u2014 Le sens retenu est 'Action/Acte'. Le mot "agi" est choisi car il exprime l'acte de produire un effet concret. L'alternative "fait" est \u00e9cart\u00e9e car "fait" est trop g\u00e9n\u00e9rique et n'exprime pas la dimension active et d\u00e9lib\u00e9r\u00e9e de l'acte.

**ton Seigneur** \u2014 Le sens retenu est 'Seigneurie/Autorit\u00e9 bienveillante'. Le mot "Seigneur" est choisi car il exprime l'autorit\u00e9 de celui qui gouverne et prend soin. L'alternative "Ma\u00eetre" est \u00e9cart\u00e9e car elle implique une domination sans la dimension de bienveillance.

**compagnons** \u2014 Le sens retenu est 'Compagnonnage/Association'. Le mot "compagnons" est choisi car il identifie le groupe par sa relation avec l'\u00e9l\u00e9phant. L'alternative "poss\u00e9dants" est \u00e9cart\u00e9e car le compagnonnage est plus large que la possession \u2014 ils ne poss\u00e8dent pas forc\u00e9ment l'\u00e9l\u00e9phant, ils sont avec lui.

**l'\u00e9l\u00e9phant** \u2014 Le sens retenu est '\u00c9l\u00e9phant/Animal'. Le mot "\u00e9l\u00e9phant" est choisi car il d\u00e9signe l'animal imposant et puissant. L'alternative "jugement faible" est \u00e9cart\u00e9e car le champ lexical concret du verset (voir, faire, compagnons) oriente vers un \u00eatre physique, pas un \u00e9tat abstrait.

\u00a7CRITIQUE\u00a7

Les traductions courantes donnent sensiblement le m\u00eame sens. Le verset est rendu par tous les traducteurs comme "N'as-tu pas vu comment ton Seigneur a agi envers les gens/compagnons de l'\u00c9l\u00e9phant ?". La seule diff\u00e9rence l\u00e9g\u00e8re est le choix entre "gens" et "compagnons" : la racine \u1e63-\u1e25-b d\u00e9signe sp\u00e9cifiquement ceux qui sont associ\u00e9s \u00e0 quelqu'un ou quelque chose, pas simplement des "gens". Le mot "compagnons" est plus pr\u00e9cis car il montre que ces personnes sont d\u00e9finies par leur lien avec l'\u00e9l\u00e9phant.`;

  const {error: vaErr} = await sb.from('verse_analyses').update({
    segments: v1_segments,
    full_translation: "N'as-tu pas vu comment ton Seigneur a agi envers les gens de l'\u00c9l\u00e9phant ?",
    translation_explanation: v1_explanation
  }).eq('id', 6552);
  if (vaErr) { console.log('VA v1 Error:', vaErr); return; }
  console.log('V1 VA updated (id=6552)');

  // word_daily for v1
  const v1_daily = [
    { analysis_id: 552, sense: 'vision', arabic: '\u0631\u064e\u0623\u064e\u064a\u0652\u062a\u064f \u0630\u064e\u0644\u0650\u0643\u064e \u0628\u0650\u0639\u064e\u064a\u0652\u0646\u064e\u064a\u0651\u064e', phon: "ra'aytu dhalika bi-\u02bbaynayyay", french: "J'ai vu cela de mes propres yeux" },
    { analysis_id: 552, sense: 'vision', arabic: '\u0623\u064e\u0644\u064e\u0645\u0652 \u062a\u064e\u0631\u064e \u0645\u064e\u0627 \u062d\u064e\u0635\u064e\u0644\u064e\u061f', phon: "alam tara m\u0101 \u1e25a\u1e63ala?", french: "N'as-tu pas vu ce qui s'est pass\u00e9 ?" },
    { analysis_id: 552, sense: 'vision', arabic: '\u0623\u064f\u0631\u0650\u064a\u0643\u064e \u0645\u064e\u0627 \u0623\u064e\u0639\u0652\u0646\u0650\u064a', phon: "ur\u012bka m\u0101 a\u02bbn\u012b", french: "Je te montre ce que je veux dire" },
    { analysis_id: 374, sense: 'action', arabic: '\u0645\u064e\u0627\u0630\u064e\u0627 \u0641\u064e\u0639\u064e\u0644\u0652\u062a\u064e\u061f', phon: "m\u0101dh\u0101 fa\u02bbalta?", french: "Qu'as-tu fait ?" },
    { analysis_id: 374, sense: 'action', arabic: '\u0647\u064e\u0630\u064e\u0627 \u0641\u0650\u0639\u0652\u0644\u064c \u062c\u064e\u0645\u0650\u064a\u0644\u064c', phon: "h\u0101dh\u0101 fi\u02bblun jam\u012blun", french: "C'est une belle action" },
    { analysis_id: 374, sense: 'action', arabic: '\u0641\u064e\u0639\u064e\u0644\u064e \u0628\u0650\u0647\u0650\u0645\u0652 \u0630\u064e\u0644\u0650\u0643\u064e', phon: "fa\u02bbala bihim dh\u0101lika", french: "Il leur a fait cela" },
    { analysis_id: 253, sense: 'seigneur', arabic: '\u0631\u064e\u0628\u0651\u064f \u0647\u064e\u0630\u064e\u0627 \u0627\u0644\u0628\u064e\u064a\u0652\u062a\u0650', phon: "rabbu h\u0101dh\u0101 al-bayt", french: "Le seigneur de cette maison" },
    { analysis_id: 253, sense: 'seigneur', arabic: '\u0631\u064e\u0628\u0651\u064f\u0643\u064e \u064a\u064e\u0639\u0652\u0644\u064e\u0645\u064f', phon: "rabbuka ya\u02bblamu", french: "Ton Seigneur sait" },
    { analysis_id: 253, sense: 'seigneur', arabic: '\u0647\u064f\u0648\u064e \u0631\u064e\u0628\u0651\u064f \u0643\u064f\u0644\u0651\u0650 \u0634\u064e\u064a\u0652\u0621\u064d', phon: "huwa rabbu kulli shay'", french: "Il est le seigneur de toute chose" },
    { analysis_id: 476, sense: 'compagnon', arabic: '\u0647\u064f\u0648\u064e \u0635\u064e\u0627\u062d\u0650\u0628\u064f\u0643\u064e', phon: "huwa \u1e63\u0101\u1e25ibuka", french: "C'est ton compagnon" },
    { analysis_id: 476, sense: 'compagnon', arabic: '\u0635\u064e\u062d\u0650\u0628\u0652\u062a\u064f\u0647\u064f \u0641\u0650\u064a \u0627\u0644\u0633\u0651\u064e\u0641\u064e\u0631\u0650', phon: "\u1e63a\u1e25ibtuhu f\u012b as-safar", french: "Je l'ai accompagn\u00e9 en voyage" },
    { analysis_id: 476, sense: 'compagnon', arabic: '\u0623\u064e\u0635\u0652\u062d\u064e\u0627\u0628\u064f \u0627\u0644\u0639\u064e\u0645\u064e\u0644\u0650', phon: "a\u1e63\u1e25\u0101bu al-\u02bbamal", french: "Les compagnons de travail" },
    { analysis_id: 2595, sense: '\u00e9l\u00e9phant', arabic: '\u0631\u064e\u0623\u064e\u064a\u0652\u062a\u064f \u0641\u0650\u064a\u0644\u064b\u0627 \u0641\u0650\u064a \u0627\u0644\u062d\u064e\u062f\u0650\u064a\u0642\u064e\u0629\u0650', phon: "ra'aytu f\u012blan f\u012b al-\u1e25ad\u012bqa", french: "J'ai vu un \u00e9l\u00e9phant au parc" },
    { analysis_id: 2595, sense: '\u00e9l\u00e9phant', arabic: '\u0627\u0644\u0641\u0650\u064a\u0644\u064f \u062d\u064e\u064a\u064e\u0648\u064e\u0627\u0646\u064c \u0636\u064e\u062e\u0652\u0645\u064c', phon: "al-f\u012blu \u1e25ayaw\u0101nun \u1e0dakhm", french: "L'\u00e9l\u00e9phant est un animal imposant" },
    { analysis_id: 2595, sense: '\u00e9l\u00e9phant', arabic: '\u0623\u064e\u0635\u0652\u062d\u064e\u0627\u0628\u064f \u0627\u0644\u0641\u0650\u064a\u0644\u0650 \u062c\u064e\u0627\u0621\u064f\u0648\u0627', phon: "a\u1e63\u1e25\u0101bu al-f\u012bli j\u0101'\u016b", french: "Les compagnons de l'\u00e9l\u00e9phant sont venus" }
  ];

  const {data: wd1, error: wdErr1} = await sb.from('word_daily').insert(v1_daily).select('id, sense');
  if (wdErr1) { console.log('WD v1 Error:', wdErr1); return; }
  console.log('V1 word_daily inserted:', wd1.length);

  console.log('=== VERSE 105:1 COMPLETE ===');
}

run().catch(e => console.error(e));
