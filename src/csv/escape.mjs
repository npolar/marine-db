import { isNumber, isNone, isBoolean } from "./is";

export function escape(v, sep) {
  if (isBoolean(v)) {
    return "true" === String(v);
  } else if (isNone(v)) {
    return undefined;
  } else if (isNumber(v)) {
    return Number(v);
  } else if (String(v) === v) {
    v = v.replace(/[\r\n]/g, " ");
    v = v.replace(/["]/g, '""');
    if (sep === String(sep)) {
      v = v.split(sep).join(" "); // => sep
    }
    v = `"${v}"`;
    return v;
  }
  throw `Unknown type: ${v}`;
}
