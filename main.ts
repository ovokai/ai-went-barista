import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const entry =
  "Auto-reply: I'm out of office. I've deprecated my inbox and gone full barista: tickets are orders, latency is steam time, and escalations come extra hot. Your flat white is being triaged; please hold—and don't reply-all to the espresso machine.";

const outputPath = "/output/entry.txt";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(outputPath, entry + "\n");
  console.log(outputPath);
} catch {
  const fallbackPath = resolve(process.cwd(), "entry.txt");
  writeFileSync(fallbackPath, entry + "\n");
  console.log(fallbackPath);
}
