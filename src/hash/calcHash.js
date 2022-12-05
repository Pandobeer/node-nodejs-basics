import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        const hash = createHash('sha256').update(filePath).digest('hex');
        console.log(hash);
    } catch (err) {
        console.error(err);
    }

};

await calculateHash();