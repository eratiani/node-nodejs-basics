import { access, unlink } from "node:fs/promises";
import { dirname } from "path";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const remove = async () => {
  try {
    const fileToRemove = join(__dirname, "files/fileToRemove.txt");
    access(fileToRemove)
      .then(() => {
        unlink(fileToRemove);
      })
      .catch((err) => {
        throw new Error("FS operation failed");
      });
  } catch (error) {
    throw new Error(error.message);
  }

  // Write your code here
};

await remove();
