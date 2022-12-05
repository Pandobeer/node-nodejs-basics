import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const fileCompressedPath = path.join(__dirname, 'files', 'archive.gz');

    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream(fileToCompressPath);
    const writeStream = fs.createWriteStream(fileCompressedPath);

    await pipeline(readStream, gzip, writeStream).catch((err) => {
        console.error(err);
        process.exitCode = 1;
    });
};

await compress();