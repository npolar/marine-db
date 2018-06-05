# marine-db
ECMAScript 2015 source code for standardising, validating, and publishing Norwegian Polar Institute's marine data.

* quantitative plankton occurrence data
* biogeochemistry data
* events (stations) and gear samples

![Marine database collections](data/marine-db-collections.png)

## Install

**Processing tools**
The command line tools require <a href="https://nodejs.org/en/">Node.js</a> (>= v9) and <a href="https://yarnpkg.com/lang/en/">yarn</a>.

```
mkdir -p ~/npolar && cd ~/npolar
git clone https://github.com/npolar/marine-db
cd marine-db
yarn
```

## Processing
**Create master**
```
cd ~/npolar/marine-db
./bin/create-master
```
This command converts input data in `data/input` and `data/deposit` into [ND-JSON](http://ndjson.org/) in `data/master`.

The processing aims at improving the overall data quality, by normalising and schema validation.

Data with unrecognised scientific names, unknown gear, invalid dates, etc. are rejected.
https://github.com/tdwg/dwc-qa/wiki/Controlled-Vocabularies
https://github.com/gbif/dwc-api/blob/master/src/main/java/org/gbif/dwc/terms/DwcTerm.java

All schema validation errors are logged, see `data/log`;

Traceability => taxonVerbatim
