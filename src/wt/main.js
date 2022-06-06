import { Worker } from 'node:worker_threads';
import { dirname, join } from "path";
import { fileURLToPath } from 'url';
import os from 'node:os';



export const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const workerPath = join(__dirname,'worker.js');

    const pool = os.cpus().length;

    function runService(wData) {
        return new Promise((resolve, reject) => {
          const worker = new Worker(workerPath);
          worker.once('message', resolve);
          worker.once('error', reject);
          worker.postMessage(wData);
        })
      }

    const result = Array.from({length: pool}).fill(1);
    const threads = Array.from({length: pool}).fill(2);
    for (let i = 0; i < pool; i++) {
        threads[i] = runService(10+i).then(data => result[i] = { status: 'resolved', data })
        .catch(error => result[i] = { status: 'error', data: null })
    }

    await Promise.all(threads);
    
    return result;
};

console.log(await performCalculations());