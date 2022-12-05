import os from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const performCalculations = async () => {
    const cores = os.cpus();
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'worker.js');
    const NUM = 10;

    const result = await Promise.allSettled(cores.map((_core, index) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(filePath, {
                workerData: NUM + index,
            });

            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        });
    }));

    const updatedResult = result.map((item) => ({
        status: item.status === 'fulfilled' ? 'resolved' : 'error',
        data: item.status === 'fulfilled' ? item.value : null
    }));

    console.log(updatedResult);
};

await performCalculations();