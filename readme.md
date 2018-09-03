# marine-db
ECMAScript 2015 source code for standardising, validating, and publishing Norwegian Polar Institute's marine data.

* sampling events
* plankton biodiversity
* biogeochemistry and physical oceanography

## Sampling events

**Events ND-JSON** ([event schema](web/schema/event-schema.json))
```json
./bin/samplelog-csv-to-events-ndjson < data/deposit/2017/glacierfront_2017_samplelog.csv | head -n1
{"id":"8efd31e1-e348-5178-a8a7-5b4fc31ef28a","expedition":"GlacierFront2017","station":"KpS5","time":"2017-07-25T08:53:00Z","longitude":12.5542,"latitude":78.8655,"samples":[{"sample":"CTD-001","station":"KpS5","extra":{"sampled_from":"Lance","cast":"","transect":"KpS","gps":"","dist_krone":"825","dist_conway":"13286","dist_kongs":"10071","tow_distance_m":"","deployment_time_days":"","salinity":"","temp":"","ph":"","sampleremarks":""},"gear":"Ship CTD","depth_from":65,"depth_to":0,"sample_type":"CTD","filtered_volume":0,"responsible":"Olga Pavlova"}]}

```

**Samplelog** ([sample schema](web/schema/sample-schema.json))
```json
./bin/samplelog-csv-to-ndjson --no-extra < data/deposit/2017/glacierfront_2017_samplelog.csv | head -n1
{"expedition":"GlacierFront2017","sample":"CTD-001","station":"KpS5","latitude":78.8655,"longitude":12.5542,"depth_bottom":65,"time":"2017-07-25T08:53:00Z","gear":"Ship CTD","depth_from":65,"depth_to":0,"sample_type":"CTD","filtered_volume":0,"responsible":"Olga Pavlova"}
```

**Input data**
```bash
"Expedition","Sample name","Station","Sampled from","Cast","Transect","gps","Latitude (decimals)","Longitude (decimals)","Bottom depth (m)","dist.krone","dist.conway","dist.kongs","Tow distance (m)","Deployment time (days)","Sampling date (UTC)","Gear","Sampling depth (m) from","Sampling depth (m) to","Sample type","Filtration volume (ml)","Salinity","Temp.","pH","Responsible","Comment"
"GlacierFront2017","CTD-001","KpS5","Lance",,"KpS",,78.8655,12.5542,65,825,13286,10071,,,"25/07/2017 08:53","CTD",65,0,"CTD",,,,,"Olga Pavlova",
