/**
 * One-shot codemod: replace ad-hoc `text-[NNpx]` / `text-[clamp(...)]` values
 * with the type-scale tokens defined in tailwind.config.ts.
 *
 * Run: node scripts/normalize-type.mjs
 * Safe to delete afterwards — it is not part of the build.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const CLAMP = {
  "clamp(40px,5vw,80px)": "display-xl",
  "clamp(30px,7.5vw,56px)": "display-xl",
  "clamp(28px,3.2vw,46px)": "display-lg",
  "clamp(26px,4.5vw,44px)": "display-lg",
  "clamp(24px,3.2vw,40px)": "display-md",
  "clamp(26px,3vw,38px)": "display-md",
  "clamp(24px,2.6vw,38px)": "display-md",
  "clamp(24px,2.6vw,36px)": "display-md",
  "clamp(24px,2.4vw,36px)": "display-md",
  "clamp(22px,2.8vw,36px)": "display-md",
  "clamp(22px,2.6vw,36px)": "display-md",
  "clamp(24px,2.4vw,34px)": "display-sm",
  "clamp(22px,2.4vw,34px)": "display-sm",
  "clamp(22px,2.2vw,32px)": "display-sm",
  "clamp(22px,2.2vw,30px)": "display-sm",
  "clamp(22px,2vw,30px)": "display-sm",
};

const PX = {
  "19px": "title",
  "18px": "title",
  "17px": "body-lg",
  "16.5px": "body-lg",
  "16px": "body-lg",
  "15.5px": "body",
  "15px": "body",
  "14.5px": "body-sm",
  "14px": "body-sm",
  "13.5px": "caption",
  "13px": "caption",
  "12.5px": "xs",
  "12px": "xs",
  "11.5px": "[11px]",
  "10.5px": "[10px]",
};

const files = execSync("git ls-files src", { encoding: "utf8" })
  .split("\n")
  .map((f) => f.trim())
  .filter((f) => f.endsWith(".tsx"))
  .filter((f) => !f.startsWith("src/components/ui/"));

let changed = 0;
for (const file of files) {
  const before = readFileSync(file, "utf8");
  let out = before;

  // `text-[clamp(...)]` — strip whitespace inside the clamp before matching.
  out = out.replace(/text-\[(clamp\([^\]]*\))\]/g, (m, expr) => {
    const key = expr.replace(/\s+/g, "");
    const token = CLAMP[key];
    return token ? `text-${token}` : m;
  });

  // `text-[NNpx]`
  out = out.replace(/text-\[(\d+(?:\.\d+)?px)\]/g, (m, px) => {
    const token = PX[px];
    if (!token) return m;
    return token.startsWith("[") ? `text-${token}` : `text-${token}`;
  });

  // Collapse responsive pairs that now resolve to the same token, e.g.
  // `text-body-sm sm:text-body-sm` -> `text-body-sm`.
  out = out.replace(
    /\btext-([a-z0-9-]+)((?:\s+(?:sm|md|lg|xl):text-[a-z0-9-]+)+)/g,
    (m, base, rest) => {
      const kept = rest
        .trim()
        .split(/\s+/)
        .filter((cls) => cls.split(":")[1] !== `text-${base}`);
      return kept.length ? `text-${base} ${kept.join(" ")}` : `text-${base}`;
    },
  );

  if (out !== before) {
    writeFileSync(file, out);
    changed++;
    console.log("updated", file);
  }
}
console.log(`\n${changed} file(s) updated of ${files.length} scanned.`);
