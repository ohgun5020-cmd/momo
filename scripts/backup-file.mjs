import fs from "node:fs/promises";
import path from "node:path";

function getTimestamp() {
  const now = new Date();
  const p = (v) => String(v).padStart(2, "0");
  return `${now.getFullYear()}${p(now.getMonth() + 1)}${p(now.getDate())}-${p(now.getHours())}${p(now.getMinutes())}${p(now.getSeconds())}`;
}

function sanitizeNote(note) {
  return note.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "");
}

const [, , fileArg, ...noteParts] = process.argv;

if (!fileArg) {
  console.error("Usage: npm run backup:file -- <relative-file-path> [note]");
  process.exit(1);
}

const cwd = process.cwd();
const absFile = path.resolve(cwd, fileArg);
const relFile = path.relative(cwd, absFile);

if (relFile.startsWith("..")) {
  console.error("Only files inside this project can be backed up.");
  process.exit(1);
}

let stat;
try {
  stat = await fs.stat(absFile);
} catch {
  console.error(`File not found: ${fileArg}`);
  process.exit(1);
}

if (!stat.isFile()) {
  console.error(`Not a file: ${fileArg}`);
  process.exit(1);
}

const parsed = path.parse(relFile);
const note = sanitizeNote(noteParts.join("-"));
const timestamp = getTimestamp();
const backupName = `${parsed.name}.old.${timestamp}${note ? `.${note}` : ""}${parsed.ext}`;
const backupDir = path.join(cwd, "old", parsed.dir);
const backupPath = path.join(backupDir, backupName);

await fs.mkdir(backupDir, { recursive: true });
await fs.copyFile(absFile, backupPath);

console.log(`File backup created: ${path.relative(cwd, backupPath)}`);
