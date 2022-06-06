import {pipeline} from 'stream/promises'
import { Transform } from 'stream';
import { stdin, stdout } from 'process';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, [...chunk.toString()].reverse().join('') + '\r\n');
        },
      });

    await pipeline (
        stdin,
        reverse,
        stdout
    )
};

transform();