import { dirname, join } from "path";
import { createWriteStream, createReadStream } from 'node:fs';
import { pipeline } from 'stream/promises'
import { fileURLToPath } from 'url';
import { createGzip } from "zlib";

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = join(__dirname,'files','fileToCompress.txt');
    const archive = join(__dirname,'files','archive.gz');
    
    await pipeline(
        createReadStream(file),
        createGzip(),
        createWriteStream(archive)
    )

};

compress();