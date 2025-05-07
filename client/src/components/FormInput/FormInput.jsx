import React from "react"
import { useForm } from "react-hook-form"

const FormInput = ({ name, error }) => {
  const { register } = useForm()
  const placeholderStr = `${name[0].toUpperCase()}${name.slice(1)}`

  return (
    <label htmlFor=''>
      <input {...register("name")} placeholder={placeholderStr} className="text-teal-950 py-1 shadow-xs  hover:shadow-sm focus:shadow-md transition-all duration-200 placeholder:text-gray-500/35" />
      {/* {error && <span>{error}</span>} */}
    </label>
  )
}

export default FormInput
