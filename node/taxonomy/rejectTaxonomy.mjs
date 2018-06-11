export const rejectTaxonomy = [
  (t) => ["Cyst", "Cyst sp.",
    "Fecal pelet",
    "Indeterm spores",
    "Microcystis",
    "Spores", "Spora",
    "Unidentified cells", "Unknown"].includes(String(t.taxon)),
  (t) => String(t.sample).length < 4
];
