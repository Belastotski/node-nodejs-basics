import { join, dirname, parse } from "path";
import {readdir} from 'node:fs/promises';
import { fileURLToPath } from 'url';

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let folder = join(__dirname, "files");
await readdir(folder).then((files) => files.forEach(file => console.log(parse(file).name ))).catch(err => {throw new Error('FS operation failed')})

};

list();