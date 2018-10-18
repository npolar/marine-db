// FIXME @todo depth_to null should not be set to 0!
// Arcex2016,PHT-013,Hornsund-818,77.0171,16.1393,124,19/05/2016 20:40,Niskin bottle,90,,,Phytoplankton taxonomy,Philipp Assmy,
// {"expedition":"Arcex2016","sample":"PHT-013","station":"Hornsund-818","latitude":77.0171,"longitude":16.1393,"depth_bottom":124,"time":"2016-05-19T20:40:00Z","gear":"Niskin bottle","depth_from":90,"depth_to":0,"filtered_volume":0,"sample_type":"Phytoplankton taxonomy","responsible":"Philipp Assmy"}
// cat data/deposit/2016/arcex_2016_samplelog.csv | node --experimental-modules node/sample/samplelog-npolar-preprocess.mjs | grep "PHT-013"

// cat samplelog.csv | node --experimental-modules node/sample/samplelog-npolar-preprocess.mjs
import fs from 'fs';
import readline from 'readline';
import csv from 'csvtojson'

import {event_id} from '../event_id';
import {csvHeaderRegexRemapper as samplelogHeadersRemapper} from '../csv/header-regex-remapper';
import {sampleHacks} from './sampleHacks';
import {fixSample} from './fixSample';
import {rejectSample} from './rejectSample';
import {SampleSchema} from './SampleSchema';

const input = process.stdin;
const output = process.stdout;
const linereader = readline.createInterface({ input });
const schema = new SampleSchema();


async function csvObject(line, options={}) {
  return csv(options).fromString(line).then(rows => rows[0]);
}

async function csvValues(line, options={
  noheader:true,
  output: "csv"
}) {
  return csvObject(line, options);
}

let i = 0;
let j = 0;
let c = 0;
let header;


//const sampleHeaderRegexes = [[/comment/i, 'sampleRemarks']].concat(csvHeaderRegexes);

linereader.on('line', (line) => {
  // @todo Fix CSV parsing
  const bits = line.split(/[,\t]{1}/).map(c => c.trim().replace(/^"/, '').replace(/"$/, ''));

  if (0 === i++) {
    header = samplelogHeadersRemapper(bits);

    // csvValues(line).then(headerValues => {
    //   header = samplelogHeadersRemapper(headerValues);
    //   console.warn('header:', JSON.stringify(header));
    // })



  } else {

    csvObject(line, { headers: header }).then(o => {
      //console.warn('object:', JSON.stringify(o));
    })




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
    if (rejected) {
      console.error("ERROR rejected", JSON.stringify(s));
    }

    if (!s.event && !rejected) {
      try {
        s.event = event_id({ time: s.time, longitude: s.longitude, latitude: s.latitude});
      } catch (e) {
        console.error(JSON.stringify(s));
        console.error(e);
        // continue!
      }
    }

    const isValid = schema.isValid(s);

    if (!rejected && isValid) {
      output.write(ndjson);
    } else if (false && /[;,|&]{1}/.test(s.sample)) {
      // Hack to accommodate multiple samples in one line
      // Notice, these will have failed validation above end therefore ends up in the rejected data...
      s.sample.split(/[;,|&]{1}/).forEach(sample => {
        sample = sample.trim().replace(/^_/, '').replace(/_$/, '');
        if (sample != '') {
          let copy = Object.assign({}, s);
          copy.sample = sample;
          try {
            copy = fixSample(copy);

            if (schema.isValid(copy)) {
              output.write(JSON.stringify(copy)+'\n');
            }
          } catch (e) {
            console.error(e);
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



// async function convertCsv() {
//   return await csvToJson()
//       .fromFile(csv)
//       .then((jsonObj) => {
//           console.log(jsonObj);
//       });
// }
//
// let jsonArray = converCsv();
// console.log("JsonArray: " + jsonArray);
