const envObj = process.env;

Object.keys(envObj).forEach(key => {
  console.log(`${key}=${envObj[key]}`);
});