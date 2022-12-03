import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const hex = createHash('sha256').update('fileToCalculateHasFor.txt').digest('hex');
    console.log(hex);
};

await calculateHash();