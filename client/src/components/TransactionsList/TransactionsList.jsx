import React from "react"
import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionsList = ({transactions}) => {
    
  return (
    <ul className='grid grid-cols-3 gap-2'>
      {transactions.map((item) => {
        return <TransactionItem key={item._id} item={item} />
      })}
    </ul>
  )
}

export default TransactionsList
