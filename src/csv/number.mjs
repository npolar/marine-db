import { isNumber } from "./is";

export default (row, i = 0) => {
  if (0 == i) {
    return row;
  } else {
    return row.map(v => {
      if (isNumber(v)) {
        v = Number(v);
      }
      return v;
    });
  }
};
