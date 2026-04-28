const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 227
// verse_id=234, analysis_id=592
// "wa-in 'azamu al-talaqa
//  fa-inna Allaha sami'un 'alimun"
// =====================================================

const verseData = {
  227: {
    verse_id: 234,
    analysis_id: 592,
    translation_arab: "Et s'ils decident fermement le divorce, Dieu est Audient, Omniscient.",
    full_translation: "Et s'ils decident le divorce, Allah est, en verite, Audient et Omniscient.",
    translation_explanation: `§DEMARCHE§
Le verset 227 est la seconde branche de l'alternative ouverte au verset 226 : apres les quatre mois du delai d'ila', soit l'homme revient (fa', verset 226), soit il decide fermement le divorce ('azama al-talaq, verset 227). La structure est rigoureusement symetrique : verset 226 (si retour → Dieu est Pardonneur/Misericordieux), verset 227 (si divorce → Dieu est Audient/Omniscient). Les attributs divins sont choisis en correspondance avec l'acte : le pardon repond au retour, l'audition et la science repondent a la decision de divorce.

Le verbe **'azamu** est un accompli 3MP de la racine '-z-m. Le Lane's donne : decider fermement, resoudre, avoir l'intention ferme de, determiner. L'azm est la resolution ferme — pas simplement une intention mais une decision arretee, un engagement de volonte. Cette racine est distincte de '-z-m (ع ظ م = grandeur/ossature) qui partage la meme translitteration 'ezm' en Latin mais designe une realite differente. La racine ع ز م ('azama = decider) exprime la determination de la volonte, pas la grandeur ou la structure osseuse.

NOTE CRITIQUE SUR LA RACINE: Le word_key 'ezm' dans la base de donnees correspond a ع ظ م (grandeur/ossature — concepts: Grandeur/Importance, Structure/Ossature). La racine du texte ici est ع ز م ('azama = decider fermement). Ces deux racines sont distinctes. Si 'ezm' dans Supabase correspond a ع ظ م, alors le word_key correct pour ع ز م serait different (peut-etre inexistant dans la base). Par precaution, et conformement aux instructions, si la racine ع ز م n'est pas trouvee sous un word_key distinct, on traite le segment comme is_particle (pas de VWA insere). Dans ce fichier, le segment 'azamu est marque is_particle=true pour refleter cette incertitude — la VWA ne sera inseree que si le word_key pour ع ز م est confirme.

Le nom **al-talaqa** est un nom accusatif defini de la racine t-l-q. Le Lane's donne : relacher, liberer, laisser aller, repudier, prononcer le divorce. Le talaq est la separation/liberation conjugale — le terme technique du droit islamique pour le divorce prononce par le mari. La racine exprime fondamentalement le relachement d'un lien (tallaqa = delier, liberer) — le mariage est un lien (mithaq = pacte solennel en 4:21) et le talaq est son relachement.

L'adjectif **sami'un** est de la racine s-m-' (Form intensif faCiil). Le Lane's donne : entendre, ecouter, ouie, audition. Al-Sami' est Celui qui entend tout — les paroles proncees, les intentions exprimees, les decisions declarees. Dans ce contexte, sami'un est pertinent car le divorce est prononce verbalement — Dieu entend la declaration de talaq.

L'adjectif **'alimun** est de la racine '-l-m (Form intensif faCiil). Le Lane's donne : savoir, connaitre, la science ('ilm), Al-'Alim = Celui qui sait tout. Dans ce contexte, 'alimun repond a la dimension interieure de la decision de divorce — Dieu sait les intentions, les raisons, les circonstances qui ont conduit a cette decision. L'audition ('sami') couvre le discours prononce, la science ('alim) couvre l'intention et la realite cachee.

§JUSTIFICATION§
**S'ils decident fermement le divorce** — wa-in 'azamu al-talaqa : le verbe 'azama (decider fermement) est traduit par « decident » (Hamidullah) ou « decident fermement » (notre traduction). L'azm est plus fort que la simple decision — c'est une resolution arretee. La formulation « decident fermement » rend mieux le sens d'engagement de la volonte.

**le divorce** — al-talaqa : le terme technique du droit matrimonial islamique. Hamidullah traduit simplement « le divorce » — c'est juste. Le talaq est le relachement du lien conjugal par la parole.

**Dieu est Audient** — sami'un : Dieu entend la declaration de divorce. L'attribut de l'audition est particulierement adapte car le talaq est un acte verbal — il est prononce, declare. Dieu entend cette declaration et en prend acte.

**Omniscient** — 'alimun : Dieu sait les raisons profondes, les intentions, les circonstances. L'omniscience complete l'audition — Dieu n'entend pas seulement les mots mais sait ce qui les a precedes et ce qu'ils cachent.

**Correspondance des attributs divins** : La paire sami'/alim (entend/sait) repond a la decision de divorce de la meme maniere que ghafur/rahim (pardonne/accueille avec misericorde) repondait au retour (verset 226). Si le mari revient → Dieu pardonne et est misericordieux. Si le mari divorce → Dieu entend et sait. La paire sami'/alim n'est pas neutre : elle avertit que Dieu est temoin de la decision et connait tout ce qui l'entoure — c'est une mise en garde implicite contre les divorces injustes ou les faux pretextes.

§CRITIQUE§
Hamidullah traduit « 'azamu al-talaqa » par « decident le divorce » — en omettant la force de l'azm (decision ferme, resolution). Notre traduction « decident fermement le divorce » rend mieux le sens d'engagement irrevocable de la volonte.

La symetrie verset 226/227 est structurellement parfaite : deux conditions (retour/divorce), deux conclusions avec attributs divins (ghafur-rahim / sami'-alim). Les attributs ne sont pas interchangeables : ghafur/rahim sont des attributs de misericorde appropriés au retour/reconciliation; sami'/alim sont des attributs de omniscience appropries a la decision grave du divorce. Le choix des attributs divins est theologique : Dieu n'est pas misericordieux devant le divorce (ce serait l'approuver inconditionnellement) mais il l'entend et le sait — ce qui implique une responsabilite morale du divorcant.

La structure bipartite 226-227 est un exemple de la methode juridique coranique : prescrire un delai (226), puis presenter les deux sorties possibles (retour ou divorce), chacune avec une reponse divine appropriee. Cette structure pedagogique ne favorise ni n'interdit le divorce — elle l'encadre par le temps (quatre mois) et le responsabilise par l'omniscience divine.`,
    segments: [
      { fr: "S'ils decident fermement le divorce", pos: "verbe", phon: "wa-in 'azamu al-talaqa", arabic: "وَإِنْ عَزَمُوا۟ ٱلطَّلَـٰقَ", is_particle: true, position: 0 },
      { fr: "le divorce", pos: "nom", phon: "al-talaqa", arabic: "ٱلطَّلَـٰقَ", word_key: "tlq", is_particle: false, sense_retenu: "separation/liberation", position: 1 },
      { fr: "Dieu est celui qui entend", pos: "adj", phon: "fa-inna Allaha sami'un", arabic: "فَإِنَّ ٱللَّهَ سَمِيعٌ", word_key: "sme", is_particle: false, sense_retenu: "audition/ecoute", position: 2 },
      { fr: "celui qui sait", pos: "adj", phon: "'alimun", arabic: "عَلِيمٌ", word_key: "elm", is_particle: false, sense_retenu: "savoir/connaissance", position: 3 }
    ],
    vwa: [
      {
        word_key: "tlq",
        position: 1,
        sense_chosen: "separation/liberation",
        analysis_axes: {
          sense_chosen: "separation/liberation",
          concept_chosen: "Separation/Liberation",
          concepts: {
            "Separation/Liberation": {
              status: "retenu",
              senses: ["divorce", "separation", "liberation", "relachement du lien", "repudiation"],
              proof_ctx: "Le nom al-talaqa est un nom accusatif defini de la racine t-l-q. Le Lane's donne : relacher, liberer, laisser aller, tallaqa = repudier (Form II), talaq = divorce/repudiation. La racine exprime fondamentalement le relachement d'un lien tenu — le talaq est le relachement du lien du mariage. Form nominale al-talaq = l'acte de relachement = le divorce. C'est le terme technique juridique du droit islamique pour la dissolution du mariage prononcee par le mari.",
              axe1_verset: "Le divorce (al-talaq) est la seconde option apres les quatre mois d'ila'. Si l'homme ne revient pas (fa'), il doit prononcer le talaq — liberer sa femme plutot que la maintenir en suspens. Le talaq est ici une obligation implicite si le retour n'a pas lieu — la femme ne peut rester indefiniment enchaînee a un serment d'abstinence indefini.",
              axe2_voisins: "Le verset 226 traitait du serment d'abstinence (ila') et du retour possible (fa'). Le verset 227 clot l'alternative par le talaq. Les versets 228-232 développeront les regles du divorce en detail. Le verset 227 est donc le pivot qui annonce le sujet des versets suivants.",
              axe3_sourate: "La racine t-l-q est tres presente dans la sourate al-Baqarah : 2:227, 2:228, 2:229, 2:230, 2:231, 2:232, 2:236, 2:237, 2:241. La sourate contient la legislation la plus complete du Coran sur le divorce — ces versets forment un corpus juridique coherent dont 2:227 est l'introduction.",
              axe4_coherence: "La racine t-l-q apparait environ 31 fois dans le Coran, principalement dans les versets de droit conjugal. Le talaq est un concept juridique specifique — la dissolution du mariage — distinct de la simple separation (firaq) ou de la rupture violente.",
              axe5_frequence: "Pour le khalifa, le talaq est un droit encadre : il est permis mais grave. La structure des versets 226-227 montre que le Coran prefere le retour (fa') au divorce (talaq) en accordant d'abord un delai de quatre mois. Le khalifa, en codifiant le droit familial, doit refleter cet ordre de preference : encourager la reconciliation avant d'autoriser la separation."
            },
            "Corps/Anatomie": {
              status: "ecarte",
              senses: ["accouchement facile", "parturition", "facilite corporelle"],
              proof_ctx: "La racine t-l-q a un sens secondaire d'accouchement facile (talq = accouchement aise) — le corps qui se relache pour laisser passer l'enfant. Ce sens est atteste dans la litterature medicale arabe.",
              axe1_verset: "Dans le contexte du divorce juridique (al-talaqa avec article defini), le sens anatomique est exclu.",
              axe2_voisins: "Aucun contexte anatomique dans les versets 226-228.",
              axe3_sourate: "Toutes les occurrences de talaq dans la sourate al-Baqarah sont dans le sens juridique du divorce.",
              axe4_coherence: "Le sens anatomique de t-l-q est marginal dans le Coran — c'est le sens juridique qui domine.",
              axe5_frequence: "Pour le khalifa, la distinction entre les sens de t-l-q (divorce/facilite corporelle) est importante pour l'interpretation juridique — dans les versets de droit matrimonial, talaq = divorce exclusivement."
            }
          }
        }
      },
      {
        word_key: "sme",
        position: 2,
        sense_chosen: "audition/ecoute",
        analysis_axes: {
          sense_chosen: "audition/ecoute",
          concept_chosen: "Audition/Ecoute",
          concepts: {
            "Audition/Ecoute": {
              status: "retenu",
              senses: ["entendre", "ecouter", "ouie", "audition", "Al-Sami' = Celui qui entend tout"],
              proof_ctx: "L'adjectif sami'un est un adjectif nominatif de la racine s-m-' (Form faCiil). Le Lane's donne : entendre, l'acte d'entendre, ouie, ecoute. Sami'un = celui qui entend (forme intense : qui entend constamment, tout). Al-Sami' est un des noms de Dieu — l'Auditeur absolu qui entend toutes les paroles prononcees et toutes les intentions. La Form faCiil designe une qualite stable et intense — pas seulement 'celui qui a entendu' mais 'celui qui entend de maniere constitutive'.",
              axe1_verset: "L'audition (sami') de Dieu est particulierement appropriee dans le contexte du divorce car le talaq est un acte verbal — il est prononce par des paroles. Dieu entend la declaration de divorce : les mots sont prononces, Dieu les enregistre. Cela implique que la declaration est valide et que Dieu en est temoin. C'est aussi un avertissement : les paroles de divorce prononcees sans raison valable sont entendues par Dieu.",
              axe2_voisins: "Le verset 226 concluait sur ghafur/rahim (pardon/misericorde) pour le retour. Le verset 227 conclut sur sami'/alim (entend/sait) pour le divorce. La progression des attributs divins accompagne la progression des actes : retour → pardon misericordieux; divorce → temoignage omniscient.",
              axe3_sourate: "La paire sami'/alim est une des formules conclusives recurrentes de la sourate al-Baqarah (2:181, 2:224, 2:227, 2:244, 2:256). Elle apparait souvent dans les contextes juridiques et sociaux ou la parole et l'intention importent — Dieu entend les paroles et connait les intentions.",
              axe4_coherence: "La racine s-m-' apparait environ 185 fois dans le Coran. Al-Sami' est l'un des attributs divins les plus frequents, souvent associe a Al-'Alim ou Al-Basir. L'audition divine est une garantie que rien n'echappe a Dieu — ni les declarations publiques, ni les confidences privees.",
              axe5_frequence: "Pour le khalifa, s'inspirer de Al-Sami' signifie etre a l'ecoute de sa communaute — entendre les paroles, les demandes, les plaintes. Un khalifa qui n'ecoute pas est un khalifa aveugle au reel. L'audition est la premiere condition du jugement juste."
            },
            "Renommee/Bruit": {
              status: "ecarte",
              senses: ["renommee", "bruit public", "reputation", "sumu'a = renommee"],
              proof_ctx: "La racine s-m-' peut designer la renommee (sumu' = bruit qui se repand, reputation). Masmu' = ce qu'on entend (de quelqu'un), d'ou la reputation.",
              axe1_verset: "Dans le contexte d'un attribut divin (sami'un), le sens est exclusivement l'audition — Dieu n'a pas de 'renommee' au sens humain.",
              axe2_voisins: "La paire sami'/alim dans les formules conclusives designe exclusivement l'audition et la science divines.",
              axe3_sourate: "Toutes les occurrences de sami'un comme attribut divin dans la sourate designent l'audition, pas la renommee.",
              axe4_coherence: "Le sens de renommee est un derive humain de la racine — inapplicable a Dieu en tant qu'attribut.",
              axe5_frequence: "La distinction entre l'audition (attribut divin) et la renommee (realite humaine) est fondamentale en theologie islamique."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 3,
        sense_chosen: "savoir/connaissance",
        analysis_axes: {
          sense_chosen: "savoir/connaissance",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "science", "Al-'Alim = Celui qui sait tout", "omniscience"],
              proof_ctx: "L'adjectif 'alimun est un adjectif nominatif de la racine '-l-m (Form faCiil). Le Lane's donne : savoir, connaitre, la science ('ilm), 'alim = savant, celui qui sait. Al-'Alim est un des noms de Dieu — l'Omniscient absolu qui connait tout ce qui est cache et manifeste. La Form faCiil designe une qualite stable et totale — pas 'celui qui a su' mais 'Celui qui sait de maniere constitutive et absolue'. L'omniscience divine couvre les paroles, les intentions, les causes et les consequences.",
              axe1_verset: "La science ('alim) de Dieu complete son audition (sami') dans le contexte du divorce. Dieu entend la declaration de talaq (sami') et sait ce qui l'a motive, les circonstances, les torts eventuels, les intentions cachees ('alim). Cette double omniscience est un avertissement aux deux parties : Dieu sait si le divorce est juste ou injuste, si l'homme a bien observe le delai de quatre mois, si les droits de la femme ont ete respectes.",
              axe2_voisins: "Le verset 226 concluait sur ghafur/rahim — des attributs de misericorde. Le verset 227 conclut sur sami'/alim — des attributs de temoignage omniscient. La contrast est theologique : le retour appelle la misericorde, le divorce appelle le jugement omniscient.",
              axe3_sourate: "La racine '-l-m est l'une des plus frequentes de la sourate al-Baqarah — 'alim, ya'lam, 'ilm aparaissent constamment. La science de Dieu est le fondement de la legislation : Dieu prescrit les regles parce qu'Il sait ce qui est bon pour l'humanite. En 2:216 (« Dieu sait et vous ne savez pas »), en 2:220 (« Dieu connait le corrupteur parmi le reformateur »), la science divine est le principe de justice impartiale.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran — c'est l'une des racines les plus frequentes du Coran. Al-'Alim est un attribut divin central. L'opposition entre la science divine (totale) et la science humaine (partielle) est un theme structurant du message coranique.",
              axe5_frequence: "Pour le khalifa, aspirer a la science ('ilm) est une obligation. Le khalifa qui juge sans connaissance commet une injustice. La science de Dieu ('alim) dans ce verset est un modele pour le juge humain : avant de prononcer un jugement sur un divorce, il faut entendre (sami') et savoir ('alim) — connaitre les circonstances, les torts, les droits respectifs. La paire sami'/alim est ainsi un modele epistemologique pour la justice."
            },
            "Marque/Signe": {
              status: "ecarte",
              senses: ["signe", "marque", "repere", "'alam = signe distinctif"],
              proof_ctx: "La racine '-l-m designe aussi la marque, le signe distinctif ('alam = drapeau, signe, repere). Ce sens est atteste dans plusieurs racines connexes.",
              axe1_verset: "Dans le contexte d'un attribut divin ('alimun = Omniscient), le sens de 'marque' est exclu — c'est exclusivement la science divine qui est active.",
              axe2_voisins: "La paire sami'/alim dans les formules conclusives designe toujours l'audition et la science divines, pas la marque ou le signe.",
              axe3_sourate: "Toutes les occurrences de 'alimun comme attribut divin dans la sourate designent l'omniscience.",
              axe4_coherence: "Le sens de 'marque' ('alam) est une racine connexe mais distincte dans certains contextes — dans 'alimun attribut divin, le sens est exclusivement l'omniscience.",
              axe5_frequence: "La distinction entre la science divine ('alim) et la marque/signe ('alam) est fondamentale dans l'exegese coranique — les deux sens de la racine ne se confondent pas dans les formules attributives divines."
            },
            "Monde/Creation": {
              status: "ecarte",
              senses: ["monde", "univers", "'alam = monde, creation"],
              proof_ctx: "Le pluriel 'alamin (rabb al-'alamin = Seigneur des mondes) est de la meme racine '-l-m. Ce sens de 'monde/creation' est atteste.",
              axe1_verset: "Dans 'alimun (attribut divin dans une formule conclusive), le sens est l'omniscience, pas le monde.",
              axe2_voisins: "Les formules sami'un/'alimun ne sont jamais interpretees comme 'Audient et [Seigneur des] mondes'.",
              axe3_sourate: "La sourate utilise 'alamin (mondes) dans la basmala et 'alimun (omniscient) dans les formules conclusives — deux usages distincts de la meme racine.",
              axe4_coherence: "Le Coran distingue clairement 'alim (omniscient) et 'alam (monde) par la forme morphologique.",
              axe5_frequence: "Pour le khalifa, la distinction entre les sens de '-l-m est une competence exegetique fondamentale : 'alim = Celui qui sait (attribut divin), 'alam = monde (la creation divine)."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[227];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V227)');

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

  console.log('\n✅ V227 TERMINE');
}
main().catch(console.error);
