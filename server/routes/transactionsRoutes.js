import express from "express"
import transactionsControllers from "../controllers/transactionsControllers.js"

const transactionsRoutes = express.Router()
transactionsRoutes.post("/", transactionsControllers.createTransaction)
transactionsRoutes.get("/", transactionsControllers.getAllTransactions)
transactionsRoutes.get("/:id", transactionsControllers.getOneTransaction)
transactionsRoutes.delete("/:id", transactionsControllers.deleteTransaction)
transactionsRoutes.put("/:id", transactionsControllers.updateTransaction)

export default transactionsRoutes
