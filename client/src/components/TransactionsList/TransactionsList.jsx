import React from "react"
import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionsList = ({transactions}) => {
    console.log(transactions);
    
  return (
    <ul className='grid grid-cols-3 gap-4'>
      {transactions.map((item) => {
        return <TransactionItem item={item} />
      })}
    </ul>
  )
}

export default TransactionsList
