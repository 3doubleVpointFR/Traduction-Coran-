const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // Check if already inserted
  const { data: existing } = await supabase.from('verse_word_analyses').select('id').eq('verse_id', 291).eq('position', 35);
  if (existing && existing.length > 0) {
    console.log('qdr pos=35 already exists, skipping');
    return;
  }

  const { error } = await supabase.from('verse_word_analyses').insert({
    verse_id: 291,
    word_key: 'qdr',
    position: 35,
    sense_chosen: 'Puissance/Capacité',
    analysis_axes: {
      concept_chosen: 'Puissance/Capacité',
      concepts: {
        'Puissance/Capacité': {
          status: 'retenu',
          senses: ['Puissance', 'Capacité', 'Mesure', 'Décret divin'],
          proof_ctx: 'qadīr: Celui qui a la puissance absolue. Lane: qadara — avoir le pouvoir sur, être capable de. Forme qadīr = très puissant, omnipotent. Ici "ʿalā kulli shay\'in qadīr" = sur toute chose Il est Puissant.',
          axe1_verset: 'Dans ce verset (2:284), "wa-llāhu ʿalā kulli shay\'in qadīr" clôture la déclaration de la souveraineté divine absolue sur les cieux et la terre. Qadīr exprime ici la toute-puissance de Dieu qui tient chacun comptable et pardonne ou châtie selon Sa volonté.',
          axe2_voisins: 'Les versets voisins (2:283, 2:285) évoquent la confiance en Dieu, le jugement des âmes et la foi. La toute-puissance divine est le fondement de cette responsabilité morale. En 2:285, les croyants implorent le pardon de Dieu, ce qui présuppose Sa puissance à accorder ou refuser.',
          axe3_sourate: 'Dans la sourate Al-Baqara, qadīr apparaît comme attribut divin essentiel (2:20, 2:106, 2:109, 2:148, 2:259, 2:284). Il y affirme toujours la capacité divine à tout faire — créer, ressusciter, juger. C\'est l\'une des formules coraniques récurrentes de clôture.',
          axe4_coherence: 'Qadīr comme attribut divin est cohérent avec l\'ensemble coranique : Dieu est à la fois juge (ḥasaba) et tout-puissant (qadīr). La séquence "Il calcule / Il pardonne / Il châtie / sur toute chose puissant" forme une progression logique sur la responsabilité et la souveraineté divine.',
          axe5_frequence: 'Qadīr apparaît 45 fois dans le Coran, presque toujours comme attribut divin. La formule "ʿalā kulli shay\'in qadīr" est une des plus fréquentes (17 occurrences), marquant la clôture de péricopes importantes. Lane confirme que qadara/qadīr renvoie à la puissance, la mesure et le décret.'
        },
        'Mesure/Décret': {
          status: 'probable',
          senses: ['Mesurer', 'Décréter', 'Proportionner'],
          proof_ctx: 'qaddara: décréter, mesurer. Lane: qadara — mesurer exactement, décréter. La nuance de décret divin est présente dans qadīr mais le sens dominant ici est la puissance.',
          axe1_verset: 'Qadīr peut aussi indiquer Celui qui mesure et décrète avec exactitude. Dans 2:284, cette nuance s\'applique bien au jugement précis de chaque âme selon ses actes. Mais le contexte dominant est la puissance absolue.',
          axe2_voisins: 'Les versets entourant 2:284 évoquent le jugement des consciences et la rétribution. Décréter/mesurer s\'harmonise avec "yuḥāsibu-kum" (Il vous demandera compte). Toutefois, qadīr sans complément renvoie plus directement à la puissance.',
          axe3_sourate: 'Dans Al-Baqara, le décret divin est évoqué via d\'autres racines (amara, qaḍā). Qadīr reste principalement un attribut de puissance. La nuance de mesure est secondaire dans ce contexte.',
          axe4_coherence: 'Les deux nuances (puissance et décret) sont liées : Dieu peut tout car Il mesure tout. Mais dans la formule finale "ʿalā kulli shay\'in qadīr", c\'est la puissance totale qui prime, pas le décret spécifique.',
          axe5_frequence: 'Les formes verbales qaddara (décréter) et qadara (mesurer) apparaissent moins fréquemment que l\'adjectif qadīr. La formule figée "ʿalā kulli shay\'in qadīr" renvoie systématiquement à la puissance divine omnipotente.'
        }
      }
    }
  });

  if (error) console.error('Error:', error.message || JSON.stringify(error));
  else console.log('qdr pos=35 inserted OK');
}
main().catch(console.error);
