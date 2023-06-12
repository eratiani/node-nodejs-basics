import {writeFile, access} from 'node:fs/promises';
import path from 'path';
import { join } from 'node:path';
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const create = async () => {
    const dirPath = join(__dirname, "files");
    const filePath = join(dirPath,"fresh.txt");
    const textContent = "I am fresh and young";
    // Write your code here 
        try {
            await access(filePath.substring(3)).then(()=>{
                throw new Error(`FS operation failed`); 
            })
        } catch (error) {
            if (error.message !==`FS operation failed` ) {
                
                writeFile(filePath.substring(3), textContent);
            }else {
                throw new Error(error.message)
            }
        }

        
   
};

await create();