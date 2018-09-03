# marine-db
ECMAScript 2015 source code for standardising, validating, and publishing Norwegian Polar Institute's marine data.

* sampling events
* plankton biodiversity
* biogeochemistry and physical oceanography

## Sampling events
Convert gear sampling metadata to Darwin Core sampling events.

**Samplelog** ([sample schema](web/schema/sample-schema.json))
```json
./bin/samplelog-csv-to-ndjson --no-extra < data/deposit/2017/glacierfront_2017_samplelog.csv | head -n1
{"expedition":"GlacierFront2017","sample":"CTD-001","station":"KpS5","latitude":78.8655,"longitude":12.5542,"depth_bottom":65,"time":"2017-07-25T08:53:00Z","gear":"Ship CTD","depth_from":65,"depth_to":0,"sample_type":"CTD","filtered_volume":0,"responsible":"Olga Pavlova"}```

**Events**
```json
./bin/samplelog-csv-to-events-ndjson --no-extra < data/deposit/2017/glacierfront_2017_samplelog.csv | head -n1
{"id":"8efd31e1-e348-5178-a8a7-5b4fc31ef28a","expedition":"GlacierFront2017","station":"KpS5","time":"2017-07-25T08:53:00Z","longitude":12.5542,"latitude":78.8655,"samples":[{"sample":"CTD-001","station":"KpS5","gear":"Ship CTD","depth_from":65,"depth_to":0,"sample_type":"CTD","filtered_volume":0,"responsible":"Olga Pavlova"}]}```
