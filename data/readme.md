# Data

Overvire

Exporting data



Input data for the marine-db is sorted by year in `data/input`.

The `data/master` folder contmarine-db collecND-JSON ofolder contains theInput data


The [`data/input`](data/input) folder contains the data from 1995 to 2009 (4841 samples).

## Data pipeline
Data may be deposited as [TSV](tsv.md) files, or as newline-delimited JSON.

### Events

Events in TSV needs to be converted to ND-JSON before validation and publishing into the Marine Event API.
```
~/npolar/marine-db$ head -n2 data/input/1997/events.tsv | node --experimental-modules node/process-events-tsv.mjs
```
Prettified output
```JSON
{ "time":"1997-07-12T00:00:00Z",
  "expedition":"BIODAFF-1997",
  "gear":"Multinet 200 µm",
  "samples":[
    {"id":"97Kb2 MN-1","depth":[10,0]},
    {"id":"97Kb2 MN-2","depth":[40,10]},
    {"id":"97Kb2 MN-3","depth":[60,40]},
    {"id":"97Kb2 MN-4","depth":[120,60]},
    {"id":"97Kb2 MN-5","depth":[290,120]}
  ],
  "type":"taxonomy",
  "station":"Kb2",
  "longitude":11.74,
  "latitude":78.98,
  "depth_bottom":0,
  "comment":"" }
```

### Taxonomy
```
head -n2 data-example/BIODAFF-1997/taxonomy.tsv | node --experimental-modules node/process-taxonomy.mjs
```
Outputs
```
{"taxon":"Themisto abyssorum","qualifier":null,"stage":null,"density":0.33,"unit":"N/m³","op":null,"length":null,"sample":"97Kb2 MN-1"}
```


## Input

## Publishing
