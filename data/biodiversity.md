# Biodiversity data preparation guide

## Introduction
This guide shows how to prepare Darwin Core [occurrence](http://rs.tdwg.org/dwc/terms/#occurrence) records for the [marine-db](https://doi.org/10.21334/marine-db).

### Occurrence examples

```json
{ "scientificName":"Calanus hyperboreus", "organismQuantity":1,"organismQuantityType":"ind/m3" …}
{ "scientificName": "Emiliania huxleyi","organismQuantity": 123.456, "organismQuantityType": "cells/l" …}
```
Notice how organism quantities are normalised to a standard volume, usually `l` or `m3`.
If possible, also provide the actual number of organisms found in a sample (`individualCount`) and the sample volume (`sampleSizeValue` + `sampleSizeUnit`):

```json
{ "scientificName": "Coccolithus pelagicus","individualCount": 1, "sampleSizeValue": 10, "sampleSizeUnit": "ml" …}
```
### Formulas and calculations
`organismQuantity = individualCount/sampleSizeValue`

If `organismQuantity` is not provided, it will be calculated when ingesting data.

If `organismQuantity` is given, along with `individualCount` and `sampleSizeValue`, the data ingestion will verify the calculation.

See also: [volume] calculations.

### Commands
```sh
$ echo '"scientificName","individualCount","sampleSizeValue","sampleSizeUnit"
"Coccolithus pelagicus",1,10,"l"' | ./bin/dwc-occurrence-csv-transform
```

```json
{ "scientificName":"Coccolithus pelagicus","organismQuantity":1, "organismQuantityType": "cells/l",
  "individualCount":10,"occurrenceStatus":"present","sampleSizeValue":10,"sampleSizeUnit":"l",
  "quantificationRemarks":"calculated organismQuantity","basisOfRecord":"PreservedSpecimen",
  "type":"Occurrence"}
```


### Occurrence records

Any **[Darwin Core](https://dwc.tdwg.org/terms/)** term is allowed, the most important for primary biodiversity records are:

* [scientificName](http://rs.tdwg.org/dwc/terms/scientificName): Accepted scientific name of identified taxon
identificationQualifier
* [organismQuantity](http://rs.tdwg.org/dwc/terms/organismQuantity): Organisms per volume, given by `individualCount/sampleSizeValue`
* [organismQuantityType](http://rs.tdwg.org/dwc/terms/organismQuantityType): `cells/l` or `ind/m3`
* [individualCount](http://rs.tdwg.org/dwc/terms/individualCount): The number of organisms found in the sample volume (given by `sampleSizeValue`)
* [sampleSizeValue](http://rs.tdwg.org/dwc/terms/sampleSizeValue): The sample volume used to calculate the `organismQuantity` (corrected for filtering/subsampling)
* [sampleSizeUnit](http://rs.tdwg.org/dwc/terms/sampleSizeUnit): `l` or `m3`
* [occurrenceStatus]: `present` or `absent`

## Metadata

### Time, space, and sample
It's possible to include the sampling location and time in the occurrence record, but this is not recommended.
Instead use `eventID` and `materialSampleID` to bind the occurrence to a specific space-time location and sample.

## References
* [Darwin Core](https://obis.org/manual/darwincore/)
