export const sampleHacks = (s) => {
  // Fix missing

  if (!s.sample_type) {
    if (s.sample_types) {
      s.sample_type = s.sample_types;
      delete s.sample_types;
    } else if (s.type) {
      s.sample_type = s.type;
      delete s.type;
    }
  }

  if (!s.sample_subtype) {
    if (s.group) {
      s.sample_subtype = s.group;
      delete s.group;
    }
    if (s.animal_group) {
      s.sample_subtype = s.animal_group;
      delete s.animal_group;
    }
  }

  if (!s.vessel) {
    if (s.ship) {
      s.vessel = s.ship;
      delete s.ship;
    } else if (s.conveyance) {
      s.vessel = s.conveyance;
      delete s.conveyance;
    } else if (s.sampled_from) {
      s.vessel = s.sampled_from;
      delete s.sampled_from;
    }
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
  if (!s.sampleremarks && s.comment) {
    s.sample_remarks = s.comment;
  }
  if (!s.samplesizeunit && s.unit) {
    s.samplesizeunit = s.unit;
    delete s.unit;
  }
  // Fix existing
  if (s.vessel) {
    s.vessel = s.vessel.replace(/^[A-Z]{1}\/[A-Z]{1}\s/, '')
  }
  if (s.flowmeter_stop) {
    if (0 == Number(s.flowmeter_stop)) {
      //delete s.flowmeter_stop;
      s.flowmeter_stop = null;
    }

  }

  //filteredwater
  if (s.filtered_volume) {
    if ((/no sample|\?/i).test(s.filtered_volume)) {
      s.filtered_volume = null;
    } else if ((/L$/i).test(s.filtered_volume)) {
      s.filtered_volume = parseFloat(s.filtered_volume)*1000;
    }
  }
  if (s.depth_to) {
    if ((/(EMPTY|\?)/i).test(s.depth_to))  {
      s.depth_to = null;
    }
  }
  if (s.depth_bottom) {
    if (String(s.depth_bottom) == 'n.r.') {
      s.depth_bottom = null;
    }
  }
  if (['NICE-2015', 'N-ICE15'].includes(s.expedition)) {
    s.expedition = 'N-ICE2015'
  }

  delete s.sample_name;
  delete s.sample_id;
  delete s.sampleid;
  delete s.comment;


  return s;
}
