import Transaction from "../db/models/Transaction.js"

export const getTransactions = async () => {
  const data = await Transaction.find()
  return { data }
}
export const getOneTransaction =  (filter) => Transaction.findOne(filter)
