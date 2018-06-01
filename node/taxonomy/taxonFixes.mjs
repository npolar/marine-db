// @return Array of tuples [ unaccepted, accepted ]
export const taxonFixes = [

  // Higher ranked taxa

  ['Chrysophyta', 'Chrysophyceae'], // -> class
  ['Ciliate', 'Ciliata'],
  ['Coccolithophora', 'Prymnesiophyceae'], // -> class
  // Ciliophora
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

  // Asteroidea?

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

  ["Laboea strobila", "Laboea strobilum"], // typo
  ['Lubbockia brevis', 'Homeognathia brevis'],

  ['Monstrilloidae', 'Monstrillidae'], //typo? https://www.gbif.org/species/9127
  ['Myrionecta rubra', 'Mesodinium rubrum'],
  ['Monoculoides pacardi', 'Monoculodes packardi'], //typo

  ['Navicula vanhoefenii', 'Navicula vanhoeffenii'], // typo
  //['Nitzschia granii', 'Pseudo-nitzschia granii'],
  ["Nitzschia leavissima", "Nitzschia levissima"],

  ['Oncaea conifera', 'Triconia conifera'], // http://www.marinespecies.org/aphia.php?p=taxdetails&id=128957

  ['Preperidinium meunieri', 'Preperidinium meunierii'], //typo

  ['Sagitta elegans', 'Parasagitta elegans'],
  ['Sagitta maxima', 'Pseudosagitta maxima'],
  ['Scolocithricella minor', 'Scolecithricella minor'], //typo
  ['Strombidium estatum', 'Strombidium'], // -> genus, unknown species epithet ("estatum")

  ['Thalasiossira borealis', 'Thalassiosira borealis'], //typo
  ['Thalasiossira pacyfica', 'Thalassiosira pacifica'], //typo
  ['Tharybis groenlandicus', 'Tharybis groenlandica'], //typo
  ['Tintinnus inquilinum', 'Tintinnus inquilinus'], //typo?

  ['Undeuchaeta spectabilis', 'Pseudochirella spectabilis'],

  ['Pleurochrysis carterae', 'Chrysotila carteri'],
  ['Prorocentrum minimum', 'Prorocentrum cordatum'],
  ['Phalacroma rotundata', 'Phalacroma rotundatum'], // phylum Myzozoa

  ['Uronema marina', 'Uronema marinum'] // phylum Ciliophora

];
