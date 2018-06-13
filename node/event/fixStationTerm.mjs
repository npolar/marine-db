export function fixStationTerm(station) {
  return station.replace(/['&;]+/g, '_');
}
