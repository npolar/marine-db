export const rejectTaxonomy = [
  //(t) => ["", "Cyst", "Cyst sp.", "Spores", "Spora", "Fecal pelet", "Indeterm spores", "Unidentified cells", "Unknown"].includes(String(t.taxon)),
  (t) => String(t.sample).length < 4,
  (t) => String(t.samplesizeunit) === ""
];
