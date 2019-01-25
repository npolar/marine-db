# Biodiversity data preparation guide

## 1. Introduction
Primary biodiversity data are lists, where each line is a record of the amount of a specific organism found at a specific location and time.

This guide shows how to prepare [Darwin Core occurrence]() records for the marine-db.
@todo Refer to TSV=>JSON command.
@todo See also...

## 2. Organism quantity
```json
{ "scientificName":"Calanus hyperboreus", "organismQuantity":4,"organismQuantityType":"ind/m3" …}
{ "scientificName": "Emiliania huxleyi","organismQuantity": 4238.2446, "organismQuantityType": "cells/l" …}
```

### Calculations
**Regular samples**
** organismQuantity = individualCount / sampleSizeValue **
The actual counted number of individual organisms or cells should be provided, if available.
In the simplest case, `organismQuantity = individualCount / sampleSizeValue`

```json
{ "scientificName":"Calanus hyperboreus", "organismQuantity":4,"organismQuantityType":"ind/m3",
  "sampleSizeValue":1000, "sampleSizeUnit": "l", "individualCount":4 …}

{ "scientificName":"Emiliania huxleyi", "organismQuantity":1336.154, "organismQuantityType":"cells/l",
  "individualCount":66.8077, "sampleSizeValue":50, "sampleSizeUnit":"ml"…}
```

**Condensed samples**
Often a number of Niskin bottles are filtered into a smaller volume (e.g. from 32l to 250 ml).
From the condensate a certain volume is sedimented and before organisms are counted.

The quantity of cells in the original volume therefore needs to be calculated by multiplying the counted cells by the the concentration factor.
`organismQuantity [cells/l] = (cellsCounted / sampleVolumeL) * concentrationFactor`

The concentration factor is simply the sedimentation volume divided by the count volume.
`concentrationFactor = sedimentationVolume / countVolume`

```json
{"scientificName":"Gymnodinium", "organismQuantity":2.3439, "organismQuantityType":"cells/l",
  "individualCount":7.5,"sampleSizeValue":32,"sampleSizeUnit":"l"}

{"scientificName":"Gymnodinium", "organismQuantity":2.3439,, "organismQuantityType":"cells/l",
  "individualCount":7.5,"sampleSizeValue":32,"sampleSizeUnit":"l",
  "cellsCounted":1, "countVolumeML":10,"sedimentationVolumeML":100}

**Basis of calculations**
It's possible to also provide the basis of the cell counts abvove, ie. how the `individualCount` (the number of cells in the sedimentation chamber) is calculated.

```json
{ "scientificName":"Emiliania huxleyi", "organismQuantity":1336.153,"organismQuantityType":"cells/l",
  "individualCount":66.808,"sampleSizeValue":50,"sampleSizeUnit":"ml",
  "cellsCounted":1, "fieldsInCount":249,"magnification":60,"maxFields":16635.11 }
{ "scientificName":"Emiliania huxleyi", "organismQuantity":1336.153,"organismQuantityType":"cells/l",
  "individualCount":66.808,"sampleSizeValue":50,"sampleSizeUnit":"ml",
  "cellsCounted":1, "fieldsInCount":249,"magnification":60,"maxFields":16635.11,
  "countVolumeML":50,"sedimentationVolumeML":1000,"concentrationFactor":20 }
```
Here `individualCount = cellsCounted*(maxFields/fieldsInCount)`

## 3. Taxonomy

## 4. Events

## 5. Required fiellds
