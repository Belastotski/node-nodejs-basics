import { dirname, join } from "path";
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';

export const read = async () => {
        
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = join(__dirname,'files','fileToRead.txt');
    createReadStream(file,'utf8').pipe(process.stdout);
};

read();