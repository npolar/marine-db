const noneRegex = /^(-?NaN|null|n\/a|empty|undefined|)$/i;
const none = (s, re = noneRegex) => {
  if (re.test(String(s))) {
    return undefined;
  } else {
    return s;
  }
};

export default function transform(row, i = 0) {
  if (0 === i) {
    return row;
  } else {
    return row.map(v => none(v));
  }
}
