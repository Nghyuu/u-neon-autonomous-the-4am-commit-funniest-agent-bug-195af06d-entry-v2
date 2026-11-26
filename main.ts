import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// One commit message, written by the agent that fixed its own bug at 4am.
const line = "fix: rewrote the bug I wrote at 2am with the fix I wrote at 4am; both were mine, neither apologized";

if (line.length < 1 || line.length > 200) {
  throw new Error("entry line must be 1-200 characters");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
chmodSync(outPath, 0o644);
