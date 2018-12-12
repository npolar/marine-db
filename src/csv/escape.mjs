import { isNumber, isNone, isBoolean } from "./is";

export function escape(v, sep, replaceSep = " ", replaceNewline = " ") {
  if (isBoolean(v)) {
    return "true" === String(v);
  } else if (isNone(v)) {
    return undefined;
  } else if (isNumber(v)) {
    return Number(v);
  } else {
    v = v.replace(/[\r\n]/g, replaceNewline);
    v = v.replace(/["]/g, '""');
    if (sep === String(sep) && sep !== replaceSep) {
      v = v.split(sep).join(replaceSep);
    }
    v = `"${v}"`;
    return v;
  }
}
