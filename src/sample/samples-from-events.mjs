// cat data/master/event/*-events.ndjson | node --experimental-modules node/sample/samples-from-events.mjs
import fs from 'fs';
import readline from 'readline';
import {SampleSchema} from './SampleSchema';
import {fixSample} from './fixSample';


const input = process.stdin;
const output = process.stdout;
const linereader = readline.createInterface({ input });
const schema = new SampleSchema();

linereader.on('line', (line) => {
  const e = JSON.parse(line);
  const event = e.id;

  let samples = (e.samples && e.samples.length) ? e.samples : e.sample_ids;
  if (String(samples) === samples) {
    samples = samples.split('|').map(s => s.trim());
  }
  if (!e.longitude) {
    e.longitude=0;
  }
  if (!e.latitude) {
    e.latitude=0;
  }

  samples.forEach(s => {
    delete e.samples;
    let sample = s.sample;
    if (!sample && s.id) {
      sample = s.id;
    }
    if (!sample && s.sample_name) {
      sample = s.sample_name;
    }
    if (!s.depth_from && s.depth && s.depth.length) {
      s.depth_to = s.depth[1];
    }
    if (!s.depth_to && s.depth && s.depth.length) {
      s.depth_to = s.depth[1];
    }

    delete s.depth;
    delete s.id;
    delete s.comment;
    delete e.id;
    delete s.sample_name;


    let sampleEvent = Object.assign({ sample, event }, s, e);
    sampleEvent = fixSample(sampleEvent);
    //console.warn(sampleEvent);

    if (schema.isValid(sampleEvent)) {
      const ndjson = JSON.stringify(sampleEvent)+'\n';
      output.write(ndjson);
    } else {
      console.error(schema.errors);
    }

  })

});
