import { createUnzip } from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filetoToDecompressPath = path.join(__dirname, 'files', 'archive.gz');
    const fileDecompressedPath = path.join(__dirname, 'files', 'fileToCompress.txt');

    const unZip = createUnzip();
    const readStream = fs.createReadStream(filetoToDecompressPath);
    const writeStream = fs.createWriteStream(fileDecompressedPath);

    await pipeline(readStream, unZip, writeStream).catch((err) => {
        console.error(err);
        process.exitCode = 1;
    });
};

await decompress();