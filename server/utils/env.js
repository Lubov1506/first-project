import "dotenv/config";
const env = (name, defaultValue)=>{
    const value = process.env[name]
    if(value) return value
    if(defaultValue) return defaultValue;
    throw new Error(`Missing environment variable ${name}`);
}
export default env;