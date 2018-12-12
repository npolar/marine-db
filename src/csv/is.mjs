export const isNumber = v =>
  /^[-+]?[0-9]{1,}(\.?[0-9]{1,})?/.test(String(v)) && Number(v) == v;

export const isNone = v =>
  [null, undefined, NaN, -NaN, "undefined", "null", "", "N/A", "n/a"].includes(
    v
  );

export const isBoolean = v => [true, false, "true", "false"].includes(v);

export const isAscii = v => /^[\x20-\x7F]*$/.test(String(v));
