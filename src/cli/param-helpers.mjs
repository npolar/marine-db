import { loadModules } from "./load";

export const extractParam = (
  name,
  re = new RegExp(`--${name}=?(.+)?`),
  arg = process.argv.slice(2)
) => {
  let m;
  if (arg.find(a => (m = a.match(re)))) {
    return m[1];
  }
  return null;
};

export const namedParameterMap = defaultTuples => {
  const map = new Map(defaultTuples);
  for (let [name, value] of map) {
    if ([Boolean, true, false].includes(value)) {
      map.set(name, booleanParam(name));
    } else if ((value = extractParam(name))) {
      map.set(name, value);
    }
  }
  return map;
};

export const booleanParam = name =>
  [undefined, "true"].includes(extractParam(name)) ? true : false;
