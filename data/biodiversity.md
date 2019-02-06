# Biodiversity data preparation guide

## Introduction
This guide shows how to prepare Darwin Core [occurrence](http://rs.tdwg.org/dwc/terms/#occurrence) records for the [marine-db](https://doi.org/10.21334/marine-db).

Occurrence records provides the quantity of organisms relative to a standard volume, area, or mass.
In the marine-db, the quantities are normally provided relative to a volume, either as individuals per m3, or as cells per litre:

```json
{ "scientificName":"Calanus hyperboreus", "organismQuantity":1,"organismQuantityType":"ind/m3", "materialSampleID": "…"}
{ "scientificName": "Emiliania huxleyi","organismQuantity": 123, "organismQuantityType": "cells/l", "materialSampleID": "…"}
```

The marine-db follows the [Best Practices in Publishing Sampling-event data](https://github.com/gbif/ipt/wiki/BestPracticesSamplingEventData).
In this model, result files like occurrence lists depend on a corresponding list of [Event](http://rs.tdwg.org/dwc/terms/#event) records.
Each occurrence **must** refer to its sampling event (via `materialSampleID`/`eventID`).
[@todo: link to npolar's [sampling event data prep guide]. Events are typically compiled in one file per expedition.]

If the "…" above was a real identifier of the seawater or ice core sample, these two lines would be a complete, albeit minimal occurrence record.
Occurrence records may contain any Darwin Core term. For a complete list of terms, consult the [Darwin Core quick reference guide](https://dwc.tdwg.org/terms/).
Also, the marine-db extends Darwin Core with a number of terms to store the actual values used in quantification, these are defined below.

@todo Examples, command line tools [TSV-JSON]

## Taxonomy
The only required property is `scientificName`, but often `lifeStage` and/or `sizeGroup` is used in addition.

```json
{"scientificName":"Calanus finmarchicus","lifeStage":"CV"}
```

* [scientificName](http://rs.tdwg.org/dwc/terms/scientificName): Accepted scientific name of identified taxon
* [identificationQualifier]:
* [lifeStage]
* `sizeGroup`

## Quantity of organisms

**Recommendation**: Provide `organismQuantity` together with the actual number of organisms found (`individualCount`) and the sample volume (`sampleSizeValue` + `sampleSizeUnit`).
If all three variables are provided, the data transformation pipeline will verify that the organism quantity is given by dividing the number of organisms by the volume:
(If `organismQuantity` is not provided, it will be calculated when ingesting data.)

Required
* [organismQuantity](http://rs.tdwg.org/dwc/terms/organismQuantity): Organisms per volume, `organismQuantity = individualCount/sampleSizeValue`
* [organismQuantityType](http://rs.tdwg.org/dwc/terms/organismQuantityType): `cells/l` or `ind/m3`

Recommended
* [individualCount](http://rs.tdwg.org/dwc/terms/individualCount): The number of organisms found in the sample volume (given by `sampleSizeValue`)
* [sampleSizeValue](http://rs.tdwg.org/dwc/terms/sampleSizeValue): The sample volume used to calculate the `organismQuantity` (corrected for filtering/subsampling)
* [sampleSizeUnit](http://rs.tdwg.org/dwc/terms/sampleSizeUnit): `l` or `m3`
* [occurrenceStatus](http://rs.tdwg.org/dwc/terms/occurrenceStatus): `present` (or `absent`)
* `initialSampleVolume`: The volume sampled (or the amount of water filtered when using gears with sieve), the unit must correspond to `sampleSizeUnit`
* `sampleBottleVolumeML`: The volume of the bottle holding the sample (in ml)
* `analysedVolumeML`: The analysed volume (in ml) taken out of the sample bottle.

The sample volume provided in `sampleSizeValue` (in `sampleSizeUnit`) is given by:
`sampleSizeValue = initialVolume ✕ analysedFraction`.

The analysed fraction is defined as
`analysedFraction = analysedVolumeML/sampleBottleVolumeML`

See also [Protist data preparation](protist.md) for additional terms related to counting cells.
