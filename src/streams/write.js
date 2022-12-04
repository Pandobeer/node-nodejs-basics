import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = fs.createWriteStream(filePath);

    process.stdin.pipe(writeStream);

    writeStream.on('error', (err) => {
        console.error(err);
        process.exitCode = 1;
    });
};

await write();