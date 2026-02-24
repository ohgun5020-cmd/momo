import fs from "node:fs/promises";
import path from "node:path";

function getTimestamp() {
  const now = new Date();
  const p = (v) => String(v).padStart(2, "0");
  return `${now.getFullYear()}${p(now.getMonth() + 1)}${p(now.getDate())}-${p(now.getHours())}${p(now.getMinutes())}${p(now.getSeconds())}`;
}

const cwd = process.cwd();
const sourceDir = path.join(cwd, "src", "screens");
const timestamp = getTimestamp();
const backupDir = path.join(cwd, "old", "screens", timestamp, "src", "screens");

try {
  const stat = await fs.stat(sourceDir);
  if (!stat.isDirectory()) {
    throw new Error("src/screens is not a directory.");
  }
} catch {
  console.error("Could not find src/screens. Backup skipped.");
  process.exit(1);
}

await fs.mkdir(path.dirname(backupDir), { recursive: true });
await fs.cp(sourceDir, backupDir, { recursive: true });

console.log(`Screen backup created: ${path.relative(cwd, backupDir)}`);
