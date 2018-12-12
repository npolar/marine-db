const preprocess = s =>
  String(s)
    .replace(/\sident\./, " indet.")
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

const identificationQualifierRegex = /\s((sp|spp|cf|indet)\..*$)/;

export function decomposeidentificationQualifier(
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
      taxon.taxonRank = "genus";
    }
  }
  return taxon;
}

export function decomposeLifeStage({ scientificName, ...taxon }) {
  scientificName = preprocess(scientificName);
  taxon.scientificName = scientificName;
  // these MUST not equal a species epithet
  [
    "ciliate",
    "colony",
    "cyst",
    "cysts",
    "krasnal", // means dwarf
    "larvae",
    "veliger",
    "pilidium",
    "statospores",
    "zoea"
  ].forEach(part => {
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
  decomposeidentificationQualifier
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
