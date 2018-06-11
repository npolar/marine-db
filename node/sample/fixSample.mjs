import {fixTime} from '../event/fixTime';

export function fixSample(s) {
  s.sample = String(s.sample).trim();

  if (s.time) {
    s.time = fixTime(s.time);
  }

  // After 2014, the sample name might not be unique across expeditions
  if (/^[A-Z]{3}\-[0-9]{1,}$/i.test(s.sample)) {
    if (!s.expedition) {
      throw `No expedition for sample ${s.sample}`;
    }
    if (!s.time || new Date(s.time).getFullYear() >= 2014) {
      s.sample = `${s.expedition}/${s.sample}`.trim();
    }
  }
  return s;
}
