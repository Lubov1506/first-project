import express from "express"
import transactionsControllers from "../controllers/transactionsControllers.js"

const transactionsRouter = express.Router()
transactionsRouter.post("/", transactionsControllers.createTransaction)
transactionsRouter.get("/", transactionsControllers.getAllTransactions)
transactionsRouter.get("/:id", transactionsControllers.getOneTransaction)
transactionsRouter.delete("/:id", transactionsControllers.deleteTransaction)
transactionsRouter.put("/:id", transactionsControllers.updateTransaction)

export default transactionsRouter
