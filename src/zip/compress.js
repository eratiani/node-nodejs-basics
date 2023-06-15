import { dirname, join } from "path";
import { fileURLToPath } from "node:url";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compress = async () => {
  const readStream = createReadStream(
    join(__dirname, "files/fileToCompress.txt")
  );
  const writeStream = createWriteStream(join(__dirname, "files/archive.gz"));
  const gzip = createGzip();
  readStream.pipe(gzip).pipe(writeStream);
  // Write your code here
};

await compress();
