/**
 * Second pass of the type normalisation codemod.
 *
 * The scale tokens carry their own line-height, so the leading utilities that
 * used to compensate for arbitrary px sizes are now redundant — and worse,
 * they re-introduce the inconsistency (leading-relaxed, leading-[1.8] and
 * leading-normal were all in use for the same role). This pass:
 *
 *   1. drops a responsive `sm:text-X` when the same unprefixed `text-X` is
 *      already on the element (the first pass created these);
 *   2. drops body leading utilities when a body token supplies the leading;
 *   3. drops heading leading utilities when a display token supplies it.
 *
 * Line-based, which covers every single-line className in this codebase.
 * Run: node scripts/normalize-leading.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const BODY_TOKENS = ["lead", "body-lg", "body", "body-sm", "caption"];
const DISPLAY_TOKENS = ["display-xl", "display-lg", "display-md", "display-sm"];
const BODY_LEADING = /\b(leading-relaxed|leading-normal|leading-\[1\.[5-9]\]|leading-\[1\.8\]|leading-7|leading-6)\b/g;
const DISPLAY_LEADING = /\b(leading-tight|leading-none|leading-snug|leading-\[1\.0[0-9]\]|leading-\[1\.1\]|leading-\[1\.15\])\b/g;

const files = execSync("git ls-files src", { encoding: "utf8" })
  .split("\n")
  .map((f) => f.trim())
  .filter((f) => f.endsWith(".tsx"))
  .filter((f) => !f.startsWith("src/components/ui/") && !f.startsWith("src/app/profile/"));

// `\b` is wrong here: `text-body\b` also matches inside `text-body-sm`,
// because `-` is a word boundary. Tokens must not be followed by `-` or a
// word character.
const END = "(?![-\\w])";
const hasToken = (line, tokens) =>
  tokens.find((t) => new RegExp(`(?<![:\\w-])text-${t}${END}`).test(line));

let changed = 0;
for (const file of files) {
  const before = readFileSync(file, "utf8");
  const out = before
    .split("\n")
    .map((line) => {
      if (!line.includes("text-")) return line;
      let next = line;

      // 1. Redundant responsive duplicates of the same token.
      for (const t of [...BODY_TOKENS, ...DISPLAY_TOKENS, "title", "title-lg", "title-sm"]) {
        if (new RegExp(`(?<![:\\w-])text-${t}${END}`).test(next)) {
          next = next.replace(new RegExp(`\\s+(?:sm|md|lg|xl):text-${t}${END}`, "g"), "");
        }
      }

      // 2/3. Leading now owned by the size token.
      if (hasToken(next, DISPLAY_TOKENS)) next = next.replace(DISPLAY_LEADING, "");
      else if (hasToken(next, BODY_TOKENS)) next = next.replace(BODY_LEADING, "");

      // Collapse the double spaces the removals left behind, without touching
      // the line's own indentation. A stray space inside a class string is
      // harmless, so quotes are left alone rather than risk mangling JSX.
      const indent = next.match(/^[ \t]*/)[0];
      return indent + next.slice(indent.length).replace(/ {2,}/g, " ");
    })
    .join("\n");

  if (out !== before) {
    writeFileSync(file, out);
    changed++;
    console.log("updated", file);
  }
}
console.log(`\n${changed} file(s) updated of ${files.length} scanned.`);
