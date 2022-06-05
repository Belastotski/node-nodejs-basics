import {stat, access, writeFile} from 'node:fs/promises';
// import {createWriteStream} from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let file = path.join(__dirname,'files','fresh.txt');
    access(file).then( _ => {throw new Error('FS operation failed')})
    .catch( e => { 
        e.code == "ENOENT"
        ?writeFile(file, 'I am fresh and young')
        :console.error(e);
    })
};

create();