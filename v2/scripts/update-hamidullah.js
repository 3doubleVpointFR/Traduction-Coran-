require('dotenv').config({path: '.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const updates = [
  // Sourate 1
  {id: 353, t: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux."},
  {id: 354, t: "Louange à Allah, Seigneur de l'Univers."},
  {id: 355, t: "Le Tout Miséricordieux, le Très Miséricordieux,"},
  {id: 356, t: "Maître du Jour de la Rétribution."},
  {id: 357, t: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours."},
  {id: 358, t: "Guide-nous dans le droit chemin,"},
  {id: 362, t: "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés."},
  // Sourate 106
  {id: 6557, t: "A cause du pacte des Quraysh,"},
  {id: 6558, t: "du pacte couvrant leurs voyages d'hiver et d'été."},
  {id: 6559, t: "Qu'ils adorent donc le Seigneur de cette Maison (la Kaaba),"},
  {id: 6560, t: "qui les a nourris contre la faim et rassurés de la crainte !"},
  // Sourate 107
  {id: 6561, t: "Vois-tu celui qui traite de mensonge la Rétribution ?"},
  {id: 6562, t: "C'est bien lui qui repousse l'orphelin,"},
  {id: 6563, t: "et qui n'encourage point à nourrir le pauvre."},
  {id: 6564, t: "Malheur donc, à ceux qui prient"},
  {id: 6565, t: "tout en négligeant (et retardant) leurs Salat,"},
  {id: 6566, t: "qui sont pleins d'ostentation,"},
  {id: 6567, t: "et refusent l'ustensile."},
  // Sourate 109
  {id: 6571, t: "Dis : « Ô vous les infidèles !"},
  {id: 6572, t: "Je n'adore pas ce que vous adorez."},
  {id: 6573, t: "Et vous n'êtes pas adorateurs de ce que j'adore."},
  {id: 6574, t: "Je ne suis pas adorateur de ce que vous adorez."},
  {id: 6575, t: "Et vous n'êtes pas adorateurs de ce que j'adore."},
  {id: 6576, t: "A vous votre religion, et à moi ma religion. »"},
  // Sourate 110
  {id: 6577, t: "Lorsque vient le secours d'Allah ainsi que la victoire,"},
  {id: 6578, t: "et que tu vois les gens entrer en foule dans la religion d'Allah,"},
  {id: 6579, t: "alors, par la louange, célèbre la gloire de ton Seigneur et implore Son pardon. Car c'est Lui le grand Accueillant au repentir."},
  // Sourate 111
  {id: 6580, t: "Que périssent les deux mains d'Abû Lahab et que lui-même périsse."},
  {id: 6581, t: "Sa fortune ne lui sert à rien, ni ce qu'il a acquis."},
  {id: 6582, t: "Il sera brûlé dans un Feu plein de flammes,"},
  {id: 6583, t: "de même sa femme, la porteuse de bois,"},
  {id: 6584, t: "à son cou, une corde de fibres."},
  // Sourate 112
  {id: 2909, t: "Dis : « Il est Allah, Unique."},
  {id: 2910, t: "Allah, Le Seul à être imploré pour ce que nous désirons."},
  {id: 2911, t: "Il n'a jamais engendré, n'a pas été engendré non plus."},
  {id: 2912, t: "Et nul n'est égal à Lui. »"},
  // Sourate 113
  {id: 6585, t: "Dis : « Je cherche protection auprès du Seigneur de l'aube naissante,"},
  {id: 6586, t: "contre le mal des êtres qu'Il a créés,"},
  {id: 6587, t: "contre le mal de l'obscurité quand elle s'approfondit,"},
  {id: 6588, t: "contre le mal de celles qui soufflent sur les nœuds,"},
  {id: 6589, t: "et contre le mal de l'envieux quand il envie. »"},
  // Sourate 114
  {id: 6590, t: "Dis : « Je cherche protection auprès du Seigneur des hommes,"},
  {id: 6591, t: "le Souverain des hommes,"},
  {id: 6592, t: "Dieu des hommes,"},
  {id: 6593, t: "contre le mal du mauvais conseiller, furtif,"},
  {id: 6594, t: "qui souffle le mal dans les poitrines des gens,"},
  {id: 6595, t: "qu'il (le conseiller) soit un djinn, ou un être humain. »"},
];

async function main() {
  let ok = 0, fail = 0;
  for (const {id, t} of updates) {
    const {error} = await sb.from('verse_analyses').update({full_translation: t}).eq('id', id);
    if (error) { console.error(`FAIL id=${id}:`, error.message); fail++; }
    else { console.log(`OK id=${id}`); ok++; }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed (total ${updates.length})`);
}
main();
