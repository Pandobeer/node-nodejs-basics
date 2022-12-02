import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const oldPath = path.join(__dirname, '../fs/files/wrongFilename.txt');
    const newPath = path.join(__dirname, '../fs/files/properFilename.md');

    fs.rename(oldPath, newPath).catch((err) => {
        console.log(err);
        throw new Error('FS operation failed');
    });
};

await rename();