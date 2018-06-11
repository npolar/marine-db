// cat samplelog.csv | node --experimental-modules node/sample/samplelog.mjs
import fs from 'fs';
import readline from 'readline';
import {event_id} from '../event_id';

import {csvHeaderRegexRemapper as samplelogHeadersRemapper} from '../csv/csvHeaderRegexRemapper';
import {sampleHacks} from './sampleHacks';
import {fixSample} from './fixSample';
import {rejectSample} from './rejectSample';
import {GearVocab} from '../GearVocab';

const input = process.stdin;
const output = process.stdout;
const linereader = readline.createInterface({ input });
const vocab = new GearVocab();

let i = 0;
let header;

linereader.on('line', (line) => {
  const bits = line.split(/[,\t]{1}/).map(c => c.trim().replace(/^"/, '').replace(/"$/, ''));

  if (0 === i++) {
    header = samplelogHeadersRemapper(bits);
    console.warn('header:', JSON.stringify(header));
  } else {

    let s = {};
    let n = 0;
    header.forEach(k => {
      let v = bits[n++];
      if (!(v === '') && Number(v) == v) {
        v = Number(v);
      }
      s[k] = v;
    });

    s = sampleHacks(s);
    s = fixSample(s);
    if (!s.event) {
      s.event = event_id({ time: s.time, longitude: s.longitude, latitude: s.latitude});
    }
    const ndjson = JSON.stringify(s)+'\n';

    const rejected = rejectSample.some(r => r(s) === true);

    if (rejected) {
      console.warn("ERROR REJECTED", s.sample, rejected);
    }

    if (1 === i) {
      console.warn('first:', JSON.stringify(s));
    }

    if (rejected) {
      const rejectedSamples=`data/rejected/rejected-samples.ndjson`;
      const stream = fs.createWriteStream(rejectedSamples, {flags: 'a'});
      stream.end(JSON.stringify(s)+'\n');
    } else {
      if (/;/.test(s.sample)) {
        console.warn(s.sample.split(';'));
      } else {
        const gearIsValid = vocab.isValid(s);
        if (!gearIsValid) {
          console.error("ERROR invalid gear", s.gear);
        }
        output.write(ndjson);
      }

    }

  }
});
