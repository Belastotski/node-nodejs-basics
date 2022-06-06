import path from 'path';
import { fileURLToPath } from "url";
import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');


export const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let file = path.join(__dirname, "files",'fileToCalculateHashFor.txt');
    
    const hash = createHash('sha256');
    const input = createReadStream(file);
    const hex = input.pipe(hash).digest('hex')
    console.log('hash: ', hex);
    return hex;
};

calculateHash();