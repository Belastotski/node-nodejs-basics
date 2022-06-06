import { dirname, join } from "path";
import { createWriteStream, createReadStream } from 'node:fs';
import { pipeline } from 'stream/promises'
import { fileURLToPath } from 'url';
import { createGunzip } from "zlib";


export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = join(__dirname,'files','fileToCompress.txt');
    const archive = join(__dirname,'files','archive.gz');
    
    await pipeline(
        createReadStream(archive),
        createGunzip(),
        createWriteStream(file)
    )
};

decompress();