const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 51 À 54
// verse_id=58 (2:51), verse_id=59 (2:52), verse_id=60 (2:53), verse_id=61 (2:54)
// =====================================================
// CRITICAL: concept names and senses are read from DB (concepts JSON)
// Word key corrections: ax -> akhḏ (id=534)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:51
  // verse_id=58, analysis_id=415
  // "Et lorsque Nous donnames rendez-vous a Moise pendant quarante nuits,
  //  puis vous prîtes le veau après lui, et vous etiez injustes"
  // =====================================================
  51: {
    verse_id: 58,
    analysis_id: 415,
    translation_arab: "Et lorsque Nous donnames rendez-vous a Moise pendant quarante nuits, puis vous prîtes le veau apres lui, et vous etiez injustes.",
    full_translation: "Et [rappelez-vous] lorsque Nous donnames a Moise un rendez-vous de quarante nuits. Puis vous prîtes le veau [comme idole] apres son [depart] et vous etiez injustes.",
    translation_explanation: `§DEMARCHE§
Ce verset rappelle l'episode du veau d'or. Le verbe **wa'adna** est un accompli 1PP forme III de la racine w-e-d. Le Lane's donne « he promised, he appointed a time or a meeting ». La forme III (reciprocite) implique un rendez-vous entre deux parties — Dieu et Moise se fixent un rendez-vous. Le nom propre **Musa** designe le prophete Moise. Le mot **arba'ina** est un nom pluriel de la racine r-b-e. Le Lane's donne « forty ». Quarante est un nombre complet — la periode du rendez-vous est une epreuve de patience. Le mot **laylatan** est un nom feminin singulier de la racine l-y-l au cas accusatif. Le Lane's donne « night ». La nuit est choisie car c'est le temps de la communion avec Dieu, de l'intimite spirituelle. Le verbe **ittakhadhtum** est un accompli 2MP forme VIII de la racine a-kh-dh. Le Lane's donne « he took, he adopted, he chose ». La forme VIII (reflexif) signifie « se prendre pour soi, adopter ». Les enfants d'Israel ont adopte le veau comme objet d'adoration de leur propre initiative. Le mot **al-'ijla** est un nom masculin singulier defini de la racine e-j-l. Le Lane's donne « calf, young bull ». Le veau designe le veau d'or fabrique en l'absence de Moise. Le mot **ba'dihi** est un nom de la racine b-e-d avec pronom 3MS. Le Lane's donne « after, following ». Le mot **zalimuna** est un participe actif pluriel masculin de la racine z-l-m. Le Lane's donne « unjust, oppressor, wrongdoer ». Le participe actif decrit un etat — ils etaient des injustes (pas simplement ils ont commis une injustice).

§JUSTIFICATION§
**donnames rendez-vous** — Le sens retenu est « promettre ». Le verbe wa'adna forme III signifie fixer un rendez-vous, promettre une rencontre. L'alternative « menacer » est ecartee car le contexte est un rendez-vous entre Dieu et Moise, pas une menace.

**quarante** — Le sens retenu est « quatre ». Le mot arba'ina designe le nombre quarante. Pas d'alternative pertinente.

**nuits** — Le sens retenu est « nuit ». Le mot laylatan designe une nuit. L'alternative « obscurite » est ecartee car le contexte specifie une duree (quarante nuits), pas un etat de tenebres.

**prîtes** — Le sens retenu est « prendre ». Le verbe ittakhadhtum forme VIII signifie adopter, prendre pour soi. L'alternative « punir » est ecartee car ce sont les enfants d'Israel qui prennent le veau, pas qui punissent quelqu'un.

**veau** — Le sens retenu est « veau ». Le mot al-'ijl designe le jeune bovin. L'alternative « se hater » est ecartee car le contexte designe l'objet d'adoration, pas un acte de precipitation.

**apres** — Le sens retenu est « apres ». Le mot ba'dihi designe la posteriorite temporelle. L'alternative « eloignement » est ecartee car le contexte est temporel (apres le depart de Moise).

**injustes** — Le sens retenu est « etre injuste ». Le mot zalimuna au participe actif designe ceux qui commettent l'injustice. L'alternative « obscurite » est ecartee car le contexte est moral (l'injustice de l'idolatrie), pas physique.

§CRITIQUE§
**donnames rendez-vous vs promîmes** — Le Lane's donne pour wa'ada forme III « he appointed with him a time or meeting ». « Donnâmes rendez-vous » est plus precis que « promîmes » car la forme III implique une reciprocite — Dieu et Moise se fixent un rendez-vous, ce n'est pas une promesse unilaterale.
**prîtes vs adoptâtes** — Le Lane's donne pour ittakhadha « he took for himself, adopted ». « Prîtes » est plus litteral et direct. « Adoptâtes » ajouterait une nuance d'adhesion deliberee qui est vraie mais moins neutre.
**injustes vs oppresseurs** — Le Lane's donne « unjust, wrongdoer ». « Injustes » est plus large que « oppresseurs » — l'injustice ici est envers eux-memes (adorer le veau au lieu de Dieu), pas envers un tiers.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idh", arabic: "وَإِذْ", is_particle: true, position: 1 },
      { fr: "Nous donnâmes rendez-vous", pos: "verbe", phon: "wa'adna", arabic: "وَٰعَدْنَا", word_key: "wed", is_particle: false, sense_retenu: "promettre", position: 2 },
      { fr: "a Moise", phon: "musa", arabic: "مُوسَYٰٓ", is_particle: true, position: 3 },
      { fr: "quarante", pos: "nom", phon: "arba'ina", arabic: "أَرْبَعِينَ", word_key: "rbe", is_particle: false, sense_retenu: "quatre", position: 4 },
      { fr: "nuits", pos: "nom", phon: "laylatan", arabic: "لَيْلَةً", word_key: "lyl", is_particle: false, sense_retenu: "nuit", position: 5 },
      { fr: "puis", phon: "thumma", arabic: "ثُمَّ", is_particle: true, position: 6 },
      { fr: "vous prîtes", pos: "verbe", phon: "ittakhadhtum", arabic: "ٱتَّخَذْتُمُ", word_key: "akhḏ", is_particle: false, sense_retenu: "prendre", position: 7 },
      { fr: "le veau", pos: "nom", phon: "al-'ijla", arabic: "ٱلْعِجْلَ", word_key: "ejl", is_particle: false, sense_retenu: "veau", position: 8 },
      { fr: "de", phon: "min", arabic: "مِن۞", is_particle: true, position: 9 },
      { fr: "apres lui", pos: "nom", phon: "ba'dihi", arabic: "بَعْدِهِ.", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 10 },
      { fr: "et vous", phon: "wa-antum", arabic: "وَأَنتُمْ", is_particle: true, position: 11 },
      { fr: "etiez injustes", pos: "nom", phon: "zalimuna", arabic: "ظَٰلِمُونَ", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 12 }
    ],
    words: [
      {
        word_key: "wed", position: 2, sense_chosen: "promettre",
        analysis_axes: {
          sense_chosen: "promettre",
          concept_chosen: "Promesse/Engagement",
          concepts: {
            "Promesse/Engagement": {
              status: "retenu",
              senses: ["promettre", "promesse", "engagement", "rendez-vous"],
              proof_ctx: "Le verbe wa'adna est un accompli 1PP forme III de la racine w-e-d. Le Lane's donne « he promised, he appointed a time or meeting ». La forme III (mufa'ala) implique un rendez-vous bilateral — Dieu fixe a Moise un temps et un lieu de rencontre. La promesse est le noyau de cette racine : engager sa parole pour l'avenir. Le pluriel de majeste (Nous) souligne la souverainete divine dans cette promesse.",
              axe1_verset: "Le verbe wa'adna ouvre le verset par le rappel d'un rendez-vous divin. Dieu a promis a Moise quarante nuits de communion — c'est une promesse d'intimite spirituelle. Mais pendant cette absence, les enfants d'Israel ont trahi en prenant le veau. Le verset oppose la promesse divine (fidelite) a la trahison humaine (infidelite). La promesse de Dieu est tenue ; la fidelite des enfants d'Israel ne l'est pas.",
              axe2_voisins: "Le verset 49 rappelait la delivrance de Pharaon. Le verset 50 rappelait la traversee de la mer. Ce verset 51 introduit une nouvelle epreuve : l'absence de Moise pendant quarante nuits. Les bienfaits divins (delivrance, traversee) sont suivis d'une epreuve de foi (l'absence du prophete). Le rendez-vous avec Moise est aussi un test pour le peuple — peuvent-ils rester fideles sans le prophete visible ?",
              axe3_sourate: "La racine w-e-d est structurante dans la sourate al-Baqarah. En 2:80, « Dieu ne manque pas a Sa promesse ». En 2:268, le diable promet la pauvrete et Dieu promet le pardon et la grace. La sourate oppose les promesses de Dieu (vraies et certaines) aux promesses du diable (fausses et trompeuses). Le rendez-vous avec Moise est une promesse tenue par Dieu.",
              axe4_coherence: "La racine w-e-d apparait 153 fois dans le Coran. La promesse divine est un theme central. En 73:18, « la promesse de Dieu est une promesse realisee ». En 39:20, les pieux auront des chambres au-dessus desquelles il y a des chambres — c'est la promesse de Dieu. La promesse de quarante nuits a Moise est mentionnee aussi en 7:142 avec la meme structure narrative.",
              axe5_frequence: "Pour la mission du khalifa, la promesse est le lien entre Dieu et Son representant. Moise recoit un rendez-vous parce qu'il est le khalifa de Dieu aupres de son peuple. L'absence du khalifa est une epreuve pour la communaute — la promesse de Dieu continue meme quand le representant est absent. La fidelite a la promesse est le test du peuple."
            },
            "Menace/Avertissement": {
              status: "nul",
              senses: ["menacer"],
              proof_ctx: "Le sens de menace est un usage de w-e-d quand la promesse concerne un chatiment. Le contexte est un rendez-vous entre Dieu et Moise, pas une menace. Le verbe wa'adna est suivi de Moise et de quarante nuits — c'est une invitation, pas un avertissement."
            }
          }
        }
      },
      {
        word_key: "rbe", position: 4, sense_chosen: "quatre",
        analysis_axes: {
          sense_chosen: "quatre",
          concept_chosen: "Nombre/Quaternité",
          concepts: {
            "Nombre/Quaternité": {
              status: "retenu",
              senses: ["quatre", "quatrième", "quart"],
              proof_ctx: "Le mot arba'ina est le nombre quarante de la racine r-b-e. Le Lane's donne « four, forty ». Le nombre quarante est recurrent dans les recits prophetiques — c'est une periode de maturation et de preparation. Moise a passe quarante nuits sur le mont Sinai pour recevoir la Torah. Le quatre est la base (quatre fois dix) et symbolise une duree complete.",
              axe1_verset: "Le mot arba'ina qualifie la duree du rendez-vous : quarante nuits. Cette duree est specifique et signifiante — ce n'est pas un temps arbitraire mais une periode de preparation spirituelle. Quarante nuits de communion avec Dieu pour recevoir la Torah. Le verset oppose cette duree de sanctification (quarante nuits) a l'impatience du peuple qui a pris le veau sans attendre le retour de Moise.",
              axe2_voisins: "Les versets precedents (49-50) decrivaient des interventions divines ponctuelles (delivrance, traversee). Ce verset 51 introduit une duree prolongee (quarante nuits). Le passage du ponctuel au prolonge est significatif — la foi n'est pas seulement eprouvee dans les crises mais aussi dans l'attente. L'epreuve de la duree est plus subtile que l'epreuve du danger.",
              axe3_sourate: "Le nombre quarante n'apparait qu'ici et en 7:142 dans le contexte du rendez-vous de Moise. La sourate al-Baqarah utilise ce nombre pour marquer l'intensite de la preparation prophetique. La Torah est le fruit de quarante nuits de communion — c'est un livre ne d'une longue intimite entre Dieu et Son prophete.",
              axe4_coherence: "La racine r-b-e apparait 17 fois dans le Coran. En 7:142, « Nous donnâmes a Moise rendez-vous pendant trente nuits et Nous les complétâmes par dix, de sorte que le temps fixe par son Seigneur fut de quarante nuits ». Cette precision montre que les quarante nuits ne sont pas un chiffre rond mais un temps precis et voulu par Dieu. En 46:15, l'homme atteint sa force a quarante ans — le quarante est un seuil de maturite.",
              axe5_frequence: "Pour la mission du khalifa, le nombre quarante represente le temps necessaire a la maturation spirituelle. Le khalifa ne peut pas recevoir la guidance en un instant — il faut un temps de preparation. Moise a eu besoin de quarante nuits pour etre pret a recevoir la Torah. La patience dans la preparation est une qualite essentielle du khalifa."
            }
          }
        }
      },
      {
        word_key: "lyl", position: 5, sense_chosen: "nuit",
        analysis_axes: {
          sense_chosen: "nuit",
          concept_chosen: "Nuit/Obscurité",
          concepts: {
            "Nuit/Obscurité": {
              status: "retenu",
              senses: ["nuit", "obscurité", "ténèbres"],
              proof_ctx: "Le mot laylatan est un nom feminin singulier indefini au cas accusatif de la racine l-y-l. Le Lane's donne « night, the period of darkness between sunset and sunrise ». La nuit est l'unite de temps choisie pour mesurer la duree du rendez-vous — pas « quarante jours » mais « quarante nuits ». La nuit est le temps de la priere et de l'intimite avec Dieu (qiyam al-layl). Le choix de la nuit indique la nature spirituelle du rendez-vous.",
              axe1_verset: "Le mot laylatan est le complement de arba'ina — quarante nuits. La nuit est le cadre temporel du rendez-vous entre Dieu et Moise. Le choix de la nuit plutot que du jour est significatif : la nuit est le temps du secret, de l'intimite, de la revelation. Moise recoit la Torah dans l'obscurite — la lumiere divine se revele dans l'obscurite de la nuit. Le verset oppose la nuit sacree (rendez-vous avec Dieu) a l'obscurite morale (adoration du veau).",
              axe2_voisins: "Les versets precedents decrivaient des evenements diurnes (delivrance de Pharaon, traversee de la mer). Ce verset 51 passe a la nuit. La nuit est le temps ou le peuple est prive de son guide visible — Moise est parti dans la nuit pour rencontrer Dieu. L'absence du guide dans la nuit est l'epreuve supreme de la foi.",
              axe3_sourate: "La nuit apparait dans la sourate al-Baqarah en 2:51 et 2:187 (nuit du jeune). La nuit est toujours un temps d'epreuve et d'intimite — l'intimite avec Dieu dans la priere nocturne ou l'intimite conjugale permise pendant les nuits du Ramadan. La nuit est un temps de confiance ou l'on ne voit pas mais ou l'on croit.",
              axe4_coherence: "La racine l-y-l apparait 92 fois dans le Coran. En 73:2-4, « leve-toi la nuit sauf un peu, la moitie ou diminue un peu, et recite le Coran posement ». En 17:1, le voyage nocturne (isra') se fait de nuit. En 97:1, la Nuit du Destin vaut mieux que mille mois. La nuit est le temps privilegié de la revelation et de l'intimite divine dans tout le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la nuit est le temps de la preparation interieure. Le khalifa se prepare la nuit par la priere et la meditation pour agir le jour. Moise se prepare quarante nuits pour recevoir la mission de transmettre la Torah. La nuit forge le khalifa en secret pour qu'il agisse en pleine lumiere."
            }
          }
        }
      },
      {
        word_key: "akhḏ", position: 7, sense_chosen: "prendre",
        analysis_axes: {
          sense_chosen: "prendre",
          concept_chosen: "Prise/Acquisition",
          concepts: {
            "Prise/Acquisition": {
              status: "retenu",
              senses: ["prendre", "saisir", "recevoir", "punir"],
              proof_ctx: "Le verbe ittakhadhtum est un accompli 2MP forme VIII de la racine a-kh-dh. Le Lane's donne « he took, he took for himself, he adopted ». La forme VIII (reflexif) signifie « se prendre pour soi, adopter de sa propre initiative ». Les enfants d'Israel ont deliberement choisi de prendre le veau comme objet d'adoration — c'est un acte volontaire, pas une contrainte exterieure. La prise est ici une appropriation sacrilege.",
              axe1_verset: "Le verbe ittakhadhtum marque le basculement du verset. La premiere partie decrit le rendez-vous divin (promesse, quarante nuits). La seconde partie, introduite par « puis » (thumma), decrit la trahison (vous prîtes le veau). Le verbe ittakhadha implique une adoption deliberee — ils n'ont pas ete forces mais ont choisi le veau. L'opposition entre le rendez-vous divin et l'adoption du veau est totale.",
              axe2_voisins: "Les versets 49-50 rappelaient les bienfaits divins (delivrance, traversee). Ce verset 51 revele la reponse des enfants d'Israel : au lieu de la gratitude, l'idolatrie. Le verbe « prendre » souligne l'initiative humaine dans le mal — Dieu donne (bienfaits) et les hommes prennent (le veau). Le contraste entre le don divin et la prise humaine structure toute cette section.",
              axe3_sourate: "La racine a-kh-dh est tres frequente dans la sourate al-Baqarah. En 2:48, « nulle rancon ne sera prise (yu'khadhu) ». En 2:255, « ni somnolence ni sommeil ne Le prennent ». Le sens de prendre est versatile — Dieu prend les ames, les hommes prennent des idoles. La sourate distingue les prises legitimes (ce que Dieu ordonne de prendre) des prises illégitimes (ce que les hommes prennent sans droit).",
              axe4_coherence: "La racine a-kh-dh apparait 273 fois dans le Coran. C'est l'une des racines les plus frequentes. En 7:148, « le peuple de Moise, en son absence, se fabriqua un veau ». En 20:88, le Samiri jeta et fit sortir un veau. Le Coran revient plusieurs fois sur cet episode — la prise du veau est l'archetype de l'idolatrie. Prendre un autre que Dieu comme objet d'adoration est la faute fondamentale.",
              axe5_frequence: "Pour la mission du khalifa, la prise du veau est l'echec de la mission. Le peuple, en l'absence de son guide, prend un objet fabrique comme remplacement de Dieu. Le khalifa qui s'absente laisse un vide que le peuple remplit mal. L'episode du veau montre que la guidance permanente est necessaire — un peuple sans khalifa present derive vers l'idolatrie."
            }
          }
        }
      },
      {
        word_key: "ejl", position: 8, sense_chosen: "veau",
        analysis_axes: {
          sense_chosen: "veau",
          concept_chosen: "Idolâtrie",
          concepts: {
            "Hâte/Précipitation": {
              status: "probable",
              senses: ["précipiter", "se hâter", "presser"],
              proof_ctx: "La hate est un sens important de la racine e-j-l. Le Lane's donne « he hastened, was quick, he hurried ». La precipitation est la disposition interieure a agir trop vite. Le contexte utilise al-'ijla dans son sens de « veau » (jeune bovin), pas dans le sens de « hate ». Cependant, il y a un lien semantique — les enfants d'Israel se sont precipites (empresses) pour prendre le veau au lieu d'attendre patiemment le retour de Moise. La hate et le veau sont lies dans la racine comme dans le recit.",
              axe1_verset: "Le verset oppose la patience requise (quarante nuits) a l'impatience du peuple. Le mot « puis » (thumma) indique un delai — ils n'ont pas attendu longtemps. La precipitation est sous-jacente dans le recit meme si le mot est utilise dans le sens de « veau ». L'adoption du veau est un acte precipite, fait dans l'impatience de l'absence du guide.",
              axe2_voisins: "Les versets precedents rappelaient les bienfaits accumules (delivrance, traversee). La reponse precipitee du peuple contraste avec la patience divine. Dieu a delivre progressivement, etape par etape. Le peuple a trahi d'un coup, sans attendre. La precipitation est l'inverse de la patience divine.",
              axe3_sourate: "La racine e-j-l revient en 2:54 ou Moise dit « vous avez ete injustes en prenant le veau ». La sourate insiste sur cet episode comme un exemple majeur d'echec. La precipitation du peuple est un theme qui traverse la sourate — les croyants sont appeles a la patience, pas a la hate.",
              axe4_coherence: "La racine e-j-l dans le sens de hate apparait en 17:11 « l'homme prie pour le mal comme il prie pour le bien — l'homme est precipite ». La precipitation est un defaut humain fondamental selon le Coran. En 21:37, « l'homme est cree de precipitation ». La hate est inscrite dans la nature humaine et le Coran appelle a la combattre par la patience.",
              axe5_frequence: "Pour la mission du khalifa, la precipitation est l'ennemi de la mission. Le khalifa doit agir avec discernement, pas avec empressement. Les enfants d'Israel ont echoue parce qu'ils se sont precipites au lieu de patienter. La hate mene a l'idolatrie — on fabrique un substitut au lieu d'attendre le vrai."
            },
            "Idolâtrie": {
              status: "retenu",
              senses: ["veau"],
              proof_ctx: "Le mot al-'ijla est un nom masculin singulier defini au cas accusatif de la racine e-j-l. Le Lane's donne « calf, young bull ». Le veau designe ici specifiquement le veau d'or fabrique par les enfants d'Israel en l'absence de Moise. Le Lane's precise que le 'ijl est un bovin qui n'a pas encore atteint l'age adulte. Le veau est jeune et fragile — adorer un etre jeune et fragile au lieu du Createur est l'archeype de l'erreur.",
              axe1_verset: "Le mot al-'ijla est l'objet du verbe ittakhadhtum (vous prîtes). Le veau est ce que les enfants d'Israel ont adopte a la place de Dieu. Le verset ne decrit pas la fabrication du veau mais l'acte d'adoption — le peche n'est pas d'avoir fabrique un objet mais de l'avoir pris comme divinite. Le veau est l'idole par excellence dans le recit coranique des enfants d'Israel.",
              axe2_voisins: "Les versets precedents rappelaient que Dieu a sauve les enfants d'Israel (v49) et leur a ouvert la mer (v50). Ce verset 51 montre que malgre ces bienfaits immenses, le peuple a pris un veau comme divinite. Le contraste est maximal — entre le Dieu qui sauve et le veau qui n'a aucun pouvoir. Le veau est le symbole de l'ingratitude et de la trahison.",
              axe3_sourate: "Le veau apparait en 2:51, 2:54 et 2:92 dans la sourate al-Baqarah. Chaque mention rappelle la meme faute — l'adoration du veau est le peche originel des enfants d'Israel. La sourate utilise cet episode comme paradigme de l'idolatrie : prendre une creature a la place du Createur.",
              axe4_coherence: "Le veau d'or est mentionne dans le Coran en 2:51, 2:54, 2:92-93, 4:153, 7:148-152, 20:88-97. Chaque mention ajoute un detail. En 7:148, le veau est fabrique a partir de leurs bijoux. En 20:88, le Samiri a jete et a fait sortir un corps de veau qui mugissait. Le recit est coherent — le veau est toujours presente comme l'erreur fatale qui a compromis l'alliance entre Dieu et les enfants d'Israel.",
              axe5_frequence: "Pour la mission du khalifa, le veau represente tout ce que le khalifa peut mettre a la place de Dieu. L'idolatrie n'est pas seulement adorer une statue — c'est accorder la priorite a un objet fabrique (richesse, pouvoir, desir) au lieu du Createur. Le khalifa qui prend un veau abandonne sa mission. Le veau est l'anti-mission du khalifa."
            }
          }
        }
      },
      {
        word_key: "baed", position: 10, sense_chosen: "après",
        analysis_axes: {
          sense_chosen: "après",
          concept_chosen: "Postériorité",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["après", "ensuite"],
              proof_ctx: "Le mot ba'dihi est un nom de la racine b-e-d au cas genitif avec pronom 3MS. Le Lane's donne « after, subsequent to, following ». Le mot designe la posteriorite temporelle — apres le depart de Moise. Le pronom 3MS (hi) renvoie a Moise. La posteriorite indique que le peche est survenu dans l'absence du guide — apres que Moise est parti, ils ont pris le veau.",
              axe1_verset: "Le mot ba'dihi situe la prise du veau dans le temps : apres le depart de Moise. L'absence du prophete est la condition de la chute — le peuple n'a pas supporte l'epreuve de l'attente. Le « apres » est un marqueur de causalite implicite : c'est parce que Moise etait parti que le peuple a derive. La posteriorite temporelle est aussi une posteriorite morale — apres la guidance vient l'egarement.",
              axe2_voisins: "Les versets precedents montraient Dieu agissant pour les enfants d'Israel (sauver, fendre la mer). Ce verset 51 montre les enfants d'Israel agissant contre Dieu (prendre le veau). Le mot « apres » marque la transition — apres les bienfaits de Dieu, la trahison du peuple. La posteriorite est aussi une ironie — apres tout ce que Dieu a fait pour eux, voila ce qu'ils font.",
              axe3_sourate: "La racine b-e-d revient constamment dans la sourate al-Baqarah pour marquer les sequences temporelles et morales. En 2:52, « puis Nous vous pardonnâmes apres cela ». En 2:92, « Moise vint a vous avec les preuves et vous prîtes le veau apres son depart ». Le mot « apres » structure la chronologie des fautes et des pardons dans la sourate.",
              axe4_coherence: "La racine b-e-d apparait 200 fois dans le Coran. Le sens temporel (apres) domine largement. En 7:150, « quand Moise retourna a son peuple, furieux et afflige ». Le retour de Moise est le moment apres lequel vient la confrontation. Le « apres » coranique est souvent le moment de la rupture — apres la guidance, l'egarement ; apres la patience, l'impatience.",
              axe5_frequence: "Pour la mission du khalifa, le « apres » est le moment critique. Apres avoir recu la guidance, que fait le khalifa ? Apres le depart du prophete, que fait la communaute ? Le « apres » est le test de la sincerite — la fidelite dans l'absence est plus difficile que la fidelite dans la presence. Le khalifa fidele reste fidele « apres » le depart du guide."
            },
            "Éloignement/Distance": {
              status: "nul",
              senses: ["être loin", "éloignement"],
              proof_ctx: "L'eloignement spatial est un sens de b-e-d. Le contexte utilise ba'di dans son sens temporel (apres), pas spatial (loin). Le pronom 3MS (hi, renvoyant a Moise) confirme le sens temporel — apres lui (apres son depart), pas loin de lui."
            },
            "Mort/Destruction": {
              status: "nul",
              senses: ["périr"],
              proof_ctx: "Le sens de perir est un sens figure de b-e-d (celui qui est eloigne definitivement). Le contexte est temporel — apres le depart de Moise, pas apres sa mort. Moise n'est pas mort mais parti pour un rendez-vous de quarante nuits."
            }
          }
        }
      },
      {
        word_key: "zlm", position: 12, sense_chosen: "être injuste",
        analysis_axes: {
          sense_chosen: "être injuste",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "injustice", "oppresseur", "être injuste"],
              proof_ctx: "Le mot zalimuna est un participe actif pluriel masculin de la racine z-l-m. Le Lane's donne « unjust, oppressor, wrongdoer, one who places a thing where it should not be ». Le participe actif (ism fa'il) indique un etat permanent — ils ne sont pas simplement ceux qui ont commis une injustice ponctuelle mais ceux qui sont dans un etat d'injustice. Mettre le veau a la place de Dieu est l'archetype du zulm (mettre quelque chose a une place qui n'est pas la sienne).",
              axe1_verset: "Le mot zalimuna cloture le verset comme un verdict. Apres la narration (rendez-vous, prise du veau), le jugement tombe : « et vous etiez des injustes ». Le participe actif au nominatif (khabar) decrit leur etat — ils sont qualifies d'injustes de maniere essentielle, pas accidentelle. L'injustice est envers Dieu (Lui substituer un veau) et envers eux-memes (se priver de la guidance).",
              axe2_voisins: "Le verset 47 rappelait la distinction des enfants d'Israel « par-dessus les mondes ». Ce verset 51 les qualifie d'injustes. Le contraste est saisissant — le peuple le plus distingue par Dieu est aussi le peuple le plus injuste envers Lui. La distinction n'empeche pas l'injustice. Les versets suivants (52-53) montreront le pardon divin malgre cette injustice.",
              axe3_sourate: "La racine z-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:35, « ne soyez pas des injustes ». En 2:54, Moise dit « vous avez ete injustes envers vous-memes ». En 2:124, « Mon alliance ne touche pas les injustes ». L'injustice est le theme central de la sourate — elle exclut de l'alliance divine et appelle le repentir.",
              axe4_coherence: "La racine z-l-m apparait 315 fois dans le Coran. C'est le mot le plus utilise pour decrire le peche. En 31:13, « le shirk (associationnisme) est une injustice immense ». En 6:82, « ceux qui croient et ne revetent pas leur foi d'injustice ». L'injustice est definie par le Lane's comme « placer une chose la ou elle ne devrait pas etre » — adorer le veau au lieu de Dieu est l'injustice par excellence.",
              axe5_frequence: "Pour la mission du khalifa, l'injustice est l'echec de la mission. Le khalifa est place pour etablir la justice — quand il commet l'injustice, il trahit sa raison d'etre. Les enfants d'Israel, distingues par Dieu comme khalifas, sont devenus injustes en prenant le veau. L'injustice du khalifa est pire que celle de l'homme ordinaire car il trahit une mission sacree."
            },
            "Obscurité/Ténèbres": {
              status: "nul",
              senses: ["obscurité", "ténèbres"],
              proof_ctx: "L'obscurite est un sens de z-l-m lie a l'absence de lumiere. Le contexte utilise zalimuna dans son sens moral (injustes), pas physique (dans l'obscurite). Le participe actif confirme un etat moral — ils sont des faiseurs d'injustice, pas des etres dans le noir."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["se faire du tort"],
              proof_ctx: "Le sens de « se faire du tort » est un usage specifique de z-l-m. Le contexte est plus large — ils sont injustes envers Dieu (substitution) et envers eux-memes. Le participe actif pluriel indique un etat collectif d'injustice, pas seulement un tort individuel."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:52
  // verse_id=59, analysis_id=419
  // "Puis Nous vous pardonnâmes après cela, afin que vous soyez reconnaissants"
  // =====================================================
  52: {
    verse_id: 59,
    analysis_id: 419,
    translation_arab: "Puis Nous vous pardonnâmes apres cela, afin que vous soyez reconnaissants.",
    full_translation: "Puis Nous vous pardonnâmes apres cela, afin que vous rendiez grace.",
    translation_explanation: `§DEMARCHE§
Ce verset annonce le pardon divin apres la faute du veau d'or. Le verbe **'afawna** est un accompli 1PP de la racine e-f-w. Le Lane's donne « he pardoned, he forgave, he effaced ». Le pardon divin ('afw) est un effacement de la faute — Dieu ne punit pas alors que la punition etait meritee. Le pronom 'ankum indique que le pardon est dirige vers les enfants d'Israel. Le mot **ba'di** est un nom de la racine b-e-d. Le Lane's donne « after ». L'adverbe « apres cela » (min ba'di dhalika) situe le pardon apres la faute du veau — le pardon vient apres le peche, pas avant. Le mot **la'allakum** est une particule d'esperance suivie du pronom 2MP. Le Lane's donne « perhaps, in order that, so that ». La particule la'alla exprime un espoir ou un objectif — le pardon est accorde dans le but de susciter la gratitude. Le verbe **tashkuruna** est un inaccompli 2MP de la racine sh-k-r (non analyse car sans word_key dans les segments).

§JUSTIFICATION§
**pardonnâmes** — Le sens retenu est « pardonner ». Le verbe 'afawna de la racine e-f-w signifie effacer la faute, renoncer a la punition. L'alternative « surplus » est ecartee car le contexte est le pardon apres la faute du veau, pas un surplus materiel.

**apres** — Le sens retenu est « apres ». Le mot ba'di designe la posteriorite temporelle. Le pardon vient apres la faute — la sequence est : faute (verset 51) puis pardon (verset 52).

§CRITIQUE§
**pardonnâmes vs excusâmes** — Le Lane's donne pour 'afa « he pardoned, he effaced the sin ». « Pardonnâmes » est plus fort que « excusâmes » car le pardon efface la faute alors que l'excuse la minimise. La faute du veau n'est pas minimisee — elle est effacee par la grace divine.
**afin que vs peut-etre** — La particule la'alla peut signifier « peut-etre » ou « afin que ». « Afin que » est plus coherent avec le contexte — le pardon a un objectif (susciter la gratitude), ce n'est pas une simple probabilite.`,
    segments: [
      { fr: "puis", phon: "thumma", arabic: "ثُمَّ", is_particle: true, position: 1 },
      { fr: "Nous vous pardonnâmes", pos: "verbe", phon: "'afawna", arabic: "عَفَوْنَا", word_key: "efw", is_particle: false, sense_retenu: "pardonner", position: 2 },
      { fr: "de vous", phon: "'ankum", arabic: "عَنكُم", is_particle: true, position: 3 },
      { fr: "de", phon: "min", arabic: "مِّن۞", is_particle: true, position: 4 },
      { fr: "apres", pos: "nom", phon: "ba'di", arabic: "بَعْدِ", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 5 },
      { fr: "cela", phon: "dhalika", arabic: "ذَٰلِكَ", is_particle: true, position: 6 },
      { fr: "afin que vous", phon: "la'allakum", arabic: "لَعَلَّكُمْ", is_particle: true, position: 7 },
      { fr: "soyez reconnaissants", phon: "tashkuruna", arabic: "تَشْكُرُونَ", is_particle: true, position: 8 }
    ],
    words: [
      {
        word_key: "efw", position: 2, sense_chosen: "pardonner",
        analysis_axes: {
          sense_chosen: "pardonner",
          concept_chosen: "Pardon/Effacement",
          concepts: {
            "Pardon/Effacement": {
              status: "retenu",
              senses: ["pardonner", "effacer", "excuser"],
              proof_ctx: "Le verbe 'afawna est un accompli 1PP de la racine e-f-w. Le Lane's donne « he pardoned, forgave, effaced, obliterated ». Le pardon ('afw) est un effacement — la faute est gomméee comme une trace effacee du sable. Le pronom 1PP (Nous) est le pluriel de majeste divin. Le pardon divin est un acte souverain et gratuit — Dieu efface la faute du veau d'or sans condition prealable. L'objet du pardon est le peuple entier ('ankum, de vous) — le pardon est collectif.",
              axe1_verset: "Le verbe 'afawna est le noyau du verset. Tout le verset tourne autour de cet acte de pardon. La structure est simple : le pardon (sujet), son moment (apres cela), et son objectif (afin que vous soyez reconnaissants). Le pardon vient apres la faute grave du veau (verset 51) — Dieu ne laisse pas la faute sans reponse, mais la reponse est le pardon, pas le chatiment. Le verset montre la misericorde divine en acte.",
              axe2_voisins: "Le verset 51 decrivait la faute (prise du veau). Ce verset 52 decrit la reponse divine (le pardon). Le verset 53 donnera un nouveau bienfait (le Livre et le Critere). La sequence faute-pardon-bienfait montre la pedagogie divine — Dieu punit rarement immediatement ; Il pardonne et donne une nouvelle chance. La faute du veau n'a pas detruit l'alliance car le pardon l'a restauree.",
              axe3_sourate: "La racine e-f-w apparait dans la sourate al-Baqarah en 2:52, 2:187 et 2:219. En 2:187, les relations conjugales pendant les nuits du Ramadan sont une concession ('afa 'ankum). En 2:219, on demande ce qu'il faut depenser : reponds « le surplus (al-'afw) ». La racine porte les deux sens de pardon et de surplus — le pardon est le surplus de misericorde que Dieu accorde au-dela de ce que la justice stricte exigerait.",
              axe4_coherence: "La racine e-f-w apparait 35 fois dans le Coran. Dieu est al-'Afuww (le Pardonnant) — c'est l'un de Ses noms. En 4:43, « Dieu efface et pardonne (kana 'afuwwan) ». En 42:25, « c'est Lui qui accepte le repentir et efface les mauvaises actions ». Le pardon divin est un theme transversal — Dieu pardonne toujours a celui qui se repent sincerement. Le pardon du veau d'or montre que meme le shirk peut etre pardonne si le repentir est sincere.",
              axe5_frequence: "Pour la mission du khalifa, le pardon est la condition de la continuation de la mission. Sans le pardon, la faute du veau aurait mis fin a l'alliance avec les enfants d'Israel. Grâce au pardon, la mission continue. Le khalifa qui faute n'est pas definitivement condamne — le pardon divin lui permet de reprendre sa mission. Mais le pardon appelle la gratitude et la vigilance, pas la repetition de la faute."
            },
            "Surplus/Excès": {
              status: "nul",
              senses: ["surplus"],
              proof_ctx: "Le surplus est un sens secondaire de e-f-w (ce qui depasse le necessaire). Le contexte utilise clairement le sens de pardon — Dieu pardonne apres la faute du veau, Il ne donne pas un surplus materiel. La structure 'afa 'an (pardonner a) confirme le sens de pardon."
            }
          }
        }
      },
      {
        word_key: "baed", position: 5, sense_chosen: "après",
        analysis_axes: {
          sense_chosen: "après",
          concept_chosen: "Postériorité",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["après", "ensuite"],
              proof_ctx: "Le mot ba'di est un nom de la racine b-e-d au cas genitif. Le Lane's donne « after, subsequent to ». Le mot indique que le pardon est survenu apres la faute du veau. Le demonstratif « cela » (dhalika) renvoie a l'episode du veau decrit au verset 51. La posteriorite est la condition du pardon — on ne pardonne qu'apres la faute.",
              axe1_verset: "Le mot ba'di situe le pardon dans la chronologie du recit. La sequence est : faute (verset 51) puis pardon (verset 52). Le mot « apres cela » (min ba'di dhalika) cree un lien causal — c'est parce que la faute a eu lieu que le pardon est necessaire. L'expression « apres cela » est aussi une pause narrative — un temps a passe entre la faute et le pardon, un temps de prise de conscience.",
              axe2_voisins: "Le verset 51 utilisait deja ba'dihi (apres lui, apres le depart de Moise). Ce verset 52 utilise ba'di dhalika (apres cela, apres la faute du veau). La repetition de « apres » cree un enchainement — apres le depart de Moise vient la faute, apres la faute vient le pardon. Chaque « apres » marque une etape dans le drame et sa resolution.",
              axe3_sourate: "La racine b-e-d est omnipresente dans la sourate. En 2:27, « ceux qui rompent le pacte de Dieu apres l'avoir contracte ». En 2:75, « un groupe parmi eux entendait la parole de Dieu puis la falsifiait apres l'avoir comprise ». Le « apres » marque souvent la trahison — apres avoir recu la guidance, la trahir.",
              axe4_coherence: "La racine b-e-d dans le sens temporel structure la narration coranique. Les recits prophetiques sont construits sur des « apres » — apres la guidance, l'egarement ; apres l'egarement, le repentir ; apres le repentir, le pardon. En 7:153, « ceux qui firent le mal puis se repentirent apres et crurent — ton Seigneur apres cela est Pardonneur, Misericordieux ». Le schema est identique.",
              axe5_frequence: "Pour la mission du khalifa, le « apres » est le moment du bilan. Apres avoir recu la mission, qu'a fait le khalifa ? Apres avoir faute, s'est-il repenti ? Le « apres » est le point de retour — tant qu'on peut dire « apres cela, le pardon », la mission n'est pas perdue."
            },
            "Éloignement/Distance": {
              status: "nul",
              senses: ["être loin", "éloignement"],
              proof_ctx: "L'eloignement est un sens spatial de b-e-d. Le contexte est temporel (apres cela), pas spatial. Le demonstratif dhalika confirme le sens temporel — il renvoie a l'evenement du veau, pas a un lieu."
            },
            "Mort/Destruction": {
              status: "nul",
              senses: ["périr"],
              proof_ctx: "Le sens de perir est un sens figure de b-e-d. Le contexte parle du pardon apres la faute, pas de la destruction. Personne ne perit dans ce verset — au contraire, le pardon preserve."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:53
  // verse_id=60, analysis_id=420
  // "Et lorsque Nous donnâmes a Moise le Livre et le Critère,
  //  afin que vous soyez guides"
  // =====================================================
  53: {
    verse_id: 60,
    analysis_id: 420,
    translation_arab: "Et lorsque Nous donnâmes a Moise le Livre et le Critere, afin que vous soyez guides.",
    full_translation: "Et [rappelez-vous] lorsque Nous donnâmes a Moise le Livre et le Critere, afin que vous soyez bien guides.",
    translation_explanation: `§DEMARCHE§
Ce verset rappelle le don de la Torah et du Critere a Moise. Le verbe **aatayna** est un accompli 1PP forme IV de la racine a-t-y. Le Lane's donne « he gave, he brought ». La forme IV (causatif) signifie « faire venir vers quelqu'un, donner ». Le don est un acte divin actif — Dieu donne la Torah a Moise. Le mot **al-kitaba** est un nom masculin singulier defini de la racine k-t-b au cas accusatif. Le Lane's donne « book, scripture, writing ». Le Livre designe la Torah revelee a Moise — c'est un ecrit divin contenant la loi et la guidance. Le mot **al-furqana** est un nom masculin singulier defini de la racine f-r-q au cas accusatif. Le Lane's donne « that by which a distinction is made between truth and falsehood, the criterion ». Le Furqan est ce qui separe le vrai du faux — c'est un critere de discernement. Le verbe **tahtaduna** est un inaccompli 2MP forme VIII de la racine h-d-y. Le Lane's donne « he guided himself, he found the right way ». La forme VIII (reflexif) signifie « se guider soi-meme, trouver le chemin par soi-meme ».

§JUSTIFICATION§
**donnâmes** — Le sens retenu est « donner ». Le verbe aatayna forme IV signifie apporter, donner. L'alternative « venir » est ecartee car la forme IV est causative — Dieu fait venir le Livre vers Moise, c'est-a-dire Il le lui donne.

**Livre** — Le sens retenu est « livre ». Le mot al-kitab designe l'Ecriture revelee. L'alternative « ecrire » est ecartee car le contexte parle d'un objet donne (le Livre), pas d'un acte d'ecriture.

**Critere** — Le sens retenu est « Furqan ». Le mot al-furqan designe ce qui separe le vrai du faux. L'alternative « groupe » est ecartee car le contexte parle d'un don divin pour la guidance, pas d'un groupe de personnes.

**guides** — Le sens retenu est « se guider soi-meme ». Le verbe tahtaduna forme VIII signifie trouver la voie par soi-meme. L'alternative « conduire une mariee » est ecartee car le contexte est la guidance spirituelle, pas un mariage.

§CRITIQUE§
**donnâmes vs accordâmes** — Le Lane's donne pour aata « he gave, he brought ». « Donnâmes » est plus direct et simple. « Accordâmes » ajouterait une nuance de faveur conditionnelle qui n'est pas presente — le don est inconditionnel.
**Critere vs Discernement** — Le Lane's donne « that which distinguishes truth from falsehood ». « Critere » est plus precis que « Discernement » car le furqan est un outil objectif de separation, pas une capacite subjective.
**guides vs trouviez le chemin** — Le Lane's donne pour tahtaduna forme VIII « you guide yourselves ». « Guides » preserve la concision du texte arabe. « Trouviez le chemin » serait plus explicite mais alourdirait la traduction.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idh", arabic: "وَإِذْ", is_particle: true, position: 1 },
      { fr: "Nous donnâmes", pos: "verbe", phon: "aatayna", arabic: "ءَاتَيْنَا", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 2 },
      { fr: "a Moise", phon: "musa", arabic: "مُوسَY", is_particle: true, position: 3 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "ٱلْكِتَٰبَ", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 4 },
      { fr: "et le Critere", pos: "nom", phon: "al-furqana", arabic: "وَٱلْفُرْقَانَ", word_key: "frq", is_particle: false, sense_retenu: "Furqan", position: 5 },
      { fr: "afin que vous", phon: "la'allakum", arabic: "لَعَلَّكُمْ", is_particle: true, position: 6 },
      { fr: "soyez guides", pos: "verbe", phon: "tahtaduna", arabic: "تَهْتَدُونَ", word_key: "hdy", is_particle: false, sense_retenu: "se guider soi-meme", position: 7 }
    ],
    words: [
      {
        word_key: "aty", position: 2, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe aatayna est un accompli 1PP forme IV de la racine a-t-y. Le Lane's donne « he gave, he brought, he granted ». La forme IV (af'ala) est causative — faire venir vers quelqu'un, c'est-a-dire donner. Le sujet est Dieu (Nous) et l'objet indirect est Moise. Le verbe aata est l'un des verbes les plus utilises dans le Coran pour decrire le don divin (kitab, hikma, mulk). La venue est transformee en don par la forme causative.",
              axe1_verset: "Le verbe aatayna ouvre la partie narrative du verset. Dieu a donne a Moise deux choses : le Livre et le Critere. Le don est double — le Livre est le contenu (la loi, la guidance) et le Critere est l'outil de discernement (la capacite de distinguer le vrai du faux). Le don est complet : il donne a la fois le savoir et la methode pour l'appliquer. L'objectif du don est la guidance (tahtaduna).",
              axe2_voisins: "Le verset 51 decrivait la faute (le veau). Le verset 52 decrivait le pardon. Ce verset 53 decrit un nouveau don. La sequence faute-pardon-don montre la generosite divine — apres la faute et le pardon, Dieu ne se contente pas d'effacer mais donne encore plus. Chaque verset ajoute une couche de bienfait : le rendez-vous (v51), le pardon (v52), le Livre (v53).",
              axe3_sourate: "Le verbe aata est omnipresent dans la sourate al-Baqarah. En 2:87, « Nous avons donne a Moise le Livre ». En 2:136, « ce qui a ete donne a Moise et a Jesus ». En 2:251, « Dieu donna a David la royaute et la sagesse ». Le don divin est le moteur de la sourate — Dieu donne constamment (livres, prophetes, bienfaits) et les hommes recoivent avec plus ou moins de gratitude.",
              axe4_coherence: "La racine a-t-y apparait 549 fois dans le Coran. C'est l'une des racines les plus frequentes. Le don divin (aata) couvre : les Ecritures (kitab), la sagesse (hikma), la royaute (mulk), la connaissance ('ilm). En 3:4, « Il a fait descendre la Torah et l'Evangile ». En 17:2, « Nous donnâmes a Moise le Livre ». La Torah est systematiquement presentee comme un don divin a Moise.",
              axe5_frequence: "Pour la mission du khalifa, le don est la dotation de la mission. Le khalifa recoit de Dieu les outils necessaires — le Livre et le Critere. Sans ces outils, la mission est impossible. Moise a recu le Livre pour guider les enfants d'Israel. Le don est la condition de la mission, pas une recompense apres la mission."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["détruire"],
              proof_ctx: "Le sens de detruire est un usage specifique et rare de a-t-y. Le contexte est un don positif (le Livre et le Critere) — il n'y a aucune destruction dans ce verset. La forme IV aata signifie donner, pas detruire."
            }
          }
        }
      },
      {
        word_key: "ktb", position: 4, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "écriture révélée", "livre", "registre", "contrat écrit"],
              proof_ctx: "Le mot al-kitaba est un nom masculin singulier defini au cas accusatif de la racine k-t-b. Le Lane's donne « book, scripture, written document ». Le Livre (al-kitab) designe ici la Torah revelee a Moise. L'article defini (al-) indique qu'il s'agit du Livre par excellence — l'Ecriture divine. Le Lane's precise que kitab dans le Coran designe les Ecritures revelees (Torah, Evangile, Coran). Le Livre est le vehicule de la guidance divine.",
              axe1_verset: "Le mot al-kitaba est le premier des deux objets du don divin. Dieu donne a Moise le Livre (la Torah) et le Critere (le Furqan). Le Livre est le contenu — les lois, les recits, les enseignements. C'est le support materiel de la guidance. Le Livre est un don complet qui contient tout ce dont les enfants d'Israel ont besoin pour etre guides. L'objectif final est la guidance (tahtaduna).",
              axe2_voisins: "Le verset 51 mentionnait le rendez-vous de quarante nuits — c'est pendant ces nuits que Moise a recu le Livre. Ce verset 53 revele le contenu de ce rendez-vous : le Livre et le Critere. La sequence narrative est complete — le rendez-vous (v51), la faute pendant l'absence (v51), le pardon (v52), et maintenant le resultat du rendez-vous (v53, le Livre). La faute du veau n'a pas empeche le don du Livre.",
              axe3_sourate: "Le mot al-kitab est l'un des mots les plus frequents de la sourate al-Baqarah. En 2:2, « Ceci est le Livre, nul doute en lui ». En 2:44, « vous ordonnez la piete aux gens et vous oubliez vous-memes, alors que vous recitez le Livre ». En 2:78, « parmi eux il y a des illettres qui ne connaissent pas le Livre ». Le Livre est le fil conducteur de la sourate — la guidance vient par le Livre et l'egarement vient par l'abandon du Livre.",
              axe4_coherence: "La racine k-t-b apparait 319 fois dans le Coran. Le Livre (kitab) est mentionne pour la Torah, l'Evangile et le Coran. En 5:44, « Nous avons fait descendre la Torah, en elle il y a guidance et lumiere ». En 6:154, « Nous donnâmes a Moise le Livre, complet pour celui qui fait le bien, et comme explication de toute chose ». Le Livre est toujours associe a la guidance et a la clarification.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le manuel de la mission. Le khalifa recoit le Livre pour savoir comment accomplir sa mission. Sans le Livre, la mission est aveugle. Moise a recu le Livre pour guider les enfants d'Israel — le Livre est l'outil premier du khalifa. L'abandon du Livre est l'echec de la mission."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["écrire", "dicter", "demander d'écrire", "écrire à quelqu'un", "s'inscrire", "copier un livre", "art de l'écriture", "scribe", "savant", "école", "enseignant", "vendeur de livres"],
              proof_ctx: "L'ecriture est le sens premier de k-t-b (tracer des signes). Le contexte utilise al-kitab dans son sens de Livre revele — un objet donne, pas un acte d'ecriture. Le Livre est le resultat de l'ecriture divine, pas l'acte d'ecrire lui-meme. Le sens d'ecriture est present mais secondaire — le Livre est un ecrit mais le verset parle du don du Livre, pas de son ecriture.",
              axe1_verset: "Le mot al-kitab est l'objet du don, pas l'acte d'ecrire. Dieu donne a Moise un Livre deja constitue — l'ecriture est accomplie, le Livre est pret. Le verset ne parle pas du processus d'ecriture mais du resultat : un Livre complet donne a un prophete pour guider un peuple.",
              axe2_voisins: "Les versets precedents ne mentionnaient pas d'ecriture. Le don du Livre suit le pardon (v52) — apres avoir pardonne, Dieu donne la guidance. L'ecriture est le support de cette guidance, pas le theme du verset.",
              axe3_sourate: "La sourate al-Baqarah parle abondamment de l'ecriture. En 2:282, « ecrivez vos dettes ». En 2:79, « malheur a ceux qui ecrivent le Livre de leurs propres mains ». L'ecriture peut etre divine (le Livre) ou humaine (la falsification). Le verset 53 parle du Livre divin, pas de l'ecriture humaine.",
              axe4_coherence: "La racine k-t-b dans le sens d'ecrire apparait frequemment dans le Coran. En 2:282, Dieu ordonne d'ecrire les contrats. En 96:4, Dieu enseigne par le calame. L'ecriture est un don divin qui permet de conserver et transmettre le savoir. Le Livre est le fruit supreme de l'ecriture divine.",
              axe5_frequence: "Pour la mission du khalifa, l'ecriture est l'outil de transmission. Le khalifa transmet la guidance par l'ecrit — le Livre est ecrit pour etre lu et applique. L'ecriture preserve la guidance au-dela de la vie du prophete."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "décret divin", "prédestination", "rendre obligatoire", "juger"],
              proof_ctx: "Le sens d'obligation est un usage de k-t-b (Dieu a prescrit). Le contexte parle du Livre comme objet donne, pas d'un decret impose. Al-kitab ici est le support physique de la guidance, pas l'acte de decreter."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre", "lier l'outre", "se ceindre", "collecter", "préparer les troupes", "armée", "attacher", "fermer la vulve"],
              proof_ctx: "L'assemblage est un sens physique de k-t-b (reunir des elements). Le contexte parle du Livre revele, pas d'un acte d'assemblage physique."
            }
          }
        }
      },
      {
        word_key: "frq", position: 5, sense_chosen: "Furqân",
        analysis_axes: {
          sense_chosen: "Furqân",
          concept_chosen: "Séparation/Distinction",
          concepts: {
            "Séparation/Distinction": {
              status: "retenu",
              senses: ["séparer", "distinguer", "diviser", "Furqân"],
              proof_ctx: "Le mot al-furqana est un nom masculin singulier defini au cas accusatif de la racine f-r-q. Le Lane's donne « the criterion, that by which a distinction is made between truth and falsehood, right and wrong ». Le Furqan est l'outil de discernement par excellence — il separe le vrai du faux comme un couteau separe deux morceaux. Le Lane's precise que le Furqan peut designer le Coran, la Torah ou tout instrument de distinction divine.",
              axe1_verset: "Le mot al-furqana est le second objet du don divin, apres le Livre. Le Livre est le contenu, le Furqan est la methode. Le Livre donne la guidance ; le Furqan donne la capacite de distinguer le vrai du faux dans cette guidance. Les deux sont complementaires — avoir le Livre sans le Furqan mene a la confusion, avoir le Furqan sans le Livre mene au vide. Le don est complet : contenu et methode.",
              axe2_voisins: "Le verset 51 montrait la confusion du peuple (prendre le veau pour Dieu). Le verset 53 donne le remede a cette confusion : le Furqan. Le Critere est la reponse divine a l'idolatrie — quand on a le Furqan, on ne confond plus le veau avec Dieu. La sequence est : confusion (v51) → pardon (v52) → outil de discernement (v53).",
              axe3_sourate: "La sourate al-Baqarah ne porte pas le nom de Furqan mais la sourate 25 s'appelle al-Furqan. Dans al-Baqarah, la racine f-r-q apparait en 2:53 et 2:50 (« Nous fendîmes la mer pour vous »). La separation physique (fendre la mer) et la separation intellectuelle (le Critere) sont liees — Dieu separe la mer pour sauver les corps et donne le Critere pour sauver les esprits.",
              axe4_coherence: "La racine f-r-q apparait 72 fois dans le Coran. En 25:1, « beni soit Celui qui a fait descendre le Furqan sur Son serviteur ». En 3:4, « Il a fait descendre le Furqan ». En 8:29, « si vous craignez Dieu, Il vous donnera un furqan (critere de discernement) ». Le Furqan est lie au taqwa — celui qui craint Dieu recoit la capacite de distinguer le vrai du faux.",
              axe5_frequence: "Pour la mission du khalifa, le Furqan est l'outil de jugement. Le khalifa doit juger entre les gens avec justice — pour cela il a besoin du Critere qui separe le vrai du faux. Sans le Furqan, le khalifa ne peut pas distinguer le bien du mal et sa mission echoue. Les enfants d'Israel ont recu le Furqan pour pouvoir exercer leur role de peuple guide."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Le sens de groupe est un usage de f-r-q (firqa = groupe separe). Le contexte utilise al-furqan (le Critere), pas firqa (un groupe). Le Furqan est un outil de discernement, pas un groupe de personnes."
            }
          }
        }
      },
      {
        word_key: "hdy", position: 7, sense_chosen: "se guider soi-même",
        analysis_axes: {
          sense_chosen: "se guider soi-même",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-même", "guider"],
              proof_ctx: "Le verbe tahtaduna est un inaccompli 2MP forme VIII de la racine h-d-y. Le Lane's donne « he guided himself, he found guidance, he was guided ». La forme VIII (reflexif, ihtada) signifie « se guider soi-meme, trouver la voie par son propre effort ». Le reflexif implique que les enfants d'Israel doivent eux-memes faire l'effort de se guider — Dieu donne les outils (le Livre et le Critere) mais l'effort de guidance est individuel.",
              axe1_verset: "Le verbe tahtaduna cloture le verset en revelant l'objectif du don. Dieu donne le Livre et le Critere « afin que vous soyez guides ». La guidance est le but ultime — le Livre et le Critere ne sont pas des fins en soi mais des moyens pour atteindre la guidance. La forme VIII (reflexif) indique que la guidance n'est pas passive mais active — il faut utiliser le Livre et le Critere pour se guider.",
              axe2_voisins: "Le verset 51 montrait l'egarement (le veau). Le verset 52 montrait le pardon. Ce verset 53 montre la voie de la guidance. La sequence egarement-pardon-guidance est un modele de rehabilitation divine. Les enfants d'Israel ont erre, Dieu a pardonne, puis Il a donne les outils pour ne plus errer. La guidance est la reponse definitive a l'egarement.",
              axe3_sourate: "La racine h-d-y est fondamentale dans la sourate al-Baqarah. Le verset 2:2 ouvre la sourate par « guidance pour les muttaqin ». En 2:5, « ce sont eux les bien-guides ». En 2:16, « ils ont echange la guidance contre l'egarement ». La guidance est le theme central de la sourate — toute l'histoire des enfants d'Israel est lue a travers le prisme de la guidance acceptee ou refusee.",
              axe4_coherence: "La racine h-d-y apparait 316 fois dans le Coran. C'est l'un des concepts les plus frequents. En 1:6, « guide-nous dans le droit chemin ». En 2:272, « ce n'est pas a toi de les guider mais Dieu guide qui Il veut ». La guidance est un acte divin et un effort humain — Dieu guide et l'homme se laisse guider ou refuse. La forme VIII (reflexif) en 2:53 souligne l'effort humain necessaire.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est le contenu de la mission. Le khalifa est guide pour guider — il recoit la guidance (le Livre) et la transmet au peuple. Moise a recu le Livre et le Critere pour guider les enfants d'Israel. La guidance est circulaire : Dieu guide le khalifa, le khalifa guide le peuple, le peuple se guide par le Livre."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "manière d'agir", "comportement calme"],
              proof_ctx: "La conduite est un sens secondaire de h-d-y. Le contexte utilise tahtaduna (forme VIII, se guider soi-meme), pas hady (conduite, maniere d'agir). Le verset parle de guidance spirituelle, pas de comportement social."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "présent"],
              proof_ctx: "Le don est un sens de h-d-y (hadiyya = cadeau). Le contexte utilise le verbe tahtaduna (se guider), pas le nom hadiyya (cadeau). Le don est deja exprime par le verbe aatayna (Nous donnâmes) — la guidance est l'objectif du don, pas un don supplementaire."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:54
  // verse_id=61, analysis_id=422
  // "Moise dit a son peuple : O mon peuple, vous avez ete injustes
  //  envers vous-mêmes en prenant le veau. Repentez-vous aupres de
  //  votre Createur et tuez vos egos. C'est mieux pour vous aupres de
  //  votre Createur. Puis Il accepta votre repentir — Il est le Revenant,
  //  le Misericordieux"
  // =====================================================
  54: {
    verse_id: 61,
    analysis_id: 422,
    translation_arab: "Moise dit a son peuple : O mon peuple, vous vous etes fait du tort en prenant le veau. Repentez-vous aupres de votre Createur et tuez vos egos. C'est mieux pour vous aupres de votre Createur. Puis Il revint vers vous — Il est Celui qui revient sans cesse, le Misericordieux.",
    full_translation: "Et [rappelez-vous] lorsque Moise dit a son peuple : « O mon peuple, certes vous vous etes fait du tort a vous-memes en prenant le veau. Revenez donc a votre Createur et tuez-vous les uns les autres. Cela est meilleur pour vous aupres de votre Createur ». Il agrea donc votre repentir — car Il est le Revenant [en grace], le Misericordieux.",
    translation_explanation: `§DEMARCHE§
Ce verset est le discours de Moise a son peuple apres l'episode du veau d'or. Le verbe **qala** est un accompli 3MS de la racine q-w-l. Le Lane's donne « he said, he spoke ». Le mot **li-qawmihi** est un nom de la racine q-w-m au cas genitif avec pronom 3MS et preposition li. Le Lane's donne « his people, his tribe ». Le discours est adresse « a son peuple » — Moise parle en tant que guide a sa communaute. Le mot **ya qawmi** est un vocatif de la racine q-w-m avec pronom 1S. Le Lane's donne « O my people ». L'apostrophe (ya) ouvre le discours direct. Le verbe **zalamtum** est un accompli 2MP de la racine z-l-m. Le Lane's donne « you wronged, you were unjust ». Le mot **anfusakum** est un nom pluriel de la racine n-f-s avec pronom 2MP. Le Lane's donne « yourselves ». L'expression « vous avez fait du tort a vos ames » signifie que l'injustice est reflexive — les injustes sont aussi les victimes de leur propre injustice. Le mot **bi-ttikhadhikum** est un masdar forme VIII de la racine a-kh-dh avec pronom 2MP et preposition bi. Le Lane's donne « by your taking, by your adoption ». Le verbe **tubu** est un imperatif 2MP de la racine t-w-b. Le Lane's donne « repent, turn back ». Le mot **bari'ikum** est un nom agent de la racine b-r-a' avec pronom 2MP. Le Lane's donne « your Creator, your Maker ». Le verbe **uqtulu** est un imperatif 2MP de la racine q-t-l. Le Lane's donne « kill ». Le mot **anfusakum** est repete — tuez vos ames (vos egos, vous-memes). Le mot **khayrun** est un nom de la racine kh-y-r. Le Lane's donne « better, good ». Le mot **'inda** est une preposition de la racine e-n-d. Le Lane's donne « with, in the sight of, according to ». Le verbe **taba** est un accompli 3MS de la racine t-w-b. Le Lane's donne « he turned, he repented, he relented ». Le mot **al-tawwabu** est un nom intensif de la racine t-w-b. Le Lane's donne « the Oft-Returning, the One who turns again and again ». Le mot **al-rahimu** est un nom de la racine r-h-m. Le Lane's donne « the Merciful, the Compassionate ».

§JUSTIFICATION§
**dit** — Le sens retenu est « dire ». Le verbe qala signifie parler, enoncer. Pas d'alternative pertinente.

**peuple** — Le sens retenu est « peuple ». Le mot qawm designe le peuple, la communaute. L'alternative « se lever » est ecartee car le contexte est un vocatif (O mon peuple), pas un acte de se lever.

**fait du tort** — Le sens retenu est « etre injuste ». Le verbe zalamtum signifie commettre une injustice. L'alternative « obscurite » est ecartee car le contexte est moral.

**ames** — Le sens retenu est « soi-meme ». Le mot anfusakum designe « vous-memes ». L'alternative « souffle » est ecartee car le contexte parle de l'etre interieur.

**prenant** — Le sens retenu est « prendre ». Le masdar ittikhadh signifie l'acte de prendre. Pas d'alternative pertinente.

**Repentez-vous** — Le sens retenu est « se repentir ». Le verbe tubu signifie revenir sur ses pas, se tourner vers Dieu. Pas d'alternative pertinente — la racine t-w-b n'a qu'un concept (Retour).

**Createur** — Le sens retenu est « creer ». Le mot bari'ikum designe votre Createur (al-Bari'). L'alternative « etre innocent » est ecartee car le contexte parle de Dieu comme Createur, pas comme innocent.

**tuez** — Le sens retenu est « tuer ». Le verbe uqtulu signifie tuer, mettre a mort. Pas d'alternative pertinente.

**mieux** — Le sens retenu est « bien ». Le mot khayrun designe ce qui est meilleur. L'alternative « choisir » est ecartee car le contexte est un comparatif (mieux pour vous), pas un acte de choix.

**aupres de** — Le sens retenu est « aupres de ». Le mot 'inda designe la proximite. L'alternative « selon » est ecartee car le contexte parle de la valeur aux yeux du Createur, pas d'une opinion.

**revint** — Le sens retenu est « se repentir ». Le verbe taba signifie revenir. Quand le sujet est Dieu, taba signifie « accepter le repentir, revenir en grace ». L'attribut al-tawwab confirme ce sens.

**Misericordieux** — Le sens retenu est « misericorde ». Le mot al-rahim designe le Misericordieux. Pas d'alternative pertinente dans ce contexte.

§CRITIQUE§
**fait du tort vs avez ete injustes** — Le Lane's donne pour zalama anfusahum « they wronged themselves ». « Fait du tort a vous-memes » est plus idiomatique en francais. « Avez ete injustes envers vous-memes » est plus litteral mais plus lourd.
**Repentez-vous vs Revenez** — Le Lane's donne pour taba « he returned, he repented ». « Repentez-vous » est le sens religieux etabli. « Revenez » serait plus litteral — le repentir est un retour vers Dieu. Les deux sont valides, « revenez » est plus fidele a la racine.
**tuez vos egos vs tuez-vous les uns les autres** — L'interpretation traditionnelle est « tuez-vous les uns les autres » (les innocents tuent les coupables). L'interpretation mystique est « tuez vos egos ». Le Lane's donne pour uqtulu anfusakum les deux lectures possibles. La traduction retient « tuez vos egos » car anfusakum (vos nafs) peut designer l'ego interieur.
**Createur vs Originateur** — Le Lane's donne pour bari' « creator, maker, originator ». « Createur » est plus courant et accessible. « Originateur » serait plus precis (celui qui cree a partir de rien, distinctement de khaliq) mais moins naturel en francais.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idh", arabic: "وَإِذْ", is_particle: true, position: 1 },
      { fr: "dit", pos: "verbe", phon: "qala", arabic: "قَالَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
      { fr: "Moise", phon: "musa", arabic: "مُوسَYٰ", is_particle: true, position: 3 },
      { fr: "a son peuple", pos: "nom", phon: "li-qawmihi", arabic: "لِقَوْمِهِ.", word_key: "qwm", is_particle: false, sense_retenu: "peuple", position: 4 },
      { fr: "O mon peuple", pos: "nom", phon: "ya qawmi", arabic: "يَٰقَوْمِ", word_key: "qwm", is_particle: false, sense_retenu: "peuple", position: 5 },
      { fr: "certes vous", phon: "innakum", arabic: "إِنَّكُمْ", is_particle: true, position: 6 },
      { fr: "avez fait du tort", pos: "verbe", phon: "zalamtum", arabic: "ظَلَمْتُمْ", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 7 },
      { fr: "a vous-memes", pos: "nom", phon: "anfusakum", arabic: "أَنفُسَكُم", word_key: "nfs", is_particle: false, sense_retenu: "soi-meme", position: 8 },
      { fr: "en prenant", pos: "nom", phon: "bi-ttikhadhikum", arabic: "بِٱتِّخَاذِكُمُ", word_key: "akhḏ", is_particle: false, sense_retenu: "prendre", position: 9 },
      { fr: "le veau", pos: "nom", phon: "al-'ijla", arabic: "ٱلْعِجْلَ", word_key: "ejl", is_particle: false, sense_retenu: "veau", position: 10 },
      { fr: "repentez-vous donc", pos: "verbe", phon: "fa-tubu", arabic: "فَتُوبُوٓا۟", word_key: "twb", is_particle: false, sense_retenu: "se repentir", position: 11 },
      { fr: "aupres de", phon: "ila", arabic: "إِلَYٰ", is_particle: true, position: 12 },
      { fr: "votre Createur", pos: "nom", phon: "bari'ikum", arabic: "بَارِئِكُمْ", word_key: "bra", is_particle: false, sense_retenu: "creer", position: 13 },
      { fr: "et tuez", pos: "verbe", phon: "fa-uqtulu", arabic: "فَٱقْتُلُوٓا۟", word_key: "qtl", is_particle: false, sense_retenu: "tuer", position: 14 },
      { fr: "vos egos", pos: "nom", phon: "anfusakum", arabic: "أَنفُسَكُمْ", word_key: "nfs", is_particle: false, sense_retenu: "soi-meme", position: 15 },
      { fr: "cela est", phon: "dhalikum", arabic: "ذَٰلِكُمْ", is_particle: true, position: 16 },
      { fr: "mieux", pos: "nom", phon: "khayrun", arabic: "خَيْرٌ", word_key: "ḫyr", is_particle: false, sense_retenu: "bien", position: 17 },
      { fr: "pour vous", phon: "lakum", arabic: "لَّكُمْ", is_particle: true, position: 18 },
      { fr: "aupres de", pos: "nom", phon: "'inda", arabic: "عِندَ", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 19 },
      { fr: "votre Createur", pos: "nom", phon: "bari'ikum", arabic: "بَارِئِكُمْ", word_key: "bra", is_particle: false, sense_retenu: "creer", position: 20 },
      { fr: "puis Il revint vers vous", pos: "verbe", phon: "fa-taba", arabic: "فَتَابَ", word_key: "twb", is_particle: false, sense_retenu: "accepter le repentir", position: 21 },
      { fr: "sur vous", phon: "'alaykum", arabic: "عَلَيْكُمْ", is_particle: true, position: 22 },
      { fr: "certes Il", phon: "innahu", arabic: "إِنَّهُ،", is_particle: true, position: 23 },
      { fr: "est", phon: "huwa", arabic: "هُوَ", is_particle: true, position: 24 },
      { fr: "Celui qui revient sans cesse", pos: "nom", phon: "al-tawwabu", arabic: "ٱلتَّوَّابُ", word_key: "twb", is_particle: false, sense_retenu: "accepter le repentir", position: 25 },
      { fr: "le Misericordieux", pos: "adjectif", phon: "al-rahimu", arabic: "ٱلرَّحِيمُ", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 26 }
    ],
    words: [
      {
        word_key: "qwl", position: 2, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qala est un accompli 3MS de la racine q-w-l. Le Lane's donne « he said, he spoke, he uttered ». Le verbe est le plus simple et le plus frequent pour introduire le discours direct dans le Coran. Qala introduit ici le discours de Moise a son peuple — c'est un acte de parole prophetique, un discours d'autorite.",
              axe1_verset: "Le verbe qala ouvre le verset par l'introduction du discours de Moise. Le verset est presque entierement un discours direct — Moise parle a son peuple pour le reprimander et lui ordonner le repentir. La parole prophetique a une double fonction : constater la faute (« vous vous etes fait du tort ») et ordonner le remede (« repentez-vous et tuez vos egos »). La parole est ici un acte d'autorite et de guidance.",
              axe2_voisins: "Les versets 51-53 decrivaient les actes de Dieu (rendez-vous, pardon, don du Livre). Ce verset 54 introduit la parole de Moise — le prophete prend le relais de Dieu pour s'adresser directement au peuple. La transition de la narration divine au discours prophetique montre que le prophete est le porte-parole de Dieu aupres du peuple.",
              axe3_sourate: "Le verbe qala est le verbe le plus frequent de la sourate al-Baqarah. Chaque recit, chaque dialogue est introduit par qala. En 2:30, « ton Seigneur dit aux anges ». En 2:33, « quand Il leur eut dit ». En 2:124, « son Seigneur dit a Abraham ». La parole structure toute la sourate — c'est par la parole que Dieu cree, ordonne et juge.",
              axe4_coherence: "La racine q-w-l apparait 1722 fois dans le Coran. C'est la racine la plus frequente du Coran. La parole est le mode premier de communication entre Dieu et les hommes. En 2:117, « quand Il decide une chose, Il lui dit seulement : Sois ! et elle est ». La parole divine est creatrice. La parole prophetique est transmissive — le prophete dit ce que Dieu veut que le peuple entende.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'outil de la mission. Le khalifa parle pour guider, reprendre, ordonner. Moise parle a son peuple pour le ramener dans le droit chemin. La parole du khalifa doit etre conforme a la parole divine — dire ce que Dieu dit, pas ce que l'ego desire."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le sens d'avis est un usage interieur de q-w-l. Le contexte utilise qala pour introduire un discours prononce a haute voix (discours de Moise a son peuple), pas une pensee interieure."
            }
          }
        }
      },
      {
        word_key: "qwm", position: 4, sense_chosen: "peuple",
        analysis_axes: {
          sense_chosen: "peuple",
          concept_chosen: "Peuple/Communauté",
          concepts: {
            "Peuple/Communauté": {
              status: "retenu",
              senses: ["peuple", "communauté", "tribu", "nation", "groupe"],
              proof_ctx: "Le mot qawmihi est un nom de la racine q-w-m au cas genitif avec pronom 3MS et preposition li. Le Lane's donne « his people, his community, his tribe ». Le qawm est le peuple lie au prophete — la communaute dont il est issu et qu'il est charge de guider. Le pronom 3MS (hi, renvoyant a Moise) precise que c'est le peuple de Moise, les enfants d'Israel.",
              axe1_verset: "Le mot qawm apparait deux fois dans le verset : « a son peuple » (li-qawmihi) et « O mon peuple » (ya qawmi). La premiere mention est narrative (il dit a son peuple), la seconde est un vocatif dans le discours direct. La double mention souligne le lien entre Moise et son peuple — il ne parle pas a des etrangers mais a sa propre communaute. L'intimite du lien rend la reprimande plus douloureuse.",
              axe2_voisins: "Les versets precedents parlaient de « vous » (les enfants d'Israel). Ce verset 54 introduit « son peuple » et « mon peuple ». Le passage du « vous » au « peuple » personnalise la relation — Moise s'adresse a eux comme leur guide, leur prophete, leur membre. Le lien communautaire est a la fois la source de l'autorite de Moise et la source de sa souffrance face a leur faute.",
              axe3_sourate: "La racine q-w-m est tres frequente dans la sourate al-Baqarah. En 2:143, « Nous avons fait de vous une communaute du juste milieu ». En 2:213, « les gens etaient une seule communaute ». Le peuple est l'unite sociale de base dans la sourate — chaque prophete est envoye a un peuple specifique et chaque peuple est juge collectivement.",
              axe4_coherence: "La racine q-w-m apparait 660 fois dans le Coran. Le sens de peuple (qawm) est l'un des plus frequents. En 7:59, « Nouh dit : O mon peuple, adorez Dieu ». En 11:50, « Hud dit : O mon peuple ». Chaque prophete s'adresse a son peuple avec le meme vocatif (ya qawmi). La formule « O mon peuple » est la marque du discours prophetique — elle combine l'intimite et l'autorite.",
              axe5_frequence: "Pour la mission du khalifa, le peuple est le destinataire de la mission. Le khalifa est envoye a un peuple specifique pour le guider. Moise est le khalifa des enfants d'Israel — son peuple. La relation khalifa-peuple est une relation de responsabilite mutuelle : le khalifa guide et le peuple suit (ou refuse)."
            },
            "Verticalité/Droiture": {
              status: "nul",
              senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
              proof_ctx: "La verticalite est le sens premier de q-w-m (se tenir debout). Le contexte utilise qawm (peuple) — des hommes qui se tiennent ensemble, pas l'acte de se lever. Le sens de verticalite est etymologiquement lie au peuple (ceux qui se tiennent debout ensemble) mais le contexte est clairement communautaire."
            }
          }
        }
      },
      {
        word_key: "zlm", position: 7, sense_chosen: "être injuste",
        analysis_axes: {
          sense_chosen: "être injuste",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "injustice", "oppresseur", "être injuste"],
              proof_ctx: "Le verbe zalamtum est un accompli 2MP de la racine z-l-m. Le Lane's donne « you wronged, you were unjust, you placed a thing where it should not be ». L'accompli 2MP indique un acte accompli dans le passe — vous avez ete injustes. L'objet est anfusakum (vous-memes) — l'injustice est reflexive, les enfants d'Israel se sont fait du tort a eux-memes en adorant le veau.",
              axe1_verset: "Le verbe zalamtum est le constat de Moise. Apres l'apostrophe (ya qawmi), Moise declare le verdict : « vous vous etes fait du tort a vous-memes ». L'injustice est envers eux-memes (anfusakum), pas envers un tiers. Adorer le veau nuit d'abord a celui qui adore — il se prive de la guidance divine et s'enchaine a une idole impuissante. L'injustice de l'idolatrie est une auto-destruction.",
              axe2_voisins: "Le verset 51 qualifiait les enfants d'Israel de « zalimuna » (injustes). Ce verset 54 reprend le meme verdict par la bouche de Moise : « zalamtum anfusakum » (vous vous etes fait du tort). La repetition par Moise confirme le jugement divin — le prophete ratifie ce que Dieu a declare. Le passage du participe (zalimuna, etat) au verbe (zalamtum, acte) precise la faute.",
              axe3_sourate: "La racine z-l-m est structurante dans la sourate al-Baqarah. En 2:35, l'interdiction donnee a Adam est suivie de « ne soyez pas des injustes ». En 2:54, la meme racine decrit la faute des enfants d'Israel. La sourate etablit un parallele entre Adam et les enfants d'Israel — les deux ont transgresse et les deux ont recu le pardon. L'injustice est le defaut humain par excellence.",
              axe4_coherence: "La racine z-l-m apparait 315 fois dans le Coran. L'expression zalama nafsahu (il s'est fait du tort a lui-meme) est recurrente. En 7:23, Adam dit « nous nous sommes fait du tort a nous-memes ». En 2:54, Moise dit la meme chose a son peuple. L'auto-injustice est le premier effet du peche — avant de nuire aux autres, le pecheur se nuit a lui-meme.",
              axe5_frequence: "Pour la mission du khalifa, l'auto-injustice est la chute la plus grave. Le khalifa qui se fait du tort a lui-meme perd sa capacite a guider les autres. L'idolatrie est l'auto-injustice supreme car elle remplace la source de vie (Dieu) par une source de mort (le veau). Le khalifa doit d'abord etre juste envers lui-meme pour pouvoir etre juste envers les autres."
            },
            "Obscurité/Ténèbres": {
              status: "nul",
              senses: ["obscurité", "ténèbres"],
              proof_ctx: "L'obscurite est un sens de z-l-m lie a l'absence de lumiere. Le contexte est clairement moral — Moise reproche a son peuple leur injustice envers eux-memes, pas un etat d'obscurite physique."
            }
          }
        }
      },
      {
        word_key: "nfs", position: 8, sense_chosen: "soi-même",
        analysis_axes: {
          sense_chosen: "soi-même",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["personne", "esprit", "désir", "soi-même", "âme"],
              proof_ctx: "Le mot anfusakum est un nom pluriel de la racine n-f-s au cas accusatif avec pronom 2MP. Le Lane's donne « yourselves, your own souls, your own persons ». Le pluriel brise d'anfus signifie « les ames, les egos, les soi ». Avec le pronom 2MP, il signifie « vous-memes, vos propres ames ». Le nafs est ici le lieu de l'injustice — c'est a vos propres ames que vous avez fait du tort.",
              axe1_verset: "Le mot anfusakum apparait deux fois dans le verset : comme objet de zalamtum (vous vous etes fait du tort a vous-memes) et comme objet de uqtulu (tuez vos egos). La premiere mention designe l'ame comme victime de l'injustice, la seconde designe l'ame comme objet a combattre. L'ame est a la fois la victime et le coupable — c'est l'ego qui a pousse a prendre le veau et c'est l'ego qui en souffre.",
              axe2_voisins: "Le verset 48 parlait de « nulle ame (nafs) ne suffira a une autre ». Ce verset 54 parle de « vos ames » (anfusakum). Le passage du singulier generique (nafs) au pluriel possessif (anfusakum) personnalise le discours — ce ne sont plus des ames abstraites mais les ames concretes des enfants d'Israel qui ont faute.",
              axe3_sourate: "Le mot nafs/anfus est l'un des plus frequents de la sourate al-Baqarah. En 2:44, « vous ordonnez le bien aux gens et vous oubliez vous-memes (anfusakum) ». En 2:231, « ne vous faites pas du tort a vous-memes ». La sourate insiste sur la responsabilite envers soi-meme — avant de se soucier des autres, il faut se soucier de son propre nafs.",
              axe4_coherence: "La racine n-f-s apparait 298 fois dans le Coran. L'expression zalama nafsahu/anfusahum (faire du tort a son ame/a leurs ames) est un motif recurrent. En 3:117, « ce n'est pas Dieu qui leur a fait du tort mais c'est a eux-memes qu'ils faisaient du tort ». Le Coran insiste : l'injustice de l'homme atteint d'abord l'homme lui-meme.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le champ de bataille premier. Le khalifa doit maitriser son nafs avant de pretendre guider les autres. Les enfants d'Israel ont echoue parce que leurs nafs les ont pousses vers le veau — la maitrise de l'ego est la condition premiere de la mission."
            },
            "Souffle/Vie": {
              status: "nul",
              senses: ["souffle", "respirer", "soulagement"],
              proof_ctx: "Le souffle est un sens physique de n-f-s. Le contexte utilise anfusakum dans son sens de « vous-memes, vos ames » — la realite interieure de l'etre, pas le souffle physique."
            }
          }
        }
      },
      {
        word_key: "akhḏ", position: 9, sense_chosen: "prendre",
        analysis_axes: {
          sense_chosen: "prendre",
          concept_chosen: "Prise/Acquisition",
          concepts: {
            "Prise/Acquisition": {
              status: "retenu",
              senses: ["prendre", "saisir", "recevoir", "punir"],
              proof_ctx: "Le mot bi-ttikhadhikum est un masdar (nom verbal) forme VIII de la racine a-kh-dh avec pronom 2MP et preposition bi. Le Lane's donne « by your taking, by your adoption ». Le masdar ittikhadh (prise, adoption) designe l'acte de prendre — c'est le nom de l'action, pas le verbe conjugue. La preposition bi indique la cause : « par votre prise du veau » (c'est la raison de l'injustice).",
              axe1_verset: "Le mot bi-ttikhadhikum explique la cause de l'injustice. La structure est : vous vous etes fait du tort (zalamtum anfusakum) par votre prise du veau (bi-ttikhadhikum al-'ijla). Le masdar explicite la faute — ce n'est pas une injustice vague mais une injustice specifique : avoir pris le veau comme objet d'adoration. La preposition bi (par, a cause de) etablit le lien causal entre la prise et l'injustice.",
              axe2_voisins: "Le verset 51 utilisait le verbe conjugue ittakhadhtum (vous prîtes). Ce verset 54 utilise le masdar ittikhadh (le fait de prendre). Le passage du verbe au masdar transforme l'acte ponctuel en fait etabli — ce n'est plus « vous avez pris » mais « votre prise » (c'est un fait acquis, une donnee du probleme). Moise ne raconte pas l'evenement mais le prend comme premisse de son argument.",
              axe3_sourate: "La racine a-kh-dh dans la sourate al-Baqarah est utilisee dans de nombreux contextes. En 2:255, Dieu n'est pris ni par la somnolence ni par le sommeil. En 2:267, ne prenez pas le mauvais pour donner. La prise (akhḏ) est ambivalente — elle peut etre legitime ou illegitime. La prise du veau est l'archetype de la prise illegitime.",
              axe4_coherence: "La racine a-kh-dh apparait 273 fois dans le Coran. Le masdar ittikhadh est utilise specifiquement pour decrire l'adoption d'idoles. En 18:15, « ils ont pris des divinites en dehors de Lui ». En 25:43, « as-tu vu celui qui prend ses passions pour divinite ? ». La prise d'une fausse divinite est un theme coranique majeur — c'est l'acte fondamental du shirk.",
              axe5_frequence: "Pour la mission du khalifa, la prise illegitime est l'echec de la mission. Le khalifa qui prend autre chose que Dieu comme reference trahit sa mission. L'episode du veau est l'exemple parfait — en l'absence du guide, le peuple prend un substitut fabrique."
            }
          }
        }
      },
      {
        word_key: "ejl", position: 10, sense_chosen: "veau",
        analysis_axes: {
          sense_chosen: "veau",
          concept_chosen: "Idolâtrie",
          concepts: {
            "Idolâtrie": {
              status: "retenu",
              senses: ["veau"],
              proof_ctx: "Le mot al-'ijla est le meme mot qu'au verset 51. Le Lane's donne « calf ». Le veau d'or est repris ici dans le discours de Moise pour expliciter la faute — « vous vous etes fait du tort par votre prise du veau ». La repetition du veau dans les versets 51 et 54 montre l'insistance du Coran sur cette faute.",
              axe1_verset: "Le mot al-'ijla est l'objet du masdar ittikhadh — c'est le veau qui a ete pris. Le veau est nomme comme preuve de la faute dans le discours de Moise. Le prophete ne laisse aucune ambiguite — la faute est nommee, identifiee, et condamnee. Le veau est le corps du delit.",
              axe2_voisins: "Le veau a ete mentionne au verset 51 (dans la narration divine) et est repris au verset 54 (dans le discours de Moise). La repetition cree un effet d'insistance — le veau est le point focal de toute cette section. Les versets 52-53 (pardon, Livre) interrompent la mention du veau mais le verset 54 y revient pour la condamnation directe par Moise.",
              axe3_sourate: "Le veau revient en 2:92-93 ou le Coran accuse les enfants d'Israel : « ils ont ete abreuves du veau dans leurs coeurs ». L'adoration du veau n'est pas seulement un acte ponctuel — elle a laisse une trace profonde dans les coeurs. La sourate utilise le veau comme symbole de l'idolatrie enracinee.",
              axe4_coherence: "Le veau d'or apparait en 2:51, 2:54, 2:92-93, 4:153, 7:148-152, 20:88-97. En 7:152, « ceux qui ont pris le veau auront la colere de leur Seigneur et l'humiliation dans la vie d'ici-bas ». En 20:97, Moise dit au Samiri « ton dieu que tu as adore, nous le brulerons ». Le veau est systematiquement detruit et condamne dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, le veau est tout ce qui detourne de la mission. Le khalifa qui se laisse distraire par un « veau » (richesse, pouvoir, desir) abandonne sa mission. L'episode du veau est un avertissement permanent pour tout detenteur de responsabilite."
            },
            "Hâte/Précipitation": {
              status: "nul",
              senses: ["précipiter", "se hâter", "presser"],
              proof_ctx: "La hate est un sens de e-j-l mais le contexte utilise al-'ijl dans son sens de veau. Le verset 54 reprend le meme mot que le verset 51 — il s'agit du veau d'or, pas de la precipitation."
            }
          }
        }
      },
      {
        word_key: "twb", position: 11, sense_chosen: "se repentir",
        analysis_axes: {
          sense_chosen: "se repentir",
          concept_chosen: "Retour",
          concepts: {
            "Retour": {
              status: "retenu",
              senses: ["se repentir", "revenir", "accepter le repentir", "repentir"],
              proof_ctx: "Le verbe tubu est un imperatif 2MP de la racine t-w-b. Le Lane's donne « turn, return, repent ». L'imperatif est un ordre direct de Moise a son peuple — repentez-vous ! Le repentir (tawba) est un retour — revenir a Dieu apres s'en etre detourne. La racine t-w-b porte l'idee de mouvement circulaire : on s'eloigne de Dieu par le peche et on revient a Lui par le repentir.",
              axe1_verset: "Le verbe tubu est le premier ordre de Moise apres le constat de la faute. La sequence est : constat (vous vous etes fait du tort) → remede (repentez-vous aupres de votre Createur et tuez vos egos). Le repentir est le premier pas — il faut d'abord se tourner vers Dieu avant de pouvoir combattre l'ego. Le verbe est suivi de « ila bari'ikum » (vers votre Createur) — le repentir a une direction, il va vers Dieu.",
              axe2_voisins: "Le verset 52 annoncait le pardon divin ('afawna). Ce verset 54 montre la condition du pardon — le repentir. Le pardon divin (v52) precede logiquement le repentir humain (v54) dans le texte, mais chronologiquement le repentir vient en premier. La sourate presente d'abord le resultat (le pardon) puis le processus (le repentir) pour montrer que la grace divine anticipe l'effort humain.",
              axe3_sourate: "La racine t-w-b est fondamentale dans la sourate al-Baqarah. En 2:37, « Adam recut de son Seigneur des paroles et Il accepta son repentir ». En 2:128, « accepte notre repentir, Tu es le Revenant, le Misericordieux ». La sourate montre que le repentir est la voie universelle de retour a Dieu — Adam, les enfants d'Israel, Abraham, tous se repentent et Dieu accepte.",
              axe4_coherence: "La racine t-w-b apparait 87 fois dans le Coran. Le repentir est l'un des actes les plus encourages. En 39:53, « ne desesperez pas de la misericorde de Dieu, Il pardonne tous les peches ». En 66:8, « O croyants, repentez-vous a Dieu d'un repentir sincere ». Le Coran ne ferme jamais la porte du repentir — meme apres le shirk du veau d'or, le repentir est possible et accepte.",
              axe5_frequence: "Pour la mission du khalifa, le repentir est le mecanisme de correction. Le khalifa qui faute n'est pas perdu s'il se repent — le repentir restaure la mission. Les enfants d'Israel ont faute gravement (le veau) mais le repentir les a ramenes dans la mission. Le repentir est la capacite de se relever apres la chute."
            }
          }
        }
      },
      {
        word_key: "bra", position: 13, sense_chosen: "créer",
        analysis_axes: {
          sense_chosen: "créer",
          concept_chosen: "Création/Origination",
          concepts: {
            "Création/Origination": {
              status: "retenu",
              senses: ["créer", "façonner"],
              proof_ctx: "Le mot bari'ikum est un nom agent (participe actif) de la racine b-r-a' avec pronom 2MP. Le Lane's donne « your Creator, your Maker, the One who creates from nothing ». Le Bari' est l'un des noms divins — Celui qui cree du neant, qui donne forme a ce qui n'existait pas. Le pronom 2MP (kum) personnalise la relation — votre Createur, Celui qui vous a crees. Le choix de ce nom divin est significatif : repentez-vous aupres de Celui qui vous a crees — vous Lui devez votre existence.",
              axe1_verset: "Le mot bari'ikum apparait deux fois dans le verset : « repentez-vous aupres de votre Createur » et « cela est mieux pour vous aupres de votre Createur ». La repetition du nom al-Bari' souligne la relation de creation — celui qui vous a crees a plus de droit sur vous qu'un veau fabrique par vos mains. Le contraste entre le Createur (Bari') et le veau ('ijl) est maximal : l'un cree du neant, l'autre est une creature fabrique par des creatures.",
              axe2_voisins: "Les versets precedents utilisaient le pluriel de majeste « Nous » pour designer Dieu. Ce verset 54 utilise le nom specifique al-Bari' (le Createur) dans le discours de Moise. Le passage du « Nous » au « Createur » est significatif — Moise rappelle a son peuple la nature specifique de Dieu comme Createur pour souligner l'absurdite d'adorer une creature (le veau) a la place du Createur.",
              axe3_sourate: "La racine b-r-a' n'est pas tres frequente dans la sourate al-Baqarah mais elle est decisive ici. En 2:54, al-Bari' est le nom choisi pour accompagner l'ordre de repentir. Ce choix n'est pas anodin — se repentir aupres du Createur signifie reconnaitre que l'on est creature et que l'on n'a pas le droit de creer d'autres divinites.",
              axe4_coherence: "La racine b-r-a' apparait 27 fois dans le Coran. En 59:24, « Il est Dieu, le Createur (al-Khaliq), le Formateur (al-Bari'), le Donneur de formes (al-Musawwir) ». Al-Bari' est le deuxieme de ces trois noms de creation — il designe specifiquement la creation a partir de rien, la production de la matiere brute. En 2:54, al-Bari' rappelle que Dieu est l'origine de toute existence.",
              axe5_frequence: "Pour la mission du khalifa, le Createur est la source de la mission. Le khalifa est une creature du Bari' — il doit sa mission a Celui qui l'a cree. Se repentir aupres du Createur signifie reconnaitre sa position de creature et revenir a l'obeissance due au Createur."
            },
            "Innocence/Pureté": {
              status: "nul",
              senses: ["être innocent", "se désavouer"],
              proof_ctx: "L'innocence est un sens de b-r-a' (celui qui est libre de toute faute). Le contexte utilise bari' dans son sens de Createur (nom divin al-Bari'), pas dans le sens d'innocent. Le pronom 2MP (kum) confirme : votre Createur, pas votre Innocent."
            }
          }
        }
      },
      {
        word_key: "qtl", position: 14, sense_chosen: "tuer",
        analysis_axes: {
          sense_chosen: "tuer",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "assassiner", "combattre", "meurtre", "combat"],
              proof_ctx: "Le verbe fa-uqtulu est un imperatif 2MP de la racine q-t-l precede de la particule fa. Le Lane's donne « kill, slay, put to death ». L'imperatif est un ordre direct de Moise. Le complement est anfusakum (vos ames, vous-memes, vos egos). L'expression uqtulu anfusakum a deux lectures : (1) tuez-vous les uns les autres (les innocents tuent les coupables), (2) tuez vos egos (combattez vos passions). Les deux lectures sont attestees par les exegetes.",
              axe1_verset: "Le verbe uqtulu est le second ordre de Moise apres tubu (repentez-vous). La sequence est : repentez-vous puis tuez vos egos. Le repentir seul ne suffit pas — il faut aussi un acte concret de sacrifice. Tuer l'ego signifie renoncer aux desirs qui ont conduit a l'idolatrie. L'ordre est radical — le remede est a la mesure de la faute. Le verset ajoute que « cela est mieux pour vous » — le sacrifice est en realite un benefice.",
              axe2_voisins: "Le verset 51 decrivait la faute (prendre le veau). Ce verset 54 prescrit le remede (tuer les egos). Le passage de la faute au remede est direct et severe. Le verset 52 avait annonce le pardon, mais le verset 54 montre que le pardon exige un effort — le repentir et le sacrifice de l'ego. La grace divine ne dispense pas de l'effort humain.",
              axe3_sourate: "La racine q-t-l est tres frequente dans la sourate al-Baqarah, surtout dans les versets sur le combat. En 2:190, « combattez dans le chemin de Dieu ceux qui vous combattent ». En 2:191, « tuez-les ou que vous les trouviez ». Mais en 2:54, le combat est interieur (tuez vos egos) — la sourate distingue le combat exterieur (contre les ennemis) et le combat interieur (contre l'ego). Les deux sont des formes de jihad.",
              axe4_coherence: "La racine q-t-l apparait 170 fois dans le Coran. Le sens de tuer est dominant. En 2:54, l'expression uqtulu anfusakum est unique — elle n'apparait qu'ici dans tout le Coran. Cette unicite souligne la gravite de la faute du veau et la radicalite du remede exige. Le Coran ne demande jamais ailleurs de « tuer ses egos » en ces termes — c'est une mesure exceptionnelle pour une faute exceptionnelle.",
              axe5_frequence: "Pour la mission du khalifa, le combat interieur est la condition de la mission. Le khalifa doit tuer son ego — ses desirs, ses passions, son amour-propre — pour pouvoir servir Dieu et les hommes. L'ego non maitrise conduit le khalifa a prendre des « veaux » (des substituts a Dieu). Le sacrifice de l'ego est le prix de la mission."
            }
          }
        }
      },
      {
        word_key: "ḫyr", position: 17, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "meilleur", "bon"],
              proof_ctx: "Le mot khayrun est un nom masculin singulier indefini au cas nominatif de la racine kh-y-r. Le Lane's donne « good, better, best ». Le mot est ici en position predicative (khabar) — « cela est meilleur pour vous ». Le khayr est le bien absolu, ce qui est conforme a l'ordre divin. Le comparatif implicite (mieux pour vous) compare le sacrifice de l'ego a l'absence de sacrifice — le sacrifice est meilleur meme s'il est douloureux.",
              axe1_verset: "Le mot khayrun est le jugement de valeur du verset. Apres les deux ordres (repentez-vous, tuez vos egos), Moise ajoute : « cela est mieux pour vous aupres de votre Createur ». Le bien n'est pas defini par le confort humain mais par la valeur aux yeux de Dieu ('inda bari'ikum). Ce qui semble un sacrifice (tuer l'ego) est en realite un bien — le vrai bien est ce qui plait a Dieu, pas ce qui plait a l'ego.",
              axe2_voisins: "Les versets precedents decrivaient des bienfaits divins (delivrance, pardon, Livre). Ce verset 54 definit le bien du point de vue divin — le bien est le sacrifice de l'ego, pas l'accumulation de bienfaits. Le peuple a recu les bienfaits (v47-53) mais le vrai bien est de se repentir et de combattre l'ego (v54).",
              axe3_sourate: "La racine kh-y-r est frequente dans la sourate al-Baqarah. En 2:184, « mais que vous jeuniez c'est meilleur (khayr) pour vous ». En 2:216, « il se peut que vous detestiez une chose et qu'elle soit un bien (khayr) pour vous ». La sourate enseigne que le bien veritable est souvent contraire a l'apparence — le sacrifice qui semble penible est en realite un bien.",
              axe4_coherence: "La racine kh-y-r apparait 176 fois dans le Coran. Le bien (khayr) est oppose au mal (sharr). En 99:7-8, « celui qui fait un atome de bien le verra, et celui qui fait un atome de mal le verra ». Le bien est objectif et mesure par Dieu, pas par les hommes. En 2:54, le bien est defini comme ce qui est meilleur « aupres du Createur » — le critere est divin, pas humain.",
              axe5_frequence: "Pour la mission du khalifa, le bien est l'objectif de la mission. Le khalifa est place pour realiser le bien sur terre. Le bien est defini par Dieu, pas par l'ego. Le khalifa qui suit le khayr divin reussit sa mission ; celui qui suit son ego echoue."
            },
            "Choix/Préférence": {
              status: "nul",
              senses: ["choisir", "préférer"],
              proof_ctx: "Le choix est un sens de kh-y-r (ikhtiâr = choisir). Le contexte utilise khayr dans son sens de « bien, meilleur » (comparatif), pas dans le sens de « choisir ». Le verset dit « cela est mieux » pas « choisissez »."
            }
          }
        }
      },
      {
        word_key: "end", position: 19, sense_chosen: "auprès de",
        analysis_axes: {
          sense_chosen: "auprès de",
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["auprès de", "chez", "près de"],
              proof_ctx: "Le mot 'inda est une preposition de la racine e-n-d. Le Lane's donne « at, with, in the presence of, in the sight of, according to ». L'expression 'inda bari'ikum signifie « aupres de votre Createur, aux yeux de votre Createur, dans le jugement de votre Createur ». La preposition 'inda indique une proximite relationnelle, pas spatiale — ce qui est bien « aupres de Dieu » est ce qui a de la valeur dans Son jugement.",
              axe1_verset: "Le mot 'inda qualifie le bien (khayr) — cela est mieux « aupres de votre Createur ». Le critere du bien n'est pas humain mais divin. Ce qui semble penible pour les hommes (tuer l'ego) est meilleur dans le jugement de Dieu. L'expression 'inda bari'ikum deplace le centre de valeur de l'homme vers Dieu — c'est l'opinion de Dieu qui compte, pas celle de l'ego.",
              axe2_voisins: "Les versets precedents presentaient les actes de Dieu (donner, pardonner). Ce verset 54 presente le jugement de Dieu ('inda bari'ikum) — ce qui est meilleur aux yeux du Createur. La proximite divine ('inda) est le lieu du jugement vrai — loin des apparences humaines.",
              axe3_sourate: "La racine e-n-d apparait frequemment dans la sourate al-Baqarah. En 2:110, « vous trouverez sa recompense aupres de Dieu ('inda Allah) ». En 2:186, « quand Mes serviteurs te questionnent sur Moi, Je suis proche ». La proximite divine est le cadre de l'evaluation — ce qui a de la valeur est ce qui est « aupres de Dieu ».",
              axe4_coherence: "La racine e-n-d apparait 200 fois dans le Coran. L'expression 'inda Allah (aupres de Dieu) est tres frequente. En 3:169, les martyrs sont « vivants aupres de leur Seigneur ». En 42:36, « ce qui est aupres de Dieu est meilleur et plus durable ». La valeur « aupres de Dieu » est toujours superieure a la valeur terrestre.",
              axe5_frequence: "Pour la mission du khalifa, la proximite divine est le critere de reussite. Le khalifa reussit sa mission quand ses actes ont de la valeur « aupres de Dieu » — pas aupres des hommes. Le regard divin est le seul juge de la mission du khalifa."
            },
            "Opinion/Jugement": {
              status: "nul",
              senses: ["selon"],
              proof_ctx: "Le sens d'opinion est un usage de e-n-d ('indi = selon moi). Le contexte utilise 'inda dans le sens de « aupres de, aux yeux de » — l'expression 'inda bari'ikum signifie « aux yeux de votre Createur », pas « selon votre Createur ». Le sens est similaire mais la nuance est spatiale/relationnelle, pas strictement opinative."
            }
          }
        }
      },
      {
        word_key: "twb", position: 21, sense_chosen: "accepter le repentir",
        analysis_axes: {
          sense_chosen: "accepter le repentir",
          concept_chosen: "Retour",
          concepts: {
            "Retour": {
              status: "retenu",
              senses: ["se repentir", "revenir", "accepter le repentir", "repentir"],
              proof_ctx: "Le verbe fa-taba est un accompli 3MS de la racine t-w-b precede de la particule fa. Le Lane's donne « he turned, he relented, he accepted the repentance ». Quand le sujet est Dieu et le complement est 'alaykum (sur vous), le verbe signifie « Il accepta votre repentir, Il revint en grace vers vous ». La racine t-w-b est reciproque : l'homme revient a Dieu (se repent) et Dieu revient vers l'homme (accepte le repentir).",
              axe1_verset: "Le verbe taba (avec Dieu comme sujet) cloture le recit du veau d'or. Apres la faute (v51), le pardon (v52), le Livre (v53), et l'ordre de Moise (v54a), Dieu accepte le repentir (v54b). La sequence est complete : faute → pardon → guidance → repentir → acceptation divine. Le verbe taba 'alaykum (Il revint vers vous) montre que Dieu fait un mouvement vers l'homme quand l'homme fait un mouvement vers Dieu.",
              axe2_voisins: "Le verbe tubu (repentez-vous) au debut du verset est l'imperatif adresse aux hommes. Le verbe taba (Il revint) a la fin est la reponse divine. Les deux verbes viennent de la meme racine t-w-b — le repentir humain et l'acceptation divine sont les deux faces du meme mouvement de retour. L'homme revient a Dieu et Dieu revient vers l'homme.",
              axe3_sourate: "La racine t-w-b structure la sourate al-Baqarah. En 2:37, Dieu accepte le repentir d'Adam. En 2:128, Abraham demande l'acceptation du repentir. En 2:160, « ceux qui se repentent, Je reviendrai vers eux ». La sourate enseigne que le repentir est toujours accepte — aucune faute n'est trop grave pour le pardon si le repentir est sincere.",
              axe4_coherence: "La racine t-w-b apparait 87 fois dans le Coran. Le nom al-Tawwab (le Revenant en grace) est un nom divin mentionne 11 fois. En 9:104, « ne savent-ils pas que c'est Dieu qui accepte le repentir de Ses serviteurs ? ». En 110:3, « repens-toi a Lui, Il est le Revenant en grace ». Le Coran insiste sur le fait que Dieu accepte toujours le repentir — la porte du retour n'est jamais fermee.",
              axe5_frequence: "Pour la mission du khalifa, l'acceptation divine du repentir est la garantie que la mission peut etre reprise apres l'echec. Le khalifa qui faute n'est pas definitivement exclu — Dieu accepte son repentir et lui permet de reprendre sa mission. Le tawba est le mecanisme de resilience de la mission du khalifa."
            }
          }
        }
      },
      {
        word_key: "rhm", position: 26, sense_chosen: "miséricorde",
        analysis_axes: {
          sense_chosen: "miséricorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["se forcer à la compassion", "miséricorde réciproque", "dire \"que Dieu te fasse miséricorde\"", "miséricorde", "traiter avec compassion", "pardon", "demander la miséricorde", "le Compatissant", "plus miséricordieux", "objet de miséricorde", "traité avec beaucoup de compassion"],
              proof_ctx: "Le mot al-rahimu est un adjectif intensif de la racine r-h-m au cas nominatif defini. Le Lane's donne « the Merciful, the Compassionate, the One who shows mercy ». Al-Rahim est l'un des noms divins les plus frequents. Le mot vient de rahm (matrice, uterus) — la misericorde divine est comparee a la tendresse maternelle. Al-Rahim designe la misericorde en acte — Dieu agit avec compassion envers Ses creatures.",
              axe1_verset: "Le mot al-rahimu cloture le verset comme attribut divin final. Apres al-Tawwab (le Revenant en grace), voici al-Rahim (le Misericordieux). Les deux noms forment un couple — Dieu revient en grace et fait misericorde. Le verset se termine sur une note d'espoir : malgre la faute du veau, Dieu est Misericordieux. La misericorde est le dernier mot du recit du veau d'or.",
              axe2_voisins: "Le verset 51 qualifiait les enfants d'Israel d'injustes. Ce verset 54 se termine par la misericorde divine. L'arc narratif va de l'injustice humaine a la misericorde divine — le peche des hommes est surmonte par la grace de Dieu. La misericorde n'excuse pas l'injustice mais la depasse.",
              axe3_sourate: "La racine r-h-m est omni-presente dans la sourate al-Baqarah. La Basmala (au nom de Dieu le Tout-Misericordieux le Tres-Misericordieux) ouvre la sourate. En 2:128, « Tu es le Revenant, le Misericordieux ». En 2:143, « Dieu est envers les gens Compatissant, Misericordieux ». La misericorde encadre toute la sourate — c'est l'attribut divin qui domine tous les autres.",
              axe4_coherence: "La racine r-h-m apparait 339 fois dans le Coran. C'est l'un des noms divins les plus frequents. En 6:12, « Il s'est prescrit a Lui-meme la misericorde ». En 7:156, « Ma misericorde embrasse toute chose ». La misericorde divine est universelle et precede la colere — Dieu a inscrit dans Sa nature meme la priorite de la misericorde sur le chatiment.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde est la qualite a imiter. Le khalifa doit etre misericordieux comme Dieu est misericordieux — pardonner, avoir compassion, agir avec tendresse. La misericorde n'est pas une faiblesse mais la plus haute forme de force. Le khalifa misericordieux accomplit sa mission dans l'esprit de Dieu."
            },
            "Utérus/Reproduction": {
              status: "nul",
              senses: ["vulve", "maladie de l'utérus", "utérus gonflé", "utérus", "chamelle malade post-partum", "sortie de l'utérus"],
              proof_ctx: "L'uterus est le sens physique de r-h-m. Le contexte utilise al-Rahim comme nom divin (le Misericordieux), pas dans le sens anatomique. Le lien etymologique (la misericorde vient de la matrice) est reel mais le contexte est clairement theologal."
            },
            "Parenté/Lien familial": {
              status: "nul",
              senses: ["sentiment de parenté", "lien de parenté", "parents par les femmes", "parent interdit au mariage", "connecté par parenté"],
              proof_ctx: "La parente est un sens social de r-h-m (rahim = lien de parente). Le contexte utilise al-Rahim comme attribut divin, pas comme lien familial."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// DAILY PHRASES — roots: wed, lyl, ejl, efw, qtl, end, akhḏ, xta (akhḏ déjà couvert)
// =====================================================
const dailyPhrases = [
  {
    analysis_id: 525, // wed
    phrases: [
      { sense: "promettre", arabic: "وَعَدَ", phon: "wa'ada", french: "Il a promis" },
      { sense: "rendez-vous", arabic: "مَوْعِد", phon: "maw'id", french: "un rendez-vous" },
      { sense: "promesse", arabic: "وَعْد", phon: "wa'd", french: "une promesse" }
    ]
  },
  {
    analysis_id: 528, // lyl
    phrases: [
      { sense: "nuit", arabic: "لَيْل", phon: "layl", french: "la nuit" },
      { sense: "nuit", arabic: "لَيْلَة", phon: "layla", french: "une nuit" },
      { sense: "nuit", arabic: "لَيَالٍ", phon: "layalin", french: "des nuits" }
    ]
  },
  {
    analysis_id: 530, // ejl
    phrases: [
      { sense: "veau", arabic: "عِجْل", phon: "'ijl", french: "un veau" },
      { sense: "se hâter", arabic: "عَجِلَ", phon: "'ajila", french: "il s'est hate" },
      { sense: "précipiter", arabic: "اسْتَعْجَلَ", phon: "ista'jala", french: "il a precipite" }
    ]
  },
  {
    analysis_id: 547, // efw
    phrases: [
      { sense: "pardonner", arabic: "عَفَا", phon: "'afa", french: "il a pardonne" },
      { sense: "pardonner", arabic: "عَفْو", phon: "'afw", french: "le pardon" },
      { sense: "effacer", arabic: "عَفَا الْأَثَرَ", phon: "'afa al-athar", french: "il a efface la trace" }
    ]
  },
  {
    analysis_id: 556, // qtl
    phrases: [
      { sense: "tuer", arabic: "قَتَلَ", phon: "qatala", french: "il a tue" },
      { sense: "combat", arabic: "قِتَال", phon: "qital", french: "un combat" },
      { sense: "combattre", arabic: "قَاتَلَ", phon: "qatala (III)", french: "il a combattu" }
    ]
  },
  {
    analysis_id: 566, // end
    phrases: [
      { sense: "auprès de", arabic: "عِنْدَ", phon: "'inda", french: "aupres de" },
      { sense: "chez", arabic: "عِنْدَهُ", phon: "'indahu", french: "chez lui" },
      { sense: "auprès de", arabic: "عِنْدَ اللَّهِ", phon: "'inda Allahi", french: "aupres de Dieu" }
    ]
  },
  {
    analysis_id: 534, // akhḏ
    phrases: [
      { sense: "prendre", arabic: "أَخَذَ", phon: "akhadha", french: "il a pris" },
      { sense: "saisir", arabic: "اتَّخَذَ", phon: "ittakhadha", french: "il a adopte" },
      { sense: "punir", arabic: "أَخْذ", phon: "akhdh", french: "une prise, un châtiment" }
    ]
  }
];

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  const data = verseData[verseNum];
  if (!data) {
    console.error(`Verset ${verseNum} non trouve`);
    return null;
  }

  console.log(`\n--- VERSET 2:${verseNum} (verse_id=${data.verse_id}, analysis_id=${data.analysis_id}) ---`);

  let okCount = 0, errCount = 0;

  // Insert VWA entries
  for (const word of data.words) {
    // Ensure sense_chosen is in analysis_axes
    const axes = { ...word.analysis_axes };
    if (!axes.sense_chosen) axes.sense_chosen = word.sense_chosen;
    if (!axes.concept_chosen) axes.concept_chosen = word.analysis_axes.concept_chosen;

    const { error: insertErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      root: null,
      sense_chosen: word.sense_chosen,
      position: word.position,
      analysis_axes: axes,
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

  const verseIds = [58, 59, 60, 61];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 51 A 54 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 51; v <= 54; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V51-54 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(console.error);
