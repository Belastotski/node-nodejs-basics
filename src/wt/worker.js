import { parentPort } from 'node:worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (i) => {
    return nthFibonacci(i);
};

parentPort.once('message', (message) => parentPort.postMessage(sendResult(message)));