const {createClient}=require('@supabase/supabase-js');
const db=createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
(async()=>{
  console.log("=== FIX PARAGRAPHES V18+V19 ===\n");

  // ==================== V18 ====================
  const {data:va18}=await db.from('verse_analyses').select('id,translation_explanation').eq('id',670);
  let te18=va18[0].translation_explanation;
  let fixes18=0;

  // P3: annahu + ilāha + illā + huwa all in one paragraph
  const old18p3="**Annahu l\u0101 il\u0101ha ill\u0101 huwa** (qu'il n'y a pas de divinit\u00e9 sauf Lui) est une proposition compl\u00e9tive introduite par anna (que). La n\u00e9gation l\u0101 suivie du nom **il\u0101ha** (divinit\u00e9) au cas accusatif annule l'existence de toute divinit\u00e9. Le mot **ill\u0101** (sauf) exclut une seule exception \u2014 **huwa** (Lui), pronom de la troisi\u00e8me personne renvoyant \u00e0 Dieu. C'est la formule d'unicit\u00e9.";
  const new18p3="**Annahu** (qu'il) est une conjonction compl\u00e9tive compos\u00e9e de anna (que) et du pronom suffixe -hu (il/lui). Elle introduit le contenu du t\u00e9moignage.\n\n**L\u0101 il\u0101ha** (pas de divinit\u00e9) \u2014 la n\u00e9gation l\u0101 suivie du nom il\u0101ha (divinit\u00e9) au cas accusatif annule l'existence de toute divinit\u00e9.\n\n**Ill\u0101 huwa** (sauf Lui) \u2014 ill\u0101 (sauf) exclut une seule exception. Huwa (Lui) est le pronom de la troisi\u00e8me personne renvoyant \u00e0 Dieu. C'est la formule d'unicit\u00e9.";
  if(te18.includes(old18p3)){te18=te18.replace(old18p3,new18p3);fixes18++;}

  // P5: ʾulū + al-ʿilmi in one paragraph
  const old18p5="**Wa-\u02BEul\u016B l-\u02BFilmi** (et ceux qui poss\u00e8dent le savoir) est le troisi\u00e8me sujet coordonn\u00e9. **\u02BEUl\u016B** (ceux qui poss\u00e8dent) est un pluriel irr\u00e9gulier qui exprime l'appartenance \u00e0 un domaine. C'est une construction en i\u1E0D\u0101fa (annexion) \u2014 \u02BEul\u016B est annex\u00e9 \u00e0 **al-\u02BFilmi** (le savoir) au g\u00e9nitif d\u00e9fini. La racine \u02BF-l-m couvre le savoir, la connaissance et la certitude. Ceux qui poss\u00e8dent le savoir sont le troisi\u00e8me groupe qui t\u00e9moigne de l'unicit\u00e9 divine.";
  const new18p5="**\u02BEUl\u016B** (ceux qui poss\u00e8dent) est un pluriel irr\u00e9gulier au nominatif qui exprime l'appartenance \u00e0 un domaine. C'est le troisi\u00e8me sujet coordonn\u00e9 de shahida. La construction est en i\u1E0D\u0101fa (annexion) \u2014 \u02BEul\u016B est annex\u00e9 au mot suivant.\n\n**Al-\u02BFilmi** (le savoir) est un nom d\u00e9fini au g\u00e9nitif, compl\u00e9ment de l'i\u1E0D\u0101fa avec \u02BEul\u016B. La racine \u02BF-l-m couvre le savoir, la connaissance et la certitude. Ceux qui poss\u00e8dent le savoir sont le troisi\u00e8me groupe qui t\u00e9moigne de l'unicit\u00e9 divine.";
  if(te18.includes(old18p5)){te18=te18.replace(old18p5,new18p5);fixes18++;}

  if(fixes18>0){
    const {error}=await db.from('verse_analyses').update({translation_explanation:te18}).eq('id',670);
    console.log('V18: '+fixes18+' fix(es)',error?'ERROR:'+JSON.stringify(error):'OK');
  } else {
    console.log('V18: aucun match trouvé — vérifier manuellement');
  }

  // ==================== V19 ====================
  const {data:va19}=await db.from('verse_analyses').select('id,translation_explanation').eq('id',671);
  let te19=va19[0].translation_explanation;
  let fixes19=0;

  // P1: inna + ad-dīna
  const old19p1="**Inna** (certes) est une particule d'insistance qui introduit une phrase nominale et met le sujet au cas accusatif. **Ad-d\u012Bna**";
  const new19p1="**Inna** (certes) est une particule d'insistance qui introduit une phrase nominale et met le sujet au cas accusatif.\n\n**Ad-d\u012Bna**";
  if(te19.includes(old19p1)){te19=te19.replace(old19p1,new19p1);fixes19++;}

  // P2: ʿinda + allāhi
  const old19p2="**\u02BFInda** (aupr\u00e8s de) est une pr\u00e9position de proximit\u00e9. **All\u0101hi** (Dieu) est au g\u00e9nitif";
  const new19p2="**\u02BFInda** (aupr\u00e8s de) est une pr\u00e9position de proximit\u00e9 qui indique la proximit\u00e9 conceptuelle.\n\n**All\u0101hi** (Dieu) est au g\u00e9nitif";
  if(te19.includes(old19p2)){te19=te19.replace(old19p2,new19p2);fixes19++;}

  // P5: alladhīna + ūtū
  const old19p5="**Alladh\u012Bna** (ceux qui) est un pronom relatif pluriel qui introduit une proposition relative. **\u016At\u016B**";
  const new19p5="**Alladh\u012Bna** (ceux qui) est un pronom relatif pluriel qui introduit une proposition relative.\n\n**\u016At\u016B**";
  if(te19.includes(old19p5)){te19=te19.replace(old19p5,new19p5);fixes19++;}

  // P7: illā min baʿdi mā jāʾahumu l-ʿilmu — all grouped
  const old19p7="**Ill\u0101 min ba\u02BFdi m\u0101 j\u0101\u02BEahumu l-\u02BFilmu** (sauf apr\u00e8s que le savoir leur est parvenu) \u2014 cette construction est une restriction : la divergence n'a eu lieu QU'apr\u00e8s la venue du savoir. **Ba\u02BFdi** (apr\u00e8s) vient de la racine b-\u02BF-d (post\u00e9riorit\u00e9, \u00e9loignement). **J\u0101\u02BEahumu** (leur est parvenu) est un verbe accompli actif de la racine j-y-\u02BE (venir). **Al-\u02BFilmu** (le savoir) est le sujet de j\u0101\u02BEa au nominatif. Le savoir est personnifi\u00e9 \u2014 il est venu \u00e0 eux comme un visiteur.";
  const new19p7="**Ill\u0101 min** (sauf \u00e0 partir de) \u2014 cette construction est une restriction : la divergence n'a eu lieu QU'apr\u00e8s un moment pr\u00e9cis.\n\n**Ba\u02BFdi** (apr\u00e8s) vient de la racine b-\u02BF-d (post\u00e9riorit\u00e9, \u00e9loignement). C'est un nom au g\u00e9nitif avec la pr\u00e9position min \u2014 il indique le moment \u00e0 partir duquel la divergence a eu lieu.\n\n**J\u0101\u02BEahumu** (leur est parvenu) est un verbe accompli actif de la racine j-y-\u02BE (venir). Le savoir est personnifi\u00e9 \u2014 il est venu \u00e0 eux comme un visiteur.\n\n**Al-\u02BFilmu** (le savoir) est le sujet de j\u0101\u02BEa au nominatif d\u00e9fini. C'est la connaissance qui leur est parvenue, et c'est apr\u00e8s sa venue qu'ils ont diverg\u00e9.";
  if(te19.includes(old19p7)){te19=te19.replace(old19p7,new19p7);fixes19++;}

  // P10: man yakfur
  const old19p10="**Man yakfur** (celui qui rejette) \u2014 man est un pronom relatif conditionnel (celui qui/quiconque). **Yakfur** (rejette) est un verbe inaccompli apocop\u00e9";
  const new19p10="**Man** (celui qui) est un pronom relatif conditionnel (celui qui/quiconque). Il introduit une condition.\n\n**Yakfur** (rejette) est un verbe inaccompli apocop\u00e9";
  if(te19.includes(old19p10)){te19=te19.replace(old19p10,new19p10);fixes19++;}

  // P11: bi-āyāti allāhi
  const old19p11="**Bi-\u0101y\u0101ti all\u0101hi** (les signes de Dieu) \u2014 \u0101y\u0101t est le pluriel de \u0101ya au g\u00e9nitif d\u00e9fini avec la pr\u00e9position bi- (en/avec). La racine a-y-t couvre le signe, la marque, la preuve et le miracle. Les \u0101y\u0101t sont les signes visibles de Dieu.";
  const new19p11="**Bi-\u0101y\u0101ti** (les signes de) \u2014 \u0101y\u0101t est le pluriel de \u0101ya au g\u00e9nitif d\u00e9fini avec la pr\u00e9position bi- (en/avec). La racine a-y-t couvre le signe, la marque, la preuve et le miracle. Les \u0101y\u0101t sont les signes visibles de Dieu.";
  if(te19.includes(old19p11)){te19=te19.replace(old19p11,new19p11);fixes19++;}

  // P12: fa-inna allāha sarīʿu l-ḥisābi — all grouped
  const old19p12="**Fa-inna all\u0101ha sar\u012B\u02BFu l-\u1E25is\u0101bi** (alors Dieu est prompt au calcul) \u2014 fa introduit la cons\u00e9quence. **Sar\u012B\u02BFu** (prompt) est un adjectif intensif (pattern fa\u02BF\u012Bl) en i\u1E0D\u0101fa avec **al-\u1E25is\u0101bi** (le calcul). Le fa\u02BF\u012Bl indique une qualit\u00e9 permanente. Le \u1E25is\u0101b (racine \u1E25-s-b) couvre le calcul, l'\u00e9valuation et l'estimation. L'i\u1E0D\u0101fa (annexion) fait de sar\u012B\u02BF un qualificatif permanent de Dieu par rapport au calcul.";
  const new19p12="**Fa-inna all\u0101ha** (alors Dieu) \u2014 fa introduit la cons\u00e9quence. Inna remet l'insistance. All\u0101ha est au cas accusatif, sujet de inna.\n\n**Sar\u012B\u02BFu** (prompt) est un adjectif intensif (pattern fa\u02BF\u012Bl) en i\u1E0D\u0101fa avec le mot suivant. Le fa\u02BF\u012Bl indique une qualit\u00e9 permanente \u2014 la promptitude est intrins\u00e8que.\n\n**Al-\u1E25is\u0101bi** (le calcul) est un nom d\u00e9fini au g\u00e9nitif, compl\u00e9ment de l'i\u1E0D\u0101fa avec sar\u012B\u02BFu. Le \u1E25is\u0101b (racine \u1E25-s-b) couvre le calcul, l'\u00e9valuation et l'estimation. L'i\u1E0D\u0101fa fait de sar\u012B\u02BFu l-\u1E25is\u0101b une qualit\u00e9 permanente : prompt au calcul.";
  if(te19.includes(old19p12)){te19=te19.replace(old19p12,new19p12);fixes19++;}

  if(fixes19>0){
    const {error}=await db.from('verse_analyses').update({translation_explanation:te19}).eq('id',671);
    console.log('V19: '+fixes19+' fix(es)',error?'ERROR:'+JSON.stringify(error):'OK');
  } else {
    console.log('V19: aucun match trouvé — vérifier manuellement');
  }

  // ==================== VERIFY ====================
  for(const [vid,vaid] of [[311,670],[312,671]]){
    const {data}=await db.from('verse_analyses').select('translation_explanation').eq('id',vaid);
    const te=data[0].translation_explanation;
    const demStart=te.indexOf('\u00a7DEMARCHE\u00a7');
    const justStart=te.indexOf('\u00a7JUSTIFICATION\u00a7');
    const demarche=te.substring(demStart+10,justStart).trim();
    const paras=demarche.split(/\n\n+/).filter(p=>p.trim().length>0);
    console.log('\nV'+(vid-293)+': '+paras.length+' paragraphes');
    paras.forEach((p,i)=>{
      const bolds=(p.match(/\*\*[^*]+\*\*/g)||[]);
      const preview=p.substring(0,70).replace(/\n/g,' ');
      if(bolds.length>=2) console.log('  ⚠️ P'+i+' ('+bolds.length+' bold): '+preview+'...');
    });
  }
  console.log("\nDone.");
})();
