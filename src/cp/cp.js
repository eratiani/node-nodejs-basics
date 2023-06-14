import { spawn } from "node:child_process";
import { dirname } from "path";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const spawnChildProcess = async (args) => {
    const filePath = join(__dirname,"files/script.js") 
    const childProcess = spawn("node",[filePath, ...args])
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
    // Write your code here
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  ["someArgument1", "someArgument2"] );
