# Publishing marine biological data from TSV sources

Authorized users may publish data into the marine-db using TSV (tab-separated text) files.

## Input data

### Events
Start with an empty folder and create a TSV text file named `events.txt` with one line for each gear/sampling event.

```
time	expedition	gear	samples	type	station	longitude	latitude	depths	depth_bottom	comment
1997-07-12T00:00:00Z	BIODAFF-1997	"Multinet 200 µm"	"97Kb2 MN-1|97Kb2 MN-2|97Kb2 MN-3|97Kb2 MN-4|97Kb2 MN-5"	taxonomy	Kb2	11.74	78.98	10-0|40-10|60-40|120-60|290-120	0
```

### Taxonomy
Add as many taxonomy files as needed, for example `taxonomy-mesozooplankton.txt`

```
taxon	qualifier	stage	density	unit	op	length	sample
"Themisto abyssorum"			0.33	N/m³			"97Kb2 MN-1"
"Calanus finmarchicus"		AF	4.67	N/m³			"97Kb2 MN-1"
"Calanus finmarchicus"		CIV	33.33	N/m³			"97Kb2 MN-1"
```
