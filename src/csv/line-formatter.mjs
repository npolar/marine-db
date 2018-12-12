import readline from "readline";
import { linestring as csvLinestring } from "./linestring";
import { escape } from "./escape";
import { splitline } from "./splitline";
import { extractSeparator } from "./extract-separator";
export { splitline };

const NL = "\n";
const CRLF = "\r\n";

export const objectFromArrays = (row, fields) => {
  let i = 0;
  let o = Object.create(null);
  for (let f of fields) {
    o[f] = row[i++];
  }
  return o;
};

export const ndjson = ({ row, fields }) =>
  JSON.stringify(objectFromArrays(row, fields)) + NL;

export const ndjsonTuple = ({ row }) => JSON.stringify(row) + NL;

export const lineFormatter = format => {
  format = String(format).toLowerCase();
  const map = new Map([
    ["ndjson", ndjson],
    ["values", ndjsonTuple],
    ["tuples", ndjsonTuple],
    ["ndjson-tuples", ndjsonTuple]
  ]);
  if (map.has(format)) {
    return map.get(format);
  }
  return csvLinestring;
};
