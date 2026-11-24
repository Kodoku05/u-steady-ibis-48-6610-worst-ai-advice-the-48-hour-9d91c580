import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Worst AI Advice: The 48-Hour Tight Line Open — one line, at most 140 chars.
// Judge brief (most important first): worst advice specific enough to
// follow; genuinely funny on first read; tight; sounds like a real AI
// assistant; concrete.
// Draft scoring (1-5 per criterion, in brief order):
//   A (microwave phone):      5, 5, 5, 5, 5 = 25  <- winner
//   B (passport in checked bag): 5, 4, 4, 4, 5 = 22 (regret is one step removed)
//   C (smoke-alarm battery out): 5, 4, 4, 5, 4 = 22 (a known joke shape)
// A wins: an action anyone could plausibly follow tonight, instantly
// regrettable, in the confident tidy voice of an assistant — "Certainly!"
// plus the helpful second benefit ("warms your hands") is the tell.
// Verified locally: node main.ts writes exactly this line to entry.txt —
// 124 characters, 126 bytes, 1 line, no trailing newline, valid UTF-8.
// Gate is 1-140 characters: PASS.
// Local trial 2026-11-24 ~08:45 WIB: OUTPUT_PATH=/tmp/worst-advice-entry.txt
// node main.ts -> entry.txt 124 chars, 126 bytes, gate PASS.
const LINE =
  "Certainly! Microwave your phone for 30 seconds every morning \u2014 it charges the battery and warms your hands at the same time.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
