import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    await fs.readFile(filePath, { encoding: "utf8" }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
        throw new Error('FS operation failed');
    });
};

await read();