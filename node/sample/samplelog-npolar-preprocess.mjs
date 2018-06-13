// cat samplelog.csv | node --experimental-modules node/sample/samplelog.mjs
import fs from 'fs';
import readline from 'readline';
import {event_id} from '../event_id';

import {csvHeaderRegexRemapper as samplelogHeadersRemapper} from '../csv/csvHeaderRegexRemapper';
import {sampleHacks} from './sampleHacks';
import {fixSample} from './fixSample';
import {rejectSample} from './rejectSample';
import {SampleSchema} from './SampleSchema';

const input = process.stdin;
const output = process.stdout;
const linereader = readline.createInterface({ input });
const schema = new SampleSchema();

let i = 0;
let header;

// const sampleHeaderRegexes = [[/comment/i, 'sampleRemarks']].concat(csvHeaderRegexes);

linereader.on('line', (line) => {
  // @todo Fix CSV parsing
  const bits = line.split(/[,\t]{1}/).map(c => c.trim().replace(/^"/, '').replace(/"$/, ''));

  if (0 === i++) {
    header = samplelogHeadersRemapper(bits);
    console.warn('header:', JSON.stringify(header));
  } else {

    let s = {};
    let n = 0;
    header.forEach(k => {
      let v = bits[n++];
      s[k] = v;
    });

    s = sampleHacks(s);
    s = fixSample(s);
    let ndjson = JSON.stringify(s)+'\n';

    const rejected = rejectSample.some(r => r(s) === true);

    if (!s.event && !rejected) {
      try {
        s.event = event_id({ time: s.time, longitude: s.longitude, latitude: s.latitude});
      } catch (e) {
        console.error(JSON.stringify(s));
        console.error(e);
        // continue!
      }
    }


    if (rejected) {
      if (s.expedition == "N-ICE2015") {
        console.warn("ERROR Rejected", "N-ICE2015 "+s.sample.split("/")[1].split("-")[0]);
      } else {
        console.warn("ERROR Rejected", s.sample);
      }

    }

    const isValid = schema.isValid(s);

    if (!rejected && isValid) {
      output.write(ndjson);
    } else if (/[;,|&]{1}/.test(s.sample)) {

      // Hack to accommodate multiple samples in one line
      // Notice, these will have failed validation above end therefore ends up in the rejected data...
      s.sample.split(/[;,|&]{1}/).forEach(sample => {
        sample = sample.trim().replace(/^_/, '').replace(/_$/, '');
        if (sample != '') {
          const copy = s;
          copy.sample = sample;
          copy = fixSample(copy); // eg. expedition name needs to be prefixed
          if (schema.isValid(copy)) {
            output.write(JSON.stringify(copy)+'\n');
          }

        }

      });

    } else {

      const rejectedSamples=`data/rejected/rejected-samples.ndjson`;
      const stream = fs.createWriteStream(rejectedSamples, {flags: 'a'});
      if (!isValid) {
        s.errors = schema.errors;
      }
      stream.end(JSON.stringify(s)+'\n');

    }

  }
});
