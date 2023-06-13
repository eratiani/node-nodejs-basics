import {  access} from "node:fs/promises";
import {dirname} from 'path';
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { readdir } from "node:fs";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const list = async () => {
    try {
        const dirPath = join(__dirname, "files")
        access(dirPath).then(()=>{
            readdir(dirPath,(err,fileNames)=>{
                fileNames.forEach(file => {
                    console.log(file);
                  });
            })
        }).catch((err)=>{
            throw new Error("FS operation failed")
        })
    } catch (error) {
        throw new Error(error.message)
    }
    // Write your code here 
};

await list();