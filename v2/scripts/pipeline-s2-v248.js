const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  248: {
    verse_id: 255,
    analysis_id: 612,
    translation_arab: "وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ ءَايَةَ مُلْكِهِۦٓ أَن يَأْتِيَكُمُ ٱلتَّابُوتُ فِيهِ سَكِينَةٌ مِّن رَّبِّكُمْ وَبَقِيَّةٌ مِّمَّا تَرَكَ ءَالُ مُوسَىٰ وَءَالُ هَـٰرُونَ تَحْمِلُهُ ٱلْمَلَـٰٓئِكَةُ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَةً لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ",
    full_translation: "Et leur prophète leur dit : 'Le signe de sa royauté, c'est que vous viendra le Coffre, en lequel se trouve une quiétude de votre Seigneur et des reliques de ce que laissèrent la famille de Moïse et la famille d'Aaron, que les anges portent. Certes, en cela est un signe pour vous, si vous êtes croyants.'",
    translation_explanation: `§DEMARCHE§
La traduction de ce verset s'est concentrée sur deux termes théologiques de première importance : sakina (quiétude divine) et aya (signe). Le terme sakina a été rendu par "quiétude" plutôt que par "présence divine" ou "paix", afin de rester au plus près du sens lexical de la racine skn (habiter, se calmer, s'apaiser), tout en laissant ouverte la dimension théologique que les exégètes associent à la shechina hébraïque. Le terme aya a été rendu deux fois par "signe" : une première fois au sens de preuve de la légitimité royale, une seconde fois au sens de confirmation pour les croyants. Le terme baqiyya a été rendu par "reliques" pour suggérer le caractère précieux et sacré de ce qui reste des prophètes passés. La locution tahmiluhu l-mala'ikatu a été traduite littéralement pour conserver la solennité du verset.

§JUSTIFICATION§
Le verset 248 répond directement à la protestation du verset 247 : si Talut n'a pas la légitimité de la richesse ni celle de la lignée, il possède en revanche un signe divin — le retour du Coffre de l'alliance. Ce coffre contient la sakina, terme que la tradition exégétique rapproche de la shechina hébraïque, la présence ou la gloire divine qui accompagne le peuple élu. La mention explicite des familles de Moussa et de Haroun rattache Talut à la continuité de la prophétie, même si lui-même n'est pas prophète. Le transport du coffre par les anges en fait un objet sacré par excellence, dont le retour est un signe indéniable.

§CRITIQUE§
La principale difficulté est la traduction de sakina. Certains traducteurs optent pour "présence divine", ce qui est trop fort et anthropomorphiste. D'autres proposent "paix" ou "tranquillité", ce qui est trop faible. Nous avons choisi "quiétude" pour rendre l'idée d'un apaisement d'origine divine. Une autre difficulté concerne baqiyya : traduit par "reliques", le terme risque d'évoquer un culte des reliques au sens catholique. Il s'agit plutôt de vestiges sacrés, témoins de la présence des prophètes. Enfin, la répétition de aya en début et fin de verset est rhétoriquement significative : le signe (aya) de la royauté est lui-même un signe (aya) pour les croyants, jouant sur la circularité de la preuve.`,
    segments: [
      { fr: "Et il dit", is_particle: true, phon: "wa-qaala", arabic: "وَقَالَ", position: 1 },
      { fr: "à eux", is_particle: true, phon: "lahum", arabic: "لَهُمْ", position: 2 },
      { fr: "leur prophète", pos: "nom", phon: "nabiyyuhum", arabic: "نَبِيُّهُمْ", word_key: "nba", is_particle: false, sense_retenu: "prophète, porteur de nouvelles divines", position: 3 },
      { fr: "certes", is_particle: true, phon: "inna", arabic: "إِنَّ", position: 4 },
      { fr: "le signe", pos: "nom", phon: "aayata", arabic: "ءَايَةَ", word_key: "ayy", is_particle: false, sense_retenu: "signe, indice, preuve manifeste", position: 5 },
      { fr: "de sa royauté", pos: "nom", phon: "mulkihi", arabic: "مُلْكِهِۦٓ", word_key: "mlk", is_particle: false, sense_retenu: "royauté, souveraineté", position: 6 },
      { fr: "que", is_particle: true, phon: "an", arabic: "أَن", position: 7 },
      { fr: "vous viendra", is_particle: true, phon: "ya'tiyakumu", arabic: "يَأْتِيَكُمُ", position: 8 },
      { fr: "le Coffre", is_particle: true, phon: "al-taabuutu", arabic: "ٱلتَّابُوتُ", position: 9 },
      { fr: "en lequel", is_particle: true, phon: "fiihi", arabic: "فِيهِ", position: 10 },
      { fr: "une quiétude", pos: "nom", phon: "sakiinatun", arabic: "سَكِينَةٌ", word_key: "skn", is_particle: false, sense_retenu: "quiétude divine, apaisement sacré", position: 11 },
      { fr: "de", is_particle: true, phon: "min", arabic: "مِّن", position: 12 },
      { fr: "votre Seigneur", is_particle: true, phon: "rabbikum", arabic: "رَّبِّكُمْ", position: 13 },
      { fr: "et des reliques", pos: "nom", phon: "wa-baqiyyatun", arabic: "وَبَقِيَّةٌ", word_key: "bqy", is_particle: false, sense_retenu: "ce qui reste, les vestiges précieux", position: 14 },
      { fr: "de ce que", is_particle: true, phon: "mimmaa", arabic: "مِّمَّا", position: 15 },
      { fr: "laissa", pos: "verbe", phon: "taraka", arabic: "تَرَكَ", word_key: "trk", is_particle: false, sense_retenu: "laisser derrière soi, léguer", position: 16 },
      { fr: "la famille de", is_particle: true, phon: "aalu", arabic: "ءَالُ", position: 17 },
      { fr: "Moussa", is_particle: true, phon: "muusaa", arabic: "مُوسَىٰ", position: 18 },
      { fr: "et la famille de", is_particle: true, phon: "wa-aalu", arabic: "وَءَالُ", position: 19 },
      { fr: "Haroun", is_particle: true, phon: "haaruuna", arabic: "هَـٰرُونَ", position: 20 },
      { fr: "le portent", pos: "verbe", phon: "tahmiluhu", arabic: "تَحْمِلُهُ", word_key: "hml", is_particle: false, sense_retenu: "porter, transporter", position: 21 },
      { fr: "les anges", is_particle: true, phon: "al-malaa'ikatu", arabic: "ٱلْمَلَـٰٓئِكَةُ", position: 22 },
      { fr: "—", is_particle: true, phon: "", arabic: "ۚ", position: 23 },
      { fr: "certes", is_particle: true, phon: "inna", arabic: "إِنَّ", position: 24 },
      { fr: "dans", is_particle: true, phon: "fii", arabic: "فِى", position: 25 },
      { fr: "cela", is_particle: true, phon: "dhaalika", arabic: "ذَٰلِكَ", position: 26 },
      { fr: "un signe", pos: "nom", phon: "la-aayatan", arabic: "لَـَٔايَةً", word_key: "ayy", is_particle: false, sense_retenu: "signe, preuve manifeste", position: 27 },
      { fr: "pour vous", is_particle: true, phon: "lakum", arabic: "لَّكُمْ", position: 28 },
      { fr: "si", is_particle: true, phon: "in", arabic: "إِن", position: 29 },
      { fr: "vous étiez", is_particle: true, phon: "kuntum", arabic: "كُنتُم", position: 30 },
      { fr: "croyants", is_particle: true, phon: "mu'miniina", arabic: "مُّؤْمِنِينَ", position: 31 }
    ],
    vwa: [
      {
        word_key: "ayy",
        position: 5,
        sense_chosen: "signe, indice, preuve manifeste",
        analysis_axes: {
          sense_chosen: "signe, indice, preuve manifeste",
          concept_chosen: "Signe/Preuve",
          concepts: {
            "Signe/Preuve": {
              status: "retenu",
              senses: ["signe", "indice", "preuve manifeste", "miracle", "verset coranique"],
              proof_ctx: "Lane indique que aya désigne un signe qui pointe vers quelque chose d'autre, une indication visible d'une réalité invisible. La racine ayy implique l'idée de désignation et de pointage. Dans le Coran, aya peut désigner aussi bien un miracle qu'un verset du texte sacré ou un phénomène naturel servant de preuve.",
              axe1_verset: "Au verset 248, aya désigne le signe concret de la légitimité royale de Talut : le retour du Coffre. Ce signe est à la fois un événement historique et une preuve divine. La double occurrence d'aya dans le verset — d'abord comme preuve de la royauté, puis comme confirmation pour les croyants — montre que le signe fonctionne à deux niveaux : politique et spirituel.",
              axe2_voisins: "Au verset 247, le prophète avait annoncé la désignation de Talut par la parole. Au verset 248, la légitimité est confirmée par un signe concret. Cette progression de la parole au signe visible est caractéristique de la manière dont le Coran traite la prophétie : l'annonce précède le signe qui la confirme.",
              axe3_sourate: "Dans la sourate al-Baqarah, le terme aya est extrêmement fréquent. Il désigne les signes naturels (la création), les signes prophétiques (les miracles) et les versets du Coran lui-même. Dans ce contexte royal et militaire, aya désigne spécifiquement un signe de légitimation divine, une catégorie particulière qui confirme la désignation d'un chef.",
              axe4_coherence: "Aya est l'un des termes les plus fréquents du Coran avec plus de trois cents occurrences. Dans toutes ses acceptions, le terme désigne ce qui renvoie à une réalité transcendante. Dans le contexte de la désignation royale, aya signifie que la légitimité de Talut n'est pas d'ordre humain mais divinement attestée par un événement surnaturel.",
              axe5_frequence: "Les exégètes classiques commentent aya mulkihi par 'dalil 'ala silahiyyatihi li-l-mulk' (preuve de son aptitude à la royauté). Al-Razi insiste sur le fait que ce signe était nécessaire parce que les fils d'Israel avaient exigé une preuve tangible. Le signe répond ainsi à une demande de justification, transformant l'élection divine en événement démontrable."
            }
          }
        }
      },
      {
        word_key: "skn",
        position: 11,
        sense_chosen: "quiétude divine, apaisement sacré",
        analysis_axes: {
          sense_chosen: "quiétude divine, apaisement sacré",
          concept_chosen: "Quietude/Apaisement",
          concepts: {
            "Quietude/Apaisement": {
              status: "retenu",
              senses: ["quiétude", "apaisement", "tranquillité divine", "présence apaisante"],
              proof_ctx: "Lane indique que sakana signifie être tranquille, s'apaiser, s'arrêter dans un mouvement. Sakina est le nom d'action désignant l'état de quiétude, de tranquillité. Lane note que les exégètes arabes ont rapproché ce terme du terme hébreu shechina (présence divine, gloire), bien que l'étymologie arabe propre reste liée à l'idée d'apaisement et d'habitation.",
              axe1_verset: "Dans ce verset, sakina est contenue dans le Coffre de l'alliance et provient du Seigneur (min rabbikum). Elle n'est donc pas une simple tranquillité humaine mais une quiétude d'origine divine, accordée aux croyants par la présence de l'objet sacré. Ce sens d'apaisement surnaturel justifie la valeur du Coffre comme signe de légitimité royale.",
              axe2_voisins: "Le terme sakina revient dans d'autres versets coraniques, notamment 9:26 et 48:4, où le divin fait descendre la sakina sur le Prophète et les croyants dans des moments de combat et d'épreuve. Ce contexte militaire est cohérent avec l'usage du terme en 2:248, où la sakina accompagne le Coffre qui précède l'armée de Talut dans sa campagne.",
              axe3_sourate: "Dans la sourate al-Baqarah, la dimension spirituelle de la pratique religieuse est constamment présente. La sakina dans le Coffre rappelle que les fils d'Israel avaient besoin d'un support tangible de la présence divine pour maintenir leur foi en temps de guerre. Le Coffre fonctionnait comme un lieu de la sakina, comparable à ce que la tradition hébraïque appelle l'arche de l'alliance.",
              axe4_coherence: "La sakina revient six fois dans le Coran, toujours dans des contextes de combat, d'épreuve ou de difficulté. Dans tous ces contextes, elle désigne un don divin d'apaisement accordé aux croyants. Cette cohérence confirme que sakina n'est pas une simple paix intérieure mais une intervention divine qui calme et fortifie dans l'adversité.",
              axe5_frequence: "Al-Tabari explique sakina par 'rahma' (miséricorde) ou 'waqar' (dignité, sérénité). Ibn Abbas, selon al-Tabari, aurait dit que la sakina avait un visage comme celui d'un être humain — une tradition que les commentateurs postérieurs ont réinterprétée comme une métaphore de la présence divine visible. Al-Qurtubi rapproche explicitement sakina de la shechina hébraïque."
            }
          }
        }
      },
      {
        word_key: "bqy",
        position: 14,
        sense_chosen: "ce qui reste, les vestiges précieux",
        analysis_axes: {
          sense_chosen: "ce qui reste, les vestiges précieux",
          concept_chosen: "Vestige/Heritage",
          concepts: {
            "Vestige/Heritage": {
              status: "retenu",
              senses: ["ce qui reste", "les reliques", "le résidu précieux", "l'héritage subsistant"],
              proof_ctx: "Lane indique que baqiya signifie rester, demeurer, subsister. Baqiyya est le nom désignant ce qui reste après la disparition du reste, donc le résidu, ce qui a survécu. Dans un contexte sacré, baqiyya évoque ce qui a subsisté des prophètes, des objets qui leur appartenaient et qui conservent une valeur symbolique et spirituelle.",
              axe1_verset: "Le terme baqiyya dans ce verset désigne les reliques conservées dans le Coffre, provenant des familles de Moussa et de Haroun. Il s'agit de ce qui a survécu des prophètes, des vestiges tangibles de la prophétie. Ces reliques donnent au Coffre sa valeur comme signe divin, car elles témoignent de la continuité entre Talut et la tradition prophétique d'Israel.",
              axe2_voisins: "La mention explicite des familles de Moussa et de Haroun dans ce même verset précise la nature de ces vestiges : ils appartiennent à la lignée prophétique par excellence. Les fils d'Israel, qui contestaient la légitimité de Talut sur la base de la lignée, se voient ainsi opposer un signe qui rattache la royauté de Talut à la tradition prophétique.",
              axe3_sourate: "Dans al-Baqarah, la continuité entre les prophètes est un thème structurant : Ibrahim, Ismael, Ishaq, Ya'qub, Moussa, puis le Prophète forment une chaîne de transmission. La mention des baqiyya (reliques) de Moussa et Haroun s'inscrit dans cette logique de continuité : le passé prophétique subsiste dans des objets qui perpétuent sa présence.",
              axe4_coherence: "Le terme baqiyya est rare dans le Coran, ce qui rend son emploi ici particulièrement significatif. Dans les quelques occurrences du terme, il désigne toujours ce qui demeure après une destruction ou une disparition, souvent avec une connotation de valeur préservée. Appliqué aux objets des prophètes, baqiyya évoque un héritage sacré qui transcende le temps.",
              axe5_frequence: "Les exégètes classiques identifient les baqiyya avec les tablettes de Moussa, la verge d'Aaron, le manteau de Moussa ou des fragments de la Torah selon les traditions. Al-Tabari rapporte plusieurs traditions sur la nature exacte de ces reliques. L'essentiel est qu'elles représentent la continuité entre la prophétie passée et la royauté présente de Talut."
            }
          }
        }
      },
      {
        word_key: "trk",
        position: 16,
        sense_chosen: "laisser derrière soi, léguer après sa mort",
        analysis_axes: {
          sense_chosen: "laisser derrière soi, léguer après sa mort",
          concept_chosen: "Legs/Transmission",
          concepts: {
            "Legs/Transmission": {
              status: "retenu",
              senses: ["laisser", "abandonner", "léguer en mourant", "transmettre par héritage"],
              proof_ctx: "Lane indique que taraka signifie laisser quelque chose derrière soi, l'abandonner ou le léguer. Dans le contexte funèbre ou testamentaire, taraka désigne ce que le défunt laisse à ses héritiers. La racine implique une séparation : celui qui laisse n'est plus là, mais ce qu'il a laissé subsiste.",
              axe1_verset: "Le verbe taraka dans ce verset indique que les reliques ont été laissées par les familles de Moussa et Haroun après leur mort. Il s'agit d'un legs involontaire mais précieux : les prophètes ont disparu mais leurs objets sont restés. Ce legs involontaire est transformé par la tradition en héritage sacré, conservé dans le Coffre.",
              axe2_voisins: "La combinaison de baqiyya (ce qui reste) et taraka (ce qui a été laissé) forme une double insistance sur la persistance du passé prophétique dans le présent. Ce que les prophètes ont laissé (taraka) constitue des vestiges (baqiyya) qui traversent les générations et se trouvent maintenant dans le Coffre de Talut.",
              axe3_sourate: "Dans la sourate al-Baqarah, la question de l'héritage est présente dans plusieurs contextes (héritage des biens, des lois, des traditions prophétiques). Le verbe taraka ici s'inscrit dans ce thème de la transmission : la royauté de Talut est légitime parce qu'elle s'inscrit dans la continuité de ce que les prophètes ont laissé.",
              axe4_coherence: "La racine trk est fréquente dans le Coran, notamment dans le contexte des successions et des héritages. Dans tous ces contextes, taraka implique que quelqu'un est parti et a laissé quelque chose. Ce sens de séparation et de transmission posthume est cohérent avec l'usage en 2:248 : les prophètes Moussa et Haroun ont disparu mais leurs objets sacrés persistent.",
              axe5_frequence: "Al-Baydawi et Ibn Kathir commentent taraka ici dans le sens d'un dépôt sacré conservé de génération en génération. La tradition mentionne que le Coffre avait été perdu au cours des invasions et des exils d'Israel et que son retour miraculeux — porté par les anges — constitue précisément le signe de la légitimité de Talut."
            }
          }
        }
      },
      {
        word_key: "hml",
        position: 21,
        sense_chosen: "porter, transporter",
        analysis_axes: {
          sense_chosen: "porter, transporter",
          concept_chosen: "Transport/Elevation",
          concepts: {
            "Transport/Elevation": {
              status: "retenu",
              senses: ["porter", "transporter", "soulever", "prendre en charge"],
              proof_ctx: "Lane indique que hamala signifie porter, soulever un poids, transporter une charge. Le terme implique un effort physique de soulèvement et de déplacement. Dans un contexte sacré, hamala peut désigner le transport d'objets saints ou de responsabilités spirituelles. Tahmiluhu signifie 'ils le portent', avec la nuance d'une charge active et continue.",
              axe1_verset: "Dans ce verset, tahmiluhu l-mala'ikatu (que les anges portent) est une proposition relative qui qualifie le Coffre. Le transport du Coffre par les anges est ce qui le distingue comme objet surnaturel : il ne se déplace pas par des moyens humains mais par une force céleste. Cet acte de porter est en même temps un acte de sanctification et de protection.",
              axe2_voisins: "Le retour miraculeux du Coffre porté par les anges est le signe central que le prophète annonce au verset 248 pour confirmer la royauté de Talut. La preuve n'est pas dans la richesse ou la noblesse de Talut, mais dans cet événement surnaturel : le transport céleste du Coffre jusqu'à l'armée d'Israel.",
              axe3_sourate: "Dans la sourate al-Baqarah, les anges apparaissent comme des agents de la volonté divine à plusieurs reprises. Ici, les anges portent le Coffre, acte qui souligne la nature surnaturelle du signe. Le transport angélique confère au Coffre une dimension transcendante : il n'est pas un simple objet historique mais un vecteur de la présence divine.",
              axe4_coherence: "La racine hml revient dans le Coran dans des contextes variés : porter des fardeaux (les péchés), transporter des objets, ou subir le poids d'une responsabilité. Dans tous ces usages, hamala implique une charge réelle, physique ou morale. Appliqué aux anges qui portent le Coffre, le terme insiste sur la réalité concrète du miracle.",
              axe5_frequence: "Les exégètes ont débattu de la nature exacte du transport angélique du Coffre. Al-Tabari rapporte que selon certaines traditions, les fils d'Israel virent effectivement les anges porter le Coffre dans les airs avant de le déposer. D'autres exégètes interprètent ce transport comme une métaphore de la protection divine accordée au Coffre lors de son retour."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[248];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V248)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ' pos=' + word.position + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V248 TERMINE');
}
main().catch(console.error);
