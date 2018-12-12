import csvtojson from "csvtojson";
const delimiters = ["\t", ",", ";"];

// Split CSV line into Array of String values
// Warning: multiple delimiters may break data: use only for header with just 1 delimiter;
// detect delimiter and pass the real delimiter for all data rows
export const splitline = (line, delimiter = delimiters) => {
  const csvConverter = new csvtojson.Converter({ delimiter });
  return csvConverter.processor.rowSplit.parse(line).cells;
  return row;
};
