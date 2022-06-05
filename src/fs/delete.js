import { join, dirname } from "path";
import {unlink} from 'node:fs/promises';
import { fileURLToPath } from 'url';


export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    let file = join(__dirname, "files",'fileToRemove.txt');

    await unlink(file).catch(err => {throw new Error('FS operation failed')})
};

remove();