import { namedParameterMap } from "./param-helpers";
import { loadModules } from "./load";

// Cmmon parameter handling for CSN and NDJSON transform-command
// Dynamic module loading of --transformers
export async function transformParam(params) {
  const param = namedParameterMap(params);

  if (param.get("transformers")) {
    console.warn(param.get("transformers"));
    let transformerModules = param.get("transformers");
    if (transformerModules) {
      transformerModules = transformerModules.split(",");
      const paths = transformerModules;
      const modules = await loadModules(paths);
      param.set("transformers", modules.map(m => m.default));
    }
  }
  if (param.get("ndjson")) {
    param.set("format", "ndjson");
  }
  if (param.get("tsv")) {
    param.set("format", "tsv");
  }
  if (param.get("csv")) {
    param.set("format", "csv");
  }
  if (/^tsv$/i.test(param.get("format"))) {
    param.set("sep", "\t");
  } else if (/^csv$/i.test(param.get("format"))) {
    param.set("sep", ",");
  }
  if (param.get("keys")) {
    let keys = param
      .get("keys")
      .replace(/[\[\]\"\']/g, "")
      .split(",");
    param.set("keys", keys);
  }

  const p = Object.create(null);
  for (let [k, v] of param) {
    p[k] = v;
  }
  return p;
}
