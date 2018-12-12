import csvtojson from "csvtojson";
const csvConverter = new csvtojson.Converter({ delimiter: "auto" });
export const extractSeparator = line =>
  csvConverter.processor.rowSplit.getDelimiter(line);
