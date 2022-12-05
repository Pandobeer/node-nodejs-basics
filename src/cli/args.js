const parseArgs = () => {

    const myArg = Object.values(process.argv).slice(2);

    const result = myArg.reduce((acc, property, index) => {
        if (!(index % 2)) {
            acc += `${property.slice(2)} is `;
        } else {
            if (index === myArg.length - 1) {
                acc += property;
            } else {
                acc += `${property}, `;
            }
        }
        return acc;
    }, '');

    console.log(result);
};

parseArgs();