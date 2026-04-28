const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const FIXES = [
  {
    id: 4121, concept: "Droiture/Rectitude",
    axes: {
      axe1_verset: "Le sens de droiture/rectitude pour qayyum s'appuierait sur l'idee que Dieu se tient droit dans Ses actes. Cependant, ce verset ne qualifie pas un comportement moral de Dieu : il affirme Son mode d'existence absolu. La phrase nominale pure dit CE QU'Il est, pas COMMENT Il agit. La droiture qualifie une conduite; l'auto-subsistance qualifie un mode d'etre fondamental.",
      axe2_voisins: "Les attributs qui encadrent qayyum dans ce verset decrivent des modes d'existence absolus : vie parfaite (Hayy), absence de torpeur et de sommeil, possession universelle. Ces attributs sont ontologiques (relatifs a l'etre), non moraux (relatifs a la conduite). Inserer la droiture parmi des attributs ontologiques creerait une rupture dans la logique du verset.",
      axe3_sourate: "Al-Baqarah utilise d'autres termes pour qualifier la droiture de Dieu dans Ses jugements : 'adl (justice), qist (equite). Ces termes existent et sont distincts de qayyum. Si le verset avait voulu dire la droiture morale, il aurait utilise ces termes. Qayyum est reserve dans le Coran a ce nom divin specifique et n'est jamais employe pour qualifier une conduite morale.",
      axe4_coherence: "Dans tout le Coran, qayyum n'apparait qu'en association avec Hayy (2:255, 3:2, 20:111). Les deux noms divins forment toujours une paire fixe. La constance de cette paire montre que qayyum qualifie le mode d'existence (subsister) et non une qualite morale (etre droit). La droiture dans le Coran est exprimee par d'autres racines distinctes.",
      axe5_frequence: "Qayyum n'apparait que 3 fois dans le Coran, toujours comme nom divin paire avec Hayy. Les grammairiens arabes classiques le definissent comme le schema fa'yul de qa'im = celui qui subsiste absolument et maintient les autres en existence. Aucun grammairien classique ne donne la droiture morale comme sens premier de qayyum."
    }
  },
  {
    id: 4123, concept: "Entourage physique/Enceinte",
    axes: {
      axe1_verset: "Le sens d'entourage physique pour ahata bi s'appuierait sur l'idee d'encercler concreterement. Mais dans ce verset, le complement est 'quelque chose de Son savoir' : c'est une connaissance qui est embrassee ou non. Le sens physique ne peut pas s'appliquer a un objet abstrait comme la connaissance. Le contexte impose un sens cognitif et non spatial.",
      axe2_voisins: "Le verset dit que les creatures ne peuvent pas ahata bi-shay'in min 'ilmihi (entourer quelque chose de Son savoir). La negation porte sur la capacite cognitive d'embrasser le savoir divin. Le verbe ihata signifie ici avoir une comprehension complete qui cerne son objet de toutes parts : c'est une metaphore de la comprehension totale, pas un encerclement physique concret.",
      axe3_sourate: "L'emploi d'ahata dans al-Baqarah est coherent avec le sens cognitif : 2:19 (Dieu entoure les incredules de toutes parts). Cette utilisation confirme que ihata designe une emprise totale plutot qu'une enceinte materielle. Quand Dieu est le sujet, il s'agit de maitrise totale; quand les humains sont le sujet, il s'agit de connaissance totale.",
      axe4_coherence: "La racine H-w-T dans le Coran est systematiquement utilisee pour la connaissance ou la maitrise totale : 18:91 (ahata bima ladayhi = Il a connaissance complete de ce qu'il possede), 27:22 (ahatu bi-ma lam tuhit = j'ai connaissance de ce que tu n'as pas embrasse). L'entourage physique est le sens etymologique premier mais tous les emplois coraniques sont cognitifs.",
      axe5_frequence: "Ahata bi apparait environ 12 fois dans le Coran. Dans tous les cas, c'est la maitrise divine totale ou la connaissance totale qui est decrite. Aucun emploi coranien d'ahata bi ne decrit une enceinte physique concrete autour d'un objet materiel : la metaphore est toujours etendue vers la connaissance ou la maitrise."
    }
  },
  {
    id: 4124, concept: "Capacite/Pouvoir",
    axes: {
      axe1_verset: "Le sens de capacite/pouvoir pour wasi'a s'appuierait sur l'idee que quelqu'un peut faire quelque chose. Mais dans ce verset, le sujet est le kursiy (Trone) : un trone ne peut pas agir, il est. La capacite s'applique a des etres capables de choix; la vastitude s'applique a des espaces ou des etendues. Le sujet inamine impose le sens spatial.",
      axe2_voisins: "Wasi'a decrit ici une propriete statique du kursiy : son etendue, sa dimension, sa capacite d'englobement spatial. Ce n'est pas la capacite d'une personne a faire quelque chose mais la vastitude d'une realite. La phrase nominale du verset (sans verbe d'action) confirme l'aspect descriptif et ontologique, non dynamique et volitif.",
      axe3_sourate: "Al-Baqarah utilise wasi'a pour la largeur et la vastitude : 2:115 (inna Allah wasi'un 'alim = Dieu est vaste, omniscient). La paire wasi'/alim montre que wasi' concerne l'etendue (dimensionnelle) pendant qu'alim concerne la profondeur (qualitative). Ce n'est pas une capacite mais une dimension qui englobe.",
      axe4_coherence: "La racine w-s-' dans le Coran exprime toujours l'etendue ou le fait d'englober : 3:133 (jannatun 'arduha al-samawatu wa-l-ard = un jardin dont la largeur est les cieux et la terre). La formule est parallele au verset 2:255 : le Trone embrasse les cieux et la terre comme le Paradis a la largeur des cieux et de la terre. C'est une mesure d'etendue, pas une capacite.",
      axe5_frequence: "Wasi'a apparait environ 35 fois dans le Coran. Le sens de capacite personnelle est exprime dans le Coran par d'autres termes : qadara/qadir (pouvoir), istata'a (etre capable). Wasi' est reserve a la vastitude et au fait d'englober : une propriete dimensionnelle, pas une capacite volitionnelle. La distinction entre ces racines est systematique dans le Coran."
    }
  },
  {
    id: 4125, concept: "Savoir/Connaissance",
    axes: {
      axe1_verset: "L'interpretation kursiy = savoir divin s'appuie sur des linguistes arabes anciens qui rapprochent kursiy de kurs (tablette d'ecriture). Dans ce verset, le kursiy s'etend sur les cieux et la terre : le verbe wasi'a est naturellement spatial. L'expression 'le savoir s'etend sur' est moins naturelle que 'le Trone s'etend sur' pour un contexte de souverainete.",
      axe2_voisins: "Si kursiy signifiait le savoir, le verset mentionnerait deux fois le savoir en quelques mots : 'la yuhituna bi-shay'in min 'ilmihi' (ils n'embrassent rien de Son savoir) puis 'Son savoir s'etend sur les cieux et la terre'. Ce doublon affaiblirait la structure du verset. Le Trone comme symbole de souverainete donne un referent different et complementaire.",
      axe3_sourate: "Le Coran exprime le savoir divin par 'ilm (racine '-l-m), terme distinct de kursiy. Dans al-Baqarah, le savoir divin est mentionne directement quelques mots avant (wa la yuhituna bi-shay'in min 'ilmihi). Si kursiy voulait dire savoir, le verset utiliserait deux termes differents pour la meme realite sans raison apparente.",
      axe4_coherence: "L'interpretation kursiy = savoir est mentionnee par quelques grammairiens mais reste minoritaire. La majorite des commentateurs comprend kursiy comme le Trone, le Siege de la souverainete. L'argument du doublon avec 'ilm mentionne dans le meme verset penche contre cette interpretation et en faveur du sens de Trone.",
      axe5_frequence: "Kursiy n'apparait que 2 fois dans le Coran : ici (2:255) et en 38:34 pour le trone de Salomon. En 38:34, le contexte est clairement royal : Nous avons mis sur son trone un corps. Cette deuxieme occurrence confirme que kursiy designe un trone materiel ou symbolique de souverainete, pas une connaissance abstraite."
    }
  },
  {
    id: 4126, concept: "Courbure/Affaissement",
    axes: {
      axe1_verset: "Le sens de courbure/affaissement pour ya'udu s'appuie sur l'image physique de courber sous le poids. Dans ce verset, la garde des cieux et de la terre ne courberait pas Dieu. Cette lecture est coherente mais rend l'image plus physique qu'elle ne l'est. Le sens de peser comme charge ou fardeau est plus abstrait et s'applique mieux a une responsabilite ou une tache.",
      axe2_voisins: "La negation wa la ya'uduhu hifzuhuma conclut le verset du Trone en affirmant la facilite divine. La courbure physique est une image plus extreme que le simple poids : elle implique une deformation. Pour exprimer l'absence de fardeau, l'arabe dit ya'udu (peser) et non yanhanikhu (courber, plier). Le sens de poids est plus atteste dans ce contexte.",
      axe3_sourate: "Al-Baqarah decrit la toute-puissance divine par des attributs negatifs : il ne dort pas, la torpeur ne Le saisit pas, la garde ne Lui pese pas. Ces negations forment une serie d'affranchissements des limitations humaines. La courbure est une limitation physique trop specifique dans cette serie qui est plutot experiencielle (sommeil, fatigue, poids).",
      axe4_coherence: "La racine '-w-d dans le Coran est rare. Dans la litterature arabe classique, ada al-hamlu = le poids l'a alourdi/eprouve : le sens de peser lourd et d'eprouver est bien atteste. Courber est une image connexe mais le sens premier est le poids et la fatigue, pas la deformation physique visible. La negation porte sur le fardeau, pas sur une forme.",
      axe5_frequence: "La racine '-w-d et ses derives sont tres rares dans le Coran : ya'udu n'apparait qu'ici. Le sens de courbure viendrait du sens physique de etre courbe sous le poids mais le Coran utilise l'image dans le contexte d'un fardeau ou d'une fatigue, pas d'une deformation visible. La negation affirme l'absence de poids, pas l'absence de deformation."
    }
  }
];

async function main() {
  for (const fix of FIXES) {
    const { data: vwa } = await supabase.from('verse_word_analyses').select('analysis_axes').eq('id', fix.id).single();
    const axes = vwa.analysis_axes;
    axes.concepts[fix.concept] = { ...axes.concepts[fix.concept], ...fix.axes };
    const { error } = await supabase.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', fix.id);
    if (error) console.error(`ERROR id=${fix.id}:`, error.message);
    else console.log(`OK id=${fix.id} "${fix.concept}"`);
  }
  console.log('DONE');
}
main().catch(console.error);
