const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 241
// verse_id=248, analysis_id=606
// "wa li l-mutallaqati mata'un bi l-ma'rufi
//  haqqan 'ala l-muttaqina"
// =====================================================

const verseData = {
  241: {
    verse_id: 248,
    analysis_id: 606,
    translation_arab: "Et aux femmes divorcees, une provision convenable — c'est un droit sur les pieux.",
    full_translation: "Et aux femmes divorcées, une compensation convenable — c'est une obligation pour les gens pieux.",
    translation_explanation: `§DEMARCHE§
Le verset 241 est la conclusion de la section sur le divorce dans al-Baqarah. Apres avoir detaille les droits des femmes divorcees en situation diverse (verset 236 pour celles dont le mariage n'a pas ete consomme, verset 240 pour les veuves), ce verset pose une regle generale : toutes les femmes divorcees (al-mutallaqat, sans restriction) ont droit a un mata' (provision, indemnite) bi l-ma'ruf (selon ce qui est convenable). Ce droit est qualifie de haqq (droit ferme, obligation absolue) 'ala l-muttaqin (sur les gens pieux). L'adressage aux muttaqin (ceux qui se prémunissent) fait de cette obligation un marqueur de piete active.

Le mot **al-mutallaqat** est un participe passif feminin pluriel de la racine t-l-q (Form II, tallaqa). Le Lane's donne pour t-l-q : liberer, relacher, repudier, dissoudre le lien conjugal. Al-mutallaqat = les femmes repetees (celles qui ont ete repudiees) — toutes les femmes dont le mariage a ete dissous par talaq, sans distinction de situation.

Le mot **mata'** est un nom de la racine m-t-' (ou m-t-e selon la transcription). Le Lane's donne : ce dont on profite, provision, bien matériel, jouissance, ce qui rend la vie agreeable. Le mata' est la provision materielle qui permet de subsister et de profiter de la vie — une indemnite de subsistance apres le divorce. Il est indefini (mata'un), indiquant que son montant doit etre determine bi l-ma'ruf.

Le mot **bi l-ma'ruf** est compose de bi (preposition de moyen) + al-ma'ruf (nom de la racine '-r-f). Le Lane's donne pour '-r-f : reconnaitre, connaitre, etre connu. Al-ma'ruf = ce qui est reconnu convenable par la coutume et la raison, ce qui est bien, la bienseance sociale. Bi l-ma'ruf = selon ce qui est convenable, conformement aux normes etablies de bienveillance.

Le mot **haqqan** est un accusatif de circonstance de la racine h-q-q. Le Lane's donne : ce qui est droit, vrai, etabli ; obligation, droit absolu, verite. Haqq = le droit ferme, l'obligation incontestable. « Haqqan 'ala l-muttaqin » = un droit (obligation) sur les pieux — la provision n'est pas une recommandation mais une obligation juridique.

Le mot **al-muttaqin** est un participe actif masculin pluriel de la racine w-q-y (Form VIII, ittaqa). Le Lane's donne pour w-q-y : se prémunir, protéger, garder contre le mal. Al-muttaqin = ceux qui se premunissent, les pieux, ceux qui pratiquent la taqwa (crainte pieuse active). L'obligation est adressee precisement aux muttaqin — ceux qui ont la piete active, impliquant que respecter ce droit est une marque de piete.

§JUSTIFICATION§
**Et aux femmes divorcees** — wa li l-mutallaqat. Le waw conjonctif lie ce verset a la section precedente. Li l-mutallaqat (pour les femmes divorcees) est general — sans restriction de situation (mariage consomme ou non, enfants ou non). La regle est universelle pour toutes les femmes divorcees.

**une provision convenable** — mata'un bi l-ma'ruf. Le mata' (provision/jouissance) designe une indemnite materielle qui permet a la femme divorcee de subvenir a ses besoins et de maintenir une vie digne. Bi l-ma'ruf (selon ce qui est convenable) precise que le montant doit etre determine par la coutume locale, la situation financiere du mari et les besoins de la femme — le droit islamique laisse la mesure a l'appreciation equitable.

**c'est une obligation** — haqqan. L'accusatif haqqan est une mise en exergue (maf'ul mutlaq de confirmation) : cela est un haqq — un droit ferme et une obligation absolue. Ce n'est pas une recommandation pieuse mais une obligation juridique contraignante.

**pour les gens pieux** — 'ala l-muttaqin. L'obligation est mise sur les muttaqin (les pieux) — non pas pour exclure les autres du devoir mais pour souligner que celui qui refuse de verser le mata' manque de taqwa. La piete veritable se manifeste dans le respect des droits des femmes divorcees.

§CRITIQUE§
Hamidullah traduit « mata'un bi l-ma'ruf » par « une compensation convenable ». Le mot mata' designe plus precisement une provision ou jouissance materielle — quelque chose qui permet a la personne de profiter de la vie, pas seulement une compensation pour un prejudice. « Provision convenable » serait plus proche de la richesse semantique du terme, bien que « compensation » soit juridiquement adequate dans un contexte de divorce.

Hamidullah traduit « haqqan » par « obligation ». Le Lane's montre que haqq est a la fois un droit (pour la femme) et une obligation (pour le mari) — les deux faces d'un meme rapport juridique. La traduction « obligation » est exacte du cote du debiteur (le mari) mais perd la dimension de droit de la femme. « Droit etabli » ou « obligation ferme » rendrait mieux la dualite du terme.

L'adressage aux muttaqin (pieux) dans ce contexte juridique est significatif : le verset lie etroitement le droit matrimonial et la piete interieure. Le respect des droits des femmes divorcees n'est pas seulement une obligation legale externe mais un acte de taqwa — de conscience divine. Cette connexion entre droit et piete est caracteristique de la legislation coranique.`,
    segments: [
      { fr: "Et aux femmes divorcees", pos: "nom", phon: "wa li l-mutallaqati", arabic: "وَلِلْمُطَلَّقَـٰتِ", word_key: "tlq", is_particle: false, sense_retenu: "separation/liberation", position: 1 },
      { fr: "une provision", pos: "nom", phon: "mata'un", arabic: "مَتَـٰعٌۢ", word_key: "mte", is_particle: false, sense_retenu: "provision/jouissance", position: 2 },
      { fr: "selon", is_particle: true, phon: "bi", arabic: "بِ", position: 3 },
      { fr: "ce qui est convenable", pos: "nom", phon: "l-ma'rufi", arabic: "ٱلْمَعْرُوفِ", word_key: "erf", is_particle: false, sense_retenu: "convention/bienfait", position: 4 },
      { fr: "—", is_particle: true, phon: "", arabic: "ۖ", position: 5 },
      { fr: "un droit ferme", pos: "nom", phon: "haqqan", arabic: "حَقًّا", word_key: "hqq", is_particle: false, sense_retenu: "droit/obligation", position: 6 },
      { fr: "sur", is_particle: true, phon: "'ala", arabic: "عَلَى", position: 7 },
      { fr: "al-", is_particle: true, phon: "l-", arabic: "ٱلْ", position: 8 },
      { fr: "les pieux", pos: "nom", phon: "muttaqina", arabic: "ٱلْمُتَّقِينَ", word_key: "wqy", is_particle: false, sense_retenu: "protection/piete", position: 9 }
    ],
    vwa: [
      {
        word_key: "tlq",
        position: 1,
        sense_chosen: "separation/liberation",
        analysis_axes: {
          sense_chosen: "separation/liberation",
          concept_chosen: "Séparation/Libération",
          concepts: {
            "Séparation/Libération": {
              status: "retenu",
              senses: ["repudier", "divorcer", "liberer", "separation", "dissolution du lien", "les femmes divorcees"],
              proof_ctx: "Al-mutallaqat est un participe passif feminin pluriel de la racine t-l-q (Form II, tallaqa). Le Lane's donne pour t-l-q : liberer, relacher, dissoudre un lien, repudier. Al-mutallaqat = les femmes qui ont ete repetees, celles dont le lien conjugal a ete dissous par le talaq.",
              axe1_verset: "Dans ce verset, al-mutallaqat est employe sans restriction — il designe toutes les femmes divorcees, quelle que soit leur situation (mariage consomme ou non, presence d'enfants ou non). Cela contraste avec les versets 236-237 qui distinguaient selon la consommation du mariage. Le verset 241 pose une regle generale et universelle : toute femme divorcee a droit au mata', sans exception de situation.",
              axe2_voisins: "La section 226-241 de al-Baqarah traite extensivement du talaq (divorce). La racine t-l-q apparait a plusieurs reprises : versets 229, 230, 231, 232, 236, 237, 241. Chaque occurrence affine le droit du divorce — le verset 241 conclut la section en posant la regle generale du mata' pour toutes les mutallaqat.",
              axe3_sourate: "Al-Baqarah est la sourate qui contient la plus grande concentration de legislation matrimoniale coranique. La racine t-l-q est centrale dans cette section — le talaq (divorce) y est encadre de droits et d'obligations pour proteger les deux parties, particulierement la femme.",
              axe4_coherence: "La racine t-l-q apparait environ 30 fois dans le Coran. Son sens de liberation/separation est constant. En contexte conjugal, le talaq est le terme juridique de la dissolution du mariage — la femme est liberee (mutlaqa) du lien conjugal.",
              axe5_frequence: "Pour les juristes, al-mutallaqat au pluriel indefini (sans article restrictif dans le sens) englobe toutes les categories de femmes divorcees. Cette generalite intentionnelle du verset 241 vient corriger ou completer les cas particuliers precedents — c'est la regle generale qui chapeaute tous les cas speciaux."
            }
          }
        }
      },
      {
        word_key: "mte",
        position: 2,
        sense_chosen: "provision/jouissance",
        analysis_axes: {
          sense_chosen: "provision/jouissance",
          concept_chosen: "Provision/Jouissance",
          concepts: {
            "Provision/Jouissance": {
              status: "retenu",
              senses: ["provision", "jouissance", "subvention", "indemnite", "ce dont on profite", "bien materiel"],
              proof_ctx: "Mata' est un nom de la racine m-t-' (m-t-e). Le Lane's donne : ce dont on profite ou dont on jouit, bien materiel qui rend la vie agreeable, provision permettant de subsister, jouissance. Mata'un bi l-ma'ruf = une provision selon ce qui est convenable. C'est une indemnite materielle destinee a maintenir la dignite de la femme divorcee.",
              axe1_verset: "Le mata' dans ce verset est indefini (mata'un, sans article) — son montant n'est pas fixe mais laisse a l'appreciation equitable (bi l-ma'ruf). Il est directement lie au haqqan (obligation) qui suit : le mata' n'est pas un geste genereux facultatif mais un droit juridique contraignant pour toutes les mutallaqat. Le verset impose l'obligation sans en fixer le quantum exact.",
              axe2_voisins: "Le mot mata' apparait aussi dans le verset 236 (mata'un bi l-ma'ruf pour les femmes dont le mariage n'a pas ete consomme) et dans d'autres contextes coraniques. Le verset 241 reprend la meme formule mata'un bi l-ma'ruf mais l'elargit a toutes les femmes divorcees. La repetition de la formule cree une coherence juridique au sein de la section.",
              axe3_sourate: "Dans al-Baqarah, le mata' est mentionne specifiquement dans le cadre du divorce pour proteger la femme apres la separation. C'est un droit de subsistance — l'islam ne permet pas qu'une femme se retrouve sans ressources apres le divorce.",
              axe4_coherence: "La racine m-t-' apparait une vingtaine de fois dans le Coran dans des contextes materiels (provisions de voyage, biens de ce monde, jouissances terrestres). En contexte matrimonial, le mata' est toujours une provision de soutien — ce qui permet a la femme de maintenir une vie digne.",
              axe5_frequence: "Pour les juristes islamiques, le mata' (indemnite de divorce) est une obligation — son montant est determine par la coutume locale, la capacite financiere du mari et la situation de la femme. Certains juristes (comme Shafi'i) considèrent que le mata' est du a toutes les femmes divorcees, d'autres limitent son obligation aux cas du verset 236. Le verset 241 penche vers la generalite."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 4,
        sense_chosen: "convention/bienfait",
        analysis_axes: {
          sense_chosen: "convention/bienfait",
          concept_chosen: "Convention/Bienfait",
          concepts: {
            "Convention/Bienfait": {
              status: "retenu",
              senses: ["ce qui est reconnu convenable", "bienveillance", "bienseance", "coutume approuvee", "le bien connu", "ce qui est etabli comme bon"],
              proof_ctx: "Al-ma'ruf est un participe passif de la racine '-r-f (Form I). Le Lane's donne pour '-r-f : reconnaitre, connaitre, etre connu. Al-ma'ruf = ce qui est connu et reconnu comme bon, ce que la raison et la coutume approuvent, la bienveillance socialement etablie. Bi l-ma'ruf = selon ce qui est reconnu convenable.",
              axe1_verset: "Bi l-ma'ruf qualifie le mata' (provision) dans ce verset : la provision doit etre donnee selon les normes etablies de bienveillance. Ce n'est pas un montant fixe mais un standard qualitatif — raisonnable, non excessif, non humiliant. Le ma'ruf est le critere d'equite qui permet d'adapter la provision a chaque situation particuliere.",
              axe2_voisins: "L'expression bi l-ma'ruf est recurrente dans la section matrimoniale de al-Baqarah : versets 228, 229, 231, 232, 233, 234, 236, 240, 241. Sa repetition insistante montre que la bienveillance sociale (ce qui est reconnu convenable) est le standard universel du droit matrimonial coranique — ni injustice envers la femme, ni abus envers le mari.",
              axe3_sourate: "Al-ma'ruf est l'un des concepts normatifs fondamentaux de al-Baqarah. Il apparait dans des contextes varies (transactions, temoignages, relations conjugales) toujours avec le meme sens : la norme etablie de comportement decent et reconnu comme bon par la communaute.",
              axe4_coherence: "La racine '-r-f apparait environ 70 fois dans le Coran. Al-ma'ruf est systematiquement ce que la conscience collective reconnait comme bien — par opposition au munkar (ce qui est nie/blame). Le couple ma'ruf/munkar est l'axe moral fondamental du Coran.",
              axe5_frequence: "Pour les juristes, bi l-ma'ruf dans le contexte du mata' signifie que le montant doit etre determine par la capacite financiere du mari, les besoins de la femme et les normes de la communaute. C'est un principe d'equite flexible — le droit islamique refuse de fixer un montant universel et laisse place a l'appreciation contextuelle."
            }
          }
        }
      },
      {
        word_key: "hqq",
        position: 6,
        sense_chosen: "droit/obligation",
        analysis_axes: {
          sense_chosen: "droit/obligation",
          concept_chosen: "Droit/Obligation",
          concepts: {
            "Droit/Obligation": {
              status: "retenu",
              senses: ["droit", "obligation", "ce qui est etabli", "verite", "droit ferme", "obligation incontestable"],
              proof_ctx: "Haqqan est un accusatif de confirmation de la racine h-q-q. Le Lane's donne : ce qui est etabli fermement, vrai, droit absolu, obligation. Haqq = la realite ferme, le droit incontestable. « Haqqan 'ala l-muttaqin » = un droit/obligation sur les pieux. L'accusatif de confirmation (maf'ul mutlaq) renforce la certitude absolue de l'enonce.",
              axe1_verset: "Haqqan est place apres la formule du mata' pour donner force juridique a l'enonce : le mata' n'est pas une recommandation mais un droit (pour la femme) et une obligation (pour le mari). Le mot haqq est l'un des termes les plus forts du lexique normatif coranique — il ne laisse place a aucune ambiguite sur le caractere contraignant de cette disposition.",
              axe2_voisins: "Le verset 237 utilisait deja la formule similaire « 'afw aqrabu li t-taqwa » (le pardon est plus proche de la piete) pour encourager la generosite au-dela de l'obligation. Ici, haqqan fonctionne differemment : ce n'est plus une recommandation supererogat-oire mais une obligation ferme. La juxtaposition de ces deux approches montre la sophistication de la legislation coranique.",
              axe3_sourate: "La racine h-q-q est tres frequente dans al-Baqarah. Le haqq (droit/verite) est l'un des themes centraux de la sourate — que ce soit dans le sens de verite doctrinale ou de droit juridique. Dans la section matrimoniale, haqq designe specifiquement les droits et obligations des parties.",
              axe4_coherence: "La racine h-q-q apparait environ 250 fois dans le Coran — c'est l'un des concepts normatifs les plus importants. Le haqq peut designer : la verite (oppose au batil), le droit subjectif d'une personne, l'obligation d'une autre, ou la realite objective d'un etat de choses.",
              axe5_frequence: "Pour les juristes, haqqan 'ala l-muttaqin est une formulation qui lie explicitement le droit de la femme a la piete du mari. Celui qui refuse le mata' ne faillit pas seulement a une obligation legale mais manque de taqwa. Cette double dimension juridique et spirituelle caracterise la legislation coranique : le droit est aussi une obligation morale et religieuse."
            }
          }
        }
      },
      {
        word_key: "wqy",
        position: 9,
        sense_chosen: "protection/piete",
        analysis_axes: {
          sense_chosen: "protection/piete",
          concept_chosen: "Protection/Piété",
          concepts: {
            "Protection/Piété": {
              status: "retenu",
              senses: ["se premunir", "proteger", "piete active", "taqwa", "les pieux", "ceux qui se premunissent"],
              proof_ctx: "Al-muttaqin est un participe actif masculin pluriel de la racine w-q-y (Form VIII, ittaqa). Le Lane's donne pour w-q-y : se premunir contre le mal, proteger, garder. Al-muttaqin = ceux qui se premunissent (contre le deplaisir divin), les pieux. La taqwa est la piete active — la vigilance interieure qui protege l'homme de la desobeissance.",
              axe1_verset: "L'obligation du mata' est adressee aux al-muttaqin (les pieux). Cela ne signifie pas que les non-pieux en sont exemptes — mais que le respect de ce droit est une marque de taqwa. Celui qui verse le mata' bi l-ma'ruf manifeste sa piete active ; celui qui le refuse manque de taqwa. L'adressage aux muttaqin transforme une obligation juridique en acte de foi.",
              axe2_voisins: "Le verset 177 de al-Baqarah definissait al-birr (la piete veritable) comme incluant les actes sociaux de justice. Le verset 241 s'inscrit dans la meme logique : la piete ne se reduit pas aux actes cultuels (priere, jeune) mais inclut le respect des droits des personnes vulnerables, dont les femmes divorcees.",
              axe3_sourate: "Al-muttaqin est le destinataire privilegié de al-Baqarah : la sourate s'ouvre (verset 2) sur « huda li l-muttaqin » (guide pour les pieux). Tout au long de la sourate, les obligations sont regulierement adressee aux muttaqin pour souligner leur connexion avec la piete interieure.",
              axe4_coherence: "La racine w-q-y apparait environ 200 fois dans le Coran sous diverses formes (waqin, taqwa, ittaqa, al-muttaqin). La taqwa est le concept spirituel central de la morale coranique — la conscience de Dieu qui protege l'homme du mal et le pousse au bien.",
              axe5_frequence: "Pour le khalifa, adresser l'obligation du mata' aux muttaqin est une technique legislative coranique : les obligations sont placees sur ceux qui ont la conscience divine (taqwa) car ce sont eux qui les respecteront. Cela cree une hierarchie morale : au minimum, le mata' est une obligation legale ; pour le muttaqi, c'est un acte de piete accompli avec sincerite et generosite."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[241];
  const {error:veErr} = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V241)');
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
  console.log('DONE V241 TERMINE');
}
main().catch(console.error);
