import fs from "node:fs";
import path from "node:path";

const repoRoot = "/home/iamx/math/real-analysis-guide";
const source = path.join(repoRoot, "node_modules", "mathjax-full", "es5", "tex-svg-full.js");
const targetDir = path.join(repoRoot, "docs", "public", "mathjax");
const target = path.join(targetDir, "tex-svg-full.js");

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(source, target);
