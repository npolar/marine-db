# Publishing marine biological data from TSV sources

New data may be deposited as a set of CSV files encoded with UTF-8 encoding.

## Events

### Events with inline samples
Use this variant for legacy data without event identifier, but with sample identifiers (sample names).

Start with an empty folder and create a TSV text file named `events.tsv` with one line for each sampling event.
```
time	expedition	gear	samples	type	station	longitude	latitude	depths	depth_bottom	comment
1997-07-12T00:00:00Z	BIODAFF-1997	"Multinet 200 µm"	"97Kb2 MN-1|97Kb2 MN-2|97Kb2 MN-3|97Kb2 MN-4|97Kb2 MN-5"	taxonomy	Kb2	11.74	78.98	10-0|40-10|60-40|120-60|290-120	0
```
A sampling event occurs at the `time` when a `gear` is deployed. Each event may hold 0,1 or many `samples`, taken at certain `depths`.
Notice how '|' is used to separate multple sample identifiers.  

### Taxonomy
Add as many taxonomy files as needed, for example `taxonomy-mesozooplankton.txt`

```
taxon	qualifier	stage	density	unit	op	length	sample
"Themisto abyssorum"			0.33	N/m³			"97Kb2 MN-1"
"Calanus finmarchicus"		AF	4.67	N/m³			"97Kb2 MN-1"
"Calanus finmarchicus"		CIV	33.33	N/m³			"97Kb2 MN-1"
```
