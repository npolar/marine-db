// rename to fixTimeString?
export const fixTime = (t, stringify=true) => {
  t = String(t).replace(/UTC/i, '').replace(/\s{2,}/, ' ').trim();
  t = t.replace(/\//g, '.');
  let m, time;
  // Match "17.05.1814 12:00"
  const norwegianDateTimeRegex = /^([\d]{2})\.([\d]{2})\.([\d]{4})[tT\s\.]?([\d]{2})[\.\:]([\d]{2})([\.\:]([\d]{2}))?$/;
  if (m = t.match(norwegianDateTimeRegex)) {
    let [, day, month, year, hour, minute, , second] =  m;
    if (second !== Number(second)) {
      second = 0;
    }
    time = new Date(Date.UTC(Number(year), Number(month-1), Number(day), Number(hour), Number(minute), Number(second)));
    //console.warn('FIXED', '|', year, month, day, hour, minute, second, '|', time);

  } else {
    if (t.match(/[Tt\s]\d{2}\:\d{2}$/)) {
      t += ':00Z';
    }
    t = t.replace(' ', 'T');
    time = new Date(t);
  }
  if (stringify) {
    return time.toISOString().replace(/\.[0-9]{1,}Z$/, 'Z');
  } else {
    return time;
  }

}
