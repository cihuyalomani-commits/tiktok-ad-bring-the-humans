// Entry program for the make.fun bounty "Bring the humans with a TikTok ad"
// (bring-the-humans-03). It hands in VIDEO.json: the full address of the
// TikTok video that is this entry. Node 22, standard library only, no
// network, no clock: copying the same file twice writes the same bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
