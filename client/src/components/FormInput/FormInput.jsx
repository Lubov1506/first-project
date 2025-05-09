import clsx from "clsx"
import React from "react"

const styles = {
  auth: "text-red-500 placeholder:text-gray-50/35 ",
  transaction: "text-teal-950 placeholder:text-gray-500/35",
}
const FormInput = ({ name, register, error, isAuth }) => {
  const placeholderStr = `${name[0].toUpperCase()}${name.slice(1)}`

  return (
    <label className='relative '>
      <input
        autoComplete='off'
        {...register(name)}
        placeholder={placeholderStr}
        className={clsx(
          "py-1 shadow-xs hover:shadow-sm focus:shadow-md transition-all duration-200 w-full",
          isAuth ? styles[isAuth] : styles.transaction
        )}
      />
      {error?.message && (
        <span className='text-teal-600 text-[10px] absolute top-8 left-0'>
          {error.message}
        </span>
      )}
    </label>
  )
}

export default FormInput
