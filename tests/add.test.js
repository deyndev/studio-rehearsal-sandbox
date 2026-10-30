import test from "node:test";
import assert from "node:assert/strict";
import { add } from "../src/add.js";
test("add", () => assert.equal(add(2, 3), 5));
test("subtract", async () => {
  const { subtract } = await import("../src/subtract.js");
  assert.equal(subtract(5, 3), 2);
});
