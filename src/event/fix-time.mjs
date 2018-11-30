// Transform Norwegian type dates like "17.05.1814 12:00" to ISO format
const norwegianDateTimeRegex = /^([\d]{2})\.([\d]{2})\.([\d]{4})[tT\s\.]?([\d]{2})[\.\:]([\d]{2})([\.\:]([\d]{2}))?$/;

const isolikeDateTimeRegex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})[tT\s]/;

const isotimestring = d => d.toISOString().replace(/\.[0-9]{1,}Z$/, "Z");

export const isNorwegianDateTime = (t, regex = norwegianDateTimeRegex) =>
  preprocess(t).match(norwegianDateTimeRegex) !== null;

export const isISOlikeDateTime = (t, regex = isolikeDateTimeRegex) =>
  t.trim().match(regex) !== null;

export const preprocess = t => {
  return String(t)
    .trim()
    .replace(/UTC/i, "")
    .replace(/\s{2,}/, " ")
    .replace(/\//g, ".")
    .trim();
};

export const fixTime = (t, stringify = true) => {
  let m, time;
  t = preprocess(t);

  if ((m = t.match(norwegianDateTimeRegex))) {
    let [, day, month, year, hour, minute, , second] = m;
    if (second !== Number(second)) {
      second = 0;
    }
    time = new Date(
      Date.UTC(
        Number(year),
        Number(month - 1),
        Number(day),
        Number(hour),
        Number(minute),
        Number(second)
      )
    );
  } else if ((m = t.match(isolikeDateTimeRegex))) {
    if (t.match(/[Tt\s]\d{2}\:\d{2}$/)) {
      t += ":00Z";
    }
    t = t.replace(" ", "T");
    time = new Date(t);
  }

  return stringify ? isotimestring(time) : time;
};
