import {taxonFixes} from './taxonFixes';
import {fixSample} from '../sample/fixSample';

//["Cyst", "Cyst sp.", "Spores", "Spora", "Fecal pelet", "Indeterm spores", "Unidentified cells", "Unknown"].includes(String(t.taxon)),
// => ?
function moveNonTaxonomicSuffixesToStage(t) {
  // these MUST not equal a species epithet
  ['ciliate', 'colony', 'cyst', 'cysts',
  'krasnal', // means dwarf
  'larvae',
  'pilidium',
  'statospores',
  'zoea'].forEach(part =>  {

    const re = new RegExp(`\\s${(part)}$`); // notice the space before
    const m = t.taxon.match(re);
    if (m) {
      t.taxon = t.taxon.replace(re, '');
      t.stage = m[1];
    }
  });
  return t;
}

function fixFlagellates(t) {
  let m;
  if (m = t.taxon.match(/^((At|T)hecate)\s(dino(flagellat[ae]|phyceae))$/)) {
    t.verbatimTaxon = t.taxon;
    t.taxon = m[3].replace('d', 'D');
    t.rank = null;
    if (t.taxon === 'Dinophyceae') {
      t.rank = "class";
    }
  }
  // "Dinoflagellata" ?
  // order Dinoflagellida [or: "class": "Dinophyceae"?]
  const someDino = ["Dinoflagellatae","Dinoflagellate",
    "Dinoflagellate thecate", "Encysting dinophyceae"];

  if (someDino.includes(t.taxon)) {
    t.verbatimTaxon = t.taxon;
    t.rank = 'class';
    t.taxon = 'Dinophyceae';
  }

  if (m = t.taxon.match(/^((Unif|Bif|F)lagellatae)$/)) {
    t.verbatimTaxon = t.taxon;
    //t.group = t.taxon.toLowerCase();
    t.taxon = 'Eukaryota';
    t.rank = 'superkingdom';
  }

  const someFlagellate = ["Bifagellatae",
    "Choanoflagellatea", "Choanoflagellata", "Choanoflagellida",
    "Flagellate","Flagellatae wiele",
    "Monoflagellate", "Monoflagellates","Monoflagellatae",
    "Uniflgellates", "Unifagellates"
  ];

  if (someFlagellate.includes(t.taxon)) {
    t.verbatimTaxon = t.taxon;
    t.taxon = 'Eukaryota';
    t.rank = 'superkingdom';
  }
  return t;
}

function fixName(name, fixes=taxonFixes) {
  const m = fixes.find(([wrong]) => name === wrong);
  return (m && m[1]) ? m[1] : name ;
}

function fixUnitString(unit) {
  return String(unit).replace(/^(ind|cells|N)[\s\/]/, '').replace(/³/g, '3').replace(/²/g, '2').trim();
}

export function fixTaxon(t) {

  const verbatimTaxon = t.taxon;
  t.taxon = t.taxon.trim();
  t.sample = fixSample(t).sample;
  t = moveNonTaxonomicSuffixesToStage(t);
  t = fixFlagellates(t);
  t.comment = String(t.comment);
  if (t.taxon) {
    t.taxon = String(t.taxon).trim();
    // Move sp./spp./indet. from taxon into precision/qualifier
    const re = new RegExp(/\s((spp?|indet)\.)$/);
    let m = t.taxon.match(re);
    if (m) {
      const qualifier = m[0].trim();
      if (null == t.qualifier) {
        t.qualifier = qualifier;
      } else {
        t.qualifier = `${qualifier} ${t.qualifier}`;
      }
      t.taxon = t.taxon.replace(re, '');
    }
    t.taxon = t.taxon.replace(/\s(forma|variety)\s/, ' ');
    t.taxon = fixName(t.taxon).trim();
  }
  if (t.taxon !== verbatimTaxon) {
    t.verbatimTaxon = verbatimTaxon;
    //console.warn(`WARN taxon name standardised "${t.taxon}" <- "${verbatimTaxon}"`);
  }

  // @todo => fixOccurrence
  if (t.density === "+") {
    t.density = null;
    t.op = "gt";
    t.length = "0";
  } else {
    t.density = (t.density === null) ? null : Number(t.density);
  }

  t.length = String(t.length);
  if ((/cells\/L/i).test(t.unit)) {
    t.unit = 'L';
  }
  // @todo => fixOccurrence
  if (!t.samplesizeunit && t.unit) {
    t.samplesizeunit = fixUnitString(t.unit);
    delete t.unit;
  }
  if ((!t.samplesizeunit || t.samplesizeunit == "undefined")) {

    if (/PHT/.test(t.sample)) {
      t.samplesizeunit = 'L';
    } else {
      console.warn('SAMPLESIZEUNIT missing', JSON.stringify(t));
    }
  }

  if (!t.samplesize) {
    t.samplesize = 1;
  }

  if (t.op && t.op === "~") {
    t.op = "ca";
  } else if (t.op && t.op === "≤") {
    t.op = "lte";
  } else if (t.op && (/^[><]$/).test(t.op)) {
    t.op = t.op === '>' ? 'gt' : 'lt';
  }

  Object.keys(t).forEach(k => {
    if (t[k] === null || t[k] === "null") {
      delete t[k];
    }
  });
  return t;
}
