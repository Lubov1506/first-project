import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectTransactions } from "../../redux/transactions/selections"
import { fetchTransactions } from "../../redux/transactions/operations"
import TransactionsList from "../../components/TransactionsList/TransactionsList"
import Modal from "../../components/Modal/Modal"
import AddForm from "../../components/AddForm/AddForm"

const TransactionPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTransactions())
  }, [dispatch])
  const transactions = useSelector(selectTransactions)

  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)

  return (
    <div className='flex flex-col items-start px-4 py-4'>
      <h1 className='text-3xl font-bold text-teal-950'>Transactions</h1>
      {transactions.length > 0 && (
        <TransactionsList transactions={transactions} />
      )}
      <button onClick={toggleModal}>
        New transaction
      </button>
      {isOpen && <Modal onClose={toggleModal}>
        <AddForm onClose={toggleModal}/>
        </Modal>}
    </div>
  )
}

export default TransactionPage
