import cors from "cors"
import express from "express"
import env from "./utils/env.js"
import path from "node:path"
import transactionsRouter from "./routes/transactionsRouter.js"

const startServer = () => {
  const port = Number(env("PORT", 3000))
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.static(path.resolve("public")))

  app.use("/api/transactions", transactionsRouter)

  return app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}
export default startServer
