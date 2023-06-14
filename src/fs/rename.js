import { access } from "node:fs/promises";
import { rename as renameFile } from "node:fs";
import { dirname } from "path";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rename = async () => {
  const oldPath = join(__dirname, "files/wrongFilename.txt");
  const newPath = join(__dirname, "files/properFilename.md");
  const errMsg = "FS operation failed";
  try {
    await access(oldPath).catch((err) => {
      throw new Error(errMsg);
    });
    await access(newPath).then(() => {
      throw new Error(errMsg);
    });
  } catch (error) {
    if (error.message !== errMsg) {
      renameFile(oldPath, newPath, (error) => {
        if (error) {
          console.error("File rename failed:", error);
          return;
        }
      });
    } else {
      throw new Error(error.message);
    }
  }
  // Write your code here
};

await rename();
