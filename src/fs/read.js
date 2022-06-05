import { join, dirname, parse } from "path";
import {readFile} from 'node:fs/promises';
import { fileURLToPath } from 'url';


export const read = async () => {
    
    const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let file = join(__dirname, "files",'fileToRead.txt');
await readFile(file, 'utf8')
.then(content => process.stdout.write(content))
.catch(err => {throw new Error('FS operation failed')}); 
};

read();