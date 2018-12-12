import readline from "readline";
import { linestring as csvLinestring } from "./linestring";
import { escape } from "./escape";
import { splitline } from "./splitline";
import { extractSeparator } from "./extract-separator";
import { lineFormatter } from "./line-formatter";
export { splitline };

// Transforms CSV from input stream into CSV, TSV, NDJSON, and more
export function transform({
  input = process.stdin,
  split = splitline,
  headerTransformer,
  escaper = escape,
  output = process.stdout,
  outputSeparator,
  format,
  fields,
  noOutputHeader = false,
  transformers = [],
  linestring = lineFormatter(format)
} = {}) {
  const linereader = readline.createInterface({ input });

  let i = 0;
  let headerLength = 0;
  let inputSeparator;
  let headers;
  if (/^ndjson$/i.test(format)) {
    noOutputHeader = true;
  }
  if (/^csv/i.test(format)) {
    outputSeparator = ",";
  }
  if (/^tsv/i.test(format)) {
    outputSeparator = "\t";
  }

  linereader.on("line", line => {
    let row = split(line, inputSeparator); //inputSeparator is undefined on first line
    // header
    if (0 === i++) {
      headerLength = row.length;
      inputSeparator = extractSeparator(line);

      if (!outputSeparator) {
        outputSeparator = inputSeparator;
      }
      // Transform header row
      for (const t of transformers) {
        row = t(row, 0, { format, fields });
      }
    }
    // Set fields after header is transformed!
    if (!fields) {
      fields = row;
    }

    // all rows including header
    if (row.length > 0 && row.length > headerLength) {
      let e = `CSV row ${i} contains ${
        row.length
      }) values, header line only ${headerLength}:
${line}`;
      throw e;
    }
    // @todo pad in outputSeparator if < headerLength

    // Transform data rows
    for (const t of transformers) {
      if (i - 1 >= 1) {
        row = t(row, i - 1, { format });
      }
    }

    const transformed = linestring({
      row,
      separator: outputSeparator,
      rownumber: i,
      escaper,
      fields
    });
    if (i == 1 && noOutputHeader) {
      //noop
    } else {
      output.write(transformed);
    }
  });
}
export default transform;
