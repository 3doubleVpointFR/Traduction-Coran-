const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 244
// verse_id=251, analysis_id=608
// "waqatiluu fi sabili llahi
//  wa'lamuu anna llaha sami'un 'alimun"
// =====================================================

const verseData = {
  244: {
    verse_id: 251,
    analysis_id: 608,
    translation_arab: "Et combattez dans la voie d'Allah, et sachez qu'Allah est Tout-Entendant, Omniscient.",
    full_translation: "Et engagez-vous dans la lutte dans la voie d'Allah, et sachez bien qu'Allah entend tout et connaît tout.",
    translation_explanation: `§DEMARCHE§
Le verset 244 est un verset court de transition et d'appel au combat, directement lie au recit de V243. Apres avoir rappele l'histoire de ceux qui fuyaient la mort et furent quand meme mis a mort par Allah (V243), ce verset tire la conclusion pratique : combattez dans la voie d'Allah (fi sabil Allah). La structure est double : un commandement (qatiluu = combattez) suivi d'une justification (wa'lamuu anna llaha sami'un 'alimun = sachez qu'Allah est Tout-Entendant, Omniscient).

Le mot **waqatiluu** est un imperatif 2MP de la racine q-t-l (qtl) en Form III (qatala = combattre mutuellement). Le Lane's donne pour q-t-l (Form I qatala) : tuer, mettre a mort. Form III qatala = combattre, s'affronter mutuellement, mener un combat. L'imperatif qatiluu est donc non pas simplement 'tuez' mais 'combattez' — il designe un engagement militaire dans un affrontement bilateral.

Le mot **sabili** est un nom de la racine s-b-l (sbl). Le Lane's donne pour sabil : chemin, voie, route — au sens propre et au sens figure. 'Fi sabil Allah' (dans la voie d'Allah) est une formule consacree qui designe le combat pour la cause divine, le djihad au sens militaire mais aussi, pour certains exegetes, toute oeuvre accomplie pour Allah. La voie (sabil) est la direction et le cadre qui donnent sens au combat.

Le mot **wa'lamuu** est un imperatif 2MP de la racine '-l-m (elm) en Form I. Le Lane's donne : savoir, connaitre, avoir la science de. Form I 'alima = savoir ; Form IV a'lama = informer, faire savoir ; 'alim = savant ; 'Alim = l'Omniscient (nom divin). L'imperatif 'lamuu (sachez) est un appel a la conscience : le combat dans la voie d'Allah doit etre un acte eclaire, accompagne de la connaissance que Allah connait et entend tout.

Le mot **sami'un** est un adjectif intensif (sifat mushabbaha) de la racine s-m-' (sme). Le Lane's donne : entendre, ouir, ecouter ; sami' = qui entend ; Sami' (avec majuscule) = al-Sami', le Tout-Entendant, l'un des Beaux Noms d'Allah. Ce nom divin dans ce contexte est une assurance pour le combattant : Allah entend ses paroles, ses prieres, ses plaintes — il n'est pas seul.

Le mot **'alimun** est un adjectif intensif de la racine '-l-m (elm). Le Lane's donne : savant, qui sait ; 'Alim = al-'Alim, l'Omniscient, l'un des Beaux Noms d'Allah. Ce nom divin cloture le verset : Allah connait les intentions, les circonstances, les sacrifices. Le combattant qui agit dans la voie d'Allah avec sincere intention est connu d'Allah — son action n'est pas perdue.

§JUSTIFICATION§
**Et combattez dans la voie d'Allah** — waqatiluu fi sabil Allah. Le verbe qatiluu (Form III imperatif) designe un combat mutuel, un engagement actif dans un affrontement. La proposition 'fi sabil Allah' (dans la voie d'Allah) est la qualification essentielle — ce n'est pas n'importe quel combat mais celui qui est oriente vers Allah, en accord avec Sa volonte et pour Sa cause. L'imperatif collectif (vous tous) implique une obligation communautaire.

**et sachez** — wa'lamuu. Le deuxieme imperatif est epistemique : il commande non pas une action physique mais une attitude intellectuelle et spirituelle. 'Lamuu' = sachez, prenez conscience. Ce commandement de connaissance suit le commandement d'action (qatiluu) : le combat doit etre accompagne de savoir et de conscience. On ne combat pas aveuglément dans la voie d'Allah — on le fait en sachant qu'Allah est present.

**qu'Allah est Tout-Entendant** — anna llaha sami'un. Le nom divin Sami' (Tout-Entendant) dans ce contexte militaire a une double portee : il assure le combattant qu'Allah entend ses supplications et ses declarations d'intention (niyya) ; il avertit aussi que Allah entend les contradictions, les fanfaronnades ou les abandons. Le Tout-Entendant est temoin de tout ce qui est dit, proclame, promis.

**Omniscient** — 'alimun. Le nom divin 'Alim (Omniscient) cloture le verset avec une affirmation de la science totale d'Allah. Il connait les intentions profondes (niyyat), les circonstances, les peurs et les courages. Nul sacrifie n'est ignore, nulle hesitation n'est cachee. L'Omniscient connait aussi les strategies ennemies — le croyant peut se fier a Allah pour une guidance complete.

§CRITIQUE§
Hamidullah traduit 'qatiluu' par 'combattez'. La Form III qatala est bien 'combattre mutuellement' — c'est un combat bilateral, pas unilateral. La traduction 'combattez' est correcte. Certains traducteurs preferent 'livrez bataille' ou 'menez le combat' pour rendre la Form III. 'Engagez-vous dans la lutte' souligne le caractere actif et engage de l'imperatif.

La formule 'fi sabil Allah' (dans la voie d'Allah) est une des formules les plus connues du Coran. Hamidullah traduit par 'dans le sentier de Dieu'. 'Sabil' est effectivement un chemin ou sentier, mais la dimension metaphorique (la voie = la cause, la direction divine) est aussi presente. 'Dans la voie d'Allah' ou 'pour la cause d'Allah' rendrait les deux dimensions.

La cloture par deux noms divins (Sami'/Tout-Entendant et 'Alim/Omniscient) apres un commandement de combat est typique du style coranien : l'action humaine est encadree par des attributs divins qui la motivent et la surveiller. Sami' assure que les paroles et prieres sont entendues ; 'Alim assure que les intentions et actes sont connus. Ensemble, ils garantissent que le combat sincere dans la voie d'Allah ne passe pas inapercu.`,
    segments: [
      { fr: "et combattez", pos: "verbe", phon: "waqatiluu", arabic: "وَقَـٰتِلُوا۟", word_key: "qtl", is_particle: false, sense_retenu: "combat/lutte", position: 1 },
      { fr: "dans", is_particle: true, phon: "fi", arabic: "فِى", position: 2 },
      { fr: "la voie de", pos: "nom", phon: "sabili", arabic: "سَبِيلِ", word_key: "sbl", is_particle: false, sense_retenu: "voie/chemin", position: 3 },
      { fr: "Allah", is_particle: true, phon: "Allahi", arabic: "ٱللَّهِ", position: 4 },
      { fr: "et sachez", pos: "verbe", phon: "wa'lamuu", arabic: "وَٱعْلَمُوٓا۟", word_key: "elm", is_particle: false, sense_retenu: "connaissance/savoir", position: 5 },
      { fr: "que", is_particle: true, phon: "anna", arabic: "أَنَّ", position: 6 },
      { fr: "Allah", is_particle: true, phon: "Allaha", arabic: "ٱللَّهَ", position: 7 },
      { fr: "Tout-Entendant", pos: "adjectif", phon: "sami'un", arabic: "سَمِيعٌ", word_key: "sme", is_particle: false, sense_retenu: "écoute/audition", position: 8 },
      { fr: "Omniscient", is_particle: true, phon: "'alimun", arabic: "عَلِيمٌ", position: 9 }
    ],
    vwa: [
      {
        word_key: "qtl",
        position: 1,
        sense_chosen: "combat/lutte",
        analysis_axes: {
          sense_chosen: "combat/lutte",
          concept_chosen: "Combat/Lutte",
          concepts: {
            "Combat/Lutte": {
              status: "retenu",
              senses: ["combattre", "livrer bataille", "s'engager dans un affrontement", "lutter", "mener le combat", "s'opposer militairement"],
              proof_ctx: "Waqatiluu est un imperatif 2MP de la racine q-t-l (qtl) en Form III (qatala). Le Lane's donne pour q-t-l (Form I qatala) : tuer, donner la mort. Form III qatala = combattre mutuellement, s'affronter — la Form III designe une action reciproque entre deux parties. Qatiluu est donc 'combattez' (affrontement bilateral) plutot que simplement 'tuez' (action unilaterale).",
              axe1_verset: "L'imperatif qatiluu (combattez) arrive directement apres le recit de V243 sur ceux qui fuyaient la mort. La lecon est explicite : ceux qui fuyaient furent quand meme mis a mort ; mieux vaut donc combattre dans la voie d'Allah que fuir. Le combat (qital) dans la voie d'Allah est presente comme la reponse juste a la peur de la mort — non pas l'evitement mais l'engagement confiant. La mort peut survenir dans les deux cas, mais seul le combat dans la voie d'Allah est porteur de sens.",
              axe2_voisins: "Le verset 190 d'al-Baqarah avait introduit le commandement de combattre : 'combattez dans la voie d'Allah ceux qui vous combattent'. Le verset 244 reprend ce commandement de maniere plus condensee et universelle. La section 2:190-244 forme ainsi un arc sur le combat dans la voie d'Allah, avec ses regles (190-194), ses motivations (195-243) et son rappel final (244). Qatiluu ici cloture cet arc.",
              axe3_sourate: "Al-Baqarah contient la legislation la plus detaillee sur le djihad militaire du Coran. La racine q-t-l y apparait de maniere recurrente. Mais a chaque fois, le combat (qital) est encadre : dans la voie d'Allah (fi sabil Allah), selon des regles (v.190-194), avec conscience que Allah connait tout (v.244). Al-Baqarah ne glorifie pas la violence brute mais l'engagement responsable et oriente vers Allah.",
              axe4_coherence: "La racine q-t-l apparait environ 170 fois dans le Coran. Elle couvre le spectre de tuer (qatala, Form I) a combattre mutuellement (qatala, Form III), a etre tue/martyr (qutila, passif). La Form III qatala (combattre) est utilisee specifiquement dans les contextes de djihad — c'est un combat reciproque, pas un massacre unilateral. Cette precision grammaticale a des implications juridiques importantes dans le fiqh.",
              axe5_frequence: "Pour les juristes et commentateurs, qatiluu fi sabil Allah est l'un des versets fondateurs du djihad militaire en islam. La tradition exegetique a developpe des conditions strictes autour de ce commandement : qui est oblige de combattre, dans quelles circonstances, avec quelles regles. L'imperatif qatiluu n'est pas une carte blanche a la violence — il est encadre par 'fi sabil Allah' (dans la voie d'Allah), ce qui implique conformite aux lois divines et a l'ethique de la guerre."
            }
          }
        }
      },
      {
        word_key: "sbl",
        position: 3,
        sense_chosen: "voie/chemin",
        analysis_axes: {
          sense_chosen: "voie/chemin",
          concept_chosen: "Voie/Chemin",
          concepts: {
            "Voie/Chemin": {
              status: "retenu",
              senses: ["voie", "chemin", "route", "direction", "cause", "moyen d'acces"],
              proof_ctx: "Sabili est un nom genitif de sabil, derive de la racine s-b-l (sbl). Le Lane's donne pour sabil : chemin, route, voie — au sens propre d'un chemin physique et au sens figure d'une direction, d'une cause ou d'un moyen. 'Fi sabil Allah' est une formule consacree qui designe la cause divine, l'action accomplie pour Allah et en conformite avec Sa volonte. Sabil est un substantif tres productif en arabe classique.",
              axe1_verset: "La formule 'fi sabil Allah' (dans la voie d'Allah) qualifie et reoriente le commandement qatiluu. Sans cette qualification, qatiluu serait un commandement de violence nue. Avec 'fi sabil Allah', il devient un engagement oriente, donne du sens, encadre par la direction divine. Sabil (la voie) designe a la fois le cadre (lutter pour Allah), la methode (selon les lois d'Allah) et le but (pour plaire a Allah).",
              axe2_voisins: "La formule 'fi sabil Allah' apparait de nombreuses fois dans al-Baqarah, toujours pour qualifier des actions qui transcendent l'interet personnel : combattre (v.190, 244), depenser (v.195), emigrer (v.218). Dans chaque cas, 'fi sabil Allah' est le critere qui distingue l'action meritoire de l'action ordinaire. Le sabil (la voie) est la ligne directrice spirituelle qui donne sens aux actions humaines.",
              axe3_sourate: "Al-Baqarah utilise sabil dans plusieurs sens : le chemin droit (al-sirat al-mustaqim, v.142), la voie du combat (fi sabil Allah, v.190-244), et parfois la voie de l'erreur (sabil al-fasad). La polysemie de sabil — physique et metaphorique — en fait un terme riche. 'Fi sabil Allah' est l'expression la plus condensee de l'orientation theologique de toute action : faire que chaque acte soit un chemin vers Allah.",
              axe4_coherence: "La racine s-b-l et le mot sabil apparaissent environ 176 fois dans le Coran. La formule 'fi sabil Allah' est l'une des formules les plus recurrentes — elle designe globalement 'pour la cause d'Allah'. Dans la jurisprudence islamique, les actions 'fi sabil Allah' ont un statut particulier — elles peuvent ouvrir droit a certaines formes de zakat (aumone legale). Le sabil d'Allah est ainsi ancre dans la pratique concrete.",
              axe5_frequence: "Pour les theologiens soufis, 'fi sabil Allah' depasse le combat militaire pour designer tout effort spirituel et moral accompli pour Allah. La voie (sabil) devient la voie interieure de la transformation de soi. Mais pour les exegetes classiques, dans le contexte de V244, sabil designe clairement le djihad militaire — l'engagement dans un combat physique encadre par les commandements divins. Les deux lectures sont complementaires."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 5,
        sense_chosen: "connaissance/savoir",
        analysis_axes: {
          sense_chosen: "connaissance/savoir",
          concept_chosen: "Connaissance/Savoir",
          concepts: {
            "Connaissance/Savoir": {
              status: "retenu",
              senses: ["savoir", "connaitre", "avoir conscience de", "prendre connaissance", "etre informe", "realiser"],
              proof_ctx: "Wa'lamuu est un imperatif 2MP de la racine '-l-m (elm) en Form I ('alima = savoir). Le Lane's donne pour '-l-m : savoir, connaitre, avoir la science de quelque chose avec certitude. Form I 'alima = savoir ; Form IV a'lama = informer, faire savoir ; 'alim = savant. L'imperatif 'lamuu commande un acte de connaissance et de conscience active — ce n'est pas une simple information passive mais un commandement de prendre conscience.",
              axe1_verset: "L'imperatif 'lamuu (sachez) suit l'imperatif qatiluu (combattez) et forme un couple action-conscience. Le combat dans la voie d'Allah doit s'accompagner de savoir : savoir qu'Allah est Sami' (entendant) et 'Alim (omniscient). Cette connaissance doit motiver et qualifier l'action — on combat mieux quand on sait qu'Allah connait nos intentions et entend nos supplications. Le savoir est ici le fondement de la confiance dans le combat.",
              axe2_voisins: "La paire commandement-connaissance ('faites X, et sachez que Allah est Y') est un pattern recurrent dans al-Baqarah. Au verset 197, 'ittaquu Allah wa'lamuu anna Allah shadid al-'iqab' (craignez Allah et sachez qu'Allah est severe dans la sanction). Au verset 231, 'wa'lamuu anna Allah bi kulli shay'in 'alim' (et sachez qu'Allah est omniscient de toute chose). Le pattern etablit la base theologique des commandements pratiques.",
              axe3_sourate: "Al-Baqarah est la sourate du savoir ('ilm) autant que de la legislation. Les commandements pratiques sont systematiquement accompagnes d'affirmations de la science divine. Cette structure pedagogique montre que l'obeissance islamique n'est pas aveugle — elle est fondee sur la connaissance (ilm) de Qui on obeir et pourquoi. 'Wa'lamuu' (et sachez) est l'invitation a passer de l'obeissance mecanique a l'obeissance consciente.",
              axe4_coherence: "La racine '-l-m est l'une des racines les plus prolifiques du Coran — elle apparait sous des centaines de formes. 'Ilm (le savoir) est l'une des valeurs les plus hautes de l'islam. Le nom divin al-'Alim (l'Omniscient) est l'un des Beaux Noms d'Allah. L'imperatif 'lamuu (sachez) est une invitation a partager, a son niveau humain, l'orientation vers la connaissance qui caracterise Allah Lui-meme.",
              axe5_frequence: "Pour les theologiens, le double imperatif qatiluu/'lamuu (combattez/sachez) dans V244 exprime une anthropologie islamique de l'action : l'acte doit etre accompagne de conscience. Agir sans savoir, c'est agir aveuglément — ce que l'islam rejette. La tradition exegetique voit dans 'wa'lamuu' une exigence de niyya (intention consciente) dans le combat : on ne combat pas dans la voie d'Allah par habitude ou par pression sociale, mais par un acte de volonte eclaire."
            }
          }
        }
      },
      {
        word_key: "sme",
        position: 8,
        sense_chosen: "écoute/audition",
        analysis_axes: {
          sense_chosen: "écoute/audition",
          concept_chosen: "Écoute/Audition",
          concepts: {
            "Écoute/Audition": {
              status: "retenu",
              senses: ["entendre", "ouir", "ecouter", "percevoir les sons", "etre attentif a", "recevoir les supplications"],
              proof_ctx: "Sami'un est un adjectif intensif (sifat mushabbaha) de la racine s-m-' (sme). Le Lane's donne : entendre, percevoir par l'ouie, ecouter ; sami' = qui entend, attentif. Al-Sami' est l'un des Beaux Noms d'Allah — le Tout-Entendant. L'adjectif sami'un (forme indefinie) en fin de verset est une affirmation absolue : Allah est constitutionnellement et integralement Celui qui entend, sans aucune limite ni exception.",
              axe1_verset: "Le nom divin Sami' (Tout-Entendant) dans le contexte d'un appel au combat a une portee precise et consolante : Allah entend les prieres des combattants, leurs invocations (du'a), leurs cris dans la bataille, leurs demandes de secours. Le Tout-Entendant est un garant de la relation directe entre le combattant et son Seigneur — aucune supplication n'est perdue, aucun appel n'est ignore.",
              axe2_voisins: "Les noms divins Sami' et 'Alim sont souvent associes en paire dans le Coran. Au verset 137 d'al-Baqarah, 'wa huwa s-sami' al-'alim' (Il est le Tout-Entendant, l'Omniscient) cloture une affirmation de foi. La paire Sami'/'Alim couvre l'ensemble de la perception divine : Allah perçoit par l'ouie (sami') et par la connaissance totale ('alim). Ensemble, ils affirment que rien n'echappe a Allah — ni ce qui est dit ni ce qui est pense.",
              axe3_sourate: "Al-Baqarah cloture plusieurs commandements et sections par des noms divins qui fournissent le cadre theologique de l'obeissance. Les noms divins en fin de verset ne sont pas des ornements — ils sont des justifications et des motivations. Sami' ici rassure : Allah entend les combattants qui l'invoquent. 'Alim les avertit et les protege : Allah connait leurs intentions sinceres et recompensera en consequence.",
              axe4_coherence: "La racine s-m-' apparait environ 185 fois dans le Coran. Al-Sami' (le Tout-Entendant) est mentionné dans de nombreux versets, souvent associe a al-'Alim (Omniscient) ou al-Basir (Clairvoyant). Cette frequence souligne l'importance de l'attribut d'ecoute divine dans la theologie islamique : Allah n'est pas un dieu lointain et sourd — Il entend chaque son, chaque priere, chaque murmure. Cette proximite auditive est une source de confiance pour le croyant.",
              axe5_frequence: "Pour les commentateurs, associer Sami' (Tout-Entendant) a l'appel au combat dans la voie d'Allah sert un double objectif : encourager les croyants en leur assurant qu'Allah entend leurs invocations pendant le combat ; et avertir les hesitants ou les hyocrites qu'Allah entend aussi leurs refus, leurs excuses et leurs paroles contradictoires. Al-Sami' est a la fois un attribut de misericorde (Il entend les supplications) et de justice (Il entend les mensonges)."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[244];
  const {error:veErr} = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V244)');
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
  console.log('DONE V244 TERMINE');
}
main().catch(console.error);
