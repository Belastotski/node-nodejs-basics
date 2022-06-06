export const parseArgs = () => {
    console.log(process.argv.slice(2)
                    .reduce((acc, arg , i) => { return acc += i%2? ` is ${arg}\n` : arg.slice(2) }, ''));
};

parseArgs();