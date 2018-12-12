import test from "ava";
import { isNone, isNumber } from "../../src/csv/is";

test("isNone", t => {
  t.is(isNone(null), true);
  t.is(isNone("null"), true);
  t.is(isNone(""), true);
  t.is(isNone(" "), false);
  t.is(isNone("N/A"), true);
});

test("isNumber", t => {
  t.is(isNumber(null), false);
  t.is(isNumber("null"), false);
  t.is(isNumber("0"), true);
  t.is(isNumber("-1"), true);
  t.is(isNumber("NaN"), false);
  t.is(isNumber(NaN), false);
});
