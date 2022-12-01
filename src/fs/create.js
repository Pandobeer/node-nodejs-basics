import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';



const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' }).catch((err) => {
        console.log(err);
        throw new Error('FS operation failed');
    });
};

await create();