import { dirname, join } from "path";
import { Worker } from "node:worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const performCalculations = async () => {
  const results = [];
  for (let i = 0; i < cpus().length; i++) {
    results.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(join(__dirname, "worker.js"), {
          workerData: i,
        });
        worker.on("message", (data) => resolve({ status: "resolved", data }));
        worker.on("error", () => resolve({ status: "error", data: null }));
      })
    );
  }

  Promise.all(results).then((value) => console.log(value));
  // Write your code here
};

await performCalculations();
