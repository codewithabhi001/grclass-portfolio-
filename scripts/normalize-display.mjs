/**
 * Fourth pass: retire the last ad-hoc `text-[Npx]` values.
 *
 * Two clusters were left after pass 1, both of which needed the scale extended
 * before they could be mapped:
 *
 *  - Display/stat figures (20–56px). Every stat tile on the site had its own
 *    size (22/24/26/28/30/32), and prose sub-headings carried a manual
 *    `md:` step. Both collapse onto the fluid display tokens, which removes the
 *    breakpoint bump entirely — hence the paired-value entries below, which must
 *    be tried before their single-value counterparts.
 *  - Micro text (7.5–11px). Mapped to the new `micro`/`micro-sm` tokens, which
 *    carry no tracking, so any explicit `tracking-*` on the element survives.
 *    9px and 9.5px round UP to 10px; sub-9px body text is not readable.
 *
 * `src/components/ui/` (vendored shadcn) and `src/app/profile/` (print deck with
 * its own deliberate 7.5–10px scale) are excluded.
 *
 * Run: node scripts/normalize-display.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

/** Longest first: paired responsive values before the bare single values. */
const MAP = [
  // Fluid display tokens absorb the manual breakpoint step.
  ["text-[44px] md:text-[56px]", "text-display-xl"],
  ["text-[22px] md:text-[26px]", "text-display-sm"],
  ["text-[20px] md:text-[24px]", "text-display-sm"],
  ["text-[22px] font-extrabold leading-none", "text-display-sm font-extrabold leading-none"],
  ["text-[22px] md:text-[26px] font-extrabold", "text-display-sm font-extrabold"],
  ["sm:text-[26px]", ""],
  ["sm:text-[30px]", ""],
  ["text-[56px]", "text-display-xl"],
  ["text-[44px]", "text-display-xl"],
  ["text-[32px]", "text-display-sm"],
  ["text-[30px]", "text-display-sm"],
  ["text-[28px]", "text-display-sm"],
  ["text-[26px]", "text-display-sm"],
  ["text-[24px]", "text-display-sm"],
  ["text-[22px]", "text-display-sm"],
  ["text-[20px]", "text-title-lg"],
  // Micro text.
  ["md:text-[11px]", "md:text-micro"],
  ["sm:text-[11px]", "sm:text-micro"],
  ["text-[11px]", "text-micro"],
  ["sm:text-[9.5px]", "sm:text-micro-sm"],
  ["text-[9.5px]", "text-micro-sm"],
  ["text-[10px]", "text-micro-sm"],
  ["text-[9px]", "text-micro-sm"],
  ["text-[7.5px]", "text-micro-sm"],
];

const files = execSync("git ls-files src", { encoding: "utf8" })
  .split("\n")
  .map((f) => f.trim())
  .filter((f) => f.endsWith(".tsx"))
  .filter((f) => !f.startsWith("src/components/ui/") && !f.startsWith("src/app/profile/"));

let changed = 0;
for (const file of files) {
  const before = readFileSync(file, "utf8");
  let out = before;
  for (const [from, to] of MAP) {
    // A class token ends at whitespace or a quote — never mid-token. `\b` is
    // wrong here because `-` counts as a word boundary.
    const re = new RegExp(`(?<=^|[\\s"'\`])${from.replace(/[[\]().]/g, "\\$&").replace(/ /g, "\\s+")}(?=[\\s"'\`]|$)`, "g");
    out = out.replace(re, to);
  }
  // Removing a responsive step can leave a double space inside a class string.
  out = out
    .split("\n")
    .map((line) => {
      const indent = line.match(/^[ \t]*/)[0];
      return indent + line.slice(indent.length).replace(/ {2,}/g, " ");
    })
    .join("\n");

  if (out !== before) {
    writeFileSync(file, out);
    changed++;
    console.log("updated", file);
  }
}
console.log(`\n${changed} file(s) updated of ${files.length} scanned.`);
