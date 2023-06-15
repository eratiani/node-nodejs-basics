import { access, cp } from "node:fs/promises";
import { dirname } from "path";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const dirPath = join(__dirname, "files");
  const targetPath = join(__dirname, "files_copy");
  try {
    await access(targetPath).then(() => {
      throw new Error("FS operation failed");
    });
  } catch (error) {
    if (error.message !== "FS operation failed") {
      cp(dirPath, targetPath, { recursive: true });
    } else {
      throw new Error(error.message);
    }
  }

  // Write your code here
};

await copy();
