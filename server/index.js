import startServer from "./app.js"
import initMongoDBConnection from "./db/initMongoDBConnection.js"
const bootstrap = async () => {
  await initMongoDBConnection()
  startServer()
}

bootstrap()
