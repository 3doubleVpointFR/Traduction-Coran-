const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 71 A 74
// verse_id=78 (2:71), verse_id=79 (2:72), verse_id=80 (2:73), verse_id=81 (2:74)
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:71
  // verse_id=78, analysis_id=437
  // "Il dit : Il dit que c'est une vache non dressée à labourer la terre
  //  ni à irriguer le champ — saine, sans marque. Ils dirent : Maintenant
  //  tu as apporté la vérité. Ils l'égorgerent, et peu s'en fallut
  //  qu'ils ne le fissent pas."
  // =====================================================
  71: {
    verse_id: 78,
    analysis_id: 437,
    translation_arab: "Il dit : Il dit que c'est une vache non dressee a labourer la terre ni a irriguer le champ — saine, sans marque en elle. Ils dirent : Maintenant tu as apporte la verite. Ils l'egorgerent et peu s'en fallut qu'ils ne le fissent pas.",
    full_translation: "Il dit : Il dit que c'est une vache non dressee a retourner la terre ni a irriguer le champ — saine, sans tache en elle. Ils dirent : Maintenant tu as apporte la verite. Alors ils l'egorgerent, et peu s'en fallut qu'ils ne le fissent pas.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte la reponse finale de Dieu concernant la vache, puis l'execution du sacrifice. Le verbe **qala** est un accompli 3MS de la racine q-w-l. Le Lane's donne « he said ». Moise rapporte la derniere reponse divine. Le verbe **yaqulu** est un inaccompli 3MS de la racine q-w-l. Le Lane's donne « He says ». Dieu parle au present — Sa parole est actuelle et definitive. Le mot **baqaratun** est un nom feminin singulier indefini de la racine b-q-r. Le Lane's donne « cow, heifer ». La vache est de nouveau nommee avec un attribut supplementaire. Le verbe **tuthiru** est un inaccompli 3FS forme IV de la racine th-w-r. Le Lane's donne « she raises, she stirs up, she plows ». La forme IV causative signifie « faire soulever » — la vache ne retourne pas la terre, elle n'est pas dressee au labour. Le mot **al-arda** est un nom feminin singulier defini accusatif de la racine a-r-d. Le Lane's donne « the earth, the ground, the land ». La terre est l'objet du labour que la vache ne fait pas. Le verbe **tasqi** est un inaccompli 3FS de la racine s-q-y. Le Lane's donne « she irrigates, she waters ». La vache n'irrigue pas non plus — elle n'est dressee a aucun travail. Le mot **al-hartha** est un nom masculin singulier defini accusatif de la racine h-r-th. Le Lane's donne « the tilth, the cultivated field, the crop ». Le champ cultive est l'objet de l'irrigation que la vache ne fait pas. Le mot **musallamatun** est un participe passif feminin singulier forme II de la racine s-l-m. Le Lane's donne « sound, free from defect, whole, unblemished ». La forme II passive signifie « rendue saine, preservee de tout defaut ». Le mot **shiyata** est un nom feminin singulier de la racine w-sh-y. Le Lane's donne « mark, blemish, spot of different color ». La negation la shiyata fiha signifie « sans tache, sans marque en elle ». Le verbe **qaluu** est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said ». Les enfants d'Israel reconnaissent enfin la verite. Le verbe **ji'ta** est un accompli 2MS de la racine j-y-'. Le Lane's donne « you came, you brought ». Moise a apporte la verite — il est venu avec la reponse definitive. Le mot **bi-l-haqqi** est un nom masculin singulier defini genitif avec preposition bi de la racine h-q-q. Le Lane's donne « with the truth, correctly ». La verite est ce que les enfants d'Israel reconnaissent finalement. Le verbe **dhabahuha** est un accompli 3MP de la racine dh-b-h avec pronom 3FS. Le Lane's donne « they slaughtered it ». Le sacrifice est enfin execute. Le verbe **kaduu** est un accompli 3MP de la racine k-w-d. Le Lane's donne « they were on the point of, they almost ». Le verbe d'imminence montre qu'ils ont failli ne pas executer le sacrifice. Le verbe **yaf'aluna** est un inaccompli 3MP de la racine f-'-l. Le Lane's donne « they do, they act ». L'action de sacrifier est celle qu'ils ont failli ne pas accomplir.

§JUSTIFICATION§
**il dit** — Le sens retenu est « dire ». Le verbe qala introduit la reponse de Moise rapportant la parole divine. L'alternative « avis » est ecartee car le contexte est une parole prononcee.

**vache** — Le sens retenu est « vache ». Le mot baqaratun designe l'animal du sacrifice. L'alternative « fendre » est ecartee car le nom feminin singulier designe clairement l'animal.

**retourne** — Le sens retenu est « soulever ». Le verbe tuthiru forme IV de th-w-r signifie soulever, retourner la terre. L'alternative « taureau » est ecartee car le mot est un verbe, pas un nom d'animal.

**la terre** — Le sens retenu est « terre ». Le mot al-arda designe le sol que la vache ne laboure pas. L'alternative « rhume » est ecartee car le contexte est agricole.

**irrigue** — Le sens retenu est « irriguer ». Le verbe tasqi signifie donner a boire, irriguer le champ. Pas d'alternative pertinente dans ce contexte.

**le champ** — Le sens retenu est « champ ». Le mot al-hartha designe le champ cultive. Pas d'alternative car le contexte est agricole.

**saine** — Le sens retenu est « sain et sauf ». Le mot musallamatun au participe passif forme II signifie preservee de tout defaut. L'alternative « paix » est ecartee car le contexte decrit l'etat physique de l'animal.

**marque** — La particule shiyata de la racine w-sh-y designe une tache ou marque de couleur differente. La negation indique l'absence de tout defaut visible.

**la verite** — Le sens retenu est « verite ». Le mot al-haqqi designe la verite que Moise a apportee. L'alternative « devoir » est ecartee car le contexte est la reconnaissance de la verite.

**faillir** — Le sens retenu est « etre sur le point de ». Le verbe kaduu exprime l'imminence — ils ont presque refuse de sacrifier. Pas d'alternative pertinente.

**faire** — Le sens retenu est « faire ». Le verbe yaf'aluna designe l'acte qu'ils ont failli ne pas accomplir. Pas d'alternative pertinente.

§CRITIQUE§
**non dressee vs non soumise** — Le verbe tuthiru forme IV de th-w-r signifie specifiquement « retourner la terre par le labour ». Le Lane's confirme que thawrun designe aussi le taureau (animal de labour) et que la forme IV athara signifie « faire soulever, labourer ». La vache n'est pas dressee au travail — elle est libre de toute contrainte agricole.
**saine vs soumise** — Le mot musallamatun derive de s-l-m (etre sain) a la forme II passive (etre rendue saine). Le Lane's donne « free from blemish, sound ». C'est l'integrite physique qui est decrite, pas la soumission spirituelle.
**verite vs droit** — Le mot al-haqq peut signifier verite ou droit. Ici les enfants d'Israel disent « maintenant tu as apporte la verite » — ils reconnaissent que la description est enfin complete et vraie. Le sens de verite est plus adapte que celui de droit.
**peu s'en fallut** — La formule wa-ma kaduu yaf'aluna est remarquable. Meme apres avoir reconnu la verite et identifie la vache, ils ont failli ne pas la sacrifier. La tergiversation a atteint son point culminant — la desobeissance est quasi-totale meme au moment de l'execution.`,
    segments: [
      { fr: "il dit", pos: "verbe", phon: "qala", arabic: "قَالَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 0 },
      { fr: "certes il", phon: "innahu", arabic: "إِنَّهُ،", is_particle: true, position: 1 },
      { fr: "dit", pos: "verbe", phon: "yaqulu", arabic: "يَقُولُ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
      { fr: "certes elle est", phon: "innaha", arabic: "إِنَّهَا", is_particle: true, position: 3 },
      { fr: "une vache", pos: "nom", phon: "baqaratun", arabic: "بَقَرَةٌ", word_key: "bqr", is_particle: false, sense_retenu: "vache", position: 4 },
      { fr: "non", phon: "la", arabic: "لَّا", is_particle: true, position: 5 },
      { fr: "dressee", pos: "adjectif", phon: "dhalulun", arabic: "ذَلُولٌ", is_particle: true, position: 6 },
      { fr: "elle retourne", pos: "verbe", phon: "tuthiru", arabic: "تُثِيرُ", word_key: "thwr", is_particle: false, sense_retenu: "soulever", position: 7 },
      { fr: "la terre", pos: "nom", phon: "al-arda", arabic: "ٱلْأَرْضَ", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 8 },
      { fr: "et ni", phon: "wa-la", arabic: "وَلَا", is_particle: true, position: 9 },
      { fr: "irrigue", pos: "verbe", phon: "tasqi", arabic: "تَسْقِY", word_key: "sqy", is_particle: false, sense_retenu: "irriguer", position: 10 },
      { fr: "le champ", pos: "nom", phon: "al-hartha", arabic: "ٱلْحَرْثَ", word_key: "hrth", is_particle: false, sense_retenu: "champ", position: 11 },
      { fr: "saine", pos: "adjectif", phon: "musallamatun", arabic: "مُسَلَّمَةٌ", word_key: "slm", is_particle: false, sense_retenu: "sain et sauf", position: 12 },
      { fr: "sans", phon: "la", arabic: "لَّا", is_particle: true, position: 13 },
      { fr: "marque", pos: "nom", phon: "shiyata", arabic: "شِيَةَ", word_key: "wa", is_particle: false, sense_retenu: "et", position: 14 },
      { fr: "en elle", phon: "fiha", arabic: "فِيهَا", is_particle: true, position: 15 },
      { fr: "ils dirent", pos: "verbe", phon: "qaluu", arabic: "قَالُوا۟", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 16 },
      { fr: "maintenant", phon: "al-ana", arabic: "ٱلْـَٰٔنَ", is_particle: true, position: 17 },
      { fr: "tu as apporte", pos: "verbe", phon: "ji'ta", arabic: "جِئْتَ", word_key: "jya", is_particle: false, sense_retenu: "venir", position: 18 },
      { fr: "la verite", pos: "nom", phon: "bi-l-haqqi", arabic: "بِٱلْحَقِّ", word_key: "hqq", is_particle: false, sense_retenu: "vérité", position: 19 },
      { fr: "ils l'egorgerent", pos: "verbe", phon: "dhabahuha", arabic: "فَذَبَحُوهَا", is_particle: true, position: 20 },
      { fr: "et", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 21 },
      { fr: "peu s'en fallut", pos: "verbe", phon: "kaduu", arabic: "كَادُوا۟", word_key: "kwd", is_particle: false, sense_retenu: "être sur le point de", position: 22 },
      { fr: "qu'ils le fissent", pos: "verbe", phon: "yaf'aluna", arabic: "يَفْعَلُونَ", word_key: "fel", is_particle: false, sense_retenu: "faire", position: 23 }
    ],
    words: [
      {
        word_key: "qwl", position: 0, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qala est un accompli 3MS de la racine q-w-l. Le Lane's donne « he said ». Moise rapporte la derniere reponse de Dieu concernant la vache. Ce verset est la conclusion du dialogue — apres trois questions (versets 68, 69, 70), Dieu donne la derniere precision. Le verbe qala introduit la parole definitive.",
              axe1_verset: "Le verbe qala ouvre le verset par la reponse finale de Moise. Le verset contient quatre occurrences de q-w-l (qala, yaqulu au debut, puis qaluu au milieu). La premiere partie est la derniere reponse de Dieu sur la vache. La seconde partie rapporte la reconnaissance du peuple — « maintenant tu as apporte la verite ». La parole est enfin suivie d'action — ils egorgerent la vache.",
              axe2_voisins: "Les versets 68, 69 et 70 rapportaient les trois questions du peuple. Ce verset 71 est la derniere reponse qui clot le dialogue. La structure qala... yaqulu est identique aux versets precedents, mais cette fois la reponse est suivie d'execution. Le verset 72 changera de sujet — le meurtre et la dispute.",
              axe3_sourate: "La racine q-w-l dans la sourate al-Baqarah structure tous les dialogues entre Dieu, les prophetes et les peuples. Le dialogue de la vache (versets 67-71) contient la plus forte concentration de q-w-l dans un passage court. La sourate montre que la parole divine est toujours suivie de verite — c'est la parole humaine qui tergiverse.",
              axe4_coherence: "La racine q-w-l est la plus frequente du Coran. Le schema du dialogue prophetique (le peuple questionne, le prophete repond) se retrouve dans tous les recits. En 26:10-67, le recit de Moise avec Pharaon suit le meme schema de questions-reponses. La parole est l'instrument du message divin.",
              axe5_frequence: "Pour la mission du khalifa, la parole definitive doit mener a l'action. Ce verset montre le passage de la parole a l'acte — apres les questions, le sacrifice est enfin execute. Le khalifa ne doit pas rester dans le questionnement — il doit agir apres avoir recu la reponse divine."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le contexte est une parole prononcee a voix haute par Moise rapportant la parole de Dieu. Ce n'est pas un avis interieur mais une parole transmise."
            }
          }
        }
      },
      {
        word_key: "bqr", position: 4, sense_chosen: "vache",
        analysis_axes: {
          sense_chosen: "vache",
          concept_chosen: "Bétail/Animal",
          concepts: {
            "Bétail/Animal": {
              status: "retenu",
              senses: ["vache", "boeuf"],
              proof_ctx: "Le mot baqaratun est un nom feminin singulier indefini de la racine b-q-r. Le Lane's donne « cow, heifer ». Derniere mention de la vache dans le dialogue de precision — cette fois la vache est qualifiee par ce qu'elle ne fait pas (pas de labour, pas d'irrigation) et par son etat physique (saine, sans tache).",
              axe1_verset: "Le mot baqaratun recoit ici les derniers attributs de la description. La vache n'est pas dressee au travail (ni labour ni irrigation), elle est saine et sans tache. La description complete sur les versets 68-71 donne : age moyen, jaune eclatante, non dressee, saine et sans defaut. Chaque attribut rend la vache plus specifique et plus rare.",
              axe2_voisins: "Le verset 68 precisait l'age, le verset 69 la couleur, le verset 70 posait la derniere question. Ce verset 71 complete la description par l'usage (pas de travail) et l'etat (saine). La progression montre quatre criteres : age, couleur, fonction, integrite physique.",
              axe3_sourate: "La racine b-q-r qui donne son nom a la sourate atteint ici son apogee descriptive. La vache est desormais entierement definie — le peuple n'a plus de question a poser. La sourate montre que Dieu a repondu a chaque question avec une precision totale.",
              axe4_coherence: "La racine b-q-r apparait 9 fois dans le Coran. Les quatre occurrences dans le recit de la vache (67, 68, 69, 71) forment une description progressive. En 12:43, les sept vaches grasses du reve de Pharaon sont aussi des bovins a valeur symbolique.",
              axe5_frequence: "Pour la mission du khalifa, la vache represente l'epreuve d'obeissance completee. Apres toutes les precisions, le peuple a fini par identifier et sacrifier la vache. Le khalifa doit perseverer dans l'obeissance meme quand les conditions deviennent exigeantes."
            },
            "Ouverture/Fente": {
              status: "nul",
              senses: ["ouvrir", "fendre"],
              proof_ctx: "Le sens de fente est un sens etymologique de b-q-r. Le contexte est clairement celui de l'animal — baqaratun au feminin singulier designe une vache, pas un acte d'ouverture."
            }
          }
        }
      },
      {
        word_key: "thwr", position: 7, sense_chosen: "soulever",
        analysis_axes: {
          sense_chosen: "soulever",
          concept_chosen: "Agitation",
          concepts: {
            "Agitation": {
              status: "retenu",
              senses: ["soulever"],
              proof_ctx: "Le verbe tuthiru est un inaccompli 3FS forme IV de la racine th-w-r. Le Lane's donne « she raises, stirs up, plows (the ground) ». La forme IV causative (athara / tuthiru) signifie « faire soulever, retourner ». La vache ne retourne pas la terre — elle n'est pas dressee au labour. Le sens agricole est premier ici.",
              axe1_verset: "Le verbe tuthiru est au centre de la description fonctionnelle de la vache. La negation la dhalulun tuthiru al-arda signifie « non dressee a retourner la terre ». La vache est libre de toute domestication agricole. Elle n'a jamais laboure — son corps est intact et non marque par le travail. Cette liberte de toute contrainte est un attribut de purete.",
              axe2_voisins: "Les versets 68-69 decrivaient des attributs passifs (age, couleur). Ce verset 71 decrit des attributs actifs (ce que la vache ne fait pas). La negation du labour et de l'irrigation complete la description par l'absence de fonction utilitaire. Le verset 72 changera de sujet vers le meurtre.",
              axe3_sourate: "La racine th-w-r n'apparait qu'une fois dans la sourate al-Baqarah, dans ce verset. L'acte de retourner la terre est un travail agricole fondamental. La sourate utilise cette racine pour decrire ce que la vache ne fait pas — soulignant sa purete fonctionnelle.",
              axe4_coherence: "La racine th-w-r apparait rarement dans le Coran. En 30:9, « atharu al-arda » signifie « ils ont retourne la terre, ils ont cultive ». Le sens de retourner/labourer la terre est confirme par le Lane's pour la forme IV. Le taureau (thawr) est l'animal de labour par excellence.",
              axe5_frequence: "Pour la mission du khalifa, la liberte de toute contrainte est une qualite du sacrifice. La vache non dressee est pure car non instrumentalisee. Le khalifa offre a Dieu ce qui est libre et intact — pas ce qui a deja ete use par le service du monde."
            },
            "Animal/Force": {
              status: "nul",
              senses: ["taureau", "bœuf"],
              proof_ctx: "Le sens d'animal (taureau) est un nom derive de la meme racine. Ici le mot est un verbe (tuthiru) a l'inaccompli 3FS forme IV — c'est l'acte de soulever/retourner, pas l'animal."
            }
          }
        }
      },
      {
        word_key: "ard", position: 8, sense_chosen: "terre",
        analysis_axes: {
          sense_chosen: "terre",
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["terre", "bas", "sol", "pays"],
              proof_ctx: "Le mot al-arda est un nom feminin singulier defini accusatif de la racine a-r-d. Le Lane's donne « the earth, the ground, the soil ». L'article defini (al-) designe la terre en general comme surface labourable. L'accusatif indique que la terre est l'objet du verbe tuthiru (retourner).",
              axe1_verset: "Le mot al-arda est l'objet du labour que la vache ne fait pas. La terre est mentionnee comme surface agricole — c'est le sol que l'on retourne pour planter. La negation (la tuthiru al-arda) ecarte la vache de tout contact avec le travail de la terre. La terre est ici le symbole du travail utilitaire dont la vache est exemptee.",
              axe2_voisins: "Les versets precedents ne mentionnaient pas la terre. Ce verset 71 introduit la terre comme element de la description fonctionnelle de la vache. Le verset 73 mentionnera aussi la terre implicitement a travers le miracle de la resurrection. La terre est le lieu de l'epreuve humaine.",
              axe3_sourate: "La racine a-r-d est tres frequente dans la sourate al-Baqarah. En 2:11, « ne semez pas la corruption sur la terre ». En 2:30, « Je vais etablir sur la terre un khalifa ». La terre est le theatre de la mission du khalifa et le lieu de l'epreuve. La mention de la terre dans le recit de la vache rattache le sacrifice au contexte terrestre.",
              axe4_coherence: "La racine a-r-d apparait plus de 450 fois dans le Coran. La terre est le lieu de la creation, de l'epreuve et de la responsabilite humaine. En 7:56, « ne semez pas la corruption sur terre apres sa reforme ». La terre est un depot confie a l'homme.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le lieu de sa mission. Le khalifa est etabli sur la terre pour la preserver et la cultiver. La vache qui ne laboure pas la terre est paradoxalement un rappel que le sacrifice precede le travail — l'obeissance a Dieu passe avant l'utilite terrestre."
            }
          }
        }
      },
      {
        word_key: "sqy", position: 10, sense_chosen: "irriguer",
        analysis_axes: {
          sense_chosen: "irriguer",
          concept_chosen: "Irrigation/Don",
          concepts: {
            "Irrigation/Don": {
              status: "retenu",
              senses: ["irriguer", "abreuver", "donner à boire"],
              proof_ctx: "Le verbe tasqi est un inaccompli 3FS de la racine s-q-y. Le Lane's donne « she waters, she irrigates ». Le verbe est precede de la negation wa-la (et ni) — la vache n'irrigue pas le champ. L'irrigation est le second travail agricole ecarte apres le labour. La vache est libre de tout service utilitaire.",
              axe1_verset: "Le verbe tasqi complete la description fonctionnelle apres tuthiru (retourner la terre). Les deux verbes ensemble couvrent le travail agricole complet — labourer et irriguer. La double negation (la tuthiru... wa-la tasqi) est une exclusion totale du travail agricole. La vache est un animal libre, non instrumentalise.",
              axe2_voisins: "La paire labour-irrigation forme une unite semantique dans le verset 71. Les versets 68-70 ne mentionnaient pas le travail. Cette precision sur l'absence de travail distingue la vache comme animale sacrificielle pure — non marquee par l'usage humain.",
              axe3_sourate: "La racine s-q-y dans la sourate al-Baqarah n'apparait qu'ici. L'irrigation est un acte vital dans l'agriculture — donner a boire aux cultures. La sourate mentionne l'eau et l'irrigation comme signes de la providence divine.",
              axe4_coherence: "La racine s-q-y apparait dans le Coran avec le sens d'abreuver et d'irriguer. En 28:24, Moise abreuve le troupeau des deux femmes. En 76:21, « leur Seigneur leur donnera a boire une boisson pure ». L'acte de donner a boire est un acte de generosite et de soin.",
              axe5_frequence: "Pour la mission du khalifa, l'irrigation est un acte de soin envers la creation. La vache qui n'irrigue pas est pure car non utilisee — elle est entierement disponible pour le sacrifice. Le khalifa doit distinguer ce qui est consacre a Dieu de ce qui est utilise pour le monde."
            }
          }
        }
      },
      {
        word_key: "hrth", position: 11, sense_chosen: "champ",
        analysis_axes: {
          sense_chosen: "champ",
          concept_chosen: "Culture/Effort",
          concepts: {
            "Culture/Effort": {
              status: "retenu",
              senses: ["labourer", "champ", "cultiver"],
              proof_ctx: "Le mot al-hartha est un nom masculin singulier defini accusatif de la racine h-r-th. Le Lane's donne « the tilth, the cultivated field, the crop, the produce of tilling ». Le champ est l'objet de l'irrigation que la vache ne fait pas. L'article defini (al-) generalise — c'est le champ en general, tout champ cultive.",
              axe1_verset: "Le mot al-hartha est l'objet du verbe tasqi (irriguer). La vache n'irrigue pas le champ — elle n'est associee a aucune activite agricole. Le champ est le complement du labour (la terre) et de l'irrigation — ensemble ils couvrent le cycle agricole complet. La vache est entierement exemptee du travail productif.",
              axe2_voisins: "Le champ n'etait pas mentionne dans les versets precedents. Ce verset 71 introduit le vocabulaire agricole (terre, irrigation, champ) pour definir la vache par ce qu'elle ne fait pas. Le passage du recit de la vache au meurtre (verset 72) change completement de registre.",
              axe3_sourate: "La racine h-r-th dans la sourate al-Baqarah reapparait en 2:205 (detruire les recoltes) et 2:223 (vos femmes sont un champ pour vous). Le champ est un symbole de fertilite et de production — il represente le fruit de l'effort humain.",
              axe4_coherence: "La racine h-r-th apparait 13 fois dans le Coran. En 42:20, « qui veut la recolte de l'au-dela, Nous lui accroitrons sa recolte ». En 56:63, « la semence que vous semez ». Le champ est un symbole de l'effort et de sa recompense.",
              axe5_frequence: "Pour la mission du khalifa, le champ represente le fruit du travail. La vache sacrificielle est exclue du champ — elle n'est pas un instrument de production. Le khalifa doit comprendre que le sacrifice n'est pas une perte mais un investissement dans l'obeissance a Dieu."
            }
          }
        }
      },
      {
        word_key: "slm", position: 12, sense_chosen: "sain et sauf",
        analysis_axes: {
          sense_chosen: "sain et sauf",
          concept_chosen: "Intégrité/Santé",
          concepts: {
            "Intégrité/Santé": {
              status: "retenu",
              senses: ["sain et sauf"],
              proof_ctx: "Le mot musallamatun est un participe passif feminin singulier forme II de la racine s-l-m. Le Lane's donne « sound, free from blemish, whole, unblemished, exempt from defects ». La forme II passive (musallama) signifie « rendue saine, preservee de tout defaut ». Le mot decrit l'integrite physique de la vache — elle est exempte de toute imperfection.",
              axe1_verset: "Le mot musallamatun est le premier attribut positif apres les negations (ni labour ni irrigation). La vache est saine — son corps est intact et sans defaut. L'attribut positif (saine) est renforce par la negation suivante (sans tache) — double affirmation de la perfection physique. La vache est un specimen parfait de son espece.",
              axe2_voisins: "Les versets 68-70 precisaient l'age et la couleur. Ce verset 71 ajoute l'integrite physique. La progression des attributs va du general (age) au visible (couleur) au fonctionnel (pas de travail) au physique (saine, sans tache). La description est exhaustive.",
              axe3_sourate: "La racine s-l-m dans la sourate al-Baqarah porte plusieurs sens : paix (2:208), soumission (2:112, 2:131). Le sens d'integrite physique dans ce verset est specifique au contexte du sacrifice — la vache doit etre physiquement parfaite pour etre sacrifiee.",
              axe4_coherence: "La racine s-l-m est l'une des plus riches du Coran. Le mot salam (paix), islam (soumission), salim (sain) partagent la racine. En 26:89, « un coeur sain (salim) » designe le coeur pur de toute maladie spirituelle. L'integrite physique de la vache est l'equivalent de l'integrite spirituelle du coeur.",
              axe5_frequence: "Pour la mission du khalifa, l'integrite est une qualite essentielle. Le khalifa doit etre salim (sain) dans son coeur comme la vache est musallama (saine) dans son corps. Le sacrifice exige la perfection — on n'offre pas a Dieu ce qui est defectueux."
            },
            "Paix/Soumission": {
              status: "nul",
              senses: ["paix", "soumission", "islam", "salut"],
              proof_ctx: "Le sens de paix ou soumission est un sens frequent de s-l-m. Ici le participe passif forme II musallama designe specifiquement l'integrite physique (sans defaut), pas la paix ou la soumission. Le Lane's confirme ce sens dans le contexte des animaux de sacrifice."
            }
          }
        }
      },
      {
        word_key: "wa", position: 14, sense_chosen: "et",
        analysis_axes: {
          sense_chosen: "et",
          concept_chosen: "Coordination/Serment",
          concepts: {
            "Coordination/Serment": {
              status: "nul",
              senses: ["et", "par"],
              proof_ctx: "Le mot shiyata est derive de la racine w-sh-y. Le Lane's donne « a mark, a spot of different color, a blemish ». Dans la base de donnees, ce mot est repertorie sous la racine wa mais il s'agit en fait de w-sh-y. Le mot designe une marque ou tache visible sur le pelage de l'animal. La negation la shiyata fiha signifie « sans tache en elle »."
            }
          }
        }
      },
      {
        word_key: "jya", position: 18, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue",
          concepts: {
            "Venue": {
              status: "retenu",
              senses: ["venir"],
              proof_ctx: "Le verbe ji'ta est un accompli 2MS de la racine j-y-'. Le Lane's donne « you came, you brought ». Le verbe est a la deuxieme personne — les enfants d'Israel s'adressent a Moise en disant « maintenant tu as apporte (ji'ta) la verite ». Le sens est « apporter, venir avec » — Moise est venu avec la verite.",
              axe1_verset: "Le verbe ji'ta est au coeur de la reconnaissance du peuple. « Maintenant tu as apporte la verite » — les enfants d'Israel reconnaissent enfin que la description est complete et vraie. Le mot « maintenant » (al-ana) souligne le retard — ils auraient du reconnaitre la verite des le debut. La venue de la verite est un evenement que le peuple a retarde par ses questions.",
              axe2_voisins: "Les versets 68-70 montraient les questions du peuple. Ce verset 71 montre la reconnaissance — ji'ta bi-l-haqq (tu as apporte la verite). Le contraste est saisissant : apres trois versets de tergiversation, un seul mot de reconnaissance. Le verset 72 changera de sujet vers le meurtre.",
              axe3_sourate: "La racine j-y-' dans la sourate al-Baqarah porte le sens de venir, arriver. En 2:87, « chaque fois qu'un messager vous apportait (ja'akum) ce que vos ames ne desiraient pas ». La venue de la verite par les messagers est un theme central de la sourate.",
              axe4_coherence: "La racine j-y-' apparait plus de 270 fois dans le Coran. Le schema ja'a bi (venir avec, apporter) est frequent. En 12:18, les freres de Joseph « apporterent (ja'uu) du faux sang sur sa chemise ». La venue peut etre celle de la verite ou du mensonge.",
              axe5_frequence: "Pour la mission du khalifa, la venue de la verite est le moment de decision. Le khalifa reconnait la verite quand elle arrive et agit en consequence. Les enfants d'Israel ont reconnu la verite mais ont failli ne pas agir — la reconnaissance sans action est insuffisante."
            }
          }
        }
      },
      {
        word_key: "hqq", position: 19, sense_chosen: "vérité",
        analysis_axes: {
          sense_chosen: "vérité",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["vérité", "être vrai", "réalité", "droit"],
              proof_ctx: "Le mot al-haqqi est un nom masculin singulier defini genitif de la racine h-q-q. Le Lane's donne « the truth, the reality, the right ». Le mot est precede de la preposition bi — ji'ta bi-l-haqqi signifie « tu as apporte la verite ». Le haqq est ce qui correspond a la realite — la description de la vache est enfin reconnue comme exacte.",
              axe1_verset: "Le mot al-haqqi est l'objet apporte par Moise. La verite est la description complete de la vache. Les enfants d'Israel reconnaissent al-haqq (la verite) apres avoir tergiverse pendant trois versets. La reconnaissance est tardive — « maintenant » (al-ana) implique qu'ils auraient pu reconnaitre la verite plus tot. La verite etait deja presente des le premier ordre (verset 67).",
              axe2_voisins: "Le verset 67 contenait deja la verite (sacrifiez une vache). Les versets 68-70 etaient des questions qui retardaient l'acceptation de la verite. Ce verset 71 marque la reconnaissance finale. La verite n'a pas change — c'est le peuple qui a fini par l'accepter.",
              axe3_sourate: "La racine h-q-q dans la sourate al-Baqarah est centrale. En 2:26, « ils savent que c'est la verite (al-haqq) venant de leur Seigneur ». En 2:42, « ne couvrez pas la verite de faussete ». La sourate oppose constamment la verite au mensonge et a la tergiversation.",
              axe4_coherence: "La racine h-q-q apparait plus de 280 fois dans le Coran. Le haqq est un attribut de Dieu et de Sa parole. En 22:62, « Dieu est al-Haqq (la Verite) ». La verite dans le Coran est objective et absolue — elle ne depend pas de l'acceptation humaine.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de l'action. Le khalifa reconnait la verite et agit selon elle. Les enfants d'Israel ont reconnu la verite tardivement et ont failli ne pas agir — le khalifa ne doit pas repeter cette erreur."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "mériter", "être obligatoire"],
              proof_ctx: "Le sens d'obligation est un autre aspect de h-q-q. Ici l'expression ji'ta bi-l-haqqi signifie « tu as apporte la verite » — c'est la verite qui est apportee, pas une obligation. Le contexte est la reconnaissance de la verite de la description."
            }
          }
        }
      },
      {
        word_key: "kwd", position: 22, sense_chosen: "être sur le point de",
        analysis_axes: {
          sense_chosen: "être sur le point de",
          concept_chosen: "Imminence/Proximité",
          concepts: {
            "Imminence/Proximité": {
              status: "retenu",
              senses: ["être sur le point de", "presque", "faillir"],
              proof_ctx: "Le verbe kaduu est un accompli 3MP de la racine k-w-d. Le Lane's donne « they were on the point of, they almost, they nearly ». La formule wa-ma kaduu yaf'aluna avec la negation ma signifie « et ils n'etaient presque pas sur le point de le faire » — c'est-a-dire qu'ils ont failli ne pas le faire. Le sacrifice a ete execute de justesse.",
              axe1_verset: "Le verbe kaduu cloture le verset par une note dramatique. Meme apres avoir reconnu la verite et identifie la vache, les enfants d'Israel ont failli ne pas la sacrifier. Le verbe d'imminence revele que la tergiversation a persiste jusqu'au dernier instant. La formule wa-ma kaduu yaf'aluna est un commentaire final sur la reticence du peuple.",
              axe2_voisins: "Les versets 68-70 montraient la tergiversation verbale. Ce verset 71 montre la tergiversation dans l'action — meme au moment d'agir, ils hesitent. Le contraste avec le verset 72 (le meurtre) est saisissant — ils hesitent a sacrifier une vache mais n'ont pas hesite a tuer une ame.",
              axe3_sourate: "La racine k-w-d n'apparait qu'une fois dans le recit de la vache. Le verbe d'imminence marque le point culminant de la tergiversation — le peuple a pousse la desobeissance jusqu'a la limite de ne pas executer l'ordre du tout. La sourate montre que la tergiversation est une forme de desobeissance.",
              axe4_coherence: "La racine k-w-d apparait environ 35 fois dans le Coran. En 2:20, « l'eclair est sur le point d'emporter (yakadu) leur vue ». En 24:35, « l'huile est sur le point de briller (yakadu) meme sans feu ». Le verbe d'imminence marque la frontiere entre l'etre et le non-etre.",
              axe5_frequence: "Pour la mission du khalifa, l'imminence de l'echec est un avertissement. Les enfants d'Israel ont failli echouer au dernier moment — la tergiversation peut detruire l'obeissance meme quand l'intention est presente. Le khalifa doit agir sans hesitation une fois la verite reconnue."
            }
          }
        }
      },
      {
        word_key: "fel", position: 23, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Acte",
          concepts: {
            "Action/Acte": {
              status: "retenu",
              senses: ["agir", "action", "subir une action", "faire ensemble", "efficace", "faire"],
              proof_ctx: "Le verbe yaf'aluna est un inaccompli 3MP de la racine f-'-l. Le Lane's donne « they do, they act ». Le verbe est l'objet de kaduu — « ils ont failli ne pas faire (yaf'aluna) ». L'action (le sacrifice) est celle qui a presque echoue. Le verbe general f-'-l est utilise car le sacrifice a deja ete mentionne (dhabahuha).",
              axe1_verset: "Le verbe yaf'aluna est le dernier mot du verset et de tout le recit de la vache. L'action est le point final — apres la parole, les questions, la reconnaissance de la verite, l'action est enfin accomplie (de justesse). Le verset se termine sur une note d'avertissement — ils ont failli ne pas agir.",
              axe2_voisins: "Le verset 68 se terminait par if'aluu (faites). Ce verset 71 se termine par yaf'aluna (ils font). La boucle est fermee — l'ordre d'agir du verset 68 est enfin execute (presque) dans le verset 71. Le passage de l'imperatif (if'aluu) a l'inaccompli (yaf'aluna) montre le passage de l'ordre a l'execution.",
              axe3_sourate: "La racine f-'-l dans la sourate al-Baqarah designe l'action humaine. Le recit de la vache montre que l'action est le but de tout le dialogue — les questions ne servent a rien si elles ne menent pas a l'action. La sourate enseigne que l'action est la reponse attendue a l'ordre divin.",
              axe4_coherence: "La racine f-'-l apparait 108 fois dans le Coran. Le verbe est le plus general de l'action — il couvre tout type d'acte sans specifier lequel. En 21:73, « Nous leur avons inspire les bonnes actions ». L'action est le fruit de la foi et de l'obeissance.",
              axe5_frequence: "Pour la mission du khalifa, l'action est l'aboutissement de la mission. Le khalifa agit selon l'ordre divin. Les enfants d'Israel ont failli ne pas agir — le verset est un avertissement contre l'inaction du khalifa qui connait la verite mais hesite a la mettre en pratique."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:72
  // verse_id=79, analysis_id=438
  // "Et quand vous tuates une ame et vous vous en rejetates mutuellement
  //  l'accusation — Dieu fait sortir ce que vous dissimuliez."
  // =====================================================
  72: {
    verse_id: 79,
    analysis_id: 438,
    translation_arab: "Et quand vous tuates une ame et vous vous en rejetates mutuellement l'accusation — et Dieu fait sortir ce que vous etiez en train de dissimuler.",
    full_translation: "Et [rappelez] quand vous tuates une ame puis vous vous en disputates — et Dieu fait sortir ce que vous dissimuliez.",
    translation_explanation: `§DEMARCHE§
Ce verset introduit l'evenement qui a motive le sacrifice de la vache. Le verbe **qataltum** est un accompli 2MP de la racine q-t-l. Le Lane's donne « you killed, you slew ». Les enfants d'Israel sont directement accuses du meurtre. Le mot **nafsan** est un nom feminin singulier accusatif indefini de la racine n-f-s. Le Lane's donne « a soul, a person, a human being ». L'ame tuee est une personne humaine dont le meurtre est le crime central. Le verbe **iddara'tum** est un accompli 2MP forme VI de la racine d-r-'. Le Lane's donne « you repelled one another, you accused each other, you disputed mutually ». La forme VI reciproque signifie se renvoyer mutuellement — chacun rejette l'accusation sur l'autre. Le mot **Allahu** est le nom divin nominatif de la racine a-l-h. Le Lane's donne « God ». Dieu intervient pour reveler la verite que les hommes cachent. Le mot **mukhrijun** est un participe actif singulier masculin forme IV de la racine kh-r-j. Le Lane's donne « one who brings forth, one who extracts ». Dieu est Celui qui fait sortir ce qui est cache. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne « you were ». Le verbe auxiliaire situe l'action de dissimuler dans la duree. Le verbe **taktumuna** est un inaccompli 2MP de la racine k-t-m. Le Lane's donne « you conceal, you hide, you keep secret ». Les enfants d'Israel dissimulaient la verite sur le meurtrier.

§JUSTIFICATION§
**vous tuates** — Le sens retenu est « tuer ». Le verbe qataltum designe le meurtre d'une personne. L'alternative « combattre » est ecartee car il s'agit d'un meurtre individuel, pas d'un combat collectif.

**une ame** — Le sens retenu est « personne ». Le mot nafsan designe la personne tuee. L'alternative « souffle » est ecartee car le contexte est le meurtre d'un etre humain, pas un phenomene physique.

**vous vous disputates** — Le sens retenu est « semer ». Le verbe iddara'tum forme VI signifie se repousser mutuellement, se disputer en se renvoyant l'accusation. Le sens de « semer » de la racine d-r-' est lie a la dispersion, mais ici la forme VI reciproque donne le sens de rejet mutuel.

**Dieu** — Le sens retenu est « Dieu ». Le mot Allah designe le nom propre de Dieu. Pas d'alternative pertinente.

**fait sortir** — Le sens retenu est « faire sortir ». Le mot mukhrijun forme IV signifie celui qui extrait, qui fait emerger. L'alternative « impot » est ecartee car le contexte est la revelation de la verite cachee, pas un prelevement fiscal.

**vous etiez** — Le sens retenu est « etre ». Le verbe kuntum est un auxiliaire temporel. Pas d'alternative pertinente.

**vous dissimuliez** — Le sens retenu est « dissimuler ». Le verbe taktumuna signifie cacher, garder secret. Pas d'alternative pertinente.

§CRITIQUE§
**ame vs personne** — Le mot nafs dans le Coran designe a la fois l'ame et la personne. Ici « une ame » est plus riche que « une personne » car nafs implique la totalite de l'etre — tuer une nafs c'est detruire un etre complet, pas seulement un corps.
**se rejetaient l'accusation vs se disputaient** — Le verbe iddara'tum forme VI de d-r-' signifie se repousser mutuellement. Le Lane's precise le sens de rejet reciproque de l'accusation. « Se disputer » est trop vague — « se rejeter mutuellement l'accusation » est plus precis.
**fait sortir vs revele** — Le mot mukhrijun (participe actif forme IV) designe l'acte physique de faire sortir. C'est plus fort que « reveler » car il implique une action de Dieu qui extrait ce qui etait cache. La verite ne se revele pas d'elle-meme — Dieu la fait sortir activement.`,
    segments: [
      { fr: "et quand", phon: "wa-idh", arabic: "وَإِذْ", is_particle: true, position: 0 },
      { fr: "vous tuates", pos: "verbe", phon: "qataltum", arabic: "قَتَلْتُمْ", word_key: "qtl", is_particle: false, sense_retenu: "tuer", position: 1 },
      { fr: "une ame", pos: "nom", phon: "nafsan", arabic: "نَفْسًا", word_key: "nfs", is_particle: false, sense_retenu: "personne", position: 2 },
      { fr: "puis vous vous disputates", pos: "verbe", phon: "iddara'tum", arabic: "فَٱدَّٰرَْٰٔتُمْ", word_key: "draa", is_particle: false, sense_retenu: "semer", position: 3 },
      { fr: "a son sujet", phon: "fiha", arabic: "فِيهَا", is_particle: true, position: 4 },
      { fr: "et Dieu", pos: "nom", phon: "wa-Allahu", arabic: "وَٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 5 },
      { fr: "fait sortir", pos: "nom", phon: "mukhrijun", arabic: "مُخْرِجٌ", word_key: "xrj", is_particle: false, sense_retenu: "faire sortir", position: 6 },
      { fr: "ce que", phon: "ma", arabic: "مَّا", is_particle: true, position: 7 },
      { fr: "vous etiez", pos: "verbe", phon: "kuntum", arabic: "كُنتُمْ", word_key: "knw", is_particle: false, sense_retenu: "être", position: 8 },
      { fr: "en train de dissimuler", pos: "verbe", phon: "taktumuna", arabic: "تَكْتُمُونَ", word_key: "ktm", is_particle: false, sense_retenu: "dissimuler", position: 9 }
    ],
    words: [
      {
        word_key: "qtl", position: 1, sense_chosen: "tuer",
        analysis_axes: {
          sense_chosen: "tuer",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "assassiner", "combattre", "meurtre", "combat"],
              proof_ctx: "Le verbe qataltum est un accompli 2MP de la racine q-t-l. Le Lane's donne « you killed, you slew, you murdered ». Le pronom 2MP (tum) accuse directement les enfants d'Israel du meurtre. Le meurtre est l'evenement central qui a motive tout le recit de la vache — le sacrifice devait reveler l'identite du meurtrier.",
              axe1_verset: "Le verbe qataltum ouvre le verset par l'accusation directe. « Quand vous tuates une ame » — le meurtre est presente comme un fait accompli, pas comme une accusation a prouver. Dieu sait qui a tue. La suite du verset montre la dispute (iddara'tum) puis l'intervention divine (mukhrijun). Le meurtre est le point de depart de la crise que la vache devait resoudre.",
              axe2_voisins: "Les versets 67-71 racontaient le recit de la vache sans mentionner le meurtre. Ce verset 72 revele la raison du sacrifice — un meurtre dont le coupable est inconnu. Le verset 73 donnera l'ordre de frapper le mort avec un morceau de la vache pour le ressusciter. Le sacrifice n'etait pas une fin en soi mais un moyen de reveler la verite.",
              axe3_sourate: "La racine q-t-l est frequente dans la sourate al-Baqarah. En 2:61, les enfants d'Israel tuaient les prophetes. En 2:87, « chaque fois qu'un prophete vous apportait ce que vous ne desiriez pas, vous le tuiez ». Le meurtre est un theme recurrent lie aux enfants d'Israel dans la sourate.",
              axe4_coherence: "La racine q-t-l apparait plus de 170 fois dans le Coran. En 5:32, « quiconque tue une ame sans droit c'est comme s'il avait tue l'humanite entiere ». Le meurtre est le crime supreme — il detruit ce que Dieu a cree. Le meurtre dans le recit de la vache revele la corruption morale du peuple.",
              axe5_frequence: "Pour la mission du khalifa, le meurtre est l'antithese de la mission. Le khalifa preserve la vie — il ne la detruit pas. Les enfants d'Israel qui tuent et dissimulent montrent l'echec total de la mission du khalifa."
            }
          }
        }
      },
      {
        word_key: "nfs", position: 2, sense_chosen: "personne",
        analysis_axes: {
          sense_chosen: "personne",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["âme", "personne", "esprit", "désir", "soi-même"],
              proof_ctx: "Le mot nafsan est un nom feminin singulier accusatif indefini de la racine n-f-s. Le Lane's donne « a soul, a person, a self, a human being ». Le mot est a l'accusatif comme objet du verbe qataltum (vous tuates). L'indefini (une ame) generalise — c'est un etre humain sans identification precise.",
              axe1_verset: "Le mot nafsan est l'objet du meurtre. « Vous tuates une ame » — le mot nafs designe la totalite de l'etre humain, pas seulement le corps. Tuer une nafs c'est detruire un etre complet. Le mot a l'indefini souligne l'anonymat de la victime — ce qui compte est l'acte du meurtre, pas l'identite precise de la victime.",
              axe2_voisins: "Le verset 71 clot le recit de la vache. Ce verset 72 revele le meurtre qui motivait le sacrifice. Le verset 73 montrera la resurrection de la victime par le miracle de la vache. Le mot nafs est au centre de la sequence meurtre-sacrifice-resurrection.",
              axe3_sourate: "La racine n-f-s dans la sourate al-Baqarah designe l'ame humaine. En 2:48, « une ame ne pourra rien pour une autre ». En 2:233, « on n'impose a une ame que ce qu'elle peut supporter ». La sourate montre que chaque ame est responsable devant Dieu — tuer une ame est un crime qui sera revele.",
              axe4_coherence: "La racine n-f-s apparait plus de 290 fois dans le Coran. En 5:32, « quiconque tue une ame ». En 6:151, « ne tuez pas l'ame que Dieu a rendue sacree ». Le nafs est sacre car il est creation de Dieu — le meurtre viole cette sacralite.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est l'objet de la protection du khalifa. Le khalifa est etabli sur terre pour preserver la vie, pas la detruire. Le meurtre d'une ame est la negation de la mission du khalifa."
            },
            "Souffle/Vie": {
              status: "nul",
              senses: ["souffle", "respirer", "soulagement"],
              proof_ctx: "Le sens de souffle est le sens physique premier de n-f-s. Ici nafsan designe la personne tuee dans sa totalite, pas le souffle physique. Le contexte du meurtre implique l'etre entier."
            }
          }
        }
      },
      {
        word_key: "draa", position: 3, sense_chosen: "semer",
        analysis_axes: {
          sense_chosen: "semer",
          concept_chosen: "Création/Dispersion",
          concepts: {
            "Création/Dispersion": {
              status: "retenu",
              senses: ["semer", "créer", "progéniture"],
              proof_ctx: "Le verbe iddara'tum est un accompli 2MP forme VI de la racine d-r-'. Le Lane's donne pour la forme VI « you accused one another, you laid the blame upon one another, you repelled the charge from yourselves ». La forme VI est reciproque — chacun repousse l'accusation vers l'autre. Le sens de « semer » la discorde est lie a la dispersion de l'accusation dans toutes les directions.",
              axe1_verset: "Le verbe iddara'tum decrit la reaction du peuple apres le meurtre. Au lieu de reconnaitre le crime, ils se rejettent mutuellement l'accusation. Chacun accuse l'autre — la verite est dispersee dans les accusations contradictoires. La dispute est l'antithese de la verite que Dieu va reveler. Le verbe est a la forme VI reciproque — c'est un mouvement circulaire sans resolution.",
              axe2_voisins: "Le verset 71 clot le recit de la vache. Ce verset 72 introduit le meurtre et la dispute. Le contraste est fort — la tergiversation sur la vache etait verbale, la dispute sur le meurtre est morale. Le verset 73 apportera la resolution par le miracle.",
              axe3_sourate: "La racine d-r-' n'apparait qu'ici dans la sourate al-Baqarah sous cette forme. La dispute sur le meurtre est un exemple de la corruption morale des enfants d'Israel. La sourate montre que la dissimulation de la verite est un peche grave.",
              axe4_coherence: "La racine d-r-' apparait rarement dans le Coran sous la forme VI. Le sens de rejet mutuel de l'accusation est specifique a ce verset. Le Lane's confirme que le verbe idara'a signifie renvoyer quelque chose de soi vers l'autre, comme un bouclier (dir').",
              axe5_frequence: "Pour la mission du khalifa, la dispute et le rejet de la responsabilite sont des echecs. Le khalifa assume ses actes et ne rejette pas la faute sur autrui. Les enfants d'Israel qui se renvoient l'accusation montrent le refus de la responsabilite individuelle."
            }
          }
        }
      },
      {
        word_key: "alh", position: 5, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allahu est le nom propre de Dieu au nominatif de la racine a-l-h. Le Lane's donne « God, the one true God ». Dieu intervient dans le recit comme Celui qui fait sortir la verite cachee. Le nominatif indique que Dieu est le sujet actif — c'est Lui qui agit pour reveler.",
              axe1_verset: "Le mot Allahu est au centre du retournement du verset. Les hommes se disputent et cachent la verite — Dieu fait sortir ce qu'ils dissimulent. L'opposition est entre la dissimulation humaine et la revelation divine. Dieu est sujet de mukhrijun (Celui qui fait sortir) — Son action est certaine et complete.",
              axe2_voisins: "Le verset 71 montrait Dieu repondant aux questions sur la vache. Ce verset 72 montre Dieu revelant le crime cache. Le verset 73 montrera Dieu ressuscitant le mort. La progression montre la puissance divine croissante — repondre, reveler, ressusciter.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Dieu est present dans chaque episode comme l'acteur principal. La sourate montre que rien n'echappe a Dieu — meme ce que les hommes cachent est connu de Lui.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. C'est le nom propre de Dieu qui rassemble tous Ses attributs. La phrase « Allahu mukhrijun ma kuntum taktumuna » (Dieu fait sortir ce que vous dissimulez) est un avertissement universel.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source de toute autorite et de toute verite. Le khalifa agit au nom de Dieu et sait que rien ne Lui echappe. La certitude que Dieu revele tout ce qui est cache est un frein a la corruption."
            }
          }
        }
      },
      {
        word_key: "xrj", position: 6, sense_chosen: "faire sortir",
        analysis_axes: {
          sense_chosen: "faire sortir",
          concept_chosen: "Sortie/Émergence",
          concepts: {
            "Sortie/Émergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "émerger", "produire"],
              proof_ctx: "Le mot mukhrijun est un participe actif masculin singulier forme IV de la racine kh-r-j. Le Lane's donne « one who brings forth, who extracts, who makes to come out ». La forme IV causative (akhraj) signifie « faire sortir ». Le participe actif indique un etat continu — Dieu est constamment Celui qui fait sortir la verite.",
              axe1_verset: "Le mot mukhrijun est l'attribut de Dieu dans ce verset. Dieu fait sortir (mukhrijun) ce que les hommes dissimulent (taktumuna). La sortie est le passage du cache au visible, du secret au connu. L'action de Dieu s'oppose a l'action des hommes — ils cachent, Dieu revele.",
              axe2_voisins: "Le verset 71 montrait l'execution du sacrifice. Ce verset 72 montre le mecanisme de revelation — Dieu fait sortir le cache. Le verset 73 montrera le miracle concret — frapper le mort avec un morceau de la vache pour le ressusciter et l'interroger.",
              axe3_sourate: "La racine kh-r-j dans la sourate al-Baqarah porte le sens de sortie et de production. En 2:22, Dieu fait sortir les fruits comme provision. En 2:61, « sortez d'Egypte ». En 2:167, « si seulement nous pouvions sortir ». La sortie dans la sourate est toujours un passage d'un etat a un autre.",
              axe4_coherence: "La racine kh-r-j apparait plus de 180 fois dans le Coran. En 6:95, Dieu fait sortir le vivant du mort. En 36:33, Dieu fait sortir le grain de la terre. La sortie est un acte divin par excellence — Dieu fait emerger ce qui etait cache dans ce qui etait apparent.",
              axe5_frequence: "Pour la mission du khalifa, la revelation de la verite est un acte de Dieu. Le khalifa sait que rien ne reste cache — Dieu fait sortir toute dissimulation. Cette certitude doit guider le khalifa vers la transparence et la verite dans ses actes."
            },
            "Tribut/Revenu": {
              status: "nul",
              senses: ["impôt", "revenu"],
              proof_ctx: "Le sens de tribut ou revenu est un sens derive de kh-r-j. Ici mukhrijun designe l'acte de faire sortir la verite cachee, pas un prelevement fiscal."
            }
          }
        }
      },
      {
        word_key: "knw", position: 8, sense_chosen: "être",
        analysis_axes: {
          sense_chosen: "être",
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["être", "devenir", "exister"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la racine k-w-n. Le Lane's donne « you were ». Le verbe auxiliaire kana situe l'action de dissimuler dans la duree — ils etaient en train de dissimuler. La construction kana + inaccompli exprime la duree passee — la dissimulation etait continue.",
              axe1_verset: "Le verbe kuntum est auxiliaire de taktumuna (vous dissimulez). La construction kuntum taktumuna signifie « vous etiez en train de dissimuler » — la dissimulation est presentee comme un etat continu dans le passe. Dieu fait sortir ce que les hommes dissimulaient de maniere prolongee.",
              axe2_voisins: "Le verbe kana comme auxiliaire est frequent dans le Coran. Ici il situe la dissimulation dans le passe — les enfants d'Israel cachaient le meurtrier depuis un certain temps. Le sacrifice de la vache et le miracle de la resurrection viennent mettre fin a cette dissimulation.",
              axe3_sourate: "La racine k-w-n est une des plus frequentes de la sourate al-Baqarah. Le verbe kana structure la narration en situant les evenements dans le temps. La sourate utilise kana pour rappeler les faits passes des enfants d'Israel.",
              axe4_coherence: "La racine k-w-n apparait plus de 1350 fois dans le Coran. Le verbe kana est le verbe d'existence fondamental. En 2:117, Dieu dit « Kun fa-yakun » (Sois et c'est). L'existence est un acte divin — seul Dieu donne l'etre.",
              axe5_frequence: "Pour la mission du khalifa, l'existence est le fondement de tout. Le verbe kana rappelle que tout ce qui existe est creation de Dieu. Le khalifa existe par la volonte de Dieu et doit agir en conformite avec cette origine."
            }
          }
        }
      },
      {
        word_key: "ktm", position: 9, sense_chosen: "dissimuler",
        analysis_axes: {
          sense_chosen: "dissimuler",
          concept_chosen: "Dissimulation/Secret",
          concepts: {
            "Dissimulation/Secret": {
              status: "retenu",
              senses: ["cacher", "taire", "dissimuler", "garder secret"],
              proof_ctx: "Le verbe taktumuna est un inaccompli 2MP de la racine k-t-m. Le Lane's donne « you conceal, you hide, you keep secret, you suppress ». Le verbe designe l'acte delibere de cacher la verite. L'inaccompli avec kana exprime la duree — la dissimulation etait continue et prolongee.",
              axe1_verset: "Le verbe taktumuna cloture le verset par l'objet de la revelation divine. Dieu fait sortir ce que les hommes dissimulent — la verite sur le meurtrier. La dissimulation est l'antithese de la verite — cacher c'est nier la realite. Le verset oppose la dissimulation humaine a la revelation divine.",
              axe2_voisins: "Le verset 71 se terminait par la reticence a agir. Ce verset 72 se termine par la dissimulation active. La progression montre l'aggravation — de la tergiversation (versets 68-71) a la dissimulation du meurtre (verset 72). Le verset 73 montrera que la dissimulation est vaine face a Dieu.",
              axe3_sourate: "La racine k-t-m dans la sourate al-Baqarah est un theme majeur. En 2:42, « ne couvrez pas la verite de faussete et ne dissimulez pas la verite alors que vous la connaissez ». En 2:146, « ceux a qui Nous avons donne le Livre le connaissent et un groupe d'entre eux dissimule la verite ». La dissimulation est un peche recurrent des enfants d'Israel.",
              axe4_coherence: "La racine k-t-m apparait 9 fois dans le Coran, presque toutes dans la sourate al-Baqarah. Le verbe katama est specifiquement lie a la dissimulation de la verite revelée. En 3:187, « ceux qui dissimulent ce que Dieu a fait descendre du Livre ». La dissimulation est un acte de trahison envers la verite divine.",
              axe5_frequence: "Pour la mission du khalifa, la dissimulation est l'ennemi de la mission. Le khalifa doit etre transparent et veridique. Les enfants d'Israel qui dissimulent le meurtre montrent la corruption du coeur qui refuse la verite."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:73
  // verse_id=80, analysis_id=439
  // "Nous dimes : Frappez-le avec une partie d'elle. C'est ainsi
  //  que Dieu donne la vie aux morts et vous montre Ses signes,
  //  afin que vous raisonniez."
  // =====================================================
  73: {
    verse_id: 80,
    analysis_id: 439,
    translation_arab: "Nous dimes : Frappez-le avec une partie d'elle. C'est ainsi que Dieu donne la vie aux morts et vous montre Ses signes, afin que vous raisonniez.",
    full_translation: "Alors Nous dimes : Frappez-le avec un morceau d'elle. C'est ainsi que Dieu donne la vie aux morts et vous montre Ses signes, afin que vous raisonniez.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte l'ordre divin de frapper le mort avec un morceau de la vache sacrifiee. Le verbe **qulna** est un accompli 1P de la racine q-w-l. Le Lane's donne « We said ». Le « Nous » de majeste designe Dieu qui parle directement. Le verbe **idribuhu** est un imperatif 2MP de la racine d-r-b avec pronom 3MS. Le Lane's donne « strike him, hit him ». L'imperatif ordonne de frapper le mort. Le mot **bi-ba'diha** est un nom masculin singulier genitif avec preposition bi et pronom 3FS de la racine b-'-d. Le Lane's donne « with a part of it (feminine), with a piece of it ». Le pronom feminin renvoie a la vache — un morceau de la vache sacrifiee. Le verbe **yuhyi** est un inaccompli 3MS forme IV de la racine h-y-y. Le Lane's donne « He gives life, He quickens, He revives ». La forme IV causative signifie « donner la vie, faire vivre ». Dieu est le sujet — c'est Lui qui donne la vie aux morts. Le mot **Allahu** est le nom divin nominatif. Le Lane's donne « God ». Dieu est le sujet de l'acte de resurrection. Le mot **al-mawta** est un nom masculin pluriel defini accusatif de la racine m-w-t. Le Lane's donne « the dead, those who have died ». Les morts sont l'objet de la resurrection divine. Le verbe **yurikum** est un inaccompli 3MS forme IV avec pronom 2MP de la racine r-'-y. Le Lane's donne « He shows you, He makes you see ». La forme IV causative signifie « faire voir, montrer ». Dieu montre Ses signes aux hommes. Le mot **ayatihi** est un nom feminin pluriel genitif avec pronom 3MS de la racine '-y-t. Le Lane's donne « His signs, His verses, His proofs ». Les signes de Dieu sont les preuves de Sa puissance. Le verbe **ta'qiluna** est un inaccompli 2MP de la racine '-q-l. Le Lane's donne « you reason, you understand, you use your intellect ». La raison est l'outil que Dieu demande aux hommes d'utiliser pour comprendre Ses signes.

§JUSTIFICATION§
**Nous dimes** — Le sens retenu est « dire ». Le verbe qulna au « Nous » de majeste designe la parole divine directe. L'alternative « avis » est ecartee car c'est un ordre divin, pas une opinion.

**frappez-le** — Le sens retenu est « frapper ». Le verbe idribuhu ordonne un coup physique sur le mort avec un morceau de la vache. L'alternative « voyager » est ecartee car le contexte est un acte physique precis, pas un deplacement.

**un morceau d'elle** — Le sens retenu est « une partie ». Le mot ba'diha designe un morceau de la vache sacrifiee. L'alternative « moustique » est ecartee car le contexte est clairement celui d'une partie de la vache.

**donne la vie** — Le sens retenu est « donner la vie ». Le verbe yuhyi forme IV signifie faire vivre, ressusciter. L'alternative « pudeur » est ecartee car le contexte est la resurrection des morts, pas la retenue.

**les morts** — Le sens retenu est « mort ». Le mot al-mawta designe les morts que Dieu ressuscite. L'alternative « immobile » est ecartee car le contexte est la cessation de la vie.

**vous montre** — Le sens retenu est « voir ». Le verbe yurikum forme IV signifie « Il vous fait voir, Il vous montre ». L'alternative « opinion » est ecartee car le verbe est causatif (faire voir), pas une pensee interieure.

**Ses signes** — Le sens retenu est « signe ». Le mot ayatihi designe les preuves divines. L'alternative « verset » est possible mais le contexte est celui des signes de la puissance divine dans la creation, pas des versets du Coran.

**vous raisonniez** — Le sens retenu est « comprendre ». Le verbe ta'qiluna designe l'usage de la raison pour comprendre les signes. L'alternative « entraver » est ecartee car le contexte est intellectuel, pas physique.

§CRITIQUE§
**frapper vs proposer un exemple** — Le verbe daraba peut signifier « donner un exemple » dans certains contextes coraniques. Ici le pronom suffixe -hu (le, masculin) et le complement bi-ba'diha (avec un morceau d'elle) indiquent clairement un acte physique — frapper le mort avec un morceau de la vache.
**donne la vie vs fait vivre** — Le verbe yuhyi forme IV est « faire vivre, donner la vie ». « Donne la vie » est plus naturel en francais que « fait vivre ». Les deux traductions sont correctes mais « donner la vie » est plus courant.
**signes vs preuves** — Le mot ayat couvre les signes, les preuves et les versets. Ici « signes » est le plus adapte car le contexte est celui de la puissance divine manifestee dans la creation, pas d'un argument logique.`,
    segments: [
      { fr: "alors Nous dimes", pos: "verbe", phon: "fa-qulna", arabic: "فَقُلْنَا", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 0 },
      { fr: "frappez-le", pos: "verbe", phon: "idribuhu", arabic: "ٱضْرِبُوهُ", word_key: "drb", is_particle: false, sense_retenu: "frapper", position: 1 },
      { fr: "avec un morceau d'elle", pos: "nom", phon: "bi-ba'diha", arabic: "بِبَعْضِهَا", word_key: "bed", is_particle: false, sense_retenu: "une partie", position: 2 },
      { fr: "ainsi", phon: "ka-dhalika", arabic: "كَذَٰلِكَ", is_particle: true, position: 3 },
      { fr: "donne la vie", pos: "verbe", phon: "yuhyi", arabic: "يُحْYِ", word_key: "hyy", is_particle: false, sense_retenu: "donner la vie", position: 4 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 5 },
      { fr: "aux morts", pos: "nom", phon: "al-mawta", arabic: "ٱلْمَوْتَYٰ", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 6 },
      { fr: "et vous montre", pos: "verbe", phon: "wa-yurikum", arabic: "وَيُرِيكُمْ", word_key: "ray", is_particle: false, sense_retenu: "voir", position: 7 },
      { fr: "Ses signes", pos: "nom", phon: "ayatihi", arabic: "ءَايَٰتِهِ.", word_key: "ayt", is_particle: false, sense_retenu: "signe", position: 8 },
      { fr: "afin que", phon: "la'allakum", arabic: "لَعَلَّكُمْ", is_particle: true, position: 9 },
      { fr: "vous raisonniez", pos: "verbe", phon: "ta'qiluna", arabic: "تَعْقِلُونَ", word_key: "eql", is_particle: false, sense_retenu: "comprendre", position: 10 }
    ],
    words: [
      {
        word_key: "qwl", position: 0, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qulna est un accompli 1P de la racine q-w-l. Le Lane's donne « We said ». Le « Nous » de majeste designe Dieu parlant directement. Ce n'est plus Moise qui rapporte — Dieu parle a la premiere personne du pluriel. Le changement de locuteur marque le passage de la description de la vache a l'ordre miraculeux.",
              axe1_verset: "Le verbe qulna ouvre le verset par la parole divine directe. La particule fa (alors) relie ce verset au precedent — apres la revelation du meurtre, Dieu ordonne le miracle. Le « Nous dimes » est l'autorite supreme qui commande l'acte de resurrection. La parole divine est ici un commandement qui produit un effet concret — la resurrection du mort.",
              axe2_voisins: "Les versets 67-71 rapportaient le dialogue par Moise (qala — il dit). Ce verset 73 passe au discours divin direct (qulna — Nous dimes). Le changement souligne l'importance du miracle — ce n'est plus un dialogue sur les attributs de la vache mais un acte de puissance divine.",
              axe3_sourate: "Le « Nous » de majeste (qulna) est utilise dans la sourate al-Baqarah pour les moments decisifs. En 2:30, « Nous dimes aux anges ». En 2:35, « Nous dimes a Adam ». En 2:58, « Nous dimes : Entrez dans cette cite ». La parole divine au pluriel de majeste marque les tournants narratifs.",
              axe4_coherence: "Le verbe qulna (Nous dimes) apparait frequemment dans le Coran pour les commandements divins decisifs. En 21:69, « Nous dimes : O feu, sois fraicheur et paix pour Ibrahim ». La parole divine au pluriel de majeste est toujours suivie d'un effet reel.",
              axe5_frequence: "Pour la mission du khalifa, la parole divine directe est l'autorite supreme. Le khalifa execute les ordres de Dieu sans discussion. Le « Nous dimes » est un ordre qui ne souffre aucun retard — la parole divine est action."
            }
          }
        }
      },
      {
        word_key: "drb", position: 1, sense_chosen: "frapper",
        analysis_axes: {
          sense_chosen: "frapper",
          concept_chosen: "Frappe/Coup",
          concepts: {
            "Frappe/Coup": {
              status: "retenu",
              senses: ["frapper", "battre"],
              proof_ctx: "Le verbe idribuhu est un imperatif 2MP avec pronom 3MS de la racine d-r-b. Le Lane's donne « strike him, hit him, beat him ». Le pronom -hu (le) renvoie au mort. L'imperatif ordonne de frapper le mort avec un morceau de la vache sacrifiee. L'acte physique est le moyen du miracle.",
              axe1_verset: "Le verbe idribuhu est l'ordre central du verset. « Frappez-le avec un morceau d'elle » — l'acte physique de frapper le mort avec un morceau de la vache est le declencheur de la resurrection. Le miracle passe par un acte concret — Dieu n'agit pas dans l'abstrait mais a travers des moyens materiels. La frappe est le pont entre le sacrifice et la resurrection.",
              axe2_voisins: "Le verset 71 rapportait le sacrifice de la vache. Le verset 72 revelait le meurtre. Ce verset 73 ordonne la frappe qui cause la resurrection. La sequence est logique : sacrifice → meurtre revele → resurrection par la frappe. Chaque etape prepare la suivante.",
              axe3_sourate: "La racine d-r-b dans la sourate al-Baqarah couvre plusieurs sens. En 2:26, « Dieu donne des exemples (yadribu amthalan) ». En 2:60, « frappe le rocher avec ton baton ». Le sens de frappe physique dans ce verset est parallele a Moise frappant le rocher — dans les deux cas, la frappe produit un miracle.",
              axe4_coherence: "La racine d-r-b apparait environ 58 fois dans le Coran avec des sens varies (frapper, donner un exemple, voyager). En 2:60, Moise frappe le rocher et l'eau jaillit. En 7:160, meme miracle. La frappe comme declencheur de miracle est un motif coranique — Dieu utilise des moyens physiques pour manifester Sa puissance.",
              axe5_frequence: "Pour la mission du khalifa, la frappe est un acte d'obeissance. Le khalifa execute l'ordre divin — meme quand l'ordre semble irrationnel (frapper un mort). L'obeissance aveugle a l'ordre divin est recompensee par le miracle."
            },
            "Établissement/Institution": {
              status: "nul",
              senses: ["frapper la monnaie", "établir", "dresser une tente", "donner un exemple"],
              proof_ctx: "Le sens d'exemple est un sens frequent de d-r-b dans le Coran. Ici le pronom suffixe -hu et le complement bi-ba'diha indiquent clairement un acte physique de frappe, pas un exemple rhetorique."
            },
            "Déplacement": {
              status: "nul",
              senses: ["voyager"],
              proof_ctx: "Le sens de voyager est un sens derive de d-r-b. Le contexte est clairement celui d'une frappe physique ordonnee par Dieu, pas d'un deplacement."
            }
          }
        }
      },
      {
        word_key: "bed", position: 2, sense_chosen: "une partie",
        analysis_axes: {
          sense_chosen: "une partie",
          concept_chosen: "Partie/Division",
          concepts: {
            "Partie/Division": {
              status: "retenu",
              senses: ["une partie", "certains", "diviser en parties"],
              proof_ctx: "Le mot ba'diha est un nom masculin singulier genitif avec pronom 3FS de la racine b-'-d. Le Lane's donne « a part, a portion, some ». Le pronom feminin -ha renvoie a la vache sacrifiee. Un morceau de la vache est l'instrument du miracle — le mort est frappe avec une partie de la vache pour etre ressuscite.",
              axe1_verset: "Le mot ba'diha est le complement du verbe idribuhu (frappez-le). « Frappez-le avec un morceau d'elle » — la partie suffit pour le miracle, pas besoin de la vache entiere. Le morceau est le lien physique entre le sacrifice et la resurrection. La vache sacrifiee transfere la vie au mort par ce contact.",
              axe2_voisins: "Le verset 71 rapportait le sacrifice complet. Ce verset 73 utilise un morceau — la partie represente le tout. Le sacrifice de la vache trouve ici son sens — il n'etait pas une fin en soi mais un moyen pour le miracle de resurrection.",
              axe3_sourate: "La racine b-'-d dans la sourate al-Baqarah designe la partie. En 2:85, « croyez-vous en une partie du Livre et mecreants d'une autre ? ». La sourate montre que la partie n'est pas le tout — mais dans le cas de la vache, la partie suffit pour le miracle.",
              axe4_coherence: "La racine b-'-d apparait plus de 130 fois dans le Coran. Le mot ba'd designe toujours une portion d'un ensemble plus grand. En 2:253, « Nous avons eleve certains d'entre eux au-dessus des autres ». La partie est definie par son rapport au tout.",
              axe5_frequence: "Pour la mission du khalifa, la partie et le tout sont lies. Le khalifa doit agir avec ce qu'il a — un morceau suffit si Dieu l'ordonne. L'obeissance ne depend pas de la quantite mais de la sincerite."
            }
          }
        }
      },
      {
        word_key: "hyy", position: 4, sense_chosen: "donner la vie",
        analysis_axes: {
          sense_chosen: "donner la vie",
          concept_chosen: "Vie/Vivant",
          concepts: {
            "Vie/Vivant": {
              status: "retenu",
              senses: ["vivre", "vie", "vivant", "donner la vie"],
              proof_ctx: "Le verbe yuhyi est un inaccompli 3MS forme IV de la racine h-y-y. Le Lane's donne « He gives life, He quickens, He revives, He raises to life ». La forme IV causative signifie « faire vivre, donner la vie ». Dieu est le sujet — c'est Lui seul qui peut donner la vie aux morts.",
              axe1_verset: "Le verbe yuhyi est le coeur du miracle. « Ainsi Dieu donne la vie aux morts » — le morceau de la vache est le moyen, mais c'est Dieu qui donne la vie. La resurrection du mort est la preuve supreme de la puissance divine. Le verset generalise — ka-dhalika (ainsi) indique que ce miracle illustre le pouvoir general de Dieu sur la vie et la mort.",
              axe2_voisins: "Les versets 67-71 preparaient le sacrifice. Le verset 72 revelait le meurtre. Ce verset 73 montre la resurrection — le cycle est complet : vie → mort (meurtre) → sacrifice → resurrection. Le verset 74 montrera l'echec du peuple malgre ce miracle.",
              axe3_sourate: "La racine h-y-y dans la sourate al-Baqarah porte le theme de la vie et de la resurrection. En 2:28, « Il vous a donne la vie, puis Il vous fera mourir, puis Il vous redonnera la vie ». En 2:164, les signes de Dieu dans la creation montrent Sa capacite a donner la vie.",
              axe4_coherence: "La racine h-y-y apparait environ 180 fois dans le Coran. Le theme de la resurrection est central — Dieu donne la vie, fait mourir et ressuscite. En 30:50, « regarde les effets de la misericorde de Dieu, comment Il donne la vie (yuhyi) a la terre apres sa mort ». La resurrection de la terre est un signe de la resurrection des corps.",
              axe5_frequence: "Pour la mission du khalifa, la vie est le don supreme de Dieu. Le khalifa doit preserver la vie et reconnaitre que seul Dieu donne et reprend la vie. Le miracle de la resurrection dans le recit de la vache est une preuve de la puissance de Dieu que le khalifa doit mediter."
            }
          }
        }
      },
      {
        word_key: "alh", position: 5, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allahu est le nom divin nominatif de la racine a-l-h. Le Lane's donne « God ». Dieu est le sujet du verbe yuhyi (donner la vie) — c'est Lui qui ressuscite les morts. Le nominatif confirme que Dieu est l'agent actif de la resurrection.",
              axe1_verset: "Le mot Allahu est le sujet de la phrase « Dieu donne la vie aux morts ». La position de Dieu entre le verbe yuhyi et l'objet al-mawta souligne Son role central. C'est Dieu qui agit — ni la vache ni le morceau ne sont la cause de la resurrection. Dieu est la cause premiere de tout miracle.",
              axe2_voisins: "Le verset 72 mentionnait Dieu comme Celui qui fait sortir le cache. Ce verset 73 Le mentionne comme Celui qui donne la vie. La progression montre l'escalade du pouvoir divin — reveler la verite, puis ressusciter les morts.",
              axe3_sourate: "Le nom Allah est omnipresent dans la sourate al-Baqarah. Chaque miracle et chaque evenement est attribue a Dieu. La sourate montre que Dieu est l'acteur principal de l'histoire humaine.",
              axe4_coherence: "Le nom Allah est le mot le plus frequent du Coran. La resurrection des morts est un acte exclusif de Dieu — nul autre ne peut donner la vie. Le Coran repete cette verite pour ancrer la croyance en la resurrection.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source de toute vie et de tout pouvoir. Le khalifa agit au nom de Dieu et reconnait que la vie est un don divin qu'il doit preserver."
            }
          }
        }
      },
      {
        word_key: "mwt", position: 6, sense_chosen: "mort",
        analysis_axes: {
          sense_chosen: "mort",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "tuer", "mortel", "terre morte"],
              proof_ctx: "Le mot al-mawta est un nom masculin pluriel defini accusatif de la racine m-w-t. Le Lane's donne « the dead, those who have died ». Le pluriel defini (les morts) generalise — Dieu ne ressuscite pas seulement ce mort particulier mais les morts en general. L'article defini universalise le miracle.",
              axe1_verset: "Le mot al-mawta est l'objet du verbe yuhyi (donner la vie). « Dieu donne la vie aux morts » — la mort n'est pas une fin definitive pour Dieu. Le miracle de resurrection dans le recit de la vache illustre le pouvoir general de Dieu sur la mort. Le passage du singulier (le mort tue) au pluriel (les morts) generalise le principe.",
              axe2_voisins: "Le verset 72 rapportait le meurtre (qataltum nafsan). Ce verset 73 montre la victoire de Dieu sur la mort. Le cycle meurtre-resurrection montre que les actes humains ne sont pas irreversibles pour Dieu — meme le meurtre peut etre surmonte par la resurrection.",
              axe3_sourate: "La racine m-w-t dans la sourate al-Baqarah traite de la mort et de la resurrection. En 2:28, le cycle vie-mort-resurrection. En 2:56, la mort et la resurrection des enfants d'Israel. En 2:243, les morts que Dieu a ressuscites. La sourate insiste sur le pouvoir de Dieu sur la mort.",
              axe4_coherence: "La racine m-w-t apparait plus de 160 fois dans le Coran. La mort et la resurrection sont un theme central. En 36:78-79, « qui donnera la vie aux ossements desseches ? Dis : Celui qui les a crees la premiere fois ». La capacite de Dieu a ressusciter les morts est une preuve de Sa toute-puissance.",
              axe5_frequence: "Pour la mission du khalifa, la mort est une etape, pas une fin. Le khalifa sait que la mort n'est pas irreversible pour Dieu — cette certitude donne du sens a la mission terrestre. Le khalifa agit sachant qu'il sera ressuscite et juge."
            },
            "Sens isolé/Immobile": {
              status: "nul",
              senses: ["immobile"],
              proof_ctx: "Le sens d'immobilite est un sens derive de m-w-t. Le contexte est clairement celui de la cessation de la vie — al-mawta designe les morts que Dieu ressuscite, pas des objets immobiles."
            }
          }
        }
      },
      {
        word_key: "ray", position: 7, sense_chosen: "voir",
        analysis_axes: {
          sense_chosen: "voir",
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              senses: ["percevoir", "voir"],
              proof_ctx: "Le verbe yurikum est un inaccompli 3MS forme IV avec pronom 2MP de la racine r-'-y. Le Lane's donne « He shows you, He makes you see ». La forme IV causative signifie « faire voir, montrer ». Dieu est le sujet — c'est Lui qui montre Ses signes aux hommes. Le pronom -kum (vous) designe les enfants d'Israel.",
              axe1_verset: "Le verbe yurikum est le second acte de Dieu dans le verset apres yuhyi (donner la vie). Dieu donne la vie aux morts ET montre Ses signes. La resurrection est elle-meme un signe — Dieu montre Sa puissance a travers le miracle. Montrer les signes est un acte pedagogique — Dieu enseigne par les evenements.",
              axe2_voisins: "Le verset 72 montrait Dieu revelant le cache. Ce verset 73 montre Dieu revelant Ses signes a travers la resurrection. La progression va de la revelation de la verite cachee (verset 72) a la demonstration de la puissance divine (verset 73).",
              axe3_sourate: "La racine r-'-y dans la sourate al-Baqarah porte le sens de voir et de montrer. En 2:55, « nous ne te croirons pas tant que nous ne verrons pas Dieu ». En 2:258, Ibrahim montre a son adversaire que Dieu donne la vie. La vision est liee a la preuve.",
              axe4_coherence: "La racine r-'-y apparait plus de 320 fois dans le Coran. La forme IV (montrer) est utilisee quand Dieu fait voir Ses signes. En 53:18, « il a vu les plus grands signes de son Seigneur ». La vision des signes divins est un privilege et une responsabilite.",
              axe5_frequence: "Pour la mission du khalifa, la vision des signes est la base de la foi. Le khalifa doit voir les signes de Dieu dans la creation et agir en consequence. Les signes sont montres pour etre compris et suivis."
            },
            "Jugement/Avis": {
              status: "nul",
              senses: ["opinion", "avis"],
              proof_ctx: "Le sens d'opinion est un autre sens de r-'-y. Ici le verbe yuri forme IV causative signifie « montrer, faire voir » — c'est un acte de demonstration, pas une opinion personnelle."
            }
          }
        }
      },
      {
        word_key: "ayt", position: 8, sense_chosen: "signe",
        analysis_axes: {
          sense_chosen: "signe",
          concept_chosen: "Signe/Preuve",
          concepts: {
            "Signe/Preuve": {
              status: "retenu",
              senses: ["signe", "miracle", "preuve"],
              proof_ctx: "Le mot ayatihi est un nom feminin pluriel genitif avec pronom 3MS de la racine '-y-t. Le Lane's donne « His signs, His proofs, His evidences ». Le pluriel indique que la resurrection n'est pas le seul signe — Dieu montre de nombreux signes. Le pronom -hi renvoie a Dieu — ce sont Ses signes.",
              axe1_verset: "Le mot ayatihi est l'objet du verbe yurikum (Il vous montre). Dieu montre Ses signes a travers le miracle de la resurrection. Les signes sont les preuves de la puissance divine — ils sont destines a convaincre et a guider. Le verset se termine par ta'qiluna (afin que vous raisonniez) — les signes sont faits pour etre compris par la raison.",
              axe2_voisins: "Le verset 72 montrait la revelation du cache. Ce verset 73 montre les signes de la puissance divine. Le verset 74 montrera l'echec du peuple a tirer les lecons de ces signes — leurs coeurs se sont endurcis malgre tout.",
              axe3_sourate: "La racine '-y-t est un des themes majeurs de la sourate al-Baqarah. En 2:99, « Nous avons fait descendre des signes clairs ». En 2:118, « montre-nous un signe ». En 2:164, les signes dans la creation. La sourate montre que les signes divins sont partout mais que beaucoup les ignorent.",
              axe4_coherence: "La racine '-y-t apparait plus de 380 fois dans le Coran. Le mot aya couvre le signe, le miracle et le verset coranique. Les trois sens sont lies — le verset est un signe, le signe est un miracle, le miracle est une preuve. Les signes de Dieu appellent la raison humaine a reconnaitre la verite.",
              axe5_frequence: "Pour la mission du khalifa, les signes de Dieu sont les guides de l'action. Le khalifa lit les signes et comprend le message divin. Les signes sont montres pour que la raison les comprenne — la mission du khalifa est de raisonner sur les signes et d'agir en consequence."
            },
            "Révélation/Parole": {
              status: "probable",
              senses: ["verset"],
              proof_ctx: "Le sens de verset est un sens possible de '-y-t. Dans ce contexte, ayatihi designe les signes de la puissance divine dans la creation (resurrection des morts), pas les versets du Coran. Le sens de signe/preuve est premier ici."
            }
          }
        }
      },
      {
        word_key: "eql", position: 10, sense_chosen: "comprendre",
        analysis_axes: {
          sense_chosen: "comprendre",
          concept_chosen: "Raison/Intelligence",
          concepts: {
            "Raison/Intelligence": {
              status: "retenu",
              senses: ["comprendre", "discernement", "raison", "intelligence"],
              proof_ctx: "Le verbe ta'qiluna est un inaccompli 2MP de la racine '-q-l. Le Lane's donne « you reason, you understand, you use your intellect, you comprehend ». Le verbe designe l'usage actif de la raison pour comprendre les signes divins. L'inaccompli indique une action continue — la raison doit etre constamment exercee.",
              axe1_verset: "Le verbe ta'qiluna cloture le verset par un appel a la raison. Apres le miracle (resurrection), la demonstration (signes) et la pedagogie (montrer), Dieu demande aux hommes de raisonner. La formule la'allakum ta'qiluna (afin que vous raisonniez) est un espoir — Dieu espere que les hommes utiliseront leur raison.",
              axe2_voisins: "Le verset 72 revelait la verite cachee. Ce verset 73 appelle a la raison apres la revelation. Le verset 74 montrera que les coeurs se sont endurcis malgre les signes et l'appel a la raison. La sequence est : signe → appel a la raison → echec du coeur.",
              axe3_sourate: "La racine '-q-l dans la sourate al-Baqarah est un appel recurrent. En 2:44, « ne raisonnez-vous pas ? ». En 2:76, « ne raisonnez-vous pas ? ». La sourate insiste sur l'usage de la raison comme moyen de reconnaitre la verite divine.",
              axe4_coherence: "La racine '-q-l apparait environ 49 fois dans le Coran, toujours sous forme verbale — le Coran ne parle pas de la raison comme concept abstrait mais comme acte de raisonner. En 29:43, « seuls les savants les raisonnent ». La raison est un don divin qui doit etre exerce.",
              axe5_frequence: "Pour la mission du khalifa, la raison est l'outil de comprehension des signes. Le khalifa raisonne sur les signes de Dieu pour guider son action. L'appel a la raison est un appel a la responsabilite — comprendre les signes c'est accepter la charge de la mission."
            },
            "Lien/Entrave": {
              status: "nul",
              senses: ["lier", "entraver"],
              proof_ctx: "Le sens de lier/entraver est un sens etymologique de '-q-l (attacher le chameau). Le contexte est clairement intellectuel — ta'qiluna signifie « vous raisonnez, vous comprenez », pas « vous liez » quelque chose."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:74
  // verse_id=81, analysis_id=442
  // "Puis vos coeurs se sont endurcis apres cela, et ils sont comme
  //  les pierres ou meme plus durs encore. Car il est des pierres
  //  d'ou jaillissent les rivières, d'autres se fendent et l'eau
  //  en sort, et d'autres s'affaissent par crainte de Dieu.
  //  Et Dieu n'est pas insouciant de ce que vous faites."
  // =====================================================
  74: {
    verse_id: 81,
    analysis_id: 442,
    translation_arab: "Puis vos coeurs se sont endurcis apres cela, et ils sont comme les pierres ou meme plus durs en durete. Et certes parmi les pierres il y en a d'ou jaillissent les rivieres, et il y en a qui se fendent et l'eau en sort, et il y en a qui tombent par crainte de Dieu. Et Dieu n'est pas insouciant de ce que vous faites.",
    full_translation: "Puis vos coeurs se sont endurcis apres cela — [ils sont] comme les pierres ou plus durs encore en durete. Car parmi les pierres, il y en a d'ou jaillissent les rivieres, et il y en a qui se fendent et l'eau en sort, et il y en a qui tombent par crainte de Dieu. Et Dieu n'est pas insouciant de ce que vous faites.",
    translation_explanation: `§DEMARCHE§
Ce verset est le plus long et le plus complexe du passage. Il decrit l'endurcissement des coeurs des enfants d'Israel apres les miracles qu'ils ont vus. Le verbe **qasat** est un accompli 3FS de la racine q-s-w. Le Lane's donne « it became hard, it hardened ». Le coeur est le sujet — les coeurs se sont endurcis. Le mot **qulubukum** est un nom feminin pluriel nominatif avec pronom 2MP de la racine q-l-b. Le Lane's donne « your hearts ». Les coeurs des enfants d'Israel sont devenus durs malgre les signes. Le mot **ba'di** est un nom masculin singulier genitif de la racine b-'-d. Le Lane's donne « after ». Le mot situe l'endurcissement dans le temps — apres les miracles. Le mot **ka-l-hijarati** est un nom feminin pluriel defini genitif avec preposition ka de la racine h-j-r. Le Lane's donne « like the stones ». La comparaison des coeurs aux pierres est une image forte de l'insensibilite. Le mot **qaswatan** est un nom feminin singulier accusatif de la racine q-s-w. Le Lane's donne « in hardness, in cruelty ». Le tamyiz (accusatif de specification) precise que la durete est la qualite comparee. Le verbe **yatafajjaru** est un inaccompli 3MS forme V de la racine f-j-r. Le Lane's donne « it gushes forth, it bursts forth ». La forme V (reflexif) signifie « jaillir de soi-meme ». Le mot **al-anharu** est un nom masculin pluriel defini nominatif de la racine n-h-r. Le Lane's donne « the rivers ». Les rivieres jaillissent des pierres. Le verbe **yakhruju** est un inaccompli 3MS de la racine kh-r-j. Le Lane's donne « it comes out, it emerges ». L'eau sort des pierres. Le mot **al-ma'u** est un nom masculin singulier defini nominatif de la racine m-w-h. Le Lane's donne « the water ». L'eau est le symbole de la vie qui sort de la pierre morte. Le mot **ghafil** est un participe actif singulier masculin genitif de la racine gh-f-l. Le Lane's donne « heedless, unmindful, unaware ». Dieu n'est pas insouciant — negation qui affirme Sa vigilance totale. Le verbe **ta'maluna** est un inaccompli 2MP de la racine '-m-l. Le Lane's donne « you do, you act, you work ». Les actes des hommes sont sous la surveillance de Dieu.

§JUSTIFICATION§
**se sont endurcis** — Le sens retenu est « durcir ». Le verbe qasat decrit l'endurcissement du coeur. Pas d'alternative pertinente — la racine q-s-w est specifique a la durete.

**vos coeurs** — Le sens retenu est « coeur ». Le mot qulubukum designe les coeurs comme siege de la sensibilite. L'alternative « retourner » est ecartee car le mot est ici un nom (coeur), pas un verbe (retourner).

**apres** — Le sens retenu est « apres ». Le mot ba'di situe dans le temps. L'alternative « eloignement » est ecartee car le contexte est temporel, pas spatial.

**les pierres** — Le sens retenu est « pierre ». Le mot al-hijarati designe les pierres dans la comparaison. L'alternative « interdit » est ecartee car le contexte est celui de la matiere minerale dure.

**jaillissent** — Le sens retenu est « jaillir ». Le verbe yatafajjaru forme V signifie jaillir avec force. L'alternative « debauche » est ecartee car le contexte est celui de l'eau qui sort de la pierre.

**les rivieres** — Le sens retenu est « riviere ». Le mot al-anharu designe les cours d'eau. L'alternative « jour » est ecartee car le contexte est aquatique.

**sort** — Le sens retenu est « sortir ». Le verbe yakhruju signifie sortir, emerger. L'alternative « impot » est ecartee car le contexte est la sortie de l'eau.

**l'eau** — Le sens retenu est « eau ». Le mot al-ma'u designe l'eau. Pas d'alternative pertinente.

**insouciant** — Le sens retenu est « etre insouciant ». Le mot ghafil au participe actif avec negation signifie que Dieu n'est pas insouciant. Pas d'alternative pertinente.

**vous faites** — Le sens retenu est « agir ». Le verbe ta'maluna designe les actes des hommes. L'alternative « gouverneur » est ecartee car le mot est un verbe, pas un nom.

§CRITIQUE§
**endurcis vs cruels** — Le verbe qasat peut impliquer la cruaute mais le sens premier est la durete physique du coeur. La comparaison avec les pierres confirme que c'est la durete materielle qui est visee — un coeur dur comme la pierre ne repond plus aux signes.
**pierres superieur aux coeurs** — Le verset montre que les pierres sont plus sensibles que les coeurs endurcis des enfants d'Israel. Les pierres laissent jaillir l'eau, se fendent et tombent par crainte de Dieu — les coeurs endurcis ne font rien de tout cela. La comparaison est a l'avantage des pierres.
**trois types de pierres** — Le verset decrit trois reactions des pierres : 1) jaillissement des rivieres (reaction forte), 2) fente et sortie d'eau (reaction moyenne), 3) chute par crainte de Dieu (reaction interieure). Les coeurs endurcis n'ont aucune de ces trois reactions — ils sont inferieurs aux pierres dans leur insensibilite.
**insouciant negation** — La formule « Dieu n'est pas insouciant » est une litote — elle affirme la surveillance totale de Dieu par la negation de son contraire. C'est un avertissement final — meme si les coeurs sont durs, Dieu voit tout et enregistre tout.`,
    segments: [
      { fr: "puis", phon: "thumma", arabic: "ثُمَّ", is_particle: true, position: 0 },
      { fr: "se sont endurcis", pos: "verbe", phon: "qasat", arabic: "قَسَتْ", word_key: "qsw", is_particle: false, sense_retenu: "durcir", position: 1 },
      { fr: "vos coeurs", pos: "nom", phon: "qulubukum", arabic: "قُلُوبُكُم", word_key: "qlb", is_particle: false, sense_retenu: "coeur", position: 2 },
      { fr: "de", phon: "min", arabic: "مِّن۞", is_particle: true, position: 3 },
      { fr: "apres", pos: "nom", phon: "ba'di", arabic: "بَعْدِ", word_key: "baed", is_particle: false, sense_retenu: "après", position: 4 },
      { fr: "cela", phon: "dhalika", arabic: "ذَٰلِكَ", is_particle: true, position: 5 },
      { fr: "elles sont", phon: "fa-hiya", arabic: "فَهِYَ", is_particle: true, position: 6 },
      { fr: "comme les pierres", pos: "nom", phon: "ka-l-hijarati", arabic: "كَٱلْحِجَارَةِ", word_key: "hjr", is_particle: false, sense_retenu: "pierre", position: 7 },
      { fr: "ou", phon: "aw", arabic: "أَوْ", is_particle: true, position: 8 },
      { fr: "plus dures", phon: "ashaddu", arabic: "أَشَدُّ", is_particle: true, position: 9 },
      { fr: "en durete", pos: "nom", phon: "qaswatan", arabic: "قَسْوَةً", word_key: "qsw", is_particle: false, sense_retenu: "durcir", position: 10 },
      { fr: "et certes", phon: "wa-inna", arabic: "وَإِنَّ", is_particle: true, position: 11 },
      { fr: "de", phon: "mina", arabic: "مِنَ", is_particle: true, position: 12 },
      { fr: "les pierres", pos: "nom", phon: "al-hijarati", arabic: "ٱلْحِجَارَةِ", word_key: "hjr", is_particle: false, sense_retenu: "pierre", position: 13 },
      { fr: "certes ce qui", phon: "la-ma", arabic: "لَمَا", is_particle: true, position: 14 },
      { fr: "jaillit", pos: "verbe", phon: "yatafajjaru", arabic: "يَتَفَجَّرُ", word_key: "fjr", is_particle: false, sense_retenu: "jaillir", position: 15 },
      { fr: "de lui", phon: "minhu", arabic: "مِنْهُ", is_particle: true, position: 16 },
      { fr: "les rivieres", pos: "nom", phon: "al-anharu", arabic: "ٱلْأَنْهَٰرُ", word_key: "nhr", is_particle: false, sense_retenu: "rivière", position: 17 },
      { fr: "et certes", phon: "wa-inna", arabic: "وَإِنَّ", is_particle: true, position: 18 },
      { fr: "d'elles", phon: "minha", arabic: "مِنْهَا", is_particle: true, position: 19 },
      { fr: "certes ce qui", phon: "la-ma", arabic: "لَمَا", is_particle: true, position: 20 },
      { fr: "se fend", phon: "yashshaqqaqu", arabic: "يَشَّقَّقُ", is_particle: true, position: 21 },
      { fr: "et en sort", pos: "verbe", phon: "fa-yakhruju", arabic: "فَيَخْرُجُ", word_key: "xrj", is_particle: false, sense_retenu: "sortir", position: 22 },
      { fr: "de lui", phon: "minhu", arabic: "مِنْهُ", is_particle: true, position: 23 },
      { fr: "l'eau", pos: "nom", phon: "al-ma'u", arabic: "ٱلْمَآءُ", word_key: "mwh", is_particle: false, sense_retenu: "eau", position: 24 },
      { fr: "et certes", phon: "wa-inna", arabic: "وَإِنَّ", is_particle: true, position: 25 },
      { fr: "d'elles", phon: "minha", arabic: "مِنْهَا", is_particle: true, position: 26 },
      { fr: "certes ce qui", phon: "la-ma", arabic: "لَمَا", is_particle: true, position: 27 },
      { fr: "tombe", phon: "yahbitu", arabic: "يَهْبِطُ", is_particle: true, position: 28 },
      { fr: "de", phon: "min", arabic: "مِنْ", is_particle: true, position: 29 },
      { fr: "crainte", phon: "khashyati", arabic: "خَشْيَةِ", is_particle: true, position: 30 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 31 },
      { fr: "et", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 32 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 33 },
      { fr: "n'est pas insouciant", pos: "nom", phon: "bi-ghafilin", arabic: "بِغَٰفِلٍ", word_key: "ghfl", is_particle: false, sense_retenu: "être insouciant", position: 34 },
      { fr: "de ce que", phon: "'amma", arabic: "عَمَّا", is_particle: true, position: 35 },
      { fr: "vous faites", pos: "verbe", phon: "ta'maluna", arabic: "تَعْمَلُونَ", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 36 }
    ],
    words: [
      {
        word_key: "qsw", position: 1, sense_chosen: "durcir",
        analysis_axes: {
          sense_chosen: "durcir",
          concept_chosen: "Dureté/Cruauté",
          concepts: {
            "Dureté/Cruauté": {
              status: "retenu",
              senses: ["durcir", "endurcir", "cruauté"],
              proof_ctx: "Le verbe qasat est un accompli 3FS de la racine q-s-w. Le Lane's donne « it became hard, it hardened, it became callous ». Le feminin (qasat) s'accorde avec qulub (coeurs, feminin pluriel brise). Le verbe decrit un processus progressif — les coeurs se sont endurcis avec le temps. La qaswa est le contraire de la khushu' (humilite et receptivite).",
              axe1_verset: "Le verbe qasat ouvre la sentence principale du verset. « Puis vos coeurs se sont endurcis apres cela » — l'endurcissement survient apres les miracles et les signes. La particule thumma (puis) marque un intervalle — l'endurcissement n'est pas immediat mais progressif. Le verset compare ensuite les coeurs aux pierres pour mesurer cette durete — et les coeurs sont declares plus durs que les pierres.",
              axe2_voisins: "Le verset 73 montrait le miracle de la resurrection et l'appel a la raison. Ce verset 74 montre l'echec de cet appel — les coeurs se sont endurcis malgre les signes. La progression est tragique : miracle → appel → echec. Le verset 75 commencera un nouveau theme (l'espoir de croyance).",
              axe3_sourate: "La racine q-s-w n'apparait dans la sourate al-Baqarah que dans ce verset (deux occurrences : qasat et qaswatan). L'endurcissement du coeur est un theme central de la sourate — les enfants d'Israel ont vu les signes mais leurs coeurs se sont endurcis. La sourate oppose la receptivite des croyants a la durete des incredules.",
              axe4_coherence: "La racine q-s-w apparait 13 fois dans le Coran. En 6:43, « mais leurs coeurs se sont endurcis ». En 39:22, « malheur a ceux dont les coeurs sont endurcis au rappel de Dieu ». En 57:16, « que leurs coeurs ne s'endurcissent pas ». L'endurcissement du coeur est un etat spirituel grave qui coupe l'homme de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'endurcissement du coeur est l'ennemi principal. Le khalifa doit garder son coeur tendre et receptif aux signes de Dieu. Les enfants d'Israel dont les coeurs se sont endurcis montrent l'echec de la receptivite — ils ont vu les miracles mais n'ont pas ete touches."
            }
          }
        }
      },
      {
        word_key: "qlb", position: 2, sense_chosen: "coeur",
        analysis_axes: {
          sense_chosen: "coeur",
          concept_chosen: "Coeur/Centre",
          concepts: {
            "Coeur/Centre": {
              status: "retenu",
              senses: ["coeur", "esprit", "intelligence", "milieu"],
              proof_ctx: "Le mot qulubukum est un nom feminin pluriel nominatif avec pronom 2MP de la racine q-l-b. Le Lane's donne « your hearts ». Le pluriel (coeurs) s'adresse a l'ensemble des enfants d'Israel. Le coeur dans le Coran est le siege de la comprehension, de la foi et de la volonte — quand il s'endurcit, il perd sa capacite de recevoir la verite.",
              axe1_verset: "Le mot qulubukum est le sujet du verbe qasat (s'endurcir). « Vos coeurs se sont endurcis » — ce sont les coeurs, pas les corps, qui sont concernes. Le coeur est l'organe de la receptivite spirituelle. Quand il durcit, il ne peut plus recevoir les signes. La comparaison avec les pierres montre que les coeurs endurcis sont devenus plus insensibles que la matiere minerale.",
              axe2_voisins: "Le verset 73 appelait a la raison (ta'qiluna). Ce verset 74 montre que les coeurs sont trop durs pour raisonner. La sequence signe → raison → coeur dur est un echec de la chaine de comprehension. Le coeur dur bloque le processus de reflexion et d'obeissance.",
              axe3_sourate: "La racine q-l-b dans la sourate al-Baqarah est un theme majeur. En 2:7, « Dieu a scelle leurs coeurs ». En 2:10, « dans leurs coeurs il y a une maladie ». En 2:97, « il l'a fait descendre sur ton coeur ». La sourate montre que le coeur est le lieu de la foi ou de l'incredulite.",
              axe4_coherence: "La racine q-l-b apparait environ 170 fois dans le Coran. Le coeur (qalb) est l'organe central de la vie spirituelle. En 22:46, « ce ne sont pas les yeux qui sont aveugles mais les coeurs ». En 50:37, « un rappel pour quiconque a un coeur ». Le coeur determine la relation de l'homme avec Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le coeur est l'organe de la mission. Le khalifa doit avoir un coeur vivant et receptif — pas un coeur endurci. Le coeur endurci ne peut pas remplir la mission du khalifa car il ne recoit plus les signes de Dieu."
            },
            "Retournement/Changement": {
              status: "probable",
              senses: ["retourner", "renverser", "revenir", "transformer", "changer d'état"],
              proof_ctx: "Le sens de retournement est le sens premier de q-l-b — retourner, changer. Le coeur (qalb) tire son nom de son instabilite — il se retourne (yataqallab) entre les etats. Les coeurs des enfants d'Israel se sont retournes de la receptivite a la durete. Le changement d'etat est implicite dans qasat qulubukum — les coeurs qui etaient vivants sont devenus durs."
            }
          }
        }
      },
      {
        word_key: "baed", position: 4, sense_chosen: "après",
        analysis_axes: {
          sense_chosen: "après",
          concept_chosen: "Postériorité",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["après", "ensuite"],
              proof_ctx: "Le mot ba'di est un nom masculin singulier genitif de la racine b-'-d. Le Lane's donne « after, subsequent to ». Le genitif est regi par la preposition min (apres). La formule min ba'di dhalika signifie « apres cela » — apres les miracles et les signes que les enfants d'Israel ont vus.",
              axe1_verset: "Le mot ba'di situe l'endurcissement dans le temps. « Apres cela » — apres le sacrifice de la vache, la resurrection du mort, la revelation du meurtrier. L'endurcissement est d'autant plus grave qu'il survient apres les miracles. Le demonstratif dhalika (cela) renvoie a tout ce qui precede — les versets 67-73.",
              axe2_voisins: "Les versets 67-73 racontaient les miracles. Ce verset 74 montre la reaction du peuple apres ces miracles — l'endurcissement. Le mot ba'di cree le lien causal — malgre les miracles (avant), les coeurs se sont endurcis (apres). Le contraste est saisissant.",
              axe3_sourate: "La racine b-'-d dans la sourate al-Baqarah sert a situer les evenements dans le temps. En 2:52, « apres cela vous avez pardonne ». En 2:64, « apres cela vous vous etes detournes ». La sourate utilise ba'd pour marquer les retournements du peuple apres les graces divines.",
              axe4_coherence: "La racine b-'-d apparait plus de 200 fois dans le Coran. Le mot ba'd (apres) structure la narration en reliant les evenements. La sequence « apres le miracle, l'endurcissement » est un schema recurrent — les peuples voient les signes puis retournent a l'incredulite.",
              axe5_frequence: "Pour la mission du khalifa, l'apres est le temps de l'epreuve. Le khalifa doit maintenir sa foi apres les graces comme apres les epreuves. Les enfants d'Israel ont echoue dans l'apres — ils n'ont pas su maintenir la receptivite apres les miracles."
            }
          }
        }
      },
      {
        word_key: "hjr", position: 7, sense_chosen: "pierre",
        analysis_axes: {
          sense_chosen: "pierre",
          concept_chosen: "Pierre/Matériau",
          concepts: {
            "Pierre/Matériau": {
              status: "retenu",
              senses: ["roche", "pierre"],
              proof_ctx: "Le mot al-hijarati est un nom feminin pluriel defini genitif de la racine h-j-r. Le Lane's donne « the stones, the rocks ». Le pluriel designe les pierres en general comme classe de matiere. La preposition ka (comme) introduit la comparaison — les coeurs sont comme les pierres. Deux occurrences dans le verset : la premiere dans la comparaison, la seconde dans la description des proprietes des pierres.",
              axe1_verset: "Le mot al-hijarati est le point de comparaison. Les coeurs sont compares aux pierres — mais le verset montre que les pierres sont superieures car elles reagissent (jaillissement, fente, chute). Le paradoxe est que la matiere inerte est plus sensible que le coeur humain endurci. Les pierres ont trois reactions : jaillir, se fendre, tomber — les coeurs n'en ont aucune.",
              axe2_voisins: "Le verset 73 montrait la puissance de Dieu (resurrection). Ce verset 74 montre l'insensibilite du peuple comparee a la sensibilite des pierres. Le contraste entre la puissance divine et l'insensibilite humaine est le theme du verset.",
              axe3_sourate: "La racine h-j-r dans la sourate al-Baqarah porte principalement le sens de pierre. En 2:60, Moise frappe le rocher et douze sources jaillissent. Le parallele est direct — les pierres laissent jaillir l'eau quand Moise les frappe, mais les coeurs restent durs malgre les miracles.",
              axe4_coherence: "La racine h-j-r apparait environ 20 fois dans le Coran. En 11:82, les pierres sont un chatiment. En 105:4, les pierres d'argile detruisent l'armee de l'elephant. La pierre est ambivalente — elle peut etre source de vie (eau) ou instrument de destruction (chatiment).",
              axe5_frequence: "Pour la mission du khalifa, la pierre est un miroir inverse du coeur. Le khalifa doit avoir un coeur plus sensible que la pierre — un coeur qui reagit aux signes de Dieu. Les trois reactions des pierres (jaillir, se fendre, tomber par crainte) sont les reactions que le coeur du khalifa doit avoir."
            }
          }
        }
      },
      {
        word_key: "fjr", position: 15, sense_chosen: "jaillir",
        analysis_axes: {
          sense_chosen: "jaillir",
          concept_chosen: "Éclatement",
          concepts: {
            "Éclatement": {
              status: "retenu",
              senses: ["jaillir"],
              proof_ctx: "Le verbe yatafajjaru est un inaccompli 3MS forme V de la racine f-j-r. Le Lane's donne « it gushes forth, it bursts out ». La forme V (reflexif intensif) signifie « jaillir de soi-meme avec force ». Les rivieres jaillissent de certaines pierres — la pierre laisse passer l'eau avec force et abondance.",
              axe1_verset: "Le verbe yatafajjaru decrit la premiere reaction des pierres. « Parmi les pierres, il y en a d'ou jaillissent les rivieres » — c'est la reaction la plus forte. Le jaillissement est un mouvement violent de l'interieur vers l'exterieur. La pierre qui laisse jaillir les rivieres est plus sensible que le coeur endurci qui ne laisse rien passer.",
              axe2_voisins: "Le verset 73 mentionnait la resurrection des morts. Ce verset 74 montre que meme les pierres sont plus vivantes que les coeurs endurcis. Le jaillissement de l'eau est un signe de vie dans la matiere inerte — les coeurs endurcis sont morts a toute vie spirituelle.",
              axe3_sourate: "La racine f-j-r dans la sourate al-Baqarah porte le sens de jaillissement. En 2:60, les sources jaillissent du rocher frappe par Moise. Le parallele avec ce verset 74 est direct — les pierres laissent jaillir l'eau, les coeurs endurcis ne laissent rien sortir.",
              axe4_coherence: "La racine f-j-r apparait environ 18 fois dans le Coran. En 54:12, « Nous fimes jaillir (fajjarna) la terre en sources ». En 76:6, « une source d'ou boivent les serviteurs de Dieu, la faisant jaillir ». Le jaillissement est un acte de generosite divine — l'eau de vie sort de la terre par la volonte de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le jaillissement est le signe de la vitalite. Le coeur du khalifa doit etre comme la pierre qui laisse jaillir les rivieres — un coeur genereux et receptif d'ou sort le bien. Le coeur endurci est un coeur mort qui ne laisse rien jaillir."
            },
            "Commencement/Lumière": {
              status: "nul",
              senses: ["aube", "aurore"],
              proof_ctx: "Le sens d'aube est le sens de fajr (nom). Ici le verbe yatafajjaru forme V signifie « jaillir avec force » — c'est l'acte physique de jaillissement de l'eau, pas le lever du jour."
            },
            "Transgression": {
              status: "nul",
              senses: ["débauche"],
              proof_ctx: "Le sens de debauche (fujur) est un autre sens de f-j-r. Le contexte est clairement celui du jaillissement de l'eau des pierres, pas de la transgression morale."
            }
          }
        }
      },
      {
        word_key: "nhr", position: 17, sense_chosen: "rivière",
        analysis_axes: {
          sense_chosen: "rivière",
          concept_chosen: "Eau/Cours d'eau",
          concepts: {
            "Eau/Cours d'eau": {
              status: "retenu",
              senses: ["rivière", "fleuve", "couler", "abondance"],
              proof_ctx: "Le mot al-anharu est un nom masculin pluriel defini nominatif de la racine n-h-r. Le Lane's donne « the rivers, the streams ». Le pluriel defini designe les rivieres en general — l'eau abondante qui coule en continu. Les rivieres sont ce qui jaillit des pierres — la premiere et la plus abondante des trois reactions des pierres.",
              axe1_verset: "Le mot al-anharu est le sujet qui jaillit des pierres. Les rivieres jaillissent de certaines pierres — c'est un spectacle de puissance et d'abondance. La riviere est un cours d'eau abondant et continu, pas un simple filet. La comparaison montre que les pierres peuvent produire l'abondance la ou les coeurs endurcis ne produisent rien.",
              axe2_voisins: "Le verset 73 montrait la resurrection des morts. Ce verset 74 montre les pierres qui produisent des rivieres. La vie (eau) sort de la matiere inerte (pierre) — comme la vie sort de la mort dans le verset precedent. Le parallele est structurel.",
              axe3_sourate: "La racine n-h-r dans la sourate al-Baqarah est liee au Paradis. En 2:25, « des jardins sous lesquels coulent les rivieres ». En 2:266, « des rivieres coulent dessous ». Les rivieres sont le symbole de la recompense divine — l'abondance et la vie eternelle.",
              axe4_coherence: "La racine n-h-r apparait plus de 54 fois dans le Coran, principalement pour les rivieres du Paradis. En 47:15, « des rivieres d'eau non alteree, des rivieres de lait, de vin et de miel ». Les rivieres sont le signe de la generosite divine — l'eau qui coule sans interruption.",
              axe5_frequence: "Pour la mission du khalifa, les rivieres sont le signe de l'abondance divine. Le khalifa doit etre comme la pierre d'ou jaillissent les rivieres — un intermediaire entre la grace divine et la creation. Le coeur endurci est un barrage qui bloque cette grace."
            }
          }
        }
      },
      {
        word_key: "xrj", position: 22, sense_chosen: "sortir",
        analysis_axes: {
          sense_chosen: "sortir",
          concept_chosen: "Sortie/Émergence",
          concepts: {
            "Sortie/Émergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "émerger", "produire"],
              proof_ctx: "Le verbe yakhruju est un inaccompli 3MS de la racine kh-r-j. Le Lane's donne « it comes out, it emerges, it exits ». L'eau sort des pierres — c'est la deuxieme reaction des pierres. La sortie de l'eau est un mouvement de l'interieur de la pierre vers l'exterieur.",
              axe1_verset: "Le verbe yakhruju decrit la deuxieme reaction des pierres. « D'autres se fendent et l'eau en sort » — la pierre se fend (yashshaqqaqu) puis l'eau emerge (yakhruju). Cette reaction est moins spectaculaire que le jaillissement (yatafajjaru) mais elle produit quand meme de l'eau. La pierre qui se fend est plus sensible que le coeur qui reste ferme dans sa durete.",
              axe2_voisins: "Le verset 72 utilisait mukhrijun (Celui qui fait sortir) pour Dieu. Ce verset 74 utilise yakhruju pour l'eau. Le parallele montre que la sortie est un acte divin — Dieu fait sortir la verite comme l'eau sort de la pierre.",
              axe3_sourate: "La racine kh-r-j dans la sourate al-Baqarah porte le sens de sortie et d'emergence. En 2:22, Dieu fait sortir les fruits. En 2:72, Dieu fait sortir ce qui etait cache. En 2:167, « si seulement nous pouvions sortir ». La sortie est toujours un passage d'un etat a un autre.",
              axe4_coherence: "La racine kh-r-j apparait plus de 180 fois dans le Coran. La sortie est un mouvement fondamental — du cache au visible, de l'interieur a l'exterieur. En 36:33, Dieu fait sortir le grain de la terre. La sortie est un acte de creation et de revelation.",
              axe5_frequence: "Pour la mission du khalifa, la sortie est le passage de l'intention a l'action. Le khalifa fait sortir le bien de son coeur vers le monde. Le coeur endurci est celui d'ou rien ne sort — ni bien ni compassion ni obeissance."
            }
          }
        }
      },
      {
        word_key: "mwh", position: 24, sense_chosen: "eau",
        analysis_axes: {
          sense_chosen: "eau",
          concept_chosen: "Eau/Liquide",
          concepts: {
            "Eau/Liquide": {
              status: "retenu",
              senses: ["eau"],
              proof_ctx: "Le mot al-ma'u est un nom masculin singulier defini nominatif de la racine m-w-h. Le Lane's donne « the water ». L'eau est l'element qui sort des pierres — elle est le symbole de la vie dans la matiere inerte. L'article defini (al-) designe l'eau en general — toute eau qui sort de la pierre.",
              axe1_verset: "Le mot al-ma'u est le sujet qui sort de la pierre fendue. « D'autres se fendent et l'eau en sort » — l'eau est la vie qui emerge de la matiere morte. La pierre est plus sensible que le coeur endurci car elle laisse sortir l'eau. L'eau dans ce verset est le contraire de la durete — la fluidite contre la rigidite.",
              axe2_voisins: "Le verset 73 montrait la vie donnee aux morts. Ce verset 74 montre l'eau qui sort des pierres — l'eau est le symbole de la vie. Le parallele entre la resurrection (verset 73) et la sortie de l'eau (verset 74) renforce le theme de la vie qui vainc la mort.",
              axe3_sourate: "La racine m-w-h dans la sourate al-Baqarah est liee a la vie. En 2:22, « Il fait descendre du ciel l'eau ». En 2:60, « douze sources jaillirent » du rocher. L'eau est le signe de la grace divine qui donne la vie.",
              axe4_coherence: "La racine m-w-h apparait environ 63 fois dans le Coran. En 21:30, « de l'eau Nous avons fait toute chose vivante ». L'eau est le principe de la vie — elle est la condition de l'existence biologique. La sortie de l'eau de la pierre est un miracle quotidien dans la nature.",
              axe5_frequence: "Pour la mission du khalifa, l'eau est le symbole de la grace qui donne la vie. Le khalifa doit etre un canal de la grace divine — comme la pierre qui laisse couler l'eau. Le coeur endurci est un coeur sec qui ne laisse pas passer la grace."
            }
          }
        }
      },
      {
        word_key: "alh", position: 31, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allahi est le nom divin au genitif de la racine a-l-h. Le Lane's donne « God ». Dieu est mentionne deux fois dans ce verset : d'abord dans « par crainte de Dieu (khashyati Allahi) » puis dans « Dieu n'est pas insouciant ». La premiere mention montre les pierres qui craignent Dieu — la seconde montre Dieu qui surveille les hommes.",
              axe1_verset: "Le mot Allahi dans « khashyati Allahi » (crainte de Dieu) est au genitif comme complement de khashya (crainte). Les pierres tombent par crainte de Dieu — c'est la troisieme reaction des pierres, la plus etonnante car elle implique une conscience de Dieu dans la matiere inerte. Le Coran attribue aux pierres une forme de sensibilite que les coeurs endurcis ont perdue.",
              axe2_voisins: "Le verset 72 mentionnait Dieu qui fait sortir le cache. Le verset 73 Le mentionnait comme Celui qui donne la vie. Ce verset 74 Le mentionne comme objet de la crainte des pierres et comme surveillant des actes humains. La progression montre Dieu sous trois aspects : revelateur, donneur de vie, surveillant.",
              axe3_sourate: "Le nom Allah est le fil conducteur de la sourate al-Baqarah. En 2:19, « Dieu entoure les incredules ». En 2:235, « Dieu sait ce qu'il y a dans vos ames ». La sourate montre que rien n'echappe a Dieu.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La crainte de Dieu (khashya) est une qualite des croyants et meme de la creation. En 59:21, « si Nous avions fait descendre ce Coran sur une montagne, tu l'aurais vue s'humilier et se fendre par crainte de Dieu ». La montagne craint Dieu comme la pierre dans ce verset.",
              axe5_frequence: "Pour la mission du khalifa, la crainte de Dieu est le moteur de la mission. Le khalifa agit par crainte et amour de Dieu. Les pierres craignent Dieu mais les coeurs endurcis ne Le craignent pas — le khalifa doit avoir plus de crainte que la pierre."
            }
          }
        }
      },
      {
        word_key: "ghfl", position: 34, sense_chosen: "être insouciant",
        analysis_axes: {
          sense_chosen: "être insouciant",
          concept_chosen: "Insouciance/Négligence",
          concepts: {
            "Insouciance/Négligence": {
              status: "retenu",
              senses: ["être insouciant", "négliger", "oublier"],
              proof_ctx: "Le mot ghafilin est un participe actif singulier masculin genitif indefini de la racine gh-f-l. Le Lane's donne « heedless, unmindful, negligent, unaware ». Le participe est precede de la negation ma et de la preposition bi — « wa-ma Allahu bi-ghafilin » signifie « Dieu n'est pas du tout insouciant ». La negation est renforcee par la preposition bi qui donne une negation categorique.",
              axe1_verset: "Le mot ghafilin cloture le verset par un avertissement. « Dieu n'est pas insouciant de ce que vous faites » — la litote affirme la surveillance totale de Dieu. Meme si les coeurs sont durs et insensibles, Dieu voit tout. L'avertissement est une menace voilee — les actes seront juges meme si les coeurs ne les regrettent pas.",
              axe2_voisins: "Le verset 73 appelait a la raison. Ce verset 74 constate l'echec de l'appel et conclut par l'avertissement divin. La sequence est : appel → echec → avertissement. Le verset 75 ouvrira un nouveau theme mais l'avertissement reste en suspens.",
              axe3_sourate: "La racine gh-f-l dans la sourate al-Baqarah n'apparait qu'ici. L'insouciance est niee pour Dieu — Il n'est jamais insouciant. La sourate utilise la negation pour affirmer la vigilance divine absolue. L'avertissement est dirige vers les enfants d'Israel dont les coeurs se sont endurcis.",
              axe4_coherence: "La racine gh-f-l apparait environ 20 fois dans le Coran. En 7:179, « ceux-la sont les insouciants (ghafilun) ». En 12:3, « tu etais auparavant parmi les insouciants ». La ghafla (insouciance) est un etat blam — elle empeche de voir les signes de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'insouciance est une faute. Le khalifa ne doit pas etre ghafil (insouciant) des signes de Dieu. La certitude que Dieu n'est pas insouciant est un rappel permanent — les actes du khalifa sont surveilles et seront juges."
            }
          }
        }
      },
      {
        word_key: "eml", position: 36, sense_chosen: "agir",
        analysis_axes: {
          sense_chosen: "agir",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ta'maluna est un inaccompli 2MP de la racine '-m-l. Le Lane's donne « you do, you act, you work ». Le verbe designe les actes des enfants d'Israel — tout ce qu'ils font est sous la surveillance de Dieu. L'inaccompli indique la continuite — Dieu surveille en permanence leurs actes.",
              axe1_verset: "Le verbe ta'maluna est le dernier mot du verset et de tout le passage (versets 67-74). « Ce que vous faites » — la formule englobe tous les actes : la tergiversation, le meurtre, la dissimulation, l'endurcissement du coeur. Rien de tout cela n'echappe a Dieu. Le mot final est un avertissement universel.",
              axe2_voisins: "Le verset 73 se terminait par « afin que vous raisonniez ». Ce verset 74 se termine par « ce que vous faites ». La progression va de la raison a l'action — les actes sont le resultat de la reflexion (ou de son absence). Les enfants d'Israel n'ont pas raisonne et leurs actes le montrent.",
              axe3_sourate: "La racine '-m-l dans la sourate al-Baqarah est tres frequente. En 2:25, « ceux qui ont cru et fait les bonnes oeuvres ». En 2:134, « chacun recevra ce qu'il a acquis ». La sourate lie la foi aux actes — la croyance sans les actes est vaine.",
              axe4_coherence: "La racine '-m-l apparait plus de 350 fois dans le Coran. Le mot 'amal designe l'oeuvre humaine qui sera jugee. En 99:7-8, « quiconque fait le poids d'un atome de bien le verra, et quiconque fait le poids d'un atome de mal le verra ». Les actes sont la mesure du jugement.",
              axe5_frequence: "Pour la mission du khalifa, les actes sont la realisation de la mission. Le khalifa est juge sur ses actes, pas sur ses intentions. La certitude que Dieu surveille chaque acte est le fondement de la responsabilite du khalifa."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le sens de gouverneur ('amil) est un sens derive de '-m-l. Ici le verbe ta'maluna signifie « vous faites, vous agissez » — c'est l'action en general, pas le gouvernement."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// DAILY PHRASES — for new roots in V71-74
// =====================================================
const dailyPhrases = [
  // thwr (id=625) — soulever
  { analysis_id: 625, phrases: [
    { sense: "soulever", arabic: "لَا ذَلُولٌ تُثِيرُ ٱلْأَرْضَ", phon: "la dhalulun tuthiru al-arda", french: "Non dressee a retourner la terre." },
    { sense: "soulever", arabic: "أَثَارُوا ٱلْأَرْضَ وَعَمَرُوهَا", phon: "atharuu al-arda wa-'amaruuha", french: "Ils retournerent la terre et la peuplerent." },
    { sense: "soulever", arabic: "تُثِيرُ ٱلسَّحَابَ فَيَبْسُطُهُ فِي ٱلسَّمَاءِ", phon: "tuthiru al-sahaba fa-yabsutuhu fi al-sama'i", french: "Elle souleve les nuages et Il les etend dans le ciel." }
  ]},
  // sqy (id=584) — irriguer
  { analysis_id: 584, phrases: [
    { sense: "irriguer", arabic: "وَلَا تَسْقِي ٱلْحَرْثَ", phon: "wa-la tasqi al-hartha", french: "Et elle n'irrigue pas le champ." },
    { sense: "abreuver", arabic: "فَسَقَى لَهُمَا", phon: "fa-saqa lahuma", french: "Alors il abreuva pour elles deux." },
    { sense: "donner à boire", arabic: "وَسَقَاهُمْ رَبُّهُمْ شَرَابًا طَهُورًا", phon: "wa-saqahum rabbuhum sharaban tahuuran", french: "Et leur Seigneur leur donnera a boire une boisson pure." }
  ]},
  // hrth (id=626) — champ
  { analysis_id: 626, phrases: [
    { sense: "champ", arabic: "وَلَا تَسْقِي ٱلْحَرْثَ", phon: "wa-la tasqi al-hartha", french: "Et elle n'irrigue pas le champ." },
    { sense: "labourer", arabic: "مَن كَانَ يُرِيدُ حَرْثَ ٱلْآخِرَةِ", phon: "man kana yuridu hartha al-akhirati", french: "Quiconque desire la recolte de l'au-dela." },
    { sense: "cultiver", arabic: "نِسَاؤُكُمْ حَرْثٌ لَّكُمْ", phon: "nisa'ukum harthun lakum", french: "Vos femmes sont un champ pour vous." }
  ]},
  // kwd (id=630) — imminence
  { analysis_id: 630, phrases: [
    { sense: "être sur le point de", arabic: "وَمَا كَادُوا يَفْعَلُونَ", phon: "wa-ma kaduu yaf'aluna", french: "Et peu s'en fallut qu'ils ne le fissent pas." },
    { sense: "presque", arabic: "يَكَادُ زَيْتُهَا يُضِيءُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌ", phon: "yakadu zaytuna yudi'u wa-law lam tamsashu narun", french: "Son huile eclaire presque meme si nul feu ne la touche." },
    { sense: "faillir", arabic: "تَكَادُ ٱلسَّمَاوَاتُ يَتَفَطَّرْنَ", phon: "takadu al-samawatu yatafattarna", french: "Les cieux sont sur le point de se fendre." }
  ]},
  // qtl (id=556) — tuer
  { analysis_id: 556, phrases: [
    { sense: "tuer", arabic: "وَإِذْ قَتَلْتُمْ نَفْسًا", phon: "wa-idh qataltum nafsan", french: "Et quand vous tuates une ame." },
    { sense: "combattre", arabic: "وَقَاتِلُوا فِي سَبِيلِ ٱللَّهِ", phon: "wa-qatiluu fi sabili Allahi", french: "Et combattez dans le chemin de Dieu." },
    { sense: "meurtre", arabic: "مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ", phon: "man qatala nafsan bi-ghayri nafsin", french: "Quiconque tue une ame sans droit." }
  ]},
  // ktm (id=471) — dissimuler
  { analysis_id: 471, phrases: [
    { sense: "dissimuler", arabic: "وَٱللَّهُ مُخْرِجٌ مَّا كُنتُمْ تَكْتُمُونَ", phon: "wa-Allahu mukhrijun ma kuntum taktumuna", french: "Et Dieu fait sortir ce que vous dissimuliez." },
    { sense: "cacher", arabic: "وَلَا تَكْتُمُوا ٱلشَّهَادَةَ", phon: "wa-la taktumuu al-shahadah", french: "Et ne cachez pas le temoignage." },
    { sense: "taire", arabic: "الَّذِينَ يَكْتُمُونَ مَا أَنزَلَ ٱللَّهُ مِنَ ٱلْكِتَابِ", phon: "alladhina yaktumuna ma anzala Allahu mina al-kitabi", french: "Ceux qui taisent ce que Dieu a fait descendre du Livre." }
  ]},
  // qsw (id=638) — durete
  { analysis_id: 638, phrases: [
    { sense: "durcir", arabic: "ثُمَّ قَسَتْ قُلُوبُكُم مِّن بَعْدِ ذَٰلِكَ", phon: "thumma qasat qulubukum min ba'di dhalika", french: "Puis vos coeurs se sont endurcis apres cela." },
    { sense: "endurcir", arabic: "فَوَيْلٌ لِّلْقَاسِيَةِ قُلُوبُهُم", phon: "fa-waylun li-l-qasiyati qulubuhum", french: "Malheur a ceux dont les coeurs sont endurcis." },
    { sense: "cruauté", arabic: "فَبِمَا نَقْضِهِم مِّيثَاقَهُمْ قَسَتْ قُلُوبُهُمْ", phon: "fa-bima naqdihim mithaqahum qasat qulubuhum", french: "A cause de leur rupture du pacte, leurs coeurs se sont endurcis." }
  ]},
  // fjr (id=587) — jaillir
  { analysis_id: 587, phrases: [
    { sense: "jaillir", arabic: "يَتَفَجَّرُ مِنْهُ ٱلْأَنْهَارُ", phon: "yatafajjaru minhu al-anharu", french: "Les rivieres en jaillissent." },
    { sense: "jaillir", arabic: "وَفَجَّرْنَا ٱلْأَرْضَ عُيُونًا", phon: "wa-fajjarna al-arda 'uyunan", french: "Et Nous fimes jaillir la terre en sources." },
    { sense: "jaillir", arabic: "وَفَجَّرْنَا خِلَالَهُمَا نَهَرًا", phon: "wa-fajjarna khilalahuma naharan", french: "Et Nous fimes jaillir entre les deux une riviere." }
  ]},
  // mwh (id=1885) — eau
  { analysis_id: 1885, phrases: [
    { sense: "eau", arabic: "فَيَخْرُجُ مِنْهُ ٱلْمَاءُ", phon: "fa-yakhruju minhu al-ma'u", french: "Et l'eau en sort." },
    { sense: "eau", arabic: "وَجَعَلْنَا مِنَ ٱلْمَاءِ كُلَّ شَيْءٍ حَيٍّ", phon: "wa-ja'alna mina al-ma'i kulla shay'in hayyin", french: "Et de l'eau Nous avons fait toute chose vivante." },
    { sense: "eau", arabic: "أَنزَلَ مِنَ ٱلسَّمَاءِ مَاءً", phon: "anzala mina al-sama'i ma'an", french: "Il fait descendre du ciel de l'eau." }
  ]},
  // ghfl (id=642) — insouciance
  { analysis_id: 642, phrases: [
    { sense: "être insouciant", arabic: "وَمَا ٱللَّهُ بِغَافِلٍ عَمَّا تَعْمَلُونَ", phon: "wa-ma Allahu bi-ghafilin 'amma ta'maluna", french: "Et Dieu n'est pas insouciant de ce que vous faites." },
    { sense: "négliger", arabic: "وَلَا تَكُن مِّنَ ٱلْغَافِلِينَ", phon: "wa-la takun mina al-ghafilina", french: "Et ne sois pas parmi les insouciants." },
    { sense: "oublier", arabic: "لَقَدْ كُنتَ فِي غَفْلَةٍ مِّنْ هَذَا", phon: "laqad kunta fi ghaflatin min hadha", french: "Tu etais certes insouciant de cela." }
  ]}
];

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  console.log(`  analysis_id=${data.analysis_id} (preset)`);

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
      console.log(`  OK VWA ${word.word_key} v${data.verse_id}`);
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
    console.log(`  OK verse V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — TERMINE (${okCount} OK, ${errCount} erreurs)`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [78, 79, 80, 81];
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
// DAILY PHRASES
// =====================================================
async function insertDailyPhrases() {
  console.log('\n=== DAILY PHRASES ===');

  let totalOk = 0, totalSkip = 0, totalErr = 0;

  for (const root of dailyPhrases) {
    const { count } = await supabase
      .from('word_daily')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', root.analysis_id);

    if (count && count > 0) {
      console.log(`  analysis_id=${root.analysis_id} — ${count} phrases existent deja, skip`);
      totalSkip += root.phrases.length;
      continue;
    }

    for (const p of root.phrases) {
      const { error } = await supabase.from('word_daily').insert({
        analysis_id: root.analysis_id,
        sense: p.sense,
        arabic: p.arabic,
        phon: p.phon,
        french: p.french
      });
      if (error) {
        console.error(`  ERR daily id=${root.analysis_id}:`, error.message);
        totalErr++;
      } else {
        totalOk++;
      }
    }
    console.log(`  analysis_id=${root.analysis_id} — 3 phrases inserees`);
  }

  console.log(`DAILY PHRASES — ${totalOk} OK, ${totalSkip} skip, ${totalErr} erreurs`);
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 71 A 74 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 71; v <= 74; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V71-74 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
