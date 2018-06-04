export const rejectTaxonomy = [
  (t) => ["","Pisces", "Cyst", "Spores", "Spora", "Fecal pelet", "Unidentified cells"].includes(String(t.taxon)),
  (t) => String(t.sample).length < 4,
  (t) => String(t.samplesizeunit) === ""
];
