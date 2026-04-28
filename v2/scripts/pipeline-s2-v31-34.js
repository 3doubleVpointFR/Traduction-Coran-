const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY
);

// Load concepts from JSON
const concepts = require('./s2_v31-40_concepts.json');

// Helper to get senses for a concept from the concepts JSON
function getSenses(wordKey, conceptName) {
  const entry = concepts[wordKey];
  if (!entry) return [];
  return entry.meanings
    .filter(m => m.concept === conceptName)
    .map(m => m.sense);
}

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 31 A 34
// verse_id=38 (2:31), verse_id=39 (2:32), verse_id=40 (2:33), verse_id=41 (2:34)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:31
  // verse_id=38
  // =====================================================
  31: {
    verse_id: 38,
    analysis_id: null,
    translation_arab: "Et Il enseigna a Adam les noms, tous. Puis Il les presenta aux anges et dit : informez-Moi des noms de ceux-ci, si vous etes veridiques.",
    full_translation: "Et Il apprit a Adam tous les noms, puis Il les presenta aux Anges et dit : \"Informez-Moi des noms de ceux-ci, si vous etes veridiques.\"",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verbe **\u2018allama** est un accompli forme II de la racine e-l-m avec deux objets directs : Adam (premier objet) et al-asma\u2019a (deuxieme objet, les noms). La forme II est intensive-causative \u2014 elle signifie \u00ab faire savoir, enseigner en profondeur \u00bb. Le mot **al-asma\u2019a** est le pluriel defini de ism (nom) au cas accusatif. Le mot **kullaha** est un nom au cas accusatif avec le pronom 3FP (tous eux \u2014 renforce l\u2019exhaustivite : TOUS les noms sans exception). Le mot **thumma** marque une sequence temporelle (puis, ensuite). Le verbe **\u2018aradahum** est un accompli de la racine e-r-d (il les presenta \u2014 il montra les choses nommees). Le pronom -hum est masculin pluriel, ce qui indique que les choses presentees sont des etres doues de raison. Le verbe **qala** est un accompli de q-w-l (il dit). Le verbe **anbi\u2019uni** est un imperatif forme IV de n-b-a avec le pronom 1S (informez-moi). Le mot **bi-asma\u2019i** est le pluriel de ism au genitif avec la preposition bi (des noms de). Le mot **ha\u2019ula\u2019i** est un demonstratif de proximite (ceux-ci \u2014 les choses presentees). Le mot **in** est une particule de condition (si). Le verbe **kuntum** est un accompli de k-w-n (vous etiez/etes). Le mot **sadiqina** est un participe actif pluriel de s-d-q (veridiques \u2014 ceux qui disent vrai).

\u00a7JUSTIFICATION\u00a7
**enseigna** \u2014 Le sens retenu est \u00ab Savoir/Connaissance \u00bb. La forme II de e-l-m signifie \u00ab faire savoir, enseigner \u00bb. L\u2019alternative \u00ab informer \u00bb est ecartee car elle implique une transmission ponctuelle \u2014 la forme II indique un enseignement approfondi.

**les noms** \u2014 Le sens retenu est \u00ab Nom/Identification \u00bb. Le mot asma\u2019 designe les noms qui permettent d\u2019identifier les choses. L\u2019alternative \u00ab renommee \u00bb est ecartee car le contexte parle de designation, pas de reputation.

**tous** \u2014 Le sens retenu est \u00ab Totalite \u00bb. Le mot kullaha renforce l\u2019exhaustivite \u2014 tous les noms sans exception. L\u2019alternative \u00ab chaque \u00bb est ecartee car kull avec le pronom suffixe signifie \u00ab la totalite \u00bb.

**presenta** \u2014 Le sens retenu est \u00ab Presentation/Exposition \u00bb. Le verbe \u2018arada signifie montrer, exposer. L\u2019alternative \u00ab proposer \u00bb est ecartee car il ne s\u2019agit pas d\u2019une offre mais d\u2019une demonstration.

**les anges** \u2014 Le sens retenu est \u00ab Ange/Messager \u00bb. Le mot mala\u2019ika designe les etres celestes, messagers de Dieu.

**dit** \u2014 Le sens retenu est \u00ab Parole/Enonciation \u00bb. Le verbe qala est l\u2019acte de prononcer une parole.

**informez** \u2014 Le sens retenu est \u00ab Information/Nouvelle \u00bb. La forme IV de n-b-a signifie \u00ab informer, annoncer \u00bb. L\u2019alternative \u00ab prophetiser \u00bb est ecartee car le contexte n\u2019est pas prophetique.

**etiez** \u2014 Le sens retenu est \u00ab Etre/Existence \u00bb. Le verbe kana est le verbe incomplet par excellence.

**veridiques** \u2014 Le sens retenu est \u00ab Verite/Sincerite \u00bb. Le participe sadiqina designe ceux qui disent vrai. L\u2019alternative \u00ab ami sincere \u00bb est ecartee car le contexte parle de veracite.

\u00a7CRITIQUE\u00a7
**apprit vs enseigna** \u2014 Les traductions courantes donnent \u00ab apprit \u00bb pour \u2018allama. En francais, \u00ab apprendre a quelqu\u2019un \u00bb est familier \u2014 le registre soutenu utilise \u00ab enseigner \u00bb. La forme II de e-l-m est causative-intensive, ce qui correspond a \u00ab enseigner \u00bb (faire savoir en profondeur) plutot qu\u2019a \u00ab apprendre \u00bb.
**informez-Moi vs dites-moi** \u2014 Les traductions courantes donnent \u00ab dites-moi \u00bb. Le verbe anbi\u2019uni vient de n-b-a (informer, annoncer) et non de q-w-l (dire). La nuance est importante : Dieu ne demande pas aux anges de \u00ab dire \u00bb mais d\u2019\u00ab informer \u00bb \u2014 ce qui implique un savoir prealable que les anges n\u2019ont pas.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 1 },
      { fr: "enseigna", pos: "verbe", phon: "\u2018allama", arabic: "\u0639\u064e\u0644\u0651\u064e\u0645\u064e", word_key: "elm", is_particle: false, sense_retenu: "enseigner", position: 2 },
      { fr: "Adam", pos: "nom_propre", phon: "\u0101dama", arabic: "\u0621\u064e\u0627\u062f\u064e\u0645\u064e", is_particle: false, position: 3 },
      { fr: "les noms", pos: "nom", phon: "al-asm\u0101\u2019a", arabic: "\u0627\u0644\u0652\u0623\u064e\u0633\u0652\u0645\u064e\u0627\u0653\u0621\u064e", word_key: "smw", is_particle: false, sense_retenu: "nom", position: 4 },
      { fr: "tous", pos: "nom", phon: "kullah\u0101", arabic: "\u0643\u064f\u0644\u0651\u064e\u0647\u064e\u0627", word_key: "kll", is_particle: false, sense_retenu: "tout", position: 5 },
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", is_particle: true, position: 6 },
      { fr: "les presenta", pos: "verbe", phon: "\u2018aradahum", arabic: "\u0639\u064e\u0631\u064e\u0636\u064e\u0647\u064f\u0645\u0652", word_key: "erd", is_particle: false, sense_retenu: "presenter", position: 7 },
      { fr: "aux", phon: "\u2018al\u0101", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 8 },
      { fr: "anges", pos: "nom", phon: "al-mal\u0101\u2019ikati", arabic: "\u0627\u0644\u0652\u0645\u064e\u0644\u064e\u0640\u0670\u0653\u0626\u0650\u0643\u064e\u0629\u0650", word_key: "mlk", is_particle: false, sense_retenu: "ange", position: 9 },
      { fr: "et dit", pos: "verbe", phon: "fa-q\u0101la", arabic: "\u0641\u064e\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 10 },
      { fr: "informez-Moi", pos: "verbe", phon: "anbi\u2019\u016bn\u012b", arabic: "\u0623\u064e\u0646\u06e2\u0628\u0650\u0640\u0654\u0640\u064f\u0648\u0646\u0650\u0649", word_key: "nba", is_particle: false, sense_retenu: "informer", position: 11 },
      { fr: "des noms", pos: "nom", phon: "bi-asm\u0101\u2019i", arabic: "\u0628\u0650\u0623\u064e\u0633\u0652\u0645\u064e\u0627\u0653\u0621\u0650", word_key: "smw", is_particle: false, sense_retenu: "nom", position: 12 },
      { fr: "de ceux-ci", phon: "h\u0101\u2019ul\u0101\u2019i", arabic: "\u0647\u064e\u0640\u0670\u0653\u0624\u064f\u0644\u064e\u0627\u0653\u0621\u0650", is_particle: true, position: 13 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 14 },
      { fr: "vous etiez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064f\u0646\u062a\u064f\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 15 },
      { fr: "veridiques", pos: "participe_actif", phon: "s\u0101diq\u012bna", arabic: "\u0635\u064e\u0640\u0670\u062f\u0650\u0642\u0650\u064a\u0646\u064e", word_key: "sdq", is_particle: false, sense_retenu: "veridique", position: 16 }
    ],
    words: [
      {
        word_key: "elm", position: 2, sense_chosen: "enseigner",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe 'allama est un accompli forme II de la racine e-l-m avec deux objets directs. Le Lane's donne pour la forme II (ta'lim) : he made him to know, he taught him. La forme II est causative-intensive \u2014 elle signifie faire savoir en profondeur, pas simplement informer. Le premier objet est Adam (celui a qui on enseigne), le second est al-asma'a (ce qu'on enseigne : les noms). L'enseignement divin est direct et complet \u2014 pas par intermediaire.",
              axe1_verset: "Le verbe 'allama ouvre le verset et pose l'acte fondateur de ce passage : Dieu enseigne a Adam les noms. L'enseignement precede la presentation aux anges et le defi qui suit. C'est parce qu'Adam a recu cet enseignement qu'il pourra repondre au defi que les anges ne pourront pas relever. La forme II (intensive-causative) indique que l'enseignement est profond et complet \u2014 ce n'est pas une information superficielle mais une connaissance intime des noms.",
              axe2_voisins: "Au verset 30, les anges avaient questionne le choix de Dieu de placer un khalifa sur terre. Le verset 31 repond a cette objection par une demonstration concrete : Dieu enseigne a Adam ce que les anges ne savent pas. Le verset 32 confirmera l'ignorance des anges ('pas de savoir pour nous sauf ce que Tu nous as enseigne'). L'enseignement d'Adam est la preuve que le khalifa a des capacites que les anges n'ont pas.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine e-l-m de maniere intensive \u2014 plus de 30 occurrences. Le savoir est le critere de legitimite du khalifa. La sourate distingue ceux qui savent de ceux qui ne savent pas : les fils d'Isra'il savaient mais ont agi contre leur savoir (2:75, 2:146), les hypocrites ne savent pas (2:13). L'enseignement des noms est le fondement de la mission du khalifa.",
              axe4_coherence: "Le Coran utilise la forme II de e-l-m ('allama) pour decrire l'enseignement divin dans plusieurs passages (55:2-4, 96:4-5). En 55:2-4, Dieu enseigne le Coran, cree l'humain, lui enseigne l'expression. En 96:4-5, Dieu enseigne par la plume, enseigne a l'humain ce qu'il ne savait pas. L'enseignement divin est toujours presente comme un acte de generosite qui distingue l'humain des autres creatures.",
              axe5_frequence: "La racine e-l-m apparait 854 fois dans le Coran. C'est l'une des racines les plus frequentes, ce qui montre l'importance capitale du savoir dans le message coranique. Pour la mission du khalifa, le savoir est la condition premiere \u2014 sans enseignement divin, pas de succession possible. Le khalifa est celui qui sait les noms, c'est-a-dire qui comprend la realite des choses."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere"],
              proof_ctx: "Le concept de marque/signe est un sens derive de e-l-m (le signe qui permet de reconnaitre). Le contexte utilise clairement la forme II (enseigner), pas le sens de marquer ou signaler."
            },
            "Monde/Creation": {
              status: "nul",
              senses: ["monde", "les mondes", "univers"],
              proof_ctx: "Le monde (al-'alamin) est un nom derive de e-l-m designe l'ensemble des creatures. Le contexte utilise la forme verbale 'allama (enseigner), pas le nom 'alam (monde)."
            }
          }
        }
      },
      {
        word_key: "smw", position: 4, sense_chosen: "noms",
        analysis_axes: {
          concept_chosen: "Nom/Identification",
          concepts: {
            "Nom/Identification": {
              status: "retenu",
              senses: ["nom", "nommer", "prononcer le nom de Dieu", "se nommer", "renommee", "nomme"],
              proof_ctx: "Le mot al-asma'a est le pluriel defini de ism au cas accusatif, de la racine s-m-w. Le Lane's donne pour ism : a name, an appellation, that by which a thing or person is known. Le nom est l'outil d'identification \u2014 il cree un pont entre la chose et celui qui la connait. Le pluriel defini avec l'article al- et le renforcement kullaha (tous) indique l'exhaustivite : la totalite des noms, sans exception.",
              axe1_verset: "Le mot al-asma'a est l'objet direct de 'allama (enseigna) et le complement de anbi'uni (informez-Moi des noms). Les noms sont le contenu de l'enseignement divin et l'objet du defi aux anges. Toute la scene tourne autour des noms : Dieu enseigne les noms, presente les choses nommees, demande aux anges de citer les noms. Celui qui connait les noms connait la realite des choses \u2014 c'est la these du verset.",
              axe2_voisins: "Les noms seront de nouveau mentionnes aux versets 33 (Adam les informe de leurs noms) et 33 encore (informez-Moi de l'invisible des cieux et de la terre). Le passage 31-33 est structure autour des noms : enseignement, defi, reponse. Les noms sont le fil conducteur de la demonstration de la legitimite du khalifa.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine s-m-w dans plusieurs sens : les noms (2:31, 2:33), le ciel (2:22, 2:29, 2:33, 2:59, 2:144, etc.). La double signification de la racine (nommer/ciel) est un jeu semantique : les noms viennent d'en haut, l'acte de nommer est un acte celeste que Dieu transmet a Adam.",
              axe4_coherence: "Le Coran mentionne les noms divins dans plusieurs passages (7:180, 17:110, 20:8, 59:24). En 7:180, Dieu possede les plus beaux noms. Les noms sont un theme central du Coran \u2014 nommer c'est connaitre, et connaitre c'est avoir autorite sur ce qu'on nomme.",
              axe5_frequence: "La racine s-m-w apparait 381 fois dans le Coran, principalement pour le ciel. L'usage pour les noms est plus rare, ce qui rend le passage 2:31-33 d'autant plus significatif. Pour la mission du khalifa, connaitre les noms est la capacite distinctive qui le differencie des anges."
            },
            "Ciel/Ce qui couvre": {
              status: "nul",
              senses: ["ciel", "toit", "nuage", "pluie"],
              proof_ctx: "Le ciel est le sens le plus frequent de s-m-w dans le Coran. Ici le contexte est explicitement celui des noms (al-asma') et non du ciel (al-sama'). La forme grammaticale est differente : asma' (pluriel de ism = nom) vs sama' (ciel)."
            },
            "Hauteur/Elevation": {
              status: "nul",
              senses: ["etre haut", "se dresser", "monter"],
              proof_ctx: "La hauteur est le sens etymologique de s-m-w. Le contexte utilise le derive ism (nom), pas le sens premier de hauteur."
            }
          }
        }
      },
      {
        word_key: "kll", position: 5, sense_chosen: "tous",
        analysis_axes: {
          concept_chosen: "Totalite",
          concepts: {
            "Totalite": {
              status: "retenu",
              senses: ["tout", "chaque", "totalite"],
              proof_ctx: "Le mot kullaha est compose de kull (totalite) et du pronom suffixe -ha (3FP, renvoyant a al-asma' qui est feminin pluriel). Le Lane's donne pour kull : the whole, all, every. La construction kull + pronom suffixe indique la totalite sans exception \u2014 TOUS les noms. C'est un renforcement emphatique : pas certains noms, pas la plupart, mais la totalite.",
              axe1_verset: "Le mot kullaha renforce al-asma'a pour souligner l'exhaustivite de l'enseignement divin. Dieu n'a pas enseigne a Adam quelques noms \u2014 Il lui a enseigne TOUS les noms. Cette exhaustivite est cruciale pour la demonstration : si Adam ne connaissait que certains noms, le defi aux anges n'aurait pas la meme portee. La totalite de l'enseignement fonde la totalite de la legitimite du khalifa.",
              axe2_voisins: "L'exhaustivite de l'enseignement (tous les noms) contraste avec l'ignorance des anges au verset 32 (pas de savoir pour nous). Le contraste est total : Adam sait TOUT, les anges ne savent RIEN de ce domaine. Cette opposition absolue est le coeur de la demonstration.",
              axe3_sourate: "La sourate al-Baqarah utilise kull frequemment pour marquer l'exhaustivite des commandements divins et des consequences. En 2:20, Dieu est sur toute chose omnipotent. En 2:29, Il a cree pour vous tout ce qui est sur la terre. La totalite est un attribut divin que Dieu transmet ici a Adam.",
              axe4_coherence: "Le Coran utilise kull plus de 370 fois. C'est un marqueur d'exhaustivite divine \u2014 Dieu sait tout (2:29), cree tout (6:101), est maitre de tout (3:26). Quand kull est associe a un enseignement divin, il indique que la transmission est complete et parfaite.",
              axe5_frequence: "Pour la mission du khalifa, la totalite de l'enseignement est la base de son autorite. Le khalifa ne connait pas partiellement \u2014 il a recu la connaissance de TOUS les noms. Cette totalite le distingue des anges qui n'ont recu qu'un savoir partiel."
            }
          }
        }
      },
      {
        word_key: "erd", position: 7, sense_chosen: "presenter",
        analysis_axes: {
          concept_chosen: "Presentation/Exposition",
          concepts: {
            "Presentation/Exposition": {
              status: "retenu",
              senses: ["montrer", "proposer", "exposer", "parler indirectement"],
              proof_ctx: "Le verbe 'aradahum est un accompli de la racine e-r-d avec le pronom suffixe -hum (3MP). Le Lane's donne pour 'arada : he showed, exhibited, displayed, presented. Le pronom -hum est masculin pluriel, ce qui est remarquable car il indique que les choses nommees sont des etres doues de raison (pas -ha feminin). L'acte de presenter est une mise en scene \u2014 Dieu expose les choses devant les anges pour les mettre a l'epreuve.",
              axe1_verset: "Le verbe 'aradahum est l'acte intermediaire entre l'enseignement d'Adam et le defi aux anges. Dieu enseigne d'abord, puis presente les choses, puis demande aux anges de nommer. La presentation est la mise en place du test : les anges voient les choses mais ne peuvent pas les nommer. Le pronom masculin pluriel -hum indique que ce qui est presente, ce sont des etres doues de raison \u2014 pas des objets inertes.",
              axe2_voisins: "La presentation aux anges fait suite a l'enseignement d'Adam (v31) et precede l'aveu d'ignorance des anges (v32). C'est l'etape de la demonstration \u2014 le passage de la theorie (enseignement) a la pratique (test). Le verset 30 avait pose la question des anges \u2014 les versets 31-33 y repondent par une demonstration en actes.",
              axe3_sourate: "La sourate al-Baqarah contient plusieurs scenes de presentation et de mise a l'epreuve. Les fils d'Isra'il seront mis a l'epreuve par le veau (2:51), par les commandements (2:63), par les paroles (2:75). La presentation des choses aux anges inaugure ce schema de mise a l'epreuve qui traverse toute la sourate.",
              axe4_coherence: "Le Coran utilise la racine e-r-d dans le sens de presenter, montrer, exposer dans plusieurs passages. En 18:48, les creatures seront presentees devant Dieu. En 40:46, le feu est presente aux gens de Pharaon. La presentation est toujours un acte qui revele la verite \u2014 ce qui est cache devient visible.",
              axe5_frequence: "La racine e-r-d apparait 79 fois dans le Coran. Pour la mission du khalifa, la presentation est le moment de verite \u2014 le khalifa est celui qui peut nommer ce que les autres ne peuvent que voir. La connaissance depasse la simple observation."
            },
            "Largeur/Etendue": {
              status: "nul",
              senses: ["etre large", "large"],
              proof_ctx: "La largeur est un sens physique de e-r-d (la largeur d'une chose). Le contexte utilise le sens de presenter, montrer \u2014 pas de largeur physique."
            }
          }
        }
      },
      {
        word_key: "mlk", position: 9, sense_chosen: "anges",
        analysis_axes: {
          concept_chosen: "Ange/Messager",
          concepts: {
            "Ange/Messager": {
              status: "retenu",
              senses: ["ange", "messager", "message"],
              proof_ctx: "Le mot al-mala'ikati est le pluriel defini de malak au cas genitif (apres la preposition 'ala). Le Lane's donne pour malak : a messenger, an angel. Les anges sont les messagers de Dieu, les etres celestes qui executent Ses ordres. Le genitif avec 'ala indique la direction (vers les anges = presentes aux anges). Les anges sont ici le public du test \u2014 ceux a qui Dieu montre les choses pour reveler leur ignorance.",
              axe1_verset: "Les anges sont les destinataires de la presentation et du defi. Dieu leur montre les choses et leur demande de les nommer. L'impossibilite pour les anges de repondre (v32) prouve que le khalifa a des capacites qu'ils n'ont pas. Les anges sont ici la reference de comparaison \u2014 malgre leur proximite avec Dieu, ils ne connaissent pas les noms.",
              axe2_voisins: "Les anges avaient objecte au verset 30 (Vas-Tu y placer quelqu'un qui y corrompt ?). Les versets 31-33 sont la reponse divine a cette objection. Les anges sont passes du role de questionneur au role de questionne \u2014 c'est un renversement de situation. Leur incapacite a nommer prouve qu'ils avaient tort de questionner le choix de Dieu.",
              axe3_sourate: "La sourate al-Baqarah mentionne les anges dans plusieurs passages (2:30-34, 2:98, 2:102, 2:161, 2:177, 2:210, 2:248, 2:285). Les anges sont presentes comme des etres obeissants mais au savoir limite. La scene des noms etablit la hierarchie : Dieu sait tout, le khalifa sait les noms, les anges savent ce que Dieu leur enseigne.",
              axe4_coherence: "Le Coran utilise la racine m-l-k pour les anges dans plus de 200 passages. Les anges sont toujours presentes comme des serviteurs de Dieu qui ne desobeissent pas (66:6). La scene 2:31 est unique car c'est la seule ou les anges sont mis en echec par un humain \u2014 ce qui fonde la legitimite du khalifa.",
              axe5_frequence: "La racine m-l-k apparait 206 fois dans le Coran, couvrant trois concepts : ange, roi, possession. Pour la mission du khalifa, les anges sont les temoins de sa legitimite. Ils se prosterneront devant Adam au verset 34, reconnaissant par la la superiorite de celui qui connait les noms."
            },
            "Royaute/Souverainete": {
              status: "nul",
              senses: ["roi", "royaume", "regne", "souverain"],
              proof_ctx: "La royaute est un autre sens de m-l-k. Le contexte utilise al-mala'ika (les anges), pas al-malik (le roi) ou al-mulk (la royaute)."
            },
            "Possession/Autorite": {
              status: "nul",
              senses: ["posseder", "maitre", "propriete"],
              proof_ctx: "La possession est un sens de m-l-k (posseder, maitriser). Le contexte designe les etres celestes (anges), pas un rapport de possession."
            }
          }
        }
      },
      {
        word_key: "qwl", position: 10, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Enonciation",
          concepts: {
            "Parole/Enonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe fa-qala est un accompli de la racine q-w-l avec la particule fa (alors, puis). Le Lane's donne : he said, he spoke, he uttered. La particule fa indique la consequence ou la sequence rapide \u2014 puis Il dit. Le sujet est Dieu, l'interlocuteur sont les anges. La parole divine est ici un defi lance aux anges : informez-Moi.",
              axe1_verset: "Le verbe qala introduit le defi divin aux anges. Apres avoir enseigne a Adam et presente les choses, Dieu parle pour mettre les anges a l'epreuve. La parole est l'instrument du test \u2014 c'est par la parole que Dieu revele l'ignorance des anges. La structure du verset est : action silencieuse (enseigner, presenter), puis parole (dire : informez-Moi).",
              axe2_voisins: "La parole divine structure les versets 30-34. Au verset 30, Dieu dit aux anges qu'Il place un khalifa. Au verset 31, Il dit informez-Moi. Au verset 33, Il dit a Adam de les informer, puis dit ne vous ai-Je pas dit que Je connais l'invisible. Chaque parole divine fait avancer la demonstration d'un cran.",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah et du Coran entier. La sourate est un dialogue permanent entre Dieu, les anges, les prophetes, les croyants et les deviants. Chaque groupe est caracterise par ce qu'il dit et par ce que Dieu lui dit.",
              axe4_coherence: "Le Coran utilise qala/qul plus de 1700 fois. C'est le verbe le plus frequent du texte. La parole est le mode principal de communication divine \u2014 Dieu parle, ordonne, interroge, repond. Le defi aux anges est un exemple de la fonction interrogative de la parole divine.",
              axe5_frequence: "La racine q-w-l apparait 1722 fois dans le Coran. Pour la mission du khalifa, la parole est l'outil de la connaissance \u2014 nommer les choses, c'est parler. Le khalifa est celui qui peut nommer ce que les anges ne peuvent que contempler en silence."
            }
          }
        }
      },
      {
        word_key: "nba", position: 11, sense_chosen: "informer",
        analysis_axes: {
          concept_chosen: "Information/Nouvelle",
          concepts: {
            "Information/Nouvelle": {
              status: "retenu",
              senses: ["informer", "nouvelle", "annoncer"],
              proof_ctx: "Le verbe anbi'uni est un imperatif forme IV de la racine n-b-a avec le pronom suffixe -ni (moi). Le Lane's donne pour forme IV (anba'a) : he informed, he told, he acquainted. L'imperatif indique un ordre divin : informez-Moi. Le -ni (moi) est Dieu Lui-meme \u2014 Dieu demande aux anges de L'informer, sachant qu'ils ne le pourront pas. C'est un defi rhetorique, pas une vraie demande d'information.",
              axe1_verset: "Le verbe anbi'uni est le coeur du defi lance aux anges. Dieu ne dit pas 'qulu' (dites) mais 'anbi'uni' (informez-Moi) \u2014 la nuance est capitale. Informer implique un savoir prealable que l'on transmet, alors que dire ne l'implique pas. En demandant aux anges d'informer, Dieu leur demande de demontrer un savoir qu'ils n'ont pas. Le defi est impossible par construction.",
              axe2_voisins: "Le verbe n-b-a reviendra au verset 33 (anbi'hum bi-asma'ihim = informe-les de leurs noms) quand Dieu ordonnera a Adam de nommer. Le meme verbe est utilise pour le defi (v31 aux anges) et pour la reponse (v33 par Adam). Adam reussit la ou les anges echouent \u2014 le meme acte d'informer distingue le khalifa des anges.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine n-b-a pour les informations importantes et les annonces divines. Le lien avec le concept de prophete (nabi, de la meme racine) est significatif : le prophete est celui qui informe de la part de Dieu. Adam, en informant les anges des noms, accomplit un acte prophetique.",
              axe4_coherence: "Le Coran utilise la racine n-b-a 160 fois, couvrant l'information, la nouvelle et la prophetie. Le lien semantique entre informer et prophetiser est essentiel : le prophete est litteralement celui qui donne des informations (naba') de la part de Dieu. Adam est le premier a informer, il est donc le premier prophete.",
              axe5_frequence: "Pour la mission du khalifa, la capacite d'informer est liee a la connaissance des noms. Le khalifa ne se contente pas de savoir \u2014 il peut transmettre ce savoir, informer. C'est la dimension communicative de la connaissance qui fonde la superiorite du khalifa sur les anges."
            },
            "Prophetie": {
              status: "peu_probable",
              senses: ["prophete", "prophetie"],
              proof_ctx: "La prophetie (nubuwwa) est un derive de n-b-a. Le contexte utilise la forme verbale anbi'uni (informez-Moi), pas le nom nabi (prophete). Cependant, le lien semantique est pertinent car Adam accomplit ici un acte prophetique."
            }
          }
        }
      },
      {
        word_key: "kwn", position: 15, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Etre/Existence",
          concepts: {
            "Etre/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kuntum est un accompli de la racine k-w-n avec le pronom 2MP (vous etiez/etes). Le Lane's donne : he was, he existed, he came to be. Le verbe kana est le verbe incomplet par excellence en arabe \u2014 il lie le sujet a un attribut. Ici kuntum sadiqina = vous etiez veridiques. La construction in kuntum (si vous etes) exprime une condition hypothetique.",
              axe1_verset: "Le verbe kuntum est dans la proposition conditionnelle in kuntum sadiqina (si vous etes veridiques). C'est la condition du defi : informez-Moi SI vous etes veridiques. Le verbe kana introduit l'etat que les anges devraient avoir pour relever le defi. La condition est irrealisable \u2014 les anges ne sont pas veridiques dans leur objection car ils ne connaissent pas les noms.",
              axe2_voisins: "Le verbe kana sera utilise de nouveau au verset 33 (kuntum taktumuna = vous cachiez). La construction se repete : kuntum + participe/adjectif. Au verset 34, kana mina al-kafirina (il etait parmi les recouvrants). Le verbe kana structure les etats et les identites dans ce passage.",
              axe3_sourate: "La racine k-w-n est la plus frequente du Coran apres q-w-l. La sourate al-Baqarah l'utilise des dizaines de fois pour etablir des etats, des identites et des conditions. Le verbe kana est l'outil grammatical de la predication en arabe coranique.",
              axe4_coherence: "Le Coran utilise kana 1390 fois. C'est le verbe fondamental de l'existence et de l'etat. Son usage dans les conditions (in kuntum = si vous etes) est un procede rhetorique frequent pour defier l'interlocuteur de prouver sa pretention.",
              axe5_frequence: "Pour la mission du khalifa, le verbe kana definit ce que les etres SONT. Le defi aux anges est : etes-vous veridiques ? La reponse est non \u2014 ils ne sont pas en position de connaitre les noms. Le khalifa est celui qui EST en position de les connaitre."
            }
          }
        }
      },
      {
        word_key: "sdq", position: 16, sense_chosen: "veridique",
        analysis_axes: {
          concept_chosen: "Verite/Sincerite",
          concepts: {
            "Verite/Sincerite": {
              status: "retenu",
              senses: ["dire vrai", "vrai", "sincere", "confirmer"],
              proof_ctx: "Le mot sadiqina est un participe actif pluriel de la racine s-d-q au cas genitif (attribut de kuntum). Le Lane's donne : he was true, he spoke truth, he was sincere. Le participe actif indique un etat permanent \u2014 ceux qui sont habituellement veridiques. La construction in kuntum sadiqina (si vous etes veridiques) remet en question la pretention des anges au verset 30.",
              axe1_verset: "Le mot sadiqina cloture le defi lance aux anges. Le verset se termine par une condition : si vous etes veridiques. Cette condition remet en question l'objection des anges au verset 30 \u2014 ils avaient dit que le khalifa corromprait. Dieu leur repond : si vous dites vrai sur la corruption du khalifa, alors vous devriez connaitre les noms. L'incapacite a nommer prouve que leur objection etait infondee.",
              axe2_voisins: "La veracite est le critere du test. Les anges sont testes sur leur sincerite \u2014 s'ils pretendent savoir que le khalifa corrompra, ils devraient aussi savoir les noms. Le verset 32 revelera qu'ils ne sont pas en position de juger car ils ne savent que ce que Dieu leur enseigne. La sincerite des anges sera restauree par leur aveu d'ignorance.",
              axe3_sourate: "La sourate al-Baqarah oppose constamment les veridiques et les menteurs. Les hypocrites pretendent croire mais mentent (2:8-10). Les fils d'Isra'il pretendent etre sur le droit chemin mais devient (2:80, 2:111). La veracite est le critere qui separe les vrais croyants des pretendants.",
              axe4_coherence: "Le Coran utilise la racine s-d-q 155 fois. En 2:177, les veridiques (sadiqin) sont ceux qui tiennent leurs engagements. En 9:119, Dieu ordonne d'etre avec les veridiques. La veracite est une qualite morale fondamentale qui aligne la parole et la realite.",
              axe5_frequence: "Pour la mission du khalifa, la veracite est la condition de la connaissance. Celui qui pretend savoir sans savoir n'est pas veridique. Le khalifa prouve sa legitimite par sa capacite a nommer \u2014 sa parole correspond a la realite des choses."
            },
            "Amitie": {
              status: "nul",
              senses: ["ami sincere"],
              proof_ctx: "L'amitie (siddiq) est un derive de s-d-q. Le contexte utilise sadiqina (veridiques), pas siddiq (ami sincere). Le sens de veracite est premier."
            },
            "Don/Aumone": {
              status: "nul",
              senses: ["aumone", "dot"],
              proof_ctx: "L'aumone (sadaqa) est un derive de s-d-q. Le contexte n'a rien a voir avec le don ou l'aumone."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:32
  // verse_id=39
  // =====================================================
  32: {
    verse_id: 39,
    analysis_id: null,
    translation_arab: "Ils dirent : Louange a Toi ! Pas de savoir pour nous sauf ce que Tu nous as enseigne. Tu es, Toi, le Savant, le Sage.",
    full_translation: "Ils dirent : \"Gloire a Toi ! Nous n'avons de savoir que ce que Tu nous as appris. Certes c'est Toi l'Omniscient, le Sage.\"",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verbe **qalu** est un accompli de q-w-l avec le pronom 3MP (ils dirent \u2014 les anges repondent). Le mot **subhanaka** est un nom verbal au cas accusatif de la racine s-b-h avec le pronom 2MS (louange a Toi \u2014 forme figee d'exclamation). Le mot **la** est une particule de negation (pas de). Le mot **\u2018ilma** est un nom au cas accusatif de la racine e-l-m (savoir). Le mot **lana** est la preposition li + pronom 1PL (pour nous). Le mot **illa** est une particule d'exception (sauf). Le mot **ma** est un pronom relatif (ce que). Le verbe **\u2018allamtana** est un accompli forme II de e-l-m avec 2MS+1PL (Tu nous as enseigne). Le mot **innaka** est une particule d'insistance + pronom 2MS (certes Toi). Le mot **anta** est un pronom personnel independant 2MS (Toi \u2014 renforcement). Le mot **al-\u2018alimu** est un participe actif defini de e-l-m (le Savant \u2014 celui qui sait). Le mot **al-hakimu** est un adjectif intensif defini de h-k-m (le Sage \u2014 celui qui juge avec sagesse).

\u00a7JUSTIFICATION\u00a7
**dirent** \u2014 Le sens retenu est \u00ab Parole/Enonciation \u00bb. Le verbe qalu est l'acte de parler.

**Louange a Toi** \u2014 Le sens retenu est \u00ab Glorification/Louange \u00bb. Le mot subhanaka est une formule de glorification qui reconnait la perfection divine. L'alternative \u00ab nager \u00bb (sens physique de s-b-h) est ecartee car subhana est une formule liturgique figee.

**savoir** \u2014 Le sens retenu est \u00ab Savoir/Connaissance \u00bb. Le mot 'ilm designe le savoir, la science.

**le Savant** \u2014 Le sens retenu est \u00ab Savoir/Connaissance \u00bb. Le participe al-'alim designe celui qui sait tout.

**le Sage** \u2014 Le sens retenu est \u00ab Sagesse \u00bb. Le mot al-hakim designe celui qui juge et agit avec sagesse. L'alternative \u00ab le Juge \u00bb est ecartee car hakim est plus large que le simple jugement.

\u00a7CRITIQUE\u00a7
**Gloire vs Louange** \u2014 Les traductions courantes donnent \u00ab Gloire a Toi \u00bb pour subhanaka. La racine s-b-h porte l'idee de nager, flotter \u2014 et par extension de se mouvoir librement, d'etre au-dessus de toute imperfection. \u00ab Louange \u00bb est plus precis que \u00ab Gloire \u00bb car subhana declare que Dieu est au-dessus de tout defaut, ce qui est un acte de louange plus qu'une attribution de gloire.
**Omniscient vs Savant** \u2014 Les traductions courantes donnent \u00ab Omniscient \u00bb pour al-'alim. Le mot arabe est al-'alim (le Savant, celui qui sait), pas al-'allam (le tres-Savant). \u00ab Omniscient \u00bb est une traduction interpretative. \u00ab Le Savant \u00bb est plus litterale.`,
    segments: [
      { fr: "ils dirent", pos: "verbe", phon: "q\u0101l\u016b", arabic: "\u0642\u064e\u0627\u0644\u064f\u0648\u0627\u06df", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "Louange a Toi", pos: "nom", phon: "subh\u0101naka", arabic: "\u0633\u064f\u0628\u0652\u062d\u064e\u0640\u0670\u0646\u064e\u0643\u064e", word_key: "sbh", is_particle: false, sense_retenu: "louer", position: 2 },
      { fr: "pas de", phon: "l\u0101", arabic: "\u0644\u064e\u0627", is_particle: true, position: 3 },
      { fr: "savoir", pos: "nom", phon: "\u2018ilma", arabic: "\u0639\u0650\u0644\u0652\u0645\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 4 },
      { fr: "pour nous", phon: "lan\u0101", arabic: "\u0644\u064e\u0646\u064e\u0627\u0653", is_particle: true, position: 5 },
      { fr: "sauf", phon: "ill\u0101", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 6 },
      { fr: "ce que", phon: "m\u0101", arabic: "\u0645\u064e\u0627", is_particle: true, position: 7 },
      { fr: "Tu nous as enseigne", pos: "verbe", phon: "\u2018allamtan\u0101", arabic: "\u0639\u064e\u0644\u0651\u064e\u0645\u0652\u062a\u064e\u0646\u064e\u0627\u0653", word_key: "elm", is_particle: false, sense_retenu: "enseigner", position: 8 },
      { fr: "certes Toi", phon: "innaka", arabic: "\u0625\u0650\u0646\u0651\u064e\u0643\u064e", is_particle: true, position: 9 },
      { fr: "Toi", phon: "anta", arabic: "\u0623\u064e\u0646\u062a\u064e", is_particle: true, position: 10 },
      { fr: "le Savant", pos: "participe_actif", phon: "al-\u2018al\u012bmu", arabic: "\u0627\u0644\u0652\u0639\u064e\u0644\u0650\u064a\u0645\u064f", word_key: "elm", is_particle: false, sense_retenu: "savant", position: 11 },
      { fr: "le Sage", pos: "adjectif", phon: "al-hak\u012bmu", arabic: "\u0627\u0644\u0652\u062d\u064e\u0643\u0650\u064a\u0645\u064f", word_key: "hkm", is_particle: false, sense_retenu: "sage", position: 12 }
    ],
    words: [
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Enonciation",
          concepts: {
            "Parole/Enonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qalu est un accompli de q-w-l avec le pronom 3MP (ils dirent). Le sujet sont les anges qui repondent au defi divin. La parole des anges est ici un aveu d'ignorance et une glorification de Dieu \u2014 ils parlent pour reconnaitre leur limite.",
              axe1_verset: "Le verbe qalu ouvre la reponse des anges au defi du verset 31. Les anges ne tentent pas de nommer \u2014 ils commencent par glorifier Dieu (subhanaka) puis avouent leur ignorance. La parole des anges est une soumission, pas une tentative de relever le defi. Leur reponse est l'exact oppose d'une pretention au savoir.",
              axe2_voisins: "La parole des anges au verset 32 repond a la parole divine du verset 31 (fa-qala anbi'uni). Le dialogue entre Dieu et les anges est un echange ou chaque partie dit quelque chose de revelateur : Dieu revele l'ignorance des anges, les anges revelent leur soumission. Le verset 33 continuera le dialogue avec la parole d'Adam.",
              axe3_sourate: "La sourate al-Baqarah est construite sur des dialogues : Dieu-anges (2:30-34), Dieu-Adam (2:35-39), Dieu-fils d'Isra'il (2:40-). Chaque dialogue revele le caractere des interlocuteurs par ce qu'ils disent.",
              axe4_coherence: "Le Coran rapporte les paroles des anges dans plusieurs passages. En 2:30, ils questionnent. En 2:32, ils avouent. En 2:34, ils obeissent. En 7:11, ils se prosternent. Les anges sont toujours presentes comme obeissants apres avoir questionne \u2014 le questionnement mene a la soumission.",
              axe5_frequence: "Pour la mission du khalifa, la parole des anges montre que le savoir est le critere de legitimite. Meme les anges, malgre leur proximite avec Dieu, reconnaissent qu'ils ne savent que ce que Dieu leur enseigne. Le khalifa est legitime par son savoir, pas par sa nature."
            }
          }
        }
      },
      {
        word_key: "sbh", position: 2, sense_chosen: "louer",
        analysis_axes: {
          concept_chosen: "Glorification/Louange",
          concepts: {
            "Glorification/Louange": {
              status: "retenu",
              senses: ["glorifier", "louer", "prier", "subhana"],
              proof_ctx: "Le mot subhanaka est un nom verbal (masdar) au cas accusatif de la racine s-b-h avec le pronom suffixe -ka (Toi). Le Lane's donne pour subhana : an expression of glorification, meaning I declare God to be far removed from every imperfection. La formule subhana est un accusatif absolu \u2014 elle exprime l'acte de glorifier Dieu en Le declarant au-dessus de tout defaut. L'usage par les anges est une reconnaissance immediate de la perfection divine.",
              axe1_verset: "Le mot subhanaka ouvre la reponse des anges. Avant meme d'avouer leur ignorance, ils glorifient Dieu. C'est un reflexe de soumission \u2014 devant le defi impossible, les anges commencent par reconnaitre la perfection de Dieu. La glorification precede l'aveu d'ignorance car les anges comprennent que leur ignorance est voulue par Dieu \u2014 il n'y a pas de defaut dans le plan divin.",
              axe2_voisins: "La glorification au verset 32 repond a la scene du verset 30 ou les anges avaient dit : 'nous glorifions par Ta louange et nous sanctifions pour Toi.' La glorification est la fonction premiere des anges, et c'est ce qu'ils font spontanement quand ils sont confrontes a leur ignorance. Mais le verset 31-33 montre que la glorification seule ne suffit pas \u2014 le khalifa apporte quelque chose que la glorification n'apporte pas.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine s-b-h au verset 30 (nusabbihu bi-hamdika) et au verset 32 (subhanaka). La glorification est le propre des anges dans cette sourate. La sourate distingue la glorification (fonction des anges) de la connaissance des noms (fonction du khalifa).",
              axe4_coherence: "Le Coran utilise subhana dans de nombreux passages pour declarer Dieu au-dessus des imperfections (2:116, 3:191, 4:171, 6:100, 7:143, 10:10). La formule est toujours une reponse a une attribution indigne \u2014 ici les anges disent subhanaka car ils comprennent qu'ils avaient tort de questionner le choix de Dieu.",
              axe5_frequence: "La racine s-b-h apparait 92 fois dans le Coran. Pour la mission du khalifa, la glorification est necessaire mais insuffisante. Les anges glorifient \u2014 c'est leur role. Le khalifa glorifie ET connait les noms \u2014 c'est sa double mission."
            },
            "Mouvement/Flottement": {
              status: "nul",
              senses: ["nager", "flotter", "voyager rapidement"],
              proof_ctx: "Le mouvement est le sens etymologique de s-b-h (nager, se mouvoir librement). Le contexte utilise la formule figee subhana qui signifie glorifier, pas nager."
            }
          }
        }
      },
      {
        word_key: "elm", position: 4, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le mot 'ilma est un nom au cas accusatif de la racine e-l-m. Le Lane's donne : knowledge, science, learning. Le mot apparait trois fois dans ce verset sous trois formes differentes : 'ilma (savoir, nom), 'allamtana (Tu nous as enseigne, forme II), al-'alimu (le Savant, participe actif). Cette triple occurrence souligne que le savoir est le theme central du verset. Les anges avouent : pas de savoir pour nous sauf ce que Tu nous as enseigne.",
              axe1_verset: "Le mot 'ilm est nie par la particule la (la 'ilma lana = pas de savoir pour nous). Les anges avouent une ignorance totale sauf ce qui vient de l'enseignement divin. La triple occurrence de e-l-m dans le verset (savoir, enseigner, Savant) cree un jeu semantique : les anges n'ont pas le savoir, ils n'ont que ce que Dieu leur a enseigne, et Dieu seul est le Savant. Le savoir absolu appartient a Dieu.",
              axe2_voisins: "L'aveu d'ignorance des anges (v32) contraste avec l'enseignement d'Adam (v31). Dieu a enseigne a Adam les noms, les anges avouent ne rien savoir sauf ce que Dieu leur a enseigne. La difference est que Dieu a enseigne a Adam les NOMS (connaissance des realites), alors que les anges n'ont recu qu'un savoir general. Le verset 33 confirmera : Adam sait ce que les anges ignorent.",
              axe3_sourate: "La racine e-l-m est l'une des plus frequentes de la sourate al-Baqarah. Le savoir est le critere de jugement tout au long de la sourate : ceux qui savent et agissent en consequence, ceux qui savent et detournent (2:75, 2:146), ceux qui ne savent pas (2:13, 2:78). L'aveu d'ignorance des anges est le point de depart de cette thematique.",
              axe4_coherence: "Le Coran presente le savoir comme un attribut divin par excellence. En 2:255, Dieu embrasse toute chose de Son savoir. En 6:59, Il detient les clefs de l'invisible. L'aveu des anges (la 'ilma lana) reconnait que tout savoir emane de Dieu.",
              axe5_frequence: "La racine e-l-m apparait 854 fois dans le Coran. Pour la mission du khalifa, l'aveu des anges etablit un principe : le savoir ne vient que de Dieu. Le khalifa ne sait pas par lui-meme \u2014 il sait parce que Dieu lui a enseigne. La connaissance est un don, pas une acquisition autonome."
            }
          }
        }
      },
      {
        word_key: "hkm", position: 12, sense_chosen: "sage",
        analysis_axes: {
          concept_chosen: "Sagesse",
          concepts: {
            "Sagesse": {
              status: "retenu",
              senses: ["etre sage", "sagesse"],
              proof_ctx: "Le mot al-hakimu est un adjectif intensif (fa'il) defini de la racine h-k-m. Le Lane's donne pour hakim : wise, one possessed of wisdom, one who judges rightly. Le hakim est celui qui place chaque chose a sa juste place \u2014 c'est la sagesse pratique, pas seulement theorique. L'article defini al- indique le superllatif : LE Sage par excellence.",
              axe1_verset: "Le mot al-hakim cloture le verset en tandem avec al-'alim (le Savant, le Sage). Les deux attributs sont complementaires : le savoir (connaitre les choses) et la sagesse (placer les choses a leur juste place). Les anges reconnaissent que Dieu sait (al-'alim) et qu'Il agit avec sagesse (al-hakim). Placer un khalifa sur terre est un acte de sagesse, meme si les anges ne comprennent pas pourquoi.",
              axe2_voisins: "La sagesse divine est la reponse implicite a l'objection des anges au verset 30. Les anges avaient questionne la sagesse du choix de placer un khalifa. En reconnaissant Dieu comme le Sage, les anges retirent leur objection \u2014 si Dieu est le Sage, Son choix est forcement sage.",
              axe3_sourate: "La sourate al-Baqarah mentionne la sagesse (hikma) dans plusieurs passages (2:129, 2:151, 2:231, 2:251, 2:269). En 2:269, Dieu accorde la sagesse a qui Il veut, et celui qui recoit la sagesse recoit un bien abondant. La sagesse est un don divin qui s'ajoute au savoir.",
              axe4_coherence: "Le Coran utilise la racine h-k-m 210 fois. Le couple al-'alim al-hakim apparait frequemment dans le Coran (2:32, 2:129, 6:83, 12:6, 15:25, 27:6). C'est un binome qui exprime la plenitude de la connaissance divine : savoir et sagesse, connaissance et discernement.",
              axe5_frequence: "Pour la mission du khalifa, la sagesse divine legitime son existence. Les anges reconnaissent que Dieu est sage \u2014 donc le choix de placer un khalifa est sage. Le khalifa est un acte de sagesse divine, pas un hasard."
            },
            "Jugement/Decision": {
              status: "probable",
              senses: ["juger", "decider", "sentence"],
              proof_ctx: "Le jugement est un sens central de h-k-m (juger entre les parties). Le contexte utilise l'adjectif hakim (sage), pas le verbe hakama (juger). Cependant, la sagesse inclut la capacite de juger correctement."
            },
            "Autorite/Pouvoir": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "L'autorite est un sens derive de h-k-m (gouverner avec sagesse). Le contexte parle de la sagesse divine, pas du gouvernement."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:33
  // verse_id=40
  // =====================================================
  33: {
    verse_id: 40,
    analysis_id: null,
    translation_arab: "Il dit : Adam, informe-les de leurs noms. Puis quand il les eut informes de leurs noms, Il dit : ne vous ai-Je pas dit que Je connais l'invisible des cieux et de la terre, et que Je connais ce que vous montrez et ce que vous cachiez ?",
    full_translation: "Il dit : \"O Adam, informe-les de ces noms.\" Puis quand celui-ci les eut informes de ces noms, Allah dit : \"Ne vous avais-Je pas dit que Je connais les mysteres des cieux et de la terre, et que Je sais ce que vous divulguez et ce que vous cachez ?\"",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le verbe **qala** est un accompli de q-w-l (Il dit \u2014 Dieu s'adresse a Adam). Le vocatif **ya Adamu** interpelle Adam directement. Le verbe **anbi'hum** est un imperatif forme IV de n-b-a avec le pronom 3MP (informe-les). Le mot **bi-asma'ihim** est le pluriel de ism au genitif avec pronom 3MP (de leurs noms \u2014 ici le pronom indique que les noms designent les choses presentees). Le mot **falamma** est une conjonction temporelle (puis quand). Le verbe **anba'ahum** est un accompli forme IV de n-b-a (il les informa). Le verbe **qala** est repete (Il dit \u2014 Dieu parle a nouveau). Le mot **alam** est une particule interrogative negative (ne... pas). Le verbe **aqul** est un inaccompli 1S de q-w-l (Je dis). Le mot **lakum** est la preposition li + pronom 2MP (a vous). Le mot **inni** est la particule inna + pronom 1S (certes Moi). Le verbe **a'lamu** est un inaccompli 1S de e-l-m (Je connais). Le mot **ghayba** est un nom de la racine gh-y-b (l'invisible, le mystere). Le mot **al-samawati** est le pluriel de sama' de la racine s-m-w (les cieux). Le mot **wa-l-ardi** est le nom de la racine a-r-d (et la terre). Le verbe **tubduna** est un inaccompli 2MP de b-d-w (vous montrez). Le verbe **taktumuna** est un inaccompli 2MP de k-t-m (vous cachez).

\u00a7JUSTIFICATION\u00a7
**dit** \u2014 Le sens retenu est \u00ab Parole/Enonciation \u00bb. Le verbe qala, acte de prononcer.

**informe-les** \u2014 Le sens retenu est \u00ab Information/Nouvelle \u00bb. La forme IV de n-b-a signifie informer, annoncer.

**noms** \u2014 Le sens retenu est \u00ab Nom/Identification \u00bb. Le pluriel asma' designe les noms.

**connais** \u2014 Le sens retenu est \u00ab Savoir/Connaissance \u00bb. Le verbe a'lamu (Je connais) est un inaccompli 1S.

**l'invisible** \u2014 Le sens retenu est \u00ab Mystere/Inconnaissable \u00bb. Le mot ghayb designe ce qui est cache, absent, invisible. L'alternative \u00ab absence \u00bb est ecartee car le contexte parle de connaissance de ce qui est cache, pas de l'etat d'absence.

**les cieux** \u2014 Le sens retenu est \u00ab Ciel/Ce qui couvre \u00bb. Le pluriel samawat designe les cieux.

**la terre** \u2014 Le sens retenu est \u00ab Terre/Sol \u00bb. Le mot al-ard designe la terre.

**montrez** \u2014 Le sens retenu est \u00ab Apparition/Manifestation \u00bb. Le verbe tubduna signifie montrer, faire apparaitre. L'alternative \u00ab desert \u00bb est ecartee car le contexte n'est pas geographique.

**cachiez** \u2014 Le sens retenu est \u00ab Dissimulation/Secret \u00bb. Le verbe taktumuna signifie cacher, taire, dissimuler.

\u00a7CRITIQUE\u00a7
**mysteres vs invisible** \u2014 Les traductions courantes donnent \u00ab mysteres \u00bb ou \u00ab secrets \u00bb pour ghayb. Le mot ghayb designe litteralement ce qui est absent, cache, invisible \u2014 pas un mystere au sens d'enigme. \u00ab Invisible \u00bb est plus precis car il preservse la distinction entre ce qui est visible (shahada) et ce qui ne l'est pas (ghayb).
**divulguez vs montrez** \u2014 Les traductions courantes donnent \u00ab divulguez \u00bb pour tubduna. Le verbe badaw signifie apparaitre, se montrer \u2014 c'est plus neutre que divulguer qui implique une revelation deliberee. \u00ab Montrer \u00bb est plus fidele a la racine.`,
    segments: [
      { fr: "Il dit", pos: "verbe", phon: "q\u0101la", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "Adam", pos: "nom_propre", phon: "y\u0101 \u0101damu", arabic: "\u064a\u064e\u0640\u0670\u0653\u0621\u064e\u0627\u062f\u064e\u0645\u064f", is_particle: false, position: 2 },
      { fr: "informe-les", pos: "verbe", phon: "anbi'hum", arabic: "\u0623\u064e\u0646\u06e2\u0628\u0650\u0626\u0652\u0647\u064f\u0645", word_key: "nba", is_particle: false, sense_retenu: "informer", position: 3 },
      { fr: "de leurs noms", pos: "nom", phon: "bi-asm\u0101\u2019ihim", arabic: "\u0628\u0650\u0623\u064e\u0633\u0652\u0645\u064e\u0627\u0653\u0626\u0650\u0647\u0650\u0645\u0652", word_key: "smw", is_particle: false, sense_retenu: "nom", position: 4 },
      { fr: "puis quand", phon: "falamm\u0101", arabic: "\u0641\u064e\u0644\u064e\u0645\u0651\u064e\u0627\u0653", is_particle: true, position: 5 },
      { fr: "il les eut informes", pos: "verbe", phon: "anba\u2019ahum", arabic: "\u0623\u064e\u0646\u06e2\u0628\u064e\u0623\u064e\u0647\u064f\u0645", word_key: "nba", is_particle: false, sense_retenu: "informer", position: 6 },
      { fr: "de leurs noms", pos: "nom", phon: "bi-asm\u0101\u2019ihim", arabic: "\u0628\u0650\u0623\u064e\u0633\u0652\u0645\u064e\u0627\u0653\u0626\u0650\u0647\u0650\u0645\u0652", word_key: "smw", is_particle: false, sense_retenu: "nom", position: 7 },
      { fr: "Il dit", pos: "verbe", phon: "q\u0101la", arabic: "\u0642\u064e\u0627\u0644\u064e", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 8 },
      { fr: "ne... pas", phon: "alam", arabic: "\u0623\u064e\u0644\u064e\u0645\u0652", is_particle: true, position: 9 },
      { fr: "Je dis", pos: "verbe", phon: "aqul", arabic: "\u0623\u064e\u0642\u064f\u0644", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 10 },
      { fr: "a vous", phon: "lakum", arabic: "\u0644\u0651\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 11 },
      { fr: "certes Moi", phon: "inn\u012b", arabic: "\u0625\u0650\u0646\u0651\u0650\u0649\u0653", is_particle: true, position: 12 },
      { fr: "Je connais", pos: "verbe", phon: "a\u2018lamu", arabic: "\u0623\u064e\u0639\u0652\u0644\u064e\u0645\u064f", word_key: "elm", is_particle: false, sense_retenu: "connaitre", position: 13 },
      { fr: "l'invisible", pos: "nom", phon: "ghayba", arabic: "\u063a\u064e\u064a\u0652\u0628\u064e", word_key: "gyb", is_particle: false, sense_retenu: "invisible", position: 14 },
      { fr: "des cieux", pos: "nom", phon: "al-sam\u0101w\u0101ti", arabic: "\u0627\u0644\u0633\u0651\u064e\u0645\u064e\u0640\u0670\u0648\u064e\u0640\u0670\u062a\u0650", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 15 },
      { fr: "et la terre", pos: "nom", phon: "wa-l-ardi", arabic: "\u0648\u064e\u0627\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 16 },
      { fr: "et Je connais", pos: "verbe", phon: "wa a\u2018lamu", arabic: "\u0648\u064e\u0623\u064e\u0639\u0652\u0644\u064e\u0645\u064f", word_key: "elm", is_particle: false, sense_retenu: "connaitre", position: 17 },
      { fr: "ce que", phon: "m\u0101", arabic: "\u0645\u064e\u0627", is_particle: true, position: 18 },
      { fr: "vous montrez", pos: "verbe", phon: "tubd\u016bna", arabic: "\u062a\u064f\u0628\u0652\u062f\u064f\u0648\u0646\u064e", word_key: "bdw", is_particle: false, sense_retenu: "montrer", position: 19 },
      { fr: "et ce que", phon: "wa m\u0101", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 20 },
      { fr: "vous etiez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064f\u0646\u062a\u064f\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 21 },
      { fr: "cachant", pos: "verbe", phon: "taktum\u016bna", arabic: "\u062a\u064e\u0643\u0652\u062a\u064f\u0645\u064f\u0648\u0646\u064e", word_key: "ktm", is_particle: false, sense_retenu: "cacher", position: 22 }
    ],
    words: [
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Enonciation",
          concepts: {
            "Parole/Enonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qala apparait trois fois dans ce verset : qala (Il dit a Adam), qala (Il dit aux anges), aqul (Je dis). Le sujet est Dieu dans les trois cas. La parole divine structure le verset en deux parties : d'abord l'ordre a Adam (informe-les), puis le rappel aux anges (ne vous ai-Je pas dit).",
              axe1_verset: "La parole divine a une double fonction dans ce verset. D'abord, qala introduit l'ordre a Adam (informe-les). Ensuite, qala introduit la question rhetorique aux anges (ne vous ai-Je pas dit). La premiere parole declenche l'action (Adam nomme), la seconde tire la lecon (Dieu rappelle Son savoir). Le verbe aqul (Je dis) dans alam aqul lakum est un inaccompli qui indique que Dieu dit habituellement \u2014 ce n'est pas la premiere fois.",
              axe2_voisins: "Le verbe qala continue le dialogue qui a commence au verset 30. Chaque verset est structure autour d'un acte de parole : Dieu dit (v30), Dieu dit (v31), les anges dirent (v32), Dieu dit (v33), Dieu dit (v34). La parole est le fil conducteur de toute la scene.",
              axe3_sourate: "La sourate al-Baqarah est un enchainage de paroles rapportees. Le verbe qala/qalu est le verbe le plus frequent de la sourate. Chaque section commence ou se structure autour d'un acte de parole. La sourate est fondamentalement un texte oral rapporte par ecrit.",
              axe4_coherence: "Le Coran utilise qala/qul plus de 1700 fois. La triple occurrence dans un seul verset est remarquable et souligne l'importance de la scene. Chaque parole divine avance la demonstration d'un cran : ordre, constatation, conclusion.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'instrument de la connaissance. Dieu dit, Adam informe, les anges avouent. Le khalifa est celui qui peut parler des choses \u2014 les nommer, les informer. La parole est le vehicule du savoir."
            }
          }
        }
      },
      {
        word_key: "nba", position: 3, sense_chosen: "informer",
        analysis_axes: {
          concept_chosen: "Information/Nouvelle",
          concepts: {
            "Information/Nouvelle": {
              status: "retenu",
              senses: ["informer", "nouvelle", "annoncer"],
              proof_ctx: "Le verbe anbi'hum est un imperatif forme IV de n-b-a (informe-les) et anba'ahum est un accompli forme IV (il les informa). Le Lane's donne pour forme IV : he informed, he acquainted. Le passage de l'imperatif a l'accompli montre l'obeissance immediate d'Adam \u2014 Dieu ordonne, Adam execute. Le pronom -hum renvoie aux anges (informe-les = informe les anges).",
              axe1_verset: "Le verbe n-b-a apparait deux fois : anbi'hum (ordre) et anba'ahum (execution). L'ordre et l'execution sont juxtaposes sans delai \u2014 Adam obeit immediatement. Le fait qu'Adam reussisse la ou les anges ont echoue prouve sa legitimite comme khalifa. L'acte d'informer est la preuve concrete de la connaissance des noms.",
              axe2_voisins: "Le verbe anbi' relie les versets 31 et 33. Au verset 31, Dieu dit aux anges anbi'uni (informez-Moi) \u2014 ils ne peuvent pas. Au verset 33, Dieu dit a Adam anbi'hum (informe-les) \u2014 il le peut. Le meme verbe, la meme forme, mais des resultats opposes. Cette symetrie est le coeur de la demonstration.",
              axe3_sourate: "La racine n-b-a est liee au concept de prophetie (nabi = prophete). Adam est le premier a informer de la part de Dieu dans la sourate. Les prophetes mentionnes plus loin dans la sourate (Moise, Abraham, Jesus) sont dans la continuite de cet acte fondateur : informer les creatures de la part de Dieu.",
              axe4_coherence: "Le Coran utilise la racine n-b-a dans deux grandes categories : l'information (anba', naba') et la prophetie (nabi, nubuwwa). Le lien entre les deux est semantique : le prophete est celui qui informe. Adam, en informant les anges, accomplit le premier acte prophetique de l'histoire coranique.",
              axe5_frequence: "La racine n-b-a apparait 160 fois dans le Coran. Pour la mission du khalifa, la capacite d'informer est la demonstration de la connaissance. Le khalifa ne garde pas le savoir pour lui \u2014 il informe, il transmet, il nomme. C'est la dimension sociale de la connaissance."
            }
          }
        }
      },
      {
        word_key: "smw", position: 4, sense_chosen: "noms",
        analysis_axes: {
          concept_chosen: "Nom/Identification",
          concepts: {
            "Nom/Identification": {
              status: "retenu",
              senses: ["nom", "nommer", "prononcer le nom de Dieu", "se nommer", "renommee", "nomme"],
              proof_ctx: "Le mot bi-asma'ihim est le pluriel de ism au genitif avec le pronom 3MP (de leurs noms). Le -him (leurs) renvoie aux choses presentees. Le mot apparait deux fois dans le verset : quand Dieu ordonne a Adam d'informer de leurs noms, et quand Adam les informe effectivement de leurs noms. La repetition souligne que les noms sont le contenu precis de l'information transmise.",
              axe1_verset: "Les noms sont l'objet de l'acte d'informer. Adam informe les anges DE LEURS NOMS \u2014 pas d'autre chose. Les noms sont la cle de la demonstration : celui qui connait les noms connait la realite des choses. Le pronom -him (leurs) indique que chaque chose presentee a un nom propre \u2014 l'identification est individuelle, pas generique.",
              axe2_voisins: "Les noms au verset 33 bouclent la boucle ouverte au verset 31 (Dieu enseigna les noms). Enseignement des noms (v31) \u2192 ignorance des anges (v32) \u2192 Adam informe des noms (v33). Le passage est structure autour des noms comme un anneau.",
              axe3_sourate: "Dans la sourate al-Baqarah, la racine s-m-w apparait aussi dans samawat (cieux, v33). Le meme verset contient les deux sens de la racine : asma' (noms, identification) et samawat (cieux, ce qui couvre). Le lien etymologique est profond : les noms elevent celui qui les connait.",
              axe4_coherence: "Le Coran utilise asma' pour les noms divins (7:180) et pour les noms enseignes a Adam (2:31-33). Les noms sont un pouvoir \u2014 celui qui connait le nom d'une chose a prise sur elle. En 7:71, les idoles sont des noms que vous avez nommes \u2014 nommer c'est creer une realite.",
              axe5_frequence: "Pour la mission du khalifa, les noms sont sa competence distinctive. Il connait les noms, il peut les transmettre. C'est cette capacite qui le distingue des anges et qui fonde sa legitimite sur terre."
            },
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["ciel", "toit", "nuage", "pluie"],
              proof_ctx: "Le mot al-samawati (les cieux) apparait dans la seconde partie du verset. Le Lane's donne pour sama' : the sky, the heaven, that which is above. Les cieux sont mentionnes avec la terre (al-samawati wa-l-ardi) comme l'espace total dont Dieu connait l'invisible. C'est un usage different du meme verset ou asma' signifie les noms."
            }
          }
        }
      },
      {
        word_key: "elm", position: 13, sense_chosen: "connaitre",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe a'lamu est un inaccompli 1S de la racine e-l-m (Je connais). Le Lane's donne pour 'alima : he knew, he had knowledge. L'inaccompli indique un etat permanent \u2014 Dieu connait en permanence, pas de maniere ponctuelle. Le verbe apparait deux fois : a'lamu ghayba al-samawati wa-l-ardi (Je connais l'invisible des cieux et de la terre) et a'lamu ma tubduna wa ma kuntum taktumuna (Je connais ce que vous montrez et ce que vous cachiez).",
              axe1_verset: "Le double a'lamu est la conclusion de la demonstration. Dieu connait l'invisible ET le visible, le manifeste ET le cache. Cette omniscience est la reponse finale a l'objection des anges : Dieu sait ce que les anges ignorent. Le premier a'lamu porte sur l'invisible cosmique (cieux et terre), le second sur l'invisible personnel (ce que les anges montrent et cachent).",
              axe2_voisins: "Le savoir divin au verset 33 repond a l'aveu d'ignorance des anges au verset 32 (la 'ilma lana = pas de savoir pour nous). Les anges n'ont pas de savoir, Dieu connait tout. Le contraste est absolu. La demonstration des noms est la preuve materielle de cet ecart.",
              axe3_sourate: "La racine e-l-m traverse toute la sourate al-Baqarah comme un leitmotiv. De l'enseignement des noms (v31) au savoir des fils d'Isra'il (v75, v146), la sourate explore toutes les dimensions du savoir : le savoir divin, le savoir enseigne, le savoir trahi.",
              axe4_coherence: "Le Coran utilise a'lamu (Je connais) comme une affirmation recurrente de l'omniscience divine. En 2:30, Dieu dit a'lamu ma la ta'lamuna (Je connais ce que vous ne connaissez pas). En 2:33, Il repete cette affirmation apres la demonstration. L'omniscience divine est d'abord affirmee, puis prouvee par les actes.",
              axe5_frequence: "Pour la mission du khalifa, la connaissance divine est la source de toute connaissance humaine. Le khalifa connait les noms parce que Dieu les lui a enseignes. La hierarchie est claire : Dieu sait tout, le khalifa sait les noms, les anges savent ce qu'on leur enseigne."
            }
          }
        }
      },
      {
        word_key: "gyb", position: 14, sense_chosen: "invisible",
        analysis_axes: {
          concept_chosen: "Mystere/Inconnaissable",
          concepts: {
            "Mystere/Inconnaissable": {
              status: "retenu",
              senses: ["l'invisible", "mystere", "secret", "evenement futur"],
              proof_ctx: "Le mot ghayba est un nom au cas accusatif de la racine gh-y-b. Le Lane's donne pour ghayb : that which is hidden, or concealed, from one; the unseen, the invisible. Le ghayb est l'oppose du shahada (le temoigne, le visible). C'est ce qui echappe aux sens et a la connaissance ordinaire. La construction ghayba al-samawati wa-l-ardi (l'invisible des cieux et de la terre) indique la totalite de ce qui est cache dans l'univers.",
              axe1_verset: "Le mot ghayb est l'objet du savoir divin (a'lamu ghayba = Je connais l'invisible). Dieu ne connait pas seulement le visible mais aussi l'invisible \u2014 ce que personne d'autre ne peut connaitre. L'invisible des cieux et de la terre est la totalite de ce qui est cache dans la creation. C'est une affirmation d'omniscience absolue qui depasse la simple connaissance des noms.",
              axe2_voisins: "L'invisible au verset 33 introduit une dimension nouvelle. Les versets 31-32 parlaient des noms (connaissance identifiable). Le verset 33 ajoute l'invisible (connaissance de ce qui est cache). Dieu sait plus que les noms \u2014 Il sait aussi ce qui est cache dans les cieux, sur la terre, et dans les coeurs des anges (ce que vous cachiez).",
              axe3_sourate: "La sourate al-Baqarah commence par definir les croyants comme ceux qui croient au ghayb (2:3, yu'minuna bi-l-ghayb). L'invisible est le premier critere de la foi. Au verset 33, Dieu revele qu'Il connait cet invisible. Le lien est profond : la foi en l'invisible (v3) est justifiee par la connaissance divine de l'invisible (v33).",
              axe4_coherence: "Le Coran utilise la racine gh-y-b 60 fois. En 6:59, Dieu detient les clefs de l'invisible. En 72:26-27, Dieu ne revele Son invisible qu'aux messagers qu'Il agree. L'invisible est le domaine exclusif de Dieu \u2014 aucune creature n'y accede sans autorisation divine.",
              axe5_frequence: "Pour la mission du khalifa, l'invisible est ce qui depasse sa capacite. Le khalifa connait les noms (le visible des choses) mais pas l'invisible. Seul Dieu connait l'invisible des cieux et de la terre. La distinction entre le savoir du khalifa et le savoir de Dieu est marquee par le ghayb."
            },
            "Absence/Invisibilite": {
              status: "probable",
              senses: ["etre absent", "s'absenter", "etre distant", "se coucher (astre)"],
              proof_ctx: "L'absence est le sens physique de gh-y-b (etre absent, ne pas etre la). Le contexte utilise ghayb comme nom (l'invisible), pas comme etat d'absence. Cependant, le lien est etymologique : l'invisible est ce qui est absent du champ de la perception."
            },
            "Dissimulation/Occultation": {
              status: "peu_probable",
              senses: ["cacher", "faire disparaitre", "voiler"],
              proof_ctx: "La dissimulation est un sens de gh-y-b (cacher quelque chose). Le contexte parle de l'invisible comme domaine de connaissance, pas comme acte de dissimulation."
            },
            "Medisance/Calomnie": {
              status: "nul",
              senses: ["medire", "calomnier"],
              proof_ctx: "La medisance (ghiba) est un derive de gh-y-b (parler de quelqu'un en son absence). Le contexte n'a rien a voir avec la medisance."
            },
            "Depression/Creux": {
              status: "nul",
              senses: ["lieu bas", "fond d'un puits", "tombe"],
              proof_ctx: "Le creux est un sens physique de gh-y-b (lieu enfonce, cache). Le contexte parle de l'invisible cosmique, pas d'un lieu physique."
            }
          }
        }
      },
      {
        word_key: "ard", position: 16, sense_chosen: "terre",
        analysis_axes: {
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "sol", "pays", "bas"],
              proof_ctx: "Le mot al-ardi est un nom feminin defini au cas genitif de la racine a-r-d. Le Lane's donne : the earth, the ground, the land. La terre est mentionnee en tandem avec les cieux (al-samawati wa-l-ardi) pour designer la totalite de la creation. La construction ghayba al-samawati wa-l-ardi (l'invisible des cieux et de la terre) couvre tout l'univers.",
              axe1_verset: "La terre est le complement des cieux dans la formule l'invisible des cieux et de la terre. Dieu connait tout ce qui est cache dans les cieux et sur la terre. La terre est aussi le lieu ou le khalifa est place (v30, fi al-ard). L'invisible de la terre est le domaine que le khalifa ne peut pas connaitre seul \u2014 il a besoin de l'enseignement divin.",
              axe2_voisins: "La terre est le fil conducteur de ce passage : la terre ou le khalifa est place (v30), la terre dont Dieu connait l'invisible (v33). Le lien est explicite : Dieu connait l'invisible de la terre ou Il place le khalifa. Le khalifa agit sur la terre visible, Dieu connait la terre visible et invisible.",
              axe3_sourate: "La sourate al-Baqarah mentionne la terre plus de 30 fois. La terre est le theatre de l'action humaine et le domaine du khalifa. Le couple cieux-terre designe la totalite de la creation dans toute la sourate.",
              axe4_coherence: "Le Coran utilise la formule al-samawati wa-l-ardi (les cieux et la terre) plus de 100 fois. C'est l'expression standard de la totalite cosmique. Dieu est le Seigneur des cieux et de la terre \u2014 rien ne Lui echappe.",
              axe5_frequence: "La racine a-r-d apparait 461 fois dans le Coran. Pour la mission du khalifa, la terre est son domaine d'action. Dieu connait l'invisible de la terre \u2014 le khalifa, avec les noms, connait le visible de la terre. Le partage est clair."
            }
          }
        }
      },
      {
        word_key: "bdw", position: 19, sense_chosen: "montrer",
        analysis_axes: {
          concept_chosen: "Apparition/Manifestation",
          concepts: {
            "Apparition/Manifestation": {
              status: "retenu",
              senses: ["apparaitre", "se montrer", "sembler"],
              proof_ctx: "Le verbe tubduna est un inaccompli 2MP de la racine b-d-w forme IV (vous montrez, vous faites apparaitre). Le Lane's donne pour forme IV (abda) : he showed, he manifested, he made apparent. Le sujet sont les anges \u2014 ce qu'ils montrent, ce qu'ils laissent voir. L'inaccompli indique une action habituelle ou en cours.",
              axe1_verset: "Le verbe tubduna est en opposition avec taktumuna (vous cachez). Dieu connait les deux : ce que les anges montrent ET ce qu'ils cachent. L'opposition montrer/cacher est la preuve de l'omniscience divine \u2014 rien ne Lui echappe, ni le visible ni l'invisible. La question implicite est : qu'est-ce que les anges cachaient ? Leur doute sur le choix du khalifa.",
              axe2_voisins: "Le couple montrer/cacher au verset 33 revele que les anges avaient des pensees cachees. Au verset 30, ils avaient exprime une objection. Mais Dieu sait qu'il y avait plus \u2014 des pensees non exprimees. Le verbe tubduna couvre l'objection formulee (v30), taktumuna couvre ce qu'ils n'avaient pas dit.",
              axe3_sourate: "La sourate al-Baqarah oppose constamment le visible et le cache. Les hypocrites montrent la foi et cachent l'incredulite (2:14). Les fils d'Isra'il montrent l'obeissance et cachent la desobeissance (2:85). Les anges ne sont pas des hypocrites, mais meme eux ont un interieur que Dieu seul connait.",
              axe4_coherence: "Le Coran utilise la racine b-d-w pour le visible et le manifeste dans plusieurs passages (6:28, 7:20, 14:38, 20:121, 60:4). En 14:38, Dieu connait ce que vous cachez et ce que vous montrez. La formule est recurrente et souligne l'omniscience divine.",
              axe5_frequence: "La racine b-d-w apparait 31 fois dans le Coran. Pour la mission du khalifa, la distinction visible/cache est fondamentale. Le khalifa agit dans le visible, Dieu connait le cache. La confiance en Dieu repose sur la certitude qu'Il connait ce que les creatures ne voient pas."
            },
            "Desert/Nomadisme": {
              status: "nul",
              senses: ["bedouin", "desert"],
              proof_ctx: "Le desert est un sens de b-d-w (la vie nomade, le desert). Le contexte utilise le verbe tubduna (vous montrez), pas le nom badw (desert)."
            }
          }
        }
      },
      {
        word_key: "kwn", position: 21, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Etre/Existence",
          concepts: {
            "Etre/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kuntum est un accompli de k-w-n avec le pronom 2MP (vous etiez). Le Lane's donne : he was, he existed. Le verbe kana fonctionne ici comme auxiliaire dans la construction kuntum taktumuna (vous etiez cachant = vous cachiez). L'accompli avec l'inaccompli exprime l'habitude passee \u2014 vous aviez l'habitude de cacher.",
              axe1_verset: "Le verbe kuntum dans kuntum taktumuna (vous etiez cachant) introduit la dimension temporelle de la dissimulation. Les anges cachaient quelque chose avant meme que la demonstration n'ait lieu. Le verbe kana + inaccompli exprime l'habitude passee \u2014 ce n'etait pas un acte ponctuel mais un comportement habituel. Dieu savait ce qu'ils cachaient avant de leur poser le defi.",
              axe2_voisins: "Le verbe kuntum au verset 33 fait echo a kuntum sadiqina au verset 31 (si vous etiez veridiques). Les deux occurrences de kuntum encadrent la scene du defi. Au verset 31, c'est une condition (si vous etiez veridiques). Au verset 33, c'est un constat (vous cachiez). Les anges n'etaient pas veridiques car ils cachaient quelque chose.",
              axe3_sourate: "La racine k-w-n est omnipresente dans la sourate al-Baqarah. Le verbe kana definit les etats et les identites. Dans ce passage, il sert a reveler l'etat cache des anges \u2014 ce qu'ils etaient vraiment sous leur glorification apparente.",
              axe4_coherence: "Le Coran utilise kuntum taktumuna (vous cachiez) comme un rappel que Dieu connait l'interieur des creatures. Cette formule ou ses variantes apparaissent dans plusieurs passages ou Dieu revele les pensees cachees.",
              axe5_frequence: "Pour la mission du khalifa, le verbe kana rappelle que les etats passes ne sont pas effaces. Ce que les anges cachaient est connu de Dieu. Le khalifa doit agir en sachant que Dieu connait ce qui est visible et ce qui est cache."
            }
          }
        }
      },
      {
        word_key: "ktm", position: 22, sense_chosen: "cacher",
        analysis_axes: {
          concept_chosen: "Dissimulation/Secret",
          concepts: {
            "Dissimulation/Secret": {
              status: "retenu",
              senses: ["cacher", "taire", "dissimuler", "garder secret"],
              proof_ctx: "Le verbe taktumuna est un inaccompli 2MP de la racine k-t-m (vous cachez). Le Lane's donne pour katama : he concealed, he hid, he kept secret. La racine k-t-m porte l'idee de cacher deliberement une information, de la garder secrete. L'inaccompli dans la construction kuntum taktumuna exprime l'habitude passee : vous aviez l'habitude de cacher.",
              axe1_verset: "Le verbe taktumuna cloture le verset et revele la dimension cachee de la scene. Dieu ne connait pas seulement ce que les anges montrent (tubduna) mais aussi ce qu'ils cachent (taktumuna). La fin du verset est une revelation : les anges cachaient quelque chose. Les exegetes discutent sur ce qui etait cache \u2014 certains disent le doute, d'autres le refus d'Iblis. Le texte ne precise pas, il se contente de reveler l'existence du secret.",
              axe2_voisins: "La dissimulation des anges au verset 33 prepare la scene du verset 34 ou Iblis refusera de se prosterner. Ce que les anges cachaient pourrait etre le germe du refus d'Iblis qui etait parmi eux. La dissimulation au verset 33 annonce la rupture au verset 34.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine k-t-m pour decrire la dissimulation des fils d'Isra'il (2:42, 2:146, 2:159, 2:174). En 2:42, Dieu dit 'ne cachez pas la verite en sachant'. En 2:146, les gens du Livre reconnaissent la verite mais une partie d'entre eux la cache. La dissimulation est un theme majeur de la sourate.",
              axe4_coherence: "Le Coran utilise la racine k-t-m 21 fois. C'est toujours dans un contexte negatif \u2014 cacher la verite, taire un temoignage, dissimuler un signe. La dissimulation est l'oppose de la transmission (n-b-a) qui est la mission du khalifa.",
              axe5_frequence: "Pour la mission du khalifa, la dissimulation est l'ennemi de la connaissance. Le khalifa est celui qui informe (anba'a) \u2014 l'oppose de cacher (katama). La scene des noms oppose deux attitudes : informer (Adam) et cacher (les anges). Le khalifa est du cote de l'information."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:34
  // verse_id=41
  // =====================================================
  34: {
    verse_id: 41,
    analysis_id: null,
    translation_arab: "Et quand Nous dimes aux anges : prosternez-vous devant Adam, alors ils se prosternerent, sauf Iblis. Il refusa, s'enfla d'orgueil, et il etait parmi les recouvrants.",
    full_translation: "Et lorsque Nous demandames aux Anges de se prosterner devant Adam, ils se prosternerent a l'exception d'Iblis qui refusa, s'enfla d'orgueil et fut parmi les infideles.",
    translation_explanation: `\u00a7DEMARCHE\u00a7
Le mot **wa-idh** est une conjonction temporelle (et quand). Le verbe **qulna** est un accompli 1PL de q-w-l (Nous dimes \u2014 le pluriel de majeste). Le mot **lil-mala'ikati** est le nom pluriel de m-l-k au genitif avec la preposition li (aux anges). Le verbe **usjudu** est un imperatif pluriel de s-j-d (prosternez-vous). Le mot **li-Adama** est le nom propre Adam au genitif avec la preposition li (devant Adam \u2014 la preposition li indique la direction de la prosternation). Le verbe **fa-sajadu** est un accompli 3MP de s-j-d avec fa (alors ils se prosternerent \u2014 le fa indique la consequence immediate). Le mot **illa** est une particule d'exception (sauf, a l'exception de). Le mot **Iblisa** est le nom propre Iblis au cas accusatif. Le verbe **aba** est un accompli 3MS de a-b-y (il refusa). Le verbe **wa-stakbara** est un accompli forme X de k-b-r (et il s'enfla d'orgueil \u2014 la forme X est reflexive-intensive : il se rendit grand, il se vit grand). Le verbe **wa-kana** est un accompli de k-w-n (et il etait). Le mot **mina** est une preposition (parmi). Le mot **al-kafirina** est un participe actif pluriel defini de k-f-r (les recouvrants \u2014 ceux qui recouvrent, dissimulent).

\u00a7JUSTIFICATION\u00a7
**dimes** \u2014 Le sens retenu est \u00ab Parole/Enonciation \u00bb. Le verbe qulna au pluriel de majeste.

**anges** \u2014 Le sens retenu est \u00ab Ange/Messager \u00bb. Le mot mala'ika.

**prosternez-vous / se prosternerent** \u2014 Le sens retenu est \u00ab Prosternation/Adoration \u00bb. Le verbe sajada signifie se prosterner, s'incliner profondement. L'alternative \u00ab adorer \u00bb est ecartee car la prosternation est un acte physique precis, pas un acte d'adoration generique.

**refusa** \u2014 Le sens retenu est \u00ab Refus/Rejet \u00bb. Le verbe aba signifie refuser categoriquement. L'alternative \u00ab dedaigner \u00bb est ecartee car elle implique un mepris, alors que aba est un refus sec et absolu.

**s'enfla d'orgueil** \u2014 Le sens retenu est \u00ab Orgueil/Arrogance \u00bb. La forme X de k-b-r (istakbara) est reflexive-intensive : il se rendit grand. L'alternative \u00ab fut orgueilleux \u00bb est ecartee car la forme X est active \u2014 il s'est FAIT grand, c'est un acte delibere, pas un etat passif.

**etait** \u2014 Le sens retenu est \u00ab Etre/Existence \u00bb. Le verbe kana.

**les recouvrants** \u2014 Le sens retenu est \u00ab Couverture/Dissimulation \u00bb. Le participe kafirina designe ceux qui recouvrent, dissimulent. L'alternative \u00ab infideles \u00bb est un neologisme sans equivalent dans le Lane's. \u00ab Mecreants \u00bb n'existe pas en francais courant.

\u00a7CRITIQUE\u00a7
**prosternez-vous devant vs a** \u2014 Les traductions courantes donnent \u00ab prosternez-vous devant Adam \u00bb. La preposition li a un sens directionnel (vers, pour), pas necessairement \u00ab devant \u00bb. La prosternation est ordonnee VERS Adam ou POUR Adam, pas seulement en sa presence.
**infideles vs recouvrants** \u2014 Les traductions courantes donnent \u00ab infideles \u00bb ou \u00ab incroyants \u00bb pour al-kafirina. La racine k-f-r signifie recouvrir, dissimuler. \u00ab Recouvrants \u00bb preserve le sens etymologique : ceux qui recouvrent la verite. \u00ab Infideles \u00bb est un terme theologique charge qui n'existe pas dans la racine arabe.
**s'enfla d'orgueil vs fut orgueilleux** \u2014 Les traductions courantes donnent \u00ab fut orgueilleux \u00bb pour istakbara. La forme X (reflexive-intensive) signifie \u00ab il se rendit grand, il se fit grand \u00bb \u2014 c'est un acte actif et delibere. \u00ab S'enfler d'orgueil \u00bb capture la dimension active de la forme X.`,
    segments: [
      { fr: "et quand", phon: "wa idh", arabic: "\u0648\u064e\u0625\u0650\u0630\u0652", is_particle: true, position: 1 },
      { fr: "Nous dimes", pos: "verbe", phon: "quln\u0101", arabic: "\u0642\u064f\u0644\u0652\u0646\u064e\u0627", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
      { fr: "aux anges", pos: "nom", phon: "lil-mal\u0101\u2019ikati", arabic: "\u0644\u0650\u0644\u0652\u0645\u064e\u0644\u064e\u0640\u0670\u0653\u0626\u0650\u0643\u064e\u0629\u0650", word_key: "mlk", is_particle: false, sense_retenu: "ange", position: 3 },
      { fr: "prosternez-vous", pos: "verbe", phon: "usjud\u016b", arabic: "\u0627\u0633\u0652\u062c\u064f\u062f\u064f\u0648\u0627\u06df", word_key: "sjd", is_particle: false, sense_retenu: "se prosterner", position: 4 },
      { fr: "devant Adam", pos: "nom_propre", phon: "li-\u0101dama", arabic: "\u0644\u0650\u0621\u064e\u0627\u062f\u064e\u0645\u064e", is_particle: false, position: 5 },
      { fr: "alors ils se prosternerent", pos: "verbe", phon: "fa-sajad\u016b", arabic: "\u0641\u064e\u0633\u064e\u062c\u064e\u062f\u064f\u0648\u0653\u0627\u06df", word_key: "sjd", is_particle: false, sense_retenu: "se prosterner", position: 6 },
      { fr: "sauf", phon: "ill\u0101", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627\u0653", is_particle: true, position: 7 },
      { fr: "Iblis", pos: "nom_propre", phon: "ibl\u012bsa", arabic: "\u0625\u0650\u0628\u0652\u0644\u0650\u064a\u0633\u064e", is_particle: false, position: 8 },
      { fr: "il refusa", pos: "verbe", phon: "ab\u0101", arabic: "\u0623\u064e\u0628\u064e\u0649\u0640\u0670", word_key: "aby", is_particle: false, sense_retenu: "refuser", position: 9 },
      { fr: "et s'enfla d'orgueil", pos: "verbe", phon: "wa-stakbara", arabic: "\u0648\u064e\u0627\u0633\u0652\u062a\u064e\u0643\u0652\u0628\u064e\u0631\u064e", word_key: "kbr", is_particle: false, sense_retenu: "s'enorgueillir", position: 10 },
      { fr: "et il etait", pos: "verbe", phon: "wa k\u0101na", arabic: "\u0648\u064e\u0643\u064e\u0627\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 11 },
      { fr: "parmi", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 12 },
      { fr: "les recouvrants", pos: "participe_actif", phon: "al-k\u0101fir\u012bna", arabic: "\u0627\u0644\u0652\u0643\u064e\u0640\u0670\u0641\u0650\u0631\u0650\u064a\u0646\u064e", word_key: "kfr", is_particle: false, sense_retenu: "recouvrant", position: 13 }
    ],
    words: [
      {
        word_key: "qwl", position: 2, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Enonciation",
          concepts: {
            "Parole/Enonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qulna est un accompli 1PL de q-w-l (Nous dimes). Le Lane's donne : he said, he spoke. Le pluriel de majeste (Nous) est utilise pour l'autorite divine. Le complement indirect lil-mala'ikati (aux anges) indique les destinataires. La parole divine est ici un ordre : prosternez-vous.",
              axe1_verset: "Le verbe qulna introduit l'ordre de prosternation. C'est le point culminant de la scene des noms : apres l'enseignement (v31), le defi (v31), l'aveu (v32) et la demonstration (v33), Dieu ordonne la prosternation (v34). La parole divine est ici un commandement qui exige l'obeissance. La sequence qulna... usjudu (Nous dimes... prosternez-vous) est directe et sans ambiguite.",
              axe2_voisins: "La parole divine au verset 34 conclut la scene qui a commence au verset 30. La sequence des paroles divines est : Je place un khalifa (v30), informez-Moi (v31), informe-les (v33), ne vous ai-Je pas dit (v33), prosternez-vous (v34). Chaque parole fait avancer le recit d'un cran vers la conclusion : la prosternation devant Adam.",
              axe3_sourate: "La sourate al-Baqarah rapporte de nombreux ordres divins : adorez (2:21), mangez (2:35), ne vous approchez pas (2:35), entrez (2:58). La prosternation devant Adam est le premier ordre specifique de la sourate apres le recit de la creation. C'est un ordre unique dans le Coran.",
              axe4_coherence: "Le Coran rapporte l'ordre de prosternation devant Adam dans sept passages (2:34, 7:11, 15:29-30, 17:61, 18:50, 20:116, 38:72-73). Chaque recit ajoute des details. En 2:34, le recit est le plus concis \u2014 ordre, obeissance, exception, refus.",
              axe5_frequence: "Pour la mission du khalifa, l'ordre de prosternation est la reconnaissance officielle de sa legitimite. Dieu ordonne aux anges de se prosterner devant Adam \u2014 c'est l'investiture du khalifa. La parole divine transforme Adam de simple createur a successeur investi."
            }
          }
        }
      },
      {
        word_key: "mlk", position: 3, sense_chosen: "anges",
        analysis_axes: {
          concept_chosen: "Ange/Messager",
          concepts: {
            "Ange/Messager": {
              status: "retenu",
              senses: ["ange", "messager", "message"],
              proof_ctx: "Le mot lil-mala'ikati est le pluriel de malak au genitif avec la preposition li (aux anges). Le Lane's donne pour malak : a messenger, an angel. Les anges recoivent l'ordre de se prosterner devant Adam. Ils passent du role de questionneur (v30) au role d'obeissant (v34) \u2014 la demonstration des noms les a convaincus.",
              axe1_verset: "Les anges sont les destinataires de l'ordre et les executants de la prosternation. Ils obeissent collectivement (fa-sajadu) sauf Iblis. La prosternation des anges est la reconnaissance collective de la legitimite du khalifa. L'exception d'Iblis est d'autant plus marquante qu'elle brise l'unanimite de l'obeissance angelique.",
              axe2_voisins: "Les anges ont suivi un parcours dans ce passage : objection (v30), defi (v31), aveu d'ignorance (v32), lecon (v33), prosternation (v34). Leur parcours va de la resistance a la soumission. Ce parcours est positif \u2014 les anges ont accepte la demonstration et se sont soumis. Iblis est le seul a rester dans la resistance.",
              axe3_sourate: "Les anges de la sourate al-Baqarah sont des etres obeissants mais au savoir limite. Apres cette scene fondatrice, les anges n'apparaissent plus comme des questionneurs mais comme des executants de la volonte divine. La scene des noms a etabli definitivement la hierarchie : Dieu, khalifa, anges.",
              axe4_coherence: "Le Coran presente les anges comme des etres qui ne desobeissent pas a Dieu (66:6, 21:27). La prosternation devant Adam confirme cette nature obeissante. L'exception d'Iblis est expliquee dans d'autres sourates (7:12, 15:33, 38:76) par son orgueil lie a sa nature de feu.",
              axe5_frequence: "Pour la mission du khalifa, la prosternation des anges est l'investiture divine. Les anges reconnaissent la superiorite du khalifa par un acte physique et symbolique. Le khalifa est au-dessus des anges dans la hierarchie de la creation \u2014 c'est ce que la prosternation signifie."
            }
          }
        }
      },
      {
        word_key: "sjd", position: 4, sense_chosen: "se prosterner",
        analysis_axes: {
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "obeir"],
              proof_ctx: "Le verbe usjudu est un imperatif pluriel de la racine s-j-d (prosternez-vous). Le verbe fa-sajadu est un accompli 3MP (alors ils se prosternerent). Le Lane's donne pour sajada : he prostrated himself, he lowered his head, he bent down his forehead to the ground. La prosternation est l'acte physique de s'incliner jusqu'au sol \u2014 c'est le degre maximal de soumission corporelle. L'imperatif divin (usjudu) et l'execution immediate (fa-sajadu) montrent l'obeissance parfaite des anges.",
              axe1_verset: "La prosternation est le climax du verset et de tout le passage 30-34. Apres la demonstration par les noms, Dieu ordonne la prosternation \u2014 c'est la conclusion logique. Les anges avaient questionne la sagesse du khalifa, la demonstration les a convaincus, et la prosternation est leur soumission a la decision divine. Le couple usjudu/fa-sajadu (ordre/execution) montre l'obeissance immediate et totale.",
              axe2_voisins: "La prosternation au verset 34 est la reponse definitive a la question du verset 30 (Vas-Tu y placer quelqu'un qui y corrompt ?). Les anges se prosternent devant celui dont ils doutaient. Le passage va du doute (v30) a la prosternation (v34) \u2014 c'est un arc narratif complet. L'exception d'Iblis montre que le doute peut mener a la soumission (anges) ou au refus (Iblis).",
              axe3_sourate: "La sourate al-Baqarah mentionne la prosternation dans le contexte de l'adoration (2:34, 2:43, 2:58, 2:125). En 2:34, la prosternation est devant Adam (prosternation d'honneur). En 2:43, elle est dans la priere (prosternation d'adoration). La sourate distingue deux types de prosternation.",
              axe4_coherence: "Le Coran rapporte la prosternation devant Adam dans sept passages. La racine s-j-d apparait 92 fois dans le Coran. La prosternation est l'acte d'adoration par excellence. En 15:29-30, Dieu precise que l'ordre de prosternation vient apres avoir souffle de Son esprit dans Adam \u2014 la prosternation honore l'esprit divin dans Adam.",
              axe5_frequence: "Pour la mission du khalifa, la prosternation des anges est la consecration divine. Le khalifa n'est pas un simple createur \u2014 il est un etre devant qui les anges se prosternent. Cette dignite est liee a l'enseignement des noms et a l'esprit divin. Le khalifa porte en lui quelque chose qui depasse les anges."
            },
            "Lieu de prosternation": {
              status: "nul",
              senses: ["mosquee"],
              proof_ctx: "La mosquee (masjid) est le lieu de la prosternation. Le contexte utilise le verbe sajada (se prosterner), pas le nom masjid (lieu de prosternation)."
            }
          }
        }
      },
      {
        word_key: "aby", position: 9, sense_chosen: "refuser",
        analysis_axes: {
          concept_chosen: "Refus/Rejet",
          concepts: {
            "Refus/Rejet": {
              status: "retenu",
              senses: ["refuser", "rejeter", "s'abstenir", "dedaigner"],
              proof_ctx: "Le verbe aba est un accompli 3MS de la racine a-b-y. Le Lane's donne pour aba : he refused, he declined, he would not, he was unwilling. Le verbe exprime un refus categorique et volontaire \u2014 pas une hesitation ou un oubli. L'accompli indique que le refus est un fait accompli, definitif. Le sujet est Iblis, l'exception a l'obeissance collective des anges.",
              axe1_verset: "Le verbe aba est le premier element de la triple description d'Iblis : il refusa, s'enfla d'orgueil, et etait parmi les recouvrants. Le refus est la cause, l'orgueil est la raison, le recouvrement est la consequence. La sequence est logique : Iblis refuse (acte), parce qu'il s'enfle d'orgueil (motivation), et il se retrouve parmi les recouvrants (resultat). Le refus est l'acte fondateur de la desobeissance.",
              axe2_voisins: "Le refus d'Iblis contraste radicalement avec l'obeissance des anges (fa-sajadu). La meme situation (l'ordre de se prosterner) produit deux reactions opposees : obeissance et refus. Le contraste est renforce par la structure grammaticale : fa-sajadu (ils se prosternerent) illa Iblisa aba (sauf Iblis, il refusa). L'exception est brutale et definitive.",
              axe3_sourate: "La sourate al-Baqarah ne mentionne le refus d'Iblis qu'une seule fois (2:34). C'est un evenement fondateur qui n'est pas repete dans la sourate. Le refus d'Iblis inaugure le mal dans la creation \u2014 la suite de la sourate montrera les consequences de ce refus a travers les generations humaines.",
              axe4_coherence: "Le Coran utilise la racine a-b-y 13 fois. En 7:12, le refus d'Iblis est motive par son orgueil (je suis meilleur que lui). En 15:31, aba an yakuna ma'a al-sajidina (il refusa d'etre avec les prosternants). Le refus est toujours presente comme un acte delibere et injustifie.",
              axe5_frequence: "La racine a-b-y apparait 13 fois dans le Coran. Pour la mission du khalifa, le refus d'Iblis est l'obstacle fondamental. Le khalifa est investi par Dieu, reconnu par les anges, mais refuse par Iblis. Le mal commence par un refus \u2014 le refus de reconnaitre la legitimite du khalifa."
            },
            "Parente/Paternite": {
              status: "nul",
              senses: ["pere"],
              proof_ctx: "Le pere (ab) est un nom de la racine a-b-y. Le contexte utilise le verbe aba (refuser), pas le nom ab (pere). Les deux sens sont independants."
            }
          }
        }
      },
      {
        word_key: "kbr", position: 10, sense_chosen: "s'enorgueillir",
        analysis_axes: {
          concept_chosen: "Orgueil/Arrogance",
          concepts: {
            "Orgueil/Arrogance": {
              status: "retenu",
              senses: ["s'enorgueillir", "orgueil"],
              proof_ctx: "Le verbe wa-stakbara est un accompli forme X de la racine k-b-r (et il s'enfla d'orgueil). Le Lane's donne pour forme X (istakbara) : he behaved proudly, haughtily, arrogantly; he considered himself great. La forme X est reflexive-intensive : il se RENDIT grand, il se VIT grand. C'est un acte delibere et interieur \u2014 Iblis se gonfle de sa propre importance. Le wa (et) lie le refus a l'orgueil comme cause et effet.",
              axe1_verset: "Le verbe istakbara est la raison du refus (aba). Iblis refuse de se prosterner parce qu'il se considere superieur a Adam. La forme X (reflexive) indique que l'orgueil vient de l'interieur \u2014 personne n'a dit a Iblis qu'il etait superieur, il s'est lui-meme attribue cette superiorite. L'orgueil est auto-genere, c'est un jugement errone sur soi-meme.",
              axe2_voisins: "L'orgueil d'Iblis contraste avec l'humilite des anges (subhanaka, v32). Les anges ont reconnu leur ignorance et glorifie Dieu. Iblis refuse et s'enfle d'orgueil. Les deux attitudes sont les reactions opposees a la meme situation : la confrontation avec le khalifa. L'humilite mene a la prosternation, l'orgueil mene au refus.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine k-b-r ici pour Iblis. L'orgueil est presente comme le peche originel \u2014 avant toute autre transgression, il y a l'orgueil. La sourate montrera ensuite d'autres formes d'orgueil : les fils d'Isra'il qui se croient elus (2:80, 2:111), les hypocrites qui se croient raisonnables (2:11-13).",
              axe4_coherence: "Le Coran utilise la racine k-b-r 161 fois. L'orgueil est le peche le plus condamne du Coran. En 7:13, Dieu dit a Iblis : descends d'ici, il ne t'appartient pas de t'enorgueillir ici. En 39:72, les portes de l'enfer s'ouvrent pour ceux qui s'enorgueillissaient. L'orgueil est l'antithese de la soumission a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'orgueil est la menace interieure. Le khalifa a recu le savoir et l'investiture \u2014 mais s'il s'enfle d'orgueil comme Iblis, il tombe. L'orgueil d'Iblis est un avertissement pour le khalifa : le savoir sans humilite mene a la chute."
            },
            "Grandeur/Importance": {
              status: "probable",
              senses: ["etre grand", "grandir", "etre important", "magnifier"],
              proof_ctx: "La grandeur est le sens premier de k-b-r (etre grand). La forme X (istakbara) derive de ce sens mais avec la nuance reflexive : se rendre grand soi-meme = s'enorgueillir. Le sens de grandeur reste sous-jacent."
            },
            "Age/Anciennete": {
              status: "nul",
              senses: ["vieillir", "aine"],
              proof_ctx: "L'age est un sens de k-b-r (etre age, aine). Le contexte parle d'orgueil, pas d'age."
            }
          }
        }
      },
      {
        word_key: "kwn", position: 11, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Etre/Existence",
          concepts: {
            "Etre/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe wa-kana est un accompli de k-w-n avec wa (et il etait). Le Lane's donne : he was, he existed. Le verbe kana fonctionne ici comme copule : kana mina al-kafirina (il etait parmi les recouvrants). L'accompli kana indique un etat passe ou un etat permanent \u2014 les exegetes discutent si Iblis etait deja recouvrant avant le refus ou s'il l'est devenu par son refus.",
              axe1_verset: "Le verbe kana dans wa-kana mina al-kafirina cloture la triple description d'Iblis : aba (refus), istakbara (orgueil), kana mina al-kafirina (etat de recouvrement). Le verbe kana est ambigu : il peut signifier 'il etait deja' (etat preetabli) ou 'il devint' (consequence du refus). Cette ambiguite est theologique : Iblis etait-il predestine au recouvrement ou l'a-t-il choisi ?",
              axe2_voisins: "Le verbe kana au verset 34 fait echo aux autres usages de kana dans ce passage : kuntum sadiqina (v31, si vous etiez veridiques), kuntum taktumuna (v33, vous cachiez). Dans chaque cas, kana revele un etat cache \u2014 les anges cachaient quelque chose, Iblis etait/devint recouvrant. Le verbe kana est le revelateur des etats interieurs.",
              axe3_sourate: "La sourate al-Baqarah utilise kana mina pour definir l'appartenance : kana mina al-kafirina (il etait parmi les recouvrants). Cette construction definit l'identite par le groupe d'appartenance. La sourate classifie les etres en categories : croyants, recouvrants, hypocrites. Iblis est classe parmi les recouvrants.",
              axe4_coherence: "Le Coran utilise kana mina pour definir l'appartenance dans plusieurs passages. En 18:50, Iblis kana mina al-jinni (il etait parmi les djinns). En 2:34, kana mina al-kafirina (il etait parmi les recouvrants). Les deux informations se completent : sa nature (djinn) et son etat (recouvrant).",
              axe5_frequence: "Pour la mission du khalifa, le verbe kana revele que l'etat interieur determine le comportement. Iblis etait/devint recouvrant \u2014 c'est son etat interieur qui a produit le refus et l'orgueil. Le khalifa doit veiller a son etat interieur pour ne pas tomber dans le meme piege."
            }
          }
        }
      },
      {
        word_key: "kfr", position: 13, sense_chosen: "recouvrant",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le mot al-kafirina est un participe actif pluriel defini de la racine k-f-r au cas genitif (apres mina). Le Lane's donne pour kafara : he covered, he concealed, he hid. Le participe actif (fa'il) indique un etat actif et continu \u2014 ceux qui recouvrent habituellement. L'article defini al- et le pluriel indiquent une categorie etablie : LES recouvrants. Iblis rejoint cette categorie par son refus.",
              axe1_verset: "Le mot al-kafirina cloture le verset et le passage 30-34 par un verdict. Iblis est classe parmi les recouvrants. Le recouvrement est l'aboutissement logique du refus et de l'orgueil : Iblis refuse de reconnaitre la verite (la legitimite du khalifa), s'enfle d'orgueil, et se retrouve parmi ceux qui recouvrent. La sequence refus-orgueil-recouvrement est un modele de chute.",
              axe2_voisins: "Le recouvrement d'Iblis est l'inverse exact de la glorification des anges (subhanaka, v32). Les anges decouvrent (ils avouent leur ignorance, glorifient Dieu). Iblis recouvre (il cache la verite de sa position, se croit superieur). Le passage oppose deux attitudes face a la verite : la decouvrir ou la recouvrir.",
              axe3_sourate: "La sourate al-Baqarah est construite autour de l'opposition croyants/recouvrants. Les premiers versets definissent ces deux categories (2:2-7). Le recouvrement d'Iblis au verset 34 inaugure cette thematique. Tout au long de la sourate, les recouvrants sont ceux qui refusent de reconnaitre la verite malgre les signes.",
              axe4_coherence: "Le Coran utilise la racine k-f-r 525 fois. C'est l'un des termes les plus importants du texte. Le sens etymologique de recouvrir est essentiel : le kafir n'est pas simplement celui qui ne croit pas, c'est celui qui recouvre la verite, qui la cache deliberement. La nuit est appelee kafira car elle recouvre le monde de tenebres.",
              axe5_frequence: "Pour la mission du khalifa, le recouvrement est l'ennemi fondamental. Le khalifa est celui qui nomme (decouvre les noms), Iblis est celui qui recouvre (cache la verite). La mission du khalifa est de decouvrir \u2014 de nommer, d'informer, de rendre visible ce qui est cache. Le recouvrement est la negation de cette mission."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["nier", "etre ingrat", "renier un bienfait", "rejeter", "mecreant"],
              proof_ctx: "Le rejet est un sens derive de k-f-r (nier, refuser de reconnaitre). Le contexte est coherent avec ce sens : Iblis refuse de reconnaitre la legitimite d'Adam. Cependant, le sens premier de recouvrement est plus precis et plus riche."
            },
            "Expiation/Reparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "L'expiation (kaffara) est un sens derive de k-f-r (recouvrir les peches). Le contexte parle d'Iblis qui recouvre la verite, pas d'expiation."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// TRAITEMENT DES VERSETS
// =====================================================
async function processVerse(verseNum) {
  const data = verseData[verseNum];
  if (!data) return;

  console.log(`\nVERSET 2:${verseNum} — TRAITEMENT`);

  // Fetch analysis_id if not set
  if (!data.analysis_id) {
    const { data: va, error: vaErr } = await supabase
      .from('verse_analyses')
      .select('id')
      .eq('verse_id', data.verse_id)
      .single();
    if (vaErr || !va) {
      console.error(`  ERREUR: verse_analyses introuvable pour verse_id=${data.verse_id}:`, vaErr?.message);
      return;
    }
    data.analysis_id = va.id;
    console.log(`  analysis_id=${data.analysis_id}`);
  }

  let okCount = 0;
  let errCount = 0;

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
      const ax = word.analysis_axes;
      console.log(`  ${word.word_key} (pos ${word.position}) → sens "${ax.concept_chosen}" → mot "${word.sense_chosen}"`);
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
    console.log(`  Traduction : "${data.translation_arab.substring(0, 80)}..."`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — TERMINE (${okCount} OK, ${errCount} erreurs)`);
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [38, 39, 40, 41];
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
    console.log(`  ${key} → synced`);
  }
}

// =====================================================
// DAILY PHRASES (gyb only — new root)
// =====================================================
async function insertDailyPhrases() {
  console.log('\n=== DAILY PHRASES (gyb) ===');

  const phrases = [
    { analysis_id: 2605, sense: 'invisible', arabic: 'عِلْمُ الْغَيْبِ عِنْدَ اللَّهِ', phon: '\'ilmu al-ghaybi \'inda Allāh', french: 'La connaissance de l\'invisible est aupres de Dieu' },
    { analysis_id: 2605, sense: 'invisible', arabic: 'هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ', phon: 'huwa \'ālimu al-ghaybi wa-l-shahāda', french: 'Il est le Connaisseur de l\'invisible et du visible' },
    { analysis_id: 2605, sense: 'invisible', arabic: 'يُؤْمِنُونَ بِالْغَيْبِ', phon: 'yu\'minūna bi-l-ghayb', french: 'Ils croient en l\'invisible' },
  ];

  let ok = 0, err = 0;
  for (const p of phrases) {
    const { data: existing } = await supabase.from('word_daily')
      .select('id').eq('analysis_id', p.analysis_id).eq('french', p.french);
    if (existing && existing.length > 0) {
      console.log('SKIP exists:', p.french);
      continue;
    }

    const { error } = await supabase.from('word_daily').insert(p);
    if (error) {
      console.log('ERR', p.analysis_id, p.french, ':', error.message);
      err++;
    } else {
      console.log('OK', p.analysis_id, p.french);
      ok++;
    }
  }
  console.log(`Daily phrases: ${ok} OK, ${err} erreurs`);
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 31 A 34 ===\n');

  for (let v = 31; v <= 34; v++) {
    await processVerse(v);
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log('\n=== PIPELINE V31-34 TERMINEE ===');
}

main();
