const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const dailyData = [
  // 1. dhb (aller/partir)
  { analysis_id: 352, phrases: [
    { phrase_fr: "Je vais au marché acheter des fruits.", context: "Aller = se déplacer vers une destination précise" },
    { phrase_fr: "Mon frère est parti tôt ce matin.", context: "Partir = quitter un lieu, s'en aller" },
    { phrase_fr: "Où vas-tu avec ce sac ?", context: "Aller = mouvement vers un endroit" },
  ]},
  // 2. zlm (ténèbres/obscurité)
  { analysis_id: 354, phrases: [
    { phrase_fr: "Il fait nuit noire dehors, on ne voit rien.", context: "Les ténèbres = absence totale de lumière" },
    { phrase_fr: "La pièce était plongée dans l'obscurité.", context: "Obscurité = état de ce qui est privé de lumière" },
    { phrase_fr: "Les enfants ont peur du noir.", context: "Le noir = les ténèbres, l'absence de clarté" },
  ]},
  // 3. red (tonnerre)
  { analysis_id: 357, phrases: [
    { phrase_fr: "Le tonnerre a fait trembler les vitres.", context: "Tonnerre = bruit violent qui accompagne l'orage" },
    { phrase_fr: "On entend le tonnerre au loin, l'orage approche.", context: "Tonnerre = grondement annonçant la tempête" },
    { phrase_fr: "Le bruit du tonnerre a réveillé tout le monde.", context: "Tonnerre = son puissant et soudain dans le ciel" },
  ]},
  // 4. brq (éclair)
  { analysis_id: 358, phrases: [
    { phrase_fr: "Un éclair a illuminé le ciel pendant une seconde.", context: "Éclair = flash lumineux soudain" },
    { phrase_fr: "Les éclairs se succèdent sans arrêt ce soir.", context: "Éclair = lumière vive lors d'un orage" },
    { phrase_fr: "Elle a vu l'éclair avant d'entendre le tonnerre.", context: "Éclair = manifestation lumineuse rapide" },
  ]},
  // 5. hḏr (précaution/vigilance)
  { analysis_id: 363, phrases: [
    { phrase_fr: "Fais attention en traversant la route.", context: "Précaution = vigilance face au danger" },
    { phrase_fr: "Sois prudent, le sol est glissant.", context: "Prudence = attitude de vigilance préventive" },
    { phrase_fr: "Il prend toujours ses précautions avant de voyager.", context: "Précaution = mesure prise pour éviter un risque" },
  ]},
  // 6. ard (terre/sol)
  { analysis_id: 324, phrases: [
    { phrase_fr: "Les feuilles sont tombées sur le sol.", context: "Sol = surface de la terre" },
    { phrase_fr: "La terre est fertile dans cette région.", context: "Terre = matière du sol, terrain cultivable" },
    { phrase_fr: "Il s'est assis par terre pour se reposer.", context: "Terre = le sol, la surface au-dessous de nous" },
  ]},
  // 7. smm (surdité/sourd)
  { analysis_id: 333, phrases: [
    { phrase_fr: "Mon grand-père n'entend plus très bien.", context: "Surdité = perte de la capacité d'entendre" },
    { phrase_fr: "Il parle fort parce qu'il est sourd d'une oreille.", context: "Sourd = qui ne perçoit pas les sons" },
    { phrase_fr: "Elle n'a pas entendu la sonnette.", context: "Ne pas entendre = incapacité à percevoir un son" },
  ]},
  // 8. emy (cécité/aveuglement)
  { analysis_id: 335, phrases: [
    { phrase_fr: "Sans lunettes, je ne vois presque rien.", context: "Cécité = incapacité de voir clairement" },
    { phrase_fr: "Il avance à tâtons dans le noir.", context: "Aveuglement = privation de la vue, avancer sans voir" },
    { phrase_fr: "Elle ferme les yeux et ne voit plus rien.", context: "Ne pas voir = être privé de la vision" },
  ]},
  // 9. rbh (gain/profit)
  { analysis_id: 339, phrases: [
    { phrase_fr: "Elle a gagné beaucoup d'argent cette année.", context: "Gain = retour positif d'un investissement" },
    { phrase_fr: "Le commerce a été profitable ce mois-ci.", context: "Profit = bénéfice tiré d'une activité" },
    { phrase_fr: "Il cherche à faire du profit avec sa boutique.", context: "Profit = avantage financier obtenu d'un échange" },
  ]},
  // 10. mwt (mort)
  { analysis_id: 364, phrases: [
    { phrase_fr: "Les fleurs du jardin sont mortes à cause du gel.", context: "Mort = cessation de la vie" },
    { phrase_fr: "La batterie de mon téléphone est morte.", context: "Mourir = cesser de fonctionner (usage courant)" },
    { phrase_fr: "Cet arbre est mort depuis l'été dernier.", context: "Mort = état de ce qui n'a plus de vie" },
  ]},
  // 11. mshy (marcher)
  { analysis_id: 368, phrases: [
    { phrase_fr: "Je marche tous les matins dans le parc.", context: "Marcher = se déplacer à pied" },
    { phrase_fr: "Les enfants marchent en file vers l'école.", context: "Marcher = avancer pas à pas" },
    { phrase_fr: "Elle préfère marcher plutôt que prendre le bus.", context: "Marcher = mode de déplacement à pied" },
  ]},
  // 12. kll (totalité/tout)
  { analysis_id: 372, phrases: [
    { phrase_fr: "Tous les élèves sont présents aujourd'hui.", context: "Tout = la totalité, l'ensemble complet" },
    { phrase_fr: "J'ai mangé tout le gâteau.", context: "Tout = l'intégralité de quelque chose" },
    { phrase_fr: "Chaque chose a sa place dans cette maison.", context: "Chaque = chacun pris individuellement dans un tout" },
  ]},
  // 13. fsd (corruption/désordre)
  { analysis_id: 318, phrases: [
    { phrase_fr: "La nourriture s'est gâtée à cause de la chaleur.", context: "Corruption = détérioration, passage d'un bon à un mauvais état" },
    { phrase_fr: "Le désordre règne dans cette pièce.", context: "Désordre = absence d'organisation, état corrompu" },
    { phrase_fr: "L'eau de la rivière est polluée par les déchets.", context: "Corrompre = altérer la qualité d'origine" },
  ]},
  // 14. hza (moquerie)
  { analysis_id: 320, phrases: [
    { phrase_fr: "Il ne faut pas se moquer des autres.", context: "Moquerie = tourner quelqu'un en dérision" },
    { phrase_fr: "Ses camarades l'ont ridiculisé devant tout le monde.", context: "Ridiculiser = humilier par la moquerie" },
    { phrase_fr: "Elle rit de lui à chaque fois qu'il parle.", context: "Se moquer = rire de quelqu'un de manière irrespectueuse" },
  ]},
  // 15. emh (confusion/égarement)
  { analysis_id: 323, phrases: [
    { phrase_fr: "Je suis complètement perdu dans ce quartier.", context: "Égarement = ne plus savoir où l'on est" },
    { phrase_fr: "Il erre sans but dans les rues.", context: "Errer = marcher sans direction, être confus" },
    { phrase_fr: "Cette explication m'a rendu encore plus confus.", context: "Confusion = état de celui qui ne comprend plus" },
  ]},
  // 16. lqy (rencontrer)
  { analysis_id: 327, phrases: [
    { phrase_fr: "J'ai rencontré un vieil ami au supermarché.", context: "Rencontrer = croiser quelqu'un par hasard" },
    { phrase_fr: "Nous nous retrouvons chaque vendredi au café.", context: "Se retrouver = se rencontrer à un rendez-vous" },
    { phrase_fr: "Elle a rencontré son voisin en sortant de chez elle.", context: "Rencontrer = tomber sur quelqu'un" },
  ]},
  // 17. sfh (légèreté/stupidité)
  { analysis_id: 332, phrases: [
    { phrase_fr: "Il a agi sans réfléchir et le regrette maintenant.", context: "Légèreté = agir de manière irréfléchie" },
    { phrase_fr: "C'est insensé de sortir sans parapluie sous la pluie.", context: "Insensé = qui manque de bon sens" },
    { phrase_fr: "Ne prends pas de décisions à la légère.", context: "Légèreté = manque de sérieux dans le jugement" },
  ]},
  // 18. bkm (mutisme)
  { analysis_id: 334, phrases: [
    { phrase_fr: "Il est resté muet face à la question.", context: "Mutisme = incapacité ou refus de parler" },
    { phrase_fr: "Elle n'a pas dit un seul mot de toute la réunion.", context: "Ne pas parler = garder le silence, rester muet" },
    { phrase_fr: "Le témoin est resté silencieux devant le juge.", context: "Silence = état de celui qui ne parle pas" },
  ]},
  // 19. rje (retour)
  { analysis_id: 336, phrases: [
    { phrase_fr: "Il est revenu de voyage hier soir.", context: "Retour = action de revenir à son point de départ" },
    { phrase_fr: "Je retourne chez moi après le travail.", context: "Retourner = reprendre le chemin inverse" },
    { phrase_fr: "Les oiseaux reviennent chaque printemps.", context: "Revenir = faire un retour vers un lieu connu" },
  ]},
  // 20. tjr (commerce)
  { analysis_id: 340, phrases: [
    { phrase_fr: "Mon oncle fait du commerce de tissus.", context: "Commerce = activité d'achat et de vente" },
    { phrase_fr: "Le marché est plein de commerçants le samedi.", context: "Commerçant = celui qui pratique le négoce" },
    { phrase_fr: "Ils négocient le prix des marchandises.", context: "Négoce = échange commercial entre parties" },
  ]},
  // 21. trk (abandon/laisser)
  { analysis_id: 353, phrases: [
    { phrase_fr: "Il a laissé ses clés sur la table.", context: "Laisser = abandonner un objet quelque part" },
    { phrase_fr: "Elle a abandonné son ancien travail.", context: "Abandonner = quitter définitivement" },
    { phrase_fr: "Ne laisse pas tes affaires traîner partout.", context: "Laisser = ne pas emporter avec soi" },
  ]},
  // 22. sbe (doigt)
  { analysis_id: 360, phrases: [
    { phrase_fr: "Il s'est coupé le doigt en cuisinant.", context: "Doigt = partie du corps, extrémité de la main" },
    { phrase_fr: "Elle pointe du doigt la direction à suivre.", context: "Pointer du doigt = indiquer avec le doigt" },
    { phrase_fr: "Le bébé met ses doigts dans la bouche.", context: "Doigt = membre utilisé pour saisir et toucher" },
  ]},
  // 23. adhn (oreille/écouter)
  { analysis_id: 361, phrases: [
    { phrase_fr: "Il a mal à l'oreille depuis ce matin.", context: "Oreille = organe de l'audition" },
    { phrase_fr: "Écoute bien ce que je vais te dire.", context: "Écouter = prêter attention avec l'oreille" },
    { phrase_fr: "Elle porte des boucles d'oreilles en argent.", context: "Oreille = partie du corps liée à l'écoute" },
  ]},
  // 24. hwt (entourer/protéger)
  { analysis_id: 365, phrases: [
    { phrase_fr: "La clôture entoure tout le jardin.", context: "Entourer = former un cercle autour de" },
    { phrase_fr: "Les montagnes encerclent la vallée.", context: "Encercler = disposer tout autour" },
    { phrase_fr: "Il a entouré sa maison d'un mur.", context: "Entourer = mettre une protection autour" },
  ]},
  // 25. qdr (puissance/capacité)
  { analysis_id: 373, phrases: [
    { phrase_fr: "Je suis capable de porter cette valise tout seul.", context: "Capacité = pouvoir faire quelque chose" },
    { phrase_fr: "Elle a le pouvoir de changer les choses.", context: "Puissance = force et capacité d'agir" },
    { phrase_fr: "Il n'a pas pu terminer le travail à temps.", context: "Pouvoir = avoir ou non la capacité de faire" },
  ]},
  // 26. shy (chose/vouloir)
  { analysis_id: 466, phrases: [
    { phrase_fr: "Il y a quelque chose par terre.", context: "Chose = objet, élément indéterminé" },
    { phrase_fr: "Chaque chose en son temps.", context: "Chose = tout élément considéré individuellement" },
    { phrase_fr: "Je veux te dire une chose importante.", context: "Chose = fait, élément d'information" },
  ]},
  // 27. dwa (lumière/éclairer)
  { analysis_id: 350, phrases: [
    { phrase_fr: "La lampe éclaire toute la chambre.", context: "Éclairer = produire de la lumière" },
    { phrase_fr: "Le soleil donne de la lumière pendant la journée.", context: "Lumière = clarté émise par une source" },
    { phrase_fr: "Allume la lumière, il fait sombre ici.", context: "Lumière = éclairage qui dissipe l'obscurité" },
  ]},
  // 28. seq (foudre)
  { analysis_id: 554, phrases: [
    { phrase_fr: "La foudre est tombée sur un arbre du parc.", context: "Foudre = décharge électrique violente" },
    { phrase_fr: "Pendant l'orage, la foudre a frappé le clocher.", context: "Foudroyer = être touché par la foudre" },
    { phrase_fr: "Le bruit de la foudre était assourdissant.", context: "Foudre = phénomène violent et soudain" },
  ]},
  // 29. kwd (imminence/presque)
  { analysis_id: 630, phrases: [
    { phrase_fr: "J'ai failli tomber dans l'escalier.", context: "Presque = être sur le point de, manquer de peu" },
    { phrase_fr: "Le bus est sur le point de partir.", context: "Imminence = ce qui va se produire très bientôt" },
    { phrase_fr: "Il a presque fini ses devoirs.", context: "Presque = très proche de l'achèvement" },
  ]},
  // 30. tgy (transgression)
  { analysis_id: 2598, phrases: [
    { phrase_fr: "Il a dépassé la limite de vitesse autorisée.", context: "Transgression = dépasser les limites établies" },
    { phrase_fr: "Ce comportement dépasse les bornes.", context: "Dépasser les bornes = aller au-delà de ce qui est acceptable" },
    { phrase_fr: "Elle a franchi la ligne rouge cette fois.", context: "Franchir les limites = transgresser les règles" },
  ]},
  // 31. mvl (exemple/comparaison)
  { analysis_id: 2599, phrases: [
    { phrase_fr: "Donne-moi un exemple pour que je comprenne.", context: "Exemple = illustration concrète d'une idée" },
    { phrase_fr: "C'est comparable à chercher une aiguille dans une botte de foin.", context: "Comparaison = rapprochement entre deux choses" },
    { phrase_fr: "Prenons l'exemple d'un étudiant qui travaille dur.", context: "Exemple = cas concret servant de modèle" },
  ]},
  // 32. xtf (saisir/arracher)
  { analysis_id: 2600, phrases: [
    { phrase_fr: "Il a arraché la mauvaise herbe du jardin.", context: "Arracher = retirer avec force" },
    { phrase_fr: "Elle a saisi le ballon au vol.", context: "Saisir = attraper rapidement" },
    { phrase_fr: "Le vent a arraché les feuilles des arbres.", context: "Arracher = enlever brusquement" },
  ]},
  // 33. shtn (diable/rebelle)
  { analysis_id: 1533, phrases: [
    { phrase_fr: "Cet enfant est un vrai petit rebelle.", context: "Rebelle = qui refuse de se soumettre aux règles" },
    { phrase_fr: "Il s'éloigne toujours du groupe.", context: "S'éloigner = se séparer, se mettre à l'écart" },
    { phrase_fr: "Elle refuse d'obéir aux consignes.", context: "Rébellion = attitude de refus et d'opposition" },
  ]},
  // 34. xlw (être seul/se retirer)
  { analysis_id: 827, phrases: [
    { phrase_fr: "Il aime rester seul le soir pour lire.", context: "Être seul = se trouver sans compagnie" },
    { phrase_fr: "Elle s'est retirée dans sa chambre.", context: "Se retirer = s'isoler, se mettre à l'écart" },
    { phrase_fr: "J'ai besoin d'un moment de solitude.", context: "Solitude = état de celui qui est seul" },
  ]},
  // 35. shry (acheter/échanger)
  { analysis_id: 871, phrases: [
    { phrase_fr: "J'ai acheté du pain à la boulangerie.", context: "Acheter = acquérir contre paiement" },
    { phrase_fr: "Elle vend des vêtements sur internet.", context: "Vendre = céder en échange d'argent" },
    { phrase_fr: "Ils ont échangé leurs livres entre eux.", context: "Échanger = donner et recevoir mutuellement" },
  ]},
  // 36. swb (atteindre/pluie)
  { analysis_id: 917, phrases: [
    { phrase_fr: "La pluie nous a surpris en chemin.", context: "Atteindre = toucher de manière inattendue" },
    { phrase_fr: "Une forte averse a touché toute la ville.", context: "Pluie = eau qui atteint le sol depuis le ciel" },
    { phrase_fr: "Le ballon a atteint la fenêtre du voisin.", context: "Atteindre = parvenir à toucher une cible" },
  ]},
];

async function run() {
  let ok = 0, err = 0;
  for (const root of dailyData) {
    for (const p of root.phrases) {
      const { error } = await db.from('word_daily').insert({
        analysis_id: root.analysis_id,
        french: p.phrase_fr,
        sense: p.context,
      });
      if (error) { console.log('ERR', root.analysis_id, error.message); err++; }
      else ok++;
    }
  }
  console.log(`Done: ${ok} OK, ${err} errors`);
}
run();
