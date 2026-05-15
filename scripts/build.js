const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "src"), { recursive: true });

for (const file of ["index.html", "src/styles.css", "src/main.js"]) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

console.log("Static site built in dist/");
