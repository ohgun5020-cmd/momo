import fs from "node:fs/promises";
import path from "node:path";

const [, , backupArg, targetArg] = process.argv;

if (!backupArg || !targetArg) {
  console.error("Usage: npm run restore:file -- <backup-file-path> <target-file-path>");
  process.exit(1);
}

const cwd = process.cwd();
const backupPath = path.resolve(cwd, backupArg);
const targetPath = path.resolve(cwd, targetArg);
const targetDir = path.dirname(targetPath);

let backupStat;
try {
  backupStat = await fs.stat(backupPath);
} catch {
  console.error(`Backup file not found: ${backupArg}`);
  process.exit(1);
}

if (!backupStat.isFile()) {
  console.error(`Backup path is not a file: ${backupArg}`);
  process.exit(1);
}

await fs.mkdir(targetDir, { recursive: true });
await fs.copyFile(backupPath, targetPath);

console.log(`Restored: ${path.relative(cwd, targetPath)}`);
