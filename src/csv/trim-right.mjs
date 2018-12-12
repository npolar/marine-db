const rightWhitespace = /\s+$/;
export default (row, i = 0) => {
  return row.map(v => {
    if ("string" === typeof v && rightWhitespace.test(v)) {
      v = v.replace(rightWhitespace, "");
    }
    return v;
  });
};
