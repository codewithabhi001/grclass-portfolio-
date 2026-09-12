/**
 * Third pass: collapse ad-hoc section padding onto the `.section*` rhythm
 * classes defined in index.css.
 *
 * Only lines that open a `<section>` (or the one templated section className
 * in ServicesPageClient) are touched, so card//button/inner padding is left
 * alone. Longest patterns first so `py-20 md:py-24` is not eaten by `py-20`.
 *
 * Run: node scripts/normalize-rhythm.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const MAP = [
  ["py-16 sm:py-20 md:py-28", "section-lg"],
  ["py-24 md:py-28", "section-lg"],
  ["py-20 md:py-28", "section-lg"],
  ["py-20 md:py-24", "section"],
  ["py-16 md:py-24", "section"],
  ["py-16 md:py-20", "section"],
  ["py-10 md:py-14", "section-sm"],
  ["py-20", "section"],
  ["py-16", "section"],
  ["py-14", "section-sm"],
  ["py-12", "section-sm"],
  ["py-10", "section-sm"],
];

const files = execSync("git ls-files src", { encoding: "utf8" })
  .split("\n")
  .map((f) => f.trim())
  .filter((f) => f.endsWith(".tsx"))
  .filter((f) => !f.startsWith("src/components/ui/") && !f.startsWith("src/app/profile/"));

let changed = 0;
for (const file of files) {
  const before = readFileSync(file, "utf8");
  const out = before
    .split("\n")
    .map((line) => {
      const isSectionLine =
        line.includes("<section") || /className=\{`py-\d/.test(line);
      if (!isSectionLine) return line;
      for (const [from, to] of MAP) {
        const re = new RegExp(`(?<![\\w:-])${from.replace(/ /g, "\\s+")}(?![\\w:-])`);
        if (re.test(line)) return line.replace(re, to);
      }
      return line;
    })
    .join("\n");

  if (out !== before) {
    writeFileSync(file, out);
    changed++;
    console.log("updated", file);
  }
}
console.log(`\n${changed} file(s) updated of ${files.length} scanned.`);
