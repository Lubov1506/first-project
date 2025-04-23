import React from "react"
import clsx from "clsx"

const TransactionItem = (item) => {
  const { _id, name, category, amount, type } = item.item

  return (
    <li className='h-[150px] w-[200px] py-2 px-4 bg-teal-100' key={_id}>
      <h2 className='text-xl font-bold'>{name}</h2>
      <div className='flex justify-between'>
        <p
          className={clsx(
            "text-3xl font-bold",
            (type === "income" ? "text-green-600" : "text-red-600")
          )}
        >
          {amount}
        </p>
        <div className='flex flex-col align-middle'>
          <p>{category}</p>
          <p> {type}</p>
        </div>
      </div>
    </li>
  )
}

export default TransactionItem
