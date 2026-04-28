const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  245: {
    verse_id: 252,
    analysis_id: 611,
    translation_arab: "man dha l-ladhiy yuqridu llaha qardan hasanan fa-yuda'ifahu lahu ad'afan kathiratan wa-llahu yaqbidu wa-yabsutu wa-ilayhi turja'un",
    full_translation: "Qui est celui qui consentira à Allah un beau prêt, qu'Il lui multipliera en abondance ? C'est Allah qui resserre et qui déploie, et c'est vers Lui que vous serez ramenés.",
    translation_explanation: `§DEMARCHE§
Le verset 2:245 s'inscrit dans une séquence d'appels à l'engagement total dans la voie d'Allah. Après l'appel au combat (v.244), ce verset déplace le registre vers la générosité financière, en formulant la dépense dans la voie d'Allah comme un "beau prêt" consenti à Allah Lui-même. La démarche traductive consiste à rendre avec précision la forme interrogative rhétorique initiale (man dha l-ladhiy = "qui est celui qui") qui n'est pas une vraie question mais une invitation pressante à agir. Le verbe yuqridu (racine q-r-d) est rendu par "consentira à" pour marquer le caractère volontaire et délibéré de l'acte — ce n'est pas un don perdu mais un prêt qui sera rendu multiplié. La qualification "beau" (hasan) indique la pureté d'intention, sans ostentation ni contrainte. Le verbe yuda'ifu (racine d-'-f, Form II) indique une multiplication active et délibérée, non un simple retour — traduit par "multipliera en abondance". La clausule finale articule deux actions divines opposées : yaqbidu (resserre, contracte) et yabsutu (étend, déploie) concernant les richesses et les subsistances — cela fonde théologiquement l'appel à la générosité : c'est Allah qui contrôle toute richesse, donc donner dans Sa voie relève d'une confiance totale en Lui. Le retour vers Allah (turja'un, passif) conclut le verset en rappelant l'horizon eschatologique.
§JUSTIFICATION§
La traduction "beau prêt" pour qard hasan est préférée à "prêt généreux" ou "prêt sans intérêt" car elle capture la dimension esthétique et morale du terme hasan : beauté de la forme (sincérité, absence de reproches) et excellence de l'intention. Le mot "consentira" traduit mieux yuqridu que "fera" car il insiste sur la décision libre et consciente du croyant. "Multipliera en abondance" rend ad'afan kathiratan (pluriel intensif de ad'af = multiples, + kathira = nombreux/abondant) — une formulation qui évite le terme technique "multiplier" seul qui serait trop sobre. "Resserre et déploie" pour yaqbidu wa-yabsutu rend l'opposition sémantique exacte des deux racines (q-b-d = fermer, contracter / b-s-t = étendre, ouvrir) dans leur sens appliqué aux subsistances. On évite "étend et restreint" dans cet ordre car le texte dit d'abord yaqbidu (resserre) puis yabsutu (étend). "Serez ramenés" pour turja'un (passif de raja'a) insiste sur le fait que le retour n'est pas volontaire mais ordonné par Allah — nuance théologique importante.
§CRITIQUE§
La traduction de Hamidullah (1959) rend ce verset : "Qui est-ce qui prêtera à Dieu un beau prêt, afin qu'Il lui en multiplie le mérite à plusieurs reprises ? Et c'est Dieu qui resserre et qui étend [les subsistances] ; et c'est vers Lui que vous retournerez." Elle est globalement fidèle mais présente quelques points discutables. Premièrement, "lui en multiplie le mérite" ajoute le mot "mérite" qui n'est pas dans le texte — l'original dit simplement qu'Il le multipliera (le prêt lui-même, pas son mérite). Deuxièmement, "vous retournerez" pour turja'un (passif) efface la dimension passive-subie du retour : c'est Allah qui ramène, non le croyant qui retourne de son propre chef. Troisièmement, la parenthèse "[les subsistances]" est une interpolation juste mais non textuelle. Notre traduction corrige ces points en restant au plus près du texte sans ajouter.`,
    segments: [
      { position: 1, text_arab: "مَّن ذَا ٱلَّذِى", translation: "Qui est celui qui", phonetic: "man dha l-ladhiy", grammar_type: "particle" },
      { position: 2, text_arab: "يُقْرِضُ", translation: "prête à", phonetic: "yuqridu", grammar_type: "verb", root_key: "qrd" },
      { position: 3, text_arab: "ٱللَّهَ", translation: "Allah", phonetic: "llaha", grammar_type: "particle" },
      { position: 4, text_arab: "قَرْضًا", translation: "un prêt", phonetic: "qardan", grammar_type: "noun", root_key: "qrd" },
      { position: 5, text_arab: "حَسَنًا", translation: "beau / généreux", phonetic: "hasanan", grammar_type: "adjective", root_key: "hsn" },
      { position: 6, text_arab: "فَيُضَـٰعِفَهُۥ", translation: "et Il le multipliera", phonetic: "fa-yuda'ifahu", grammar_type: "verb", root_key: "def" },
      { position: 7, text_arab: "لَهُۥٓ أَضْعَافًا كَثِيرَةً", translation: "pour lui en abondance", phonetic: "lahu ad'afan kathiratan", grammar_type: "particle" },
      { position: 8, text_arab: "ۚ", translation: "—", phonetic: "", grammar_type: "particle" },
      { position: 9, text_arab: "وَٱللَّهُ", translation: "et Allah", phonetic: "wa-llahu", grammar_type: "particle" },
      { position: 10, text_arab: "يَقْبِضُ", translation: "resserre", phonetic: "yaqbidu", grammar_type: "verb", root_key: "qbd" },
      { position: 11, text_arab: "وَيَبْصُۜطُ", translation: "et déploie", phonetic: "wa-yabsutu", grammar_type: "verb", root_key: "bst" },
      { position: 12, text_arab: "وَإِلَيْهِ", translation: "et vers Lui", phonetic: "wa-ilayhi", grammar_type: "particle" },
      { position: 13, text_arab: "تُرْجَعُونَ", translation: "vous serez ramenés", phonetic: "turja'un", grammar_type: "verb", root_key: "rje" }
    ],
    vwa: [
      {
        word_key: "qrd",
        position: 2,
        sense_chosen: "prêter à Allah, consentir un prêt volontaire",
        analysis_axes: {
          sense_chosen: "prêter à Allah, consentir un prêt volontaire",
          concept_chosen: "Pret/Volontaire",
          concepts: {
            "Pret/Volontaire": {
              status: "retenu",
              senses: ["prêter (Form I)", "avancer une somme", "consentir un prêt volontaire à Allah", "dépenser dans la voie d'Allah en termes de prêt"],
              proof_ctx: "Lane's Lexicon: q-r-d (Form I) = to lend, to advance a loan; qard = a loan given with expectation of return; qard hasan = a loan given in a fair and praiseworthy manner, freely and without rancour.",
              axe1_verset: "Dans ce verset, yuqridu est un verbe actif à la forme interrogative rhétorique : Allah demande 'qui est celui qui consentirait un prêt ?' — c'est une invitation à la générosité financière formulée en termes contractuels. La racine q-r-d porte l'idée d'un don temporaire qui sera rendu, amplifié — ce qui fonde l'espoir du croyant dans la générosité divine.",
              axe2_voisins: "Le verset voisin (v.244) appelle au combat dans la voie d'Allah. Le v.245 passe du don de soi au don de richesses. La paire yuqridu + yuda'ifu (prêter + multiplier) forme une structure contractuelle : l'homme donne peu, Allah rend beaucoup. Le voisinage de hasan (beau) qualifie la qualité de l'acte : pureté d'intention, absence de reproches.",
              axe3_sourate: "Dans la sourate Al-Baqara, la thématique du don dans la voie d'Allah est récurrente (v.195, v.215, v.219, v.261-262). Le 'beau prêt' s'oppose aux pratiques usuraires condamnées plus loin (v.275-279). La sourate construit une économie spirituelle où la générosité envers Allah rapporte infiniment plus que l'accumulation terrestre.",
              axe4_coherence: "La métaphore du prêt fait à Allah est théologiquement audacieuse : Allah n'a besoin de rien, mais le cadre contractuel du prêt transforme la dépense en investissement spirituel garanti. Cela n'implique aucune limitation divine — c'est un cadre rhétorique pour encourager la générosité des croyants qui raisonnent en termes d'échange et de retour sur investissement.",
              axe5_frequence: "La racine q-r-d apparaît plusieurs fois dans le Coran dans ce même contexte du 'beau prêt' (v.57:11, v.57:18, v.64:17, v.73:20). C'est une formule coranique fixe qui désigne la générosité financière dans la voie d'Allah. La répétition de cette formule dans plusieurs sourates confirme son statut de notion spirituelle centrale dans l'économie coranique."
            }
          }
        }
      },
      {
        word_key: "hsn",
        position: 5,
        sense_chosen: "beau, excellent, pur d'intention",
        analysis_axes: {
          sense_chosen: "beau, excellent, pur d'intention",
          concept_chosen: "Beaute/Excellence",
          concepts: {
            "Beaute/Excellence": {
              status: "retenu",
              senses: ["beau (adj.)", "bon, excellent", "d'excellente qualité", "pur d'intention, sans ostentation"],
              proof_ctx: "Lane's Lexicon: h-s-n = beauty, goodness, excellence; hasan = that which is beautiful and good; husn = beauty in form and in moral quality. The phrase qard hasan designates a loan given with good grace, sincerely and without blame.",
              axe1_verset: "Dans ce verset, hasan qualifie le prêt (qard) : c'est un prêt beau, c'est-à-dire donné avec sincérité, sans ostentation, sans attente de réputation sociale. La beauté ici est morale autant qu'esthétique — elle désigne la pureté de l'intention et la générosité du geste. Un prêt laid serait celui fait à contrecœur ou pour se faire voir.",
              axe2_voisins: "La formule qard hasan est une unité lexicale fixe dans le Coran. Hasan est placé après qard (prêt) pour qualifier non la somme prêtée mais la manière de prêter. Le voisinage avec yuda'ifu (multiplier) suggère que c'est précisément la beauté de l'acte — sa pureté — qui mérite la multiplication divine. Un don fait avec mauvaise intention ne serait pas un qard hasan.",
              axe3_sourate: "La racine h-s-n est omniprésente dans Al-Baqara pour qualifier les actions souhaitables : la belle patience (v.45), le beau pardon (v.109), la belle parole (v.263). La beauté est une catégorie éthique coranique fondamentale qui distingue l'acte accompli pour Allah de l'acte accompli pour les hommes. La sourate construit un idéal de l'excellence morale.",
              axe4_coherence: "La qualification 'beau' pour un prêt peut sembler étrange au premier abord — un prêt est généralement neutre. Mais dans le contexte coranique, il n'y a pas d'acte neutre : tout acte est coloré par l'intention. Un 'beau prêt' est celui accompli avec un cœur ouvert, sans calcul mondain, dans un élan de confiance en Allah. Cela reflète la cohérence de l'éthique coranique.",
              axe5_frequence: "Hasan et ses dérivés (husn, ihsan, muhsin) forment l'un des champs sémantiques les plus riches du Coran. Dans la seule sourate Al-Baqara, la racine h-s-n apparaît dans de nombreux contextes (v.58, v.83, v.178, v.195, v.245, etc.). L'ihsan (l'excellence dans l'adoration) est présenté comme le degré suprême de la foi dans le hadith de Jibril — ce qui confirme l'importance centrale de cette racine."
            }
          }
        }
      },
      {
        word_key: "def",
        position: 6,
        sense_chosen: "multiplier, amplifier, répliquer en abondance",
        analysis_axes: {
          sense_chosen: "multiplier, amplifier, répliquer en abondance",
          concept_chosen: "Multiplication/Abondance",
          concepts: {
            "Multiplication/Abondance": {
              status: "retenu",
              senses: ["multiplier (Form II)", "doubler et redoubler", "amplifier abondamment", "ad'af = multiples, redoublements"],
              proof_ctx: "Lane's Lexicon: d-'-f = weakness (Form I); but Form II da'afa/yuda'ifu = to double, to multiply, to redouble; ad'af (pl.) = multiples, manifold increase. The root has a paradoxical semantic history: weakness becomes multiplication through intensive verbal form.",
              axe1_verset: "Dans ce verset, yuda'ifahu (Form II, il le multipliera) est suivi de ad'afan kathiratan (multiples nombreux) — une intensification rhétorique par redondance : non seulement le prêt sera multiplié, mais multiplié de nombreuses fois. Ce double renforcement (verbe + complément de même racine + adjectif de quantité) exprime la générosité extraordinaire de la récompense divine.",
              axe2_voisins: "La structure syntaxique fa-yuda'ifahu lahu (et Il le multipliera pour lui) articule le prêt (qard, pos=4) et sa récompense. Le pronom hu (le) renvoie au prêt lui-même — c'est le prêt original qui sera multiplié, pas seulement sa valeur spirituelle. Le ad'afan kathiratan qui suit précise l'ampleur : non pas fois deux ou trois, mais en multiples abondants.",
              axe3_sourate: "La promesse de multiplication du don dans la voie d'Allah est un thème récurrent d'Al-Baqara. Le verset 261 compare celui qui dépense dans la voie d'Allah à un grain qui produit sept épis de cent grains chacun (multiplication par 700). La racine d-'-f apparaît aussi en v.261. Cette rhétorique de la multiplication vise à renverser la logique économique ordinaire de la perte.",
              axe4_coherence: "La Form II de d-'-f (yuda'ifu) est un choix grammatical signifiant : la Form II en arabe exprime une action intensive et causative. Allah ne 'laisse pas' multiplier — Il multiplie activement. Cela confirme que la récompense est une action divine directe, non un mécanisme automatique. La cohérence théologique est celle d'un Allah pleinement agissant et attentif à chaque don.",
              axe5_frequence: "La racine d-'-f dans le sens de multiplication apparaît dans plusieurs versets coraniques traitant de la récompense des bonnes oeuvres (v.4:40, v.6:160, v.2:261). L'idée que les bonnes actions sont multipliées (de 10 à 700 fois selon les versets) est un principe constant de la théologie coranique de la rétribution. Cela distingue la logique de la récompense divine de toute logique humaine d'équivalence."
            }
          }
        }
      },
      {
        word_key: "qbd",
        position: 10,
        sense_chosen: "resserrer, contracter, tenir fermement (les subsistances)",
        analysis_axes: {
          sense_chosen: "resserrer, contracter, tenir fermement (les subsistances)",
          concept_chosen: "Resserrement/Contraction",
          concepts: {
            "Resserrement/Contraction": {
              status: "retenu",
              senses: ["saisir, fermer la main sur", "contracter, resserrer", "retenir les subsistances", "prendre possession de (sens fort)"],
              proof_ctx: "Lane's Lexicon: q-b-d = to take, to grasp, to seize; yaqbidu = he seizes, he contracts; when said of God with respect to provision: He straitens/restricts the sustenance of whom He wills. The physical image is of a closed fist.",
              axe1_verset: "Dans ce verset, yaqbidu (Il resserre) est l'action divine sur les subsistances et les richesses. La forme verbale à l'inaccompli (yaqbidu) indique une action en cours, permanente — Allah resserre continûment selon Sa sagesse. Ce resserrement s'oppose à yabsutu (Il déploie) dans un couple antithétique qui exprime la totale maîtrise divine sur l'économie matérielle.",
              axe2_voisins: "La paire yaqbidu / yabsutu est une formule duale classique en arabe pour exprimer le contrôle total sur un domaine par ses deux extrêmes (tout resserrer et tout étendre). Placée après l'appel au 'beau prêt', cette affirmation théologique a une fonction argumentative : si tu hésites à donner par crainte de t'appauvrir, sache qu'Allah contrôle toute richesse — c'est Lui qui donne et qui reprend.",
              axe3_sourate: "Dans Al-Baqara, le thème de l'abondance et de la restriction des biens est lié à la fois à la confiance en Allah (v.268 : le Diable vous promet la pauvreté) et à l'obéissance (v.172 : mangez des bonnes choses que Nous vous avons accordées). La sourate construit une vision providentielle de l'économie où toute richesse vient d'Allah et doit être dépensée selon Ses directives.",
              axe4_coherence: "L'utilisation de yaqbidu pour Allah évite tout anthropomorphisme physique : Allah n'a pas de main qui se ferme. Le sens est entièrement abstrait — la contraction des moyens de subsistance selon la sagesse divine. Cette abstraction est conforme à la théologie islamique classique qui interprète les actions divines décrites en termes physiques comme des métaphores de Sa toute-puissance souveraine.",
              axe5_frequence: "La racine q-b-d dans le contexte divin des subsistances apparaît aussi en v.13:26 (Allah étend les subsistances à qui Il veut et les resserre) et en d'autres versets. Le couple qabada/basata est une formule théologique récurrente. La racine q-b-d a aussi un sens juridique (prendre possession d'un bien) et un sens eschatologique (l'ange qui saisit les âmes), ce qui enrichit la polysémie divine de ce terme."
            }
          }
        }
      },
      {
        word_key: "bst",
        position: 11,
        sense_chosen: "étendre, déployer, accorder en largesse (les subsistances)",
        analysis_axes: {
          sense_chosen: "étendre, déployer, accorder en largesse (les subsistances)",
          concept_chosen: "Deploiement/Largesse",
          concepts: {
            "Deploiement/Largesse": {
              status: "retenu",
              senses: ["étendre, déployer", "ouvrir largement", "accorder avec largesse", "bast = extension, générosité"],
              proof_ctx: "Lane's Lexicon: b-s-t = to extend, to spread out, to open; yabsutu = he extends; when said of God: He extends His provision abundantly to whom He wills. The physical image is of an open, outstretched hand — contrasting with the closed fist of qabada.",
              axe1_verset: "Dans ce verset, yabsutu (Il déploie/étend) est le pendant positif de yaqbidu (Il resserre). Le couple antithétique exprime que la totalité du spectre des richesses — du moins au plus — est entre les mains d'Allah. 'Déploie' est préféré à 'étend' seul car il capture mieux le mouvement d'ouverture et d'expansion que porte la racine b-s-t — comme une nappe que l'on déroule.",
              axe2_voisins: "Syntaxiquement, wa-yabsutu (et Il déploie) est coordonné à yaqbidu par la conjonction wa. Les deux verbes partagent le même sujet implicite (Allah, repris par wa-llahu en pos=9). Cette coordination exprime non pas une alternance temporelle mais une capacité permanente et simultanée : Allah possède à tout moment le pouvoir de resserrer ou de déployer.",
              axe3_sourate: "La notion de largesse divine (bast) résonne avec d'autres passages d'Al-Baqara sur la provision divine : v.212 (Allah pourvoit sans compte à qui Il veut), v.268 (Allah promet l'abondance contre la crainte du Diable), v.284 (à Allah ce qui est dans les cieux et sur la terre). La sourate développe une vision de l'abondance comme don divin qui appelle à la gratitude et à la générosité.",
              axe4_coherence: "L'opposition b-s-t / q-b-d dans le Coran reflète une paire sémantique arabe classique pour la générosité vs. l'avarice. Appliquée à Allah, elle décrit Son pouvoir absolu sur la distribution des biens sans aucune limitation ou nécessité externe. Cela fonde théologiquement l'appel à la générosité : puisque Allah déploie et resserre à Sa guise, le croyant peut donner sans crainte car c'est Allah qui compense.",
              axe5_frequence: "La racine b-s-t dans le sens de l'extension divine des subsistances apparaît plusieurs fois dans le Coran : v.13:26 (Allah étend les subsistances à qui Il veut), v.17:30, v.28:82, v.29:62, v.34:36, v.39:52, v.42:27. C'est l'une des propriétés divines les plus fréquemment mentionnées, souvent dans des contextes qui invitent à la confiance en Allah et à la générosité."
            }
          }
        }
      },
      {
        word_key: "rje",
        position: 13,
        sense_chosen: "être ramenés (vers Allah), retour forcé et eschatologique",
        analysis_axes: {
          sense_chosen: "être ramenés (vers Allah), retour forcé et eschatologique",
          concept_chosen: "Retour/Eschatologie",
          concepts: {
            "Retour/Eschatologie": {
              status: "retenu",
              senses: ["retourner (Form I actif)", "être ramené (passif)", "revenir à son point de départ", "retour eschatologique obligatoire vers Allah"],
              proof_ctx: "Lane's Lexicon: r-j-' = to return, to come back; Form I active = to return voluntarily; passive yurja'u = to be returned, to be brought back (by another). Turja'una = you will be returned (to Allah) — passive plural, implying compulsion and divine agency.",
              axe1_verset: "Dans ce verset, turja'una est le passif de raja'a (retourner) : vous serez ramenés — non pas vous retournerez de vous-mêmes. Cette voix passive est théologiquement déterminante : le retour vers Allah n'est pas un choix humain mais un acte divin souverain. La clausule finale du verset ancre toute la logique du don (prêt + multiplication) dans l'horizon eschatologique : c'est là que les comptes seront rendus.",
              axe2_voisins: "La formule wa-ilayhi turja'una (et c'est vers Lui que vous serez ramenés) est une formule de clôture caractéristique dans le Coran. Placée après la double affirmation du pouvoir divin sur les richesses (yaqbidu + yabsutu), elle ajoute une dimension temporelle : non seulement Allah contrôle les biens ici-bas, mais Il vous jugera dans l'au-delà. Cela confère une urgence eschatologique à l'appel à la générosité.",
              axe3_sourate: "Le retour vers Allah (ruj'a, raja'a) est l'un des thèmes structurants d'Al-Baqara. La sourate s'ouvre sur la foi en l'au-delà (v.4 : ils croient à la vie future), revient sur la mort et la résurrection à de nombreuses reprises (v.28, v.156, v.243, v.245, v.259-260), et se conclut sur la reddition des comptes (v.284-286). Chaque verset qui appelle à l'action se termine souvent par un rappel eschatologique.",
              axe4_coherence: "L'utilisation du passif (turja'una) plutôt que l'actif (tarji'una) est cohérente avec la théologie coranique de la souveraineté divine : c'est Allah qui reconduit les âmes vers Lui, non les hommes qui s'y rendent d'eux-mêmes. Cela exclut toute idée de mérite suffisant ou d'autonomie de la créature. La formule est un rappel de la dépendance ontologique de l'être humain vis-à-vis de son Créateur.",
              axe5_frequence: "La formule wa-ilayhi turja'una (et vers Lui vous serez ramenés) ou ses variantes proches apparaissent de nombreuses fois dans le Coran (v.2:28, v.2:245, v.3:83, v.10:4, v.11:4, etc.). C'est l'une des formules eschatologiques les plus fréquentes, fonctionnant comme un rappel constant de la finalité de l'existence humaine. Sa récurrence en fait un élément structurant du message coranique global."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[245];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V245)');

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
  console.log('DONE V245 TERMINE');
}
main().catch(console.error);
