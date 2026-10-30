// toy typecheck: fails on `needs_type_fix` marker
import { readdirSync, readFileSync } from "node:fs";
const bad = readdirSync("src").filter(f => readFileSync(`src/${f}`, "utf8").includes("needs_type_fix"));
if (bad.length) { console.log("type errors in:", bad.join(", ")); process.exit(1); }
console.log("typecheck ok");
