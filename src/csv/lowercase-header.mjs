const to_lowercase_word = s =>
  s
    .toLowerCase()
    .replace(/[\W\s\.]/g, "_") //\W	is equivalent to [^A-Za-z0-9_].
    .replace(/__/g, "_")
    .replace(/^_/, "")
    .replace(/_$/, "");

export default function transform(headers, i = 0) {
  if (0 === i) {
    return headers.map(h => to_lowercase_word(h));
  } else {
    return headers;
  }
}
