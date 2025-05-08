import React from "react"
import { Controller } from "react-hook-form"
import Select from "react-select"
import { selectStyles } from "./selectStyles"

const FormSelectInput = ({ name, control, error }) => {
  const selectOptions = {
    category: [
      { value: "food", label: "food" },
      { value: "entertainment", label: "entertainment" },
      { value: "transport", label: "transport" },
      { value: "health", label: "health" },
      { value: "house", label: "house" },
      { value: "animals", label: "animals" },
      { value: "other", label: "other" },
    ],
    type: [
      { value: "income", label: "income" },
      { value: "expense", label: "expense" },
    ],
  }
  const placeholderStr = `${name[0].toUpperCase()}${name.slice(1)}`
  console.log(error)

  return (
    <label className='relative'>
      <Controller
        name={name}
        control={control}
        rules={{ required: `${placeholderStr} is required` }}
        render={({ field }) => (
          <Select
            styles={selectStyles}
            {...field}
            options={selectOptions[name]}
            placeholder={placeholderStr}
            classNamePrefix='react-select'
            onChange={(selectedOption) => field.onChange(selectedOption.value)}
            onBlur={field.onBlur}
            value={
              selectOptions[name].find(
                (option) => option.value === field.value
              ) || null
            }
          />
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

export default FormSelectInput
