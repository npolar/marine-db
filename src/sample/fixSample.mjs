import {fixTime} from '../event/fixTime';
import {fixStationTerm} from '../event/fixStationTerm';
import {fixGearTerm} from './fixGearTerm';
import {sampleHacks} from './sampleHacks';

import {SampleSchema} from './SampleSchema';
import uuid_v4 from 'uuid/v4';

const sampleschema = new SampleSchema();

export function fixSample(s) {

  s = sampleHacks(s);
  if (!s.sample || 0 === String(s.sample).trim().length) {
    const uuid = uuid_v4();
    s.sample = uuid; //'';
  }
  if (!s.vessel) {
    s.vessel = '';
  }

  // Disallow space and quotes in sample name
  // @todo Disallow all non-URL-safe characters?
  s.sample = s.sample.replace(/[\s"']+/g, '_');
  s.station = fixStationTerm(s.station);
  s.gear = fixGearTerm(s.gear);
  if (s.time) {
    s.time = fixTime(s.time);
  }
  s = sampleschema.fixTypes(s);

  // Prefix sample names that are not guaranteed to be unique with expedition+'$'
  // (Until 2013 the sample name was unique, but from 2014 to 2018 samples names
  // are not guaranteed to be unique across expeditions.)
  // Example, when sample is "SAL-349" and expedtion is "N-ICE2015", the new
  // sample becomes: "N-ICE2015$SAL-349"
  //
  // [Don't do this is the sample name is a UUID or other random code,
  // pending on output from Kronprins Haakon/HI's cruise logger]
  // const expeditionSampleSep = '$';
  // if ((s.expedition.indexOf(expeditionSampleSep) === -1) && /201[45678]$/.test(s.expedition)) {
  //   s.sample = `${s.expedition}${expeditionSampleSep}${s.sample}`.trim();
  // }
  if (null === s.depth_bottom) {
    delete s.depth_bottom;
  }


  // @todo movoe unknown fields into "extra" field...
  const properties = Object.keys(sampleschema.properties);
  const known = Object.create(null);
  Object.keys(s).forEach(k => {
    if (properties.includes(k)) {
      known[k] = s[k];
    } else if (k !== "extra") {
      if (!known.extra) {
        known.extra = Object.create(null);
      }
      let extrakey = k;
      if (/^extra[_\.]/.test(k)) {
        extrakey = extrakey.replace(/^extra[_\.]/, '');
      }
      known.extra[extrakey] = s[k];
    }
  });
  if (known.extra && Object.keys(known.extra).length === 0) {
    delete known.extra;
  }
  return known;
}
