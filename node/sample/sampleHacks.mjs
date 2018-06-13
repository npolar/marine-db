export const sampleHacks = (s) => {

  if (['NICE-2015', 'N-ICE15'].includes(s.expedition)) {
    s.expedition = 'N-ICE2015'
  }
  if (s.ship && !s.vessel) {
    s.vessel = s.ship;
    delete s.ship;
  }
  if (s.vessel) {
    s.vessel = s.vessel.replace(/^[A-Z]{1}\/[A-Z]{1}\s/, '')
  }
  if (!s.sample && s.name) {
    s.sample = s.name;
  }
  if (!s.sample && s.sample_name) {
    s.sample = s.sample_name;
  }
  if (!s.sample && s.id) {
    s.sample = s.id;
  }
  if (!s.sampleRemarks && s.comment) {
    s.sampleRemarks = s.comment;
  }
  
  delete s.sample_name;
  delete s.sample_id;
  delete s.sampleid;
  delete s.comment;

  if (!s.samplesizeunit && s.unit) {
    s.samplesizeunit = s.unit;
    delete s.unit;
  }
  return s;
}
