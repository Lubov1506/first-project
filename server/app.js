import cors from "cors"
import express from "express"
import env from "./utils/env.js"
import path from "node:path"
import userRoutes from "./routes/userRoutes.js"
import transactionsRoutes from "./routes/transactionsRoutes.js"

const startServer = () => {
  const port = Number(env("PORT", 3000))
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.static(path.resolve("public")))

  app.use("/api/users", userRoutes)
  app.use("/api/transactions", transactionsRoutes)

  return app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}
export default startServer
