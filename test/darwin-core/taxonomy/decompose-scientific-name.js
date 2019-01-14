import test from "ava";
import {
  decomposeLifeStage,
  decomposeSizeGroup,
  decomposeIdentificationQualifier,
  decompose
} from "../../../src/darwin-core/taxonomy/decompose";

const taxon = scientificName => {
  return { scientificName };
};

test("decomposeSizeGroup", t => {
  const idqFacit = [
    ["Chrysochromulina sp. cf. Ch. parkeae", undefined],
    ["Coccolithophores indet.", undefined],
    ["Coccolithus pelagicus", undefined],
    ["Gymnodinium sp. 10-20um", "10-20 µm"],
    ["Fagellates ident. 3-7um", "3-7 µm"],
    ["Centriceae <30um", "< 30 µm"],
    ["Centriceae < 30 µm", "< 30 µm"]
  ];
  for (const [was, expected] of idqFacit) {
    const { sizeGroup } = decomposeSizeGroup(taxon(was));
    t.deepEqual(sizeGroup, expected);
  }
});

test("decomposeLifeStage", t => {
  const { lifeStage } = decomposeLifeStage(taxon("Polarella glacialis cyst"));
  t.deepEqual(lifeStage, "cyst");
});

test("decomposeIdentificationQualifier", t => {
  const idqFacit = [
    ["Chrysochromulina sp. cf. Ch. parkeae", "sp. cf. Ch. parkeae"],
    ["Gymnodinium sp. cf G. simplex", "sp. cf G. simplex"],
    ["Coccolithophores indet.", "indet."],
    ["Coccolithus pelagicus", undefined],
    ["Gymnodinium sp. 10-20um", "sp. 10-20um"],
    ["Fagellates ident. 3-7um", "indet. 3-7um"],
    ["Fake ident 3-7um", undefined],
    ["Pelagococcus sp.", "sp."],
    ["Chrysophycean indet. ", "indet."],
    ["Rhizosolenia setigera", undefined]
  ];
  for (const [was, expected] of idqFacit) {
    const { identificationQualifier } = decomposeIdentificationQualifier(
      taxon(was)
    );
    t.deepEqual(expected, identificationQualifier);
  }
});

test("decompose", t => {
  const decomposeFacit = [
    [
      "Chrysochromulina sp. cf. Ch. parkeae",
      {
        scientificName: "Chrysochromulina",
        identificationQualifier: "sp. cf. Ch. parkeae",
        taxonRank: "species"
      }
    ],
    [
      "Gymnodinium sp. 10-20um",
      {
        scientificName: "Gymnodinium",
        identificationQualifier: "sp.",
        sizeGroup: "10-20 µm",
        taxonRank: "species"
      }
    ],
    [
      "aff. Taxon",
      {
        scientificName: "",
        identificationQualifier: "aff. Taxon"
      }
    ],
    [
      "Taxon aff. species",
      {
        scientificName: "Taxon",
        identificationQualifier: "aff. species"
      }
    ]
  ];
  for (const [was, expected] of decomposeFacit) {
    const taxon = decompose(was);
    t.deepEqual(expected, taxon);
  }
});
