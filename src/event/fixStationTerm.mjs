export function fixStationTerm(station) {
  station = String(station).trim();
  return station.replace(/["'&;]+/g, '_');
}
