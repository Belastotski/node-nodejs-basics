import { dirname, join } from "path";
import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';



export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = join(__dirname,'files','fileToWrite.txt');
    let writeableStream = createWriteStream(file);
    let rl = createInterface({
    input: process.stdin,
    output: writeableStream,
    prompt: ''
    }).on('line', (input) => {
        rl.output.write(input+'\n');
    });
};

write();