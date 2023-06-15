import { dirname } from "path";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { createReadStream } from "node:fs";
const read = async () => {
  const file = createReadStream(join(__dirname, "files/fileToRead.txt"), {
    encoding: "utf8",
  });
  for await (const chunk of file) process.stdout.write(chunk);

  file.close();
  // Write your code here
};

await read();
