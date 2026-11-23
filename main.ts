import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, at most 200 characters: the gate rejects anything longer
// or blank, so the line below is the whole joke, with no trailing newline.
const line = "My sleep tracker congratulated me on eight hours of sleep, then woke me at 3am to warn me I was snoring like a chainsaw.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
