# Protist biodiversity quantification

## Variables
See [biodiversity](biodiversity.md) for the basis of how to encode protist biodiversity as **Darwin Core** [occurrences](https://dwc.tdwg.org/terms/#occurrence).

**Occurrence extensions**
* `cellsCounted` (N): The actual number of identified cells in the fields of view (`fieldsInCount`)​
* `maxFields` (K): The maximum number of fields for a microscope under the current magnification
* `fieldsInCount` (fields): The number of fields used for counting
* `microscopeID`: String identifying a microscope

## Formulas

`organismQuantity = individualCount/sampleSizeValue`

`individualCount = cellsCounted*(maxFields/fieldsInCount)`

The cells counted is for a lesser volume than the entire sedimentation chamber, since the actual number of fields in the count is less than the maxiumum. Therefore the cells counted are multiplied by the `maxFields/fieldsInCount` ratio to get the number of cells in the entire sedimentation chamber.
