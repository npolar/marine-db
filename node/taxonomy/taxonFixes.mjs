// @return Array of tuples [ unaccepted, accepted ]
export const taxonFixes = [

  // Higher ranked taxa
  ['Chrysophyta', 'Ochrophyta'], // -> phylum
  ['Chrysophycea', 'Chrysophyceae'], // -> class
  ['Ciliate', 'Ciliata'], // ->
  ['Coccolithophora', 'Prymnesiophyceae'], // -> class
  ['Dinophyta', 'Dinophyceae'], // -> class
  ['Dinoflagellatae', 'Dinophyceae'], // -> class
  ['Dinoflagellate', 'Dinophyceae'], // -> class
  ['Eupagurus', 'Pagurus'],
  ['Gammaridea', 'Gammaridae'], // -> family
  ['Heterokontophyta', 'Ochrophyta'],
  ['Hydromedusae', 'Hydrozoa'],
  ['Mysidacea', 'Mysida'], // -> order
  ['Pennales', 'Bacillariophyceae'], // -> order
  ['Pennate', 'Bacillariophyceae'], //> -> order
  ['Diatoms', 'Bacillariophyceae'],
  // https://en.wikipedia.org/wiki/Pennales
  // In some taxonomic schemes,[2] the pennate diatoms are divided into two groups:
  // pennate diatoms without a raphe, known as araphids (order Fragilariophyceae),
  // and pennate diatoms with a raphe, known as raphids (order Bacillariophyceae).

  ['Scuticociliata', 'Scuticociliatia'],// typo -> subclass http://www.marinespecies.org/aphia.php?p=taxdetails&id=414712
  ['Strombididae', 'Strombidiidae'], // typo -> family
  ['Turbellaria', 'Tubularia'], // typo

  // Species & genera A-Z
  ['Arrhis phyllony', 'Arrhis phyllonyx'], //typo

  ['Bacteriosira', 'Bacterosira'], // typo
  ['Bacteriosira bathyomphala', 'Bacterosira bathyomphala'], //typo
  ['Bacteriosira bathyomphola', 'Bacterosira bathyomphala'], //typo
  // or -> Coscinodiscus bathyomphalus ?
  // http://www.marinespecies.org/aphia.php?p=taxdetails&id=162930

  ['Chaetoceros lacinosus', 'Chaetoceros laciniosus'], // phylum Ochrophyta
  ['Chaetoceros terens', 'Chaetoceros teres'], // typo
  //['Coccolithus pelagicus', 'Coccosphaera pelagica'], // synomym -> https://api.gbif.org/v1/species/7601850

  ['Dinophysis rotundata', 'Phalacroma rotundatum'],
  ['Disco fiordicus', 'Pertsovius fjordicus'],

  ['Erythrops erythrophthalma', 'Erythrops erythrophthalmus'], //typo? http://www.marinespecies.org/aphia.php?p=taxdetails&id=852968
  ['Entomoneis kjelmanii', 'Entomoneis kjellmanii'], // typo

  ['Goniaulax gracilis', 'Gonyaulax gracilis'], // typo
  ['Gyrodinium flagelare', 'Gyrodinium flagellare'], //typo
  ['Gymndinium', 'Gymnodinium'], // typo
  ['Gymnodinium brevis', 'Gymnodinium breve'], //typo
  ['Gymnodinium flagellare', 'Gymnodinium'], // -> genus: https://www.gbif.org/species/8661776
  ['Gymnodinium gaelatum', 'Gymnodinium galeatum'], //typo
  ['Gymnodinium gracilientum', 'Gymnodinium gracilentum'],
  ['Gymnodinium pulchellum', 'Takayama pulchella'], // unaccepted synonym https://www.gbif.org/species/7516124 / http://www.marinespecies.org/aphia.php?p=taxdetails&id=233085
  ['Gymnodium simplex', 'Gymnodinium simplex'], // typo
  ['Gymnodinium wulfii', 'Gymnodinium wulffii'], //typo

  ['Heterorhabdus compactus', 'Paraheterorhabdus compactus'],

  ['Kathodinium', 'Katodinium'], //typo
  ['Kathodinium glaucum', 'Katodinium glaucum'], //typo

  ['Laboea strobilum', 'Laboea strobila'], // typo http://www.marinespecies.org/aphia.php?p=taxdetails&id=101264
  ['Lubbockia brevis', 'Homeognathia brevis'],

  ['Monstrilloidae', 'Monstrillidae'], //typo? https://www.gbif.org/species/9127
  ['Myrionecta rubra', 'Mesodinium rubrum'],
  ['Monoculoides pacardi', 'Monoculodes packardi'], //typo

  ['Navicula vanhoefenii', 'Navicula vanhoeffenii'], // typo
  //['Nitzschia granii', 'Pseudo-nitzschia granii'],
  ['Nitzschia leavissima', 'Nitzschia levissima'],
  ['Neoceratium arcticum', 'Ceratium arcticum'], // unaccepted http://www.marinespecies.org/aphia.php?p=taxdetails&id=495629

  ['Oncaea conifera', 'Triconia conifera'], // http://www.marinespecies.org/aphia.php?p=taxdetails&id=128957
  // Strobilidium spiralis -> Pelagostrobilidium spirale http://www.marinespecies.org/aphia.php?p=taxdetails&id=341692
  ['Preperidinium meunieri', 'Preperidinium meunierii'], //typo

  ['Polariella glacialis', 'Polarella glacialis'], // typo

  ['Sagitta elegans', 'Parasagitta elegans'],
  ['Sagitta maxima', 'Pseudosagitta maxima'],
  ['Scolocithricella minor', 'Scolecithricella minor'], //typo
  ['Strombidium estatum', 'Strombidium'], // -> genus, unknown species epithet ('estatum')

  ['Thalasiossira borealis', 'Thalassiosira borealis'], //typo
  ['Thalasiossira pacyfica', 'Thalassiosira pacifica'], //typo
  ['Thalassiosira pacyficaphoto', 'Thalassiosira pacifica'], //typo
  ['Tharybis groenlandicus', 'Tharybis groenlandica'], //typo
  ['Tintinnus inquilinum', 'Tintinnus inquilinus'], //typo?

  ['Undeuchaeta spectabilis', 'Pseudochirella spectabilis'],

  ['Pleurochrysis carterae', 'Chrysotila carteri'],
  ['Prorocentrum minimum', 'Prorocentrum cordatum'],
  ['Phalacroma rotundata', 'Phalacroma rotundatum'], // phylum Myzozoa

  ['Uronema marina', 'Uronema marinum'] // phylum Ciliophora

];


 // 65 Invalid taxon: "Pachysphaera"
 // 60 Invalid taxon: "Phalacroma rotundatum"
 // 54 Invalid taxon: "Flagellate"
 // 52 Invalid taxon: "Laboea strobilum"
 // 34 Invalid taxon: "Cyst"
 // 27 Invalid taxon: "Gymnodinium krasnal"
 // 27 Invalid taxon: "Dinobryon statospores"
 // 24 Invalid taxon: "Polariella glacialis"
 // 24 Invalid taxon: "Euglena"
 // 22 Invalid taxon: "Choreotrich ciliate"
 // 19 Invalid taxon: "Neoceratium arcticum"
 // 14 Invalid taxon: "Nitzschia granii"
 // 12 Invalid taxon: "Odentella aurita"
 // 12 Invalid taxon: "Centriceae"
 // 10 Invalid taxon: "Spores"
 // 10 Invalid taxon: "Halosphaeracos"
 //  9 Invalid taxon: "Calciodinelloideae"
 //  8 Invalid taxon: "Choanoflagellata"
 //  8 Invalid taxon: "Amphidoma acuminata"
 //  7 Invalid taxon: "Tintinnus"
 //  7 Invalid taxon: "Pierscionek"
 //  6 Invalid taxon: "Lesardia elongata"
 //  6 Invalid taxon: "Fecal pelet"
 //  6 Invalid taxon: "Chrysophycea"
 //  6 Invalid taxon: "Choanoflagellida"
 //  6 Invalid taxon: "Ceratium"
 //  5 Invalid taxon: "Spora"
 //  5 Invalid taxon: "Ciliataolbrzym"
 //  5 Invalid taxon: "Chrysotila carteri"
 //  4 Invalid taxon: "Tunicata"
 //  4 Invalid taxon: "Raphidiophyceae"
 //  4 Invalid taxon: "Monads"
 //  4 Invalid taxon: "Gymnodinium estuariale"
 //  4 Invalid taxon: "Cochlodinium pulchellum"
 //  3 Invalid taxon: "Unidentified cells"
 //  3 Invalid taxon: "Thalassiosira pacyficaphoto"
 //  3 Invalid taxon: "Thalassiosira anguste"
 //  3 Invalid taxon: "Scuticocilliatae"
 //  3 Invalid taxon: "Gyrodinium wulfii"
 //  3 Invalid taxon: "Chrysocist"
 //  2 Invalid taxon: "Uniflgellates"
 //  2 Invalid taxon: "Unifagellates"
 //  2 Invalid taxon: "Strombidium spiralissloneczko"
 //  2 Invalid taxon: "Strombidium spiralis"
 //  2 Invalid taxon: "Strobilidium spiralis"
 //  2 Invalid taxon: "Scuticociliatida"
 //  2 Invalid taxon: "Ribbon diatoms"
 //  2 Invalid taxon: "Nitzschiabananik bokeim"
 //  2 Invalid taxon: "Nitzschia arctica"
 //  2 Invalid taxon: "Naviculatasma"
 //  2 Invalid taxon: "Microcystis"
 //  2 Invalid taxon: "Meringosphaerazielone"
 //  2 Invalid taxon: "Indeterm spores"
 //  2 Invalid taxon: "Heterocapsa rotudnata"
 //  2 Invalid taxon: "Favella meunieri"
 //  2 Invalid taxon: "Dinoflagella
