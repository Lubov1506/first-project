import express from "express"
import transactionsControllers from "../controllers/transactionsControllers.js"

const transactionsRouter = express.Router()
transactionsRouter.get("/", transactionsControllers.getAllTransactions)
transactionsRouter.get('/:id', transactionsControllers.getOneTransaction)

export default transactionsRouter
