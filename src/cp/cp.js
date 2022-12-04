import { fork } from 'node:child_process';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'script.js');

    fork(filePath, args);

};

await spawnChildProcess(['arg1', 'arg2', 'arg3']);