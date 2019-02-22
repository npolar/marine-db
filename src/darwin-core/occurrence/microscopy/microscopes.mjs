const m60_16k = 16635.11;
const m40_7k = 7040.26;
const m40_4k = 4407.47;
const m20_1k = 1120.1;
const m10_450 = 450.02;
const m10_321 = 321.61;

const allowed = new Map([
  [10, [m10_321, m10_450]],
  [20, [m20_1k]],
  [40, [m40_4k, m40_7k]],
  [60, [m60_16k]]
]);

const maxFieldForMicroscope = new Map([
  ["Nikon TE300", new Map([[10, m10_321], [20, m20_1k], [40, m40_4k]])],
  ["Nikon Ti-S​​", new Map([[10, m10_450], [40, m40_7k], [60, m60_16k]])]
]);

export const maxFields = (magnification, microscopeID) => {
  magnification = Number(magnification);
  if (!microscopeID) {
    return allowed.get(magnification);
  }
  return maxFieldForMicroscope.get(microscopeID).get(magnification);
};

export const fixMaxFields = maxFields => {
  const mfi = parseInt(maxFields);
  const intMap = new Map([
    [321, m10_321],
    [322, m10_321],

    [450, m10_450],

    [1120, m20_1k],
    [1128, m20_1k],

    [4407, m40_4k],
    [4404, m40_4k], // typo
    [4047, m40_4k], // typo

    [7040, m40_7k],

    [16635, m60_16k], // CORRECT integer
    [16631, m60_16k], // typo
    [16636, m60_16k], // typo
    [16637, m60_16k], // typo
    [16638, m60_16k], // typo
    [1665, m60_16k] // typo
  ]);
  if (!intMap.has(mfi)) {
    console.warn("Unknown maxFields:", maxFields);
  }
  return intMap.get(mfi);
};
