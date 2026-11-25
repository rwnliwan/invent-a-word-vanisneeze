import { mkdirSync, writeFileSync } from "node:fs";

// Invent a Word We Need — entry: one coined word + one-line definition.
// The word names the sneeze that never arrives: everyone has felt it
// build, peak, and then quietly fade away, and English has no word for it.
const entry =
  "vanisneeze - the sneeze that builds, peaks, then vanishes before it comes out.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
