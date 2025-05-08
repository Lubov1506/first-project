import React from "react"
import { useForm } from "react-hook-form"

const FormInput = ({ name, register, error }) => {
  // const { register } = useForm()
  const placeholderStr = `${name[0].toUpperCase()}${name.slice(1)}`

  return (
    <label htmlFor='' className='relative'>
      <input
        {...register(name)}
        placeholder={placeholderStr}
        className='text-teal-950 py-1 shadow-xs  hover:shadow-sm focus:shadow-md transition-all duration-200 placeholder:text-gray-500/35'
      />
      {error?.message && (
        <span className='text-teal-600 text-[10px] absolute top-8 left-0'>{error.message}</span>
      )}
    </label>
  )
}

export default FormInput
