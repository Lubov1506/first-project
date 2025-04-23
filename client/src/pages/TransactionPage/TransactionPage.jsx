import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectTransactions } from "../../redux/transactions/selections"
import { fetchTransactions } from "../../redux/transactions/.operations"
import TransactionsList from "../../components/TransactionsList/TransactionsList"

const TransactionPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTransactions())
  }, [dispatch])
  const transactions = useSelector(selectTransactions)

  return (
    <div className='flex flex-col items-start px-4 py-4'>
      <h1 className='text-3xl font-bold text-teal-950'>Transactions</h1>
      {transactions.length > 0 && (
        <TransactionsList transactions={transactions} />
      )}
    </div>
  )
}

export default TransactionPage
