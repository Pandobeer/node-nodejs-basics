import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dirPath = path.join(__dirname, 'files');

    await fs.readdir(dirPath).then((files) => files.forEach((file) => {
        console.log(file);
    })).catch((err) => {
        console.error(err);
        throw new Error('FS operation failed');
    });
};

await list();