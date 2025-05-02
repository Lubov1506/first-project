import React from "react"
import { useForm } from "react-hook-form"

const FormInput = ({ name, error }) => {
  const { register } = useForm()
  const placeholderStr = `${name[0].toUpperCase()}${name.slice(1)}`

  return (
    <label htmlFor=''>
      <input {...register("name")} placeholder={placeholderStr} />
      {/* {error && <span>{error}</span>} */}
    </label>
  )
}

export default FormInput
