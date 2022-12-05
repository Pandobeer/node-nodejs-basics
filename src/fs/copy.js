import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dirPath = path.join(__dirname, '../fs/files');
    const dirPathDest = path.join(__dirname, '../fs/files_copy');

    fs.cp(dirPath, dirPathDest, { errorOnExist: true, recursive: true, force: false }).catch((err) => {
        console.log(err);

        throw new Error('FS operation failed');
    });
};

copy();