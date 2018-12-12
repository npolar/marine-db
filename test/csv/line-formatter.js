import test from "ava";

import {
  objectFromArrays,
  ndjson,
  ndjsonTuple
} from "../../src/csv/line-formatter";

const header1 = [
  "decimalLatitude",
  "expedition",
  "bottomDepthInMeters",
  "sampletype",
  "vessel",
  "station",
  "eventID",
  "materialSampleID",
  "minimumDepthInMeters",
  "decimalLongitude",
  "flowmeterStop",
  "maximumDepthInMeters",
  "programs",
  "eventDate",
  "samplingProtocol",
  "substation",
  "sampletype",
  "samplesubtype",
  "eventRemarks"
];

const datarow1 = [
  "74.35",
  "ICE-BAR 1995",
  "0",
  "Lipids",
  "Lance",
  "Bear Island",
  "acc35cc9-2796-5eb5-adc6-c278d8dae227",
  "ice95A 053",
  "1",
  "20.33",
  "0",
  "10",
  "ICE-BAR",
  "1995-06-11T11:00:00Z",
  "Niskin bottle"
];

const object1 = {
  decimalLatitude: "74.35",
  expedition: "ICE-BAR 1995",
  bottomDepthInMeters: "0",
  vessel: "Lance",
  station: "Bear Island",
  eventID: "acc35cc9-2796-5eb5-adc6-c278d8dae227",
  materialSampleID: "ice95A 053",
  minimumDepthInMeters: "1",
  decimalLongitude: "20.33",
  flowmeterStop: "0",
  maximumDepthInMeters: "10",
  programs: "ICE-BAR",
  eventDate: "1995-06-11T11:00:00Z",
  samplingProtocol: "Niskin bottle"
};

test("objectFromArrays(row, header)", t => {
  const o1 = JSON.parse(JSON.stringify(objectFromArrays(datarow1, header1)));
  t.deepEqual(o1, object1);
});

test("ndjsonTuple", t => {
  const t1 = ndjsonTuple({ row: datarow1 });
  t.is(t1, JSON.stringify(datarow1) + "\n");
});

test("ndjson", t => {
  const n1 = ndjson({ row: datarow1, fields: header1 });
  const o1 = JSON.parse(n1);
  t.deepEqual(o1, object1);
  t.is(n1, n1);
});
