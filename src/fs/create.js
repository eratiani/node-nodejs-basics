import { writeFile, access } from "node:fs/promises";
import { dirname } from "path";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const create = async () => {
  const dirPath = join(__dirname, "files");
  const filePath = join(dirPath, "fresh.txt");
  const textContent = "I am fresh and young";
  // Write your code here
  try {
    await access(filePath).then(() => {
      throw new Error(`FS operation failed`);
    });
  } catch (error) {
    if (error.message !== `FS operation failed`) {
      writeFile(filePath, textContent);
    } else {
      throw new Error(error.message);
    }
  }
};

await create();
