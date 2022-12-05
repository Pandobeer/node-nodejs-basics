import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import process from 'node:process';


const transform = async () => {

    const reverseStream = new Transform({
        transform(data, _encoding, callback) {
            const reversedData = `${data.toString().trim().split("").reverse().join("")}\n`;
            this.push(reversedData);
            callback();
        }
    });

    await pipeline(process.stdin, reverseStream, process.stdout).catch((err) => {
        console.error(err);
        process.exitCode = 1;
    });

};

await transform();;