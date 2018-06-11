// @return Array of tuples [ unaccepted, accepted ]
//@todo Merging
// Neoscolecithrix sp. should be merged with Neoscolecithrix farrani
// Themisto sp. should be merged with Themisto abyssorum 0-5 mm
// Aetideidae CV should be merged with Bradyidius similis
// Bivalvia juveniles should be merged with bivalvia veliger
export const taxonFixes = [

  // Higher ranked taxa
  ['Choreotrich', 'Choreotrichia'], // -> subclass
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
  ['Pennate', 'Bacillariophyceae'], // -> order
  ['Diatoms', 'Bacillariophyceae'], // -> order
  ['Ribbon diatoms', 'Bacillariophyceae'], // -> order
  // https://en.wikipedia.org/wiki/Pennales
  // In some taxonomic schemes,[2] the pennate diatoms are divided into two groups:
  // pennate diatoms without a raphe, known as araphids (order Fragilariophyceae),
  // and pennate diatoms with a raphe, known as raphids (order Bacillariophyceae).

  ['Scuticociliata', 'Scuticociliatia'], // typo -> subclass http://www.marinespecies.org/aphia.php?p=taxdetails&id=414712
  ['Scuticocilliatae', 'Scuticociliatia'], // typo
  ['Strombididae', 'Strombidiidae'], // typo -> family
  ['Turbellaria', 'Tubularia'], // typo

  // Species & genera A-Z
 //11 Invalid taxon "Centriceae"
 // 9 Invalid taxon "Halosphaeracos"
 // 7 Invalid taxon "Choanoflagellata"
 // 6 Invalid taxon "Tintinnus"
 // 6 Invalid taxon "Pierscionek"
 // 4 Invalid taxon "Ciliataolbrzym"
 // 3 Invalid taxon "Raphidiophyceae"
 // 3 Invalid taxon "Monads"
 // 3 Invalid taxon "Chrysocist"

 // 1 Invalid taxon "Protoperidinium marielebourae"
 // 1 Invalid taxon "Nitzschiabananik bokeim"
 // 1 Invalid taxon "Nitzschia arctica"
 // 1 Invalid taxon "Naviculatasma"
 // 1 Invalid taxon "Microcystis"
 // 1 Invalid taxon "Meringosphaerazielone"
 // 1 Invalid taxon "Leegardia sol"


 // 1 Invalid taxon "Fragilariopsis pseudonanna"
 // 1 Invalid taxon "Dinoflagellata"
 // 1 Invalid taxon "Dinocyst"
 // 1 Invalid taxon "Cerataulina pelagica"
 // 1 Invalid taxon "Alexandrium minimum"
 // 1 Invalid taxon "Actinocyclus"
  ['Arrhis phyllony', 'Arrhis phyllonyx'], //typo

  ['Bacteriosira', 'Bacterosira'], // typo
  ['Bacteriosira bathyomphala', 'Bacterosira bathyomphala'], //typo
  ['Bacteriosira bathyomphola', 'Bacterosira bathyomphala'], //typo
  // or -> Coscinodiscus bathyomphalus ?
  // http://www.marinespecies.org/aphia.php?p=taxdetails&id=162930

  ['Chaetoceros lacinosus', 'Chaetoceros laciniosus'], // phylum Ochrophyta
  ['Chaetoceros terens', 'Chaetoceros teres'], // typo
  ['Chrysotila carteri','Chrysotila carterae'], // typo, see also (further down) Pleurochrysis carterae

  ['Dinophysis rotundata', 'Phalacroma rotundatum'],
  ['Disco fiordicus', 'Pertsovius fjordicus'],

  ['Erythrops erythrophthalma', 'Erythrops erythrophthalmus'], //typo? http://www.marinespecies.org/aphia.php?p=taxdetails&id=852968
  ['Entomoneis kjelmanii', 'Entomoneis kjellmanii'], // typo
  ['Eusirus holmi', 'Eusirus holmii'], // typo

  ['Favella meunieri', 'Schmidingerella meunieri'], // synonym http://www.marinespecies.org/aphia.php?p=taxdetails&id=732864

  ['Goniaulax gracilis', 'Gonyaulax gracilis'], // typo
  ['Gymndinium', 'Gymnodinium'], // typo
  ['Gymnodinium brevis', 'Gymnodinium breve'], //typo
  ["Gymnodinium estuariale", 'Gymnodinium'], // -> genus (unknown epithet)
  ['Gymnodinium flagellare', 'Gymnodinium'], // -> genus: https://www.gbif.org/species/8661776
   // 1 Invalid taxon "Gymnodinium fusiforme"
  ['Gymnodinium gaelatum', 'Gymnodinium galeatum'], //typo
  ['Gymnodinium gracilientum', 'Gymnodinium gracilentum'],
  ['Gymnodinium pulchellum', 'Takayama pulchella'], // unaccepted synonym https://www.gbif.org/species/7516124 / http://www.marinespecies.org/aphia.php?p=taxdetails&id=233085
  ['Gymnodium simplex', 'Gymnodinium simplex'], // typo
  ['Gymnodinium wulfii', 'Gymnodinium wulffii'], //typo
  ['Gyrodinium flagelare', 'Gyrodinium flagellare'], //typo
  ['Gyrodinium wulfii', 'Gyrodinium wulffii'],

  ['Heterorhabdus compactus', 'Paraheterorhabdus compactus'],
  // 1 Invalid taxon "Heterocapsa triquerta"
  // 1 Invalid taxon "Heterocapsa rotudnata"

  ['Kathodinium', 'Katodinium'], //typo
  ['Kathodinium glaucum', 'Katodinium glaucum'], //typo

  ['Lesardia elongata', 'Lessardia elongata'], // typo http://www.marinespecies.org/aphia.php?p=taxdetails&id=232703
  ['Laboea strobilum', 'Laboea strobila'], // typo http://www.marinespecies.org/aphia.php?p=taxdetails&id=101264
  ['Lubbockia brevis', 'Homeognathia brevis'],

  ['Monstrilloidae', 'Monstrillidae'], //typo? https://www.gbif.org/species/9127
  ['Myrionecta rubra', 'Mesodinium rubrum'],
  ['Monoculoides pacardi', 'Monoculodes packardi'], //typo

  ['Navicula vanhoefenii', 'Navicula vanhoeffenii'], // typo
  //['Nitzschia granii', 'Pseudo-nitzschia granii'],
  ['Nitzschia leavissima', 'Nitzschia levissima'],
  // 1 Invalid taxon "Nitzschiabananik bokeim"
  // 1 Invalid taxon "Nitzschia arctica"
  ['Neoceratium arcticum', 'Ceratium arcticum'], // unaccepted http://www.marinespecies.org/aphia.php?p=taxdetails&id=495629

  ['Oncaea conifera', 'Triconia conifera'], // http://www.marinespecies.org/aphia.php?p=taxdetails&id=128957
  // Strobilidium spiralis -> Pelagostrobilidium spirale http://www.marinespecies.org/aphia.php?p=taxdetails&id=341692
  ['Preperidinium meunieri', 'Preperidinium meunierii'], //typo

  ['Polariella glacialis', 'Polarella glacialis'], // typo

  ['Sagitta elegans', 'Parasagitta elegans'],
  ['Sagitta maxima', 'Pseudosagitta maxima'],
  ['Scolocithricella minor', 'Scolecithricella minor'], //typo
  ['Strombidium estatum', 'Strombidium'], // -> genus, unknown species epithet ('estatum')


  // 1 Invalid taxon "Strombidium spiralissloneczko"
  // 1 Invalid taxon "Strombidium spiralis"
  // 1 Invalid taxon "Strobilidium spiralis"
  // 1 Invalid taxon "Scuticociliatida"

  ['Thalasiossira borealis', 'Thalassiosira borealis'], // typo
  ['Thalasiosira hyalina', 'Thalassiosira hyalina'], // typo
  ['Thalasiossira pacyfica', 'Thalassiosira pacifica'], //typo
  ['Thalassiosira pacyficaphoto', 'Thalassiosira pacifica'], //typo
  ["Thalassiosira anguste", 'Thalassiosira'], // -> genus, unknown species epithet ('anguste')
  ['Tharybis groenlandicus', 'Tharybis groenlandica'], //typo
  ['Tintinnus inquilinum', 'Tintinnus inquilinus'], //typo?

    // 1 Invalid taxon "Thallassionema nitzschioides"
    // 1 Invalid taxon "Thalasiosira hyalina"
    // 1 Invalid taxon "Teleaulax marina"

  ['Undeuchaeta spectabilis', 'Pseudochirella spectabilis'],

  ['Pleurochrysis carterae', 'Chrysotila carterae'], // synonym http://www.marinespecies.org/aphia.php?p=taxdetails&id=837255
  ['Prorocentrum minimum', 'Prorocentrum cordatum'],
  ['Phalacroma rotundata', 'Phalacroma rotundatum'], // phylum Myzozoa

  ['Uronema marina', 'Uronema marinum'] // phylum Ciliophora

];
