import {taxonFixes} from './taxonFixes';
import {fixSample} from '../sample/fixSample';

function moveNonTaxonomicSuffixesToStage(t) {
  ['cyst', 'cysts', 'larvae', 'zoea', 'pilidium', 'colony'].forEach(part =>  {
    const re = new RegExp(`\\s${(part)}$`);
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

  const someFlagellate = ["Flagellate", "Bifagellatae",
    "Choanoflagellatea", "Choanoflagellata",
    "Choanoflagellida",
    "Flagellatae wiele", "Monoflagellate", "Monoflagellates","Monoflagellatae",
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

function fixUnit(unit) {
  return String(unit).replace(/^(ind|cells|N)[\s\/]/, '').replace(/³/g, '3').replace(/²/g, '2').trim();
}

export function fixTaxon(t) {

  const verbatimTaxon = t.taxon;
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

  t.density = (t.density === null) ? null : Number(t.density);
  t.length = String(t.length);
  if ((/cells\/L/i).test(t.unit)) {
    t.unit = 'L';
  }
  t.samplesizeunit = fixUnit(t.unit);
  delete t.unit;

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
