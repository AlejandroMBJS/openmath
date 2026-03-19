import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const source = path.join(repoRoot, "node_modules", "mathjax-full", "es5", "tex-svg-full.js");
const targetDir = path.join(repoRoot, "docs", "public", "mathjax");
const target = path.join(targetDir, "tex-svg-full.js");

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, target);
