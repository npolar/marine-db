# Protist biodiversity quantification

## Variables

**Darwin Core** [occurrence](https://dwc.tdwg.org/terms/#occurrence) terms

* [organismQuantity](http://rs.tdwg.org/dwc/terms/organismQuantity): Organisms per litre, given by `individualCount/sampleSizeValue`
* [organismQuantityType](http://rs.tdwg.org/dwc/terms/organismQuantityType): "cells/l"
* [individualCount](http://rs.tdwg.org/dwc/terms/individualCount): The number of organisms found in the sample volume (given by `sampleSizeValue`)
* [sampleSizeValue](http://rs.tdwg.org/dwc/terms/sampleSizeValue): The sample volume used to calculate the organismQuantity (ie. corrected for filtering/subsampling)
* [sampleSizeUnit](http://rs.tdwg.org/dwc/terms/sampleSizeUnit): "l"

**Extensions**
* cellsCounted (N): The actual number of identified cells in the fields of view (`fieldsInCount`)​
* maxFields (K): The maximum number of fields for a microscope under the current magnification
* fieldsInCount (fields): The number of fields used for counting
* microscopeID: String identifying a microscope

## Formulas

`organismQuantity = individualCount/sampleSizeValue`

`individualCount = cellsCounted*(maxFields/fieldsInCount)`

The cells counted is for a lesser volume than the entire sedimentation chamber, since the actual number of fields in the count is less than the maxiumum. Therefore the cells counted are multiplied by the `maxFields/fieldsInCount` ratio to get the number of cells in the entire sedimentation chamber.

## Examples
@todo

Back to [biodiversity].
