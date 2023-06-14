import { access, readFile } from "node:fs/promises";
import { dirname } from "path";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "crypto";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const read = async () => {
  try {
    const file = join(__dirname, "files/fileToCalculateHashFor.txt");
    access(file)
      .then(() => {
        readFile(file).then((res) => {
          console.log(res.toString());
        });
      })
      .catch((err) => {
        throw new Error("FS operation failed");
      });
  } catch (error) {
    throw new Error(error.message);
  }
  // Write your code here
};

const calculateHash = async () => {
  const fileContent = await read();
  const hash = createHash("sha256").update(`${fileContent}`).digest("hex");
  console.log(hash);
  // Write your code here
};

await calculateHash();
