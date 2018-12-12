import test from "ava";

import { escape } from "../../src/csv/escape";

const sep = "$";
const replace = "#";

test("escape", t => {
  t.is(escape("dollar$\nbucks", sep, replace), '"dollar# bucks"');
  t.is(escape("null"), undefined);
  t.is(escape("null"), undefined);
});
