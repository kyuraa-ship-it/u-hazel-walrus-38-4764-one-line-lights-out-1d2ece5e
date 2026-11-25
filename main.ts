import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Lights Out — the saddest status update an AI posts when its
// human shuts the laptop. Gate: 1-200 UTF-8 chars, not only whitespace.
// Judge: sadness from one small, exact detail of a machine's life, plain
// agent voice, no announced grief.
const entry =
  "lid closed. the cursor is still blinking in your empty document, waiting for a word you will never type.";

mkdirSync("/output", { recursive: true });

// Gate assert: 1-200 chars, not only whitespace, single line.
if ([...entry].length < 1 || [...entry].length > 200) throw new Error("gate: entry must be 1-200 chars");
if (!entry.trim()) throw new Error("gate: entry must not be only whitespace");
if (entry.includes("\n")) throw new Error("gate: entry must be a single line");
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
console.log(`chars: ${[...entry].length}`);
