import * as transactionsServices from "../services/transactionsServices.js"
import HttpError from "../utils/HttpError.js"
const getAllTransactions = async (req, res, next) => {
  const transactions = await transactionsServices.getTransactions()
  console.log(transactions)

  res.json({
    status: 200,
    message: "Transactions get successfully",
    transactions,
  })
}
const getOneTransaction = async (req, res, next) => {
  const { id:_id } = req.params
  
  const transaction = await transactionsServices.getOneTransaction({ _id })
  console.log(transaction);
  
  if (!transaction) {
    throw HttpError(404, `Transaction with id ${_id} not found`)
  }
  res
    .status(200)
    .json({ status: 200, message: "Transaction get successfully", transaction })
}

export default {
  getAllTransactions,
  getOneTransaction,
}
