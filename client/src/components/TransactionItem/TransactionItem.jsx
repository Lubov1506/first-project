import React, { useState } from "react"
import clsx from "clsx"
import ButtonTrFn from "../ButtonTrFn/ButtonTrFn"
import { useDispatch } from "react-redux"
import {
  deleteTransaction,
  editTransaction,
} from "../../redux/transactions/operations"
import Modal from "../Modal/Modal"
import AddForm from "../AddForm/AddForm"

const TransactionItem = (item) => {
  const { _id, name, category, amount, type } = item.item

  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const handleDelete = () => {
    dispatch(deleteTransaction(_id))
  }
  const handleEdit = () => {
    setEdit(true)
  }

  return (
    <>
      <li
        className='h-[150px] min-w-[200px] py-2 px-4 bg-teal-50 opacity-80 hover:opacity-100 flex flex-col gap-2'
        key={_id}
      >
        <h2 className='text-xl font-bold'>{name}</h2>
        <div className='flex gap-1.5'>
          <p
            className={clsx(
              "text-3xl font-bold",
              type === "income" ? "text-green-800" : "text-red-800"
            )}
          >
            {amount}
          </p>
          <div className='flex flex-col align-middle'>
            <p className="text-sm className='text-teal-600'">
              Category: <span className='text-bold'>{category}</span>
            </p>
            <p className="text-sm className='text-teal-600'">
              Type: <span className='text-bold'>{type}</span>
            </p>
          </div>
        </div>
        <div className='flex gap-2'>
          <ButtonTrFn title='Edit' onClick={handleEdit} />
          <ButtonTrFn title='Delete' onClick={() => handleDelete(_id)} />
        </div>
      </li>
      {edit && (
        <Modal onClose={() => setEdit(false)} title='Edit transaction'>
          <AddForm
            editedTransaction={item.item}
            id={_id}
            onClose={() => setEdit(false)}
            isEdit={true}
          />
        </Modal>
      )}
    </>
  )
}

export default TransactionItem
