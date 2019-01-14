const preprocess = s =>
  String(s)
    .replace(/\sident\./, " indet.")
    .replace(/_/g, "")
    .replace(/\s{2}/g, " ")
    .trim();

export function decomposeSizeGroup({ scientificName, ...taxon }) {
  scientificName = preprocess(scientificName);
  taxon.scientificName = scientificName;
  let m;
  const sizeGroupRegexFromTo = /([><=]{1,2})?\s?([0-9]{1,3})(.)?([0-9]{1,3})?\s?([uµm]m)/;

  if ((m = scientificName.match(sizeGroupRegexFromTo))) {
    let [, op, from, , to, unit] = [...m];
    unit = unit.replace("um", "µm");
    taxon.scientificName = scientificName
      .replace(sizeGroupRegexFromTo, "")
      .trim();

    if (op && from && unit) {
      taxon.sizeGroup = `${op} ${from} ${unit}`.trim();
    } else if (from && to && unit) {
      taxon.sizeGroup = `${from}-${to} ${unit}`.trim();
    }
  }
  return taxon;
}

const identificationQualifierRegex = /(\s(sp|spp|cf|indet|aff)\..*|^(aff)\.\s.*)$/;

export function decomposeIdentificationQualifier(
  { scientificName, ...taxon },
  re = identificationQualifierRegex
) {
  scientificName = preprocess(scientificName);
  taxon.scientificName = scientificName;
  let m;
  if ((m = scientificName.match(re))) {
    taxon.identificationQualifier = m[1].trim();
    taxon.scientificName = scientificName
      .replace(taxon.identificationQualifier, "")
      .trim();
    if (taxon.identificationQualifier.startsWith("sp.")) {
      taxon.taxonRank = "species";
    } else if (taxon.identificationQualifier.startsWith("spp.")) {
      taxon.taxonRank = "species";
    }
  }
  return taxon;
}

const lifeStages = [
  "ciliate",
  "colony",
  "cyst",
  "cysts",
  "krasnal", // means dwarf
  "larvae",
  "veliger",
  "pilidium",
  "pollen",
  "statospore",
  "statospores",
  "hypnospore",
  "hypnospores",
  "spore",
  "spores",
  "zoea"
];

export function decomposeLifeStage(
  { scientificName, ...taxon },
  stages = lifeStages
) {
  scientificName = preprocess(scientificName);
  taxon.scientificName = scientificName;
  // these MUST not equal a species epithet
  stages.forEach(part => {
    const re = new RegExp(`\\s(${part})$`); // notice the space before
    const m = scientificName.trim().match(re);
    if (m) {
      taxon.scientificName = scientificName.replace(re, "");
      taxon.lifeStage = m[1];
    }
  });
  return taxon;
}

export const scientificNameDecomposers = [
  decomposeLifeStage,
  decomposeSizeGroup,
  decomposeIdentificationQualifier
];

// Decompose a scientific name into object holding name, identification qualifier, and life stage
// @param [Strong] scientificName
// @return [Object] Darwin Core [Taxon](http://rs.tdwg.org/dwc/terms/#taxon)
export function decompose(
  scientificName,
  decomposers = scientificNameDecomposers
) {
  scientificName = preprocess(scientificName);
  let taxon = { scientificName };
  decomposers.forEach(decomposer => {
    taxon = decomposer(taxon);
  });

  return taxon;
}
export default decompose;
