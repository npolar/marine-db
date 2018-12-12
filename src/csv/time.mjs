import {
  fixTime,
  isNorwegianDateTime,
  isISOlikeDateTime
} from "../darwin-core/sampling-event/fix-time";

export default (row, i = 0) => {
  return row.map(v => {
    if (isISOlikeDateTime(v) || isNorwegianDateTime(v)) {
      v = fixTime(v);
    }
    return v;
  });
};
