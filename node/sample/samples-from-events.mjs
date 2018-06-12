// cat data/master/event/*-events.ndjson | node --experimental-modules node/sample/samples-from-events.mjs
import fs from 'fs';
import readline from 'readline';

const input = process.stdin;
const output = process.stdout;
const linereader = readline.createInterface({ input });

linereader.on('line', (line) => {
  const e = JSON.parse(line);
  const event = e.id;
  e.samples.forEach(s => {
    delete e.samples;
    const name = s.id;
    s.sample = name;
    s.depth_from = s.depth[0];
    s.depth_to = s.depth[1];
    delete s.depth;
    delete s.id;
    delete s.comment;
    delete e.id;
    const sample = Object.assign({ name, event }, s, e);
    output.write(JSON.stringify(sample)+'\n');
  })

});