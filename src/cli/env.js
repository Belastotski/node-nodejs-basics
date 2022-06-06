export const parseEnv = () => {
    new Map(Object.entries(process.env))
    .forEach((value, key) => /^RSS_/.test(key) && console.log(`${key}=${value}`));
};


parseEnv();