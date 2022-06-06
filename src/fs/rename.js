import { join, dirname } from "path";
import {rename as rn} from 'node:fs/promises';
import { fileURLToPath } from 'url';

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    let path = join(__dirname, "files",'wrongFilename.txt');
    let newPath = join(__dirname, "files",'properFilename.md');

    await rn(path, newPath).catch(err => {throw new Error('FS operation failed')})
    
};

rename();