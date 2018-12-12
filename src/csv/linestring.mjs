const CRLF = "\r\n";
import { escape } from "./escape";

export const linestring = ({
  row,
  separator,
  rownumber,
  fields,
  escaper = escape,
  newline = CRLF
}) => {
  return row.map(v => escaper(v)).join(separator) + newline;
};
