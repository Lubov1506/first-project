import mongoose from "mongoose"
import env from "../utils/env.js"

const initMongoDBConnection = async () => {
  try {
    // const user = env("MONGO_USER")
    // const password = env("MONGO_PASSWORD")
    // const url = env("MONGO_URI")
    // const name = env("MONGO_NAME")
    // const DB_HOST = `mongodb+srv://${user}:${password}@${url}/${name}?retryWrites=true&w=majority&appName=Cluster0`
    const DB_HOST = env("MONGO_URI")
    await mongoose.connect(DB_HOST)
    console.log("MongoDB connected")
  } catch (err) {
    console.log(`Connection error ${err.message}`)
    process.exit(1)
  }
}
export default initMongoDBConnection
