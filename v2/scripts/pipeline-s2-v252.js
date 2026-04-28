const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  252: {
    verse_id: 259,
    analysis_id: 616,
    translation_arab: "tilka aayaatu llahi natluwha 'alayka bi-l-haqqi wa-innaka la-mina l-mursaliin",
    full_translation: "Tels sont les versets de Dieu que Nous te récitons avec la vérité. Tu es certes parmi les envoyés.",
    translation_explanation: `§DEMARCHE§
Le verset 2:252 est la formule de clôture après le récit de David et Goliath (versets 248-251). Il fonctionne comme un sceau narratif qui authentifie le récit et confirme la mission prophétique de Mohammed. La démarche traductive de ce bref verset consiste à rendre avec précision ses deux affirmations distinctes : la nature des récits coraniques (versets de Dieu récités avec la vérité) et la confirmation de la prophetie.

La première affirmation (tilka aayaatu llahi natluwha 'alayka bi-l-haqqi) est une formule déictique et théologique. Tilka (cela, ces choses-là) est un démonstratif de l'éloignement qui désigne ce qui vient d'être récité — le récit de David et Goliath. Il est rendu par "Tels sont" — formule française qui exprime à la fois la désignation et l'identification. Aayaatu llahi (les signes/versets de Dieu) est le terme central : ayya (pl. aayaat) désigne à la fois les signes de Dieu dans la nature et les versets du Coran — ici, les deux sens se superposent : ces récits sont des "signes" divins autant que des "versets" révélés.

Le verbe natluwha (Form I, première personne du pluriel : Nous la récitons/narrons) est rendu par "que Nous te récitons" — le pluriel de majesté divin (Nous = Dieu qui parle) est maintenu. Tala/yatlu désigne spécifiquement la récitation des Écritures — pas simplement "raconter" mais "réciter avec la voix", dans une tradition orale sacrée. La préposition 'alayka (sur toi/à toi) exprime la direction de la récitation : c'est Mohammed qui reçoit cette récitation divine.

Bi-l-haqqi (avec/selon la vérité) est rendu par "avec la vérité". Al-haqq désigne à la fois la vérité, la réalité ferme et le droit — ce que Dieu récite est vrai parce que Dieu est Al-Haqq (le Vrai). La préposition bi exprime ici l'accompagnement et la modalité : la récitation se fait avec la vérité, dans la vérité, conformément à la vérité.

La deuxième affirmation (wa-innaka la-mina l-mursaliin) confirme la mission prophetique. Inna + ka = "certes toi" (pronom d'insistance) ; la- (particule d'emphase) + mina l-mursaliin (parmi les envoyés). La construction est affirmative et emphatique : deux particules d'insistance (inna et la-) encadrent l'affirmation. "Tu es certes parmi les envoyés" est la traduction naturelle — "certes" rend le double emphase d'inna et la-.
§JUSTIFICATION§
"Tels sont" pour tilka : le démonstratif de l'éloignement tilka désigne ce qui vient d'être récité, le récit de David et Goliath. "Tels sont les versets de Dieu" est la formule française qui rend à la fois la désignation (ces choses) et l'identification (ce sont des versets divins). "Les versets" pour aayaat : le pluriel de ayya désigne ici les récits du Coran comme signes et versets révélés — double sens de signe divin et de texte sacré récité. "Que Nous te récitons" pour natluwha 'alayka : Form I natluu = nous récitons (1PP) ; ha = les (pronom objet féminin pluriel, référant aux aayaat) ; 'alayka = à toi, sur toi (direction de la récitation). Le pluriel "Nous" est le pluriel de majesté divin. "Avec la vérité" pour bi-l-haqqi : haqq = ce qui est ferme, vrai, droit ; bi-l-haqqi = avec la vérité, conformément à la réalité. Lane atteste haqq = truth, reality, that which is established and certain. "Certes" pour la double insistance inna... la- : inna est une particule d'affirmation forte (certes, assurément) ; la- est une autre particule d'emphase qui precede le prédicat — la double emphase est rendue par "certes" en français courant. "Parmi les envoyés" pour mina l-mursaliin : mursaliin = participe passif pluriel de arsala (Form IV de rsl = envoyer) ; al-mursaliin = ceux qui ont été envoyés, les envoyés (les prophètes messagers). La préposition mina = parmi, de — Mohammed est inclus dans la catégorie des envoyés, confirmé comme membre d'une lignée prophetique.
§CRITIQUE§
La traduction de Hamidullah (1959) rend ce verset ainsi : "Ce sont là les versets d'Allah que Nous te récitons en toute vérité. Et tu es certes du nombre des Messagers." Cette traduction est très proche de la nôtre et globalement excellente. Quelques observations précises méritent d'être formulées. Premièrement, "Ce sont là" pour tilka est une formule démonstrative correcte, légèrement moins naturelle que "Tels sont" qui est plus usité dans le registre solennel français. Deuxièmement, "en toute vérité" pour bi-l-haqqi est une traduction acceptable — "avec la vérité" est cependant plus littéral et préserve mieux l'article défini al-haqqu (la Vérité, comme attribut divin). "En toute vérité" pourrait faire penser à un adverbe de manière générale alors que bi-l-haqqi désigne Al-Haqq, la Vérité divine, comme modalité essentielle de la récitation. Troisièmement, "tu es certes du nombre des Messagers" pour wa-innaka la-mina l-mursaliin est correct — "du nombre des" et "parmi les" sont tous deux des façons de rendre mina. Notre choix "parmi les envoyés" insiste davantage sur l'appartenance à la communauté des prophètes envoyés plutôt que sur le comptage numérique. Quatrièmement, "Messagers" (avec majuscule) pour al-mursaliin est une traduction honorifique acceptable mais "les envoyés" (minuscule) est plus proche du sens littéral — mursaliin = ceux qui ont été envoyés (participe passif), sans hiérarchisation implicite entre prophètes et messagers que la majuscule pourrait suggérer en français.`,
    segments: [
      { position: 1, text_arab: "تِلْكَ", translation: "Tels sont", phonetic: "tilka", grammar_type: "particle" },
      { position: 2, text_arab: "ءَايَـٰتُ", translation: "les versets", phonetic: "aayaatu", grammar_type: "noun", root_key: "ayy" },
      { position: 3, text_arab: "ٱللَّهِ", translation: "de Dieu", phonetic: "llahi", grammar_type: "noun" },
      { position: 4, text_arab: "نَتْلُوهَا", translation: "que Nous te récitons", phonetic: "natluwha", grammar_type: "verb", root_key: "tlw" },
      { position: 5, text_arab: "عَلَيْكَ", translation: "à toi", phonetic: "'alayka", grammar_type: "particle" },
      { position: 6, text_arab: "بِٱلْحَقِّ", translation: "avec la vérité", phonetic: "bi-l-haqqi", grammar_type: "noun", root_key: "hqq" },
      { position: 7, text_arab: "ۚ", translation: "", phonetic: "", grammar_type: "particle" },
      { position: 8, text_arab: "وَإِنَّكَ", translation: "Et toi certes", phonetic: "wa-innaka", grammar_type: "particle" },
      { position: 9, text_arab: "لَمِنَ", translation: "tu es parmi", phonetic: "la-mina", grammar_type: "particle" },
      { position: 10, text_arab: "ٱلْمُرْسَلِينَ", translation: "les envoyés", phonetic: "al-mursaliin", grammar_type: "noun", root_key: "rsl" }
    ],
    vwa: [
      {
        word_key: "ayy",
        position: 2,
        sense_chosen: "les signes divins et versets révélés (récits du Coran comme preuves et révélation)",
        analysis_axes: {
          sense_chosen: "les signes divins et versets révélés (récits du Coran comme preuves et révélation)",
          concept_chosen: "Signes/VersetsReveles",
          concepts: {
            "Signes/VersetsReveles": {
              status: "retenu",
              senses: ["signe, indice remarquable (sens premier)", "verset coranique (sens technique)", "tilka aayaatu llahi = tels sont les signes/versets de Dieu", "récit prophétique comme preuve de la revelation divine"],
              proof_ctx: "Lane's Lexicon: a-y-y = a sign, a mark, a wonder; ayya = a sign of God, a wonder, a miracle; in the Quranic context, ayya is both a verse of the scripture and a divine sign in the world. Tilka aayaatu Allahi = these are the signs/verses of God — the Quranic narratives are presented as divine signs, not merely stories.",
              axe1_verset: "Dans ce verset, tilka aayaatu llahi (tels sont les versets/signes de Dieu) place le récit de David et Goliath qui vient d'être narré dans une double catégorie : ce sont des aayaat = à la fois des signes divins (preuves de la puissance et de la sagesse de Dieu) et des versets révélés (texte sacré du Coran). Cette ambivalence sémantique d'ayya est théologiquement riche : le texte coranique est signe en même temps qu'il est texte — chaque verset pointe vers Dieu tout en étant la parole de Dieu.",
              axe2_voisins: "Aayaatu (pos=2) est déterminé par llahi (pos=3) — ce sont les versets DE Dieu, non de Mohammed. L'attribution divine des aayaat est immédiatement suivie de natluwha 'alayka (pos=4-5) : Nous te les récitons. La séquence aayaatu llahi + natluwha 'alayka établit la chaîne de la révélation : Dieu est la source (llahi), Mohammed est le destinataire ('alayka), et la récitation divine (natluu) est le médium. Le v.252 décrit ainsi la mécanique même de la révélation coranique.",
              axe3_sourate: "La formule tilka aayaatu llahi est une formule de clôture récurrente dans Al-Baqara et dans le Coran en général. Elle apparaît après des récits historiques ou des passages législatifs pour rappeler leur origine divine. Dans Al-Baqara, les aayaat désignent aussi les signes de Dieu dans la nature (v.164 : les signes de la création pour ceux qui réfléchissent). La double signification de aayaat — signes naturels et versets révélés — unifie la révélation et la création comme deux modes de communication divine.",
              axe4_coherence: "La cohérence entre aayaat (signes/versets) et l'ensemble du récit de David (v.248-251) est que ce récit n'est pas présenté comme une simple histoire mais comme un signe divin qui porte une signification universelle. La leçon du contrepoids (daf'u llahi, v.251), la récompense de la foi (victoire de la petite troupe), la confirmation prophetique (v.252) — tout cela est un signe pour les croyants. Les aayaat sont des récits qui éduquent, convainquent et confirment la foi.",
              axe5_frequence: "La racine ayy avec ses dérivés (ayya, aayaat, muu'jiza) est l'une des plus importantes du Coran — elle apparaît plusieurs centaines de fois. Dans Al-Baqara seule, aayaat désigne les signes naturels (v.164), les versets révélés (v.252), et les miracles accordés aux prophètes (v.253). La polyvalence de cette racine fait de chaque occurrence une invitation au dépassement du sens immédiat : chaque verset/signe est une fenêtre ouverte sur la réalité divine derrière le monde visible."
            }
          }
        }
      },
      {
        word_key: "tlw",
        position: 4,
        sense_chosen: "réciter, narrer avec la voix (transmission orale sacrée des Écritures révélées)",
        analysis_axes: {
          sense_chosen: "réciter, narrer avec la voix (transmission orale sacrée des Écritures révélées)",
          concept_chosen: "Recitation/TransmissionSacree",
          concepts: {
            "Recitation/TransmissionSacree": {
              status: "retenu",
              senses: ["suivre de près, venir immédiatement après (sens premier)", "réciter, lire à haute voix (les Ecritures)", "natluwha 'alayka = Nous te la récitons (1PP inaccompli)", "transmission orale divine du texte sacré à travers le prophète"],
              proof_ctx: "Lane's Lexicon: t-l-w = to follow closely, to come after immediately; tala/yatlu = to recite, to read aloud (especially Scripture); tilawa = the recitation (of the Quran or sacred texts); natluwha 'alayka = We recite it to you (God reciting to the Prophet). The root implies a close following — the recitation follows the divine will as closely as a shadow follows a body.",
              axe1_verset: "Dans ce verset, natluwha 'alayka (Nous te la récitons) décrit la relation fondamentale entre Dieu et Mohammed dans la révélation : c'est Dieu qui récite (Nous = pluriel de majesté) et Mohammed qui reçoit ('alayka = à toi). Le verbe natluu (Form I inaccompli) indique que cette récitation est en cours, continue — pas un acte passé mais une action présente et active. La révélation n'est pas un livre tombé du ciel mais une récitation divine vivante.",
              axe2_voisins: "Natluwha (pos=4) est qualifié par 'alayka (pos=5 : à toi) et bi-l-haqqi (pos=6 : avec la vérité). La double qualification de la récitation divine — destinée à Mohammed, faite avec la vérité — définit les deux paramètres essentiels de la révélation coranique : elle est personnelle (adressée à Mohammed) et vraie (conforme à la réalité divine). La récitation n'est ni impersonnelle ni arbitraire — elle est dirigée et vraie.",
              axe3_sourate: "La racine tlw dans Al-Baqara est rare mais significative : v.102 (ce que récitaient les démons contre le règne de Salomon), v.121 (ceux qui récitent le Livre comme il se doit). La formule natluu 'alayka est une formule de révélation active qui souligne la dimension orale et vivante du Coran — il n'est pas un texte à lire silencieusement mais une récitation à entendre et à transmettre. Cette dimension orale de tlw est fondamentale pour comprendre la nature du Coran comme parole récitée.",
              axe4_coherence: "La cohérence entre tlw (réciter) et aayaatu llahi (les versets/signes de Dieu, pos=2) est que les aayaat divins ne sont pas de simples textes inertes — ils sont activés par la récitation. Natluwha = Nous les récitions (les rendons vivants par la voix divine). Cette récitation divine à travers Mohammed est ce qui transforme des récits historiques (David et Goliath) en versets sacrés du Coran. La récitation est l'acte de révélation lui-même.",
              axe5_frequence: "La racine tlw dans le Coran est moins fréquente que qra'a (lire) mais porteur d'une nuance spécifique de récitation continue et de transmission orale. Tilawa (récitation du Coran) est devenu un terme technique de la dévotion islamique — la pratique de réciter le Coran est tirée directement de cette racine. Le v.252 est l'un des passages fondateurs de cette conception : c'est Dieu Lui-même qui récite à Mohammed, et Mohammed récite aux croyants — la tilawa est une chaîne de transmission sacrée."
            }
          }
        }
      },
      {
        word_key: "hqq",
        position: 6,
        sense_chosen: "la vérité ferme et établie (réalité divine incontestable qui qualifie la révélation)",
        analysis_axes: {
          sense_chosen: "la vérité ferme et établie (réalité divine incontestable qui qualifie la révélation)",
          concept_chosen: "Verite/RealiteFerme",
          concepts: {
            "Verite/RealiteFerme": {
              status: "retenu",
              senses: ["être ferme, établi, fixé avec certitude (sens premier)", "haqq = ce qui est vrai, juste, dû", "bi-l-haqqi = avec la vérité, selon la réalité", "modalité de la révélation divine : la parole de Dieu est vraie par essence"],
              proof_ctx: "Lane's Lexicon: h-q-q = to be fixed, established, certain; haqqa = it was true, it was right, it was due; haqq = truth, reality, what is established as certain and just; bi-l-haqqi = with/in truth, in accordance with reality. Al-Haqq is one of the divine names in the Quran. The preposition bi here indicates accompaniment and modality: the recitation is done with/in/according to truth.",
              axe1_verset: "Dans ce verset, bi-l-haqqi (avec la vérité) qualifie la récitation divine natluwha — Dieu ne récite pas des histoires fictives ou approximatives mais les récite avec et selon la vérité. Al-haqq avec l'article défini al- désigne La Vérité absolue, divine — c'est l'un des 99 noms de Dieu dans la tradition islamique. Bi-l-haqqi n'est donc pas simplement 'honnêtement' mais 'conformément à la réalité divine fondamentale' — une affirmation épistémologique forte sur la nature de la révélation.",
              axe2_voisins: "Bi-l-haqqi (pos=6) est séparé de la suite par une pause (pos=7) et suivi de la confirmation prophetique wa-innaka la-mina l-mursaliin (pos=8-10). Cette structure — récitation avec la vérité, PUIS confirmation de la prophetie — est logiquement cohérente : parce que la récitation est avec la vérité, elle confirme que Mohammed est bien un prophète. La vérité de la récitation est la preuve de la prophetie. Le haqq est le fondement de la risala (mission prophétique).",
              axe3_sourate: "La racine hqq est fondamentale dans Al-Baqara pour structurer la distinction entre vrai et faux, légitime et illégitime. V.26 (ce n'est pas honteux d'utiliser une parabole) — haqq qualifie la vérité du message coranique face aux critiques. V.147 (la vérité vient de ton Seigneur — al-haqqu min rabbika). V.176 (ceux qui dévient du Livre dévient dans un schisme profond). Le v.252 conclut cette thématique : la révélation est vraie (bi-l-haqqi) et cela confirme la prophetie de Mohammed.",
              axe4_coherence: "La cohérence entre haqq (vérité) et l'ensemble du récit de David est que ce récit est présenté comme historiquement et théologiquement vrai — pas comme une légende édifiante. Le Coran affirme réciter ces récits bi-l-haqqi pour distinguer la révélation divine des récits humains qui peuvent être inexacts ou manipulés. Cette affirmation de véracité est particulièrement importante pour les récits qui corrigent ou complètent les versions bibliques — comme le récit de David et Goliath qui diffère de la version du Premier livre de Samuel.",
              axe5_frequence: "La racine hqq est l'une des plus importantes du Coran avec des centaines d'occurrences dans des contextes variés : Al-Haqq (nom divin), haqq (vérité/droit), bi-l-haqqi (avec la vérité), haqqan (vraiment, en vérité). La formule bi-l-haqqi qualifiant la révélation divine est récurrente dans le Coran (v.2:252, v.3:3, v.4:105, v.5:48, v.10:108). Cette récurrence établit un principe coranique fondamental : la révélation divine est vraie par nature, et c'est cette vérité qui fonde son autorité normative pour les croyants."
            }
          }
        }
      },
      {
        word_key: "rsl",
        position: 10,
        sense_chosen: "les envoyés, les messagers prophétiques (ceux qui ont été mandatés et envoyés par Dieu)",
        analysis_axes: {
          sense_chosen: "les envoyés, les messagers prophétiques (ceux qui ont été mandatés et envoyés par Dieu)",
          concept_chosen: "Envoyes/MissionProphetique",
          concepts: {
            "Envoyes/MissionProphetique": {
              status: "retenu",
              senses: ["envoyer, laisser aller librement (sens premier)", "arsala (Form IV) = envoyer avec une mission", "mursaliin (participe passif pluriel) = ceux qui ont été envoyés, les prophètes-messagers", "appartenance de Mohammed à la lignée des envoyés divins"],
              proof_ctx: "Lane's Lexicon: r-s-l = to let go, to send freely; Form IV arsala = to send (on a mission), to dispatch; mursaliin (pl.) = those who have been sent, the messengers/prophets of God; al-mursaliin = the messengers (definite plural). The participle passive mursaliin designates those chosen by God and sent to a specific community with a divine message.",
              axe1_verset: "Dans ce verset, wa-innaka la-mina l-mursaliin (et toi certes tu es parmi les envoyés) est la confirmation emphatique de la prophetie de Mohammed. Inna + ka + la- = triple insistance en arabe, rendue par 'certes' en français. Mina l-mursaliin (parmi les envoyés) place Mohammed non pas comme prophète isolé ou novateur mais comme membre d'une lignée prophétique universelle — les mursaliin incluent Ibrahim, Musa, Isa et tous les prophètes envoyés avant lui.",
              axe2_voisins: "La-mina l-mursaliin (pos=9-10) est la conclusion du verset et de toute la section narrative (versets 248-252). La formule de clôture est doublement emphathique (inna + la-) pour souligner l'importance de la confirmation. Après le récit de David (prophète-roi envoyé par Dieu), la sourate affirme que Mohammed appartient à la même catégorie — celle des mursaliin. Le récit de David n'était pas seulement une histoire édifiante mais une preuve de la continuité prophetique à laquelle Mohammed appartient.",
              axe3_sourate: "La racine rsl est centrale dans Al-Baqara pour la théologie prophetique : v.87 (Nous avons donné à Musa le Livre et envoyé après lui les prophètes), v.101 (un envoyé venu confirmer ce qu'ils possèdent), v.177 (croire en Allah, aux anges, au Livre, aux prophètes), v.253 (les prophètes que Nous avons privilégiés les uns sur les autres). Le v.252 avec sa confirmation de la prophetie de Mohammed se place dans cette continuité : la liste des mursaliin est longue et Mohammed en fait partie.",
              axe4_coherence: "La cohérence entre rsl (envoyés) et aayaatu llahi natluwha bi-l-haqqi (les versets de Dieu récités avec la vérité) est que la confirmation de la prophetie de Mohammed est précisément la conclusion logique de la récitation vraie. Si ces aayaat sont les signes/versets de Dieu récités avec la vérité, alors celui qui les reçoit et les transmet est nécessairement un envoyé de Dieu. La confirmation de la prophetie de Mohammed (innaka la-mina l-mursaliin) découle directement de la nature divine et vraie des récits qu'il transmet.",
              axe5_frequence: "La racine rsl avec ses dérivés (rasul, mursaliin, risala, arsala) est l'une des plus fréquentes et importantes du Coran pour la théologie prophetique. Rasul (envoyé, messager) désigne dans la tradition islamique un prophète qui apporte une nouvelle loi ou un Livre (distinct du nabiyy qui confirme une loi existante). Al-mursaliin au v.252 inclut donc les plus grands prophètes — ceux qui ont reçu une mission spéciale de la part de Dieu. La confirmation que Mohammed est parmi eux est une affirmation doctrinale fondamentale du Coran."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[252];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V252)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V252 TERMINE');
}
main().catch(console.error);
