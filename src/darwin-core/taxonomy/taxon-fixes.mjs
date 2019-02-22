//@todo
// Neoscolecithrix sp. should be merged with Neoscolecithrix farrani
// Themisto sp. should be merged with Themisto abyssorum 0-5 mm
// Aetideidae CV should be merged with Bradyidius similis
// Bivalvia juveniles should be merged with bivalvia veliger

// @return Array of tuples [ unaccepted, accepted ]
import { fixFlagellates } from "./fix-flagellates.mjs";

export const taxonFixes = [
  ["Cell", "Eukaryota incertae sedis"],
  ["Flagellatae (sercowate z kilkoma witkami)", "Eukaryota incertae sedis"],
  ["Prasinophyceae/Meringosphaera", "Eukaryota incertae sedis"],

  // Higher ranked taxa

  ["Centriceae", "Bacillariophyceae"], // -> class
  // 9 Invalid taxon "Halosphaeracos"
  // 7 Invalid taxon ""
  // 6 Invalid taxon "Tintinnus"
  // 6 Invalid taxon "Pierscionek"
  // 4 Invalid taxon "Ciliataolbrzym"
  // 3 Invalid taxon "Raphidiophyceae"
  // 3 Invalid taxon "Monads"
  // 3 Invalid taxon "Chrysocist"
  ["Choanoflagellata", "Choanoflagellatea"],
  ["Choreotrich", "Choreotrichia"], // -> subclass
  ["Chrysophyta", "Ochrophyta"], // -> phylum
  ["Chrysophycea", "Chrysophyceae"], // -> class
  ["Ciliate", "Ciliata"], // -> genus
  ["Ciliatae", "Ciliata"], // -> genus
  ["Coccolithophora", "Prymnesiophyceae"], // -> class
  ["Dinophyta", "Dinophyceae"], // -> class
  ["Dinoflagellatae", "Dinophyceae"], // -> class
  ["Dinoflagellate", "Dinophyceae"], // -> class
  ["Eupagurus", "Pagurus"],
  ["Gammaridea", "Gammaridae"], // -> family
  ["Heterokontophyta", "Ochrophyta"],
  ["Hydromedusae", "Hydrozoa"],
  ["Mysidacea", "Mysida"], // -> order

  //["Pennales", "Pennales"], // http://www.marinespecies.org/aphia.php?p=taxdetails&id=1304629->
  ["Pennate", "Bacillariophyceae"], // -> class Bacillariophyceae Haeckel, 1878
  ["Pennatae", "Bacillariophyceae"], //
  ["Diatoms", "Bacillariophyceae"], //
  ["Ribbon diatoms", "Bacillariophyceae"], // -> order

  ["Scuticociliata", "Scuticociliatia"], // typo -> subclass http://www.marinespecies.org/aphia.php?p=taxdetails&id=414712
  ["Scuticocilliatae", "Scuticociliatia"], // typo
  ["Scuticociliatida/Oligohymenophorea", "Scuticociliatia"],
  ["Strombididae", "Strombidiidae"], // typo -> family
  ["Turbellaria", "Tubularia"], // typo

  // Species & genera A-Z
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
  ["Arrhis phyllony", "Arrhis phyllonyx"], //typo

  ["Bacteriosira", "Bacterosira"], // typo
  ["Bacteriosira bathyomphala", "Bacterosira bathyomphala"], //typo
  ["Bacteriosira bathyomphola", "Bacterosira bathyomphala"], //typo
  // or -> Coscinodiscus bathyomphalus ?
  // http://www.marinespecies.org/aphia.php?p=taxdetails&id=162930

  ["Chaetoceros lacinosus", "Chaetoceros laciniosus"], // phylum Ochrophyta
  ["Chaetoceros terens", "Chaetoceros teres"], // typo
  ["Chrysotila carteri", "Chrysotila carterae"], // typo, see also (further down) Pleurochrysis carterae
  [
    "Conticribra weissflogii (former Thalassiosira weissflogii)",
    "Conticribra weissflogii"
  ],
  ["Chaeroceros concavicornis", "Chaetoceros concavicornis"],
  ["Dinophysis rotundata", "Phalacroma rotundatum"],
  ["Disco fiordicus", "Pertsovius fjordicus"],

  ["Erythrops erythrophthalma", "Erythrops erythrophthalmus"], //typo? http://www.marinespecies.org/aphia.php?p=taxdetails&id=852968
  ["Entomoneis kjelmanii", "Entomoneis kjellmanii"], // typo
  ["Eusirus holmi", "Eusirus holmii"], // typo

  ["Favella meunieri", "Schmidingerella meunieri"], // synonym http://www.marinespecies.org/aphia.php?p=taxdetails&id=732864

  ["Goniaulax gracilis", "Gonyaulax gracilis"], // typo
  ["Gymndinium", "Gymnodinium"], // typo
  ["Gymnodinium brevis", "Gymnodinium breve"], //typo
  ["Gymnodinium estuariale", "Gymnodinium"], // -> genus (unknown epithet)
  ["Gymnodinium flagellare", "Gymnodinium"], // -> genus: https://www.gbif.org/species/8661776
  // 1 Invalid taxon "Gymnodinium fusiforme"

  // 'Gymndinium arcticum',
  // 'Gymndinium galeatum',
  // 'Gymndinium gracilentum',
  // 'Gymndinium simplex',

  ["Gymnodinium gaelatum", "Gymnodinium galeatum"], //typo
  ["Gymnodinium gracilientum", "Gymnodinium gracilentum"],
  ["Gymnodinium pulchellum", "Takayama pulchella"], // unaccepted synonym https://www.gbif.org/species/7516124 / http://www.marinespecies.org/aphia.php?p=taxdetails&id=233085
  ["Gymnodium simplex", "Gymnodinium simplex"], // typo
  ["Gymnodinium wulfii", "Gymnodinium wulffii"], //typo
  ["Gymnodinium ovatum", "Gyrodinium ovatum"], // http://www.marinespecies.org/aphia.php?p=taxdetails&id=232978 ->
  ["Gyrodinium flagelare", "Gyrodinium flagellare"], //typo
  ["Gyrodinium wulfii", "Gyrodinium wulffii"],

  ["Heterorhabdus compactus", "Paraheterorhabdus compactus"],
  ["Heterocapsa rotudnata", "Heterocapsa rotudnata"],
  // 1 Invalid taxon "Heterocapsa triquerta"

  ["Kathodinium", "Katodinium"], //typo
  ["Kathodinium glaucum", "Katodinium glaucum"], //typo

  ["Lesardia elongata", "Lessardia elongata"], // typo http://www.marinespecies.org/aphia.php?p=taxdetails&id=232703
  ["Laboea strobilum", "Laboea strobila"], // typo http://www.marinespecies.org/aphia.php?p=taxdetails&id=101264
  ["Lubbockia brevis", "Homeognathia brevis"],

  ["Monstrilloidae", "Monstrillidae"], //typo? https://www.gbif.org/species/9127
  ["Myrionecta rubra", "Mesodinium rubrum"],
  ["Monoculoides pacardi", "Monoculodes packardi"], //typo

  ["Navicula vanhoefenii", "Navicula vanhoeffenii"], // typo
  //['Nitzschia granii', 'Pseudo-nitzschia granii'],
  ["Nitzschia leavissima", "Nitzschia levissima"],
  ["nitzschia leavissima", "Nitzschia levissima"],
  // 1 Invalid taxon "Nitzschiabananik bokeim"
  // 1 Invalid taxon "Nitzschia arctica"

  ["Nitzschia sp1(sensu B.-Therriault)", "Nitzschia"],

  ["Oncaea conifera", "Triconia conifera"], // http://www.marinespecies.org/aphia.php?p=taxdetails&id=128957
  // Strobilidium spiralis -> Pelagostrobilidium spirale http://www.marinespecies.org/aphia.php?p=taxdetails&id=341692
  ["Preperidinium meunieri", "Preperidinium meunierii"], //typo
  ["Prorocentrum cordatum old Prorocentrum minimum", "Prorocentrum cordatum"],
  ["Polariella glacialis", "Polarella glacialis"], // typo
  ["Pleurochrysis carterae", "Chrysotila carterae"], // synonym http://www.marinespecies.org/aphia.php?p=taxdetails&id=837255
  ["Prorocentrum minimum", "Prorocentrum cordatum"],
  ["Phalacroma rotundata", "Phalacroma rotundatum"], // phylum Myzozoa
  ["Polarella glacialis/Heterocapsa", "Heterocapsa"], // Re-examined using photo by AT in 2019-02

  ["Rhizosolenia hebetata f. hebetata", "Rhizosolenia hebetata"],
  ["Rhizosolenia hebetata f. semispina", "Rhizosolenia semispina"],

  ["Sagitta elegans", "Parasagitta elegans"],
  ["Sagitta maxima", "Pseudosagitta maxima"],
  ["Scolocithricella minor", "Scolecithricella minor"], //typo
  ["Strombidium estatum", "Strombidium"], // -> genus, unknown species epithet ('estatum')

  // 1 Invalid taxon "Strombidium spiralissloneczko"
  // 1 Invalid taxon "Strombidium spiralis"
  // 1 Invalid taxon "Strobilidium spiralis"
  // 1 Invalid taxon "Scuticociliatida"
  // 1 Invalid taxon "Thallassionema nitzschioides"

  ["Teleaulax marina", "Teleaulax"],
  ["Thalasiossira borealis", "Thalassiosira borealis"], // typo
  ["Thalasiosira hyalina", "Thalassiosira hyalina"], // typo
  ["Thalasiossira pacyfica", "Thalassiosira pacifica"], //typo
  ["Thalassiosira pacyficaphoto", "Thalassiosira pacifica"], //typo
  ["Thalassiosira antarctica\\pacyfica", "Thalassiosira antarctica/pacifica"], // typo
  ["Thalassiosira anguste", "Thalassiosira"], // -> genus, unknown species epithet ('anguste')
  ["Tharybis groenlandicus", "Tharybis groenlandica"], //typo
  ["Tintinnus inquilinum", "Eutintinnus apertus"], // AT 2019-02 http://www.marinespecies.org/aphia.php?p=taxdetails&id=235770
  [
    "Thalassiosira antarctica var borealis",
    "Thalassiosira antarctica var. borealis"
  ],
  [
    "Thalassiosira antarctica variety borealis",
    "Thalassiosira antarctica var. borealis"
  ],

  // PA: According to Gómez 2013 all marine Ceratium species should be replaced with Tripos.
  // I think we shouldn't use Ceratium (in case of C. articum) and Tripos (in case of T. longipes) but only one of the two.
  // I would therefore suggest to use the scientific name Tripos arcticum.
  // Gómez F. (2013) "REINSTATEMENT OF THE DINOFLAGELLATE GENUS Tripos TO REPLACE Neoceratium, MARINE SPECIES OF Ceratium (DINOPHYCEAE, ALVEOLATA)".
  // CICIMAR Oceánides 28(1): 1-22
  ["Ceratium", "Tripos"],
  ["Ceratium arcticum", "Tripos arcticum"],
  ["Ceratium fusus", "Tripos fusus"],
  ["Ceratium longipes", "Tripos longipes"], // http://www.marinespecies.org/aphia.php?p=taxdetails&id=109964
  ["Neoceratium arcticum", "Tripos arcticum"], // unaccepted http://www.marinespecies.org/aphia.php?p=taxdetails&id=495629
  ["Neoceratium fusus", "Tripos fusus"],
  ["Neoceratium lineatum", "Tripos lineatum"],

  ["Undeuchaeta spectabilis", "Pseudochirella spectabilis"],
  ["Uronema marina", "Uronema marinum"] // phylum Ciliophora
];

export function fix(name, fixes = new Map(taxonFixes)) {
  const { scientificName } = fixFlagellates({ scientificName: name });
  if (scientificName !== name) {
    name = scientificName;
  }
  if (fixes.has(name)) {
    return fixes.get(name);
  } else {
    return name;
  }
}
