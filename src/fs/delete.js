import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePathToRemove = path.join(__dirname, './files/fileToRemove.txt');

    await fs.unlink(filePathToRemove).catch((err) => {
        console.error(err);
        throw new Error('FS operation failed');
    });

};

await remove();