export default (row, i = 0) => {
  return row.map(v => {
    if ("string" === typeof v) {
      v = v.trim();
    }
    return v;
  });
};
