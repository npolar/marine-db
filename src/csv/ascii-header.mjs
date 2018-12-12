const ascii = s =>
  s
    .replace(/[\W\s\.]/g, "_") //\W	is equivalent to [^A-Za-z0-9_].
    .replace(/__/g, "_")
    .replace(/^_/, "")
    .replace(/_$/, "");

export default function transform(headers, i = 0) {
  if (0 === i) {
    return headers.map(h => ascii(h));
  } else {
    return headers;
  }
}
