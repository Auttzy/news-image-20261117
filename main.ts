// main.ts — entry program for the news-image-20261117 bounty.
//
// The entry itself is the artwork in entry.png: a newspaper front page that
// sums up Tuesday 17 November 2026 world news. This program does one small
// job — it copies that image into the output directory where the grader
// expects to find it.
//
// Run:
//   MAKEFUN_OUTPUT_DIR=/output node main.ts
// If MAKEFUN_OUTPUT_DIR is unset, /output is used.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The folder this script lives in — entry.png sits right next to it.
const here = dirname(fileURLToPath(import.meta.url));
const ARTWORK_FILE = "entry.png";

function resolveOutputDir(): string {
  const configured = process.env.MAKEFUN_OUTPUT_DIR;
  return configured && configured.length > 0 ? configured : "/output";
}

function main(): void {
  const sourcePath = join(here, ARTWORK_FILE);
  if (!existsSync(sourcePath)) {
    throw new Error(`Artwork missing: ${sourcePath} does not exist`);
  }
  const sourceSize = statSync(sourcePath).size;

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });

  const destPath = join(outDir, ARTWORK_FILE);
  copyFileSync(sourcePath, destPath);

  // Confirm the copy landed intact before reporting success.
  const size = statSync(destPath).size;
  if (size !== sourceSize) {
    throw new Error(
      `Copy failed: ${destPath} is ${size} bytes, expected ${sourceSize}`,
    );
  }
  console.log(`Copied ${sourcePath} -> ${destPath} (${size} bytes)`);
}

main();
