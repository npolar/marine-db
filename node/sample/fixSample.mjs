import {fixTime} from '../event/fixTime';
import {fixStationTerm} from '../event/fixStationTerm';
import {fixGearTerm} from './fixGearTerm';
import {SampleSchema} from './SampleSchema';

const sampleschema = new SampleSchema();

export function fixSample(s) {
  if (0 === String(s.sample).length) {
    throw "Cannot fix sample without name";
  }
  s.sample = s.sample.replace(/[\s,"']+/g, '_');
  s.station = fixStationTerm(s.station);
  s.gear = fixGearTerm(s.gear);
  if (s.time) {
    s.time = fixTime(s.time);
  }
  s = sampleschema.fixTypes(s);

  // 2014 to 2017: the sample is not guaranteed to be unique across expeditions
  if ((/201[4567]$/).test(s.expedition)) {
    s.sample = `${s.expedition}$${s.sample}`.trim();
  }
  if (null === s.depth_bottom) {
    delete s.depth_bottom;
  }

  return s;
}
