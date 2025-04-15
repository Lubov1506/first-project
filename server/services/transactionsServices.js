import Transaction from "../db/models/Transaction.js"

export const createTransaction = (data) => {
  return Transaction.create(data)
}
export const getTransactions = async () => {
  const data = await Transaction.find()
  return { data }
}
export const getOneTransaction = (filter) => Transaction.findOne(filter)

export const deleteTransaction = (filter) => {
  return Transaction.findByIdAndDelete(filter)
}
export const updateTransaction = ({ _id, data }) => {
  return Transaction.findByIdAndUpdate(_id, data, { new: true })
}
