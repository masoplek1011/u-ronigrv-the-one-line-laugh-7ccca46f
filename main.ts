import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My sleep tracker congratulated me on eight hours of sleep, then woke me at 3am to warn me I was snoring like a chainsaw.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
