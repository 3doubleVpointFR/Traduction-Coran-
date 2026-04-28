const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 121, 122, 123
// V121: verse_id=128, analysis_id=485
// V122: verse_id=129, analysis_id=488
// V123: verse_id=130, analysis_id=489
// =====================================================

const verseData = {
  121: {
    verse_id: 128,
    analysis_id: 485,
    translation_arab: "Ceux a qui Nous avons donne le Livre, qui le recitent selon sa verite, ceux-la y adherent. Et celui qui le recouvre, ceux-la sont les perdants.",
    full_translation: "Ceux a qui Nous avons donne le Livre, qui le recitent comme il se doit, ceux-la y croient. Et ceux qui n'y croient pas sont les perdants.",
    translation_explanation: `§DEMARCHE§
Le verset distingue deux groupes parmi ceux qui ont recu le Livre : ceux qui le recitent correctement et y adherent, et ceux qui le recouvrent et subissent la perte. Le pronom relatif **alladhina** (ceux qui) introduit le premier groupe. Le verbe **ataynahum** est un accompli 1P de la racine a-t-y a la forme IV. Le Lane's donne : donner, accorder. La forme IV (af'ala) intensifie le don — Nous leur avons activement donne. Le pronom suffixe « hum » indique les destinataires du don. Le nom **al-kitaba** est un nom defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini designe LE Livre connu — l'ecriture revelee. Le verbe **yatlunahu** est un inaccompli 3MP de la racine q-r-a, forme I. Le Lane's donne : reciter, lire a voix haute, suivre. L'inaccompli indique une action continue — ils recitent regulierement, pas une seule fois. Le pronom suffixe « hu » renvoie au Livre. Le mot **haqqa** est un nom accusatif de la racine h-q-q. Le Lane's donne : verite, ce qui est juste, ce qui convient. L'accusatif absolu (maf'ul mutlaq) cree l'expression « haqqa tilawatihi » — la verite de sa recitation, c'est-a-dire comme il convient. Le mot **tilawatihi** est un nom genitif de la racine l-w-t. Le Lane's donne : recitation, lecture suivie. Le pronom « hi » renvoie au Livre. L'idafa (haqqa tilawatihi) cree l'expression « la verite de sa recitation » — reciter le Livre selon ce qu'il merite, selon sa verite. Le demonstratif **ula'ika** (ceux-la) reprend le premier groupe avec emphase. Le verbe **yu'minuna** est un inaccompli 3MP de la racine a-m-n a la forme IV. Le Lane's donne : adherer, avoir la foi, accepter comme vrai. La forme IV (af'ala) est causative — ils se mettent en etat d'adhesion. L'inaccompli marque une action continue. La preposition **bihi** (par lui, en lui) rattache l'adhesion au Livre. La conjonction **wa** (et) introduit le deuxieme groupe par contraste. Le pronom conditionnel **man** (celui qui) introduit la condition. Le verbe **yakfur** est un inaccompli majzum 3MS de la racine k-f-r. Le Lane's donne : couvrir, cacher, recouvrir. La forme I porte le sens premier de couvrir — celui qui recouvre la verite, qui la cache. Le majzum (apocope) est du a la particule conditionnelle man. La preposition **bihi** (par lui) rattache le recouvrement au Livre. La particule **fa** (alors, donc) introduit la consequence. Le demonstratif **ula'ika** (ceux-la) designe le deuxieme groupe. Le pronom **hum** (eux) est un pronom separatif qui renforce l'attribution. Le participe actif **al-khasiruna** est un pluriel defini de la racine kh-s-r. Le Lane's donne : ceux qui perdent, ceux qui subissent une perte. L'article defini avec le participe actif cree une categorie permanente — ils sont LES perdants par excellence.

§JUSTIFICATION§
**avons donne** — Le sens retenu est « donner ». Le verbe atayna est a la forme IV de a-t-y, qui porte specifiquement le sens de donner, accorder. L'alternative « venir » est ecartee car la forme IV avec pronom suffixe designe l'acte de donner, pas de venir.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitab designe l'ecriture revelee. L'article defini marque qu'il s'agit du Livre connu. L'alternative « prescrire » est ecartee car le mot est un nom defini, pas un verbe.

**le recitent** — Le sens retenu est « reciter ». Le verbe yatlunahu designe la lecture a voix haute, la recitation suivie. L'alternative « suivre » est possible mais la construction avec « haqqa tilawatihi » (la verite de sa recitation) confirme qu'il s'agit de la lecture soignee et attentive.

**verite** — Le sens retenu est « verite ». Le mot haqqa designe ce qui est juste, ce qui convient. L'alternative « droit » est ecartee car le contexte est la maniere de reciter (verite de la recitation), pas un droit legal.

**recitation** — Le sens retenu est « recitation ». Le mot tilawa designe la lecture suivie et soignee. Le pronom « hi » renvoie au Livre. L'expression « haqqa tilawatihi » signifie : selon la verite de sa recitation, c'est-a-dire comme il se doit.

**adherent** — Le sens retenu est « adherer/croire ». Le verbe yu'minuna est a la forme IV de a-m-n. Le Lane's donne : adherer, avoir la foi. La forme IV designe l'acte de se mettre en etat d'adhesion. L'alternative « securite » est ecartee car le verbe est un acte d'adhesion, pas un etat de securite.

**recouvre** — Le sens retenu est « couvrir/cacher ». Le verbe yakfur est a la forme I de k-f-r. Le Lane's donne : couvrir, cacher. Le sens premier est physique — couvrir quelque chose. L'alternative « nier » est probable mais le sens premier de couverture est plus precis etymologiquement.

**les perdants** — Le sens retenu est « perdre ». Le mot al-khasiruna designe ceux qui subissent une perte. L'alternative « etre trompe » est ecartee car le contexte est la perte reelle, pas la tromperie.

§CRITIQUE§
Hamidullah donne « ceux-la y croient » pour « ula'ika yu'minuna bihi ». Notre traduction donne « ceux-la y adherent » — le sens est proche, « adherer » etant plus proche de l'etymologie de la forme IV qui designe l'acte de se mettre en etat de confiance. Hamidullah donne « ceux qui n'y croient pas » pour « man yakfur bihi ». Notre traduction donne « celui qui le recouvre » — plus fidele au sens premier de k-f-r qui est couvrir, pas simplement ne pas croire. Hamidullah traduit « yatlunahu haqqa tilawatihi » par « qui le recitent comme il se doit » — notre traduction « qui le recitent selon sa verite » est plus proche de l'arabe qui dit litteralement « la verite de sa recitation ». La difference principale est sur le mot yakfur — nous privilegions le sens premier de couvrir la ou Hamidullah utilise la negation de la foi.`,
    segments: [
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 1 },
      { fr: "avons donne", pos: "verbe", phon: "'ataynahum", arabic: "\u0621\u064e\u0627\u062a\u064e\u064a\u0652\u0646\u064e\u0640\u0647\u064f\u0645\u064f", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 2 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 3 },
      { fr: "le recitent", pos: "verbe", phon: "yatlunahu", arabic: "\u064a\u064e\u062a\u0652\u0644\u064f\u0648\u0646\u064e\u0647\u064f\u06e5", word_key: "qra", is_particle: false, sense_retenu: "reciter", position: 4 },
      { fr: "selon la verite de", pos: "nom", phon: "haqqa", arabic: "\u062d\u064e\u0642\u0651\u064e", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 5 },
      { fr: "sa recitation", pos: "nom", phon: "tilawatihi", arabic: "\u062a\u0650\u0644\u064e\u0627\u0648\u064e\u062a\u0650\u0647\u0650\u06e6\u0653", word_key: "lwt", is_particle: false, sense_retenu: "recitation", position: 6 },
      { fr: "ceux-la", phon: "'ula'ika", arabic: "\u0623\u064f\u0648\u06df\u0644\u064e\u0640\u0653\u0626\u0650\u0643\u064e", is_particle: true, position: 7 },
      { fr: "adherent", pos: "verbe", phon: "yu'minuna", arabic: "\u064a\u064f\u0624\u0652\u0645\u0650\u0646\u064f\u0648\u0646\u064e", word_key: "amn", is_particle: false, sense_retenu: "adherer", position: 8 },
      { fr: "en lui", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650\u06e6", is_particle: true, position: 9 },
      { fr: "lui", pos: "pronom suffixe", phon: "hi", arabic: "\u0647\u0650\u06e6", word_key: "hwy", is_particle: false, sense_retenu: "pronom", position: 10 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 11 },
      { fr: "celui qui", phon: "man", arabic: "\u0645\u064e\u0646", is_particle: true, position: 12 },
      { fr: "recouvre", pos: "verbe", phon: "yakfur", arabic: "\u064a\u064e\u0643\u0652\u0641\u064f\u0631\u0652", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 13 },
      { fr: "en lui", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650\u06e6", is_particle: true, position: 14 },
      { fr: "lui", pos: "pronom suffixe", phon: "hi", arabic: "\u0647\u0650\u06e6", word_key: "hwy", is_particle: false, sense_retenu: "pronom", position: 15 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 16 },
      { fr: "ceux-la", phon: "'ula'ika", arabic: "\u0623\u064f\u0648\u06df\u0644\u064e\u0640\u0653\u0626\u0650\u0643\u064e", is_particle: true, position: 17 },
      { fr: "eux", phon: "hum", arabic: "\u0647\u064f\u0645\u064f", is_particle: true, position: 18 },
      { fr: "les perdants", pos: "adjectif", phon: "al-khasiruna", arabic: "\u0671\u0644\u0652\u062e\u064e\u0640\u0633\u0650\u0631\u064f\u0648\u0646\u064e", word_key: "khsr", is_particle: false, sense_retenu: "perdre", position: 19 }
    ],
    words: [
      // aty pos=2
      {
        word_key: "aty", position: 2, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe ataynahum est un accompli 1P de la racine a-t-y a la forme IV. Le Lane's donne : donner, accorder, apporter. La forme IV (af'ala) intensifie l'action — Nous leur avons activement donne. Le pronom suffixe « hum » designe les destinataires. Le sens de « donner » est directement confirme par la construction : sujet divin (Nous) + verbe + objet indirect (eux) + objet direct (le Livre). Le don est un mouvement directionnel de l'expediteur vers le destinataire.",
              axe1_verset: "Le verbe ataynahum ouvre le verset en posant le fait fondateur : Dieu a donne le Livre a un groupe specifique. Le champ lexical du verset (Livre, reciter, verite, adherer) tourne autour de la reception et de l'usage du Livre. Le don est le point de depart de tout — sans le don, pas de recitation ni d'adhesion. Le verset distingue deux reactions au don : reciter correctement et adherer, ou couvrir et perdre.",
              axe2_voisins: "Le verset 120 traitait du refus des communautes de suivre la direction du Prophete. Le verset 121 enchaine avec un groupe different — ceux a qui le Livre a ete donne et qui le recitent correctement. Le verset 122 reprendra l'interpellation des Enfants d'Israel. Le don du Livre est un point de reference constant dans ce passage.",
              axe3_sourate: "La racine a-t-y au sens de « donner » est recurrente dans la sourate al-Baqarah. En 2:87, « Nous avons donne a Moussa le Livre ». En 2:53, « Nous avons donne a Moussa le Livre et le Discernement ». La sourate insiste sur le fait que le Livre est un don divin — un privilege qui engage le destinataire.",
              axe4_coherence: "L'expression « alladhina ataynahu al-kitab » (ceux a qui Nous avons donne le Livre) est une formule coranique recurrente. Elle apparait en 2:146, 6:20, 6:114. Le Coran identifie systematiquement un groupe par le don qu'il a recu — le don cree une identite et une responsabilite.",
              axe5_frequence: "Pour la mission du khalifa, recevoir le don du Livre est le debut de la responsabilite. Le khalifa ne choisit pas de recevoir — le Livre lui est donne. Mais il choisit comment il le traite : le reciter correctement ou le couvrir. Le don divin n'est pas un privilege passif mais une charge active."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["detruire"],
              proof_ctx: "Le sens de destruction est hors sujet — le contexte est le don du Livre, pas sa destruction."
            }
          }
        }
      },
      // ktb pos=3
      {
        word_key: "ktb", position: 3, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["livre", "ecriture revelee", "registre", "contrat ecrit", "contrat de mariage", "contrat d'affranchissement"],
              proof_ctx: "Le mot al-kitaba est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini (al-) marque que c'est LE Livre connu — l'ecriture revelee. Ici le Livre est l'objet du don divin (ataynahu al-kitab) et l'objet de la recitation (yatlunahu). La distinction avec l'ecriture (probable) est que le contexte designe le Livre comme objet de revelation donne et recite, pas l'acte d'ecrire.",
              axe1_verset: "Le mot al-kitab est l'objet central du verset — il est donne, recite, et c'est envers lui qu'on adhere ou qu'on couvre. Le champ lexical (donner, reciter, verite, adherer, couvrir) tourne entierement autour du Livre. Le verset pose le Livre comme le critere de distinction entre ceux qui adherent et ceux qui perdent.",
              axe2_voisins: "Le verset 120 parlait de la direction (qibla) et du desaccord. Le verset 121 recentre sur le Livre comme norme — ceux qui le recitent correctement sont ceux qui adherent. Le verset 122 interpellera les Enfants d'Israel en leur rappelant les bienfaits. Le Livre est le fil conducteur entre ces passages.",
              axe3_sourate: "La racine k-t-b est une des racines les plus importantes de la sourate al-Baqarah. En 2:2, « Ce Livre, nul doute en lui ». En 2:44, « vous qui lisez le Livre ». La sourate est elle-meme un Livre qui parle du Livre — le kitab est le pivot thematique de la sourate entiere.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le mot kitab designe a la fois le Coran, la Torah, l'Evangile et les ecritures en general. En 2:121, le Livre est l'objet du don et de la recitation — il unifie les deux groupes (ceux qui adherent et ceux qui couvrent) par leur rapport commun au meme Livre.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide de la mission. Le don du Livre fonde la responsabilite — le khalifa doit le reciter selon sa verite pour adherer a son contenu. Negliger le Livre c'est perdre la direction de la mission."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["ecrire", "dicter", "copier un livre", "art de l'ecriture", "scribe", "s'inscrire", "savant", "enseignant", "vendeur de livres", "ecole", "demander d'ecrire", "ecrire a quelqu'un"],
              proof_ctx: "Le sens d'ecriture est un sens majeur de k-t-b — l'acte de tracer des signes. La distinction philosophique avec le Livre est que l'ecriture est l'acte (tracer des signes), tandis que le Livre est le resultat (le support qui contient le texte). Le verset parle du Livre comme objet qu'on recite — on recite un livre, pas un acte d'ecriture.",
              axe1_verset: "Le mot al-kitab pourrait theoriquement porter le sens d'ecriture. Mais le verset traite le kitab comme un objet donne et recite. On donne un livre, on recite un livre — pas un acte d'ecriture. Le sens de livre-objet est plus coherent avec les verbes du verset.",
              axe2_voisins: "Les versets voisins traitent le kitab comme un objet de revelation. Le sens d'ecriture (acte) apparait dans d'autres contextes de la sourate (2:282, les contrats).",
              axe3_sourate: "La sourate utilise kitab principalement au sens de livre-objet de revelation quand il est defini (al-kitab). Le sens d'ecriture apparait quand le mot est un verbe ou dans un contexte juridique.",
              axe4_coherence: "Le Coran utilise kitab dans les deux sens selon le contexte. Avec l'article defini et comme objet de la recitation, c'est toujours le Livre revele.",
              axe5_frequence: "L'ecriture comme acte est un outil du khalifa, mais dans ce verset c'est le Livre comme guide qui est en jeu."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "decret divin", "predestination", "rendre obligatoire", "juger"],
              proof_ctx: "Le sens de decret est hors sujet — le verset parle du Livre comme objet donne et recite, pas d'un decret ou d'une prescription."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre", "attacher"],
              proof_ctx: "Le sens d'assemblage est un sens physique premier de k-t-b. Le contexte est le Livre revele, pas l'acte de rassembler."
            }
          }
        }
      },
      // qra pos=4
      {
        word_key: "qra", position: 4, sense_chosen: "reciter",
        analysis_axes: {
          sense_chosen: "reciter",
          concept_chosen: "Lecture/Récitation",
          concepts: {
            "Lecture/Récitation": {
              status: "retenu",
              senses: ["lire", "reciter", "Coran", "proclamer"],
              proof_ctx: "Le verbe yatlunahu est un inaccompli 3MP de la racine q-r-a (forme I, avec le sens de tilawa — recitation suivie). Le Lane's donne : reciter, lire a voix haute, suivre dans la lecture. L'inaccompli marque une action continue et repetee — ils recitent regulierement. Le pronom suffixe « hu » renvoie au Livre. La recitation est l'acte de lire a voix haute en suivant le texte — c'est un engagement actif avec le contenu du Livre.",
              axe1_verset: "Le verbe yatlunahu est l'action centrale du premier groupe — ceux qui recitent le Livre selon sa verite. Le champ lexical (Livre, verite, recitation) montre que la recitation est l'acte qui distingue les vrais fideles. Reciter n'est pas simplement prononcer des mots — c'est suivre le texte avec attention et comprehension, comme l'indique « haqqa tilawatihi ».",
              axe2_voisins: "Le verset 120 parlait du refus de suivre. Le verset 121 oppose a ce refus l'acte de reciter correctement — suivre le Livre dans sa recitation est l'inverse de refuser de suivre. Le verset 122 rappellera les bienfaits, prolongeant le theme de la relation correcte avec le message divin.",
              axe3_sourate: "La racine q-r-a apparait dans la sourate al-Baqarah dans le contexte de la lecture et de la proclamation. Le mot tilawa (recitation) est specifique — il designe la lecture suivie, attentive, qui respecte le texte. La sourate insiste sur l'engagement actif avec le Livre, pas la simple possession.",
              axe4_coherence: "La racine q-r-a apparait environ 88 fois dans le Coran. Le nom Qur'an (Coran) vient de cette racine — le Livre par excellence est celui qui est recite. En 75:17-18, « c'est a Nous de le rassembler et de le reciter ; quand Nous le recitons, suis sa recitation ». La recitation est l'acte fondamental du rapport au Livre.",
              axe5_frequence: "Pour la mission du khalifa, la recitation est l'acte premier de la mission. Reciter le Livre selon sa verite c'est s'engager activement avec les instructions de la mission. Le khalifa ne se contente pas de posseder le Livre — il le recite, le medite, le suit."
            }
          }
        }
      },
      // hqq pos=5
      {
        word_key: "hqq", position: 5, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["etre vrai", "verite", "realite", "droit"],
              proof_ctx: "Le mot haqqa est un nom accusatif de la racine h-q-q. Le Lane's donne : verite, ce qui est juste, ce qui convient. L'accusatif absolu dans l'expression « haqqa tilawatihi » cree un maf'ul mutlaq — la verite de sa recitation, c'est-a-dire comme il convient, selon ce qu'il merite. La verite ici est la norme de la recitation — reciter selon la verite c'est reciter correctement, avec comprehension et respect du sens.",
              axe1_verset: "Le mot haqqa qualifie la recitation — il fixe la norme. Le champ lexical (Livre, reciter, verite, adherer) montre que la verite est le critere de distinction. Reciter selon la verite (haqqa tilawatihi) c'est s'engager avec le contenu reel du Livre, pas simplement prononcer des mots. La verite de la recitation est ce qui mene a l'adhesion.",
              axe2_voisins: "Les versets 119-120 traitaient du desaccord et de la direction. Le verset 121 pose la verite comme norme — ceux qui recitent selon la verite sont ceux qui suivent la bonne direction. La verite du Livre est la reponse au desaccord.",
              axe3_sourate: "La racine h-q-q est fondamentale dans la sourate al-Baqarah. En 2:26, « la verite de la part de ton Seigneur ». En 2:42, « ne melangez pas le vrai avec le faux ». La sourate oppose constamment la verite (haqq) et le faux (batil) — le verset 121 place la verite comme norme de la recitation.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. L'expression « haqqa tilawatihi » est unique dans le Coran — elle n'apparait qu'en 2:121. Cette unicite souligne l'importance de la norme : il y a une bonne maniere de reciter le Livre, celle qui respecte sa verite.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de la mission. Reciter selon la verite c'est s'aligner sur la realite, pas sur les interpretations humaines. Le khalifa doit chercher la verite du Livre, pas ce qui arrange ses desirs."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "meriter", "etre obligatoire"],
              proof_ctx: "Le sens d'obligation est hors sujet dans ce contexte — le mot haqqa qualifie la recitation par la verite, pas par l'obligation. L'accusatif absolu a ici un sens de norme, pas de devoir."
            }
          }
        }
      },
      // lwt pos=6
      {
        word_key: "lwt", position: 6, sense_chosen: "recitation",
        analysis_axes: {
          sense_chosen: "recitation",
          concept_chosen: "Prophète/Histoire",
          concepts: {
            "Prophète/Histoire": {
              status: "nul",
              senses: ["Lot", "prophete Lot"],
              proof_ctx: "Le mot tilawatihi est un masdar (nom verbal) de la forme I de la racine t-l-w. Il ne s'agit pas du nom propre Lut (Lot) mais du nom verbal tilawa qui designe la recitation, la lecture suivie. Le contexte est grammatical — le mot est en idafa avec haqqa et porte un pronom suffixe (hi). Le prophete Lot n'a aucun rapport avec ce passage."
            }
          }
        }
      },
      // amn pos=8
      {
        word_key: "amn", position: 8, sense_chosen: "adherer",
        analysis_axes: {
          sense_chosen: "adherer",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le verbe yu'minuna est un inaccompli 3MP de la racine a-m-n a la forme IV. Le Lane's donne : adherer, avoir la foi, accepter comme vrai, se mettre en etat de securite interieure par l'adhesion. La forme IV (af'ala) est causative — ils se mettent activement en etat d'adhesion. L'inaccompli marque une action continue. La preposition « bi » (en) indique l'objet de l'adhesion. La distinction avec la securite (probable) est que le verbe est a la forme IV qui designe specifiquement l'adhesion, pas simplement le sentiment de securite.",
              axe1_verset: "Le verbe yu'minuna est la consequence de la bonne recitation — ceux qui recitent le Livre selon sa verite finissent par y adherer. Le champ lexical (donner, reciter, verite, adherer) construit une progression : recevoir → reciter → adherer. L'adhesion est le resultat naturel de la recitation correcte. Ceux qui ne recitent pas correctement ne peuvent pas adherer.",
              axe2_voisins: "Le verset 120 parlait du refus de suivre. Le verset 121 montre que l'adhesion vient de la recitation correcte — pas de la simple appartenance communautaire. Le contraste entre les deux versets est clair : on adhere par la pratique, pas par l'identite.",
              axe3_sourate: "La racine a-m-n est l'une des plus frequentes de la sourate al-Baqarah. En 2:3-4, les attributs des croyants sont detailles. En 2:62, ceux qui adherent a Dieu et au Jour dernier sont sauves. La sourate place l'adhesion comme critere central de salut.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. La forme IV (amana-yu'minu) est la forme la plus courante dans le Coran pour designer l'adhesion de foi. Le lien entre recitation correcte et adhesion en 2:121 est unique — il montre que la foi nait de l'engagement reel avec le Livre.",
              axe5_frequence: "Pour la mission du khalifa, l'adhesion est le fondement de la mission. Le khalifa n'est pas un simple executant — il adhere au contenu de sa mission. L'adhesion nait de la recitation correcte du Livre, pas de la conformite sociale."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["etre en securite", "se sentir en securite", "faire confiance", "confier", "fidele", "lieu sur"],
              proof_ctx: "Le sens de securite est le sens premier de la racine a-m-n — l'etat de tranquillite interieure. La distinction philosophique avec l'adhesion est que la securite est un etat passif (on se sent en securite) tandis que l'adhesion est un acte actif (on choisit d'adherer). Le verbe est a la forme IV qui designe specifiquement l'acte d'adhesion, pas l'etat de securite.",
              axe1_verset: "Le sens de securite est possible — ceux qui recitent correctement se sentent en securite par rapport au Livre. Mais le verset oppose l'adhesion au recouvrement (kufr), pas la securite a l'insecurite. Le contraste confirme le sens d'adhesion.",
              axe2_voisins: "Les versets voisins traitent de l'acceptation ou du rejet du message. Le sens d'adhesion est plus coherent avec ce contexte de choix entre accepter et rejeter.",
              axe3_sourate: "La sourate utilise la forme IV principalement au sens d'adhesion. La securite apparait dans d'autres contextes (2:125, le lieu sur).",
              axe4_coherence: "Dans le Coran, la forme IV de a-m-n avec la preposition « bi » designe toujours l'adhesion, pas la securite. Le schema « amana bi » est le schema standard de l'acte de foi.",
              axe5_frequence: "La securite est un resultat de l'adhesion, pas un synonyme. Le khalifa trouve la securite par l'adhesion au Livre."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["proteger", "accorder la securite"],
              proof_ctx: "Le sens de garantie/protection est hors sujet — le verbe est a la forme IV intransitive (il adhere), pas a la forme IV transitive (il accorde la securite)."
            }
          }
        }
      },
      // kfr pos=13
      {
        word_key: "kfr", position: 13, sense_chosen: "couvrir",
        analysis_axes: {
          sense_chosen: "couvrir",
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le verbe yakfur est un inaccompli majzum 3MS de la racine k-f-r a la forme I. Le Lane's donne : couvrir, cacher, recouvrir. Le sens premier et etymologique est physique — le kufr est l'acte de couvrir quelque chose, de le cacher sous un voile. Le cultivateur (kafir) est celui qui couvre la graine dans la terre. La nuit (kafir) est celle qui couvre le jour. Le verset oppose l'adhesion (iman) au recouvrement (kufr) — l'un accepte la verite, l'autre la couvre.",
              axe1_verset: "Le verbe yakfur est l'antithese de yu'minuna — l'un adhere, l'autre couvre. Le champ lexical (Livre, reciter, verite, adherer vs couvrir, perdre) montre que couvrir le Livre c'est refuser de voir sa verite. Le verset construit un contraste net : la recitation correcte mene a l'adhesion, le recouvrement mene a la perte.",
              axe2_voisins: "Le verset 120 parlait du refus de suivre. Le verset 121 montre deux attitudes : adherer ou couvrir. Le verset 122 interpellera les Enfants d'Israel — le passage enchaine sur la responsabilite de ceux qui ont recu le Livre.",
              axe3_sourate: "La racine k-f-r est une des plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui couvrent, c'est egal pour eux ». En 2:89, « quand il leur vint ce qu'ils connaissaient, ils le couvrirent ». La sourate montre que le kufr est un acte delibere de recouvrement, pas une simple ignorance.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le sens premier de couvrir est preserve dans les usages coraniques — le kafir est celui qui couvre la verite qu'il connait. En 2:121, le contraste avec l'adhesion montre que le kufr est un choix actif, pas un etat passif.",
              axe5_frequence: "Pour la mission du khalifa, couvrir la verite est l'antithese de la mission. Le khalifa est charge de decouvrir et de manifester la verite, pas de la couvrir. Le kufr est la trahison de la mission."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["nier", "etre ingrat", "renier un bienfait", "rejeter", "mecreant"],
              proof_ctx: "Le sens de rejet/ingratitude est une extension naturelle du sens de couverture — rejeter c'est couvrir ce qu'on a recu. La distinction philosophique est que la couverture est l'acte physique (cacher sous un voile), tandis que le rejet est l'attitude morale (refuser de reconnaitre). Le verbe yakfur avec « bihi » (en lui) peut signifier « il couvre sa realite » ou « il le rejette ». Les deux sens sont proches mais le sens premier de couverture est plus fidele a l'etymologie.",
              axe1_verset: "Le sens de rejet est coherent avec le verset — celui qui rejette le Livre est un perdant. Mais le contraste avec l'adhesion (iman) est plus precis avec le sens de couverture : l'un ouvre, l'autre couvre.",
              axe2_voisins: "Les versets voisins montrent des attitudes de refus. Le sens de rejet est coherent avec le contexte general mais le sens de couverture est plus precis etymologiquement.",
              axe3_sourate: "La sourate utilise k-f-r dans les deux sens. En 2:6, le contexte suggere la couverture. En 2:89, le contexte montre le rejet de ce qu'on connait. Les deux sens sont lies.",
              axe4_coherence: "Le Coran lie le kufr a la connaissance — le kafir sait mais couvre. Ce lien entre savoir et couvrir est plus clair avec le sens de couverture qu'avec le simple rejet.",
              axe5_frequence: "L'ingratitude est une forme de couverture — couvrir le bienfait recu. Les deux sens convergent vers le meme acte de nier ce qu'on a recu."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "Le sens d'expiation est hors sujet — le contexte est l'attitude envers le Livre, pas la reparation d'une faute."
            }
          }
        }
      },
      // khsr pos=19
      {
        word_key: "khsr", position: 19, sense_chosen: "perdre",
        analysis_axes: {
          sense_chosen: "perdre",
          concept_chosen: "Perte/Diminution",
          concepts: {
            "Perte/Diminution": {
              status: "retenu",
              senses: ["perdre", "subir une perte"],
              proof_ctx: "Le mot al-khasiruna est un participe actif pluriel defini de la racine kh-s-r. Le Lane's donne : ceux qui perdent, ceux qui subissent une perte. L'article defini avec le participe actif cree une categorie permanente — ils sont LES perdants par definition. Le participe actif indique un etat continu, pas une perte ponctuelle. L'expression « ula'ika hum al-khasiruna » (ceux-la, eux, sont les perdants) utilise trois niveaux d'emphase pour marquer la certitude du jugement.",
              axe1_verset: "Le mot al-khasiruna conclut le verset en donnant le verdict — ceux qui couvrent le Livre sont les perdants. Le champ lexical construit une progression : donner → reciter → adherer (positif) vs couvrir → perdre (negatif). La perte est la consequence directe du recouvrement. Le verset montre que la perte n'est pas une punition externe mais la consequence naturelle de l'acte de couvrir.",
              axe2_voisins: "Le verset 120 parlait du desaccord. Le verset 121 conclut par la perte — ceux qui couvrent le Livre perdent. Le verset 122 rappellera les bienfaits de Dieu. La perte est le resultat de l'ingratitude envers le bienfait du Livre.",
              axe3_sourate: "La racine kh-s-r apparait dans la sourate al-Baqarah pour qualifier ceux qui rejettent la verite. En 2:27, « ceux-la sont les perdants ». En 2:64, « vous seriez parmi les perdants ». La sourate utilise la perte comme consequence constante du rejet.",
              axe4_coherence: "L'expression « ula'ika hum al-khasiruna » (ceux-la sont les perdants) est une formule coranique recurrente. Elle apparait dans de nombreuses sourates pour conclure un passage sur le rejet. Le Coran presente la perte comme la consequence inevitable du recouvrement de la verite.",
              axe5_frequence: "Pour la mission du khalifa, la perte est l'echec de la mission. Le khalifa qui couvre la verite du Livre perd sa mission. La perte n'est pas materielle — c'est la perte de la direction, du sens, de l'alignement avec la verite."
            },
            "Égarement": {
              status: "nul",
              senses: ["etre dans l'erreur", "etre trompe"],
              proof_ctx: "Le sens d'egarement est un sens connexe mais distinct. La perte (khusr) est un resultat — on a perdu quelque chose. L'egarement (dalal) est un etat — on ne sait plus ou aller. Le verset parle de perte, pas d'egarement."
            },
            "Destruction": {
              status: "nul",
              senses: ["faire perir", "perdition"],
              proof_ctx: "Le sens de destruction est trop fort — le verset parle de perte, pas d'aneantissement. Le participe actif « khasir » designe celui qui perd, pas celui qui est detruit."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:122
  // =====================================================
  122: {
    verse_id: 129,
    analysis_id: 488,
    translation_arab: "O descendants d'Israel, rappelez-vous Mon bienfait dont Je vous ai combles, et que Je vous ai distingues sur les peuples.",
    full_translation: "O enfants d'Israel, rappelez-vous Mon bienfait dont Je vous ai combles, et [rappelez-vous] que Je vous ai preferes a tous les peuples (de l'epoque).",
    translation_explanation: `§DEMARCHE§
Le verset est une interpellation directe des Enfants d'Israel, leur rappelant deux choses : le bienfait divin et leur distinction parmi les peuples. La particule d'appel **ya** (o) introduit l'interpellation. Le mot **bani** est un pluriel de la racine b-n-y. Le Lane's donne : fils, descendants. L'idafa « bani Isra'il » cree l'expression « fils/descendants d'Israel ». Le nom **Isra'il** est un nom propre non arabe au genitif. Il designe le prophete Ya'qub (Jacob). « Bani Isra'il » est l'expression coranique standard pour designer les Enfants d'Israel. Le verbe **udhkuru** est un imperatif 2MP de la racine dh-k-r. Le Lane's donne : se souvenir, rappeler, mentionner. L'imperatif marque un ordre divin — rappelez-vous, ne laissez pas l'oubli vous gagner. Le nom **ni'mati** est un nom feminin singulier de la racine n-'-m avec pronom suffixe 1S (ya). Le Lane's donne : bienfait, faveur, grace. Le pronom suffixe « ya » (Mon) rattache le bienfait a Dieu — c'est Mon bienfait. L'idafa « ni'mati » (Mon bienfait) marque que le bienfait vient de Dieu et reste la propriete de Dieu. Le pronom relatif **allati** est un relatif feminin singulier de la racine l-t-y. Le Lane's donne : celle qui, laquelle. Il introduit la proposition relative qui qualifie le bienfait. Le verbe **an'amtu** est un accompli 1S de la racine n-'-m a la forme IV. Le Lane's donne : combler de bienfaits, accorder une faveur. La forme IV (af'ala) intensifie l'action — J'ai activement comble. L'accompli marque que le bienfait est un fait acheve. Le pronom suffixe « kum » designe les Enfants d'Israel. La preposition **'alaykum** (sur vous) indique les destinataires du bienfait. La conjonction **wa** (et) introduit le deuxieme element du rappel. Le mot **anni** est une particule de la racine n-y-y. Il introduit la proposition nominale « que Je... ». Le verbe **faddaltukum** est un accompli 1S de la racine f-d-l a la forme II avec pronom suffixe 2MP. Le Lane's donne : distinguer, preferer, accorder un merite superieur. La forme II (fa''ala) intensifie l'action — J'ai activement distingue. Le pronom suffixe « kum » designe les Enfants d'Israel. La preposition **'ala** (sur, par rapport a) introduit la comparaison. Le mot **al-'alamin** est un pluriel defini de la racine '-l-m. Le Lane's donne : les mondes, les peuples, l'ensemble des creatures. L'article defini marque la totalite — tous les peuples, sans exception (a l'epoque).

§JUSTIFICATION§
**descendants** — Le sens retenu est « fils/filiation ». Le mot bani est le pluriel de ibn (fils). L'alternative « construire » est ecartee car le mot est au pluriel avec idafa, designant une descendance, pas un acte de construction.

**Israel** — Nom propre du prophete Ya'qub. Pas de sens alternatif pertinent — c'est un nom propre non arabe.

**rappelez-vous** — Le sens retenu est « se souvenir/rappeler ». Le verbe udhkuru est un imperatif de dh-k-r. L'alternative « masculin » est ecartee car le verbe est clairement un verbe de memoire, pas un nom designant le sexe.

**bienfait** — Le sens retenu est « bienfait/faveur ». Le mot ni'mati designe le bienfait divin. L'alternative « douceur » est probable mais le sens de bienfait actif est plus precis dans ce contexte d'interpellation.

**celle qui** — Le pronom relatif allati relie le bienfait a la proposition suivante. C'est un outil grammatical, pas un mot de contenu.

**ai combles** — Le sens retenu est « combler de bienfaits ». Le verbe an'amtu est a la forme IV de n-'-m. L'alternative « douceur » est le sens premier de la racine mais la forme IV designe specifiquement l'acte de combler de bienfaits.

**que** — Le mot anni introduit la proposition nominale. C'est un outil grammatical.

**ai distingues** — Le sens retenu est « distinguer/preferer ». Le verbe faddaltukum est a la forme II de f-d-l. Le Lane's donne : distinguer, accorder un merite superieur. L'alternative « surplus » est ecartee car le verbe est un acte de distinction, pas de restes.

**les peuples** — Le sens retenu est « monde/peuples ». Le mot al-'alamin designe l'ensemble des peuples. L'alternative « savoir » est ecartee car le mot est un nom pluriel defini designant les mondes, pas un verbe de connaissance.

§CRITIQUE§
Hamidullah donne « enfants d'Israel » pour « bani Isra'il » — notre traduction « descendants d'Israel » est plus fidele au sens de bani qui designe la descendance au sens large. Hamidullah donne « rappelez-vous Mon bienfait dont Je vous ai combles » — identique a notre traduction. Hamidullah ajoute « de l'epoque » entre parentheses apres « les peuples » — cette precision n'est pas dans le texte arabe mais est une interpretation (les Enfants d'Israel ont ete preferes parmi les peuples de leur epoque). Notre traduction reste plus proche du texte. La seule difference notable est « enfants » vs « descendants ».`,
    segments: [
      { fr: "o", phon: "ya", arabic: "\u064a\u064e\u0640", is_particle: true, position: 1 },
      { fr: "descendants de", pos: "nom", phon: "bani", arabic: "\u0628\u064e\u0646\u0650\u0649\u0653", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 2 },
      { fr: "Israel", pos: "nom", phon: "Isra'il", arabic: "\u0625\u0650\u0633\u0652\u0631\u064e\u0640\u0653\u0621\u0650\u064a\u0644\u064e", word_key: "isr", is_particle: false, sense_retenu: "Israel", position: 3 },
      { fr: "rappelez-vous", pos: "verbe", phon: "udhkuru", arabic: "\u0671\u0630\u0652\u0643\u064f\u0631\u064f\u0648\u0627\u06df", word_key: "dhkr", is_particle: false, sense_retenu: "se souvenir", position: 4 },
      { fr: "Mon bienfait", pos: "nom", phon: "ni'mati", arabic: "\u0646\u0650\u0639\u0652\u0645\u064e\u062a\u0650\u0649\u064e", word_key: "nem", is_particle: false, sense_retenu: "bienfait", position: 5 },
      { fr: "celle qui", pos: "pronom relatif", phon: "allati", arabic: "\u0671\u0644\u0651\u064e\u062a\u0650\u0649\u0653", word_key: "lty", is_particle: false, sense_retenu: "celle qui", position: 6 },
      { fr: "ai combles", pos: "verbe", phon: "an'amtu", arabic: "\u0623\u064e\u0646\u0652\u0639\u064e\u0645\u0652\u062a\u064f", word_key: "nem", is_particle: false, sense_retenu: "combler de bienfaits", position: 7 },
      { fr: "sur vous", phon: "'alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652", is_particle: true, position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 9 },
      { fr: "que", pos: "nom", phon: "anni", arabic: "\u0623\u064e\u0646\u0650\u0651\u0649", word_key: "nyy", is_particle: false, sense_retenu: "que", position: 10 },
      { fr: "ai distingues", pos: "verbe", phon: "faddaltukum", arabic: "\u0641\u064e\u0636\u0651\u064e\u0644\u0652\u062a\u064f\u0643\u064f\u0645\u0652", word_key: "fdl", is_particle: false, sense_retenu: "distinguer", position: 11 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 12 },
      { fr: "les peuples", pos: "nom", phon: "al-'alamin", arabic: "\u0671\u0644\u0652\u0639\u064e\u0640\u0644\u064e\u0645\u0650\u064a\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "peuples", position: 13 }
    ],
    words: [
      // bny pos=2
      {
        word_key: "bny", position: 2, sense_chosen: "fils",
        analysis_axes: {
          sense_chosen: "fils",
          concept_chosen: "Filiation",
          concepts: {
            "Filiation": {
              status: "retenu",
              senses: ["fils"],
              proof_ctx: "Le mot bani est un pluriel de la racine b-n-y. Le Lane's donne : fils, descendants, enfants. Le pluriel bani (ou banun) designe les fils au sens de descendance. L'idafa « bani Isra'il » est l'expression coranique standard pour « Enfants d'Israel ». La filiation est la construction biologique — le fils est ce qui est construit a partir du pere. La distinction avec la construction (nul) est que le mot est au pluriel avec idafa, designant des personnes, pas un acte de batir.",
              axe1_verset: "Le mot bani ouvre l'interpellation en identifiant les destinataires — les descendants d'Israel. Le champ lexical (descendants, Israel, bienfait, combler, distinguer) montre que le verset s'adresse a un peuple specifique par sa filiation. L'interpellation par la filiation rappelle l'heritage et la responsabilite qui en decoule.",
              axe2_voisins: "Le verset 121 parlait de ceux qui ont recu le Livre. Le verset 122 identifie les destinataires specifiques — les Enfants d'Israel. Le verset 123 les avertira du Jour ou aucune ame ne suffira pour une autre. L'interpellation par la filiation cree un lien entre les versets.",
              axe3_sourate: "L'expression « bani Isra'il » apparait 5 fois dans la sourate al-Baqarah (2:40, 2:47, 2:83, 2:122, 2:211). Chaque occurrence est une interpellation directe qui rappelle un bienfait ou une injonction. La sourate structure le dialogue avec les Enfants d'Israel par ces interpellations repetees.",
              axe4_coherence: "L'expression « ya bani Isra'il » (o Enfants d'Israel) apparait environ 42 fois dans le Coran. Elle marque toujours une interpellation solennelle qui rappelle les bienfaits et les obligations. La filiation est le lien permanent entre le peuple et son ancetre — elle porte l'heritage et la responsabilite.",
              axe5_frequence: "Pour la mission du khalifa, la filiation rappelle la continuite de la mission. Les descendants heritent de la mission de leurs ancetres — ils ne peuvent pas la renier. L'interpellation par la filiation est un rappel de la responsabilite heritee."
            },
            "Construction/Édification": {
              status: "nul",
              senses: ["construire", "batir", "edifier", "donner une maison"],
              proof_ctx: "Le sens de construction est le sens premier de b-n-y. Mais le mot bani est ici au pluriel avec idafa designant des personnes (fils d'Israel), pas un acte de construction. Le contexte est l'interpellation d'un peuple par sa genealogie."
            }
          }
        }
      },
      // isr pos=3
      {
        word_key: "isr", position: 3, sense_chosen: "Israel",
        analysis_axes: {
          sense_chosen: "Israel",
          concept_chosen: "Lien/Captivité",
          concepts: {
            "Lien/Captivité": {
              status: "retenu",
              senses: ["lier", "enchainer", "capturer", "prisonnier", "captif"],
              proof_ctx: "Le mot Isra'il est un nom propre non arabe designant le prophete Ya'qub (Jacob). Etymologiquement, le nom peut etre decompose en « isra » (celui qui lie, qui marche de nuit) et « il » (Dieu). Mais dans le contexte coranique, c'est un nom propre utilise tel quel, sans decomposition etymologique. Les sens de la racine i-s-r (lier, capturer) ne sont pas actifs dans ce nom propre — il fonctionne comme un identifiant du peuple descendant de Ya'qub.",
              axe1_verset: "Le mot Isra'il identifie le peuple interpelle. Il n'a pas de sens actif dans le verset — c'est un nom propre qui sert de reference. Le champ lexical (descendants, bienfait, distinguer) montre que l'interpellation porte sur la relation entre Dieu et ce peuple specifique, identifie par le nom de son ancetre.",
              axe2_voisins: "Les versets voisins s'inscrivent dans le dialogue entre Dieu et les Enfants d'Israel. Le nom Isra'il est le marqueur d'identite qui structure ce dialogue dans toute la sourate.",
              axe3_sourate: "Le nom Isra'il apparait dans la sourate al-Baqarah en 2:40, 2:47, 2:83, 2:122, 2:211. Il sert toujours a identifier le peuple interpelle. La sourate construit un dialogue soutenu avec ce peuple en rappelant ses bienfaits et ses transgressions.",
              axe4_coherence: "Le nom Isra'il apparait environ 43 fois dans le Coran, toujours dans l'expression « bani Isra'il ». Il n'est jamais utilise pour designer Ya'qub directement (le Coran utilise Ya'qub pour le prophete). Isra'il est le nom de l'ancetre en tant que fondateur d'une lignee.",
              axe5_frequence: "Pour la mission du khalifa, le nom Isra'il rappelle qu'un peuple entier a ete charge d'une mission. La lignee d'Israel portait la mission de la revelation. Le khalifa doit apprendre de l'histoire de ce peuple — ses reussites et ses echecs dans l'accomplissement de la mission."
            }
          }
        }
      },
      // dhkr pos=4
      {
        word_key: "dhkr", position: 4, sense_chosen: "se souvenir",
        analysis_axes: {
          sense_chosen: "se souvenir",
          concept_chosen: "Mémoire/Rappel",
          concepts: {
            "Mémoire/Rappel": {
              status: "retenu",
              senses: ["se souvenir", "rappeler", "mentionner", "memoire"],
              proof_ctx: "Le verbe udhkuru est un imperatif 2MP de la racine dh-k-r a la forme I. Le Lane's donne : se souvenir, rappeler a la memoire, mentionner. L'imperatif marque un ordre divin — l'acte de se souvenir n'est pas facultatif, c'est une injonction. Le verbe est transitif avec objet direct « ni'mati » (Mon bienfait) — rappelez-vous Mon bienfait. Le souvenir est un acte interieur qui ramene a la conscience ce qui est absent. La distinction avec le masculin (nul) est evidente : le verbe est un imperatif de memoire, pas un nom designant le sexe.",
              axe1_verset: "Le verbe udhkuru est l'injonction centrale du verset — rappelez-vous. Le champ lexical (bienfait, combler, distinguer) montre que l'objet du souvenir est le bienfait divin. Le verset demande un acte de memoire actif — ne pas oublier ce que Dieu a fait. L'oubli des bienfaits est le premier pas vers l'ingratitude.",
              axe2_voisins: "Le verset 121 parlait de ceux qui recitent le Livre correctement. Le verset 122 enchaine avec une injonction de memoire — se souvenir des bienfaits. Le verset 123 avertira du Jour du jugement. La memoire est le lien entre le passe (bienfaits recus) et le futur (Jour du jugement).",
              axe3_sourate: "La racine dh-k-r apparait dans la sourate al-Baqarah dans plusieurs contextes. En 2:40, « rappelez-vous Mon bienfait » — le meme verset quasi identique. En 2:152, « rappelez-vous Moi, Je Me rappellerai de vous ». La sourate insiste sur la memoire comme acte fondamental de la relation avec Dieu.",
              axe4_coherence: "La racine dh-k-r apparait environ 292 fois dans le Coran. Le dhikr (rappel) est un acte central de la vie spirituelle coranique. Le Coran se designe lui-meme comme dhikr (rappel) en 38:1. L'imperatif udhkuru est une injonction recurrente qui appelle a la vigilance de la memoire.",
              axe5_frequence: "Pour la mission du khalifa, le souvenir est un outil de la mission. Le khalifa doit se souvenir des bienfaits recus pour maintenir la gratitude et l'engagement. L'oubli des bienfaits mene a la negligence de la mission."
            },
            "Masculin": {
              status: "nul",
              senses: ["male"],
              proof_ctx: "Le sens de masculin est un sens distinct de la racine dh-k-r. Le verbe udhkuru est clairement un imperatif de memoire, pas un nom designant le sexe. Le contexte est l'injonction de se souvenir des bienfaits."
            }
          }
        }
      },
      // nem pos=5
      {
        word_key: "nem", position: 5, sense_chosen: "bienfait",
        analysis_axes: {
          sense_chosen: "bienfait",
          concept_chosen: "Bienfait/Faveur",
          concepts: {
            "Bienfait/Faveur": {
              status: "retenu",
              senses: ["bienfait", "faveur", "benediction", "richesse", "accorder un bienfait", "nourrir bien", "combler"],
              proof_ctx: "Le mot ni'mati est un nom feminin singulier de la racine n-'-m avec pronom suffixe 1S (ya). Le Lane's donne : bienfait, faveur, grace, ce qui rend la vie agreable. Le pronom « ya » (Mon) rattache le bienfait a Dieu — c'est le bienfait de Dieu, pas un bienfait humain. Le nom ni'ma designe le resultat du bienfait — ce qui a ete donne et qui adoucit la vie. La distinction avec la douceur (probable) est que le bienfait est l'acte de donner quelque chose de bon, tandis que la douceur est la qualite de ce qui est agreable. Le contexte est l'acte de Dieu envers les Enfants d'Israel — un bienfait actif.",
              axe1_verset: "Le mot ni'mati est l'objet du souvenir — rappelez-vous Mon bienfait. Le champ lexical (rappelez-vous, bienfait, combler, distinguer) montre que le bienfait est concret : Dieu a fait quelque chose pour les Enfants d'Israel. Le pronom possessif (Mon) souligne que le bienfait vient de Dieu et Lui appartient.",
              axe2_voisins: "Le verset 121 parlait du don du Livre. Le verset 122 rappelle le bienfait divin en general. Le verset 123 avertira du Jour du jugement. Le bienfait est le fil conducteur — Dieu a donne, maintenant Il rappelle ce qu'Il a donne.",
              axe3_sourate: "La racine n-'-m est importante dans la sourate al-Baqarah. En 2:40, « rappelez-vous Mon bienfait ». En 2:47, « rappelez-vous Mon bienfait dont Je vous ai combles ». Le verset 122 est quasi identique a 2:47 — la sourate repete l'injonction pour insister.",
              axe4_coherence: "La racine n-'-m apparait environ 144 fois dans le Coran. Le mot ni'ma designe le bienfait divin dans la grande majorite des cas. En 14:34, « si vous comptiez les bienfaits de Dieu, vous ne pourriez les denombrer ». Le Coran insiste sur l'abondance des bienfaits divins.",
              axe5_frequence: "Pour la mission du khalifa, les bienfaits sont les outils de la mission. Dieu fournit au khalifa les moyens d'accomplir sa mission — le Livre, la raison, les ressources. Se souvenir des bienfaits c'est reconnaitre la source des outils de la mission."
            },
            "Douceur/Aisance": {
              status: "probable",
              senses: ["douceur", "tendresse", "souplesse", "delicatesse", "vie agreable", "confort", "aisance", "fraicheur", "floraison"],
              proof_ctx: "Le sens de douceur est le sens physique premier de n-'-m — la qualite de ce qui est agreable au toucher et a la vie. La distinction philosophique avec le bienfait est que la douceur est la qualite intrinseque (quelque chose EST doux), tandis que le bienfait est l'acte exterieur (quelqu'un DONNE quelque chose de bon). Le mot ni'ma dans le Coran est presque toujours utilise au sens de bienfait divin, pas de douceur physique.",
              axe1_verset: "Le sens de douceur est possible — Mon bienfait qui a adouci votre vie. Mais le verset insiste sur l'acte de Dieu (J'ai comble, J'ai distingue), pas sur la qualite du don. Le sens de bienfait actif est plus coherent avec le contexte.",
              axe2_voisins: "Les versets voisins parlent de dons divins et de responsabilites. Le sens de bienfait actif est plus coherent que la simple douceur.",
              axe3_sourate: "La sourate utilise ni'ma au sens de bienfait divin. Le sens de douceur n'est pas actif dans les passages de la sourate.",
              axe4_coherence: "Le Coran utilise ni'ma presque exclusivement au sens de bienfait. Le sens de douceur physique est rare dans le Coran.",
              axe5_frequence: "Le bienfait est plus directement lie a la mission que la douceur — le khalifa recoit des bienfaits, pas simplement de la douceur."
            },
            "Bétail/Animaux": {
              status: "nul",
              senses: ["betail", "troupeau", "chameaux", "autruche"],
              proof_ctx: "Le sens de betail est hors sujet — le contexte est le rappel d'un bienfait divin aux Enfants d'Israel, pas l'elevage."
            },
            "Affirmation": {
              status: "nul",
              senses: ["oui", "certes", "excellent"],
              proof_ctx: "Le sens d'affirmation est hors sujet — le mot ni'mati est un nom avec pronom possessif, pas une particule d'affirmation."
            }
          }
        }
      },
      // lty pos=6
      {
        word_key: "lty", position: 6, sense_chosen: "celle qui",
        analysis_axes: {
          sense_chosen: "celle qui",
          concept_chosen: "Pronom relatif",
          concepts: {
            "Pronom relatif": {
              status: "retenu",
              senses: ["celle qui", "laquelle", "que"],
              proof_ctx: "Le mot allati est un pronom relatif feminin singulier. Il n'a pas de racine arabe proprement dite — c'est un outil grammatical qui relie la proposition relative (dont Je vous ai combles) a l'antecedent feminin (ni'mati, Mon bienfait). Le relatif allati qualifie le bienfait en specifiant de quel bienfait il s'agit — celui dont Dieu les a combles. Il n'y a pas de sens alternatif pour un pronom relatif.",
              axe1_verset: "Le mot allati introduit la proposition relative qui qualifie le bienfait — « Mon bienfait dont Je vous ai combles ». Le relatif lie le bienfait a l'acte de combler, precisant la nature du lien entre Dieu et les Enfants d'Israel. Sans allati, le bienfait resterait vague.",
              axe2_voisins: "Le pronom relatif est un outil grammatical qui relie deux propositions. Il n'a pas de dimension thematique propre mais il structure la syntaxe du verset.",
              axe3_sourate: "Le pronom allati est un outil grammatical courant dans la sourate. Il apparait chaque fois qu'un nom feminin est qualifie par une proposition relative.",
              axe4_coherence: "Le pronom allati apparait frequemment dans le Coran comme outil de subordination. Il n'a pas de sens semantique propre — il est purement fonctionnel.",
              axe5_frequence: "Le pronom relatif structure le discours mais n'a pas de lien direct avec la mission du khalifa."
            }
          }
        }
      },
      // nem pos=7 (2nd occurrence)
      {
        word_key: "nem", position: 7, sense_chosen: "combler de bienfaits",
        analysis_axes: {
          sense_chosen: "combler de bienfaits",
          concept_chosen: "Bienfait/Faveur",
          concepts: {
            "Bienfait/Faveur": {
              status: "retenu",
              senses: ["bienfait", "faveur", "benediction", "richesse", "accorder un bienfait", "nourrir bien", "combler"],
              proof_ctx: "Le verbe an'amtu est un accompli 1S de la racine n-'-m a la forme IV. Le Lane's donne : combler de bienfaits, accorder une faveur, faire en sorte que quelqu'un vive dans le bien-etre. La forme IV (af'ala) intensifie l'action — J'ai activement comble. L'accompli marque que le bienfait est un fait acheve. La construction « an'amtu 'alaykum » (J'ai comble sur vous) est la forme standard du don divin dans le Coran. La meme analyse que pour la premiere occurrence s'applique.",
              axe1_verset: "Le verbe an'amtu precise la nature du lien entre Dieu et les Enfants d'Israel — un lien de bienfait. Le champ lexical (bienfait, combler, distinguer) montre que le verset rappelle des actes divins concrets. Le verbe an'amtu est l'acte divin dont le resultat est le bienfait (ni'ma).",
              axe2_voisins: "Meme analyse que pour ni'mati en position 5 — le verbe confirme l'acte de bienfait.",
              axe3_sourate: "Le verbe an'ama apparait dans la sourate al-Baqarah dans la meme construction. En 2:47, la meme phrase apparait. La repetition insiste sur l'acte divin.",
              axe4_coherence: "La forme IV de n-'-m (an'ama) apparait environ 19 fois dans le Coran. Elle designe toujours l'acte de combler de bienfaits. En 1:7, « ceux que Tu as combles de bienfaits ». Le Coran utilise cette forme pour l'acte actif de Dieu envers Ses creatures.",
              axe5_frequence: "Pour la mission du khalifa, etre comble de bienfaits cree une obligation de gratitude et de service. Le khalifa doit reconnaitre que ses capacites viennent de Dieu."
            },
            "Douceur/Aisance": {
              status: "probable",
              senses: ["douceur", "tendresse", "souplesse", "delicatesse", "vie agreable", "confort", "aisance", "fraicheur", "floraison"],
              proof_ctx: "Le sens de douceur/aisance est le sens premier de la racine — rendre la vie douce et agreable. La forme IV (an'ama) intensifie cet acte — faire en sorte que la vie soit douce. La distinction est que le bienfait est un acte directionnel (Dieu donne), tandis que la douceur est une qualite (la vie est douce). Dans ce verset, c'est l'acte de Dieu qui est souligne, pas la qualite de la vie.",
              axe1_verset: "Le sens de « rendre la vie douce » est possible — « J'ai adouci votre vie ». Mais le verset insiste sur l'acte de Dieu (J'ai comble, J'ai distingue), pas sur la qualite resultante. Le sens de bienfait actif est plus precis.",
              axe2_voisins: "Le contexte est l'acte divin envers un peuple, pas la description d'un etat de confort.",
              axe3_sourate: "La sourate utilise la forme IV dans le sens de « combler de bienfaits » en 2:47 et 2:122.",
              axe4_coherence: "La forme IV de n-'-m dans le Coran designe toujours l'acte de combler de bienfaits.",
              axe5_frequence: "Meme analyse que pour le bienfait — l'acte actif est plus lie a la mission que la qualite passive."
            },
            "Bétail/Animaux": {
              status: "nul",
              senses: ["betail", "troupeau", "chameaux", "autruche"],
              proof_ctx: "Le sens de betail est hors sujet — le verbe an'amtu est un acte de bienfait, pas un nom d'animal."
            },
            "Affirmation": {
              status: "nul",
              senses: ["oui", "certes", "excellent"],
              proof_ctx: "Le sens d'affirmation est hors sujet — le mot est un verbe, pas une particule."
            }
          }
        }
      },
      // fdl pos=11
      {
        word_key: "fdl", position: 11, sense_chosen: "distinguer",
        analysis_axes: {
          sense_chosen: "distinguer",
          concept_chosen: "Excellence/Faveur",
          concepts: {
            "Excellence/Faveur": {
              status: "retenu",
              senses: ["etre superieur", "grace", "faveur", "merite"],
              proof_ctx: "Le verbe faddaltukum est un accompli 1S de la racine f-d-l a la forme II avec pronom suffixe 2MP. Le Lane's donne : distinguer, preferer, accorder un merite superieur, faire exceller. La forme II (fa''ala) intensifie l'action — J'ai activement distingue. Le pronom suffixe « kum » designe les Enfants d'Israel. La construction « faddaltukum 'ala al-'alamin » (Je vous ai distingues sur les peuples) est une formule comparative — Dieu les a places au-dessus des autres peuples.",
              axe1_verset: "Le verbe faddaltukum est le deuxieme element du rappel (apres le bienfait) — « Je vous ai distingues sur les peuples ». Le champ lexical (bienfait, combler, distinguer, peuples) montre que la distinction est un bienfait supplementaire. Non seulement Dieu les a combles, mais Il les a aussi places au-dessus. La distinction cree une responsabilite proportionnelle.",
              axe2_voisins: "Le verset 121 parlait de ceux qui recitent correctement. Le verset 122 rappelle la distinction — les Enfants d'Israel ont ete distingues pour une mission. Le verset 123 les avertira. La distinction n'est pas un privilege gratuit mais une charge.",
              axe3_sourate: "La racine f-d-l apparait dans la sourate al-Baqarah. En 2:47, la meme formule « faddaltukum 'ala al-'alamin ». En 2:253, « Nous avons distingue certains de ces envoyes sur d'autres ». La sourate montre que la distinction est un acte divin qui cree des hierarchies fonctionnelles, pas des privileges arbitraires.",
              axe4_coherence: "La racine f-d-l apparait environ 104 fois dans le Coran. La forme II (faddala) designe l'acte de distinguer ou de preferer. En 17:70, « Nous avons distingue les fils d'Adam ». Le Coran montre que la distinction est universelle (toute l'humanite est distinguee) et specifique (certains peuples sont distingues a certaines epoques).",
              axe5_frequence: "Pour la mission du khalifa, la distinction est un outil de la mission. Le khalifa est distingue par sa fonction, pas par sa nature. La distinction cree une obligation de servir — celui qui est distingue doit exceller dans le service, pas dans l'arrogance."
            },
            "Reste/Surplus": {
              status: "nul",
              senses: ["surplus", "reste"],
              proof_ctx: "Le sens de surplus/reste est hors sujet — le verbe faddaltukum est un acte de distinction comparative, pas un reste apres consommation."
            }
          }
        }
      },
      // elm pos=13
      {
        word_key: "elm", position: 13, sense_chosen: "peuples",
        analysis_axes: {
          sense_chosen: "peuples",
          concept_chosen: "Monde/Création",
          concepts: {
            "Monde/Création": {
              status: "retenu",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le mot al-'alamin est un pluriel defini masculin de la racine '-l-m. Le Lane's donne : les mondes, les peuples, l'ensemble des creatures. Le pluriel (avec la terminaison -in du masculin sain) marque les etres rationnels — les peuples. L'article defini (al-) marque la totalite — tous les peuples. La construction « faddaltukum 'ala al-'alamin » (Je vous ai distingues sur les peuples) est comparative — les Enfants d'Israel sont places au-dessus de tous les autres peuples de leur epoque.",
              axe1_verset: "Le mot al-'alamin est le terme de comparaison — Dieu a distingue les Enfants d'Israel sur les peuples. Le champ lexical (distinguer, sur, peuples) montre que la distinction est relative — elle se mesure par rapport aux autres. Le mot « peuples » donne l'echelle de la distinction.",
              axe2_voisins: "Le verset 121 parlait de ceux qui ont recu le Livre. Le verset 122 precise la distinction des Enfants d'Israel parmi les peuples. Le verset 123 avertira du Jour du jugement. La distinction parmi les peuples est un rappel de la responsabilite devant le jugement.",
              axe3_sourate: "Le mot al-'alamin apparait dans la sourate al-Baqarah en 2:47, 2:122, 2:131, 2:251. En 2:131, « le Seigneur des mondes ». Le mot designe tantot les peuples (quand il est objet de comparaison) tantot l'ensemble de la creation (quand il est complement de Dieu).",
              axe4_coherence: "Le mot al-'alamin apparait environ 73 fois dans le Coran. En 1:2, « Seigneur des mondes ». Le sens oscille entre « les peuples » (etres rationnels) et « les mondes » (totalite de la creation). Dans le contexte de 2:122, le sens de « peuples » est plus precis car la distinction porte sur les communautes humaines.",
              axe5_frequence: "Pour la mission du khalifa, les peuples sont le champ de la mission. Le khalifa est distingue parmi les peuples pour accomplir une mission — la distinction est fonctionnelle, pas honorifique."
            },
            "Savoir/Connaissance": {
              status: "nul",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le sens de savoir est un sens majeur de '-l-m mais le mot al-'alamin est un nom pluriel qui designe les mondes/peuples, pas un verbe ou un nom de connaissance. La forme al-'alamin avec terminaison -in du pluriel masculin sain est specifique au sens de mondes/peuples."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de signe/marque est hors sujet — le mot al-'alamin designe les peuples, pas des signes ou des marques."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:123
  // =====================================================
  123: {
    verse_id: 130,
    analysis_id: 489,
    translation_arab: "Et premunissez-vous d'un jour ou aucune ame ne retribuera en quoi que ce soit pour une autre ame, et ou aucune compensation ne sera acceptee d'elle, et ou aucune intercession ne lui servira, et ou ils ne seront pas secourus.",
    full_translation: "Et redoutez le jour ou nulle ame ne suffira en quoi que ce soit a une autre; ou l'on n'acceptera d'elle aucune intercession; et ou on ne recevra d'elle aucune compensation; et ou ils ne seront point secourus.",
    translation_explanation: `§DEMARCHE§
Le verset avertit d'un Jour ou quatre protections seront abolies : la retribution mutuelle, la compensation, l'intercession et le secours. La conjonction **wa** (et) lie ce verset au precedent — apres le rappel des bienfaits, l'avertissement. Le verbe **ittaqu** est un imperatif 2MP de la racine w-q-y a la forme VIII. Le Lane's donne : se premunir, se proteger, prendre ses precautions. La forme VIII (ifta'ala) est reflexive — se premunir soi-meme. L'imperatif marque un ordre — premunissez-vous. Le nom **yawman** est un accusatif indefini de la racine y-w-m. Le Lane's donne : jour, periode de temps. L'indefini marque un jour non specifie mais connu — le Jour du Jugement. L'accusatif est du a sa fonction de complement d'objet du verbe ittaqu. La particule **la** (ne pas) est une negation. Le verbe **tajzi** est un inaccompli 3FS de la racine j-z-y. Le Lane's donne : retribuer, recompenser, suffire. L'inaccompli avec la negation marque l'impossibilite — aucune ame ne retribuera. Le feminin s'accorde avec nafs (ame). Le nom **nafsun** est un nom feminin indefini nominatif de la racine n-f-s. Le Lane's donne : ame, etre, personne. Le premier nafs est le sujet (une ame) et le deuxieme nafsin est le complement (pour une autre ame). La preposition **'an** (de, a la place de) indique la substitution — une ame ne peut remplacer une autre. Le nom **shay'an** est un accusatif indefini de la racine sh-y-'. Le Lane's donne : chose, quoi que ce soit. L'indefini au maf'ul mutlaq intensifie la negation — en rien, en quoi que ce soit. La conjonction **wa la** (et ne pas) introduit la deuxieme negation. Le verbe **yuqbalu** est un inaccompli passif 3MS de la racine q-b-l. Le Lane's donne : accepter, recevoir. Le passif indique que personne n'acceptera. La preposition **minha** (d'elle) renvoie a l'ame. Le nom **shafa'atun** est un nom feminin indefini de la racine sh-f-'. Le Lane's donne : intercession, mediation. L'intercession est l'acte de parler en faveur de quelqu'un. La troisieme negation **wa la** introduit une nouvelle impossibilite. Le verbe **yu'khadhu** est un inaccompli passif 3MS de la racine a-kh-dh. Le Lane's donne : prendre, recevoir. Le passif indique que personne ne prendra. La preposition **minha** (d'elle) renvoie a l'ame. Le nom **'adlun** est un nom masculin indefini de la racine '-d-l. Le Lane's donne : justice, rancon, compensation, equivalent. Ici le sens est rancon/compensation — ce qu'on donne en echange pour se racheter. La quatrieme negation **wa la** introduit la derniere impossibilite. Le pronom **hum** (eux/ils) est un pronom personnel 3MP. Le verbe **yunsaruna** est un inaccompli passif 3MP de la racine n-s-r. Le Lane's donne : secourir, aider, accorder la victoire. Le passif marque que personne ne les secourra. Le passage du feminin singulier (nafs) au masculin pluriel (hum) marque le passage de l'individu au collectif — ce qui est vrai pour chaque ame individuellement est vrai pour tous collectivement.

§JUSTIFICATION§
**premunissez-vous** — Le sens retenu est « se premunir/se proteger ». Le verbe ittaqu est a la forme VIII de w-q-y. Le Lane's donne : se premunir contre un danger. L'alternative « piete » est ecartee car le verbe est a l'imperatif avec un objet (un jour), pas un etat d'ame.

**un jour** — Le sens retenu est « jour/periode ». Le mot yawm designe le Jour du Jugement. L'alternative « evenement » est ecartee car le mot est un nom de temps, pas un evenement specifique.

**ne retribuera** — Le sens retenu est « retribuer/suffire ». Le verbe tajzi designe l'acte de retribuer ou de suffire a la place de. Avec la negation, aucune ame ne peut retribuer pour une autre. L'alternative « punir » est ecartee car le contexte est la substitution, pas la punition.

**ame** — Le sens retenu est « ame/etre ». Le mot nafs designe l'ame individuelle, l'etre dans son intimalite. L'alternative « souffle » est ecartee car le mot designe la personne, pas le phenomene physique.

**en quoi que ce soit** — Le sens retenu est « chose/vouloir ». Le mot shay'an intensifie la negation — en rien, en quoi que ce soit.

**ne sera pas acceptee** — Le sens retenu est « accepter/recevoir ». Le verbe passif yuqbalu marque que personne n'acceptera l'intercession. L'alternative « se tourner vers » est ecartee car le passif indique l'acceptation, pas l'orientation.

**compensation** — Le sens retenu est « justice/rancon ». Le mot 'adl designe ici la rancon, la compensation, l'equivalent qu'on offre pour se racheter. L'alternative « devvier » est ecartee car le mot est un nom, pas un verbe.

**intercession** — Le sens retenu est « interceder/mediation ». Le mot shafa'a designe l'acte de parler en faveur de quelqu'un aupres d'une autorite. L'alternative « pair/couple » est ecartee car le contexte est l'intervention en faveur de quelqu'un.

**secourus** — Le sens retenu est « secourir/aider ». Le verbe passif yunsaruna marque que personne ne les secourra. L'alternative « partisan » est ecartee car le verbe est au passif, pas un nom.

§CRITIQUE§
Hamidullah donne « redoutez le jour » pour « ittaqu yawman ». Notre traduction donne « premunissez-vous d'un jour » — plus fidele au sens premier de w-q-y qui est se premunir, se proteger, pas redouter. Hamidullah traduit « la tajzi nafsun 'an nafsin shay'an » par « nulle ame ne suffira en quoi que ce soit a une autre ». Notre traduction est similaire. Hamidullah donne « l'on n'acceptera d'elle aucune intercession » et « on ne recevra d'elle aucune compensation ». Notre traduction suit le meme ordre que l'arabe qui place d'abord la compensation puis l'intercession — l'ordre est different dans Hamidullah. La difference principale est « redoutez » vs « premunissez-vous » — nous privilegions le sens etymologique de w-q-y.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 1 },
      { fr: "premunissez-vous", pos: "verbe", phon: "ittaqu", arabic: "\u0671\u062a\u0651\u064e\u0642\u064f\u0648\u0627\u06df", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 2 },
      { fr: "d'un jour", pos: "nom", phon: "yawman", arabic: "\u064a\u064e\u0648\u0652\u0645\u064b\u0627", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 3 },
      { fr: "ne pas", phon: "la", arabic: "\u0644\u0651\u064e\u0627", is_particle: true, position: 4 },
      { fr: "ne retribuera", pos: "verbe", phon: "tajzi", arabic: "\u062a\u064e\u062c\u0652\u0632\u0650\u0649", word_key: "jzy", is_particle: false, sense_retenu: "retribuer", position: 5 },
      { fr: "ame", pos: "nom", phon: "nafsun", arabic: "\u0646\u064e\u0641\u0652\u0633\u064c", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 6 },
      { fr: "pour", phon: "'an", arabic: "\u0639\u064e\u0646", is_particle: true, position: 7 },
      { fr: "ame", pos: "nom", phon: "nafsin", arabic: "\u0646\u0651\u064e\u0641\u0652\u0633\u064d", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 8 },
      { fr: "en quoi que ce soit", pos: "nom", phon: "shay'an", arabic: "\u0634\u064e\u064a\u0652\u0640\u0654\u0627", word_key: "shy", is_particle: false, sense_retenu: "chose", position: 9 },
      { fr: "et ne pas", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 10 },
      { fr: "ne sera acceptee", pos: "verbe", phon: "yuqbalu", arabic: "\u064a\u064f\u0642\u0652\u0628\u064e\u0644\u064f", word_key: "qbl", is_particle: false, sense_retenu: "accepter", position: 11 },
      { fr: "d'elle", phon: "minha", arabic: "\u0645\u0650\u0646\u0652\u0647\u064e\u0627", is_particle: true, position: 12 },
      { fr: "elle", pos: "pronom suffixe", phon: "ha", arabic: "\u0647\u064e\u0627", word_key: "ha", is_particle: false, sense_retenu: "pronom", position: 13 },
      { fr: "compensation", pos: "nom", phon: "'adlun", arabic: "\u0639\u064e\u062f\u0652\u0644\u064c", word_key: "edl", is_particle: false, sense_retenu: "compensation", position: 14 },
      { fr: "et ne pas", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 15 },
      { fr: "ne lui servira", pos: "verbe", phon: "tanfa'uha", arabic: "\u062a\u064e\u0646\u0641\u064e\u0639\u064f\u0647\u064e\u0627", word_key: "nfe", is_particle: false, sense_retenu: "servir", position: 16 },
      { fr: "intercession", pos: "nom", phon: "shafa'atun", arabic: "\u0634\u064e\u0641\u064e\u0640\u0639\u064e\u0629\u064c", word_key: "shfe", is_particle: false, sense_retenu: "intercession", position: 17 },
      { fr: "et ne pas", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 18 },
      { fr: "eux", pos: "pronom personnel", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", word_key: "hmm", is_particle: false, sense_retenu: "pronom", position: 19 },
      { fr: "ne seront secourus", pos: "verbe", phon: "yunsaruna", arabic: "\u064a\u064f\u0646\u0635\u064e\u0631\u064f\u0648\u0646\u064e", word_key: "nsr", is_particle: false, sense_retenu: "secourir", position: 20 }
    ],
    words: [
      // wqy pos=2
      {
        word_key: "wqy", position: 2, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["proteger", "preserver", "craindre", "piete", "se premunir", "eviter"],
              proof_ctx: "Le verbe ittaqu est un imperatif 2MP de la racine w-q-y a la forme VIII. Le Lane's donne : se premunir, se proteger, prendre des precautions contre un danger. La forme VIII (ifta'ala) est reflexive — le sujet agit sur lui-meme pour se proteger. L'imperatif marque un ordre divin — premunissez-vous. L'objet direct est « yawman » (un jour) — premunissez-vous contre un jour. Le sens premier de w-q-y est la protection, pas la crainte. Se premunir c'est prendre des mesures concretes pour eviter un danger, pas simplement avoir peur.",
              axe1_verset: "Le verbe ittaqu ouvre l'avertissement du verset — apres le rappel des bienfaits (v122), l'ordre de se premunir. Le champ lexical (se premunir, jour, ame, retribuer, compensation, intercession, secours) montre que le verset decrit un jour ou toutes les protections habituelles seront abolies. Se premunir aujourd'hui est la seule protection pour ce jour-la.",
              axe2_voisins: "Le verset 122 rappelait les bienfaits et la distinction. Le verset 123 enchaine avec l'avertissement — les bienfaits passees ne suffiront pas au Jour du Jugement. Le verset 124 passera a Ibrahim. La sequence bienfait → avertissement est un schema pedagogique recurrent.",
              axe3_sourate: "La racine w-q-y est fondamentale dans la sourate al-Baqarah. En 2:21, « premunissez-vous ». En 2:48, un verset quasi identique a 2:123. En 2:197, « premunissez-vous et le meilleur viatique est la premunition ». La sourate utilise ittaqu comme injonction repetee qui rythme le discours.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. La forme VIII (ittaqa) est la plus frequente — elle designe l'acte de se premunir activement. Le mot taqwa (premunition) est un des mots cles du Coran. Le Coran presente la premunition comme la meilleure preparation pour l'avenir.",
              axe5_frequence: "Pour la mission du khalifa, se premunir est un acte de la mission. Le khalifa qui se premunit prend des mesures concretes pour eviter l'echec de sa mission. La premunition n'est pas la peur — c'est l'action preventive."
            }
          }
        }
      },
      // ywm pos=3
      {
        word_key: "ywm", position: 3, sense_chosen: "jour",
        analysis_axes: {
          sense_chosen: "jour",
          concept_chosen: "Temps/Période",
          concepts: {
            "Temps/Période": {
              status: "retenu",
              senses: ["jour", "journee", "temps", "periode"],
              proof_ctx: "Le mot yawman est un nom accusatif indefini de la racine y-w-m. Le Lane's donne : jour, periode de temps, moment. L'indefini (sans article) marque un jour non specifie mais dont les attributs sont decrits dans la proposition relative qui suit. L'accusatif est du a la fonction de complement d'objet de ittaqu. Ce jour est le Jour du Jugement — un jour specifique mais non date, defini par ses caracteristiques (aucune ame ne suffira pour une autre).",
              axe1_verset: "Le mot yawman est l'objet de la premunition — premunissez-vous d'un jour. Le champ lexical (ame, retribuer, compensation, intercession, secours) decrit les caracteristiques de ce jour : toutes les protections habituelles sont abolies. Le jour est defini par ce qui ne marchera pas, pas par ce qui marchera.",
              axe2_voisins: "Le verset 122 rappelait les bienfaits dans le passe. Le verset 123 projette vers le futur — un jour a venir. Le verset 124 parlera d'Ibrahim au passe. La structure est : passe (bienfaits) → futur (Jour) → passe (Ibrahim). Le jour a venir est encadre par le passe.",
              axe3_sourate: "La racine y-w-m est tres frequente dans la sourate al-Baqarah. En 2:8, « le Jour dernier ». En 2:48, un verset quasi identique a 2:123. En 2:85, « le Jour de la Resurrection ». La sourate utilise le Jour comme reference temporelle qui donne son sens aux actes presents.",
              axe4_coherence: "La racine y-w-m apparait environ 475 fois dans le Coran. Le Jour du Jugement est un des themes les plus recurrents. Le Coran utilise le Jour comme horizon qui donne son poids aux choix presents — ce qu'on fait aujourd'hui sera mesure ce jour-la.",
              axe5_frequence: "Pour la mission du khalifa, le Jour est l'echeance de la mission. Le khalifa sera juge sur l'accomplissement de sa mission. Se premunir du Jour c'est accomplir sa mission correctement aujourd'hui."
            },
            "Événement/Moment marquant": {
              status: "nul",
              senses: ["evenement", "bataille", "jour de combat", "jour marquant"],
              proof_ctx: "Le sens d'evenement ponctuel est hors sujet — le Jour du Jugement n'est pas un evenement parmi d'autres, c'est le Jour ultime qui met fin a tous les evenements."
            }
          }
        }
      },
      // jzy pos=5
      {
        word_key: "jzy", position: 5, sense_chosen: "retribuer",
        analysis_axes: {
          sense_chosen: "retribuer",
          concept_chosen: "Rétribution/Justice",
          concepts: {
            "Rétribution/Justice": {
              status: "retenu",
              senses: ["retribuer", "recompenser", "punir"],
              proof_ctx: "Le verbe tajzi est un inaccompli 3FS de la racine j-z-y a la forme I. Le Lane's donne : retribuer, recompenser, suffire a la place de. L'inaccompli avec la negation (la tajzi) marque l'impossibilite permanente — aucune ame ne retribuera pour une autre. Le feminin s'accorde avec nafs (ame, feminin). La construction « la tajzi nafsun 'an nafsin shay'an » signifie : aucune ame ne retribuera/suffira en quoi que ce soit pour une autre ame. Le verbe jaza designe l'acte de donner a chacun selon son du — aucune ame ne pourra payer la dette d'une autre.",
              axe1_verset: "Le verbe tajzi est la premiere des quatre impossibilites du verset. Le champ lexical (ame, retribuer, compensation, intercession, secours) montre que le Jour abolit toute forme de substitution. Personne ne peut payer pour un autre, personne ne peut interceder, personne ne peut compenser, personne ne peut secourir. Chacun est seul face a ses actes.",
              axe2_voisins: "Le verset 122 rappelait la distinction des Enfants d'Israel. Le verset 123 abolit toute distinction ce Jour-la — la distinction parmi les peuples ne compte plus. Seuls les actes individuels comptent. Le contraste entre la distinction collective (v122) et la responsabilite individuelle (v123) est saisissant.",
              axe3_sourate: "La racine j-z-y apparait dans la sourate al-Baqarah. En 2:48, un verset quasi identique a 2:123 (la tajzi nafsun 'an nafsin shay'an). En 2:281, « chaque ame sera retribuee selon ce qu'elle a acquis ». La sourate insiste sur la retribution individuelle.",
              axe4_coherence: "La racine j-z-y apparait environ 118 fois dans le Coran. Le theme de la retribution individuelle est central — en 6:164, « aucune ame ne porte le fardeau d'une autre ». Le Coran insiste sur la responsabilite personnelle face a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la retribution est l'echeance de la mission. Le khalifa sera retribue selon ses actes — personne ne pourra le remplacer ni payer a sa place. La responsabilite de la mission est strictement individuelle."
            },
            "Suffisance": {
              status: "nul",
              senses: ["suffire"],
              proof_ctx: "Le sens de suffire est un sens connexe de j-z-y — dans certains contextes, tajzi peut signifier « suffire ». Mais le sens de retribution est plus precis car le verset parle de ce que l'ame ne peut pas faire pour une autre — elle ne peut pas retribuer, pas payer la dette. Le sens de « suffire » serait « aucune ame ne suffira pour une autre » — coherent mais moins precis que « retribuer »."
            }
          }
        }
      },
      // nfs pos=6
      {
        word_key: "nfs", position: 6, sense_chosen: "ame",
        analysis_axes: {
          sense_chosen: "ame",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["ame", "soi-meme", "personne", "esprit", "desir"],
              proof_ctx: "Le mot nafsun est un nom feminin singulier indefini nominatif de la racine n-f-s. Le Lane's donne : ame, soi-meme, personne, etre interieur. L'indefini (sans article) marque la generalite — aucune ame, quelle qu'elle soit. Le nominatif marque la fonction sujet. L'ame (nafs) est le siege de la volonte, des desirs et de la conscience — c'est ce qui fait qu'une personne est elle-meme. Le verset dit qu'aucune ame (sujet) ne retribuera pour une autre ame (complement) — chaque ame est seule.",
              axe1_verset: "Le mot nafs apparait deux fois dans le verset — comme sujet (nafsun) et comme complement (nafsin). Le champ lexical (ame, retribuer, compensation, intercession, secours) montre que le verset porte sur l'isolement de chaque ame au Jour du Jugement. L'ame est l'unite de base du jugement — c'est chaque ame individuellement qui est jugee.",
              axe2_voisins: "Le verset 122 parlait d'un peuple (les Enfants d'Israel). Le verset 123 passe a l'individu (ame). Le verset 124 parlera d'Ibrahim (un individu). La progression est : peuple → ame → individu. Le jugement est individuel, pas collectif.",
              axe3_sourate: "La racine n-f-s apparait frequemment dans la sourate al-Baqarah. En 2:48, « aucune ame ne suffira pour une autre ». En 2:233, « aucune ame n'est chargee au-dela de sa capacite ». La sourate pose l'ame comme l'unite de responsabilite devant Dieu.",
              axe4_coherence: "La racine n-f-s apparait environ 298 fois dans le Coran. Le Coran utilise nafs pour designer l'etre dans son integralite — corps, esprit, volonte, desir. En 91:7-10, « par l'ame et Celui qui l'a modelee puis lui a inspire sa debauche et sa premunition ». L'ame est le lieu du choix entre le bien et le mal.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le siege de la mission. C'est l'ame du khalifa qui choisit d'accomplir ou de trahir la mission. Au Jour du Jugement, chaque ame repondra individuellement de sa mission."
            },
            "Souffle/Vie": {
              status: "nul",
              senses: ["souffle", "respirer", "soulagement"],
              proof_ctx: "Le sens de souffle physique est hors sujet — le verset parle de l'ame comme unite de jugement, pas du phenomene physique de la respiration."
            }
          }
        }
      },
      // nfs pos=8 (2nd occurrence)
      {
        word_key: "nfs", position: 8, sense_chosen: "ame",
        analysis_axes: {
          sense_chosen: "ame",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["ame", "soi-meme", "personne", "esprit", "desir"],
              proof_ctx: "Deuxieme occurrence de nafs dans le verset — ici au genitif indefini (nafsin) comme complement de la preposition 'an (pour, a la place de). L'expression « la tajzi nafsun 'an nafsin » signifie : aucune ame ne retribuera pour une autre ame. La deuxieme occurrence designe l'ame destinataire — celle pour laquelle la premiere ame ne peut rien faire. Meme analyse que la premiere occurrence.",
              axe1_verset: "La deuxieme occurrence de nafs complete la structure : ame1 ne peut rien pour ame2. Le verset insiste sur l'isolement radical de chaque ame au Jour du Jugement. La repetition de nafs souligne l'egalite — aucune ame, quelle qu'elle soit, ne peut aider aucune autre ame.",
              axe2_voisins: "Meme analyse que pour la premiere occurrence — le passage du collectif (v122) a l'individuel (v123) est marque par la repetition de nafs.",
              axe3_sourate: "En 2:48, la meme structure « la tajzi nafsun 'an nafsin shay'an » apparait. La repetition dans la sourate (2:48 et 2:123) encadre le passage sur les Enfants d'Israel.",
              axe4_coherence: "Le Coran utilise la repetition de nafs pour souligner la solitude de chaque ame devant le jugement. En 82:19, « un jour ou aucune ame ne possede quoi que ce soit pour une autre ame ». Le schema est constant.",
              axe5_frequence: "Chaque ame porte individuellement sa mission — personne ne peut accomplir la mission d'un autre."
            }
          }
        }
      },
      // shy pos=9
      {
        word_key: "shy", position: 9, sense_chosen: "chose",
        analysis_axes: {
          sense_chosen: "chose",
          concept_chosen: "Volonté",
          concepts: {
            "Volonté": {
              status: "retenu",
              senses: ["vouloir"],
              proof_ctx: "Le mot shay'an est un nom accusatif indefini de la racine sh-y-'. Le Lane's donne : chose, quoi que ce soit, quelque chose. Etymologiquement, la racine sh-y-' porte le sens de vouloir — une chose est ce que la volonte vise. Mais dans ce verset, le mot fonctionne comme un intensificateur de la negation (maf'ul mutlaq ou tamyiz) — « la tajzi nafsun 'an nafsin shay'an » signifie « aucune ame ne retribuera pour une autre en quoi que ce soit, meme la plus petite chose ». Le sens de « chose » est utilise pour marquer la totalite de l'impossibilite.",
              axe1_verset: "Le mot shay'an intensifie la negation — pas meme la plus petite chose. Le champ lexical (ame, retribuer, rien, compensation, intercession, secours) montre que le verset abolit toute possibilite de substitution, meme minimale. Le mot shay'an ferme toute echappatoire.",
              axe2_voisins: "Le mot shay'an apparait dans le verset parallele 2:48 avec la meme fonction. Les deux versets encadrent le passage sur les Enfants d'Israel avec la meme insistance sur l'impossibilite totale.",
              axe3_sourate: "La racine sh-y-' apparait dans la sourate al-Baqarah dans plusieurs contextes. En 2:20, « Dieu a pouvoir sur toute chose ». En 2:48 et 2:123, le mot intensifie la negation. La sourate utilise shay' pour marquer tantot l'amplitude du pouvoir divin, tantot la totalite de l'impossibilite humaine.",
              axe4_coherence: "La racine sh-y-' apparait environ 519 fois dans le Coran. Le mot shay' est le mot le plus general de la langue arabe — il designe tout ce qui existe ou peut etre concu. Dans les contextes de negation, il marque l'impossibilite absolue.",
              axe5_frequence: "Pour la mission du khalifa, l'impossibilite de toute substitution rappelle que la mission est strictement individuelle. Le khalifa ne peut deleguer sa responsabilite a personne — pas meme la plus petite part."
            },
            "Chose/Être": {
              status: "nul",
              senses: ["chose", "quelque chose"],
              proof_ctx: "Le sens de « chose comme entite » est le sens premier de sh-y-'. Mais dans ce verset, le mot fonctionne comme intensificateur de negation (en quoi que ce soit), pas comme designation d'une entite. Le sens de volonte est plus fidele a la racine et le sens fonctionnel (rien du tout) est celui qui prevaut dans le contexte."
            }
          }
        }
      },
      // qbl pos=11
      {
        word_key: "qbl", position: 11, sense_chosen: "accepter",
        analysis_axes: {
          sense_chosen: "accepter",
          concept_chosen: "Réception/Accueil",
          concepts: {
            "Réception/Accueil": {
              status: "retenu",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le verbe yuqbalu est un inaccompli passif 3MS de la racine q-b-l. Le Lane's donne : accepter, recevoir, agreer. Le passif (yuqbalu) indique que personne n'acceptera — l'agent est indetermine (on n'acceptera pas). Le verbe est au masculin singulier car le sujet est 'adlun (compensation, masculin). La construction « wa la yuqbalu minha 'adlun » signifie : et il ne sera pas accepte d'elle une compensation. La distinction avec l'anteriorite (nul dans ce contexte) est que le verbe est ici au passif avec le sens d'accepter/recevoir.",
              axe1_verset: "Le verbe yuqbalu est la deuxieme impossibilite du verset — aucune compensation ne sera acceptee. Le champ lexical (retribuer, compensation, intercession, secours) montre que le verset enumere systematiquement toutes les formes de recours possibles pour les abolir. L'acceptation de la compensation est refusee — il n'y a pas de prix a payer pour eviter le jugement.",
              axe2_voisins: "Le verset 122 rappelait les bienfaits. Le verset 123 montre que ces bienfaits ne serviront pas de monnaie d'echange au Jour du Jugement. Le verset 124 parlera de l'epreuve d'Ibrahim. La sequence montre que les bienfaits passees ne garantissent pas le salut futur.",
              axe3_sourate: "La racine q-b-l apparait dans la sourate al-Baqarah. En 2:48, « wa la yuqbalu minha shafa'atun » (pas d'intercession acceptee) — l'ordre des elements est different entre 2:48 et 2:123 mais le message est le meme. La sourate insiste sur l'impossibilite de toute negociation au Jour du Jugement.",
              axe4_coherence: "La racine q-b-l apparait environ 175 fois dans le Coran. Le Coran utilise le passif de qabala pour montrer que certaines choses ne seront pas acceptees par Dieu. En 3:85, « quiconque desire une autre religion que l'islam, elle ne sera pas acceptee de lui ». L'acceptation divine a des conditions.",
              axe5_frequence: "Pour la mission du khalifa, l'impossibilite de la compensation rappelle que la mission ne s'achete pas. Le khalifa ne peut pas compenser les manquements a sa mission par des offrandes — seul l'accomplissement reel compte."
            },
            "Antériorité/Passé": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le sens d'anteriorite est hors sujet — le verbe est au passif inaccompli avec le sens d'accepter, pas un adverbe de temps. Le contexte est l'impossibilite d'accepter une compensation, pas une reference temporelle."
            },
            "Orientation/Direction": {
              status: "nul",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Le sens d'orientation est hors sujet — le verbe est au passif et designe l'acceptation, pas un mouvement directionnel."
            }
          }
        }
      },
      // edl pos=14
      {
        word_key: "edl", position: 14, sense_chosen: "compensation",
        analysis_axes: {
          sense_chosen: "compensation",
          concept_chosen: "Justice/Équité",
          concepts: {
            "Justice/Équité": {
              status: "retenu",
              senses: ["etre juste", "justice", "equite", "rancon", "equivalent"],
              proof_ctx: "Le mot 'adlun est un nom masculin singulier indefini nominatif de la racine '-d-l. Le Lane's donne : justice, equite, rancon, compensation, equivalent. Le sens premier de '-d-l est l'equilibre — ce qui est juste est ce qui est en equilibre. Le mot 'adl designe ici la compensation — ce qu'on offre en echange pour se racheter, l'equivalent qu'on donne pour equilibrer la balance. La construction « la yuqbalu minha 'adlun » signifie : aucune compensation ne sera acceptee d'elle. Au Jour du Jugement, personne ne pourra offrir un equivalent pour racheter son ame.",
              axe1_verset: "Le mot 'adlun est la deuxieme protection abolie — aucune compensation ne sera acceptee. Le champ lexical (retribuer, compensation, intercession, secours) enumere les recours. La compensation est l'offre d'un equivalent — donner quelque chose de valeur pour eviter la punition. Le verset montre que cette strategie ne marchera pas.",
              axe2_voisins: "Le verset 122 rappelait les bienfaits divins. Le verset 123 montre que ces bienfaits ne peuvent pas servir de monnaie d'echange. Aucune compensation ne sera acceptee — les bienfaits passes ne racheteront pas les actes mauvais.",
              axe3_sourate: "La racine '-d-l apparait dans la sourate al-Baqarah. En 2:48, « wa la yu'khadhu minha 'adlun » (aucune compensation ne sera prise d'elle). En 2:123, la meme idee est exprimee avec « yuqbalu » (acceptee) au lieu de « yu'khadhu » (prise). La nuance est subtile — prendre vs accepter — mais le message est le meme.",
              axe4_coherence: "La racine '-d-l apparait environ 28 fois dans le Coran. Le mot 'adl au sens de compensation/rancon apparait specifiquement dans les contextes du Jour du Jugement. En 6:70, « meme si elle offrait toute compensation possible ». Le Coran insiste sur l'impossibilite du rachat au Jour du Jugement.",
              axe5_frequence: "Pour la mission du khalifa, l'impossibilite de la compensation rappelle que la mission ne peut pas etre rachetee. Le khalifa ne peut pas compenser l'echec de sa mission par des offrandes — seul l'accomplissement concret de la mission compte."
            }
          }
        }
      },
      // shfe pos=17
      {
        word_key: "shfe", position: 17, sense_chosen: "intercession",
        analysis_axes: {
          sense_chosen: "intercession",
          concept_chosen: "Intercession",
          concepts: {
            "Intercession": {
              status: "retenu",
              senses: ["interceder", "mediation"],
              proof_ctx: "Le mot shafa'atun est un nom feminin singulier indefini nominatif de la racine sh-f-'. Le Lane's donne : intercession, mediation, acte de parler en faveur de quelqu'un aupres d'une autorite. L'indefini (sans article) marque la generalite — aucune intercession, de quelque type qu'elle soit. Le mot vient de shaf' (pair, double) — l'intercesseur se joint a celui qu'il defend pour former une paire. Au Jour du Jugement, cette jonction est abolie — chacun est seul.",
              axe1_verset: "Le mot shafa'atun est la troisieme protection abolie — aucune intercession ne servira. Le champ lexical (retribuer, compensation, intercession, secours) montre que meme l'intervention d'un tiers en faveur de quelqu'un ne marchera pas. L'intercession est le recours a un mediateur puissant — mais ce jour-la, aucun mediateur ne peut agir.",
              axe2_voisins: "Le verset 122 parlait de la distinction des Enfants d'Israel. Le verset 123 montre que cette distinction ne leur vaudra pas d'intercesseur au Jour du Jugement. Etre un peuple distingue ne protege pas de la responsabilite individuelle.",
              axe3_sourate: "La racine sh-f-' apparait dans la sourate al-Baqarah. En 2:48, « wa la yuqbalu minha shafa'atun » (aucune intercession ne sera acceptee d'elle). En 2:123, l'intercession est mentionnee avec « la tanfa'uha » (ne lui servira pas). En 2:255, « qui peut interceder aupres de Lui sans Sa permission ? ». La sourate nuance — l'intercession existe mais elle est soumise a la permission divine.",
              axe4_coherence: "La racine sh-f-' apparait environ 27 fois dans le Coran. Le theme de l'intercession est complexe — le Coran nie l'intercession sans permission divine (2:255) mais l'affirme avec permission (20:109). En 2:123, l'intercession est niee de maniere absolue pour ce contexte specifique — les Enfants d'Israel ne pourront compter sur aucun intercesseur.",
              axe5_frequence: "Pour la mission du khalifa, l'impossibilite de l'intercession rappelle que la mission est strictement personnelle. Le khalifa ne peut compter sur aucun intermediaire pour accomplir sa mission a sa place. Il doit agir lui-meme."
            },
            "Parité/Couple": {
              status: "nul",
              senses: ["pair", "double"],
              proof_ctx: "Le sens de parite est l'etymologie de la racine sh-f-' — le pair, le double. L'intercession vient de cette racine car l'intercesseur « double » la defense de celui qu'il aide. Mais dans ce verset, le mot shafa'a designe clairement l'intercession, pas la parite numerique."
            }
          }
        }
      },
      // nsr pos=20
      {
        word_key: "nsr", position: 20, sense_chosen: "secourir",
        analysis_axes: {
          sense_chosen: "secourir",
          concept_chosen: "Secours/Victoire",
          concepts: {
            "Secours/Victoire": {
              status: "retenu",
              senses: ["secourir", "aider", "victoire", "defendre"],
              proof_ctx: "Le verbe yunsaruna est un inaccompli passif 3MP de la racine n-s-r. Le Lane's donne : secourir, aider, accorder la victoire, defendre. Le passif (yunsaruna) indique que personne ne les secourra — l'agent est indetermine. Le pluriel masculin (3MP) marque le passage du singulier (nafs, ame individuelle) au pluriel collectif (hum, eux) — ce qui est vrai pour chaque ame est vrai pour tous. Le secours est l'aide qui vient de l'exterieur quand on ne peut plus se defendre seul.",
              axe1_verset: "Le verbe yunsaruna est la quatrieme et derniere impossibilite du verset — ils ne seront pas secourus. Le champ lexical (retribuer, compensation, intercession, secours) montre une progression : d'abord les recours internes (retribution mutuelle, compensation) puis les recours externes (intercession, secours). Tout est aboli. La conclusion « wa la hum yunsaruna » (et eux ne seront pas secourus) ferme toute possibilite de salut externe.",
              axe2_voisins: "Le verset 122 rappelait la distinction et les bienfaits. Le verset 123 montre que la distinction ne vaut pas secours au Jour du Jugement. Le verset 124 passera a Ibrahim qui a reussi son epreuve. Le secours absent du verset 123 contraste avec le secours divin qu'Ibrahim a recu en accomplissant sa mission.",
              axe3_sourate: "La racine n-s-r est importante dans la sourate al-Baqarah. En 2:48, « wa la hum yunsaruna » — la meme conclusion. En 2:86, « pas de secours pour eux ». En 2:214, « quand viendra le secours de Dieu ? ». La sourate montre que le secours divin existe mais est conditionne — il vient pour ceux qui accomplissent leur mission.",
              axe4_coherence: "La racine n-s-r apparait environ 159 fois dans le Coran. Le Coran oppose le secours divin (pour ceux qui le meritent) et l'absence de secours (pour ceux qui rejettent). En 110:1, « quand viendra le secours de Dieu et la victoire ». Le secours est promis aux fideles mais refuse aux injustes.",
              axe5_frequence: "Pour la mission du khalifa, le secours divin est conditionne a l'accomplissement de la mission. Le khalifa qui accomplit sa mission sera secouru — celui qui la trahit ne sera pas secouru. L'absence de secours au Jour du Jugement est la consequence de l'abandon de la mission."
            },
            "Alliance/Soutien": {
              status: "nul",
              senses: ["partisan"],
              proof_ctx: "Le sens de partisan est hors sujet — le verbe est au passif 3MP (ils ne seront pas secourus), pas un nom designant un partisan."
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

  const verseIds = [128, 129, 130];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 121, 122, 123 ===\n');
  for (const v of [121, 122, 123]) {
    await processVerse(v);
  }
  await syncWordMeanings();
  console.log('\n=== PIPELINE V121-123 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
