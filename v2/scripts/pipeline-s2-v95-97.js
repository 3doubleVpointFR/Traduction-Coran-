const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 95 A 97
// verse_id=102 (2:95), verse_id=103 (2:96), verse_id=104 (2:97)
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:95
  // verse_id=102, analysis_id=462
  // "They will never wish for it because of what their hands have
  //  sent forth. God knows the wrongdoers."
  // =====================================================
  95: {
    verse_id: 102,
    analysis_id: 462,
    translation_arab: "Et ils ne le souhaiteront jamais a cause de ce que leurs mains ont envoye en avant. Et Dieu connait les injustes.",
    full_translation: "Et ils ne le souhaiteront jamais a cause de ce que leurs mains ont envoye en avant [comme oeuvres]. Et Dieu connait les injustes.",
    translation_explanation: `§DEMARCHE§
Ce verset poursuit le defi lance aux enfants d'Israel de souhaiter la mort s'ils sont veridiques. Le verbe **yatamannawhu** est un inaccompli 3MP forme V avec pronom 3MS de la racine m-n-y. Le Lane's donne « they will not wish for it, they will not desire it ». La forme V (tafa''ala) exprime le souhait reitere — ils ne le souhaiteront pas, meme s'ils le pouvaient. La particule **abadan** est un nom de la racine a-b-d. Le Lane's donne « never, not ever, for eternity ». La negation est absolue et eternelle — ils ne le souhaiteront a aucun moment du futur. Le mot **qaddamat** est un accompli 3FS forme II de la racine q-d-m. Le Lane's donne « she/it sent forth, she/it put forward ». La forme II (fa''ala) indique l'intensite — leurs mains ont activement envoye en avant. Le mot **aydihim** est un pluriel de yad avec pronom 3MP de la racine y-d-y. Le Lane's donne « their hands ». Les mains sont la metonymie de l'action — ce que leurs mains ont fait. Le nom **Allahu** est le nom propre de la divinite de la racine a-l-h. Le Lane's donne « God ». Dieu est le sujet de la connaissance. Le verbe **'alimun** est un adjectif singulier de la racine '-l-m. Le Lane's donne « knowing, all-knowing ». Dieu connait — Sa connaissance est parfaite et totale. Le nom **bi-l-zalimina** est un participe actif pluriel defini de la racine z-l-m avec preposition bi. Le Lane's donne « the wrongdoers, those who place things out of their proper place ». Les injustes sont ceux qui deplacent les choses — ici, ils refusent de souhaiter la mort alors qu'ils pretendent etre les amis exclusifs de Dieu.

§JUSTIFICATION§
**souhaiteront** — Le sens retenu est « souhaiter ». Le verbe yatamannawhu designe le souhait impossible. L'alternative « sperme » est ecartee car le contexte est celui du desir, pas de la biologie.

**jamais** — Le sens retenu est « jamais ». Le mot abadan indique la perpetuite de la negation. C'est le seul concept disponible pour cette racine.

**envoye en avant** — Le sens retenu est « avancer ». Le verbe qaddamat designe ce que les mains ont mis en avant comme oeuvres. L'alternative « ancien » est ecartee car le verbe est ici une forme II active, pas un adjectif.

**mains** — Le sens retenu est « main ». Le mot aydihim designe les mains comme instrument d'action. C'est le seul concept pertinent dans la racine y-d-y.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah designe la divinite unique.

**connait** — Le sens retenu est « savoir ». L'adjectif 'alimun qualifie Dieu — Il est le Connaissant. L'alternative « monde » est ecartee car le mot est un adjectif qualificatif, pas un nom.

**injustes** — Le sens retenu est « etre injuste ». Le participe al-zalimina designe ceux qui commettent l'injustice. L'alternative « tenebres » est ecartee car le contexte est moral, pas physique.

§CRITIQUE§
**refus de souhaiter la mort** — Le verset affirme que les enfants d'Israel ne souhaiteront jamais la mort. Le defi du verset 94 (« souhaitez la mort si vous etes veridiques ») recoit ici sa reponse definitive : ils ne le feront jamais. La raison est ce que leurs mains ont envoye en avant — leurs oeuvres les condamnent et ils le savent.
**mains comme metonymie** — L'expression « ce que leurs mains ont envoye en avant » est une metonymie coranique recurrente pour les oeuvres. Les mains representent l'action, et ce qui est « envoye en avant » est ce qui precede l'homme dans l'au-dela.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 0 },
      { fr: "ils ne le souhaiteront pas", pos: "verbe", phon: "la yatamannawhu", arabic: "لَن يَتَمَنَّوْهُ", word_key: "mny", is_particle: false, sense_retenu: "souhaiter", position: 1 },
      { fr: "jamais", pos: "nom", phon: "abadan", arabic: "أَبَدًۢا", word_key: "abd", is_particle: false, sense_retenu: "jamais", position: 2 },
      { fr: "a cause de ce que", phon: "bi-ma", arabic: "بِمَا", is_particle: true, position: 3 },
      { fr: "ont envoye en avant", pos: "verbe", phon: "qaddamat", arabic: "قَدَّمَتْ", word_key: "qdm", is_particle: false, sense_retenu: "avancer", position: 4 },
      { fr: "leurs mains", pos: "nom", phon: "aydihim", arabic: "أَيْدِيهِمْ", word_key: "ydy", is_particle: false, sense_retenu: "main", position: 5 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 6 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 7 },
      { fr: "connait", pos: "adjectif", phon: "'alimun", arabic: "عَلِيمٌۢ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 8 },
      { fr: "les injustes", pos: "nom", phon: "bi-l-zalimina", arabic: "بِٱلظَّٰلِمِينَ", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 9 }
    ],
    words: [
      {
        word_key: "mny", position: 1, sense_chosen: "souhaiter",
        analysis_axes: {
          concept_chosen: "Désir/Espérance",
          concepts: {
            "Désir/Espérance": {
              status: "retenu",
              senses: ["souhaiter", "désirer", "espérer"],
              proof_ctx: "Le verbe yatamannawhu est un inaccompli 3MP forme V avec pronom 3MS de la racine m-n-y. Le Lane's donne « they will not wish for it, they will not desire it ». La forme V (tamannaa) designe le souhait et le desir interieur — exprimer un voeu, une esperance. Le pronom suffixe -hu renvoie a la mort mentionnee au verset precedent.",
              axe1_verset: "Le verbe yatamannawhu est le coeur du verset — ils ne le souhaiteront jamais. Le souhait de la mort est le test de sincerite propose au verset 94 : si vous etes les amis exclusifs de Dieu, souhaitez la mort. Le refus de souhaiter la mort prouve que leur pretention est fausse. Le souhait est lie a la certitude — celui qui est certain de sa destinee heureuse ne craint pas la mort.",
              axe2_voisins: "Le verset 94 lancait le defi de souhaiter la mort. Ce verset 95 affirme qu'ils ne le feront jamais. Le verset 96 montrera qu'au contraire, ils sont les plus avides de vivre. La progression montre l'ecart entre la pretention (amis de Dieu) et la realite (attaches a la vie).",
              axe3_sourate: "La racine m-n-y dans la sourate al-Baqarah traite des faux souhaits et des esperances vaines. En 2:78, « ils ne font que conjecturer (amaaniyy) ». En 2:111, « ce sont leurs esperances (amaaniyyuhum) ». La sourate montre que les souhaits des enfants d'Israel sont des illusions — ils esperent sans fondement et refusent le test de sincerite.",
              axe4_coherence: "La racine m-n-y apparait 20 fois dans le Coran. Le souhait (tamannaa) est souvent associe aux faux espoirs. En 4:123, « ce n'est pas selon vos souhaits (amaaniyy) ni les souhaits des gens du Livre ». Le souhait vain est l'illusion de celui qui pretend sans agir. En 57:14, les hypocrites regretteront — « vous avez ete seduits par vos esperances ».",
              axe5_frequence: "Pour la mission du khalifa, le souhait doit correspondre a l'action. Le khalifa qui pretend etre proche de Dieu doit etre pret a accepter les consequences de cette proximite. Les enfants d'Israel souhaitent les privileges sans accepter les tests — c'est une trahison du principe meme du souhait sincere."
            },
            "Semence": {
              status: "nul",
              senses: ["sperme"],
              proof_ctx: "Le sens de semence est un sens biologique de m-n-y. Le contexte est clairement celui du souhait et du desir, pas de la procreation."
            }
          }
        }
      },
      {
        word_key: "abd", position: 2, sense_chosen: "jamais",
        analysis_axes: {
          concept_chosen: "Perpétuité/Durée",
          concepts: {
            "Perpétuité/Durée": {
              status: "retenu",
              senses: ["éternité", "toujours", "jamais"],
              proof_ctx: "Le mot abadan est un nom accusatif singulier de la racine a-b-d. Le Lane's donne « ever, always, perpetually, never (with negation) ». L'accusatif adverbial (abadan) avec la negation lan signifie « jamais ». La perpetuite de la negation est absolue — ils ne le souhaiteront a aucun moment futur.",
              axe1_verset: "Le mot abadan renforce la negation lan — ils ne le souhaiteront jamais. La perpetuite est le sceau de la refutation — ce n'est pas un refus momentane mais un refus eternel. La raison est donnee ensuite : ce que leurs mains ont envoye en avant. Leurs oeuvres passees rendent le souhait de la mort impossible pour eux.",
              axe2_voisins: "Le verset 94 lancait le defi — souhaitez la mort. Ce verset 95 repond — jamais. Le verset 96 confirmera en montrant qu'ils sont les plus avides de vivre. L'adverbe abadan ferme definitivement la possibilite du souhait.",
              axe3_sourate: "La racine a-b-d dans la sourate al-Baqarah designe la perpetuite. En 2:162, « ils y demeureront eternellement (khalidina fiha), le chatiment ne sera pas allegue et ils n'auront pas de repit ». La sourate utilise abadan pour les verites definitives — l'eternite du chatiment et l'impossibilite du souhait de la mort.",
              axe4_coherence: "La racine a-b-d apparait 28 fois dans le Coran. Abadan avec negation signifie « jamais » — c'est une negation definitive et irrevocable. En 62:7, le meme defi est repete — « ils ne le souhaiteront jamais (la yatamannawnahu abadan) ». Le verset de la sourate al-Jumu'a confirme la perpetuite du refus.",
              axe5_frequence: "Pour la mission du khalifa, la perpetuite du refus est un avertissement. Le khalifa qui refuse definitivement la verite se place en position irremediable. Le « jamais » coranique signifie que le refus a depasse le point de non-retour."
            }
          }
        }
      },
      {
        word_key: "qdm", position: 4, sense_chosen: "avancer",
        analysis_axes: {
          concept_chosen: "Antériorité/Établissement",
          concepts: {
            "Antériorité/Établissement": {
              status: "retenu",
              senses: ["précéder", "ancien", "pied", "avancer"],
              proof_ctx: "Le verbe qaddamat est un accompli 3FS forme II de la racine q-d-m. Le Lane's donne « she/it sent forth, she/it put forward, she/it advanced ». La forme II (qaddama) signifie envoyer en avant, faire preceder — ce que les mains ont mis en avant comme oeuvres. Le feminin (qaddamat) s'accorde avec aydihim (mains, feminin en arabe).",
              axe1_verset: "Le verbe qaddamat designe les oeuvres envoyees en avant — ce que les mains ont prepare pour l'au-dela. C'est la cause du refus de souhaiter la mort — ils savent ce qu'ils ont envoye en avant et cela les condamne. L'expression « ma qaddamat aydihim » est une construction causale — la raison est dans les oeuvres passees.",
              axe2_voisins: "Le verset 94 lancait le defi. Ce verset 95 donne la raison du refus — les oeuvres envoyees en avant. Le verset 96 montrera leur attachement a la vie. Les oeuvres sont le pont entre le refus du verset 95 et l'avidite du verset 96.",
              axe3_sourate: "La racine q-d-m dans la sourate al-Baqarah traite de ce qui precede et de ce qui est envoye en avant. En 2:110, « ce que vous envoyez en avant (tuqaddimu) pour vous-memes de bien, vous le trouverez aupres de Dieu ». La sourate montre que les oeuvres precedent l'homme — elles sont deja la quand il arrive.",
              axe4_coherence: "La racine q-d-m apparait 32 fois dans le Coran. L'expression « ma qaddamat aydihim » (ce que leurs mains ont envoye en avant) revient en 2:95, 3:182, 8:51, 22:10. C'est une formule coranique pour les oeuvres qui attendent l'homme dans l'au-dela. Les mains et l'envoi en avant sont indissociables — les oeuvres sont les bagages de l'au-dela.",
              axe5_frequence: "Pour la mission du khalifa, les oeuvres envoyees en avant sont le bilan de la mission. Le khalifa est juge sur ce que ses mains ont envoye en avant. Les enfants d'Israel refusent la mort car ils savent que leur bilan est mauvais."
            }
          }
        }
      },
      {
        word_key: "alh", position: 7, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite de la racine a-l-h. Le Lane's donne « God, the One True God ». Dieu est le sujet de la connaissance des injustes. Le nominatif indique qu'Il est l'agent — c'est Dieu qui sait, pas un autre."
            },
            "Détresse": {
              status: "nul",
              senses: ["être perplexe", "se lamenter"],
              proof_ctx: "Le sens de detresse est un sens marginal de a-l-h. Le contexte est clairement le nom propre de Dieu."
            }
          }
        }
      },
      {
        word_key: "elm", position: 8, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "certitude", "enseignement", "connaître", "être informé", "savoir", "savant"],
              proof_ctx: "Le mot 'alimun est un adjectif singulier nominatif de la racine '-l-m. Le Lane's donne « knowing, all-knowing, cognizant ». L'adjectif 'alim qualifie Dieu — Il est le Connaissant. Avec la preposition bi, la construction signifie « connaissant des injustes » — Dieu connait leurs oeuvres et leurs intentions.",
              axe1_verset: "Le mot 'alimun cloture le verset par la connaissance divine des injustes. Apres avoir affirme que les enfants d'Israel ne souhaiteront jamais la mort, le verset ajoute que Dieu connait les injustes. La connaissance divine est la garantie que personne n'echappe au jugement — meme sans souhaiter la mort, ils sont connus.",
              axe2_voisins: "Le verset 94 lancait le defi. Ce verset 95 conclut par la connaissance divine. Le verset 96 montrera l'avidite pour la vie. La connaissance de Dieu est le fil qui lie les trois versets — Dieu sait qu'ils ne souhaiteront pas la mort, Il sait qu'ils sont avides de vivre, Il voit ce qu'ils font.",
              axe3_sourate: "La racine '-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:29, « Il est de toute chose Connaissant ». En 2:77, « ne savent-ils pas que Dieu sait ce qu'ils cachent et ce qu'ils montrent ? ». La sourate montre que la connaissance divine est totale et que rien n'echappe a Dieu.",
              axe4_coherence: "La racine '-l-m apparait plus de 800 fois dans le Coran. La formule « Allahu 'alimun bi-l-zalimina » est un avertissement recurrent — Dieu connait les injustes. En 3:140, « Dieu connait les injustes ». La connaissance divine des injustes est a la fois un avertissement et une consolation — les victimes savent que Dieu voit.",
              axe5_frequence: "Pour la mission du khalifa, la connaissance de Dieu est le fondement du jugement. Le khalifa agit en sachant que Dieu sait tout. Les injustes sont connus de Dieu — aucune dissimulation ne peut les proteger."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["univers", "monde", "ensemble des créatures", "les mondes"],
              proof_ctx: "Le sens de monde est un sens nominal de '-l-m. Le contexte est clairement l'adjectif 'alim (connaissant), pas le nom 'alam (monde)."
            }
          }
        }
      },
      {
        word_key: "zlm", position: 9, sense_chosen: "etre injuste",
        analysis_axes: {
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["oppresseur", "opprimer", "injustice", "être injuste"],
              proof_ctx: "Le mot al-zalimina est un participe actif pluriel masculin genitif defini de la racine z-l-m. Le Lane's donne « the wrongdoers, those who commit injustice, those who place things out of their proper place ». La racine z-l-m porte le sens fondamental de placer les choses hors de leur place. Les injustes sont ceux qui pretendent etre les amis de Dieu sans l'etre — ils se placent dans une position qui ne leur revient pas.",
              axe1_verset: "Le mot al-zalimina qualifie les enfants d'Israel dans ce contexte — ceux qui pretendent etre les amis exclusifs de Dieu mais refusent de souhaiter la mort. L'injustice est dans le decalage entre la pretention et la realite. Pretendre un statut qu'on ne merite pas est une forme d'injustice — c'est placer les choses hors de leur place.",
              axe2_voisins: "Le verset 94 lancait le defi aux pretendus amis de Dieu. Ce verset 95 les qualifie d'injustes. Le verset 96 montrera leur avidite pour la vie. L'injustice est la cause profonde de leur comportement — ils veulent les privileges sans les responsabilites.",
              axe3_sourate: "La racine z-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:51, « vous avez adore le veau — vous etiez injustes ». En 2:54, « vous vous etes fait du tort (zalamtum anfusakum) ». La sourate montre que l'injustice est avant tout envers soi-meme — ceux qui rejettent la verite se font du tort.",
              axe4_coherence: "La racine z-l-m apparait plus de 300 fois dans le Coran. L'injustice est le concept-clef du jugement — les injustes sont ceux qui deplacent les choses. En 11:101, « ils ne se sont fait du tort qu'a eux-memes ». L'injustice envers soi est la forme la plus profonde — rejeter la verite c'est se placer hors de la voie.",
              axe5_frequence: "Pour la mission du khalifa, l'injustice est le contraire de la mission. Le khalifa place les choses a leur place — c'est la definition meme de la justice. Les injustes sont ceux qui pervertissent l'ordre voulu par Dieu."
            },
            "Obscurité/Ténèbres": {
              status: "probable",
              senses: ["ténèbres", "obscurité"],
              proof_ctx: "Le sens de tenebres est un sens physique de z-l-m. Le lien avec l'injustice est dans l'obscurite morale — l'injuste est dans les tenebres. Le contexte ici est moral — les tenebres sont l'arriere-plan de l'injustice."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:96
  // verse_id=103, analysis_id=463
  // "You will find them the most eager of people for life — even more
  //  than the polytheists. One of them wishes to live a thousand years,
  //  but it would not save him from punishment even if he lived.
  //  God sees what they do."
  // =====================================================
  96: {
    verse_id: 103,
    analysis_id: 463,
    translation_arab: "Et tu les trouveras les plus avides des gens pour la vie, et plus avides encore que les associateurs. Chacun d'eux souhaite vivre mille ans. Mais meme s'il vivait, cela ne l'eloignerait pas du chatiment. Et Dieu voit ce qu'ils font.",
    full_translation: "Et tu les trouveras certes les plus avides des gens pour la vie — et [plus avides] encore que ceux qui associent. Chacun d'eux souhaite qu'il puisse vivre mille ans. Mais cela ne l'eloignerait pas du chatiment [meme] s'il vivait [autant]. Et Dieu voit ce qu'ils oeuvrent.",
    translation_explanation: `§DEMARCHE§
Ce verset revele l'avidite des enfants d'Israel pour la vie, plus grande encore que celle des associateurs. Le verbe **latajidannahum** est un inaccompli 2MS forme I avec lam de serment et nun de confirmation de la racine w-j-d. Le Lane's donne « you will surely find them, you will certainly discover them to be ». Le lam et le nun renforcent la certitude — tu les trouveras certainement. Le nom **ahrasa** est un elatif de harasa de la racine h-r-s. Le Lane's donne « the most eager, the most avid, the most covetous ». L'elatif exprime le superlatif — les plus avides de tous. Le nom **al-nasi** est un nom collectif de la racine n-w-s. Le Lane's donne « the people, humankind ». Les gens sont le groupe de reference — parmi tous les gens, les enfants d'Israel sont les plus avides. Le nom **hayatin** est un nom feminin singulier genitif de la racine h-y-y. Le Lane's donne « life, living ». La vie dans ce monde est l'objet de leur avidite. La particule **wa-min** est une preposition. Le pronom **alladhina** est un pronom relatif. Le verbe **ashrakuu** est un accompli 3MP forme IV de la racine sh-r-k — les associateurs. Le verbe **yawaddu** est un inaccompli 3MS de la racine w-d-d. Le Lane's donne « he wishes, he would like, he desires ». Le souhait est individuel — chacun d'eux souhaite. Le mot **ahaduhum** est un nom avec pronom 3MP de la racine a-h-d. Le Lane's donne « one of them ». Le pronom 3MP designe les enfants d'Israel. Le verbe **yu'ammara** est un inaccompli passif 3MS forme II de la racine '-m-r. Le Lane's donne « that he be given a long life, that he live long ». La forme II passive (yu'ammara) signifie « qu'on lui donne une longue vie ». Le nom **alfa** est un nom de la racine a-l-f. Le Lane's donne « a thousand ». Mille ans est une hyperbole pour la longevite maximale. Le nom **sanatin** est un nom feminin singulier genitif de la racine s-n-w. Le Lane's donne « year ». Les annees mesurent le temps souhaite. Le pronom **huwa** est un pronom. Le verbe **bi-muzahzihihi** est un participe actif forme II negatif avec preposition de la racine z-h-z-h. Le Lane's donne « removing him, pushing him away, saving him from ». La forme de la racine redoublee (z-h-z-h) exprime l'eloignement force. La preposition min indique l'eloignement du chatiment. Le nom **al-'adhabi** est un nom de la racine '-dh-b — le chatiment. Le verbe **yawaddu** est un inaccompli de la racine w-d-d relie au souhait. La particule **an** introduit la proposition souhaitee. Le verbe **yu'ammara** est un inaccompli passif. Le nom **Allahu** est le nom propre de la divinite. Le nom **basirun** est un adjectif de la racine b-s-r. Le Lane's donne « seeing, all-seeing, perceiving ». Dieu voit ce qu'ils font. Le verbe **ya'maluna** est un inaccompli 3MP de la racine '-m-l. Le Lane's donne « they do, they work, they act ». Les oeuvres sont visibles a Dieu.

§JUSTIFICATION§
**trouveras** — Le sens retenu est « trouver ». Le verbe latajidannahum designe la decouverte de leur etat. C'est le seul concept pour cette racine.

**avides** — Le sens retenu est « etre avide ». L'elatif ahrasa designe le degre supreme de l'avidite. C'est le seul concept pour cette racine.

**gens** — Le sens retenu est « gens ». Le nom al-nasi designe l'humanite comme reference. L'alternative « voir de loin » est ecartee car le contexte est collectif, pas visuel.

**vie** — Le sens retenu est « vie ». Le nom hayatin designe la vie terrestre. L'alternative « saluer » est ecartee car le contexte est existentiel, pas social.

**souhaite** — Le sens retenu est « souhaiter ». Le verbe yawaddu designe le souhait individuel. C'est le seul concept pour cette racine.

**chacun d'eux** — Le sens retenu est « un ». Le mot ahaduhum designe un individu parmi eux. L'alternative « unicite » est ecartee car le contexte est numerique, pas theologique.

**vivre** — Le sens retenu est « vie ». Le verbe yu'ammara designe la longevite souhaitee. L'alternative « construire » est ecartee car le contexte est la duree de vie, pas la construction.

**mille** — Le sens retenu est « millier ». Le nom alfa designe un nombre hyperbolique. L'alternative « unir » est ecartee car le contexte est numerique.

**ans** — Le sens retenu est « annee ». Le nom sanatin mesure le temps. C'est le seul concept pour cette racine.

**eloignerait** — Le sens retenu est « eloigner ». Le participe muzahzihihi designe l'acte d'ecarter du chatiment. C'est le seul concept pour cette racine.

**oeuvrent** — Le sens retenu est « agir ». Le verbe ya'maluna designe les actes. C'est le seul concept retenu.

**voit** — Le sens retenu est « voir ». L'adjectif basirun qualifie Dieu comme Celui qui voit. L'alternative « peau » est ecartee car le contexte est la perception divine.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah designe la divinite unique.

§CRITIQUE§
**plus avides que les associateurs** — Le verset compare les enfants d'Israel aux associateurs (mushrikun) — et les trouve encore plus avides de vivre. Cette comparaison est devastatrice car les associateurs n'ont pas la meme connaissance de l'au-dela. Les enfants d'Israel, qui possedent la Torah et connaissent la promesse divine, sont plus attaches a la vie que ceux qui n'ont pas de revelation. La connaissance n'a pas produit le detachement — elle a aggrave l'attachement.
**mille ans ne suffiront pas** — Le souhait de vivre mille ans est une hyperbole qui revele la profondeur de l'avidite. Mais meme mille ans ne sauveraient pas du chatiment. La longevite ne resout pas le probleme fondamental — seules les oeuvres comptent.`,
    segments: [
      { fr: "et tu les trouveras", pos: "verbe", phon: "wa-latajidannahum", arabic: "وَلَتَجِدَنَّهُمْ", word_key: "wjd", is_particle: false, sense_retenu: "trouver", position: 0 },
      { fr: "les plus avides", pos: "nom", phon: "ahrasa", arabic: "أَحْرَصَ", word_key: "hrs", is_particle: false, sense_retenu: "etre avide", position: 1 },
      { fr: "des gens", pos: "nom", phon: "al-nasi", arabic: "ٱلنَّاسِ", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 2 },
      { fr: "pour", phon: "'ala", arabic: "عَلَىٰ", is_particle: true, position: 3 },
      { fr: "la vie", pos: "nom", phon: "hayatin", arabic: "حَيَوٰةٍ", word_key: "hyy", is_particle: false, sense_retenu: "vie", position: 4 },
      { fr: "et plus que", phon: "wa-min", arabic: "وَمِنَ", is_particle: true, position: 5 },
      { fr: "ceux qui", phon: "alladhina", arabic: "ٱلَّذِينَ", is_particle: true, position: 6 },
      { fr: "ont associe", phon: "ashrakuu", arabic: "أَشْرَكُوا۟", is_particle: true, position: 7 },
      { fr: "souhaite", pos: "verbe", phon: "yawaddu", arabic: "يَوَدُّ", word_key: "wdd", is_particle: false, sense_retenu: "souhaiter", position: 8 },
      { fr: "chacun d'eux", pos: "nom", phon: "ahaduhum", arabic: "أَحَدُهُمْ", word_key: "ahd", is_particle: false, sense_retenu: "un", position: 9 },
      { fr: "si seulement", phon: "law", arabic: "لَوْ", is_particle: true, position: 10 },
      { fr: "il vivait", pos: "verbe", phon: "yu'ammaru", arabic: "يُعَمَّرُ", word_key: "emr", is_particle: false, sense_retenu: "vie", position: 11 },
      { fr: "mille", pos: "nom", phon: "alfa", arabic: "أَلْفَ", word_key: "alf", is_particle: false, sense_retenu: "millier", position: 12 },
      { fr: "ans", pos: "nom", phon: "sanatin", arabic: "سَنَةٍ", word_key: "snw", is_particle: false, sense_retenu: "annee", position: 13 },
      { fr: "et ce n'est pas", phon: "wa-ma huwa", arabic: "وَمَا هُوَ", is_particle: true, position: 14 },
      { fr: "ce qui l'eloignerait", pos: "nom", phon: "bi-muzahzihihi", arabic: "بِمُزَحْزِحِهِ", word_key: "zhzh", is_particle: false, sense_retenu: "eloigner", position: 15 },
      { fr: "du", phon: "mina", arabic: "مِنَ", is_particle: true, position: 16 },
      { fr: "chatiment", phon: "al-'adhabi", arabic: "ٱلْعَذَابِ", is_particle: true, position: 17 },
      { fr: "qu'il vive", pos: "verbe", phon: "an yu'ammara", arabic: "أَن يُعَمَّرَ", word_key: "emr", is_particle: false, sense_retenu: "vie", position: 18 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 19 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 20 },
      { fr: "voit", pos: "adjectif", phon: "basirun", arabic: "بَصِيرٌۢ", word_key: "bsr", is_particle: false, sense_retenu: "voir", position: 21 },
      { fr: "ce que", phon: "bi-ma", arabic: "بِمَا", is_particle: true, position: 22 },
      { fr: "ils oeuvrent", pos: "verbe", phon: "ya'maluna", arabic: "يَعْمَلُونَ", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 23 }
    ],
    words: [
      {
        word_key: "wjd", position: 0, sense_chosen: "trouver",
        analysis_axes: {
          concept_chosen: "Découverte/Existence",
          concepts: {
            "Découverte/Existence": {
              status: "retenu",
              senses: ["trouver", "exister", "rencontrer"],
              proof_ctx: "Le verbe latajidannahum est un inaccompli 2MS avec lam de serment et nun de confirmation de la racine w-j-d. Le Lane's donne « you will certainly find them, you will surely discover them ». Le verbe wajada designe la decouverte d'un etat de fait — tu trouveras qu'ils sont les plus avides. Le lam et le nun double renforcent la certitude prophetique.",
              axe1_verset: "Le verbe latajidannahum ouvre le verset par une certitude prophetique — tu les trouveras certainement. La decouverte n'est pas une surprise mais une confirmation divine. Dieu informe le Prophete de l'etat reel des enfants d'Israel. La trouvaille est un devoilement — ce qui etait cache (leur avidite) est mis a nu.",
              axe2_voisins: "Le verset 95 affirmait qu'ils ne souhaiteront jamais la mort. Ce verset 96 revele pourquoi — ils sont les plus avides de vivre. Le verset 97 changera de sujet vers Jibril. La decouverte du verset 96 est la preuve empirique du refus du verset 95.",
              axe3_sourate: "La racine w-j-d dans la sourate al-Baqarah traite de la decouverte et de l'existence. En 2:110, « ce que vous envoyez en avant de bien, vous le trouverez (tajiduhu) aupres de Dieu ». La sourate utilise la trouvaille pour reveler les realites cachees.",
              axe4_coherence: "La racine w-j-d apparait 107 fois dans le Coran. Le verbe wajada peut signifier trouver, decouvrir, exister. En 18:86, « il trouva (wajadaha) qu'elle se couchait dans une source boueuse ». La trouvaille est le moment de la verite — on decouvre ce qui est reellement.",
              axe5_frequence: "Pour la mission du khalifa, la decouverte est le debut de la responsabilite. Le khalifa qui decouvre l'etat reel des gens doit agir en consequence. La trouvaille prophetique est un avertissement pour tous."
            }
          }
        }
      },
      {
        word_key: "nws", position: 2, sense_chosen: "gens",
        analysis_axes: {
          concept_chosen: "Humanité/Peuple",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["êtres humains", "peuple", "gens"],
              proof_ctx: "Le mot al-nasi est un nom collectif genitif defini de la racine n-w-s. Le Lane's donne « the people, mankind, humankind ». Le al-nas designe l'ensemble des gens comme reference — les enfants d'Israel sont les plus avides parmi tous les gens. Le genitif est regi par ahrasa (le plus avide de...).",
              axe1_verset: "Le mot al-nasi est le groupe de reference — parmi tous les gens, les enfants d'Israel sont au sommet de l'avidite. La comparaison est universelle — ils ne sont pas juste avides, ils sont les plus avides de tous les humains. Le superlatif ahrasa al-nasi est devastateur — il les place au-dessus meme des associateurs dans l'attachement a la vie.",
              axe2_voisins: "Le verset 95 parlait des injustes. Ce verset 96 les compare a l'humanite entiere. Les gens sont le fond sur lequel se detache l'avidite exceptionnelle des enfants d'Israel.",
              axe3_sourate: "La racine n-w-s dans la sourate al-Baqarah designe l'humanite. En 2:8, « parmi les gens (al-nas) il y a ceux qui disent nous croyons ». En 2:13, « croyez comme les gens (al-nas) ont cru ». La sourate utilise al-nas comme reference universelle.",
              axe4_coherence: "La racine n-w-s apparait 241 fois dans le Coran. Le al-nas est le terme generique pour l'humanite. En 114:1-6, la sourate al-Nas utilise le mot trois fois — Seigneur des gens, Roi des gens, Dieu des gens.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont le champ d'action de la mission. Le khalifa agit parmi les gens et pour les gens. L'avidite des enfants d'Israel les separe du reste des gens par le degre de leur attachement."
            },
            "Perception/Visibilité": {
              status: "nul",
              senses: ["être visible", "voir de loin"],
              proof_ctx: "Le sens de perception est un sens secondaire de n-w-s. Le contexte est clairement collectif — les gens, pas la vue."
            }
          }
        }
      },
      {
        word_key: "hrs", position: 1, sense_chosen: "etre avide",
        analysis_axes: {
          concept_chosen: "Avidité/Désir intense",
          concepts: {
            "Avidité/Désir intense": {
              status: "retenu",
              senses: ["convoiter", "être avide", "désirer ardemment", "zèle"],
              proof_ctx: "Le mot ahrasa est un elatif de la racine h-r-s. Le Lane's donne « the most covetous, the most eager, the most avid ». L'elatif (af'ala) exprime le superlatif absolu — les plus avides de tous. La racine h-r-s porte le sens d'un desir intense et persistant qui depasse la mesure normale.",
              axe1_verset: "Le mot ahrasa est le diagnostic central du verset — ils sont les plus avides. L'elatif est renforce par la comparaison avec les associateurs (wa-min alladhina ashrakuu). Leur avidite depasse celle de ceux qui n'ont pas de revelation — paradoxe absolu. Le souhait de vivre mille ans illustre le degre de cette avidite.",
              axe2_voisins: "Le verset 95 affirmait le refus de souhaiter la mort. Ce verset 96 explique ce refus par l'avidite pour la vie. Le lien est causal — ils refusent la mort car ils sont avides de vivre. L'avidite est la racine du refus.",
              axe3_sourate: "La racine h-r-s apparait 2 fois dans la sourate al-Baqarah — en 2:96 et en 2:189. En 2:189, « la piete n'est pas de venir aux maisons par l'arriere ». La sourate montre des formes differentes d'avidite et de desir — l'avidite pour la vie et l'empressement dans les rites.",
              axe4_coherence: "La racine h-r-s apparait 9 fois dans le Coran. En 12:103, « et la plupart des gens, meme si tu es avide (harasta), ne sont pas croyants ». L'avidite peut etre positive (desirer la foi des gens) ou negative (desirer la vie). En 4:129, « vous ne pourrez etre equitables entre vos femmes meme si vous etes avides (harastum) ».",
              axe5_frequence: "Pour la mission du khalifa, l'avidite pour la vie terrestre est un obstacle a la mission. Le khalifa qui est avide de vivre perd de vue l'au-dela. Les enfants d'Israel illustrent le piege de l'avidite — posseder la revelation sans la vivre."
            }
          }
        }
      },
      {
        word_key: "hyy", position: 4, sense_chosen: "vie",
        analysis_axes: {
          concept_chosen: "Vie/Vivant",
          concepts: {
            "Vie/Vivant": {
              status: "retenu",
              senses: ["vivre", "vie", "vivant", "donner la vie"],
              proof_ctx: "Le nom hayatin est un nom feminin singulier genitif indefini de la racine h-y-y. Le Lane's donne « life, living, existence ». Le tanwin genitif (hayatin) avec la preposition 'ala signifie « pour la vie ». L'indefini (hayatin) sans al- designe la vie en general, pas une vie specifique — ils sont avides de toute vie.",
              axe1_verset: "Le mot hayatin est l'objet de l'avidite — ils sont les plus avides pour la vie. La vie terrestre est ce qu'ils veulent prolonger a tout prix. Le paradoxe est que la revelation devrait detacher de la vie terrestre en ouvrant la perspective de l'au-dela. Leur avidite montre que la revelation n'a pas produit son effet.",
              axe2_voisins: "Le verset 95 parlait du refus de la mort. Ce verset 96 parle de l'avidite pour la vie — ce sont les deux faces de la meme piece. Le refus de la mort est l'expression negative de l'avidite pour la vie.",
              axe3_sourate: "La racine h-y-y dans la sourate al-Baqarah traite de la vie et de la mort. En 2:28, « comment pouvez-vous rejeter Dieu alors que vous etiez morts et Il vous a donne la vie ? ». En 2:73, « Dieu donne la vie aux morts ». La sourate montre que la vie est un don de Dieu — s'y accrocher c'est oublier le Donneur.",
              axe4_coherence: "La racine h-y-y apparait 184 fois dans le Coran. La vie (hayat) est un theme central — la vie terrestre est ephemere, la vie de l'au-dela est la vraie vie. En 29:64, « la vie de l'au-dela est la vraie vie (la-hiya al-hayawan) ». L'avidite pour la vie terrestre est un aveuglement sur la nature de la vie.",
              axe5_frequence: "Pour la mission du khalifa, la vie est un terrain d'action, pas un but en soi. Le khalifa utilise la vie pour accomplir sa mission — il ne s'y accroche pas. Les enfants d'Israel ont fait de la vie le but au lieu du moyen."
            },
            "Salutation/Pudeur": {
              status: "nul",
              senses: ["pudeur", "saluer"],
              proof_ctx: "Le sens de salutation est un sens derive de h-y-y. Le contexte est clairement existentiel — la vie, pas la salutation."
            }
          }
        }
      },
      {
        word_key: "wdd", position: 8, sense_chosen: "souhaiter",
        analysis_axes: {
          concept_chosen: "Amour/Affection",
          concepts: {
            "Amour/Affection": {
              status: "retenu",
              senses: ["aimer", "affection", "souhaiter"],
              proof_ctx: "Le verbe yawaddu est un inaccompli 3MS de la racine w-d-d. Le Lane's donne « he wishes, he would like, he desires, he loves ». La racine w-d-d porte le sens d'amour et de souhait — yawaddu ahaduhum (chacun d'eux souhaite) exprime un desir individuel intense. Le souhait est ici pejoratif — souhaiter vivre mille ans est un signe d'attachement excessif.",
              axe1_verset: "Le verbe yawaddu introduit le souhait hyperbolique — chacun d'eux souhaite vivre mille ans. Le souhait individuel (ahaduhum) montre que l'avidite est personnelle — chaque individu souhaite pour lui-meme. Le passage du collectif (ils sont les plus avides) a l'individuel (chacun souhaite) intensifie le diagnostic.",
              axe2_voisins: "Le verset 95 affirmait le refus de souhaiter la mort. Ce verset 96 montre le souhait inverse — vivre mille ans. La racine w-d-d et la racine m-n-y (verset 95) sont complementaires — le refus de souhaiter la mort et le souhait de vivre longtemps.",
              axe3_sourate: "La racine w-d-d dans la sourate al-Baqarah traite du souhait hostile. En 2:105, « ceux qui rejettent parmi les gens du Livre ne souhaitent pas (ma yawaddu) qu'il vous descende un bien de votre Seigneur ». En 2:109, « beaucoup des gens du Livre souhaitent (wadda) vous faire revenir rejeteurs ». La sourate montre que les souhaits des rejeteurs sont toxiques.",
              axe4_coherence: "La racine w-d-d apparait 29 fois dans le Coran. Le wudd (affection) est un attribut divin — al-Wadud (le Tres-Affectueux). Mais le verbe wadda peut aussi exprimer un souhait pervers. En 3:69, « un groupe des gens du Livre souhaite (waddat) vous egarer ». Le souhait est ambivalent — il peut etre eleve (amour divin) ou bas (avidite).",
              axe5_frequence: "Pour la mission du khalifa, le souhait doit etre dirige vers l'au-dela, pas vers la vie terrestre. Le khalifa souhaite la rencontre avec Dieu, pas l'allongement de sa vie. Les enfants d'Israel inversent la direction du souhait."
            }
          }
        }
      },
      {
        word_key: "ahd", position: 9, sense_chosen: "un",
        analysis_axes: {
          concept_chosen: "Nombre/Quantification",
          concepts: {
            "Nombre/Quantification": {
              status: "probable",
              senses: ["rendre onze", "un des plusieurs", "un par un"],
              proof_ctx: "Le mot ahaduhum est un nom avec pronom 3MP de la racine a-h-d. Le Lane's donne « one of them ». Dans cette construction, ahad fonctionne comme un pronom indefini numerique — un parmi eux, chacun d'eux. Le sens est quantitatif et partitif — un individu du groupe.",
              axe1_verset: "Le mot ahaduhum individualise le souhait — chacun d'eux (individuellement) souhaite vivre mille ans. Le passage du collectif (ahrasa al-nasi) a l'individuel (ahaduhum) montre que l'avidite est partagee par chaque membre du groupe, pas seulement le groupe en tant que collectif.",
              axe2_voisins: "Le verset 95 parlait du groupe (ils ne souhaiteront jamais). Ce verset 96 passe au singulier (chacun d'eux souhaite). L'individualisation renforce le diagnostic — chaque individu est avide, pas seulement le groupe.",
              axe3_sourate: "La racine a-h-d dans la sourate al-Baqarah est utilisee pour l'unicite et le nombre. En 2:133, « nous adorerons ton Dieu et le Dieu de tes peres, un Dieu unique (ilahan wahidan) ». En 2:96, ahad est utilise comme pronom indefini — un parmi eux.",
              axe4_coherence: "La racine a-h-d apparait 85 fois dans le Coran. Le sens oscille entre l'unicite (ahad en 112:1 — Dieu est Un) et le nombre (ahad en 2:96 — un d'entre eux). Le contexte determine le sens — theologique pour l'unicite, numerique pour le decompte.",
              axe5_frequence: "Pour la mission du khalifa, l'individualisation de la responsabilite est fondamentale. Chaque khalifa est responsable individuellement — le jugement est personnel, pas collectif."
            },
            "Unicité/Indivisibilité": {
              status: "nul",
              senses: ["un (premier des nombres)", "unité", "l'Indivisible", "déclarer l'unicité"],
              proof_ctx: "Le sens d'unicite est le sens theologique de a-h-d. Le contexte ici est clairement numerique et partitif — un d'entre eux, pas l'Unique."
            }
          }
        }
      },
      {
        word_key: "emr", position: 11, sense_chosen: "vie",
        analysis_axes: {
          concept_chosen: "Vie/Durée",
          concepts: {
            "Vie/Durée": {
              status: "retenu",
              senses: ["vie", "âge", "longévité"],
              proof_ctx: "Le verbe yu'ammaru est un inaccompli passif 3MS forme II de la racine '-m-r. Le Lane's donne « that he be given a long life, that he live long, that his life be prolonged ». La forme II passive (yu'ammara) signifie « qu'on lui accorde une longue vie ». Le passif indique que la longevite est un don — on la recoit, on ne la prend pas.",
              axe1_verset: "Le verbe yu'ammaru est l'objet du souhait — chacun d'eux souhaite qu'on lui accorde mille ans de vie. Le passif montre que la longevite est entre les mains de Dieu — c'est Lui qui l'accorde ou non. Le souhait est vain car meme mille ans ne sauveraient pas du chatiment.",
              axe2_voisins: "Le verset 95 parlait des oeuvres envoyees en avant. Ce verset 96 montre le souhait de retarder le jugement par la longevite. La longevite est un substitut illusoire — prolonger la vie ne change pas les oeuvres passees.",
              axe3_sourate: "La racine '-m-r dans la sourate al-Baqarah traite de la longevite et de l'habitation. En 2:96, elle designe la longevite souhaitee. En 2:125, « nous avons fait de la Maison un lieu de rassemblement et de securite pour les gens ». La sourate montre les deux sens — habiter et vivre longtemps.",
              axe4_coherence: "La racine '-m-r apparait 23 fois dans le Coran. En 35:11, « nul ne vit longtemps (yu'ammaru) et nul ne voit sa vie raccourcie sans que cela soit dans un Livre ». La longevite est ecrite et decidee par Dieu. En 36:68, « celui a qui Nous donnons longue vie (nu'ammirhu), Nous le retournons dans la creation ». La longevite sans oeuvres est une regression.",
              axe5_frequence: "Pour la mission du khalifa, la longevite est une opportunite, pas un but. Le khalifa qui vit longtemps a plus de temps pour accomplir sa mission. Mais la longevite sans action juste est une aggravation — plus de temps signifie plus de responsabilite."
            },
            "Habitation/Construction": {
              status: "nul",
              senses: ["peupler", "construire"],
              proof_ctx: "Le sens de construction est un sens derive de '-m-r. Le contexte est clairement celui de la longevite, pas de la construction. Le passif yu'ammara signifie « recevoir une longue vie »."
            }
          }
        }
      },
      {
        word_key: "alf", position: 12, sense_chosen: "millier",
        analysis_axes: {
          concept_chosen: "Nombre/Multitude",
          concepts: {
            "Nombre/Multitude": {
              status: "retenu",
              senses: ["millier", "mille"],
              proof_ctx: "Le nom alfa est un nom accusatif singulier de la racine a-l-f. Le Lane's donne « a thousand ». L'accusatif alfa est complement de yu'ammara — qu'on lui accorde (une vie de) mille ans. Mille est un nombre hyperbolique — il designe le maximum de longevite souhaitable.",
              axe1_verset: "Le mot alfa est l'hyperbole du verset — mille ans de vie. Le nombre mille represente le maximum imaginable de longevite humaine. Malgre ce maximum, le chatiment ne serait pas evite. L'hyperbole sert a montrer l'inutilite de la longevite sans oeuvres — meme le maximum ne suffit pas.",
              axe2_voisins: "Le verset 95 parlait des oeuvres passees. Ce verset 96 montre le souhait de mille ans de vie. La disproportion entre les oeuvres (mauvaises) et le souhait (mille ans) revele l'aveuglement.",
              axe3_sourate: "La racine a-l-f dans la sourate al-Baqarah designe le nombre et l'union. En 2:96, c'est le nombre mille. En 2:243, « ils etaient des milliers (uluf) ». La sourate utilise les grands nombres pour les hyperboles et les recits.",
              axe4_coherence: "La racine a-l-f apparait 10 fois dans le Coran. En 3:124, « trois mille (thalathat alaf) anges ». En 22:47, « un jour aupres de ton Seigneur est comme mille ans de ce que vous comptez ». Le nombre mille est relatif — mille ans humains sont un jour divin.",
              axe5_frequence: "Pour la mission du khalifa, la quantite ne remplace pas la qualite. Mille ans de vie sans oeuvres valent moins qu'un instant de soumission sincere."
            },
            "Habitude": {
              status: "nul",
              senses: ["familier"],
              proof_ctx: "Le sens d'habitude est un sens derive de a-l-f. Le contexte est clairement numerique — mille ans, pas la familiarite."
            }
          }
        }
      },
      {
        word_key: "snw", position: 13, sense_chosen: "annee",
        analysis_axes: {
          concept_chosen: "Temps/Cycle",
          concepts: {
            "Temps/Cycle": {
              status: "retenu",
              senses: ["année", "saison"],
              proof_ctx: "Le nom sanatin est un nom feminin singulier genitif de la racine s-n-w. Le Lane's donne « year ». Le genitif sanatin est regi par alfa — mille ans. Le singulier avec le nombre mille est une construction arabe reguliere (le singulier apres les nombres de 11 et plus).",
              axe1_verset: "Le mot sanatin mesure le temps du souhait — mille annees. L'annee est l'unite de mesure de la longevite humaine. Mille annees representent une longevite inimaginable — et pourtant insuffisante pour eviter le chatiment.",
              axe2_voisins: "Le verset 95 parlait des oeuvres passees. Ce verset 96 quantifie le souhait en annees. Le temps est l'obsession des enfants d'Israel dans ces versets — ils veulent plus de temps au lieu de meilleures oeuvres.",
              axe3_sourate: "La racine s-n-w dans la sourate al-Baqarah mesure le temps. En 2:259, « combien es-tu reste (labithta) ? Il dit : un jour ou partie d'un jour. Il dit : non, tu es reste cent ans (mi'ata 'am) ». La sourate joue sur la perception du temps — cent ans passent comme un jour.",
              axe4_coherence: "La racine s-n-w apparait 19 fois dans le Coran. L'annee mesure les epreuves et les cycles. En 7:130, « Nous les avons saisis par les annees (sinina) ». En 29:14, « Noe demeura parmi eux mille ans moins cinquante ans ». Les annees sont le cadre temporel des recits prophetiques.",
              axe5_frequence: "Pour la mission du khalifa, les annees sont le capital de la mission. Chaque annee est une opportunite d'action. Les enfants d'Israel souhaitent plus d'annees sans en faire bon usage."
            }
          }
        }
      },
      {
        word_key: "zhzh", position: 15, sense_chosen: "eloigner",
        analysis_axes: {
          concept_chosen: "Éloignement/Salut",
          concepts: {
            "Éloignement/Salut": {
              status: "retenu",
              senses: ["éloigner", "écarter", "repousser"],
              proof_ctx: "Le mot muzahzihihi est un participe actif forme I avec preposition bi et pronom 3MS de la racine z-h-z-h. Le Lane's donne « that which removes him, that which pushes him away, that which saves him from ». La racine redoublee z-h-z-h exprime un mouvement d'ecartement force — pousser quelque chose loin de soi. Le pronom suffixe -hi renvoie a l'individu qui souhaite vivre mille ans.",
              axe1_verset: "Le mot muzahzihihi est la negation de l'efficacite du souhait — meme mille ans ne l'ecarteraient pas du chatiment. L'eloignement du chatiment est impossible par la longevite seule. La construction « wa-ma huwa bi-muzahzihihi » est une negation renforcee — ce n'est absolument pas ce qui l'ecarterait du chatiment.",
              axe2_voisins: "Le verset 95 disait que leurs oeuvres les condamnent. Ce verset 96 confirme que la longevite ne sauve pas du chatiment. Le verset 97 changera de sujet. L'eloignement du chatiment ne se fait pas par le temps mais par les oeuvres.",
              axe3_sourate: "La racine z-h-z-h n'apparait qu'une fois dans la sourate al-Baqarah, dans ce verset. Le concept d'eloignement du chatiment est rare et specifique — il designe le salut eschatologique.",
              axe4_coherence: "La racine z-h-z-h apparait 2 fois dans le Coran — en 2:96 et en 3:185. En 3:185, « quiconque est ecarte (zuhziha) du Feu et introduit au Paradis a certes reussi ». Les deux occurrences traitent du meme theme — l'ecartement du chatiment est le salut. En 2:96, l'ecartement est nie ; en 3:185, il est affirme comme condition de reussite.",
              axe5_frequence: "Pour la mission du khalifa, l'ecartement du chatiment est le but ultime. Le khalifa oeuvre pour etre ecarte du chatiment par ses actes, pas par la longevite. Seules les oeuvres eloignent du Feu."
            }
          }
        }
      },
      {
        word_key: "alh", position: 20, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite de la racine a-l-h. Le Lane's donne « God ». Dieu est le sujet de la vision — c'est Lui qui voit ce qu'ils font."
            },
            "Détresse": {
              status: "nul",
              senses: ["être perplexe", "se lamenter"],
              proof_ctx: "Le sens de detresse est un sens marginal de a-l-h. Le contexte est le nom propre de Dieu."
            }
          }
        }
      },
      {
        word_key: "bsr", position: 21, sense_chosen: "voir",
        analysis_axes: {
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              senses: ["voir", "vue", "regarder", "clairvoyance", "comprendre", "preuve visible"],
              proof_ctx: "Le mot basirun est un adjectif singulier nominatif de la racine b-s-r. Le Lane's donne « seeing, all-seeing, perceiving, having insight ». L'adjectif basir qualifie Dieu comme Celui qui voit. La formule « Allahu basirun bi-ma ya'maluna » (Dieu voit ce qu'ils font) est une cloture d'avertissement.",
              axe1_verset: "Le mot basirun cloture le verset par la surveillance divine — Dieu voit ce qu'ils font. Apres la description de leur avidite et de l'inutilite de la longevite, la cloture rappelle que Dieu observe tout. La vision divine est le contrepoids de leur aveuglement — ils ne voient pas l'inutilite de leur souhait, mais Dieu voit tout.",
              axe2_voisins: "Le verset 95 se terminait par « Dieu connait les injustes » ('alim). Ce verset 96 se termine par « Dieu voit ce qu'ils font » (basir). La progression du savoir a la vision montre que Dieu connait leurs intentions et voit leurs actes.",
              axe3_sourate: "La racine b-s-r dans la sourate al-Baqarah traite de la vision. En 2:110, « Dieu voit ce que vous faites (basirun bi-ma ta'maluna) ». En 2:233, « sachez que Dieu voit ce que vous faites ». La formule est recurrente — elle rappelle la surveillance divine.",
              axe4_coherence: "La racine b-s-r apparait 148 fois dans le Coran. La vision (basar) est un attribut divin et humain. Dieu est al-Basir (le Tres-Voyant). En 67:19, « Il est Voyant de toute chose (basirun bi-kulli shay'in) ». La vision divine est totale et penetrante.",
              axe5_frequence: "Pour la mission du khalifa, la vision divine est la conscience de la surveillance. Le khalifa agit en sachant que Dieu voit — cette conscience est le garde-fou contre la transgression."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["peau"],
              proof_ctx: "Le sens de peau est un sens concret de b-s-r. Le contexte est clairement la vision divine, pas la peau."
            }
          }
        }
      },
      {
        word_key: "eml", position: 23, sense_chosen: "agir",
        analysis_axes: {
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ya'maluna est un inaccompli 3MP de la racine '-m-l. Le Lane's donne « they do, they work, they act ». L'inaccompli indique l'action continue — ils ne cessent de faire. Les oeuvres sont l'objet de la vision divine — Dieu voit ce qu'ils font en temps reel.",
              axe1_verset: "Le verbe ya'maluna cloture le verset par les oeuvres — ce qu'ils font est vu par Dieu. La boucle est fermee — le verset 95 parlait de ce que leurs mains ont envoye en avant (oeuvres passees), le verset 96 parle de ce qu'ils font maintenant (oeuvres presentes). Passe et present sont sous le regard de Dieu.",
              axe2_voisins: "Le verset 95 parlait des oeuvres passees (qaddamat aydihim). Ce verset 96 parle des oeuvres presentes (ya'maluna). La continuite des oeuvres montre que le comportement n'a pas change — les memes oeuvres qui ont condamne le passe continuent dans le present.",
              axe3_sourate: "La racine '-m-l est l'une des plus frequentes de la sourate al-Baqarah. En 2:85, « Dieu n'est pas inattentif a ce que vous faites ('ammaluna) ». En 2:110, « ce que vous envoyez en avant de bien pour vos ames, vous le trouverez aupres de Dieu ». La sourate lie les oeuvres au jugement — chaque acte est enregistre.",
              axe4_coherence: "La racine '-m-l apparait plus de 360 fois dans le Coran. Les oeuvres ('amal) sont le critere du jugement. En 18:7, « Nous avons fait de ce qui est sur terre une parure pour elle, afin d'eprouver lequel d'entre eux est le meilleur en oeuvres ». Les oeuvres sont le test — pas la longevite, pas les souhaits.",
              axe5_frequence: "Pour la mission du khalifa, les oeuvres sont la substance de la mission. Le khalifa est juge sur ses actes, pas sur ses paroles ou ses souhaits. L'oeuvre est la manifestation concrete de la soumission."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:97
  // verse_id=104, analysis_id=464
  // "Say: Whoever is an enemy of Gabriel — he has brought it down
  //  upon your heart by God's permission, confirming what is before it,
  //  and guidance and good news for the believers."
  // =====================================================
  97: {
    verse_id: 104,
    analysis_id: 464,
    translation_arab: "Dis : Quiconque est un ennemi de Jibril — c'est lui qui l'a fait descendre sur ton coeur par la permission de Dieu, confirmant ce qui le precede, et guidance et bonne nouvelle pour les croyants.",
    full_translation: "Dis : Quiconque est un ennemi de Jibril [qu'il sache que] c'est lui qui l'a fait descendre sur ton coeur par la permission de Dieu, confirmant ce qui est entre ses mains [ce qui le precede], et [c'est une] guidance et bonne nouvelle pour les croyants.",
    translation_explanation: `§DEMARCHE§
Ce verset repond a ceux qui pretendent etre ennemis de l'ange Jibril (Gabriel), porteur de la revelation. Le verbe **qul** est un imperatif 2MS de la racine q-w-l. Le Lane's donne « say, speak, declare ». L'imperatif adresse au Prophete introduit la reponse divine. Le pronom **man** est un pronom relatif de la racine m-n. Le Lane's donne « whoever, he who ». Man kanaa est une construction conditionnelle — quiconque est. Le verbe **kana** est un accompli 3MS de la racine k-w-n. Le Lane's donne « he was, he is ». Kana 'aduwwan signifie « est un ennemi de ». Le nom **'aduwwan** est un nom accusatif singulier de la racine '-d-w. Le Lane's donne « enemy, adversary, hostile ». L'accusatif est attribut de kana — quiconque est un ennemi. Le nom **li-Jibrila** est le nom propre de l'ange Gabriel — particule. Le pronom **fa-innahu** est une construction emphatique — car certes lui. Le verbe **nazzalahu** est un accompli 3MS forme II avec pronom 3MS de la racine n-z-l. Le Lane's donne « he sent it down, he revealed it ». La forme II (nazzala) indique la descente graduelle et repetee de la revelation. Le pronom -hu renvoie au Coran. La preposition **'ala** introduit la destination de la descente. Le nom **qalbika** est un nom avec pronom 2MS de la racine q-l-b. Le Lane's donne « your heart ». Le coeur du Prophete est le receptacle de la revelation. La preposition **bi-** est de la racine b-y. Le Lane's donne « by, with, through ». La preposition bi introduit le moyen — par la permission de Dieu. Le nom **idhni** est un nom avec pronom de la racine a-dh-n — la permission. Le nom **Allahi** est le nom propre de la divinite. Le participe **musaddiqan** est un participe actif forme II accusatif de la racine s-d-q. Le Lane's donne « confirming, corroborating ». Le participe qualifie le Coran comme confirmateur. Le pronom **li-ma** est une construction relative — ce qui. Le mot **bayna** est un nom de la racine b-y-n. Le Lane's donne « between, before (in the sense of what is in front of) ». Bayna yadayhi signifie « entre ses mains » — metaphore pour « ce qui le precede ». Le mot **yadayhi** est un duel de yad avec pronom 3MS — ses deux mains. Le conjonctif **wa-hudan** est un nom accusatif de la racine h-d-y. Le Lane's donne « guidance, direction ». La guidance est un des buts de la revelation. Le conjonctif **wa-bushra** est un nom de la racine b-sh-r. Le Lane's donne « good news, glad tidings ». La bonne nouvelle accompagne la guidance. Le nom **li-l-mu'minina** est un participe actif pluriel defini de la racine a-m-n avec preposition. Le Lane's donne « for the believers ». Les croyants sont les destinataires de la guidance et de la bonne nouvelle.

§JUSTIFICATION§
**dis** — Le sens retenu est « dire ». L'imperatif qul ordonne au Prophete de parler. L'alternative « avis » est ecartee car le contexte est un ordre de proclamation, pas une opinion.

**est** — Le sens retenu est « etre ». Le verbe kana designe l'etat d'inimitie. C'est le seul concept retenu pour cette racine.

**ennemi** — Le sens retenu est « transgresser ». Le nom 'aduwwan designe l'ennemi comme celui qui depasse les limites de l'hostilite. L'alternative « courir » est ecartee car le contexte est l'hostilite, pas le mouvement.

**fait descendre** — Le sens retenu est « descendre ». Le verbe nazzalahu designe la descente de la revelation. L'alternative « halte » est ecartee car le contexte est la revelation, pas l'installation.

**coeur** — Le sens retenu est « coeur ». Le nom qalbika designe le receptacle de la revelation. L'alternative « retourner » est ecartee car le mot est un nom, pas un verbe.

**par** — La preposition bi introduit le moyen (la permission de Dieu). C'est une particule grammaticale.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allahi designe la divinite unique.

**confirmant** — Le sens retenu est « confirmer ». Le participe musaddiqan designe la confirmation active. L'alternative « don » est ecartee car le mot est un participe, pas un nom d'action.

**ce qui le precede** — Le sens retenu est « entre ». Le mot bayna yadayhi est une expression idiomatique signifiant « ce qui est devant, ce qui precede ». L'alternative « quitter » est ecartee car le contexte est spatial-metaphorique.

**guidance** — Le sens retenu est « guider ». Le nom hudan designe la direction divine. L'alternative « cadeau » est ecartee car le contexte est la revelation, pas le don materiel.

**croyants** — Le sens retenu est « croire ». Le participe al-mu'minina designe ceux qui ont la foi. L'alternative « securite » est ecartee car le contexte est la foi, pas la protection.

§CRITIQUE§
**ennemi de Jibril** — Le verset repond a une objection specifique — certains pretendaient etre ennemis de Jibril car c'est lui qui porte la revelation au Prophete Muhammad. En declarant l'inimitie envers l'ange porteur, ils rejettent de facto la revelation. Le verset refute cette position en affirmant que Jibril agit par la permission de Dieu — s'opposer a Jibril c'est s'opposer a Dieu.
**le coeur comme receptacle** — La revelation descend sur le coeur du Prophete, pas sur son oreille ou son esprit. Le coeur (qalb) est le siege de la comprehension spirituelle — la revelation n'est pas une simple information intellectuelle mais une transformation du coeur.`,
    segments: [
      { fr: "dis", pos: "verbe", phon: "qul", arabic: "قُلْ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 0 },
      { fr: "quiconque", phon: "man", arabic: "مَن", is_particle: true, position: 1 },
      { fr: "est", pos: "verbe", phon: "kana", arabic: "كَانَ", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 2 },
      { fr: "un ennemi", pos: "nom", phon: "'aduwwan", arabic: "عَدُوًّا", word_key: "edw", is_particle: false, sense_retenu: "ennemi", position: 3 },
      { fr: "de Jibril", phon: "li-Jibrila", arabic: "لِّجِبْرِيلَ", is_particle: true, position: 4 },
      { fr: "car certes lui", phon: "fa-innahu", arabic: "فَإِنَّهُ", is_particle: true, position: 5 },
      { fr: "l'a fait descendre", pos: "verbe", phon: "nazzalahu", arabic: "نَزَّلَهُ", word_key: "nzl", is_particle: false, sense_retenu: "descendre", position: 6 },
      { fr: "sur", phon: "'ala", arabic: "عَلَىٰ", is_particle: true, position: 7 },
      { fr: "ton coeur", pos: "nom", phon: "qalbika", arabic: "قَلْبِكَ", word_key: "qlb", is_particle: false, sense_retenu: "coeur", position: 8 },
      { fr: "par", pos: "preposition", phon: "bi-", arabic: "بِ", word_key: "bi", is_particle: false, sense_retenu: "par", position: 9 },
      { fr: "la permission de", phon: "idhni", arabic: "إِذْنِ", is_particle: true, position: 10 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 11 },
      { fr: "confirmant", pos: "adjectif", phon: "musaddiqan", arabic: "مُصَدِّقًا", word_key: "sdq", is_particle: false, sense_retenu: "confirmer", position: 12 },
      { fr: "ce que", phon: "li-ma", arabic: "لِّمَا", is_particle: true, position: 13 },
      { fr: "entre", pos: "nom", phon: "bayna", arabic: "بَيْنَ", word_key: "byn", is_particle: false, sense_retenu: "entre", position: 14 },
      { fr: "ses mains", pos: "nom", phon: "yadayhi", arabic: "يَدَيْهِ", word_key: "ydy", is_particle: false, sense_retenu: "main", position: 15 },
      { fr: "et guidance", pos: "nom", phon: "wa-hudan", arabic: "وَهُدًى", word_key: "hdy", is_particle: false, sense_retenu: "guidance", position: 16 },
      { fr: "et bonne nouvelle", phon: "wa-bushra", arabic: "وَبُشْرَىٰ", is_particle: true, position: 17 },
      { fr: "pour les croyants", pos: "nom", phon: "li-l-mu'minina", arabic: "لِلْمُؤْمِنِينَ", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 18 }
    ],
    words: [
      {
        word_key: "qwl", position: 0, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parler", "parole", "discours", "dire", "affirmer"],
              proof_ctx: "Le verbe qul est un imperatif 2MS de la racine q-w-l. Le Lane's donne « say, speak, declare ». L'imperatif adresse au Prophete introduit la reponse divine aux ennemis de Jibril. Qul est la formule standard par laquelle Dieu ordonne au Prophete de transmettre un message.",
              axe1_verset: "Le verbe qul ouvre le verset par un ordre divin de proclamation. Le Prophete est charge de repondre a ceux qui pretendent etre ennemis de Jibril. L'imperatif montre que la reponse vient de Dieu, pas du Prophete — c'est Dieu qui parle a travers lui. La parole prophetique est une parole transmise, pas inventee.",
              axe2_voisins: "Les versets 95-96 decrivaient l'avidite des enfants d'Israel. Ce verset 97 change de sujet — il repond a l'objection de l'inimitie envers Jibril. L'imperatif qul marque la transition — Dieu ordonne une nouvelle proclamation.",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah. L'imperatif qul apparait a plusieurs reprises — en 2:80, 2:91, 2:111, 2:135. Chaque qul introduit une refutation divine d'une pretention fausse. La sourate est structuree par ces « dis » prophetiques.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran. L'imperatif qul apparait 332 fois — c'est l'une des formules les plus frequentes. En 112:1, « Dis : Lui Dieu est Un ». En 109:1, « Dis : O rejeteurs ». Le qul est l'instrument de la revelation — Dieu commande, le Prophete transmet.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'instrument de la mission. Le khalifa transmet la verite — il dit ce que Dieu ordonne de dire. Les enfants d'Israel qui s'opposent a Jibril s'opposent a la chaine de transmission divine."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le sens d'avis est un sens derive de q-w-l. Le contexte est un imperatif divin de proclamation — dire, pas penser."
            }
          }
        }
      },
      {
        word_key: "knw", position: 2, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["être", "devenir", "exister"],
              proof_ctx: "Le verbe kana est un accompli 3MS de la racine k-w-n. Le Lane's donne « he was, he is ». Le verbe kana avec l'accusatif ('aduwwan) forme une construction attributive — quiconque est un ennemi. L'accompli kana ne designe pas le passe ici mais l'etat — etre dans un etat d'inimitie.",
              axe1_verset: "Le verbe kana introduit la condition — quiconque est un ennemi de Jibril. L'etat d'inimitie est presente comme un fait dont les consequences sont annoncees. Kana 'aduwwan designe un etat etabli et connu — ils se declarent ennemis de Jibril."
            }
          }
        }
      },
      {
        word_key: "edw", position: 3, sense_chosen: "ennemi",
        analysis_axes: {
          concept_chosen: "Hostilité/Inimitié",
          concepts: {
            "Hostilité/Inimitié": {
              status: "retenu",
              senses: ["ennemi", "hostilité", "agression"],
              proof_ctx: "Le nom 'aduwwan est un nom accusatif singulier de la racine '-d-w. Le Lane's donne « enemy, adversary, one who is hostile, foe ». L'accusatif est attribut de kana — quiconque est un ennemi. Le 'aduww est celui qui a franchi les limites de la relation normale pour entrer dans l'hostilite active.",
              axe1_verset: "Le mot 'aduwwan designe l'inimitie declaree envers Jibril. L'ennemi de Jibril rejette le porteur de la revelation — et donc la revelation elle-meme. L'inimitie n'est pas une simple desapprobation mais un rejet actif de la chaine de transmission divine (Dieu -> Jibril -> Prophete -> humanite).",
              axe2_voisins: "Les versets 95-96 decrivaient l'avidite pour la vie. Ce verset 97 revele une autre forme de rejet — l'hostilite envers l'ange porteur. L'inimitie envers Jibril est une excuse pour rejeter la revelation sans rejeter Dieu directement.",
              axe3_sourate: "La racine '-d-w dans la sourate al-Baqarah traite de l'hostilite et de la transgression. En 2:36, « descendez ! vous etes ennemis ('aduww) les uns des autres ». En 2:98, « quiconque est un ennemi de Dieu, de Ses anges, de Ses messagers ». La sourate montre que l'inimitie envers un maillon de la chaine divine est une inimitie envers toute la chaine.",
              axe4_coherence: "La racine '-d-w apparait 106 fois dans le Coran. L'ennemi ('aduww) est un concept central — le diable est l'ennemi declare (2:168, 2:208). L'inimitie envers Jibril est un cas particulier de l'inimitie envers le divin. En 2:98, le verset suivant generalise — ennemi de Dieu, des anges, des messagers.",
              axe5_frequence: "Pour la mission du khalifa, l'inimitie envers les agents de la revelation est un rejet de la mission. Le khalifa recoit la revelation par la chaine de transmission — s'opposer a un maillon c'est briser la chaine entiere."
            },
            "Transgression/Excès": {
              status: "probable",
              senses: ["transgresser", "injustice"],
              proof_ctx: "Le sens de transgression est le sens premier de '-d-w — depasser les limites. L'ennemi est celui qui a transgresse les limites de la relation normale. Le lien entre l'inimitie et la transgression est dans le depassement des bornes."
            }
          }
        }
      },
      {
        word_key: "nzl", position: 6, sense_chosen: "descendre",
        analysis_axes: {
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["descendre", "pluie qui descend", "faire descendre", "révéler", "envoyer d'en haut"],
              proof_ctx: "Le verbe nazzalahu est un accompli 3MS forme II avec pronom 3MS de la racine n-z-l. Le Lane's donne « he sent it down, he revealed it gradually ». La forme II (nazzala) exprime la descente graduelle et repetee — la revelation est descendue par etapes. Le pronom -hu renvoie au Coran. Le sujet est Jibril — c'est lui qui a fait descendre la revelation.",
              axe1_verset: "Le verbe nazzalahu est le coeur de l'argument — Jibril a fait descendre le Coran sur le coeur du Prophete. L'acte de descente est l'acte fondateur de la revelation. S'opposer a Jibril c'est s'opposer a l'acte meme de la revelation. La forme II (nazzala vs anzala) insiste sur le caractere graduel et progressif de la descente.",
              axe2_voisins: "Les versets 95-96 traitaient de l'avidite pour la vie. Ce verset 97 traite de la revelation et de son porteur. La descente de la revelation est le contrepoint de l'attachement a la vie — la revelation guide vers l'au-dela.",
              axe3_sourate: "La racine n-z-l est l'une des plus frequentes de la sourate al-Baqarah. En 2:4, « ce qui a ete fait descendre vers toi (unzila ilayka) ». En 2:89, « un Livre leur vint de la part de Dieu ». La sourate est construite autour de la descente de la revelation — chaque mention de n-z-l rappelle l'origine divine du texte.",
              axe4_coherence: "La racine n-z-l apparait 293 fois dans le Coran. La descente est l'acte fondateur de la revelation. En 26:193, « l'Esprit fidele est descendu avec (nazzala bihi al-ruhu al-aminu) — sur ton coeur ». Le verset de la sourate al-Shu'ara' confirme le meme schema — descente par l'ange sur le coeur du Prophete.",
              axe5_frequence: "Pour la mission du khalifa, la descente de la revelation est le fondement de la mission. Le khalifa recoit et transmet ce qui est descendu. Rejeter le porteur c'est rejeter le message."
            },
            "Halte/Séjour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "lieu de descente", "hôte"],
              proof_ctx: "Le sens de halte est un sens secondaire de n-z-l. Le contexte est clairement la revelation — la descente du Coran, pas l'installation dans un lieu."
            }
          }
        }
      },
      {
        word_key: "qlb", position: 8, sense_chosen: "coeur",
        analysis_axes: {
          concept_chosen: "Coeur/Centre",
          concepts: {
            "Coeur/Centre": {
              status: "retenu",
              senses: ["esprit", "coeur", "intelligence", "milieu"],
              proof_ctx: "Le nom qalbika est un nom avec pronom 2MS de la racine q-l-b. Le Lane's donne « your heart, the seat of understanding and faith ». Le coeur du Prophete est le receptacle de la revelation. Le possessif -ka (ton) designe le Prophete Muhammad directement.",
              axe1_verset: "Le mot qalbika designe le lieu de reception de la revelation — ton coeur. La revelation ne descend pas sur l'oreille ou la raison mais sur le coeur. Le coeur dans le Coran est le siege de la comprehension spirituelle profonde — la revelation transforme le coeur avant de transformer le comportement.",
              axe2_voisins: "Le verset 88 mentionnait les coeurs enveloppes des enfants d'Israel. Ce verset 97 mentionne le coeur ouvert du Prophete. Le contraste est total — les coeurs enveloppes rejettent, le coeur prophetique recoit.",
              axe3_sourate: "La racine q-l-b apparait 19 fois dans la sourate al-Baqarah. En 2:7, « Dieu a scelle leurs coeurs ». En 2:74, « vos coeurs se sont endurcis ». En 2:97, le coeur du Prophete recoit la revelation. La sourate oppose les coeurs fermes aux coeurs ouverts.",
              axe4_coherence: "La racine q-l-b apparait 168 fois dans le Coran. Le coeur est le centre de la personne. En 26:194, « sur ton coeur (qalbika) pour que tu sois parmi les avertisseurs ». Le meme schema — descente sur le coeur — confirme que la revelation est une affaire de coeur, pas seulement d'intellect.",
              axe5_frequence: "Pour la mission du khalifa, le coeur est l'organe de la mission. Le khalifa dont le coeur est ouvert recoit la guidance. Le coeur du Prophete est le modele — un coeur qui recoit et transmet fidellement."
            },
            "Retournement/Changement": {
              status: "probable",
              senses: ["retourner", "renverser", "revenir", "transformer", "changer d'état"],
              proof_ctx: "Le sens de retournement est le sens premier de q-l-b. Le coeur (qalb) est nomme ainsi car il se retourne entre les etats. Le coeur du Prophete est stable dans la reception mais le nom rappelle la nature changeante du coeur humain."
            }
          }
        }
      },
      {
        word_key: "alh", position: 11, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif de la racine a-l-h. Le Lane's donne « God ». Dieu est la source de la permission — bi-idhni Allahi (par la permission de Dieu). Jibril agit par la permission de Dieu, pas de sa propre initiative."
            },
            "Détresse": {
              status: "nul",
              senses: ["être perplexe", "se lamenter"],
              proof_ctx: "Le sens de detresse est un sens marginal de a-l-h. Le contexte est le nom propre de Dieu au genitif."
            }
          }
        }
      },
      {
        word_key: "sdq", position: 12, sense_chosen: "confirmer",
        analysis_axes: {
          concept_chosen: "Vérité/Sincérité",
          concepts: {
            "Vérité/Sincérité": {
              status: "retenu",
              senses: ["dire vrai", "vrai", "sincère", "confirmer"],
              proof_ctx: "Le mot musaddiqan est un participe actif forme II accusatif de la racine s-d-q. Le Lane's donne « confirming, corroborating, attesting the truth of ». La forme II (saddaqa) signifie confirmer — le Coran confirme les Ecritures precedentes. L'accusatif est un etat de complement — le Coran est descendu en tant que confirmateur.",
              axe1_verset: "Le mot musaddiqan qualifie le Coran — il confirme ce qui le precede. La confirmation est l'argument contre l'inimitie envers Jibril — comment rejeter un ange qui porte un message qui confirme ce qu'on possede deja ? Le rejet de Jibril contredit la coherence des revelations.",
              axe2_voisins: "Le verset 89 utilisait le meme mot musaddiq pour decrire le Livre confirmatif. Ce verset 97 reprend le meme argument — la confirmation. La repetition montre que l'argument de la confirmation est central dans la refutation du rejet.",
              axe3_sourate: "La racine s-d-q dans la sourate al-Baqarah est liee a la confirmation et a la verite. En 2:41, « confirmant (musaddiqan) ce que vous avez ». En 2:89, « confirmant (musaddiqun) ce qu'ils avaient ». En 2:97, « confirmant (musaddiqan) ce qui le precede ». La sourate martele l'argument de la confirmation.",
              axe4_coherence: "La racine s-d-q apparait 155 fois dans le Coran. La confirmation (tasdiq) est le lien entre les revelations. En 5:48, « confirmant ce qui le precedait ». En 46:12, « un Livre confirmateur en langue arabe ». Le Coran se definit comme confirmateur — c'est son identite meme.",
              axe5_frequence: "Pour la mission du khalifa, la confirmation est la continuite. Le khalifa reconnait que la verite est une chaine — chaque maillon confirme le precedent. Rejeter un maillon c'est briser la chaine."
            }
          }
        }
      },
      {
        word_key: "byn", position: 14, sense_chosen: "entre",
        analysis_axes: {
          concept_chosen: "Séparation/Distance",
          concepts: {
            "Séparation/Distance": {
              status: "retenu",
              senses: ["entre", "séparer", "quitter"],
              proof_ctx: "Le mot bayna est un nom accusatif de la racine b-y-n. Le Lane's donne « between ». L'expression bayna yadayhi (entre ses mains, devant lui) est idiomatique — elle signifie ce qui precede, ce qui est devant. Les « mains » sont une metaphore pour la direction anterieure — ce qui est entre les mains est ce qui est deja la.",
              axe1_verset: "Le mot bayna dans l'expression bayna yadayhi designe la position de ce qui precede — le Coran confirme ce qui est entre ses mains, c'est-a-dire les Ecritures anterieures. L'expression spatiale « entre les mains » est traduite temporellement par « ce qui le precede ».",
              axe2_voisins: "Le verset 89 parlait de « ce qu'ils avaient » (ma ma'ahum). Ce verset 97 utilise « entre ses mains » (bayna yadayhi). Les deux expressions designent les Ecritures precedentes — la Torah et l'Evangile.",
              axe3_sourate: "La racine b-y-n dans la sourate al-Baqarah traite de la separation et de la position. En 2:66, « Nous en fimes un exemple pour ce qui est entre ses mains et ce qui est derriere ». En 2:255, « Il sait ce qui est devant eux et ce qui est derriere eux ». La sourate utilise bayna pour les positions spatiales et temporelles.",
              axe4_coherence: "La racine b-y-n apparait 523 fois dans le Coran. L'expression bayna yadayhi revient a plusieurs reprises dans le contexte de la confirmation — en 3:3, 5:46, 5:48. C'est une expression formulaire pour designer les Ecritures precedentes.",
              axe5_frequence: "Pour la mission du khalifa, ce qui precede est le fondement. Le khalifa construit sur ce qui est deja la — il ne part pas de zero. La revelation confirme et complete, elle ne remplace pas."
            },
            "Clarté/Évidence": {
              status: "nul",
              senses: ["être clair", "expliquer", "preuve", "évident"],
              proof_ctx: "Le sens de clarte est un sens derive de b-y-n. Le contexte est spatial — entre ses mains, pas la clarte."
            }
          }
        }
      },
      {
        word_key: "hdy", position: 16, sense_chosen: "guidance",
        analysis_axes: {
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-même", "guider"],
              proof_ctx: "Le nom hudan est un nom accusatif de la racine h-d-y. Le Lane's donne « guidance, direction, right way ». Le nom hudan designe la guidance comme qualite de la revelation — le Coran est guidance. L'accusatif est coordonne avec musaddiqan — le Coran est descendu comme confirmateur et comme guidance.",
              axe1_verset: "Le mot hudan qualifie le Coran — c'est une guidance pour les croyants. La guidance est le but de la revelation — elle montre le chemin droit. Le Coran n'est pas seulement un texte confirmatif mais un guide actif qui dirige vers la bonne voie.",
              axe2_voisins: "Les versets 95-96 montraient l'avidite des enfants d'Israel. Ce verset 97 presente le Coran comme guidance — ce qu'ils rejettent est precisement ce qui guide. Rejeter la guidance c'est choisir l'egarement.",
              axe3_sourate: "La racine h-d-y est l'une des plus frequentes de la sourate al-Baqarah. En 2:2, « ce Livre, nul doute en lui, est une guidance (hudan) pour les pieux ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». La sourate commence et revient constamment a la guidance — c'est son theme central.",
              axe4_coherence: "La racine h-d-y apparait 316 fois dans le Coran. La guidance (huda) est le concept central du Coran. En 2:185, « le Coran est une guidance pour les gens ». En 17:9, « ce Coran guide vers ce qui est le plus droit ». La guidance est la raison d'etre de la revelation.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est l'outil de la mission. Le khalifa recoit la guidance et la transmet. La guidance est la boussole qui oriente la mission vers le chemin droit."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "présent"],
              proof_ctx: "Le sens de don est un sens derive de h-d-y. Le contexte est la revelation comme guidance, pas comme cadeau materiel."
            }
          }
        }
      },
      {
        word_key: "amn", position: 18, sense_chosen: "croire",
        analysis_axes: {
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["confirmer", "croyant", "accepter comme vrai", "croire", "avoir la foi"],
              proof_ctx: "Le nom al-mu'minina est un participe actif pluriel masculin genitif defini de la racine a-m-n. Le Lane's donne « the believers, those who have faith ». Le participe mu'min designe celui qui a la foi — les croyants sont les destinataires de la guidance et de la bonne nouvelle. Le genitif est regi par la preposition li (pour).",
              axe1_verset: "Le mot al-mu'minina cloture le verset par les destinataires — la guidance et la bonne nouvelle sont pour les croyants. La revelation n'est pas pour tous — elle est guidance pour ceux qui croient et perdition pour ceux qui rejettent. La foi est la condition de reception de la guidance.",
              axe2_voisins: "Le verset 88 concluait par le peu de foi des enfants d'Israel. Ce verset 97 mentionne les croyants comme destinataires de la guidance. Le contraste est net — les enfants d'Israel croient peu, les croyants recoivent la guidance.",
              axe3_sourate: "La racine a-m-n est centrale dans la sourate al-Baqarah. En 2:3-4, les pieux sont definis par la foi. En 2:62, les croyants, les juifs, les chretiens et les sabeens qui croient — c'est la foi qui determine le salut. La sourate est une sourate de la foi — tout s'organise autour de la croyance et du rejet.",
              axe4_coherence: "La racine a-m-n apparait 879 fois dans le Coran. Les mu'minun (croyants) sont le groupe central du Coran — ceux qui recoivent la guidance, sont promis au succes et heritent du Paradis. La foi est le critere fondamental de distinction.",
              axe5_frequence: "Pour la mission du khalifa, la foi est la condition de la mission. Le khalifa croit et agit selon sa foi. Les croyants sont le peuple du khalifa — ceux qui recoivent la guidance et agissent en consequence."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "être en sécurité", "confier", "fidèle", "lieu sûr", "se sentir en sécurité"],
              proof_ctx: "Le sens de securite est le sens premier de a-m-n. Croire c'est faire confiance — la foi est un acte de confiance envers Dieu et Sa revelation. Les croyants sont en securite spirituelle car ils ont la guidance."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// DAILY PHRASES
// =====================================================
const dailyPhrases = [
  // mny (id=608) — desir/esperance
  { analysis_id: 608, phrases: [
    { sense: "souhaiter", arabic: "لَن يَتَمَنَّوْهُ أَبَدًا", phon: "lan yatamannawhu abadan", french: "Ils ne le souhaiteront jamais." },
    { sense: "désirer", arabic: "تَمَنَّى إِذَا تَمَنَّى", phon: "tamanna idha tamanna", french: "Il souhaita lorsqu'il souhaita." },
    { sense: "espérer", arabic: "أَمَانِيُّهُمْ", phon: "amaaniyyuhum", french: "Leurs vains espoirs." }
  ]},
  // abd (id=697) — perpetuite
  { analysis_id: 697, phrases: [
    { sense: "jamais", arabic: "لَن يَتَمَنَّوْهُ أَبَدًا", phon: "lan yatamannawhu abadan", french: "Ils ne le souhaiteront jamais." },
    { sense: "éternité", arabic: "خَالِدِينَ فِيهَا أَبَدًا", phon: "khalidina fiha abadan", french: "Ils y demeureront eternellement." },
    { sense: "toujours", arabic: "وَلَن تَفْعَلُوا أَبَدًا", phon: "wa-lan taf'aluu abadan", french: "Et vous ne le ferez jamais." }
  ]},
  // qdm (id=698) — anteriorite
  { analysis_id: 698, phrases: [
    { sense: "avancer", arabic: "بِمَا قَدَّمَتْ أَيْدِيهِمْ", phon: "bi-ma qaddamat aydihim", french: "A cause de ce que leurs mains ont envoye en avant." },
    { sense: "précéder", arabic: "قَدَمَ صِدْقٍ عِندَ رَبِّهِمْ", phon: "qadama sidqin 'inda rabbihim", french: "Un precedent de verite aupres de leur Seigneur." },
    { sense: "pied", arabic: "حَتَّىٰ تَطَأَ بِقَدَمِكَ", phon: "hatta tata'a bi-qadamika", french: "Jusqu'a ce que tu foules de ton pied." }
  ]},
  // wjd (id=700) — decouverte
  { analysis_id: 700, phrases: [
    { sense: "trouver", arabic: "وَلَتَجِدَنَّهُمْ أَحْرَصَ النَّاسِ", phon: "wa-latajidannahum ahrasa al-nasi", french: "Et tu les trouveras les plus avides des gens." },
    { sense: "exister", arabic: "إِنَّ اللَّهَ هُوَ الْوَاجِدُ", phon: "inna Allaha huwa al-wajidu", french: "Certes Dieu est Celui qui existe." },
    { sense: "rencontrer", arabic: "فَوَجَدَ فِيهَا رَجُلَيْنِ", phon: "fa-wajada fiha rajulayni", french: "Il y trouva deux hommes." }
  ]},
  // hrs (id=701) — avidite
  { analysis_id: 701, phrases: [
    { sense: "être avide", arabic: "أَحْرَصَ النَّاسِ عَلَىٰ حَيَاةٍ", phon: "ahrasa al-nasi 'ala hayatin", french: "Les plus avides des gens pour la vie." },
    { sense: "convoiter", arabic: "وَإِن تَحْرِصُوا عَلَىٰ هُدَاهُمْ", phon: "wa-in tahrisuu 'ala hudahum", french: "Et meme si vous convoitez leur guidance." },
    { sense: "zèle", arabic: "حَرَصْتَ عَلَيْهِمْ", phon: "harasta 'alayhim", french: "Tu es empresse envers eux." }
  ]},
  // wdd (id=703) — amour/souhait
  { analysis_id: 703, phrases: [
    { sense: "souhaiter", arabic: "يَوَدُّ أَحَدُهُمْ لَوْ يُعَمَّرُ", phon: "yawaddu ahaduhum law yu'ammara", french: "Chacun d'eux souhaite qu'il vive [mille ans]." },
    { sense: "aimer", arabic: "إِنَّ اللَّهَ وَدُودٌ", phon: "inna Allaha wadudun", french: "Certes Dieu est le Tres-Affectueux." },
    { sense: "affection", arabic: "سَيَجْعَلُ لَهُمُ الرَّحْمَنُ وُدًّا", phon: "sayaj'alu lahumu al-rahmanu wuddan", french: "Le Tout-Misericordieux leur accordera de l'affection." }
  ]},
  // emr (id=705) — vie/duree
  { analysis_id: 705, phrases: [
    { sense: "vie", arabic: "لَوْ يُعَمَّرُ أَلْفَ سَنَةٍ", phon: "law yu'ammara alfa sanatin", french: "S'il vivait mille ans." },
    { sense: "âge", arabic: "وَمَن نُّعَمِّرْهُ نُنَكِّسْهُ فِي الْخَلْقِ", phon: "wa-man nu'ammirhu nunakkishu fi al-khalqi", french: "Et celui a qui Nous donnons longue vie, Nous le retournons dans la creation." },
    { sense: "peupler", arabic: "إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ", phon: "innama ya'muru masajida Allahi", french: "Seuls peuplent les mosquees de Dieu [ceux qui croient]." }
  ]},
  // zhzh (id=708) — eloignement
  { analysis_id: 708, phrases: [
    { sense: "éloigner", arabic: "وَمَا هُوَ بِمُزَحْزِحِهِ مِنَ الْعَذَابِ", phon: "wa-ma huwa bi-muzahzihihi mina al-'adhabi", french: "Ce n'est pas ce qui l'eloignerait du chatiment." },
    { sense: "écarter", arabic: "فَمَن زُحْزِحَ عَنِ النَّارِ", phon: "fa-man zuhziha 'ani al-nari", french: "Quiconque est ecarte du Feu." },
    { sense: "repousser", arabic: "وَأُدْخِلَ الْجَنَّةَ فَقَدْ فَازَ", phon: "wa-udkhila al-jannata faqad faza", french: "Et introduit au Paradis a certes reussi." }
  ]},
  // edw (id=457) — hostilite
  { analysis_id: 457, phrases: [
    { sense: "ennemi", arabic: "مَن كَانَ عَدُوًّا لِّجِبْرِيلَ", phon: "man kana 'aduwwan li-Jibrila", french: "Quiconque est un ennemi de Jibril." },
    { sense: "hostilité", arabic: "إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ", phon: "inna al-shaytana lakum 'aduwwun", french: "Certes le diable est pour vous un ennemi." },
    { sense: "agression", arabic: "فَلَا عُدْوَانَ إِلَّا عَلَى الظَّالِمِينَ", phon: "fa-la 'udwana illa 'ala al-zalimina", french: "Pas d'agression sauf contre les injustes." }
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

  const verseIds = [102, 103, 104];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 95 A 97 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 95; v <= 97; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V95-97 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
