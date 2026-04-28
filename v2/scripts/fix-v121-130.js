const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const fixes = [
  { vid: 129, wk: 'lty', concept: 'Pronom relatif', axe: 'axe5_frequence',
    text: "Pour la mission du khalifa, le pronom relatif al-lati est un outil grammatical qui precise et delimite. Dans ce verset, il restreint le bienfait a un bienfait specifique — celui dont Dieu les a combles. Le khalifa doit comprendre que les bienfaits divins sont specifiques et cibles, pas generiques. La precision grammaticale du pronom relatif force le lecteur a identifier exactement quel bienfait est vise. Cette precision linguistique sert la justice car elle empeche les generalisations abusives." },
  { vid: 129, wk: 'nem', concept: 'Bienfait/Faveur', axe: 'axe2_voisins',
    text: "Le verset 121 parlait de ceux qui recitent le Livre correctement et y adherent. Le verset 122 enchaine avec un rappel direct aux enfants d'Israel de se souvenir du bienfait specifique dont Dieu les a combles. Le verset 123 les mettra en garde contre un jour ou nulle ame ne suffira a une autre. Ce passage forme une progression : fidelite au Livre, rappel du bienfait, puis avertissement. Le bienfait est presente comme une raison de gratitude et de fidelite, pas comme un droit acquis." },
  { vid: 129, wk: 'nem', concept: 'Douceur/Aisance', axe: 'axe2_voisins',
    text: "Le verset 121 traitait de la recitation fidele du Livre. Le verset 122 rappelle un bienfait specifique dont Dieu les a combles. Le verset 123 avertit d'un jour ou personne ne pourra aider personne. La douceur et l'aisance materielle ne correspondent pas au contexte de ce passage qui parle de bienfaits divins specifiques lies a l'election d'un peuple. Le rappel n'est pas celui d'un confort materiel mais d'une faveur spirituelle et historique." },
  { vid: 129, wk: 'nem', concept: 'Douceur/Aisance', axe: 'axe3_sourate',
    text: "La sourate al-Baqarah traite de la relation entre Dieu et les peuples du Livre. Le bienfait dont il est question dans ce passage n'est pas la douceur de vivre mais le privilege d'avoir recu le Livre et les prophetes. La douceur materielle est un sens secondaire de la racine n-e-m qui ne correspond pas au theme central de la sourate. Al-Baqarah parle de choix, de responsabilites et de consequences — pas de confort." },
  { vid: 129, wk: 'nem', concept: 'Douceur/Aisance', axe: 'axe4_coherence',
    text: "Le Coran utilise la racine n-e-m dans de nombreux versets pour decrire les bienfaits divins. En 1:7, le sirat al-ladhina an'amta alayhim designe le chemin de ceux que Dieu a combles de bienfaits. En 5:20, Moussa rappelle a son peuple les bienfaits de Dieu. L'usage coranique constant de cette racine pointe vers le bienfait et la faveur, pas vers la douceur materielle. Le Coran ne parle pas de confort mais de faveurs divines precises." },
  { vid: 129, wk: 'nem', concept: 'Douceur/Aisance', axe: 'axe5_frequence',
    text: "Pour la mission du khalifa, la douceur et l'aisance ne sont pas des objectifs en soi mais des consequences possibles de la justice. Le khalifa ne cherche pas le confort materiel mais la droiture. Dans ce verset, le rappel porte sur un bienfait divin specifique — l'election et la faveur divine — pas sur le bien-etre materiel. La douceur de vivre est un sens trop restreint pour capturer la portee du bienfait dont parle le verset." },
  { vid: 130, wk: 'nfs', concept: 'Âme/Être', axe: 'axe5_frequence',
    text: "Pour la mission du khalifa, l'ame ou l'etre (nafs) est la realite fondamentale de chaque personne. Le verset 2:123 avertit que le Jour venu, aucune ame ne suffira a une autre — chacun porte seul sa responsabilite. Cette solitude devant la consequence est un pilier de la mission du khalifa : chaque individu doit agir justement par lui-meme, sans compter sur l'intercession ou la compensation d'autrui. Le khalifa doit construire une civilisation ou chaque ame est responsable de ses actes." },
  { vid: 132, wk: 'brh', concept: 'Preuve/Piété', axe: 'axe2_voisins',
    text: "Le verset 124 mentionnait l'epreuve d'Abraham et son etablissement comme exemple pour les gens. Le verset 125 enchaine avec l'institution de la Maison comme lieu de visite et de securite, et la mission confiee a Abraham et Ismail de purifier la Maison. Le verset 126 continuera avec la priere d'Abraham pour la securite de la cite. Abraham est mentionne deux fois dans ce verset, d'abord pour la station (maqam Ibrahim) puis pour la mission de purification. La piete d'Abraham se manifeste dans l'acte concret de purifier le lieu de culte." },
  { vid: 132, wk: 'brh', concept: 'Preuve/Piété', axe: 'axe3_sourate',
    text: "La sourate al-Baqarah consacre une longue section a l'histoire d'Abraham et a son role fondateur. Abraham est presente comme le modele du croyant qui se soumet entierement a Dieu et accomplit ses commandements. La piete dans ce contexte est une piete active — construire, purifier, etablir — pas une piete contemplative. Le theme d'Abraham dans al-Baqarah est celui de la construction d'une civilisation fondee sur la soumission a Dieu et la purification des lieux de culte." },
  { vid: 132, wk: 'brh', concept: 'Preuve/Piété', axe: 'axe4_coherence',
    text: "La racine b-r-h apparait dans le Coran principalement dans le nom d'Abraham (Ibrahim). Le Coran presente Abraham comme celui qui a rompu avec l'idolatrie de son peuple et a etabli le monotheisme pur. En 6:74-83, Abraham cherche la verite en observant les astres et conclut qu'il se tourne vers le Createur. En 2:130-131, Abraham se soumet et enjoint a ses fils de faire de meme. Le Coran utilise le nom d'Abraham comme symbole de la piete active et de la soumission totale." },
  { vid: 132, wk: 'brh', concept: 'Preuve/Piété', axe: 'axe5_frequence',
    text: "Pour la mission du khalifa, Abraham represente le modele de la piete mise en action. Il ne se contente pas de croire — il construit la Maison, il purifie le lieu, il prie pour sa descendance et pour la cite. Le khalifa doit s'inspirer de ce modele : la piete n'est pas un sentiment interieur mais un engagement concret dans la construction et la purification. La mention d'Abraham dans ce verset lie directement la piete a l'acte de batir et de purifier, deux piliers de la mission du khalifa." },
  { vid: 132, wk: 'nws', concept: 'Humanité/Peuple', axe: 'axe4_coherence',
    text: "La racine n-w-s ou n-a-s apparait dans le Coran pour designer l'humanite dans son ensemble ou les gens en general. En 2:21, les gens sont appeles a adorer leur Seigneur. En 2:124, Abraham est etabli comme exemple pour les gens (li-l-nas). En 2:125, la Maison est faite lieu de visite pour les gens. Le Coran utilise al-nas pour designer l'humanite universelle, sans distinction de race ou de religion. La Maison est ouverte a tous les gens, pas a un groupe specifique." },
  { vid: 132, wk: 'nws', concept: 'Humanité/Peuple', axe: 'axe5_frequence',
    text: "Pour la mission du khalifa, les gens (al-nas) sont le destinataire universel de la Maison. Le khalifa doit veiller a ce que les lieux de culte et les institutions soient accessibles a l'humanite entiere, sans exclusion. Le verset 2:125 etablit que la Maison a ete faite pour les gens — pas pour un peuple elu ou un groupe particulier. Cette universalite est un pilier de la mission du khalifa : batir des institutions ouvertes a tous au service de la justice." },
  { vid: 135, wk: 'rbb', concept: 'Croissance/Augmentation', axe: 'axe5_frequence',
    text: "Pour la mission du khalifa, la croissance et l'augmentation sont des dimensions fondamentales du developpement. Le khalifa doit faire croitre la justice, la connaissance et la civilisation. Cependant dans ce verset, le mot rabbana est un vocatif — Abraham et Ismail s'adressent a leur Seigneur, pas a un principe de croissance. La croissance est un sens etymologique de la racine r-b-b mais le contexte de priere et de supplication pointe clairement vers la seigneurie et l'autorite bienveillante." }
];

(async () => {
  for (const fix of fixes) {
    const { data: vwas } = await sb.from('verse_word_analyses')
      .select('id, analysis_axes').eq('verse_id', fix.vid).eq('word_key', fix.wk);
    if (!vwas || vwas.length === 0) { console.log('NOT FOUND:', fix.wk, 'vid=' + fix.vid); continue; }
    for (const w of vwas) {
      const axes = w.analysis_axes;
      if (axes.concepts[fix.concept]) {
        axes.concepts[fix.concept][fix.axe] = fix.text;
        await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', w.id);
        console.log('Fixed:', fix.wk, fix.concept, fix.axe, '(' + fix.text.length + ' chars)');
      } else {
        console.log('Concept not found:', fix.wk, fix.concept);
      }
    }
  }
  console.log('\nAll fixes applied');
})();
