const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const verse_id = 6214; // 110:1

  // --- jya ---
  const jya_axes = {
    sense_chosen: "venir",
    concept_chosen: "Venue",
    concepts: {
      "Venue": {
        status: "retenu",
        senses: ["venir"],
        proof_ctx: "Le sens retenu est \u00ab Venue \u00bb. Le verbe j\u0101\u02bca est \u00e0 l\u2019accompli (\u00e9v\u00e9nement achev\u00e9 ou certitude pr\u00e9sent\u00e9e comme accomplie). La venue est l\u2019acte de se d\u00e9placer d\u2019un point \u00e0 un autre pour arriver. Dans le verset, la venue introduit le secours de Dieu et l\u2019ouverture comme deux \u00e9v\u00e9nements qui arrivent ensemble. C\u2019est le seul sens attest\u00e9 pour cette racine dans cette construction.",
        axe1_verset: "Le verset dit \u00ab quand vient le secours de Dieu et l\u2019ouverture \u00bb. Le verbe \u00ab venir \u00bb introduit les deux r\u00e9alit\u00e9s qui arrivent : le secours et l\u2019ouverture. Le champ lexical est celui de l\u2019arriv\u00e9e, du surgissement d\u2019un \u00e9v\u00e9nement. La venue est le mouvement qui am\u00e8ne ces deux r\u00e9alit\u00e9s du non-\u00eatre \u00e0 l\u2019\u00eatre, de l\u2019absence \u00e0 la pr\u00e9sence. Sans la venue, il n\u2019y a ni secours ni ouverture \u2014 le verbe est le pivot du verset.",
        axe2_voisins: "Le verset 2 d\u00e9crit ce qui se passe quand cette venue a lieu : les gens entrent massivement dans la voie de Dieu. La venue du verset 1 est le d\u00e9clencheur de cette entr\u00e9e massive. Le verset 3 donne la cons\u00e9quence \u00e0 tirer : glorifier et demander le pardon. La progression est causale \u2014 la venue provoque l\u2019entr\u00e9e, qui appelle la glorification. La venue est le point de d\u00e9part de toute la s\u00e9quence.",
        axe3_sourate: "La sourate 110 d\u00e9crit un moment de basculement historique. La venue marque l\u2019instant pr\u00e9cis o\u00f9 ce basculement commence. Toute la sourate est construite autour de ce \u00ab quand \u00bb : quand cela vient, alors fais ceci. La venue est le pivot temporel de la sourate enti\u00e8re, le moment charni\u00e8re entre l\u2019avant et l\u2019apr\u00e8s.",
        axe4_coherence: "La racine j-y-\u2019 est utilis\u00e9e dans le Coran pour des moments d\u00e9cisifs. En 110:1, la structure idh\u0101 j\u0101\u2019a (quand vient) rappelle d\u2019autres versets comme 82:1 (idh\u0101 as-sam\u0101\u2019u infatarat \u2014 quand le ciel se fend) o\u00f9 idh\u0101 introduit un \u00e9v\u00e9nement majeur. Le verbe j\u0101\u2019a est aussi utilis\u00e9 en 17:81 (j\u0101\u2019a al-haqqu \u2014 la v\u00e9rit\u00e9 est venue). La venue dans le Coran marque des tournants irr\u00e9versibles.",
        axe5_frequence: "La venue du secours de Dieu est directement li\u00e9e \u00e0 la mission humaine de justice et de civilisation. Quand les \u00eatres humains s\u2019engagent pour la justice et affrontent l\u2019opposition, le secours de Dieu vient comme un soutien d\u00e9cisif. Cette venue rend possible l\u2019accomplissement de la mission \u2014 sans elle, l\u2019effort humain seul ne suffirait pas face aux obstacles. La venue est le moment o\u00f9 l\u2019engagement humain rencontre le soutien divin."
      }
    }
  };

  // --- nsr ---
  const nsr_axes = {
    sense_chosen: "secours",
    concept_chosen: "Secours/Victoire",
    concepts: {
      "Secours/Victoire": {
        status: "retenu",
        senses: ["secourir", "aider", "victoire", "d\u00e9fendre"],
        proof_ctx: "Le sens retenu est \u00ab Secours/Victoire \u00bb. Le mot nasru est un masdar (nom d\u2019action) \u2014 il d\u00e9signe l\u2019acte m\u00eame de secourir, pas celui qui secourt. En idafa avec All\u0101h, c\u2019est le secours qui vient de Dieu. Le masdar est compatible avec un acte directionnel : le secours sort de celui qui aide et atteint celui qui est aid\u00e9. Distinction avec \u00ab Alliance/Soutien \u00bb : l\u2019alliance est un \u00e9tat permanent de celui qui soutient (le partisan), tandis que le secours est l\u2019acte ponctuel de venir en aide. Le verset dit que quelque chose \u00ab vient \u00bb (j\u0101\u2019a) \u2014 or un acte peut venir comme un \u00e9v\u00e9nement, mais un \u00e9tat permanent d\u2019alliance ne \u00ab vient \u00bb pas soudainement.",
        axe1_verset: "Le verset associe le secours \u00e0 l\u2019ouverture (al-fat\u1e25). Les deux arrivent ensemble par la venue (j\u0101\u2019a). Le champ lexical est celui de l\u2019intervention d\u00e9cisive : une aide arrive et quelque chose s\u2019ouvre. Le secours est l\u2019acte de venir en aide \u2014 il est directionnel de Dieu vers ceux qui sont aid\u00e9s. En idafa avec All\u0101h, c\u2019est Dieu qui est la source de cet acte. Le secours et l\u2019ouverture forment un couple logique : l\u2019aide arrive et rend possible l\u2019acc\u00e8s \u00e0 ce qui \u00e9tait ferm\u00e9.",
        axe2_voisins: "Le verset 2 montre la cons\u00e9quence du secours : les gens entrent dans la voie de Dieu par groupes. Quand le secours arrive, il cr\u00e9e les conditions pour que les gens se rallient massivement. Le verset 3 demande de glorifier Dieu \u2014 c\u2019est la reconnaissance du secours re\u00e7u. La s\u00e9quence est logique : secours \u2192 afflux \u2192 gratitude. Le secours est la cause premi\u00e8re de tout ce qui suit.",
        axe3_sourate: "La sourate porte le nom d\u2019an-na\u1e63r (le secours). Le secours est donc le th\u00e8me central et nomm\u00e9 de cette sourate. Tout le message tourne autour de ce moment o\u00f9 le secours de Dieu arrive et transforme la situation. Le secours n\u2019est pas abstrait \u2014 il se manifeste par l\u2019ouverture et l\u2019entr\u00e9e massive des gens.",
        axe4_coherence: "Le Coran utilise la racine n-\u1e63-r fr\u00e9quemment pour le secours divin. En 3:160, le texte dit \u00ab si Dieu vous secourt (yan\u1e63urkum), personne ne peut vous vaincre \u00bb. En 22:40, le secours est li\u00e9 \u00e0 la d\u00e9fense de la justice. En 47:7, le texte dit \u00ab si vous secourez (tan\u1e63ur\u016b) Dieu, Il vous secourra (yan\u1e63urkum) \u00bb. Le secours dans le Coran est r\u00e9ciproque : l\u2019\u00eatre humain s\u2019engage pour la justice, Dieu le secourt en retour.",
        axe5_frequence: "Le secours de Dieu est directement li\u00e9 \u00e0 la mission de justice et de civilisation. Le Coran lie explicitement le secours divin \u00e0 l\u2019engagement humain pour la justice (22:40, 47:7). Le secours de Dieu n\u2019est pas arbitraire \u2014 il vient en r\u00e9ponse \u00e0 l\u2019effort humain pour \u00e9tablir la justice et emp\u00eacher la corruption. Dans le verset, le secours produit un effet concret : les gens entrent massivement dans la voie de Dieu, ce qui \u00e9tend la civilisation de justice."
      },
      "Alliance/Soutien": {
        status: "peu_probable",
        senses: ["partisan"],
        proof_ctx: "Le sens \u00ab Alliance/Soutien \u00bb d\u00e9signe un \u00e9tat permanent de celui qui soutient une cause (le partisan, le n\u0101\u1e63ir). Or le mot du verset est nasru (masdar, nom d\u2019action), pas n\u0101\u1e63ir (nom d\u2019agent). La distinction philosophique est celle entre l\u2019acte et l\u2019\u00e9tat : le secours est un \u00e9v\u00e9nement qui arrive (compatible avec \u00ab quand vient \u00bb), tandis que l\u2019alliance est un lien permanent qui ne \u00ab vient \u00bb pas soudainement. De plus, le masdar en idafa (nasru ll\u0101hi) d\u00e9signe \u00ab l\u2019acte de secourir de Dieu \u00bb, pas \u00ab le partisan de Dieu \u00bb.",
        axe1_verset: "Le verset dit \u00ab quand vient X de Dieu \u00bb. Le partisan est quelqu\u2019un qui soutient en permanence. Or le verbe j\u0101\u2019a (venir) introduit un \u00e9v\u00e9nement ponctuel. Un partisan ne \u00ab vient \u00bb pas comme un \u00e9v\u00e9nement \u2014 il est d\u00e9j\u00e0 l\u00e0 comme alli\u00e9. Le champ lexical du verset est celui de l\u2019arriv\u00e9e d\u2019un moment d\u00e9cisif, pas de la description d\u2019une relation d\u2019alliance existante. Le mot est un masdar (acte) et non un nom d\u2019agent.",
        axe2_voisins: "Si nasru signifiait \u00ab alliance/soutien permanent \u00bb, la cons\u00e9quence au verset 2 (les gens entrent massivement) serait difficile \u00e0 expliquer. Un soutien permanent ne provoque pas un afflux soudain. C\u2019est l\u2019arriv\u00e9e d\u2019un secours ponctuel qui cr\u00e9e le basculement d\u00e9crit aux versets 2 et 3. La dynamique de la sourate est \u00e9v\u00e9nementielle, pas relationnelle.",
        axe3_sourate: "La sourate d\u00e9crit un moment de basculement. L\u2019alliance est un \u00e9tat continu qui n\u2019a pas de moment de basculement. Le th\u00e8me de la sourate exige un \u00e9v\u00e9nement qui arrive et qui change la donne \u2014 c\u2019est le secours ponctuel, pas l\u2019alliance permanente.",
        axe4_coherence: "Le Coran distingue nettement le masdar na\u1e63r (acte de secourir) du nom d\u2019agent n\u0101\u1e63ir/an\u1e63\u0101r (partisan/alli\u00e9). En 2:120, les an\u1e63\u0101r sont les partisans de M\u00e9dine. En 3:160, yan\u1e63urkum est l\u2019acte de secourir. Le verset 110:1 utilise le masdar nasru, pas le nom d\u2019agent.",
        axe5_frequence: "L\u2019alliance en tant qu\u2019\u00e9tat permanent est importante pour la mission humaine, mais le verset d\u00e9crit un moment pr\u00e9cis de soutien divin, pas une relation d\u2019alliance continue. La distinction est entre ce que Dieu fait (secourir) et ce que les gens sont (partisans)."
      }
    }
  };

  // --- alh ---
  const alh_axes = {
    sense_chosen: "divinit\u00e9",
    concept_chosen: "Divinit\u00e9",
    concepts: {
      "Divinit\u00e9": {
        status: "retenu",
        senses: ["divinit\u00e9", "divinit\u00e9 (concept)", "Dieu", "th\u00e9ologie", "exclamation divine", "oui certes"],
        proof_ctx: "Le sens retenu est \u00ab Divinit\u00e9 \u00bb. Allah est le nom propre de la Divinit\u00e9 \u2014 ce vers quoi se dirige l\u2019adoration. Dans ce verset, All\u0101h est en position de compl\u00e9ment d\u2019idafa (nasru ll\u0101hi = le secours de Dieu), identifiant la source du secours. Le nom propre d\u00e9signe une identit\u00e9 pr\u00e9cise, pas un acte d\u2019adoration ni un \u00e9tat de d\u00e9tresse.",
        axe1_verset: "Le mot All\u0101h appara\u00eet comme compl\u00e9ment d\u2019idafa de nasru \u2014 il identifie la source du secours. Le champ lexical est celui de l\u2019intervention divine : Dieu est celui qui secourt. Le nom propre est la mani\u00e8re la plus directe d\u2019identifier cette source. Les autres mots du verset (secours, ouverture) sont des actes qui \u00e9manent de cette source identifi\u00e9e.",
        axe2_voisins: "Au verset 2, All\u0101h r\u00e9appara\u00eet dans d\u012bni ll\u0101hi (la voie de Dieu). Au verset 3, rabbika (ton Seigneur) et le pronom -hu (Lui) renvoient \u00e0 la m\u00eame identit\u00e9. La sourate enti\u00e8re tourne autour de Dieu comme source du secours, destinataire de la glorification, et celui qui accueille le retour. Le nom propre au verset 1 pose cette identit\u00e9 centrale.",
        axe3_sourate: "La sourate attribue \u00e0 Dieu le secours, la voie dans laquelle les gens entrent, et la qualit\u00e9 d\u2019accueillir le retour. Dieu est le sujet implicite de toute la sourate. Son identification par le nom propre au verset 1 est le point de d\u00e9part.",
        axe4_coherence: "Allah est utilis\u00e9 2851 fois dans le Coran comme nom propre de la Divinit\u00e9. Le nom est toujours en position d\u2019identit\u00e9 \u2014 il d\u00e9signe, il n\u2019agit pas ni ne d\u00e9crit. La construction nasru ll\u0101hi (le secours de Dieu) est parall\u00e8le \u00e0 d\u2019autres constructions coraniques : amru ll\u0101hi (le commandement de Dieu, 7:54), ra\u1e25matull\u0101hi (la mis\u00e9ricorde de Dieu, 2:218).",
        axe5_frequence: "L\u2019identification de Dieu comme source du secours place la mission humaine dans un cadre plus large : les \u00eatres humains ne sont pas seuls dans leur effort de justice \u2014 Dieu les secourt. Cette identification rappelle que la mission du khalifa s\u2019inscrit dans une relation avec la Divinit\u00e9."
      },
      "Adoration/D\u00e9votion": { status: "nul", senses: ["adorer", "faire adorer", "se d\u00e9vouer au culte", "diviniser"], proof_ctx: "L\u2019adoration est l\u2019acte du fid\u00e8le dirig\u00e9 vers Dieu. Or ici le mot est un nom propre en position de compl\u00e9ment d\u2019idafa \u2014 il identifie, il ne d\u00e9crit pas un acte d\u2019adoration." },
      "D\u00e9tresse": { status: "nul", senses: ["\u00eatre perplexe", "se lamenter"], proof_ctx: "La d\u00e9tresse est un \u00e9tat int\u00e9rieur de confusion. Aucun rapport avec le nom propre en position de source du secours." },
      "Refuge/Protection": { status: "nul", senses: ["chercher refuge", "prot\u00e9ger", "demeurer"], proof_ctx: "Le refuge est un mouvement vers un protecteur. Le mot ici est un nom propre identifiant, pas un acte de chercher refuge." },
      "Domination": { status: "nul", senses: ["asservir"], proof_ctx: "L\u2019asservissement est un acte de soumettre l\u2019autre. Hors sujet pour un nom propre en position de compl\u00e9ment d\u2019idafa." }
    }
  };

  // --- fth ---
  const fth_axes = {
    sense_chosen: "ouverture",
    concept_chosen: "Ouverture/Victoire",
    concepts: {
      "Ouverture/Victoire": {
        status: "retenu",
        senses: ["ouvrir", "conqu\u00eate", "victoire", "cl\u00e9"],
        proof_ctx: "Le sens retenu est \u00ab Ouverture/Victoire \u00bb. Le mot al-fat\u1e25u porte l\u2019article al- (l\u2019ouverture connue, identifiable) et est au nominatif, coordonn\u00e9 au secours. L\u2019ouverture est l\u2019acte de donner acc\u00e8s \u00e0 ce qui \u00e9tait ferm\u00e9 \u2014 c\u2019est directionnel vers l\u2019int\u00e9rieur rendu accessible. C\u2019est le seul groupe de sens pour cette racine, attest\u00e9 par les sources \u00e9tymologiques comme sens fondamental.",
        axe1_verset: "Le verset associe l\u2019ouverture au secours de Dieu. Les deux arrivent ensemble (coordonn\u00e9s par wa). Le champ lexical est coh\u00e9rent : le secours apporte l\u2019aide, l\u2019ouverture apporte l\u2019acc\u00e8s. L\u2019un est le moyen (le secours), l\u2019autre est le r\u00e9sultat (ce qui \u00e9tait ferm\u00e9 s\u2019ouvre). L\u2019ouverture compl\u00e8te le secours \u2014 quand Dieu secourt, ce qui bloquait se d\u00e9verrouille.",
        axe2_voisins: "Le verset 2 montre que l\u2019ouverture se manifeste concr\u00e8tement : les gens entrent (yadkhul\u016bna). Le verbe \u00ab entrer \u00bb est la cons\u00e9quence directe de \u00ab l\u2019ouverture \u00bb \u2014 on entre quand la porte s\u2019ouvre. Le verset 3 demande la glorification \u2014 c\u2019est la r\u00e9ponse \u00e0 l\u2019ouverture re\u00e7ue. La s\u00e9quence ouverture \u2192 entr\u00e9e \u2192 glorification est logiquement parfaite.",
        axe3_sourate: "La sourate d\u00e9crit un moment de basculement. L\u2019ouverture est le passage de la fermeture (blocage, opposition) \u00e0 l\u2019acc\u00e8s (les gens peuvent entrer). Ce passage est le c\u0153ur du basculement d\u00e9crit par la sourate. L\u2019ouverture rend possible l\u2019entr\u00e9e massive du verset 2.",
        axe4_coherence: "Le Coran utilise la racine f-t-\u1e25 en 48:1 : \u00ab Nous t\u2019avons ouvert une ouverture manifeste \u00bb (inn\u0101 fata\u1e25n\u0101 laka fat\u1e25an mub\u012bn\u0101). L\u2019ouverture dans le Coran est ce qui rend accessible ce qui \u00e9tait ferm\u00e9. En 7:89, Dieu est qualifi\u00e9 de \u00ab meilleur de ceux qui ouvrent \u00bb (khayr al-f\u0101ti\u1e25\u012bn) \u2014 celui qui tranche et d\u00e9verrouille les situations. Le fat\u1e25 coranique est toujours un moment de passage d\u00e9cisif.",
        axe5_frequence: "L\u2019ouverture est ce qui permet \u00e0 la mission humaine de justice de se r\u00e9aliser. Quand ce qui bloquait l\u2019avancement de la justice s\u2019ouvre, les gens peuvent y acc\u00e9der massivement. L\u2019ouverture est le d\u00e9blocage des obstacles qui emp\u00eachaient la civilisation de justice de s\u2019\u00e9tendre. Le texte montre que c\u2019est Dieu qui ouvre \u2014 l\u2019ouverture d\u00e9pend du secours divin."
      }
    }
  };

  // INSERT verse_word_analyses
  const vwa1 = [
    { verse_id, word_key: 'jya', sense_chosen: 'venir', analysis_axes: jya_axes, position: 2 },
    { verse_id, word_key: 'nsr', sense_chosen: 'secours', analysis_axes: nsr_axes, position: 3 },
    { verse_id, word_key: 'alh', sense_chosen: 'divinit\u00e9', analysis_axes: alh_axes, position: 4 },
    { verse_id, word_key: 'fth', sense_chosen: 'ouverture', analysis_axes: fth_axes, position: 5 },
  ];

  const { data: inserted, error: e1 } = await supabase.from('verse_word_analyses').insert(vwa1).select();
  if (e1) { console.error('Error inserting vwa v1:', e1); return; }
  console.log('Inserted', inserted.length, 'verse_word_analyses for v1');

  // UPDATE verse_analyses
  const translation_arab = "Quand vient le secours de Dieu et l'ouverture";
  const translation_explanation = "\u00a7DEMARCHE\u00a7\n\nLe verset s\u2019ouvre avec la particule temporelle **idh\u0101** (quand/lorsque), qui introduit une condition temporelle \u2014 elle annonce un moment pr\u00e9cis. Le verbe **j\u0101\u2019a** est \u00e0 l\u2019accompli (une forme qui dit que l\u2019action est termin\u00e9e, achev\u00e9e). Utilis\u00e9 avec idh\u0101, cette combinaison cr\u00e9e une certitude si forte que l\u2019\u00e9v\u00e9nement est pr\u00e9sent\u00e9 comme d\u00e9j\u00e0 accompli, bien qu\u2019il d\u00e9crive un moment futur ou en train de se r\u00e9aliser.\n\nLe mot **na\u1e63ru** est un masdar (nom d\u2019action \u2014 le fait m\u00eame de secourir) au nominatif, rattach\u00e9 \u00e0 **All\u0101hi** par une idafa (quand deux mots sont li\u00e9s pour dire que le premier appartient au second) \u2014 litt\u00e9ralement \u00ab le fait-de-secourir de Dieu \u00bb. C\u2019est Dieu qui est la source du secours.\n\nLe mot **al-fat\u1e25u** porte l\u2019article d\u00e9fini al- (ce qui montre que cette ouverture est connue, identifiable, attendue) et est au nominatif, coordonn\u00e9 \u00e0 na\u1e63ru par la conjonction wa (et). Les deux r\u00e9alit\u00e9s \u2014 le secours et l\u2019ouverture \u2014 arrivent ensemble comme un seul \u00e9v\u00e9nement. D\u2019apr\u00e8s les sources \u00e9tymologiques (Lane\u2019s Arabic-English Lexicon, Edward Lane, 1863), la racine f-t-\u1e25 d\u00e9signe l\u2019acte de donner acc\u00e8s \u00e0 ce qui \u00e9tait ferm\u00e9.\n\n\u00a7JUSTIFICATION\u00a7\n\n**vient** \u2014 Le sens retenu est \u00ab Venue \u00bb. Le mot \u00ab vient \u00bb est choisi car il exprime l\u2019arriv\u00e9e d\u2019un \u00e9v\u00e9nement de mani\u00e8re simple et directe. L\u2019alternative \u00ab arrive \u00bb a \u00e9t\u00e9 consid\u00e9r\u00e9e mais \u00ab vient \u00bb est plus naturel avec la structure temporelle \u00ab quand vient \u00bb.\n\n**secours** \u2014 Le sens retenu est \u00ab Secours/Victoire \u00bb. Le mot \u00ab secours \u00bb est choisi car il rend le masdar (l\u2019acte de venir en aide) de mani\u00e8re directe et forte. L\u2019alternative \u00ab aide \u00bb est plus faible \u2014 le secours implique une intervention d\u00e9cisive dans une situation de besoin. L\u2019alternative \u00ab victoire \u00bb est \u00e9cart\u00e9e car le masdar na\u1e63r d\u00e9signe l\u2019acte d\u2019aider, pas le r\u00e9sultat final de l\u2019emporter.\n\n**ouverture** \u2014 Le sens retenu est \u00ab Ouverture/Victoire \u00bb. Le mot \u00ab ouverture \u00bb est choisi car il rend le sens premier de la racine : donner acc\u00e8s \u00e0 ce qui \u00e9tait ferm\u00e9. L\u2019alternative \u00ab conqu\u00eate \u00bb est \u00e9cart\u00e9e car c\u2019est une interpr\u00e9tation \u2014 le texte dit \u00ab l\u2019ouverture \u00bb sans pr\u00e9ciser de quoi. L\u2019alternative \u00ab victoire \u00bb est \u00e9cart\u00e9e car le texte distingue nettement na\u1e63ru (secours) et fat\u1e25u (ouverture) \u2014 ce sont deux r\u00e9alit\u00e9s diff\u00e9rentes coordonn\u00e9es par \u00ab et \u00bb.";

  const segments = [
    { fr: "quand", phon: "idh\u0101", arabic: "\u0625\u0650\u0630\u064e\u0627", position: 1, word_key: null, is_particle: true },
    { fr: "vient", pos: "verbe", phon: "j\u0101\u2019a", arabic: "\u062c\u064e\u0622\u0621\u064e", position: 2, word_key: "jya", is_particle: false, sense_retenu: "venir" },
    { fr: "le secours", pos: "nom", phon: "na\u1e63ru", arabic: "\u0646\u064e\u0635\u0652\u0631\u064f", position: 3, word_key: "nsr", is_particle: false, sense_retenu: "secourir" },
    { fr: "de Dieu", pos: "nom", phon: "all\u0101hi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", position: 4, word_key: "alh", is_particle: false, sense_retenu: "divinit\u00e9" },
    { fr: "et l'ouverture", pos: "nom", phon: "wal-fat\u1e25u", arabic: "\u0648\u0671\u0644\u0652\u0641\u064e\u062a\u0652\u062d\u064f", position: 5, word_key: "fth", is_particle: false, sense_retenu: "ouvrir" }
  ];

  const { error: e2 } = await supabase.from('verse_analyses').update({
    translation_arab,
    translation_explanation,
    segments
  }).eq('id', 6577);
  if (e2) console.error('Error updating verse_analyses v1:', e2);
  else console.log('Updated verse_analyses for v1');

  console.log('\nVERSET 110:1 \u2014 TERMIN\u00c9');
  console.log('  jya (\u062c \u064a \u0621) \u2192 sens "Venue" \u2192 mot fran\u00e7ais "vient"');
  console.log('  nsr (\u0646 \u0635 \u0631) \u2192 sens "Secours/Victoire" \u2192 mot fran\u00e7ais "secours"');
  console.log('  alh (\u0627 \u0644 \u0647) \u2192 sens "Divinit\u00e9" \u2192 mot fran\u00e7ais "Dieu"');
  console.log('  fth (\u0641 \u062a \u062d) \u2192 sens "Ouverture/Victoire" \u2192 mot fran\u00e7ais "ouverture"');
  console.log('  Traduction : "' + translation_arab + '"');
}
main().catch(console.error);
