import * as transactionsServices from "../services/transactionsServices.js"
import HttpError from "../utils/HttpError.js"

const createTransaction = async (req, res, next) => {
  const transaction = await transactionsServices.createTransaction(req.body)
  res.status(201).json({
    status: 201,
    message: "Transaction created successfully",
    transaction,
  })
}
const getAllTransactions = async (req, res, next) => {
  const transactions = await transactionsServices.getTransactions()

  res.json({
    status: 200,
    message: "Transactions get successfully",
    transactions,
  })
}
const getOneTransaction = async (req, res, next) => {
  const { id: _id } = req.params

  const transaction = await transactionsServices.getOneTransaction({ _id })
  console.log(transaction)

  if (!transaction) {
    throw HttpError(404, `Transaction with id ${_id} not found`)
  }
  res
    .status(200)
    .json({ status: 200, message: "Transaction get successfully", transaction })
}

const deleteTransaction = async (req, res, next) => {
  const { id: _id } = req.params

  const removedTransaction = await transactionsServices.deleteTransaction({
    _id,
  })
  if (!removedTransaction) {
    throw HttpError(404, "Not found")
  }
  res.status(200).json({
    status: 201,
    message: "Transaction was deleted successfully",
    removedTransaction,
  })
}

const updateTransaction = async (req, res, next) => {
  const { id: _id } = req.params

  const updatedTransaction = await transactionsServices.updateTransaction({
    _id,
    data: req.body,
  })

  if (!updatedTransaction) {
    throw HttpError(404, "Not found")
  }
  res.status(201).json({
    status: 201,
    message: "Transaction was updated successfully",
    updatedTransaction,
  })
}

export default {
  createTransaction,
  getAllTransactions,
  getOneTransaction,
  deleteTransaction,
  updateTransaction,
}
