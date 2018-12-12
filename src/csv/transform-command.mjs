import { transform } from "./transform";
import { transformParam } from "../cli/transform-param";

const params = [
  ["format"],
  ["transformers"],
  ["csv", Boolean],
  ["ndjson", Boolean],
  ["tsv", Boolean]
];

(async () => {
  try {
    const arg = await transformParam(params);
    console.warn(process.argv[1], arg);
    transform(arg);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
