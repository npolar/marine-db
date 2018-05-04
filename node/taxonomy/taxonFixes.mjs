// @todo Check that none of the unaccepted and all of the accepted are in taxon-db
// @return Array of tuples [ unaccepted, accepted ]
export const taxonFixes = [

  // Higher raanked taxa

  ['Chrysophyta', 'Chrysophyceae'], // -> class
  ['Ciliate', 'Ciliata'],
  ['Coccolithophora', 'Prymnesiophyceae'], // -> class
  ['Dinophyta', 'Dinophyceae'],
  ['Eupagurus', 'Pagurus'],
  ['Heterokontophyta', 'Ochrophyta'],
  ['Hydromedusae', 'Hydrozoa'],
  ['Mysidacea', 'Mysida'], // -> order
  ['Turbellaria', 'Tubularia'], // typo
  // Asteroidea?
  // Gammaridea?

  // Species & genera A-Z
  ['Arrhis phyllony', 'Arrhis phyllonyx'], //typo

  ['Chaetoceros lacinosus', 'Chaetoceros laciniosus'], // phylum Ochrophyta
  ['Chaetoceros terens', 'Chaetoceros teres'], // typo
  //['Coccolithus pelagicus', 'Coccosphaera pelagica'], // synomym -> https://api.gbif.org/v1/species/7601850

  ['Dinophysis rotundata', 'Phalacroma rotundatum'],
  ['Disco fiordicus', 'Pertsovius fjordicus'],

  ['Erythrops erythrophthalma', 'Erythrops erythrophthalmus'], //typo? http://www.marinespecies.org/aphia.php?p=taxdetails&id=852968

  ['Gymndinium', 'Gymnodinium'], // typo
  ['Gymnodinium brevis', 'Gymnodinium breve'], //typo
  ['Gymnodinium flagellare', 'Gymnodinium'], // -> genus: https://www.gbif.org/species/8661776
  ['Gymnodinium gaelatum', 'Gymnodinium galeatum'], //typo
  ['Gymnodinium gracilientum', 'Gymnodinium gracilentum'],
  ['Gymnodinium pulchellum', 'Takayama pulchella'], // synonym https://www.gbif.org/species/7516124
  ['Gymnodinium wulfii', 'Gymnodinium wulffii'], //typo

  ['Heterorhabdus compactus', 'Paraheterorhabdus compactus'],

  ['Kathodinium', 'Katodinium'], //typo
  ['Kathodinium glaucum', 'Katodinium glaucum'], //typo

  ['Lubbockia brevis', 'Homeognathia brevis'],

  ['Monstrilloidae', 'Monstrillidae'], //typo? https://www.gbif.org/species/9127
  ['Myrionecta rubra', 'Mesodinium rubrum'],
  ['Monoculoides pacardi', 'Monoculodes packardi'], //typo

  ['Nitzschia granii', 'Pseudo-nitzschia granii'],

  ['Preperidinium meunieri', 'Preperidinium meunierii'], //typo

  ['Sagitta elegans', 'Parasagitta elegans'],
  ['Sagitta maxima', 'Pseudosagitta maxima'],
  ['Scolocithricella minor', 'Scolecithricella minor'], //typo
  ['Strombidium estatum', 'Strombidium'], // -> genus, unknown species epithet ("estatum")

  ['Thalasiossira borealis', 'Thalassiosira borealis'], //typo
  ['Thalasiossira pacyfica', 'Thalassiosira pacifica'], //typo
  ['Tharybis groenlandicus', 'Tharybis groenlandica'], //typo
  ['Triconia conifera', 'Oncaea conifera'],
  ['Tintinnus inquilinum', 'Tintinnus inquilinus'], //typo?

  ['Undeuchaeta spectabilis', 'Pseudochirella spectabilis'],

  ['Pleurochrysis carterae', 'Chrysotila carteri'],
  ['Prorocentrum minimum', 'Prorocentrum cordatum'],
  ['Phalacroma rotundata', 'Phalacroma rotundatum'], // phylum Myzozoa

  ['Uronema marina', 'Uronema marinum'] // phylum Ciliophora

];
