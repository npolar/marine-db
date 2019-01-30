# Biodiversity data preparation guide

### 1. Introduction
This guide shows how to prepare Darwin Core [occurrence](http://rs.tdwg.org/dwc/terms/#occurrence) records for the [marine-db](https://doi.org/10.21334/marine-db).

Examples (in JSON):

```json
{ "scientificName":"Calanus hyperboreus", "organismQuantity":1,"organismQuantityType":"ind/m3" …}
{ "scientificName": "Emiliania huxleyi","organismQuantity": 123.456, "organismQuantityType": "cells/l" …}
```

Note how organism quantities are normalised to a standard volume, either `l` or `m3`.

If possible, also provide the actual number of organisms found in a sample:

```json
{ "scientificName": "Coccolithus pelagicus","individualCount": 1, "sampleSizeValue": 10, "sampleSizeUnit": "ml"}
```

### 2. Variables

**Occurrence records**

Any **Darwin Core** [occurrence](https://dwc.tdwg.org/terms/#occurrence) term is allowed:

* [scientificName](http://rs.tdwg.org/dwc/terms/scientificName): Accepted scientific name of identified taxon
* [organismQuantity](http://rs.tdwg.org/dwc/terms/organismQuantity): Organisms per volume, given by `individualCount/sampleSizeValue`
* [organismQuantityType](http://rs.tdwg.org/dwc/terms/organismQuantityType): `cells/l` or `ind/m3`
* [individualCount](http://rs.tdwg.org/dwc/terms/individualCount): The number of organisms found in the sample volume (given by `sampleSizeValue`)
* [sampleSizeValue](http://rs.tdwg.org/dwc/terms/sampleSizeValue): The sample volume used to calculate the `organismQuantity` (corrected for filtering/subsampling)
* [sampleSizeUnit](http://rs.tdwg.org/dwc/terms/sampleSizeUnit): `l` or `m3`
