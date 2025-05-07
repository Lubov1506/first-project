import React from "react"
import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionsList = ({transactions}) => {
    
  return (
    <ul className='flex gap-2 w-full overflow-x-auto pr-2 scroll-bg-teal scrollbar scrollbar-thumb-teal-400 scrollbar-track-teal-100'>
      {transactions.map((item) => {
        return <TransactionItem key={item._id} item={item} />
      })}
    </ul>
  )
}

export default TransactionsList
