const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 219
// verse_id=226, analysis_id=584
// "yas'alunaka 'an al-khamri wa-al-maysiri
//  qul fihima ithmun kabirun wa-manafi'u lil-nasi
//  wa-ithumuhuma akbaru min naf'ihima
//  wa-yas'alunaka madha yunfiquna quli al-'afwa
//  kadhalika yubayyinu Allahu lakumu al-ayati
//  la'allakum tatafakkaruna"
// =====================================================

const verseData = {
  219: {
    verse_id: 226,
    analysis_id: 584,
    translation_arab: "Ils t'interrogent sur le vin et le jeu de hasard. Dis : en eux deux il y a une faute grave et des avantages pour les gens ; mais leur faute est plus grande que leur profit. Et ils t'interrogent : que depensent-ils ? Dis : le surplus. Ainsi Dieu vous clarifie les signes pour que vous reflechissiez.",
    full_translation: "Ils t'interrogent sur le vin et les jeux de hasard. Dis: «Dans les deux il y a un grand peche et quelques avantages pour les gens; mais dans les deux, le peche est plus grand que l'utilite». Et ils t'interrogent: «Que doit-on depenser (en charite)?» Dis: «L'excedent de vos biens.» Ainsi, Allah vous explique Ses versets afin que vous meditiez",
    translation_explanation: `§DEMARCHE§
Le verset 219 contient deux questions distinctes : 1) sur le vin et le jeu (al-khamr wa-al-maysir) et 2) sur la depense (madha yunfiquna). Pour le vin et le jeu, la reponse est graduee : avantages admis mais la faute est plus grande. Pour la depense, la reponse est concise : al-'afw (le surplus/pardon).

Le nom **al-khamri** est de la racine kh-m-r. Le Lane's donne : couvrir, voiler ; khamr = vin, boisson qui couvre l'esprit, qui voile la raison. La racine kh-m-r designe le fait de couvrir/voiler — le khamr est ce qui voile l'intellect.

Le nom **al-maysiri** est de la racine y-s-r. Le Lane's donne : facilite, aisance ; maysir = jeu de hasard, pari. Le maysir est le jeu de chance — etymologiquement lie a la facilite (y-s-r = facile) mais dans le sens du gain facile sans travail.

Le nom **ithmun** est de la racine a-th-m. Le Lane's donne : faute, peche, ce qui est moralement reprehensible. L'ithm est la faute — l'acte qui transgresse la morale.

Le nom **manafi'u** est un pluriel de la racine n-f-'. Le Lane's donne : avantage, profit, utilite, benefice. Les manafi' sont les avantages pratiques — ce qui profite.

Le nom **al-'afwa** est de la racine '-f-w. Le Lane's donne : pardon, effacement, surplus, le plus que necessaire. Le 'afw a un double sens : a) le pardon (effacement des fautes), b) le surplus/excess (ce qui depasse le necessaire). Dans ce contexte « dis : al-'afw » en reponse a « que depenser ? », c'est le sens de surplus/excedent qui est actif — depensez ce qui est au-dela de vos besoins.

La particule **kadhalika** designe l'analogie — « ainsi/de meme ».

Le verbe **yubayyinu** est un inaccompli 3MS de la racine b-y-n (Form II). Le Lane's donne : clarifier, rendre clair, expliquer, manifester. Le tabyin est la clarification — rendre clair ce qui etait obscur.

Le verbe **tatafakkaruna** est un inaccompli 2MP de la racine f-k-r (Form V). Le Lane's donne : reflechir, mediter, penser profondement. Le tafakkur est la reflection profonde — un effort intellectuel soutenu pour comprendre.

§JUSTIFICATION§
**vin** — « al-khamr » est traduit par « vin » (sens standard), meme si etymologiquement c'est « ce qui couvre l'esprit » — toute boisson enivrant.

**jeu de hasard** — « al-maysir » est traduit par « jeu de hasard » car c'est le sens etabli.

**faute** — « ithm » est traduit par « faute » plutot que « peche » car l'ithm designe la transgression morale sans la connotation religieuse specifique du mot « peche » (qui vient du latin peccatum/christianus).

**avantages** — « manafi' » est traduit par « avantages » car c'est le sens de profit/benefice pratique. L'alternative « utilite » est possible.

**surplus** — « al-'afw » est traduit par « surplus » dans le contexte de la depense. L'alternative « excedent » est aussi valide. L'alternative « pardon » est le sens d'al-'afw dans les contextes de forgiveness mais ici le contexte est la depense (que depenser ?).

**clarifie** — « yubayyinu » est traduit par « clarifie » car b-y-n designe la clarte. L'alternative « explique » est aussi valide.

**reflechissiez** — « tatafakkaruna » est traduit par « reflechissiez » car f-k-r designe la reflection profonde. L'alternative « meditiez » est aussi valide.

§CRITIQUE§
Hamidullah traduit « al-'afw » par « l'excedent de vos biens ». Cette traduction ajoute « de vos biens » qui n'est pas dans le texte — le texte dit juste « al-'afw » (le surplus). L'ajout de « de vos biens » est une explication utile mais elle n'est pas dans le texte arabe. La traduction plus fidele serait simplement « le surplus » ou « l'excedent ».

La reponse sur le vin et le jeu est graduee : avantages admis (manafi'), faute admise (ithm), faute > avantages (ithm > naf'). Cette structure de graduation est une approche pedagogique qui ne nie pas les avantages mais montre leur insuffisance face a la gravite de la faute. Hamidullah traduit « ithmun kabirun » par « grand peche » — le mot « peche » est une traduction chretienne qui n'est pas exactement l'ithm. L'ithm est la transgression morale, pas le « peche » au sens theologique chretien.`,
    segments: [
      { fr: "Ils t'interrogent", pos: "verbe", phon: "yas'alunaka", arabic: "يَسْـَٔلُونَكَ", word_key: "sal", is_particle: false, sense_retenu: "demander/interroger", position: 0 },
      { fr: "sur le vin", pos: "nom", phon: "'an al-khamri", arabic: "عَنِ ٱلْخَمْرِ", word_key: "khmr", is_particle: false, sense_retenu: "ivresse/couverture", position: 1 },
      { fr: "et le jeu de hasard", pos: "nom", phon: "wa-al-maysiri", arabic: "وَٱلْمَيْسِرِ", word_key: "mysr", is_particle: false, sense_retenu: "jeu de hasard/risque", position: 2 },
      { fr: "Dis : en eux deux il y a une faute grave", pos: "nom", phon: "qul fihima ithmun kabirun", arabic: "قُلْ فِيهِمَآ إِثْمٌ كَبِيرٌ", word_key: "athm", is_particle: false, sense_retenu: "peche/faute", position: 3 },
      { fr: "et des avantages pour les gens", pos: "nom", phon: "wa-manafi'u lil-nasi", arabic: "وَمَنَـٰفِعُ لِلنَّاسِ", word_key: "nfa", is_particle: false, sense_retenu: "utilite/profit", position: 4 },
      { fr: "mais leur faute est plus grande que leur profit", phon: "wa-ithumuhuma akbaru min naf'ihima", arabic: "وَإِثْمُهُمَآ أَكْبَرُ مِن نَّفْعِهِمَا", is_particle: true, position: 5 },
      { fr: "Et ils t'interrogent", phon: "wa-yas'alunaka", arabic: "وَيَسْـَٔلُونَكَ", is_particle: true, position: 6 },
      { fr: "que depensent-ils", phon: "madha yunfiquna", arabic: "مَاذَا يُنفِقُونَ", is_particle: true, position: 7 },
      { fr: "Dis : le surplus", pos: "nom", phon: "quli al-'afwa", arabic: "قُلِ ٱلْعَفْوَ", word_key: "efw", is_particle: false, sense_retenu: "pardon/effacement", position: 8 },
      { fr: "Ainsi Dieu vous clarifie les signes", pos: "verbe", phon: "kadhalika yubayyinu Allahu lakumu al-ayati", arabic: "كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ لَكُمُ ٱلْـَٔايَـٰتِ", word_key: "byn", is_particle: false, sense_retenu: "clarte/evidence", position: 9 },
      { fr: "pour que vous reflechissiez", pos: "verbe", phon: "la'allakum tatafakkaruna", arabic: "لَعَلَّكُمْ تَتَفَكَّرُونَ", word_key: "fkr", is_particle: false, sense_retenu: "reflexion/meditation", position: 10 }
    ],
    vwa: [
      {
        word_key: "khmr",
        position: 1,
        sense_chosen: "ivresse/couverture",
        analysis_axes: {
          sense_chosen: "ivresse/couverture",
          concept_chosen: "Ivresse/Couverture",
          concepts: {
            "Ivresse/Couverture": {
              status: "retenu",
              senses: ["vin", "boisson enivrant", "ivresse", "couvrir l'esprit"],
              proof_ctx: "Le nom al-khamri est un nom defini genitif de la racine kh-m-r. Le Lane's donne : khamara = couvrir, voiler. Khamr = vin, boisson fermentee qui couvre/voile la raison et l'intellect. Le khamr est etymologiquement ce qui couvre l'esprit — toute boisson qui altere la conscience.",
              axe1_verset: "Le vin (al-khamr) est l'un des deux sujets de la question. La reponse graduee (avantages admis, faute plus grande) est une approche pedagogique qui ne diabolise pas d'emblee mais montre la hierarchie.",
              axe2_voisins: "Le verset 218 parlait de l'effort dans la voie de Dieu. Le verset 219 traite des pratiques sociales qui peuvent detourner de cette voie (vin, jeu de hasard).",
              axe3_sourate: "La racine kh-m-r est presente dans la sourate al-Baqarah en 2:219. La progression de la legislation sur le vin dans le Coran est graduelle — ce verset est une premiere etape vers l'interdiction totale.",
              axe4_coherence: "La racine kh-m-r apparait environ 6 fois dans le Coran. La legislation sur le khamr est progressive dans le Coran — de l'avertissement (2:219) a l'interdiction explicite (5:90).",
              axe5_frequence: "Pour le khalifa, la gestion des substances qui couvrent l'esprit est une responsabilite de sante publique. La pedagogie graduee du Coran (admettre les avantages, montrer la preponderance de la faute) est un modele de legislation progressive."
            }
          }
        }
      },
      {
        word_key: "mysr",
        position: 2,
        sense_chosen: "jeu de hasard/risque",
        analysis_axes: {
          sense_chosen: "jeu de hasard/risque",
          concept_chosen: "Jeu de hasard/Risque",
          concepts: {
            "Jeu de hasard/Risque": {
              status: "retenu",
              senses: ["jeu de hasard", "pari", "facilite de gain", "risque"],
              proof_ctx: "Le nom al-maysiri est un nom defini genitif de la racine y-s-r. Le Lane's donne : facilite, aisance ; maysir = jeu de hasard dans la societe arabe pre-islamique (partage d'une chamelle par pari). La racine y-s-r designe la facilite — le maysir est le gain facile par hasard sans effort.",
              axe1_verset: "Le jeu de hasard (al-maysir) est couplee avec le vin dans la question. Les deux sont des pratiques sociales avec des avantages admitted et des fautes qui les depassent.",
              axe2_voisins: "Le verset 215 traitait de la depense vers les vulnerables. Le verset 219 traite du vin et du jeu — deux pratiques qui peuvent detourner des ressources qui devraient aller aux vulnerables.",
              axe3_sourate: "La racine y-s-r est presente dans la sourate al-Baqarah en 2:185 (facilite, usrun = difficulte/yusrun = facilite), 2:219 (maysir = jeu de hasard).",
              axe4_coherence: "La racine y-s-r apparait environ 44 fois dans le Coran. Le maysir est distincte de la facilite positive — c'est la facilite illusoire du gain sans travail.",
              axe5_frequence: "Pour le khalifa, le jeu de hasard est une perturbation economique et sociale. Il cree une illusion de gain facile qui detourne du travail productif et de la solidarite."
            }
          }
        }
      },
      {
        word_key: "athm",
        position: 3,
        sense_chosen: "peche/faute",
        analysis_axes: {
          sense_chosen: "peche/faute",
          concept_chosen: "Peche/Faute",
          concepts: {
            "Peche/Faute": {
              status: "retenu",
              senses: ["faute", "transgression morale", "ce qui est reprehensible", "manquement"],
              proof_ctx: "Le nom ithmun est un nom nominatif indefini de la racine a-th-m. Le Lane's donne : faute, transgression morale, ce qui est reprehensible, manquement. L'ithm est la faute — l'acte qui blesse la morale. Distinct du kufr (rejet de Dieu) et du baghy (transgression deliberee), l'ithm est la faute morale ordinaire.",
              axe1_verset: "La faute (ithm) dans le vin et le jeu est admise — « fihima ithmun kabirun » (en eux il y a une faute grave). La faute n'est pas niee mais graduee — grave, mais la faute > les avantages.",
              axe2_voisins: "Le verset 217 parlait de la fitna (discorde) plus grave que le meurtre. Le verset 219 parle de l'ithm (faute) plus grande que les avantages. Les deux versets utilisent des comparaisons de gravite.",
              axe3_sourate: "La racine a-th-m est presente dans la sourate al-Baqarah en 2:85, 173, 206, 219. L'ithm est une faute morale reprehensible dans la conscience et devant Dieu.",
              axe4_coherence: "La racine a-th-m apparait environ 48 fois dans le Coran. L'ithm est distinct du khatat (erreur), du kufr (rejet) et du baghy (transgression) — c'est la faute morale dans sa dimension de responsabilite personnelle.",
              axe5_frequence: "Pour le khalifa, reconnaitre la faute (ithm) tout en admettant les avantages est une approche nuancee de la legislation. Toute interdiction doit etre argumentee — le Coran montre que l'ithm > les avantages justifie la regulation."
            }
          }
        }
      },
      {
        word_key: "nfa",
        position: 4,
        sense_chosen: "utilite/profit",
        analysis_axes: {
          sense_chosen: "utilite/profit",
          concept_chosen: "Utilite/Profit",
          concepts: {
            "Utilite/Profit": {
              status: "retenu",
              senses: ["avantages", "profit", "utilite", "benefice", "ce qui profite"],
              proof_ctx: "Le nom manafi'u est un pluriel de la racine n-f-'. Le Lane's donne : avantage, profit, utilite, benefice, ce qui est utile. Les manafi' sont les benefices pratiques — ce qui apporte un avantage. Manafi'u lil-nas = des avantages pour les gens (economiques, sociaux, physiques).",
              axe1_verset: "Les avantages (manafi') du vin et du jeu sont admis explicitement. Cette honnêtete de la reponse coranique est remarquable — ne pas nier les avantages mais les relativiser face a la faute. Les avantages sont reels mais insuffisants pour justifier la pratique.",
              axe2_voisins: "Le verset 217 parlait du combat grave/moins grave. Le verset 219 parle de la faute/avantages avec la meme structure comparative.",
              axe3_sourate: "La racine n-f-' est presente dans la sourate al-Baqarah en 2:102, 197, 219. L'utilite (naf') est une consideration legitime dans le jugement moral du Coran.",
              axe4_coherence: "La racine n-f-' apparait environ 50 fois dans le Coran. L'utilite et le benefice sont des considerations morales — le Coran ne les ignore pas mais les hiérarchise.",
              axe5_frequence: "Pour le khalifa, reconnaitre les avantages des pratiques problematiques est une approche realiste. La legislation doit etre argumentee — montrer que la faute > les avantages est un argument rationaliste accessible a tous."
            }
          }
        }
      },
      {
        word_key: "efw",
        position: 8,
        sense_chosen: "pardon/effacement",
        analysis_axes: {
          sense_chosen: "pardon/effacement",
          concept_chosen: "Pardon/Effacement",
          concepts: {
            "Pardon/Effacement": {
              status: "retenu",
              senses: ["pardon", "effacement", "surplus", "exces", "ce qui depasse"],
              proof_ctx: "Le nom al-'afwa est un nom defini accusatif de la racine '-f-w. Le Lane's donne : pardonner, effacer, ce qui est en sus, surplus, ce qui depasse le necessaire. Le 'afw a deux dimensions : a) le pardon (effacement des fautes), b) le surplus (ce qui depasse le necessaire). Dans ce contexte (que depenser ?), le sens de surplus/exces est actif — depensez ce qui est au-dela de vos besoins immediats.",
              axe1_verset: "Al-'afw (le surplus) est la reponse a la question sur la depense. C'est une reponse simple et directe : depensez ce qui est au-dela de vos besoins. Le 'afw comme surplus est ce qu'on peut donner sans se nuire.",
              axe2_voisins: "Le verset 215 identifiait les beneficiaires de la depense (parents, proches, orphelins, pauvres, voyageurs). Le verset 219 identifie la quantite a depenser : le surplus. Les deux versets completent la reponse : vers qui (215) et combien (219).",
              axe3_sourate: "La racine '-f-w est presente dans la sourate al-Baqarah en 2:52 (Dieu a pardonne les Fils d'Israel), 2:187 (Dieu a pardonne), 2:219 (surplus), 2:237 (pardonner). Le double sens pardon/surplus est actif dans differents contextes.",
              axe4_coherence: "La racine '-f-w apparait environ 35 fois dans le Coran. Le 'afw (pardon) de Dieu est un theme central. Le 'afw (surplus) comme principe de depense est moins frequent mais important pour la politique economique.",
              axe5_frequence: "Pour le khalifa, la depense du surplus est un principe de politique fiscale. Ne pas exiger plus que le surplus (ce qui depasse les besoins) est un principe de justice sociale. La zakat et les autres formes d'infaq doivent etre calibrees sur le surplus, pas sur l'essentiel."
            }
          }
        }
      },
      {
        word_key: "byn",
        position: 9,
        sense_chosen: "clarte/evidence",
        analysis_axes: {
          sense_chosen: "clarte/evidence",
          concept_chosen: "Clarte/Evidence",
          concepts: {
            "Clarte/Evidence": {
              status: "retenu",
              senses: ["clarifier", "rendre clair", "expliquer", "manifester", "clarte"],
              proof_ctx: "Le verbe yubayyinu est un inaccompli 3MS de la racine b-y-n (Form II). Le Lane's donne en Form II : clarifier, rendre clair, expliquer, manifester. La Form II intensive exprime une clarification deliberee et active — Dieu rend clair, il clarifie intentionnellement.",
              axe1_verset: "La clarification (yubayyinu) des signes par Dieu est la conclusion du verset — apres les reponses sur le vin, le jeu et la depense, le verset generalise : c'est ainsi que Dieu clarifie les signes pour que vous reflechissiez. La clarification est la methode divine d'enseignement.",
              axe2_voisins: "Le verset 213 parlait du Livre descend pour juger (li-yahkuma). Le verset 219 parle de Dieu qui clarifie les signes (yubayyinu al-ayat). Les deux fonctions (juger et clarifier) sont complementaires.",
              axe3_sourate: "La racine b-y-n et le yubayyinu sont frequents dans la sourate al-Baqarah pour la clarification divine. La sourate est un long processus de clarification des obligations et des interdictions.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. Le yubayyinu (Dieu clarifie) est une formule recurrente pour marquer la nature pedagogique de la revelation.",
              axe5_frequence: "Pour le khalifa, clarifier (tabyin) est une fonction pedagogique centrale. Le khalifa ne se contente pas d'enforcer les regles — il les explique et clarifie leur fondement pour que la communaute comprenne."
            }
          }
        }
      },
      {
        word_key: "fkr",
        position: 10,
        sense_chosen: "reflexion/meditation",
        analysis_axes: {
          sense_chosen: "reflexion/meditation",
          concept_chosen: "Reflexion/Meditation",
          concepts: {
            "Reflexion/Meditation": {
              status: "retenu",
              senses: ["reflechir", "mediter", "penser profondement", "tafakkur", "contemplation active"],
              proof_ctx: "Le verbe tatafakkaruna est un inaccompli 2MP de la racine f-k-r (Form V). Le Lane's donne : reflechir, mediter, penser profondement. La Form V reflexive (tafakkara) est l'effort de penser pour soi-meme — la reflection interieure et active. Le tafakkur est la meditation cognitive — un effort intellectuel soutenu pour comprendre.",
              axe1_verset: "La reflection (tatafakkaruna) est la finalite de la clarification divine. Dieu clarifie les signes POUR QUE vous reflechissiez. La clarification ne remplace pas la reflexion — elle la stimule. La guidance divine vise a activer la reflexion humaine.",
              axe2_voisins: "Le verset 216 concluait sur la connaissance divine (Dieu sait, vous ne savez pas). Le verset 219 conclut sur la reflexion humaine (pour que vous reflechissiez). Les deux conclusions sont complementaires : la connaissance de Dieu est absolue, la reflexion humaine est possible et requise.",
              axe3_sourate: "La racine f-k-r est presente dans la sourate al-Baqarah en 2:219, 266. La reflexion est une des finalites de la guidance divine — le Coran ne veut pas des croyants passifs mais des personnes qui reflechissent.",
              axe4_coherence: "La racine f-k-r apparait environ 18 fois dans le Coran. Le tafakkur est l'un des actes cognitifs les plus valorises dans le Coran — la reflection sur les signes divins et sur les enseignements.",
              axe5_frequence: "Pour le khalifa, stimuler la reflexion est une responsabilite pedagogique. Le khalifa ne gouverne pas des suiveurs passifs mais des citoyens capables de reflechir. La clarification des regles doit etre accompagnee d'une invitation a reflechir sur leur fondement."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[219];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V219)');

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

  console.log('\n✅ V219 TERMINE');
}
main().catch(console.error);
