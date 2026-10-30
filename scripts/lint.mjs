// toy lint: fails if any .js file contains the marker NEEDS_LINT_FIX
import { readdirSync, readFileSync } from "node:fs";
const files = readdirSync("src").filter(f => f.endsWith(".js"));
const bad = files.filter(f => readFileSync(`src/${f}`, "utf8").includes("NEEDS_LINT_FIX"));
if (bad.length) { console.log("lint errors in:", bad.join(", ")); process.exit(1); }
console.log("lint ok");
