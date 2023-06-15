import { dirname } from "path";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { createWriteStream } from "node:fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const write = async () => {
  const file = createWriteStream(join(__dirname, "files/fileToWrite.txt"), {
    encoding: "utf8",
  });
  process.stdin.pipe(file);

  // Write your code here
};

await write();
