import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';

const files = globSync('src/**/*.tsx');

files.forEach(file => {
  let content = readFileSync(file, 'utf8');
  let originalContent = content;

  // Regex to find src={someVar} and replace with src={typeof someVar === 'string' ? someVar : (someVar as any).src}
  // But we have to be careful not to replace string literals like src="http..." or src={`...`}
  // Match src={identifier}
  content = content.replace(/src=\{([a-zA-Z0-9_]+)\}/g, 'src={typeof $1 === "string" ? $1 : ($1 as any).src}');
  
  // Also fix services.image in maps
  // Match src={svc.image} or similar src={something.something}
  content = content.replace(/src=\{([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)\}/g, (match, p1) => {
    if (p1.endsWith('.src')) return match; // avoid double .src
    return `src={typeof ${p1} === "string" ? ${p1} : (${p1} as any).src}`;
  });

  if (content !== originalContent) {
    writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
