export const rejectSample = [
  //(s) => ["", "undefined"].includes(String(s.sample)),
  (s) => "" === String(s.time),
  (s) => "" === String(s.longitude),
  (s) => "" === String(s.latitude),
  // For N-ICE2015, there is no available data in these sampling series
  //(s) => "N-ICE2015" === s.expedition && /(DIC|BAR|GAS|FCM|SAL|OXY)/.test(s.sample),
];

export const isRejectedSample = (s) => rejectSample.some(r => r(s) === true);
