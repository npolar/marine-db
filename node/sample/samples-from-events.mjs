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
  e.samples.forEach(s => {
    delete e.samples;
    const sample = s.id;
    s.depth_from = s.depth[0];
    s.depth_to = s.depth[1];
    delete s.depth;
    delete s.id;
    delete s.comment;
    delete e.id;


    let sampleEvent = Object.assign({ sample, event }, s, e);
    sampleEvent = fixSample(sampleEvent);

    if (schema.isValid(sampleEvent)) {
      output.write(JSON.stringify(sampleEvent)+'\n');
    } else {
      console.error(schema.errors);
    }

  })

});
