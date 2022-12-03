import { env } from 'node:process';

const parseEnv = async () => {
    const keys = Object.keys(env);
    const filteredKeys = keys.filter((key) => key.startsWith('RSS_'));

    const result = filteredKeys.reduce((acc, key, index) => {
        if (index === (filteredKeys.length - 1)) {
            acc += `${key}=${env[key]}`;
        } else {
            acc += `${key}=${env[key]}; `;

        }
        return acc;
    }, '');
    console.log(result);
};

await parseEnv();